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

(function(g){var window=this;var YEa=function(a,b){return g.Tb(a,b)},c6=function(a){g.gn(a,"zx",g.vb());
return a},d6=function(a,b,c){g.wa(c)||(c=[String(c)]);
g.kn(a.o,b,c)},ZEa=function(a,b){var c=[];
g.Uk(b,function(a){try{var b=g.KD.prototype.A.call(this,a,!0)}catch(f){if("Storage: Invalid value was encountered"==f)return;throw f;}g.u(b)?g.JD(b)&&c.push(a):c.push(a)},a);
return c},$Ea=function(a,b){var c=ZEa(a,b);
(0,g.D)(c,function(a){g.KD.prototype.remove.call(this,a)},a)},aFa=function(a){if(a.Md){if(a.Md.locationOverrideToken)return{locationOverrideToken:a.Md.locationOverrideToken};
if(null!=a.Md.latitudeE7&&null!=a.Md.longitudeE7)return{latitudeE7:a.Md.latitudeE7,longitudeE7:a.Md.longitudeE7}}return null},bFa=function(a,b,c,d){var e=new g.Ym(null,void 0);
a&&g.Zm(e,a);b&&g.$m(e,b);c&&g.an(e,c);d&&g.bn(e,d);return e},cFa=function(a){g.uG[a]&&(a=g.uG[a],(0,g.D)(a,function(a){g.sG[a]&&delete g.sG[a]}),a.length=0)},dFa=function(a){var b=g.rG();
if(b)if(b.clear(a),a)cFa(a);else for(var c in g.uG)cFa(c)},e6=function(a){this.app=this.name=this.id="";
this.type="REMOTE_CONTROL";this.obfuscatedGaiaId=this.avatar=this.username="";this.B=!1;this.capabilities=new window.Set;this.experiments=new window.Set;this.theme="u";new g.Sm;this.o=this.A="";a&&(this.id=a.id||a.name,this.name=a.name,this.app=a.app,this.type=a.type||"REMOTE_CONTROL",this.username=a.user||"",this.avatar=a.userAvatarUri||"",this.obfuscatedGaiaId=a.obfuscatedGaiaId||"",this.theme=a.theme||"u",eFa(this,a.capabilities||""),fFa(this,a.experiments||""),this.A=a.remoteControllerUrl||"",
this.o=a.localChannelEncryptionKey||"")},eFa=function(a,b){a.capabilities.clear();
(0,g.Zd)(b.split(","),g.Ca(YEa,gFa)).forEach(function(b){a.capabilities.add(b)})},fFa=function(a,b){a.experiments.clear();
b.split(",").forEach(function(b){a.experiments.add(b)})},f6=function(a){a=a||{};
this.name=a.name||"";this.id=a.id||a.screenId||"";this.token=a.token||a.loungeToken||"";this.uuid=a.uuid||a.dialId||""},g6=function(a,b){return!!b&&(a.id==b||a.uuid==b)},hFa=function(a){return{name:a.name,
screenId:a.id,loungeToken:a.token,dialId:a.uuid}},iFa=function(a){return new f6(a)},jFa=function(a){return g.wa(a)?(0,g.J)(a,iFa):[]},h6=function(a){return a?'{name:"'+a.name+'",id:'+a.id.substr(0,6)+"..,token:"+(a.token?".."+a.token.slice(-6):"-")+",uuid:"+(a.uuid?".."+a.uuid.slice(-6):"-")+"}":"null"},i6=function(a){return g.wa(a)?"["+(0,g.J)(a,h6).join(",")+"]":"null"},j6=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(a){var b=16*Math.random()|0;
return("x"==a?b:b&3|8).toString(16)})},kFa=function(a){return(0,g.J)(a,function(a){return{key:a.id,
name:a.name}})},k6=function(a,b){return g.Ja(a,function(a){return a||b?!a!=!b?!1:a.id==b.id:!0})},l6=function(a,b){return g.Ja(a,function(a){return g6(a,b)})},lFa=function(){var a=(0,g.DH)();
a&&$Ea(a,a.o.ee(!0))},m6=function(){var a=g.GH("yt-remote-connected-devices")||[];
g.eb(a);return a},mFa=function(a){if(g.Oa(a))return[];
var b=a[0].indexOf("#"),c=-1==b?a[0]:a[0].substring(0,b);return(0,g.J)(a,function(a,b){return 0==b?a:a.substring(c.length)})},nFa=function(a){g.FH("yt-remote-connected-devices",a,86400)},o6=function(){if(n6)return n6;
var a=g.GH("yt-remote-device-id");a||(a=j6(),g.FH("yt-remote-device-id",a,31536E3));for(var b=m6(),c=1,d=a;g.Na(b,d);)c++,d=a+"#"+c;return n6=d},p6=function(){var a=m6(),b=o6();
g.Na(a,b);g.IH()&&g.gb(a,b);a=mFa(a);if(g.Oa(a))try{g.bH("remote_sid")}catch(c){}else try{g.aH("remote_sid",a.join(","),-1)}catch(c){}},oFa=function(){return g.GH("yt-remote-session-browser-channel")},pFa=function(){return g.GH("yt-remote-local-screens")||[]},qFa=function(){g.FH("yt-remote-lounge-token-expiration",!0,86400)},rFa=function(a){5<a.length&&(a=a.slice(a.length-5));
var b=(0,g.J)(pFa(),function(a){return a.loungeToken}),c=(0,g.J)(a,function(a){return a.loungeToken});
(0,g.Gm)(c,function(a){return!g.Na(b,a)})&&qFa();
g.FH("yt-remote-local-screens",a,31536E3)},sFa=function(a,b){g.FH("yt-remote-session-browser-channel",a);
g.FH("yt-remote-session-screen-id",b);var c=m6(),d=o6();g.Na(c,d)||c.push(d);nFa(c);p6()},q6=function(a){a||(g.HH("yt-remote-session-screen-id"),g.HH("yt-remote-session-video-id"));
p6();a=m6();g.Ta(a,o6());nFa(a)},tFa=function(){if(!r6){var a=g.VD();
a&&(r6=new g.ED(a))}return r6?!!r6.get("yt-remote-use-staging-server"):!1},uFa=function(){var a=window.document.createElement("a");
g.jd(a,"https://web.archive.org/web/20181207022241/https://www.gstatic.com/cv/js/sender/v1/cast_sender.js");a=a.href.replace(/^[a-zA-Z]+:\/\//,"//");return"js-"+g.zb(a)},vFa=function(a,b,c){c=void 0===c?null:c;
var d=g.Sd("SCRIPT");d.id=a;d.onload=function(){b&&(0,window.setTimeout)(b,0)};
d.onreadystatechange=function(){switch(d.readyState){case "loaded":case "complete":d.onload()}};
c&&d.setAttribute("nonce",c);g.ld(d,g.qe("https://web.archive.org/web/20181207022241/https://www.gstatic.com/cv/js/sender/v1/cast_sender.js"));a=window.document.getElementsByTagName("head")[0]||window.document.body;a.insertBefore(d,a.firstChild);return d},wFa=function(a){a=void 0===a?null:a;
var b=uFa(),c=window.document.getElementById(b),d=c&&g.BF(c,"loaded");d||c&&!d||(c=vFa(b,function(){g.BF(c,"loaded")||(g.AF(c,"loaded","true"),g.yG(b),g.AE(g.Ca(dFa,b),0))},a))},xFa=function(){var a=void 0===a?null:a;
window.spf?window.spf.script.load("https://web.archive.org/web/20181207022241/https://www.gstatic.com/cv/js/sender/v1/cast_sender.js","",void 0):wFa(a)},s6=function(a){return!!window.document.currentScript&&(-1!=window.document.currentScript.src.indexOf("?"+a)||-1!=window.document.currentScript.src.indexOf("&"+a))},yFa=function(){return"function"==typeof window.__onGCastApiAvailable?window.__onGCastApiAvailable:null},t6=function(a){a.length?zFa(a.shift(),function(){t6(a)}):u6()},AFa=function(a){return"chrome-extension://"+a+v6},zFa=function(a,
b,c){var d=window.document.createElement("script");
d.onerror=b;c&&(d.onload=c);d.src=a;(window.document.head||window.document.documentElement).appendChild(d)},w6=function(a){return 0<=window.navigator.userAgent.indexOf(a)},u6=function(){var a=yFa();
a&&a(!1,"No cast extension found")},x6=function(){if(BFa){var a=2,b=yFa(),c=function(){a--;
0==a&&b&&b(!0)};
window.__onGCastApiAvailable=c;zFa("//web.archive.org/web/20181207022241/https://www.gstatic.com/cast/sdk/libs/sender/1.0/cast_framework.js",u6,c)}},CFa=function(){var a=window.__gCrWeb&&window.__gCrWeb.message&&window.__gCrWeb.message.invokeOnHost;
a&&(x6(),a({command:"cast.sender.init"}))},DFa=function(){x6();
var a=window.navigator.userAgent.match(/Chrome\/([0-9]+)/);t6(["//web.archive.org/web/20181207022241/https://www.gstatic.com/eureka/clank/"+(a?(0,window.parseInt)(a[1],10):0)+v6,"//web.archive.org/web/20181207022241/https://www.gstatic.com/eureka/clank"+v6])},y6=function(a,b,c){g.M.call(this);
this.F=null!=c?(0,g.B)(a,c):a;this.Dd=b;this.D=(0,g.B)(this.wL,this);this.o=!1;this.A=0;this.B=this.Ga=null;this.C=[]},z6=function(){},A6=function(a,b,c,d){this.o=a;
this.B=b;this.G=c;this.F=d||1;this.C=45E3;this.Y=new g.on(this);this.A=new g.Dg;this.A.setInterval(250)},FFa=function(a,b,c){a.Yj=1;
a.zh=c6(b.clone());a.lj=c;a.D=!0;EFa(a,null)},B6=function(a,b,c,d,e){a.Yj=1;
a.zh=c6(b.clone());a.lj=null;a.D=c;e&&(a.HF=!1);EFa(a,d)},EFa=function(a,b){a.Tk=(0,g.H)();
C6(a);a.Zh=a.zh.clone();d6(a.Zh,"t",a.F);a.Mn=0;a.Vc=a.o.Ts(a.o.Dn()?b:null);0<a.Ot&&(a.Qq=new g.Al((0,g.B)(a.cH,a,a.Vc),a.Ot));a.Y.W(a.Vc,"readystatechange",a.ZW);var c=a.Ii?g.cc(a.Ii):{};a.lj?(a.Er="POST",c["Content-Type"]="application/x-www-form-urlencoded",a.Vc.send(a.Zh,a.Er,a.lj,c)):(a.Er="GET",a.HF&&!g.Md&&(c.Connection="close"),a.Vc.send(a.Zh,a.Er,null,c));a.o.Hf(1)},IFa=function(a,b,c){for(var d=!0;!a.ri&&a.Mn<c.length;){var e=GFa(a,c);
if(e==D6){4==b&&(a.Ah=4,E6(15),d=!1);break}else if(e==HFa){a.Ah=4;E6(16);d=!1;break}else F6(a,e)}4==b&&0==c.length&&(a.Ah=1,E6(17),d=!1);a.Of=a.Of&&d;d||(G6(a),H6(a))},GFa=function(a,b){var c=a.Mn,d=b.indexOf("\n",c);
if(-1==d)return D6;c=Number(b.substring(c,d));if((0,window.isNaN)(c))return HFa;d+=1;if(d+c>b.length)return D6;var e=b.substr(d,c);a.Mn=d+c;return e},KFa=function(a,b){a.Tk=(0,g.H)();
C6(a);var c=b?window.location.hostname:"";a.Zh=a.zh.clone();g.gn(a.Zh,"DOMAIN",c);g.gn(a.Zh,"t",a.F);try{a.Pf=new window.ActiveXObject("htmlfile")}catch(n){G6(a);a.Ah=7;E6(22);H6(a);return}var d="<html><body>";if(b){for(var e="",f=0;f<c.length;f++){var k=c.charAt(f);if("<"==k)e+="\\x3c";else if(">"==k)e+="\\x3e";else{var l=k;if(l in I6)k=I6[l];else if(l in JFa)k=I6[l]=JFa[l];else{var m=l.charCodeAt(0);if(31<m&&127>m)k=l;else{if(256>m){if(k="\\x",16>m||256<m)k+="0"}else k="\\u",4096>m&&(k+="0");k+=
m.toString(16).toUpperCase()}k=I6[l]=k}e+=k}}d+='<script>document.domain="'+e+'"\x3c/script>'}c=g.md(g.Bc("b/12014412"),d+"</body></html>");a.Pf.open();a.Pf.write(g.cd(c));a.Pf.close();a.Pf.parentWindow.m=(0,g.B)(a.cW,a);a.Pf.parentWindow.d=(0,g.B)(a.OE,a,!0);a.Pf.parentWindow.rpcClose=(0,g.B)(a.OE,a,!1);c=a.Pf.createElement("DIV");a.Pf.parentWindow.document.body.appendChild(c);d=g.Qc(a.Zh.toString());d=g.pb(g.Nc(d));d=g.md(g.Bc("b/12014412"),'<iframe src="'+d+'"></iframe>');g.id(c,g.cd(d));a.o.Hf(1)},
C6=function(a){a.Lx=(0,g.H)()+a.C;
LFa(a,a.C)},LFa=function(a,b){if(null!=a.pl)throw Error("WatchDog timer not null");
a.pl=J6((0,g.B)(a.sW,a),b)},K6=function(a){a.pl&&(g.x.clearTimeout(a.pl),a.pl=null)},H6=function(a){a.o.VA()||a.ri||a.o.Aq(a)},G6=function(a){K6(a);
g.of(a.Qq);a.Qq=null;a.A.stop();g.un(a.Y);if(a.Vc){var b=a.Vc;a.Vc=null;b.abort();b.dispose()}a.Pf&&(a.Pf=null)},F6=function(a,b){try{a.o.GE(a,b),a.o.Hf(4)}catch(c){}},NFa=function(a,b,c,d,e){if(0==d)c(!1);
else{var f=e||0;d--;MFa(a,b,function(e){e?c(!0):g.x.setTimeout(function(){NFa(a,b,c,d,f)},f)})}},MFa=function(a,b,c){var d=new window.Image;
d.onload=function(){try{L6(d),c(!0)}catch(e){}};
d.onerror=function(){try{L6(d),c(!1)}catch(e){}};
d.onabort=function(){try{L6(d),c(!1)}catch(e){}};
d.ontimeout=function(){try{L6(d),c(!1)}catch(e){}};
g.x.setTimeout(function(){if(d.ontimeout)d.ontimeout()},b);
d.src=a},L6=function(a){a.onload=null;
a.onerror=null;a.onabort=null;a.ontimeout=null},OFa=function(a){this.o=a;
this.A=new z6},PFa=function(a){var b=M6(a.o,a.vl,"/mail/images/cleardot.gif");
c6(b);NFa(b.toString(),5E3,(0,g.B)(a.yK,a),3,2E3);a.Hf(1)},O6=function(a){var b=a.o.J;
if(null!=b)E6(5),b?(E6(11),N6(a.o,a,!1)):(E6(12),N6(a.o,a,!0));else if(a.Je=new A6(a,void 0,void 0,void 0),a.Je.Ii=a.Mt,b=a.o,b=M6(b,b.Dn()?a.jm:null,a.Nt),E6(5),!g.Kd||g.tc(10))d6(b,"TYPE","xmlhttp"),B6(a.Je,b,!1,a.jm,!1);else{d6(b,"TYPE","html");var c=a.Je;a=!!a.jm;c.Yj=3;c.zh=c6(b.clone());KFa(c,a)}},P6=function(a,b,c){this.o=1;
this.A=[];this.C=[];this.D=new z6;this.H=a||null;this.J=null!=b?b:null;this.F=c||!1},QFa=function(a,b){this.o=a;
this.map=b;this.context=null},RFa=function(a){g.qf.call(this,"statevent",a)},SFa=function(a,b){g.qf.call(this,"timingevent",a);
this.size=b},TFa=function(a){g.qf.call(this,"serverreachability",a)},WFa=function(a){UFa(a);
if(3==a.o){var b=a.jn++,c=a.kp.clone();g.gn(c,"SID",a.B);g.gn(c,"RID",b);g.gn(c,"TYPE","terminate");Q6(a,c);b=new A6(a,a.B,b,void 0);b.Yj=2;b.zh=c6(c.clone());(new window.Image).src=b.zh;b.Tk=(0,g.H)();C6(b)}VFa(a)},XFa=function(a){a.WK(1,0);
a.kp=M6(a,null,a.Lt);R6(a)},UFa=function(a){a.ph&&(a.ph.abort(),a.ph=null);
a.yc&&(a.yc.cancel(),a.yc=null);a.Dg&&(g.x.clearTimeout(a.Dg),a.Dg=null);S6(a);a.je&&(a.je.cancel(),a.je=null);a.th&&(g.x.clearTimeout(a.th),a.th=null)},YFa=function(a,b){if(0==a.o)throw Error("Invalid operation: sending map when state is closed");
a.A.push(new QFa(a.PR++,b));2!=a.o&&3!=a.o||R6(a)},R6=function(a){a.je||a.th||(a.th=J6((0,g.B)(a.ME,a),0),a.Pj=0)},$Fa=function(a,b){if(1==a.o){if(!b){a.jn=Math.floor(1E5*Math.random());
var c=a.jn++,d=new A6(a,"",c,void 0);d.Ii=null;var e=T6(a),f=a.kp.clone();g.gn(f,"RID",c);g.gn(f,"CVER","1");Q6(a,f);FFa(d,f,e);a.je=d;a.o=2}}else 3==a.o&&(b?ZFa(a,b):0==a.A.length||a.je||ZFa(a))},ZFa=function(a,b){if(b)if(6<a.ti){a.A=a.C.concat(a.A);
a.C.length=0;var c=a.jn-1;var d=T6(a)}else c=b.G,d=b.lj;else c=a.jn++,d=T6(a);var e=a.kp.clone();g.gn(e,"SID",a.B);g.gn(e,"RID",c);g.gn(e,"AID",a.rk);Q6(a,e);c=new A6(a,a.B,c,a.Pj+1);c.Ii=null;c.setTimeout(1E4+Math.round(1E4*Math.random()));a.je=c;FFa(c,e,d)},Q6=function(a,b){if(a.Cd){var c=a.Cd.DA();
c&&g.Hb(c,function(a,c){g.gn(b,c,a)})}},T6=function(a){var b=Math.min(a.A.length,1E3),c=["count="+b];
if(6<a.ti&&0<b){var d=a.A[0].o;c.push("ofs="+d)}else d=0;for(var e=0;e<b;e++){var f=a.A[e].o,k=a.A[e].map;f=6>=a.ti?e:f-d;try{g.Hb(k,function(a,b){c.push("req"+f+"_"+b+"="+(0,window.encodeURIComponent)(a))})}catch(l){c.push("req"+f+"_type="+(0,window.encodeURIComponent)("_badmap"))}}a.C=a.C.concat(a.A.splice(0,b));
return c.join("&")},aGa=function(a){a.yc||a.Dg||(a.G=1,a.Dg=J6((0,g.B)(a.LE,a),0),a.Ej=0)},U6=function(a){if(a.yc||a.Dg||3<=a.Ej)return!1;
a.G++;a.Dg=J6((0,g.B)(a.LE,a),bGa(a,a.Ej));a.Ej++;return!0},N6=function(a,b,c){a.Cr=c;
a.cg=b.Pg;a.F||XFa(a)},S6=function(a){null!=a.wi&&(g.x.clearTimeout(a.wi),a.wi=null)},bGa=function(a,b){var c=5E3+Math.floor(1E4*Math.random());
a.isActive()||(c*=2);return c*b},V6=function(a,b){if(2==b||9==b){var c=null;
a.Cd&&(c=null);var d=(0,g.B)(a.OX,a);c||(c=new g.Ym("//web.archive.org/web/20181207022241/https://www.google.com/images/cleardot.gif"),c6(c));MFa(c.toString(),1E4,d)}else E6(2);cGa(a,b)},cGa=function(a,b){a.o=0;
a.Cd&&a.Cd.Fz(b);VFa(a);UFa(a)},VFa=function(a){a.o=0;
a.cg=-1;if(a.Cd)if(0==a.C.length&&0==a.A.length)a.Cd.Gs();else{g.Wa(a.C);var b=g.Wa(a.A);a.C.length=0;a.A.length=0;a.Cd.Gs(b)}},M6=function(a,b,c){var d=g.hn(c);
if(""!=d.A)b&&g.$m(d,b+"."+d.A),g.an(d,d.D);else{var e=window.location;d=bFa(e.protocol,b?b+"."+e.hostname:e.hostname,+e.port,c)}a.Ll&&g.Hb(a.Ll,function(a,b){g.gn(d,b,a)});
g.gn(d,"VER",a.ti);Q6(a,d);return d},J6=function(a,b){if(!g.ya(a))throw Error("Fn must not be null and must be a function");
return g.x.setTimeout(function(){a()},b)},E6=function(a){W6.dispatchEvent(new RFa(W6,a))},dGa=function(){},eGa=function(a,b){this.action=a;
this.params=b||{}},X6=function(a,b){g.M.call(this);
this.o=new g.Gu(this.TV,0,this);g.O(this,this.o);this.Dd=5E3;this.A=0;if(g.ya(a))b&&(a=(0,g.B)(a,b));else if(a&&g.ya(a.handleEvent))a=(0,g.B)(a.handleEvent,a);else throw Error("Invalid listener argument");this.B=a},Y6=function(a,b,c){this.L=a;
this.F=b;this.B=new g.DD;this.A=new X6(this.tY,this);this.o=this.ib=null;this.K=!1;this.D=null;this.J="";this.H=this.C=0;this.G=[];this.M=c||!1},fGa=function(a){return{firstTestResults:[""],
secondTestResults:!a.o.Cr,sessionId:a.o.B,arrayId:a.o.rk}},gGa=function(a,b){a.H=b||0;
a.A.stop();a.o&&(3==a.o.o&&$Fa(a.o),WFa(a.o));a.H=0},Z6=function(a){return!!a.o&&3==a.o.o},hGa=function(a,b){(a.F.loungeIdToken=b)||a.A.stop()},$6=function(a){this.port=this.domain="";
this.o="/api/lounge";this.A=!0;a=a||window.document.location.href;var b=g.Sg(a)||"";b&&(this.port=":"+b);this.domain=g.Rg(a)||"";a=g.Fb;0<=a.search("MSIE")&&(a=a.match(/MSIE ([\d.]+)/)[1],0>g.yb(a,"10.0")&&(this.A=!1))},a7=function(a,b){var c=a.o;
if(g.u(void 0)?0:a.A)c="https://"+a.domain+a.port+a.o;return g.ah(c+b,{})},b7=function(a,b,c,d,e){a={format:"JSON",
method:"POST",context:a,timeout:5E3,withCredentials:!1,onSuccess:g.Ca(a.C,d,!0),onError:g.Ca(a.B,e),Id:g.Ca(a.D,e)};c&&(a.Tb=c,a.headers={"Content-Type":"application/x-www-form-urlencoded"});return g.RE(b,a)},lGa=function(){var a=iGa;
jGa();c7.push(a);kGa(c7)},d7=function(a,b){jGa();
var c=c7,d=mGa(a,String(b));g.Oa(c)?nGa(d):(kGa(c),(0,g.D)(c,function(a){a(d)}))},jGa=function(){c7||(c7=g.y("yt.mdx.remote.debug.handlers_")||[],g.ta("yt.mdx.remote.debug.handlers_",c7,void 0))},nGa=function(a){var b=(e7+1)%50;
e7=b;f7[b]=a;g7||(g7=49==b)},kGa=function(a){var b=f7;
if(b[0]){var c=e7,d=g7?c:-1;do{d=(d+1)%50;var e=b[d];(0,g.D)(a,function(a){a(e)})}while(d!=c);
f7=Array(50);e7=-1;g7=!1}},mGa=function(a,b){var c=((0,g.H)()-oGa)/1E3;
c.toFixed&&(c=c.toFixed(3));var d=[];d.push("[",c+"s","] ");d.push("[","yt.mdx.remote","] ");d.push(a+": "+b,"\n");return d.join("")},h7=function(a){g.iG.call(this);
this.G=a;this.o=[]},pGa=function(a,b){var c=a.get(b.uuid)||a.get(b.id);
if(c){var d=c.name;c.id=b.id||c.id;c.name=b.name;c.token=b.token;c.uuid=b.uuid||c.uuid;return c.name!=d}a.o.push(b);return!0},qGa=function(a,b){var c=a.o.length!=b.length;
a.o=(0,g.Zd)(a.o,function(a){return!!k6(b,a)});
for(var d=0,e=b.length;d<e;d++)c=pGa(a,b[d])||c;return c},rGa=function(a,b){var c=a.o.length;
a.o=(0,g.Zd)(a.o,function(a){return!(a||b?!a!=!b?0:a.id==b.id:1)});
return a.o.length<c},i7=function(a,b,c,d){g.iG.call(this);
this.F=a;this.D=b;this.B=c;this.C=d;this.A=0;this.o=null;this.Ga=window.NaN},k7=function(a){h7.call(this,"LocalScreenService");
this.B=a;this.A=window.NaN;j7(this);this.info("Initializing with "+i6(this.o))},sGa=function(a){if(a.o.length){var b=(0,g.J)(a.o,function(a){return a.id}),c=a7(a.B,"/pairing/get_lounge_token_batch");
b7(a.B,c,{screen_ids:b.join(",")},(0,g.B)(a.KL,a),(0,g.B)(a.JL,a))}},j7=function(a){var b=jFa(pFa());
b=(0,g.Zd)(b,function(a){return!a.uuid});
return qGa(a,b)},l7=function(a,b){rFa((0,g.J)(a.o,hFa));
b&&qFa()},n7=function(a,b){g.iG.call(this);
this.F=b;var c=g.GH("yt-remote-online-screen-ids")||"";c=c?c.split(","):[];for(var d={},e=this.F(),f=0,k=e.length;f<k;++f){var l=e[f].id;d[l]=g.Na(c,l)}this.o=d;this.D=a;this.B=this.C=window.NaN;this.A=null;m7("Initialized with "+g.Jg(this.o))},tGa=function(a,b,c){var d=a7(a.D,"/pairing/get_screen_availability");
b7(a.D,d,{lounge_token:b.token},(0,g.B)(function(a){a=a.screens||[];for(var d=0,e=a.length;d<e;++d)if(a[d].loungeToken==b.token){c("online"==a[d].status);return}c(!1)},a),(0,g.B)(function(){c(!1)},a))},o7=function(a,b){a:if(g.Nb(b)!=g.Nb(a.o))var c=!1;
else{c=g.Qb(b);for(var d=0,e=c.length;d<e;++d)if(!a.o[c[d]]){c=!1;break a}c=!0}c||(m7("Updated online screens: "+g.Jg(a.o)),a.o=b,a.V("screenChange"));uGa(a)},p7=function(a){(0,window.isNaN)(a.B)||g.CE(a.B);
a.B=g.AE((0,g.B)(a.Kw,a),0<a.C&&a.C<(0,g.H)()?2E4:1E4)},m7=function(a){d7("OnlineScreenService",a)},vGa=function(a){var b={};
(0,g.D)(a.F(),function(a){a.token?b[a.token]=a.id:this.sc("Requesting availability of screen w/o lounge token.")});
return b},uGa=function(a){a=g.Qb(g.Ib(a.o,function(a){return a}));
g.eb(a);a.length?g.FH("yt-remote-online-screen-ids",a.join(","),60):g.HH("yt-remote-online-screen-ids")},q7=function(a){h7.call(this,"ScreenService");
this.F=a;this.A=this.B=null;this.C=[];this.D={};wGa(this)},yGa=function(a,b,c,d,e,f){a.info("getAutomaticScreenByIds "+c+" / "+b);
c||(c=a.D[b]);var k=a.De();if(k=(c?l6(k,c):null)||l6(k,b)){k.uuid=b;var l=r7(a,k);tGa(a.A,l,function(a){e(a?l:null)})}else c?xGa(a,c,(0,g.B)(function(a){var f=r7(this,new f6({name:d,
screenId:c,loungeToken:a,dialId:b||""}));tGa(this.A,f,function(a){e(a?f:null)})},a),f):e(null)},zGa=function(a,b){for(var c=0,d=a.o.length;c<d;++c)if(a.o[c].name==b)return a.o[c];
return null},xGa=function(a,b,c,d){a.info("requestLoungeToken_ for "+b);
var e={Tb:{screen_ids:b},method:"POST",context:a,onSuccess:function(a,e){var f=e&&e.screens||[];f[0]&&f[0].screenId==b?c(f[0].loungeToken):d(Error("Missing lounge token in token response"))},
onError:function(){d(Error("Request screen lounge token failed"))}};
g.RE(a7(a.F,"/pairing/get_lounge_token_batch"),e)},AGa=function(a){a.o=a.B.De();
var b=a.D,c={},d;for(d in b)c[b[d]]=d;b=0;for(d=a.o.length;b<d;++b){var e=a.o[b];e.uuid=c[e.id]||""}a.info("Updated manual screens: "+i6(a.o))},wGa=function(a){s7(a);
a.B=new k7(a.F);a.B.subscribe("screenChange",(0,g.B)(a.YL,a));AGa(a);a.C=jFa(g.GH("yt-remote-automatic-screen-cache")||[]);s7(a);a.info("Initializing automatic screens: "+i6(a.C));a.A=new n7(a.F,(0,g.B)(a.De,a,!0));a.A.subscribe("screenChange",(0,g.B)(function(){this.V("onlineScreenChange")},a))},r7=function(a,b){var c=a.get(b.id);
c?(c.uuid=b.uuid,b=c):((c=l6(a.C,b.uuid))?(c.id=b.id,c.token=b.token,b=c):a.C.push(b),g.FH("yt-remote-automatic-screen-cache",(0,g.J)(a.C,hFa)));s7(a);a.D[b.uuid]=b.id;g.FH("yt-remote-device-id-map",a.D,31536E3);return b},s7=function(a){a.D=g.GH("yt-remote-device-id-map")||{}},t7=function(a,b,c){g.iG.call(this);
this.M=c;this.J=a;this.A=b;this.B=null},u7=function(a,b){d7(a.M,b)},v7=function(a,b){t7.call(this,a,b,"CastSession");
this.o=null;this.C=0;this.F=(0,g.B)(this.zY,this);this.D=(0,g.B)(this.FW,this);this.C=g.AE((0,g.B)(function(){BGa(this,null)},this),12E4)},CGa=function(a){a.info("sendYoutubeMessage_: getMdxSessionStatus "+g.Jg(void 0));
var b={type:"getMdxSessionStatus"};a.o?a.o.sendMessage("urn:x-cast:com.google.youtube.mdx",b,g.A,(0,g.B)(function(){u7(this,"Failed to send message: getMdxSessionStatus.")},a)):u7(a,"Sending yt message without session: "+g.Jg(b))},BGa=function(a,b){g.CE(a.C);
if(b){if(a.info("onConnectedScreenId_: Received screenId: "+b),!a.B||a.B.id!=b){var c=(0,g.B)(a.Bq,a),d=(0,g.B)(a.Ie,a);a.LA(b,c,d,5)}}else a.Ie(Error("Waiting for session status timed out."))},w7=function(a,b,c){t7.call(this,a,b,"DialSession");
this.C=this.H=null;this.K="";this.O=c;this.D=null;this.G=g.A;this.F=window.NaN;this.L=(0,g.B)(this.CY,this);this.o=g.A},DGa=function(a){a.o=a.J.kH(a.K,a.A.label,a.A.friendlyName,(0,g.B)(function(a){this.o=g.A;
this.Bq(a)},a),(0,g.B)(function(a){this.o=g.A;
this.Ie(a)},a))},EGa=function(a){var b={};
b.pairingCode=a.K;b.theme=a.O;if(a.D){var c=a.D.currentTime||0;b.v=a.D.videoId;b.t=c}tFa()&&(b.env_useStageMdx=1);return g.Zg(b)},x7=function(a,b){t7.call(this,a,b,"ManualSession");
this.o=g.AE((0,g.B)(this.tk,this,null),150)},y7=function(a,b,c,d){g.iG.call(this);
this.A=a;this.G=b||"233637DE";this.F=c||"cl";this.H=d||!1;this.o=null;this.D=!1;this.B=[];this.C=(0,g.B)(this.fV,this)},FGa=function(a,b){return b?g.Ja(a.B,function(a){return g6(b,a.label)},a):null},z7=function(a){d7("Controller",a)},iGa=function(a){window.chrome&&window.chrome.cast&&window.chrome.cast.logMessage&&window.chrome.cast.logMessage(a)},A7=function(a){return a.D||!!a.B.length||!!a.o},B7=function(a,b,c){b!=a.o&&(g.of(a.o),(a.o=b)?(c?a.V("yt-remote-cast2-receiver-resumed",b.A):a.V("yt-remote-cast2-receiver-selected",
b.A),b.subscribe("sessionScreen",(0,g.B)(a.JE,a,b)),b.B?a.V("yt-remote-cast2-session-change",b.B):c&&a.o.tk(null)):a.V("yt-remote-cast2-session-change",null))},GGa=function(a){var b=a.A.jH(),c=a.o&&a.o.A;
a=(0,g.J)(b,function(a){c&&g6(a,c.label)&&(c=null);var b=a.uuid?a.uuid:a.id,d=FGa(this,a);d?(d.label=b,d.friendlyName=a.name):(d=new window.chrome.cast.Receiver(b,a.name),d.receiverType=window.chrome.cast.ReceiverType.CUSTOM);return d},a);
c&&(c.receiverType!=window.chrome.cast.ReceiverType.CUSTOM&&(c=new window.chrome.cast.Receiver(c.label,c.friendlyName),c.receiverType=window.chrome.cast.ReceiverType.CUSTOM),a.push(c));return a},MGa=function(a,b,c,d,e,f,k){HGa()?IGa(b,e,f,k)&&(D7(!0),window.chrome&&window.chrome.cast&&window.chrome.cast.isAvailable?JGa(a,c):(window.__onGCastApiAvailable=function(b,d){b?JGa(a,c):(E7("Failed to load cast API: "+d),F7(!1),D7(!1),g.HH("yt-remote-cast-available"),g.HH("yt-remote-cast-receiver"),KGa(),
c(!1))},d?xFa():w6("CriOS")?CFa():w6("Android")&&w6("Chrome/")&&window.navigator.presentation?DFa():window.chrome&&window.navigator.presentation&&!w6("Edge")?(x6(),t6(LGa.map(AFa))):u6())):C7("Cannot initialize because not running Chrome")},KGa=function(){C7("dispose");
var a=G7();a&&a.dispose();g.ta("yt.mdx.remote.cloudview.instance_",null,void 0);NGa(!1);g.wG(H7);H7.length=0},I7=function(){return!!g.GH("yt-remote-cast-installed")},OGa=function(){var a=g.GH("yt-remote-cast-receiver");
return a?a.friendlyName:null},PGa=function(){C7("clearCurrentReceiver");
g.HH("yt-remote-cast-receiver")},QGa=function(){return I7()?G7()?G7().getCastSession():(E7("getCastSelector: Cast is not initialized."),null):(E7("getCastSelector: Cast API is not installed!"),null)},K7=function(){I7()?G7()?J7()?(C7("Requesting cast selector."),G7().requestSession()):(C7("Wait for cast API to be ready to request the session."),H7.push(g.vG("yt-remote-cast2-api-ready",K7))):E7("requestCastSelector: Cast is not initialized."):E7("requestCastSelector: Cast API is not installed!")},L7=
function(a,b){J7()?G7().setConnectedScreenStatus(a,b):E7("setConnectedScreenStatus called before ready.")},HGa=function(){var a=0<=g.Fb.search(/ (CrMo|Chrome|CriOS)\//);
return g.RI||a},RGa=function(a,b){G7().init(a,b)},IGa=function(a,b,c,d){var e=!1;
G7()||(a=new y7(a,b,c,d),a.subscribe("yt-remote-cast2-availability-change",function(a){g.FH("yt-remote-cast-available",a);g.zG("yt-remote-cast2-availability-change",a)}),a.subscribe("yt-remote-cast2-receiver-selected",function(a){C7("onReceiverSelected: "+a.friendlyName);
g.FH("yt-remote-cast-receiver",a);g.zG("yt-remote-cast2-receiver-selected",a)}),a.subscribe("yt-remote-cast2-receiver-resumed",function(a){C7("onReceiverResumed: "+a.friendlyName);
g.FH("yt-remote-cast-receiver",a)}),a.subscribe("yt-remote-cast2-session-change",function(a){C7("onSessionChange: "+h6(a));
a||g.HH("yt-remote-cast-receiver");g.zG("yt-remote-cast2-session-change",a)}),g.ta("yt.mdx.remote.cloudview.instance_",a,void 0),e=!0);
C7("cloudview.createSingleton_: "+e);return e},G7=function(){return g.y("yt.mdx.remote.cloudview.instance_")},JGa=function(a,b){F7(!0);
D7(!1);RGa(a,function(a){a?(NGa(!0),g.yG("yt-remote-cast2-api-ready")):(E7("Failed to initialize cast API."),F7(!1),g.HH("yt-remote-cast-available"),g.HH("yt-remote-cast-receiver"),KGa());b(a)})},C7=function(a){d7("cloudview",a)},E7=function(a){d7("cloudview",a)},F7=function(a){C7("setCastInstalled_ "+a);
g.FH("yt-remote-cast-installed",a)},J7=function(){return!!g.y("yt.mdx.remote.cloudview.apiReady_")},NGa=function(a){C7("setApiReady_ "+a);
g.ta("yt.mdx.remote.cloudview.apiReady_",a,void 0)},D7=function(a){g.ta("yt.mdx.remote.cloudview.initializing_",a,void 0)},M7=function(a){this.index=-1;
this.videoId=this.listId="";this.volume=this.playerState=-1;this.muted=!1;this.audioTrackId=null;this.F=this.G=0;this.o=null;this.hasNext=this.gg=!1;this.J=this.H=this.A=this.C=0;this.B=window.NaN;this.D=!1;this.reset(a)},N7=function(a){a.audioTrackId=null;
a.o=null;a.playerState=-1;a.gg=!1;a.hasNext=!1;a.G=0;a.F=(0,g.H)();a.C=0;a.A=0;a.H=0;a.J=0;a.B=window.NaN;a.D=!1},O7=function(a){return a.sb()?((0,g.H)()-a.F)/1E3:0},P7=function(a,b){a.G=b;
a.F=(0,g.H)()},Q7=function(a){switch(a.playerState){case 1:case 1081:return((0,g.H)()-a.F)/1E3+a.G;
case -1E3:return 0}return a.G},R7=function(a,b,c){var d=a.videoId;
a.videoId=b;a.index=c;b!=d&&N7(a)},S7=function(a){var b={};
b.index=a.index;b.listId=a.listId;b.videoId=a.videoId;b.playerState=a.playerState;b.volume=a.volume;b.muted=a.muted;b.audioTrackId=a.audioTrackId;b.trackData=g.dc(a.o);b.hasPrevious=a.gg;b.hasNext=a.hasNext;b.playerTime=a.G;b.playerTimeAt=a.F;b.seekableStart=a.C;b.seekableEnd=a.A;b.duration=a.H;b.loadedTime=a.J;b.liveIngestionTime=a.B;return b},U7=function(a,b){g.iG.call(this);
this.o=0;this.C=a;this.F=[];this.D=new g.TC;this.B=this.A=null;this.J=(0,g.B)(this.yS,this);this.G=(0,g.B)(this.mn,this);this.H=(0,g.B)(this.xS,this);this.K=(0,g.B)(this.LS,this);var c=0;a?(c=a.getProxyState(),3!=c&&(a.subscribe("proxyStateChange",this.Tx,this),SGa(this))):c=3;0!=c&&(b?this.Tx(c):g.AE((0,g.B)(function(){this.Tx(c)},this),0));
var d=QGa();d&&T7(this,d);this.subscribe("yt-remote-cast2-session-change",this.K)},V7=function(a){return new M7(a.C.getPlayerContextData())},SGa=function(a){(0,g.D)("nowAutoplaying autoplayDismissed remotePlayerChange remoteQueueChange autoplayModeChange autoplayUpNext previousNextChange".split(" "),function(a){this.F.push(this.C.subscribe(a,g.Ca(this.aV,a),this))},a)},TGa=function(a){(0,g.D)(a.F,function(a){this.C.unsubscribeByKey(a)},a);
a.F.length=0},W7=function(a,b){50>a.D.zc()&&g.VC(a.D,b)},Y7=function(a,b,c){var d=V7(a);
P7(d,c);-1E3!=d.playerState&&(d.playerState=b);X7(a,d)},Z7=function(a,b,c){a.C.sendMessage(b,c)},X7=function(a,b){TGa(a);
a.C.setPlayerContextData(S7(b));SGa(a)},T7=function(a,b){a.B&&(a.B.removeUpdateListener(a.J),a.B.removeMediaListener(a.G),a.mn(null));
a.B=b;a.B&&(d7("CP","Setting cast session: "+a.B.sessionId),a.B.addUpdateListener(a.J),a.B.addMediaListener(a.G),a.B.media.length&&a.mn(a.B.media[0]))},UGa=function(a){var b=a.A.media,c=a.A.customData;
if(b&&c){var d=V7(a);b.contentId!=d.videoId&&d7("CP","Cast changing video to: "+b.contentId);d.videoId=b.contentId;d.playerState=c.playerState;P7(d,a.A.getEstimatedTime());X7(a,d)}else d7("CP","No cast media video. Ignoring state update.")},$7=function(a,b,c){return(0,g.B)(function(a){this.sc("Failed to "+b+" with cast v2 channel. Error code: "+a.code);
a.code!=window.chrome.cast.ErrorCode.TIMEOUT&&(this.sc("Retrying "+b+" using MDx browser channel."),Z7(this,b,c))},a)},a8=function(a,b,c){g.iG.call(this);
this.D=window.NaN;this.O=!1;this.K=this.J=this.L=this.M=window.NaN;this.U=[];this.C=this.G=this.B=this.jb=this.o=null;this.ra=a;this.U.push(g.SF(window,"beforeunload",(0,g.B)(this.AL,this)));this.A=[];this.jb=new M7;this.ba=b.id;this.o=VGa(this,c);this.o.subscribe("handlerOpened",this.CS,this);this.o.subscribe("handlerClosed",this.zS,this);this.o.subscribe("handlerError",this.AS,this);this.o.subscribe("handlerMessage",this.BS,this);hGa(this.o,b.token);this.subscribe("remoteQueueChange",function(){var a=
this.jb.videoId;g.IH()&&g.FH("yt-remote-session-video-id",a)},this)},b8=function(a){d7("conn",a)},VGa=function(a,b){return new Y6(a7(a.ra,"/bc"),b)},c8=function(a,b){a.V("proxyStateChange",b)},WGa=function(a){a.D=g.AE((0,g.B)(function(){b8("Connecting timeout");
this.F(1)},a),2E4)},d8=function(a){g.CE(a.D);
a.D=window.NaN},e8=function(a){g.CE(a.M);
a.M=window.NaN},XGa=function(a){f8(a);
a.L=g.AE((0,g.B)(function(){g8(this,"getNowPlaying")},a),2E4)},f8=function(a){g.CE(a.L);
a.L=window.NaN},ZGa=function(a,b){b&&(d8(a),e8(a));
b==(Z6(a.o)&&(0,window.isNaN)(a.D))?b&&(c8(a,1),g8(a,"getSubtitlesTrack")):b?(a.Z()&&a.jb.reset(),c8(a,1),g8(a,"getNowPlaying"),YGa(a)):a.F(1)},$Ga=function(a,b){var c=b.params.videoId;
delete b.params.videoId;c==a.jb.videoId&&(g.Yb(b.params)?a.jb.o=null:a.jb.o=b.params,a.V("remotePlayerChange"))},aHa=function(a,b){var c=b.params.videoId||b.params.video_id,d=(0,window.parseInt)(b.params.currentIndex,10);
a.jb.listId=b.params.listId||a.jb.listId;R7(a.jb,c,d);a.V("remoteQueueChange")},cHa=function(a,b){b.params=b.params||{};
aHa(a,b);bHa(a,b);a.V("autoplayDismissed")},bHa=function(a,b){var c=(0,window.parseInt)(b.params.currentTime||b.params.current_time,10);
P7(a.jb,(0,window.isNaN)(c)?0:c);c=(0,window.parseInt)(b.params.state,10);c=(0,window.isNaN)(c)?-1:c;-1==c&&-1E3==a.jb.playerState&&(c=-1E3);a.jb.playerState=c;c=Number(b.params.loadedTime);a.jb.J=(0,window.isNaN)(c)?0:c;c=Number(b.params.duration);a.jb.H=(0,window.isNaN)(c)?0:c;c=a.jb;var d=Number(b.params.liveIngestionTime);c.B=d;c.D=(0,window.isNaN)(d)?!1:!0;c=a.jb;d=Number(b.params.seekableStartTime);var e=Number(b.params.seekableEndTime);c.C=(0,window.isNaN)(d)?0:d;c.A=(0,window.isNaN)(e)?0:
e;1==a.jb.playerState?XGa(a):f8(a);a.V("remotePlayerChange")},dHa=function(a,b){if(-1E3!=a.jb.playerState){var c=1085;
switch((0,window.parseInt)(b.params.adState,10)){case 1:c=1081;break;case 2:c=1084;break;case 0:c=1083}a.jb.playerState=c;c=(0,window.parseInt)(b.params.currentTime,10);P7(a.jb,(0,window.isNaN)(c)?0:c);a.V("remotePlayerChange")}},eHa=function(a,b){var c="true"==b.params.muted;
a.jb.volume=(0,window.parseInt)(b.params.volume,10);a.jb.muted=c;a.V("remotePlayerChange")},fHa=function(a,b){a.G=b.params.videoId;
a.V("nowAutoplaying",(0,window.parseInt)(b.params.timeout,10))},gHa=function(a,b){var c="true"==b.params.hasNext;
a.jb.gg="true"==b.params.hasPrevious;a.jb.hasNext=c;a.V("previousNextChange")},YGa=function(a){g.CE(a.K);
a.K=g.AE((0,g.B)(a.F,a,1),864E5)},g8=function(a,b,c){c?b8("Sending: action="+b+", params="+g.Jg(c)):b8("Sending: action="+b);
a.o.sendMessage(b,c)},h8=function(a){h7.call(this,"ScreenServiceProxy");
this.md=a;this.A=[];this.A.push(this.md.$_s("screenChange",(0,g.B)(this.xY,this)));this.A.push(this.md.$_s("onlineScreenChange",(0,g.B)(this.zU,this)))},lHa=function(a){var b={device:"Desktop",
app:"youtube-desktop"};b=g.pE("MDX_CONFIG")||b;lFa();p6();i8||(i8=new $6(b?b.loungeApiHost:void 0),tFa()&&(i8.o="/api/loungedev"));j8||(j8=g.y("yt.mdx.remote.deferredProxies_")||[],g.ta("yt.mdx.remote.deferredProxies_",j8,void 0));hHa();var c=k8();if(!c){var d=new q7(i8);g.ta("yt.mdx.remote.screenService_",d,void 0);c=k8();var e=!1,f=void 0,k=void 0,l=!1;b&&(e=!!b.loadCastApiSetupScript,f=b.appId,k=b.theme,l=!!b.disableDial);MGa(a,d,function(a){a?l8()&&L7(l8(),"YouTube TV"):d.subscribe("onlineScreenChange",
function(){g.zG("yt-remote-receiver-availability-change")})},e,f,k,l)}b&&!g.y("yt.mdx.remote.initialized_")&&(g.ta("yt.mdx.remote.initialized_",!0,void 0),m8("Initializing: "+g.Jg(b)),n8.push(g.vG("yt-remote-cast2-availability-change",function(){g.zG("yt-remote-receiver-availability-change")})),n8.push(g.vG("yt-remote-cast2-receiver-selected",function(){o8(null);
g.zG("yt-remote-auto-connect","cast-selector-receiver")})),n8.push(g.vG("yt-remote-cast2-receiver-resumed",function(){g.zG("yt-remote-receiver-resumed","cast-selector-receiver")})),n8.push(g.vG("yt-remote-cast2-session-change",iHa)),n8.push(g.vG("yt-remote-connection-change",function(a){a?L7(l8(),"YouTube TV"):p8()||(L7(null,null),PGa())})),a=q8(),b.isAuto&&(a.id+="#dial"),g.xE("desktop_enable_autoplay")&&(a.capabilities=["atp"]),a.name=b.device,a.app=b.app,(k=b.theme)&&(a.theme=k),m8(" -- with channel params: "+
g.Jg(a)),jHa(a),c.start(),l8()||kHa())},nHa=function(){var a=mHa();
I7()&&g.GH("yt-remote-cast-available")&&a.push({key:"cast-selector-receiver",name:"Cast..."});return a},mHa=function(){var a=k8().md.$_gos();
var b=r8();b&&s8()&&(k6(a,b)||a.push(b));return kFa(a)},t8=function(){var a=oHa();
!a&&I7()&&OGa()&&(a={key:"cast-selector-receiver",name:OGa()});return a},oHa=function(){var a=mHa(),b=r8();
b||(b=p8());return g.Ja(a,function(a){return b&&g6(b,a.key)?!0:!1})},r8=function(){var a=l8();
if(!a)return null;var b=k8().De();return l6(b,a)},iHa=function(a){m8("remote.onCastSessionChange_: "+h6(a));
if(a){var b=r8();b&&b.id==a.id?L7(b.id,"YouTube TV"):(b&&u8(),v8(a,1))}else s8()&&u8()},u8=function(){J7()?G7().stopSession():E7("stopSession called before API ready.");
var a=s8();a&&(a.disconnect(1),w8(null))},x8=function(){var a=s8();
return!!a&&3!=a.getProxyState()},m8=function(a){d7("remote",a)},k8=function(){if(!y8){var a=g.y("yt.mdx.remote.screenService_");
y8=a?new h8(a):null}return y8},l8=function(){return g.y("yt.mdx.remote.currentScreenId_")},pHa=function(a){g.ta("yt.mdx.remote.currentScreenId_",a,void 0)},qHa=function(){return g.y("yt.mdx.remote.connectData_")},o8=function(a){g.ta("yt.mdx.remote.connectData_",a,void 0)},s8=function(){return g.y("yt.mdx.remote.connection_")},w8=function(a){var b=s8();
o8(null);a||pHa("");g.ta("yt.mdx.remote.connection_",a,void 0);j8&&((0,g.D)(j8,function(b){b(a)}),j8.length=0);
b&&!a?g.zG("yt-remote-connection-change",!1):!b&&a&&g.zG("yt-remote-connection-change",!0)},p8=function(){var a=g.IH();
if(!a)return null;var b=k8().De();return l6(b,a)},v8=function(a,b){r8()&&r8();
pHa(a.id);var c=new a8(i8,a,q8());c.connect(b,qHa());c.subscribe("beforeDisconnect",function(a){g.zG("yt-remote-before-disconnect",a)});
c.subscribe("beforeDispose",function(){s8()&&w8(null)});
w8(c)},kHa=function(){var a=p8();
a?(m8("Resume connection to: "+h6(a)),v8(a,0)):(q6(),PGa(),m8("Skipping connecting because no session screen found."))},hHa=function(){var a=q8();
if(g.Yb(a)){a=o6();var b=g.GH("yt-remote-session-name")||"",c=g.GH("yt-remote-session-app")||"";a={device:"REMOTE_CONTROL",id:a,name:b,app:c,mdxVersion:3};g.ta("yt.mdx.remote.channelParams_",a,void 0)}},q8=function(){return g.y("yt.mdx.remote.channelParams_")||{}},jHa=function(a){a?(g.FH("yt-remote-session-app",a.app),g.FH("yt-remote-session-name",a.name)):(g.HH("yt-remote-session-app"),g.HH("yt-remote-session-name"));
g.ta("yt.mdx.remote.channelParams_",a,void 0)},z8=function(a,b,c){g.M.call(this);
this.D=a;this.A=b;this.B=new g.fG(this);g.O(this,this.B);this.B.R(b,"onCaptionsTrackListChanged",this.ST);this.B.R(b,"captionschanged",this.wS);this.B.R(b,"captionssettingschanged",this.sG);this.B.R(b,"videoplayerreset",this.Cq);this.B.R(b,"mdxautoplaycancel",this.xK);this.U=this.B.R(b,"onVolumeChange",this.qE);this.H=!1;this.o=c;c.subscribe("proxyStateChange",this.FE,this);c.subscribe("remotePlayerChange",this.qn,this);c.subscribe("remoteQueueChange",this.Cq,this);c.subscribe("autoplayUpNext",this.cE,
this);c.subscribe("previousNextChange",this.CE,this);c.subscribe("nowAutoplaying",this.uE,this);c.subscribe("autoplayDismissed",this.bE,this);this.suggestion=null;this.J=new g.nP(64);this.C=new g.Gu(this.oG,500,this);g.O(this,this.C);this.F=new g.Gu(this.pG,1E3,this);g.O(this,this.F);this.L=new y6(this.YX,0,this);g.O(this,this.L);this.G={};this.M=new g.Gu(this.QG,1E3,this);g.O(this,this.M);this.K=new g.Al(this.vQ,1E3,this);g.O(this,this.K);this.O=g.A;this.sG();this.Cq();this.qn()},A8=function(a,b){var c=
a.D,d=a.A.getVideoData().lengthSeconds;
c.J=b||0;c.player.V("progresssync",b,d)},rHa=function(a){A8(a,0);
a.C.stop();B8(a,new g.nP(64))},D8=function(a,b){if(C8(a)&&!a.H){var c=null;
b&&(c={style:a.A.bj()},g.fc(c,b));a.o.cG(a.A.getVideoData(1).videoId,c);a.G=V7(a.o).o}},E8=function(a,b){var c=a.A.qg();
if(c){var d=c.Be();var e=c.listId.toString()}var f=a.A.getVideoData(1);c=a.o;var k=f.videoId,l=d;d=f.playerParams;var m=f.ik;f=aFa(f);var n=V7(c);l=l||0;var p={videoId:k,currentIndex:l};R7(n,k,l);g.u(b)&&(P7(n,b),p.currentTime=b);g.u(e)&&(p.listId=e);null!=d&&(p.playerParams=d);null!=m&&(p.clickTrackingParams=m);null!=f&&(p.locationInfo=g.Jg(f));Z7(c,"setPlaylist",p);e||X7(c,n);B8(a,new g.nP(1))},sHa=function(a,b){if(b){var c=a.A.Cc("captions","tracklist",{DB:1});
c&&c.length?(a.A.Yd("captions","track",b),a.H=!1):(a.A.Ak("captions"),a.H=!0)}else a.A.Yd("captions","track",{})},C8=function(a){return V7(a.o).videoId==a.A.getVideoData(1).videoId},B8=function(a,b){a.F.stop();
var c=a.J;if(!g.tP(c,b)){var d=g.W(b,2);d!=g.W(a.J,2)&&g.IT(a.A,d);a.J=b;tHa(a.D,c,b)}},F8=function(a){g.V.call(this,{I:"div",
N:"ytp-remote",P:[{I:"div",N:"ytp-remote-display-status",P:[{I:"div",N:"ytp-remote-display-status-icon",P:[g.osa()]},{I:"div",N:"ytp-remote-display-status-text",da:"{{statustext}}"}]}]});this.B=new g.HU(this,250);g.O(this,this.B);this.C=a;this.R(a,"presentingplayerstatechange",this.D);uHa(this,g.ET(a))},uHa=function(a,b){if(3==a.C.Sa()){var c={RECEIVER_NAME:a.C.Cc("remote","currentReceiver").name};
c=g.W(b,128)?g.zU("Error on $RECEIVER_NAME",c):b.sb()||g.W(b,4)?g.zU("Playing on $RECEIVER_NAME",c):g.zU("Connected to $RECEIVER_NAME",c);a.updateValue("statustext",c);a.B.show()}else a.B.hide()},G8=function(a,b){g.hY.call(this,"Play on",0,a,b);
this.B=a;this.J={};this.R(a,"onMdxReceiversChange",this.L);this.R(a,"presentingplayerstatechange",this.L);this.L()},H8=function(a){g.iU.call(this,a);
this.A={key:j6(),name:"This computer"};this.C=null;this.D=[];this.K=this.o=null;this.H=[this.A];this.B=this.A;this.F=new g.nP(64);this.J=0;this.G=-1;if(!g.uN(g.X(this.player))){a=this.player;var b=g.sI(a);b&&(b=b.an())&&(b=new G8(a,b),g.O(this,b));b=new F8(a);g.O(this,b);g.XT(a,b.element,4)}},tHa=function(a,b,c){a.F=c;
a.player.V("presentingplayerstatechange",new g.yP(c,b))},I8=function(a,b){if(b.key!=a.B.key)if(b.key==a.A.key)u8();
else{a.B=b;var c=a.player.getPlaylistId();var d=a.player.getVideoData(1);var e=d.videoId;if(c||e){var f=a.player.qg();if(f){var k=[];for(var l=0;l<f.getLength();l++)k[l]=f.Oa(l).videoId}else k=[e];f=a.player.getCurrentTime(1);c={videoIds:k,listId:c,videoId:e,playerParams:d.playerParams,clickTrackingParams:d.ik,index:Math.max(a.player.GC(),0),currentTime:0==f?void 0:f};(d=aFa(d))&&(c.locationInfo=d);d=c}else d=null;m8("Connecting to: "+g.Jg(b));"cast-selector-receiver"==b.key?(o8(d||null),J7()?G7().setLaunchParams(d||
null):E7("setLaunchParams called before ready.")):!d&&x8()&&l8()==b.key?g.zG("yt-remote-connection-change",!0):(u8(),o8(d||null),d=k8().De(),(d=l6(d,b.key))&&v8(d,1))}},JFa={"\x00":"\\0",
"\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\x0B",'"':'\\"',"\\":"\\\\","<":"<"},I6={"'":"\\'"},vHa={},gFa={XZ:"atp",D4:"ska",U3:"que",g3:"mus",z4:"sus",k1:"dsp"};
e6.prototype.So=function(){var a=new e6({id:this.id,name:this.name,app:this.app,type:this.type,user:this.username,userAvatarUri:this.avatar,obfuscatedGaiaId:this.obfuscatedGaiaId,theme:this.theme,capabilities:Array.from(this.capabilities.values()).join(","),experiments:Array.from(this.experiments.values()).join(",")});a.B=this.B;a.A=this.A;a.o=this.o};
var r6,n6="",v6=s6("loadGamesSDK")?"/cast_game_sender.js":"/cast_sender.js",BFa=s6("loadCastFramework")||s6("loadCastApplicationFramework"),LGa=["pkedcjkdefgpdelpbcmbmeomcjbeemfm","enhhojjnijigcajfphajepfemndkmdlo"];g.C(y6,g.M);g.h=y6.prototype;g.h.vL=function(a){this.C=arguments;this.o=!1;this.Ga?this.B=(0,g.H)()+this.Dd:this.Ga=g.Eg(this.D,this.Dd)};
g.h.stop=function(){this.Ga&&(g.Fg(this.Ga),this.Ga=null);this.B=null;this.o=!1;this.C=[]};
g.h.pause=function(){++this.A};
g.h.resume=function(){this.A&&(--this.A,!this.A&&this.o&&(this.o=!1,this.F.apply(null,this.C)))};
g.h.X=function(){this.stop();y6.fa.X.call(this)};
g.h.wL=function(){this.B?(this.Ga=g.Eg(this.D,this.B-(0,g.H)()),this.B=null):(this.Ga=null,this.A?this.o=!0:(this.o=!1,this.F.apply(null,this.C)))};z6.prototype.stringify=function(a){return g.x.JSON.stringify(a,void 0)};
z6.prototype.parse=function(a){return g.x.JSON.parse(a,void 0)};g.h=A6.prototype;g.h.Ii=null;g.h.Of=!1;g.h.pl=null;g.h.Lx=null;g.h.Tk=null;g.h.Yj=null;g.h.zh=null;g.h.Zh=null;g.h.lj=null;g.h.Vc=null;g.h.Mn=0;g.h.Pf=null;g.h.Er=null;g.h.Ah=null;g.h.km=-1;g.h.HF=!0;g.h.ri=!1;g.h.Ot=0;g.h.Qq=null;var HFa={},D6={};g.h=A6.prototype;g.h.setTimeout=function(a){this.C=a};
g.h.ZW=function(a){a=a.target;var b=this.Qq;b&&3==g.Ox(a)?b.gm():this.cH(a)};
g.h.cH=function(a){try{if(a==this.Vc)a:{var b=g.Ox(this.Vc),c=this.Vc.A,d=this.Vc.getStatus();if(g.Kd&&!g.tc(10)||g.Md&&!g.sc("420+")){if(4>b)break a}else if(3>b||3==b&&!g.sf&&!g.Sx(this.Vc))break a;this.ri||4!=b||7==c||(8==c||0>=d?this.o.Hf(3):this.o.Hf(2));K6(this);var e=this.Vc.getStatus();this.km=e;var f=g.Sx(this.Vc);(this.Of=200==e)?(4==b&&G6(this),this.D?(IFa(this,b,f),g.sf&&this.Of&&3==b&&(this.Y.W(this.A,"tick",this.WW),this.A.start())):F6(this,f),this.Of&&!this.ri&&(4==b?this.o.Aq(this):
(this.Of=!1,C6(this)))):(400==e&&0<f.indexOf("Unknown SID")?(this.Ah=3,E6(13)):(this.Ah=0,E6(14)),G6(this),H6(this))}}catch(k){this.Vc&&g.Sx(this.Vc)}finally{}};
g.h.WW=function(){var a=g.Ox(this.Vc),b=g.Sx(this.Vc);this.Mn<b.length&&(K6(this),IFa(this,a,b),this.Of&&4!=a&&C6(this))};
g.h.cW=function(a){J6((0,g.B)(this.bW,this,a),0)};
g.h.bW=function(a){this.ri||(K6(this),F6(this,a),C6(this))};
g.h.OE=function(a){J6((0,g.B)(this.aW,this,a),0)};
g.h.aW=function(a){this.ri||(G6(this),this.Of=a,this.o.Aq(this),this.o.Hf(4))};
g.h.cancel=function(){this.ri=!0;G6(this)};
g.h.sW=function(){this.pl=null;var a=(0,g.H)();0<=a-this.Lx?(2!=this.Yj&&this.o.Hf(3),G6(this),this.Ah=2,E6(18),H6(this)):LFa(this,this.Lx-a)};g.h=OFa.prototype;g.h.Mt=null;g.h.Je=null;g.h.Rq=!1;g.h.WA=null;g.h.gp=null;g.h.Hu=null;g.h.Nt=null;g.h.bf=null;g.h.Pg=-1;g.h.jm=null;g.h.vl=null;g.h.connect=function(a){this.Nt=a;a=M6(this.o,null,this.Nt);E6(3);this.WA=(0,g.H)();var b=this.o.H;null!=b?(this.jm=b[0],(this.vl=b[1])?(this.bf=1,PFa(this)):(this.bf=2,O6(this))):(d6(a,"MODE","init"),this.Je=new A6(this,void 0,void 0,void 0),this.Je.Ii=this.Mt,B6(this.Je,a,!1,null,!0),this.bf=0)};
g.h.yK=function(a){if(a)this.bf=2,O6(this);else{E6(4);var b=this.o;b.cg=b.ph.Pg;V6(b,9)}a&&this.Hf(2)};
g.h.Ts=function(a){return this.o.Ts(a)};
g.h.abort=function(){this.Je&&(this.Je.cancel(),this.Je=null);this.Pg=-1};
g.h.VA=function(){return!1};
g.h.GE=function(a,b){this.Pg=a.km;if(0==this.bf)if(b){try{var c=this.A.parse(b)}catch(d){c=this.o;c.cg=this.Pg;V6(c,2);return}this.jm=c[0];this.vl=c[1]}else c=this.o,c.cg=this.Pg,V6(c,2);else if(2==this.bf)if(this.Rq)E6(7),this.Hu=(0,g.H)();else if("11111"==b){if(E6(6),this.Rq=!0,this.gp=(0,g.H)(),c=this.gp-this.WA,!g.Kd||g.tc(10)||500>c)this.Pg=200,this.Je.cancel(),E6(12),N6(this.o,this,!0)}else E6(8),this.gp=this.Hu=(0,g.H)(),this.Rq=!1};
g.h.Aq=function(){this.Pg=this.Je.km;if(this.Je.Of)0==this.bf?this.vl?(this.bf=1,PFa(this)):(this.bf=2,O6(this)):2==this.bf&&((!g.Kd||g.tc(10)?!this.Rq:200>this.Hu-this.gp)?(E6(11),N6(this.o,this,!1)):(E6(12),N6(this.o,this,!0)));else{0==this.bf?E6(9):2==this.bf&&E6(10);var a=this.o;a.cg=this.Pg;V6(a,2)}};
g.h.Dn=function(){return this.o.Dn()};
g.h.isActive=function(){return this.o.isActive()};
g.h.Hf=function(a){this.o.Hf(a)};g.h=P6.prototype;g.h.Ll=null;g.h.je=null;g.h.yc=null;g.h.Lt=null;g.h.kp=null;g.h.vz=null;g.h.zp=null;g.h.jn=0;g.h.PR=0;g.h.Cd=null;g.h.th=null;g.h.Dg=null;g.h.wi=null;g.h.ph=null;g.h.Cr=null;g.h.rk=-1;g.h.PB=-1;g.h.cg=-1;g.h.Pj=0;g.h.Ej=0;g.h.ti=8;var W6=new g.Sf;g.C(RFa,g.qf);g.C(SFa,g.qf);g.C(TFa,g.qf);g.h=P6.prototype;g.h.connect=function(a,b,c,d,e){E6(0);this.Lt=b;this.Ll=c||{};d&&g.u(e)&&(this.Ll.OSID=d,this.Ll.OAID=e);this.F?(J6((0,g.B)(this.Pz,this,a),100),XFa(this)):this.Pz(a)};
g.h.Pz=function(a){this.ph=new OFa(this);this.ph.Mt=null;this.ph.A=this.D;this.ph.connect(a)};
g.h.VA=function(){return 0==this.o};
g.h.ME=function(a){this.th=null;$Fa(this,a)};
g.h.LE=function(){this.Dg=null;this.yc=new A6(this,this.B,"rpc",this.G);this.yc.Ii=null;this.yc.Ot=0;var a=this.vz.clone();g.gn(a,"RID","rpc");g.gn(a,"SID",this.B);g.gn(a,"CI",this.Cr?"0":"1");g.gn(a,"AID",this.rk);Q6(this,a);if(!g.Kd||g.tc(10))g.gn(a,"TYPE","xmlhttp"),B6(this.yc,a,!0,this.zp,!1);else{g.gn(a,"TYPE","html");var b=this.yc,c=!!this.zp;b.Yj=3;b.zh=c6(a.clone());KFa(b,c)}};
g.h.GE=function(a,b){if(0!=this.o&&(this.yc==a||this.je==a))if(this.cg=a.km,this.je==a&&3==this.o)if(7<this.ti){try{var c=this.D.parse(b)}catch(f){c=null}if(g.wa(c)&&3==c.length)if(0==c[0])a:{if(!this.Dg){if(this.yc)if(this.yc.Tk+3E3<this.je.Tk)S6(this),this.yc.cancel(),this.yc=null;else break a;U6(this);E6(19)}}else this.PB=c[1],0<this.PB-this.rk&&37500>c[2]&&this.Cr&&0==this.Ej&&!this.wi&&(this.wi=J6((0,g.B)(this.rS,this),6E3));else V6(this,11)}else b!=vHa.Z_.o&&V6(this,11);else if(this.yc==a&&
S6(this),!g.F(b)){c=this.D.parse(b);g.wa(c);for(var d=0;d<c.length;d++){var e=c[d];this.rk=e[0];e=e[1];2==this.o?"c"==e[0]?(this.B=e[1],this.zp=e[2],e=e[3],null!=e?this.ti=e:this.ti=6,this.o=3,this.Cd&&this.Cd.Hz(),this.vz=M6(this,this.Dn()?this.zp:null,this.Lt),aGa(this)):"stop"==e[0]&&V6(this,7):3==this.o&&("stop"==e[0]?V6(this,7):"noop"!=e[0]&&this.Cd&&this.Cd.Gz(e),this.Ej=0)}}};
g.h.rS=function(){null!=this.wi&&(this.wi=null,this.yc.cancel(),this.yc=null,U6(this),E6(20))};
g.h.Aq=function(a){if(this.yc==a){S6(this);this.yc=null;var b=2}else if(this.je==a)this.je=null,b=1;else return;this.cg=a.km;if(0!=this.o)if(a.Of)1==b?(b=(0,g.H)()-a.Tk,W6.dispatchEvent(new SFa(W6,a.lj?a.lj.length:0,b,this.Pj)),R6(this),this.C.length=0):aGa(this);else{var c=a.Ah,d;if(!(d=3==c||7==c||0==c&&0<this.cg)){if(d=1==b)this.je||this.th||1==this.o||2<=this.Pj?d=!1:(this.th=J6((0,g.B)(this.ME,this,a),bGa(this,this.Pj)),this.Pj++,d=!0);d=!(d||2==b&&U6(this))}if(d)switch(c){case 1:V6(this,5);
break;case 4:V6(this,10);break;case 3:V6(this,6);break;case 7:V6(this,12);break;default:V6(this,2)}}};
g.h.WK=function(a){if(!g.Na(arguments,this.o))throw Error("Unexpected channel state: "+this.o);};
g.h.OX=function(a){a?E6(2):(E6(1),cGa(this,8))};
g.h.Ts=function(a){if(a)throw Error("Can't create secondary domain capable XhrIo object.");a=new g.Ix;a.H=!1;return a};
g.h.isActive=function(){return!!this.Cd&&this.Cd.isActive(this)};
g.h.Hf=function(a){W6.dispatchEvent(new TFa(W6,a))};
g.h.Dn=function(){return!(!g.Kd||g.tc(10))};
g.h=dGa.prototype;g.h.Hz=function(){};
g.h.Gz=function(){};
g.h.Fz=function(){};
g.h.Gs=function(){};
g.h.DA=function(){return{}};
g.h.isActive=function(){return!0};g.C(X6,g.M);g.h=X6.prototype;g.h.TV=function(){this.Dd=Math.min(3E5,2*this.Dd);this.B();this.A&&this.start()};
g.h.start=function(){var a=this.Dd+15E3*Math.random();g.Hu(this.o,a);this.A=(0,g.H)()+a};
g.h.stop=function(){this.o.stop();this.A=0};
g.h.isActive=function(){return this.o.isActive()};
g.h.reset=function(){this.o.stop();this.Dd=5E3};g.C(Y6,dGa);g.h=Y6.prototype;g.h.subscribe=function(a,b,c){return this.B.subscribe(a,b,c)};
g.h.unsubscribe=function(a,b,c){return this.B.unsubscribe(a,b,c)};
g.h.ce=function(a){return this.B.ce(a)};
g.h.V=function(a,b){return this.B.V.apply(this.B,arguments)};
g.h.dispose=function(){this.K||(this.K=!0,g.of(this.B),gGa(this),g.of(this.A),this.A=null)};
g.h.ia=function(){return this.K};
g.h.connect=function(a,b,c){if(!this.o||2!=this.o.o){this.J="";this.A.stop();this.D=a||null;this.C=b||0;a=this.L+"/test";b=this.L+"/bind";var d=new P6(c?c.firstTestResults:null,c?c.secondTestResults:null,this.M),e=this.o;e&&(e.Cd=null);d.Cd=this;this.o=d;e?this.o.connect(a,b,this.F,e.B,e.rk):c?this.o.connect(a,b,this.F,c.sessionId,c.arrayId):this.o.connect(a,b,this.F)}};
g.h.sendMessage=function(a,b){var c={_sc:a};b&&g.fc(c,b);this.A.isActive()||2==(this.o?this.o.o:0)?this.G.push(c):Z6(this)&&YFa(this.o,c)};
g.h.Hz=function(){this.A.reset();this.D=null;this.C=0;if(this.G.length){var a=this.G;this.G=[];for(var b=0,c=a.length;b<c;++b)YFa(this.o,a[b])}this.V("handlerOpened")};
g.h.Fz=function(a){var b=2==a&&401==this.o.cg;4==a||b||this.A.start();this.V("handlerError",a)};
g.h.Gs=function(a){if(!this.A.isActive())this.V("handlerClosed");else if(a)for(var b=0,c=a.length;b<c;++b){var d=a[b].map;d&&this.G.push(d)}};
g.h.DA=function(){var a={v:2};this.J&&(a.gsessionid=this.J);0!=this.C&&(a.ui=""+this.C);0!=this.H&&(a.ui=""+this.H);this.D&&g.fc(a,this.D);return a};
g.h.Gz=function(a){"S"==a[0]?this.J=a[1]:"gracefulReconnect"==a[0]?(this.A.start(),WFa(this.o)):this.V("handlerMessage",new eGa(a[0],a[1]))};
g.h.tY=function(){this.A.isActive();var a=this.o,b=0;a.yc&&b++;a.je&&b++;0!=b||this.connect(this.D,this.C)};$6.prototype.C=function(a,b,c,d){b?a(d):a({text:c.responseText})};
$6.prototype.B=function(a,b){a(Error("Request error: "+b.status))};
$6.prototype.D=function(a){a(Error("request timed out"))};var oGa=(0,g.H)(),c7=null,f7=Array(50),e7=-1,g7=!1;g.C(h7,g.iG);h7.prototype.De=function(){return this.o};
h7.prototype.contains=function(a){return!!k6(this.o,a)};
h7.prototype.get=function(a){return a?l6(this.o,a):null};
h7.prototype.info=function(a){d7(this.G,a)};g.C(i7,g.iG);var wHa=[2E3,2E3,1E3,1E3,1E3,2E3,2E3,5E3,5E3,1E4];g.h=i7.prototype;g.h.start=function(){!this.o&&(0,window.isNaN)(this.Ga)&&this.iH()};
g.h.stop=function(){this.o&&(this.o.abort(),this.o=null);(0,window.isNaN)(this.Ga)||(g.CE(this.Ga),this.Ga=window.NaN)};
g.h.X=function(){this.stop();i7.fa.X.call(this)};
g.h.iH=function(){this.Ga=window.NaN;this.o=g.RE(a7(this.F,"/pairing/get_screen"),{method:"POST",Tb:{pairing_code:this.D},timeout:5E3,onSuccess:(0,g.B)(this.vY,this),onError:(0,g.B)(this.uY,this),Id:(0,g.B)(this.wY,this)})};
g.h.vY=function(a,b){this.o=null;var c=b.screen||{};c.dialId=this.B;c.name=this.C;this.V("pairingComplete",new f6(c))};
g.h.uY=function(a){this.o=null;a.status&&404==a.status?this.A>=wHa.length?this.V("pairingFailed",Error("DIAL polling timed out")):(a=wHa[this.A],this.Ga=g.AE((0,g.B)(this.iH,this),a),this.A++):this.V("pairingFailed",Error("Server error "+a.status))};
g.h.wY=function(){this.o=null;this.V("pairingFailed",Error("Server not responding"))};g.C(k7,h7);g.h=k7.prototype;g.h.start=function(){j7(this)&&this.V("screenChange");!g.GH("yt-remote-lounge-token-expiration")&&sGa(this);g.CE(this.A);this.A=g.AE((0,g.B)(this.start,this),1E4)};
g.h.add=function(a,b){j7(this);pGa(this,a);l7(this,!1);this.V("screenChange");b(a);a.token||sGa(this)};
g.h.remove=function(a,b){var c=j7(this);rGa(this,a)&&(l7(this,!1),c=!0);b(a);c&&this.V("screenChange")};
g.h.yr=function(a,b,c,d){var e=j7(this),f=this.get(a.id);f?(f.name!=b&&(f.name=b,l7(this,!1),e=!0),c(a)):d(Error("no such local screen."));e&&this.V("screenChange")};
g.h.X=function(){g.CE(this.A);k7.fa.X.call(this)};
g.h.KL=function(a){j7(this);var b=this.o.length;a=a&&a.screens||[];for(var c=0,d=a.length;c<d;++c){var e=a[c],f=this.get(e.screenId);f&&(f.token=e.loungeToken,--b)}l7(this,!b);b&&d7(this.G,"Missed "+b+" lounge tokens.")};
g.h.JL=function(a){d7(this.G,"Requesting lounge tokens failed: "+a)};g.C(n7,g.iG);g.h=n7.prototype;g.h.start=function(){var a=(0,window.parseInt)(g.GH("yt-remote-fast-check-period")||"0",10);(this.C=(0,g.H)()-144E5<a?0:a)?p7(this):(this.C=(0,g.H)()+3E5,g.FH("yt-remote-fast-check-period",this.C),this.Kw())};
g.h.isEmpty=function(){return g.Yb(this.o)};
g.h.update=function(){m7("Updating availability on schedule.");var a=this.F(),b=g.Ib(this.o,function(b,d){return b&&!!l6(a,d)},this);
o7(this,b)};
g.h.X=function(){g.CE(this.B);this.B=window.NaN;this.A&&(this.A.abort(),this.A=null);n7.fa.X.call(this)};
g.h.Kw=function(){g.CE(this.B);this.B=window.NaN;this.A&&this.A.abort();var a=vGa(this);if(g.Nb(a)){var b=a7(this.D,"/pairing/get_screen_availability");this.A=b7(this.D,b,{lounge_token:g.Qb(a).join(",")},(0,g.B)(this.AV,this,a),(0,g.B)(this.zV,this))}else o7(this,{}),p7(this)};
g.h.AV=function(a,b){this.A=null;var c=g.Qb(vGa(this));if(g.fb(c,g.Qb(a))){c=b.screens||[];for(var d={},e=0,f=c.length;e<f;++e)d[a[c[e].loungeToken]]="online"==c[e].status;o7(this,d);p7(this)}else this.sc("Changing Screen set during request."),this.Kw()};
g.h.zV=function(a){this.sc("Screen availability failed: "+a);this.A=null;p7(this)};
g.h.sc=function(a){d7("OnlineScreenService",a)};g.C(q7,h7);g.h=q7.prototype;g.h.start=function(){this.B.start();this.A.start();this.o.length&&(this.V("screenChange"),this.A.isEmpty()||this.V("onlineScreenChange"))};
g.h.add=function(a,b,c){this.B.add(a,b,c)};
g.h.remove=function(a,b,c){this.B.remove(a,b,c);this.A.update()};
g.h.yr=function(a,b,c,d){this.B.contains(a)?this.B.yr(a,b,c,d):(a="Updating name of unknown screen: "+a.name,d7(this.G,a),d(Error(a)))};
g.h.De=function(a){return a?this.o:g.Va(this.o,(0,g.Zd)(this.C,function(a){return!this.contains(a)},this))};
g.h.jH=function(){return(0,g.Zd)(this.De(!0),function(a){return!!this.A.o[a.id]},this)};
g.h.kH=function(a,b,c,d,e){this.info("getDialScreenByPairingCode "+a+" / "+b);var f=new i7(this.F,a,b,c);f.subscribe("pairingComplete",(0,g.B)(function(a){g.of(f);d(r7(this,a))},this));
f.subscribe("pairingFailed",function(a){g.of(f);e(a)});
f.start();return(0,g.B)(f.stop,f)};
g.h.yY=function(a,b,c,d){g.RE(a7(this.F,"/pairing/get_screen"),{method:"POST",Tb:{pairing_code:a},timeout:5E3,onSuccess:(0,g.B)(function(a,d){var e=new f6(d.screen||{});if(!e.name||zGa(this,e.name)){a:{var f=e.name;for(var m=2,n=b(f,m);zGa(this,n);){m++;if(20<m)break a;n=b(f,m)}f=n}e.name=f}c(r7(this,e))},this),
onError:(0,g.B)(function(a){d(Error("pairing request failed: "+a.status))},this),
Id:(0,g.B)(function(){d(Error("pairing request timed out."))},this)})};
g.h.X=function(){g.of(this.B);g.of(this.A);q7.fa.X.call(this)};
g.h.YL=function(){AGa(this);this.V("screenChange");this.A.update()};
q7.prototype.dispose=q7.prototype.dispose;g.C(t7,g.iG);g.h=t7.prototype;g.h.Bq=function(a){this.B=a;this.V("sessionScreen",this.B)};
g.h.Ie=function(a){this.ia()||(a&&u7(this,""+a),this.B=null,this.V("sessionScreen",null))};
g.h.info=function(a){d7(this.M,a)};
g.h.mH=function(){return null};
g.h.Tw=function(a){var b=this.A;a?(b.displayStatus=new window.chrome.cast.ReceiverDisplayStatus(a,[]),b.displayStatus.showStop=!0):b.displayStatus=null;window.chrome.cast.setReceiverDisplayStatus(b,(0,g.B)(function(){this.info("Updated receiver status for "+b.friendlyName+": "+a)},this),(0,g.B)(function(){u7(this,"Failed to update receiver status for: "+b.friendlyName)},this))};
g.h.X=function(){this.Tw("");t7.fa.X.call(this)};g.C(v7,t7);g.h=v7.prototype;g.h.Sw=function(a){if(this.o){if(this.o==a)return;u7(this,"Overriding cast sesison with new session object");this.o.removeUpdateListener(this.F);this.o.removeMessageListener("urn:x-cast:com.google.youtube.mdx",this.D)}this.o=a;this.o.addUpdateListener(this.F);this.o.addMessageListener("urn:x-cast:com.google.youtube.mdx",this.D);CGa(this)};
g.h.tk=function(a){this.info("launchWithParams no-op for Cast: "+g.Jg(a))};
g.h.stop=function(){this.o?this.o.stop((0,g.B)(function(){this.Ie()},this),(0,g.B)(function(){this.Ie(Error("Failed to stop receiver app."))},this)):this.Ie(Error("Stopping cast device witout session."))};
g.h.Tw=g.A;g.h.X=function(){this.info("disposeInternal");g.CE(this.C);this.C=0;this.o&&(this.o.removeUpdateListener(this.F),this.o.removeMessageListener("urn:x-cast:com.google.youtube.mdx",this.D));this.o=null;v7.fa.X.call(this)};
g.h.FW=function(a,b){if(!this.ia())if(b){var c=g.Cx(b);if(g.za(c)){var d=""+c.type;c=c.data||{};this.info("onYoutubeMessage_: "+d+" "+g.Jg(c));switch(d){case "mdxSessionStatus":BGa(this,c.screenId);break;default:u7(this,"Unknown youtube message: "+d)}}else u7(this,"Unable to parse message.")}else u7(this,"No data in message.")};
g.h.LA=function(a,b,c,d){yGa(this.J,this.A.label,a,this.A.friendlyName,(0,g.B)(function(e){e?b(e):0<=d?(u7(this,"Screen "+a+" appears to be offline. "+d+" retries left."),g.AE((0,g.B)(this.LA,this,a,b,c,d-1),300)):c(Error("Unable to fetch screen."))},this),c)};
g.h.mH=function(){return this.o};
g.h.zY=function(a){this.ia()||a||(u7(this,"Cast session died."),this.Ie())};g.C(w7,t7);g.h=w7.prototype;g.h.Sw=function(a){this.C=a;this.C.addUpdateListener(this.L)};
g.h.tk=function(a){this.D=a;this.G()};
g.h.stop=function(){this.o();this.o=g.A;g.CE(this.F);this.C?this.C.stop((0,g.B)(this.Ie,this,null),(0,g.B)(this.Ie,this,"Failed to stop DIAL device.")):this.Ie()};
g.h.X=function(){this.o();this.o=g.A;g.CE(this.F);this.C&&this.C.removeUpdateListener(this.L);this.C=null;w7.fa.X.call(this)};
g.h.CY=function(a){this.ia()||a||(u7(this,"DIAL session died."),this.o(),this.o=g.A,this.Ie())};
g.h.qu=function(a){this.K=j6();if(this.D){var b=new window.chrome.cast.DialLaunchResponse(!0,EGa(this));a(b);DGa(this)}else this.G=(0,g.B)(function(){g.CE(this.F);this.G=g.A;this.F=window.NaN;var b=new window.chrome.cast.DialLaunchResponse(!0,EGa(this));a(b);DGa(this)},this),this.F=g.AE((0,g.B)(function(){this.G()},this),100)};
g.h.lN=function(a,b,c){yGa(this.J,this.H.receiver.label,a,this.A.friendlyName,(0,g.B)(function(a){a&&a.token?(this.Bq(a),b(new window.chrome.cast.DialLaunchResponse(!1))):this.qu(b,c)},this),(0,g.B)(function(a){u7(this,"Failed to get DIAL screen: "+a);
this.qu(b,c)},this))};g.C(x7,t7);x7.prototype.stop=function(){this.Ie()};
x7.prototype.Sw=g.A;x7.prototype.tk=function(){g.CE(this.o);this.o=window.NaN;var a=l6(this.J.De(),this.A.label);a?this.Bq(a):this.Ie(Error("No such screen"))};
x7.prototype.X=function(){g.CE(this.o);this.o=window.NaN;x7.fa.X.call(this)};g.C(y7,g.iG);g.h=y7.prototype;
g.h.init=function(a,b){window.chrome.cast.timeout.requestSession=3E4;var c=new window.chrome.cast.SessionRequest(this.G);this.H||(c.dialRequest=new window.chrome.cast.DialRequest("YouTube"));var d=window.chrome.cast.AutoJoinPolicy.TAB_AND_ORIGIN_SCOPED,e=a?window.chrome.cast.DefaultActionPolicy.CAST_THIS_TAB:window.chrome.cast.DefaultActionPolicy.CREATE_SESSION;c=new window.chrome.cast.ApiConfig(c,(0,g.B)(this.IE,this),(0,g.B)(this.jV,this),d,e);c.customDialLaunchCallback=(0,g.B)(this.cT,this);window.chrome.cast.initialize(c,
(0,g.B)(function(){this.ia()||(window.chrome.cast.addReceiverActionListener(this.C),lGa(),this.A.subscribe("onlineScreenChange",(0,g.B)(this.lH,this)),this.B=GGa(this),window.chrome.cast.setCustomReceivers(this.B,g.A,(0,g.B)(function(a){this.sc("Failed to set initial custom receivers: "+g.Jg(a))},this)),this.V("yt-remote-cast2-availability-change",A7(this)),b(!0))},this),(0,g.B)(function(a){this.sc("Failed to initialize API: "+g.Jg(a));
b(!1)},this))};
g.h.xX=function(a,b){z7("Setting connected screen ID: "+a+" -> "+b);if(this.o){var c=this.o.B;if(!a||c&&c.id!=a)z7("Unsetting old screen status: "+this.o.A.friendlyName),B7(this,null)}if(a&&b){if(!this.o){c=l6(this.A.De(),a);if(!c){z7("setConnectedScreenStatus: Unknown screen.");return}var d=FGa(this,c);d||(z7("setConnectedScreenStatus: Connected receiver not custom..."),d=new window.chrome.cast.Receiver(c.uuid?c.uuid:c.id,c.name),d.receiverType=window.chrome.cast.ReceiverType.CUSTOM,this.B.push(d),
window.chrome.cast.setCustomReceivers(this.B,g.A,(0,g.B)(function(a){this.sc("Failed to set initial custom receivers: "+g.Jg(a))},this)));
z7("setConnectedScreenStatus: new active receiver: "+d.friendlyName);B7(this,new x7(this.A,d),!0)}this.o.Tw(b)}else z7("setConnectedScreenStatus: no screen.")};
g.h.yX=function(a){this.ia()?this.sc("Setting connection data on disposed cast v2"):this.o?this.o.tk(a):this.sc("Setting connection data without a session")};
g.h.BY=function(){this.ia()?this.sc("Stopping session on disposed cast v2"):this.o?(this.o.stop(),B7(this,null)):z7("Stopping non-existing session")};
g.h.requestSession=function(){window.chrome.cast.requestSession((0,g.B)(this.IE,this),(0,g.B)(this.FV,this))};
g.h.X=function(){this.A.unsubscribe("onlineScreenChange",(0,g.B)(this.lH,this));window.chrome&&window.chrome.cast&&window.chrome.cast.removeReceiverActionListener(this.C);g.Ta(g.y("yt.mdx.remote.debug.handlers_")||[],iGa);g.of(this.o);y7.fa.X.call(this)};
g.h.sc=function(a){d7("Controller",a)};
g.h.JE=function(a,b){this.o==a&&(b||B7(this,null),this.V("yt-remote-cast2-session-change",b))};
g.h.fV=function(a,b){if(!this.ia())if(a)switch(a.friendlyName=window.chrome.cast.unescape(a.friendlyName),z7("onReceiverAction_ "+a.label+" / "+a.friendlyName+"-- "+b),b){case window.chrome.cast.ReceiverAction.CAST:if(this.o)if(this.o.A.label!=a.label)z7("onReceiverAction_: Stopping active receiver: "+this.o.A.friendlyName),this.o.stop();else{z7("onReceiverAction_: Casting to active receiver.");this.o.B&&this.V("yt-remote-cast2-session-change",this.o.B);break}switch(a.receiverType){case window.chrome.cast.ReceiverType.CUSTOM:B7(this,
new x7(this.A,a));break;case window.chrome.cast.ReceiverType.DIAL:B7(this,new w7(this.A,a,this.F));break;case window.chrome.cast.ReceiverType.CAST:B7(this,new v7(this.A,a));break;default:this.sc("Unknown receiver type: "+a.receiverType)}break;case window.chrome.cast.ReceiverAction.STOP:this.o&&this.o.A.label==a.label?this.o.stop():this.sc("Stopping receiver w/o session: "+a.friendlyName)}else this.sc("onReceiverAction_ called without receiver.")};
g.h.cT=function(a){if(this.ia())return window.Promise.reject(Error("disposed"));var b=a.receiver;b.receiverType!=window.chrome.cast.ReceiverType.DIAL&&(this.sc("Not DIAL receiver: "+b.friendlyName),b.receiverType=window.chrome.cast.ReceiverType.DIAL);var c=this.o?this.o.A:null;if(!c||c.label!=b.label)return this.sc("Receiving DIAL launch request for non-clicked DIAL receiver: "+b.friendlyName),window.Promise.reject(Error("illegal DIAL launch"));if(c&&c.label==b.label&&c.receiverType!=window.chrome.cast.ReceiverType.DIAL){if(this.o.B)return z7("Reselecting dial screen."),
this.V("yt-remote-cast2-session-change",this.o.B),window.Promise.resolve(new window.chrome.cast.DialLaunchResponse(!1));this.sc('Changing CAST intent from "'+c.receiverType+'" to "dial" for '+b.friendlyName);B7(this,new w7(this.A,b,this.F))}b=this.o;b.H=a;return b.H.appState==window.chrome.cast.DialAppState.RUNNING?new window.Promise((0,g.B)(b.lN,b,(b.H.extraData||{}).screenId||null)):new window.Promise((0,g.B)(b.qu,b))};
g.h.IE=function(a){if(!this.ia()){z7("New cast session ID: "+a.sessionId);var b=a.receiver;if(b.receiverType!=window.chrome.cast.ReceiverType.CUSTOM){if(!this.o)if(b.receiverType==window.chrome.cast.ReceiverType.CAST)z7("Got resumed cast session before resumed mdx connection."),b.friendlyName=window.chrome.cast.unescape(b.friendlyName),B7(this,new v7(this.A,b),!0);else{this.sc("Got non-cast session without previous mdx receiver event, or mdx resume.");return}var c=this.o.A,d=l6(this.A.De(),c.label);
d&&g6(d,b.label)&&c.receiverType!=window.chrome.cast.ReceiverType.CAST&&b.receiverType==window.chrome.cast.ReceiverType.CAST&&(z7("onSessionEstablished_: manual to cast session change "+b.friendlyName),g.of(this.o),this.o=new v7(this.A,b),this.o.subscribe("sessionScreen",(0,g.B)(this.JE,this,this.o)),this.o.tk(null));this.o.Sw(a)}}};
g.h.AY=function(){return this.o?this.o.mH():null};
g.h.FV=function(a){this.ia()||(this.sc("Failed to estabilish a session: "+g.Jg(a)),a.code!=window.chrome.cast.ErrorCode.CANCEL&&B7(this,null))};
g.h.jV=function(a){z7("Receiver availability updated: "+a);if(!this.ia()){var b=A7(this);this.D=a==window.chrome.cast.ReceiverAvailability.AVAILABLE;A7(this)!=b&&this.V("yt-remote-cast2-availability-change",A7(this))}};
g.h.lH=function(){this.ia()||(this.B=GGa(this),z7("Updating custom receivers: "+g.Jg(this.B)),window.chrome.cast.setCustomReceivers(this.B,g.A,(0,g.B)(function(){this.sc("Failed to set custom receivers.")},this)),this.V("yt-remote-cast2-availability-change",A7(this)))};
y7.prototype.setLaunchParams=y7.prototype.yX;y7.prototype.setConnectedScreenStatus=y7.prototype.xX;y7.prototype.stopSession=y7.prototype.BY;y7.prototype.getCastSession=y7.prototype.AY;y7.prototype.requestSession=y7.prototype.requestSession;y7.prototype.init=y7.prototype.init;y7.prototype.dispose=y7.prototype.dispose;var H7=[];g.h=M7.prototype;
g.h.reset=function(a){this.listId="";this.index=-1;this.videoId="";N7(this);this.volume=-1;this.muted=!1;a&&(this.index=a.index,this.listId=a.listId,this.videoId=a.videoId,this.playerState=a.playerState,this.volume=a.volume,this.muted=a.muted,this.audioTrackId=a.audioTrackId,this.o=a.trackData,this.gg=a.hasPrevious,this.hasNext=a.hasNext,this.G=a.playerTime,this.F=a.playerTimeAt,this.C=a.seekableStart,this.A=a.seekableEnd,this.H=a.duration,this.J=a.loadedTime,this.B=a.liveIngestionTime,this.D=!(0,window.isNaN)(this.B))};
g.h.sb=function(){return 1==this.playerState};
g.h.isAdPlaying=function(){return 1081==this.playerState};
g.h.getDuration=function(){return this.D?this.H+O7(this):this.H};
g.h.clone=function(){return new M7(S7(this))};g.C(U7,g.iG);g.h=U7.prototype;g.h.play=function(){1==this.o?(this.A?this.A.play(null,g.A,$7(this,"play")):Z7(this,"play"),Y7(this,1,Q7(V7(this))),this.V("remotePlayerChange")):W7(this,this.play)};
g.h.pause=function(){1==this.o?(this.A?this.A.pause(null,g.A,$7(this,"pause")):Z7(this,"pause"),Y7(this,2,Q7(V7(this))),this.V("remotePlayerChange")):W7(this,this.pause)};
g.h.hH=function(a){if(1==this.o){if(this.A){var b=V7(this),c=new window.chrome.cast.media.SeekRequest;c.currentTime=a;c.resumeState=b.sb()||3==b.playerState?window.chrome.cast.media.ResumeState.PLAYBACK_START:window.chrome.cast.media.ResumeState.PLAYBACK_PAUSE;this.A.seek(c,g.A,$7(this,"seekTo",{newTime:a}))}else Z7(this,"seekTo",{newTime:a});Y7(this,3,a);this.V("remotePlayerChange")}else W7(this,g.Ca(this.hH,a))};
g.h.stop=function(){if(1==this.o){this.A?this.A.stop(null,g.A,$7(this,"stopVideo")):Z7(this,"stopVideo");var a=V7(this);a.index=-1;a.videoId="";N7(a);X7(this,a);this.V("remotePlayerChange")}else W7(this,this.stop)};
g.h.setVolume=function(a,b){if(1==this.o){var c=V7(this);if(this.B){if(c.volume!=a){var d=Math.round(a)/100;this.B.setReceiverVolumeLevel(d,(0,g.B)(function(){d7("CP","set receiver volume: "+d)},this),(0,g.B)(function(){this.sc("failed to set receiver volume.")},this))}c.muted!=b&&this.B.setReceiverMuted(b,(0,g.B)(function(){d7("CP","set receiver muted: "+b)},this),(0,g.B)(function(){this.sc("failed to set receiver muted.")},this))}else{var e={volume:a,
muted:b};-1!=c.volume&&(e.delta=a-c.volume);Z7(this,"setVolume",e)}c.muted=b;c.volume=a;X7(this,c)}else W7(this,g.Ca(this.setVolume,a,b))};
g.h.cG=function(a,b){if(1==this.o){var c=V7(this),d={videoId:a};b&&(c.o={trackName:b.name,languageCode:b.languageCode,sourceLanguageCode:b.translationLanguage?b.translationLanguage.languageCode:"",languageName:b.languageName,format:b.format,kind:b.kind},d.style=g.Jg(b.style),g.fc(d,c.o));Z7(this,"setSubtitlesTrack",d);X7(this,c)}else W7(this,g.Ca(this.cG,a,b))};
g.h.Sx=function(a,b){if(1==this.o){Z7(this,"setAudioTrack",{videoId:a,audioTrackId:b.Mb.id});var c=V7(this);c.audioTrackId=b.Mb.id;X7(this,c)}else W7(this,g.Ca(this.Sx,a,b))};
g.h.gH=function(a,b){if(1==this.o){if(a&&b){var c=V7(this);R7(c,a,b);X7(this,c)}Z7(this,"previous")}else W7(this,g.Ca(this.gH,a,b))};
g.h.fH=function(a,b){if(1==this.o){if(a&&b){var c=V7(this);R7(c,a,b);X7(this,c)}Z7(this,"next")}else W7(this,g.Ca(this.fH,a,b))};
g.h.hA=function(){1==this.o?Z7(this,"dismissAutoplay"):W7(this,this.hA)};
g.h.dispose=function(){if(3!=this.o){var a=this.o;this.o=3;this.V("proxyStateChange",a,this.o)}U7.fa.dispose.call(this)};
g.h.X=function(){TGa(this);this.C=null;this.D.clear();T7(this,null);U7.fa.X.call(this)};
g.h.Tx=function(a){if((a!=this.o||2==a)&&3!=this.o&&0!=a){var b=this.o;this.o=a;this.V("proxyStateChange",b,a);if(1==a)for(;!this.D.isEmpty();)g.WC(this.D).apply(this);else 3==a&&this.dispose()}};
g.h.aV=function(a,b){this.V(a,b)};
g.h.yS=function(a){if(!a)this.mn(null),T7(this,null);else if(this.B.receiver.volume){a=this.B.receiver.volume;var b=V7(this),c=Math.round(100*a.level||0);if(b.volume!=c||b.muted!=a.muted)d7("CP","Cast volume update: "+a.level+(a.muted?" muted":"")),b.volume=c,b.muted=!!a.muted,X7(this,b)}};
g.h.mn=function(a){d7("CP","Cast media: "+!!a);this.A&&this.A.removeUpdateListener(this.H);if(this.A=a)this.A.addUpdateListener(this.H),UGa(this),this.V("remotePlayerChange")};
g.h.xS=function(a){a?(UGa(this),this.V("remotePlayerChange")):this.mn(null)};
g.h.LS=function(){var a=QGa();a&&T7(this,a)};
g.h.sc=function(a){d7("CP",a)};g.C(a8,g.iG);g.h=a8.prototype;
g.h.connect=function(a,b){if(b){var c=b.listId,d=b.videoId,e=b.playerParams,f=b.clickTrackingParams,k=b.index,l={videoId:d},m=b.currentTime,n=b.locationInfo;g.u(m)&&(l.currentTime=5>=m?0:m);e&&(l.playerParams=e);n&&(l.locationInfo=n);f&&(l.clickTrackingParams=f);c&&(l.listId=c);g.u(k)&&(l.currentIndex=k);c&&(this.jb.listId=c);this.jb.videoId=d;this.jb.index=k||0;this.jb.state=3;P7(this.jb,m);this.C="UNSUPPORTED";b8("Connecting with setPlaylist and params: "+g.Jg(l));this.o.connect({method:"setPlaylist",
params:g.Jg(l)},a,oFa())}else b8("Connecting without params"),this.o.connect({},a,oFa());WGa(this)};
g.h.dispose=function(){this.ia()||(this.V("beforeDispose"),c8(this,3));a8.fa.dispose.call(this)};
g.h.X=function(){d8(this);f8(this);e8(this);g.CE(this.J);this.J=window.NaN;g.CE(this.K);this.K=window.NaN;this.B=null;g.TF(this.U);this.U.length=0;this.o.dispose();a8.fa.X.call(this);this.C=this.G=this.A=this.jb=this.o=null};
g.h.AL=function(){this.F(2)};
g.h.CS=function(){b8("Channel opened");this.O&&(this.O=!1,e8(this),this.M=g.AE((0,g.B)(function(){b8("Timing out waiting for a screen.");this.F(1)},this),15E3));
sFa(fGa(this.o),this.ba)};
g.h.zS=function(){b8("Channel closed");(0,window.isNaN)(this.D)?q6(!0):q6();this.dispose()};
g.h.AS=function(a){q6();(0,window.isNaN)(this.H())?(b8("Channel error: "+a+" without reconnection"),this.dispose()):(this.O=!0,b8("Channel error: "+a+" with reconnection in "+this.H()+" ms"),c8(this,2))};
g.h.BS=function(a){a.params?b8("Received: action="+a.action+", params="+g.Jg(a.params)):b8("Received: action="+a.action+" {}");switch(a.action){case "loungeStatus":a=g.Cx(a.params.devices);this.A=(0,g.J)(a,function(a){return new e6(a)});
a=!!g.Ja(this.A,function(a){return"LOUNGE_SCREEN"==a.type});
ZGa(this,a);break;case "loungeScreenDisconnected":g.Ua(this.A,function(a){return"LOUNGE_SCREEN"==a.type});
ZGa(this,!1);break;case "remoteConnected":var b=new e6(g.Cx(a.params.device));g.Ja(this.A,function(a){return b?a.id==b.id:!1})||g.Ra(this.A,b);
break;case "remoteDisconnected":b=new e6(g.Cx(a.params.device));g.Ua(this.A,function(a){return b?a.id==b.id:!1});
break;case "gracefulDisconnect":break;case "playlistModified":aHa(this,a);break;case "nowPlaying":cHa(this,a);break;case "onStateChange":bHa(this,a);break;case "onAdStateChange":dHa(this,a);break;case "onVolumeChanged":eHa(this,a);break;case "onSubtitlesTrackChanged":$Ga(this,a);break;case "nowAutoplaying":fHa(this,a);break;case "autoplayDismissed":this.V("autoplayDismissed");break;case "autoplayUpNext":this.G=a.params.videoId||null;this.V("autoplayUpNext",this.G);break;case "onAutoplayModeChanged":this.C=
a.params.autoplayMode;this.V("autoplayModeChange",this.C);"DISABLED"==this.C&&this.V("autoplayDismissed");break;case "onHasPreviousNextChanged":gHa(this,a);break;case "requestAssistedSignIn":this.V("assistedSignInRequested",a.params.authCode);break;default:b8("Unrecognized action: "+a.action)}};
g.h.hX=function(){if(this.B){var a=this.B;this.B=null;this.jb.videoId!=a&&g8(this,"getNowPlaying")}};
a8.prototype.subscribe=a8.prototype.subscribe;a8.prototype.unsubscribeByKey=a8.prototype.ce;a8.prototype.ha=function(){var a=3;this.ia()||(a=0,(0,window.isNaN)(this.H())?Z6(this.o)&&(0,window.isNaN)(this.D)&&(a=1):a=2);return a};
a8.prototype.getProxyState=a8.prototype.ha;a8.prototype.F=function(a){b8("Disconnecting with "+a);d8(this);this.V("beforeDisconnect",a);1==a&&q6();gGa(this.o,a);this.dispose()};
a8.prototype.disconnect=a8.prototype.F;a8.prototype.ga=function(){var a=this.jb;this.B&&(a=this.jb.clone(),R7(a,this.B,a.index));return S7(a)};
a8.prototype.getPlayerContextData=a8.prototype.ga;
a8.prototype.na=function(a){var b=new M7(a);b.videoId&&b.videoId!=this.jb.videoId&&(this.B=b.videoId,g.CE(this.J),this.J=g.AE((0,g.B)(this.hX,this),5E3));var c=[];this.jb.listId==b.listId&&this.jb.videoId==b.videoId&&this.jb.index==b.index||c.push("remoteQueueChange");this.jb.playerState==b.playerState&&this.jb.volume==b.volume&&this.jb.muted==b.muted&&Q7(this.jb)==Q7(b)&&g.Jg(this.jb.o)==g.Jg(b.o)||c.push("remotePlayerChange");this.jb.reset(a);(0,g.D)(c,function(a){this.V(a)},this)};
a8.prototype.setPlayerContextData=a8.prototype.na;a8.prototype.Z=function(){var a=this.o.F.id,b=g.Ja(this.A,function(b){return"REMOTE_CONTROL"==b.type&&b.id!=a});
return b?b.id:""};
a8.prototype.getOtherConnectedRemoteId=a8.prototype.Z;a8.prototype.H=function(){var a=this.o;return a.A.isActive()?a.A.A-(0,g.H)():window.NaN};
a8.prototype.getReconnectTimeout=a8.prototype.H;a8.prototype.aa=function(){return this.C||"UNSUPPORTED"};
a8.prototype.getAutoplayMode=a8.prototype.aa;a8.prototype.ca=function(){return this.G||""};
a8.prototype.getAutoplayVideoId=a8.prototype.ca;a8.prototype.wa=function(){if(!(0,window.isNaN)(this.H())){var a=this.o.A;g.Iu(a.o);a.start()}};
a8.prototype.reconnect=a8.prototype.wa;a8.prototype.ka=function(a,b){g8(this,a,b);YGa(this)};
a8.prototype.sendMessage=a8.prototype.ka;g.C(h8,h7);g.h=h8.prototype;g.h.De=function(a){return this.md.$_gs(a)};
g.h.contains=function(a){return!!this.md.$_c(a)};
g.h.get=function(a){return this.md.$_g(a)};
g.h.start=function(){this.md.$_st()};
g.h.add=function(a,b,c){this.md.$_a(a,b,c)};
g.h.remove=function(a,b,c){this.md.$_r(a,b,c)};
g.h.yr=function(a,b,c,d){this.md.$_un(a,b,c,d)};
g.h.X=function(){for(var a=0,b=this.A.length;a<b;++a)this.md.$_ubk(this.A[a]);this.A.length=0;this.md=null;h8.fa.X.call(this)};
g.h.xY=function(){this.V("screenChange")};
g.h.zU=function(){this.V("onlineScreenChange")};
q7.prototype.$_st=q7.prototype.start;q7.prototype.$_gspc=q7.prototype.yY;q7.prototype.$_gsppc=q7.prototype.kH;q7.prototype.$_c=q7.prototype.contains;q7.prototype.$_g=q7.prototype.get;q7.prototype.$_a=q7.prototype.add;q7.prototype.$_un=q7.prototype.yr;q7.prototype.$_r=q7.prototype.remove;q7.prototype.$_gs=q7.prototype.De;q7.prototype.$_gos=q7.prototype.jH;q7.prototype.$_s=q7.prototype.subscribe;q7.prototype.$_ubk=q7.prototype.ce;var i8=null,j8=null,y8=null,n8=[];g.r(z8,g.M);g.h=z8.prototype;
g.h.X=function(){g.M.prototype.X.call(this);this.C.stop();this.F.stop();this.L.stop();this.O();this.o.unsubscribe("proxyStateChange",this.FE,this);this.o.unsubscribe("remotePlayerChange",this.qn,this);this.o.unsubscribe("remoteQueueChange",this.Cq,this);this.o.unsubscribe("autoplayUpNext",this.cE,this);this.o.unsubscribe("previousNextChange",this.CE,this);this.o.unsubscribe("nowAutoplaying",this.uE,this);this.o.unsubscribe("autoplayDismissed",this.bE,this);this.o=this.D=null};
g.h.XC=function(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];if(2!=this.o.o)if(C8(this)){if(!V7(this.o).isAdPlaying()||"control_seek"!=a)switch(a){case "control_toggle_play_pause":V7(this.o).sb()?this.o.pause():this.o.play();break;case "control_play":this.o.play();break;case "control_pause":this.o.pause();break;case "control_seek":this.K.gm(c[0],c[1]);break;case "control_subtitles_set_track":D8(this,c[0]);break;case "control_set_audio_track":c=c[0],C8(this)&&this.o.Sx(this.A.getVideoData(1).videoId,
c)}}else switch(a){case "control_toggle_play_pause":case "control_play":case "control_pause":c=this.A.getCurrentTime();E8(this,0==c?void 0:c);break;case "control_seek":E8(this,c[0]);break;case "control_subtitles_set_track":D8(this,c[0]);break;case "control_set_audio_track":c=c[0],C8(this)&&this.o.Sx(this.A.getVideoData(1).videoId,c)}};
g.h.wS=function(a){this.L.vL(a)};
g.h.YX=function(a){this.XC("control_subtitles_set_track",g.Yb(a)?null:a)};
g.h.sG=function(){var a=this.A.Cc("captions","track");g.Yb(a)||D8(this,a)};
g.h.qE=function(a){if(C8(this)){this.o.unsubscribe("remotePlayerChange",this.qn,this);var b=Math.round(a.volume);a=!!a.muted;var c=V7(this.o);if(b!=c.volume||a!=c.muted)this.o.setVolume(b,a),this.M.start();this.o.subscribe("remotePlayerChange",this.qn,this)}};
g.h.ST=function(){g.Yb(this.G)||sHa(this,this.G);this.H=!1};
g.h.FE=function(a,b){this.F.stop();2==b&&this.pG()};
g.h.qn=function(){if(C8(this)){this.C.stop();var a=V7(this.o);switch(a.playerState){case 1080:case 1081:case 1084:case 1085:this.D.G=1;break;case 1082:case 1083:this.D.G=0;break;default:this.D.G=-1}switch(a.playerState){case 1081:case 1:B8(this,new g.nP(8));this.oG();break;case 1085:case 3:B8(this,new g.nP(9));break;case 1083:case 0:B8(this,new g.nP(2));this.K.stop();A8(this,this.A.getVideoData().lengthSeconds);break;case 1084:B8(this,new g.nP(4));break;case 2:B8(this,new g.nP(4));A8(this,Q7(a));
break;case -1:B8(this,new g.nP(64));break;case -1E3:B8(this,new g.nP(128,{errorCode:"mdx.remoteerror",message:"This video is not available for remote playback."}))}a=V7(this.o).o;var b=this.G;(a||b?a&&b&&a.trackName==b.trackName&&a.languageCode==b.languageCode&&a.languageName==b.languageName&&a.format==b.format&&a.kind==b.kind:1)||(this.G=a,sHa(this,a));a=V7(this.o);-1==a.volume||Math.round(this.A.getVolume())==a.volume&&this.A.isMuted()==a.muted||this.M.isActive()||this.QG()}else rHa(this)};
g.h.CE=function(){this.A.V("mdxpreviousnextchange")};
g.h.Cq=function(){C8(this)||rHa(this)};
g.h.xK=function(){this.o.hA()};
g.h.cE=function(a){a&&(a=g.RE("/watch_queue_ajax",{method:"GET",dd:{action_get_watch_queue_item:1,video_id:a},onSuccess:(0,g.B)(this.fW,this)}))&&(this.O=(0,g.B)(a.abort,a))};
g.h.fW=function(a,b){var c=new g.FO(g.X(this.A),{videoId:b.videoId,title:b.title,author:b.author,murlmq_webp:b.url});this.suggestion=c;this.A.V("mdxautoplayupnext",c)};
g.h.uE=function(a){(0,window.isNaN)(a)||this.A.V("mdxnowautoplaying",a)};
g.h.bE=function(){this.A.V("mdxautoplaycanceled")};
g.h.vQ=function(a,b){-1==V7(this.o).playerState?E8(this,a):b&&this.o.hH(a)};
g.h.QG=function(){if(C8(this)){var a=V7(this.o);this.B.Ka(this.U);a.muted?this.A.mute():this.A.rg();this.A.setVolume(a.volume);this.U=this.B.R(this.A,"onVolumeChange",this.qE)}};
g.h.oG=function(){this.C.stop();if(!this.o.ia()){var a=V7(this.o);a.sb()&&B8(this,new g.nP(8));A8(this,Q7(a));this.C.start()}};
g.h.pG=function(){this.F.stop();this.C.stop();var a=this.o.C.getReconnectTimeout();2==this.o.o&&!(0,window.isNaN)(a)&&this.F.start()};g.r(F8,g.V);F8.prototype.D=function(a){uHa(this,a.state)};g.r(G8,g.hY);G8.prototype.L=function(){var a=this.B.Cc("remote","receivers");a&&1<a.length&&!this.B.Cc("remote","quickCast")?(this.J=g.ib(a,this.F,this),g.iY(this,(0,g.J)(a,this.F)),a=this.B.Cc("remote","currentReceiver"),this.Gf(this.F(a)),this.enable(!0)):this.enable(!1)};
G8.prototype.F=function(a){return a.key};
G8.prototype.Ff=function(a){return"cast-selector-receiver"==a?"Cast...":this.J[a].name};
G8.prototype.Gd=function(a){g.hY.prototype.Gd.call(this,a);this.B.Yd("remote","currentReceiver",this.J[a]);this.D.Rb()};g.r(H8,g.iU);g.h=H8.prototype;g.h.create=function(){lHa(g.mN(g.X(this.player)));this.D.push(g.vG("yt-remote-before-disconnect",this.sS,this));this.D.push(g.vG("yt-remote-connection-change",this.kV,this));this.D.push(g.vG("yt-remote-receiver-availability-change",this.DE,this));this.D.push(g.vG("yt-remote-auto-connect",this.iV,this));this.D.push(g.vG("yt-remote-receiver-resumed",this.hV,this));this.DE()};
g.h.load=function(){this.player.lv();g.iU.prototype.load.call(this);this.C=new z8(this,this.player,this.o);var a=(a=qHa())?a.currentTime:0;var b=x8()?new U7(s8(),void 0):null;0==a&&b&&(a=Q7(V7(b)));0!=a&&(this.J=a||0,this.player.V("progresssync",a,void 0));tHa(this,this.F,this.F);g.z_(this.player.app,6)};
g.h.unload=function(){this.player.V("mdxautoplaycanceled");this.B=this.A;g.pf(this.C,this.o);this.o=this.C=null;g.iU.prototype.unload.call(this);g.z_(this.player.app,5)};
g.h.X=function(){g.wG(this.D);g.iU.prototype.X.call(this)};
g.h.Zm=function(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];this.loaded&&this.C.XC.apply(this.C,[a].concat(g.ea(c)))};
g.h.qL=function(){return this.loaded?this.C.suggestion:null};
g.h.gg=function(){return this.o?V7(this.o).gg:!1};
g.h.hasNext=function(){return this.o?V7(this.o).hasNext:!1};
g.h.getCurrentTime=function(){return this.J};
g.h.jQ=function(){var a=V7(this.o),b=this.player.getVideoData();return{allowSeeking:g.X(this.player).experiments.o("web_player_mdx_allow_seeking_change_killswitch")?this.player.Lc():!a.isAdPlaying()&&this.player.Lc(),clipEnd:b.clipEnd,clipStart:b.clipStart,current:this.getCurrentTime(),displayedStart:-1,duration:a.getDuration(),ingestionTime:a.D?a.B+O7(a):a.B,isPeggedToLive:1>=(a.D?a.A+O7(a):a.A)-this.getCurrentTime(),loaded:a.J,seekableEnd:a.D?a.A+O7(a):a.A,seekableStart:0<a.C?a.C+O7(a):a.C}};
g.h.kQ=function(){this.o&&this.o.fH()};
g.h.lQ=function(){this.o&&this.o.gH()};
g.h.sS=function(a){1==a&&(this.K=this.o?V7(this.o):null)};
g.h.kV=function(){var a=x8()?new U7(s8(),void 0):null;if(a){var b=this.B;this.loaded&&this.unload();this.o=a;this.K=null;b.key!=this.A.key&&(this.B=b,this.load())}else g.of(this.o),this.o=null,this.loaded&&(this.unload(),(a=this.K)&&a.videoId==this.player.getVideoData().videoId&&this.player.EC(a.videoId,Q7(a)));this.player.V("videodatachange","newdata",this.player.getVideoData(),3)};
g.h.DE=function(){this.H=[this.A].concat(nHa());var a=t8()||this.A;I8(this,a);this.player.ya("onMdxReceiversChange")};
g.h.iV=function(){var a=t8();I8(this,a)};
g.h.hV=function(){this.B=t8()};
g.h.iQ=function(a,b){switch(a){case "casting":return this.loaded;case "receivers":return this.H;case "currentReceiver":return b&&("cast-selector-receiver"==b.key?K7():I8(this,b)),this.loaded?this.B:this.A;case "quickCast":return 2==this.H.length&&"cast-selector-receiver"==this.H[1].key?(b&&K7(),!0):!1}};
g.h.mQ=function(){Z7(this.o,"sendDebugCommand",{debugCommand:"stats4nerds "})};
g.h.Ec=function(){return!1};g.hX.remote=H8;})(_yt_player);


}
/*
     FILE ARCHIVED ON 02:22:41 Dec 07, 2018 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 08:13:03 May 29, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 1.516
  exclusion.robots: 0.068
  exclusion.robots.policy: 0.039
  esindex: 0.029
  cdx.remote: 244.028
  LoadShardBlock: 214.821 (3)
  PetaboxLoader3.datanode: 206.776 (5)
  load_resource: 345.097 (2)
  PetaboxLoader3.resolve: 176.174
*/