(()=>{"use strict";var e={515:(e,t,r)=>{var n=r(963),o=r(252),a=r(262),i=r(201),s=r(577);const l=e=>((0,o.dD)("data-v-79c57f4d"),e=e(),(0,o.Cn)(),e),u=l((()=>(0,o._)("div",{id:"menu"},[(0,o._)("a",{href:"/"},"Open Source Casino"),(0,o._)("a",{href:"/#/about"},"About")],-1))),p={id:"pointCounter"},d={id:"pointCounterContent"},c={name:"NavBar",props:{points:{type:Number,required:!0}},setup(e){return(t,r)=>((0,o.wg)(),(0,o.iD)("main",null,[u,(0,o._)("div",p,[(0,o._)("p",d,"Points: "+(0,s.zw)(e.points),1)])]))}};var m=r(570);const f=(0,m.Z)(c,[["__scopeId","data-v-79c57f4d"]]),h=f,g={data(){return{points:Number(localStorage.getItem("points")),games:["Slots"]}},methods:{changePoints(e){this.points+=e,localStorage.setItem("points",this.points)}}},v=Object.assign(g,{name:"App",setup(e){return null===localStorage.getItem("points")&&localStorage.setItem("points",1e6),(e,t)=>((0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o._)("header",null,[(0,o.Wm)(h,{points:e.points},null,8,["points"])]),(0,o.Wm)((0,a.SU)(i.MA),{games:e.games,onChangePoints:e.changePoints},null,8,["games","onChangePoints"])],64))}}),b=v,y=b,w=["href"],C={name:"HomeView",props:{games:{type:Array,required:!0}},setup(e){return(t,r)=>((0,o.wg)(),(0,o.iD)("main",null,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.games,(e=>((0,o.wg)(),(0,o.iD)("a",{class:"game",href:"/#/"+e},[(0,o._)("div",null,(0,s.zw)(e),1)],8,w)))),256))]))}},O=(0,m.Z)(C,[["__scopeId","data-v-75faffd2"]]),S=O,_=(0,i.p7)({history:(0,i.r5)("/"),routes:[{path:"/",name:"home",component:S},{path:"/about",name:"about",component:()=>r.e(507).then(r.bind(r,507))},{path:"/slots",name:"slots",component:()=>r.e(594).then(r.bind(r,594))}]}),k=_,j=(0,n.ri)(y);j.use(k),j.mount("#app")}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var a=t[n]={exports:{}};return e[n](a,a.exports,r),a.exports}r.m=e,(()=>{var e=[];r.O=(t,n,o,a)=>{if(!n){var i=1/0;for(p=0;p<e.length;p++){for(var[n,o,a]=e[p],s=!0,l=0;l<n.length;l++)(!1&a||i>=a)&&Object.keys(r.O).every((e=>r.O[e](n[l])))?n.splice(l--,1):(s=!1,a<i&&(i=a));if(s){e.splice(p--,1);var u=o();void 0!==u&&(t=u)}}return t}a=a||0;for(var p=e.length;p>0&&e[p-1][2]>a;p--)e[p]=e[p-1];e[p]=[n,o,a]}})(),(()=>{r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}})(),(()=>{r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce(((t,n)=>(r.f[n](e,t),t)),[]))})(),(()=>{r.u=e=>"js/"+e+"."+{507:"1485d593",594:"27235db0"}[e]+".js"})(),(()=>{r.miniCssF=e=>"css/"+e+"."+{507:"f33d151a",594:"fb62021a"}[e]+".css"})(),(()=>{r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})(),(()=>{var e={},t="opensourcecasino:";r.l=(n,o,a,i)=>{if(e[n])e[n].push(o);else{var s,l;if(void 0!==a)for(var u=document.getElementsByTagName("script"),p=0;p<u.length;p++){var d=u[p];if(d.getAttribute("src")==n||d.getAttribute("data-webpack")==t+a){s=d;break}}s||(l=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,r.nc&&s.setAttribute("nonce",r.nc),s.setAttribute("data-webpack",t+a),s.src=n),e[n]=[o];var c=(t,r)=>{s.onerror=s.onload=null,clearTimeout(m);var o=e[n];if(delete e[n],s.parentNode&&s.parentNode.removeChild(s),o&&o.forEach((e=>e(r))),t)return t(r)},m=setTimeout(c.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=c.bind(null,s.onerror),s.onload=c.bind(null,s.onload),l&&document.head.appendChild(s)}}})(),(()=>{r.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{r.p="/"})(),(()=>{var e=(e,t,r,n)=>{var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var a=a=>{if(o.onerror=o.onload=null,"load"===a.type)r();else{var i=a&&("load"===a.type?"missing":a.type),s=a&&a.target&&a.target.href||t,l=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");l.code="CSS_CHUNK_LOAD_FAILED",l.type=i,l.request=s,o.parentNode.removeChild(o),n(l)}};return o.onerror=o.onload=a,o.href=t,document.head.appendChild(o),o},t=(e,t)=>{for(var r=document.getElementsByTagName("link"),n=0;n<r.length;n++){var o=r[n],a=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(a===e||a===t))return o}var i=document.getElementsByTagName("style");for(n=0;n<i.length;n++){o=i[n],a=o.getAttribute("data-href");if(a===e||a===t)return o}},n=n=>new Promise(((o,a)=>{var i=r.miniCssF(n),s=r.p+i;if(t(i,s))return o();e(n,s,o,a)})),o={143:0};r.f.miniCss=(e,t)=>{var r={507:1,594:1};o[e]?t.push(o[e]):0!==o[e]&&r[e]&&t.push(o[e]=n(e).then((()=>{o[e]=0}),(t=>{throw delete o[e],t})))}})(),(()=>{var e={143:0};r.f.j=(t,n)=>{var o=r.o(e,t)?e[t]:void 0;if(0!==o)if(o)n.push(o[2]);else{var a=new Promise(((r,n)=>o=e[t]=[r,n]));n.push(o[2]=a);var i=r.p+r.u(t),s=new Error,l=n=>{if(r.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var a=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.src;s.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",s.name="ChunkLoadError",s.type=a,s.request=i,o[1](s)}};r.l(i,l,"chunk-"+t,t)}},r.O.j=t=>0===e[t];var t=(t,n)=>{var o,a,[i,s,l]=n,u=0;if(i.some((t=>0!==e[t]))){for(o in s)r.o(s,o)&&(r.m[o]=s[o]);if(l)var p=l(r)}for(t&&t(n);u<i.length;u++)a=i[u],r.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return r.O(p)},n=self["webpackChunkopensourcecasino"]=self["webpackChunkopensourcecasino"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var n=r.O(void 0,[998],(()=>r(515)));n=r.O(n)})();
//# sourceMappingURL=app.bdadd9d7.js.map