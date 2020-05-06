var __awaiter=this&&this.__awaiter||function(t,e,r,n){function o(t){return t instanceof r?t:new r((function(e){e(t)}))}return new(r||(r=Promise))((function(r,i){function a(t){try{c(n.next(t))}catch(e){i(e)}}function s(t){try{c(n["throw"](t))}catch(e){i(e)}}function c(t){t.done?r(t.value):o(t.value).then(a,s)}c((n=n.apply(t,e||[])).next())}))};var __generator=this&&this.__generator||function(t,e){var r={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},n,o,i,a;return a={next:s(0),throw:s(1),return:s(2)},typeof Symbol==="function"&&(a[Symbol.iterator]=function(){return this}),a;function s(t){return function(e){return c([t,e])}}function c(a){if(n)throw new TypeError("Generator is already executing.");while(r)try{if(n=1,o&&(i=a[0]&2?o["return"]:a[0]?o["throw"]||((i=o["return"])&&i.call(o),0):o.next)&&!(i=i.call(o,a[1])).done)return i;if(o=0,i)a=[a[0]&2,i.value];switch(a[0]){case 0:case 1:i=a;break;case 4:r.label++;return{value:a[1],done:false};case 5:r.label++;o=a[1];a=[0];continue;case 7:a=r.ops.pop();r.trys.pop();continue;default:if(!(i=r.trys,i=i.length>0&&i[i.length-1])&&(a[0]===6||a[0]===2)){r=0;continue}if(a[0]===3&&(!i||a[1]>i[0]&&a[1]<i[3])){r.label=a[1];break}if(a[0]===6&&r.label<i[1]){r.label=i[1];i=a;break}if(i&&r.label<i[2]){r.label=i[2];r.ops.push(a);break}if(i[2])r.ops.pop();r.trys.pop();continue}a=e.call(t,r)}catch(s){a=[6,s];o=0}finally{n=i=0}if(a[0]&5)throw a[1];return{value:a[0]?a[1]:void 0,done:true}}};System.register(["./p-8ce83298.system.js","./p-755863c2.system.js","./p-2d5d376b.system.js","./p-f1645a56.system.js"],(function(t){"use strict";var e,r,n,o,i,a,s,c,u,l,f,h,p,v,d,y,g,m,b,w,T,O;return{setters:[function(t){e=t.r;r=t.h;n=t.g;o=t.c},function(t){i=t.A},function(t){a=t.m;s=t.a;c=t.s;u=t.b;l=t.c;f=t.d;h=t.h;p=t.e;v=t.f;d=t.g;y=t.l},function(t){g=t.s;m=t.a;b=t.b;w=t.g;T=t.i;O=t.c}],execute:function(){var x="header{background:#5851ff;color:white;height:56px;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-webkit-box-shadow:0 2px 5px 0 rgba(0, 0, 0, 0.26);box-shadow:0 2px 5px 0 rgba(0, 0, 0, 0.26)}h1{font-size:1.4rem;font-weight:500;color:#fff;padding:0 12px}";var P=t("app_root",function(){function t(t){e(this,t)}t.prototype.render=function(){return r("div",null,r("header",null,r("h1",null,"Stencil App Starter")),r("main",null,r("stencil-router",null,r("stencil-route-switch",{scrollTopOffset:0},r("stencil-route",{url:"/",component:"app-home",exact:true}),r("stencil-route",{url:"/profile/:name",component:"app-profile"})))))};return t}());P.style=x;var k="stencil-route.inactive{display:none}";var _=t("stencil_route",function(){function t(t){e(this,t);this.group=null;this.match=null;this.componentProps={};this.exact=false;this.scrollOnNextRender=false;this.previousMatch=null}t.prototype.computeMatch=function(t){var e=this.group!=null||this.el.parentElement!=null&&this.el.parentElement.tagName.toLowerCase()==="stencil-route-switch";if(!t||e){return}this.previousMatch=this.match;return this.match=a(t.pathname,{path:this.url,exact:this.exact,strict:true})};t.prototype.loadCompleted=function(){return __awaiter(this,void 0,void 0,(function(){var t;return __generator(this,(function(e){t={};if(this.history&&this.history.location.hash){t={scrollToId:this.history.location.hash.substr(1)}}else if(this.scrollTopOffset){t={scrollTopOffset:this.scrollTopOffset}}if(typeof this.componentUpdated==="function"){this.componentUpdated(t)}else if(this.match&&!s(this.match,this.previousMatch)&&this.routeViewsUpdated){this.routeViewsUpdated(t)}return[2]}))}))};t.prototype.componentDidUpdate=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){switch(t.label){case 0:return[4,this.loadCompleted()];case 1:t.sent();return[2]}}))}))};t.prototype.componentDidLoad=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){switch(t.label){case 0:return[4,this.loadCompleted()];case 1:t.sent();return[2]}}))}))};t.prototype.render=function(){if(!this.match||!this.history){return null}var t=Object.assign({},this.componentProps,{history:this.history,match:this.match});if(this.routeRender){return this.routeRender(Object.assign({},t,{component:this.component}))}if(this.component){var e=this.component;return r(e,Object.assign({},t))}};Object.defineProperty(t.prototype,"el",{get:function(){return n(this)},enumerable:true,configurable:true});Object.defineProperty(t,"watchers",{get:function(){return{location:["computeMatch"]}},enumerable:true,configurable:true});return t}());i.injectProps(_,["location","history","historyType","routeViewsUpdated"]);_.style=k;var L=function(){return((Math.random()*1e17).toString().match(/.{4}/g)||[]).join("-")};var S=function(t,e,r){return a(t,{path:e,exact:r,strict:true})};var U=function(t){return t.tagName==="STENCIL-ROUTE"};var j=t("stencil_route_switch",function(){function t(t){e(this,t);this.group=L();this.subscribers=[];this.queue=o(this,"queue")}t.prototype.componentWillLoad=function(){if(this.location!=null){this.regenerateSubscribers(this.location)}};t.prototype.regenerateSubscribers=function(t){return __awaiter(this,void 0,void 0,(function(){var e,r;var n=this;return __generator(this,(function(o){if(t==null){return[2]}e=-1;this.subscribers=Array.prototype.slice.call(this.el.children).filter(U).map((function(r,n){var o=S(t.pathname,r.url,r.exact);if(o&&e===-1){e=n}return{el:r,match:o}}));if(e===-1){return[2]}if(this.activeIndex===e){this.subscribers[e].el.match=this.subscribers[e].match;return[2]}this.activeIndex=e;r=this.subscribers[this.activeIndex];if(this.scrollTopOffset){r.el.scrollTopOffset=this.scrollTopOffset}r.el.group=this.group;r.el.match=r.match;r.el.componentUpdated=function(t){n.queue.write((function(){n.subscribers.forEach((function(t,e){t.el.componentUpdated=undefined;if(e===n.activeIndex){return t.el.style.display=""}if(n.scrollTopOffset){t.el.scrollTopOffset=n.scrollTopOffset}t.el.group=n.group;t.el.match=null;t.el.style.display="none"}))}));if(n.routeViewsUpdated){n.routeViewsUpdated(Object.assign({scrollTopOffset:n.scrollTopOffset},t))}};return[2]}))}))};t.prototype.render=function(){return r("slot",null)};Object.defineProperty(t.prototype,"el",{get:function(){return n(this)},enumerable:true,configurable:true});Object.defineProperty(t,"watchers",{get:function(){return{location:["regenerateSubscribers"]}},enumerable:true,configurable:true});return t}());i.injectProps(j,["location","routeViewsUpdated"]);var E=function(t){var e=[];for(var r=1;r<arguments.length;r++){e[r-1]=arguments[r]}if(!t){console.warn.apply(console,e)}};var I=function(){var t;var e=[];var r=function(e){E(t==null,"A history supports only one prompt at a time");t=e;return function(){if(t===e){t=null}}};var n=function(e,r,n,o){if(t!=null){var i=typeof t==="function"?t(e,r):t;if(typeof i==="string"){if(typeof n==="function"){n(i,o)}else{E(false,"A history needs a getUserConfirmation function in order to use a prompt message");o(true)}}else{o(i!==false)}}else{o(true)}};var o=function(t){var r=true;var n=function(){var e=[];for(var n=0;n<arguments.length;n++){e[n]=arguments[n]}if(r){t.apply(void 0,e)}};e.push(n);return function(){r=false;e=e.filter((function(t){return t!==n}))}};var i=function(){var t=[];for(var r=0;r<arguments.length;r++){t[r]=arguments[r]}e.forEach((function(e){return e.apply(void 0,t)}))};return{setPrompt:r,confirmTransitionTo:n,appendListener:o,notifyListeners:i}};var A=function(t,e){if(e===void 0){e="scrollPositions"}var r=new Map;var n=function(e,n){r.set(e,n);if(g(t,"sessionStorage")){var o=[];r.forEach((function(t,e){o.push([e,t])}));t.sessionStorage.setItem("scrollPositions",JSON.stringify(o))}};var o=function(t){return r.get(t)};var i=function(t){return r.has(t)};var a=function(e){n(e,[t.scrollX,t.scrollY])};if(g(t,"sessionStorage")){var s=t.sessionStorage.getItem(e);r=s?new Map(JSON.parse(s)):r}if("scrollRestoration"in t.history){history.scrollRestoration="manual"}return{set:n,get:o,has:i,capture:a}};var R="popstate";var C="hashchange";var H=function(t,e){if(e===void 0){e={}}var r=false;var n=t.history;var o=t.location;var i=t.navigator;var a=m(t);var s=!b(i);var d=A(t);var y=e.forceRefresh!=null?e.forceRefresh:false;var g=e.getUserConfirmation!=null?e.getUserConfirmation:w;var O=e.keyLength!=null?e.keyLength:6;var x=e.basename?c(u(e.basename)):"";var P=function(){try{return t.history.state||{}}catch(e){return{}}};var k=function(t){t=t||{};var e=t.key,r=t.state;var n=o.pathname,i=o.search,a=o.hash;var s=n+i+a;E(!x||h(s,x),"You are attempting to use a basename on a page whose URL path does not begin "+'with the basename. Expected path "'+s+'" to begin with "'+x+'".');if(x){s=p(s,x)}return l(s,r,e||f(O))};var _=I();var L=function(t){d.capture(K.location.key);Object.assign(K,t);K.location.scrollPosition=d.get(K.location.key);K.length=n.length;_.notifyListeners(K.location,K.action)};var S=function(t){if(!T(i,t)){j(k(t.state))}};var U=function(){j(k(P()))};var j=function(t){if(r){r=false;L()}else{var e="POP";_.confirmTransitionTo(t,e,g,(function(r){if(r){L({action:e,location:t})}else{H(t)}}))}};var H=function(t){var e=K.location;var n=M.indexOf(e.key);var o=M.indexOf(t.key);if(n===-1){n=0}if(o===-1){o=0}var i=n-o;if(i){r=true;F(i)}};var V=k(P());var M=[V.key];var q=0;var N=false;var B=function(t){return x+v(t)};var Y=function(t,e){E(!(typeof t==="object"&&t.state!==undefined&&e!==undefined),"You should avoid providing a 2nd state argument to push when the 1st "+"argument is a location-like object that already has state; it is ignored");var r="PUSH";var i=l(t,e,f(O),K.location);_.confirmTransitionTo(i,r,g,(function(t){if(!t){return}var e=B(i);var s=i.key,c=i.state;if(a){n.pushState({key:s,state:c},"",e);if(y){o.href=e}else{var u=M.indexOf(K.location.key);var l=M.slice(0,u===-1?0:u+1);l.push(i.key);M=l;L({action:r,location:i})}}else{E(c===undefined,"Browser history cannot push state in browsers that do not support HTML5 history");o.href=e}}))};var D=function(t,e){E(!(typeof t==="object"&&t.state!==undefined&&e!==undefined),"You should avoid providing a 2nd state argument to replace when the 1st "+"argument is a location-like object that already has state; it is ignored");var r="REPLACE";var i=l(t,e,f(O),K.location);_.confirmTransitionTo(i,r,g,(function(t){if(!t){return}var e=B(i);var s=i.key,c=i.state;if(a){n.replaceState({key:s,state:c},"",e);if(y){o.replace(e)}else{var u=M.indexOf(K.location.key);if(u!==-1){M[u]=i.key}L({action:r,location:i})}}else{E(c===undefined,"Browser history cannot replace state in browsers that do not support HTML5 history");o.replace(e)}}))};var F=function(t){n.go(t)};var J=function(){return F(-1)};var W=function(){return F(1)};var z=function(e){q+=e;if(q===1){t.addEventListener(R,S);if(s){t.addEventListener(C,U)}}else if(q===0){t.removeEventListener(R,S);if(s){t.removeEventListener(C,U)}}};var G=function(t){if(t===void 0){t=""}var e=_.setPrompt(t);if(!N){z(1);N=true}return function(){if(N){N=false;z(-1)}return e()}};var X=function(t){var e=_.appendListener(t);z(1);return function(){z(-1);e()}};var K={length:n.length,action:"POP",location:V,createHref:B,push:Y,replace:D,go:F,goBack:J,goForward:W,block:G,listen:X,win:t};return K};var V="hashchange";var M={hashbang:{encodePath:function(t){return t.charAt(0)==="!"?t:"!/"+d(t)},decodePath:function(t){return t.charAt(0)==="!"?t.substr(1):t}},noslash:{encodePath:d,decodePath:u},slash:{encodePath:u,decodePath:u}};var q=function(t,e){if(e===void 0){e={}}var r=false;var n=null;var o=0;var i=false;var a=t.location;var s=t.history;var d=O(t.navigator);var g=e.keyLength!=null?e.keyLength:6;var m=e.getUserConfirmation,b=m===void 0?w:m,T=e.hashType,x=T===void 0?"slash":T;var P=e.basename?c(u(e.basename)):"";var k=M[x],_=k.encodePath,L=k.decodePath;var S=function(){var t=a.href;var e=t.indexOf("#");return e===-1?"":t.substring(e+1)};var U=function(t){return a.hash=t};var j=function(t){var e=a.href.indexOf("#");a.replace(a.href.slice(0,e>=0?e:0)+"#"+t)};var A=function(){var t=L(S());E(!P||h(t,P),"You are attempting to use a basename on a page whose URL path does not begin "+'with the basename. Expected path "'+t+'" to begin with "'+P+'".');if(P){t=p(t,P)}return l(t,undefined,f(g))};var R=I();var C=function(t){Object.assign(tt,t);tt.length=s.length;R.notifyListeners(tt.location,tt.action)};var H=function(){var t=S();var e=_(t);if(t!==e){j(e)}else{var o=A();var i=tt.location;if(!r&&y(i,o)){return}if(n===v(o)){return}n=null;q(o)}};var q=function(t){if(r){r=false;C()}else{var e="POP";R.confirmTransitionTo(t,e,b,(function(r){if(r){C({action:e,location:t})}else{N(t)}}))}};var N=function(t){var e=tt.location;var n=F.lastIndexOf(v(e));var o=F.lastIndexOf(v(t));if(n===-1){n=0}if(o===-1){o=0}var i=n-o;if(i){r=true;G(i)}};var B=S();var Y=_(B);if(B!==Y){j(Y)}var D=A();var F=[v(D)];var J=function(t){return"#"+_(P+v(t))};var W=function(t,e){E(e===undefined,"Hash history cannot push state; it is ignored");var r="PUSH";var o=l(t,undefined,f(g),tt.location);R.confirmTransitionTo(o,r,b,(function(t){if(!t){return}var e=v(o);var i=_(P+e);var a=S()!==i;if(a){n=e;U(i);var s=F.lastIndexOf(v(tt.location));var c=F.slice(0,s===-1?0:s+1);c.push(e);F=c;C({action:r,location:o})}else{E(false,"Hash history cannot PUSH the same path; a new entry will not be added to the history stack");C()}}))};var z=function(t,e){E(e===undefined,"Hash history cannot replace state; it is ignored");var r="REPLACE";var o=l(t,undefined,f(g),tt.location);R.confirmTransitionTo(o,r,b,(function(t){if(!t){return}var e=v(o);var i=_(P+e);var a=S()!==i;if(a){n=e;j(i)}var s=F.indexOf(v(tt.location));if(s!==-1){F[s]=e}C({action:r,location:o})}))};var G=function(t){E(d,"Hash history go(n) causes a full page reload in this browser");s.go(t)};var X=function(){return G(-1)};var K=function(){return G(1)};var Q=function(t,e){o+=e;if(o===1){t.addEventListener(V,H)}else if(o===0){t.removeEventListener(V,H)}};var Z=function(e){if(e===void 0){e=""}var r=R.setPrompt(e);if(!i){Q(t,1);i=true}return function(){if(i){i=false;Q(t,-1)}return r()}};var $=function(e){var r=R.appendListener(e);Q(t,1);return function(){Q(t,-1);r()}};var tt={length:s.length,action:"POP",location:D,createHref:J,push:W,replace:z,go:G,goBack:X,goForward:K,block:Z,listen:$,win:t};return tt};var N=function(t,e){var r=t.pathname.indexOf(e)==0?"/"+t.pathname.slice(e.length):t.pathname;return Object.assign({},t,{pathname:r})};var B={browser:H,hash:q};var Y=t("stencil_router",function(){function t(t){var r=this;e(this,t);this.root="/";this.historyType="browser";this.titleSuffix="";this.routeViewsUpdated=function(t){if(t===void 0){t={}}if(r.history&&t.scrollToId&&r.historyType==="browser"){var e=r.history.win.document.getElementById(t.scrollToId);if(e){return e.scrollIntoView()}}r.scrollTo(t.scrollTopOffset||r.scrollTopOffset)};this.isServer=o(this,"isServer");this.queue=o(this,"queue")}t.prototype.componentWillLoad=function(){var t=this;this.history=B[this.historyType](this.el.ownerDocument.defaultView);this.history.listen((function(e){e=N(e,t.root);t.location=e}));this.location=N(this.history.location,this.root)};t.prototype.scrollTo=function(t){var e=this.history;if(t==null||this.isServer||!e){return}if(e.action==="POP"&&Array.isArray(e.location.scrollPosition)){return this.queue.write((function(){if(e&&e.location&&Array.isArray(e.location.scrollPosition)){e.win.scrollTo(e.location.scrollPosition[0],e.location.scrollPosition[1])}}))}return this.queue.write((function(){e.win.scrollTo(0,t)}))};t.prototype.render=function(){if(!this.location||!this.history){return}var t={historyType:this.historyType,location:this.location,titleSuffix:this.titleSuffix,root:this.root,history:this.history,routeViewsUpdated:this.routeViewsUpdated};return r(i.Provider,{state:t},r("slot",null))};Object.defineProperty(t.prototype,"el",{get:function(){return n(this)},enumerable:true,configurable:true});return t}())}}}));