(window.webpackJsonpportfolio=window.webpackJsonpportfolio||[]).push([[37],{146:function(t,i,e){"use strict";e.r(i),e.d(i,"ion_item_option",(function(){return d})),e.d(i,"ion_item_options",(function(){return l})),e.d(i,"ion_item_sliding",(function(){return p}));var n,o=e(2),r=e(17),s=(e(3),e(217)),a=e(218),d=function(){function t(t){Object(r.l)(this,t),this.disabled=!1,this.expandable=!1,this.type="button",this.onClick=function(t){t.target.closest("ion-item-option")&&t.preventDefault()}}return t.prototype.render=function(){var t,i=this.disabled,e=this.expandable,n=void 0===this.href?"button":"a",o=Object(r.e)(this),a="button"===n?{type:this.type}:{download:this.download,href:this.href,target:this.target};return Object(r.i)(r.a,{onClick:this.onClick,class:Object.assign({},Object(s.a)(this.color),(t={},t[o]=!0,t["item-option-disabled"]=i,t["item-option-expandable"]=e,t["ion-activatable"]=!0,t))},Object(r.i)(n,Object.assign({},a,{class:"button-native",disabled:i}),Object(r.i)("span",{class:"button-inner"},Object(r.i)("slot",{name:"top"}),Object(r.i)("div",{class:"horizontal-wrapper"},Object(r.i)("slot",{name:"start"}),Object(r.i)("slot",{name:"icon-only"}),Object(r.i)("slot",null),Object(r.i)("slot",{name:"end"})),Object(r.i)("slot",{name:"bottom"})),"md"===o&&Object(r.i)("ion-ripple-effect",null)))},Object.defineProperty(t.prototype,"el",{get:function(){return Object(r.f)(this)},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return":host{--background:var(--ion-color-primary,#3880ff);--color:var(--ion-color-primary-contrast,#fff);background:var(--background);color:var(--color);font-family:var(--ion-font-family,inherit)}:host(.in-list.item-options-end:last-child){padding-right:calc(.7em + var(--ion-safe-area-right))}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host(.in-list.item-options-end:last-child){padding-right:unset;-webkit-padding-end:calc(.7em + var(--ion-safe-area-right));padding-inline-end:calc(.7em + var(--ion-safe-area-right))}}:host(.in-list.item-options-start:first-child){padding-left:calc(.7em + var(--ion-safe-area-left))}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host(.in-list.item-options-start:first-child){padding-left:unset;-webkit-padding-start:calc(.7em + var(--ion-safe-area-left));padding-inline-start:calc(.7em + var(--ion-safe-area-left))}}:host(.ion-color){background:var(--ion-color-base);color:var(--ion-color-contrast)}.button-native{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;padding-left:.7em;padding-right:.7em;padding-top:0;padding-bottom:0;display:inline-block;position:relative;width:100%;height:100%;border:0;outline:none;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;-webkit-box-sizing:border-box;box-sizing:border-box}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.button-native{padding-left:unset;padding-right:unset;-webkit-padding-start:.7em;padding-inline-start:.7em;-webkit-padding-end:.7em;padding-inline-end:.7em}}.button-inner{-ms-flex-flow:column nowrap;flex-flow:column nowrap;height:100%}.button-inner,.horizontal-wrapper{display:-ms-flexbox;display:flex;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%}.horizontal-wrapper{-ms-flex-flow:row nowrap;flex-flow:row nowrap}::slotted(*){-ms-flex-negative:0;flex-shrink:0}::slotted([slot=start]){margin-left:0;margin-right:5px;margin-top:0;margin-bottom:0}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){::slotted([slot=start]){margin-left:unset;margin-right:unset;-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:5px;margin-inline-end:5px}}::slotted([slot=end]){margin-left:5px;margin-right:0;margin-top:0;margin-bottom:0}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){::slotted([slot=end]){margin-left:unset;margin-right:unset;-webkit-margin-start:5px;margin-inline-start:5px;-webkit-margin-end:0;margin-inline-end:0}}::slotted([slot=icon-only]){padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;margin-left:10px;margin-right:10px;margin-top:0;margin-bottom:0;min-width:.9em;font-size:1.8em}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){::slotted([slot=icon-only]){margin-left:unset;margin-right:unset;-webkit-margin-start:10px;margin-inline-start:10px;-webkit-margin-end:10px;margin-inline-end:10px}}:host(.item-option-expandable){-ms-flex-negative:0;flex-shrink:0;-webkit-transition-duration:0;transition-duration:0;-webkit-transition-property:none;transition-property:none;-webkit-transition-timing-function:cubic-bezier(.65,.05,.36,1);transition-timing-function:cubic-bezier(.65,.05,.36,1)}:host(.item-option-disabled){pointer-events:none}:host(.item-option-disabled) .button-native{cursor:default;opacity:.5;pointer-events:none}:host{font-size:14px;font-weight:500;text-transform:uppercase}"},enumerable:!0,configurable:!0}),t}(),l=function(){function t(t){Object(r.l)(this,t),this.side="end",this.ionSwipe=Object(r.d)(this,"ionSwipe",7)}return t.prototype.fireSwipeEvent=function(){return o.a(this,void 0,void 0,(function(){return o.c(this,(function(t){return this.ionSwipe.emit({side:this.side}),[2]}))}))},t.prototype.render=function(){var t,i=Object(r.e)(this),e=Object(a.h)(this.side);return Object(r.i)(r.a,{class:(t={},t[i]=!0,t["item-options-"+i]=!0,t["item-options-start"]=!e,t["item-options-end"]=e,t)})},Object.defineProperty(t.prototype,"el",{get:function(){return Object(r.f)(this)},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return"ion-item-options{top:0;right:0;-ms-flex-pack:end;justify-content:flex-end;display:none;position:absolute;height:100%;font-size:14px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1}:host-context([dir=rtl]) ion-item-options,[dir=rtl] ion-item-options{-ms-flex-pack:start;justify-content:flex-start}:host-context([dir=rtl]) ion-item-options:not(.item-options-end),[dir=rtl] ion-item-options:not(.item-options-end){right:auto;left:0;-ms-flex-pack:end;justify-content:flex-end}.item-options-start{right:auto;left:0;-ms-flex-pack:start;justify-content:flex-start}:host-context([dir=rtl]) .item-options-start,[dir=rtl] .item-options-start{-ms-flex-pack:end;justify-content:flex-end}.item-options-start ion-item-option:first-child{padding-right:var(--ion-safe-area-left)}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.item-options-start ion-item-option:first-child{padding-right:unset;-webkit-padding-end:var(--ion-safe-area-left);padding-inline-end:var(--ion-safe-area-left)}}.item-options-end ion-item-option:last-child{padding-right:var(--ion-safe-area-right)}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.item-options-end ion-item-option:last-child{padding-right:unset;-webkit-padding-end:var(--ion-safe-area-right);padding-inline-end:var(--ion-safe-area-right)}}:host-context([dir=rtl]) .item-sliding-active-slide.item-sliding-active-options-start ion-item-options:not(.item-options-end),[dir=rtl] .item-sliding-active-slide.item-sliding-active-options-start ion-item-options:not(.item-options-end){width:100%;visibility:visible}.item-sliding-active-slide ion-item-options{display:-ms-flexbox;display:flex;visibility:hidden}.item-sliding-active-slide.item-sliding-active-options-end ion-item-options:not(.item-options-start),.item-sliding-active-slide.item-sliding-active-options-start .item-options-start{width:100%;visibility:visible}.item-options-md{border-bottom-style:solid;border-bottom-color:var(--ion-item-border-color,var(--ion-border-color,var(--ion-color-step-150,rgba(0,0,0,.13))))}.item-options-md,.list-md-lines-none .item-options-md{border-bottom-width:0}.list-md-lines-full .item-options-md,.list-md-lines-inset .item-options-md.item-options-end{border-bottom-width:1px}"},enumerable:!0,configurable:!0}),t}(),p=function(){function t(t){Object(r.l)(this,t),this.item=null,this.openAmount=0,this.initialOpenAmount=0,this.optsWidthRightSide=0,this.optsWidthLeftSide=0,this.sides=0,this.optsDirty=!0,this.state=2,this.disabled=!1,this.ionDrag=Object(r.d)(this,"ionDrag",7)}return t.prototype.disabledChanged=function(){this.gesture&&this.gesture.setDisabled(this.disabled)},t.prototype.connectedCallback=function(){return o.a(this,void 0,void 0,(function(){var t,i=this;return o.c(this,(function(n){switch(n.label){case 0:return this.item=this.el.querySelector("ion-item"),[4,this.updateOptions()];case 1:return n.sent(),t=this,[4,Promise.resolve().then(e.bind(null,22))];case 2:return t.gesture=n.sent().createGesture({el:this.el,gestureName:"item-swipe",gesturePriority:100,threshold:5,canStart:function(){return i.canStart()},onStart:function(){return i.onStart()},onMove:function(t){return i.onMove(t)},onEnd:function(t){return i.onEnd(t)}}),this.disabledChanged(),[2]}}))}))},t.prototype.disconnectedCallback=function(){this.gesture&&(this.gesture.destroy(),this.gesture=void 0),this.item=null,this.leftOptions=this.rightOptions=void 0,n===this.el&&(n=void 0)},t.prototype.getOpenAmount=function(){return Promise.resolve(this.openAmount)},t.prototype.getSlidingRatio=function(){return Promise.resolve(this.getSlidingRatioSync())},t.prototype.open=function(t){return o.a(this,void 0,void 0,(function(){var i,e,r,s=this;return o.c(this,(function(o){return null===this.item?[2]:(i=this.getOptions(t))?(void 0===t&&(t=i===this.leftOptions?"start":"end"),t=Object(a.h)(t)?"end":"start",e=this.openAmount<0,r=this.openAmount>0,e&&i===this.leftOptions?[2]:r&&i===this.rightOptions?[2]:(this.closeOpened(),this.state=4,requestAnimationFrame((function(){s.calculateOptsWidth();var i="end"===t?s.optsWidthRightSide:-s.optsWidthLeftSide;n=s.el,s.setOpenAmount(i,!1),s.state="end"===t?8:16})),[2])):[2]}))}))},t.prototype.close=function(){return o.a(this,void 0,void 0,(function(){return o.c(this,(function(t){return this.setOpenAmount(0,!0),[2]}))}))},t.prototype.closeOpened=function(){return o.a(this,void 0,void 0,(function(){return o.c(this,(function(t){return void 0!==n?(n.close(),n=void 0,[2,!0]):[2,!1]}))}))},t.prototype.getOptions=function(t){return void 0===t?this.leftOptions||this.rightOptions:"start"===t?this.leftOptions:this.rightOptions},t.prototype.updateOptions=function(){return o.a(this,void 0,void 0,(function(){var t,i,e,n;return o.c(this,(function(o){switch(o.label){case 0:t=this.el.querySelectorAll("ion-item-options"),i=0,this.leftOptions=this.rightOptions=void 0,e=0,o.label=1;case 1:return e<t.length?[4,t.item(e).componentOnReady()]:[3,4];case 2:n=o.sent(),"start"===(Object(a.h)(n.side)?"end":"start")?(this.leftOptions=n,i|=1):(this.rightOptions=n,i|=2),o.label=3;case 3:return e++,[3,1];case 4:return this.optsDirty=!0,this.sides=i,[2]}}))}))},t.prototype.canStart=function(){return n&&n!==this.el?(this.closeOpened(),!1):!(!this.rightOptions&&!this.leftOptions)},t.prototype.onStart=function(){n=this.el,void 0!==this.tmr&&(clearTimeout(this.tmr),this.tmr=void 0),0===this.openAmount&&(this.optsDirty=!0,this.state=4),this.initialOpenAmount=this.openAmount,this.item&&(this.item.style.transition="none")},t.prototype.onMove=function(t){this.optsDirty&&this.calculateOptsWidth();var i,e=this.initialOpenAmount-t.deltaX;switch(this.sides){case 2:e=Math.max(0,e);break;case 1:e=Math.min(0,e);break;case 3:break;case 0:return;default:console.warn("invalid ItemSideFlags value",this.sides)}e>this.optsWidthRightSide?e=(i=this.optsWidthRightSide)+.55*(e-i):e<-this.optsWidthLeftSide&&(e=(i=-this.optsWidthLeftSide)+.55*(e-i)),this.setOpenAmount(e,!1)},t.prototype.onEnd=function(t){var i=t.velocityX,e=this.openAmount>0?this.optsWidthRightSide:-this.optsWidthLeftSide,n=this.openAmount>0===!(i<0),o=Math.abs(i)>.3,r=Math.abs(this.openAmount)<Math.abs(e/2);c(n,o,r)&&(e=0);var s=this.state;this.setOpenAmount(e,!0),0!==(32&s)&&this.rightOptions?this.rightOptions.fireSwipeEvent():0!==(64&s)&&this.leftOptions&&this.leftOptions.fireSwipeEvent()},t.prototype.calculateOptsWidth=function(){this.optsWidthRightSide=0,this.rightOptions&&(this.rightOptions.style.display="flex",this.optsWidthRightSide=this.rightOptions.offsetWidth,this.rightOptions.style.display=""),this.optsWidthLeftSide=0,this.leftOptions&&(this.leftOptions.style.display="flex",this.optsWidthLeftSide=this.leftOptions.offsetWidth,this.leftOptions.style.display=""),this.optsDirty=!1},t.prototype.setOpenAmount=function(t,i){var e=this;if(void 0!==this.tmr&&(clearTimeout(this.tmr),this.tmr=void 0),this.item){var o=this.item.style;if(this.openAmount=t,i&&(o.transition=""),t>0)this.state=t>=this.optsWidthRightSide+30?40:8;else{if(!(t<0))return this.tmr=setTimeout((function(){e.state=2,e.tmr=void 0}),600),n=void 0,void(o.transform="");this.state=t<=-this.optsWidthLeftSide-30?80:16}o.transform="translate3d("+-t+"px,0,0)",this.ionDrag.emit({amount:t,ratio:this.getSlidingRatioSync()})}},t.prototype.getSlidingRatioSync=function(){return this.openAmount>0?this.openAmount/this.optsWidthRightSide:this.openAmount<0?this.openAmount/this.optsWidthLeftSide:0},t.prototype.render=function(){var t,i=Object(r.e)(this);return Object(r.i)(r.a,{class:(t={},t[i]=!0,t["item-sliding-active-slide"]=2!==this.state,t["item-sliding-active-options-end"]=0!==(8&this.state),t["item-sliding-active-options-start"]=0!==(16&this.state),t["item-sliding-active-swipe-end"]=0!==(32&this.state),t["item-sliding-active-swipe-start"]=0!==(64&this.state),t)})},Object.defineProperty(t.prototype,"el",{get:function(){return Object(r.f)(this)},enumerable:!0,configurable:!0}),Object.defineProperty(t,"watchers",{get:function(){return{disabled:["disabledChanged"]}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return"ion-item-sliding{display:block;position:relative;width:100%;overflow:hidden}ion-item-sliding,ion-item-sliding .item{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.item-sliding-active-slide .item{position:relative;-webkit-transition:-webkit-transform .5s cubic-bezier(.36,.66,.04,1);transition:-webkit-transform .5s cubic-bezier(.36,.66,.04,1);transition:transform .5s cubic-bezier(.36,.66,.04,1);transition:transform .5s cubic-bezier(.36,.66,.04,1),-webkit-transform .5s cubic-bezier(.36,.66,.04,1);opacity:1;z-index:2;pointer-events:none;will-change:transform}.item-sliding-active-swipe-end .item-options-end .item-option-expandable{padding-left:100%;-ms-flex-order:1;order:1;-webkit-transition-duration:.6s;transition-duration:.6s;-webkit-transition-property:padding-left;transition-property:padding-left}:host-context([dir=rtl]) .item-sliding-active-swipe-end .item-options-end .item-option-expandable,[dir=rtl] .item-sliding-active-swipe-end .item-options-end .item-option-expandable{-ms-flex-order:-1;order:-1}.item-sliding-active-swipe-start .item-options-start .item-option-expandable{padding-right:100%;-ms-flex-order:-1;order:-1;-webkit-transition-duration:.6s;transition-duration:.6s;-webkit-transition-property:padding-right;transition-property:padding-right}:host-context([dir=rtl]) .item-sliding-active-swipe-start .item-options-start .item-option-expandable,[dir=rtl] .item-sliding-active-swipe-start .item-options-start .item-option-expandable{-ms-flex-order:1;order:1}"},enumerable:!0,configurable:!0}),t}(),c=function(t,i,e){return!i&&e||t&&i}},217:function(t,i,e){"use strict";e.d(i,"a",(function(){return r})),e.d(i,"b",(function(){return s})),e.d(i,"c",(function(){return o})),e.d(i,"d",(function(){return d}));var n=e(2),o=function(t,i){return null!==i.closest(t)},r=function(t){var i;return"string"===typeof t&&t.length>0?((i={"ion-color":!0})["ion-color-"+t]=!0,i):void 0},s=function(t){var i={};return function(t){return void 0!==t?(Array.isArray(t)?t:t.split(" ")).filter((function(t){return null!=t})).map((function(t){return t.trim()})).filter((function(t){return""!==t})):[]}(t).forEach((function(t){return i[t]=!0})),i},a=/^[a-z][a-z0-9+\-.]*:/,d=function(t,i,e){return n.a(void 0,void 0,void 0,(function(){var o;return n.c(this,(function(n){return null!=t&&"#"!==t[0]&&!a.test(t)&&(o=document.querySelector("ion-router"))?(null!=i&&i.preventDefault(),[2,o.push(t,e)]):[2,!1]}))}))}},218:function(t,i,e){"use strict";e.d(i,"a",(function(){return n})),e.d(i,"b",(function(){return d})),e.d(i,"c",(function(){return a})),e.d(i,"d",(function(){return u})),e.d(i,"e",(function(){return h})),e.d(i,"f",(function(){return r})),e.d(i,"g",(function(){return o})),e.d(i,"h",(function(){return c})),e.d(i,"i",(function(){return l})),e.d(i,"j",(function(){return p})),e.d(i,"k",(function(){return s}));var n=function(t){"requestIdleCallback"in window?window.requestIdleCallback(t):setTimeout(t,32)},o=function(t){return!!t.shadowRoot&&!!t.attachShadow},r=function(t){var i=t.closest("ion-item");return i?i.querySelector("ion-label"):null},s=function(t,i,e,n,r){if(t||o(i)){var s=i.querySelector("input.aux-input");s||((s=i.ownerDocument.createElement("input")).type="hidden",s.classList.add("aux-input"),i.appendChild(s)),s.disabled=r,s.name=e,s.value=n||""}},a=function(t,i,e){return Math.max(t,Math.min(i,e))},d=function(t,i){if(!t){var e="ASSERT: "+i;throw console.error(e),new Error(e)}},l=function(t){return t.timeStamp||Date.now()},p=function(t){if(t){var i=t.changedTouches;if(i&&i.length>0){var e=i[0];return{x:e.clientX,y:e.clientY}}if(void 0!==t.pageX)return{x:t.pageX,y:t.pageY}}return{x:0,y:0}},c=function(t){var i="rtl"===document.dir;switch(t){case"start":return i;case"end":return!i;default:throw new Error('"'+t+'" is not a valid value for [side]. Use "start" or "end" instead.')}},u=function(t,i){var e=t._original||t;return{_original:t,emit:h(e.emit.bind(e),i)}},h=function(t,i){var e;return void 0===i&&(i=0),function(){for(var n=[],o=0;o<arguments.length;o++)n[o]=arguments[o];clearTimeout(e),e=setTimeout.apply(void 0,[t,i].concat(n))}}}}]);
//# sourceMappingURL=37.471cf490.chunk.js.map