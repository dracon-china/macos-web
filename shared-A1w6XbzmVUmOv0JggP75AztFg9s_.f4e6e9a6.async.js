!(function(){"use strict";var Ie=Object.defineProperty,Te=Object.defineProperties;var Ue=Object.getOwnPropertyDescriptors;var se=Object.getOwnPropertySymbols;var ve=Object.prototype.hasOwnProperty,we=Object.prototype.propertyIsEnumerable;var ge=(y,v,h)=>v in y?Ie(y,v,{enumerable:!0,configurable:!0,writable:!0,value:h}):y[v]=h,ae=(y,v)=>{for(var h in v||(v={}))ve.call(v,h)&&ge(y,h,v[h]);if(se)for(var h of se(v))we.call(v,h)&&ge(y,h,v[h]);return y},ye=(y,v)=>Te(y,Ue(v));var be=(y,v)=>{var h={};for(var b in y)ve.call(y,b)&&v.indexOf(b)<0&&(h[b]=y[b]);if(y!=null&&se)for(var b of se(y))v.indexOf(b)<0&&we.call(y,b)&&(h[b]=y[b]);return h};(self.webpackChunk=self.webpackChunk||[]).push([[295],{36208:function(y,v,h){h.d(v,{qD:function(){return Pe},FS:function(){return me},J0:function(){return Re},er:function(){return je},Fg:function(){return Ce},zY:function(){return Ve},iA:function(){return Ke}});const b=Symbol(),L=Symbol(),W="a",C="w";let K=(t,e)=>new Proxy(t,e);const U=Object.getPrototypeOf,_=new WeakMap,$=t=>t&&(_.has(t)?_.get(t):U(t)===Object.prototype||U(t)===Array.prototype),D=t=>typeof t=="object"&&t!==null,J=t=>{if(Array.isArray(t))return Array.from(t);const e=Object.getOwnPropertyDescriptors(t);return Object.values(e).forEach(n=>{n.configurable=!0}),Object.create(U(t),e)},N=t=>t[L]||t,B=(t,e,n,s)=>{if(!$(t))return t;let a=s&&s.get(t);if(!a){const u=N(t);a=(r=>Object.values(Object.getOwnPropertyDescriptors(r)).some(l=>!l.configurable&&!l.writable))(u)?[u,J(u)]:[u],s==null||s.set(t,a)}const[o,i]=a;let c=n&&n.get(o);return c&&c[1].f===!!i||(c=((u,r)=>{const l={f:r};let O=!1;const m=(z,g)=>{if(!O){let A=l[W].get(u);if(A||(A={},l[W].set(u,A)),z===C)A[C]=!0;else{let k=A[z];k||(k=new Set,A[z]=k),k.add(g)}}},w={get:(z,g)=>g===L?u:(m("k",g),B(Reflect.get(z,g),l[W],l.c,l.t)),has:(z,g)=>g===b?(O=!0,l[W].delete(u),!0):(m("h",g),Reflect.has(z,g)),getOwnPropertyDescriptor:(z,g)=>(m("o",g),Reflect.getOwnPropertyDescriptor(z,g)),ownKeys:z=>(m(C),Reflect.ownKeys(z))};return r&&(w.set=w.deleteProperty=()=>!1),[w,l]})(o,!!i),c[1].p=K(i||o,c[0]),n&&n.set(o,c)),c[1][W]=e,c[1].c=n,c[1].t=s,c[1].p},q=(t,e,n,s)=>{if(Object.is(t,e))return!1;if(!D(t)||!D(e))return!0;const a=n.get(N(t));if(!a)return!0;if(s){const i=s.get(t);if(i&&i.n===e)return i.g;s.set(t,{n:e,g:!1})}let o=null;try{for(const i of a.h||[])if(o=Reflect.has(t,i)!==Reflect.has(e,i),o)return o;if(a[C]===!0){if(o=((i,c)=>{const u=Reflect.ownKeys(i),r=Reflect.ownKeys(c);return u.length!==r.length||u.some((l,O)=>l!==r[O])})(t,e),o)return o}else for(const i of a.o||[])if(o=!!Reflect.getOwnPropertyDescriptor(t,i)!=!!Reflect.getOwnPropertyDescriptor(e,i),o)return o;for(const i of a.k||[])if(o=q(t[i],e[i],n,s),o)return o;return o===null&&(o=!0),o}finally{s&&s.set(t,{n:e,g:o})}},ue=t=>!!$(t)&&b in t,fe=t=>$(t)&&t[L]||null,Z=(t,e=!0)=>{_.set(t,e)},re=(t,e,n)=>{const s=[],a=new WeakSet,o=(i,c)=>{if(a.has(i))return;D(i)&&a.add(i);const u=D(i)&&e.get(N(i));if(u){var r,l;if((r=u.h)==null||r.forEach(m=>{const w=`:has(${String(m)})`;s.push(c?[...c,w]:[w])}),u[C]===!0){const m=":ownKeys";s.push(c?[...c,m]:[m])}else{var O;(O=u.o)==null||O.forEach(m=>{const w=`:hasOwn(${String(m)})`;s.push(c?[...c,w]:[w])})}(l=u.k)==null||l.forEach(m=>{n&&!("value"in(Object.getOwnPropertyDescriptor(i,m)||{}))||o(i[m],c?[...c,m]:[m])})}else c&&s.push(c)};return o(t),s},pe=t=>{K=t},oe=t=>typeof t=="object"&&t!==null,R=new WeakMap,G=new WeakSet,ze=(t=Object.is,e=(r,l)=>new Proxy(r,l),n=r=>oe(r)&&!G.has(r)&&(Array.isArray(r)||!(Symbol.iterator in r))&&!(r instanceof WeakMap)&&!(r instanceof WeakSet)&&!(r instanceof Error)&&!(r instanceof Number)&&!(r instanceof Date)&&!(r instanceof String)&&!(r instanceof RegExp)&&!(r instanceof ArrayBuffer),s=r=>{switch(r.status){case"fulfilled":return r.value;case"rejected":throw r.reason;default:throw r}},a=new WeakMap,o=(r,l,O=s)=>{const m=a.get(r);if((m==null?void 0:m[0])===l)return m[1];const w=Array.isArray(r)?[]:Object.create(Object.getPrototypeOf(r));return Z(w,!0),a.set(r,[l,w]),Reflect.ownKeys(r).forEach(z=>{if(Object.getOwnPropertyDescriptor(w,z))return;const g=Reflect.get(r,z),A={value:g,enumerable:!0,configurable:!0};if(G.has(g))Z(g,!1);else if(g instanceof Promise)delete A.value,A.get=()=>O(g);else if(R.has(g)){const[k,ie]=R.get(g);A.value=o(k,ie(),O)}Object.defineProperty(w,z,A)}),w},i=new WeakMap,c=[1,1],u=r=>{if(!oe(r))throw new Error("object required");const l=i.get(r);if(l)return l;let O=c[0];const m=new Set,w=(d,p=++c[0])=>{O!==p&&(O=p,m.forEach(f=>f(d,p)))};let z=c[1];const g=(d=++c[1])=>(z!==d&&!m.size&&(z=d,k.forEach(([p])=>{const f=p[1](d);f>O&&(O=f)})),O),A=d=>(p,f)=>{const S=[...p];S[1]=[d,...S[1]],w(S,f)},k=new Map,ie=(d,p)=>{if(k.has(d))throw new Error("prop listener already exists");if(m.size){const f=p[3](A(d));k.set(d,[p,f])}else k.set(d,[p])},he=d=>{var p;const f=k.get(d);f&&(k.delete(d),(p=f[1])==null||p.call(f))},_e=d=>(m.add(d),m.size===1&&k.forEach(([f,S],T)=>{if(S)throw new Error("remove already exists");const X=f[3](A(T));k.set(T,[f,X])}),()=>{m.delete(d),m.size===0&&k.forEach(([f,S],T)=>{S&&(S(),k.set(T,[f]))})}),ce=Array.isArray(r)?[]:Object.create(Object.getPrototypeOf(r)),te=e(ce,{deleteProperty(d,p){const f=Reflect.get(d,p);he(p);const S=Reflect.deleteProperty(d,p);return S&&w(["delete",[p],f]),S},set(d,p,f,S){const T=Reflect.has(d,p),X=Reflect.get(d,p,S);if(T&&(t(X,f)||i.has(f)&&t(X,i.get(f))))return!0;he(p),oe(f)&&(f=fe(f)||f);let ne=f;if(f instanceof Promise)f.then(M=>{f.status="fulfilled",f.value=M,w(["resolve",[p],M])}).catch(M=>{f.status="rejected",f.reason=M,w(["reject",[p],M])});else{!R.has(f)&&n(f)&&(ne=u(f));const M=!G.has(ne)&&R.get(ne);M&&ie(p,M)}return Reflect.set(d,p,ne,S),w(["set",[p],f,X]),!0}});i.set(r,te);const Be=[ce,g,o,_e];return R.set(te,Be),Reflect.ownKeys(r).forEach(d=>{const p=Object.getOwnPropertyDescriptor(r,d);"value"in p&&(te[d]=r[d],delete p.value,delete p.writable),Object.defineProperty(ce,d,p)}),te})=>[u,R,G,t,e,n,s,a,o,i,c],[ke]=ze();function Y(t={}){return ke(t)}function $e(t){const e=R.get(t);return e==null?void 0:e[1]()}function Oe(t,e,n){const s=R.get(t);s||console.warn("Please use proxy object");let a;const o=[],i=s[3];let c=!1;const r=i(l=>{if(o.push(l),n){e(o.splice(0));return}a||(a=Promise.resolve().then(()=>{a=void 0,c&&e(o.splice(0))}))});return c=!0,()=>{c=!1,r()}}function de(t,e){const n=R.get(t);n||console.warn("Please use proxy object");const[s,a,o]=n;return o(s,a(),e)}function Ne(t){return G.add(t),t}const Ze=null;var x=h(93236),Ae=h(15210);const{use:le}=x,{useSyncExternalStore:Se}=Ae,Fe=(t,e)=>{const n=(0,x.useRef)();(0,x.useEffect)(()=>{n.current=re(t,e,!0)}),(0,x.useDebugValue)(n.current)},xe=new WeakMap;function V(t,e){const n=e==null?void 0:e.sync,s=(0,x.useRef)(),a=(0,x.useRef)();let o=!0;const i=Se((0,x.useCallback)(r=>{const l=Oe(t,r,n);return r(),l},[t,n]),()=>{const r=de(t,le);try{if(!o&&s.current&&a.current&&!q(s.current,r,a.current,new WeakMap))return s.current}catch(l){}return r},()=>de(t,le));o=!1;const c=new WeakMap;(0,x.useEffect)(()=>{s.current=i,a.current=c}),Fe(i,c);const u=(0,x.useMemo)(()=>new WeakMap,[]);return B(i,c,u,xe)}var j=Y({apps:[{id:"launchpad",name:"Launchpad",icon:"https://img.icons8.com/?size=512&id=69463&format=png&color=1A6DFF,C822FF",dock:!0},{id:"github",name:"GitHub",icon:"https://img.icons8.com/?size=512&id=52539&format=png&color=1A6DFF,C822FF",url:"https://github.com/draco-china/macos-web",dock:!0},{id:"vscode",name:"VS Code",icon:"https://img.icons8.com/?size=512&id=i19Ns28h30P4&format=png&color=1A6DFF,C822FF",iframe:"https://github1s.com/draco-china/macos-web",dock:!0},{id:"app-store",name:"App Store",icon:"https://img.icons8.com/?size=512&id=V7EeO9rdpHrj&format=png&color=1A6DFF,C822FF",children:!0},{id:"settings",name:"Settings",icon:"https://img.icons8.com/?size=512&id=zxUWtopU6XdM&format=png&color=1A6DFF,C822FF",children:!0},{id:"poe",name:"Poe",icon:"https://img.icons8.com/?size=512&id=kTuxVYRKeKEY&format=png&color=1A6DFF,C822FF",url:"https://www.poe.com"},{id:"gmail",name:"Gmail",icon:"https://img.icons8.com/?size=512&id=48165&format=png&color=1A6DFF,C822FF",url:"https://mail.google.com"},{id:"microsoft-365",name:"Microsoft 365",icon:"https://img.icons8.com/?size=512&id=wUAGUBXx2syB&format=png&color=1A6DFF,C822FF",url:"https://www.office.com"}]}),Q={get:function(e){return j.apps.find(function(n){return n.id===e})},add:function(e){j.apps.find(function(n){return n.id===e.id})||j.apps.push(e)},remove:function(e){var n=j.apps.findIndex(function(s){return s.id===e});n!==-1&&j.apps.splice(n,1)},update:function(e,n){var s=j.apps.find(function(a){return a.id===e});s&&Object.assign(s,n)}},me=function(){var e=V(j),n=e.apps;return{apps:n,actions:Q}},Pe=function(e){var n=V(j.apps).find(function(s){return s.id===e});return{app:n,actions:{get:function(){return Q.get(e)},update:function(a){return Q.update(e,a)},remove:function(){return Q.remove(e)}}}},P=Y({apps:["poe","gmail","microsoft-365","app-store","settings"],size:5.6}),Ee={add:function(e){P.apps.includes(e)||P.apps.push(e)},remove:function(e){var n=P.apps.indexOf(e);n>-1&&P.apps.splice(n,1)},move:function(e,n){if(e!==n){var s=P.apps[e];P.apps.splice(e,1),P.apps.splice(n,0,s)}},set:function(e){P.apps=e},setSize:function(e){P.size=e}},Re=function(){var e=V(P),n=e.apps,s=e.size;return{apps:n,size:s,actions:Ee}},E=Y({apps:[]}),De={add:function(e){E.apps.includes(e)||E.apps.push(e)},remove:function(e){var n=E.apps.indexOf(e);n>-1&&E.apps.splice(n,1)},move:function(e,n){if(e!==n){var s=E.apps[e];E.apps.splice(e,1),E.apps.splice(n,0,s)}},set:function(e){E.apps=e}},je=function(){var e=V(E),n=e.apps,s=me(),a=s.apps;return(0,x.useEffect)(function(){E.apps=a.filter(function(o){return!o.dock}).map(function(o){return o.id})},[a]),{apps:n,actions:De}},Me=h.p+"static/dark.ea5cb259.webp",Le=h.p+"static/light.c5f2ec24.webp",I=Y({mode:"system",theme:"sky",background:{dark:Me,light:Le}});function H(){if(I.mode==="system"){var t=window.matchMedia("(prefers-color-scheme: dark)").matches;return t?"dark":"light"}return I.mode}function We(t){var e=new Image;e.src=t,e.onload=function(){document.body.style.backgroundImage="url(".concat(t,")")}}var ee={getMode:H,setMode:function(e){I.mode=e;var n=document.querySelector("html");n==null||n.setAttribute("data-mode",H())},setTheme:function(e){I.theme=e;var n=document.querySelector("html");n==null||n.setAttribute("data-theme",e)},setBackground:function(e){I.background=e,We(e[H()])}},Ce=function(){var e=V(I),n=e.mode,s=e.theme,a=e.background;return(0,x.useEffect)(function(){ee.setMode(n),ee.setTheme(s),ee.setBackground(a)},[]),{mode:n,theme:s,background:a[H()],actions:ee}},F=Y({opens:[],maximizeds:[],minimizeds:[]}),Ke=function(){var e=V(F),n=e.opens,s=e.maximizeds,a=e.minimizeds;return{opens:n,maximizeds:s,minimizeds:a}},Ve=function(e){var n=V(F),s=n.opens,a=n.maximizeds,o=n.minimizeds,i={open:function(){s.includes(e)||F.opens.push(e),i.unminimize(),i.active(),s.includes("launchpad")&&(F.opens=F.opens.filter(function(u){return u!=="launchpad"}))},close:function(){var u=F.opens.indexOf(e);u>-1&&(F.opens.splice(u,1),i.unmaximize(),i.unminimize())},active:function(){var u=s.indexOf(e);u>-1&&(F.opens.splice(u,1),F.opens.push(e))},maximize:function(){a.includes(e)||F.maximizeds.push(e)},unmaximize:function(){var u=a.indexOf(e);u>-1&&F.maximizeds.splice(u,1)},minimize:function(){o.includes(e)||F.minimizeds.push(e)},unminimize:function(){var u=o.indexOf(e);u>-1&&F.minimizeds.splice(u,1)}};return{open:s.includes(e),maximized:a.includes(e),minimized:o.includes(e),zIndex:s.indexOf(e)+1,actived:s[s.length-1]===e,actions:i}}},47912:function(y,v,h){h.d(v,{Z:function(){return C}});var b=h(93236),L={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const W=K=>K.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),C=(K,U)=>{const _=(0,b.forwardRef)((fe,ue)=>{var Z=fe,{color:$="currentColor",size:D=24,strokeWidth:J=2,absoluteStrokeWidth:N,children:B}=Z,q=be(Z,["color","size","strokeWidth","absoluteStrokeWidth","children"]);return(0,b.createElement)("svg",ae(ye(ae({ref:ue},L),{width:D,height:D,stroke:$,strokeWidth:N?Number(J)*24/Number(D):J,className:`lucide lucide-${W(K)}`}),q),[...U.map(([re,pe])=>(0,b.createElement)(re,pe)),...(Array.isArray(B)?B:[B])||[]])});return _.displayName=`${K}`,_}},27766:function(y,v,h){h.d(v,{Z:function(){return L}});var b=h(47912);const L=(0,b.Z)("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]])}}]);
}());