"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3270],{46199:function(t,e,n){var a=n(98993),r=n(1055),o=n(50463),i=n(40824);(0,n(81625).eL)();const s=new pmtiles.PMTiles("https://pub-9288c68512ed46eca46ddcade307709b.r2.dev/protomaps-sample-datasets/terrarium_z9.pmtiles");function c(t,e){return["+",["*",65280,["band",1,t,e]],["*",255,["band",2,t,e]],["*",255/256,["band",3,t,e]],-32768]}const u=["*",2,["resolution"]],d=["*",["var","vert"],c(-1,0)],l=["/",["-",["*",["var","vert"],c(1,0)],d],u],m=["*",["var","vert"],c(0,-1)],v=["/",["-",["*",["var","vert"],c(0,1)],m],u],b=["atan",["sqrt",["+",["^",l,2],["^",v,2]]]],p=["clamp",["atan",["-",0,l],v],-Math.PI,Math.PI],f=["*",Math.PI/180,["var","sunEl"]],w=["+",["*",["sin",f],["cos",b]],["*",["cos",f],["sin",b],["cos",["-",["*",Math.PI/180,["var","sunAz"]],p]]]],h={},E=new o.Z({source:new a.Z({loader:async function(t,e,n){const a=await s.getZxy(t,e,n),r=new Blob([a.data]),o=URL.createObjectURL(r),i=await function(t){return new Promise(((e,n)=>{const a=new Image;a.addEventListener("load",(()=>e(a))),a.addEventListener("error",(()=>n(new Error("load failed")))),a.src=t}))}(o);return URL.revokeObjectURL(o),i},wrapX:!0,maxZoom:9,attributions:"<a href='https://github.com/tilezen/joerd/blob/master/docs/attribution.md#attribution'>Tilezen Jörð</a>"}),style:{variables:h,color:["array",w,w,w,1]}});["vert","sunEl","sunAz"].forEach((function(t){const e=document.getElementById(t),n=document.getElementById(t+"Out");function a(){n.innerText=e.value,h[t]=Number(e.value)}a(),e.addEventListener("input",(function(){a(),E.updateStyleVariables(h)}))}));const g=new r.Z({target:"map",layers:[E],view:new i.ZP({center:[0,0],zoom:1})});const y=document.getElementById("elevationOut"),I=document.getElementById("locationOut");g.on(["pointermove","click"],(function(t){const e=E.getData(t.pixel);e&&(y.innerText=function(t){return 256*t[0]+t[1]+t[2]/256-32768}(e).toLocaleString()+" m",I.innerText=function([t,e]){const n=e<0?"S":"N",a=t<0?"W":"E";return`${Math.abs(e).toFixed(1)}° ${n}, ${Math.abs(t).toFixed(1)}° ${a}`}(t.coordinate))}))}},function(t){var e;e=46199,t(t.s=e)}]);
//# sourceMappingURL=pmtiles-elevation.js.map