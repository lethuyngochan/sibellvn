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

(function(g){var window=this;'use strict';var D1a=function(a,b){this.u=a>>>0;this.j=b>>>0},F1a=function(a){if(!a)return E1a||(E1a=new D1a(0,0));
if(!/^\d+$/.test(a))return null;g.tba(a);return new D1a(g.md,g.nd)},G1a=function(a,b,c){null!=c&&("string"===typeof c&&F1a(c),g.Gd(a,b,1),"number"===typeof c?(a=a.j,b=c>>>0,c=Math.floor((c-b)/4294967296)>>>0,g.md=b,g.nd=c,g.Ed(a,g.md),g.Ed(a,g.nd)):(c=F1a(c),a=a.j,b=c.j,g.Ed(a,c.u),g.Ed(a,b)))},H1a=function(a,b,c){b=g.Kc(b,c);
null!=b&&(g.Gd(a,c,0),a.j.j.push(b?1:0))},I1a=function(a,b){b=b instanceof g.gf?b:g.lf(b,/^data:image\//i.test(b));
a.src=g.hf(b)},K1a=function(a){g.F.call(this,a,-1,J1a)},L1a=function(a){g.F.call(this,a)},M1a=function(a){g.F.call(this,a)},N1a=function(a){g.F.call(this,a)},O1a=function(a){g.F.call(this,a)},m6=function(a){g.Ei(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^g.Qa()).toString(36));
return a},n6=function(a,b,c){Array.isArray(c)||(c=[String(c)]);
g.Kfa(a.u,b,c)},P1a=function(a){if(a instanceof g.ul)return a;
if("function"==typeof a.Oi)return a.Oi(!1);if(g.Ia(a)){var b=0,c=new g.ul;c.next=function(){for(;;){if(b>=a.length)return g.VZ;if(b in a)return g.vl(a[b++]);b++}};
return c}throw Error("Not implemented");},Q1a=function(a,b,c){if(g.Ia(a))g.Xb(a,b,c);
else for(a=P1a(a);;){var d=a.next();if(d.done)break;b.call(c,d.value,void 0,a)}},R1a=function(a,b){var c=[];
Q1a(b,function(d){try{var e=g.ho.prototype.u.call(this,d,!0)}catch(f){if("Storage: Invalid value was encountered"==f)return;throw f;}void 0===e?c.push(d):g.uka(e)&&c.push(d)},a);
return c},S1a=function(a,b){R1a(a,b).forEach(function(c){g.ho.prototype.remove.call(this,c)},a)},T1a=function(a){if(a.Z){if(a.Z.locationOverrideToken)return{locationOverrideToken:a.Z.locationOverrideToken};
if(null!=a.Z.latitudeE7&&null!=a.Z.longitudeE7)return{latitudeE7:a.Z.latitudeE7,longitudeE7:a.Z.longitudeE7}}return null},U1a=function(a,b){g.Fb(a,b)||a.push(b)},o6=function(a){var b=0,c;
for(c in a)b++;return b},V1a=function(a,b){return g.ue(a,b)},W1a=function(a){try{return g.C.JSON.parse(a)}catch(b){}a=String(a);
if(/^\s*$/.test(a)?0:/^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g,"@").replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g,"]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g,"")))try{return eval("("+a+")")}catch(b){}throw Error("Invalid JSON string: "+a);},p6=function(a){if(g.C.JSON)try{return g.C.JSON.parse(a)}catch(b){}return W1a(a)},X1a=function(a,b,c,d){var e=new g.wi(null);
a&&g.xi(e,a);b&&g.yi(e,b);c&&g.zi(e,c);d&&(e.J=d);return e},q6=function(a,b){g.et[a]=!0;
var c=g.ct();c&&c.publish.apply(c,arguments);g.et[a]=!1},r6=function(a){this.name=this.id="";
this.clientName="UNKNOWN_INTERFACE";this.app="";this.type="REMOTE_CONTROL";this.obfuscatedGaiaId=this.avatar=this.username="";this.capabilities=new Set;this.experiments=new Set;this.theme="u";new g.An;this.model=this.brand="";this.year=0;this.chipset=this.osVersion=this.os="";this.mdxDialServerType="MDX_DIAL_SERVER_TYPE_UNKNOWN";a&&(this.id=a.id||a.name,this.name=a.name,this.clientName=a.clientName?a.clientName.toUpperCase():"UNKNOWN_INTERFACE",this.app=a.app,this.type=a.type||"REMOTE_CONTROL",this.username=
a.user||"",this.avatar=a.userAvatarUri||"",this.obfuscatedGaiaId=a.obfuscatedGaiaId||"",this.theme=a.theme||"u",Y1a(this,a.capabilities||""),Z1a(this,a.experiments||""),this.brand=a.brand||"",this.model=a.model||"",this.year=a.year||0,this.os=a.os||"",this.osVersion=a.osVersion||"",this.chipset=a.chipset||"",this.mdxDialServerType=a.mdxDialServerType||"MDX_DIAL_SERVER_TYPE_UNKNOWN",a=a.deviceInfo)&&(a=JSON.parse(a),this.brand=a.brand||"",this.model=a.model||"",this.year=a.year||0,this.os=a.os||"",
this.osVersion=a.osVersion||"",this.chipset=a.chipset||"",this.clientName=a.clientName?a.clientName.toUpperCase():"UNKNOWN_INTERFACE",this.mdxDialServerType=a.mdxDialServerType||"MDX_DIAL_SERVER_TYPE_UNKNOWN")},Y1a=function(a,b){a.capabilities.clear();
g.zl(b.split(","),g.Pa(V1a,$1a)).forEach(function(c){a.capabilities.add(c)})},Z1a=function(a,b){a.experiments.clear();
b.split(",").forEach(function(c){a.experiments.add(c)})},s6=function(a){a=a||{};
this.name=a.name||"";this.id=a.id||a.screenId||"";this.token=a.token||a.loungeToken||"";this.uuid=a.uuid||a.dialId||"";this.idType=a.screenIdType||"normal"},t6=function(a,b){return!!b&&(a.id==b||a.uuid==b)},a2a=function(a){return{name:a.name,
screenId:a.id,loungeToken:a.token,dialId:a.uuid,screenIdType:a.idType}},b2a=function(a){return new s6(a)},c2a=function(a){return Array.isArray(a)?g.Oj(a,b2a):[]},u6=function(a){return a?'{name:"'+a.name+'",id:'+a.id.substr(0,6)+"..,token:"+((a.token?".."+a.token.slice(-6):"-")+",uuid:"+(a.uuid?".."+a.uuid.slice(-6):"-")+",idType:"+a.idType+"}"):"null"},v6=function(a){return Array.isArray(a)?"["+g.Oj(a,u6).join(",")+"]":"null"},w6=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,
function(a){var b=16*Math.random()|0;
return("x"==a?b:b&3|8).toString(16)})},d2a=function(a){return g.Oj(a,function(b){return{key:b.id,
name:b.name}})},x6=function(a,b){return g.Db(a,function(c){return c||b?!c!=!b?!1:c.id==b.id:!0})},y6=function(a,b){return g.Db(a,function(c){return t6(c,b)})},e2a=function(){var a=(0,g.Eu)();
a&&S1a(a,a.j.Oi(!0))},z6=function(){var a=g.Hu("yt-remote-connected-devices")||[];
g.Sb(a);return a},f2a=function(a){if(g.Gb(a))return[];
var b=a[0].indexOf("#"),c=-1==b?a[0]:a[0].substring(0,b);return g.Oj(a,function(d,e){return 0==e?d:d.substring(c.length)})},g2a=function(a){g.Gu("yt-remote-connected-devices",a,86400)},B6=function(){if(A6)return A6;
var a=g.Hu("yt-remote-device-id");a||(a=w6(),g.Gu("yt-remote-device-id",a,31536E3));for(var b=z6(),c=1,d=a;g.Fb(b,d);)c++,d=a+"#"+c;return A6=d},C6=function(){var a=z6(),b=B6();
g.Ju()&&g.Ub(a,b);a=f2a(a);if(g.Gb(a))try{g.Ala("remote_sid")}catch(c){}else try{g.bq("remote_sid",a.join(","),-1)}catch(c){}},h2a=function(){return g.Hu("yt-remote-session-browser-channel")},i2a=function(){return g.Hu("yt-remote-local-screens")||[]},j2a=function(){g.Gu("yt-remote-lounge-token-expiration",!0,86400)},k2a=function(a){5<a.length&&(a=a.slice(a.length-5));
var b=g.Oj(i2a(),function(d){return d.loungeToken}),c=g.Oj(a,function(d){return d.loungeToken});
g.Pj(c,function(d){return!g.Fb(b,d)})&&j2a();
g.Gu("yt-remote-local-screens",a,31536E3)},D6=function(a){a||(g.Iu("yt-remote-session-screen-id"),g.Iu("yt-remote-session-video-id"));
C6();a=z6();g.Ib(a,B6());g2a(a)},l2a=function(){if(!E6){var a=g.qo();
a&&(E6=new g.On(a))}},m2a=function(){l2a();
return E6?!!E6.get("yt-remote-use-staging-server"):!1},F6=function(){var a=window.navigator.userAgent.match(/Chrome\/([0-9]+)/);
return a?parseInt(a[1],10):0},n2a=function(a){return!!document.currentScript&&(-1!=document.currentScript.src.indexOf("?"+a)||-1!=document.currentScript.src.indexOf("&"+a))},o2a=function(){return"function"==typeof window.__onGCastApiAvailable?window.__onGCastApiAvailable:null},G6=function(a){a.length?p2a(a.shift(),function(){G6(a)}):H6()},q2a=function(a){return"chrome-extension://"+a+"/cast_sender.js"},p2a=function(a,b,c){var d=document.createElement("script");
d.onerror=b;c&&(d.onload=c);g.Vh(d,g.ef(a));(document.head||document.documentElement).appendChild(d)},r2a=function(){var a=F6(),b=[];
if(1<a){var c=a-1;b.push("//web.archive.org/web/20220618064156/https://www.gstatic.com/eureka/clank/"+a+"/cast_sender.js");b.push("//web.archive.org/web/20220618064156/https://www.gstatic.com/eureka/clank/"+c+"/cast_sender.js")}return b},H6=function(){var a=o2a();
a&&a(!1,"No cast extension found")},I6=function(){if(s2a){var a=2,b=o2a(),c=function(){a--;
0==a&&b&&b(!0)};
window.__onGCastApiAvailable=c;p2a("//web.archive.org/web/20220618064156/https://www.gstatic.com/cast/sdk/libs/sender/1.0/cast_framework.js",H6,c)}},t2a=function(){I6();
var a=r2a();a.push("//web.archive.org/web/20220618064156/https://www.gstatic.com/eureka/clank/cast_sender.js");G6(a)},v2a=function(){I6();
var a=r2a();a.push.apply(a,g.v(u2a.map(q2a)));a.push("//web.archive.org/web/20220618064156/https://www.gstatic.com/eureka/clank/cast_sender.js");G6(a)},w2a=function(){this.j=J6();
this.j.Jo("/client_streamz/youtube/living_room/mdx/channel/opened",{uh:3,rh:"channel_type"})},x2a=function(a,b){a.j.Aq("/client_streamz/youtube/living_room/mdx/channel/opened",b)},y2a=function(){this.j=J6();
this.j.Jo("/client_streamz/youtube/living_room/mdx/channel/closed",{uh:3,rh:"channel_type"})},z2a=function(a,b){a.j.Aq("/client_streamz/youtube/living_room/mdx/channel/closed",b)},A2a=function(){this.j=J6();
this.j.Jo("/client_streamz/youtube/living_room/mdx/channel/message_received",{uh:3,rh:"channel_type"})},B2a=function(a,b){a.j.Aq("/client_streamz/youtube/living_room/mdx/channel/message_received",b)},C2a=function(){this.j=J6();
this.j.Jo("/client_streamz/youtube/living_room/mdx/channel/error",{uh:3,rh:"channel_type"})},D2a=function(a,b){a.j.Aq("/client_streamz/youtube/living_room/mdx/channel/error",b)},E2a=function(){this.j=J6();
this.j.Jo("/client_streamz/youtube/living_room/mdx/browser_channel/pending_maps")},F2a=function(){this.j=J6();
this.j.Jo("/client_streamz/youtube/living_room/mdx/browser_channel/undelivered_maps")},K6=function(a,b,c){g.I.call(this);
this.I=null!=c?(0,g.Oa)(a,c):a;this.Xg=b;this.D=(0,g.Oa)(this.VS,this);this.j=!1;this.u=0;this.B=this.kc=null;this.C=[]},L6=function(a,b,c){g.I.call(this);
this.C=null!=c?a.bind(c):a;this.Xg=b;this.B=null;this.j=!1;this.u=0;this.kc=null},M6=function(a){a.kc=g.Ig(function(){a.kc=null;
a.j&&!a.u&&(a.j=!1,M6(a))},a.Xg);
var b=a.B;a.B=null;a.C.apply(null,b)},N6=function(){},O6=function(){g.ee.call(this,"p")},P6=function(){g.ee.call(this,"o")},G2a=function(){var a=new g.C.TextEncoder;
return new g.C.ReadableStream({start:function(b){for(var c=g.r(["test\r\n","test\r\n"]),d=c.next();!d.done;d=c.next())b.enqueue(a.encode(d.value));b.close()}})},H2a=function(a){return(a=/\/\/([^\/]+)\//.exec(a))?a[1].endsWith("google.com"):!1},J2a=function(a,b){if(!I2a){I2a=!0;
var c;a:{if(c=g.C.navigator)if(c=c.userAgent)break a;c=""}(-1==c.indexOf("Chrome")||-1!=c.indexOf("Edg")?0:90<=parseInt(/Chrome\/(\d+)/.exec(c)[1],10))&&H2a(a)&&window&&window.document&&H2a(window.document.URL)&&(c=document.createElement("meta"),c.httpEquiv="origin-trial",c.content="A0eNbltY1nd4MP7XTHXnTxWogDL6mWTdgIIKfKOTJoUHNbFFMZQBoiHHjJ9UK9lgYndWFaxOWR7ld8uUjcWmcwIAAAB/eyJvcmlnaW4iOiJodHRwczovL2dvb2dsZS5jb206NDQzIiwiZmVhdHVyZSI6IkZldGNoVXBsb2FkU3RyZWFtaW5nIiwiZXhwaXJ5IjoxNjM2NTAyMzk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ==",
document.head.appendChild(c),(new Request("",{body:new ReadableStream,method:"POST"})).headers.has("Content-Type")||(g.C.fetch(a+"?ot=1",{method:"POST",body:"test\r\n"}).catch(b),g.C.fetch(a+"?ot=2",{method:"POST",body:G2a(),jV:!1}).catch(b),g.C.fetch(a+"?ot=3",{method:"POST",body:G2a(),jV:!0}).catch(b)))}},Q6=function(){return K2a=K2a||new g.Pe},L2a=function(a){g.ee.call(this,"serverreachability",a)},R6=function(a){var b=Q6();
b.dispatchEvent(new L2a(b,a))},M2a=function(a,b){g.ee.call(this,"statevent",a);
this.stat=b},S6=function(a){var b=Q6();
b.dispatchEvent(new M2a(b,a))},N2a=function(a,b,c,d){g.ee.call(this,"timingevent",a);
this.size=b;this.Fv=d},T6=function(a,b){if("function"!==typeof a)throw Error("Fn must not be null and must be a function");
return g.C.setTimeout(function(){a()},b)},U6=function(){},V6=function(a,b,c,d){this.D=a;
this.C=b;this.Hc=c;this.Fc=d||1;this.Ya=new g.Ji(this);this.sb=45E3;a=g.iB?125:void 0;this.Za=new g.Hg(a);this.Ga=null;this.B=!1;this.P=this.Sa=this.J=this.Ka=this.ea=this.Gb=this.U=null;this.Z=[];this.j=null;this.V=0;this.I=this.ma=null;this.Kb=-1;this.Ca=!1;this.ib=0;this.Qa=null;this.lc=this.Pa=this.dc=this.ya=!1;this.u=new O2a},O2a=function(){this.B=null;
this.j="";this.u=!1},W6=function(a,b,c){a.Ka=1;
a.J=m6(b.clone());a.P=c;a.ya=!0;P2a(a,null)},P2a=function(a,b){a.ea=Date.now();
X6(a);a.Sa=a.J.clone();n6(a.Sa,"t",a.Fc);a.V=0;var c=a.D.Ka;a.u=new O2a;a.j=Q2a(a.D,c?b:null,!a.P);0<a.ib&&(a.Qa=new L6((0,g.Oa)(a.DK,a,a.j),a.ib));a.Ya.Ja(a.j,"readystatechange",a.YS);b=a.Ga?g.Be(a.Ga):{};a.P?(a.ma||(a.ma="POST"),b["Content-Type"]="application/x-www-form-urlencoded",a.j.send(a.Sa,a.ma,a.P,b)):(a.ma="GET",a.j.send(a.Sa,a.ma,null,b));R6(1)},R2a=function(a){return a.j?"GET"==a.ma&&2!=a.Ka&&a.D.xe:!1},T2a=function(a,b,c){for(var d=!0,e;!a.Ca&&a.V<c.length;)if(e=S2a(a,c),e==Y6){4==b&&
(a.I=4,S6(14),d=!1);
break}else if(e==Z6){a.I=4;S6(15);d=!1;break}else $6(a,e);R2a(a)&&e!=Y6&&e!=Z6&&(a.u.j="",a.V=0);4!=b||0!=c.length||a.u.u||(a.I=1,S6(16),d=!1);a.B=a.B&&d;d?0<c.length&&!a.lc&&(a.lc=!0,a.D.fI(a)):(a7(a),b7(a))},S2a=function(a,b){var c=a.V,d=b.indexOf("\n",c);
if(-1==d)return Y6;c=Number(b.substring(c,d));if(isNaN(c))return Z6;d+=1;if(d+c>b.length)return Y6;b=b.slice(d,d+c);a.V=d+c;return b},X6=function(a){a.Gb=Date.now()+a.sb;
U2a(a,a.sb)},U2a=function(a,b){if(null!=a.U)throw Error("WatchDog timer not null");
a.U=T6((0,g.Oa)(a.WS,a),b)},c7=function(a){a.U&&(g.C.clearTimeout(a.U),a.U=null)},b7=function(a){a.D.Gf()||a.Ca||V2a(a.D,a)},a7=function(a){c7(a);
g.be(a.Qa);a.Qa=null;a.Za.stop();g.Ki(a.Ya);if(a.j){var b=a.j;a.j=null;b.abort();b.dispose()}},$6=function(a,b){try{var c=a.D;
if(0!=c.Vf&&(c.j==a||d7(c.u,a)))if(!a.Pa&&d7(c.u,a)&&3==c.Vf){try{var d=c.Qg.j.parse(b)}catch(y){d=null}if(Array.isArray(d)&&3==d.length){var e=d;if(0==e[0])a:{if(!c.P){if(c.j)if(c.j.ea+3E3<a.ea)e7(c),f7(c);else break a;g7(c);S6(18)}}else c.wd=e[1],0<c.wd-c.Pa&&37500>e[2]&&c.Za&&0==c.Z&&!c.V&&(c.V=T6((0,g.Oa)(c.ZS,c),6E3));if(1>=h7(c.u)&&c.Wc){try{c.Wc()}catch(y){}c.Wc=void 0}}else i7(c,11)}else if((a.Pa||c.j==a)&&e7(c),!g.bb(b))for(e=c.Qg.j.parse(b),b=0;b<e.length;b++){var f=e[b];c.Pa=f[0];f=f[1];
if(2==c.Vf)if("c"==f[0]){c.C=f[1];c.lc=f[2];var k=f[3];null!=k&&(c.EK=k);var l=f[5];null!=l&&"number"===typeof l&&0<l&&(c.Sa=1.5*l);d=c;var m=a.j;if(m){var n=g.Bh(m,"X-Client-Wire-Protocol");if(n){var p=d.u;!p.j&&(g.db(n,"spdy")||g.db(n,"quic")||g.db(n,"h2"))&&(p.C=p.D,p.j=new Set,p.u&&(j7(p,p.u),p.u=null))}if(d.ya){var q=g.Bh(m,"X-HTTP-Session-Id");q&&(d.ge=q,g.Ei(d.Ga,d.ya,q))}}c.Vf=3;c.D&&c.D.KK();c.Kc&&(c.Xc=Date.now()-a.ea);d=c;var t=a;d.jd=W2a(d,d.Ka?d.lc:null,d.Fc);if(t.Pa){X2a(d.u,t);var u=
t,x=d.Sa;x&&u.setTimeout(x);u.U&&(c7(u),X6(u));d.j=t}else Y2a(d);0<c.B.length&&k7(c)}else"stop"!=f[0]&&"close"!=f[0]||i7(c,7);else 3==c.Vf&&("stop"==f[0]||"close"==f[0]?"stop"==f[0]?i7(c,7):c.disconnect():"noop"!=f[0]&&c.D&&c.D.JK(f),c.Z=0)}R6(4)}catch(y){}},Z2a=function(a,b){this.j=a;
this.map=b;this.context=null},$2a=function(a){this.D=a||10;
g.C.PerformanceNavigationTiming?(a=g.C.performance.getEntriesByType("navigation"),a=0<a.length&&("hq"==a[0].nextHopProtocol||"h2"==a[0].nextHopProtocol)):a=!!(g.C.chrome&&g.C.chrome.loadTimes&&g.C.chrome.loadTimes()&&g.C.chrome.loadTimes().wasFetchedViaSpdy);this.C=a?this.D:1;this.j=null;1<this.C&&(this.j=new Set);this.u=null;this.B=[]},a3a=function(a){return a.u?!0:a.j?a.j.size>=a.C:!1},h7=function(a){return a.u?1:a.j?a.j.size:0},d7=function(a,b){return a.u?a.u==b:a.j?a.j.has(b):!1},j7=function(a,
b){a.j?a.j.add(b):a.u=b},X2a=function(a,b){a.u&&a.u==b?a.u=null:a.j&&a.j.has(b)&&a.j.delete(b)},l7=function(a){if(null!=a.u)return a.B.concat(a.u.Z);
if(null!=a.j&&0!==a.j.size){var b=a.B;a=g.r(a.j.values());for(var c=a.next();!c.done;c=a.next())b=b.concat(c.value.Z);return b}return g.Lb(a.B)},b3a=function(a,b){var c=new U6;
if(g.C.Image){var d=new Image;d.onload=g.Pa(m7,c,d,"TestLoadImage: loaded",!0,b);d.onerror=g.Pa(m7,c,d,"TestLoadImage: error",!1,b);d.onabort=g.Pa(m7,c,d,"TestLoadImage: abort",!1,b);d.ontimeout=g.Pa(m7,c,d,"TestLoadImage: timeout",!1,b);g.C.setTimeout(function(){if(d.ontimeout)d.ontimeout()},1E4);
d.src=a}else b(!1)},m7=function(a,b,c,d,e){try{b.onload=null,b.onerror=null,b.onabort=null,b.ontimeout=null,e(d)}catch(f){}},c3a=function(){this.j=new N6},d3a=function(a,b,c){var d=c||"";
try{g.vi(a,function(e,f){var k=e;g.Ka(e)&&(k=g.Zg(e));b.push(d+f+"="+encodeURIComponent(k))})}catch(e){throw b.push(d+"type="+encodeURIComponent("_badmap")),e;
}},n7=function(a,b,c){return c&&c.VW?c.VW[a]||b:b},e3a=function(a){this.B=[];
this.lc=this.jd=this.Ga=this.Fc=this.j=this.ge=this.ya=this.Ca=this.J=this.Gb=this.U=null;this.Se=this.Qa=0;this.He=n7("failFast",!1,a);this.Za=this.V=this.P=this.I=this.D=null;this.Hc=!0;this.Bd=this.wd=this.Pa=-1;this.dc=this.Z=this.ea=0;this.Ge=n7("baseRetryDelayMs",5E3,a);this.Te=n7("retryDelaySeedMs",1E4,a);this.Ie=n7("forwardChannelMaxRetries",2,a);this.kd=n7("forwardChannelRequestTimeoutMs",2E4,a);this.Hd=a&&a.gla||void 0;this.xe=a&&a.ela||!1;this.Sa=void 0;this.Ka=a&&a.H0||!1;this.C="";this.u=
new $2a(a&&a.Tja);this.Qg=new c3a;this.sb=a&&a.jka||!1;this.ib=a&&a.aka||!1;this.sb&&this.ib&&(this.ib=!1);this.Ue=a&&a.Oja||!1;a&&a.lka&&(this.Hc=!1);this.Kc=!this.sb&&this.Hc&&a&&a.Xja||!1;this.Wc=void 0;this.Xc=0;this.Ya=!1;this.ma=null;this.gf=!a||!1!==a.Zja;this.Kb=null},f7=function(a){a.j&&(o7(a),a.j.cancel(),a.j=null)},f3a=function(a){f7(a);
a.P&&(g.C.clearTimeout(a.P),a.P=null);e7(a);a.u.cancel();a.I&&("number"===typeof a.I&&g.C.clearTimeout(a.I),a.I=null)},k7=function(a){a3a(a.u)||a.I||(a.I=!0,g.ug(a.GK,a),a.ea=0)},h3a=function(a,b){if(h7(a.u)>=a.u.C-(a.I?1:0))return!1;
if(a.I)return a.B=b.Z.concat(a.B),!0;if(1==a.Vf||2==a.Vf||a.ea>=(a.He?0:a.Ie))return!1;a.I=T6((0,g.Oa)(a.GK,a,b),g3a(a,a.ea));a.ea++;return!0},j3a=function(a,b){var c;
b?c=b.Hc:c=a.Qa++;var d=a.Ga.clone();g.Ei(d,"SID",a.C);g.Ei(d,"RID",c);g.Ei(d,"AID",a.Pa);p7(a,d);a.J&&a.U&&g.Ii(d,a.J,a.U);c=new V6(a,a.C,c,a.ea+1);null===a.J&&(c.Ga=a.U);b&&(a.B=b.Z.concat(a.B));b=i3a(a,c,1E3);c.setTimeout(Math.round(.5*a.kd)+Math.round(.5*a.kd*Math.random()));j7(a.u,c);W6(c,d,b)},p7=function(a,b){a.Ca&&g.ke(a.Ca,function(c,d){g.Ei(b,d,c)});
a.D&&g.vi({},function(c,d){g.Ei(b,d,c)})},i3a=function(a,b,c){c=Math.min(a.B.length,c);
var d=a.D?(0,g.Oa)(a.D.aT,a.D,a):null;a:for(var e=a.B,f=-1;;){var k=["count="+c];-1==f?0<c?(f=e[0].j,k.push("ofs="+f)):f=0:k.push("ofs="+f);for(var l=!0,m=0;m<c;m++){var n=e[m].j,p=e[m].map;n-=f;if(0>n)f=Math.max(0,e[m].j-100),l=!1;else try{d3a(p,k,"req"+n+"_")}catch(q){d&&d(p)}}if(l){d=k.join("&");break a}}a=a.B.splice(0,c);b.Z=a;return d},Y2a=function(a){a.j||a.P||(a.dc=1,g.ug(a.FK,a),a.Z=0)},g7=function(a){if(a.j||a.P||3<=a.Z)return!1;
a.dc++;a.P=T6((0,g.Oa)(a.FK,a),g3a(a,a.Z));a.Z++;return!0},o7=function(a){null!=a.ma&&(g.C.clearTimeout(a.ma),a.ma=null)},k3a=function(a){a.j=new V6(a,a.C,"rpc",a.dc);
null===a.J&&(a.j.Ga=a.U);a.j.ib=0;var b=a.jd.clone();g.Ei(b,"RID","rpc");g.Ei(b,"SID",a.C);g.Ei(b,"CI",a.Za?"0":"1");g.Ei(b,"AID",a.Pa);g.Ei(b,"TYPE","xmlhttp");p7(a,b);a.J&&a.U&&g.Ii(b,a.J,a.U);a.Sa&&a.j.setTimeout(a.Sa);var c=a.j;a=a.lc;c.Ka=1;c.J=m6(b.clone());c.P=null;c.ya=!0;P2a(c,a)},e7=function(a){null!=a.V&&(g.C.clearTimeout(a.V),a.V=null)},V2a=function(a,b){var c=null;
if(a.j==b){e7(a);o7(a);a.j=null;var d=2}else if(d7(a.u,b))c=b.Z,X2a(a.u,b),d=1;else return;if(0!=a.Vf)if(a.Bd=b.Kb,b.B)if(1==d){c=b.P?b.P.length:0;b=Date.now()-b.ea;var e=a.ea;d=Q6();d.dispatchEvent(new N2a(d,c,b,e));k7(a)}else Y2a(a);else if(e=b.getLastError(),3==e||0==e&&0<a.Bd||!(1==d&&h3a(a,b)||2==d&&g7(a)))switch(c&&0<c.length&&(b=a.u,b.B=b.B.concat(c)),e){case 1:i7(a,5);break;case 4:i7(a,10);break;case 3:i7(a,6);break;default:i7(a,2)}},g3a=function(a,b){var c=a.Ge+Math.floor(Math.random()*a.Te);
a.isActive()||(c*=2);return c*b},i7=function(a,b){if(2==b){var c=null;
a.D&&(c=null);var d=(0,g.Oa)(a.O0,a);c||(c=new g.wi("//web.archive.org/web/20220618064156/https://www.google.com/images/cleardot.gif"),g.C.location&&"http"==g.C.location.protocol||g.xi(c,"https"),m6(c));b3a(c.toString(),d)}else S6(2);a.Vf=0;a.D&&a.D.IK(b);l3a(a);f3a(a)},l3a=function(a){a.Vf=0;
a.Kb=[];if(a.D){var b=l7(a.u);if(0!=b.length||0!=a.B.length)g.Mb(a.Kb,b),g.Mb(a.Kb,a.B),a.u.B.length=0,g.Lb(a.B),a.B.length=0;a.D.HK()}},m3a=function(a){if(0==a.Vf)return a.Kb;
var b=[];g.Mb(b,l7(a.u));g.Mb(b,a.B);return b},W2a=function(a,b,c){var d=g.Fi(c);
""!=d.j?(b&&g.yi(d,b+"."+d.j),g.zi(d,d.B)):(d=g.C.location,d=X1a(d.protocol,b?b+"."+d.hostname:d.hostname,+d.port,c));b=a.ya;c=a.ge;b&&c&&g.Ei(d,b,c);g.Ei(d,"VER",a.EK);p7(a,d);return d},Q2a=function(a,b,c){if(b&&!a.Ka)throw Error("Can't create secondary domain capable XhrIo object.");
b=c&&a.xe&&!a.Hd?new g.ph(new g.ri({uR:!0})):new g.ph(a.Hd);b.J=a.Ka;return b},n3a=function(){},o3a=function(){if(g.ic&&!g.ec(10))throw Error("Environmental error: no available transport.");
},r7=function(a,b){g.Pe.call(this);
this.j=new e3a(b);this.I=a;this.u=b&&b.xX||null;a=b&&b.wX||null;b&&b.Sja&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"});this.j.U=a;a=b&&b.oka||null;b&&b.dP&&(a?a["X-WebChannel-Content-Type"]=b.dP:a={"X-WebChannel-Content-Type":b.dP});b&&b.VM&&(a?a["X-WebChannel-Client-Profile"]=b.VM:a={"X-WebChannel-Client-Profile":b.VM});this.j.Gb=a;(a=b&&b.mka)&&!g.bb(a)&&(this.j.J=a);this.J=b&&b.H0||!1;this.D=b&&b.Rka||!1;(b=b&&b.RW)&&!g.bb(b)&&(this.j.ya=b,g.te(this.u,b)&&g.ye(this.u,
b));this.C=new q7(this)},p3a=function(a){O6.call(this);
a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var b=a.__sm__;b?this.data=(this.metadataKey=g.oe(b))?g.ze(b,this.metadataKey):b:this.data=a},q3a=function(a){P6.call(this);
this.status=1;this.errorCode=a},q7=function(a){this.j=a},r3a=function(a,b){this.u=a;
this.j=b},s3a=function(a){return m3a(a.j).map(function(b){b=b.map;
"__data__"in b&&(b=b.__data__,b=a.u.D?W1a(b):b);return b})},s7=function(a,b){if("function"!==typeof a)throw Error("Fn must not be null and must be a function");
return g.C.setTimeout(function(){a()},b)},u7=function(a){t7.dispatchEvent(new t3a(t7,a))},t3a=function(a,b){g.ee.call(this,"statevent",a);
this.stat=b},v7=function(a,b,c,d){this.j=a;
this.C=b;this.J=c;this.I=d||1;this.u=45E3;this.B=new g.Ji(this);this.D=new g.Hg;this.D.setInterval(250)},v3a=function(a,b,c){a.Et=1;
a.Ao=m6(b.clone());a.xq=c;a.ya=!0;u3a(a,null)},w7=function(a,b,c,d,e){a.Et=1;
a.Ao=m6(b.clone());a.xq=null;a.ya=c;e&&(a.gR=!1);u3a(a,d)},u3a=function(a,b){a.Dt=Date.now();
x7(a);a.Co=a.Ao.clone();n6(a.Co,"t",a.I);a.hA=0;a.jh=a.j.nE(a.j.uw()?b:null);0<a.lE&&(a.fA=new L6((0,g.Oa)(a.LK,a,a.jh),a.lE));a.B.Ja(a.jh,"readystatechange",a.cT);b=a.wq?g.Be(a.wq):{};a.xq?(a.gA="POST",b["Content-Type"]="application/x-www-form-urlencoded",a.jh.send(a.Co,a.gA,a.xq,b)):(a.gA="GET",a.gR&&!g.ge&&(b.Connection="close"),a.jh.send(a.Co,a.gA,null,b));a.j.Pk(1)},x3a=function(a,b){var c=a.hA,d=b.indexOf("\n",c);
if(-1==d)return y7;c=Number(b.substring(c,d));if(isNaN(c))return w3a;d+=1;if(d+c>b.length)return y7;b=b.slice(d,d+c);a.hA=d+c;return b},z3a=function(a,b){a.Dt=Date.now();
x7(a);var c=b?window.location.hostname:"";a.Co=a.Ao.clone();g.Ei(a.Co,"DOMAIN",c);g.Ei(a.Co,"t",a.I);try{a.bl=new ActiveXObject("htmlfile")}catch(m){z7(a);a.Bo=7;u7(22);A7(a);return}var d="<html><body>";if(b){var e="";for(b=0;b<c.length;b++){var f=c.charAt(b);if("<"==f)f=e+"\\x3c";else if(">"==f)f=e+"\\x3e";else{if(f in B7)f=B7[f];else if(f in y3a)f=B7[f]=y3a[f];else{var k=f.charCodeAt(0);if(31<k&&127>k)var l=f;else{if(256>k){if(l="\\x",16>k||256<k)l+="0"}else l="\\u",4096>k&&(l+="0");l+=k.toString(16).toUpperCase()}f=
B7[f]=l}f=e+f}e=f}d+='<script>document.domain="'+e+'"\x3c/script>'}d+="</body></html>";c=g.vf(g.bf("b/12014412"),d);a.bl.open();a.bl.write(g.sf(c));a.bl.close();a.bl.parentWindow.m=(0,g.Oa)(a.y_,a);a.bl.parentWindow.d=(0,g.Oa)(a.jQ,a,!0);a.bl.parentWindow.rpcClose=(0,g.Oa)(a.jQ,a,!1);c=a.bl.createElement("DIV");a.bl.parentWindow.document.body.appendChild(c);d=g.kf(a.Co.toString());d=g.Nf(g.hf(d));d=g.vf(g.bf("b/12014412"),'<iframe src="'+d+'"></iframe>');g.gda(c,d);a.j.Pk(1)},x7=function(a){a.mE=
Date.now()+a.u;
A3a(a,a.u)},A3a=function(a,b){if(null!=a.Ft)throw Error("WatchDog timer not null");
a.Ft=s7((0,g.Oa)(a.bT,a),b)},C7=function(a){a.Ft&&(g.C.clearTimeout(a.Ft),a.Ft=null)},A7=function(a){a.j.Gf()||a.uq||a.j.iA(a)},z7=function(a){C7(a);
g.be(a.fA);a.fA=null;a.D.stop();g.Ki(a.B);if(a.jh){var b=a.jh;a.jh=null;b.abort();b.dispose()}a.bl&&(a.bl=null)},D7=function(a,b){try{a.j.MK(a,b),a.j.Pk(4)}catch(c){}},C3a=function(a,b,c,d,e){if(0==d)c(!1);
else{var f=e||0;d--;B3a(a,b,function(k){k?c(!0):g.C.setTimeout(function(){C3a(a,b,c,d,f)},f)})}},B3a=function(a,b,c){var d=new Image;
d.onload=function(){try{E7(d),c(!0)}catch(e){}};
d.onerror=function(){try{E7(d),c(!1)}catch(e){}};
d.onabort=function(){try{E7(d),c(!1)}catch(e){}};
d.ontimeout=function(){try{E7(d),c(!1)}catch(e){}};
g.C.setTimeout(function(){if(d.ontimeout)d.ontimeout()},b);
I1a(d,a)},E7=function(a){a.onload=null;
a.onerror=null;a.onabort=null;a.ontimeout=null},D3a=function(a){this.j=a;
this.u=new N6},E3a=function(a){var b=F7(a.j,a.gx,"/mail/images/cleardot.gif");
m6(b);C3a(b.toString(),5E3,(0,g.Oa)(a.pV,a),3,2E3);a.Pk(1)},H7=function(a){var b=a.j.U;
if(null!=b)u7(5),b?(u7(11),G7(a.j,a,!1)):(u7(12),G7(a.j,a,!0));else if(a.Mh=new v7(a),a.Mh.wq=a.oE,b=a.j,b=F7(b,b.uw()?a.qw:null,a.pE),u7(5),!g.ic||g.ec(10))n6(b,"TYPE","xmlhttp"),w7(a.Mh,b,!1,a.qw,!1);else{n6(b,"TYPE","html");var c=a.Mh;a=!!a.qw;c.Et=3;c.Ao=m6(b.clone());z3a(c,a)}},I7=function(a,b,c){this.j=1;
this.u=[];this.B=[];this.D=new N6;this.P=a||null;this.U=null!=b?b:null;this.J=c||!1},F3a=function(a,b){this.j=a;
this.map=b;this.context=null},G3a=function(a,b,c,d){g.ee.call(this,"timingevent",a);
this.size=b;this.Fv=d},H3a=function(a){g.ee.call(this,"serverreachability",a)},I3a=function(a){a.dT(1,0);
a.jA=F7(a,null,a.qE);J7(a)},J3a=function(a){a.Ro&&(a.Ro.abort(),a.Ro=null);
a.tf&&(a.tf.cancel(),a.tf=null);a.Pm&&(g.C.clearTimeout(a.Pm),a.Pm=null);K7(a);a.ai&&(a.ai.cancel(),a.ai=null);a.Do&&(g.C.clearTimeout(a.Do),a.Do=null)},K3a=function(a,b){if(0==a.j)throw Error("Invalid operation: sending map when state is closed");
a.u.push(new F3a(a.eT++,b));2!=a.j&&3!=a.j||J7(a)},L3a=function(a){var b=0;
a.tf&&b++;a.ai&&b++;return b},J7=function(a){a.ai||a.Do||(a.Do=s7((0,g.Oa)(a.QK,a),0),a.Ht=0)},N3a=function(a,b){if(1==a.j){if(!b){a.xw=Math.floor(1E5*Math.random());
b=a.xw++;var c=new v7(a,"",b);c.wq=a.Cl;var d=L7(a),e=a.jA.clone();g.Ei(e,"RID",b);g.Ei(e,"CVER","1");M7(a,e);v3a(c,e,d);a.ai=c;a.j=2}}else 3==a.j&&(b?M3a(a,b):0==a.u.length||a.ai||M3a(a))},M3a=function(a,b){if(b)if(6<a.yq){a.u=a.B.concat(a.u);
a.B.length=0;var c=a.xw-1;b=L7(a)}else c=b.J,b=b.xq;else c=a.xw++,b=L7(a);var d=a.jA.clone();g.Ei(d,"SID",a.C);g.Ei(d,"RID",c);g.Ei(d,"AID",a.It);M7(a,d);c=new v7(a,a.C,c,a.Ht+1);c.wq=a.Cl;c.setTimeout(1E4+Math.round(1E4*Math.random()));a.ai=c;v3a(c,d,b)},M7=function(a,b){a.Pg&&(a=a.Pg.UK())&&g.ke(a,function(c,d){g.Ei(b,d,c)})},L7=function(a){var b=Math.min(a.u.length,1E3),c=["count="+b];
if(6<a.yq&&0<b){var d=a.u[0].j;c.push("ofs="+d)}else d=0;for(var e={},f=0;f<b;e={kt:e.kt},f++){e.kt=a.u[f].j;var k=a.u[f].map;e.kt=6>=a.yq?f:e.kt-d;try{g.ke(k,function(l){return function(m,n){c.push("req"+l.kt+"_"+n+"="+encodeURIComponent(m))}}(e))}catch(l){c.push("req"+e.kt+"_type="+encodeURIComponent("_badmap"))}}a.B=a.B.concat(a.u.splice(0,b));
return c.join("&")},O3a=function(a){a.tf||a.Pm||(a.I=1,a.Pm=s7((0,g.Oa)(a.PK,a),0),a.Gt=0)},N7=function(a){if(a.tf||a.Pm||3<=a.Gt)return!1;
a.I++;a.Pm=s7((0,g.Oa)(a.PK,a),P3a(a,a.Gt));a.Gt++;return!0},G7=function(a,b,c){a.JD=c;
a.Dl=b.Om;a.J||I3a(a)},K7=function(a){null!=a.zq&&(g.C.clearTimeout(a.zq),a.zq=null)},P3a=function(a,b){var c=5E3+Math.floor(1E4*Math.random());
a.isActive()||(c*=2);return c*b},O7=function(a,b){if(2==b||9==b){var c=null;
a.Pg&&(c=null);var d=(0,g.Oa)(a.N0,a);c||(c=new g.wi("//web.archive.org/web/20220618064156/https://www.google.com/images/cleardot.gif"),m6(c));B3a(c.toString(),1E4,d)}else u7(2);Q3a(a,b)},Q3a=function(a,b){a.j=0;
a.Pg&&a.Pg.RK(b);R3a(a);J3a(a)},R3a=function(a){a.j=0;
a.Dl=-1;if(a.Pg)if(0==a.B.length&&0==a.u.length)a.Pg.rE();else{var b=g.Lb(a.B),c=g.Lb(a.u);a.B.length=0;a.u.length=0;a.Pg.rE(b,c)}},F7=function(a,b,c){var d=g.Fi(c);
if(""!=d.j)b&&g.yi(d,b+"."+d.j),g.zi(d,d.B);else{var e=window.location;d=X1a(e.protocol,b?b+"."+e.hostname:e.hostname,+e.port,c)}a.ww&&g.ke(a.ww,function(f,k){g.Ei(d,k,f)});
g.Ei(d,"VER",a.yq);M7(a,d);return d},S3a=function(){},T3a=function(){this.j=[];
this.u=[]},U3a=function(){},J6=function(){if(!P7){P7=new g.Kg(new U3a);
var a=g.up("client_streamz_web_flush_count",-1);-1!==a&&(P7.C=a)}return P7},Q7=function(a){g.ee.call(this,"channelMessage");
this.message=a},R7=function(a){g.ee.call(this,"channelError");
this.error=a},V3a=function(a,b){this.action=a;
this.params=b||{}},S7=function(a,b){g.I.call(this);
this.j=new g.K(this.q_,0,this);g.J(this,this.j);this.Xg=5E3;this.u=0;if("function"===typeof a)b&&(a=(0,g.Oa)(a,b));else if(a&&"function"===typeof a.handleEvent)a=(0,g.Oa)(a.handleEvent,a);else throw Error("Invalid listener argument");this.B=a},T7=function(a,b,c,d,e){c=void 0===c?!1:c;
d=void 0===d?function(){return""}:d;
e=void 0===e?!1:e;this.ea=a;this.J=b;this.B=new g.Nn;this.u=new S7(this.q0,this);this.j=null;this.V=!1;this.I=null;this.U="";this.P=this.D=0;this.C=[];this.Ka=c;this.Z=d;this.Pa=e;this.Ga=new w2a;this.ma=new y2a;this.Ca=new A2a;this.ya=new C2a;this.Qa=new E2a;this.Sa=new F2a},U7=function(a){if(a.j){var b=a.Z(),c=a.j.Cl||{};
b?c["x-youtube-lounge-xsrf-token"]=b:delete c["x-youtube-lounge-xsrf-token"];a.j.Cl=c}},V7=function(a){this.port=this.domain="";
this.j="/api/lounge";this.u=!0;a=a||document.location.href;var b=Number(g.eh(4,a))||"";b&&(this.port=":"+b);this.domain=g.fh(a)||"";a=g.kb();0<=a.search("MSIE")&&(a=a.match(/MSIE ([\d.]+)/)[1],0>g.jb(a,"10.0")&&(this.u=!1))},W7=function(a,b){var c=a.j;
a.u&&(c="https://"+a.domain+a.port+a.j);return g.lh(c+b,{})},X7=function(a,b,c,d,e){a={format:"JSON",
method:"POST",context:a,timeout:5E3,withCredentials:!1,onSuccess:g.Pa(a.C,d,!0),onError:g.Pa(a.B,e),onTimeout:g.Pa(a.D,e)};c&&(a.postParams=c,a.headers={"Content-Type":"application/x-www-form-urlencoded"});return g.Tp(b,a)},Y7=function(a,b){g.Pe.call(this);
var c=this;this.Lc=a();this.Lc.subscribe("handlerOpened",this.iT,this);this.Lc.subscribe("handlerClosed",this.gT,this);this.Lc.subscribe("handlerError",function(d,e){c.onError(e)});
this.Lc.subscribe("handlerMessage",this.hT,this);this.j=b},W3a=function(a,b,c){var d=this;
c=void 0===c?function(){return""}:c;
var e=void 0===e?new o3a:e;var f=void 0===f?new g.Nn:f;this.pathPrefix=a;this.j=b;this.ma=c;this.D=f;this.P=null;this.U=this.J=0;this.channel=null;this.I=0;this.B=new S7(function(){d.B.isActive();var k;0===(null==(k=d.channel)?void 0:h7((new r3a(k,k.j)).j.u))&&d.connect(d.P,d.J)});
this.C={};this.u={};this.V=!1;this.logger=null;this.ea=[];this.Z=void 0;this.Ka=new w2a;this.ya=new y2a;this.Ga=new A2a;this.Ca=new C2a},X3a=function(a){g.Ie(a.channel,"m",function(){a.I=3;
a.B.reset();a.P=null;a.J=0;for(var b=g.r(a.ea),c=b.next();!c.done;c=b.next())c=c.value,a.channel&&a.channel.send(c);a.ea=[];a.W("webChannelOpened");x2a(a.Ka,"WEB_CHANNEL")});
g.Ie(a.channel,"n",function(){a.I=0;a.B.isActive()||a.W("webChannelClosed");var b,c=null==(b=a.channel)?void 0:s3a(new r3a(b,b.j));c&&(a.ea=[].concat(g.v(c)));z2a(a.ya,"WEB_CHANNEL")});
g.Ie(a.channel,"p",function(b){var c=b.data;"gracefulReconnect"===c[0]?(a.B.start(),a.channel&&a.channel.close()):a.W("webChannelMessage",new V3a(c[0],c[1]));a.Z=b.statusCode;B2a(a.Ga,"WEB_CHANNEL")});
g.Ie(a.channel,"o",function(){401===a.Z||a.B.start();a.W("webChannelError");D2a(a.Ca,"WEB_CHANNEL")})},Z7=function(a){var b=a.ma();
b?a.C["x-youtube-lounge-xsrf-token"]=b:delete a.C["x-youtube-lounge-xsrf-token"]},$7=function(a){g.Pe.call(this);
this.j=a();this.j.subscribe("webChannelOpened",this.lT,this);this.j.subscribe("webChannelClosed",this.jT,this);this.j.subscribe("webChannelError",this.onError,this);this.j.subscribe("webChannelMessage",this.kT,this)},Y3a=function(a,b,c,d,e){function f(){return new T7(W7(a,"/bc"),b,!1,c,d)}
c=void 0===c?function(){return""}:c;
return g.P("enable_mdx_web_channel_desktop")?new $7(function(){return new W3a(W7(a,"/wc"),b,c)}):new Y7(f,e)},b4a=function(){var a=Z3a;
$3a();a8.push(a);a4a()},b8=function(a,b){$3a();
var c=c4a(a,String(b));g.Gb(a8)?d4a(c):(a4a(),g.Xb(a8,function(d){d(c)}))},c8=function(a){b8("CP",a)},$3a=function(){a8||(a8=g.Fa("yt.mdx.remote.debug.handlers_")||[],g.Ea("yt.mdx.remote.debug.handlers_",a8))},d4a=function(a){var b=(d8+1)%50;
d8=b;e8[b]=a;f8||(f8=49==b)},a4a=function(){var a=a8;
if(e8[0]){var b=f8?d8:-1;do{b=(b+1)%50;var c=e8[b];g.Xb(a,function(d){d(c)})}while(b!=d8);
e8=Array(50);d8=-1;f8=!1}},c4a=function(a,b){var c=(Date.now()-e4a)/1E3;
c.toFixed&&(c=c.toFixed(3));var d=[];d.push("[",c+"s","] ");d.push("[","yt.mdx.remote","] ");d.push(a+": "+b,"\n");return d.join("")},g8=function(a){g.Qt.call(this);
this.I=a;this.screens=[]},f4a=function(a,b){var c=a.get(b.uuid)||a.get(b.id);
if(c)return a=c.name,c.id=b.id||c.id,c.name=b.name,c.token=b.token,c.uuid=b.uuid||c.uuid,c.name!=a;a.screens.push(b);return!0},g4a=function(a,b){var c=a.screens.length!=b.length;
a.screens=g.zl(a.screens,function(f){return!!x6(b,f)});
for(var d=0,e=b.length;d<e;d++)c=f4a(a,b[d])||c;return c},h4a=function(a,b){var c=a.screens.length;
a.screens=g.zl(a.screens,function(d){return!(d||b?!d!=!b?0:d.id==b.id:1)});
return a.screens.length<c},h8=function(a,b,c,d,e){g.Qt.call(this);
this.B=a;this.J=b;this.C=c;this.I=d;this.D=e;this.u=0;this.j=null;this.kc=NaN},j8=function(a){g8.call(this,"LocalScreenService");
this.u=a;this.j=NaN;i8(this);this.info("Initializing with "+v6(this.screens))},i4a=function(a){if(a.screens.length){var b=g.Oj(a.screens,function(d){return d.id}),c=W7(a.u,"/pairing/get_lounge_token_batch");
X7(a.u,c,{screen_ids:b.join(",")},(0,g.Oa)(a.qW,a),(0,g.Oa)(a.pW,a))}},i8=function(a){if(g.P("deprecate_pair_servlet_enabled"))return g4a(a,[]);
var b=c2a(i2a());b=g.zl(b,function(c){return!c.uuid});
return g4a(a,b)},k8=function(a,b){k2a(g.Oj(a.screens,a2a));
b&&j2a()},m8=function(a,b){g.Qt.call(this);
this.I=b;b=(b=g.Hu("yt-remote-online-screen-ids")||"")?b.split(","):[];for(var c={},d=this.I(),e=0,f=d.length;e<f;++e){var k=d[e].id;c[k]=g.Fb(b,k)}this.j=c;this.D=a;this.B=this.C=NaN;this.u=null;l8("Initialized with "+g.Zg(this.j))},n8=function(a,b,c){var d=W7(a.D,"/pairing/get_screen_availability");
X7(a.D,d,{lounge_token:b.token},(0,g.Oa)(function(e){e=e.screens||[];for(var f=0,k=e.length;f<k;++f)if(e[f].loungeToken==b.token){c("online"==e[f].status);return}c(!1)},a),(0,g.Oa)(function(){c(!1)},a))},o8=function(a,b){a:if(o6(b)!=o6(a.j))var c=!1;
else{c=g.qe(b);for(var d=0,e=c.length;d<e;++d)if(!a.j[c[d]]){c=!1;break a}c=!0}c||(l8("Updated online screens: "+g.Zg(a.j)),a.j=b,a.W("screenChange"));j4a(a)},p8=function(a){isNaN(a.B)||g.Qp(a.B);
a.B=g.Op((0,g.Oa)(a.WI,a),0<a.C&&a.C<g.Qa()?2E4:1E4)},l8=function(a){b8("OnlineScreenService",a)},k4a=function(a){var b={};
g.Xb(a.I(),function(c){c.token?b[c.token]=c.id:this.Re("Requesting availability of screen w/o lounge token.")});
return b},j4a=function(a){a=g.qe(g.le(a.j,function(b){return b}));
g.Sb(a);a.length?g.Gu("yt-remote-online-screen-ids",a.join(","),60):g.Iu("yt-remote-online-screen-ids")},q8=function(a,b){b=void 0===b?!1:b;
g8.call(this,"ScreenService");this.C=a;this.J=b;this.j=this.u=null;this.B=[];this.D={};l4a(this)},n4a=function(a,b,c,d,e,f){a.info("getAutomaticScreenByIds "+c+" / "+b);
c||(c=a.D[b]);var k=a.Ui(),l=c?y6(k,c):null;c&&(a.J||l)||(l=y6(k,b));if(l){l.uuid=b;var m=r8(a,l);n8(a.j,m,function(n){e(n?m:null)})}else c?m4a(a,c,(0,g.Oa)(function(n){var p=r8(this,new s6({name:d,
screenId:c,loungeToken:n,dialId:b||""}));n8(this.j,p,function(q){e(q?p:null)})},a),f):e(null)},o4a=function(a,b){for(var c=0,d=a.screens.length;c<d;++c)if(a.screens[c].name==b)return a.screens[c];
return null},p4a=function(a,b,c){n8(a.j,b,c)},m4a=function(a,b,c,d){a.info("requestLoungeToken_ for "+b);
var e={postParams:{screen_ids:b},method:"POST",context:a,onSuccess:function(f,k){f=k&&k.screens||[];f[0]&&f[0].screenId==b?c(f[0].loungeToken):d(Error("Missing lounge token in token response"))},
onError:function(){d(Error("Request screen lounge token failed"))}};
g.Tp(W7(a.C,"/pairing/get_lounge_token_batch"),e)},q4a=function(a){a.screens=a.u.Ui();
var b=a.D,c={},d;for(d in b)c[b[d]]=d;b=0;for(d=a.screens.length;b<d;++b){var e=a.screens[b];e.uuid=c[e.id]||""}a.info("Updated manual screens: "+v6(a.screens))},l4a=function(a){s8(a);
a.u=new j8(a.C);a.u.subscribe("screenChange",(0,g.Oa)(a.zW,a));q4a(a);a.J||(a.B=c2a(g.Hu("yt-remote-automatic-screen-cache")||[]));s8(a);a.info("Initializing automatic screens: "+v6(a.B));a.j=new m8(a.C,(0,g.Oa)(a.Ui,a,!0));a.j.subscribe("screenChange",(0,g.Oa)(function(){this.W("onlineScreenChange")},a))},r8=function(a,b){var c=a.get(b.id);
c?(c.uuid=b.uuid,b=c):((c=y6(a.B,b.uuid))?(c.id=b.id,c.token=b.token,b=c):a.B.push(b),a.J||r4a(a));s8(a);a.D[b.uuid]=b.id;g.Gu("yt-remote-device-id-map",a.D,31536E3);return b},r4a=function(a){a=g.zl(a.B,function(b){return"shortLived"!=b.idType});
g.Gu("yt-remote-automatic-screen-cache",g.Oj(a,a2a))},s8=function(a){a.D=g.Hu("yt-remote-device-id-map")||{}},t8=function(a,b,c){g.Qt.call(this);
this.ya=c;this.B=a;this.j=b;this.C=null},u8=function(a,b){a.C=b;
a.W("sessionScreen",a.C)},s4a=function(a,b){a.C&&(a.C.token=b,r8(a.B,a.C));
a.W("sessionScreen",a.C)},v8=function(a,b){b8(a.ya,b)},w8=function(a,b,c){t8.call(this,a,b,"CastSession");
var d=this;this.config_=c;this.u=null;this.Z=(0,g.Oa)(this.qT,this);this.ma=(0,g.Oa)(this.I_,this);this.V=g.Op(function(){t4a(d,null)},12E4);
this.J=this.D=this.I=this.P=0;this.ea=!1;this.U="unknown"},x8=function(a,b){g.Qp(a.J);
a.J=0;0==b?u4a(a):a.J=g.Op(function(){u4a(a)},b)},u4a=function(a){v4a(a,"getLoungeToken");
g.Qp(a.D);a.D=g.Op(function(){w4a(a,null)},3E4)},v4a=function(a,b){a.info("sendYoutubeMessage_: "+b+" "+g.Zg());
var c={};c.type=b;a.u?a.u.sendMessage("urn:x-cast:com.google.youtube.mdx",c,function(){},(0,g.Oa)(function(){v8(this,"Failed to send message: "+b+".")},a)):v8(a,"Sending yt message without session: "+g.Zg(c))},y8=function(a,b){b?(a.info("onConnectedScreenId_: Received screenId: "+b),a.getScreen()&&a.getScreen().id==b||a.QN(b,function(c){u8(a,c)},function(){return a.Bh()},5)):a.Bh(Error("Waiting for session status timed out."))},y4a=function(a,b,c){a.info("onConnectedScreenData_: Received screenData: "+
JSON.stringify(b));
var d=new s6(b);x4a(a,d,function(e){e?(a.ea=!0,r8(a.B,d),u8(a,d),a.U="unknown",x8(a,c)):(g.yp(Error("CastSession, RemoteScreen from screenData: "+JSON.stringify(b)+" is not online.")),a.Bh())},5)},t4a=function(a,b){g.Qp(a.V);
a.V=0;b?a.config_.enableCastLoungeToken&&b.loungeToken?b.deviceId?a.getScreen()&&a.getScreen().uuid==b.deviceId||(b.loungeTokenRefreshIntervalMs?y4a(a,{name:a.j.friendlyName,screenId:b.screenId,loungeToken:b.loungeToken,dialId:b.deviceId,screenIdType:"shortLived"},b.loungeTokenRefreshIntervalMs):(g.yp(Error("No loungeTokenRefreshIntervalMs presents in mdxSessionStatusData: "+JSON.stringify(b)+".")),y8(a,b.screenId))):(g.yp(Error("No device id presents in mdxSessionStatusData: "+JSON.stringify(b)+
".")),y8(a,b.screenId)):y8(a,b.screenId):a.Bh(Error("Waiting for session status timed out."))},w4a=function(a,b){g.Qp(a.D);
a.D=0;var c=null;if(b)if(b.loungeToken){var d;(null==(d=a.getScreen())?void 0:d.token)==b.loungeToken&&(c="staleLoungeToken")}else c="missingLoungeToken";else c="noLoungeTokenResponse";c?(a.info("Did not receive a new lounge token in onLoungeToken_ with data: "+(JSON.stringify(b)+", error: "+c)),a.U=c,x8(a,3E4)):(s4a(a,b.loungeToken),a.ea=!1,a.U="unknown",x8(a,b.loungeTokenRefreshIntervalMs))},x4a=function(a,b,c,d){g.Qp(a.I);
a.I=0;p4a(a.B,b,function(e){e||0>d?c(e):a.I=g.Op(function(){x4a(a,b,c,d-1)},300)})},z4a=function(a){g.Qp(a.P);
a.P=0;g.Qp(a.I);a.I=0;g.Qp(a.V);a.V=0;g.Qp(a.D);a.D=0;g.Qp(a.J);a.J=0},z8=function(a,b,c,d){t8.call(this,a,b,"DialSession");
this.config_=d;this.u=this.P=null;this.ma="";this.Ka=c;this.Ga=null;this.V=function(){};
this.U=NaN;this.Ca=(0,g.Oa)(this.rT,this);this.D=function(){};
this.J=this.I=0;this.Z=!1;this.ea="unknown"},A8=function(a){var b;
return!!(a.config_.enableDialLoungeToken&&(null==(b=a.u)?0:b.getDialAppInfo))},A4a=function(a){a.D=a.B.WK(a.ma,a.j.label,a.j.friendlyName,A8(a),function(b,c){a.D=function(){};
a.Z=!0;u8(a,b);"shortLived"==b.idType&&0<c&&B8(a,c)},function(b){a.D=function(){};
a.Bh(b)})},B4a=function(a){var b={};
b.pairingCode=a.ma;b.theme=a.Ka;m2a()&&(b.env_useStageMdx=1);return g.jh(b)},C8=function(a){return new Promise(function(b){a.ma=w6();
if(a.Ga){var c=new chrome.cast.DialLaunchResponse(!0,B4a(a));b(c);A4a(a)}else a.V=function(){g.Qp(a.U);a.V=function(){};
a.U=NaN;var d=new chrome.cast.DialLaunchResponse(!0,B4a(a));b(d);A4a(a)},a.U=g.Op(function(){a.V()},100)})},D4a=function(a,b,c){a.info("initOnConnectedScreenDataPromise_: Received screenData: "+JSON.stringify(b));
var d=new s6(b);return(new Promise(function(e){C4a(a,d,function(f){f?(a.Z=!0,r8(a.B,d),u8(a,d),B8(a,c)):g.yp(Error("DialSession, RemoteScreen from screenData: "+JSON.stringify(b)+" is not online."));e(f)},5)})).then(function(e){return e?new chrome.cast.DialLaunchResponse(!1):C8(a)})},E4a=function(a,b){var c=a.P.receiver.label,d=a.j.friendlyName;
return(new Promise(function(e){n4a(a.B,c,b,d,function(f){f&&f.token&&u8(a,f);e(f)},function(f){v8(a,"Failed to get DIAL screen: "+f);
e(null)})})).then(function(e){return e&&e.token?new chrome.cast.DialLaunchResponse(!1):C8(a)})},C4a=function(a,b,c,d){g.Qp(a.I);
a.I=0;p4a(a.B,b,function(e){e||0>d?c(e):a.I=g.Op(function(){C4a(a,b,c,d-1)},300)})},B8=function(a,b){a.info("getDialAppInfoWithTimeout_ "+b);
A8(a)&&(g.Qp(a.J),a.J=0,0==b?F4a(a):a.J=g.Op(function(){F4a(a)},b))},F4a=function(a){A8(a)&&a.u.getDialAppInfo(function(b){a.info("getDialAppInfo dialLaunchData: "+JSON.stringify(b));
b=b.extraData||{};var c=null;if(b.loungeToken){var d;(null==(d=a.getScreen())?void 0:d.token)==b.loungeToken&&(c="staleLoungeToken")}else c="missingLoungeToken";c?(a.ea=c,B8(a,3E4)):(a.Z=!1,a.ea="unknown",s4a(a,b.loungeToken),B8(a,b.loungeTokenRefreshIntervalMs))},function(b){a.info("getDialAppInfo error: "+b);
a.ea="noLoungeTokenResponse";B8(a,3E4)})},G4a=function(a){g.Qp(a.I);
a.I=0;g.Qp(a.J);a.J=0;a.D();a.D=function(){};
g.Qp(a.U)},D8=function(a,b){t8.call(this,a,b,"ManualSession");
this.u=g.Op((0,g.Oa)(this.Xu,this,null),150)},E8=function(a,b){g.Qt.call(this);
this.config_=b;this.u=a;this.P=b.appId||"233637DE";this.C=b.theme||"cl";this.U=b.disableCastApi||!1;this.I=b.forceMirroring||!1;this.j=null;this.J=!1;this.B=[];this.D=(0,g.Oa)(this.EZ,this)},H4a=function(a,b){return b?g.Db(a.B,function(c){return t6(b,c.label)},a):null},F8=function(a){b8("Controller",a)},Z3a=function(a){window.chrome&&chrome.cast&&chrome.cast.logMessage&&chrome.cast.logMessage(a)},G8=function(a){return a.J||!!a.B.length||!!a.j},H8=function(a,b,c){b!=a.j&&(g.be(a.j),(a.j=b)?(c?a.W("yt-remote-cast2-receiver-resumed",
b.j):a.W("yt-remote-cast2-receiver-selected",b.j),b.subscribe("sessionScreen",(0,g.Oa)(a.hQ,a,b)),b.subscribe("sessionFailed",function(){return I4a(a,b)}),b.getScreen()?a.W("yt-remote-cast2-session-change",b.getScreen()):c&&a.j.Xu(null)):a.W("yt-remote-cast2-session-change",null))},I4a=function(a,b){a.j==b&&a.W("yt-remote-cast2-session-failed")},J4a=function(a){var b=a.u.VK(),c=a.j&&a.j.j;
a=g.Oj(b,function(d){c&&t6(d,c.label)&&(c=null);var e=d.uuid?d.uuid:d.id,f=H4a(this,d);f?(f.label=e,f.friendlyName=d.name):(f=new chrome.cast.Receiver(e,d.name),f.receiverType=chrome.cast.ReceiverType.CUSTOM);return f},a);
c&&(c.receiverType!=chrome.cast.ReceiverType.CUSTOM&&(c=new chrome.cast.Receiver(c.label,c.friendlyName),c.receiverType=chrome.cast.ReceiverType.CUSTOM),a.push(c));return a},O4a=function(a,b,c,d){d.disableCastApi?I8("Cannot initialize because disabled by Mdx config."):K4a()?L4a(b,d)&&(J8(!0),window.chrome&&chrome.cast&&chrome.cast.isAvailable?M4a(a,c):(window.__onGCastApiAvailable=function(e,f){e?M4a(a,c):(K8("Failed to load cast API: "+f),L8(!1),J8(!1),g.Iu("yt-remote-cast-available"),g.Iu("yt-remote-cast-receiver"),
N4a(),c(!1))},d.loadCastApiSetupScript?g.Ku("https://web.archive.org/web/20220618064156/https://www.gstatic.com/cv/js/sender/v1/cast_sender.js"):0<=window.navigator.userAgent.indexOf("Android")&&0<=window.navigator.userAgent.indexOf("Chrome/")&&window.navigator.presentation?60<=F6()&&t2a():!window.chrome||!window.navigator.presentation||0<=window.navigator.userAgent.indexOf("Edge")?H6():89<=F6()?v2a():(I6(),G6(u2a.map(q2a))))):I8("Cannot initialize because not running Chrome")},N4a=function(){I8("dispose");
var a=M8();a&&a.dispose();g.Ea("yt.mdx.remote.cloudview.instance_",null);P4a(!1);g.ht(N8);N8.length=0},O8=function(){return!!g.Hu("yt-remote-cast-installed")},Q4a=function(){var a=g.Hu("yt-remote-cast-receiver");
return a?a.friendlyName:null},R4a=function(){I8("clearCurrentReceiver");
g.Iu("yt-remote-cast-receiver")},S4a=function(){return O8()?M8()?M8().getCastSession():(K8("getCastSelector: Cast is not initialized."),null):(K8("getCastSelector: Cast API is not installed!"),null)},Q8=function(){O8()?M8()?P8()?(I8("Requesting cast selector."),M8().requestSession()):(I8("Wait for cast API to be ready to request the session."),N8.push(g.gt("yt-remote-cast2-api-ready",Q8))):K8("requestCastSelector: Cast is not initialized."):K8("requestCastSelector: Cast API is not installed!")},R8=
function(a,b){P8()?M8().setConnectedScreenStatus(a,b):K8("setConnectedScreenStatus called before ready.")},K4a=function(){var a=0<=g.kb().search(/ (CrMo|Chrome|CriOS)\//);
return g.Vy||a},T4a=function(a,b){M8().init(a,b)},L4a=function(a,b){var c=!1;
M8()||(a=new E8(a,b),a.subscribe("yt-remote-cast2-availability-change",function(d){g.Gu("yt-remote-cast-available",d);q6("yt-remote-cast2-availability-change",d)}),a.subscribe("yt-remote-cast2-receiver-selected",function(d){I8("onReceiverSelected: "+d.friendlyName);
g.Gu("yt-remote-cast-receiver",d);q6("yt-remote-cast2-receiver-selected",d)}),a.subscribe("yt-remote-cast2-receiver-resumed",function(d){I8("onReceiverResumed: "+d.friendlyName);
g.Gu("yt-remote-cast-receiver",d);q6("yt-remote-cast2-receiver-resumed",d)}),a.subscribe("yt-remote-cast2-session-change",function(d){I8("onSessionChange: "+u6(d));
d||g.Iu("yt-remote-cast-receiver");q6("yt-remote-cast2-session-change",d)}),g.Ea("yt.mdx.remote.cloudview.instance_",a),c=!0);
I8("cloudview.createSingleton_: "+c);return c},M8=function(){return g.Fa("yt.mdx.remote.cloudview.instance_")},M4a=function(a,b){L8(!0);
J8(!1);T4a(a,function(c){c?(P4a(!0),g.jt("yt-remote-cast2-api-ready")):(K8("Failed to initialize cast API."),L8(!1),g.Iu("yt-remote-cast-available"),g.Iu("yt-remote-cast-receiver"),N4a());b(c)})},I8=function(a){b8("cloudview",a)},K8=function(a){b8("cloudview",a)},L8=function(a){I8("setCastInstalled_ "+a);
g.Gu("yt-remote-cast-installed",a)},P8=function(){return!!g.Fa("yt.mdx.remote.cloudview.apiReady_")},P4a=function(a){I8("setApiReady_ "+a);
g.Ea("yt.mdx.remote.cloudview.apiReady_",a)},J8=function(a){g.Ea("yt.mdx.remote.cloudview.initializing_",a)},S8=function(a){this.index=-1;
this.videoId=this.listId="";this.volume=this.playerState=-1;this.muted=!1;this.audioTrackId=null;this.I=this.J=0;this.trackData=null;this.hasNext=this.lm=!1;this.P=this.D=this.j=this.C=0;this.B=NaN;this.u=!1;this.reset(a)},T8=function(a){a.audioTrackId=null;
a.trackData=null;a.playerState=-1;a.lm=!1;a.hasNext=!1;a.J=0;a.I=g.Qa();a.C=0;a.j=0;a.D=0;a.P=0;a.B=NaN;a.u=!1},U8=function(a){return a.isPlaying()?(g.Qa()-a.I)/1E3:0},V8=function(a,b){a.J=b;
a.I=g.Qa()},W8=function(a){switch(a.playerState){case 1:case 1081:return(g.Qa()-a.I)/1E3+a.J;
case -1E3:return 0}return a.J},X8=function(a,b,c){var d=a.videoId;
a.videoId=b;a.index=c;b!=d&&T8(a)},Y8=function(a){var b={};
b.index=a.index;b.listId=a.listId;b.videoId=a.videoId;b.playerState=a.playerState;b.volume=a.volume;b.muted=a.muted;b.audioTrackId=a.audioTrackId;b.trackData=g.Ce(a.trackData);b.hasPrevious=a.lm;b.hasNext=a.hasNext;b.playerTime=a.J;b.playerTimeAt=a.I;b.seekableStart=a.C;b.seekableEnd=a.j;b.duration=a.D;b.loadedTime=a.P;b.liveIngestionTime=a.B;return b},$8=function(a,b){g.Qt.call(this);
this.B=0;this.C=a;this.I=[];this.D=new T3a;this.u=this.j=null;this.U=(0,g.Oa)(this.qY,this);this.J=(0,g.Oa)(this.Ry,this);this.P=(0,g.Oa)(this.pY,this);this.V=(0,g.Oa)(this.tY,this);var c=0;a?(c=a.getProxyState(),3!=c&&(a.subscribe("proxyStateChange",this.pJ,this),U4a(this))):c=3;0!=c&&(b?this.pJ(c):g.Op((0,g.Oa)(function(){this.pJ(c)},this),0));
(a=S4a())&&Z8(this,a);this.subscribe("yt-remote-cast2-session-change",this.V)},a9=function(a){return new S8(a.C.getPlayerContextData())},U4a=function(a){g.Xb("nowAutoplaying autoplayDismissed remotePlayerChange remoteQueueChange autoplayModeChange autoplayUpNext previousNextChange multiStateLoopEnabled loopModeChange".split(" "),function(b){this.I.push(this.C.subscribe(b,g.Pa(this.CZ,b),this))},a)},V4a=function(a){g.Xb(a.I,function(b){this.C.unsubscribeByKey(b)},a);
a.I.length=0},b9=function(a){return 1==a.getState()},c9=function(a,b){var c=a.D;
50>c.j.length+c.u.length&&a.D.enqueue(b)},e9=function(a,b,c){var d=a9(a);
V8(d,c);-1E3!=d.playerState&&(d.playerState=b);d9(a,d)},f9=function(a,b,c){a.C.sendMessage(b,c)},d9=function(a,b){V4a(a);
a.C.setPlayerContextData(Y8(b));U4a(a)},Z8=function(a,b){a.u&&(a.u.removeUpdateListener(a.U),a.u.removeMediaListener(a.J),a.Ry(null));
a.u=b;a.u&&(c8("Setting cast session: "+a.u.sessionId),a.u.addUpdateListener(a.U),a.u.addMediaListener(a.J),a.u.media.length&&a.Ry(a.u.media[0]))},W4a=function(a){var b=a.j.media,c=a.j.customData;
if(b&&c){var d=a9(a);b.contentId!=d.videoId&&c8("Cast changing video to: "+b.contentId);d.videoId=b.contentId;d.playerState=c.playerState;V8(d,a.j.getEstimatedTime());d9(a,d)}else c8("No cast media video. Ignoring state update.")},g9=function(a,b,c){return(0,g.Oa)(function(d){this.Re("Failed to "+b+" with cast v2 channel. Error code: "+d.code);
d.code!=chrome.cast.ErrorCode.TIMEOUT&&(this.Re("Retrying "+b+" using MDx browser channel."),f9(this,b,c))},a)},j9=function(a,b,c,d){d=void 0===d?!1:d;
g.Qt.call(this);var e=this;this.I=NaN;this.ma=!1;this.U=this.P=this.Z=this.ea=NaN;this.V=[];this.D=this.J=this.C=this.j=this.u=null;this.Ga=a;this.Ca=d;this.V.push(g.Os(window,"beforeunload",function(){e.uu(2)}));
this.B=[];this.j=new S8;this.Ka=b.id;this.ya=b.idType;this.u=Y3a(this.Ga,c,this.aL,"shortLived"==this.ya,this.Ka);this.u.Ja("channelOpened",function(){X4a(e)});
this.u.Ja("channelClosed",function(){h9("Channel closed");isNaN(e.I)?D6(!0):D6();e.dispose()});
this.u.Ja("channelError",function(f){D6();isNaN(e.Tx())?(1==f&&"shortLived"==e.ya&&e.W("browserChannelAuthError",f),h9("Channel error: "+f+" without reconnection"),e.dispose()):(e.ma=!0,h9("Channel error: "+f+" with reconnection in "+e.Tx()+" ms"),i9(e,2))});
this.u.Ja("channelMessage",function(f){Y4a(e,f)});
this.u.ao(b.token);this.subscribe("remoteQueueChange",function(){var f=e.j.videoId;g.Ju()&&g.Gu("yt-remote-session-video-id",f)})},Z4a=function(a){return g.Db(a.B,function(b){return"LOUNGE_SCREEN"==b.type})},h9=function(a){b8("conn",a)},i9=function(a,b){a.W("proxyStateChange",b)},$4a=function(a){a.I=g.Op(function(){h9("Connecting timeout");
a.uu(1)},2E4)},k9=function(a){g.Qp(a.I);
a.I=NaN},l9=function(a){g.Qp(a.ea);
a.ea=NaN},a5a=function(a){m9(a);
a.Z=g.Op(function(){n9(a,"getNowPlaying")},2E4)},m9=function(a){g.Qp(a.Z);
a.Z=NaN},X4a=function(a){h9("Channel opened");
a.ma&&(a.ma=!1,l9(a),a.ea=g.Op(function(){h9("Timing out waiting for a screen.");a.uu(1)},15E3))},c5a=function(a,b){var c=null;
if(b){var d=Z4a(a);d&&(c={clientName:d.clientName,deviceMake:d.brand,deviceModel:d.model,osVersion:d.osVersion})}g.Ea("yt.mdx.remote.remoteClient_",c);b&&(k9(a),l9(a));c=a.u.Pu()&&isNaN(a.I);b==c?b&&(i9(a,1),n9(a,"getSubtitlesTrack")):b?(a.PN()&&a.j.reset(),i9(a,1),n9(a,"getNowPlaying"),b5a(a)):a.uu(1)},d5a=function(a,b){var c=b.params.videoId;
delete b.params.videoId;c==a.j.videoId&&(g.xe(b.params)?a.j.trackData=null:a.j.trackData=b.params,a.W("remotePlayerChange"))},e5a=function(a,b,c){var d=b.params.videoId||b.params.video_id,e=parseInt(b.params.currentIndex,10);
a.j.listId=b.params.listId||a.j.listId;X8(a.j,d,e);a.W("remoteQueueChange",c)},g5a=function(a,b){b.params=b.params||{};
e5a(a,b,"NOW_PLAYING_MAY_CHANGE");f5a(a,b);a.W("autoplayDismissed")},f5a=function(a,b){var c=parseInt(b.params.currentTime||b.params.current_time,10);
V8(a.j,isNaN(c)?0:c);c=parseInt(b.params.state,10);c=isNaN(c)?-1:c;-1==c&&-1E3==a.j.playerState&&(c=-1E3);a.j.playerState=c;c=Number(b.params.loadedTime);a.j.P=isNaN(c)?0:c;a.j.Vk(Number(b.params.duration));c=a.j;var d=Number(b.params.liveIngestionTime);c.B=d;c.u=isNaN(d)?!1:!0;c=a.j;d=Number(b.params.seekableStartTime);b=Number(b.params.seekableEndTime);c.C=isNaN(d)?0:d;c.j=isNaN(b)?0:b;1==a.j.playerState?a5a(a):m9(a);a.W("remotePlayerChange")},h5a=function(a,b){if(-1E3!=a.j.playerState){var c=1085;
switch(parseInt(b.params.adState,10)){case 1:c=1081;break;case 2:c=1084;break;case 0:c=1083}a.j.playerState=c;b=parseInt(b.params.currentTime,10);V8(a.j,isNaN(b)?0:b);a.W("remotePlayerChange")}},i5a=function(a,b){var c="true"==b.params.muted;
a.j.volume=parseInt(b.params.volume,10);a.j.muted=c;a.W("remotePlayerChange")},j5a=function(a,b){a.J=b.params.videoId;
a.W("nowAutoplaying",parseInt(b.params.timeout,10))},k5a=function(a,b){a.J=b.params.videoId||null;
a.W("autoplayUpNext",a.J)},l5a=function(a,b){a.D=b.params.autoplayMode;
a.W("autoplayModeChange",a.D);"DISABLED"==a.D&&a.W("autoplayDismissed")},m5a=function(a,b){var c="true"==b.params.hasNext;
a.j.lm="true"==b.params.hasPrevious;a.j.hasNext=c;a.W("previousNextChange")},Y4a=function(a,b){b=b.message;
b.params?h9("Received: action="+b.action+", params="+g.Zg(b.params)):h9("Received: action="+b.action+" {}");switch(b.action){case "loungeStatus":b=p6(b.params.devices);a.B=g.Oj(b,function(d){return new r6(d)});
b=!!g.Db(a.B,function(d){return"LOUNGE_SCREEN"==d.type});
c5a(a,b);b=a.xO("mlm");a.W("multiStateLoopEnabled",b);break;case "loungeScreenDisconnected":g.Jb(a.B,function(d){return"LOUNGE_SCREEN"==d.type});
c5a(a,!1);break;case "remoteConnected":var c=new r6(p6(b.params.device));g.Db(a.B,function(d){return d.equals(c)})||U1a(a.B,c);
break;case "remoteDisconnected":c=new r6(p6(b.params.device));g.Jb(a.B,function(d){return d.equals(c)});
break;case "gracefulDisconnect":break;case "playlistModified":e5a(a,b,"QUEUE_MODIFIED");break;case "nowPlaying":g5a(a,b);break;case "onStateChange":f5a(a,b);break;case "onAdStateChange":h5a(a,b);break;case "onVolumeChanged":i5a(a,b);break;case "onSubtitlesTrackChanged":d5a(a,b);break;case "nowAutoplaying":j5a(a,b);break;case "autoplayDismissed":a.W("autoplayDismissed");break;case "autoplayUpNext":k5a(a,b);break;case "onAutoplayModeChanged":l5a(a,b);break;case "onHasPreviousNextChanged":m5a(a,b);break;
case "requestAssistedSignIn":a.W("assistedSignInRequested",b.params.authCode);break;case "onLoopModeChanged":a.W("loopModeChange",b.params.loopMode);break;default:h9("Unrecognized action: "+b.action)}},b5a=function(a){g.Qp(a.U);
a.U=g.Op(function(){a.uu(1)},864E5)},n9=function(a,b,c){c?h9("Sending: action="+b+", params="+g.Zg(c)):h9("Sending: action="+b);
a.u.sendMessage(b,c)},o9=function(a){g8.call(this,"ScreenServiceProxy");
this.Ef=a;this.j=[];this.j.push(this.Ef.$_s("screenChange",(0,g.Oa)(this.vT,this)));this.j.push(this.Ef.$_s("onlineScreenChange",(0,g.Oa)(this.kZ,this)))},q5a=function(a,b){l2a();
if(!E6||!E6.get("yt-remote-disable-remote-module-for-dev")){b=g.O("MDX_CONFIG")||b;e2a();C6();p9||(p9=new V7(b?b.loungeApiHost:void 0),m2a()&&(p9.j="/api/loungedev"));q9||(q9=g.Fa("yt.mdx.remote.deferredProxies_")||[],g.Ea("yt.mdx.remote.deferredProxies_",q9));n5a();var c=r9();if(!c){var d=new q8(p9,b?b.disableAutomaticScreenCache||!1:!1);g.Ea("yt.mdx.remote.screenService_",d);c=r9();var e={};b&&(e={appId:b.appId,disableDial:b.disableDial,theme:b.theme,loadCastApiSetupScript:b.loadCastApiSetupScript,
disableCastApi:b.disableCastApi,enableDialLoungeToken:b.enableDialLoungeToken,enableCastLoungeToken:b.enableCastLoungeToken,forceMirroring:b.forceMirroring});g.Ea("yt.mdx.remote.enableConnectWithInitialState_",b?b.enableConnectWithInitialState||!1:!1);O4a(a,d,function(f){f?s9()&&R8(s9(),"YouTube TV"):d.subscribe("onlineScreenChange",function(){q6("yt-remote-receiver-availability-change")})},e)}b&&!g.Fa("yt.mdx.remote.initialized_")&&(g.Ea("yt.mdx.remote.initialized_",!0),t9("Initializing: "+g.Zg(b)),
u9.push(g.gt("yt-remote-cast2-api-ready",function(){q6("yt-remote-api-ready")})),u9.push(g.gt("yt-remote-cast2-availability-change",function(){q6("yt-remote-receiver-availability-change")})),u9.push(g.gt("yt-remote-cast2-receiver-selected",function(){v9(null);
q6("yt-remote-auto-connect","cast-selector-receiver")})),u9.push(g.gt("yt-remote-cast2-receiver-resumed",function(){q6("yt-remote-receiver-resumed","cast-selector-receiver")})),u9.push(g.gt("yt-remote-cast2-session-change",o5a)),u9.push(g.gt("yt-remote-connection-change",function(f){f?R8(s9(),"YouTube TV"):w9()||(R8(null,null),R4a())})),u9.push(g.gt("yt-remote-cast2-session-failed",function(){q6("yt-remote-connection-failed")})),a=x9(),b.isAuto&&(a.id+="#dial"),e=b.capabilities||[],g.P("desktop_enable_autoplay")&&
e.push("atp"),0<e.length&&(a.capabilities=e),a.name=b.device,a.app=b.app,(b=b.theme)&&(a.theme=b),t9(" -- with channel params: "+g.Zg(a)),a?(g.Gu("yt-remote-session-app",a.app),g.Gu("yt-remote-session-name",a.name)):(g.Iu("yt-remote-session-app"),g.Iu("yt-remote-session-name")),g.Ea("yt.mdx.remote.channelParams_",a),c.start(),s9()||p5a())}},r5a=function(){var a=r9().Ef.$_gos();
var b=y9();b&&z9()&&(x6(a,b)||a.push(b));return d2a(a)},A9=function(){var a=s5a();
!a&&O8()&&Q4a()&&(a={key:"cast-selector-receiver",name:Q4a()});return a},s5a=function(){var a=r5a(),b=y9();
b||(b=w9());return g.Db(a,function(c){return b&&t6(b,c.key)?!0:!1})},y9=function(){var a=s9();
if(!a)return null;var b=r9().Ui();return y6(b,a)},o5a=function(a){t9("remote.onCastSessionChange_: "+u6(a));
if(a){var b=y9();if(b&&b.id==a.id){if(R8(b.id,"YouTube TV"),"shortLived"==a.idType&&(a=a.token))B9&&(B9.token=a),(b=z9())&&b.ao(a)}else b&&C9(),D9(a,1)}else z9()&&C9()},C9=function(){P8()?M8().stopSession():K8("stopSession called before API ready.");
var a=z9();a&&(a.disconnect(1),E9(null))},F9=function(){var a=z9();
return!!a&&3!=a.getProxyState()},t9=function(a){b8("remote",a)},r9=function(){if(!G9){var a=g.Fa("yt.mdx.remote.screenService_");
G9=a?new o9(a):null}return G9},s9=function(){return g.Fa("yt.mdx.remote.currentScreenId_")},t5a=function(a){g.Ea("yt.mdx.remote.currentScreenId_",a)},u5a=function(){return g.Fa("yt.mdx.remote.connectData_")},v9=function(a){g.Ea("yt.mdx.remote.connectData_",a)},z9=function(){return g.Fa("yt.mdx.remote.connection_")},E9=function(a){var b=z9();
v9(null);a||t5a("");g.Ea("yt.mdx.remote.connection_",a);q9&&(g.Xb(q9,function(c){c(a)}),q9.length=0);
b&&!a?q6("yt-remote-connection-change",!1):!b&&a&&q6("yt-remote-connection-change",!0)},w9=function(){var a=g.Ju();
if(!a)return null;var b=r9();if(!b)return null;b=b.Ui();return y6(b,a)},D9=function(a,b){s9();
y9()&&y9();if(H9)B9=a;else{t5a(a.id);var c=g.Fa("yt.mdx.remote.enableConnectWithInitialState_")||!1;a=new j9(p9,a,x9(),c);a.connect(b,u5a());a.subscribe("beforeDisconnect",function(d){q6("yt-remote-before-disconnect",d)});
a.subscribe("beforeDispose",function(){z9()&&(z9(),E9(null))});
a.subscribe("browserChannelAuthError",function(){var d=y9();d&&"shortLived"==d.idType&&(P8()?M8().handleBrowserChannelAuthError():K8("refreshLoungeToken called before API ready."))});
E9(a)}},p5a=function(){var a=w9();
a?(t9("Resume connection to: "+u6(a)),D9(a,0)):(D6(),R4a(),t9("Skipping connecting because no session screen found."))},n5a=function(){var a=x9();
if(g.xe(a)){a=B6();var b=g.Hu("yt-remote-session-name")||"",c=g.Hu("yt-remote-session-app")||"";a={device:"REMOTE_CONTROL",id:a,name:b,app:c,mdxVersion:3};g.Ea("yt.mdx.remote.channelParams_",a)}},x9=function(){return g.Fa("yt.mdx.remote.channelParams_")||{}},I9=function(a,b,c){g.I.call(this);
var d=this;this.u=a;this.G=b;this.Wb=c;this.events=new g.Ry(this);this.V=this.events.N(this.G,"onVolumeChange",function(e){v5a(d,e)});
this.D=!1;this.I=new g.dF(64);this.j=new g.K(this.rR,500,this);this.B=new g.K(this.sR,1E3,this);this.P=new K6(this.n1,0,this);this.C={};this.U=new g.K(this.bS,1E3,this);this.J=new L6(this.seekTo,1E3,this);g.J(this,this.events);this.events.N(b,"onCaptionsTrackListChanged",this.VY);this.events.N(b,"captionschanged",this.nY);this.events.N(b,"captionssettingschanged",this.zR);this.events.N(b,"videoplayerreset",this.GC);this.events.N(b,"mdxautoplaycancel",function(){d.Wb.jN()});
a=this.Wb;a.isDisposed();a.subscribe("proxyStateChange",this.eQ,this);a.subscribe("remotePlayerChange",this.Wy,this);a.subscribe("remoteQueueChange",this.GC,this);a.subscribe("previousNextChange",this.bQ,this);a.subscribe("nowAutoplaying",this.UP,this);a.subscribe("autoplayDismissed",this.xP,this);g.J(this,this.j);g.J(this,this.B);g.J(this,this.P);g.J(this,this.U);g.J(this,this.J);this.zR();this.GC();this.Wy()},v5a=function(a,b){if(J9(a)){a.Wb.unsubscribe("remotePlayerChange",a.Wy,a);
var c=Math.round(b.volume);b=!!b.muted;var d=a9(a.Wb);if(c!==d.volume||b!==d.muted)a.Wb.setVolume(c,b),a.U.start();a.Wb.subscribe("remotePlayerChange",a.Wy,a)}},w5a=function(a){a.Rb(0);
a.j.stop();a.Pb(new g.dF(64))},K9=function(a,b){if(J9(a)&&!a.D){var c=null;
b&&(c={style:a.G.getSubtitlesUserSettings()},g.De(c,b));a.Wb.ZK(a.G.getVideoData(1).videoId,c);a.C=a9(a.Wb).trackData}},L9=function(a,b){var c=a.G.getPlaylist();
if(null==c?0:c.listId){var d=c.index;var e=c.listId.toString()}c=a.G.getVideoData(1);a.Wb.playVideo(c.videoId,b,d,e,c.playerParams,c.ma,T1a(c));a.Pb(new g.dF(1))},x5a=function(a,b){if(b){var c=a.G.getOption("captions","tracklist",{pO:1});
c&&c.length?(a.G.setOption("captions","track",b),a.D=!1):(a.G.loadModule("captions"),a.D=!0)}else a.G.setOption("captions","track",{})},J9=function(a){return a9(a.Wb).videoId===a.G.getVideoData(1).videoId},M9=function(){g.V.call(this,{F:"div",
L:"ytp-mdx-popup-dialog",T:{role:"dialog"},S:[{F:"div",L:"ytp-mdx-popup-dialog-inner-content",S:[{F:"div",L:"ytp-mdx-popup-title",X:"You're signed out"},{F:"div",L:"ytp-mdx-popup-description",X:"Videos you watch may be added to the TV's watch history and influence TV recommendations. To avoid this, cancel and sign in to YouTube on your computer."},{F:"div",L:"ytp-mdx-privacy-popup-buttons",S:[{F:"button",Ba:["ytp-button","ytp-mdx-privacy-popup-cancel"],X:"Cancel"},{F:"button",Ba:["ytp-button","ytp-mdx-privacy-popup-confirm"],
X:"Confirm"}]}]}]});this.j=new g.MG(this,250);this.cancelButton=this.va("ytp-mdx-privacy-popup-cancel");this.confirmButton=this.va("ytp-mdx-privacy-popup-confirm");g.J(this,this.j);this.N(this.cancelButton,"click",this.u);this.N(this.confirmButton,"click",this.B)},N9=function(a){g.V.call(this,{F:"div",
L:"ytp-remote",S:[{F:"div",L:"ytp-remote-display-status",S:[{F:"div",L:"ytp-remote-display-status-icon",S:[g.sBa()]},{F:"div",L:"ytp-remote-display-status-text",X:"{{statustext}}"}]}]});this.api=a;this.j=new g.MG(this,250);g.J(this,this.j);this.N(a,"presentingplayerstatechange",this.onStateChange);y5a(this,a.vb())},y5a=function(a,b){if(3===a.api.getPresentingPlayerType()){var c={RECEIVER_NAME:a.api.getOption("remote","currentReceiver").name};
b=g.U(b,128)?g.LE("Error on $RECEIVER_NAME",c):b.isPlaying()||g.U(b,4)?g.LE("Playing on $RECEIVER_NAME",c):g.LE("Connected to $RECEIVER_NAME",c);a.updateValue("statustext",b);a.j.show()}else a.j.hide()},O9=function(a,b){g.cM.call(this,"Play on",0,a,b);
this.G=a;this.aq={};this.N(a,"onMdxReceiversChange",this.C);this.N(a,"presentingplayerstatechange",this.C);this.C()},P9=function(a){g.EI.call(this,a);
this.ym={key:w6(),name:"This computer"};this.yj=null;this.subscriptions=[];this.HI=this.Wb=null;this.aq=[this.ym];this.Uo=this.ym;this.Od=new g.dF(64);this.KO=0;this.hg=-1;this.gz=!1;this.ez=this.zv=null;if(!g.MA(this.player.R())&&!g.NA(this.player.R())){a=this.player;var b=g.eI(a);b&&(b=b.vp())&&(b=new O9(a,b),g.J(this,b));b=new N9(a);g.J(this,b);g.oI(a,b.element,4);this.zv=new M9;g.J(this,this.zv);g.oI(a,this.zv.element,4);this.gz=!!w9()}},Q9=function(a){a.ez&&(a.player.removeEventListener("presentingplayerstatechange",
a.ez),a.ez=null)},z5a=function(a,b,c){a.Od=c;
a.player.W("presentingplayerstatechange",new g.wE(c,b))},R9=function(a,b){if(b.key!==a.Uo.key)if(b.key===a.ym.key)C9();
else{var c;(c=!a.player.R().K("mdx_enable_privacy_disclosure_ui"))||(c=((c=g.O("PLAYER_CONFIG"))&&c.args&&void 0!==c.args.authuser?!0:!(!g.O("SESSION_INDEX")&&!g.O("LOGGED_IN")))||a.gz||!a.zv);(c?0:g.cB(a.player.R())||g.fB(a.player.R()))&&A5a(a);a.Uo=b;if(!a.player.R().K("disable_mdx_connection_in_mdx_module_for_music_web")||!g.NA(a.player.R())){var d=a.player.getPlaylistId();c=a.player.getVideoData(1);var e=c.videoId;if(!d&&!e||(2===a.player.getAppState()||1===a.player.getAppState())&&a.player.R().K("should_clear_video_data_on_player_cued_unstarted"))a=
null;else{var f=a.player.getPlaylist();if(f){var k=[];for(var l=0;l<f.length;l++)k[l]=g.zI(f,l).videoId}else k=[e];f=a.player.getCurrentTime(1);a={videoIds:k,listId:d,videoId:e,playerParams:c.playerParams,clickTrackingParams:c.ma,index:Math.max(a.player.getPlaylistIndex(),0),currentTime:0===f?void 0:f};(c=T1a(c))&&(a.locationInfo=c)}t9("Connecting to: "+g.Zg(b));"cast-selector-receiver"==b.key?(v9(a||null),b=a||null,P8()?M8().setLaunchParams(b):K8("setLaunchParams called before ready.")):!a&&F9()&&
s9()==b.key?q6("yt-remote-connection-change",!0):(C9(),v9(a||null),a=r9().Ui(),(b=y6(a,b.key))&&D9(b,1))}}},A5a=function(a){a.player.vb().isPlaying()?a.player.pauseVideo():(a.ez=function(b){!a.gz&&g.yE(b,8)&&(a.player.pauseVideo(),Q9(a))},a.player.addEventListener("presentingplayerstatechange",a.ez));
a.zv&&a.zv.od();z9()||(H9=!0)};
g.Do.prototype.ip=g.ca(1,function(){return g.Kc(this,6)});
g.od.prototype.mA=g.ca(0,function(){var a=g.sd(this);return 4294967296*g.sd(this)+(a>>>0)});
var E1a,B5a=g.Rd(function(a,b,c){if(1!==a.u)return!1;g.E(b,c,g.td(a.j));return!0},g.Sd),C5a=g.Rd(function(a,b,c,d){if(1!==a.u)return!1;
g.Uc(b,c,d,g.td(a.j));return!0},g.Sd),D5a=g.Rd(function(a,b,c){if(0!==a.u)return!1;
g.E(b,c,g.qd(a.j));return!0},g.Td),E5a=g.Rd(function(a,b,c,d){if(0!==a.u)return!1;
g.Uc(b,c,d,g.qd(a.j));return!0},g.Td),F5a=g.Rd(function(a,b,c){if(0!==a.u)return!1;
g.E(b,c,g.rd(a.j));return!0},g.Ud),G5a=g.Rd(function(a,b,c,d){if(0!==a.u)return!1;
g.Uc(b,c,d,g.rd(a.j));return!0},g.Ud),H5a=g.Rd(function(a,b,c){if(1!==a.u)return!1;
g.E(b,c,a.j.mA());return!0},function(a,b,c){G1a(a,c,g.Kc(b,c))}),I5a=g.Rd(function(a,b,c){if(1!==a.u&&2!==a.u)return!1;
b=g.Mc(b,c);if(2==a.u){c=g.od.prototype.mA;var d=g.rd(a.j)>>>0;for(d=a.j.j+d;a.j.j<d;)b.push(c.call(a.j))}else b.push(a.j.mA());return!0},function(a,b,c){b=g.Mc(b,c);
if(null!=b)for(var d=0;d<b.length;d++)G1a(a,c,b[d])}),J5a=g.Rd(function(a,b,c){if(0!==a.u)return!1;
g.E(b,c,g.ud(a.j));return!0},H1a),K5a=g.Rd(function(a,b,c,d){if(0!==a.u)return!1;
g.Uc(b,c,d,g.ud(a.j));return!0},H1a),L5a=g.Rd(function(a,b,c){if(2!==a.u)return!1;
a=g.Bd(a);g.Sc(b,c,a);return!0},function(a,b,c){b=g.Mc(b,c);
if(null!=b)for(var d=0;d<b.length;d++){var e=b[d];null!=e&&g.Hd(a,c,g.raa(e))}}),M5a=g.Rd(function(a,b,c,d){if(2!==a.u)return!1;
g.Uc(b,c,d,g.Bd(a));return!0},g.dca),N5a=g.Rd(function(a,b,c,d,e){if(2!==a.u)return!1;
g.xd(a,g.lba(b,d,c),e);return!0},g.eca),J1a=[1];
g.w(K1a,g.F);g.w(L1a,g.F);var O5a=[K1a,1,g.KZ,[L1a,1,B5a,2,D5a]];g.w(M1a,g.F);g.w(N1a,g.F);g.w(O1a,g.F);
var P5a=[1,2],Q5a=[g.Lg,1,g.JZ,5,H5a,2,N5a,[M1a,1,g.LZ,[N1a,1,g.JZ,2,g.JZ,3,J5a],P5a,2,g.LZ,[O1a,1,g.JZ,2,g.JZ,3,F5a,4,J5a],P5a],3,L5a,6,I5a,4,g.KZ,[g.Mg,1,g.KZ,[g.Ng,1,M5a,g.Qg,2,G5a,g.Qg,3,K5a,g.Qg],2,N5a,[g.Og,1,E5a,g.Pg,2,C5a,g.Pg,3,g.LZ,O5a,g.Pg]]],y3a={"\x00":"\\0","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\v":"\\x0B",'"':'\\"',"\\":"\\\\","<":"\\u003C"},B7={"'":"\\'"},$1a={f3:"atp",Cga:"ska",Tea:"que",nca:"mus",Bga:"sus",H8:"dsp",xfa:"seq",Pba:"mic",w7:"dpa",z3:"cds",lca:"mlm",
t7:"dsdtr",kda:"ntb"};r6.prototype.equals=function(a){return a?this.id==a.id:!1};
var E6,A6="",s2a=n2a("loadCastFramework")||n2a("loadCastApplicationFramework"),u2a=["pkedcjkdefgpdelpbcmbmeomcjbeemfm","enhhojjnijigcajfphajepfemndkmdlo"];/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
g.Ra(K6,g.I);g.h=K6.prototype;g.h.US=function(a){this.C=arguments;this.j=!1;this.kc?this.B=g.Qa()+this.Xg:this.kc=g.Ig(this.D,this.Xg)};
g.h.stop=function(){this.kc&&(g.C.clearTimeout(this.kc),this.kc=null);this.B=null;this.j=!1;this.C=[]};
g.h.pause=function(){++this.u};
g.h.resume=function(){this.u&&(--this.u,!this.u&&this.j&&(this.j=!1,this.I.apply(null,this.C)))};
g.h.Y=function(){this.stop();K6.Ee.Y.call(this)};
g.h.VS=function(){this.kc&&(g.C.clearTimeout(this.kc),this.kc=null);this.B?(this.kc=g.Ig(this.D,this.B-g.Qa()),this.B=null):this.u?this.j=!0:(this.j=!1,this.I.apply(null,this.C))};g.w(L6,g.I);g.h=L6.prototype;g.h.kE=function(a){this.B=arguments;this.kc||this.u?this.j=!0:M6(this)};
g.h.stop=function(){this.kc&&(g.C.clearTimeout(this.kc),this.kc=null,this.j=!1,this.B=null)};
g.h.pause=function(){this.u++};
g.h.resume=function(){this.u--;this.u||!this.j||this.kc||(this.j=!1,M6(this))};
g.h.Y=function(){g.I.prototype.Y.call(this);this.stop()};N6.prototype.stringify=function(a){return g.C.JSON.stringify(a,void 0)};
N6.prototype.parse=function(a){return g.C.JSON.parse(a,void 0)};g.Ra(O6,g.ee);g.Ra(P6,g.ee);var I2a=!1;var K2a=null;g.Ra(L2a,g.ee);g.Ra(M2a,g.ee);g.Ra(N2a,g.ee);U6.prototype.info=function(){};
U6.prototype.warning=function(){};var Z6={},Y6={};g.h=V6.prototype;g.h.setTimeout=function(a){this.sb=a};
g.h.YS=function(a){a=a.target;var b=this.Qa;b&&3==g.xh(a)?b.kE():this.DK(a)};
g.h.DK=function(a){try{if(a==this.j)a:{var b=g.xh(this.j),c=this.j.u,d=this.j.getStatus();if(!(3>b)&&(3!=b||g.iB||this.j&&(this.u.u||g.zh(this.j)||g.Ah(this.j)))){this.Ca||4!=b||7==c||(8==c||0>=d?R6(3):R6(2));c7(this);var e=this.j.getStatus();this.Kb=e;b:if(R2a(this)){var f=g.Ah(this.j);a="";var k=f.length,l=4==g.xh(this.j);if(!this.u.B){if("undefined"===typeof TextDecoder){a7(this);b7(this);var m="";break b}this.u.B=new g.C.TextDecoder}for(c=0;c<k;c++)this.u.u=!0,a+=this.u.B.decode(f[c],{stream:l&&
c==k-1});f.splice(0,k);this.u.j+=a;this.V=0;m=this.u.j}else m=g.zh(this.j);if(this.B=200==e){if(this.dc&&!this.Pa){b:{if(this.j){var n=g.Bh(this.j,"X-HTTP-Initial-Response");if(n&&!g.bb(n)){var p=n;break b}}p=null}if(e=p)this.Pa=!0,$6(this,e);else{this.B=!1;this.I=3;S6(12);a7(this);b7(this);break a}}this.ya?(T2a(this,b,m),g.iB&&this.B&&3==b&&(this.Ya.Ja(this.Za,"tick",this.XS),this.Za.start())):$6(this,m);4==b&&a7(this);this.B&&!this.Ca&&(4==b?V2a(this.D,this):(this.B=!1,X6(this)))}else 400==e&&0<
m.indexOf("Unknown SID")?(this.I=3,S6(12)):(this.I=0,S6(13)),a7(this),b7(this)}}}catch(q){}finally{}};
g.h.XS=function(){if(this.j){var a=g.xh(this.j),b=g.zh(this.j);this.V<b.length&&(c7(this),T2a(this,a,b),this.B&&4!=a&&X6(this))}};
g.h.cancel=function(){this.Ca=!0;a7(this)};
g.h.WS=function(){this.U=null;var a=Date.now();0<=a-this.Gb?(2!=this.Ka&&(R6(3),S6(17)),a7(this),this.I=2,b7(this)):U2a(this,this.Gb-a)};
g.h.getLastError=function(){return this.I};$2a.prototype.cancel=function(){this.B=l7(this);if(this.u)this.u.cancel(),this.u=null;else if(this.j&&0!==this.j.size){for(var a=g.r(this.j.values()),b=a.next();!b.done;b=a.next())b.value.cancel();this.j.clear()}};g.h=e3a.prototype;g.h.EK=8;g.h.Vf=1;g.h.connect=function(a,b,c,d){this.gf&&g.ug((0,g.Oa)(this.n0,this,a));S6(0);this.Fc=a;this.Ca=b||{};c&&void 0!==d&&(this.Ca.OSID=c,this.Ca.OAID=d);this.Za=this.Hc;this.Ga=W2a(this,null,this.Fc);k7(this)};
g.h.disconnect=function(){f3a(this);if(3==this.Vf){var a=this.Qa++,b=this.Ga.clone();g.Ei(b,"SID",this.C);g.Ei(b,"RID",a);g.Ei(b,"TYPE","terminate");p7(this,b);a=new V6(this,this.C,a);a.Ka=2;a.J=m6(b.clone());b=!1;g.C.navigator&&g.C.navigator.sendBeacon&&(b=g.C.navigator.sendBeacon(a.J.toString(),""));!b&&g.C.Image&&((new Image).src=a.J,b=!0);b||(a.j=Q2a(a.D,null),a.j.send(a.J));a.ea=Date.now();X6(a)}l3a(this)};
g.h.n0=function(a){try{J2a(a,function(){})}catch(b){}};
g.h.Gf=function(){return 0==this.Vf};
g.h.getState=function(){return this.Vf};
g.h.GK=function(a){if(this.I)if(this.I=null,1==this.Vf){if(!a){this.Qa=Math.floor(1E5*Math.random());a=this.Qa++;var b=new V6(this,"",a),c=this.U;this.Gb&&(c?(c=g.Be(c),g.De(c,this.Gb)):c=this.Gb);null!==this.J||this.ib||(b.Ga=c,c=null);var d;if(this.sb)a:{for(var e=d=0;e<this.B.length;e++){b:{var f=this.B[e];if("__data__"in f.map&&(f=f.map.__data__,"string"===typeof f)){f=f.length;break b}f=void 0}if(void 0===f)break;d+=f;if(4096<d){d=e;break a}if(4096===d||e===this.B.length-1){d=e+1;break a}}d=
1E3}else d=1E3;d=i3a(this,b,d);e=this.Ga.clone();g.Ei(e,"RID",a);g.Ei(e,"CVER",22);this.ya&&g.Ei(e,"X-HTTP-Session-Id",this.ya);p7(this,e);c&&(this.ib?d="headers="+g.Lf(g.Lfa(c))+"&"+d:this.J&&g.Ii(e,this.J,c));j7(this.u,b);this.Ue&&g.Ei(e,"TYPE","init");this.sb?(g.Ei(e,"$req",d),g.Ei(e,"SID","null"),b.dc=!0,W6(b,e,null)):W6(b,e,d);this.Vf=2}}else 3==this.Vf&&(a?j3a(this,a):0==this.B.length||a3a(this.u)||j3a(this))};
g.h.FK=function(){this.P=null;k3a(this);if(this.Kc&&!(this.Ya||null==this.j||0>=this.Xc)){var a=2*this.Xc;this.ma=T6((0,g.Oa)(this.mY,this),a)}};
g.h.mY=function(){this.ma&&(this.ma=null,this.Za=!1,this.Ya=!0,S6(10),f7(this),k3a(this))};
g.h.fI=function(a){this.j==a&&this.Kc&&!this.Ya&&(o7(this),this.Ya=!0,S6(11))};
g.h.ZS=function(){null!=this.V&&(this.V=null,f7(this),g7(this),S6(19))};
g.h.O0=function(a){a?S6(2):S6(1)};
g.h.isActive=function(){return!!this.D&&this.D.isActive(this)};
g.h=n3a.prototype;g.h.KK=function(){};
g.h.JK=function(){};
g.h.IK=function(){};
g.h.HK=function(){};
g.h.isActive=function(){return!0};
g.h.aT=function(){};g.Ra(r7,g.Pe);r7.prototype.open=function(){this.j.D=this.C;this.J&&(this.j.Ka=!0);this.j.connect(this.I,this.u||void 0)};
r7.prototype.close=function(){this.j.disconnect()};
r7.prototype.send=function(a){var b=this.j;if("string"===typeof a){var c={};c.__data__=a;a=c}else this.D&&(c={},c.__data__=g.Zg(a),a=c);b.B.push(new Z2a(b.Se++,a));3==b.Vf&&k7(b)};
r7.prototype.Y=function(){this.j.D=null;delete this.C;this.j.disconnect();delete this.j;r7.Ee.Y.call(this)};
g.Ra(p3a,O6);g.Ra(q3a,P6);g.Ra(q7,n3a);q7.prototype.KK=function(){this.j.dispatchEvent("m")};
q7.prototype.JK=function(a){this.j.dispatchEvent(new p3a(a))};
q7.prototype.IK=function(a){this.j.dispatchEvent(new q3a(a))};
q7.prototype.HK=function(){this.j.dispatchEvent("n")};var t7=new g.Pe;g.w(t3a,g.ee);g.h=v7.prototype;g.h.wq=null;g.h.Nm=!1;g.h.Ft=null;g.h.mE=null;g.h.Dt=null;g.h.Et=null;g.h.Ao=null;g.h.Co=null;g.h.xq=null;g.h.jh=null;g.h.hA=0;g.h.bl=null;g.h.gA=null;g.h.Bo=null;g.h.pw=-1;g.h.gR=!0;g.h.uq=!1;g.h.lE=0;g.h.fA=null;var w3a={},y7={};g.h=v7.prototype;g.h.setTimeout=function(a){this.u=a};
g.h.cT=function(a){a=a.target;var b=this.fA;b&&3==g.xh(a)?b.kE():this.LK(a)};
g.h.LK=function(a){try{if(a==this.jh)a:{var b=g.xh(this.jh),c=this.jh.u,d=this.jh.getStatus();if(g.ic&&!g.ec(10)||g.ge&&!g.dc("420+")){if(4>b)break a}else if(3>b||3==b&&!g.zh(this.jh))break a;this.uq||4!=b||7==c||(8==c||0>=d?this.j.Pk(3):this.j.Pk(2));C7(this);var e=this.jh.getStatus();this.pw=e;var f=g.zh(this.jh);if(this.Nm=200==e){4==b&&z7(this);if(this.ya){for(a=!0;!this.uq&&this.hA<f.length;){var k=x3a(this,f);if(k==y7){4==b&&(this.Bo=4,u7(15),a=!1);break}else if(k==w3a){this.Bo=4;u7(16);a=!1;
break}else D7(this,k)}4==b&&0==f.length&&(this.Bo=1,u7(17),a=!1);this.Nm=this.Nm&&a;a||(z7(this),A7(this))}else D7(this,f);this.Nm&&!this.uq&&(4==b?this.j.iA(this):(this.Nm=!1,x7(this)))}else 400==e&&0<f.indexOf("Unknown SID")?(this.Bo=3,u7(13)):(this.Bo=0,u7(14)),z7(this),A7(this)}}catch(l){}finally{}};
g.h.y_=function(a){s7((0,g.Oa)(this.x_,this,a),0)};
g.h.x_=function(a){this.uq||(C7(this),D7(this,a),x7(this))};
g.h.jQ=function(a){s7((0,g.Oa)(this.w_,this,a),0)};
g.h.w_=function(a){this.uq||(z7(this),this.Nm=a,this.j.iA(this),this.j.Pk(4))};
g.h.cancel=function(){this.uq=!0;z7(this)};
g.h.bT=function(){this.Ft=null;var a=Date.now();0<=a-this.mE?(2!=this.Et&&this.j.Pk(3),z7(this),this.Bo=2,u7(18),A7(this)):A3a(this,this.mE-a)};
g.h.getLastError=function(){return this.Bo};g.h=D3a.prototype;g.h.oE=null;g.h.Mh=null;g.h.aD=!1;g.h.tR=null;g.h.mB=null;g.h.xH=null;g.h.pE=null;g.h.tj=null;g.h.Om=-1;g.h.qw=null;g.h.gx=null;g.h.connect=function(a){this.pE=a;a=F7(this.j,null,this.pE);u7(3);this.tR=Date.now();var b=this.j.P;null!=b?(this.qw=b[0],(this.gx=b[1])?(this.tj=1,E3a(this)):(this.tj=2,H7(this))):(n6(a,"MODE","init"),this.Mh=new v7(this),this.Mh.wq=this.oE,w7(this.Mh,a,!1,null,!0),this.tj=0)};
g.h.pV=function(a){if(a)this.tj=2,H7(this);else{u7(4);var b=this.j;b.Dl=b.Ro.Om;O7(b,9)}a&&this.Pk(2)};
g.h.nE=function(a){return this.j.nE(a)};
g.h.abort=function(){this.Mh&&(this.Mh.cancel(),this.Mh=null);this.Om=-1};
g.h.Gf=function(){return!1};
g.h.MK=function(a,b){this.Om=a.pw;if(0==this.tj)if(b){try{var c=this.u.parse(b)}catch(d){a=this.j;a.Dl=this.Om;O7(a,2);return}this.qw=c[0];this.gx=c[1]}else a=this.j,a.Dl=this.Om,O7(a,2);else if(2==this.tj)if(this.aD)u7(7),this.xH=Date.now();else if("11111"==b){if(u7(6),this.aD=!0,this.mB=Date.now(),a=this.mB-this.tR,!g.ic||g.ec(10)||500>a)this.Om=200,this.Mh.cancel(),u7(12),G7(this.j,this,!0)}else u7(8),this.mB=this.xH=Date.now(),this.aD=!1};
g.h.iA=function(){this.Om=this.Mh.pw;if(this.Mh.Nm)0==this.tj?this.gx?(this.tj=1,E3a(this)):(this.tj=2,H7(this)):2==this.tj&&((!g.ic||g.ec(10)?!this.aD:200>this.xH-this.mB)?(u7(11),G7(this.j,this,!1)):(u7(12),G7(this.j,this,!0)));else{0==this.tj?u7(9):2==this.tj&&u7(10);var a=this.j;this.Mh.getLastError();a.Dl=this.Om;O7(a,2)}};
g.h.uw=function(){return this.j.uw()};
g.h.isActive=function(){return this.j.isActive()};
g.h.Pk=function(a){this.j.Pk(a)};g.h=I7.prototype;g.h.Cl=null;g.h.ww=null;g.h.ai=null;g.h.tf=null;g.h.qE=null;g.h.jA=null;g.h.NK=null;g.h.kA=null;g.h.xw=0;g.h.eT=0;g.h.Pg=null;g.h.Do=null;g.h.Pm=null;g.h.zq=null;g.h.Ro=null;g.h.JD=null;g.h.It=-1;g.h.OK=-1;g.h.Dl=-1;g.h.Ht=0;g.h.Gt=0;g.h.yq=8;g.Ra(G3a,g.ee);g.Ra(H3a,g.ee);g.h=I7.prototype;g.h.connect=function(a,b,c,d,e){u7(0);this.qE=b;this.ww=c||{};d&&void 0!==e&&(this.ww.OSID=d,this.ww.OAID=e);this.J?(s7((0,g.Oa)(this.WM,this,a),100),I3a(this)):this.WM(a)};
g.h.disconnect=function(){J3a(this);if(3==this.j){var a=this.xw++,b=this.jA.clone();g.Ei(b,"SID",this.C);g.Ei(b,"RID",a);g.Ei(b,"TYPE","terminate");M7(this,b);a=new v7(this,this.C,a);a.Et=2;a.Ao=m6(b.clone());I1a(new Image,a.Ao.toString());a.Dt=Date.now();x7(a)}R3a(this)};
g.h.WM=function(a){this.Ro=new D3a(this);this.Ro.oE=this.Cl;this.Ro.u=this.D;this.Ro.connect(a)};
g.h.Gf=function(){return 0==this.j};
g.h.getState=function(){return this.j};
g.h.QK=function(a){this.Do=null;N3a(this,a)};
g.h.PK=function(){this.Pm=null;this.tf=new v7(this,this.C,"rpc",this.I);this.tf.wq=this.Cl;this.tf.lE=0;var a=this.NK.clone();g.Ei(a,"RID","rpc");g.Ei(a,"SID",this.C);g.Ei(a,"CI",this.JD?"0":"1");g.Ei(a,"AID",this.It);M7(this,a);if(!g.ic||g.ec(10))g.Ei(a,"TYPE","xmlhttp"),w7(this.tf,a,!0,this.kA,!1);else{g.Ei(a,"TYPE","html");var b=this.tf,c=!!this.kA;b.Et=3;b.Ao=m6(a.clone());z3a(b,c)}};
g.h.MK=function(a,b){if(0!=this.j&&(this.tf==a||this.ai==a))if(this.Dl=a.pw,this.ai==a&&3==this.j)if(7<this.yq){try{var c=this.D.parse(b)}catch(d){c=null}if(Array.isArray(c)&&3==c.length)if(a=c,0==a[0])a:{if(!this.Pm){if(this.tf)if(this.tf.Dt+3E3<this.ai.Dt)K7(this),this.tf.cancel(),this.tf=null;else break a;N7(this);u7(19)}}else this.OK=a[1],0<this.OK-this.It&&37500>a[2]&&this.JD&&0==this.Gt&&!this.zq&&(this.zq=s7((0,g.Oa)(this.fT,this),6E3));else O7(this,11)}else null!=b&&O7(this,11);else if(this.tf==
a&&K7(this),!g.bb(b))for(a=this.D.parse(b),b=0;b<a.length;b++)c=a[b],this.It=c[0],c=c[1],2==this.j?"c"==c[0]?(this.C=c[1],this.kA=c[2],c=c[3],null!=c?this.yq=c:this.yq=6,this.j=3,this.Pg&&this.Pg.TK(),this.NK=F7(this,this.uw()?this.kA:null,this.qE),O3a(this)):"stop"==c[0]&&O7(this,7):3==this.j&&("stop"==c[0]?O7(this,7):"noop"!=c[0]&&this.Pg&&this.Pg.SK(c),this.Gt=0)};
g.h.fT=function(){null!=this.zq&&(this.zq=null,this.tf.cancel(),this.tf=null,N7(this),u7(20))};
g.h.iA=function(a){if(this.tf==a){K7(this);this.tf=null;var b=2}else if(this.ai==a)this.ai=null,b=1;else return;this.Dl=a.pw;if(0!=this.j)if(a.Nm)if(1==b){b=Date.now()-a.Dt;var c=t7;c.dispatchEvent(new G3a(c,a.xq?a.xq.length:0,b,this.Ht));J7(this);this.B.length=0}else O3a(this);else{c=a.getLastError();var d;if(!(d=3==c||7==c||0==c&&0<this.Dl)){if(d=1==b)this.ai||this.Do||1==this.j||2<=this.Ht?d=!1:(this.Do=s7((0,g.Oa)(this.QK,this,a),P3a(this,this.Ht)),this.Ht++,d=!0);d=!(d||2==b&&N7(this))}if(d)switch(c){case 1:O7(this,
5);break;case 4:O7(this,10);break;case 3:O7(this,6);break;case 7:O7(this,12);break;default:O7(this,2)}}};
g.h.dT=function(a){if(!g.Fb(arguments,this.j))throw Error("Unexpected channel state: "+this.j);};
g.h.N0=function(a){a?u7(2):(u7(1),Q3a(this,8))};
g.h.nE=function(a){if(a)throw Error("Can't create secondary domain capable XhrIo object.");a=new g.ph;a.J=!1;return a};
g.h.isActive=function(){return!!this.Pg&&this.Pg.isActive(this)};
g.h.Pk=function(a){var b=t7;b.dispatchEvent(new H3a(b,a))};
g.h.uw=function(){return!(!g.ic||g.ec(10))};
g.h=S3a.prototype;g.h.TK=function(){};
g.h.SK=function(){};
g.h.RK=function(){};
g.h.rE=function(){};
g.h.UK=function(){return{}};
g.h.isActive=function(){return!0};g.h=T3a.prototype;g.h.enqueue=function(a){this.u.push(a)};
g.h.isEmpty=function(){return 0===this.j.length&&0===this.u.length};
g.h.clear=function(){this.j=[];this.u=[]};
g.h.contains=function(a){return g.Fb(this.j,a)||g.Fb(this.u,a)};
g.h.remove=function(a){var b=this.j;var c=(0,g.zTa)(b,a);0<=c?(g.Hb(b,c),b=!0):b=!1;return b||g.Ib(this.u,a)};
g.h.Ej=function(){for(var a=[],b=this.j.length-1;0<=b;--b)a.push(this.j[b]);var c=this.u.length;for(b=0;b<c;++b)a.push(this.u[b]);return a};U3a.prototype.flush=function(a,b){a=void 0===a?[]:a;b=void 0===b?!1:b;if(g.P("enable_client_streamz_web")){a=g.r(a);for(var c=a.next();!c.done;c=a.next())c=g.$da(c.value),c={serializedIncrementBatch:g.gc(g.Qd(c,Q5a))},g.Xq("streamzIncremented",c,{jJ:b})}};var P7;g.w(Q7,g.ee);g.w(R7,g.ee);g.Ra(S7,g.I);g.h=S7.prototype;g.h.q_=function(){this.Xg=Math.min(3E5,2*this.Xg);this.B();this.u&&this.start()};
g.h.start=function(){var a=this.Xg+15E3*Math.random();g.ln(this.j,a);this.u=Date.now()+a};
g.h.stop=function(){this.j.stop();this.u=0};
g.h.isActive=function(){return this.j.isActive()};
g.h.reset=function(){this.j.stop();this.Xg=5E3};g.Ra(T7,S3a);g.h=T7.prototype;g.h.subscribe=function(a,b,c){return this.B.subscribe(a,b,c)};
g.h.unsubscribe=function(a,b,c){return this.B.unsubscribe(a,b,c)};
g.h.rg=function(a){return this.B.rg(a)};
g.h.W=function(a,b){return this.B.W.apply(this.B,arguments)};
g.h.dispose=function(){this.V||(this.V=!0,g.be(this.B),this.disconnect(),g.be(this.u),this.u=null,this.Z=function(){return""})};
g.h.isDisposed=function(){return this.V};
g.h.connect=function(a,b,c){if(!this.j||2!=this.j.getState()){this.U="";this.u.stop();this.I=a||null;this.D=b||0;a=this.ea+"/test";b=this.ea+"/bind";var d=new I7(c?c.firstTestResults:null,c?c.secondTestResults:null,this.Ka),e=this.j;e&&(e.Pg=null);d.Pg=this;this.j=d;U7(this);if(this.j){d=g.O("ID_TOKEN");var f=this.j.Cl||{};d?f["x-youtube-identity-token"]=d:delete f["x-youtube-identity-token"];this.j.Cl=f}e?(3!=e.getState()&&0==L3a(e)||e.getState(),this.j.connect(a,b,this.J,e.C,e.It)):c?this.j.connect(a,
b,this.J,c.sessionId,c.arrayId):this.j.connect(a,b,this.J)}};
g.h.disconnect=function(a){this.P=a||0;this.u.stop();U7(this);this.j&&(3==this.j.getState()&&N3a(this.j),this.j.disconnect());this.P=0};
g.h.sendMessage=function(a,b){a={_sc:a};b&&g.De(a,b);this.u.isActive()||2==(this.j?this.j.getState():0)?this.C.push(a):this.Pu()&&(U7(this),K3a(this.j,a))};
g.h.TK=function(){this.u.reset();this.I=null;this.D=0;if(this.C.length){var a=this.C;this.C=[];for(var b=0,c=a.length;b<c;++b)K3a(this.j,a[b])}this.W("handlerOpened");x2a(this.Ga,"BROWSER_CHANNEL")};
g.h.RK=function(a){var b=2==a&&401==this.j.Dl;4==a||b||this.u.start();this.W("handlerError",a,b);D2a(this.ya,"BROWSER_CHANNEL")};
g.h.rE=function(a,b){if(!this.u.isActive())this.W("handlerClosed");else if(b)for(var c=0,d=b.length;c<d;++c){var e=b[c].map;e&&this.C.push(e)}z2a(this.ma,"BROWSER_CHANNEL");a&&this.Qa.j.uE("/client_streamz/youtube/living_room/mdx/browser_channel/pending_maps",a.length);b&&this.Sa.j.uE("/client_streamz/youtube/living_room/mdx/browser_channel/undelivered_maps",b.length)};
g.h.UK=function(){var a={v:2};this.U&&(a.gsessionid=this.U);0!=this.D&&(a.ui=""+this.D);0!=this.P&&(a.ui=""+this.P);this.I&&g.De(a,this.I);return a};
g.h.SK=function(a){"S"==a[0]?this.U=a[1]:"gracefulReconnect"==a[0]?(this.u.start(),this.j.disconnect()):this.W("handlerMessage",new V3a(a[0],a[1]));B2a(this.Ca,"BROWSER_CHANNEL")};
g.h.Pu=function(){return!!this.j&&3==this.j.getState()};
g.h.ao=function(a){(this.J.loungeIdToken=a)||this.u.stop();if(this.Pa&&this.j){var b=this.j.Cl||{};a?b["X-YouTube-LoungeId-Token"]=a:delete b["X-YouTube-LoungeId-Token"];this.j.Cl=b}};
g.h.ip=function(){return this.J.id};
g.h.tp=function(){return this.u.isActive()?this.u.u-Date.now():NaN};
g.h.Cs=function(){var a=this.u;g.mn(a.j);a.start()};
g.h.q0=function(){this.u.isActive();0==L3a(this.j)&&this.connect(this.I,this.D)};V7.prototype.C=function(a,b,c,d){b?a(d):a({text:c.responseText})};
V7.prototype.B=function(a,b){a(Error("Request error: "+b.status))};
V7.prototype.D=function(a){a(Error("request timed out"))};g.w(Y7,g.Pe);g.h=Y7.prototype;g.h.connect=function(a,b,c){this.Lc.connect(a,b,c)};
g.h.disconnect=function(a){this.Lc.disconnect(a)};
g.h.Cs=function(){this.Lc.Cs()};
g.h.ip=function(){return this.Lc.ip()};
g.h.tp=function(){return this.Lc.tp()};
g.h.Pu=function(){return this.Lc.Pu()};
g.h.iT=function(){this.dispatchEvent("channelOpened");var a=this.Lc,b=this.j;g.Gu("yt-remote-session-browser-channel",{firstTestResults:[""],secondTestResults:!a.j.JD,sessionId:a.j.C,arrayId:a.j.It});g.Gu("yt-remote-session-screen-id",b);a=z6();b=B6();g.Fb(a,b)||a.push(b);g2a(a);C6()};
g.h.gT=function(){this.dispatchEvent("channelClosed")};
g.h.hT=function(a){this.dispatchEvent(new Q7(a))};
g.h.onError=function(a){this.dispatchEvent(new R7(a?1:0))};
g.h.sendMessage=function(a,b){this.Lc.sendMessage(a,b)};
g.h.ao=function(a){this.Lc.ao(a)};
g.h.dispose=function(){this.Lc.dispose()};g.h=W3a.prototype;
g.h.connect=function(a,b){a=void 0===a?{}:a;b=void 0===b?0:b;2!==this.I&&(this.B.stop(),this.P=a,this.J=b,Z7(this),(a=g.O("ID_TOKEN"))?this.C["x-youtube-identity-token"]=a:delete this.C["x-youtube-identity-token"],this.j&&(this.u.device=this.j.device,this.u.name=this.j.name,this.u.app=this.j.app,this.u.id=this.j.id,this.j.tX&&(this.u.mdxVersion=""+this.j.tX),this.j.theme&&(this.u.theme=this.j.theme),this.j.capabilities&&(this.u.capabilities=this.j.capabilities)),0!==this.J?this.u.ui=""+this.J:delete this.u.ui,
Object.assign(this.u,this.P),this.channel=new r7(this.pathPrefix,{RW:"gsessionid",wX:this.C,xX:this.u}),this.channel.open(),this.I=2,X3a(this))};
g.h.disconnect=function(a){this.U=void 0===a?0:a;this.B.stop();Z7(this);this.channel&&(0!==this.U?this.u.ui=""+this.U:delete this.u.ui,this.channel.close());this.U=0};
g.h.tp=function(){return this.B.isActive()?this.B.u-Date.now():NaN};
g.h.Cs=function(){var a=this.B;g.mn(a.j);a.start()};
g.h.sendMessage=function(a,b){this.channel&&(Z7(this),a=Object.assign({},{_sc:a},b),this.channel.send(a))};
g.h.ao=function(a){a||this.B.stop();a?this.C["X-YouTube-LoungeId-Token"]=a:delete this.C["X-YouTube-LoungeId-Token"]};
g.h.ip=function(){return this.j?this.j.id:""};
g.h.W=function(a){return this.D.W.apply(this.D,[a].concat(g.v(g.za.apply(1,arguments))))};
g.h.subscribe=function(a,b,c){return this.D.subscribe(a,b,c)};
g.h.unsubscribe=function(a,b,c){return this.D.unsubscribe(a,b,c)};
g.h.rg=function(a){return this.D.rg(a)};
g.h.dispose=function(){this.V||(this.V=!0,g.be(this.D),this.disconnect(),g.be(this.B),this.ma=function(){return""})};
g.h.isDisposed=function(){return this.V};g.w($7,g.Pe);g.h=$7.prototype;g.h.connect=function(a,b){this.j.connect(a,b)};
g.h.disconnect=function(a){this.j.disconnect(a)};
g.h.Cs=function(){this.j.Cs()};
g.h.ip=function(){return this.j.ip()};
g.h.tp=function(){return this.j.tp()};
g.h.Pu=function(){return 3===this.j.I};
g.h.lT=function(){this.dispatchEvent("channelOpened")};
g.h.jT=function(){this.dispatchEvent("channelClosed")};
g.h.kT=function(a){this.dispatchEvent(new Q7(a))};
g.h.onError=function(){this.dispatchEvent(new R7(401===this.j.Z?1:0))};
g.h.sendMessage=function(a,b){this.j.sendMessage(a,b)};
g.h.ao=function(a){this.j.ao(a)};
g.h.dispose=function(){this.j.dispose()};var e4a=Date.now(),a8=null,e8=Array(50),d8=-1,f8=!1;g.Ra(g8,g.Qt);g8.prototype.Ui=function(){return this.screens};
g8.prototype.contains=function(a){return!!x6(this.screens,a)};
g8.prototype.get=function(a){return a?y6(this.screens,a):null};
g8.prototype.info=function(a){b8(this.I,a)};g.w(h8,g.Qt);g.h=h8.prototype;g.h.start=function(){!this.j&&isNaN(this.kc)&&this.xQ()};
g.h.stop=function(){this.j&&(this.j.abort(),this.j=null);isNaN(this.kc)||(g.Qp(this.kc),this.kc=NaN)};
g.h.Y=function(){this.stop();g.Qt.prototype.Y.call(this)};
g.h.xQ=function(){this.kc=NaN;this.j=g.Tp(W7(this.B,"/pairing/get_screen"),{method:"POST",postParams:{pairing_code:this.J},timeout:5E3,onSuccess:(0,g.Oa)(this.nT,this),onError:(0,g.Oa)(this.mT,this),onTimeout:(0,g.Oa)(this.oT,this)})};
g.h.nT=function(a,b){this.j=null;a=b.screen||{};a.dialId=this.C;a.name=this.I;b=-1;this.D&&a.shortLivedLoungeToken&&a.shortLivedLoungeToken.value&&a.shortLivedLoungeToken.refreshIntervalMs&&(a.screenIdType="shortLived",a.loungeToken=a.shortLivedLoungeToken.value,b=a.shortLivedLoungeToken.refreshIntervalMs);this.W("pairingComplete",new s6(a),b)};
g.h.mT=function(a){this.j=null;a.status&&404==a.status?this.u>=R5a.length?this.W("pairingFailed",Error("DIAL polling timed out")):(a=R5a[this.u],this.kc=g.Op((0,g.Oa)(this.xQ,this),a),this.u++):this.W("pairingFailed",Error("Server error "+a.status))};
g.h.oT=function(){this.j=null;this.W("pairingFailed",Error("Server not responding"))};
var R5a=[2E3,2E3,1E3,1E3,1E3,2E3,2E3,5E3,5E3,1E4];g.Ra(j8,g8);g.h=j8.prototype;g.h.start=function(){i8(this)&&this.W("screenChange");!g.Hu("yt-remote-lounge-token-expiration")&&i4a(this);g.Qp(this.j);this.j=g.Op((0,g.Oa)(this.start,this),1E4)};
g.h.add=function(a,b){i8(this);f4a(this,a);k8(this,!1);this.W("screenChange");b(a);a.token||i4a(this)};
g.h.remove=function(a,b){var c=i8(this);h4a(this,a)&&(k8(this,!1),c=!0);b(a);c&&this.W("screenChange")};
g.h.HD=function(a,b,c,d){var e=i8(this),f=this.get(a.id);f?(f.name!=b&&(f.name=b,k8(this,!1),e=!0),c(a)):d(Error("no such local screen."));e&&this.W("screenChange")};
g.h.Y=function(){g.Qp(this.j);j8.Ee.Y.call(this)};
g.h.qW=function(a){i8(this);var b=this.screens.length;a=a&&a.screens||[];for(var c=0,d=a.length;c<d;++c){var e=a[c],f=this.get(e.screenId);f&&(f.token=e.loungeToken,--b)}k8(this,!b);b&&b8(this.I,"Missed "+b+" lounge tokens.")};
g.h.pW=function(a){b8(this.I,"Requesting lounge tokens failed: "+a)};g.w(m8,g.Qt);g.h=m8.prototype;g.h.start=function(){var a=parseInt(g.Hu("yt-remote-fast-check-period")||"0",10);(this.C=g.Qa()-144E5<a?0:a)?p8(this):(this.C=g.Qa()+3E5,g.Gu("yt-remote-fast-check-period",this.C),this.WI())};
g.h.isEmpty=function(){return g.xe(this.j)};
g.h.update=function(){l8("Updating availability on schedule.");var a=this.I(),b=g.le(this.j,function(c,d){return c&&!!y6(a,d)},this);
o8(this,b)};
g.h.Y=function(){g.Qp(this.B);this.B=NaN;this.u&&(this.u.abort(),this.u=null);g.Qt.prototype.Y.call(this)};
g.h.WI=function(){g.Qp(this.B);this.B=NaN;this.u&&this.u.abort();var a=k4a(this);if(o6(a)){var b=W7(this.D,"/pairing/get_screen_availability");this.u=X7(this.D,b,{lounge_token:g.qe(a).join(",")},(0,g.Oa)(this.WZ,this,a),(0,g.Oa)(this.VZ,this))}else o8(this,{}),p8(this)};
g.h.WZ=function(a,b){this.u=null;var c=g.qe(k4a(this));if(g.Tb(c,g.qe(a))){b=b.screens||[];c={};for(var d=0,e=b.length;d<e;++d)c[a[b[d].loungeToken]]="online"==b[d].status;o8(this,c);p8(this)}else this.Re("Changing Screen set during request."),this.WI()};
g.h.VZ=function(a){this.Re("Screen availability failed: "+a);this.u=null;p8(this)};
g.h.Re=function(a){b8("OnlineScreenService",a)};g.Ra(q8,g8);g.h=q8.prototype;g.h.start=function(){this.u.start();this.j.start();this.screens.length&&(this.W("screenChange"),this.j.isEmpty()||this.W("onlineScreenChange"))};
g.h.add=function(a,b,c){this.u.add(a,b,c)};
g.h.remove=function(a,b,c){this.u.remove(a,b,c);this.j.update()};
g.h.HD=function(a,b,c,d){this.u.contains(a)?this.u.HD(a,b,c,d):(a="Updating name of unknown screen: "+a.name,b8(this.I,a),d(Error(a)))};
g.h.Ui=function(a){return a?this.screens:g.Kb(this.screens,g.zl(this.B,function(b){return!this.contains(b)},this))};
g.h.VK=function(){return g.zl(this.Ui(!0),function(a){return!!this.j.j[a.id]},this)};
g.h.WK=function(a,b,c,d,e,f){var k=this;this.info("getDialScreenByPairingCode "+a+" / "+b);var l=new h8(this.C,a,b,c,d);l.subscribe("pairingComplete",function(m,n){g.be(l);e(r8(k,m),n)});
l.subscribe("pairingFailed",function(m){g.be(l);f(m)});
l.start();return(0,g.Oa)(l.stop,l)};
g.h.pT=function(a,b,c,d){g.Tp(W7(this.C,"/pairing/get_screen"),{method:"POST",postParams:{pairing_code:a},timeout:5E3,onSuccess:(0,g.Oa)(function(e,f){e=new s6(f.screen||{});if(!e.name||o4a(this,e.name)){a:{f=e.name;for(var k=2,l=b(f,k);o4a(this,l);){k++;if(20<k)break a;l=b(f,k)}f=l}e.name=f}c(r8(this,e))},this),
onError:(0,g.Oa)(function(e){d(Error("pairing request failed: "+e.status))},this),
onTimeout:(0,g.Oa)(function(){d(Error("pairing request timed out."))},this)})};
g.h.Y=function(){g.be(this.u);g.be(this.j);q8.Ee.Y.call(this)};
g.h.zW=function(){q4a(this);this.W("screenChange");this.j.update()};
q8.prototype.dispose=q8.prototype.dispose;g.Ra(t8,g.Qt);g.h=t8.prototype;g.h.getScreen=function(){return this.C};
g.h.Bh=function(a){this.isDisposed()||(a&&(v8(this,""+a),this.W("sessionFailed")),this.C=null,this.W("sessionScreen",null))};
g.h.info=function(a){b8(this.ya,a)};
g.h.XK=function(){return null};
g.h.nJ=function(a){var b=this.j;a?(b.displayStatus=new chrome.cast.ReceiverDisplayStatus(a,[]),b.displayStatus.showStop=!0):b.displayStatus=null;chrome.cast.setReceiverDisplayStatus(b,(0,g.Oa)(function(){this.info("Updated receiver status for "+b.friendlyName+": "+a)},this),(0,g.Oa)(function(){v8(this,"Failed to update receiver status for: "+b.friendlyName)},this))};
g.h.Y=function(){this.nJ("");t8.Ee.Y.call(this)};g.w(w8,t8);g.h=w8.prototype;g.h.mJ=function(a){if(this.u){if(this.u==a)return;v8(this,"Overriding cast session with new session object");z4a(this);this.ea=!1;this.U="unknown";this.u.removeUpdateListener(this.Z);this.u.removeMessageListener("urn:x-cast:com.google.youtube.mdx",this.ma)}this.u=a;this.u.addUpdateListener(this.Z);this.u.addMessageListener("urn:x-cast:com.google.youtube.mdx",this.ma);v4a(this,"getMdxSessionStatus")};
g.h.Xu=function(a){this.info("launchWithParams no-op for Cast: "+g.Zg(a))};
g.h.stop=function(){this.u?this.u.stop((0,g.Oa)(function(){this.Bh()},this),(0,g.Oa)(function(){this.Bh(Error("Failed to stop receiver app."))},this)):this.Bh(Error("Stopping cast device without session."))};
g.h.nJ=function(){};
g.h.Y=function(){this.info("disposeInternal");z4a(this);this.u&&(this.u.removeUpdateListener(this.Z),this.u.removeMessageListener("urn:x-cast:com.google.youtube.mdx",this.ma));this.u=null;t8.prototype.Y.call(this)};
g.h.I_=function(a,b){if(!this.isDisposed())if(b)if(b=p6(b),g.Ka(b))switch(a=""+b.type,b=b.data||{},this.info("onYoutubeMessage_: "+a+" "+g.Zg(b)),a){case "mdxSessionStatus":t4a(this,b);break;case "loungeToken":w4a(this,b);break;default:v8(this,"Unknown youtube message: "+a)}else v8(this,"Unable to parse message.");else v8(this,"No data in message.")};
g.h.QN=function(a,b,c,d){g.Qp(this.P);this.P=0;n4a(this.B,this.j.label,a,this.j.friendlyName,(0,g.Oa)(function(e){e?b(e):0<=d?(v8(this,"Screen "+a+" appears to be offline. "+d+" retries left."),this.P=g.Op((0,g.Oa)(this.QN,this,a,b,c,d-1),300)):c(Error("Unable to fetch screen."))},this),c)};
g.h.XK=function(){return this.u};
g.h.qT=function(a){this.isDisposed()||a||(v8(this,"Cast session died."),this.Bh())};g.w(z8,t8);g.h=z8.prototype;g.h.mJ=function(a){this.u=a;this.u.addUpdateListener(this.Ca)};
g.h.Xu=function(a){this.Ga=a;this.V()};
g.h.stop=function(){G4a(this);this.u?this.u.stop((0,g.Oa)(this.Bh,this,null),(0,g.Oa)(this.Bh,this,"Failed to stop DIAL device.")):this.Bh()};
g.h.Y=function(){G4a(this);this.u&&this.u.removeUpdateListener(this.Ca);this.u=null;t8.prototype.Y.call(this)};
g.h.rT=function(a){this.isDisposed()||a||(v8(this,"DIAL session died."),this.D(),this.D=function(){},this.Bh())};g.w(D8,t8);D8.prototype.stop=function(){this.Bh()};
D8.prototype.mJ=function(){};
D8.prototype.Xu=function(){g.Qp(this.u);this.u=NaN;var a=y6(this.B.Ui(),this.j.label);a?u8(this,a):this.Bh(Error("No such screen"))};
D8.prototype.Y=function(){g.Qp(this.u);this.u=NaN;t8.prototype.Y.call(this)};g.w(E8,g.Qt);g.h=E8.prototype;
g.h.init=function(a,b){chrome.cast.timeout.requestSession=3E4;var c=new chrome.cast.SessionRequest(this.P,[chrome.cast.Capability.AUDIO_OUT]);this.U||(c.dialRequest=new chrome.cast.DialRequest("YouTube"));var d=chrome.cast.AutoJoinPolicy.TAB_AND_ORIGIN_SCOPED;a=a||this.I?chrome.cast.DefaultActionPolicy.CAST_THIS_TAB:chrome.cast.DefaultActionPolicy.CREATE_SESSION;var e=(0,g.Oa)(this.HZ,this);c=new chrome.cast.ApiConfig(c,(0,g.Oa)(this.fQ,this),e,d,a);c.customDialLaunchCallback=(0,g.Oa)(this.CY,this);
chrome.cast.initialize(c,(0,g.Oa)(function(){this.isDisposed()||(chrome.cast.addReceiverActionListener(this.D),b4a(),this.u.subscribe("onlineScreenChange",(0,g.Oa)(this.YK,this)),this.B=J4a(this),chrome.cast.setCustomReceivers(this.B,function(){},(0,g.Oa)(function(f){this.Re("Failed to set initial custom receivers: "+g.Zg(f))},this)),this.W("yt-remote-cast2-availability-change",G8(this)),b(!0))},this),(0,g.Oa)(function(f){this.Re("Failed to initialize API: "+g.Zg(f));
b(!1)},this))};
g.h.u0=function(a,b){F8("Setting connected screen ID: "+a+" -> "+b);if(this.j){var c=this.j.getScreen();if(!a||c&&c.id!=a)F8("Unsetting old screen status: "+this.j.j.friendlyName),H8(this,null)}if(a&&b){if(!this.j){c=y6(this.u.Ui(),a);if(!c){F8("setConnectedScreenStatus: Unknown screen.");return}if("shortLived"==c.idType){F8("setConnectedScreenStatus: Screen with id type to be short lived.");return}a=H4a(this,c);a||(F8("setConnectedScreenStatus: Connected receiver not custom..."),a=new chrome.cast.Receiver(c.uuid?
c.uuid:c.id,c.name),a.receiverType=chrome.cast.ReceiverType.CUSTOM,this.B.push(a),chrome.cast.setCustomReceivers(this.B,function(){},(0,g.Oa)(function(d){this.Re("Failed to set initial custom receivers: "+g.Zg(d))},this)));
F8("setConnectedScreenStatus: new active receiver: "+a.friendlyName);H8(this,new D8(this.u,a),!0)}this.j.nJ(b)}else F8("setConnectedScreenStatus: no screen.")};
g.h.v0=function(a){this.isDisposed()?this.Re("Setting connection data on disposed cast v2"):this.j?this.j.Xu(a):this.Re("Setting connection data without a session")};
g.h.tT=function(){this.isDisposed()?this.Re("Stopping session on disposed cast v2"):this.j?(this.j.stop(),H8(this,null)):F8("Stopping non-existing session")};
g.h.requestSession=function(){chrome.cast.requestSession((0,g.Oa)(this.fQ,this),(0,g.Oa)(this.ZZ,this))};
g.h.Y=function(){this.u.unsubscribe("onlineScreenChange",(0,g.Oa)(this.YK,this));window.chrome&&chrome.cast&&chrome.cast.removeReceiverActionListener(this.D);var a=Z3a,b=g.Fa("yt.mdx.remote.debug.handlers_");g.Ib(b||[],a);g.be(this.j);g.Qt.prototype.Y.call(this)};
g.h.Re=function(a){b8("Controller",a)};
g.h.hQ=function(a,b){this.j==a&&(b||H8(this,null),this.W("yt-remote-cast2-session-change",b))};
g.h.EZ=function(a,b){if(!this.isDisposed())if(a)switch(a.friendlyName=chrome.cast.unescape(a.friendlyName),F8("onReceiverAction_ "+a.label+" / "+a.friendlyName+"-- "+b),b){case chrome.cast.ReceiverAction.CAST:if(this.j)if(this.j.j.label!=a.label)F8("onReceiverAction_: Stopping active receiver: "+this.j.j.friendlyName),this.j.stop();else{F8("onReceiverAction_: Casting to active receiver.");this.j.getScreen()&&this.W("yt-remote-cast2-session-change",this.j.getScreen());break}switch(a.receiverType){case chrome.cast.ReceiverType.CUSTOM:H8(this,
new D8(this.u,a));break;case chrome.cast.ReceiverType.DIAL:H8(this,new z8(this.u,a,this.C,this.config_));break;case chrome.cast.ReceiverType.CAST:H8(this,new w8(this.u,a,this.config_));break;default:this.Re("Unknown receiver type: "+a.receiverType)}break;case chrome.cast.ReceiverAction.STOP:this.j&&this.j.j.label==a.label?this.j.stop():this.Re("Stopping receiver w/o session: "+a.friendlyName)}else this.Re("onReceiverAction_ called without receiver.")};
g.h.CY=function(a){if(this.isDisposed())return Promise.reject(Error("disposed"));var b=a.receiver;b.receiverType!=chrome.cast.ReceiverType.DIAL&&(this.Re("Not DIAL receiver: "+b.friendlyName),b.receiverType=chrome.cast.ReceiverType.DIAL);var c=this.j?this.j.j:null;if(!c||c.label!=b.label)return this.Re("Receiving DIAL launch request for non-clicked DIAL receiver: "+b.friendlyName),Promise.reject(Error("illegal DIAL launch"));if(c&&c.label==b.label&&c.receiverType!=chrome.cast.ReceiverType.DIAL){if(this.j.getScreen())return F8("Reselecting dial screen."),
this.W("yt-remote-cast2-session-change",this.j.getScreen()),Promise.resolve(new chrome.cast.DialLaunchResponse(!1));this.Re('Changing CAST intent from "'+c.receiverType+'" to "dial" for '+b.friendlyName);H8(this,new z8(this.u,b,this.C,this.config_))}b=this.j;b.P=a;b.P.appState==chrome.cast.DialAppState.RUNNING?(a=b.P.extraData||{},c=a.screenId||null,A8(b)&&a.loungeToken?a.loungeTokenRefreshIntervalMs?a=D4a(b,{name:b.j.friendlyName,screenId:a.screenId,loungeToken:a.loungeToken,dialId:b.P.receiver.label,
screenIdType:"shortLived"},a.loungeTokenRefreshIntervalMs):(g.yp(Error("No loungeTokenRefreshIntervalMs presents in additionalData: "+JSON.stringify(a)+".")),a=E4a(b,c)):a=E4a(b,c)):a=C8(b);return a};
g.h.fQ=function(a){var b=this;if(!this.isDisposed()&&!this.I){F8("New cast session ID: "+a.sessionId);var c=a.receiver;if(c.receiverType!=chrome.cast.ReceiverType.CUSTOM){if(!this.j)if(c.receiverType==chrome.cast.ReceiverType.CAST)F8("Got resumed cast session before resumed mdx connection."),c.friendlyName=chrome.cast.unescape(c.friendlyName),H8(this,new w8(this.u,c,this.config_),!0);else{this.Re("Got non-cast session without previous mdx receiver event, or mdx resume.");return}var d=this.j.j,e=y6(this.u.Ui(),
d.label);e&&t6(e,c.label)&&d.receiverType!=chrome.cast.ReceiverType.CAST&&c.receiverType==chrome.cast.ReceiverType.CAST&&(F8("onSessionEstablished_: manual to cast session change "+c.friendlyName),g.be(this.j),this.j=new w8(this.u,c,this.config_),this.j.subscribe("sessionScreen",(0,g.Oa)(this.hQ,this,this.j)),this.j.subscribe("sessionFailed",function(){return I4a(b,b.j)}),this.j.Xu(null));
this.j.mJ(a)}}};
g.h.sT=function(){return this.j?this.j.XK():null};
g.h.ZZ=function(a){this.isDisposed()||(this.Re("Failed to estabilish a session: "+g.Zg(a)),a.code!=chrome.cast.ErrorCode.CANCEL&&H8(this,null),this.W("yt-remote-cast2-session-failed"))};
g.h.HZ=function(a){F8("Receiver availability updated: "+a);if(!this.isDisposed()){var b=G8(this);this.J=a==chrome.cast.ReceiverAvailability.AVAILABLE;G8(this)!=b&&this.W("yt-remote-cast2-availability-change",G8(this))}};
g.h.YK=function(){this.isDisposed()||(this.B=J4a(this),F8("Updating custom receivers: "+g.Zg(this.B)),chrome.cast.setCustomReceivers(this.B,function(){},(0,g.Oa)(function(){this.Re("Failed to set custom receivers.")},this)),this.W("yt-remote-cast2-availability-change",G8(this)))};
E8.prototype.setLaunchParams=E8.prototype.v0;E8.prototype.setConnectedScreenStatus=E8.prototype.u0;E8.prototype.stopSession=E8.prototype.tT;E8.prototype.getCastSession=E8.prototype.sT;E8.prototype.requestSession=E8.prototype.requestSession;E8.prototype.init=E8.prototype.init;E8.prototype.dispose=E8.prototype.dispose;var N8=[];g.h=S8.prototype;
g.h.reset=function(a){this.listId="";this.index=-1;this.videoId="";T8(this);this.volume=-1;this.muted=!1;a&&(this.index=a.index,this.listId=a.listId,this.videoId=a.videoId,this.playerState=a.playerState,this.volume=a.volume,this.muted=a.muted,this.audioTrackId=a.audioTrackId,this.trackData=a.trackData,this.lm=a.hasPrevious,this.hasNext=a.hasNext,this.J=a.playerTime,this.I=a.playerTimeAt,this.C=a.seekableStart,this.j=a.seekableEnd,this.D=a.duration,this.P=a.loadedTime,this.B=a.liveIngestionTime,this.u=
!isNaN(this.B))};
g.h.isPlaying=function(){return 1==this.playerState};
g.h.isAdPlaying=function(){return 1081==this.playerState};
g.h.Vk=function(a){this.D=isNaN(a)?0:a};
g.h.getDuration=function(){return this.u?this.D+U8(this):this.D};
g.h.clone=function(){return new S8(Y8(this))};g.w($8,g.Qt);g.h=$8.prototype;g.h.getState=function(){return this.B};
g.h.tp=function(){return this.C.getReconnectTimeout()};
g.h.Cs=function(){this.C.reconnect()};
g.h.play=function(){b9(this)?(this.j?this.j.play(null,g.Ve,g9(this,"play")):f9(this,"play"),e9(this,1,W8(a9(this))),this.W("remotePlayerChange")):c9(this,this.play)};
g.h.pause=function(){b9(this)?(this.j?this.j.pause(null,g.Ve,g9(this,"pause")):f9(this,"pause"),e9(this,2,W8(a9(this))),this.W("remotePlayerChange")):c9(this,this.pause)};
g.h.seekTo=function(a){if(b9(this)){if(this.j){var b=a9(this),c=new chrome.cast.media.SeekRequest;c.currentTime=a;b.isPlaying()||3==b.playerState?c.resumeState=chrome.cast.media.ResumeState.PLAYBACK_START:c.resumeState=chrome.cast.media.ResumeState.PLAYBACK_PAUSE;this.j.seek(c,g.Ve,g9(this,"seekTo",{newTime:a}))}else f9(this,"seekTo",{newTime:a});e9(this,3,a);this.W("remotePlayerChange")}else c9(this,g.Pa(this.seekTo,a))};
g.h.stop=function(){if(b9(this)){this.j?this.j.stop(null,g.Ve,g9(this,"stopVideo")):f9(this,"stopVideo");var a=a9(this);a.index=-1;a.videoId="";T8(a);d9(this,a);this.W("remotePlayerChange")}else c9(this,this.stop)};
g.h.setVolume=function(a,b){if(b9(this)){var c=a9(this);if(this.u){if(c.volume!=a){var d=Math.round(a)/100;this.u.setReceiverVolumeLevel(d,(0,g.Oa)(function(){c8("set receiver volume: "+d)},this),(0,g.Oa)(function(){this.Re("failed to set receiver volume.")},this))}c.muted!=b&&this.u.setReceiverMuted(b,(0,g.Oa)(function(){c8("set receiver muted: "+b)},this),(0,g.Oa)(function(){this.Re("failed to set receiver muted.")},this))}else{var e={volume:a,
muted:b};-1!=c.volume&&(e.delta=a-c.volume);f9(this,"setVolume",e)}c.muted=b;c.volume=a;d9(this,c)}else c9(this,g.Pa(this.setVolume,a,b))};
g.h.ZK=function(a,b){if(b9(this)){var c=a9(this);a={videoId:a};b&&(c.trackData={trackName:b.name,languageCode:b.languageCode,sourceLanguageCode:b.translationLanguage?b.translationLanguage.languageCode:"",languageName:b.languageName,kind:b.kind},a.style=g.Zg(b.style),g.De(a,c.trackData));f9(this,"setSubtitlesTrack",a);d9(this,c)}else c9(this,g.Pa(this.ZK,a,b))};
g.h.setAudioTrack=function(a,b){b9(this)?(b=b.getLanguageInfo().getId(),f9(this,"setAudioTrack",{videoId:a,audioTrackId:b}),a=a9(this),a.audioTrackId=b,d9(this,a)):c9(this,g.Pa(this.setAudioTrack,a,b))};
g.h.playVideo=function(a,b,c,d,e,f,k){d=void 0===d?null:d;e=void 0===e?null:e;f=void 0===f?null:f;k=void 0===k?null:k;var l=a9(this),m={videoId:a};void 0!==c&&(m.currentIndex=c);X8(l,a,c||0);void 0!==b&&(V8(l,b),m.currentTime=b);d&&(m.listId=d);e&&(m.playerParams=e);f&&(m.clickTrackingParams=f);k&&(m.locationInfo=g.Zg(k));f9(this,"setPlaylist",m);d||d9(this,l)};
g.h.TC=function(a,b){if(b9(this)){if(a&&b){var c=a9(this);X8(c,a,b);d9(this,c)}f9(this,"previous")}else c9(this,g.Pa(this.TC,a,b))};
g.h.nextVideo=function(a,b){if(b9(this)){if(a&&b){var c=a9(this);X8(c,a,b);d9(this,c)}f9(this,"next")}else c9(this,g.Pa(this.nextVideo,a,b))};
g.h.Zt=function(){if(b9(this)){f9(this,"clearPlaylist");var a=a9(this);a.reset();d9(this,a);this.W("remotePlayerChange")}else c9(this,this.Zt)};
g.h.jN=function(){b9(this)?f9(this,"dismissAutoplay"):c9(this,this.jN)};
g.h.dispose=function(){if(3!=this.B){var a=this.B;this.B=3;this.W("proxyStateChange",a,this.B)}g.Qt.prototype.dispose.call(this)};
g.h.Y=function(){V4a(this);this.C=null;this.D.clear();Z8(this,null);g.Qt.prototype.Y.call(this)};
g.h.pJ=function(a){if((a!=this.B||2==a)&&3!=this.B&&0!=a){var b=this.B;this.B=a;this.W("proxyStateChange",b,a);if(1==a)for(;!this.D.isEmpty();)b=a=this.D,0===b.j.length&&(b.j=b.u,b.j.reverse(),b.u=[]),a.j.pop().apply(this);else 3==a&&this.dispose()}};
g.h.CZ=function(a,b){this.W(a,b)};
g.h.qY=function(a){if(!a)this.Ry(null),Z8(this,null);else if(this.u.receiver.volume){a=this.u.receiver.volume;var b=a9(this),c=Math.round(100*a.level||0);if(b.volume!=c||b.muted!=a.muted)c8("Cast volume update: "+a.level+(a.muted?" muted":"")),b.volume=c,b.muted=!!a.muted,d9(this,b)}};
g.h.Ry=function(a){c8("Cast media: "+!!a);this.j&&this.j.removeUpdateListener(this.P);if(this.j=a)this.j.addUpdateListener(this.P),W4a(this),this.W("remotePlayerChange")};
g.h.pY=function(a){a?(W4a(this),this.W("remotePlayerChange")):this.Ry(null)};
g.h.MJ=function(){f9(this,"sendDebugCommand",{debugCommand:"stats4nerds "})};
g.h.tY=function(){var a=S4a();a&&Z8(this,a)};
g.h.Re=function(a){b8("CP",a)};g.w(j9,g.Qt);g.h=j9.prototype;
g.h.connect=function(a,b){if(b){var c=b.listId,d=b.videoId,e=b.videoIds,f=b.playerParams,k=b.clickTrackingParams,l=b.index,m={videoId:d},n=b.currentTime,p=b.locationInfo;b=b.loopMode;void 0!==n&&(m.currentTime=5>=n?0:n);f&&(m.playerParams=f);p&&(m.locationInfo=p);k&&(m.clickTrackingParams=k);c&&(m.listId=c);e&&0<e.length&&(m.videoIds=e.join(","));void 0!==l&&(m.currentIndex=l);this.Ca&&(m.loopMode=b||"LOOP_MODE_OFF");c&&(this.j.listId=c);this.j.videoId=d;this.j.index=l||0;this.j.state=3;V8(this.j,
n);this.D="UNSUPPORTED";c=this.Ca?"setInitialState":"setPlaylist";h9("Connecting with "+c+" and params: "+g.Zg(m));this.u.connect({method:c,params:g.Zg(m)},a,h2a())}else h9("Connecting without params"),this.u.connect({},a,h2a());$4a(this)};
g.h.ao=function(a){this.u.ao(a)};
g.h.dispose=function(){this.isDisposed()||(g.Ea("yt.mdx.remote.remoteClient_",null),this.W("beforeDispose"),i9(this,3));g.Qt.prototype.dispose.call(this)};
g.h.Y=function(){k9(this);m9(this);l9(this);g.Qp(this.P);this.P=NaN;g.Qp(this.U);this.U=NaN;this.C=null;g.Ps(this.V);this.V.length=0;this.u.dispose();g.Qt.prototype.Y.call(this);this.D=this.J=this.B=this.j=this.u=null};
g.h.xO=function(a){if(!this.B||0===this.B.length)return!1;for(var b=g.r(this.B),c=b.next();!c.done;c=b.next())if(!c.value.capabilities.has(a))return!1;return!0};
g.h.jW=function(){var a=3;this.isDisposed()||(a=0,isNaN(this.Tx())?this.u.Pu()&&isNaN(this.I)&&(a=1):a=2);return a};
g.h.uu=function(a){h9("Disconnecting with "+a);g.Ea("yt.mdx.remote.remoteClient_",null);k9(this);this.W("beforeDisconnect",a);1==a&&D6();this.u.disconnect(a);this.dispose()};
g.h.hW=function(){var a=this.j;this.C&&(a=this.j.clone(),X8(a,this.C,a.index));return Y8(a)};
g.h.w0=function(a){var b=this,c=new S8(a);c.videoId&&c.videoId!=this.j.videoId&&(this.C=c.videoId,g.Qp(this.P),this.P=g.Op(function(){if(b.C){var e=b.C;b.C=null;b.j.videoId!=e&&n9(b,"getNowPlaying")}},5E3));
var d=[];this.j.listId==c.listId&&this.j.videoId==c.videoId&&this.j.index==c.index||d.push("remoteQueueChange");this.j.playerState==c.playerState&&this.j.volume==c.volume&&this.j.muted==c.muted&&W8(this.j)==W8(c)&&g.Zg(this.j.trackData)==g.Zg(c.trackData)||d.push("remotePlayerChange");this.j.reset(a);g.Xb(d,function(e){this.W(e)},this)};
g.h.PN=function(){var a=this.u.ip(),b=g.Db(this.B,function(c){return"REMOTE_CONTROL"==c.type&&c.id!=a});
return b?b.id:""};
g.h.Tx=function(){return this.u.tp()};
g.h.eW=function(){return this.D||"UNSUPPORTED"};
g.h.fW=function(){return this.J||""};
g.h.uT=function(){!isNaN(this.Tx())&&this.u.Cs()};
g.h.t0=function(a,b){n9(this,a,b);b5a(this)};
g.h.aL=function(){var a=g.cq("SID","")||"",b=g.cq("SAPISID","")||"",c=g.cq("__Secure-3PAPISID","")||"";if(!a&&!b&&!c)return"";a=g.gc(g.$a(a),2);b=g.gc(g.$a(b),2);c=g.gc(g.$a(c),2);return g.gc(g.$a(a+","+b+","+c),2)};
j9.prototype.subscribe=j9.prototype.subscribe;j9.prototype.unsubscribeByKey=j9.prototype.rg;j9.prototype.getProxyState=j9.prototype.jW;j9.prototype.disconnect=j9.prototype.uu;j9.prototype.getPlayerContextData=j9.prototype.hW;j9.prototype.setPlayerContextData=j9.prototype.w0;j9.prototype.getOtherConnectedRemoteId=j9.prototype.PN;j9.prototype.getReconnectTimeout=j9.prototype.Tx;j9.prototype.getAutoplayMode=j9.prototype.eW;j9.prototype.getAutoplayVideoId=j9.prototype.fW;j9.prototype.reconnect=j9.prototype.uT;
j9.prototype.sendMessage=j9.prototype.t0;j9.prototype.getXsrfToken=j9.prototype.aL;j9.prototype.isCapabilitySupportedOnConnectedDevices=j9.prototype.xO;g.w(o9,g8);g.h=o9.prototype;g.h.Ui=function(a){return this.Ef.$_gs(a)};
g.h.contains=function(a){return!!this.Ef.$_c(a)};
g.h.get=function(a){return this.Ef.$_g(a)};
g.h.start=function(){this.Ef.$_st()};
g.h.add=function(a,b,c){this.Ef.$_a(a,b,c)};
g.h.remove=function(a,b,c){this.Ef.$_r(a,b,c)};
g.h.HD=function(a,b,c,d){this.Ef.$_un(a,b,c,d)};
g.h.Y=function(){for(var a=0,b=this.j.length;a<b;++a)this.Ef.$_ubk(this.j[a]);this.j.length=0;this.Ef=null;g8.prototype.Y.call(this)};
g.h.vT=function(){this.W("screenChange")};
g.h.kZ=function(){this.W("onlineScreenChange")};
q8.prototype.$_st=q8.prototype.start;q8.prototype.$_gspc=q8.prototype.pT;q8.prototype.$_gsppc=q8.prototype.WK;q8.prototype.$_c=q8.prototype.contains;q8.prototype.$_g=q8.prototype.get;q8.prototype.$_a=q8.prototype.add;q8.prototype.$_un=q8.prototype.HD;q8.prototype.$_r=q8.prototype.remove;q8.prototype.$_gs=q8.prototype.Ui;q8.prototype.$_gos=q8.prototype.VK;q8.prototype.$_s=q8.prototype.subscribe;q8.prototype.$_ubk=q8.prototype.rg;var B9=null,H9=!1,p9=null,q9=null,G9=null,u9=[];g.w(I9,g.I);g.h=I9.prototype;g.h.Y=function(){g.I.prototype.Y.call(this);this.j.stop();this.B.stop();this.P.stop();var a=this.Wb;a.unsubscribe("proxyStateChange",this.eQ,this);a.unsubscribe("remotePlayerChange",this.Wy,this);a.unsubscribe("remoteQueueChange",this.GC,this);a.unsubscribe("previousNextChange",this.bQ,this);a.unsubscribe("nowAutoplaying",this.UP,this);a.unsubscribe("autoplayDismissed",this.xP,this);this.Wb=this.u=null};
g.h.Jk=function(a){var b=g.za.apply(1,arguments);if(2!=this.Wb.B)if(J9(this)){if(!a9(this.Wb).isAdPlaying()||"control_seek"!==a)switch(a){case "control_toggle_play_pause":a9(this.Wb).isPlaying()?this.Wb.pause():this.Wb.play();break;case "control_play":this.Wb.play();break;case "control_pause":this.Wb.pause();break;case "control_seek":this.J.kE(b[0],b[1]);break;case "control_subtitles_set_track":K9(this,b[0]);break;case "control_set_audio_track":this.setAudioTrack(b[0])}}else switch(a){case "control_toggle_play_pause":case "control_play":case "control_pause":b=
this.G.getCurrentTime();L9(this,0===b?void 0:b);break;case "control_seek":L9(this,b[0]);break;case "control_subtitles_set_track":K9(this,b[0]);break;case "control_set_audio_track":this.setAudioTrack(b[0])}};
g.h.nY=function(a){this.P.US(a)};
g.h.n1=function(a){this.Jk("control_subtitles_set_track",g.xe(a)?null:a)};
g.h.zR=function(){var a=this.G.getOption("captions","track");g.xe(a)||K9(this,a)};
g.h.Rb=function(a){this.u.Rb(a,this.G.getVideoData().lengthSeconds)};
g.h.VY=function(){g.xe(this.C)||x5a(this,this.C);this.D=!1};
g.h.eQ=function(a,b){this.B.stop();2===b&&this.sR()};
g.h.Wy=function(){if(J9(this)){this.j.stop();var a=a9(this.Wb);switch(a.playerState){case 1080:case 1081:case 1084:case 1085:this.u.hg=1;break;case 1082:case 1083:this.u.hg=0;break;default:this.u.hg=-1}switch(a.playerState){case 1081:case 1:this.Pb(new g.dF(8));this.rR();break;case 1085:case 3:this.Pb(new g.dF(9));break;case 1083:case 0:this.Pb(new g.dF(2));this.J.stop();this.Rb(this.G.getVideoData().lengthSeconds);break;case 1084:this.Pb(new g.dF(4));break;case 2:this.Pb(new g.dF(4));this.Rb(W8(a));
break;case -1:this.Pb(new g.dF(64));break;case -1E3:this.Pb(new g.dF(128,{errorCode:"mdx.remoteerror",errorMessage:"This video is not available for remote playback.",hB:2}))}a=a9(this.Wb).trackData;var b=this.C;(a||b?a&&b&&a.trackName==b.trackName&&a.languageCode==b.languageCode&&a.languageName==b.languageName&&a.kind==b.kind:1)||(this.C=a,x5a(this,a));a=a9(this.Wb);-1===a.volume||Math.round(this.G.getVolume())===a.volume&&this.G.isMuted()===a.muted||this.U.isActive()||this.bS()}else w5a(this)};
g.h.bQ=function(){this.G.W("mdxpreviousnextchange")};
g.h.GC=function(){J9(this)||w5a(this)};
g.h.UP=function(a){isNaN(a)||this.G.W("mdxnowautoplaying",a)};
g.h.xP=function(){this.G.W("mdxautoplaycanceled")};
g.h.setAudioTrack=function(a){J9(this)&&this.Wb.setAudioTrack(this.G.getVideoData(1).videoId,a)};
g.h.seekTo=function(a,b){-1===a9(this.Wb).playerState?L9(this,a):b&&this.Wb.seekTo(a)};
g.h.bS=function(){var a=this;if(J9(this)){var b=a9(this.Wb);this.events.qc(this.V);b.muted?this.G.mute():this.G.unMute();this.G.setVolume(b.volume);this.V=this.events.N(this.G,"onVolumeChange",function(c){v5a(a,c)})}};
g.h.rR=function(){this.j.stop();if(!this.Wb.isDisposed()){var a=a9(this.Wb);a.isPlaying()&&this.Pb(new g.dF(8));this.Rb(W8(a));this.j.start()}};
g.h.sR=function(){this.B.stop();this.j.stop();var a=this.Wb.tp();2==this.Wb.B&&!isNaN(a)&&this.B.start()};
g.h.Pb=function(a){this.B.stop();var b=this.I;if(!g.iF(b,a)){var c=g.U(a,2);c!==g.U(this.I,2)&&this.G.Lv(c);this.I=a;z5a(this.u,b,a)}};g.w(M9,g.V);M9.prototype.od=function(){this.j.show()};
M9.prototype.Eb=function(){this.j.hide()};
M9.prototype.u=function(){q6("mdx-privacy-popup-cancel");this.Eb()};
M9.prototype.B=function(){q6("mdx-privacy-popup-confirm");this.Eb()};g.w(N9,g.V);N9.prototype.onStateChange=function(a){y5a(this,a.state)};g.w(O9,g.cM);O9.prototype.C=function(){var a=this.G.getOption("remote","receivers");a&&1<a.length&&!this.G.getOption("remote","quickCast")?(this.aq=g.Yb(a,this.j,this),g.dM(this,g.Oj(a,this.j)),a=this.G.getOption("remote","currentReceiver"),a=this.j(a),this.options[a]&&this.vj(a),this.enable(!0)):this.enable(!1)};
O9.prototype.j=function(a){return a.key};
O9.prototype.vk=function(a){return"cast-selector-receiver"===a?"Cast...":this.aq[a].name};
O9.prototype.wg=function(a){g.cM.prototype.wg.call(this,a);this.G.setOption("remote","currentReceiver",this.aq[a]);this.gb.Eb()};g.w(P9,g.EI);g.h=P9.prototype;
g.h.create=function(){var a=this.player.R(),b=g.KA(a);a={device:"Desktop",app:"youtube-desktop",loadCastApiSetupScript:a.K("mdx_load_cast_api_bootstrap_script"),enableDialLoungeToken:a.K("enable_dial_short_lived_lounge_token"),enableCastLoungeToken:a.K("enable_cast_short_lived_lounge_token")};q5a(b,a);this.subscriptions.push(g.gt("yt-remote-before-disconnect",this.lY,this));this.subscriptions.push(g.gt("yt-remote-connection-change",this.IZ,this));this.subscriptions.push(g.gt("yt-remote-receiver-availability-change",this.dQ,
this));this.subscriptions.push(g.gt("yt-remote-auto-connect",this.GZ,this));this.subscriptions.push(g.gt("yt-remote-receiver-resumed",this.FZ,this));this.subscriptions.push(g.gt("mdx-privacy-popup-confirm",this.V_,this));this.subscriptions.push(g.gt("mdx-privacy-popup-cancel",this.U_,this));this.dQ()};
g.h.load=function(){this.player.cancelPlayback();g.EI.prototype.load.call(this);this.yj=new I9(this,this.player,this.Wb);var a=(a=u5a())?a.currentTime:0;var b=F9()?new $8(z9(),void 0):null;0==a&&b&&(a=W8(a9(b)));0!==a&&this.Rb(a);z5a(this,this.Od,this.Od);this.player.Fm(6)};
g.h.unload=function(){this.player.W("mdxautoplaycanceled");this.Uo=this.ym;g.ce(this.yj,this.Wb);this.Wb=this.yj=null;g.EI.prototype.unload.call(this);this.player.Fm(5);Q9(this)};
g.h.Y=function(){g.ht(this.subscriptions);g.EI.prototype.Y.call(this)};
g.h.zm=function(a){var b=g.za.apply(1,arguments);this.loaded&&this.yj.Jk.apply(this.yj,[a].concat(g.v(b)))};
g.h.getAdState=function(){return this.hg};
g.h.lm=function(){return this.Wb?a9(this.Wb).lm:!1};
g.h.hasNext=function(){return this.Wb?a9(this.Wb).hasNext:!1};
g.h.Rb=function(a,b){this.KO=a||0;this.player.W("progresssync",a,b);this.player.Ia("onVideoProgress",a||0)};
g.h.getCurrentTime=function(){return this.KO};
g.h.getProgressState=function(){var a=a9(this.Wb),b=this.player.getVideoData();return{airingStart:0,airingEnd:0,allowSeeking:this.player.R().K("web_player_mdx_allow_seeking_change_killswitch")?this.player.Of():!a.isAdPlaying()&&this.player.Of(),clipEnd:b.clipEnd,clipStart:b.clipStart,current:this.getCurrentTime(),displayedStart:-1,duration:a.getDuration(),ingestionTime:a.u?a.B+U8(a):a.B,isAtLiveHead:1>=(a.u?a.j+U8(a):a.j)-this.getCurrentTime(),loaded:a.P,seekableEnd:a.u?a.j+U8(a):a.j,seekableStart:0<
a.C?a.C+U8(a):a.C}};
g.h.nextVideo=function(){this.Wb&&this.Wb.nextVideo()};
g.h.TC=function(){this.Wb&&this.Wb.TC()};
g.h.lY=function(a){1===a&&(this.HI=this.Wb?a9(this.Wb):null)};
g.h.IZ=function(){var a=F9()?new $8(z9(),void 0):null;if(a){var b=this.Uo;this.loaded&&this.unload();this.Wb=a;this.HI=null;b.key!==this.ym.key&&(this.Uo=b,this.load())}else g.be(this.Wb),this.Wb=null,this.loaded&&(this.unload(),(a=this.HI)&&a.videoId===this.player.getVideoData().videoId&&this.player.cueVideoById(a.videoId,W8(a)));this.player.W("videodatachange","newdata",this.player.getVideoData(),3)};
g.h.dQ=function(){var a=[this.ym],b=a.concat,c=r5a();O8()&&g.Hu("yt-remote-cast-available")&&c.push({key:"cast-selector-receiver",name:"Cast..."});this.aq=b.call(a,c);a=A9()||this.ym;R9(this,a);this.player.Ia("onMdxReceiversChange")};
g.h.GZ=function(){var a=A9();R9(this,a)};
g.h.FZ=function(){this.Uo=A9()};
g.h.V_=function(){this.gz=!0;Q9(this);H9=!1;B9&&D9(B9,1);B9=null};
g.h.U_=function(){this.gz=!1;Q9(this);R9(this,this.ym);this.Uo=this.ym;H9=!1;B9=null;this.player.playVideo()};
g.h.Xf=function(a,b){switch(a){case "casting":return this.loaded;case "receivers":return this.aq;case "currentReceiver":return b&&("cast-selector-receiver"===b.key?Q8():R9(this,b)),this.loaded?this.Uo:this.ym;case "quickCast":return 2===this.aq.length&&"cast-selector-receiver"===this.aq[1].key?(b&&Q8(),!0):!1}};
g.h.MJ=function(){this.Wb.MJ()};
g.h.jj=function(){return!1};
g.h.getOptions=function(){return["casting","receivers","currentReceiver","quickCast"]};g.DI("remote",P9);})(_yt_player);


}
/*
     FILE ARCHIVED ON 06:41:56 Jun 18, 2022 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 07:26:26 May 29, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.576
  exclusion.robots: 0.026
  exclusion.robots.policy: 0.015
  esindex: 0.01
  cdx.remote: 95.034
  LoadShardBlock: 77.844 (3)
  PetaboxLoader3.datanode: 114.932 (5)
  load_resource: 348.793 (2)
  PetaboxLoader3.resolve: 229.679 (2)
*/