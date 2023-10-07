"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9578],{69812:function(e,t,n){var i=n(54805),a=n(1055),o=n(55117),l=n(72893),r=n(4711),c=n(40824),s=n(22318);const p=new r.Z({url:"data/geojson/world-cities.geojson",format:new i.Z,wrapX:!0}),u={icons:{"icon-src":"data/icon.png","icon-width":18,"icon-height":28,"icon-color":"lightyellow","icon-rotate-with-view":!1,"icon-displacement":[0,9]},triangles:{"shape-points":3,"shape-radius":9,"shape-fill-color":["interpolate",["linear"],["get","population"],2e4,"#5aca5b",3e5,"#ff6a19"],"shape-rotate-with-view":!0},"triangles-latitude":{"shape-points":3,"shape-radius":["interpolate",["linear"],["get","population"],4e4,6,2e6,12],"shape-fill-color":["interpolate",["linear"],["get","latitude"],-60,"#ff14c3",-20,"#ff621d",20,"#ffed02",60,"#00ff67"],"shape-opacity":.95},circles:{"circle-radius":["interpolate",["linear"],["get","population"],4e4,4,2e6,14],"circle-fill-color":["match",["get","hover"],1,"#ff3f3f","#006688"],"circle-rotate-with-view":!1,"circle-displacement":[0,0],"circle-opacity":["interpolate",["linear"],["get","population"],4e4,.6,2e6,.92]},"circles-zoom":{"circle-radius":["interpolate",["exponential",2],["zoom"],5,1.5,15,1.5*Math.pow(2,10)],"circle-fill-color":["match",["get","hover"],1,"#ff3f3f","#006688"],"circle-displacement":[0,0],"circle-opacity":.95},"rotating-bars":{"shape-rotation":["*",["time"],.13],"shape-points":4,"shape-radius1":4,"shape-radius2":4*Math.sqrt(2),"shape-scale":["array",1,["interpolate",["linear"],["get","population"],2e4,1,3e5,7]],"shape-fill-color":["interpolate",["linear"],["get","population"],2e4,"#ffdc00",3e5,"#ff5b19"],"shape-displacement":["array",0,["interpolate",["linear"],["get","population"],2e4,2,3e5,14]]}},f=new a.Z({layers:[new l.Z({source:new o.Z})],target:document.getElementById("map"),view:new c.ZP({center:[0,0],zoom:2})});let d,h,g=null;function m(e){const t=h;h=new s.Z({source:p,style:e}),f.addLayer(h),t&&(f.removeLayer(t),t.dispose()),d=e}f.on("pointermove",(function(e){null!==g&&(g.set("hover",0),g=null),f.forEachFeatureAtPixel(e.pixel,(function(e){return e.set("hover",1),g=e,!0}))}));const y=document.getElementById("style-valid"),w=document.getElementById("style-invalid");function v(e){const t="string"==typeof e;y.style.display=null===e?"initial":"none",w.firstElementChild.innerText=t?e:"",w.style.display=t?"initial":"none"}const E=document.getElementById("style-editor");E.addEventListener("input",(function(){const e=E.value;try{const t=JSON.parse(e);JSON.stringify(t)!==JSON.stringify(d)&&m(t),v(null)}catch(e){v(e.message)}}));const Z=document.getElementById("style-select");function b(){const e=Z.value,t=u[e];E.value=JSON.stringify(t,null,2);try{m(t),v()}catch(e){v(e.message)}}Z.value="circles",b(),Z.addEventListener("change",b),function e(){f.render(),window.requestAnimationFrame(e)}()}},function(e){var t;t=69812,e(e.s=t)}]);
//# sourceMappingURL=webgl-points-layer.js.map