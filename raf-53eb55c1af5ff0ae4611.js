!function(e){function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}var t={};n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},n.p="",n(n.s=3458)}({3458:function(e,n,t){t(3459).polyfill()},3459:function(e,n,t){(function(n){for(var r=t(3460),o="undefined"==typeof window?n:window,i=["moz","webkit"],c="AnimationFrame",u=o["request"+c],a=o["cancel"+c]||o["cancelRequest"+c],l=0;!u&&l<i.length;l++)u=o[i[l]+"Request"+c],a=o[i[l]+"Cancel"+c]||o[i[l]+"CancelRequest"+c];if(!u||!a){var f=0,s=0,h=[];u=function(e){if(0===h.length){var n=r(),t=Math.max(0,1e3/60-(n-f));f=t+n,setTimeout(function(){var e=h.slice(0);h.length=0;for(var n=0;n<e.length;n++)if(!e[n].cancelled)try{e[n].callback(f)}catch(e){setTimeout(function(){throw e},0)}},Math.round(t))}return h.push({handle:++s,callback:e,cancelled:!1}),s},a=function(e){for(var n=0;n<h.length;n++)h[n].handle===e&&(h[n].cancelled=!0)}}e.exports=function(e){return u.call(o,e)},e.exports.cancel=function(){a.apply(o,arguments)},e.exports.polyfill=function(e){e||(e=o),e.requestAnimationFrame=u,e.cancelAnimationFrame=a}}).call(n,t(4))},3460:function(e,n,t){(function(n){(function(){var t,r,o,i,c,u;"undefined"!=typeof performance&&null!==performance&&performance.now?e.exports=function(){return performance.now()}:void 0!==n&&null!==n&&n.hrtime?(e.exports=function(){return(t()-c)/1e6},r=n.hrtime,t=function(){var e;return e=r(),1e9*e[0]+e[1]},i=t(),u=1e9*n.uptime(),c=i-u):Date.now?(e.exports=function(){return Date.now()-o},o=Date.now()):(e.exports=function(){return(new Date).getTime()-o},o=(new Date).getTime())}).call(this)}).call(n,t(40))},4:function(e,n){var t;t=function(){return this}();try{t=t||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(t=window)}e.exports=t},40:function(e,n){function t(){throw new Error("setTimeout has not been defined")}function r(){throw new Error("clearTimeout has not been defined")}function o(e){if(f===setTimeout)return setTimeout(e,0);if((f===t||!f)&&setTimeout)return f=setTimeout,setTimeout(e,0);try{return f(e,0)}catch(n){try{return f.call(null,e,0)}catch(n){return f.call(this,e,0)}}}function i(e){if(s===clearTimeout)return clearTimeout(e);if((s===r||!s)&&clearTimeout)return s=clearTimeout,clearTimeout(e);try{return s(e)}catch(n){try{return s.call(null,e)}catch(n){return s.call(this,e)}}}function c(){d&&p&&(d=!1,p.length?m=p.concat(m):w=-1,m.length&&u())}function u(){if(!d){var e=o(c);d=!0;for(var n=m.length;n;){for(p=m,m=[];++w<n;)p&&p[w].run();w=-1,n=m.length}p=null,d=!1,i(e)}}function a(e,n){this.fun=e,this.array=n}function l(){}var f,s,h=e.exports={};!function(){try{f="function"==typeof setTimeout?setTimeout:t}catch(e){f=t}try{s="function"==typeof clearTimeout?clearTimeout:r}catch(e){s=r}}();var p,m=[],d=!1,w=-1;h.nextTick=function(e){var n=new Array(arguments.length-1);if(arguments.length>1)for(var t=1;t<arguments.length;t++)n[t-1]=arguments[t];m.push(new a(e,n)),1!==m.length||d||o(u)},a.prototype.run=function(){this.fun.apply(null,this.array)},h.title="browser",h.browser=!0,h.env={},h.argv=[],h.version="",h.versions={},h.on=l,h.addListener=l,h.once=l,h.off=l,h.removeListener=l,h.removeAllListeners=l,h.emit=l,h.prependListener=l,h.prependOnceListener=l,h.listeners=function(e){return[]},h.binding=function(e){throw new Error("process.binding is not supported")},h.cwd=function(){return"/"},h.chdir=function(e){throw new Error("process.chdir is not supported")},h.umask=function(){return 0}}});
//# sourceMappingURL=raf-53eb55c1af5ff0ae4611.js.map