﻿// Ion.RangeSlider
// version 1.8.2
// https://github.com/IonDen/ion.rangeSlider
(function(c,X,ea,S){var Y=0,O=function(){var c=S.userAgent,a=/msie\s\d+/i;return 0<c.search(a)&&(c=a.exec(c).toString(),c=c.split(" ")[1],9>c)?!0:!1}(),H;try{X.createEvent("TouchEvent"),H=!0}catch(ga){H=!1}var N={init:function(A){return this.each(function(){var a=c.extend({min:10,max:100,from:null,to:null,type:"single",step:1,prefix:"",postfix:"",hasGrid:!1,hideMinMax:!1,hideFromTo:!1,prettify:!0,onChange:null,onLoad:null,onFinish:null},A),d=c(this),u=this;if(!d.data("isActive")){d.data("isActive",
!0);this.pluginCount=Y+=1;d.prop("value")&&(a.min=parseInt(d.prop("value").split(";")[0],10),a.max=parseInt(d.prop("value").split(";")[1],10));"number"!==typeof a.from&&(a.from=a.min);"number"!==typeof a.to&&(a.to=a.max);"number"===typeof d.data("from")&&(a.from=parseFloat(d.data("from")));"number"===typeof d.data("to")&&(a.to=parseFloat(d.data("to")));d.data("step")&&(a.step=parseFloat(d.data("step")));d.data("type")&&(a.type=d.data("type"));d.data("prefix")&&(a.prefix=d.data("prefix"));d.data("postfix")&&
(a.postfix=d.data("postfix"));d.data("hasgrid")&&(a.hasGrid=d.data("hasgrid"));d.data("hideminmax")&&(a.hideMinMax=d.data("hideminmax"));d.data("hidefromto")&&(a.hideFromTo=d.data("hidefromto"));d.data("prettify")&&(a.prettify=d.data("prettify"));a.from<a.min&&(a.from=a.min);a.to>a.max&&(a.to=a.max);"double"===a.type&&(a.from>a.to&&(a.from=a.to),a.to<a.from&&(a.to=a.from));var v=function(b){b=b.toString();a.prettify&&(b=b.replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g,"$1 "));return b},N='<span class="irs" id="irs-'+
this.pluginCount+'"></span>';d[0].style.display="none";d.before(N);var w=c("#irs-"+this.pluginCount),C=c(X.body),I=c(ea),l,D,E,x,y,q,r,e,m,s,T,Z,p=!1,t=!1,P=!0,g={},U=0,J=0,K=0,k=0,B=0,L=0,V=0,Q=0,R=0,$=0,n=0;parseInt(a.step,10)!==parseFloat(a.step)&&(n=a.step.toString().split(".")[1],n=Math.pow(10,n.length));this.updateData=function(b){P=!0;a=c.extend(a,b);w.find("*").off();I.off("mouseup.irs"+u.pluginCount);C.off("mouseup.irs"+u.pluginCount);C.off("mousemove.irs"+u.pluginCount);w.html("");aa()};
this.removeSlider=function(){w.find("*").off();I.off("mouseup.irs"+u.pluginCount);C.off("mouseup.irs"+u.pluginCount);C.off("mousemove.irs"+u.pluginCount);w.html("").remove();d.data("isActive",!1);d.show()};var aa=function(){w.html('<span class="irs"><span class="irs-line"><span class="irs-line-left"></span><span class="irs-line-mid"></span><span class="irs-line-right"></span></span><span class="irs-min">0</span><span class="irs-max">1</span><span class="irs-from">0</span><span class="irs-to">0</span><span class="irs-single">0</span></span><span class="irs-grid"></span>');
l=w.find(".irs");D=l.find(".irs-min");E=l.find(".irs-max");x=l.find(".irs-from");y=l.find(".irs-to");q=l.find(".irs-single");Z=w.find(".irs-grid");a.hideMinMax&&(D[0].style.display="none",E[0].style.display="none",K=J=0);a.hideFromTo&&(x[0].style.display="none",y[0].style.display="none",q[0].style.display="none");a.hideMinMax||(D.html(a.prefix+v(a.min)+a.postfix),E.html(a.prefix+v(a.max)+a.postfix),J=D.outerWidth(),K=E.outerWidth());if("single"===a.type){if(l.append('<span class="irs-slider single"></span>'),
r=l.find(".single"),r.on("mousedown",function(a){a.preventDefault();a.stopPropagation();F(a,c(this),null);t=p=!0;O&&c("*").prop("unselectable",!0)}),H)r.on("touchstart",function(a){a.preventDefault();a.stopPropagation();F(a.originalEvent.touches[0],c(this),null);t=p=!0})}else"double"===a.type&&(l.append('<span class="irs-diapason"></span><span class="irs-slider from"></span><span class="irs-slider to"></span>'),e=l.find(".from"),m=l.find(".to"),T=l.find(".irs-diapason"),M(),e.on("mousedown",function(a){a.preventDefault();
a.stopPropagation();c(this).addClass("last");m.removeClass("last");F(a,c(this),"from");t=p=!0;O&&c("*").prop("unselectable",!0)}),m.on("mousedown",function(a){a.preventDefault();a.stopPropagation();c(this).addClass("last");e.removeClass("last");F(a,c(this),"to");t=p=!0;O&&c("*").prop("unselectable",!0)}),H&&(e.on("touchstart",function(a){a.preventDefault();a.stopPropagation();c(this).addClass("last");m.removeClass("last");F(a.originalEvent.touches[0],c(this),"from");t=p=!0}),m.on("touchstart",function(a){a.preventDefault();
a.stopPropagation();c(this).addClass("last");e.removeClass("last");F(a.originalEvent.touches[0],c(this),"to");t=p=!0})),a.to===a.max&&e.addClass("last"));var b=function(){p&&(p=t=!1,s.removeAttr("id"),s=null,"double"===a.type&&M(),W(),O&&c("*").prop("unselectable",!1))};C.on("mouseup.irs"+u.pluginCount,function(){b()});I.on("mouseup.irs"+u.pluginCount,function(){b()});C.on("mousemove.irs"+u.pluginCount,function(a){p&&(U=a.pageX,ba())});H&&(I.on("touchend",function(){p&&(p=t=!1,s.removeAttr("id"),
s=null,"double"===a.type&&M(),W())}),I.on("touchmove",function(a){p&&(U=a.originalEvent.touches[0].pageX,ba())}));ca();S();a.hasGrid&&fa()},ca=function(){k=l.width();L=r?r.width():e.width();B=k-L},F=function(b,f,c){ca();P=!1;s=f;s.attr("id","irs-active-slider");f=s.offset().left;$=f+(b.pageX-f)-s.position().left;"single"===a.type?V=l.width()-L:"double"===a.type&&("from"===c?(Q=0,R=parseInt(m.css("left"),10)):(Q=parseInt(e.css("left"),10),R=l.width()-L))},M=function(){var a=e.width(),f=c.data(e[0],
"x")||parseInt(e[0].style.left,10)||e.position().left,G=(c.data(m[0],"x")||parseInt(m[0].style.left,10)||m.position().left)-f;T[0].style.left=f+a/2+"px";T[0].style.width=G+"px"},ba=function(){var b=U-$;"single"===a.type?(0>b&&(b=0),b>V&&(b=V)):"double"===a.type&&(b<Q&&(b=Q),b>R&&(b=R),M());c.data(s[0],"x",b);W();b=Math.round(b);s[0].style.left=b+"px"},W=function(){var b={fromNumber:0,toNumber:0,fromPers:0,toPers:0,fromX:0,toX:0},f=a.max-a.min,G;"single"===a.type?(b.fromX=c.data(r[0],"x")||parseInt(r[0].style.left,
10)||r.position().left,b.fromPers=b.fromX/B*100,G=f/100*b.fromPers+parseInt(a.min,10),b.fromNumber=Math.round(G/a.step)*a.step,n&&(b.fromNumber=parseInt(b.fromNumber*n,10)/n)):"double"===a.type&&(b.fromX=c.data(e[0],"x")||parseInt(e[0].style.left,10)||e.position().left,b.fromPers=b.fromX/B*100,G=f/100*b.fromPers+parseInt(a.min,10),b.fromNumber=Math.round(G/a.step)*a.step,b.toX=c.data(m[0],"x")||parseInt(m[0].style.left,10)||m.position().left,b.toPers=b.toX/B*100,f=f/100*b.toPers+parseInt(a.min,10),
b.toNumber=Math.round(f/a.step)*a.step,n&&(b.fromNumber=parseInt(b.fromNumber*n,10)/n,b.toNumber=parseInt(b.toNumber*n,10)/n));g=b;da()},S=function(){var b={fromNumber:a.from,toNumber:a.to,fromPers:0,toPers:0,fromX:0,fromX_pure:0,toX:0,toX_pure:0},f=a.max-a.min;"single"===a.type?(b.fromPers=(b.fromNumber-a.min)/f*100,b.fromX_pure=B/100*b.fromPers,b.fromX=Math.round(b.fromX_pure),r[0].style.left=b.fromX+"px",c.data(r[0],"x",b.fromX_pure)):"double"===a.type&&(b.fromPers=(b.fromNumber-a.min)/f*100,b.fromX_pure=
B/100*b.fromPers,b.fromX=Math.round(b.fromX_pure),e[0].style.left=b.fromX+"px",c.data(e[0],"x",b.fromX_pure),b.toPers=(b.toNumber-a.min)/f*100,b.toX_pure=B/100*b.toPers,b.toX=Math.round(b.toX_pure),m[0].style.left=b.toX+"px",c.data(m[0],"x",b.toX_pure),M());g=b;da()},da=function(){var b,f,c,z,e,h;h=L/2;"single"===a.type?(a.hideText||(x[0].style.display="none",y[0].style.display="none",c=a.prefix+v(g.fromNumber)+a.postfix,q.html(c),e=q.outerWidth(),h=g.fromX-e/2+h,0>h&&(h=0),h>k-e&&(h=k-e),q[0].style.left=
h+"px",a.hideMinMax||a.hideFromTo||(D[0].style.display=h<J?"none":"block",E[0].style.display=h+e>k-K?"none":"block")),d.attr("value",parseInt(g.fromNumber,10))):"double"===a.type&&(a.hideText||(b=a.prefix+v(g.fromNumber)+a.postfix,f=a.prefix+v(g.toNumber)+a.postfix,c=g.fromNumber!==g.toNumber?a.prefix+v(g.fromNumber)+" \u2014 "+a.prefix+v(g.toNumber)+a.postfix:a.prefix+v(g.fromNumber)+a.postfix,x.html(b),y.html(f),q.html(c),b=x.outerWidth(),f=g.fromX-b/2+h,0>f&&(f=0),f>k-b&&(f=k-b),x[0].style.left=
f+"px",c=y.outerWidth(),z=g.toX-c/2+h,0>z&&(z=0),z>k-c&&(z=k-c),y[0].style.left=z+"px",e=q.outerWidth(),h=g.fromX+(g.toX-g.fromX)/2-e/2+h,0>h&&(h=0),h>k-e&&(h=k-e),q[0].style.left=h+"px",f+b<z?(q[0].style.display="none",x[0].style.display="block",y[0].style.display="block"):(q[0].style.display="block",x[0].style.display="none",y[0].style.display="none"),a.hideMinMax||a.hideFromTo||(D[0].style.display=h<J||f<J?"none":"block",E[0].style.display=h+e>k-K||z+c>k-K?"none":"block")),d.attr("value",parseInt(g.fromNumber,
10)+";"+parseInt(g.toNumber,10)));"function"===typeof a.onChange&&a.onChange.call(this,g);"function"!==typeof a.onFinish||t||P||a.onFinish.call(this,g);"function"===typeof a.onLoad&&!t&&P&&a.onLoad.call(this,g)},fa=function(){w.addClass("irs-with-grid");var b,c="",d=0,d=0,e="";for(b=0;20>=b;b+=1)d=Math.floor(k/20*b),d>=k&&(d=k-1),e+='<span class="irs-grid-pol small" style="left: '+d+'px;"></span>';for(b=0;4>=b;b+=1)d=Math.floor(k/4*b),d>=k&&(d=k-1),e+='<span class="irs-grid-pol" style="left: '+d+
'px;"></span>',n?(c=a.min+(a.max-a.min)/4*b,c=c/a.step*a.step,c=parseInt(c*n,10)/n):(c=Math.round(a.min+(a.max-a.min)/4*b),c=Math.round(c/a.step)*a.step,c=v(c)),0===b?e+='<span class="irs-grid-text" style="left: '+d+'px; text-align: left;">'+c+"</span>":4===b?(d-=100,e+='<span class="irs-grid-text" style="left: '+d+'px; text-align: right;">'+c+"</span>"):(d-=50,e+='<span class="irs-grid-text" style="left: '+d+'px;">'+c+"</span>");Z.html(e)};aa()}})},update:function(c){return this.each(function(){this.updateData(c)})},
remove:function(){return this.each(function(){this.removeSlider()})}};c.fn.ionRangeSlider=function(A){if(N[A])return N[A].apply(this,Array.prototype.slice.call(arguments,1));if("object"!==typeof A&&A)c.error("Method "+A+" does not exist for jQuery.ionRangeSlider");else return N.init.apply(this,arguments)}})(jQuery,document,window,navigator);