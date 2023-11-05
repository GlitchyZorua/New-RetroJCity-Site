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

var c=encodeURIComponent,e=window,f=document,h="prototype",i,j=e.goog||{},k=function(){this.config=this.n;this.caller=this.A;this.lang=this.location=null;this.nRecs=1;this.strategy=this.c;this.excludedProducts=null;this.uri=this.t;this.layout=this.g;this.finished=null;this.showImg=true;this.details=false};i=k[h];i.c="we";i.z="tn";i.j="business";i.m="consumer";i.l="config";i.k="caller";i.q="lang";i.r="loc";i.s="nRecs";i.w="strategy";i.p="excl";i.o="details";i.n="consumer";i.A="unknown";i.t="https://web.archive.org/web/20090422145625/http://www.google.com/receng";
i.u="/js/recommendations.js";i.v="__RecEng";
i.O=function(){e[this.v]=this;this.D=this.config;this.caller=this.caller;this.lang=this.lang;this.location=this.location;this.N=this.nRecs;this.T=this.strategy;this.G=this.excludedProducts;this.U=this.uri;this.h=this.layout;this.f=this.finished;this.R=this.showImg;this.b=this.details;this.e=this.divs;var a="";a=this.a(a,this.l,this.D);a=this.a(a,this.k,this.caller);a=this.a(a,this.s,this.N);a=this.a(a,this.q,this.lang);a=this.a(a,this.r,this.location);a=this.a(a,this.w,this.T);a=this.a(a,this.p,this.G);
a=this.B(a,this.o,this.b);var b=this.F(a);this.K(b.toString())};i.a=function(a,b,d){if(d){if(a)a+="&";a+=c(b);a+="=";a+=c(d)}return a};i.B=function(a,b,d){return d?this.a(a,b,"1"):a};i.F=function(a){var b=e.location.protocol=="https:"?"https://":"http://",d=this.U.replace(/.*\/\//,"");b+=d+this.u+"?"+a;return b};i.K=function(a){var b=f.createElement("script");b.type="text/javascript";b.src=a;this.J(b)};i.J=function(a){var b=f.getElementsByTagName("head");b[0].appendChild(a)};
i.H=function(a){if(a){var b=0;for(;b<a.length;b++){if(b>=this.e.length)return;var d=a[b];d.Q=d.shortTitle;d.M=d.longTitle;d.P=d.shortDescription;d.L=d.longDescription;d.V=d.shortProductName;d.I=d.iconImage;d.C=d.callToActionText;d.d=d.callToActionUrl;d.b=d.details;this.h(this.e[b],d)}}if(this.f){a||(a=[]);this.f(a)}};i.g=function(a,b){this.i(a,b,b.M,b.L)};i.S=function(a,b){this.i(a,b,b.Q,b.P)};
i.i=function(a,b,d,m){var l=f.getElementById(a);if(l){var g='<table width="100%" cellspacing="0" cellpadding="0" border="0">';g+="<tr><td>";g+='<div class="re-title">';g+=d;g+="</div>";if(this.R){g+='<a href="'+b.d+'">';g+='<img src="'+b.I+'" alt="" class="re-img">';g+="</a>"}g+='<div class="re-desc">';g+=m;g+="</div>";g+='<a href="'+b.d+'" class="re-link">';g+=b.C;g+="</a>";g+="<br/>";g+="</td></tr>";if(b.b){g+="<tr><td>";g+=b.b;g+="</td></tr>"}g+="</table>";l.innerHTML=g}};e.goog=j;j.RecEng=k;
k.prototype=k[h];k[h].genericLayout=k[h].H;k[h].recommend=k[h].O;k[h].layout=k[h].h;k[h].largeLayout=k[h].g;k[h].smallLayout=k[h].S;k[h].WEIGHTED=k[h].c;k[h].TOP_N=k[h].z;k[h].BUSINESS=k[h].j;k[h].CONSUMER=k[h].m;


}
/*
     FILE ARCHIVED ON 14:56:25 Apr 22, 2009 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 22:07:42 Oct 31, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 278.758
  exclusion.robots: 0.116
  exclusion.robots.policy: 0.106
  cdx.remote: 0.065
  esindex: 0.03
  LoadShardBlock: 185.668 (3)
  PetaboxLoader3.datanode: 165.198 (4)
  load_resource: 79.065
  PetaboxLoader3.resolve: 37.336
*/