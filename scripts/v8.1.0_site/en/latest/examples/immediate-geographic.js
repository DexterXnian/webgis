"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2183],{41935:function(e,n,t){var r=t(53061),a=t(72893),o=t(64688),s=t(5002),c=t(80677),w=t(1055),u=t(40824),l=t(47051),h=t(91027),i=t(70076);(0,t(81625).eL)();const f=new a.Z({source:new r.Z({layer:"stamen_toner"})}),m=new w.Z({layers:[f],target:"map",view:new u.ZP({center:[0,0],zoom:2})}),Z=new o.Z({radius:8,fill:new s.Z({color:"rgb(255, 153, 0)"})}),d=new c.ZP({image:Z}),p=1e3,y=new Array(p);for(let e=0;e<p;++e){const n=360*Math.random()-180,t=180*Math.random()-90;y[e]=new l.Z([n,t])}f.on("postrender",(function(e){const n=(0,h.u3)(e);for(let e=0;e<p;++e){const t=(0,i.wu)(Math.pow((p-e)/p,.15));t<.1||(Z.setOpacity(t),Z.setScale(t),n.setStyle(d),n.drawGeometry(y[e]))}const t=360*Math.random()-180,r=180*Math.random()-90;y.push(new l.Z([t,r])),y.shift(),m.render()}))}},function(e){var n;n=41935,e(e.s=n)}]);
//# sourceMappingURL=immediate-geographic.js.map