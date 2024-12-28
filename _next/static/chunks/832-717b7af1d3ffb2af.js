"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[832],{1300:function(t,e,r){let a;r.d(e,{ZJ:function(){return A},lc:function(){return M}});var n=r(7462),i=r(7294),o=r(9477),s=r(2911),c=r(5769);let u="undefined"!=typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto);var l={randomUUID:u};let h=new Uint8Array(16),d=[];for(let t=0;t<256;++t)d.push((t+256).toString(16).slice(1));var f=function(t,e,r){if(l.randomUUID&&!e&&!t)return l.randomUUID();t=t||{};let n=t.random||(t.rng||function(){if(!a&&!(a="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)))throw Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return a(h)})();if(n[6]=15&n[6]|64,n[8]=63&n[8]|128,e){r=r||0;for(let t=0;t<16;++t)e[r+t]=n[t];return e}return function(t,e=0){return d[t[e+0]]+d[t[e+1]]+d[t[e+2]]+d[t[e+3]]+"-"+d[t[e+4]]+d[t[e+5]]+"-"+d[t[e+6]]+d[t[e+7]]+"-"+d[t[e+8]]+d[t[e+9]]+"-"+d[t[e+10]]+d[t[e+11]]+d[t[e+12]]+d[t[e+13]]+d[t[e+14]]+d[t[e+15]]}(n)};let m="https://rawcdn.githack.com/pmndrs/drei-assets/9225a9f1fbd449d9411125c2f419b843d0308c9f/cloud.png",p=new o.Matrix4,g=new o.Vector3,y=new o.Quaternion,x=new o.Vector3,v=new o.Quaternion,w=new o.Vector3,b=i.createContext(null),M=i.forwardRef(({children:t,material:e=o.MeshLambertMaterial,texture:r=m,range:a,limit:u=200,...l},h)=>{var d,f;let M;let E=i.useMemo(()=>class extends e{constructor(){super(),this.onBeforeCompile=t=>{t.vertexShader=`attribute float opacity;
               varying float vOpacity;
              `+t.vertexShader.replace("#include <fog_vertex>",`#include <fog_vertex>
                 vOpacity = opacity;
                `),t.fragmentShader=`varying float vOpacity;
              `+t.fragmentShader.replace("#include <opaque_fragment>",`#include <opaque_fragment>
                 gl_FragColor = vec4(outgoingLight, diffuseColor.a * vOpacity);
                `)}}},[e]);(0,s.e)({CloudMaterial:E});let A=i.useRef(null),U=i.useRef([]),D=i.useMemo(()=>new Float32Array(Array.from({length:u},()=>1)),[u]),R=i.useMemo(()=>new Float32Array(Array.from({length:u},()=>[1,1,1]).flat()),[u]),S=(0,c.m)(r),C=0,z=0,P=new o.Quaternion,T=new o.Vector3(0,0,1),V=new o.Vector3;(0,s.A)((t,e)=>{for(C=t.clock.getElapsedTime(),p.copy(A.current.matrixWorld).invert(),t.camera.matrixWorld.decompose(x,v,w),z=0;z<U.current.length;z++)(M=U.current[z]).ref.current.matrixWorld.decompose(g,y,w),g.add(V.copy(M.position).applyQuaternion(y).multiply(w)),y.copy(v).multiply(P.setFromAxisAngle(T,M.rotation+=e*M.rotationFactor)),w.multiplyScalar(M.volume+(1+Math.sin(C*M.density*M.speed))/2*M.growth),M.matrix.compose(g,y,w).premultiply(p),M.dist=g.distanceTo(x);for(U.current.sort((t,e)=>e.dist-t.dist),z=0;z<U.current.length;z++)M=U.current[z],D[z]=M.opacity*(M.dist<M.fade-1?M.dist/M.fade:1),A.current.setMatrixAt(z,M.matrix),A.current.setColorAt(z,M.color);A.current.geometry.attributes.opacity.needsUpdate=!0,A.current.instanceMatrix.needsUpdate=!0,A.current.instanceColor&&(A.current.instanceColor.needsUpdate=!0)}),i.useLayoutEffect(()=>{let t=Math.min(u,void 0!==a?a:u,U.current.length);A.current.count=t,A.current.instanceMatrix.updateRange.count=16*t,A.current.instanceColor&&(A.current.instanceColor.updateRange.count=3*t),A.current.geometry.attributes.opacity.updateRange.count=t});let F=[null!==(d=S.image.width)&&void 0!==d?d:1,null!==(f=S.image.height)&&void 0!==f?f:1],L=Math.max(F[0],F[1]);return F=[F[0]/L,F[1]/L],i.createElement("group",(0,n.Z)({ref:h},l),i.createElement(b.Provider,{value:U},t,i.createElement("instancedMesh",{matrixAutoUpdate:!1,ref:A,args:[null,null,u]},i.createElement("instancedBufferAttribute",{usage:o.DynamicDrawUsage,attach:"instanceColor",args:[R,3]}),i.createElement("planeGeometry",{args:[...F]},i.createElement("instancedBufferAttribute",{usage:o.DynamicDrawUsage,attach:"attributes-opacity",args:[D,1]})),i.createElement("cloudMaterial",{key:e.name,map:S,transparent:!0,depthWrite:!1}))))}),E=i.forwardRef(({opacity:t=1,speed:e=0,bounds:r=[5,1,1],segments:a=20,color:c="#ffffff",fade:u=10,volume:l=6,smallestVolume:h=.25,distribute:d=null,growth:m=4,concentrate:p="inside",seed:g=Math.random(),...y},x)=>{function v(){let t=1e4*Math.sin(g++);return t-Math.floor(t)}let w=i.useContext(b),M=i.useRef(null),[E]=i.useState(()=>f()),A=i.useMemo(()=>[...Array(a)].map((t,e)=>({segments:a,bounds:new o.Vector3(1,1,1),position:new o.Vector3,uuid:E,index:e,ref:M,dist:0,matrix:new o.Matrix4,color:new o.Color,rotation:e*(Math.PI/a)})),[a,E]);return i.useLayoutEffect(()=>{A.forEach((n,i)=>{var o;(0,s.j)(n,{volume:l,color:c,speed:e,growth:m,opacity:t,fade:u,bounds:r,density:Math.max(.5,v()),rotationFactor:Math.max(.2,.5*v())*e});let f=null==d?void 0:d(n,i);(f||a>1)&&n.position.copy(n.bounds).multiply(null!==(o=null==f?void 0:f.point)&&void 0!==o?o:{x:2*v()-1,y:2*v()-1,z:2*v()-1});let g=Math.abs(n.position.x),y=Math.abs(n.position.y),x=Math.abs(n.position.z),w=Math.max(g,y,x);n.length=1,g===w&&(n.length-=g/n.bounds.x),y===w&&(n.length-=y/n.bounds.y),x===w&&(n.length-=x/n.bounds.z),n.volume=((null==f?void 0:f.volume)!==void 0?f.volume:Math.max(Math.max(0,h),"random"===p?v():"inside"===p?n.length:1-n.length))*l})},[p,r,u,c,t,m,l,g,a,e]),i.useLayoutEffect(()=>(w.current=[...w.current,...A],()=>{w.current=w.current.filter(t=>t.uuid!==E)}),[A]),i.useImperativeHandle(x,()=>M.current,[]),i.createElement("group",(0,n.Z)({ref:M},y))}),A=i.forwardRef((t,e)=>{let r=i.useContext(b);return r?i.createElement(E,(0,n.Z)({ref:e},t)):i.createElement(M,null,i.createElement(E,(0,n.Z)({ref:e},t)))})},7921:function(t,e,r){let a,n;r.d(e,{E9:function(){return v},wo:function(){return b}});var i=r(7462),o=r(9477),s=r(7294),c=r(2911),u=function(t){return function(e){t.forEach(function(t){"function"==typeof t?t(e):null!=t&&(t.current=e)})}};let l=new o.Matrix4,h=new o.Ray,d=new o.Sphere,f=new o.Vector3;class m extends o.Group{constructor(){super(),this.size=0,this.color=new o.Color("white"),this.instance={current:void 0},this.instanceKey={current:void 0}}get geometry(){var t;return null==(t=this.instance.current)?void 0:t.geometry}raycast(t,e){var r,a;let n=this.instance.current;if(!n||!n.geometry)return;let i=n.userData.instances.indexOf(this.instanceKey);if(-1===i||i>n.geometry.drawRange.count)return;let s=null!==(r=null==(a=t.params.Points)?void 0:a.threshold)&&void 0!==r?r:1;if(d.set(this.getWorldPosition(f),s),!1===t.ray.intersectsSphere(d))return;l.copy(n.matrixWorld).invert(),h.copy(t.ray).applyMatrix4(l);let c=s/((this.scale.x+this.scale.y+this.scale.z)/3),u=h.distanceSqToPoint(this.position);if(u<c*c){let r=new o.Vector3;h.closestPointToPoint(this.position,r),r.applyMatrix4(this.matrixWorld);let a=t.ray.origin.distanceTo(r);if(a<t.near||a>t.far)return;e.push({distance:a,distanceToRay:Math.sqrt(u),point:r,index:i,face:null,object:this})}}}let p=s.createContext(null),g=new o.Matrix4,y=new o.Vector3,x=s.forwardRef(({children:t,range:e,limit:r=1e3,...l},h)=>{let d=s.useRef(null),[f,m]=s.useState([]),[[x,v,w]]=s.useState(()=>[new Float32Array(3*r),Float32Array.from({length:3*r},()=>1),Float32Array.from({length:r},()=>1)]);s.useEffect(()=>{d.current.geometry.attributes.position.needsUpdate=!0}),(0,c.A)(()=>{for(d.current.updateMatrix(),d.current.updateMatrixWorld(),g.copy(d.current.matrixWorld).invert(),d.current.geometry.drawRange.count=Math.min(r,void 0!==e?e:r,f.length),a=0;a<f.length;a++)(n=f[a].current).getWorldPosition(y).applyMatrix4(g),y.toArray(x,3*a),d.current.geometry.attributes.position.needsUpdate=!0,n.matrixWorldNeedsUpdate=!0,n.color.toArray(v,3*a),d.current.geometry.attributes.color.needsUpdate=!0,w.set([n.size],a),d.current.geometry.attributes.size.needsUpdate=!0});let b=s.useMemo(()=>({getParent:()=>d,subscribe:t=>(m(e=>[...e,t]),()=>m(e=>e.filter(e=>e.current!==t.current)))}),[]);return s.createElement("points",(0,i.Z)({userData:{instances:f},matrixAutoUpdate:!1,ref:u([h,d]),raycast:()=>null},l),s.createElement("bufferGeometry",null,s.createElement("bufferAttribute",{attach:"attributes-position",count:x.length/3,array:x,itemSize:3,usage:o.DynamicDrawUsage}),s.createElement("bufferAttribute",{attach:"attributes-color",count:v.length/3,array:v,itemSize:3,usage:o.DynamicDrawUsage}),s.createElement("bufferAttribute",{attach:"attributes-size",count:w.length,array:w,itemSize:1,usage:o.DynamicDrawUsage})),s.createElement(p.Provider,{value:b},t))}),v=s.forwardRef(({children:t,...e},r)=>{s.useMemo(()=>(0,c.e)({PositionPoint:m}),[]);let a=s.useRef(),{subscribe:n,getParent:o}=s.useContext(p);return s.useLayoutEffect(()=>n(a),[]),s.createElement("positionPoint",(0,i.Z)({instance:o(),instanceKey:a,ref:u([r,a])},e),t)}),w=s.forwardRef(({children:t,positions:e,colors:r,sizes:a,stride:n=3,...l},h)=>{let d=s.useRef(null);return(0,c.A)(()=>{let t=d.current.geometry.attributes;t.position.needsUpdate=!0,r&&(t.color.needsUpdate=!0),a&&(t.size.needsUpdate=!0)}),s.createElement("points",(0,i.Z)({ref:u([h,d])},l),s.createElement("bufferGeometry",null,s.createElement("bufferAttribute",{attach:"attributes-position",count:e.length/n,array:e,itemSize:n,usage:o.DynamicDrawUsage}),r&&s.createElement("bufferAttribute",{attach:"attributes-color",count:r.length/n,array:r,itemSize:3,usage:o.DynamicDrawUsage}),a&&s.createElement("bufferAttribute",{attach:"attributes-size",count:a.length/n,array:a,itemSize:1,usage:o.DynamicDrawUsage})),t)}),b=s.forwardRef((t,e)=>t.positions instanceof Float32Array?s.createElement(w,(0,i.Z)({},t,{ref:e})):s.createElement(x,(0,i.Z)({},t,{ref:e})))},9521:function(t,e,r){r.d(e,{S:function(){return o}});var a=r(9477),n=r(4671);let i=0,o=(0,n.Z)(t=>(a.DefaultLoadingManager.onStart=(e,r,a)=>{t({active:!0,item:e,loaded:r,total:a,progress:(r-i)/(a-i)*100})},a.DefaultLoadingManager.onLoad=()=>{t({active:!1})},a.DefaultLoadingManager.onError=e=>t(t=>({errors:[...t.errors,e]})),a.DefaultLoadingManager.onProgress=(e,r,a)=>{r===a&&(i=a),t({active:!0,item:e,loaded:r,total:a,progress:(r-i)/(a-i)*100||100})},{errors:[],active:!1,progress:0,item:"",loaded:0,total:0}))},8623:function(t,e,r){r.d(e,{f:function(){return c}});var a=r(7294),n=r(2911),i=r(9477);let o=t=>Math.sqrt(1-Math.pow(t-1,2));class s{constructor({size:t=256,maxAge:e=750,radius:r=.3,intensity:a=.2,interpolate:n=0,smoothing:i=0,minForce:s=.3,blend:c="screen",ease:u=o}={}){this.size=t,this.maxAge=e,this.radius=r,this.intensity=a,this.ease=u,this.interpolate=n,this.smoothing=i,this.minForce=s,this.blend=c,this.trail=[],this.force=0,this.initTexture()}initTexture(){this.canvas=document.createElement("canvas"),this.canvas.width=this.canvas.height=this.size,this.ctx=this.canvas.getContext("2d"),this.ctx.fillStyle="black",this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height),this.texture=new i.Texture(this.canvas),this.canvas.id="touchTexture",this.canvas.style.width=this.canvas.style.height=`${this.canvas.width}px`}update(t){this.clear(),this.trail.forEach((e,r)=>{e.age+=1e3*t,e.age>this.maxAge&&this.trail.splice(r,1)}),this.trail.length||(this.force=0),this.trail.forEach(t=>{this.drawTouch(t)}),this.texture.needsUpdate=!0}clear(){this.ctx.globalCompositeOperation="source-over",this.ctx.fillStyle="black",this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height)}addTouch(t){let e=this.trail[this.trail.length-1];if(e){let r=e.x-t.x,a=e.y-t.y,n=r*r+a*a,i=Math.max(this.minForce,Math.min(1e4*n,1));if(this.force=function(t,e,r=.9){return e*r+t*(1-r)}(i,this.force,this.smoothing),this.interpolate){let t=Math.ceil(n/Math.pow(.5*this.radius/this.interpolate,2));if(t>1)for(let n=1;n<t;n++)this.trail.push({x:e.x-r/t*n,y:e.y-a/t*n,age:0,force:i})}}this.trail.push({x:t.x,y:t.y,age:0,force:this.force})}drawTouch(t){let e={x:t.x*this.size,y:(1-t.y)*this.size},r=1;r=(t.age<.3*this.maxAge?this.ease(t.age/(.3*this.maxAge)):this.ease(1-(t.age-.3*this.maxAge)/(.7*this.maxAge)))*t.force,this.ctx.globalCompositeOperation=this.blend;let a=this.size*this.radius*r,n=this.ctx.createRadialGradient(e.x,e.y,Math.max(0,.25*a),e.x,e.y,Math.max(0,a));n.addColorStop(0,`rgba(255, 255, 255, ${this.intensity})`),n.addColorStop(1,"rgba(0, 0, 0, 0.0)"),this.ctx.beginPath(),this.ctx.fillStyle=n,this.ctx.arc(e.x,e.y,Math.max(0,a),0,2*Math.PI),this.ctx.fill()}}function c(t={}){let{size:e,maxAge:r,radius:i,intensity:o,interpolate:c,smoothing:u,minForce:l,blend:h,ease:d}=t,f=(0,a.useMemo)(()=>new s(t),[e,r,i,o,c,u,l,h,d]);(0,n.A)((t,e)=>void f.update(e));let m=(0,a.useCallback)(t=>f.addTouch(t.uv),[f]);return[f.texture,m]}}}]);