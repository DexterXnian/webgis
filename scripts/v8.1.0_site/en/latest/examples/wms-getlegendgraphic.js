"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6861],{59802:function(e,t,n){var o=n(39597),s=n(1055),r=n(55117),c=n(40824),a=n(72893),u=n(11802);const g=new o.Z({url:"https://ahocevar.com/geoserver/wms",params:{LAYERS:"topp:states"},ratio:1,serverType:"geoserver"}),i=function(e){const t=g.getLegendUrl(e);document.getElementById("legend").src=t},w=[new a.Z({source:new r.Z}),new u.Z({extent:[-13884991,2870341,-7455066,6338219],source:g})],l=new s.Z({layers:w,target:"map",view:new c.ZP({center:[-10997148,4569099],zoom:4})}),p=l.getView().getResolution();i(p),l.getView().on("change:resolution",(function(e){const t=e.target.getResolution();i(t)}))}},function(e){var t;t=59802,e(e.s=t)}]);
//# sourceMappingURL=wms-getlegendgraphic.js.map