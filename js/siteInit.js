import{a as U,c as G,d as Ue,e as qe,f as je,g as ze,h as Ge,i as $e,j as K}from"./chunk-52NF4PVE.js";import{$ as Be,A as ve,B as C,C as B,D as we,E as D,F as V,G as J,H as be,I as ye,L as Ce,M as Le,N as Ee,O as Ae,P as Te,Q as xe,R as ke,S as _e,T as He,U as Se,V as Ie,W as Oe,X as Re,Y as Pe,Z as Ne,_ as Me,a as he,aa as De,b as l,ba as g,ca as L,d as _,f as H,g as me,i as R,j as w,k as ue,l as f,m as X,n as P,o as N,p as fe,q as pe,r as M,s as j,t as ge,u as T,v as b,w as z,x,y as Z,z as u}from"./chunk-XWLQ2736.js";import"./chunk-35ELGMRU.js";import{c as m}from"./chunk-MDK4KVSQ.js";m();m();m();ue();var S=(e,t)=>{u.hasClass("on")?(u.removeClass("on"),x.removeClass("close"),t?u.style="":g(u,"slideRightOut")):t?u.style="":g(u,"slideRightIn",()=>{u.addClass("on"),x.addClass("close")})},Fe=()=>{let e=w(u,".inner");u.child(".tab")&&e.removeChild(u.child(".tab"));let t=document.createElement("ul"),o="active";t.className="tab",["contents","related","overview"].forEach(s=>{let i=u.child(".panel."+s);if(i.innerHTML.trim().length<1){s==="contents"&&R(D,"none");return}s==="contents"&&R(D,"");let r=document.createElement("li"),c=document.createElement("span"),n=document.createTextNode(i.getAttribute("data-title"));c.appendChild(n),r.appendChild(c),r.addClass(s+" item"),o?(i.addClass(o),r.addClass(o)):i.removeClass("active"),r.addEventListener("click",a=>{let d=a.currentTarget;d.hasClass("active")||(u.find(".tab .item").forEach(h=>{h.removeClass("active")}),u.find(".panel").forEach(h=>{h.removeClass("active")}),u.child(".panel."+d.className.replace(" item","")).addClass("active"),d.addClass("active"))}),t.appendChild(r),o=""}),t.childNodes.length>1?(e.insertBefore(t,e.childNodes[0]),u.child(".panels").style.paddingTop=""):u.child(".panels").style.paddingTop=".625rem"},We=()=>{let e=n=>{let a=t[n];if(!a||a.hasClass("current"))return;l.each(".toc .active",h=>{h&&h.removeClass("active current")}),o.forEach(h=>{h&&h.removeClass("active")}),a.addClass("active current"),o[n]&&o[n].addClass("active");let d=a.parentNode;for(;!d.matches(".contents");){if(d.matches("li")){d.addClass("active");let h=l(d.child("a.toc-link").getAttribute("href"));h&&h.addClass("active")}d=d.parentNode}getComputedStyle(u).display!=="none"&&i.hasClass("active")&&L(i,a.offsetTop-i.offsetHeight/4)},t=l.all(".contents li");if(t.length<1)return;let o=[...t],s=null;o=o.map((n,a)=>{let d=n.child("a.toc-link"),h=l(decodeURI(d.getAttribute("href")));if(!h)return null;let q=h.child("a.anchor"),O=A=>{A.preventDefault();let pt=l(decodeURI(A.currentTarget.getAttribute("href")));s=a,L(pt,null,()=>{e(a),s=null})};return d.addEventListener("click",O),q&&q.addEventListener("click",A=>{O(A),qe(f.hostname+"/"+LOCAL.path+A.currentTarget.getAttribute("href"))}),h});let i=u.child(".contents.panel"),r=n=>{let a=0,d=n[a];if(d.boundingClientRect.top>0)return a=o.indexOf(d.target),a===0?0:a-1;for(;a<n.length;a++)if(n[a].boundingClientRect.top<=0)d=n[a];else return o.indexOf(d.target);return o.indexOf(d.target)};(()=>{let n=new IntersectionObserver(a=>{let d=r(a)+(N<0?1:0);s===null&&e(d)},{rootMargin:"0px 0px -100% 0px",threshold:0});o.forEach(a=>{a&&n.observe(a)})})()},Q=()=>{L(0)},Ye=()=>{L(parseInt(String(H(ge))))},Xe=()=>{L(l("#comments"))},Ze=()=>{l.each(".menu .item:not(.title)",e=>{let t=e.child("a[href]"),o=e.parentNode.parentNode;if(!t)return;let s=t.pathname===location.pathname||t.pathname===location.pathname.replace("index.html",""),i=!f.root.startsWith(t.pathname)&&location.pathname.startsWith(t.pathname),r=!t.onclick&&t.hostname===location.hostname&&(s||i);e.toggleClass("active",r),e.parentNode.child(".active")&&o.hasClass("dropdown")?o.removeClass("active").addClass("expand"):o.removeClass("expand")})};m();var v={timer:void 0,lock:!1,show(){clearTimeout(this.timer),document.body.removeClass("loaded"),T.setAttribute("style","display:block"),v.lock=!1},hide(e){f.loader.start||(e=-1),this.timer=setTimeout(this.vanish,e||3e3)},vanish(){v.lock||(f.loader.start&&g(T,0),document.body.addClass("loaded"),v.lock=!0)}};function ee(){l.each(".overview .menu > .item",t=>{w(b,".menu").appendChild(t.cloneNode(!0))}),T.addEventListener("click",v.vanish),x.addEventListener("click",S),l(".dimmer").addEventListener("click",S),w(Z,".down").addEventListener("click",Ye),w(Z,".up").addEventListener("click",Q),C||Be(_(z,"div",{id:"tool",innerHTML:'<div class="item player"></div><div class="item contents"><i class="ic i-list-ol"></i></div><div class="item chat"><i class="ic i-comments"></i></div><div class="item back-to-top"><i class="ic i-arrow-up"></i><span>0%</span></div>'})),Re(C.child(".player")),Pe(C.child(".back-to-top")),Ne(C.child(".chat")),Me(C.child(".contents")),B.addEventListener("click",Q),we.addEventListener("click",Xe),D.addEventListener("click",S),(()=>{new IntersectionObserver(([t])=>{t.isIntersecting?(document.querySelectorAll(".parallax>use").forEach(o=>{o.classList.remove("stop-animation")}),document.querySelectorAll("#imgs .item").forEach(o=>{o.classList.remove("stop-animation")})):(document.querySelectorAll(".parallax>use").forEach(o=>{o.classList.add("stop-animation")}),document.querySelectorAll("#imgs .item").forEach(o=>{o.classList.add("stop-animation")}))},{root:null,threshold:.2}).observe(document.getElementById("waves")),new IntersectionObserver(([t])=>{t.isIntersecting?document.querySelectorAll(".with-love>i").forEach(o=>{o.classList.remove("stop-animation")}):document.querySelectorAll(".with-love>i").forEach(o=>{o.classList.add("stop-animation")})},{root:null,threshold:.2}).observe(document.querySelector(".with-love"))})()}m();m();var Ve=()=>{if(!l(".index.wrap"))return;let e=new IntersectionObserver(t=>{t.forEach(o=>{o.target.hasClass("show")?e.unobserve(o.target):(o.isIntersecting||o.intersectionRatio>0)&&(o.target.addClass("show"),e.unobserve(o.target))})},{root:null,threshold:[.3]});l.each(".index.wrap article.item, .index.wrap section.item",t=>{e.observe(t)}),l(".index.wrap .item:first-child").addClass("show"),l.each(".cards .item",t=>{["mouseenter","touchstart"].forEach(o=>{t.addEventListener(o,()=>{l(".cards .item.active")&&l(".cards .item.active").removeClass("active"),t.addClass("active")},{passive:!0})}),["mouseleave"].forEach(o=>{t.addEventListener(o,()=>{t.removeClass("active")},{passive:!0})})})};m();m();var y=e=>{let t=l(".theme .ic");e==="dark"?(j.setAttribute("data-theme",e),t.removeClass("i-sun"),t.addClass("i-moon")):(j.removeAttribute("data-theme"),t.removeClass("i-moon"),t.addClass("i-sun"))},Je=()=>{f.auto_dark.enable&&(new Date().getHours()>=f.auto_dark.start||new Date().getHours()<=f.auto_dark.end?y("dark"):y())},te=e=>{j.getAttribute("data-theme")==="dark"&&(e="#222"),l('meta[name="theme-color"]').setAttribute("content",e)},Ke=()=>{window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",t=>{t.matches?y("dark"):y()});let e=U.get("theme");e?y(e):f.darkmode&&y("dark")};var $=()=>{Le(H(b)),Ee(H(z)),Ae(J+H(l("#waves"))),ye!==window.innerWidth&&S(null,1),Te(window.innerHeight),xe(window.innerWidth)},Qe=()=>{let e=window.innerHeight,t=he(),o=t>e?t-e:document.body.scrollHeight-e,s=window.scrollY>J,i=window.scrollY>0;s?te("#FFF"):te("#222"),b.toggleClass("show",s),C.toggleClass("affix",i),ve.toggleClass("affix",i),u.toggleClass("affix",window.scrollY>be&&document.body.offsetWidth>991),typeof P.y>"u"&&(P.y=window.scrollY),ke(P.y-window.scrollY),N<0?(b.removeClass("up"),b.toggleClass("down",s)):N>0&&(b.removeClass("down"),b.toggleClass("up",s)),P.y=window.scrollY;let r=Math.round(Math.min(100*window.scrollY/o,100))+"%";B.child("span").innerText!==r&&(B.child("span").innerText=r),(l("#sidebar").hasClass("affix")||l("#sidebar").hasClass("on"))&&me(l(".percent"),r)},et=()=>{let e=l('[rel="icon"]');document.addEventListener("visibilitychange",()=>{switch(document.visibilityState){case"hidden":e.setAttribute("href",X+f.favicon.hidden),document.title=LOCAL.favicon.hide,f.loader.switch&&v.show(),clearTimeout(pe);break;case"visible":e.setAttribute("href",X+f.favicon.normal),document.title=LOCAL.favicon.show,f.loader.switch&&v.hide(1e3),_e(setTimeout(()=>{document.title=fe},2e3));break}},{passive:!0})};m();m();m();m();var tt=typeof window>"u",oe=!tt&&"loading"in HTMLImageElement.prototype,se=!tt&&(!("onscroll"in window)||/(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent));function ot(e,t=document){return typeof e=="string"?[...t.querySelectorAll(e)]:e instanceof Element?[e]:[...e]}function st(e,t){let o;return function(...s){o&&clearTimeout(o),o=setTimeout(()=>{o=void 0,e(...s)},t)}}var it=32,nt="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";var gt=Math.PI,go=gt*2;function re(e='img[loading="lazy"]',{hash:t=!0,hashType:o="blurhash",placeholderSize:s=it,updateSizesOnResize:i=!1,onImageLoad:r}={}){let c=new Set;for(let n of ot(e)){let a=ne(n,{updateOnResize:i});if(i&&a&&c.add(a),!n.dataset.src&&!n.dataset.srcset)continue;if(se||!oe){rt(n),ce(n),ae(n);continue}if(n.src||(n.src=nt),n.complete&&n.naturalWidth>0){ie(n,r);continue}let d=()=>ie(n,r);n.addEventListener("load",d,{once:!0}),c.add(()=>n.removeEventListener("load",d))}return()=>{for(let n of c)n();c.clear()}}function ie(e,t){let o=new Image,{srcset:s,src:i,sizes:r}=e.dataset;if(r==="auto"){let c=at(e);c&&(o.sizes=`${c}px`)}else e.sizes&&(o.sizes=e.sizes);s&&(o.srcset=s),i&&(o.src=i),o.addEventListener("load",()=>{rt(e),ce(e),ae(e),t?.(e)})}var F=new WeakMap;function ne(e,t){if(e.dataset.sizes!=="auto")return;let o=at(e);if(o&&(e.sizes=`${o}px`),e.parentElement?.tagName.toLowerCase()==="picture"&&!t?.skipChildren&&[...e.parentElement.getElementsByTagName("source")].forEach(s=>ne(s,{skipChildren:!0})),t?.updateOnResize){if(!F.has(e)){let s=st(()=>ne(e),500),i=new ResizeObserver(s);F.set(e,i),i.observe(e)}return()=>{let s=F.get(e);s&&(s.disconnect(),F.delete(e))}}}function ae(e){e.dataset.src&&(e.src=e.dataset.src,e.removeAttribute("data-src"))}function ce(e){e.dataset.srcset&&(e.srcset=e.dataset.srcset,e.removeAttribute("data-srcset"))}function rt(e){let t=e.parentElement;t?.tagName.toLowerCase()==="picture"&&([...t.querySelectorAll("source[data-srcset]")].forEach(ce),[...t.querySelectorAll("source[data-src]")].forEach(ae))}function at(e){return e instanceof HTMLSourceElement?e.parentElement?.getElementsByTagName("img")[0]?.offsetWidth:e.offsetWidth}var ct=()=>{G(),u.hasClass("on")&&g(u,0,()=>{u.removeClass("on"),x.removeClass("close")});let e=l("#main");e.innerHTML="",e.appendChild(T.lastChild.cloneNode(!0)),L(0)},le=e=>{He(0),Se(window.location.href),K("katex"),$e("copy_tex"),K("mermaid");let t=new IntersectionObserver(function(o,s){o.forEach(i=>{if(i.isIntersecting){let r=i.target;r.style.backgroundImage=`url("${r.getAttribute("data-background-image")}")`,r.removeAttribute("data-background-image"),s.unobserve(r)}})},{root:null,threshold:.2});if(document.querySelectorAll("[data-background-image]").forEach(o=>{t.observe(o)}),e!==1&&l.each("script[data-pjax]",Ge),Oe(document.title),$(),Ze(),Fe(),We(),LOCAL.ispost){import("./post-WGMRFXOO.js").then(({postBeauty:s})=>{s()});let o=new IntersectionObserver(s=>{s.forEach(i=>{i.isIntersecting&&o.disconnect()})},{root:null,threshold:.2});o.observe(l("#copyright"))}re(),je(),v.hide(500),setTimeout(()=>{Ue()},500),Ve()};m();function k(e,t,o){return e instanceof HTMLCollection||e instanceof NodeList||e instanceof Array?Array.prototype.forEach.call(e,t,o):t.call(o,e,0,[e])}var mt=(e,t)=>{e=typeof e=="string"?e.split(" "):e,e.forEach(t)};function de(e,t,o,s){mt(t,i=>{k(e,r=>{r.addEventListener(i,o,s)})})}function I(e,t,o={}){mt(t,s=>{let i=new CustomEvent(s,{bubbles:!0,cancelable:!0,...o});k(e,r=>{r.dispatchEvent(i)})})}function lt(e){let t=e.text||e.textContent||e.innerHTML||"",o=e.src||"",s=e.parentNode||document.querySelector("head")||document.documentElement,i=document.createElement("script");return t.match("document.write")?!1:(i.type="text/javascript",i.id=e.id,o!==""&&(i.src=o,i.async=!1),t!==""&&i.appendChild(document.createTextNode(t)),s.appendChild(i),(s instanceof HTMLHeadElement||s instanceof HTMLBodyElement)&&s.contains(i)&&s.removeChild(i),!0)}function vt(e){e.tagName.toLowerCase()==="script"&&lt(e),k(e.querySelectorAll("script"),t=>{let o=t;(!o.type||o.type.toLowerCase()==="text/javascript")&&(o.parentNode&&o.parentNode.removeChild(o),lt(o))})}function wt(e,t,o,s=document){e.forEach(i=>{k(s.querySelectorAll(i),t,o)})}var W=(()=>{let e=0;return()=>`pjax${new Date().getTime()}_${e++}`})();function ut(e,t){e.outerHTML=t.outerHTML,this.onSwitch()}function bt(e,t){e.innerHTML=t.innerHTML,t.className===""?e.removeAttribute("class"):e.className=t.className,this.onSwitch()}function dt(e,t){if(e.innerHTML=t.innerHTML,t.hasAttributes()){let o=t.attributes;for(let s=0;s<o.length;s++)e.attributes.setNamedItem(o[s].cloneNode())}this.onSwitch()}function yt({elements:e="a[href]",selectors:t=["title",".js-Pjax"],switches:o={},switchesOptions:s={},history:i=!0,scrollTo:r=0,scrollRestoration:c=!0,cacheBust:n=!0,timeout:a=0,currentUrlFullReload:d=!1}={}){let h={elements:e,selectors:t,switches:o,switchesOptions:s,history:i,scrollTo:r,scrollRestoration:c,cacheBust:n,timeout:a,currentUrlFullReload:d};return h.switches.head||(h.switches.head=dt),h.switches.body||(h.switches.body=dt),h}var Y="data-pjax-state";function ht(e,t){if(t.defaultPrevented||t.returnValue===!1)return;let o={...this.options},s=Ct(e,t);if(s){e.setAttribute(Y,s);return}if(t.preventDefault(),this.options.currentUrlFullReload&&e.href===window.location.href.split("#")[0]){e.setAttribute(Y,"reload"),this.reload();return}e.setAttribute(Y,"load"),o.triggerElement=e,this.loadUrl(e.href,o)}function Ct(e,t){return t.which>1||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey?"modifier":e.protocol!==window.location.protocol||e.host!==window.location.host?"external":e.hash&&e.href.replace(e.hash,"")===window.location.href.replace(location.hash,"")?"anchor":e.href===window.location.href.split("#")[0]+"#"?"anchor-empty":null}function Lt(e){e.setAttribute(Y,""),de(e,"click",t=>ht.call(this,e,t)),de(e,"keyup",t=>{let o=t;o.keyCode===13&&ht.call(this,e,o)})}function Et(e,t,o,s){if(s={...s||this.options},s.request=t,e===!1){I(document,"pjax:complete pjax:error",s);return}let i=window.history.state||{};window.history.replaceState({url:i.url||window.location.href,title:i.title||document.title,uid:i.uid||W(),scrollPos:[document.documentElement.scrollLeft||document.body.scrollLeft,document.documentElement.scrollTop||document.body.scrollTop]},document.title,window.location.href);let r=o;t.responseURL?o!==t.responseURL&&(o=t.responseURL):t.getResponseHeader("X-PJAX-URL")?o=t.getResponseHeader("X-PJAX-URL"):t.getResponseHeader("X-XHR-Redirected-To")&&(o=t.getResponseHeader("X-XHR-Redirected-To"));let c=document.createElement("a");c.href=r;let n=c.hash;c.href=o,n&&!c.hash&&(c.hash=n,o=c.href),this.state.href=o,this.state.options=s;try{this.loadContent(e,s)}catch(a){return I(document,"pjax:error",s),console.error("Pjax switch fail: ",a),this.latestChance(o)}}function At(e){switch(e.tagName.toLowerCase()){case"a":e.hasAttribute("data-pjax-state")||this.attachLink(e);break;default:throw new Error("theme-shokax-pjax can only be applied on <a>")}}function Tt(e,t,o){let s=new RegExp("([?&])"+t+"=.*?(&|$)","i"),i=e.indexOf("?")!==-1?"&":"?";return e.match(s)?e.replace(s,"$1"+t+"="+o+"$2"):e+i+t+"="+o}function xt(e,t={},o){let s=t.requestOptions||{},i=(s.requestMethod||"GET").toUpperCase(),r=s.requestParams||null,c=null,n=new XMLHttpRequest,a=t.timeout;if(n.onreadystatechange=()=>{n.readyState===4&&(n.status===200?o(n.responseText,n,e,t):n.status!==0&&o(null,n,e,t))},n.onerror=d=>{console.error(d),o(null,n,e,t)},n.ontimeout=()=>{o(null,n,e,t)},r&&r.length){let d=r.map(h=>h.name+"="+h.value).join("&");switch(i){case"GET":e=e.split("?")[0],e+="?"+d;break;case"POST":c=d;break}}return t.cacheBust&&(e=Tt(e,"t",Date.now())),n.open(i,e,!0),n.timeout=a,n.setRequestHeader("X-Requested-With","XMLHttpRequest"),n.setRequestHeader("X-PJAX","true"),n.setRequestHeader("X-PJAX-Selectors",JSON.stringify(t.selectors)),n.send(c),n}function kt(e,t,o,s,i,r){let c=[];o.forEach(n=>{let a=s.querySelectorAll(n),d=i.querySelectorAll(n);if(a.length!==d.length)throw new Error(`DOM doesn't look the same on new loaded page: '${n}' - new ${a.length}, old ${d.length}`);k(a,(h,q)=>{let O=d[q],A=e[n]?e[n].bind(this,O,h,r,t[n]):ut.bind(this,O,h,r);c.push(A)},this)},this),this.state.numPendingSwitches=c.length,c.forEach(n=>{n()})}function _t(e,t,o){for(let s of t){let i=e.querySelectorAll(s);for(let r=0;r<i.length;r++)if(i[r].contains(o))return!0}return!1}var E=class{constructor(t){this.state={numPendingSwitches:0,href:null,options:null},this.options=yt(t),this.options.scrollRestoration&&"scrollRestoration"in history&&(history.scrollRestoration="manual"),this.maxUid=this.lastUid=W(),this.parseDOM(document),de(window,"popstate",o=>{let s=o;if(s.state){let i={...this.options};i.url=s.state.url,i.title=s.state.title,i.history=!1,i.scrollPos=s.state.scrollPos,s.state.uid<this.lastUid?i.backward=!0:i.forward=!0,this.lastUid=s.state.uid,this.loadUrl(s.state.url,i)}})}getElements(t){return t.querySelectorAll(this.options.elements)}parseDOM(t){k(this.getElements(t),At,this)}refresh(t){this.parseDOM(t||document)}reload(){window.location.reload()}forEachSelectors(t,o,s){return wt.bind(this)(this.options.selectors,t,o,s)}switchSelectors(t,o,s,i){return kt.bind(this)(this.options.switches,this.options.switchesOptions,t,o,s,i)}latestChance(t){window.location=t}onSwitch(){I(window,"resize scroll"),this.state.numPendingSwitches--,this.state.numPendingSwitches===0&&this.afterAllSwitches()}loadContent(t,o){if(typeof t!="string"){I(document,"pjax:complete pjax:error",o);return}let s=document.implementation.createHTMLDocument("pjax"),i=/<html[^>]+>/gi,r=/\s?[a-z:]+(?:=['"][^'">]+['"])*/gi,c=t.match(i);if(c&&c.length&&(c=c[0].match(r),c.length&&(c.shift(),c.forEach(n=>{let a=n.trim().split("=");a.length===1?s.documentElement.setAttribute(a[0],"true"):s.documentElement.setAttribute(a[0],a[1].slice(1,-1))}))),s.documentElement.innerHTML=t,document.activeElement&&_t(document,this.options.selectors,document.activeElement))try{document.activeElement.blur()}catch{}this.switchSelectors(this.options.selectors,s,document,o)}loadUrl(t,o){o=typeof o=="object"?{...this.options,...o}:{...this.options},this.abortRequest(this.request),I(document,"pjax:send",o),this.request=this.doRequest(t,o,this.handleResponse.bind(this))}afterAllSwitches(){var t,o,s;this.options.selectors.forEach(r=>{k(document.querySelectorAll(r),c=>{vt(c)})});let i=this.state;if(!((t=i.options)===null||t===void 0)&&t.history&&(window.history.state||(this.lastUid=this.maxUid=W(),window.history.replaceState({url:window.location.href,title:document.title,uid:this.maxUid,scrollPos:[0,0]},document.title)),this.lastUid=this.maxUid=W(),window.history.pushState({url:i.href,title:i.options.title,uid:this.maxUid,scrollPos:[0,0]},i.options.title,i.href)),this.forEachSelectors(r=>{this.parseDOM(r)},this),I(document,"pjax:complete pjax:success",i.options),!((o=i.options)===null||o===void 0)&&o.history){let r=document.createElement("a");if(r.href=this.state.href,r.hash){let c=r.hash.slice(1);c=decodeURIComponent(c);let n=0,a=document.getElementById(c)||document.getElementsByName(c)[0];if(a&&a.offsetParent)do n+=a.offsetTop,a=a.offsetParent;while(a);window.scrollTo(0,n)}else i.options.scrollTo!==!1&&(Array.isArray(i.options.scrollTo)?window.scrollTo(i.options.scrollTo[0],i.options.scrollTo[1]):window.scrollTo(0,i.options.scrollTo))}else!((s=i.options)===null||s===void 0)&&s.scrollRestoration&&i.options.scrollPos&&window.scrollTo(i.options.scrollPos[0],i.options.scrollPos[1]);this.state={numPendingSwitches:0,href:null,options:null}}abortRequest(t){t&&t.readyState<4&&(t.onreadystatechange=()=>{},t.abort())}};E.prototype.attachLink=Lt;E.prototype.doRequest=xt;E.prototype.handleResponse=Et;E.switches={innerHTML:bt,outerHTML:ut};m();function ft(){function e(){let t,o=w(l(".theme"),".ic"),s=_(M,"div",{id:"neko",innerHTML:'<div class="planet"><div class="sun"></div><div class="moon"></div></div><div class="body"><div class="face"><section class="eyes left"><span class="pupil"></span></section><section class="eyes right"><span class="pupil"></span></section><span class="nose"></span></div></div>'}),i=()=>{g(s,{delay:2500,opacity:0},()=>{M.removeChild(s)})};o.hasClass("i-sun")?t=()=>{s.addClass("dark"),y("dark"),U.set("theme","dark"),i()}:(s.addClass("dark"),t=()=>{s.removeClass("dark"),y(),U.set("theme","light"),i()}),g(s,1,()=>{setTimeout(t,210)},()=>{R(s,"block")})}w(l("#rightNav"),".theme .ic").addEventListener("click",e)}var Ht=()=>{ft(),ee(),Ie(new E({selectors:["head title",".languages",".twikoo",".pjax",".leancloud-recent-comment","script[data-config]"],cacheBust:!1})),f.quicklink.ignores=LOCAL.ignores,import("./quicklink-24QY5EII.js").then(({listen:e})=>{e(f.quicklink)}),Je(),et(),Ke(),l("li.item.search > i").addEventListener("click",()=>{f.search!==null&&(V||De(_(M,"div",{id:"search",innerHTML:'<div class="inner"><div class="header"><span class="icon"><i class="ic i-search"></i></span><div class="search-input-container"></div><span class="close-btn"><i class="ic i-times-circle"></i></span></div><div class="results"><div class="inner"><div id="search-stats"></div><div id="search-hits"></div><div id="search-pagination"></div></div></div></div>'})),import("./search-6BFXGXPD.js").then(({algoliaSearch:e})=>{e(Ce)}),l.each(".search",e=>{e.addEventListener("click",()=>{document.body.style.overflow="hidden",g(V,"shrinkIn",()=>{l(".search-input").focus()})})}))},{once:!0,capture:!0}),import("./index.esm-YD6Q2FEL.js").then(e=>{e.default(f.fireworks)}),window.addEventListener("scroll",Qe,{passive:!0}),window.addEventListener("resize",$,{passive:!0}),window.addEventListener("pjax:send",ct,{passive:!0}),window.addEventListener("pjax:success",le,{passive:!0}),window.addEventListener("beforeunload",()=>{G()}),le(1)};ze();window.addEventListener("DOMContentLoaded",Ht,{passive:!0});console.log("%c Theme.ShokaX v"+f.version+" %c https://github.com/theme-shoka-x/hexo-theme-shokaX ","color: white; background: #e9546b; padding:5px 0;","padding:4px;border:1px solid #e9546b;");
/*! For license information please see siteInit.js.LEGAL.txt */
