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

(function(g){var window=this;var TCa=function(a,b){return g.Tb(a,b)},b6=function(a){g.an(a,"zx",g.vb());
return a},c6=function(a,b,c){g.wa(c)||(c=[String(c)]);
g.dn(a.o,b,c)},UCa=function(a,b){var c=[];
g.Nk(b,function(a){try{var b=g.BD.prototype.A.call(this,a,!0)}catch(f){if("Storage: Invalid value was encountered"==f)return;throw f;}g.u(b)?g.AD(b)&&c.push(a):c.push(a)},a);
return c},VCa=function(a,b){var c=UCa(a,b);
(0,g.D)(c,function(a){g.BD.prototype.remove.call(this,a)},a)},WCa=function(a){if(a.Nd){if(a.Nd.locationOverrideToken)return{locationOverrideToken:a.Nd.locationOverrideToken};
if(null!=a.Nd.latitudeE7&&null!=a.Nd.longitudeE7)return{latitudeE7:a.Nd.latitudeE7,longitudeE7:a.Nd.longitudeE7}}return null},XCa=function(a,b,c,d){var e=new g.Sm(null,void 0);
a&&g.Tm(e,a);b&&g.Um(e,b);c&&g.Vm(e,c);d&&g.Wm(e,d);return e},YCa=function(a){return a?a.dataset?a.dataset[g.rF("loaded")]:a.getAttribute("data-loaded"):null},d6=function(a,b){g.kG[a]=!0;
var c=g.iG();c&&c.publish.apply(c,arguments);g.kG[a]=!1},ZCa=function(a){g.lG[a]&&(a=g.lG[a],(0,g.D)(a,function(a){g.jG[a]&&delete g.jG[a]}),a.length=0)},$Ca=function(a){var b=g.iG();
if(b)if(b.clear(a),a)ZCa(a);else for(var c in g.lG)ZCa(c)},e6=function(a){this.app=this.name=this.id="";
this.type="REMOTE_CONTROL";this.obfuscatedGaiaId=this.avatar=this.username="";this.B=!1;this.capabilities=new window.Set;this.experiments=new window.Set;this.theme="u";new g.Mm;this.o=this.A="";a&&(this.id=a.id||a.name,this.name=a.name,this.app=a.app,this.type=a.type||"REMOTE_CONTROL",this.username=a.user||"",this.avatar=a.userAvatarUri||"",this.obfuscatedGaiaId=a.obfuscatedGaiaId||"",this.theme=a.theme||"u",aDa(this,a.capabilities||""),bDa(this,a.experiments||""),this.A=a.remoteControllerUrl||"",
this.o=a.localChannelEncryptionKey||"")},aDa=function(a,b){a.capabilities.clear();
(0,g.Yd)(b.split(","),g.Ca(TCa,cDa)).forEach(function(b){a.capabilities.add(b)})},bDa=function(a,b){a.experiments.clear();
b.split(",").forEach(function(b){a.experiments.add(b)})},f6=function(a){a=a||{};
this.name=a.name||"";this.id=a.id||a.screenId||"";this.token=a.token||a.loungeToken||"";this.uuid=a.uuid||a.dialId||""},g6=function(a,b){return!!b&&(a.id==b||a.uuid==b)},dDa=function(a){return{name:a.name,
screenId:a.id,loungeToken:a.token,dialId:a.uuid}},eDa=function(a){return new f6(a)},fDa=function(a){return g.wa(a)?(0,g.J)(a,eDa):[]},h6=function(a){return a?'{name:"'+a.name+'",id:'+a.id.substr(0,6)+"..,token:"+(a.token?".."+a.token.slice(-6):"-")+",uuid:"+(a.uuid?".."+a.uuid.slice(-6):"-")+"}":"null"},i6=function(a){return g.wa(a)?"["+(0,g.J)(a,h6).join(",")+"]":"null"},j6=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(a){var b=16*Math.random()|0;
return("x"==a?b:b&3|8).toString(16)})},gDa=function(a){return(0,g.J)(a,function(a){return{key:a.id,
name:a.name}})},k6=function(a,b){return g.Ia(a,function(a){return a||b?!a!=!b?!1:a.id==b.id:!0})},l6=function(a,b){return g.Ia(a,function(a){return g6(a,b)})},hDa=function(){var a=(0,g.tH)();
a&&VCa(a,a.o.de(!0))},m6=function(){var a=g.wH("yt-remote-connected-devices")||[];
g.eb(a);return a},iDa=function(a){if(g.Oa(a))return[];
var b=a[0].indexOf("#"),c=-1==b?a[0]:a[0].substring(0,b);return(0,g.J)(a,function(a,b){return 0==b?a:a.substring(c.length)})},jDa=function(a){g.vH("yt-remote-connected-devices",a,86400)},o6=function(){if(n6)return n6;
var a=g.wH("yt-remote-device-id");a||(a=j6(),g.vH("yt-remote-device-id",a,31536E3));for(var b=m6(),c=1,d=a;g.Na(b,d);)c++,d=a+"#"+c;return n6=d},p6=function(){var a=m6(),b=o6();
g.Na(a,b);g.yH()&&g.gb(a,b);a=iDa(a);if(g.Oa(a))try{g.SG("remote_sid")}catch(c){}else try{g.RG("remote_sid",a.join(","),-1)}catch(c){}},kDa=function(){return g.wH("yt-remote-session-browser-channel")},lDa=function(){return g.wH("yt-remote-local-screens")||[]},mDa=function(){g.vH("yt-remote-lounge-token-expiration",!0,86400)},nDa=function(a){5<a.length&&(a=a.slice(a.length-5));
var b=(0,g.J)(lDa(),function(a){return a.loungeToken}),c=(0,g.J)(a,function(a){return a.loungeToken});
(0,g.Am)(c,function(a){return!g.Na(b,a)})&&mDa();
g.vH("yt-remote-local-screens",a,31536E3)},oDa=function(a,b){g.vH("yt-remote-session-browser-channel",a);
g.vH("yt-remote-session-screen-id",b);var c=m6(),d=o6();g.Na(c,d)||c.push(d);jDa(c);p6()},q6=function(a){a||(g.xH("yt-remote-session-screen-id"),g.xH("yt-remote-session-video-id"));
p6();a=m6();g.Ta(a,o6());jDa(a)},pDa=function(){if(!r6){var a=g.MD();
a&&(r6=new g.vD(a))}return r6?!!r6.get("yt-remote-use-staging-server"):!1},qDa=function(){var a=window.document.createElement("a");
g.ld(a,"https://web.archive.org/web/20181217212556/https://www.gstatic.com/cv/js/sender/v1/cast_sender.js");a=a.href.replace(/^[a-zA-Z]+:\/\//,"//");return"js-"+g.zb(a)},rDa=function(a,b,c){c=void 0===c?null:c;
var d=g.Rd("SCRIPT");d.id=a;d.onload=function(){b&&(0,window.setTimeout)(b,0)};
d.onreadystatechange=function(){switch(d.readyState){case "loaded":case "complete":d.onload()}};
c&&d.setAttribute("nonce",c);g.nd(d,g.ne("https://web.archive.org/web/20181217212556/https://www.gstatic.com/cv/js/sender/v1/cast_sender.js"));a=window.document.getElementsByTagName("head")[0]||window.document.body;a.insertBefore(d,a.firstChild);return d},sDa=function(a){a=void 0===a?null:a;
var b=qDa(),c=window.document.getElementById(b),d=c&&YCa(c);d||c&&!d||(c=rDa(b,function(){YCa(c)||(g.sF(c,"loaded","true"),g.pG(b),g.rE(g.Ca($Ca,b),0))},a))},tDa=function(){var a=void 0===a?null:a;
window.spf?window.spf.script.load("https://web.archive.org/web/20181217212556/https://www.gstatic.com/cv/js/sender/v1/cast_sender.js","",void 0):sDa(a)},s6=function(a){return!!window.document.currentScript&&(-1!=window.document.currentScript.src.indexOf("?"+a)||-1!=window.document.currentScript.src.indexOf("&"+a))},uDa=function(){return"function"==typeof window.__onGCastApiAvailable?window.__onGCastApiAvailable:null},t6=function(a){a.length?vDa(a.shift(),function(){t6(a)}):u6()},wDa=function(a){return"chrome-extension://"+a+v6},vDa=function(a,
b,c){var d=window.document.createElement("script");
d.onerror=b;c&&(d.onload=c);d.src=a;(window.document.head||window.document.documentElement).appendChild(d)},w6=function(a){return 0<=window.navigator.userAgent.indexOf(a)},u6=function(){var a=uDa();
a&&a(!1,"No cast extension found")},x6=function(){if(xDa){var a=2,b=uDa(),c=function(){a--;
0==a&&b&&b(!0)};
window.__onGCastApiAvailable=c;vDa("//web.archive.org/web/20181217212556/https://www.gstatic.com/cast/sdk/libs/sender/1.0/cast_framework.js",u6,c)}},yDa=function(){var a=window.__gCrWeb&&window.__gCrWeb.message&&window.__gCrWeb.message.invokeOnHost;
a&&(x6(),a({command:"cast.sender.init"}))},zDa=function(){x6();
var a=window.navigator.userAgent.match(/Chrome\/([0-9]+)/);t6(["//web.archive.org/web/20181217212556/https://www.gstatic.com/eureka/clank/"+(a?(0,window.parseInt)(a[1],10):0)+v6,"//web.archive.org/web/20181217212556/https://www.gstatic.com/eureka/clank"+v6])},y6=function(a,b,c){g.K.call(this);
this.F=null!=c?(0,g.B)(a,c):a;this.Ed=b;this.D=(0,g.B)(this.PK,this);this.o=!1;this.A=0;this.B=this.Fa=null;this.C=[]},z6=function(){},A6=function(a,b,c,d){this.o=a;
this.B=b;this.G=c;this.F=d||1;this.C=45E3;this.Y=new g.hn(this);this.A=new g.Ag;this.A.setInterval(250)},BDa=function(a,b,c){a.Uj=1;
a.yh=b6(b.clone());a.kj=c;a.D=!0;ADa(a,null)},B6=function(a,b,c,d,e){a.Uj=1;
a.yh=b6(b.clone());a.kj=null;a.D=c;e&&(a.nF=!1);ADa(a,d)},ADa=function(a,b){a.Rk=(0,g.I)();
C6(a);a.Zh=a.yh.clone();c6(a.Zh,"t",a.F);a.Ln=0;a.Rc=a.o.Os(a.o.Dn()?b:null);0<a.It&&(a.Jq=new g.tl((0,g.B)(a.EG,a,a.Rc),a.It));a.Y.W(a.Rc,"readystatechange",a.bW);var c=a.Ki?g.dc(a.Ki):{};a.kj?(a.yr="POST",c["Content-Type"]="application/x-www-form-urlencoded",a.Rc.send(a.Zh,a.yr,a.kj,c)):(a.yr="GET",a.nF&&!g.Md&&(c.Connection="close"),a.Rc.send(a.Zh,a.yr,null,c));a.o.Ff(1)},EDa=function(a,b,c){for(var d=!0;!a.si&&a.Ln<c.length;){var e=CDa(a,c);
if(e==D6){4==b&&(a.zh=4,E6(15),d=!1);break}else if(e==DDa){a.zh=4;E6(16);d=!1;break}else F6(a,e)}4==b&&0==c.length&&(a.zh=1,E6(17),d=!1);a.Mf=a.Mf&&d;d||(G6(a),H6(a))},CDa=function(a,b){var c=a.Ln,d=b.indexOf("\n",c);
if(-1==d)return D6;c=Number(b.substring(c,d));if((0,window.isNaN)(c))return DDa;d+=1;if(d+c>b.length)return D6;var e=b.substr(d,c);a.Ln=d+c;return e},GDa=function(a,b){a.Rk=(0,g.I)();
C6(a);var c=b?window.location.hostname:"";a.Zh=a.yh.clone();g.an(a.Zh,"DOMAIN",c);g.an(a.Zh,"t",a.F);try{a.Nf=new window.ActiveXObject("htmlfile")}catch(n){G6(a);a.zh=7;E6(22);H6(a);return}var d="<html><body>";if(b){for(var e="",f=0;f<c.length;f++){var k=c.charAt(f);if("<"==k)e+="\\x3c";else if(">"==k)e+="\\x3e";else{var l=k;if(l in I6)k=I6[l];else if(l in FDa)k=I6[l]=FDa[l];else{var m=l.charCodeAt(0);if(31<m&&127>m)k=l;else{if(256>m){if(k="\\x",16>m||256<m)k+="0"}else k="\\u",4096>m&&(k+="0");k+=
m.toString(16).toUpperCase()}k=I6[l]=k}e+=k}}d+='<script>document.domain="'+e+'"\x3c/script>'}c=g.od(g.Dc("b/12014412"),d+"</body></html>");a.Nf.open();a.Nf.write(g.ed(c));a.Nf.close();a.Nf.parentWindow.m=(0,g.B)(a.kV,a);a.Nf.parentWindow.d=(0,g.B)(a.uE,a,!0);a.Nf.parentWindow.rpcClose=(0,g.B)(a.uE,a,!1);c=a.Nf.createElement("DIV");a.Nf.parentWindow.document.body.appendChild(c);d=g.Rc(a.Zh.toString());d=g.pb(g.Oc(d));d=g.od(g.Dc("b/12014412"),'<iframe src="'+d+'"></iframe>');g.kd(c,g.ed(d));a.o.Ff(1)},
C6=function(a){a.Cx=(0,g.I)()+a.C;
HDa(a,a.C)},HDa=function(a,b){if(null!=a.ol)throw Error("WatchDog timer not null");
a.ol=J6((0,g.B)(a.zV,a),b)},K6=function(a){a.ol&&(g.x.clearTimeout(a.ol),a.ol=null)},H6=function(a){a.o.JA()||a.si||a.o.wq(a)},G6=function(a){K6(a);
g.mf(a.Jq);a.Jq=null;a.A.stop();g.on(a.Y);if(a.Rc){var b=a.Rc;a.Rc=null;b.abort();b.dispose()}a.Nf&&(a.Nf=null)},F6=function(a,b){try{a.o.mE(a,b),a.o.Ff(4)}catch(c){}},JDa=function(a,b,c,d,e){if(0==d)c(!1);
else{var f=e||0;d--;IDa(a,b,function(e){e?c(!0):g.x.setTimeout(function(){JDa(a,b,c,d,f)},f)})}},IDa=function(a,b,c){var d=new window.Image;
d.onload=function(){try{L6(d),c(!0)}catch(e){}};
d.onerror=function(){try{L6(d),c(!1)}catch(e){}};
d.onabort=function(){try{L6(d),c(!1)}catch(e){}};
d.ontimeout=function(){try{L6(d),c(!1)}catch(e){}};
g.x.setTimeout(function(){if(d.ontimeout)d.ontimeout()},b);
d.src=a},L6=function(a){a.onload=null;
a.onerror=null;a.onabort=null;a.ontimeout=null},KDa=function(a){this.o=a;
this.A=new z6},LDa=function(a){var b=M6(a.o,a.ul,"/mail/images/cleardot.gif");
b6(b);JDa(b.toString(),5E3,(0,g.B)(a.UJ,a),3,2E3);a.Ff(1)},O6=function(a){var b=a.o.J;
if(null!=b)E6(5),b?(E6(11),N6(a.o,a,!1)):(E6(12),N6(a.o,a,!0));else if(a.He=new A6(a,void 0,void 0,void 0),a.He.Ki=a.Gt,b=a.o,b=M6(b,b.Dn()?a.hm:null,a.Ht),E6(5),!g.Jd||g.vc(10))c6(b,"TYPE","xmlhttp"),B6(a.He,b,!1,a.hm,!1);else{c6(b,"TYPE","html");var c=a.He;a=!!a.hm;c.Uj=3;c.yh=b6(b.clone());GDa(c,a)}},P6=function(a,b,c){this.o=1;
this.A=[];this.C=[];this.D=new z6;this.H=a||null;this.J=null!=b?b:null;this.F=c||!1},MDa=function(a,b){this.o=a;
this.map=b;this.context=null},NDa=function(a){g.of.call(this,"statevent",a)},ODa=function(a,b){g.of.call(this,"timingevent",a);
this.size=b},PDa=function(a){g.of.call(this,"serverreachability",a)},SDa=function(a){QDa(a);
if(3==a.o){var b=a.jn++,c=a.fp.clone();g.an(c,"SID",a.B);g.an(c,"RID",b);g.an(c,"TYPE","terminate");Q6(a,c);b=new A6(a,a.B,b,void 0);b.Uj=2;b.yh=b6(c.clone());(new window.Image).src=b.yh;b.Rk=(0,g.I)();C6(b)}RDa(a)},TDa=function(a){a.qK(1,0);
a.fp=M6(a,null,a.Ft);R6(a)},QDa=function(a){a.nh&&(a.nh.abort(),a.nh=null);
a.zc&&(a.zc.cancel(),a.zc=null);a.yg&&(g.x.clearTimeout(a.yg),a.yg=null);S6(a);a.ie&&(a.ie.cancel(),a.ie=null);a.sh&&(g.x.clearTimeout(a.sh),a.sh=null)},UDa=function(a,b){if(0==a.o)throw Error("Invalid operation: sending map when state is closed");
a.A.push(new MDa(a.aR++,b));2!=a.o&&3!=a.o||R6(a)},R6=function(a){a.ie||a.sh||(a.sh=J6((0,g.B)(a.sE,a),0),a.Lj=0)},WDa=function(a,b){if(1==a.o){if(!b){a.jn=Math.floor(1E5*Math.random());
var c=a.jn++,d=new A6(a,"",c,void 0);d.Ki=null;var e=T6(a),f=a.fp.clone();g.an(f,"RID",c);g.an(f,"CVER","1");Q6(a,f);BDa(d,f,e);a.ie=d;a.o=2}}else 3==a.o&&(b?VDa(a,b):0==a.A.length||a.ie||VDa(a))},VDa=function(a,b){if(b)if(6<a.wi){a.A=a.C.concat(a.A);
a.C.length=0;var c=a.jn-1;var d=T6(a)}else c=b.G,d=b.kj;else c=a.jn++,d=T6(a);var e=a.fp.clone();g.an(e,"SID",a.B);g.an(e,"RID",c);g.an(e,"AID",a.mk);Q6(a,e);c=new A6(a,a.B,c,a.Lj+1);c.Ki=null;c.setTimeout(1E4+Math.round(1E4*Math.random()));a.ie=c;BDa(c,e,d)},Q6=function(a,b){if(a.Dd){var c=a.Dd.rA();
c&&g.Hb(c,function(a,c){g.an(b,c,a)})}},T6=function(a){var b=Math.min(a.A.length,1E3),c=["count="+b];
if(6<a.wi&&0<b){var d=a.A[0].o;c.push("ofs="+d)}else d=0;for(var e=0;e<b;e++){var f=a.A[e].o,k=a.A[e].map;f=6>=a.wi?e:f-d;try{g.Hb(k,function(a,b){c.push("req"+f+"_"+b+"="+(0,window.encodeURIComponent)(a))})}catch(l){c.push("req"+f+"_type="+(0,window.encodeURIComponent)("_badmap"))}}a.C=a.C.concat(a.A.splice(0,b));
return c.join("&")},XDa=function(a){a.zc||a.yg||(a.G=1,a.yg=J6((0,g.B)(a.rE,a),0),a.Cj=0)},U6=function(a){if(a.zc||a.yg||3<=a.Cj)return!1;
a.G++;a.yg=J6((0,g.B)(a.rE,a),YDa(a,a.Cj));a.Cj++;return!0},N6=function(a,b,c){a.wr=c;
a.Xf=b.Lg;a.F||TDa(a)},S6=function(a){null!=a.yi&&(g.x.clearTimeout(a.yi),a.yi=null)},YDa=function(a,b){var c=5E3+Math.floor(1E4*Math.random());
a.isActive()||(c*=2);return c*b},V6=function(a,b){if(2==b||9==b){var c=null;
a.Dd&&(c=null);var d=(0,g.B)(a.RW,a);c||(c=new g.Sm("//web.archive.org/web/20181217212556/https://www.google.com/images/cleardot.gif"),b6(c));IDa(c.toString(),1E4,d)}else E6(2);ZDa(a,b)},ZDa=function(a,b){a.o=0;
a.Dd&&a.Dd.uz(b);RDa(a);QDa(a)},RDa=function(a){a.o=0;
a.Xf=-1;if(a.Dd)if(0==a.C.length&&0==a.A.length)a.Dd.Bs();else{g.Wa(a.C);var b=g.Wa(a.A);a.C.length=0;a.A.length=0;a.Dd.Bs(b)}},M6=function(a,b,c){var d=g.bn(c);
if(""!=d.A)b&&g.Um(d,b+"."+d.A),g.Vm(d,d.D);else{var e=window.location;d=XCa(e.protocol,b?b+"."+e.hostname:e.hostname,+e.port,c)}a.Jl&&g.Hb(a.Jl,function(a,b){g.an(d,b,a)});
g.an(d,"VER",a.wi);Q6(a,d);return d},J6=function(a,b){if(!g.ya(a))throw Error("Fn must not be null and must be a function");
return g.x.setTimeout(function(){a()},b)},E6=function(a){W6.dispatchEvent(new NDa(W6,a))},$Da=function(){},aEa=function(a,b){this.action=a;
this.params=b||{}},X6=function(a,b){g.K.call(this);
this.o=new g.V(this.bV,0,this);g.M(this,this.o);this.Ed=5E3;this.A=0;if(g.ya(a))b&&(a=(0,g.B)(a,b));else if(a&&g.ya(a.handleEvent))a=(0,g.B)(a.handleEvent,a);else throw Error("Invalid listener argument");this.B=a},Y6=function(a,b,c){this.L=a;
this.F=b;this.B=new g.uD;this.A=new X6(this.uX,this);this.o=this.jb=null;this.K=!1;this.D=null;this.J="";this.H=this.C=0;this.G=[];this.M=c||!1},bEa=function(a){return{firstTestResults:[""],
secondTestResults:!a.o.wr,sessionId:a.o.B,arrayId:a.o.mk}},cEa=function(a,b){a.H=b||0;
a.A.stop();a.o&&(3==a.o.o&&WDa(a.o),SDa(a.o));a.H=0},Z6=function(a){return!!a.o&&3==a.o.o},dEa=function(a,b){(a.F.loungeIdToken=b)||a.A.stop()},$6=function(a){this.port=this.domain="";
this.o="/api/lounge";this.A=!0;a=a||window.document.location.href;var b=g.Pg(a)||"";b&&(this.port=":"+b);this.domain=g.Og(a)||"";a=g.Fb;0<=a.search("MSIE")&&(a=a.match(/MSIE ([\d.]+)/)[1],0>g.yb(a,"10.0")&&(this.A=!1))},a7=function(a,b){var c=a.o;
if(g.u(void 0)?0:a.A)c="https://"+a.domain+a.port+a.o;return g.Yg(c+b,{})},b7=function(a,b,c,d,e){a={format:"JSON",
method:"POST",context:a,timeout:5E3,withCredentials:!1,onSuccess:g.Ca(a.C,d,!0),onError:g.Ca(a.B,e),Jd:g.Ca(a.D,e)};c&&(a.Sb=c,a.headers={"Content-Type":"application/x-www-form-urlencoded"});return g.IE(b,a)},hEa=function(){var a=eEa;
fEa();c7.push(a);gEa(c7)},d7=function(a,b){fEa();
var c=c7,d=iEa(a,String(b));g.Oa(c)?jEa(d):(gEa(c),(0,g.D)(c,function(a){a(d)}))},fEa=function(){c7||(c7=g.y("yt.mdx.remote.debug.handlers_")||[],g.ta("yt.mdx.remote.debug.handlers_",c7,void 0))},jEa=function(a){var b=(e7+1)%50;
e7=b;f7[b]=a;g7||(g7=49==b)},gEa=function(a){var b=f7;
if(b[0]){var c=e7,d=g7?c:-1;do{d=(d+1)%50;var e=b[d];(0,g.D)(a,function(a){a(e)})}while(d!=c);
f7=Array(50);e7=-1;g7=!1}},iEa=function(a,b){var c=((0,g.I)()-kEa)/1E3;
c.toFixed&&(c=c.toFixed(3));var d=[];d.push("[",c+"s","] ");d.push("[","yt.mdx.remote","] ");d.push(a+": "+b,"\n");return d.join("")},h7=function(a){g.$F.call(this);
this.G=a;this.o=[]},lEa=function(a,b){var c=a.get(b.uuid)||a.get(b.id);
if(c){var d=c.name;c.id=b.id||c.id;c.name=b.name;c.token=b.token;c.uuid=b.uuid||c.uuid;return c.name!=d}a.o.push(b);return!0},mEa=function(a,b){var c=a.o.length!=b.length;
a.o=(0,g.Yd)(a.o,function(a){return!!k6(b,a)});
for(var d=0,e=b.length;d<e;d++)c=lEa(a,b[d])||c;return c},nEa=function(a,b){var c=a.o.length;
a.o=(0,g.Yd)(a.o,function(a){return!(a||b?!a!=!b?0:a.id==b.id:1)});
return a.o.length<c},i7=function(a,b,c,d){g.$F.call(this);
this.F=a;this.D=b;this.B=c;this.C=d;this.A=0;this.o=null;this.Fa=window.NaN},k7=function(a){h7.call(this,"LocalScreenService");
this.B=a;this.A=window.NaN;j7(this);this.info("Initializing with "+i6(this.o))},oEa=function(a){if(a.o.length){var b=(0,g.J)(a.o,function(a){return a.id}),c=a7(a.B,"/pairing/get_lounge_token_batch");
b7(a.B,c,{screen_ids:b.join(",")},(0,g.B)(a.dL,a),(0,g.B)(a.cL,a))}},j7=function(a){var b=fDa(lDa());
b=(0,g.Yd)(b,function(a){return!a.uuid});
return mEa(a,b)},l7=function(a,b){nDa((0,g.J)(a.o,dDa));
b&&mDa()},n7=function(a,b){g.$F.call(this);
this.F=b;var c=g.wH("yt-remote-online-screen-ids")||"";c=c?c.split(","):[];for(var d={},e=this.F(),f=0,k=e.length;f<k;++f){var l=e[f].id;d[l]=g.Na(c,l)}this.o=d;this.D=a;this.B=this.C=window.NaN;this.A=null;m7("Initialized with "+g.Gg(this.o))},pEa=function(a,b,c){var d=a7(a.D,"/pairing/get_screen_availability");
b7(a.D,d,{lounge_token:b.token},(0,g.B)(function(a){a=a.screens||[];for(var d=0,e=a.length;d<e;++d)if(a[d].loungeToken==b.token){c("online"==a[d].status);return}c(!1)},a),(0,g.B)(function(){c(!1)},a))},o7=function(a,b){a:if(g.Nb(b)!=g.Nb(a.o))var c=!1;
else{c=g.Qb(b);for(var d=0,e=c.length;d<e;++d)if(!a.o[c[d]]){c=!1;break a}c=!0}c||(m7("Updated online screens: "+g.Gg(a.o)),a.o=b,a.V("screenChange"));qEa(a)},p7=function(a){(0,window.isNaN)(a.B)||g.tE(a.B);
a.B=g.rE((0,g.B)(a.Bw,a),0<a.C&&a.C<(0,g.I)()?2E4:1E4)},m7=function(a){d7("OnlineScreenService",a)},rEa=function(a){var b={};
(0,g.D)(a.F(),function(a){a.token?b[a.token]=a.id:this.sc("Requesting availability of screen w/o lounge token.")});
return b},qEa=function(a){a=g.Qb(g.Jb(a.o,function(a){return a}));
g.eb(a);a.length?g.vH("yt-remote-online-screen-ids",a.join(","),60):g.xH("yt-remote-online-screen-ids")},q7=function(a){h7.call(this,"ScreenService");
this.F=a;this.A=this.B=null;this.C=[];this.D={};sEa(this)},uEa=function(a,b,c,d,e,f){a.info("getAutomaticScreenByIds "+c+" / "+b);
c||(c=a.D[b]);var k=a.Be();if(k=(c?l6(k,c):null)||l6(k,b)){k.uuid=b;var l=r7(a,k);pEa(a.A,l,function(a){e(a?l:null)})}else c?tEa(a,c,(0,g.B)(function(a){var f=r7(this,new f6({name:d,
screenId:c,loungeToken:a,dialId:b||""}));pEa(this.A,f,function(a){e(a?f:null)})},a),f):e(null)},vEa=function(a,b){for(var c=0,d=a.o.length;c<d;++c)if(a.o[c].name==b)return a.o[c];
return null},tEa=function(a,b,c,d){a.info("requestLoungeToken_ for "+b);
var e={Sb:{screen_ids:b},method:"POST",context:a,onSuccess:function(a,e){var f=e&&e.screens||[];f[0]&&f[0].screenId==b?c(f[0].loungeToken):d(Error("Missing lounge token in token response"))},
onError:function(){d(Error("Request screen lounge token failed"))}};
g.IE(a7(a.F,"/pairing/get_lounge_token_batch"),e)},wEa=function(a){a.o=a.B.Be();
var b=a.D,c={},d;for(d in b)c[b[d]]=d;b=0;for(d=a.o.length;b<d;++b){var e=a.o[b];e.uuid=c[e.id]||""}a.info("Updated manual screens: "+i6(a.o))},sEa=function(a){s7(a);
a.B=new k7(a.F);a.B.subscribe("screenChange",(0,g.B)(a.qL,a));wEa(a);a.C=fDa(g.wH("yt-remote-automatic-screen-cache")||[]);s7(a);a.info("Initializing automatic screens: "+i6(a.C));a.A=new n7(a.F,(0,g.B)(a.Be,a,!0));a.A.subscribe("screenChange",(0,g.B)(function(){this.V("onlineScreenChange")},a))},r7=function(a,b){var c=a.get(b.id);
c?(c.uuid=b.uuid,b=c):((c=l6(a.C,b.uuid))?(c.id=b.id,c.token=b.token,b=c):a.C.push(b),g.vH("yt-remote-automatic-screen-cache",(0,g.J)(a.C,dDa)));s7(a);a.D[b.uuid]=b.id;g.vH("yt-remote-device-id-map",a.D,31536E3);return b},s7=function(a){a.D=g.wH("yt-remote-device-id-map")||{}},t7=function(a,b,c){g.$F.call(this);
this.M=c;this.J=a;this.A=b;this.B=null},u7=function(a,b){d7(a.M,b)},v7=function(a,b){t7.call(this,a,b,"CastSession");
this.o=null;this.C=0;this.F=(0,g.B)(this.AX,this);this.D=(0,g.B)(this.MV,this);this.C=g.rE((0,g.B)(function(){xEa(this,null)},this),12E4)},yEa=function(a){a.info("sendYoutubeMessage_: getMdxSessionStatus "+g.Gg(void 0));
var b={type:"getMdxSessionStatus"};a.o?a.o.sendMessage("urn:x-cast:com.google.youtube.mdx",b,g.A,(0,g.B)(function(){u7(this,"Failed to send message: getMdxSessionStatus.")},a)):u7(a,"Sending yt message without session: "+g.Gg(b))},xEa=function(a,b){g.tE(a.C);
if(b){if(a.info("onConnectedScreenId_: Received screenId: "+b),!a.B||a.B.id!=b){var c=(0,g.B)(a.xq,a),d=(0,g.B)(a.Ge,a);a.zA(b,c,d,5)}}else a.Ge(Error("Waiting for session status timed out."))},w7=function(a,b,c){t7.call(this,a,b,"DialSession");
this.C=this.H=null;this.K="";this.O=c;this.D=null;this.G=g.A;this.F=window.NaN;this.L=(0,g.B)(this.DX,this);this.o=g.A},zEa=function(a){a.o=a.J.NG(a.K,a.A.label,a.A.friendlyName,(0,g.B)(function(a){this.o=g.A;
this.xq(a)},a),(0,g.B)(function(a){this.o=g.A;
this.Ge(a)},a))},AEa=function(a){var b={};
b.pairingCode=a.K;b.theme=a.O;if(a.D){var c=a.D.currentTime||0;b.v=a.D.videoId;b.t=c}pDa()&&(b.env_useStageMdx=1);return g.Wg(b)},x7=function(a,b){t7.call(this,a,b,"ManualSession");
this.o=g.rE((0,g.B)(this.pk,this,null),150)},y7=function(a,b,c,d){g.$F.call(this);
this.A=a;this.G=b||"233637DE";this.F=c||"cl";this.H=d||!1;this.o=null;this.D=!1;this.B=[];this.C=(0,g.B)(this.pU,this)},BEa=function(a,b){return b?g.Ia(a.B,function(a){return g6(b,a.label)},a):null},z7=function(a){d7("Controller",a)},eEa=function(a){window.chrome&&window.chrome.cast&&window.chrome.cast.logMessage&&window.chrome.cast.logMessage(a)},A7=function(a){return a.D||!!a.B.length||!!a.o},B7=function(a,b,c){b!=a.o&&(g.mf(a.o),(a.o=b)?(c?a.V("yt-remote-cast2-receiver-resumed",b.A):a.V("yt-remote-cast2-receiver-selected",
b.A),b.subscribe("sessionScreen",(0,g.B)(a.pE,a,b)),b.B?a.V("yt-remote-cast2-session-change",b.B):c&&a.o.pk(null)):a.V("yt-remote-cast2-session-change",null))},CEa=function(a){var b=a.A.MG(),c=a.o&&a.o.A;
a=(0,g.J)(b,function(a){c&&g6(a,c.label)&&(c=null);var b=a.uuid?a.uuid:a.id,d=BEa(this,a);d?(d.label=b,d.friendlyName=a.name):(d=new window.chrome.cast.Receiver(b,a.name),d.receiverType=window.chrome.cast.ReceiverType.CUSTOM);return d},a);
c&&(c.receiverType!=window.chrome.cast.ReceiverType.CUSTOM&&(c=new window.chrome.cast.Receiver(c.label,c.friendlyName),c.receiverType=window.chrome.cast.ReceiverType.CUSTOM),a.push(c));return a},IEa=function(a,b,c,d,e,f,k){DEa()?EEa(b,e,f,k)&&(D7(!0),window.chrome&&window.chrome.cast&&window.chrome.cast.isAvailable?FEa(a,c):(window.__onGCastApiAvailable=function(b,d){b?FEa(a,c):(E7("Failed to load cast API: "+d),F7(!1),D7(!1),g.xH("yt-remote-cast-available"),g.xH("yt-remote-cast-receiver"),GEa(),
c(!1))},d?tDa():w6("CriOS")?yDa():w6("Android")&&w6("Chrome/")&&window.navigator.presentation?zDa():window.chrome&&window.navigator.presentation&&!w6("Edge")?(x6(),t6(HEa.map(wDa))):u6())):C7("Cannot initialize because not running Chrome")},GEa=function(){C7("dispose");
var a=G7();a&&a.dispose();g.ta("yt.mdx.remote.cloudview.instance_",null,void 0);JEa(!1);g.nG(H7);H7.length=0},I7=function(){return!!g.wH("yt-remote-cast-installed")},KEa=function(){var a=g.wH("yt-remote-cast-receiver");
return a?a.friendlyName:null},LEa=function(){C7("clearCurrentReceiver");
g.xH("yt-remote-cast-receiver")},MEa=function(){return I7()?G7()?G7().getCastSession():(E7("getCastSelector: Cast is not initialized."),null):(E7("getCastSelector: Cast API is not installed!"),null)},K7=function(){I7()?G7()?J7()?(C7("Requesting cast selector."),G7().requestSession()):(C7("Wait for cast API to be ready to request the session."),H7.push(g.mG("yt-remote-cast2-api-ready",K7))):E7("requestCastSelector: Cast is not initialized."):E7("requestCastSelector: Cast API is not installed!")},L7=
function(a,b){J7()?G7().setConnectedScreenStatus(a,b):E7("setConnectedScreenStatus called before ready.")},DEa=function(){var a=0<=g.Fb.search(/ (CrMo|Chrome|CriOS)\//);
return g.HI||a},NEa=function(a,b){G7().init(a,b)},EEa=function(a,b,c,d){var e=!1;
G7()||(a=new y7(a,b,c,d),a.subscribe("yt-remote-cast2-availability-change",function(a){g.vH("yt-remote-cast-available",a);d6("yt-remote-cast2-availability-change",a)}),a.subscribe("yt-remote-cast2-receiver-selected",function(a){C7("onReceiverSelected: "+a.friendlyName);
g.vH("yt-remote-cast-receiver",a);d6("yt-remote-cast2-receiver-selected",a)}),a.subscribe("yt-remote-cast2-receiver-resumed",function(a){C7("onReceiverResumed: "+a.friendlyName);
g.vH("yt-remote-cast-receiver",a)}),a.subscribe("yt-remote-cast2-session-change",function(a){C7("onSessionChange: "+h6(a));
a||g.xH("yt-remote-cast-receiver");d6("yt-remote-cast2-session-change",a)}),g.ta("yt.mdx.remote.cloudview.instance_",a,void 0),e=!0);
C7("cloudview.createSingleton_: "+e);return e},G7=function(){return g.y("yt.mdx.remote.cloudview.instance_")},FEa=function(a,b){F7(!0);
D7(!1);NEa(a,function(a){a?(JEa(!0),g.pG("yt-remote-cast2-api-ready")):(E7("Failed to initialize cast API."),F7(!1),g.xH("yt-remote-cast-available"),g.xH("yt-remote-cast-receiver"),GEa());b(a)})},C7=function(a){d7("cloudview",a)},E7=function(a){d7("cloudview",a)},F7=function(a){C7("setCastInstalled_ "+a);
g.vH("yt-remote-cast-installed",a)},J7=function(){return!!g.y("yt.mdx.remote.cloudview.apiReady_")},JEa=function(a){C7("setApiReady_ "+a);
g.ta("yt.mdx.remote.cloudview.apiReady_",a,void 0)},D7=function(a){g.ta("yt.mdx.remote.cloudview.initializing_",a,void 0)},M7=function(a){this.index=-1;
this.videoId=this.listId="";this.volume=this.playerState=-1;this.muted=!1;this.audioTrackId=null;this.F=this.G=0;this.o=null;this.hasNext=this.cg=!1;this.J=this.H=this.A=this.C=0;this.B=window.NaN;this.D=!1;this.reset(a)},N7=function(a){a.audioTrackId=null;
a.o=null;a.playerState=-1;a.cg=!1;a.hasNext=!1;a.G=0;a.F=(0,g.I)();a.C=0;a.A=0;a.H=0;a.J=0;a.B=window.NaN;a.D=!1},O7=function(a){return a.rb()?((0,g.I)()-a.F)/1E3:0},P7=function(a,b){a.G=b;
a.F=(0,g.I)()},Q7=function(a){switch(a.playerState){case 1:case 1081:return((0,g.I)()-a.F)/1E3+a.G;
case -1E3:return 0}return a.G},R7=function(a,b,c){var d=a.videoId;
a.videoId=b;a.index=c;b!=d&&N7(a)},S7=function(a){var b={};
b.index=a.index;b.listId=a.listId;b.videoId=a.videoId;b.playerState=a.playerState;b.volume=a.volume;b.muted=a.muted;b.audioTrackId=a.audioTrackId;b.trackData=g.ec(a.o);b.hasPrevious=a.cg;b.hasNext=a.hasNext;b.playerTime=a.G;b.playerTimeAt=a.F;b.seekableStart=a.C;b.seekableEnd=a.A;b.duration=a.H;b.loadedTime=a.J;b.liveIngestionTime=a.B;return b},U7=function(a,b){g.$F.call(this);
this.o=0;this.C=a;this.F=[];this.D=new g.LC;this.B=this.A=null;this.J=(0,g.B)(this.JR,this);this.G=(0,g.B)(this.mn,this);this.H=(0,g.B)(this.IR,this);this.K=(0,g.B)(this.VR,this);var c=0;a?(c=a.getProxyState(),3!=c&&(a.subscribe("proxyStateChange",this.Kx,this),OEa(this))):c=3;0!=c&&(b?this.Kx(c):g.rE((0,g.B)(function(){this.Kx(c)},this),0));
var d=MEa();d&&T7(this,d);this.subscribe("yt-remote-cast2-session-change",this.K)},V7=function(a){return new M7(a.C.getPlayerContextData())},OEa=function(a){(0,g.D)("nowAutoplaying autoplayDismissed remotePlayerChange remoteQueueChange autoplayModeChange autoplayUpNext previousNextChange".split(" "),function(a){this.F.push(this.C.subscribe(a,g.Ca(this.kU,a),this))},a)},PEa=function(a){(0,g.D)(a.F,function(a){this.C.unsubscribeByKey(a)},a);
a.F.length=0},W7=function(a,b){50>a.D.Ic()&&g.NC(a.D,b)},Y7=function(a,b,c){var d=V7(a);
P7(d,c);-1E3!=d.playerState&&(d.playerState=b);X7(a,d)},Z7=function(a,b,c){a.C.sendMessage(b,c)},X7=function(a,b){PEa(a);
a.C.setPlayerContextData(S7(b));OEa(a)},T7=function(a,b){a.B&&(a.B.removeUpdateListener(a.J),a.B.removeMediaListener(a.G),a.mn(null));
a.B=b;a.B&&(d7("CP","Setting cast session: "+a.B.sessionId),a.B.addUpdateListener(a.J),a.B.addMediaListener(a.G),a.B.media.length&&a.mn(a.B.media[0]))},QEa=function(a){var b=a.A.media,c=a.A.customData;
if(b&&c){var d=V7(a);b.contentId!=d.videoId&&d7("CP","Cast changing video to: "+b.contentId);d.videoId=b.contentId;d.playerState=c.playerState;P7(d,a.A.getEstimatedTime());X7(a,d)}else d7("CP","No cast media video. Ignoring state update.")},$7=function(a,b,c){return(0,g.B)(function(a){this.sc("Failed to "+b+" with cast v2 channel. Error code: "+a.code);
a.code!=window.chrome.cast.ErrorCode.TIMEOUT&&(this.sc("Retrying "+b+" using MDx browser channel."),Z7(this,b,c))},a)},a8=function(a,b,c){g.$F.call(this);
this.D=window.NaN;this.O=!1;this.K=this.J=this.L=this.M=window.NaN;this.U=[];this.C=this.G=this.B=this.kb=this.o=null;this.sa=a;this.U.push(g.JF(window,"beforeunload",(0,g.B)(this.TK,this)));this.A=[];this.kb=new M7;this.ba=b.id;this.o=REa(this,c);this.o.subscribe("handlerOpened",this.NR,this);this.o.subscribe("handlerClosed",this.KR,this);this.o.subscribe("handlerError",this.LR,this);this.o.subscribe("handlerMessage",this.MR,this);dEa(this.o,b.token);this.subscribe("remoteQueueChange",function(){var a=
this.kb.videoId;g.yH()&&g.vH("yt-remote-session-video-id",a)},this)},b8=function(a){d7("conn",a)},REa=function(a,b){return new Y6(a7(a.sa,"/bc"),b)},c8=function(a,b){a.V("proxyStateChange",b)},SEa=function(a){a.D=g.rE((0,g.B)(function(){b8("Connecting timeout");
this.F(1)},a),2E4)},d8=function(a){g.tE(a.D);
a.D=window.NaN},e8=function(a){g.tE(a.M);
a.M=window.NaN},TEa=function(a){f8(a);
a.L=g.rE((0,g.B)(function(){g8(this,"getNowPlaying")},a),2E4)},f8=function(a){g.tE(a.L);
a.L=window.NaN},VEa=function(a,b){b&&(d8(a),e8(a));
b==(Z6(a.o)&&(0,window.isNaN)(a.D))?b&&(c8(a,1),g8(a,"getSubtitlesTrack")):b?(a.Z()&&a.kb.reset(),c8(a,1),g8(a,"getNowPlaying"),UEa(a)):a.F(1)},WEa=function(a,b){var c=b.params.videoId;
delete b.params.videoId;c==a.kb.videoId&&(g.Zb(b.params)?a.kb.o=null:a.kb.o=b.params,a.V("remotePlayerChange"))},XEa=function(a,b){var c=b.params.videoId||b.params.video_id,d=(0,window.parseInt)(b.params.currentIndex,10);
a.kb.listId=b.params.listId||a.kb.listId;R7(a.kb,c,d);a.V("remoteQueueChange")},ZEa=function(a,b){b.params=b.params||{};
XEa(a,b);YEa(a,b);a.V("autoplayDismissed")},YEa=function(a,b){var c=(0,window.parseInt)(b.params.currentTime||b.params.current_time,10);
P7(a.kb,(0,window.isNaN)(c)?0:c);c=(0,window.parseInt)(b.params.state,10);c=(0,window.isNaN)(c)?-1:c;-1==c&&-1E3==a.kb.playerState&&(c=-1E3);a.kb.playerState=c;c=Number(b.params.loadedTime);a.kb.J=(0,window.isNaN)(c)?0:c;c=Number(b.params.duration);a.kb.H=(0,window.isNaN)(c)?0:c;c=a.kb;var d=Number(b.params.liveIngestionTime);c.B=d;c.D=(0,window.isNaN)(d)?!1:!0;c=a.kb;d=Number(b.params.seekableStartTime);var e=Number(b.params.seekableEndTime);c.C=(0,window.isNaN)(d)?0:d;c.A=(0,window.isNaN)(e)?0:
e;1==a.kb.playerState?TEa(a):f8(a);a.V("remotePlayerChange")},$Ea=function(a,b){if(-1E3!=a.kb.playerState){var c=1085;
switch((0,window.parseInt)(b.params.adState,10)){case 1:c=1081;break;case 2:c=1084;break;case 0:c=1083}a.kb.playerState=c;c=(0,window.parseInt)(b.params.currentTime,10);P7(a.kb,(0,window.isNaN)(c)?0:c);a.V("remotePlayerChange")}},aFa=function(a,b){var c="true"==b.params.muted;
a.kb.volume=(0,window.parseInt)(b.params.volume,10);a.kb.muted=c;a.V("remotePlayerChange")},bFa=function(a,b){a.G=b.params.videoId;
a.V("nowAutoplaying",(0,window.parseInt)(b.params.timeout,10))},cFa=function(a,b){var c="true"==b.params.hasNext;
a.kb.cg="true"==b.params.hasPrevious;a.kb.hasNext=c;a.V("previousNextChange")},UEa=function(a){g.tE(a.K);
a.K=g.rE((0,g.B)(a.F,a,1),864E5)},g8=function(a,b,c){c?b8("Sending: action="+b+", params="+g.Gg(c)):b8("Sending: action="+b);
a.o.sendMessage(b,c)},h8=function(a){h7.call(this,"ScreenServiceProxy");
this.md=a;this.A=[];this.A.push(this.md.$_s("screenChange",(0,g.B)(this.yX,this)));this.A.push(this.md.$_s("onlineScreenChange",(0,g.B)(this.GT,this)))},hFa=function(a){var b={device:"Desktop",
app:"youtube-desktop"};b=g.gE("MDX_CONFIG")||b;hDa();p6();i8||(i8=new $6(b?b.loungeApiHost:void 0),pDa()&&(i8.o="/api/loungedev"));j8||(j8=g.y("yt.mdx.remote.deferredProxies_")||[],g.ta("yt.mdx.remote.deferredProxies_",j8,void 0));dFa();var c=k8();if(!c){var d=new q7(i8);g.ta("yt.mdx.remote.screenService_",d,void 0);c=k8();var e=!1,f=void 0,k=void 0,l=!1;b&&(e=!!b.loadCastApiSetupScript,f=b.appId,k=b.theme,l=!!b.disableDial);IEa(a,d,function(a){a?l8()&&L7(l8(),"YouTube TV"):d.subscribe("onlineScreenChange",
function(){d6("yt-remote-receiver-availability-change")})},e,f,k,l)}b&&!g.y("yt.mdx.remote.initialized_")&&(g.ta("yt.mdx.remote.initialized_",!0,void 0),m8("Initializing: "+g.Gg(b)),n8.push(g.mG("yt-remote-cast2-availability-change",function(){d6("yt-remote-receiver-availability-change")})),n8.push(g.mG("yt-remote-cast2-receiver-selected",function(){o8(null);
d6("yt-remote-auto-connect","cast-selector-receiver")})),n8.push(g.mG("yt-remote-cast2-receiver-resumed",function(){d6("yt-remote-receiver-resumed","cast-selector-receiver")})),n8.push(g.mG("yt-remote-cast2-session-change",eFa)),n8.push(g.mG("yt-remote-connection-change",function(a){a?L7(l8(),"YouTube TV"):p8()||(L7(null,null),LEa())})),a=q8(),b.isAuto&&(a.id+="#dial"),g.oE("desktop_enable_autoplay")&&(a.capabilities=["atp"]),a.name=b.device,a.app=b.app,(k=b.theme)&&(a.theme=k),m8(" -- with channel params: "+
g.Gg(a)),fFa(a),c.start(),l8()||gFa())},jFa=function(){var a=iFa();
I7()&&g.wH("yt-remote-cast-available")&&a.push({key:"cast-selector-receiver",name:"Cast..."});return a},iFa=function(){var a=k8().md.$_gos();
var b=r8();b&&s8()&&(k6(a,b)||a.push(b));return gDa(a)},t8=function(){var a=kFa();
!a&&I7()&&KEa()&&(a={key:"cast-selector-receiver",name:KEa()});return a},kFa=function(){var a=iFa(),b=r8();
b||(b=p8());return g.Ia(a,function(a){return b&&g6(b,a.key)?!0:!1})},r8=function(){var a=l8();
if(!a)return null;var b=k8().Be();return l6(b,a)},eFa=function(a){m8("remote.onCastSessionChange_: "+h6(a));
if(a){var b=r8();b&&b.id==a.id?L7(b.id,"YouTube TV"):(b&&u8(),v8(a,1))}else s8()&&u8()},u8=function(){J7()?G7().stopSession():E7("stopSession called before API ready.");
var a=s8();a&&(a.disconnect(1),w8(null))},x8=function(){var a=s8();
return!!a&&3!=a.getProxyState()},m8=function(a){d7("remote",a)},k8=function(){if(!y8){var a=g.y("yt.mdx.remote.screenService_");
y8=a?new h8(a):null}return y8},l8=function(){return g.y("yt.mdx.remote.currentScreenId_")},lFa=function(a){g.ta("yt.mdx.remote.currentScreenId_",a,void 0)},mFa=function(){return g.y("yt.mdx.remote.connectData_")},o8=function(a){g.ta("yt.mdx.remote.connectData_",a,void 0)},s8=function(){return g.y("yt.mdx.remote.connection_")},w8=function(a){var b=s8();
o8(null);a||lFa("");g.ta("yt.mdx.remote.connection_",a,void 0);j8&&((0,g.D)(j8,function(b){b(a)}),j8.length=0);
b&&!a?d6("yt-remote-connection-change",!1):!b&&a&&d6("yt-remote-connection-change",!0)},p8=function(){var a=g.yH();
if(!a)return null;var b=k8().Be();return l6(b,a)},v8=function(a,b){r8()&&r8();
lFa(a.id);var c=new a8(i8,a,q8());c.connect(b,mFa());c.subscribe("beforeDisconnect",function(a){d6("yt-remote-before-disconnect",a)});
c.subscribe("beforeDispose",function(){s8()&&w8(null)});
w8(c)},gFa=function(){var a=p8();
a?(m8("Resume connection to: "+h6(a)),v8(a,0)):(q6(),LEa(),m8("Skipping connecting because no session screen found."))},dFa=function(){var a=q8();
if(g.Zb(a)){a=o6();var b=g.wH("yt-remote-session-name")||"",c=g.wH("yt-remote-session-app")||"";a={device:"REMOTE_CONTROL",id:a,name:b,app:c,mdxVersion:3};g.ta("yt.mdx.remote.channelParams_",a,void 0)}},q8=function(){return g.y("yt.mdx.remote.channelParams_")||{}},fFa=function(a){a?(g.vH("yt-remote-session-app",a.app),g.vH("yt-remote-session-name",a.name)):(g.xH("yt-remote-session-app"),g.xH("yt-remote-session-name"));
g.ta("yt.mdx.remote.channelParams_",a,void 0)},z8=function(a,b,c){g.K.call(this);
this.D=a;this.A=b;this.B=new g.XF(this);g.M(this,this.B);this.B.R(b,"onCaptionsTrackListChanged",this.bT);this.B.R(b,"captionschanged",this.HR);this.B.R(b,"captionssettingschanged",this.VF);this.B.R(b,"videoplayerreset",this.yq);this.B.R(b,"mdxautoplaycancel",this.TJ);this.U=this.B.R(b,"onVolumeChange",this.WD);this.H=!1;this.o=c;c.subscribe("proxyStateChange",this.lE,this);c.subscribe("remotePlayerChange",this.qn,this);c.subscribe("remoteQueueChange",this.yq,this);c.subscribe("autoplayUpNext",this.JD,
this);c.subscribe("previousNextChange",this.iE,this);c.subscribe("nowAutoplaying",this.aE,this);c.subscribe("autoplayDismissed",this.ID,this);this.suggestion=null;this.J=new g.$P(64);this.C=new g.V(this.RF,500,this);g.M(this,this.C);this.F=new g.V(this.SF,1E3,this);g.M(this,this.F);this.L=new y6(this.bX,0,this);g.M(this,this.L);this.G={};this.M=new g.V(this.tG,1E3,this);g.M(this,this.M);this.K=new g.tl(this.JP,1E3,this);g.M(this,this.K);this.O=g.A;this.VF();this.yq();this.qn()},A8=function(a,b){var c=
a.D,d=a.A.getVideoData().lengthSeconds;
c.J=b||0;c.player.V("progresssync",b,d)},nFa=function(a){A8(a,0);
a.C.stop();B8(a,new g.$P(64))},D8=function(a,b){if(C8(a)&&!a.H){var c=null;
b&&(c={style:a.A.Rg()},g.hc(c,b));a.o.FF(a.A.getVideoData(1).videoId,c);a.G=V7(a.o).o}},E8=function(a,b){var c=a.A.mg();
if(c){var d=c.Ae();var e=c.listId.toString()}var f=a.A.getVideoData(1);c=a.o;var k=f.videoId,l=d;d=f.playerParams;var m=f.ek;f=WCa(f);var n=V7(c);l=l||0;var p={videoId:k,currentIndex:l};R7(n,k,l);g.u(b)&&(P7(n,b),p.currentTime=b);g.u(e)&&(p.listId=e);null!=d&&(p.playerParams=d);null!=m&&(p.clickTrackingParams=m);null!=f&&(p.locationInfo=g.Gg(f));Z7(c,"setPlaylist",p);e||X7(c,n);B8(a,new g.$P(1))},oFa=function(a,b){if(b){var c=a.A.gc("captions","tracklist",{pB:1});
c&&c.length?(a.A.Yc("captions","track",b),a.H=!1):(a.A.xk("captions"),a.H=!0)}else a.A.Yc("captions","track",{})},C8=function(a){return V7(a.o).videoId==a.A.getVideoData(1).videoId},B8=function(a,b){a.F.stop();
var c=a.J;if(!g.fQ(c,b)){var d=g.X(b,2);d!=g.X(a.J,2)&&g.wU(a.A,d);a.J=b;pFa(a.D,c,b)}},F8=function(a){g.W.call(this,{I:"div",
N:"ytp-remote",P:[{I:"div",N:"ytp-remote-display-status",P:[{I:"div",N:"ytp-remote-display-status-icon",P:[g.zra()]},{I:"div",N:"ytp-remote-display-status-text",da:"{{statustext}}"}]}]});this.B=new g.tV(this,250);g.M(this,this.B);this.C=a;this.R(a,"presentingplayerstatechange",this.D);qFa(this,g.sU(a))},qFa=function(a,b){if(3==a.C.Ra()){var c={RECEIVER_NAME:a.C.gc("remote","currentReceiver").name};
c=g.X(b,128)?g.lV("Error on $RECEIVER_NAME",c):b.rb()||g.X(b,4)?g.lV("Playing on $RECEIVER_NAME",c):g.lV("Connected to $RECEIVER_NAME",c);a.updateValue("statustext",c);a.B.show()}else a.B.hide()},G8=function(a,b){g.WY.call(this,"Play on",0,a,b);
this.B=a;this.J={};this.R(a,"onMdxReceiversChange",this.L);this.R(a,"presentingplayerstatechange",this.L);this.L()},H8=function(a){g.WU.call(this,a);
this.A={key:j6(),name:"This computer"};this.C=null;this.D=[];this.K=this.o=null;this.H=[this.A];this.B=this.A;this.F=new g.$P(64);this.J=0;this.G=-1;if(!g.mN(g.Y(this.player))){a=this.player;var b=g.iI(a);b&&(b=b.bn())&&(b=new G8(a,b),g.M(this,b));b=new F8(a);g.M(this,b);g.LU(a,b.element,4)}},pFa=function(a,b,c){a.F=c;
a.player.V("presentingplayerstatechange",new g.kQ(c,b))},I8=function(a,b){if(b.key!=a.B.key)if(b.key==a.A.key)u8();
else{a.B=b;var c=a.player.getPlaylistId();var d=a.player.getVideoData(1);var e=d.videoId;if(c||e){var f=a.player.mg();if(f){var k=[];for(var l=0;l<f.getLength();l++)k[l]=f.Na(l).videoId}else k=[e];f=a.player.getCurrentTime(1);c={videoIds:k,listId:c,videoId:e,playerParams:d.playerParams,clickTrackingParams:d.ek,index:Math.max(a.player.rC(),0),currentTime:0==f?void 0:f};(d=WCa(d))&&(c.locationInfo=d);d=c}else d=null;m8("Connecting to: "+g.Gg(b));"cast-selector-receiver"==b.key?(o8(d||null),J7()?G7().setLaunchParams(d||
null):E7("setLaunchParams called before ready.")):!d&&x8()&&l8()==b.key?d6("yt-remote-connection-change",!0):(u8(),o8(d||null),d=k8().Be(),(d=l6(d,b.key))&&v8(d,1))}},FDa={"\x00":"\\0",
"\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\x0B",'"':'\\"',"\\":"\\\\","<":"<"},I6={"'":"\\'"},rFa={},cDa={WY:"atp",B3:"ska",S2:"que",c2:"mus",x3:"sus",j0:"dsp"};
e6.prototype.Ro=function(){var a=new e6({id:this.id,name:this.name,app:this.app,type:this.type,user:this.username,userAvatarUri:this.avatar,obfuscatedGaiaId:this.obfuscatedGaiaId,theme:this.theme,capabilities:Array.from(this.capabilities.values()).join(","),experiments:Array.from(this.experiments.values()).join(",")});a.B=this.B;a.A=this.A;a.o=this.o};
var r6,n6="",v6=s6("loadGamesSDK")?"/cast_game_sender.js":"/cast_sender.js",xDa=s6("loadCastFramework")||s6("loadCastApplicationFramework"),HEa=["pkedcjkdefgpdelpbcmbmeomcjbeemfm","enhhojjnijigcajfphajepfemndkmdlo"];g.C(y6,g.K);g.h=y6.prototype;g.h.OK=function(a){this.C=arguments;this.o=!1;this.Fa?this.B=(0,g.I)()+this.Ed:this.Fa=g.Bg(this.D,this.Ed)};
g.h.stop=function(){this.Fa&&(g.Cg(this.Fa),this.Fa=null);this.B=null;this.o=!1;this.C=[]};
g.h.pause=function(){++this.A};
g.h.resume=function(){this.A&&(--this.A,!this.A&&this.o&&(this.o=!1,this.F.apply(null,this.C)))};
g.h.X=function(){this.stop();y6.ga.X.call(this)};
g.h.PK=function(){this.B?(this.Fa=g.Bg(this.D,this.B-(0,g.I)()),this.B=null):(this.Fa=null,this.A?this.o=!0:(this.o=!1,this.F.apply(null,this.C)))};z6.prototype.stringify=function(a){return g.x.JSON.stringify(a,void 0)};
z6.prototype.parse=function(a){return g.x.JSON.parse(a,void 0)};g.h=A6.prototype;g.h.Ki=null;g.h.Mf=!1;g.h.ol=null;g.h.Cx=null;g.h.Rk=null;g.h.Uj=null;g.h.yh=null;g.h.Zh=null;g.h.kj=null;g.h.Rc=null;g.h.Ln=0;g.h.Nf=null;g.h.yr=null;g.h.zh=null;g.h.im=-1;g.h.nF=!0;g.h.si=!1;g.h.It=0;g.h.Jq=null;var DDa={},D6={};g.h=A6.prototype;g.h.setTimeout=function(a){this.C=a};
g.h.bW=function(a){a=a.target;var b=this.Jq;b&&3==g.Gx(a)?b.dm():this.EG(a)};
g.h.EG=function(a){try{if(a==this.Rc)a:{var b=g.Gx(this.Rc),c=this.Rc.A,d=this.Rc.getStatus();if(g.Jd&&!g.vc(10)||g.Md&&!g.uc("420+")){if(4>b)break a}else if(3>b||3==b&&!g.qf&&!g.Kx(this.Rc))break a;this.si||4!=b||7==c||(8==c||0>=d?this.o.Ff(3):this.o.Ff(2));K6(this);var e=this.Rc.getStatus();this.im=e;var f=g.Kx(this.Rc);(this.Mf=200==e)?(4==b&&G6(this),this.D?(EDa(this,b,f),g.qf&&this.Mf&&3==b&&(this.Y.W(this.A,"tick",this.YV),this.A.start())):F6(this,f),this.Mf&&!this.si&&(4==b?this.o.wq(this):
(this.Mf=!1,C6(this)))):(400==e&&0<f.indexOf("Unknown SID")?(this.zh=3,E6(13)):(this.zh=0,E6(14)),G6(this),H6(this))}}catch(k){this.Rc&&g.Kx(this.Rc)}finally{}};
g.h.YV=function(){var a=g.Gx(this.Rc),b=g.Kx(this.Rc);this.Ln<b.length&&(K6(this),EDa(this,a,b),this.Mf&&4!=a&&C6(this))};
g.h.kV=function(a){J6((0,g.B)(this.jV,this,a),0)};
g.h.jV=function(a){this.si||(K6(this),F6(this,a),C6(this))};
g.h.uE=function(a){J6((0,g.B)(this.iV,this,a),0)};
g.h.iV=function(a){this.si||(G6(this),this.Mf=a,this.o.wq(this),this.o.Ff(4))};
g.h.cancel=function(){this.si=!0;G6(this)};
g.h.zV=function(){this.ol=null;var a=(0,g.I)();0<=a-this.Cx?(2!=this.Uj&&this.o.Ff(3),G6(this),this.zh=2,E6(18),H6(this)):HDa(this,this.Cx-a)};g.h=KDa.prototype;g.h.Gt=null;g.h.He=null;g.h.Kq=!1;g.h.KA=null;g.h.cp=null;g.h.Bu=null;g.h.Ht=null;g.h.Ze=null;g.h.Lg=-1;g.h.hm=null;g.h.ul=null;g.h.connect=function(a){this.Ht=a;a=M6(this.o,null,this.Ht);E6(3);this.KA=(0,g.I)();var b=this.o.H;null!=b?(this.hm=b[0],(this.ul=b[1])?(this.Ze=1,LDa(this)):(this.Ze=2,O6(this))):(c6(a,"MODE","init"),this.He=new A6(this,void 0,void 0,void 0),this.He.Ki=this.Gt,B6(this.He,a,!1,null,!0),this.Ze=0)};
g.h.UJ=function(a){if(a)this.Ze=2,O6(this);else{E6(4);var b=this.o;b.Xf=b.nh.Lg;V6(b,9)}a&&this.Ff(2)};
g.h.Os=function(a){return this.o.Os(a)};
g.h.abort=function(){this.He&&(this.He.cancel(),this.He=null);this.Lg=-1};
g.h.JA=function(){return!1};
g.h.mE=function(a,b){this.Lg=a.im;if(0==this.Ze)if(b){try{var c=this.A.parse(b)}catch(d){c=this.o;c.Xf=this.Lg;V6(c,2);return}this.hm=c[0];this.ul=c[1]}else c=this.o,c.Xf=this.Lg,V6(c,2);else if(2==this.Ze)if(this.Kq)E6(7),this.Bu=(0,g.I)();else if("11111"==b){if(E6(6),this.Kq=!0,this.cp=(0,g.I)(),c=this.cp-this.KA,!g.Jd||g.vc(10)||500>c)this.Lg=200,this.He.cancel(),E6(12),N6(this.o,this,!0)}else E6(8),this.cp=this.Bu=(0,g.I)(),this.Kq=!1};
g.h.wq=function(){this.Lg=this.He.im;if(this.He.Mf)0==this.Ze?this.ul?(this.Ze=1,LDa(this)):(this.Ze=2,O6(this)):2==this.Ze&&((!g.Jd||g.vc(10)?!this.Kq:200>this.Bu-this.cp)?(E6(11),N6(this.o,this,!1)):(E6(12),N6(this.o,this,!0)));else{0==this.Ze?E6(9):2==this.Ze&&E6(10);var a=this.o;a.Xf=this.Lg;V6(a,2)}};
g.h.Dn=function(){return this.o.Dn()};
g.h.isActive=function(){return this.o.isActive()};
g.h.Ff=function(a){this.o.Ff(a)};g.h=P6.prototype;g.h.Jl=null;g.h.ie=null;g.h.zc=null;g.h.Ft=null;g.h.fp=null;g.h.jz=null;g.h.tp=null;g.h.jn=0;g.h.aR=0;g.h.Dd=null;g.h.sh=null;g.h.yg=null;g.h.yi=null;g.h.nh=null;g.h.wr=null;g.h.mk=-1;g.h.AB=-1;g.h.Xf=-1;g.h.Lj=0;g.h.Cj=0;g.h.wi=8;var W6=new g.Pf;g.C(NDa,g.of);g.C(ODa,g.of);g.C(PDa,g.of);g.h=P6.prototype;g.h.connect=function(a,b,c,d,e){E6(0);this.Ft=b;this.Jl=c||{};d&&g.u(e)&&(this.Jl.OSID=d,this.Jl.OAID=e);this.F?(J6((0,g.B)(this.Bz,this,a),100),TDa(this)):this.Bz(a)};
g.h.Bz=function(a){this.nh=new KDa(this);this.nh.Gt=null;this.nh.A=this.D;this.nh.connect(a)};
g.h.JA=function(){return 0==this.o};
g.h.sE=function(a){this.sh=null;WDa(this,a)};
g.h.rE=function(){this.yg=null;this.zc=new A6(this,this.B,"rpc",this.G);this.zc.Ki=null;this.zc.It=0;var a=this.jz.clone();g.an(a,"RID","rpc");g.an(a,"SID",this.B);g.an(a,"CI",this.wr?"0":"1");g.an(a,"AID",this.mk);Q6(this,a);if(!g.Jd||g.vc(10))g.an(a,"TYPE","xmlhttp"),B6(this.zc,a,!0,this.tp,!1);else{g.an(a,"TYPE","html");var b=this.zc,c=!!this.tp;b.Uj=3;b.yh=b6(a.clone());GDa(b,c)}};
g.h.mE=function(a,b){if(0!=this.o&&(this.zc==a||this.ie==a))if(this.Xf=a.im,this.ie==a&&3==this.o)if(7<this.wi){try{var c=this.D.parse(b)}catch(f){c=null}if(g.wa(c)&&3==c.length)if(0==c[0])a:{if(!this.yg){if(this.zc)if(this.zc.Rk+3E3<this.ie.Rk)S6(this),this.zc.cancel(),this.zc=null;else break a;U6(this);E6(19)}}else this.AB=c[1],0<this.AB-this.mk&&37500>c[2]&&this.wr&&0==this.Cj&&!this.yi&&(this.yi=J6((0,g.B)(this.CR,this),6E3));else V6(this,11)}else b!=rFa.ZZ.o&&V6(this,11);else if(this.zc==a&&
S6(this),!g.F(b)){c=this.D.parse(b);g.wa(c);for(var d=0;d<c.length;d++){var e=c[d];this.mk=e[0];e=e[1];2==this.o?"c"==e[0]?(this.B=e[1],this.tp=e[2],e=e[3],null!=e?this.wi=e:this.wi=6,this.o=3,this.Dd&&this.Dd.wz(),this.jz=M6(this,this.Dn()?this.tp:null,this.Ft),XDa(this)):"stop"==e[0]&&V6(this,7):3==this.o&&("stop"==e[0]?V6(this,7):"noop"!=e[0]&&this.Dd&&this.Dd.vz(e),this.Cj=0)}}};
g.h.CR=function(){null!=this.yi&&(this.yi=null,this.zc.cancel(),this.zc=null,U6(this),E6(20))};
g.h.wq=function(a){if(this.zc==a){S6(this);this.zc=null;var b=2}else if(this.ie==a)this.ie=null,b=1;else return;this.Xf=a.im;if(0!=this.o)if(a.Mf)1==b?(b=(0,g.I)()-a.Rk,W6.dispatchEvent(new ODa(W6,a.kj?a.kj.length:0,b,this.Lj)),R6(this),this.C.length=0):XDa(this);else{var c=a.zh,d;if(!(d=3==c||7==c||0==c&&0<this.Xf)){if(d=1==b)this.ie||this.sh||1==this.o||2<=this.Lj?d=!1:(this.sh=J6((0,g.B)(this.sE,this,a),YDa(this,this.Lj)),this.Lj++,d=!0);d=!(d||2==b&&U6(this))}if(d)switch(c){case 1:V6(this,5);
break;case 4:V6(this,10);break;case 3:V6(this,6);break;case 7:V6(this,12);break;default:V6(this,2)}}};
g.h.qK=function(a){if(!g.Na(arguments,this.o))throw Error("Unexpected channel state: "+this.o);};
g.h.RW=function(a){a?E6(2):(E6(1),ZDa(this,8))};
g.h.Os=function(a){if(a)throw Error("Can't create secondary domain capable XhrIo object.");a=new g.Ax;a.H=!1;return a};
g.h.isActive=function(){return!!this.Dd&&this.Dd.isActive(this)};
g.h.Ff=function(a){W6.dispatchEvent(new PDa(W6,a))};
g.h.Dn=function(){return!(!g.Jd||g.vc(10))};
g.h=$Da.prototype;g.h.wz=function(){};
g.h.vz=function(){};
g.h.uz=function(){};
g.h.Bs=function(){};
g.h.rA=function(){return{}};
g.h.isActive=function(){return!0};g.C(X6,g.K);g.h=X6.prototype;g.h.bV=function(){this.Ed=Math.min(3E5,2*this.Ed);this.B();this.A&&this.start()};
g.h.start=function(){var a=this.Ed+15E3*Math.random();g.zu(this.o,a);this.A=(0,g.I)()+a};
g.h.stop=function(){this.o.stop();this.A=0};
g.h.isActive=function(){return this.o.isActive()};
g.h.reset=function(){this.o.stop();this.Ed=5E3};g.C(Y6,$Da);g.h=Y6.prototype;g.h.subscribe=function(a,b,c){return this.B.subscribe(a,b,c)};
g.h.unsubscribe=function(a,b,c){return this.B.unsubscribe(a,b,c)};
g.h.vk=function(a){return this.B.Li(a)};
g.h.V=function(a,b){return this.B.V.apply(this.B,arguments)};
g.h.dispose=function(){this.K||(this.K=!0,g.mf(this.B),cEa(this),g.mf(this.A),this.A=null)};
g.h.ka=function(){return this.K};
g.h.connect=function(a,b,c){if(!this.o||2!=this.o.o){this.J="";this.A.stop();this.D=a||null;this.C=b||0;a=this.L+"/test";b=this.L+"/bind";var d=new P6(c?c.firstTestResults:null,c?c.secondTestResults:null,this.M),e=this.o;e&&(e.Dd=null);d.Dd=this;this.o=d;e?this.o.connect(a,b,this.F,e.B,e.mk):c?this.o.connect(a,b,this.F,c.sessionId,c.arrayId):this.o.connect(a,b,this.F)}};
g.h.sendMessage=function(a,b){var c={_sc:a};b&&g.hc(c,b);this.A.isActive()||2==(this.o?this.o.o:0)?this.G.push(c):Z6(this)&&UDa(this.o,c)};
g.h.wz=function(){this.A.reset();this.D=null;this.C=0;if(this.G.length){var a=this.G;this.G=[];for(var b=0,c=a.length;b<c;++b)UDa(this.o,a[b])}this.V("handlerOpened")};
g.h.uz=function(a){var b=2==a&&401==this.o.Xf;4==a||b||this.A.start();this.V("handlerError",a)};
g.h.Bs=function(a){if(!this.A.isActive())this.V("handlerClosed");else if(a)for(var b=0,c=a.length;b<c;++b){var d=a[b].map;d&&this.G.push(d)}};
g.h.rA=function(){var a={v:2};this.J&&(a.gsessionid=this.J);0!=this.C&&(a.ui=""+this.C);0!=this.H&&(a.ui=""+this.H);this.D&&g.hc(a,this.D);return a};
g.h.vz=function(a){"S"==a[0]?this.J=a[1]:"gracefulReconnect"==a[0]?(this.A.start(),SDa(this.o)):this.V("handlerMessage",new aEa(a[0],a[1]))};
g.h.uX=function(){this.A.isActive();var a=this.o,b=0;a.zc&&b++;a.ie&&b++;0!=b||this.connect(this.D,this.C)};$6.prototype.C=function(a,b,c,d){b?a(d):a({text:c.responseText})};
$6.prototype.B=function(a,b){a(Error("Request error: "+b.status))};
$6.prototype.D=function(a){a(Error("request timed out"))};var kEa=(0,g.I)(),c7=null,f7=Array(50),e7=-1,g7=!1;g.C(h7,g.$F);h7.prototype.Be=function(){return this.o};
h7.prototype.contains=function(a){return!!k6(this.o,a)};
h7.prototype.get=function(a){return a?l6(this.o,a):null};
h7.prototype.info=function(a){d7(this.G,a)};g.C(i7,g.$F);var sFa=[2E3,2E3,1E3,1E3,1E3,2E3,2E3,5E3,5E3,1E4];g.h=i7.prototype;g.h.start=function(){!this.o&&(0,window.isNaN)(this.Fa)&&this.KG()};
g.h.stop=function(){this.o&&(this.o.abort(),this.o=null);(0,window.isNaN)(this.Fa)||(g.tE(this.Fa),this.Fa=window.NaN)};
g.h.X=function(){this.stop();i7.ga.X.call(this)};
g.h.KG=function(){this.Fa=window.NaN;this.o=g.IE(a7(this.F,"/pairing/get_screen"),{method:"POST",Sb:{pairing_code:this.D},timeout:5E3,onSuccess:(0,g.B)(this.wX,this),onError:(0,g.B)(this.vX,this),Jd:(0,g.B)(this.xX,this)})};
g.h.wX=function(a,b){this.o=null;var c=b.screen||{};c.dialId=this.B;c.name=this.C;this.V("pairingComplete",new f6(c))};
g.h.vX=function(a){this.o=null;a.status&&404==a.status?this.A>=sFa.length?this.V("pairingFailed",Error("DIAL polling timed out")):(a=sFa[this.A],this.Fa=g.rE((0,g.B)(this.KG,this),a),this.A++):this.V("pairingFailed",Error("Server error "+a.status))};
g.h.xX=function(){this.o=null;this.V("pairingFailed",Error("Server not responding"))};g.C(k7,h7);g.h=k7.prototype;g.h.start=function(){j7(this)&&this.V("screenChange");!g.wH("yt-remote-lounge-token-expiration")&&oEa(this);g.tE(this.A);this.A=g.rE((0,g.B)(this.start,this),1E4)};
g.h.add=function(a,b){j7(this);lEa(this,a);l7(this,!1);this.V("screenChange");b(a);a.token||oEa(this)};
g.h.remove=function(a,b){var c=j7(this);nEa(this,a)&&(l7(this,!1),c=!0);b(a);c&&this.V("screenChange")};
g.h.sr=function(a,b,c,d){var e=j7(this),f=this.get(a.id);f?(f.name!=b&&(f.name=b,l7(this,!1),e=!0),c(a)):d(Error("no such local screen."));e&&this.V("screenChange")};
g.h.X=function(){g.tE(this.A);k7.ga.X.call(this)};
g.h.dL=function(a){j7(this);var b=this.o.length;a=a&&a.screens||[];for(var c=0,d=a.length;c<d;++c){var e=a[c],f=this.get(e.screenId);f&&(f.token=e.loungeToken,--b)}l7(this,!b);b&&d7(this.G,"Missed "+b+" lounge tokens.")};
g.h.cL=function(a){d7(this.G,"Requesting lounge tokens failed: "+a)};g.C(n7,g.$F);g.h=n7.prototype;g.h.start=function(){var a=(0,window.parseInt)(g.wH("yt-remote-fast-check-period")||"0",10);(this.C=(0,g.I)()-144E5<a?0:a)?p7(this):(this.C=(0,g.I)()+3E5,g.vH("yt-remote-fast-check-period",this.C),this.Bw())};
g.h.isEmpty=function(){return g.Zb(this.o)};
g.h.update=function(){m7("Updating availability on schedule.");var a=this.F(),b=g.Jb(this.o,function(b,d){return b&&!!l6(a,d)},this);
o7(this,b)};
g.h.X=function(){g.tE(this.B);this.B=window.NaN;this.A&&(this.A.abort(),this.A=null);n7.ga.X.call(this)};
g.h.Bw=function(){g.tE(this.B);this.B=window.NaN;this.A&&this.A.abort();var a=rEa(this);if(g.Nb(a)){var b=a7(this.D,"/pairing/get_screen_availability");this.A=b7(this.D,b,{lounge_token:g.Qb(a).join(",")},(0,g.B)(this.KU,this,a),(0,g.B)(this.JU,this))}else o7(this,{}),p7(this)};
g.h.KU=function(a,b){this.A=null;var c=g.Qb(rEa(this));if(g.fb(c,g.Qb(a))){c=b.screens||[];for(var d={},e=0,f=c.length;e<f;++e)d[a[c[e].loungeToken]]="online"==c[e].status;o7(this,d);p7(this)}else this.sc("Changing Screen set during request."),this.Bw()};
g.h.JU=function(a){this.sc("Screen availability failed: "+a);this.A=null;p7(this)};
g.h.sc=function(a){d7("OnlineScreenService",a)};g.C(q7,h7);g.h=q7.prototype;g.h.start=function(){this.B.start();this.A.start();this.o.length&&(this.V("screenChange"),this.A.isEmpty()||this.V("onlineScreenChange"))};
g.h.add=function(a,b,c){this.B.add(a,b,c)};
g.h.remove=function(a,b,c){this.B.remove(a,b,c);this.A.update()};
g.h.sr=function(a,b,c,d){this.B.contains(a)?this.B.sr(a,b,c,d):(a="Updating name of unknown screen: "+a.name,d7(this.G,a),d(Error(a)))};
g.h.Be=function(a){return a?this.o:g.Va(this.o,(0,g.Yd)(this.C,function(a){return!this.contains(a)},this))};
g.h.MG=function(){return(0,g.Yd)(this.Be(!0),function(a){return!!this.A.o[a.id]},this)};
g.h.NG=function(a,b,c,d,e){this.info("getDialScreenByPairingCode "+a+" / "+b);var f=new i7(this.F,a,b,c);f.subscribe("pairingComplete",(0,g.B)(function(a){g.mf(f);d(r7(this,a))},this));
f.subscribe("pairingFailed",function(a){g.mf(f);e(a)});
f.start();return(0,g.B)(f.stop,f)};
g.h.zX=function(a,b,c,d){g.IE(a7(this.F,"/pairing/get_screen"),{method:"POST",Sb:{pairing_code:a},timeout:5E3,onSuccess:(0,g.B)(function(a,d){var e=new f6(d.screen||{});if(!e.name||vEa(this,e.name)){a:{var f=e.name;for(var m=2,n=b(f,m);vEa(this,n);){m++;if(20<m)break a;n=b(f,m)}f=n}e.name=f}c(r7(this,e))},this),
onError:(0,g.B)(function(a){d(Error("pairing request failed: "+a.status))},this),
Jd:(0,g.B)(function(){d(Error("pairing request timed out."))},this)})};
g.h.X=function(){g.mf(this.B);g.mf(this.A);q7.ga.X.call(this)};
g.h.qL=function(){wEa(this);this.V("screenChange");this.A.update()};
q7.prototype.dispose=q7.prototype.dispose;g.C(t7,g.$F);g.h=t7.prototype;g.h.xq=function(a){this.B=a;this.V("sessionScreen",this.B)};
g.h.Ge=function(a){this.ka()||(a&&u7(this,""+a),this.B=null,this.V("sessionScreen",null))};
g.h.info=function(a){d7(this.M,a)};
g.h.PG=function(){return null};
g.h.Lw=function(a){var b=this.A;a?(b.displayStatus=new window.chrome.cast.ReceiverDisplayStatus(a,[]),b.displayStatus.showStop=!0):b.displayStatus=null;window.chrome.cast.setReceiverDisplayStatus(b,(0,g.B)(function(){this.info("Updated receiver status for "+b.friendlyName+": "+a)},this),(0,g.B)(function(){u7(this,"Failed to update receiver status for: "+b.friendlyName)},this))};
g.h.X=function(){this.Lw("");t7.ga.X.call(this)};g.C(v7,t7);g.h=v7.prototype;g.h.Kw=function(a){if(this.o){if(this.o==a)return;u7(this,"Overriding cast sesison with new session object");this.o.removeUpdateListener(this.F);this.o.removeMessageListener("urn:x-cast:com.google.youtube.mdx",this.D)}this.o=a;this.o.addUpdateListener(this.F);this.o.addMessageListener("urn:x-cast:com.google.youtube.mdx",this.D);yEa(this)};
g.h.pk=function(a){this.info("launchWithParams no-op for Cast: "+g.Gg(a))};
g.h.stop=function(){this.o?this.o.stop((0,g.B)(function(){this.Ge()},this),(0,g.B)(function(){this.Ge(Error("Failed to stop receiver app."))},this)):this.Ge(Error("Stopping cast device witout session."))};
g.h.Lw=g.A;g.h.X=function(){this.info("disposeInternal");g.tE(this.C);this.C=0;this.o&&(this.o.removeUpdateListener(this.F),this.o.removeMessageListener("urn:x-cast:com.google.youtube.mdx",this.D));this.o=null;v7.ga.X.call(this)};
g.h.MV=function(a,b){if(!this.ka())if(b){var c=g.ux(b);if(g.za(c)){var d=""+c.type;c=c.data||{};this.info("onYoutubeMessage_: "+d+" "+g.Gg(c));switch(d){case "mdxSessionStatus":xEa(this,c.screenId);break;default:u7(this,"Unknown youtube message: "+d)}}else u7(this,"Unable to parse message.")}else u7(this,"No data in message.")};
g.h.zA=function(a,b,c,d){uEa(this.J,this.A.label,a,this.A.friendlyName,(0,g.B)(function(e){e?b(e):0<=d?(u7(this,"Screen "+a+" appears to be offline. "+d+" retries left."),g.rE((0,g.B)(this.zA,this,a,b,c,d-1),300)):c(Error("Unable to fetch screen."))},this),c)};
g.h.PG=function(){return this.o};
g.h.AX=function(a){this.ka()||a||(u7(this,"Cast session died."),this.Ge())};g.C(w7,t7);g.h=w7.prototype;g.h.Kw=function(a){this.C=a;this.C.addUpdateListener(this.L)};
g.h.pk=function(a){this.D=a;this.G()};
g.h.stop=function(){this.o();this.o=g.A;g.tE(this.F);this.C?this.C.stop((0,g.B)(this.Ge,this,null),(0,g.B)(this.Ge,this,"Failed to stop DIAL device.")):this.Ge()};
g.h.X=function(){this.o();this.o=g.A;g.tE(this.F);this.C&&this.C.removeUpdateListener(this.L);this.C=null;w7.ga.X.call(this)};
g.h.DX=function(a){this.ka()||a||(u7(this,"DIAL session died."),this.o(),this.o=g.A,this.Ge())};
g.h.ku=function(a){this.K=j6();if(this.D){var b=new window.chrome.cast.DialLaunchResponse(!0,AEa(this));a(b);zEa(this)}else this.G=(0,g.B)(function(){g.tE(this.F);this.G=g.A;this.F=window.NaN;var b=new window.chrome.cast.DialLaunchResponse(!0,AEa(this));a(b);zEa(this)},this),this.F=g.rE((0,g.B)(function(){this.G()},this),100)};
g.h.BM=function(a,b,c){uEa(this.J,this.H.receiver.label,a,this.A.friendlyName,(0,g.B)(function(a){a&&a.token?(this.xq(a),b(new window.chrome.cast.DialLaunchResponse(!1))):this.ku(b,c)},this),(0,g.B)(function(a){u7(this,"Failed to get DIAL screen: "+a);
this.ku(b,c)},this))};g.C(x7,t7);x7.prototype.stop=function(){this.Ge()};
x7.prototype.Kw=g.A;x7.prototype.pk=function(){g.tE(this.o);this.o=window.NaN;var a=l6(this.J.Be(),this.A.label);a?this.xq(a):this.Ge(Error("No such screen"))};
x7.prototype.X=function(){g.tE(this.o);this.o=window.NaN;x7.ga.X.call(this)};g.C(y7,g.$F);g.h=y7.prototype;
g.h.init=function(a,b){window.chrome.cast.timeout.requestSession=3E4;var c=new window.chrome.cast.SessionRequest(this.G);this.H||(c.dialRequest=new window.chrome.cast.DialRequest("YouTube"));var d=window.chrome.cast.AutoJoinPolicy.TAB_AND_ORIGIN_SCOPED,e=a?window.chrome.cast.DefaultActionPolicy.CAST_THIS_TAB:window.chrome.cast.DefaultActionPolicy.CREATE_SESSION;c=new window.chrome.cast.ApiConfig(c,(0,g.B)(this.oE,this),(0,g.B)(this.tU,this),d,e);c.customDialLaunchCallback=(0,g.B)(this.lS,this);window.chrome.cast.initialize(c,
(0,g.B)(function(){this.ka()||(window.chrome.cast.addReceiverActionListener(this.C),hEa(),this.A.subscribe("onlineScreenChange",(0,g.B)(this.OG,this)),this.B=CEa(this),window.chrome.cast.setCustomReceivers(this.B,g.A,(0,g.B)(function(a){this.sc("Failed to set initial custom receivers: "+g.Gg(a))},this)),this.V("yt-remote-cast2-availability-change",A7(this)),b(!0))},this),(0,g.B)(function(a){this.sc("Failed to initialize API: "+g.Gg(a));
b(!1)},this))};
g.h.zW=function(a,b){z7("Setting connected screen ID: "+a+" -> "+b);if(this.o){var c=this.o.B;if(!a||c&&c.id!=a)z7("Unsetting old screen status: "+this.o.A.friendlyName),B7(this,null)}if(a&&b){if(!this.o){c=l6(this.A.Be(),a);if(!c){z7("setConnectedScreenStatus: Unknown screen.");return}var d=BEa(this,c);d||(z7("setConnectedScreenStatus: Connected receiver not custom..."),d=new window.chrome.cast.Receiver(c.uuid?c.uuid:c.id,c.name),d.receiverType=window.chrome.cast.ReceiverType.CUSTOM,this.B.push(d),
window.chrome.cast.setCustomReceivers(this.B,g.A,(0,g.B)(function(a){this.sc("Failed to set initial custom receivers: "+g.Gg(a))},this)));
z7("setConnectedScreenStatus: new active receiver: "+d.friendlyName);B7(this,new x7(this.A,d),!0)}this.o.Lw(b)}else z7("setConnectedScreenStatus: no screen.")};
g.h.AW=function(a){this.ka()?this.sc("Setting connection data on disposed cast v2"):this.o?this.o.pk(a):this.sc("Setting connection data without a session")};
g.h.CX=function(){this.ka()?this.sc("Stopping session on disposed cast v2"):this.o?(this.o.stop(),B7(this,null)):z7("Stopping non-existing session")};
g.h.requestSession=function(){window.chrome.cast.requestSession((0,g.B)(this.oE,this),(0,g.B)(this.OU,this))};
g.h.X=function(){this.A.unsubscribe("onlineScreenChange",(0,g.B)(this.OG,this));window.chrome&&window.chrome.cast&&window.chrome.cast.removeReceiverActionListener(this.C);g.Ta(g.y("yt.mdx.remote.debug.handlers_")||[],eEa);g.mf(this.o);y7.ga.X.call(this)};
g.h.sc=function(a){d7("Controller",a)};
g.h.pE=function(a,b){this.o==a&&(b||B7(this,null),this.V("yt-remote-cast2-session-change",b))};
g.h.pU=function(a,b){if(!this.ka())if(a)switch(a.friendlyName=window.chrome.cast.unescape(a.friendlyName),z7("onReceiverAction_ "+a.label+" / "+a.friendlyName+"-- "+b),b){case window.chrome.cast.ReceiverAction.CAST:if(this.o)if(this.o.A.label!=a.label)z7("onReceiverAction_: Stopping active receiver: "+this.o.A.friendlyName),this.o.stop();else{z7("onReceiverAction_: Casting to active receiver.");this.o.B&&this.V("yt-remote-cast2-session-change",this.o.B);break}switch(a.receiverType){case window.chrome.cast.ReceiverType.CUSTOM:B7(this,
new x7(this.A,a));break;case window.chrome.cast.ReceiverType.DIAL:B7(this,new w7(this.A,a,this.F));break;case window.chrome.cast.ReceiverType.CAST:B7(this,new v7(this.A,a));break;default:this.sc("Unknown receiver type: "+a.receiverType)}break;case window.chrome.cast.ReceiverAction.STOP:this.o&&this.o.A.label==a.label?this.o.stop():this.sc("Stopping receiver w/o session: "+a.friendlyName)}else this.sc("onReceiverAction_ called without receiver.")};
g.h.lS=function(a){if(this.ka())return window.Promise.reject(Error("disposed"));var b=a.receiver;b.receiverType!=window.chrome.cast.ReceiverType.DIAL&&(this.sc("Not DIAL receiver: "+b.friendlyName),b.receiverType=window.chrome.cast.ReceiverType.DIAL);var c=this.o?this.o.A:null;if(!c||c.label!=b.label)return this.sc("Receiving DIAL launch request for non-clicked DIAL receiver: "+b.friendlyName),window.Promise.reject(Error("illegal DIAL launch"));if(c&&c.label==b.label&&c.receiverType!=window.chrome.cast.ReceiverType.DIAL){if(this.o.B)return z7("Reselecting dial screen."),
this.V("yt-remote-cast2-session-change",this.o.B),window.Promise.resolve(new window.chrome.cast.DialLaunchResponse(!1));this.sc('Changing CAST intent from "'+c.receiverType+'" to "dial" for '+b.friendlyName);B7(this,new w7(this.A,b,this.F))}b=this.o;b.H=a;return b.H.appState==window.chrome.cast.DialAppState.RUNNING?new window.Promise((0,g.B)(b.BM,b,(b.H.extraData||{}).screenId||null)):new window.Promise((0,g.B)(b.ku,b))};
g.h.oE=function(a){if(!this.ka()){z7("New cast session ID: "+a.sessionId);var b=a.receiver;if(b.receiverType!=window.chrome.cast.ReceiverType.CUSTOM){if(!this.o)if(b.receiverType==window.chrome.cast.ReceiverType.CAST)z7("Got resumed cast session before resumed mdx connection."),b.friendlyName=window.chrome.cast.unescape(b.friendlyName),B7(this,new v7(this.A,b),!0);else{this.sc("Got non-cast session without previous mdx receiver event, or mdx resume.");return}var c=this.o.A,d=l6(this.A.Be(),c.label);
d&&g6(d,b.label)&&c.receiverType!=window.chrome.cast.ReceiverType.CAST&&b.receiverType==window.chrome.cast.ReceiverType.CAST&&(z7("onSessionEstablished_: manual to cast session change "+b.friendlyName),g.mf(this.o),this.o=new v7(this.A,b),this.o.subscribe("sessionScreen",(0,g.B)(this.pE,this,this.o)),this.o.pk(null));this.o.Kw(a)}}};
g.h.BX=function(){return this.o?this.o.PG():null};
g.h.OU=function(a){this.ka()||(this.sc("Failed to estabilish a session: "+g.Gg(a)),a.code!=window.chrome.cast.ErrorCode.CANCEL&&B7(this,null))};
g.h.tU=function(a){z7("Receiver availability updated: "+a);if(!this.ka()){var b=A7(this);this.D=a==window.chrome.cast.ReceiverAvailability.AVAILABLE;A7(this)!=b&&this.V("yt-remote-cast2-availability-change",A7(this))}};
g.h.OG=function(){this.ka()||(this.B=CEa(this),z7("Updating custom receivers: "+g.Gg(this.B)),window.chrome.cast.setCustomReceivers(this.B,g.A,(0,g.B)(function(){this.sc("Failed to set custom receivers.")},this)),this.V("yt-remote-cast2-availability-change",A7(this)))};
y7.prototype.setLaunchParams=y7.prototype.AW;y7.prototype.setConnectedScreenStatus=y7.prototype.zW;y7.prototype.stopSession=y7.prototype.CX;y7.prototype.getCastSession=y7.prototype.BX;y7.prototype.requestSession=y7.prototype.requestSession;y7.prototype.init=y7.prototype.init;y7.prototype.dispose=y7.prototype.dispose;var H7=[];g.h=M7.prototype;
g.h.reset=function(a){this.listId="";this.index=-1;this.videoId="";N7(this);this.volume=-1;this.muted=!1;a&&(this.index=a.index,this.listId=a.listId,this.videoId=a.videoId,this.playerState=a.playerState,this.volume=a.volume,this.muted=a.muted,this.audioTrackId=a.audioTrackId,this.o=a.trackData,this.cg=a.hasPrevious,this.hasNext=a.hasNext,this.G=a.playerTime,this.F=a.playerTimeAt,this.C=a.seekableStart,this.A=a.seekableEnd,this.H=a.duration,this.J=a.loadedTime,this.B=a.liveIngestionTime,this.D=!(0,window.isNaN)(this.B))};
g.h.rb=function(){return 1==this.playerState};
g.h.isAdPlaying=function(){return 1081==this.playerState};
g.h.getDuration=function(){return this.D?this.H+O7(this):this.H};
g.h.clone=function(){return new M7(S7(this))};g.C(U7,g.$F);g.h=U7.prototype;g.h.play=function(){1==this.o?(this.A?this.A.play(null,g.A,$7(this,"play")):Z7(this,"play"),Y7(this,1,Q7(V7(this))),this.V("remotePlayerChange")):W7(this,this.play)};
g.h.pause=function(){1==this.o?(this.A?this.A.pause(null,g.A,$7(this,"pause")):Z7(this,"pause"),Y7(this,2,Q7(V7(this))),this.V("remotePlayerChange")):W7(this,this.pause)};
g.h.JG=function(a){if(1==this.o){if(this.A){var b=V7(this),c=new window.chrome.cast.media.SeekRequest;c.currentTime=a;c.resumeState=b.rb()||3==b.playerState?window.chrome.cast.media.ResumeState.PLAYBACK_START:window.chrome.cast.media.ResumeState.PLAYBACK_PAUSE;this.A.seek(c,g.A,$7(this,"seekTo",{newTime:a}))}else Z7(this,"seekTo",{newTime:a});Y7(this,3,a);this.V("remotePlayerChange")}else W7(this,g.Ca(this.JG,a))};
g.h.stop=function(){if(1==this.o){this.A?this.A.stop(null,g.A,$7(this,"stopVideo")):Z7(this,"stopVideo");var a=V7(this);a.index=-1;a.videoId="";N7(a);X7(this,a);this.V("remotePlayerChange")}else W7(this,this.stop)};
g.h.setVolume=function(a,b){if(1==this.o){var c=V7(this);if(this.B){if(c.volume!=a){var d=Math.round(a)/100;this.B.setReceiverVolumeLevel(d,(0,g.B)(function(){d7("CP","set receiver volume: "+d)},this),(0,g.B)(function(){this.sc("failed to set receiver volume.")},this))}c.muted!=b&&this.B.setReceiverMuted(b,(0,g.B)(function(){d7("CP","set receiver muted: "+b)},this),(0,g.B)(function(){this.sc("failed to set receiver muted.")},this))}else{var e={volume:a,
muted:b};-1!=c.volume&&(e.delta=a-c.volume);Z7(this,"setVolume",e)}c.muted=b;c.volume=a;X7(this,c)}else W7(this,g.Ca(this.setVolume,a,b))};
g.h.FF=function(a,b){if(1==this.o){var c=V7(this),d={videoId:a};b&&(c.o={trackName:b.name,languageCode:b.languageCode,sourceLanguageCode:b.translationLanguage?b.translationLanguage.languageCode:"",languageName:b.languageName,format:b.format,kind:b.kind},d.style=g.Gg(b.style),g.hc(d,c.o));Z7(this,"setSubtitlesTrack",d);X7(this,c)}else W7(this,g.Ca(this.FF,a,b))};
g.h.Jx=function(a,b){if(1==this.o){Z7(this,"setAudioTrack",{videoId:a,audioTrackId:b.Ob.id});var c=V7(this);c.audioTrackId=b.Ob.id;X7(this,c)}else W7(this,g.Ca(this.Jx,a,b))};
g.h.IG=function(a,b){if(1==this.o){if(a&&b){var c=V7(this);R7(c,a,b);X7(this,c)}Z7(this,"previous")}else W7(this,g.Ca(this.IG,a,b))};
g.h.HG=function(a,b){if(1==this.o){if(a&&b){var c=V7(this);R7(c,a,b);X7(this,c)}Z7(this,"next")}else W7(this,g.Ca(this.HG,a,b))};
g.h.Uz=function(){1==this.o?Z7(this,"dismissAutoplay"):W7(this,this.Uz)};
g.h.dispose=function(){if(3!=this.o){var a=this.o;this.o=3;this.V("proxyStateChange",a,this.o)}U7.ga.dispose.call(this)};
g.h.X=function(){PEa(this);this.C=null;this.D.clear();T7(this,null);U7.ga.X.call(this)};
g.h.Kx=function(a){if((a!=this.o||2==a)&&3!=this.o&&0!=a){var b=this.o;this.o=a;this.V("proxyStateChange",b,a);if(1==a)for(;!this.D.isEmpty();)g.OC(this.D).apply(this);else 3==a&&this.dispose()}};
g.h.kU=function(a,b){this.V(a,b)};
g.h.JR=function(a){if(!a)this.mn(null),T7(this,null);else if(this.B.receiver.volume){a=this.B.receiver.volume;var b=V7(this),c=Math.round(100*a.level||0);if(b.volume!=c||b.muted!=a.muted)d7("CP","Cast volume update: "+a.level+(a.muted?" muted":"")),b.volume=c,b.muted=!!a.muted,X7(this,b)}};
g.h.mn=function(a){d7("CP","Cast media: "+!!a);this.A&&this.A.removeUpdateListener(this.H);if(this.A=a)this.A.addUpdateListener(this.H),QEa(this),this.V("remotePlayerChange")};
g.h.IR=function(a){a?(QEa(this),this.V("remotePlayerChange")):this.mn(null)};
g.h.VR=function(){var a=MEa();a&&T7(this,a)};
g.h.sc=function(a){d7("CP",a)};g.C(a8,g.$F);g.h=a8.prototype;
g.h.connect=function(a,b){if(b){var c=b.listId,d=b.videoId,e=b.playerParams,f=b.clickTrackingParams,k=b.index,l={videoId:d},m=b.currentTime,n=b.locationInfo;g.u(m)&&(l.currentTime=5>=m?0:m);e&&(l.playerParams=e);n&&(l.locationInfo=n);f&&(l.clickTrackingParams=f);c&&(l.listId=c);g.u(k)&&(l.currentIndex=k);c&&(this.kb.listId=c);this.kb.videoId=d;this.kb.index=k||0;this.kb.state=3;P7(this.kb,m);this.C="UNSUPPORTED";b8("Connecting with setPlaylist and params: "+g.Gg(l));this.o.connect({method:"setPlaylist",
params:g.Gg(l)},a,kDa())}else b8("Connecting without params"),this.o.connect({},a,kDa());SEa(this)};
g.h.dispose=function(){this.ka()||(this.V("beforeDispose"),c8(this,3));a8.ga.dispose.call(this)};
g.h.X=function(){d8(this);f8(this);e8(this);g.tE(this.J);this.J=window.NaN;g.tE(this.K);this.K=window.NaN;this.B=null;g.KF(this.U);this.U.length=0;this.o.dispose();a8.ga.X.call(this);this.C=this.G=this.A=this.kb=this.o=null};
g.h.TK=function(){this.F(2)};
g.h.NR=function(){b8("Channel opened");this.O&&(this.O=!1,e8(this),this.M=g.rE((0,g.B)(function(){b8("Timing out waiting for a screen.");this.F(1)},this),15E3));
oDa(bEa(this.o),this.ba)};
g.h.KR=function(){b8("Channel closed");(0,window.isNaN)(this.D)?q6(!0):q6();this.dispose()};
g.h.LR=function(a){q6();(0,window.isNaN)(this.H())?(b8("Channel error: "+a+" without reconnection"),this.dispose()):(this.O=!0,b8("Channel error: "+a+" with reconnection in "+this.H()+" ms"),c8(this,2))};
g.h.MR=function(a){a.params?b8("Received: action="+a.action+", params="+g.Gg(a.params)):b8("Received: action="+a.action+" {}");switch(a.action){case "loungeStatus":a=g.ux(a.params.devices);this.A=(0,g.J)(a,function(a){return new e6(a)});
a=!!g.Ia(this.A,function(a){return"LOUNGE_SCREEN"==a.type});
VEa(this,a);break;case "loungeScreenDisconnected":g.Ua(this.A,function(a){return"LOUNGE_SCREEN"==a.type});
VEa(this,!1);break;case "remoteConnected":var b=new e6(g.ux(a.params.device));g.Ia(this.A,function(a){return b?a.id==b.id:!1})||g.Qa(this.A,b);
break;case "remoteDisconnected":b=new e6(g.ux(a.params.device));g.Ua(this.A,function(a){return b?a.id==b.id:!1});
break;case "gracefulDisconnect":break;case "playlistModified":XEa(this,a);break;case "nowPlaying":ZEa(this,a);break;case "onStateChange":YEa(this,a);break;case "onAdStateChange":$Ea(this,a);break;case "onVolumeChanged":aFa(this,a);break;case "onSubtitlesTrackChanged":WEa(this,a);break;case "nowAutoplaying":bFa(this,a);break;case "autoplayDismissed":this.V("autoplayDismissed");break;case "autoplayUpNext":this.G=a.params.videoId||null;this.V("autoplayUpNext",this.G);break;case "onAutoplayModeChanged":this.C=
a.params.autoplayMode;this.V("autoplayModeChange",this.C);"DISABLED"==this.C&&this.V("autoplayDismissed");break;case "onHasPreviousNextChanged":cFa(this,a);break;case "requestAssistedSignIn":this.V("assistedSignInRequested",a.params.authCode);break;default:b8("Unrecognized action: "+a.action)}};
g.h.jW=function(){if(this.B){var a=this.B;this.B=null;this.kb.videoId!=a&&g8(this,"getNowPlaying")}};
a8.prototype.subscribe=a8.prototype.subscribe;a8.prototype.unsubscribeByKey=a8.prototype.vk;a8.prototype.ha=function(){var a=3;this.ka()||(a=0,(0,window.isNaN)(this.H())?Z6(this.o)&&(0,window.isNaN)(this.D)&&(a=1):a=2);return a};
a8.prototype.getProxyState=a8.prototype.ha;a8.prototype.F=function(a){b8("Disconnecting with "+a);d8(this);this.V("beforeDisconnect",a);1==a&&q6();cEa(this.o,a);this.dispose()};
a8.prototype.disconnect=a8.prototype.F;a8.prototype.fa=function(){var a=this.kb;this.B&&(a=this.kb.clone(),R7(a,this.B,a.index));return S7(a)};
a8.prototype.getPlayerContextData=a8.prototype.fa;
a8.prototype.ma=function(a){var b=new M7(a);b.videoId&&b.videoId!=this.kb.videoId&&(this.B=b.videoId,g.tE(this.J),this.J=g.rE((0,g.B)(this.jW,this),5E3));var c=[];this.kb.listId==b.listId&&this.kb.videoId==b.videoId&&this.kb.index==b.index||c.push("remoteQueueChange");this.kb.playerState==b.playerState&&this.kb.volume==b.volume&&this.kb.muted==b.muted&&Q7(this.kb)==Q7(b)&&g.Gg(this.kb.o)==g.Gg(b.o)||c.push("remotePlayerChange");this.kb.reset(a);(0,g.D)(c,function(a){this.V(a)},this)};
a8.prototype.setPlayerContextData=a8.prototype.ma;a8.prototype.Z=function(){var a=this.o.F.id,b=g.Ia(this.A,function(b){return"REMOTE_CONTROL"==b.type&&b.id!=a});
return b?b.id:""};
a8.prototype.getOtherConnectedRemoteId=a8.prototype.Z;a8.prototype.H=function(){var a=this.o;return a.A.isActive()?a.A.A-(0,g.I)():window.NaN};
a8.prototype.getReconnectTimeout=a8.prototype.H;a8.prototype.aa=function(){return this.C||"UNSUPPORTED"};
a8.prototype.getAutoplayMode=a8.prototype.aa;a8.prototype.ca=function(){return this.G||""};
a8.prototype.getAutoplayVideoId=a8.prototype.ca;a8.prototype.wa=function(){if(!(0,window.isNaN)(this.H())){var a=this.o.A;g.Au(a.o);a.start()}};
a8.prototype.reconnect=a8.prototype.wa;a8.prototype.ia=function(a,b){g8(this,a,b);UEa(this)};
a8.prototype.sendMessage=a8.prototype.ia;g.C(h8,h7);g.h=h8.prototype;g.h.Be=function(a){return this.md.$_gs(a)};
g.h.contains=function(a){return!!this.md.$_c(a)};
g.h.get=function(a){return this.md.$_g(a)};
g.h.start=function(){this.md.$_st()};
g.h.add=function(a,b,c){this.md.$_a(a,b,c)};
g.h.remove=function(a,b,c){this.md.$_r(a,b,c)};
g.h.sr=function(a,b,c,d){this.md.$_un(a,b,c,d)};
g.h.X=function(){for(var a=0,b=this.A.length;a<b;++a)this.md.$_ubk(this.A[a]);this.A.length=0;this.md=null;h8.ga.X.call(this)};
g.h.yX=function(){this.V("screenChange")};
g.h.GT=function(){this.V("onlineScreenChange")};
q7.prototype.$_st=q7.prototype.start;q7.prototype.$_gspc=q7.prototype.zX;q7.prototype.$_gsppc=q7.prototype.NG;q7.prototype.$_c=q7.prototype.contains;q7.prototype.$_g=q7.prototype.get;q7.prototype.$_a=q7.prototype.add;q7.prototype.$_un=q7.prototype.sr;q7.prototype.$_r=q7.prototype.remove;q7.prototype.$_gs=q7.prototype.Be;q7.prototype.$_gos=q7.prototype.MG;q7.prototype.$_s=q7.prototype.subscribe;q7.prototype.$_ubk=q7.prototype.vk;var i8=null,j8=null,y8=null,n8=[];g.r(z8,g.K);g.h=z8.prototype;
g.h.X=function(){g.K.prototype.X.call(this);this.C.stop();this.F.stop();this.L.stop();this.O();this.o.unsubscribe("proxyStateChange",this.lE,this);this.o.unsubscribe("remotePlayerChange",this.qn,this);this.o.unsubscribe("remoteQueueChange",this.yq,this);this.o.unsubscribe("autoplayUpNext",this.JD,this);this.o.unsubscribe("previousNextChange",this.iE,this);this.o.unsubscribe("nowAutoplaying",this.aE,this);this.o.unsubscribe("autoplayDismissed",this.ID,this);this.o=this.D=null};
g.h.LC=function(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];if(2!=this.o.o)if(C8(this)){if(!V7(this.o).isAdPlaying()||"control_seek"!=a)switch(a){case "control_toggle_play_pause":V7(this.o).rb()?this.o.pause():this.o.play();break;case "control_play":this.o.play();break;case "control_pause":this.o.pause();break;case "control_seek":this.K.dm(c[0],c[1]);break;case "control_subtitles_set_track":D8(this,c[0]);break;case "control_set_audio_track":c=c[0],C8(this)&&this.o.Jx(this.A.getVideoData(1).videoId,
c)}}else switch(a){case "control_toggle_play_pause":case "control_play":case "control_pause":c=this.A.getCurrentTime();E8(this,0==c?void 0:c);break;case "control_seek":E8(this,c[0]);break;case "control_subtitles_set_track":D8(this,c[0]);break;case "control_set_audio_track":c=c[0],C8(this)&&this.o.Jx(this.A.getVideoData(1).videoId,c)}};
g.h.HR=function(a){this.L.OK(a)};
g.h.bX=function(a){this.LC("control_subtitles_set_track",g.Zb(a)?null:a)};
g.h.VF=function(){var a=this.A.gc("captions","track");g.Zb(a)||D8(this,a)};
g.h.WD=function(a){if(C8(this)){this.o.unsubscribe("remotePlayerChange",this.qn,this);var b=Math.round(a.volume);a=!!a.muted;var c=V7(this.o);if(b!=c.volume||a!=c.muted)this.o.setVolume(b,a),this.M.start();this.o.subscribe("remotePlayerChange",this.qn,this)}};
g.h.bT=function(){g.Zb(this.G)||oFa(this,this.G);this.H=!1};
g.h.lE=function(a,b){this.F.stop();2==b&&this.SF()};
g.h.qn=function(){if(C8(this)){this.C.stop();var a=V7(this.o);switch(a.playerState){case 1080:case 1081:case 1084:case 1085:this.D.G=1;break;case 1082:case 1083:this.D.G=0;break;default:this.D.G=-1}switch(a.playerState){case 1081:case 1:B8(this,new g.$P(8));this.RF();break;case 1085:case 3:B8(this,new g.$P(9));break;case 1083:case 0:B8(this,new g.$P(2));this.K.stop();A8(this,this.A.getVideoData().lengthSeconds);break;case 1084:B8(this,new g.$P(4));break;case 2:B8(this,new g.$P(4));A8(this,Q7(a));
break;case -1:B8(this,new g.$P(64));break;case -1E3:B8(this,new g.$P(128,{errorCode:"mdx.remoteerror",message:"This video is not available for remote playback."}))}a=V7(this.o).o;var b=this.G;(a||b?a&&b&&a.trackName==b.trackName&&a.languageCode==b.languageCode&&a.languageName==b.languageName&&a.format==b.format&&a.kind==b.kind:1)||(this.G=a,oFa(this,a));a=V7(this.o);-1==a.volume||Math.round(this.A.getVolume())==a.volume&&this.A.isMuted()==a.muted||this.M.isActive()||this.tG()}else nFa(this)};
g.h.iE=function(){this.A.V("mdxpreviousnextchange")};
g.h.yq=function(){C8(this)||nFa(this)};
g.h.TJ=function(){this.o.Uz()};
g.h.JD=function(a){a&&(a=g.IE("/watch_queue_ajax",{method:"GET",dd:{action_get_watch_queue_item:1,video_id:a},onSuccess:(0,g.B)(this.mV,this)}))&&(this.O=(0,g.B)(a.abort,a))};
g.h.mV=function(a,b){var c=new g.dP(g.Y(this.A),{videoId:b.videoId,title:b.title,author:b.author,murlmq_webp:b.url});this.suggestion=c;this.A.V("mdxautoplayupnext",c)};
g.h.aE=function(a){(0,window.isNaN)(a)||this.A.V("mdxnowautoplaying",a)};
g.h.ID=function(){this.A.V("mdxautoplaycanceled")};
g.h.JP=function(a,b){-1==V7(this.o).playerState?E8(this,a):b&&this.o.JG(a)};
g.h.tG=function(){if(C8(this)){var a=V7(this.o);this.B.Ja(this.U);a.muted?this.A.mute():this.A.ng();this.A.setVolume(a.volume);this.U=this.B.R(this.A,"onVolumeChange",this.WD)}};
g.h.RF=function(){this.C.stop();if(!this.o.ka()){var a=V7(this.o);a.rb()&&B8(this,new g.$P(8));A8(this,Q7(a));this.C.start()}};
g.h.SF=function(){this.F.stop();this.C.stop();var a=this.o.C.getReconnectTimeout();2==this.o.o&&!(0,window.isNaN)(a)&&this.F.start()};g.r(F8,g.W);F8.prototype.D=function(a){qFa(this,a.state)};g.r(G8,g.WY);G8.prototype.L=function(){var a=this.B.gc("remote","receivers");a&&1<a.length&&!this.B.gc("remote","quickCast")?(this.J=g.ib(a,this.F,this),g.XY(this,(0,g.J)(a,this.F)),a=this.B.gc("remote","currentReceiver"),this.Ef(this.F(a)),this.enable(!0)):this.enable(!1)};
G8.prototype.F=function(a){return a.key};
G8.prototype.Df=function(a){return"cast-selector-receiver"==a?"Cast...":this.J[a].name};
G8.prototype.Hd=function(a){g.WY.prototype.Hd.call(this,a);this.B.Yc("remote","currentReceiver",this.J[a]);this.D.Qb()};g.r(H8,g.WU);g.h=H8.prototype;g.h.create=function(){hFa(g.eN(g.Y(this.player)));this.D.push(g.mG("yt-remote-before-disconnect",this.DR,this));this.D.push(g.mG("yt-remote-connection-change",this.uU,this));this.D.push(g.mG("yt-remote-receiver-availability-change",this.jE,this));this.D.push(g.mG("yt-remote-auto-connect",this.sU,this));this.D.push(g.mG("yt-remote-receiver-resumed",this.rU,this));this.jE()};
g.h.load=function(){this.player.bv();g.WU.prototype.load.call(this);this.C=new z8(this,this.player,this.o);var a=(a=mFa())?a.currentTime:0;var b=x8()?new U7(s8(),void 0):null;0==a&&b&&(a=Q7(V7(b)));0!=a&&(this.J=a||0,this.player.V("progresssync",a,void 0));pFa(this,this.F,this.F);g.p0(this.player.app,6)};
g.h.unload=function(){this.player.V("mdxautoplaycanceled");this.B=this.A;g.nf(this.C,this.o);this.o=this.C=null;g.WU.prototype.unload.call(this);g.p0(this.player.app,5)};
g.h.X=function(){g.nG(this.D);g.WU.prototype.X.call(this)};
g.h.Zm=function(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];this.loaded&&this.C.LC.apply(this.C,[a].concat(g.ea(c)))};
g.h.JK=function(){return this.loaded?this.C.suggestion:null};
g.h.cg=function(){return this.o?V7(this.o).cg:!1};
g.h.hasNext=function(){return this.o?V7(this.o).hasNext:!1};
g.h.getCurrentTime=function(){return this.J};
g.h.uP=function(){var a=V7(this.o),b=this.player.getVideoData();return{allowSeeking:g.Y(this.player).experiments.o("web_player_mdx_allow_seeking_change_killswitch")?this.player.Kc():!a.isAdPlaying()&&this.player.Kc(),clipEnd:b.clipEnd,clipStart:b.clipStart,current:this.getCurrentTime(),displayedStart:-1,duration:a.getDuration(),ingestionTime:a.D?a.B+O7(a):a.B,isPeggedToLive:1>=(a.D?a.A+O7(a):a.A)-this.getCurrentTime(),loaded:a.J,seekableEnd:a.D?a.A+O7(a):a.A,seekableStart:0<a.C?a.C+O7(a):a.C}};
g.h.vP=function(){this.o&&this.o.HG()};
g.h.wP=function(){this.o&&this.o.IG()};
g.h.DR=function(a){1==a&&(this.K=this.o?V7(this.o):null)};
g.h.uU=function(){var a=x8()?new U7(s8(),void 0):null;if(a){var b=this.B;this.loaded&&this.unload();this.o=a;this.K=null;b.key!=this.A.key&&(this.B=b,this.load())}else g.mf(this.o),this.o=null,this.loaded&&(this.unload(),(a=this.K)&&a.videoId==this.player.getVideoData().videoId&&this.player.pC(a.videoId,Q7(a)));this.player.V("videodatachange","newdata",this.player.getVideoData(),3)};
g.h.jE=function(){this.H=[this.A].concat(jFa());var a=t8()||this.A;I8(this,a);this.player.ya("onMdxReceiversChange")};
g.h.sU=function(){var a=t8();I8(this,a)};
g.h.rU=function(){this.B=t8()};
g.h.tP=function(a,b){switch(a){case "casting":return this.loaded;case "receivers":return this.H;case "currentReceiver":return b&&("cast-selector-receiver"==b.key?K7():I8(this,b)),this.loaded?this.B:this.A;case "quickCast":return 2==this.H.length&&"cast-selector-receiver"==this.H[1].key?(b&&K7(),!0):!1}};
g.h.xP=function(){Z7(this.o,"sendDebugCommand",{debugCommand:"stats4nerds "})};
g.h.yc=function(){return!1};g.UX.remote=H8;})(_yt_player);


}
/*
     FILE ARCHIVED ON 21:25:56 Dec 17, 2018 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 07:26:27 May 29, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 4.911
  exclusion.robots: 0.026
  exclusion.robots.policy: 0.015
  esindex: 0.011
  cdx.remote: 67.409
  LoadShardBlock: 83.334 (3)
  PetaboxLoader3.datanode: 115.246 (5)
  load_resource: 197.88 (2)
  PetaboxLoader3.resolve: 141.808 (2)
*/