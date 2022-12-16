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

__d("CometEventListener",["unrecoverableViolation"],(function(a,b,c,d,e,f,g){"use strict";function h(a,b,d,e){if(a.addEventListener){a.addEventListener(b,d,e);return{remove:function(){a.removeEventListener(b,d,e)}}}else throw c("unrecoverableViolation")('Attempted to listen to eventType "'+b+'" on a target that does not have addEventListener.',"comet_ui")}a={bubbleWithPassiveFlag:function(a,b,c,d){return h(a,b,c,{capture:!1,passive:d})},capture:function(a,b,c){return h(a,b,c,!0)},captureWithPassiveFlag:function(a,b,c,d){return h(a,b,c,{capture:!0,passive:d})},listen:function(a,b,c){return h(a,b,c,!1)},registerDefault:function(a,b){throw c("unrecoverableViolation")("EventListener.registerDefault is not implemented.","comet_ui")},suppress:function(a){a.preventDefault(),a.stopPropagation()}};g["default"]=a}),98);
__d("UserActivity",["cr:1634616"],(function(a,b,c,d,e,f){e.exports=b("cr:1634616")}),null);
__d("UserActivityBlue",["Arbiter","Event","isTruthy"],(function(a,b,c,d,e,f){var g=5e3,h=500,i=-5,j=Date.now(),k=j,l=!1,m=Date.now(),n=document.hasFocus?document.hasFocus():!0,o=0,p=Date.now(),q=-1,r=-1,s=!1,t=!1,u={EVENT_INTERVAL_MS:h,subscribeOnce:function(a){var b=u.subscribe(function(c,d){u.unsubscribe(b),a(d)});return b},subscribe:function(a){return b("Arbiter").subscribe("useractivity/activity",a)},unsubscribe:function(a){a.unsubscribe()},isActive:function(a){return new Date()-j<(b("isTruthy")(a)?a:g)},isOnTab:function(){return n},hasBeenInactive:function(){return l},resetActiveStatus:function(){n=!0,l=!1},getLastInActiveEnds:function(){return m},getLastActive:function(){return j},setIdleTime:function(a){o=a},getLastLeaveTime:function(){return p},getLastInformTime:function(){return k},hasClicked:function(){return s},hasInteractedWithKeyboard:function(){return t},reset:function(){j=Date.now(),k=j,l=!1,m=Date.now(),n=document.hasFocus?document.hasFocus():!0,o=0,p=Date.now(),q=-1,r=-1,s=!1,t=!1}};function v(a){x(a,h)}function w(a){x(a,0)}function x(c,d){d===void 0&&(d=0);var e=a.KeyboardEvent,f=a.MouseEvent;if(f&&c instanceof f){if(/^mouse(enter|leave|move|out|over)$/.test(c.type)&&c.pageX==q&&c.pageY==r)return;q=c.pageX;r=c.pageY}else e&&c instanceof e&&(t=!0);(c.type==="click"||c.type==="dblclick"||c.type==="contextmenu")&&(s=!0);j=Date.now();f=j-k;f>d?(k=j,n||(p=j),f>=(o||g)&&(l=!0,m=j),b("Arbiter").inform("useractivity/activity",{event:c,idleness:f,last_inform:k})):f<i&&(k=j)}function c(a){n=!0,m=Date.now(),w(a)}function d(a){n=!1,l=!0,p=Date.now()}b("Event").listen(window,"scroll",v);b("Event").listen(window,"focus",c);b("Event").listen(window,"blur",d);b("Event").listen(document.documentElement,{keydown:v,mouseover:v,mousemove:v,click:v},void 0,void 0,{passive:!0});b("Arbiter").subscribe("Event/stop",function(a,b){v(b.event)});e.exports=u}),null);

}
/*
     FILE ARCHIVED ON 04:12:15 Dec 16, 2022 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 18:17:41 Dec 16, 2022.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  exclusion.robots: 0.073
  exclusion.robots.policy: 0.061
  RedisCDXSource: 4.556
  esindex: 0.012
  LoadShardBlock: 364.012 (6)
  PetaboxLoader3.datanode: 110.41 (7)
  CDXLines.iter: 17.376 (3)
  load_resource: 86.948
  PetaboxLoader3.resolve: 51.444
*/