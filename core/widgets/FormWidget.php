<?php
/**
 * @copyright (c) KandaFramework
 * @access public
 * 
 */
namespace core\widgets;

class FormWidget extends \core\app\Controller {

    /**
     *
     * @var objct
     */
    private static $model;
    private static $labels = [];
    private static $rules = [];
    private static $className = '';
    private static $script = '';
    private static $style = '';
    private static $classInput = '';
    private static $classFile = '';
    private static $classTextarea = '';
    private static $classSelect = '';
    private static $validade_rules = '';
    private static $validade_message = '';
    private static $idForm = 'Validade';
    private static $ajax = '';


    public function __construct() {
        self::required();
    }
    
    public static function widget($model, $param = []) {
        /* Chamada no namespace */
        self::$model = $model;
        
        $class = explode("\\", get_class($model));
               
        self::$className = $class[3];
                      

        if (isset($param['style'])) {

            $styleClass = new $param['style'];
            self::$style = $styleClass;
            self::$classInput = $styleClass->classInput;
            self::$classFile = $styleClass->classFile;
            self::$classTextarea = $styleClass->classTextarea;
            self::$classSelect = $styleClass->classSelect;
        }
        
        if(isset($param['id']))
            self::$idForm = $param['id'];        
        
        if(isset($param['ajax']))
            self::$ajax = $param['ajax'];
        
        if (method_exists($model, 'rules')) {
            self::$rules = $model::rules();
        }

        if (method_exists($model, 'attributeLabels'))
            self::$labels = $model::attributeLabels();
              
        return new FormWidget();
    }

    private static function required() {
                           
        $message = 'Obrigátorio';

        foreach (self::$rules as $key => $rules) {
                    
            if(is_array($rules[0])){
                
                if($rules[1]=='required'){
                    self::CreateValidade($rules[0]);
                } 
                
            }elseif ( isset($rules[2]) && $rules[2] == "required" || isset($rules[1]) && $rules[1] == 'file') {
                
                if(isset($rules['message']))
                        $messages = $rules['message'];
                    
                
                switch ($rules[1]){
                    case 'varchar':
                        
                    self::$validade_rules .= "'" . self::$className . "[$rules[0]]':'required',";
                    self::$validade_message .= "'" . self::$className . "[$rules[0]]':{required:'$messages'},";    
                    
                    break;
                    case 'integer':
                    case 'float':
                        
                    self::$validade_rules    .= "'" . self::$className . "[$rules[0]]':{required: true,number: true},";    
                    self::$validade_message .= "'" . self::$className . "[$rules[0]]':{required:'$messages',number:'{$rules['error']}'},"; 
                        
                    break;
                    case 'email':
                    
                    self::$validade_rules    .= "'" . self::$className . "[$rules[0]]':{required: true,email: true},";    
                    self::$validade_message .= "'" . self::$className . "[$rules[0]]':{required:'$messages',email:'{$rules['error']}'},";     
                        
                    break;
                    case 'file':
                        $rule = 'false';
                      if(isset($rules[2]) && $rules[2] == 'required')
                          $rule = 'true';
                      
                       self::$validade_rules    .= "'" . self::$className . "[$rules[0]]':{required: $rule,extension:\"{$rules['extension']}\"},";    
                       self::$validade_message .= "'" . self::$className . "[$rules[0]]':{required:'$messages',extension:'{$rules['error']}'},";        
                    
                      
                      
                    break;
                
                }               
            }
        }
        
        self::CreateJsFile(self::$validade_rules,self::$validade_message,self::$idForm);
                
    }

    private static function CreateValidade($rules){
     
        $mensagem = 'Obrigatório.';
        
        foreach ($rules as $key => $name){
                            
            self::$validade_rules .= "'" . self::$className . "[$name]':'required',";
            self::$validade_message .= "'" . self::$className . "[$name]':{required:'$mensagem'},";    
            
        }
                            
    }

    private static function CreateJsFile($rules,$messages,$id){
               
        $jquery = Kanda_CORE.'/widgets/assets/js/jquery-v1.11.js';
        $jquery_validade = Kanda_CORE.'/widgets/assets/js/jquery.validate.min.js';
        $additional_methods = Kanda_CORE.'/widgets/assets/js/additional-methods.min.js';
        
        $ajax ='';
        if(!empty(self::$ajax)){         
        $succes =  self::$ajax['success'];
        $ajax =  "submitHandler: function( form ){ var dados = $( form ).serialize(); $.ajax({type: '".self::$ajax['type']."',dataType:'".self::$ajax['dataType']."',url: '".self::$ajax['url']."',data: dados,success: function( data ){".$succes('data')."}})  }";
        }
        
        echo "<script>".  file_get_contents($jquery)."</script>";
        echo "<script>".  file_get_contents($jquery_validade)."</script>";
        echo "<script>".  file_get_contents($additional_methods)."</script>";
        
        echo "<script>$('#$id').validate({rules:{ {$rules}},messages:{{$messages}},$ajax});</script>";
        
        
    }


    /**
     * 
     * @param string $column
     * @param array  $html
     * @param string $type
     */
    public function textFieldGroup($column, $html = [], $type = 'text') {

        $tag = "<input type=\"$type\" name=\"" . self::$className . "[$column]\" {$this->htmlOptions($html)} id=\"$column\" value=\"" . self::$model->$column . "\" class='" . self::$classInput . "'>";

        if (self::$style) {
            return self::$style->grid($column, $tag, self::$labels[$column]);
        } else
            return '<label>' . self::$labels[$column] . ' </label>' . $tag;
    }

    public function fileFieldGroup($column, $html = []) {


        $tag = "<input type=\"file\" id=\"$column\" name=\"" . self::$className . "[$column]\" {$this->htmlOptions($html)} class='" . self::$classFile . "'>";

        if (self::$style) {
            return self::$style->grid($column, $tag, self::$labels[$column]);
        } else
            return '<label>' . self::$labels[$column] . ': </label>' . $tag;
    }

    public function textareaFildGroup($column, $html = []) {

        $tag = "<textarea  name=\"" . self::$className . "[$column]\" {$this->htmlOptions($html)} id=\"$column\"  class='" . self::$classTextarea . "'>" . self::$model->$column . "</textarea>";

        if (self::$style) {
            return self::$style->grid($column, $tag, self::$labels[$column]);
        } else
            return '<label>' . self::$labels[$column] . ': </label>' . $tag;
    }

    /**
     * 
     * @param string $column Nome da Coluna
     * @param string/int  $selected Valor a ser selecionado
     * @param array  $options Valores a ser criado.<br/>Exemplo:<code>[1=>'Sim',2=>'Não']</code><br/>
     * @param array  $html Valores html que serar passado no <code><select></select></code>
     */
    public function dropDownListGroup($column, $selected = '', $options = [], $html = []) {

        $tag = "<select id=\"$column\" class='" . self::$classSelect . "' {$this->htmlOptions($html)} name=\"" . self::$className . "[$column]\">
                                    {$this->createOptions($options, $selected)}
                                </select>";

        if (self::$style) {
            return self::$style->grid($column, $tag, self::$labels[$column]);
        } else
            return '<label>' . self::$labels[$column] . ': </label>' . $tag;
    }

    /**
     * 
     * @param array $options
     * @return string
     */
    public function createOptions($options = [], $selected) {

        $op = '<option  value="">Selecione</option>';
        
        foreach ($options as $value => $title) {
            $sel = '';
            if ($selected == $value)
                $sel = 'selected';

            $op .= "<option {$sel} value='$value'>" . $title . "</option>";
        }
        return $op;
    }

}