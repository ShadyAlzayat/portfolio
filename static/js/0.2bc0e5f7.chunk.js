(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{238:function(t,e,r){"use strict";r.r(e),r.d(e,"createSwipeBackGesture",(function(){return o}));var n=r(27),o=function(t,e,r,o,a){var i=t.ownerDocument.defaultView;return Object(n.createGesture)({el:t,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:function(t){return t.startX<=50&&e()},onStart:r,onMove:function(t){var e=t.deltaX/i.innerWidth;o(e)},onEnd:function(t){var e=t.deltaX,r=i.innerWidth,n=e/r,o=t.velocityX,c=r/2,u=o>=0&&(o>.2||t.deltaX>c),s=(u?1-n:n)*r,f=0;if(s>5){var d=s/Math.abs(o);f=Math.min(d,540)}a(u,n<=0?.01:n,f)}})}}}]);
//# sourceMappingURL=0.2bc0e5f7.chunk.js.map