(window.webpackJsonpportfolio=window.webpackJsonpportfolio||[]).push([[18],{156:function(e,t,o){"use strict";o.r(t),o.d(t,"ion_popover",(function(){return h}));var n=o(2),i=o(17),r=(o(3),o(9)),s=(o(12),o(10)),a=o(217),c=o(220),l=o(221),p=function(e,t){var o="top",n="left",i=e.querySelector(".popover-content"),s=i.getBoundingClientRect(),a=s.width,c=s.height,l=e.ownerDocument.defaultView.innerWidth,p=e.ownerDocument.defaultView.innerHeight,d=t&&t.target&&t.target.getBoundingClientRect(),f=null!=d&&"top"in d?d.top:p/2-c/2,v=null!=d&&"left"in d?d.left:l/2,h=d&&d.width||0,m=d&&d.height||0,b=e.querySelector(".popover-arrow"),g=b.getBoundingClientRect(),w=g.width,y=g.height;null==d&&(b.style.display="none");var x={top:f+m,left:v+h/2-w/2},E={top:f+m+(y-1),left:v+h/2-a/2},O=!1,j=!1;E.left<u+25?(O=!0,E.left=u):a+u+E.left+25>l&&(j=!0,E.left=l-a-u,n="right"),f+m+c>p&&f-c>0?(x.top=f-(y+1),E.top=f-c-(y-1),e.className=e.className+" popover-bottom",o="bottom"):f+m+c>p&&(i.style.bottom=u+"%"),b.style.top=x.top+"px",b.style.left=x.left+"px",i.style.top=E.top+"px",i.style.left=E.left+"px",O&&(i.style.left="calc("+E.left+"px + var(--ion-safe-area-left, 0px))"),j&&(i.style.left="calc("+E.left+"px - var(--ion-safe-area-right, 0px))"),i.style.transformOrigin=o+" "+n;var k=Object(r.a)(),D=Object(r.a)(),P=Object(r.a)();return D.addElement(e.querySelector("ion-backdrop")).fromTo("opacity",.01,.08),P.addElement(e.querySelector(".popover-wrapper")).fromTo("opacity",.01,1),k.addElement(e).easing("ease").duration(100).addAnimation([D,P])},u=5,d=function(e){var t=Object(r.a)(),o=Object(r.a)(),n=Object(r.a)();return o.addElement(e.querySelector("ion-backdrop")).fromTo("opacity",.08,0),n.addElement(e.querySelector(".popover-wrapper")).fromTo("opacity",.99,0),t.addElement(e).easing("ease").duration(500).addAnimation([o,n])},f=function(e,t){var o=e.ownerDocument,n="rtl"===o.dir,i="top",s=n?"right":"left",a=e.querySelector(".popover-content"),c=a.getBoundingClientRect(),l=c.width,p=c.height,u=o.defaultView.innerWidth,d=o.defaultView.innerHeight,f=t&&t.target&&t.target.getBoundingClientRect(),v=null!=f&&"bottom"in f?f.bottom:d/2-p/2,h=null!=f&&"left"in f?n?f.left-l+f.width:f.left:u/2-l/2,m=f&&f.height||0,b={top:v,left:h};b.left<12?(b.left=12,s="left"):l+12+b.left>u&&(b.left=u-l-12,s="right"),v+m+p>d&&v-p>0?(b.top=v-p-m,e.className=e.className+" popover-bottom",i="bottom"):v+m+p>d&&(a.style.bottom="12px");var g=Object(r.a)(),w=Object(r.a)(),y=Object(r.a)(),x=Object(r.a)(),E=Object(r.a)();return w.addElement(e.querySelector("ion-backdrop")).fromTo("opacity",.01,.32),y.addElement(e.querySelector(".popover-wrapper")).fromTo("opacity",.01,1),x.addElement(a).beforeStyles({top:b.top+"px",left:b.left+"px","transform-origin":i+" "+s}).fromTo("transform","scale(0.001)","scale(1)"),E.addElement(e.querySelector(".popover-viewport")).fromTo("opacity",.01,1),g.addElement(e).easing("cubic-bezier(0.36,0.66,0.04,1)").duration(300).addAnimation([w,y,x,E])},v=function(e){var t=Object(r.a)(),o=Object(r.a)(),n=Object(r.a)();return o.addElement(e.querySelector("ion-backdrop")).fromTo("opacity",.32,0),n.addElement(e.querySelector(".popover-wrapper")).fromTo("opacity",.99,0),t.addElement(e).easing("ease").duration(500).addAnimation([o,n])},h=function(){function e(e){var t=this;Object(i.l)(this,e),this.presented=!1,this.mode=Object(i.e)(this),this.keyboardClose=!0,this.backdropDismiss=!0,this.showBackdrop=!0,this.translucent=!1,this.animated=!0,this.onDismiss=function(e){e.stopPropagation(),e.preventDefault(),t.dismiss()},this.onBackdropTap=function(){t.dismiss(void 0,s.a)},this.onLifecycle=function(e){var o=t.usersElement,n=m[e.type];if(o&&n){var i=new CustomEvent(n,{bubbles:!1,cancelable:!1,detail:e.detail});o.dispatchEvent(i)}},Object(s.e)(this.el),this.didPresent=Object(i.d)(this,"ionPopoverDidPresent",7),this.willPresent=Object(i.d)(this,"ionPopoverWillPresent",7),this.willDismiss=Object(i.d)(this,"ionPopoverWillDismiss",7),this.didDismiss=Object(i.d)(this,"ionPopoverDidDismiss",7)}return e.prototype.present=function(){return n.a(this,void 0,void 0,(function(){var e,t,o;return n.c(this,(function(n){switch(n.label){case 0:if(this.presented)return[2];if(!(e=this.el.querySelector(".popover-content")))throw new Error("container is undefined");return t=Object.assign({},this.componentProps,{popover:this.el}),o=this,[4,Object(c.a)(this.delegate,e,this.component,["popover-viewport",this.el["s-sc"]],t)];case 1:return o.usersElement=n.sent(),[4,Object(l.a)(this.usersElement)];case 2:return n.sent(),[2,Object(s.f)(this,"popoverEnter",p,f,this.event)]}}))}))},e.prototype.dismiss=function(e,t){return n.a(this,void 0,void 0,(function(){var o;return n.c(this,(function(n){switch(n.label){case 0:return[4,Object(s.g)(this,e,t,"popoverLeave",d,v,this.event)];case 1:return(o=n.sent())?[4,Object(c.b)(this.delegate,this.usersElement)]:[3,3];case 2:n.sent(),n.label=3;case 3:return[2,o]}}))}))},e.prototype.onDidDismiss=function(){return Object(s.h)(this.el,"ionPopoverDidDismiss")},e.prototype.onWillDismiss=function(){return Object(s.h)(this.el,"ionPopoverWillDismiss")},e.prototype.render=function(){var e,t=Object(i.e)(this),o=this.onLifecycle;return Object(i.i)(i.a,{"aria-modal":"true","no-router":!0,style:{zIndex:""+(2e4+this.overlayIndex)},class:Object.assign({},Object(a.b)(this.cssClass),(e={},e[t]=!0,e["popover-translucent"]=this.translucent,e)),onIonPopoverDidPresent:o,onIonPopoverWillPresent:o,onIonPopoverWillDismiss:o,onIonPopoverDidDismiss:o,onIonDismiss:this.onDismiss,onIonBackdropTap:this.onBackdropTap},Object(i.i)("ion-backdrop",{tappable:this.backdropDismiss,visible:this.showBackdrop}),Object(i.i)("div",{class:"popover-wrapper"},Object(i.i)("div",{class:"popover-arrow"}),Object(i.i)("div",{class:"popover-content"})))},Object.defineProperty(e.prototype,"el",{get:function(){return Object(i.f)(this)},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return'.sc-ion-popover-ios-h{--background:var(--ion-background-color,#fff);--min-width:0;--min-height:0;--max-width:auto;--height:auto;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:fixed;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;color:var(--ion-text-color,#000);z-index:1001}.overlay-hidden.sc-ion-popover-ios-h{display:none}.popover-wrapper.sc-ion-popover-ios{opacity:0;z-index:10}.popover-content.sc-ion-popover-ios{display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:auto;z-index:10}.popover-viewport.sc-ion-popover-ios{--ion-safe-area-top:0px;--ion-safe-area-right:0px;--ion-safe-area-bottom:0px;--ion-safe-area-left:0px}.sc-ion-popover-ios-h{--width:200px;--max-height:90%;--box-shadow:none}.popover-content.sc-ion-popover-ios{border-radius:10px}.popover-arrow.sc-ion-popover-ios{display:block;position:absolute;width:20px;height:10px;overflow:hidden}.popover-arrow.sc-ion-popover-ios:after{left:3px;top:3px;border-radius:3px;position:absolute;width:14px;height:14px;-webkit-transform:rotate(45deg);transform:rotate(45deg);background:var(--background);content:"";z-index:10}[dir=rtl].sc-ion-popover-ios-h .popover-arrow.sc-ion-popover-ios:after, [dir=rtl] .sc-ion-popover-ios-h .popover-arrow.sc-ion-popover-ios:after, [dir=rtl].sc-ion-popover-ios .popover-arrow.sc-ion-popover-ios:after{left:unset;right:unset;right:3px}.popover-bottom.sc-ion-popover-ios-h .popover-arrow.sc-ion-popover-ios{top:auto;bottom:-10px}.popover-bottom.sc-ion-popover-ios-h .popover-arrow.sc-ion-popover-ios:after{top:-6px}@supports ((-webkit-backdrop-filter:blur(0)) or (backdrop-filter:blur(0))){.popover-translucent.sc-ion-popover-ios-h .popover-arrow.sc-ion-popover-ios:after, .popover-translucent.sc-ion-popover-ios-h .popover-content.sc-ion-popover-ios{background:rgba(var(--ion-background-color-rgb,255,255,255),.8);-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}}'},enumerable:!0,configurable:!0}),e}(),m={ionPopoverDidPresent:"ionViewDidEnter",ionPopoverWillPresent:"ionViewWillEnter",ionPopoverWillDismiss:"ionViewWillLeave",ionPopoverDidDismiss:"ionViewDidLeave"}},217:function(e,t,o){"use strict";o.d(t,"a",(function(){return r})),o.d(t,"b",(function(){return s})),o.d(t,"c",(function(){return i})),o.d(t,"d",(function(){return c}));var n=o(2),i=function(e,t){return null!==t.closest(e)},r=function(e){var t;return"string"===typeof e&&e.length>0?((t={"ion-color":!0})["ion-color-"+e]=!0,t):void 0},s=function(e){var t={};return function(e){return void 0!==e?(Array.isArray(e)?e:e.split(" ")).filter((function(e){return null!=e})).map((function(e){return e.trim()})).filter((function(e){return""!==e})):[]}(e).forEach((function(e){return t[e]=!0})),t},a=/^[a-z][a-z0-9+\-.]*:/,c=function(e,t,o){return n.a(void 0,void 0,void 0,(function(){var i;return n.c(this,(function(n){return null!=e&&"#"!==e[0]&&!a.test(e)&&(i=document.querySelector("ion-router"))?(null!=t&&t.preventDefault(),[2,i.push(e,o)]):[2,!1]}))}))}},220:function(e,t,o){"use strict";o.d(t,"a",(function(){return i})),o.d(t,"b",(function(){return r}));var n=o(2),i=function(e,t,o,i,r){return n.a(void 0,void 0,void 0,(function(){var s;return n.c(this,(function(n){switch(n.label){case 0:if(e)return[2,e.attachViewToDom(t,o,r,i)];if("string"!==typeof o&&!(o instanceof HTMLElement))throw new Error("framework delegate is missing");return s="string"===typeof o?t.ownerDocument&&t.ownerDocument.createElement(o):o,i&&i.forEach((function(e){return s.classList.add(e)})),r&&Object.assign(s,r),t.appendChild(s),s.componentOnReady?[4,s.componentOnReady()]:[3,2];case 1:n.sent(),n.label=2;case 2:return[2,s]}}))}))},r=function(e,t){if(t){if(e){var o=t.parentElement;return e.removeViewFromDom(o,t)}t.remove()}return Promise.resolve()}},221:function(e,t,o){"use strict";o.d(t,"a",(function(){return y})),o.d(t,"b",(function(){return g})),o.d(t,"c",(function(){return x})),o.d(t,"d",(function(){return s}));var n=o(2),i=o(17),r=o(12),s=function(e){return new Promise((function(t,o){Object(i.m)((function(){a(e),c(e).then((function(o){o.animation&&o.animation.destroy(),l(e),t(o)}),(function(t){l(e),o(t)}))}))}))},a=function(e){var t=e.enteringEl,o=e.leavingEl;E(t,o,e.direction),e.showGoBack?t.classList.add("can-go-back"):t.classList.remove("can-go-back"),x(t,!1),o&&x(o,!1)},c=function(e){return n.a(void 0,void 0,void 0,(function(){var t;return n.c(this,(function(o){switch(o.label){case 0:return[4,p(e)];case 1:return t=o.sent(),[2,t?u(t,e):d(e)]}}))}))},l=function(e){var t=e.enteringEl,o=e.leavingEl;t.classList.remove("ion-page-invisible"),void 0!==o&&o.classList.remove("ion-page-invisible")},p=function(e){return n.a(void 0,void 0,void 0,(function(){var t;return n.c(this,(function(n){switch(n.label){case 0:return e.leavingEl&&e.animated&&0!==e.duration?e.animationBuilder?[2,e.animationBuilder]:"ios"!==e.mode?[3,2]:[4,o.e(91).then(o.bind(null,225))]:[2,void 0];case 1:return t=n.sent().iosTransitionAnimation,[3,4];case 2:return[4,o.e(92).then(o.bind(null,226))];case 3:t=n.sent().mdTransitionAnimation,n.label=4;case 4:return[2,t]}}))}))},u=function(e,t){return n.a(void 0,void 0,void 0,(function(){var i,r;return n.c(this,(function(n){switch(n.label){case 0:return[4,f(t,!0)];case 1:n.sent(),n.label=2;case 2:return n.trys.push([2,5,,6]),[4,o.e(3).then(o.bind(null,109))];case 3:return[4,n.sent().create(e,t.baseEl,t)];case 4:return i=n.sent(),[3,6];case 5:return n.sent(),i=e(t.baseEl,t),[3,6];case 6:return m(t.enteringEl,t.leavingEl),[4,h(i,t)];case 7:return r=n.sent(),i.hasCompleted=r,t.progressCallback&&t.progressCallback(void 0),i.hasCompleted&&b(t.enteringEl,t.leavingEl),[2,{hasCompleted:i.hasCompleted,animation:i}]}}))}))},d=function(e){return n.a(void 0,void 0,void 0,(function(){var t,o;return n.c(this,(function(n){switch(n.label){case 0:return t=e.enteringEl,o=e.leavingEl,[4,f(e,!1)];case 1:return n.sent(),m(t,o),b(t,o),[2,{hasCompleted:!0}]}}))}))},f=function(e,t){return n.a(void 0,void 0,void 0,(function(){var o,i;return n.c(this,(function(n){switch(n.label){case 0:return o=void 0!==e.deepWait?e.deepWait:t,i=o?[y(e.enteringEl),y(e.leavingEl)]:[w(e.enteringEl),w(e.leavingEl)],[4,Promise.all(i)];case 1:return n.sent(),[4,v(e.viewIsReady,e.enteringEl)];case 2:return n.sent(),[2]}}))}))},v=function(e,t){return n.a(void 0,void 0,void 0,(function(){return n.c(this,(function(o){switch(o.label){case 0:return e?[4,e(t)]:[3,2];case 1:o.sent(),o.label=2;case 2:return[2]}}))}))},h=function(e,t){var o=t.progressCallback,n=new Promise((function(t){return e.onFinish(t)}));return o?(e.progressStart(!0),o(e)):e.play(),n},m=function(e,t){g(t,r.c),g(e,r.a)},b=function(e,t){g(e,r.b),g(t,r.d)},g=function(e,t){if(e){var o=new CustomEvent(t,{bubbles:!1,cancelable:!1});e.dispatchEvent(o)}},w=function(e){return e&&e.componentOnReady?e.componentOnReady():Promise.resolve()},y=function e(t){return n.a(void 0,void 0,void 0,(function(){var o;return n.c(this,(function(n){switch(n.label){case 0:return(o=t)?null==o.componentOnReady?[3,2]:[4,o.componentOnReady()]:[3,4];case 1:if(null!=n.sent())return[2];n.label=2;case 2:return[4,Promise.all(Array.from(o.children).map(e))];case 3:n.sent(),n.label=4;case 4:return[2]}}))}))},x=function(e,t){t?(e.setAttribute("aria-hidden","true"),e.classList.add("ion-page-hidden")):(e.hidden=!1,e.removeAttribute("aria-hidden"),e.classList.remove("ion-page-hidden"))},E=function(e,t,o){void 0!==e&&(e.style.zIndex="back"===o?"99":"101"),void 0!==t&&(t.style.zIndex="100")}}}]);
//# sourceMappingURL=18.55f68687.chunk.js.map