(function(t){function e(e){for(var o,i,c=e[0],l=e[1],s=e[2],p=0,f=[];p<c.length;p++)i=c[p],a[i]&&f.push(a[i][0]),a[i]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(t[o]=l[o]);u&&u(e);while(f.length)f.shift()();return n.push.apply(n,s||[]),r()}function r(){for(var t,e=0;e<n.length;e++){for(var r=n[e],o=!0,c=1;c<r.length;c++){var l=r[c];0!==a[l]&&(o=!1)}o&&(n.splice(e--,1),t=i(i.s=r[0]))}return t}var o={},a={app:0},n=[];function i(e){if(o[e])return o[e].exports;var r=o[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=t,i.c=o,i.d=function(t,e,r){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(r,o,function(e){return t[e]}.bind(null,o));return r},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var s=0;s<c.length;s++)e(c[s]);var u=l;n.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("cd49")},"5c0b":function(t,e,r){"use strict";var o=r("5e27"),a=r.n(o);a.a},"5e27":function(t,e,r){},cd49:function(t,e,r){"use strict";r.r(e);r("cadf"),r("551c"),r("f751"),r("097d");var o=r("2b0e"),a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("a-scene",[r("UserCamera"),r("router-view")],1)],1)},n=[],i=r("d225"),c=r("308d"),l=r("6bb5"),s=r("4e2b"),u=r("9ab4"),p=r("60a3"),f=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("a-entity",{attrs:{id:"rig",position:"0 0 0","look-controls":"","wasd-controls":""}},[r("a-entity",{attrs:{id:"camera",position:"0 1.6 0",camera:""}},[r("a-entity",{attrs:{cursor:"fuse: true; fuseTimeout: 200",position:"0 0 -1",geometry:"primitive: ring; radiusInner: 0.02; radiusOuter: 0.03",visible:"false"}})],1)],1)},b=[],d=function(t){function e(){return Object(i["a"])(this,e),Object(c["a"])(this,Object(l["a"])(e).apply(this,arguments))}return Object(s["a"])(e,t),e}(p["c"]);d=u["a"]([p["a"]],d);var h=d,m=h,v=r("2877"),y=Object(v["a"])(m,f,b,!1,null,null,null),j=y.exports,g=function(t){function e(){return Object(i["a"])(this,e),Object(c["a"])(this,Object(l["a"])(e).apply(this,arguments))}return Object(s["a"])(e,t),e}(p["c"]);g=u["a"]([Object(p["a"])({components:{UserCamera:j}})],g);var O=g,x=O,w=(r("5c0b"),Object(v["a"])(x,a,n,!1,null,null,null)),_=w.exports,P=r("8c4f"),E=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("a-entity",[r("a-sphere",{attrs:{animation:"property: rotation; easing: linear; to: 0 360 0; from: 0 0 0; loop: true; dur: 10000",position:"3 1.25 -5",radius:"1.25",color:"white",material:"src: 2k_earth_daymap.jpg",portal:"path:/about"}},[r("a-text",{attrs:{position:"0 1.7 0",side:"double",align:"center",color:"white",scale:"4 4 4",value:"Info"}})],1),r("BoxPortal",{attrs:{text:"Up",color:"red",scale:"2 2 2",position:"-6 1 -7",rotation:"0 45 0","target-location":"0 10 0"}}),r("BoxPortal",{attrs:{text:"Down",color:"blue",scale:"2 2 2",position:"-6 12 -7",rotation:"0 45 0","target-location":"0 0 0"}}),r("a-entity",{attrs:{environment:"preset: tron"}})],1)},k=[],S=r("b0b4"),T=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("a-box",{attrs:{geometry:"width: 1; height: 1",portal:"location: "+t.targetLocation+"; path: "+t.targetPath,text:"value: "+t.text+";zOffset: 0.501;align: center; wrapCount: 15"}})},C=[],$=function(t){function e(){return Object(i["a"])(this,e),Object(c["a"])(this,Object(l["a"])(e).apply(this,arguments))}return Object(s["a"])(e,t),e}(p["c"]);u["a"]([Object(p["b"])({default:null})],$.prototype,"targetLocation",void 0),u["a"]([Object(p["b"])({default:""})],$.prototype,"targetPath",void 0),u["a"]([Object(p["b"])(String)],$.prototype,"text",void 0),$=u["a"]([p["a"]],$);var D=$,H=D,I=Object(v["a"])(H,T,C,!1,null,null,null),M=I.exports,R=function(t){function e(){return Object(i["a"])(this,e),Object(c["a"])(this,Object(l["a"])(e).apply(this,arguments))}return Object(s["a"])(e,t),Object(S["a"])(e,[{key:"mounted",value:function(){console.log("Welcome home",this)}}]),e}(p["c"]);R=u["a"]([Object(p["a"])({components:{BoxPortal:M}})],R);var B=R,F=B,A=Object(v["a"])(F,E,k,!1,null,null,null),U=A.exports,W=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("a-entity",[r("a-text",{attrs:{position:"0 3 -7",color:"black",side:"double",scale:"5 5 5",value:"Hello there"}}),r("a-text",{attrs:{position:"-2 2 -7",color:"black",side:"double",scale:"4 4 4",value:"It's a portals demo,"}}),r("a-text",{attrs:{position:"-2 1 -7",color:"black",side:"double",scale:"4 4 4",value:"walk through objects"}}),r("a-cylinder",{attrs:{position:"-3 1 -7",radius:"0.5",height:"1.5",color:"#FFC65D",portal:"path: /"}}),r("a-entity",{attrs:{environment:"preset: default; ground: flat;"}})],1)},q=[],J={},L=Object(v["a"])(J,W,q,!1,null,null,null),V=L.exports;o["a"].use(P["a"]);var z=new P["a"]({routes:[{path:"/",component:U},{path:"/about",component:V}]}),G=r("2f62");o["a"].use(G["a"]);var K=new G["a"].Store({state:{},mutations:{},actions:{}}),N=(r("b048"),r("e6fa"),r("2ef0"));AFRAME.registerComponent("portal",{dependencies:["geometry"],schema:{location:{type:"vec3"},path:{type:"string",default:"/"}},isCameraInPortal:function(){var t,e=new THREE.Vector3;if(document.querySelector("#camera").object3D.getWorldPosition(e),"sphere"===this.el.components.geometry.data.primitive){var r=new THREE.Vector3;this.el.object3D.getWorldPosition(r),t=new THREE.Sphere(r,this.el.components.geometry.data.radius)}else t=(new THREE.Box3).setFromObject(this.el.getObject3D("mesh"));return t.containsPoint(e)},teleport:function(){this.data.path&&z.push({path:this.data.path}),Object(N["isEmpty"])(this.data.location)||document.querySelector("#rig").setAttribute("position",this.data.location)},tick:function(){this.isCameraInPortal()&&this.teleport()}}),o["a"].config.productionTip=!1,new o["a"]({router:z,store:K,render:function(t){return t(_)}}).$mount("#app")}});
//# sourceMappingURL=app.70b50db4.js.map