(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[32],{155:function(t,e,n){"use strict";n.r(e);var o=n(1),r=n.n(o),i=n(135),s=n(4),a=n(51),c=n.n(a),l=n(0);function u(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function m(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function d(t,e,n){return e&&m(t.prototype,e),n&&m(t,n),t}function p(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&h(t,e)}function f(t){return f=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},f(t)}function h(t,e){return h=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},h(t,e)}function b(t,e){return!e||"object"!==typeof e&&"function"!==typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function v(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=f(t);if(e){var r=f(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return b(this,n)}}function j(t){return function(t){if(Array.isArray(t))return y(t)}(t)||function(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"===typeof t)return y(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return y(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function y(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n];return o}function O(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,n=String(t);if(0===e)return n;var o=n.match(/(.*?)([0-9]+)(.*)/),r=o?o[1]:"",i=o?o[3]:"",s=o?o[2]:n,a=s.length>=e?s:(j(Array(e)).map((function(){return"0"})).join("")+s).slice(-1*e);return"".concat(r).concat(a).concat(i)}var T={daysInHours:!1,zeroPadTime:2};function S(t,e){var n=t.days,o=t.hours,r=t.minutes,i=t.seconds,s=Object.assign(Object.assign({},T),e),a=s.daysInHours,c=s.zeroPadTime,l=s.zeroPadDays,u=void 0===l?c:l,m=Math.min(2,c),d=a?O(o+24*n,c):O(o,m);return{days:a?"":O(n,u),hours:d,minutes:O(r,m),seconds:O(i,m)}}var g=function(t){p(n,t);var e=v(n);function n(){var t;return u(this,n),(t=e.apply(this,arguments)).state={count:t.props.count||3},t.startCountdown=function(){t.interval=window.setInterval((function(){0===t.state.count-1?(t.stopCountdown(),t.props.onComplete&&t.props.onComplete()):t.setState((function(t){return{count:t.count-1}}))}),1e3)},t.stopCountdown=function(){clearInterval(t.interval)},t.addTime=function(e){t.stopCountdown(),t.setState((function(t){return{count:t.count+e}}),t.startCountdown)},t}return d(n,[{key:"componentDidMount",value:function(){this.startCountdown()}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"render",value:function(){return this.props.children?Object(o.cloneElement)(this.props.children,{count:this.state.count}):null}}]),n}(o.Component);g.propTypes={count:l.number,children:l.element,onComplete:l.func};var D=function(t){p(n,t);var e=v(n);function n(t){var r;if(u(this,n),(r=e.call(this,t)).mounted=!1,r.initialTimestamp=r.calcOffsetStartTimestamp(),r.offsetStartTimestamp=r.props.autoStart?0:r.initialTimestamp,r.offsetTime=0,r.legacyMode=!1,r.legacyCountdownRef=Object(o.createRef)(),r.tick=function(){var t=r.calcTimeDelta(),e=t.completed&&!r.props.overtime?void 0:r.props.onTick;r.setTimeDeltaState(t,void 0,e)},r.start=function(){if(!r.isStarted()){var t=r.offsetStartTimestamp;r.offsetStartTimestamp=0,r.offsetTime+=t?r.calcOffsetStartTimestamp()-t:0;var e=r.calcTimeDelta();r.setTimeDeltaState(e,"STARTED",r.props.onStart),r.props.controlled||e.completed&&!r.props.overtime||(r.clearTimer(),r.interval=window.setInterval(r.tick,r.props.intervalDelay))}},r.pause=function(){r.isPaused()||(r.clearTimer(),r.offsetStartTimestamp=r.calcOffsetStartTimestamp(),r.setTimeDeltaState(r.state.timeDelta,"PAUSED",r.props.onPause))},r.stop=function(){r.isStopped()||(r.clearTimer(),r.offsetStartTimestamp=r.calcOffsetStartTimestamp(),r.offsetTime=r.offsetStartTimestamp-r.initialTimestamp,r.setTimeDeltaState(r.calcTimeDelta(),"STOPPED",r.props.onStop))},r.isStarted=function(){return r.isStatus("STARTED")},r.isPaused=function(){return r.isStatus("PAUSED")},r.isStopped=function(){return r.isStatus("STOPPED")},r.isCompleted=function(){return r.isStatus("COMPLETED")},r.handleOnComplete=function(t){r.props.onComplete&&r.props.onComplete(t)},t.date){var i=r.calcTimeDelta();r.state={timeDelta:i,status:i.completed?"COMPLETED":"STOPPED"}}else r.legacyMode=!0;return r}return d(n,[{key:"componentDidMount",value:function(){this.legacyMode||(this.mounted=!0,this.props.onMount&&this.props.onMount(this.calcTimeDelta()),this.props.autoStart&&this.start())}},{key:"componentDidUpdate",value:function(t){this.legacyMode||this.props.date!==t.date&&(this.initialTimestamp=this.calcOffsetStartTimestamp(),this.offsetStartTimestamp=this.initialTimestamp,this.offsetTime=0,this.setTimeDeltaState(this.calcTimeDelta()))}},{key:"componentWillUnmount",value:function(){this.legacyMode||(this.mounted=!1,this.clearTimer())}},{key:"calcTimeDelta",value:function(){var t=this.props,e=t.date,n=t.now,o=t.precision,r=t.controlled,i=t.overtime;return function(t){var e,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=n.now,r=void 0===o?Date.now:o,i=n.precision,s=void 0===i?0:i,a=n.controlled,c=n.offsetTime,l=void 0===c?0:c,u=n.overtime;e="string"===typeof t?new Date(t).getTime():t instanceof Date?t.getTime():t,a||(e+=l);var m=a?e:e-r(),d=Math.min(20,Math.max(0,s)),p=Math.round(1e3*parseFloat(((u?m:Math.max(0,m))/1e3).toFixed(d))),f=Math.abs(p)/1e3;return{total:p,days:Math.floor(f/86400),hours:Math.floor(f/3600%24),minutes:Math.floor(f/60%60),seconds:Math.floor(f%60),milliseconds:Number((f%1*1e3).toFixed()),completed:p<=0}}(e,{now:n,precision:o,controlled:r,offsetTime:this.offsetTime,overtime:i})}},{key:"calcOffsetStartTimestamp",value:function(){return Date.now()}},{key:"addTime",value:function(t){this.legacyCountdownRef.current.addTime(t)}},{key:"clearTimer",value:function(){window.clearInterval(this.interval)}},{key:"isStatus",value:function(t){return this.state.status===t}},{key:"setTimeDeltaState",value:function(t,e,n){var o=this;if(this.mounted){var r;!this.state.timeDelta.completed&&t.completed&&(this.props.overtime||this.clearTimer(),r=this.handleOnComplete);return this.setState((function(n){var r=e||n.status;return t.completed&&!o.props.overtime?r="COMPLETED":e||"COMPLETED"!==r||(r="STOPPED"),{timeDelta:t,status:r}}),(function(){n&&n(o.state.timeDelta),r&&r(o.state.timeDelta)}))}}},{key:"getApi",value:function(){return this.api=this.api||{start:this.start,pause:this.pause,stop:this.stop,isStarted:this.isStarted,isPaused:this.isPaused,isStopped:this.isStopped,isCompleted:this.isCompleted}}},{key:"getRenderProps",value:function(){var t=this.props,e=t.daysInHours,n=t.zeroPadTime,o=t.zeroPadDays,r=this.state.timeDelta;return Object.assign(Object.assign({},r),{api:this.getApi(),props:this.props,formatted:S(r,{daysInHours:e,zeroPadTime:n,zeroPadDays:o})})}},{key:"render",value:function(){if(this.legacyMode){var t=this.props,e=t.count,n=t.children,r=t.onComplete;return Object(o.createElement)(g,{ref:this.legacyCountdownRef,count:e,onComplete:r},n)}var i=this.props,s=i.className,a=i.overtime,c=i.children,l=i.renderer,u=this.getRenderProps();if(l)return l(u);if(c&&this.state.timeDelta.completed&&!a)return Object(o.cloneElement)(c,{countdown:u});var m=u.formatted,d=m.days,p=m.hours,f=m.minutes,h=m.seconds;return Object(o.createElement)("span",{className:s},u.total<0?"-":"",d,d?":":"",p,":",f,":",h)}}]),n}(o.Component);D.defaultProps=Object.assign(Object.assign({},T),{controlled:!1,intervalDelay:1e3,precision:0,autoStart:!0}),D.propTypes={date:Object(l.oneOfType)([Object(l.instanceOf)(Date),l.string,l.number]),daysInHours:l.bool,zeroPadTime:l.number,zeroPadDays:l.number,controlled:l.bool,intervalDelay:l.number,precision:l.number,autoStart:l.bool,overtime:l.bool,className:l.string,children:l.element,renderer:l.func,now:l.func,onMount:l.func,onStart:l.func,onPause:l.func,onStop:l.func,onTick:l.func,onComplete:l.func};var x=D,w=n.p+"static/media/animat-rocket-color.a939b8a8.gif",P=n(2);e.default=function(){return Object(P.jsx)(r.a.Fragment,{children:Object(P.jsx)("div",{children:Object(P.jsx)("div",{className:"main-content",children:Object(P.jsxs)("div",{className:"page-content",children:[Object(P.jsx)(c.a,{children:Object(P.jsx)("title",{children:"Coming Soon | JobFind"})}),Object(P.jsx)("section",{className:"bg-coming-soon bg-auth",children:Object(P.jsx)(s.h,{children:Object(P.jsx)(s.A,{className:"justify-content-center",children:Object(P.jsx)(s.f,{lg:6,children:Object(P.jsxs)("div",{className:"text-center",children:[Object(P.jsx)("div",{className:"mb-4 pb-3",children:Object(P.jsx)("img",{src:w,alt:"",height:"150",className:"mg-fluid"})}),Object(P.jsx)("h1",{children:"We're Launching Soon..!!"}),Object(P.jsx)("p",{className:"text-muted mb-4 pb-3",children:"Start working with JobFind that can provide everything you need to generate awareness, drive traffic, connect."}),Object(P.jsx)("div",{id:"countdown",className:"d-flex",children:Object(P.jsx)(x,{date:"2022/12/31",renderer:function(t){var e=t.days,n=t.hours,o=t.minutes,r=t.seconds;return t.completed?Object(P.jsx)("span",{children:"You are good to go!"}):Object(P.jsxs)(P.Fragment,{children:[Object(P.jsxs)("div",{className:"countdownlist-item",children:[Object(P.jsx)("div",{className:"count-title",children:"Days"}),Object(P.jsx)("div",{className:"count-num",children:e})]}),Object(P.jsxs)("div",{className:"countdownlist-item",children:[Object(P.jsx)("div",{className:"count-title",children:"Hours"}),Object(P.jsx)("div",{className:"count-num",children:n})]}),Object(P.jsxs)("div",{className:"countdownlist-item",children:[Object(P.jsx)("div",{className:"count-title",children:"Minutes"}),Object(P.jsx)("div",{className:"count-num",children:o})]}),Object(P.jsxs)("div",{className:"countdownlist-item",children:[Object(P.jsx)("div",{className:"count-title",children:"Seconds"}),Object(P.jsx)("div",{className:"count-num",children:r})]})]})}})}),Object(P.jsx)(i.a,{action:"#",className:"coming-soon-subacribe mt-4",children:Object(P.jsxs)("div",{className:"input-group mb-3",children:[Object(P.jsx)(s.o,{type:"text",className:"form-control text-dark",placeholder:"Enter your email"}),Object(P.jsx)("button",{className:"btn btn-primary",type:"button",children:"Subscribe"})]})})]})})})})})]})})})})}}}]);
//# sourceMappingURL=32.17fa2efd.chunk.js.map