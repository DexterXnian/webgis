"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2212],{59693:function(e,t,a){var n=a(1055),r=a(50463),o=a(40824),l=a(64469),i=a(81625);const s="get_your_own_D6rA4zTHduk6KOKTXzGB",p=new r.Z({opacity:.6,source:new l.Z({url:"https://api.maptiler.com/tiles/terrain-rgb/{z}/{x}/{y}.png?key="+s,tileSize:512,maxZoom:12}),style:{variables:{level:0},color:["case",["<=",["+",-1e4,["*",1671168,["band",1]],["*",6528,["band",2]],["*",25.5,["band",3]]],["var","level"]],[139,212,255,1],[139,212,255,0]]}}),c=new n.Z({target:"map",layers:[new r.Z({source:new l.Z({url:"https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key="+s,attributions:'<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',tileSize:512,maxZoom:22})}),p],view:new o.ZP({center:(0,i.mi)([-122.3267,37.8377]),zoom:11})}),m=document.getElementById("level"),u=document.getElementById("output");m.addEventListener("input",(function(){u.innerText=m.value,p.updateStyleVariables({level:parseFloat(m.value)})})),u.innerText=m.value;const w=document.getElementsByClassName("location");for(let e=0,t=w.length;e<t;++e)w[e].addEventListener("click",g);function g(e){const t=e.target.dataset,a=c.getView();a.setCenter((0,i.mi)(t.center.split(",").map(Number))),a.setZoom(Number(t.zoom))}}},function(e){var t;t=59693,e(e.s=t)}]);
//# sourceMappingURL=webgl-sea-level.js.map