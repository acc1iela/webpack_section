!function(e){function n(n){for(var r,i,a=n[0],c=n[1],p=n[2],l=0,s=[];l<a.length;l++)i=a[l],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&s.push(o[i][0]),o[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);for(f&&f(n);s.length;)s.shift()();return u.push.apply(u,p||[]),t()}function t(){for(var e,n=0;n<u.length;n++){for(var t=u[n],r=!0,a=1;a<t.length;a++){var c=t[a];0!==o[c]&&(r=!1)}r&&(u.splice(n--,1),e=i(i.s=t[0]))}return e}var r={},o={3:0},u=[];function i(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.m=e,i.c=r,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)i.d(t,r,function(n){return e[n]}.bind(null,r));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="";var a=window.webpackJsonp=window.webpackJsonp||[],c=a.push.bind(a);a.push=n,a=a.slice();for(var p=0;p<a.length;p++)n(a[p]);var f=c;u.push([81,0,1]),t()}({81:function(e,n,t){"use strict";t.r(n);t(42),t(48),t(79);var r=t(6),o=t.n(r),u=t(14),i=t.n(u),a=t(15);function c(e,n,t,r,o,u,i){try{var a=e[u](i),c=a.value}catch(e){return void t(e)}a.done?n(c):Promise.resolve(c).then(r,o)}function p(e){return function(){var n=this,t=arguments;return new Promise((function(r,o){var u=e.apply(n,t);function i(e){c(u,r,o,i,a,"next",e)}function a(e){c(u,r,o,i,a,"throw",e)}i(void 0)}))}}var f=1+2;o()("body").append(f).append("<p>".concat(Object(a.greet)("App"),"</p>")),i()(o()("h1"),"fadeIn",{duration:2e3,loop:!0});var l=new Promise((function(e){setTimeout((function(){return e("hello!")}),3e3)}));function s(){return(s=p(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l;case 2:e.sent;case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){s.apply(this,arguments)}()}});