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

__d("LogHistory",[],(function(a,b,c,d,e,f){var g=500,h={},i=[];function j(a,b,c,d){var e=d[0];if(typeof e!=="string"||d.length!==1)return;i.push({date:Date.now(),level:a,category:b,event:c,args:e});i.length>g&&i.shift()}var k=function(){function a(a){this.category=a}var b=a.prototype;b.debug=function(a){for(var b=arguments.length,c=new Array(b>1?b-1:0),d=1;d<b;d++)c[d-1]=arguments[d];j("debug",this.category,a,c);return this};b.log=function(a){for(var b=arguments.length,c=new Array(b>1?b-1:0),d=1;d<b;d++)c[d-1]=arguments[d];j("log",this.category,a,c);return this};b.warn=function(a){for(var b=arguments.length,c=new Array(b>1?b-1:0),d=1;d<b;d++)c[d-1]=arguments[d];j("warn",this.category,a,c);return this};b.error=function(a){for(var b=arguments.length,c=new Array(b>1?b-1:0),d=1;d<b;d++)c[d-1]=arguments[d];j("error",this.category,a,c);return this};return a}();function a(a){h[a]||(h[a]=new k(a));return h[a]}function b(){return i}function c(){i.length=0}function d(a){return a.map(function(a){var b=/\d\d:\d\d:\d\d/.exec(new Date(a.date).toString());return[b&&b[0],a.level,a.category,a.event,a.args].join(" | ")}).join("\n")}f.getInstance=a;f.getEntries=b;f.clearEntries=c;f.formatEntries=d}),66);
__d("EventListener",["cr:1353359"],(function(a,b,c,d,e,f,g){"use strict";g["default"]=b("cr:1353359")}),98);

}
/*
     FILE ARCHIVED ON 09:07:36 Dec 16, 2022 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 18:17:41 Dec 16, 2022.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 319.037
  exclusion.robots: 0.071
  exclusion.robots.policy: 0.065
  cdx.remote: 0.064
  esindex: 0.008
  LoadShardBlock: 68.327 (3)
  PetaboxLoader3.datanode: 103.784 (5)
  CDXLines.iter: 37.786 (3)
  load_resource: 150.454 (2)
  PetaboxLoader3.resolve: 105.919
*/