(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5],{7050:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/sharing",function(){return n(8338)}])},3085:function(e,t,n){"use strict";var r=n(8520),o=n.n(r),a=n(9669),c=n.n(a);function i(e,t,n,r,o,a,c){try{var i=e[a](c),s=i.value}catch(u){return void n(u)}i.done?t(s):Promise.resolve(s).then(r,o)}function s(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var a=e.apply(t,n);function c(e){i(a,r,o,c,s,"next",e)}function s(e){i(a,r,o,c,s,"throw",e)}c(void 0)}))}}t.Z=function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e);var n=this;this.path=t,this.getData=s(o().mark((function e(){var t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c().get("".concat("http://13.229.248.16:3000","/").concat(n.path));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})).bind(this)).bind(this),this.postData=s(o().mark((function e(t){var r,a,i;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=JSON.parse(localStorage.getItem("user")),a={},r&&(a={token:r.token}),e.next=5,c().post("".concat("http://13.229.248.16:3000","/").concat(n.path),t,{headers:a});case 5:return i=e.sent,e.abrupt("return",i.data);case 7:case"end":return e.stop()}}),e)})).bind(this)).bind(this)}},4189:function(e,t,n){"use strict";var r=n(3085);function o(e){return(o=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function a(e,t){return!t||"object"!==i(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var i=function(e){return e&&"undefined"!==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e},s=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),a(this,o(t).call(this,"video"))}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}(t,e),t}(r.Z);t.Z=new s},7960:function(e,t,n){"use strict";n.d(t,{X:function(){return g}});var r=n(5893),o=n(7294),a=n(8520),c=n.n(a),i=n(3085);function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function u(e,t){return!t||"object"!==f(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var f=function(e){return e&&"undefined"!==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e},p=new(function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),u(this,s(t).call(this,"user"))}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)}(t,e),t}(i.Z)),d=n(1163);function h(e,t,n,r,o,a,c){try{var i=e[a](c),s=i.value}catch(u){return void n(u)}i.done?t(s):Promise.resolve(s).then(r,o)}var b=function(){var e=(0,d.useRouter)(),t=(0,o.useState)(""),n=t[0],a=t[1],i=(0,o.useState)(""),s=i[0],u=i[1],l=(0,o.useState)(!1),f=l[0],b=l[1],v=(0,o.useState)(""),m=v[0],w=v[1];(0,o.useEffect)((function(){var e=JSON.parse(localStorage.getItem("user"));e&&(b(!0),w(e.username))}),[]);var x,y=(x=c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.postData({username:n,password:s});case 3:1==(t=e.sent).status?(localStorage.setItem("user",JSON.stringify({username:n,token:t.token})),b(!0),w(n)):alert("Password is incorrect."),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),alert("Password is incorrect.");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})),function(){var e=this,t=arguments;return new Promise((function(n,r){var o=x.apply(e,t);function a(e){h(o,n,r,a,c,"next",e)}function c(e){h(o,n,r,a,c,"throw",e)}a(void 0)}))});return(0,r.jsx)(r.Fragment,{children:f?(0,r.jsxs)("div",{id:"welcome",children:[(0,r.jsxs)("span",{children:["Welcome ",(0,r.jsx)("strong",{children:m})]}),(0,r.jsx)("button",{id:"sharingBtn",onClick:function(){return e.push("/sharing")},className:"bg-black p-2 text-white mx-5",children:"Share a movie"}),(0,r.jsx)("button",{id:"logoutBtn",onClick:function(){localStorage.removeItem("user"),b(!1)},className:"bg-black p-2 text-white",children:"Logout"})]}):(0,r.jsxs)("div",{id:"login-form",children:[(0,r.jsx)("input",{className:"p-2 border border-black mr-4",type:"text",placeholder:"username",id:"username",value:n,onChange:function(e){return a(e.target.value)}}),(0,r.jsx)("input",{className:"p-2 border border-black mr-4",type:"password",placeholder:"Password",id:"password",value:s,onChange:function(e){return u(e.target.value)}}),(0,r.jsx)("button",{id:"loginBtn",onClick:y,className:"bg-black p-2 text-white",children:"Login/Register"})]})})},v=n(1664),m=function(){return(0,r.jsx)("header",{className:"p-5",children:(0,r.jsxs)("div",{className:"grid grid-cols-2",children:[(0,r.jsx)("div",{className:"branding",children:(0,r.jsx)("h2",{className:"font-bold uppercase text-2xl",children:(0,r.jsx)(v.default,{href:"/",children:"Funny Movie"})})}),(0,r.jsx)("div",{className:"justify-self-end",children:(0,r.jsx)(b,{})})]})})};function w(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function x(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){w(e,t,n[t])}))}return e}var y=function(e){var t=e.children;return(0,r.jsxs)("div",{className:"container mx-auto",children:[(0,r.jsx)(m,{}),(0,r.jsx)("main",{role:"main",children:t})]})},g=function(e){return function(t){return(0,r.jsx)(y,{children:(0,r.jsx)(e,x({},t))})}}},8338:function(e,t,n){"use strict";n.r(t);var r=n(8520),o=n.n(r),a=n(5893),c=n(7294),i=n(4189),s=n(7960),u=n(1163);function l(e,t,n,r,o,a,c){try{var i=e[a](c),s=i.value}catch(u){return void n(u)}i.done?t(s):Promise.resolve(s).then(r,o)}t.default=(0,s.X)((function(){var e=(0,u.useRouter)(),t=(0,c.useState)(""),n=t[0],r=t[1],s=(0,c.useState)(!1),f=s[0],p=s[1];(0,c.useEffect)((function(){localStorage.getItem("user")||e.push("/")}),[]);var d,h=(d=o().mark((function t(){return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return p(!0),t.prev=1,t.next=4,i.Z.postData({url:n});case 4:e.push("/"),t.next=11;break;case 7:t.prev=7,t.t0=t.catch(1),p(!1),alert("Please provide correct youtube URL.");case 11:case"end":return t.stop()}}),t,null,[[1,7]])})),function(){var e=this,t=arguments;return new Promise((function(n,r){var o=d.apply(e,t);function a(e){l(o,n,r,a,c,"next",e)}function c(e){l(o,n,r,a,c,"throw",e)}a(void 0)}))});return(0,a.jsxs)("div",{id:"sharing-form",className:"sm:max-w-md mx-auto border border-black p-7 mt-10",children:[(0,a.jsx)("h2",{className:"font-bold mb-9",children:"Share a Youtube movie"}),(0,a.jsxs)("div",{className:"mb-6",children:["Youtube URL:"," ",(0,a.jsx)("input",{type:"text",id:"url",value:n,placeholder:"",onChange:function(e){return r(e.target.value)},className:"p-2 border border-black mr-4"})]}),(0,a.jsx)("button",{disabled:f,id:"btnSubmit",onClick:h,className:"bg-black p-2 text-white",children:f?"Loading ":"Share"})]})}))}},function(e){e.O(0,[630,774,888,179],(function(){return t=7050,e(e.s=t);var t}));var t=e.O();_N_E=t}]);