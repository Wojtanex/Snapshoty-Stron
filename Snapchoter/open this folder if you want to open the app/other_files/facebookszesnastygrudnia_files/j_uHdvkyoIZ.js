var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

;/*FB_PKG_DELIM*/

__d("camelize",[],(function(a,b,c,d,e,f){var g=/-(.)/g;function a(a){return a.replace(g,function(a,b){return b.toUpperCase()})}f["default"]=a}),66);
__d("getOpacityStyleName",[],(function(a,b,c,d,e,f){var g=!1,h=null;function a(){if(!g){if(document.body&&"opacity"in document.body.style)h="opacity";else{var a=document.createElement("div");a.style.filter="alpha(opacity=100)";a.style.filter&&(h="filter")}g=!0}return h}f["default"]=a}),66);
__d("hyphenate",[],(function(a,b,c,d,e,f){var g=/([A-Z])/g;function a(a){return a.replace(g,"-$1").toLowerCase()}f["default"]=a}),66);
__d("getStyleProperty",["camelize","hyphenate"],(function(a,b,c,d,e,f,g){function h(a){return a==null?"":String(a)}function a(a,b){var d;if(window.getComputedStyle){d=window.getComputedStyle(a,null);if(d)return h(d.getPropertyValue(c("hyphenate")(b)))}if(document.defaultView&&document.defaultView.getComputedStyle){d=document.defaultView.getComputedStyle(a,null);if(d)return h(d.getPropertyValue(c("hyphenate")(b)));if(b==="display")return"none"}return a.currentStyle?b==="float"?h(a.currentStyle.cssFloat||a.currentStyle.styleFloat):h(a.currentStyle[c("camelize")(b)]):h(a.style&&a.style[c("camelize")(b)])}g["default"]=a}),98);
__d("StyleCore",["invariant","camelize","containsNode","err","getOpacityStyleName","getStyleProperty","hyphenate"],(function(a,b,c,d,e,f,g,h){function i(a,b){a=o.get(a,b);return a==="auto"||a==="scroll"}var j=new RegExp("\\s*([^\\s:]+)\\s*:\\s*([^;('\"]*(?:(?:\\([^)]*\\)|\"[^\"]*\"|'[^']*')[^;(?:'\"]*)*)(?:;|$)","g");function k(a){var b={};a.replace(j,function(a,c,d){b[c]=d;return d});return b}function l(a){var b="";for(var c in a)a[c]&&(b+=c+":"+a[c]+";");return b}function m(a){return a!==""?"alpha(opacity="+a*100+")":""}function n(a,b,d){switch(c("hyphenate")(b)){case"font-weight":case"line-height":case"opacity":case"z-index":case"animation-iteration-count":case"-webkit-animation-iteration-count":break;case"width":case"height":var e=parseInt(d,10)<0;e&&h(0,11849,a,b,d);default:isNaN(d)||!d||d==="0"||h(0,11850,a,b,d,d+"px");break}}var o={set:function(a,b,d){n("Style.set",b,d);if(a==null)return;a=a.style;switch(b){case"opacity":c("getOpacityStyleName")()==="filter"?a.filter=m(d):a.opacity=d;break;case"float":a.cssFloat=a.styleFloat=d||"";break;default:try{a[c("camelize")(b)]=d}catch(a){throw c("err")('Style.set: "%s" argument is invalid: %s',b,d)}}},apply:function(a,b){var d;for(d in b)n("Style.apply",d,b[d]);"opacity"in b&&c("getOpacityStyleName")()==="filter"&&(b.filter=m(b.opacity),delete b.opacity);var e=k(a.style.cssText);for(d in b){var f=b[d];delete b[d];var g=c("hyphenate")(d);for(var h in e)(h===g||h.indexOf(g+"-")===0)&&delete e[h];b[g]=f}Object.assign(e,b);a.style.cssText=l(e)},get:c("getStyleProperty"),getFloat:function(a,b){return parseFloat(o.get(a,b),10)},getOpacity:function(a){if(c("getOpacityStyleName")()==="filter"){var b=o.get(a,"filter");if(b){b=/(\d+(?:\.\d+)?)/.exec(b);if(b)return parseFloat(b.pop())/100}}return o.getFloat(a,"opacity")||1},isFixed:function(a){while(c("containsNode")(document.body,a)){if(o.get(a,"position")==="fixed")return!0;a=a.parentNode}return!1},getScrollParent:function(a){if(!a)return null;while(a&&a!==document.body){if(i(a,"overflow")||i(a,"overflowY")||i(a,"overflowX"))return a;a=a.parentNode}return window}};a=o;g["default"]=a}),98);
__d("Style",["$","StyleCore"],(function(a,b,c,d,e,f,g){a=babelHelpers["extends"]({},c("StyleCore"),{get:function(a,b){typeof a==="string"&&(a=c("$")(a));return c("StyleCore").get(a,b)},getFloat:function(a,b){typeof a==="string"&&(a=c("$")(a));return c("StyleCore").getFloat(a,b)}});b=a;g["default"]=b}),98);
__d("Keys",[],(function(a,b,c,d,e,f){"use strict";a=Object.freeze({BACKSPACE:8,TAB:9,RETURN:13,SHIFT:16,CTRL:17,ALT:18,PAUSE_BREAK:19,CAPS_LOCK:20,ESC:27,SPACE:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40,INSERT:45,DELETE:46,ZERO:48,ONE:49,TWO:50,THREE:51,FOUR:52,FIVE:53,SIX:54,SEVEN:55,EIGHT:56,NINE:57,A:65,B:66,C:67,D:68,E:69,F:70,G:71,H:72,I:73,J:74,K:75,L:76,M:77,N:78,O:79,P:80,Q:81,R:82,S:83,T:84,U:85,V:86,W:87,X:88,Y:89,Z:90,LEFT_WINDOW_KEY:91,RIGHT_WINDOW_KEY:92,SELECT_KEY:93,NUMPAD_0:96,NUMPAD_1:97,NUMPAD_2:98,NUMPAD_3:99,NUMPAD_4:100,NUMPAD_5:101,NUMPAD_6:102,NUMPAD_7:103,NUMPAD_8:104,NUMPAD_9:105,MULTIPLY:106,ADD:107,SUBTRACT:109,DECIMAL_POINT:110,DIVIDE:111,F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,F12:123,NUM_LOCK:144,SCROLL_LOCK:145,SEMI_COLON:186,EQUAL_SIGN:187,COMMA:188,DASH:189,PERIOD:190,FORWARD_SLASH:191,GRAVE_ACCENT:192,OPEN_BRACKET:219,BACK_SLASH:220,CLOSE_BRAKET:221,SINGLE_QUOTE:222});f["default"]=a}),66);
__d("getElementText",["isElementNode","isTextNode"],(function(a,b,c,d,e,f,g){var h=null;function a(a){if(c("isTextNode")(a))return a.data;else if(c("isElementNode")(a)){if(h===null){var b=document.createElement("div");h=b.textContent!=null?"textContent":"innerText"}return a[h]}else return""}g["default"]=a}),98);
__d("isContentEditable",[],(function(a,b,c,d,e,f){"use strict";function a(a){a=a;while(a instanceof HTMLElement){if(a.contentEditable==="true"||a.contentEditable==="plaintext-only")return!0;a=a.parentElement}return!1}f["default"]=a}),66);
__d("isElementInteractive",["isContentEditable"],(function(a,b,c,d,e,f,g){"use strict";var h=new Set(["EMBED","INPUT","OBJECT","SELECT","TEXTAREA"]),i=new Set(["button","checkbox","radio","submit"]);function a(a){if(!a instanceof HTMLElement)return!1;var b=c("isContentEditable")(a),d=h.has(a.nodeName);a=a instanceof HTMLInputElement&&i.has(a.type);return(b||d)&&!a}g["default"]=a}),98);
__d("KeyEventController",["Bootloader","DOMQuery","Event","Run","emptyFunction","getElementText","isContentEditable","isElementInteractive","isEmpty"],(function(a,b,c,d,e,f,g){var h=null,i={BACKSPACE:[8],TAB:[9],RETURN:[13],ALT:[18],ESCAPE:[27],LEFT:[37,63234],UP:[38,63232],RIGHT:[39,63235],DOWN:[40,63233],NUMPAD_ADD:[43],NUMPAD_SUBSTRACT:[45],DELETE:[46],COMMA:[188],PERIOD:[190],SLASH:[191],"`":[192],"[":[219],"]":[221],PAGE_UP:[33],PAGE_DOWN:[34],END:[35],HOME:[36],SPACE:[32],KP_DOT:[46,110],"-":[189],"=":[187],FORWARD_SLASH:[191]},j=(a={},a[8]=1,a[9]=1,a[13]=1,a[27]=1,a[32]=1,a[37]=1,a[63234]=1,a[38]=1,a[63232]=1,a[39]=1,a[63235]=1,a[40]=1,a[63233]=1,a[46]=1,a);b=function(){function a(){var a=this;this.handlers={};["keyup","keydown","keypress"].forEach(function(b){return document.addEventListener(b,a.onkeyevent.bind(a,"on"+b))})}var b=a.prototype;b.mapKey=function(a){a=a;if(/^[0-9]$/.test(a+"")){typeof a!=="number"&&(a=a.charCodeAt(0)-48);return[48+a,96+a]}a+="";var b=i[a.toUpperCase()];return b?b:[a.toUpperCase().charCodeAt(0)]};b.onkeyevent=function(a,b){var d=b;d=c("Event").$E(d);b=this.handlers[d.keyCode]||this.handlers[d.which];if(b)for(var e=0;e<b.length;e++){var f=b[e].callback,g=b[e].filter;try{if(!g||g(d,a)){g=function(){var b=f(d,a),e=d.which||d.keyCode;c("Bootloader").loadModules(["KeyEventTypedLogger"],function(a){new a().setAction("key_shortcut").setKey(d.key||"").setKeyChar(String.fromCharCode(e)).setKeyCode(e).addToExtraData("is_trusted",d.isTrusted).log()},"KeyEventController");if(b===!1)return{v:c("Event").kill(d)}}();if(typeof g==="object")return g.v}}catch(a){}}return!0};b.resetHandlers=function(){for(var a in this.handlers)if(Object.prototype.hasOwnProperty.call(this.handlers,a)){var b=this.handlers[a].filter(function(a){return a.preserve()});b.length?this.handlers[a]=b:delete this.handlers[a]}};a.getInstance=function(){return h||(h=new a())};a.defaultFilter=function(b,d){b=c("Event").$E(b);return a.filterEventTypes(b,d)&&a.filterEventTargets(b,d)&&a.filterEventModifiers(b,d)};a.filterEventTypes=function(a,b){return b==="onkeydown"?!0:!1};a.filterEventTargets=function(a,b){b=a.getTarget();return!c("isElementInteractive")(b)||a.keyCode in j&&(d("DOMQuery").isNodeOfType(b,["input","textarea"])&&b.value.length===0||c("isContentEditable")(b)&&c("getElementText")(b).length===0)};a.filterEventModifiers=function(a,b){return a.ctrlKey||a.altKey||a.metaKey||a.repeat?!1:!0};a.registerKeyAcrossTransitions=function(b,d,e,f){e===void 0&&(e=a.defaultFilter);f===void 0&&(f=!1);return a.registerKey(b,d,e,f,c("emptyFunction").thatReturnsTrue)};a.registerKey=function(b,e,f,g,h){f===void 0&&(f=a.defaultFilter);g===void 0&&(g=!1);h===void 0&&(h=c("emptyFunction").thatReturnsFalse);b=b;var i=a.getInstance(),j=b==null?[]:i.mapKey(b);c("isEmpty")(i.handlers)&&d("Run").onLeave(i.resetHandlers.bind(i));var k={};for(var l=0;l<j.length;l++){b=""+j[l];(!i.handlers[b]||g)&&(i.handlers[b]=[]);var m={callback:e,filter:f,preserve:h};k[b]=m;i.handlers[b].push(m)}return{remove:function(){for(var a in k){if(i.handlers[a]&&i.handlers[a].length){var b=i.handlers[a].indexOf(k[a]);b>=0&&i.handlers[a].splice(b,1)}delete k[a]}}}};return a}();g["default"]=b}),98);
__d("WebPixelRatio",["SiteData"],(function(a,b,c,d,e,f,g){function a(){return c("SiteData").pr!=null&&c("SiteData").pr>0?c("SiteData").pr:window.devicePixelRatio||1}g.get=a}),98);
__d("csx",[],(function(a,b,c,d,e,f){function a(a){throw new Error("csx: Unexpected class selector transformation.")}f["default"]=a}),66);
__d("setImmediate",["TimeSlice","TimerStorage","setImmediateAcrossTransitions"],(function(a,b,c,d,e,f,g){function a(a){var b,d=function(){c("TimerStorage").unset(c("TimerStorage").IMMEDIATE,b);for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];Function.prototype.apply.call(a,this,e)};c("TimeSlice").copyGuardForWrapper(a,d);for(var e=arguments.length,f=new Array(e>1?e-1:0),g=1;g<e;g++)f[g-1]=arguments[g];b=c("setImmediateAcrossTransitions").apply(void 0,[d].concat(f));c("TimerStorage").set(c("TimerStorage").IMMEDIATE,b);return b}g["default"]=a}),98);
__d("cssVar",[],(function(a,b,c,d,e,f){function a(a){throw new Error('cssVar("'+a+'"): Unexpected class transformation.')}f["default"]=a}),66);

}
/*
     FILE ARCHIVED ON 04:07:30 Dec 16, 2022 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 18:17:40 Dec 16, 2022.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 249.435
  exclusion.robots: 0.231
  exclusion.robots.policy: 0.183
  cdx.remote: 0.111
  esindex: 0.014
  LoadShardBlock: 169.735 (3)
  PetaboxLoader3.datanode: 58.504 (4)
  CDXLines.iter: 26.413 (3)
  PetaboxLoader3.resolve: 213.836 (3)
  load_resource: 108.885
*/