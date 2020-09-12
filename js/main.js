(()=>{function r(a){document.readyState==="complete"||document.readyState==="interactive"?setTimeout(a,1):document.addEventListener("DOMContentLoaded",a)}function ya(a){document.readyState==="complete"?setTimeout(a,1):window.addEventListener("load",a)}function P(a){ya(function(){window.addEventListener("resize",a),setTimeout(a,1)})}function pa(a){const b=document.createElement("a");return b.className="header-link",b.title="Link to this section",b.href="#"+a,b.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 8"><path d="M5.88.03c-.18.01-.36.03-.53.09-.27.1-.53.25-.75.47a.5.5 0 1 0 .69.69c.11-.11.24-.17.38-.22.35-.12.78-.07 1.06.22.39.39.39 1.04 0 1.44l-1.5 1.5c-.44.44-.8.48-1.06.47-.26-.01-.41-.13-.41-.13a.5.5 0 1 0-.5.88s.34.22.84.25c.5.03 1.2-.16 1.81-.78l1.5-1.5c.78-.78.78-2.04 0-2.81-.28-.28-.61-.45-.97-.53-.18-.04-.38-.04-.56-.03zm-2 2.31c-.5-.02-1.19.15-1.78.75l-1.5 1.5c-.78.78-.78 2.04 0 2.81.56.56 1.36.72 2.06.47.27-.1.53-.25.75-.47a.5.5 0 1 0-.69-.69c-.11.11-.24.17-.38.22-.35.12-.78.07-1.06-.22-.39-.39-.39-1.04 0-1.44l1.5-1.5c.4-.4.75-.45 1.03-.44.28.01.47.09.47.09a.5.5 0 1 0 .44-.88s-.34-.2-.84-.22z" /></svg>',b}function qa(){const a=document.querySelectorAll("article#main");if(a.length!=1)return;const b=a[0].querySelectorAll("h2, h3, h4");Array.prototype.forEach.call(b,function(c,d){var e=pa(c.id);c.appendChild(e)})}function O(){r(qa)}var h=[];var ca=function(){return h.some(function(a){return a.activeTargets.length>0})};var da=function(){return h.some(function(a){return a.skippedTargets.length>0})};var aa="ResizeObserver loop completed with undelivered notifications.",ba=function(){var a;typeof ErrorEvent==="function"?a=new ErrorEvent("error",{message:aa}):(a=document.createEvent("Event"),a.initEvent("error",!1,!1),a.message=aa),window.dispatchEvent(a)};var k;(function(a){a.BORDER_BOX="border-box",a.CONTENT_BOX="content-box",a.DEVICE_PIXEL_CONTENT_BOX="device-pixel-content-box"})(k||(k={}));var D=function(){function a(b,c,d,e){return this.x=b,this.y=c,this.width=d,this.height=e,this.top=this.y,this.left=this.x,this.bottom=this.top+this.height,this.right=this.left+this.width,Object.freeze(this)}return a.prototype.toJSON=function(){var b=this,c=b.x,d=b.y,e=b.top,g=b.right,f=b.bottom,n=b.left,z=b.width,j=b.height;return{x:c,y:d,top:e,right:g,bottom:f,left:n,width:z,height:j}},a.fromRect=function(b){return new a(b.x,b.y,b.width,b.height)},a}();var o=function(a){return a instanceof SVGElement&&"getBBox"in a},w=function(a){if(o(a)){var b=a.getBBox(),c=b.width,d=b.height;return!c&&!d}var e=a,g=e.offsetWidth,f=e.offsetHeight;return!(g||f||a.getClientRects().length)},E=function(a){var b,c,d=(c=(b=a)===null||b===void 0?void 0:b.ownerDocument)===null||c===void 0?void 0:c.defaultView;return!!(d&&a instanceof d.Element)},V=function(a){switch(a.tagName){case"INPUT":if(a.type!=="image")break;case"VIDEO":case"AUDIO":case"EMBED":case"OBJECT":case"CANVAS":case"IFRAME":case"IMG":return!0}return!1};var l=typeof window!=="undefined"?window:{};var x=new WeakMap(),_=/auto|scroll/,Aa=/^tb|vertical/,Ba=/msie|trident/i.test(l.navigator&&l.navigator.userAgent),i=function(a){return parseFloat(a||"0")},m=function(a,b,c){return a===void 0&&(a=0),b===void 0&&(b=0),c===void 0&&(c=!1),Object.freeze({inlineSize:(c?b:a)||0,blockSize:(c?a:b)||0})},$=Object.freeze({devicePixelContentBoxSize:m(),borderBoxSize:m(),contentBoxSize:m(),contentRect:new D(0,0,0,0)}),G=function(a,b){b===void 0&&(b=!1);if(x.has(a)&&!b)return x.get(a);if(w(a))return x.set(a,$),$;var c=getComputedStyle(a),d=o(a)&&a.ownerSVGElement&&a.getBBox(),e=!Ba&&c.boxSizing==="border-box",g=Aa.test(c.writingMode||""),f=!d&&_.test(c.overflowY||""),n=!d&&_.test(c.overflowX||""),z=d?0:i(c.paddingTop),j=d?0:i(c.paddingRight),L=d?0:i(c.paddingBottom),q=d?0:i(c.paddingLeft),Ha=d?0:i(c.borderTopWidth),Ia=d?0:i(c.borderRightWidth),Ja=d?0:i(c.borderBottomWidth),Ka=d?0:i(c.borderLeftWidth),ka=q+j,la=z+L,M=Ka+Ia,N=Ha+Ja,ma=n?a.offsetHeight-N-a.clientHeight:0,na=f?a.offsetWidth-M-a.clientWidth:0,La=e?ka+M:0,Ma=e?la+N:0,A=d?d.width:i(c.width)-La-na,B=d?d.height:i(c.height)-Ma-ma,Na=A+ka+na+M,Oa=B+la+ma+N,oa=Object.freeze({devicePixelContentBoxSize:m(Math.round(A*devicePixelRatio),Math.round(B*devicePixelRatio),g),borderBoxSize:m(Na,Oa,g),contentBoxSize:m(A,B,g),contentRect:new D(q,z,A,B)});return x.set(a,oa),oa},s=function(a,b,c){var d=G(a,c),e=d.borderBoxSize,g=d.contentBoxSize,f=d.devicePixelContentBoxSize;switch(b){case k.DEVICE_PIXEL_CONTENT_BOX:return f;case k.BORDER_BOX:return e;default:return g}};var H=function(){function a(b){var c=G(b);this.target=b,this.contentRect=c.contentRect,this.borderBoxSize=[c.borderBoxSize],this.contentBoxSize=[c.contentBoxSize],this.devicePixelContentBoxSize=[c.devicePixelContentBoxSize]}return a}();var v=function(a){if(w(a))return Infinity;for(var b=0,c=a.parentNode;c;)b+=1,c=c.parentNode;return b};var Z=function(){var a=Infinity,b=[];h.forEach(function g(f){if(f.activeTargets.length===0)return;var n=[];f.activeTargets.forEach(function z(j){var L=new H(j.target),q=v(j.target);n.push(L),j.lastReportedSize=s(j.target,j.observedBox),q<a&&(a=q)}),b.push(function z(){f.callback.call(f.observer,n,f.observer)}),f.activeTargets.splice(0,f.activeTargets.length)});for(var c=0,d=b;c<d.length;c++){var e=d[c];e()}return a};var I=function(a){h.forEach(function b(c){c.activeTargets.splice(0,c.activeTargets.length),c.skippedTargets.splice(0,c.skippedTargets.length),c.observationTargets.forEach(function d(e){e.isActive()&&(v(e.target)>a?c.activeTargets.push(e):c.skippedTargets.push(e))})})};var ea=function(){var a=0;for(I(a);ca();)a=Z(),I(a);return da()&&ba(),a>0};var J,fa=[],Ca=function(){return fa.splice(0).forEach(function(a){return a()})},ga=function(a){if(!J){var b=0,c=document.createTextNode(""),d={characterData:!0};new MutationObserver(function(){return Ca()}).observe(c,d),J=function(){c.textContent=""+(b?b--:b++)}}fa.push(a),J()};var ha=function(a){ga(function b(){requestAnimationFrame(a)})};var y=0,Da=function(){return!!y},Ea=250,Fa={attributes:!0,characterData:!0,childList:!0,subtree:!0},ia=["resize","load","transitionend","animationend","animationstart","animationiteration","keyup","keydown","mouseup","mousedown","mouseover","mouseout","blur","focus"],ja=function(a){return a===void 0&&(a=0),Date.now()+a},K=!1,Ga=function(){function a(){var b=this;this.stopped=!0,this.listener=function(){return b.schedule()}}return a.prototype.run=function(b){var c=this;b===void 0&&(b=Ea);if(K)return;K=!0;var d=ja(b);ha(function(){var e=!1;try{e=ea()}finally{K=!1,b=d-ja();if(!Da())return;e?c.run(1e3):b>0?c.run(b):c.start()}})},a.prototype.schedule=function(){this.stop(),this.run()},a.prototype.observe=function(){var b=this,c=function(){return b.observer&&b.observer.observe(document.body,Fa)};document.body?c():l.addEventListener("DOMContentLoaded",c)},a.prototype.start=function(){var b=this;this.stopped&&(this.stopped=!1,this.observer=new MutationObserver(this.listener),this.observe(),ia.forEach(function(c){return l.addEventListener(c,b.listener,!0)}))},a.prototype.stop=function(){var b=this;this.stopped||(this.observer&&this.observer.disconnect(),ia.forEach(function(c){return l.removeEventListener(c,b.listener,!0)}),this.stopped=!0)},a}(),t=new Ga(),F=function(a){!y&&a>0&&t.start(),y+=a,!y&&t.stop()};var za=function(a){return!o(a)&&!V(a)&&getComputedStyle(a).display==="inline"},W=function(){function a(b,c){this.target=b,this.observedBox=c||k.CONTENT_BOX,this.lastReportedSize={inlineSize:0,blockSize:0}}return a.prototype.isActive=function(){var b=s(this.target,this.observedBox,!0);return za(this.target)&&(this.lastReportedSize=b),this.lastReportedSize.inlineSize!==b.inlineSize||this.lastReportedSize.blockSize!==b.blockSize?!0:!1},a}();var X=function(){function a(b,c){this.activeTargets=[],this.skippedTargets=[],this.observationTargets=[],this.observer=b,this.callback=c}return a}();var u=new WeakMap(),Y=function(a,b){for(var c=0;c<a.length;c+=1)if(a[c].target===b)return c;return-1},p=function(){function a(){}return a.connect=function(b,c){var d=new X(b,c);u.set(b,d)},a.observe=function(b,c,d){var e=u.get(b),g=e.observationTargets.length===0;Y(e.observationTargets,c)<0&&(g&&h.push(e),e.observationTargets.push(new W(c,d&&d.box)),F(1),t.schedule())},a.unobserve=function(b,c){var d=u.get(b),e=Y(d.observationTargets,c),g=d.observationTargets.length===1;e>=0&&(g&&h.splice(h.indexOf(d),1),d.observationTargets.splice(e,1),F(-1))},a.disconnect=function(b){var c=this,d=u.get(b);d.observationTargets.slice().forEach(function(e){return c.unobserve(b,e.target)}),d.activeTargets.splice(0,d.activeTargets.length)},a}();var C=function(){function a(b){if(arguments.length===0)throw new TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");if(typeof b!=="function")throw new TypeError("Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.");p.connect(this,b)}return a.prototype.observe=function(b,c){if(arguments.length===0)throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");if(!E(b))throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");p.observe(this,b,c)},a.prototype.unobserve=function(b){if(arguments.length===0)throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");if(!E(b))throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");p.unobserve(this,b)},a.prototype.disconnect=function(){p.disconnect(this)},a.toString=function(){return"function ResizeObserver () { [polyfill code] }"},a}();const Q="article#main",R="section.footnotes[role=doc-endnotes]",ra=1260;function sa(a,b){const c=a.offsetParent.getBoundingClientRect().top;return b.getBoundingClientRect().top-c}function ta(a){let b=0;Array.prototype.forEach.call(a,function(c,d){const e=document.querySelector("a.footnote-ref[href='#"+c.id+"']"),g=e.closest("p,li")||e;let f=sa(c,g);f<b&&(f=b),b=f+c.offsetHeight+parseInt(window.getComputedStyle(c).marginBottom)+parseInt(window.getComputedStyle(c).marginTop),c.style.top=f+"px",c.style.position="absolute"})}function ua(a){Array.prototype.forEach.call(a,function(b,c){b.style.top=null,b.style.position=null})}function S(a){const b=document.querySelector(R),c=b.querySelectorAll("li[role=doc-endnote]");a?(b.classList.add("floating-footnotes"),ta(c),va()):(wa(),ua(c),b.classList.remove("floating-footnotes"))}function va(){const a=document.querySelector(Q);T.observe(a)}function wa(){T.disconnect()}const xa=function(){let a=!1;return function(){let b=window.innerWidth>=ra;b!==a&&(S(b),a=b)}}(),T=new C((a,b)=>{S(!0)});function U(){r(()=>{const a=document.querySelector(R),b=document.querySelector(Q),c=b&&!b.classList.contains("no-floating-footnotes");a&&c&&P(xa)})}U();O();})();
