var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function r(t){return"function"==typeof t}function i(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function l(t,e){t.appendChild(e)}function c(t,e,n){t.insertBefore(e,n||null)}function u(t){t.parentNode.removeChild(t)}function a(t){return document.createElement(t)}function s(t){return document.createTextNode(t)}function d(){return s(" ")}function h(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function f(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function p(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}let g;function m(t){g=t}const b=[],x=[],y=[],$=[],k=Promise.resolve();let w=!1;function C(t){y.push(t)}const _=new Set;let v=0;function E(){const t=g;do{for(;v<b.length;){const t=b[v];v++,m(t),O(t.$$)}for(m(null),b.length=0,v=0;x.length;)x.pop()();for(let t=0;t<y.length;t+=1){const e=y[t];_.has(e)||(_.add(e),e())}y.length=0}while(b.length);for(;$.length;)$.pop()();w=!1,_.clear(),m(t)}function O(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(C)}}const T=new Set;function L(t,e){-1===t.$$.dirty[0]&&(b.push(t),w||(w=!0,k.then(E)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function A(i,l,c,a,s,d,h,f=[-1]){const p=g;m(i);const b=i.$$={fragment:null,ctx:null,props:d,update:t,not_equal:s,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(l.context||(p?p.$$.context:[])),callbacks:n(),dirty:f,skip_bound:!1,root:l.target||p.$$.root};h&&h(b.root);let x=!1;if(b.ctx=c?c(i,l.props||{},((t,e,...n)=>{const o=n.length?n[0]:e;return b.ctx&&s(b.ctx[t],b.ctx[t]=o)&&(!b.skip_bound&&b.bound[t]&&b.bound[t](o),x&&L(i,t)),e})):[],b.update(),x=!0,o(b.before_update),b.fragment=!!a&&a(b.ctx),l.target){if(l.hydrate){const t=function(t){return Array.from(t.childNodes)}(l.target);b.fragment&&b.fragment.l(t),t.forEach(u)}else b.fragment&&b.fragment.c();l.intro&&((y=i.$$.fragment)&&y.i&&(T.delete(y),y.i($))),function(t,n,i,l){const{fragment:c,on_mount:u,on_destroy:a,after_update:s}=t.$$;c&&c.m(n,i),l||C((()=>{const n=u.map(e).filter(r);a?a.push(...n):o(n),t.$$.on_mount=[]})),s.forEach(C)}(i,l.target,l.anchor,l.customElement),E()}var y,$;m(p)}function U(t,e,n){const o=t.slice();return o[5]=e[n],o}function P(t){let e,n,o,r,i,g,m,b,x,y,$,k=t[5].key+"";function w(){return t[3](t[5])}return{c(){e=a("dt"),n=a("b"),o=s(k),r=a("dd"),i=a("input"),m=d(),b=a("button"),b.textContent="Delete",x=d(),f(i,"type","text"),i.value=g=t[5].url,f(i,"size","80")},m(t,u){c(t,e,u),l(e,n),l(n,o),c(t,r,u),l(r,i),l(r,m),l(r,b),l(r,x),y||($=h(b,"click",w),y=!0)},p(e,n){t=e,1&n&&k!==(k=t[5].key+"")&&p(o,k),1&n&&g!==(g=t[5].url)&&i.value!==g&&(i.value=g)},d(t){t&&u(e),t&&u(r),y=!1,$()}}}function H(e){let n,o,r,i,f,g,m,b,x,y,$,k,w,C,_,v,E,O,T,L,A,H,M,j,G,z,D,N,S,I,q,B,F,J,K,Q,V,W,X,Y,Z,tt,et,nt,ot,rt,it,lt,ct,ut,at,st,dt,ht,ft,pt,gt,mt,bt,xt,yt,$t,kt,wt,Ct,_t,vt,Et,Ot,Tt,Lt,At,Ut,Pt,Ht,Rt,Mt=e[0].length+"",jt=e[0],Gt=[];for(let t=0;t<jt.length;t+=1)Gt[t]=P(U(e,jt,t));return{c(){n=a("main"),o=a("h1"),o.textContent="Acme Open In - Options",r=d(),i=a("p"),f=a("b"),f.textContent="Total:",g=d(),m=s(Mt),b=s(" settings"),x=d(),y=a("dl");for(let t=0;t<Gt.length;t+=1)Gt[t].c();$=d(),k=a("b"),k.textContent="Add a context menu item",w=d(),C=a("form"),C.innerHTML='<table><tr><td><label for="key">Title([<i>Guard</i>]):</label></td> \n            <td><input type="text" name="key" size="60"/></td></tr> \n        <tr><td><label for="url">Url:</label></td> \n            <td><input type="text" name="url" size="60"/></td></tr></table> \n   <button type="submit">Add</button>',_=d(),v=a("hr"),E=d(),O=a("p"),T=s("Add context menu items to your Acme Open In extension. The "),L=a("b"),L.textContent="Title",A=s(" should be\na title for a menu item such as "),H=a("i"),H.textContent="Open...",M=s(", "),j=a("i"),j.textContent="Edit...",G=s(". The\n"),z=a("b"),z.textContent="Url",D=s(" should point to an application you wan to open. Use \nthe "),N=a("tt"),N.textContent=`${R}`,S=s(" template to fill in the current\nlink, image, page URL that is in context."),I=s("\n\nSome examples:\n"),q=a("ul"),B=a("li"),F=a("b"),F.textContent="Open...",J=s(" https://otto-aa.github.io/solid-filemanager/?url="),K=s(R),Q=d(),V=a("li"),W=a("b"),W.textContent="Edit...",X=s(" https://solideditor.patrickhochstenbach.net/?resource="),Y=s(R),Z=d(),tt=a("li"),et=a("b"),et.textContent="Permissions...",nt=s(" https://waceditor.patrickhochstenbach.net/?resource="),ot=s(R),rt=d(),it=a("p"),it.innerHTML="A <i>Guard</i> is a method to restrict when these context menu items appear.\nThere are two types of guards:",lt=d(),ct=a("ul"),ct.innerHTML="<li>[<b>document~</b><i>URLPattern</i>] - only show the menu item when the current page matches\n    a URLPattern.</li> \n    <li>[<b>target~</b><i>URLPattern</i>] - only show the menu item when the context link matches\n    a URLPattern.</li>",ut=d(),at=a("p"),at.textContent="and",st=d(),dt=a("ul"),dt.innerHTML="<li><i>URLPattern</i> - is a wildcard pattern such as &#39;https://*.google.com/foo*bar&#39;</li>",ht=d(),ft=a("p"),ft.textContent='E.g. Only add a "Test..." context menu when the current page is a GitHub page:',pt=d(),gt=a("ul"),mt=a("li"),bt=a("b"),bt.textContent="Test...[document~https://github.com/*]",xt=s(" \n        http://foo.bar/?url="),yt=s(R),$t=d(),kt=a("p"),kt.textContent="A document and target guard can be combined. E.g. On GitHub open all links\n    with a `.txt` extension in a text editor, and all links with a `.doc` in\n    a doc editor.",wt=d(),Ct=a("ul"),_t=a("li"),vt=a("b"),vt.textContent="Edit...[document~https://github.com/*][target~https://*/*.txt]",Et=s("\n        http://texteditor.org/?url="),Ot=s(R),Tt=d(),Lt=a("li"),At=a("b"),At.textContent="Edit...[document~https://github.com/*][target~https://*/*.doc]",Ut=s("\n        http://doceditor.org/?url="),Pt=s(R)},m(t,u){c(t,n,u),l(n,o),l(n,r),l(n,i),l(i,f),l(i,g),l(i,m),l(i,b),l(n,x),l(n,y);for(let t=0;t<Gt.length;t+=1)Gt[t].m(y,null);var a;l(n,$),l(n,k),l(n,w),l(n,C),l(n,_),l(n,v),l(n,E),l(n,O),l(O,T),l(O,L),l(O,A),l(O,H),l(O,M),l(O,j),l(O,G),l(O,z),l(O,D),l(O,N),l(O,S),l(n,I),l(n,q),l(q,B),l(B,F),l(B,J),l(B,K),l(q,Q),l(q,V),l(V,W),l(V,X),l(V,Y),l(q,Z),l(q,tt),l(tt,et),l(tt,nt),l(tt,ot),l(n,rt),l(n,it),l(n,lt),l(n,ct),l(n,ut),l(n,at),l(n,st),l(n,dt),l(n,ht),l(n,ft),l(n,pt),l(n,gt),l(gt,mt),l(mt,bt),l(mt,xt),l(mt,yt),l(n,$t),l(n,kt),l(n,wt),l(n,Ct),l(Ct,_t),l(_t,vt),l(_t,Et),l(_t,Ot),l(Ct,Tt),l(Ct,Lt),l(Lt,At),l(Lt,Ut),l(Lt,Pt),Ht||(Rt=h(C,"submit",(a=e[1],function(t){return t.preventDefault(),a.call(this,t)})),Ht=!0)},p(t,[e]){if(1&e&&Mt!==(Mt=t[0].length+"")&&p(m,Mt),5&e){let n;for(jt=t[0],n=0;n<jt.length;n+=1){const o=U(t,jt,n);Gt[n]?Gt[n].p(o,e):(Gt[n]=P(o),Gt[n].c(),Gt[n].m(y,null))}for(;n<Gt.length;n+=1)Gt[n].d(1);Gt.length=jt.length}},i:t,o:t,d(t){t&&u(n),function(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}(Gt,t),Ht=!1,Rt()}}}let R="{resource}";function M(t,e,n){let o=[];function r(t){console.log(`deleting ${t}`),chrome.storage.sync.remove(t,(()=>{console.log("done"),i()}))}function i(){chrome.storage.sync.get(null,(t=>{let e=Object.keys(t);n(0,o=[]),e.forEach((e=>{o.push({key:e,url:t[e]})})),n(0,o),console.log("options: %O",o)}))}i();return[o,function(t){console.log("adding..."),console.log(t);const e=new FormData(t.target),n={};for(let t of e){const[e,o]=t;n[e]=o}if(0==o.length){console.log("adding one %O",n);let t={};t[n.key]=n.url,console.log("adding one %O",t),chrome.storage.sync.set(t,(()=>{console.log("done"),i()}))}else chrome.storage.sync.get(null,(t=>{t[n.key]=n.url,console.log("adding to existing %O",t),chrome.storage.sync.set(t,(()=>{console.log("done"),i()}))}));t.target.reset()},r,t=>r(t.key)]}return new class extends class{$destroy(){!function(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}{constructor(t){super(),A(this,t,M,H,i,{})}}({target:document.body,props:{name:"world"}})}();
//# sourceMappingURL=bundle.js.map
