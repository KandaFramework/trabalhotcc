<?php

function Autoload($class) {

    $class = WWW_ROOT . DS . str_replace('\\', DS, $class) . '.php';

    if (!file_exists($class))
        throw new Exception("File path $class not found.");

    require_once( $class );
}

spl_autoload_register('Autoload');
