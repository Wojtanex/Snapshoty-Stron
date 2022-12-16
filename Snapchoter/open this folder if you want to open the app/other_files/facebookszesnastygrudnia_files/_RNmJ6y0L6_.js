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

__d("debounceCore",["TimeSlice"],(function(a,b,c,d,e,f,g){function a(a,b,d,e,f,g){d===void 0&&(d=null);e===void 0&&(e=setTimeout);f===void 0&&(f=clearTimeout);g===void 0&&(g=!1);var h,i=!0;function j(){for(var k=arguments.length,l=new Array(k),m=0;m<k;m++)l[m]=arguments[m];var n;if(g){n=c("TimeSlice").guard(function(){i=!0,h=null},"debounceCore");if(!i){f(h);h=e(n,b);return}i=!1;a.apply(d,l)}else j.reset(),n=c("TimeSlice").guard(function(){h=null,a.apply(d,l)},"debounceCore");n.__SMmeta=a.__SMmeta;h=e(n,b)}j.reset=function(){f(h),h=null,i=!0};j.isPending=function(){return h!=null};return j}g["default"]=a}),98);
__d("debounce",["clearTimeout","debounceCore","setTimeout"],(function(a,b,c,d,e,f,g){function a(a,b,d,e,f){b===void 0&&(b=100);var g=function(a,b,d){return c("setTimeout")(a,b,d,!e)};return c("debounceCore")(a,b,d,g,c("clearTimeout"),f)}g["default"]=a}),98);
__d("forEachObject",[],(function(a,b,c,d,e,f){"use strict";var g=Object.prototype.hasOwnProperty;function a(a,b,c){for(var d in a){var e=d;g.call(a,e)&&b.call(c,a[e],e,a)}}f["default"]=a}),66);
__d("JSResource",["JSResourceReferenceImpl"],(function(a,b,c,d,e,f,g){var h={};function i(a,b){h[a]=b}function j(a){return h[a]}function a(a){a=a;var b=j(a);if(b)return b;b=new(c("JSResourceReferenceImpl"))(a);i(a,b);return b}a.loadAll=c("JSResourceReferenceImpl").loadAll;g["default"]=a}),98);

}
/*
     FILE ARCHIVED ON 11:34:34 Dec 16, 2022 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 18:17:41 Dec 16, 2022.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 132.503
  exclusion.robots: 0.241
  exclusion.robots.policy: 0.234
  RedisCDXSource: 1.447
  esindex: 0.007
  LoadShardBlock: 112.294 (3)
  PetaboxLoader3.datanode: 139.886 (5)
  CDXLines.iter: 15.563 (3)
  load_resource: 504.38 (2)
  PetaboxLoader3.resolve: 436.308 (2)
*/