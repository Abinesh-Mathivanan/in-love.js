!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports["in-love.js"]=e():t["in-love.js"]=e()}(self,(()=>(()=>{var t={915:()=>{document.addEventListener("DOMContentLoaded",(function(){document.getElementById("sakura-petal");const t=new class{constructor(t,e){if(void 0===t)throw new Error("No selector present. Define an element.");this.el=document.querySelector(t);const n={className:"sakura",fallSpeed:parseFloat(this.el.getAttribute("fall-speed"))||1,maxSize:parseInt(this.el.getAttribute("max-size"))||14,minSize:parseInt(this.el.getAttribute("min-size"))||10,delay:parseInt(this.el.getAttribute("delay"))||300,colors:[{gradientColorStart:"rgba(255, 183, 197, 0.9)",gradientColorEnd:"rgba(255, 197, 208, 0.9)",gradientColorDegree:120}],lifeTime:0};var i,o;function s(t){return t[Math.floor(Math.random()*t.length)]}function r(t,e){return Math.floor(Math.random()*(e-t+1))+t}this.settings=(i=n,o=e,Object.keys(i).forEach((t=>{o&&Object.prototype.hasOwnProperty.call(o,t)&&(i[t]=o[t])})),i),this.petalsWeak=new Map,setInterval((()=>{if(!this.settings.lifeTime)return;const t=[],e=Date.now();for(const[n,i]of this.petalsWeak)n+this.settings.lifeTime<e&&(t.push(n),i.remove());for(const e of t)this.petalsWeak.delete(e)}),1e3),this.el.style.overflowX="hidden";const a=["webkit","moz","MS","o",""];function l(t,e,n){for(let i=0;i<a.length;i+=1){let o=e;a[i]||(o=e.toLowerCase()),t.addEventListener(a[i]+o,n,!1)}}function h(t){const e=t.getBoundingClientRect();return e.top>=0&&e.left>=0&&e.bottom<=(window.innerHeight||document.documentElement.clientHeight)&&e.right<=(window.innerWidth||document.documentElement.clientWidth)}this.createPetal=()=>{this.el.dataset.sakuraAnimId&&setTimeout((()=>{window.requestAnimationFrame(this.createPetal)}),this.settings.delay);const t=s(["blow-soft-left","blow-medium-left","blow-soft-right","blow-medium-right"]),e=s(["sway-0","sway-1","sway-2","sway-3","sway-4","sway-5","sway-6","sway-7","sway-8"]),n=(.007*document.documentElement.clientHeight+Math.round(5*Math.random()))*this.settings.fallSpeed,i=[`sakurafall ${n}s linear 0s 1`,`${t} ${(n>30?n:30)-20+r(0,20)}s linear 0s infinite`,`${e} ${r(2,4)}s linear 0s infinite`].join(", "),o=document.createElement("div");o.classList.add(this.settings.className);const a=r(this.settings.minSize,this.settings.maxSize),d=a-Math.floor(r(0,this.settings.minSize)/3),c=s(this.settings.colors);o.style.background=`linear-gradient(${c.gradientColorDegree}deg, ${c.gradientColorStart}, ${c.gradientColorEnd})`,o.style.webkitAnimation=i,o.style.animation=i,o.style.borderRadius=`${r(this.settings.maxSize,this.settings.maxSize+Math.floor(10*Math.random()))}px ${r(1,Math.floor(d/4))}px`,o.style.height=`${a}px`,o.style.left=Math.random()*document.documentElement.clientWidth-100+"px",o.style.marginTop=-(Math.floor(20*Math.random())+15)+"px",o.style.width=`${d}px`,l(o,"AnimationEnd",(()=>{h(o)||o.remove()})),l(o,"AnimationIteration",(()=>{h(o)||o.remove()})),this.petalsWeak.set(Date.now(),o),this.el.appendChild(o)},this.el.setAttribute("data-sakura-anim-id",window.requestAnimationFrame(this.createPetal))}start(){if(this.el.dataset.sakuraAnimId)throw new Error("Sakura is already running.");this.el.setAttribute("data-sakura-anim-id",window.requestAnimationFrame(this.createPetal))}stop(t=!1){const e=this.el.dataset.sakuraAnimId;e&&(window.cancelAnimationFrame(e),this.el.setAttribute("data-sakura-anim-id","")),t||setTimeout((()=>{const t=document.getElementsByClassName(this.settings.className);for(;t.length>0;)t[0].parentNode.removeChild(t[0])}),this.settings.delay+50)}}("#sakura-petal");t.start(),setTimeout((()=>{t.stop()}),1e4)}))},198:()=>{!function(){const t=[],e=[],n=[],i=[],o=[],s=[],r=[],a=[],l=250,h=30;let d,c,m=null;function u(){let e;for(;o.length;)e=o.pop(),e&&document.body.removeChild(e);for(;t.length;)e=t.pop(),e&&document.body.removeChild(e)}function p(e=60){const n=1e3/e;let i=0;for(let e=0;e<t.length;e++)i+=g(e);for(let t=0;t<o.length;t++)i+=x(t);0!==i||m||u(),setTimeout((function(){p(e)}),n)}function f(o,s,r=1){if(o+5>=c||s+5>=d)return;if(Math.random()>r)return;let a=2*h+1,m=NaN;for(let t=0;t<l;t++){if(!i[t]){a=null,m=t;break}i[t]<a&&(a=i[t],m=t)}return a&&y(m),m>=0?(i[m]=2*h,e[m]=o,t[m].style.left=o+"px",n[m]=s,t[m].style.top=s+"px",t[m].style.clip="rect(0px, 5px, 5px, 0px)",t[m].childNodes[0].style.backgroundColor=t[m].childNodes[1].style.backgroundColor=function(){const t=document.querySelector("script[glitter-color]");if(t){const e=t.getAttribute("glitter-color");if(e)return e}return"yellow"}(),t[m].style.visibility="visible",m):void 0}function g(o){return null!==i[o]&&(i[o]-=1,0===i[o]?(y(o),!1):(i[o]===h&&(t[o].style.clip="rect(1px, 4px, 4px, 1px)"),i[o]>0&&(n[o]+=1+3*Math.random(),e[o]+=(o%5-2)/5,n[o]+5<d&&e[o]+5<c)?(t[o].style.top=n[o]+"px",t[o].style.left=e[o]+"px",!0):(i[o]=null,t[o].style.left="0px",t[o].style.top="0px",t[o].style.visibility="hidden",!1)))}function y(l){null!==i[l]&&(n[l]+3<d&&e[l]+3<c&&(a[l]=2*h,r[l]=n[l],o[l].style.top=n[l]+"px",s[l]=e[l],o[l].style.left=e[l]+"px",o[l].style.width="2px",o[l].style.height="2px",o[l].style.backgroundColor=t[l].childNodes[0].style.backgroundColor,t[l].style.visibility="hidden",o[l].style.visibility="visible"),i[l]=null,t[l].style.left="0px",t[l].style.top="0px",t[l].style.visibility="hidden")}function x(t){return null!==a[t]&&(a[t]-=1,a[t]===h&&(o[t].style.width="1px",o[t].style.height="1px"),a[t]>0&&(r[t]+=1+2*Math.random(),s[t]+=(t%4-2)/4,r[t]+3<d&&s[t]+3<c)?(o[t].style.top=r[t]+"px",o[t].style.left=s[t]+"px",!0):(a[t]=null,o[t].style.top="0px",o[t].style.left="0px",o[t].style.visibility="hidden",!1))}window.onload=function(){d=document.documentElement.scrollHeight,c=document.documentElement.scrollWidth;const e=document.querySelector("script[glitter-cursor]");e&&"true"===e.getAttribute("glitter-cursor").toLowerCase()?(p(),null===m&&function(e=null){m=null===e?!m:!!e,m&&t.length<l&&function(){function e(t,e){const n=document.createElement("div");return n.style.position="absolute",n.style.height=t+"px",n.style.width=e+"px",n.style.overflow="hidden",n}for(let n=0;n<l;n++){const s=e(3,3);s.style.visibility="hidden",s.style.zIndex="999",o[n]&&document.body.removeChild(o[n]),document.body.appendChild(s),o[n]=s,a[n]=null;const r=e(5,5);r.style.backgroundColor="transparent",r.style.visibility="hidden",r.style.zIndex="999";const l=e(1,5),h=e(5,1);r.appendChild(l),r.appendChild(h),l.style.top="2px",l.style.left="0px",h.style.top="0px",h.style.left="2px",t[n]&&document.body.removeChild(t[n]),document.body.appendChild(r),t[n]=r,i[n]=null}window.addEventListener("resize",(function(){for(let e=0;e<l;e++)i[e]=null,t[e].style.left="0px",t[e].style.top="0px",t[e].style.visibility="hidden",a[e]=null,o[e].style.top="0px",o[e].style.left="0px",o[e].style.visibility="hidden";d=document.documentElement.scrollHeight,c=document.documentElement.scrollWidth})),document.onmousemove=function(t){if(m&&!t.buttons){const e=Math.sqrt(Math.pow(t.movementX,2)+Math.pow(t.movementY,2)),n=30*t.movementX*2/e,i=30*t.movementY*2/e,o=e/30;let s=0,r=t.pageY,a=t.pageX;for(;Math.abs(s)<Math.abs(t.movementX);){f(a,r,o);let t=Math.random();a-=n*t,r-=i*t,s+=n*t}}}}()}(!0)):u()}}()},58:()=>{!function(){var t,e,n,i,o,s,r,a=$(window),l=$(window).width(),h=$(window).height();function d(t,e){this.x=t,this.y=e}function c(t,e,n,i,o,s){this.stretchA=t,this.stretchB=e,this.startAngle=n,this.angle=i,this.bloom=s,this.growFactor=o,this.r=1,this.isfinished=!1}function m(t,e,n,i,o){this.p=t,this.r=e,this.c=n,this.pc=i,this.petals=[],this.garden=o,this.init(),this.garden.addBloom(this)}function u(t,e){this.blooms=[],this.element=e,this.ctx=t}$((function(){var o=$("#loveHeart");o.width(),o.height(),n=$("#heartbloom"),(e=n[0]).width=$("#loveHeart").width(),e.height=$("#loveHeart").height(),(t=e.getContext("2d")).globalCompositeOperation="lighter",i=new u(t,e),$("#content").css("width",o.width()+$("#code").width()),$("#content").css("height",Math.max(o.height(),$("#code").height())),$("#content").css("margin-top",Math.max((a.height()-$("#content").height())/2,10)),$("#content").css("margin-left",Math.max((a.width()-$("#content").width())/2,10)),setInterval((function(){i.render()}),u.options.growSpeed)})),$(window).resize((function(){var t=$(window).width(),e=$(window).height();t!=l&&e!=h&&location.replace(location)})),d.prototype={rotate:function(t){var e=this.x,n=this.y;return this.x=Math.cos(t)*e-Math.sin(t)*n,this.y=Math.sin(t)*e+Math.cos(t)*n,this},mult:function(t){return this.x*=t,this.y*=t,this},clone:function(){return new d(this.x,this.y)},length:function(){return Math.sqrt(this.x*this.x+this.y*this.y)},subtract:function(t){return this.x-=t.x,this.y-=t.y,this},set:function(t,e){return this.x=t,this.y=e,this}},c.prototype={draw:function(){var t,e,n,i,o=this.bloom.garden.ctx;e=(t=new d(0,this.r).rotate(u.degrad(this.startAngle))).clone().rotate(u.degrad(this.angle)),n=t.clone().mult(this.stretchA),i=e.clone().mult(this.stretchB),o.strokeStyle=this.bloom.c,o.beginPath(),o.moveTo(t.x,t.y),o.bezierCurveTo(n.x,n.y,i.x,i.y,e.x,e.y),o.stroke()},render:function(){this.r<=this.bloom.r?(this.r+=this.growFactor,this.draw()):this.isfinished=!0}},m.prototype={draw:function(){var t,e=!0;this.garden.ctx.save(),this.garden.ctx.translate(this.p.x,this.p.y);for(var n=0;n<this.petals.length;n++)(t=this.petals[n]).render(),e*=t.isfinished;this.garden.ctx.restore(),1==e&&this.garden.removeBloom(this)},init:function(){for(var t=360/this.pc,e=u.randomInt(0,90),n=0;n<this.pc;n++)this.petals.push(new c(u.random(u.options.petalStretch.min,u.options.petalStretch.max),u.random(u.options.petalStretch.min,u.options.petalStretch.max),e+n*t,t,u.random(u.options.growFactor.min,u.options.growFactor.max),this))}},u.prototype={render:function(){for(var t=0;t<this.blooms.length;t++)this.blooms[t].draw()},addBloom:function(t){this.blooms.push(t)},removeBloom:function(t){for(var e=0;e<this.blooms.length;e++)if(this.blooms[e]===t)return this.blooms.splice(e,1),this},createRandomBloom:function(t,e){this.createBloom(t,e,u.randomInt(u.options.bloomRadius.min,u.options.bloomRadius.max),u.randomrgba(u.options.color.rmin,u.options.color.rmax,u.options.color.gmin,u.options.color.gmax,u.options.color.bmin,u.options.color.bmax,u.options.color.opacity),u.randomInt(u.options.petalCount.min,u.options.petalCount.max))},createBloom:function(t,e,n,i,o){new m(new d(t,e),n,i,o,this)},clear:function(){this.blooms=[],this.ctx.clearRect(0,0,this.element.width,this.element.height)}},u.options={petalCount:{min:8,max:15},petalStretch:{min:.1,max:3},growFactor:{min:.1,max:1},bloomRadius:{min:8,max:10},density:10,growSpeed:1e3/60,color:{rmin:128,rmax:255,gmin:0,gmax:128,bmin:0,bmax:128,opacity:.1},tanAngle:60},u.random=function(t,e){return Math.random()*(e-t)+t},u.randomInt=function(t,e){return Math.floor(Math.random()*(e-t+1))+t},u.circle=2*Math.PI,u.degrad=function(t){return u.circle/360*t},u.raddeg=function(t){return t/u.circle*360},u.rgba=function(t,e,n,i){return"rgba("+t+","+e+","+n+","+i+")"},u.randomrgba=function(t,e,n,i,o,s,r){var a=Math.round(u.random(t,e)),l=Math.round(u.random(n,i)),h=Math.round(u.random(o,s));return Math.abs(a-l)<=5&&Math.abs(l-h)<=5&&Math.abs(h-a)<=5?u.rgba(t,e,n,i,o,s,r):u.rgba(a,l,h,r)},o=10,s=[],r=setInterval((function(){for(var t=function(t){var e=t/Math.PI,n=16*Math.pow(Math.sin(e),3)*19.5,i=-20*(13*Math.cos(e)-5*Math.cos(2*e)-2*Math.cos(3*e)-Math.cos(4*e));return[offsetX+n,offsetY+i]}(o),e=!0,n=0;n<s.length;n++){var a=s[n];if(Math.sqrt(Math.pow(a[0]-t[0],2)+Math.pow(a[1]-t[1],2))<1.3*u.options.bloomRadius.max){e=!1;break}}e&&(s.push(t),i.createRandomBloom(t[0],t[1])),o>=30?clearInterval(r):o+=.2}),50)}()},927:()=>{document.addEventListener("DOMContentLoaded",(()=>{!function(t,e=1e3,n=5e3){const i=document.getElementById(t);setTimeout((function(){i.classList.add("pulse")}),e),setTimeout((function(){i.classList.remove("pulse")}),n)}("pulsingheart")}))}},e={};function n(i){var o=e[i];if(void 0!==o)return o.exports;var s=e[i]={exports:{}};return t[i](s,s.exports,n),s.exports}n.d=(t,e)=>{for(var i in e)n.o(e,i)&&!n.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var i={};return(()=>{"use strict";function t(t,e,n,i,o){const s=document.querySelector(t),r=s.querySelectorAll(e),a="true"===s.getAttribute(n),l=parseInt(s.getAttribute(i))||o;let h=0;r.length>0&&setTimeout((function t(){h<r.length?(h>0&&r[h-1].classList.remove("active"),r[h].classList.add("active"),h++,setTimeout(t,6e3)):a?(r[h-1].classList.remove("active"),h=0,setTimeout(t,l)):r[h-1].classList.remove("active")}),600)}function e(){const t={red:"❤️",pink:"💗",purple:"💜",orange:"🧡",yellow:"💛",black:"🖤",white:"🤍",blue:"💙",green:"💚"};document.getElementById("fallinghearts")&&setInterval((function(){const e=document.getElementById("fallinghearts");if(!e)return;const n=e.getAttribute("heart-color"),i=t[n]||"❤️",o=document.createElement("div");o.classList.add("heart"),o.innerText=i,o.style.left=100*Math.random()+"vw",o.style.animationDuration=2*Math.random()+3+"s",e.appendChild(o),setTimeout((()=>{o.remove()}),5e3)}),300)}n.r(i),n.d(i,{FadingMessages:()=>t,initializeHeartAnimation:()=>l.initializeHeartAnimation,initializeSakura:()=>s.initializeSakura,pulsingHeartAnimation:()=>o.pulsingHeartAnimation,sparkleAnimation:()=>r.sparkleAnimation,startFallingHearts:()=>e,typewriterAnimation:()=>a}),document.addEventListener("DOMContentLoaded",(()=>{t(".fading-messages-container",".fading-message","fade-repeat","repeat-speed",1e3)})),e();var o=n(927),s=n(915),r=n(198);function a(t,e=null){class n{constructor(t,e=null){this.element=t,this.text="true"===t.getAttribute("love-text")?t.innerText||t.textContent:"",this.speed=parseInt(t.getAttribute("text-speed"))||100,this.fontFamily=t.getAttribute("text-font-family")||"Courier New",this.fontSize=t.getAttribute("text-font-size")||"16px",this.color=t.getAttribute("text-color")||"#000000",this.callback=e,this.index=0,this.setupElement(),this.type()}setupElement(){this.element.innerHTML="",this.element.style.fontFamily=this.fontFamily,this.element.style.fontSize=this.fontSize,this.element.style.color=this.color}type(){this.index<this.text.length?(this.element.innerHTML+=this.text.charAt(this.index),this.index++,setTimeout((()=>this.type()),this.speed)):this.callback&&this.callback()}}document.addEventListener("DOMContentLoaded",(()=>{!function(t,e=null){const i=document.getElementById(t);i?new n(i,e):console.error(`Element with id "${t}" not found.`)}(t,e)}))}a("typewriter",(()=>console.log("Typing animation completed!")));var l=n(58)})(),i})()));