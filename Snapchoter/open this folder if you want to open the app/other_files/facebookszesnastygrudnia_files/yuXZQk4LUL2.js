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

__d("Base64",[],(function(a,b,c,d,e,f){var g="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";function h(a){a=a.charCodeAt(0)<<16|a.charCodeAt(1)<<8|a.charCodeAt(2);return String.fromCharCode(g.charCodeAt(a>>>18),g.charCodeAt(a>>>12&63),g.charCodeAt(a>>>6&63),g.charCodeAt(a&63))}var i=">___?456789:;<=_______\0\x01\x02\x03\x04\x05\x06\x07\b\t\n\v\f\r\x0e\x0f\x10\x11\x12\x13\x14\x15\x16\x17\x18\x19______\x1a\x1b\x1c\x1d\x1e\x1f !\"#$%&'()*+,-./0123";function j(a){a=i.charCodeAt(a.charCodeAt(0)-43)<<18|i.charCodeAt(a.charCodeAt(1)-43)<<12|i.charCodeAt(a.charCodeAt(2)-43)<<6|i.charCodeAt(a.charCodeAt(3)-43);return String.fromCharCode(a>>>16,a>>>8&255,a&255)}var k={encode:function(a){a=unescape(encodeURI(a));var b=(a.length+2)%3;a=(a+"\0\0".slice(b)).replace(/[\s\S]{3}/g,h);return a.slice(0,a.length+b-2)+"==".slice(b)},decode:function(a){a=a.replace(/[^A-Za-z0-9+\/]/g,"");var b=a.length+3&3;a=(a+"AAA".slice(b)).replace(/..../g,j);a=a.slice(0,a.length+b-3);try{return decodeURIComponent(escape(a))}catch(a){throw new Error("Not valid UTF-8")}},encodeObject:function(a){return k.encode(JSON.stringify(a))},decodeObject:function(a){return JSON.parse(k.decode(a))},encodeNums:function(a){return String.fromCharCode.apply(String,a.map(function(a){return g.charCodeAt((a|-(a>63?1:0))&-(a>0?1:0)&63)}))}};a=k;f["default"]=a}),66);
__d("Deferred",["Promise"],(function(a,b,c,d,e,f){"use strict";b("Promise").resolve();a=function(){function a(a){var c=this;a=a||b("Promise");this.$1=!1;this.$2=new a(function(a,b){c.$3=a,c.$4=b})}var c=a.prototype;c.getPromise=function(){return this.$2};c.resolve=function(a){this.$1=!0,this.$3(a)};c.reject=function(a){this.$1=!0,this.$4(a)};c.isSettled=function(){return this.$1};return a}();f["default"]=a}),66);

}
/*
     FILE ARCHIVED ON 04:56:08 Dec 16, 2022 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 18:17:38 Dec 16, 2022.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 146.102
  exclusion.robots: 0.11
  exclusion.robots.policy: 0.099
  cdx.remote: 0.085
  esindex: 0.013
  LoadShardBlock: 51.492 (3)
  PetaboxLoader3.datanode: 77.113 (4)
  CDXLines.iter: 19.79 (3)
  load_resource: 105.373
  PetaboxLoader3.resolve: 38.277
*/