"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5152],{80931:function(e,t,n){var o=n(1055),r=n(40824),i=n(31168),a=n(55572),c=n(98789),s=n(54805),u=n(71644),p=n(10687),l=n(68979),f=n(72893),g=n(16248),w=n(64469),m=n(4711);const h=new i.Z({formatConstructors:[c.Z,s.Z,u.Z,p.ZP,l.Z]}),Z=new o.Z({interactions:(0,a.c)().extend([h]),layers:[new f.Z({source:new w.Z({attributions:'<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',url:"https://api.maptiler.com/tiles/satellite/{z}/{x}/{y}.jpg?key=get_your_own_D6rA4zTHduk6KOKTXzGB",maxZoom:20})})],target:"map",view:new r.ZP({center:[0,0],zoom:2})});h.on("addfeatures",(function(e){const t=new m.Z({features:e.features});Z.addLayer(new g.Z({source:t})),Z.getView().fit(t.getExtent())}));const d=function(e){const t=[];if(Z.forEachFeatureAtPixel(e,(function(e){t.push(e)})),t.length>0){const e=[];let n,o;for(n=0,o=t.length;n<o;++n)e.push(t[n].get("name"));document.getElementById("info").innerHTML=e.join(", ")||"&nbsp"}else document.getElementById("info").innerHTML="&nbsp;"};Z.on("pointermove",(function(e){if(e.dragging)return;const t=Z.getEventPixel(e.originalEvent);d(t)})),Z.on("click",(function(e){d(e.pixel)}))}},function(e){var t;t=80931,e(e.s=t)}]);
//# sourceMappingURL=drag-and-drop-image-vector.js.map