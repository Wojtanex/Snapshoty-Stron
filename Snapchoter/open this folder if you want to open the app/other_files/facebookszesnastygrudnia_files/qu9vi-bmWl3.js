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

__d("InlineFbtResult",["cr:1183579"],(function(a,b,c,d,e,f,g){g["default"]=b("cr:1183579")}),98);
__d("FbtReactUtil",[],(function(a,b,c,d,e,f){a=typeof Symbol==="function"&&Symbol["for"]&&Symbol["for"]("react.element")||60103;var g=!1;b={REACT_ELEMENT_TYPE:a,injectReactShim:function(a){var b={validated:!0};g?Object.defineProperty(a,"_store",{configurable:!1,enumerable:!1,writable:!1,value:b}):a._store=b}};e.exports=b}),null);
__d("FbtResultBase",[],(function(a,b,c,d,e,f){"use strict";var g=function(){function a(a,b){this.$1=a,this.__errorListener=b,this.$3=!1,this.$2=null}var b=a.prototype;b.flattenToArray=function(){return a.flattenToArray(this.$1)};b.getContents=function(){return this.$1};b.toString=function(){if(Object.isFrozen(this))return this.$4();if(this.$3)return"<<Reentering fbt.toString() is forbidden>>";this.$3=!0;try{return this.$4()}finally{this.$3=!1}};b.$4=function(){if(this.$2!=null)return this.$2;var b="",c=this.flattenToArray();for(var d=0;d<c.length;++d){var e=c[d];if(typeof e==="string"||e instanceof a)b+=e.toString();else{var f;(f=this.__errorListener)==null?void 0:f.onStringSerializationError==null?void 0:f.onStringSerializationError(e)}}Object.isFrozen(this)||(this.$2=b);return b};b.toJSON=function(){return this.toString()};a.flattenToArray=function(b){var c=[];for(var d=0;d<b.length;++d){var e=b[d];Array.isArray(e)?c.push.apply(c,a.flattenToArray(e)):e instanceof a?c.push.apply(c,e.flattenToArray()):c.push(e)}return c};return a}();["anchor","big","blink","bold","charAt","charCodeAt","codePointAt","contains","endsWith","fixed","fontcolor","fontsize","includes","indexOf","italics","lastIndexOf","link","localeCompare","match","normalize","repeat","replace","search","slice","small","split","startsWith","strike","sub","substr","substring","sup","toLocaleLowerCase","toLocaleUpperCase","toLowerCase","toUpperCase","trim","trimLeft","trimRight"].forEach(function(a){g.prototype[a]=function(){var b;(b=this.__errorListener)==null?void 0:b.onStringMethodUsed==null?void 0:b.onStringMethodUsed(a);for(var c=arguments.length,d=new Array(c),e=0;e<c;e++)d[e]=arguments[e];return String.prototype[a].apply(this,d)}});e.exports=g}),null);
__d("FbtResult",["FbtReactUtil","FbtResultBase"],(function(a,b,c,d,e,f){var g=function(a){return a.content};a=function(a){"use strict";babelHelpers.inheritsLoose(c,a);function c(c,d){d=a.call(this,c,d)||this;d.$$typeof=b("FbtReactUtil").REACT_ELEMENT_TYPE;d.key=null;d.ref=null;d.type=g;d.props={content:c};return d}c.get=function(a){return new c(a.contents,a.errorListener)};return c}(b("FbtResultBase"));e.exports=a}),null);
__d("TransAppInlineMode",[],(function(a,b,c,d,e,f){a=Object.freeze({STRING_MANAGER:"STRING_MANAGER",TRANSLATION:"TRANSLATION",APPROVE:"APPROVE",REPORT:"REPORT",NO_INLINE:"NO_INLINE"});f["default"]=a}),66);
__d("getUnwrappedFbt",["FbtResultGK"],(function(a,b,c,d,e,f){function a(a){a=a.contents;var c=b("FbtResultGK").inlineMode,d=b("FbtResultGK").shouldReturnFbtResult;if(!d&&c!=="REPORT")return(a==null?void 0:a.length)===1&&typeof a[0]==="string"?a[0]:a}e.exports=a}),null);
__d("getFbtResult",["FbtResult","FbtResultGK","InlineFbtResult","getUnwrappedFbt","gkx","recoverableViolation"],(function(a,b,c,d,e,f,g){if(c("gkx")("708253")&&c("FbtResultGK").inlineMode==="TRANSLATION"){c("recoverableViolation")("TransAppInlineMode=TRANSLATION should not happen on Comet yet. "+("[inlineMode="+((b=c("FbtResultGK").inlineMode)!=null?b:"")+"]")+("[runtime_site_is_comet="+String(c("gkx")("708253"))+"]"),"internationalization")}function a(a){var b=c("getUnwrappedFbt")(a);if(b!=null)return b;b=a.contents;var d=a.patternString,e=a.patternHash;return c("FbtResultGK").inlineMode!=null&&c("FbtResultGK").inlineMode!=="NO_INLINE"?new(c("InlineFbtResult"))(b,c("FbtResultGK").inlineMode,d,e):c("FbtResult").get(a)}g["default"]=a}),98);
__d("FbtErrorListenerWWW",["FBLogger","killswitch"],(function(a,b,c,d,e,f,g){a=function(){function a(a){this.$1=a.hash,this.$2=a.translation}var b=a.prototype;b.onStringSerializationError=function(a){var b="Context not logged.";if(!c("killswitch")("JS_RELIABILITY_FBT_LOGGING"))try{var d=JSON.stringify(a);d!=null&&(b=d.substr(0,250))}catch(a){b=a.message}d=(a==null?void 0:(d=a.constructor)==null?void 0:d.name)||"";c("FBLogger")("fbt").blameToPreviousDirectory().blameToPreviousDirectory().mustfix('Converting to a string will drop content data. Hash="%s" Translation="%s" Content="%s" (type=%s,%s)',this.$1,this.$2,b,typeof a,d)};b.onStringMethodUsed=function(a){c("FBLogger")("fbt").blameToPreviousDirectory().blameToPreviousDirectory().mustfix("Error using fbt string. Used method %s on Fbt string. Fbt string is designed to be immutable and should not be manipulated.",a)};return a}();g["default"]=a}),98);
__d("FbtPureStringResult",["FbtResult"],(function(a,b,c,d,e,f){a=function(a){"use strict";babelHelpers.inheritsLoose(b,a);function b(){return a.apply(this,arguments)||this}return b}(b("FbtResult"));e.exports=a}),null);
__d("getFbsResult",["FbtPureStringResult"],(function(a,b,c,d,e,f){function a(a){return new(b("FbtPureStringResult"))(a.contents,a.errorListener)}e.exports=a}),null);
__d("getTranslatedInput",["Env","ExecutionEnvironment","FBLogger","MakeHasteTranslationsMap"],(function(a,b,c,d,e,f,g){b="JHASH";var h=new RegExp("__"+b+"__(.+?)__"+b+"__"),i=!!c("Env").use_fbt_virtual_modules;function a(a){var b=a.table;if(i&&c("ExecutionEnvironment").canUseDOM){if(typeof b==="string"){var e=b.match(h);if(e!=null)return babelHelpers["extends"]({},a,{table:d("MakeHasteTranslationsMap").get(e[1])})}c("FBLogger")("binary_transparency","inlined_translations").warn("Found inlined translated contents in client_fetch_translations experiment! Input: %s",JSON.stringify(b))}return a}g["default"]=a}),98);
__d("translationOverrideListener",["requireDeferred"],(function(a,b,c,d,e,f,g){"use strict";var h=c("requireDeferred")("IntlQtEventFalcoEvent").__setRef("translationOverrideListener");function a(a){h.onReady(function(b){return b.log(function(){return{hash:a}})})}g["default"]=a}),98);
__d("FbtEnv",["FbtErrorListenerWWW","FbtHooks","IntlViewerContext","getFbsResult","getFbtResult","getTranslatedInput","promiseDone","requireDeferred","translationOverrideListener"],(function(a,b,c,d,e,f,g){"use strict";var h,i=c("requireDeferred")("FbtLogging").__setRef("FbtEnv"),j=!1;function a(){if(j)return;j=!0;(h||(h=b("FbtHooks"))).register({errorListener:function(a){return new(c("FbtErrorListenerWWW"))(a)},getFbsResult:c("getFbsResult"),getFbtResult:c("getFbtResult"),getTranslatedInput:c("getTranslatedInput"),onTranslationOverride:c("translationOverrideListener"),getViewerContext:function(){return c("IntlViewerContext")},logImpression:function(a){return c("promiseDone")(i.load().then(function(b){return b.logImpression==null?void 0:b.logImpression(a)}))}})}g.setupOnce=a}),98);
__d("FbtHooksImpl",[],(function(a,b,c,d,e,f){var g={};a={getErrorListener:function(a){return g.errorListener==null?void 0:g.errorListener(a)},logImpression:function(a){g.logImpression==null?void 0:g.logImpression(a)},onTranslationOverride:function(a){g.onTranslationOverride==null?void 0:g.onTranslationOverride(a)},getFbsResult:function(a){return g.getFbsResult(a)},getFbtResult:function(a){return g.getFbtResult(a)},getTranslatedInput:function(a){var b;return(b=g.getTranslatedInput==null?void 0:g.getTranslatedInput(a))!=null?b:a},getViewerContext:function(){return g.getViewerContext()},register:function(a){Object.assign(g,a)}};e.exports=a}),null);
__d("FbtHooks",["FbtEnv","FbtHooksImpl"],(function(a,b,c,d,e,f){e.exports=b("FbtHooksImpl"),b("FbtEnv").setupOnce()}),null);
__d("InlineFbtResultImpl",["cx","FbtHooks","FbtReactUtil","FbtResultBase"],(function(a,b,c,d,e,f,g,h){function i(a,b,c,e){var f="_4qba";e!=null&&e!=""&&(b==="TRANSLATION"?f="_4qbb":b==="APPROVE"?f="_4qbc":b==="REPORT"&&(f="_4qbd"));return{$$typeof:d("FbtReactUtil").REACT_ELEMENT_TYPE,type:"em",key:null,ref:null,props:{className:f,"data-intl-hash":e,"data-intl-translation":c,"data-intl-trid":"",children:a,suppressHydrationWarning:!0},_owner:null}}var j=function(a){return i(a.content,a.inlineMode,a.translation,a.hash)};a=function(a){babelHelpers.inheritsLoose(b,a);function b(b,e,f,g){var h;h=a.call(this,b,c("FbtHooks").getErrorListener({translation:f,hash:g}))||this;h.$$typeof=d("FbtReactUtil").REACT_ELEMENT_TYPE;h.key=null;h.ref=null;h.type=j;h.props={content:b,inlineMode:e,translation:f,hash:g};return h}return b}(c("FbtResultBase"));g["default"]=a}),98);

}
/*
     FILE ARCHIVED ON 05:06:25 Dec 16, 2022 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 18:17:38 Dec 16, 2022.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 361.77
  exclusion.robots: 0.073
  exclusion.robots.policy: 0.065
  cdx.remote: 0.069
  esindex: 0.012
  LoadShardBlock: 226.756 (3)
  PetaboxLoader3.datanode: 66.727 (4)
  CDXLines.iter: 16.86 (3)
  load_resource: 14.16
*/