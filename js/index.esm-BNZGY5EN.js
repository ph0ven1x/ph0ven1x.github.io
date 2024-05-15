import{a as p}from"./chunk-M5RMWWEC.js";import{c as W}from"./chunk-53D3WSNV.js";W();var r=e=>Array.isArray(e)?p.random(e[0],e[1]):e,R=(e,t)=>{t=t.toUpperCase();do{if(e==null)break;if(e.nodeName===t)return!0}while((e=e.parentNode)!==null);return!1},b=(e,t)=>{var i;if(t.move.includes("emit")){let{emitRadius:s=[50,180]}=(i=t.moveOptions)!==null&&i!==void 0?i:{},n=p.random(0,360)*Math.PI/180;s=r(s);let a=[-1,1][p.random(0,1)]*s;e.endPos={x:e.x+a*Math.cos(n),y:e.y+a*Math.sin(n)}}},w=(e,t)=>{var i;if(t.move.includes("rotate")){let{angle:s=[-180,180]}=(i=t.moveOptions)!==null&&i!==void 0?i:{};e.endRotation=r(s)}},v=class{constructor(t,i,s,n,a,o,l){this.ctx=t,this.x=i,this.y=s,this.color=n,this.radius=a,this.alpha=o,this.lineWidth=l,this.rotation=0}draw(){let{ctx:t,x:i,y:s}=this;t.save(),t.translate(i,s),t.rotate(this.rotation*(Math.PI/180)),t.globalAlpha=this.alpha,this.paint(),this.lineWidth?(t.lineWidth=this.lineWidth,t.strokeStyle=this.color,t.stroke()):(t.fillStyle=this.color,t.fill()),t.globalAlpha=1,t.restore()}},A=class extends v{paint(){this.ctx.beginPath(),this.ctx.arc(0,0,this.radius,0,2*Math.PI)}},E=class extends v{constructor(t,i,s,n,a,o,l,d){super(t,i,s,n,a,o,d),this.sides=l}paint(){let{ctx:t,sides:i,radius:s}=this;t.beginPath(),t.moveTo(s*Math.cos(0),s*Math.sin(0));for(let n=1;n<=i;n++){let a=n*2*Math.PI/i;t.lineTo(s*Math.cos(a),s*Math.sin(a))}t.closePath()}},M=class extends v{constructor(t,i,s,n,a,o,l,d){super(t,i,s,n,a,o,d),this.spikes=l}paint(){let{ctx:t,spikes:i,radius:s}=this;t.beginPath(),t.moveTo(0,0-s);for(let n=0;n<i*2;n++){let a=n*Math.PI/i-Math.PI/2,o=n%2===0?s:s*.5,l=Math.cos(a)*o,d=Math.sin(a)*o;t.lineTo(l,d)}t.closePath()}},T=(e,t,i,s)=>{let n=r(s.number),{radius:a,alpha:o=100,lineWidth:l}=s.shapeOptions;Array.isArray(o)?o=o.map(u=>u*100):o*=100;let d=[];for(let u=0;u<n;u++){let h=new A(e,t,i,s.colors[p.random(0,s.colors.length-1)],r(a),r(o)/100,r(l));b(h,s),w(h,s),d.push(h)}return d},_=(e,t,i,s)=>{let n=r(s.number),{radius:a,alpha:o=100,lineWidth:l}=s.shapeOptions;Array.isArray(o)?o=o.map(h=>h*100):o*=100;let d=r(s.shapeOptions.spikes),u=[];for(let h=0;h<n;h++){let c=new M(e,t,i,s.colors[p.random(0,s.colors.length-1)],r(a),r(o)/100,d,r(l));b(c,s),w(c,s),u.push(c)}return u},z=(e,t,i,s)=>{let n=r(s.number),{radius:a,alpha:o=100,lineWidth:l}=s.shapeOptions;Array.isArray(o)?o=o.map(h=>h*100):o*=100;let d=[],u=r(s.shapeOptions.sides);for(let h=0;h<n;h++){let c=new E(e,t,i,s.colors[p.random(0,s.colors.length-1)],r(a),r(o)/100,u,r(l));b(c,s),w(c,s),d.push(c)}return d},m=document.createElement("canvas");m.style.cssText="position:fixed;top:0;left:0;pointer-events:none;z-index:9999999";document.body.appendChild(m);var x=m.getContext("2d"),k=/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)?"touchstart":"click",I=0,L=0,P=()=>{m.width=document.documentElement.clientWidth*2,m.height=document.documentElement.clientHeight*2,m.style.width=document.documentElement.clientWidth+"px",m.style.height=document.documentElement.clientHeight+"px";let e=m.getContext("2d");e.setTransform(1,0,0,1,0,0),e.scale(2,2)},S=e=>{I=e.clientX||e.touches&&e.touches[0].clientX,L=e.clientY||e.touches&&e.touches[0].clientY},D=e=>{var t,i,s,n;let{move:a}=e,o={};if(a.includes("emit")){let{radius:l=.1,alphaChange:d=!1,alphaEasing:u="linear",alphaDuration:h=[600,800]}=(t=e.moveOptions)!==null&&t!==void 0?t:{},{alpha:c=0}=(i=e.moveOptions)!==null&&i!==void 0?i:{};Array.isArray(c)?c=c.map(f=>f*100):c*=100;let g={};d&&(g={alpha:{value:r(c)/100,easing:u,duration:r(h)}}),o={...o,x:f=>f.endPos.x,y:f=>f.endPos.y,radius:r(l),...g}}else if(a.includes("diffuse")){let{diffuseRadius:l=[80,160],lineWidth:d=0,alphaEasing:u="linear",alphaDuration:h=[600,800]}=(s=e.moveOptions)!==null&&s!==void 0?s:{},{alpha:c=0}=(n=e.moveOptions)!==null&&n!==void 0?n:{};Array.isArray(c)?c=c.map(g=>g*100):c*=100,o={...o,radius:r(l),lineWidth:r(d),alpha:{value:r(c)/100,easing:u,duration:r(h)}}}return a.includes("rotate")&&(o={...o,rotation:l=>l.endRotation}),o},X=e=>{for(let t of e)t.draw()},Y=p({duration:1/0,update(){x.clearRect(0,0,m.width,m.height)}}),y=null,O=null,C=e=>{O=e,y&&document.removeEventListener(k,y,!1),y=t=>{for(let i of e.excludeElements)if(R(t.target,i))return;Y.play(),S(t),H(I,L)},document.addEventListener(k,y,!1),P(),window.removeEventListener("resize",P,!1),window.addEventListener("resize",P,!1)},H=(e,t)=>{if(!O)return;let{particles:i}=O,s=p().timeline();for(let n of i){let{duration:a,easing:o}=n,l=[];n.shape==="circle"?l=T(x,e,t,n):n.shape==="star"?l=_(x,e,t,n):n.shape==="polygon"&&(l=z(x,e,t,n));let d=D(n);s.add({targets:l,duration:r(a),easing:o,update:X,...d})}s.play()},U=e=>{document.readyState==="loading"?window.addEventListener("DOMContentLoaded",()=>C(e),{passive:!0}):C(e)};export{U as default};
/*! For license information please see index.esm-BNZGY5EN.js.LEGAL.txt */
