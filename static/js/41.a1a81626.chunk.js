(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[41],{133:function(t,n,o){"use strict";o.r(n),o.d(n,"startFocusVisible",(function(){return i}));var e="ion-focused",s=["Tab","ArrowDown","Space","Escape"," ","Shift","Enter","ArrowLeft","ArrowRight","ArrowUp"],i=function(){var t=[],n=!0,o=document,i=function(n){t.forEach((function(t){return t.classList.remove(e)})),n.forEach((function(t){return t.classList.add(e)})),t=n},r=function(){n=!1,i([])};o.addEventListener("keydown",(function(t){(n=s.includes(t.key))||i([])})),o.addEventListener("focusin",(function(t){if(n&&t.composedPath){var o=t.composedPath().filter((function(t){return!!t.classList&&t.classList.contains("ion-focusable")}));i(o)}})),o.addEventListener("focusout",(function(){o.activeElement===o.body&&i([])})),o.addEventListener("touchstart",r),o.addEventListener("mousedown",r)}}}]);
//# sourceMappingURL=41.a1a81626.chunk.js.map