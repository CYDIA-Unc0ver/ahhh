(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[252],{1676:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/project/[slug]",function(){return r(3498)}])},3498:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSG:function(){return B},default:function(){return X}});var n=r(5893),s=r(7294),a=r(1664),i=r.n(a),c=r(990),l=r(7212),o=r(3533),u=function(){let e=(0,s.useRef)();return(0,o.Cx)({onEnter:async()=>{e.current.classList.remove("hide")},onExiting:async()=>{e.current.classList.add("hide")}}),(0,n.jsx)(i(),{ref:e,href:"/",className:"closeBtn hide",scroll:!0,children:"Close"})},d=r(4184),f=r.n(d),h=r(4842),p=r(2708),x=r(4441),m=e=>{let{image:t,alt:r}=e,[a,i]=(0,s.useState)(null),[l,u,d]=(0,p.YD)({threshold:0}),f=(0,s.useRef)(),h=(0,s.useCallback)(()=>{a.add(()=>{c.p8.set(d.target,{opacity:1}),c.p8.killTweensOf(f.current),c.p8.to(f.current,{yPercent:0,opacity:1,duration:.8})})},[a,d]),m=(0,s.useCallback)(()=>{a.add(()=>{c.p8.killTweensOf(f.current),c.p8.set(f.current,{yPercent:20,opacity:0})})},[a]),g=(0,s.useCallback)(()=>{m()},[m]);(0,s.useEffect)(()=>{if(d&&!a)return i(c.p8.context(()=>{})),()=>null==a?void 0:a.revert()},[a,d]),(0,s.useEffect)(()=>{a&&g()},[a,g]),(0,s.useEffect)(()=>{if(!d||!a)return;let e=1===Math.sign(d.boundingClientRect.top);u?h():e&&m()},[u,d,a,h,m,g]);let _=()=>{a.add(()=>{c.p8.killTweensOf(d.target),c.p8.to(d.target,{scale:.8,opacity:0,duration:1,ease:"power1.in"})})};return(0,o.Cx)({onExit:()=>{_()}}),(0,n.jsx)("div",{ref:l,className:"component__imageProjectPage",children:(0,n.jsx)(x.Z,{ref:f,image:t,alt:r})})},g=r(162),_=(0,s.forwardRef)(function(e,t){let{}=e;return(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 17.828 17.828",children:(0,n.jsxs)("g",{fill:"none",stroke:"#fffae6",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2","data-name":"Icon feather-arrow-up-right",children:[(0,n.jsx)("path",{d:"m1.414 16.414 15-15","data-name":"Trac\xe9 6"}),(0,n.jsx)("path",{d:"M1.414 1.414h15v15","data-name":"Trac\xe9 7"})]})})}),j=r(8016);let w=e=>{let{link:t,projectName:r}=e,a=(0,s.useRef)();return(0,o.Cx)({onEnter:()=>{a.current.classList.add("show")}}),(0,n.jsxs)("div",{ref:a,className:"projectLink",children:[(0,n.jsx)(g.Z,{text:"See it live",href:t,targetBlank:!0,isExternalLink:!0,ariaLabel:"Go to ".concat(r,"'s website")}),(0,n.jsxs)("span",{className:"arrows",children:[(0,n.jsx)(_,{}),(0,n.jsx)(_,{})]})]})},v=e=>{let{children:t,className:r}=e;return(0,n.jsx)("div",{className:f()("component__wrapperLine",r),children:t})};var k=function(e){let{project:t}=e,{is3d:r}=(0,s.useContext)(j._),{name:a,description:i,client:l,agency:u,date:d,stack:p,link:x}=t,g=(0,s.useRef)(),_=(0,s.useRef)(),k=()=>{_.current.classList.add("show")},y=()=>{c.p8.to(g.current,{opacity:0,duration:.7})};return(0,o.Cx)({onEnter:e=>{let{from:t,to:r,done:n,data:s}=e;k()},onExit:e=>{let{from:t,to:r,done:n,data:s}=e;y()}}),(0,n.jsxs)("div",{ref:g,className:"top__container",children:[(0,n.jsxs)("div",{className:"left",children:[(0,n.jsx)(v,{className:"wrapperTitle",children:(0,n.jsx)("h1",{ref:_,className:"title",children:a})}),(0,n.jsxs)("ul",{className:"stack",children:[l&&(0,n.jsxs)("li",{children:[(0,n.jsx)(h.Z,{className:"stackTitle",type:"p",text:"Client :"}),(0,n.jsx)(h.Z,{className:"stackDescription",type:"p",text:l})]}),u&&(0,n.jsxs)("li",{children:[(0,n.jsx)(h.Z,{className:"stackTitle",type:"p",text:"Agency :"}),(0,n.jsx)(h.Z,{className:"stackDescription",type:"p",text:u})]}),p&&(0,n.jsxs)("li",{children:[(0,n.jsx)(h.Z,{className:"stackTitle",type:"p",text:"Stack :"}),(0,n.jsx)(h.Z,{className:"stackDescription",type:"p",text:p})]}),d&&(0,n.jsxs)("li",{children:[(0,n.jsx)(h.Z,{className:"stackTitle",type:"p",text:"Date :"}),(0,n.jsx)(h.Z,{className:"stackDescription",type:"p",text:d})]})]}),(0,n.jsxs)("div",{className:"description",children:[(0,n.jsxs)("div",{className:"brief",children:[(0,n.jsx)(h.Z,{type:"h3",text:"Brief :"}),(0,n.jsx)(h.Z,{type:"p",text:i})]}),x&&(0,n.jsx)(w,{link:x,projectName:a})]})]}),(0,n.jsx)("div",{className:"right",children:(0,n.jsx)("div",{className:f()("imgContainer",{show:!r}),children:(0,n.jsx)(m,{image:t.coverImage,alt:t.name})})})]})},y=r(1314);let N=(0,s.createContext)({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"});class C{constructor(){this.order=[],this.scheduled=new Set}add(e){if(!this.scheduled.has(e))return this.scheduled.add(e),this.order.push(e),!0}remove(e){let t=this.order.indexOf(e);-1!==t&&(this.order.splice(t,1),this.scheduled.delete(e))}clear(){this.order.length=0,this.scheduled.clear()}}let E=["prepare","read","update","preRender","render","postRender"],{schedule:P,cancel:b,state:T,steps:M}=function(e,t){let r=!1,n=!0,s={delta:0,timestamp:0,isProcessing:!1},a=E.reduce((e,t)=>(e[t]=function(e){let t=new C,r=new C,n=0,s=!1,a=!1,i=new WeakSet,c={schedule:(e,a=!1,c=!1)=>{let l=c&&s,o=l?t:r;return a&&i.add(e),o.add(e)&&l&&s&&(n=t.order.length),e},cancel:e=>{r.remove(e),i.delete(e)},process:l=>{if(s){a=!0;return}if(s=!0,[t,r]=[r,t],r.clear(),n=t.order.length)for(let r=0;r<n;r++){let n=t.order[r];n(l),i.has(n)&&(c.schedule(n),e())}s=!1,a&&(a=!1,c.process(l))}};return c}(()=>r=!0),e),{}),i=e=>a[e].process(s),c=()=>{let a=performance.now();r=!1,s.delta=n?1e3/60:Math.max(Math.min(a-s.timestamp,40),1),s.timestamp=a,s.isProcessing=!0,E.forEach(i),s.isProcessing=!1,r&&t&&(n=!1,e(c))},l=()=>{r=!0,n=!0,s.isProcessing||e(c)},o=E.reduce((e,t)=>{let n=a[t];return e[t]=(e,t=!1,s=!1)=>(r||l(),n.schedule(e,t,s)),e},{});return{schedule:o,cancel:e=>E.forEach(t=>a[t].cancel(e)),state:s,steps:a}}("undefined"!=typeof requestAnimationFrame?requestAnimationFrame:e=>e,!0);var R=r(6700),O=r(9754),L=r(7927);c.p8.registerPlugin(O.DrawSVGPlugin);var Z=(0,s.forwardRef)(function(e,t){let{link:r,className:a,label:l}=e,u=(0,s.useRef)(),d=(0,s.useRef)(),h=(0,s.useRef)(),p=(0,s.useRef)(),x=(0,s.useRef)(!1),m=(0,L.Z)(u),g=e=>{p.current.progress(e)},_=()=>{m.add(()=>{c.p8.killTweensOf(h.current),c.p8.to(h.current,{duration:.4,scaleX:1})})},j=()=>{m.add(()=>{c.p8.killTweensOf(h.current),c.p8.to(h.current,{duration:1,scaleX:0})})},w=()=>{x.current||(x.current=!0,p.current.reverse(),p.current.play())},v=()=>{m.add(()=>{c.p8.to(u.current,{opacity:0,scale:.94,duration:.2})})},k=()=>{d.current.click(),v()};return(0,o.Cx)({onExit:()=>{v()}}),(0,s.useImperativeHandle)(t,()=>({anim:g,animIn:_,animOut:j,animReset:w,click:k})),(0,s.useEffect)(()=>{c.p8.set(h.current,{scaleX:0}),p.current=c.p8.timeline({paused:!0,onReverseComplete:()=>{x.current=!1}}).to(h.current,{duration:1,scaleX:1,ease:"linear"})},[]),(0,n.jsxs)("div",{ref:u,className:f()("component__linkCircle",a),children:[(0,n.jsx)(i(),{ref:d,className:"component__linkCircle--link",href:r,scroll:!1,onMouseEnter:_,onMouseLeave:j,onClick:v,children:l}),(0,n.jsx)("span",{ref:h,className:"component__linkCircle--line"})]})}),S=r(5157),D=function(e){let{project:t}=e,{is3d:r}=(0,s.useContext)(j._),a=t.slug.current,c=t.nextProjectSlug,l=(0,y.uW)(),o=(0,s.useRef)(0),u=(0,s.useRef)(!0),d=(0,s.useRef)(!0);!function(e){let t=(0,s.useRef)(0),{isStatic:r}=(0,s.useContext)(N);(0,s.useEffect)(()=>{if(r)return;let n=({timestamp:r,delta:n})=>{t.current||(t.current=r),e(r-t.current,n)};return P.update(n,!0),()=>b(n)},[e])}((e,t)=>{o.current=(0,S.Z)(o.current-1e-4*t,0,1),d.current.anim(o.current)});let h=(0,s.useCallback)(e=>{let{y:t,limit:r}=l.scroll;t>=r-100&&(o.current+=e.deltaY/3e3,o.current>=1&&u.current&&(u.current=!1,window.removeEventListener("wheel",h),d.current.click()))},[]);return(0,s.useEffect)(()=>(window.addEventListener("wheel",h),()=>window.removeEventListener("wheel",h))),(0,n.jsxs)("footer",{className:"footer",children:[(0,n.jsx)(R.Z,{label1:"NEXT PROJECT",label2:"NEXT PROJECT",speed:.2,borders:!1,className:"project__marquee"}),(0,n.jsx)(i(),{className:f()("projectImgContainer",{show:!r}),href:{pathname:"/project/".concat(a),query:{nextProjectSlug:c}},scroll:!1,onMouseEnter:()=>{d.current.animIn()},onMouseLeave:()=>{d.current.animOut()},children:(0,n.jsx)(m,{image:t.coverImage,alt:t.name})}),(0,n.jsx)(Z,{ref:d,className:"link-circle",link:{pathname:"/project/".concat(a),query:{nextProjectSlug:c}},label:t.name})]})},A=r(1163),B=!0,X=function(e){let{currentProject:t,allProjects:r}=e,a=(0,l.Z)(t,r),i=(0,A.useRouter)(),d=(0,s.useRef)();(0,s.useEffect)(()=>{window.scrollTo(0,0)},[]);let f=e=>{let t=c.p8.timeline();return t.to(".overlay__transition",{scaleY:0,duration:2,delay:.1,ease:"expo.inOut",onComplete:e}),t.to(".overlay__transition--orange",{scaleY:0,duration:2.2,delay:.1,ease:"expo.inOut"},"<")},h=e=>c.p8.timeline({duration:1});return((0,o.Cx)({onExiting:async e=>{let{from:t,to:r,done:n,data:s}=e;r.includes("/project")?(await h(),n()):await f(n)}}),t)?(0,n.jsxs)("div",{ref:d,className:"page__project",children:[(0,n.jsx)(u,{}),(0,n.jsx)(k,{project:t}),(0,n.jsx)("div",{className:"project__images",children:t.images.map((e,r)=>(0,n.jsx)(m,{image:e,alt:t.name},r))}),i.query.nextProjectSlug&&(0,n.jsx)(D,{project:a})]}):(0,n.jsx)("div",{children:"404"})}},7927:function(e,t,r){"use strict";r.d(t,{Z:function(){return a}});var n=r(7294),s=r(990);function a(e){let t=(0,n.useMemo)(()=>s.p8.context(()=>{},e),[e]);return t}},9754:function(e,t){/*!
 * DrawSVGPlugin 3.10.4
 * https://greensock.com
 *
 * @license Copyright 2022, GreenSock. All rights reserved.
 * This plugin is a membership benefit of Club GreenSock and is only authorized for use in sites/apps/products developed by individuals/companies with an active Club GreenSock membership. See https://greensock.com/club
 * @author: Jack Doyle, jack@greensock.com
 */!function(e){"use strict";function t(){return f||(f=window.gsap)&&f.registerPlugin&&f}function r(e){return Math.round(1e4*e)/1e4}function n(e){return parseFloat(e)||0}function s(e,t){var r=n(e);return~e.indexOf("%")?r/100*t:r}function a(e,t){return n(e.getAttribute(t))}function i(e,t,r,s,a,i){return j(Math.pow((n(r)-n(e))*a,2)+Math.pow((n(s)-n(t))*i,2))}function c(e){return console.warn(e)}function l(e){return"non-scaling-stroke"===e.getAttribute("vector-effect")}function o(e){if(!(e=h(e)[0]))return 0;var t,r,n,s,o,u,d,f=e.tagName.toLowerCase(),p=e.style,x=1,m=1;l(e)&&(x=j((m=e.getScreenCTM()).a*m.a+m.b*m.b),m=j(m.d*m.d+m.c*m.c));try{r=e.getBBox()}catch(e){c("Some browsers won't measure invisible elements (like display:none or masks inside defs).")}var w=r||{x:0,y:0,width:0,height:0},v=w.x,k=w.y,y=w.width,N=w.height;if(r&&(y||N)||!_[f]||(y=a(e,_[f][0]),N=a(e,_[f][1]),"rect"!==f&&"line"!==f&&(y*=2,N*=2),"line"===f&&(v=a(e,"x1"),k=a(e,"y1"),y=Math.abs(y-v),N=Math.abs(N-k))),"path"===f)s=p.strokeDasharray,p.strokeDasharray="none",t=e.getTotalLength()||0,x!==m&&c("Warning: <path> length cannot be measured when vector-effect is non-scaling-stroke and the element isn't proportionally scaled."),t*=(x+m)/2,p.strokeDasharray=s;else if("rect"===f)t=2*y*x+2*N*m;else if("line"===f)t=i(v,k,v+y,k+N,x,m);else if("polyline"===f||"polygon"===f)for(n=e.getAttribute("points").match(g)||[],"polygon"===f&&n.push(n[0],n[1]),t=0,o=2;o<n.length;o+=2)t+=i(n[o-2],n[o-1],n[o],n[o+1],x,m)||0;else"circle"!==f&&"ellipse"!==f||(t=Math.PI*(3*((u=y/2*x)+(d=N/2*m))-j((3*u+d)*(u+3*d))));return t||0}function u(e,t){if(!(e=h(e)[0]))return[0,0];t=t||o(e)+1;var r=p.getComputedStyle(e),s=r.strokeDasharray||"",a=n(r.strokeDashoffset),i=s.indexOf(",");return i<0&&(i=s.indexOf(" ")),t<(s=i<0?t:n(s.substr(0,i)))&&(s=t),[-a||0,s-a||0]}function d(){p=window,m=f=t(),h=f.utils.toArray,x=-1!==((p.navigator||{}).userAgent||"").indexOf("Edge")}var f,h,p,x,m,g=/[-+=\.]*\d+[\.e\-\+]*\d*[e\-\+]*\d*/gi,_={rect:["width","height"],circle:["r","r"],ellipse:["rx","ry"],line:["x2","y2"]},j=Math.sqrt,w={version:"3.10.4",name:"drawSVG",register:function(e){f=e,d()},init:function(e,t){if(!e.getBBox)return!1;m||d();var a,i,c,f,h,g,_,j,w=o(e);return this._style=e.style,this._target=e,t+""=="true"?t="0 100%":t?-1===(t+"").indexOf(" ")&&(t="0 "+t):t="0 0",a=t,i=(g=u(e,w))[0],f=(h=a.indexOf(" "))<0?(c=void 0!==i?i+"":a,a):(c=a.substr(0,h),a.substr(h+1)),c=s(c,w),_=(f=s(f,w))<c?[f,c]:[c,f],this._length=r(w),this._dash=r(g[1]-g[0]),this._offset=r(-g[0]),this._dashPT=this.add(this,"_dash",this._dash,r(_[1]-_[0])),this._offsetPT=this.add(this,"_offset",this._offset,r(-_[0])),x&&(j=p.getComputedStyle(e)).strokeLinecap!==j.strokeLinejoin&&(_=n(j.strokeMiterlimit),this.add(e.style,"strokeMiterlimit",_,_+.01)),this._live=l(e)||~(t+"").indexOf("live"),this._nowrap=~(t+"").indexOf("nowrap"),this._props.push("drawSVG"),1},render:function(e,t){var r,n,s,a,i=t._pt,c=t._style;if(i){for(t._live&&(r=o(t._target))!==t._length&&(n=r/t._length,t._length=r,t._offsetPT&&(t._offsetPT.s*=n,t._offsetPT.c*=n),t._dashPT?(t._dashPT.s*=n,t._dashPT.c*=n):t._dash*=n);i;)i.r(e,i.d),i=i._next;s=t._dash||e&&1!==e&&1e-4||0,r=t._length-s+.1,a=t._offset,s&&a&&s+Math.abs(a%t._length)>t._length-.2&&(a+=a<0?.1:-.1)&&(r+=.1),c.strokeDashoffset=s?a:a+.001,c.strokeDasharray=r<.2?"none":s?s+"px,"+(t._nowrap?999999:r)+"px":"0px, 999999px"}},getLength:o,getPosition:u};t()&&f.registerPlugin(w),e.DrawSVGPlugin=w,e.default=w,window!==e?Object.defineProperty(e,"__esModule",{value:!0}):delete e.default}(t)},5626:function(e,t,r){"use strict";r.d(t,{Z:function(){return c}}),r(7294);var n=r(6803),s=r.n(n),a=r(5503);let i=s()(a.h);function c(e){return i.image(e)}},5157:function(e,t){"use strict";t.Z=(e,t,r)=>Math.min(Math.max(e,t),r)}},function(e){e.O(0,[802,990,664,444,684,351,774,888,179],function(){return e(e.s=1676)}),_N_E=e.O()}]);