(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const c of a)if(c.type==="childList")for(const d of c.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function t(a){const c={};return a.integrity&&(c.integrity=a.integrity),a.referrerPolicy&&(c.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?c.credentials="include":a.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(a){if(a.ep)return;a.ep=!0;const c=t(a);fetch(a.href,c)}})();function vy(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var $h={exports:{}},ga={},Hh={exports:{}},Ee={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Om;function s0(){if(Om)return Ee;Om=1;var r=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),c=Symbol.for("react.provider"),d=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),y=Symbol.for("react.suspense"),_=Symbol.for("react.memo"),I=Symbol.for("react.lazy"),P=Symbol.iterator;function b(D){return D===null||typeof D!="object"?null:(D=P&&D[P]||D["@@iterator"],typeof D=="function"?D:null)}var $={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},z=Object.assign,Z={};function X(D,j,ae){this.props=D,this.context=j,this.refs=Z,this.updater=ae||$}X.prototype.isReactComponent={},X.prototype.setState=function(D,j){if(typeof D!="object"&&typeof D!="function"&&D!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,D,j,"setState")},X.prototype.forceUpdate=function(D){this.updater.enqueueForceUpdate(this,D,"forceUpdate")};function Te(){}Te.prototype=X.prototype;function pe(D,j,ae){this.props=D,this.context=j,this.refs=Z,this.updater=ae||$}var me=pe.prototype=new Te;me.constructor=pe,z(me,X.prototype),me.isPureReactComponent=!0;var _e=Array.isArray,Qe=Object.prototype.hasOwnProperty,Ae={current:null},N={key:!0,ref:!0,__self:!0,__source:!0};function T(D,j,ae){var ye,we={},ke=null,De=null;if(j!=null)for(ye in j.ref!==void 0&&(De=j.ref),j.key!==void 0&&(ke=""+j.key),j)Qe.call(j,ye)&&!N.hasOwnProperty(ye)&&(we[ye]=j[ye]);var Oe=arguments.length-2;if(Oe===1)we.children=ae;else if(1<Oe){for(var Me=Array(Oe),ht=0;ht<Oe;ht++)Me[ht]=arguments[ht+2];we.children=Me}if(D&&D.defaultProps)for(ye in Oe=D.defaultProps,Oe)we[ye]===void 0&&(we[ye]=Oe[ye]);return{$$typeof:r,type:D,key:ke,ref:De,props:we,_owner:Ae.current}}function A(D,j){return{$$typeof:r,type:D.type,key:j,ref:D.ref,props:D.props,_owner:D._owner}}function C(D){return typeof D=="object"&&D!==null&&D.$$typeof===r}function x(D){var j={"=":"=0",":":"=2"};return"$"+D.replace(/[=:]/g,function(ae){return j[ae]})}var O=/\/+/g;function S(D,j){return typeof D=="object"&&D!==null&&D.key!=null?x(""+D.key):j.toString(36)}function Ye(D,j,ae,ye,we){var ke=typeof D;(ke==="undefined"||ke==="boolean")&&(D=null);var De=!1;if(D===null)De=!0;else switch(ke){case"string":case"number":De=!0;break;case"object":switch(D.$$typeof){case r:case e:De=!0}}if(De)return De=D,we=we(De),D=ye===""?"."+S(De,0):ye,_e(we)?(ae="",D!=null&&(ae=D.replace(O,"$&/")+"/"),Ye(we,j,ae,"",function(ht){return ht})):we!=null&&(C(we)&&(we=A(we,ae+(!we.key||De&&De.key===we.key?"":(""+we.key).replace(O,"$&/")+"/")+D)),j.push(we)),1;if(De=0,ye=ye===""?".":ye+":",_e(D))for(var Oe=0;Oe<D.length;Oe++){ke=D[Oe];var Me=ye+S(ke,Oe);De+=Ye(ke,j,ae,Me,we)}else if(Me=b(D),typeof Me=="function")for(D=Me.call(D),Oe=0;!(ke=D.next()).done;)ke=ke.value,Me=ye+S(ke,Oe++),De+=Ye(ke,j,ae,Me,we);else if(ke==="object")throw j=String(D),Error("Objects are not valid as a React child (found: "+(j==="[object Object]"?"object with keys {"+Object.keys(D).join(", ")+"}":j)+"). If you meant to render a collection of children, use an array instead.");return De}function kt(D,j,ae){if(D==null)return D;var ye=[],we=0;return Ye(D,ye,"","",function(ke){return j.call(ae,ke,we++)}),ye}function Ct(D){if(D._status===-1){var j=D._result;j=j(),j.then(function(ae){(D._status===0||D._status===-1)&&(D._status=1,D._result=ae)},function(ae){(D._status===0||D._status===-1)&&(D._status=2,D._result=ae)}),D._status===-1&&(D._status=0,D._result=j)}if(D._status===1)return D._result.default;throw D._result}var be={current:null},Y={transition:null},le={ReactCurrentDispatcher:be,ReactCurrentBatchConfig:Y,ReactCurrentOwner:Ae};function te(){throw Error("act(...) is not supported in production builds of React.")}return Ee.Children={map:kt,forEach:function(D,j,ae){kt(D,function(){j.apply(this,arguments)},ae)},count:function(D){var j=0;return kt(D,function(){j++}),j},toArray:function(D){return kt(D,function(j){return j})||[]},only:function(D){if(!C(D))throw Error("React.Children.only expected to receive a single React element child.");return D}},Ee.Component=X,Ee.Fragment=t,Ee.Profiler=a,Ee.PureComponent=pe,Ee.StrictMode=s,Ee.Suspense=y,Ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=le,Ee.act=te,Ee.cloneElement=function(D,j,ae){if(D==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+D+".");var ye=z({},D.props),we=D.key,ke=D.ref,De=D._owner;if(j!=null){if(j.ref!==void 0&&(ke=j.ref,De=Ae.current),j.key!==void 0&&(we=""+j.key),D.type&&D.type.defaultProps)var Oe=D.type.defaultProps;for(Me in j)Qe.call(j,Me)&&!N.hasOwnProperty(Me)&&(ye[Me]=j[Me]===void 0&&Oe!==void 0?Oe[Me]:j[Me])}var Me=arguments.length-2;if(Me===1)ye.children=ae;else if(1<Me){Oe=Array(Me);for(var ht=0;ht<Me;ht++)Oe[ht]=arguments[ht+2];ye.children=Oe}return{$$typeof:r,type:D.type,key:we,ref:ke,props:ye,_owner:De}},Ee.createContext=function(D){return D={$$typeof:d,_currentValue:D,_currentValue2:D,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},D.Provider={$$typeof:c,_context:D},D.Consumer=D},Ee.createElement=T,Ee.createFactory=function(D){var j=T.bind(null,D);return j.type=D,j},Ee.createRef=function(){return{current:null}},Ee.forwardRef=function(D){return{$$typeof:m,render:D}},Ee.isValidElement=C,Ee.lazy=function(D){return{$$typeof:I,_payload:{_status:-1,_result:D},_init:Ct}},Ee.memo=function(D,j){return{$$typeof:_,type:D,compare:j===void 0?null:j}},Ee.startTransition=function(D){var j=Y.transition;Y.transition={};try{D()}finally{Y.transition=j}},Ee.unstable_act=te,Ee.useCallback=function(D,j){return be.current.useCallback(D,j)},Ee.useContext=function(D){return be.current.useContext(D)},Ee.useDebugValue=function(){},Ee.useDeferredValue=function(D){return be.current.useDeferredValue(D)},Ee.useEffect=function(D,j){return be.current.useEffect(D,j)},Ee.useId=function(){return be.current.useId()},Ee.useImperativeHandle=function(D,j,ae){return be.current.useImperativeHandle(D,j,ae)},Ee.useInsertionEffect=function(D,j){return be.current.useInsertionEffect(D,j)},Ee.useLayoutEffect=function(D,j){return be.current.useLayoutEffect(D,j)},Ee.useMemo=function(D,j){return be.current.useMemo(D,j)},Ee.useReducer=function(D,j,ae){return be.current.useReducer(D,j,ae)},Ee.useRef=function(D){return be.current.useRef(D)},Ee.useState=function(D){return be.current.useState(D)},Ee.useSyncExternalStore=function(D,j,ae){return be.current.useSyncExternalStore(D,j,ae)},Ee.useTransition=function(){return be.current.useTransition()},Ee.version="18.3.1",Ee}var Vm;function bd(){return Vm||(Vm=1,Hh.exports=s0()),Hh.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bm;function o0(){if(bm)return ga;bm=1;var r=bd(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,a=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function d(m,y,_){var I,P={},b=null,$=null;_!==void 0&&(b=""+_),y.key!==void 0&&(b=""+y.key),y.ref!==void 0&&($=y.ref);for(I in y)s.call(y,I)&&!c.hasOwnProperty(I)&&(P[I]=y[I]);if(m&&m.defaultProps)for(I in y=m.defaultProps,y)P[I]===void 0&&(P[I]=y[I]);return{$$typeof:e,type:m,key:b,ref:$,props:P,_owner:a.current}}return ga.Fragment=t,ga.jsx=d,ga.jsxs=d,ga}var Lm;function a0(){return Lm||(Lm=1,$h.exports=o0()),$h.exports}var Q=a0(),Sr=bd();const va=vy(Sr);var hu={},Wh={exports:{}},Qt={},qh={exports:{}},Kh={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mm;function l0(){return Mm||(Mm=1,(function(r){function e(Y,le){var te=Y.length;Y.push(le);e:for(;0<te;){var D=te-1>>>1,j=Y[D];if(0<a(j,le))Y[D]=le,Y[te]=j,te=D;else break e}}function t(Y){return Y.length===0?null:Y[0]}function s(Y){if(Y.length===0)return null;var le=Y[0],te=Y.pop();if(te!==le){Y[0]=te;e:for(var D=0,j=Y.length,ae=j>>>1;D<ae;){var ye=2*(D+1)-1,we=Y[ye],ke=ye+1,De=Y[ke];if(0>a(we,te))ke<j&&0>a(De,we)?(Y[D]=De,Y[ke]=te,D=ke):(Y[D]=we,Y[ye]=te,D=ye);else if(ke<j&&0>a(De,te))Y[D]=De,Y[ke]=te,D=ke;else break e}}return le}function a(Y,le){var te=Y.sortIndex-le.sortIndex;return te!==0?te:Y.id-le.id}if(typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var d=Date,m=d.now();r.unstable_now=function(){return d.now()-m}}var y=[],_=[],I=1,P=null,b=3,$=!1,z=!1,Z=!1,X=typeof setTimeout=="function"?setTimeout:null,Te=typeof clearTimeout=="function"?clearTimeout:null,pe=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function me(Y){for(var le=t(_);le!==null;){if(le.callback===null)s(_);else if(le.startTime<=Y)s(_),le.sortIndex=le.expirationTime,e(y,le);else break;le=t(_)}}function _e(Y){if(Z=!1,me(Y),!z)if(t(y)!==null)z=!0,Ct(Qe);else{var le=t(_);le!==null&&be(_e,le.startTime-Y)}}function Qe(Y,le){z=!1,Z&&(Z=!1,Te(T),T=-1),$=!0;var te=b;try{for(me(le),P=t(y);P!==null&&(!(P.expirationTime>le)||Y&&!x());){var D=P.callback;if(typeof D=="function"){P.callback=null,b=P.priorityLevel;var j=D(P.expirationTime<=le);le=r.unstable_now(),typeof j=="function"?P.callback=j:P===t(y)&&s(y),me(le)}else s(y);P=t(y)}if(P!==null)var ae=!0;else{var ye=t(_);ye!==null&&be(_e,ye.startTime-le),ae=!1}return ae}finally{P=null,b=te,$=!1}}var Ae=!1,N=null,T=-1,A=5,C=-1;function x(){return!(r.unstable_now()-C<A)}function O(){if(N!==null){var Y=r.unstable_now();C=Y;var le=!0;try{le=N(!0,Y)}finally{le?S():(Ae=!1,N=null)}}else Ae=!1}var S;if(typeof pe=="function")S=function(){pe(O)};else if(typeof MessageChannel<"u"){var Ye=new MessageChannel,kt=Ye.port2;Ye.port1.onmessage=O,S=function(){kt.postMessage(null)}}else S=function(){X(O,0)};function Ct(Y){N=Y,Ae||(Ae=!0,S())}function be(Y,le){T=X(function(){Y(r.unstable_now())},le)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(Y){Y.callback=null},r.unstable_continueExecution=function(){z||$||(z=!0,Ct(Qe))},r.unstable_forceFrameRate=function(Y){0>Y||125<Y?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<Y?Math.floor(1e3/Y):5},r.unstable_getCurrentPriorityLevel=function(){return b},r.unstable_getFirstCallbackNode=function(){return t(y)},r.unstable_next=function(Y){switch(b){case 1:case 2:case 3:var le=3;break;default:le=b}var te=b;b=le;try{return Y()}finally{b=te}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(Y,le){switch(Y){case 1:case 2:case 3:case 4:case 5:break;default:Y=3}var te=b;b=Y;try{return le()}finally{b=te}},r.unstable_scheduleCallback=function(Y,le,te){var D=r.unstable_now();switch(typeof te=="object"&&te!==null?(te=te.delay,te=typeof te=="number"&&0<te?D+te:D):te=D,Y){case 1:var j=-1;break;case 2:j=250;break;case 5:j=1073741823;break;case 4:j=1e4;break;default:j=5e3}return j=te+j,Y={id:I++,callback:le,priorityLevel:Y,startTime:te,expirationTime:j,sortIndex:-1},te>D?(Y.sortIndex=te,e(_,Y),t(y)===null&&Y===t(_)&&(Z?(Te(T),T=-1):Z=!0,be(_e,te-D))):(Y.sortIndex=j,e(y,Y),z||$||(z=!0,Ct(Qe))),Y},r.unstable_shouldYield=x,r.unstable_wrapCallback=function(Y){var le=b;return function(){var te=b;b=le;try{return Y.apply(this,arguments)}finally{b=te}}}})(Kh)),Kh}var Fm;function u0(){return Fm||(Fm=1,qh.exports=l0()),qh.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Um;function c0(){if(Um)return Qt;Um=1;var r=bd(),e=u0();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,o=1;o<arguments.length;o++)i+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,a={};function c(n,i){d(n,i),d(n+"Capture",i)}function d(n,i){for(a[n]=i,n=0;n<i.length;n++)s.add(i[n])}var m=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),y=Object.prototype.hasOwnProperty,_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,I={},P={};function b(n){return y.call(P,n)?!0:y.call(I,n)?!1:_.test(n)?P[n]=!0:(I[n]=!0,!1)}function $(n,i,o,u){if(o!==null&&o.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return u?!1:o!==null?!o.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function z(n,i,o,u){if(i===null||typeof i>"u"||$(n,i,o,u))return!0;if(u)return!1;if(o!==null)switch(o.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function Z(n,i,o,u,h,p,v){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=u,this.attributeNamespace=h,this.mustUseProperty=o,this.propertyName=n,this.type=i,this.sanitizeURL=p,this.removeEmptyString=v}var X={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){X[n]=new Z(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];X[i]=new Z(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){X[n]=new Z(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){X[n]=new Z(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){X[n]=new Z(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){X[n]=new Z(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){X[n]=new Z(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){X[n]=new Z(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){X[n]=new Z(n,5,!1,n.toLowerCase(),null,!1,!1)});var Te=/[\-:]([a-z])/g;function pe(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(Te,pe);X[i]=new Z(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(Te,pe);X[i]=new Z(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(Te,pe);X[i]=new Z(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){X[n]=new Z(n,1,!1,n.toLowerCase(),null,!1,!1)}),X.xlinkHref=new Z("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){X[n]=new Z(n,1,!1,n.toLowerCase(),null,!0,!0)});function me(n,i,o,u){var h=X.hasOwnProperty(i)?X[i]:null;(h!==null?h.type!==0:u||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(z(i,o,h,u)&&(o=null),u||h===null?b(i)&&(o===null?n.removeAttribute(i):n.setAttribute(i,""+o)):h.mustUseProperty?n[h.propertyName]=o===null?h.type===3?!1:"":o:(i=h.attributeName,u=h.attributeNamespace,o===null?n.removeAttribute(i):(h=h.type,o=h===3||h===4&&o===!0?"":""+o,u?n.setAttributeNS(u,i,o):n.setAttribute(i,o))))}var _e=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Qe=Symbol.for("react.element"),Ae=Symbol.for("react.portal"),N=Symbol.for("react.fragment"),T=Symbol.for("react.strict_mode"),A=Symbol.for("react.profiler"),C=Symbol.for("react.provider"),x=Symbol.for("react.context"),O=Symbol.for("react.forward_ref"),S=Symbol.for("react.suspense"),Ye=Symbol.for("react.suspense_list"),kt=Symbol.for("react.memo"),Ct=Symbol.for("react.lazy"),be=Symbol.for("react.offscreen"),Y=Symbol.iterator;function le(n){return n===null||typeof n!="object"?null:(n=Y&&n[Y]||n["@@iterator"],typeof n=="function"?n:null)}var te=Object.assign,D;function j(n){if(D===void 0)try{throw Error()}catch(o){var i=o.stack.trim().match(/\n( *(at )?)/);D=i&&i[1]||""}return`
`+D+n}var ae=!1;function ye(n,i){if(!n||ae)return"";ae=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(F){var u=F}Reflect.construct(n,[],i)}else{try{i.call()}catch(F){u=F}n.call(i.prototype)}else{try{throw Error()}catch(F){u=F}n()}}catch(F){if(F&&u&&typeof F.stack=="string"){for(var h=F.stack.split(`
`),p=u.stack.split(`
`),v=h.length-1,E=p.length-1;1<=v&&0<=E&&h[v]!==p[E];)E--;for(;1<=v&&0<=E;v--,E--)if(h[v]!==p[E]){if(v!==1||E!==1)do if(v--,E--,0>E||h[v]!==p[E]){var k=`
`+h[v].replace(" at new "," at ");return n.displayName&&k.includes("<anonymous>")&&(k=k.replace("<anonymous>",n.displayName)),k}while(1<=v&&0<=E);break}}}finally{ae=!1,Error.prepareStackTrace=o}return(n=n?n.displayName||n.name:"")?j(n):""}function we(n){switch(n.tag){case 5:return j(n.type);case 16:return j("Lazy");case 13:return j("Suspense");case 19:return j("SuspenseList");case 0:case 2:case 15:return n=ye(n.type,!1),n;case 11:return n=ye(n.type.render,!1),n;case 1:return n=ye(n.type,!0),n;default:return""}}function ke(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case N:return"Fragment";case Ae:return"Portal";case A:return"Profiler";case T:return"StrictMode";case S:return"Suspense";case Ye:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case x:return(n.displayName||"Context")+".Consumer";case C:return(n._context.displayName||"Context")+".Provider";case O:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case kt:return i=n.displayName||null,i!==null?i:ke(n.type)||"Memo";case Ct:i=n._payload,n=n._init;try{return ke(n(i))}catch{}}return null}function De(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ke(i);case 8:return i===T?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function Oe(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Me(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function ht(n){var i=Me(n)?"checked":"value",o=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),u=""+n[i];if(!n.hasOwnProperty(i)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var h=o.get,p=o.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return h.call(this)},set:function(v){u=""+v,p.call(this,v)}}),Object.defineProperty(n,i,{enumerable:o.enumerable}),{getValue:function(){return u},setValue:function(v){u=""+v},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function sr(n){n._valueTracker||(n._valueTracker=ht(n))}function us(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var o=i.getValue(),u="";return n&&(u=Me(n)?n.checked?"true":"false":n.value),n=u,n!==o?(i.setValue(n),!0):!1}function Vr(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function vi(n,i){var o=i.checked;return te({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??n._wrapperState.initialChecked})}function cs(n,i){var o=i.defaultValue==null?"":i.defaultValue,u=i.checked!=null?i.checked:i.defaultChecked;o=Oe(i.value!=null?i.value:o),n._wrapperState={initialChecked:u,initialValue:o,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function To(n,i){i=i.checked,i!=null&&me(n,"checked",i,!1)}function Io(n,i){To(n,i);var o=Oe(i.value),u=i.type;if(o!=null)u==="number"?(o===0&&n.value===""||n.value!=o)&&(n.value=""+o):n.value!==""+o&&(n.value=""+o);else if(u==="submit"||u==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?hs(n,i.type,o):i.hasOwnProperty("defaultValue")&&hs(n,i.type,Oe(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function Xa(n,i,o){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var u=i.type;if(!(u!=="submit"&&u!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,o||i===n.value||(n.value=i),n.defaultValue=i}o=n.name,o!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,o!==""&&(n.name=o)}function hs(n,i,o){(i!=="number"||Vr(n.ownerDocument)!==n)&&(o==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+o&&(n.defaultValue=""+o))}var or=Array.isArray;function ar(n,i,o,u){if(n=n.options,i){i={};for(var h=0;h<o.length;h++)i["$"+o[h]]=!0;for(o=0;o<n.length;o++)h=i.hasOwnProperty("$"+n[o].value),n[o].selected!==h&&(n[o].selected=h),h&&u&&(n[o].defaultSelected=!0)}else{for(o=""+Oe(o),i=null,h=0;h<n.length;h++){if(n[h].value===o){n[h].selected=!0,u&&(n[h].defaultSelected=!0);return}i!==null||n[h].disabled||(i=n[h])}i!==null&&(i.selected=!0)}}function So(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return te({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function ds(n,i){var o=i.value;if(o==null){if(o=i.children,i=i.defaultValue,o!=null){if(i!=null)throw Error(t(92));if(or(o)){if(1<o.length)throw Error(t(93));o=o[0]}i=o}i==null&&(i=""),o=i}n._wrapperState={initialValue:Oe(o)}}function fs(n,i){var o=Oe(i.value),u=Oe(i.defaultValue);o!=null&&(o=""+o,o!==n.value&&(n.value=o),i.defaultValue==null&&n.defaultValue!==o&&(n.defaultValue=o)),u!=null&&(n.defaultValue=""+u)}function Ao(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function ot(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function at(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?ot(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var lr,ko=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,o,u,h){MSApp.execUnsafeLocalFunction(function(){return n(i,o,u,h)})}:n})(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(lr=lr||document.createElement("div"),lr.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=lr.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function br(n,i){if(i){var o=n.firstChild;if(o&&o===n.lastChild&&o.nodeType===3){o.nodeValue=i;return}}n.textContent=i}var _i={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},wi=["Webkit","ms","Moz","O"];Object.keys(_i).forEach(function(n){wi.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),_i[i]=_i[n]})});function Co(n,i,o){return i==null||typeof i=="boolean"||i===""?"":o||typeof i!="number"||i===0||_i.hasOwnProperty(n)&&_i[n]?(""+i).trim():i+"px"}function Ro(n,i){n=n.style;for(var o in i)if(i.hasOwnProperty(o)){var u=o.indexOf("--")===0,h=Co(o,i[o],u);o==="float"&&(o="cssFloat"),u?n.setProperty(o,h):n[o]=h}}var Po=te({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function No(n,i){if(i){if(Po[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function xo(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ei=null;function ps(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var ms=null,ln=null,Bn=null;function gs(n){if(n=ta(n)){if(typeof ms!="function")throw Error(t(280));var i=n.stateNode;i&&(i=kl(i),ms(n.stateNode,n.type,i))}}function zn(n){ln?Bn?Bn.push(n):Bn=[n]:ln=n}function Do(){if(ln){var n=ln,i=Bn;if(Bn=ln=null,gs(n),i)for(n=0;n<i.length;n++)gs(i[n])}}function Ti(n,i){return n(i)}function Oo(){}var ur=!1;function Vo(n,i,o){if(ur)return n(i,o);ur=!0;try{return Ti(n,i,o)}finally{ur=!1,(ln!==null||Bn!==null)&&(Oo(),Do())}}function Ze(n,i){var o=n.stateNode;if(o===null)return null;var u=kl(o);if(u===null)return null;o=u[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(n=n.type,u=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!u;break e;default:n=!1}if(n)return null;if(o&&typeof o!="function")throw Error(t(231,i,typeof o));return o}var ys=!1;if(m)try{var _n={};Object.defineProperty(_n,"passive",{get:function(){ys=!0}}),window.addEventListener("test",_n,_n),window.removeEventListener("test",_n,_n)}catch{ys=!1}function Ii(n,i,o,u,h,p,v,E,k){var F=Array.prototype.slice.call(arguments,3);try{i.apply(o,F)}catch(W){this.onError(W)}}var Si=!1,vs=null,wn=!1,bo=null,yc={onError:function(n){Si=!0,vs=n}};function _s(n,i,o,u,h,p,v,E,k){Si=!1,vs=null,Ii.apply(yc,arguments)}function Ja(n,i,o,u,h,p,v,E,k){if(_s.apply(this,arguments),Si){if(Si){var F=vs;Si=!1,vs=null}else throw Error(t(198));wn||(wn=!0,bo=F)}}function En(n){var i=n,o=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(o=i.return),n=i.return;while(n)}return i.tag===3?o:null}function Ai(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function Tn(n){if(En(n)!==n)throw Error(t(188))}function Ya(n){var i=n.alternate;if(!i){if(i=En(n),i===null)throw Error(t(188));return i!==n?null:n}for(var o=n,u=i;;){var h=o.return;if(h===null)break;var p=h.alternate;if(p===null){if(u=h.return,u!==null){o=u;continue}break}if(h.child===p.child){for(p=h.child;p;){if(p===o)return Tn(h),n;if(p===u)return Tn(h),i;p=p.sibling}throw Error(t(188))}if(o.return!==u.return)o=h,u=p;else{for(var v=!1,E=h.child;E;){if(E===o){v=!0,o=h,u=p;break}if(E===u){v=!0,u=h,o=p;break}E=E.sibling}if(!v){for(E=p.child;E;){if(E===o){v=!0,o=p,u=h;break}if(E===u){v=!0,u=p,o=h;break}E=E.sibling}if(!v)throw Error(t(189))}}if(o.alternate!==u)throw Error(t(190))}if(o.tag!==3)throw Error(t(188));return o.stateNode.current===o?n:i}function Lo(n){return n=Ya(n),n!==null?ws(n):null}function ws(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=ws(n);if(i!==null)return i;n=n.sibling}return null}var Es=e.unstable_scheduleCallback,Mo=e.unstable_cancelCallback,Za=e.unstable_shouldYield,vc=e.unstable_requestPaint,Fe=e.unstable_now,el=e.unstable_getCurrentPriorityLevel,ki=e.unstable_ImmediatePriority,Lr=e.unstable_UserBlockingPriority,un=e.unstable_NormalPriority,Fo=e.unstable_LowPriority,tl=e.unstable_IdlePriority,Ci=null,Zt=null;function nl(n){if(Zt&&typeof Zt.onCommitFiberRoot=="function")try{Zt.onCommitFiberRoot(Ci,n,void 0,(n.current.flags&128)===128)}catch{}}var Ft=Math.clz32?Math.clz32:il,Uo=Math.log,rl=Math.LN2;function il(n){return n>>>=0,n===0?32:31-(Uo(n)/rl|0)|0}var Ts=64,Is=4194304;function Mr(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Ri(n,i){var o=n.pendingLanes;if(o===0)return 0;var u=0,h=n.suspendedLanes,p=n.pingedLanes,v=o&268435455;if(v!==0){var E=v&~h;E!==0?u=Mr(E):(p&=v,p!==0&&(u=Mr(p)))}else v=o&~h,v!==0?u=Mr(v):p!==0&&(u=Mr(p));if(u===0)return 0;if(i!==0&&i!==u&&(i&h)===0&&(h=u&-u,p=i&-i,h>=p||h===16&&(p&4194240)!==0))return i;if((u&4)!==0&&(u|=o&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=u;0<i;)o=31-Ft(i),h=1<<o,u|=n[o],i&=~h;return u}function _c(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function cr(n,i){for(var o=n.suspendedLanes,u=n.pingedLanes,h=n.expirationTimes,p=n.pendingLanes;0<p;){var v=31-Ft(p),E=1<<v,k=h[v];k===-1?((E&o)===0||(E&u)!==0)&&(h[v]=_c(E,i)):k<=i&&(n.expiredLanes|=E),p&=~E}}function en(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Pi(){var n=Ts;return Ts<<=1,(Ts&4194240)===0&&(Ts=64),n}function Fr(n){for(var i=[],o=0;31>o;o++)i.push(n);return i}function Ur(n,i,o){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-Ft(i),n[i]=o}function Le(n,i){var o=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var u=n.eventTimes;for(n=n.expirationTimes;0<o;){var h=31-Ft(o),p=1<<h;i[h]=0,u[h]=-1,n[h]=-1,o&=~p}}function jr(n,i){var o=n.entangledLanes|=i;for(n=n.entanglements;o;){var u=31-Ft(o),h=1<<u;h&i|n[u]&i&&(n[u]|=i),o&=~h}}var Se=0;function Br(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var sl,Ss,ol,al,ll,jo=!1,$n=[],vt=null,In=null,Sn=null,zr=new Map,cn=new Map,Hn=[],wc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ul(n,i){switch(n){case"focusin":case"focusout":vt=null;break;case"dragenter":case"dragleave":In=null;break;case"mouseover":case"mouseout":Sn=null;break;case"pointerover":case"pointerout":zr.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":cn.delete(i.pointerId)}}function zt(n,i,o,u,h,p){return n===null||n.nativeEvent!==p?(n={blockedOn:i,domEventName:o,eventSystemFlags:u,nativeEvent:p,targetContainers:[h]},i!==null&&(i=ta(i),i!==null&&Ss(i)),n):(n.eventSystemFlags|=u,i=n.targetContainers,h!==null&&i.indexOf(h)===-1&&i.push(h),n)}function Ec(n,i,o,u,h){switch(i){case"focusin":return vt=zt(vt,n,i,o,u,h),!0;case"dragenter":return In=zt(In,n,i,o,u,h),!0;case"mouseover":return Sn=zt(Sn,n,i,o,u,h),!0;case"pointerover":var p=h.pointerId;return zr.set(p,zt(zr.get(p)||null,n,i,o,u,h)),!0;case"gotpointercapture":return p=h.pointerId,cn.set(p,zt(cn.get(p)||null,n,i,o,u,h)),!0}return!1}function cl(n){var i=Vi(n.target);if(i!==null){var o=En(i);if(o!==null){if(i=o.tag,i===13){if(i=Ai(o),i!==null){n.blockedOn=i,ll(n.priority,function(){ol(o)});return}}else if(i===3&&o.stateNode.current.memoizedState.isDehydrated){n.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}n.blockedOn=null}function hr(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var o=As(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(o===null){o=n.nativeEvent;var u=new o.constructor(o.type,o);Ei=u,o.target.dispatchEvent(u),Ei=null}else return i=ta(o),i!==null&&Ss(i),n.blockedOn=o,!1;i.shift()}return!0}function Ni(n,i,o){hr(n)&&o.delete(i)}function hl(){jo=!1,vt!==null&&hr(vt)&&(vt=null),In!==null&&hr(In)&&(In=null),Sn!==null&&hr(Sn)&&(Sn=null),zr.forEach(Ni),cn.forEach(Ni)}function An(n,i){n.blockedOn===i&&(n.blockedOn=null,jo||(jo=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,hl)))}function kn(n){function i(h){return An(h,n)}if(0<$n.length){An($n[0],n);for(var o=1;o<$n.length;o++){var u=$n[o];u.blockedOn===n&&(u.blockedOn=null)}}for(vt!==null&&An(vt,n),In!==null&&An(In,n),Sn!==null&&An(Sn,n),zr.forEach(i),cn.forEach(i),o=0;o<Hn.length;o++)u=Hn[o],u.blockedOn===n&&(u.blockedOn=null);for(;0<Hn.length&&(o=Hn[0],o.blockedOn===null);)cl(o),o.blockedOn===null&&Hn.shift()}var dr=_e.ReactCurrentBatchConfig,$r=!0;function $e(n,i,o,u){var h=Se,p=dr.transition;dr.transition=null;try{Se=1,Bo(n,i,o,u)}finally{Se=h,dr.transition=p}}function Tc(n,i,o,u){var h=Se,p=dr.transition;dr.transition=null;try{Se=4,Bo(n,i,o,u)}finally{Se=h,dr.transition=p}}function Bo(n,i,o,u){if($r){var h=As(n,i,o,u);if(h===null)Oc(n,i,u,xi,o),ul(n,u);else if(Ec(h,n,i,o,u))u.stopPropagation();else if(ul(n,u),i&4&&-1<wc.indexOf(n)){for(;h!==null;){var p=ta(h);if(p!==null&&sl(p),p=As(n,i,o,u),p===null&&Oc(n,i,u,xi,o),p===h)break;h=p}h!==null&&u.stopPropagation()}else Oc(n,i,u,null,o)}}var xi=null;function As(n,i,o,u){if(xi=null,n=ps(u),n=Vi(n),n!==null)if(i=En(n),i===null)n=null;else if(o=i.tag,o===13){if(n=Ai(i),n!==null)return n;n=null}else if(o===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return xi=n,null}function zo(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(el()){case ki:return 1;case Lr:return 4;case un:case Fo:return 16;case tl:return 536870912;default:return 16}default:return 16}}var tn=null,ks=null,$t=null;function $o(){if($t)return $t;var n,i=ks,o=i.length,u,h="value"in tn?tn.value:tn.textContent,p=h.length;for(n=0;n<o&&i[n]===h[n];n++);var v=o-n;for(u=1;u<=v&&i[o-u]===h[p-u];u++);return $t=h.slice(n,1<u?1-u:void 0)}function Cs(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function Wn(){return!0}function Ho(){return!1}function _t(n){function i(o,u,h,p,v){this._reactName=o,this._targetInst=h,this.type=u,this.nativeEvent=p,this.target=v,this.currentTarget=null;for(var E in n)n.hasOwnProperty(E)&&(o=n[E],this[E]=o?o(p):p[E]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?Wn:Ho,this.isPropagationStopped=Ho,this}return te(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=Wn)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=Wn)},persist:function(){},isPersistent:Wn}),i}var Cn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Rs=_t(Cn),qn=te({},Cn,{view:0,detail:0}),Ic=_t(qn),Ps,fr,Hr,Di=te({},qn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Kn,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Hr&&(Hr&&n.type==="mousemove"?(Ps=n.screenX-Hr.screenX,fr=n.screenY-Hr.screenY):fr=Ps=0,Hr=n),Ps)},movementY:function(n){return"movementY"in n?n.movementY:fr}}),Ns=_t(Di),Wo=te({},Di,{dataTransfer:0}),dl=_t(Wo),xs=te({},qn,{relatedTarget:0}),Ds=_t(xs),fl=te({},Cn,{animationName:0,elapsedTime:0,pseudoElement:0}),pr=_t(fl),pl=te({},Cn,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),ml=_t(pl),gl=te({},Cn,{data:0}),qo=_t(gl),Os={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ut={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},yl={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function vl(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=yl[n])?!!i[n]:!1}function Kn(){return vl}var l=te({},qn,{key:function(n){if(n.key){var i=Os[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=Cs(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?Ut[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Kn,charCode:function(n){return n.type==="keypress"?Cs(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Cs(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),f=_t(l),g=te({},Di,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),w=_t(g),V=te({},qn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Kn}),U=_t(V),J=te({},Cn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ve=_t(J),lt=te({},Di,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Ce=_t(lt),dt=[9,13,27,32],nt=m&&"CompositionEvent"in window,hn=null;m&&"documentMode"in document&&(hn=document.documentMode);var nn=m&&"TextEvent"in window&&!hn,Oi=m&&(!nt||hn&&8<hn&&11>=hn),Vs=" ",Cf=!1;function Rf(n,i){switch(n){case"keyup":return dt.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Pf(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var bs=!1;function nw(n,i){switch(n){case"compositionend":return Pf(i);case"keypress":return i.which!==32?null:(Cf=!0,Vs);case"textInput":return n=i.data,n===Vs&&Cf?null:n;default:return null}}function rw(n,i){if(bs)return n==="compositionend"||!nt&&Rf(n,i)?(n=$o(),$t=ks=tn=null,bs=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Oi&&i.locale!=="ko"?null:i.data;default:return null}}var iw={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Nf(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!iw[n.type]:i==="textarea"}function xf(n,i,o,u){zn(u),i=Il(i,"onChange"),0<i.length&&(o=new Rs("onChange","change",null,o,u),n.push({event:o,listeners:i}))}var Ko=null,Go=null;function sw(n){Qf(n,0)}function _l(n){var i=js(n);if(us(i))return n}function ow(n,i){if(n==="change")return i}var Df=!1;if(m){var Sc;if(m){var Ac="oninput"in document;if(!Ac){var Of=document.createElement("div");Of.setAttribute("oninput","return;"),Ac=typeof Of.oninput=="function"}Sc=Ac}else Sc=!1;Df=Sc&&(!document.documentMode||9<document.documentMode)}function Vf(){Ko&&(Ko.detachEvent("onpropertychange",bf),Go=Ko=null)}function bf(n){if(n.propertyName==="value"&&_l(Go)){var i=[];xf(i,Go,n,ps(n)),Vo(sw,i)}}function aw(n,i,o){n==="focusin"?(Vf(),Ko=i,Go=o,Ko.attachEvent("onpropertychange",bf)):n==="focusout"&&Vf()}function lw(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return _l(Go)}function uw(n,i){if(n==="click")return _l(i)}function cw(n,i){if(n==="input"||n==="change")return _l(i)}function hw(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var Rn=typeof Object.is=="function"?Object.is:hw;function Qo(n,i){if(Rn(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var o=Object.keys(n),u=Object.keys(i);if(o.length!==u.length)return!1;for(u=0;u<o.length;u++){var h=o[u];if(!y.call(i,h)||!Rn(n[h],i[h]))return!1}return!0}function Lf(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Mf(n,i){var o=Lf(n);n=0;for(var u;o;){if(o.nodeType===3){if(u=n+o.textContent.length,n<=i&&u>=i)return{node:o,offset:i-n};n=u}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=Lf(o)}}function Ff(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?Ff(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function Uf(){for(var n=window,i=Vr();i instanceof n.HTMLIFrameElement;){try{var o=typeof i.contentWindow.location.href=="string"}catch{o=!1}if(o)n=i.contentWindow;else break;i=Vr(n.document)}return i}function kc(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function dw(n){var i=Uf(),o=n.focusedElem,u=n.selectionRange;if(i!==o&&o&&o.ownerDocument&&Ff(o.ownerDocument.documentElement,o)){if(u!==null&&kc(o)){if(i=u.start,n=u.end,n===void 0&&(n=i),"selectionStart"in o)o.selectionStart=i,o.selectionEnd=Math.min(n,o.value.length);else if(n=(i=o.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var h=o.textContent.length,p=Math.min(u.start,h);u=u.end===void 0?p:Math.min(u.end,h),!n.extend&&p>u&&(h=u,u=p,p=h),h=Mf(o,p);var v=Mf(o,u);h&&v&&(n.rangeCount!==1||n.anchorNode!==h.node||n.anchorOffset!==h.offset||n.focusNode!==v.node||n.focusOffset!==v.offset)&&(i=i.createRange(),i.setStart(h.node,h.offset),n.removeAllRanges(),p>u?(n.addRange(i),n.extend(v.node,v.offset)):(i.setEnd(v.node,v.offset),n.addRange(i)))}}for(i=[],n=o;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<i.length;o++)n=i[o],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var fw=m&&"documentMode"in document&&11>=document.documentMode,Ls=null,Cc=null,Xo=null,Rc=!1;function jf(n,i,o){var u=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;Rc||Ls==null||Ls!==Vr(u)||(u=Ls,"selectionStart"in u&&kc(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),Xo&&Qo(Xo,u)||(Xo=u,u=Il(Cc,"onSelect"),0<u.length&&(i=new Rs("onSelect","select",null,i,o),n.push({event:i,listeners:u}),i.target=Ls)))}function wl(n,i){var o={};return o[n.toLowerCase()]=i.toLowerCase(),o["Webkit"+n]="webkit"+i,o["Moz"+n]="moz"+i,o}var Ms={animationend:wl("Animation","AnimationEnd"),animationiteration:wl("Animation","AnimationIteration"),animationstart:wl("Animation","AnimationStart"),transitionend:wl("Transition","TransitionEnd")},Pc={},Bf={};m&&(Bf=document.createElement("div").style,"AnimationEvent"in window||(delete Ms.animationend.animation,delete Ms.animationiteration.animation,delete Ms.animationstart.animation),"TransitionEvent"in window||delete Ms.transitionend.transition);function El(n){if(Pc[n])return Pc[n];if(!Ms[n])return n;var i=Ms[n],o;for(o in i)if(i.hasOwnProperty(o)&&o in Bf)return Pc[n]=i[o];return n}var zf=El("animationend"),$f=El("animationiteration"),Hf=El("animationstart"),Wf=El("transitionend"),qf=new Map,Kf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Wr(n,i){qf.set(n,i),c(i,[n])}for(var Nc=0;Nc<Kf.length;Nc++){var xc=Kf[Nc],pw=xc.toLowerCase(),mw=xc[0].toUpperCase()+xc.slice(1);Wr(pw,"on"+mw)}Wr(zf,"onAnimationEnd"),Wr($f,"onAnimationIteration"),Wr(Hf,"onAnimationStart"),Wr("dblclick","onDoubleClick"),Wr("focusin","onFocus"),Wr("focusout","onBlur"),Wr(Wf,"onTransitionEnd"),d("onMouseEnter",["mouseout","mouseover"]),d("onMouseLeave",["mouseout","mouseover"]),d("onPointerEnter",["pointerout","pointerover"]),d("onPointerLeave",["pointerout","pointerover"]),c("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),c("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),c("onBeforeInput",["compositionend","keypress","textInput","paste"]),c("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Jo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),gw=new Set("cancel close invalid load scroll toggle".split(" ").concat(Jo));function Gf(n,i,o){var u=n.type||"unknown-event";n.currentTarget=o,Ja(u,i,void 0,n),n.currentTarget=null}function Qf(n,i){i=(i&4)!==0;for(var o=0;o<n.length;o++){var u=n[o],h=u.event;u=u.listeners;e:{var p=void 0;if(i)for(var v=u.length-1;0<=v;v--){var E=u[v],k=E.instance,F=E.currentTarget;if(E=E.listener,k!==p&&h.isPropagationStopped())break e;Gf(h,E,F),p=k}else for(v=0;v<u.length;v++){if(E=u[v],k=E.instance,F=E.currentTarget,E=E.listener,k!==p&&h.isPropagationStopped())break e;Gf(h,E,F),p=k}}}if(wn)throw n=bo,wn=!1,bo=null,n}function Be(n,i){var o=i[Uc];o===void 0&&(o=i[Uc]=new Set);var u=n+"__bubble";o.has(u)||(Xf(i,n,2,!1),o.add(u))}function Dc(n,i,o){var u=0;i&&(u|=4),Xf(o,n,u,i)}var Tl="_reactListening"+Math.random().toString(36).slice(2);function Yo(n){if(!n[Tl]){n[Tl]=!0,s.forEach(function(o){o!=="selectionchange"&&(gw.has(o)||Dc(o,!1,n),Dc(o,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[Tl]||(i[Tl]=!0,Dc("selectionchange",!1,i))}}function Xf(n,i,o,u){switch(zo(i)){case 1:var h=$e;break;case 4:h=Tc;break;default:h=Bo}o=h.bind(null,i,o,n),h=void 0,!ys||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(h=!0),u?h!==void 0?n.addEventListener(i,o,{capture:!0,passive:h}):n.addEventListener(i,o,!0):h!==void 0?n.addEventListener(i,o,{passive:h}):n.addEventListener(i,o,!1)}function Oc(n,i,o,u,h){var p=u;if((i&1)===0&&(i&2)===0&&u!==null)e:for(;;){if(u===null)return;var v=u.tag;if(v===3||v===4){var E=u.stateNode.containerInfo;if(E===h||E.nodeType===8&&E.parentNode===h)break;if(v===4)for(v=u.return;v!==null;){var k=v.tag;if((k===3||k===4)&&(k=v.stateNode.containerInfo,k===h||k.nodeType===8&&k.parentNode===h))return;v=v.return}for(;E!==null;){if(v=Vi(E),v===null)return;if(k=v.tag,k===5||k===6){u=p=v;continue e}E=E.parentNode}}u=u.return}Vo(function(){var F=p,W=ps(o),q=[];e:{var H=qf.get(n);if(H!==void 0){var ee=Rs,re=n;switch(n){case"keypress":if(Cs(o)===0)break e;case"keydown":case"keyup":ee=f;break;case"focusin":re="focus",ee=Ds;break;case"focusout":re="blur",ee=Ds;break;case"beforeblur":case"afterblur":ee=Ds;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ee=Ns;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ee=dl;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ee=U;break;case zf:case $f:case Hf:ee=pr;break;case Wf:ee=Ve;break;case"scroll":ee=Ic;break;case"wheel":ee=Ce;break;case"copy":case"cut":case"paste":ee=ml;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ee=w}var ie=(i&4)!==0,et=!ie&&n==="scroll",L=ie?H!==null?H+"Capture":null:H;ie=[];for(var R=F,M;R!==null;){M=R;var G=M.stateNode;if(M.tag===5&&G!==null&&(M=G,L!==null&&(G=Ze(R,L),G!=null&&ie.push(Zo(R,G,M)))),et)break;R=R.return}0<ie.length&&(H=new ee(H,re,null,o,W),q.push({event:H,listeners:ie}))}}if((i&7)===0){e:{if(H=n==="mouseover"||n==="pointerover",ee=n==="mouseout"||n==="pointerout",H&&o!==Ei&&(re=o.relatedTarget||o.fromElement)&&(Vi(re)||re[mr]))break e;if((ee||H)&&(H=W.window===W?W:(H=W.ownerDocument)?H.defaultView||H.parentWindow:window,ee?(re=o.relatedTarget||o.toElement,ee=F,re=re?Vi(re):null,re!==null&&(et=En(re),re!==et||re.tag!==5&&re.tag!==6)&&(re=null)):(ee=null,re=F),ee!==re)){if(ie=Ns,G="onMouseLeave",L="onMouseEnter",R="mouse",(n==="pointerout"||n==="pointerover")&&(ie=w,G="onPointerLeave",L="onPointerEnter",R="pointer"),et=ee==null?H:js(ee),M=re==null?H:js(re),H=new ie(G,R+"leave",ee,o,W),H.target=et,H.relatedTarget=M,G=null,Vi(W)===F&&(ie=new ie(L,R+"enter",re,o,W),ie.target=M,ie.relatedTarget=et,G=ie),et=G,ee&&re)t:{for(ie=ee,L=re,R=0,M=ie;M;M=Fs(M))R++;for(M=0,G=L;G;G=Fs(G))M++;for(;0<R-M;)ie=Fs(ie),R--;for(;0<M-R;)L=Fs(L),M--;for(;R--;){if(ie===L||L!==null&&ie===L.alternate)break t;ie=Fs(ie),L=Fs(L)}ie=null}else ie=null;ee!==null&&Jf(q,H,ee,ie,!1),re!==null&&et!==null&&Jf(q,et,re,ie,!0)}}e:{if(H=F?js(F):window,ee=H.nodeName&&H.nodeName.toLowerCase(),ee==="select"||ee==="input"&&H.type==="file")var oe=ow;else if(Nf(H))if(Df)oe=cw;else{oe=lw;var ue=aw}else(ee=H.nodeName)&&ee.toLowerCase()==="input"&&(H.type==="checkbox"||H.type==="radio")&&(oe=uw);if(oe&&(oe=oe(n,F))){xf(q,oe,o,W);break e}ue&&ue(n,H,F),n==="focusout"&&(ue=H._wrapperState)&&ue.controlled&&H.type==="number"&&hs(H,"number",H.value)}switch(ue=F?js(F):window,n){case"focusin":(Nf(ue)||ue.contentEditable==="true")&&(Ls=ue,Cc=F,Xo=null);break;case"focusout":Xo=Cc=Ls=null;break;case"mousedown":Rc=!0;break;case"contextmenu":case"mouseup":case"dragend":Rc=!1,jf(q,o,W);break;case"selectionchange":if(fw)break;case"keydown":case"keyup":jf(q,o,W)}var ce;if(nt)e:{switch(n){case"compositionstart":var de="onCompositionStart";break e;case"compositionend":de="onCompositionEnd";break e;case"compositionupdate":de="onCompositionUpdate";break e}de=void 0}else bs?Rf(n,o)&&(de="onCompositionEnd"):n==="keydown"&&o.keyCode===229&&(de="onCompositionStart");de&&(Oi&&o.locale!=="ko"&&(bs||de!=="onCompositionStart"?de==="onCompositionEnd"&&bs&&(ce=$o()):(tn=W,ks="value"in tn?tn.value:tn.textContent,bs=!0)),ue=Il(F,de),0<ue.length&&(de=new qo(de,n,null,o,W),q.push({event:de,listeners:ue}),ce?de.data=ce:(ce=Pf(o),ce!==null&&(de.data=ce)))),(ce=nn?nw(n,o):rw(n,o))&&(F=Il(F,"onBeforeInput"),0<F.length&&(W=new qo("onBeforeInput","beforeinput",null,o,W),q.push({event:W,listeners:F}),W.data=ce))}Qf(q,i)})}function Zo(n,i,o){return{instance:n,listener:i,currentTarget:o}}function Il(n,i){for(var o=i+"Capture",u=[];n!==null;){var h=n,p=h.stateNode;h.tag===5&&p!==null&&(h=p,p=Ze(n,o),p!=null&&u.unshift(Zo(n,p,h)),p=Ze(n,i),p!=null&&u.push(Zo(n,p,h))),n=n.return}return u}function Fs(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Jf(n,i,o,u,h){for(var p=i._reactName,v=[];o!==null&&o!==u;){var E=o,k=E.alternate,F=E.stateNode;if(k!==null&&k===u)break;E.tag===5&&F!==null&&(E=F,h?(k=Ze(o,p),k!=null&&v.unshift(Zo(o,k,E))):h||(k=Ze(o,p),k!=null&&v.push(Zo(o,k,E)))),o=o.return}v.length!==0&&n.push({event:i,listeners:v})}var yw=/\r\n?/g,vw=/\u0000|\uFFFD/g;function Yf(n){return(typeof n=="string"?n:""+n).replace(yw,`
`).replace(vw,"")}function Sl(n,i,o){if(i=Yf(i),Yf(n)!==i&&o)throw Error(t(425))}function Al(){}var Vc=null,bc=null;function Lc(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Mc=typeof setTimeout=="function"?setTimeout:void 0,_w=typeof clearTimeout=="function"?clearTimeout:void 0,Zf=typeof Promise=="function"?Promise:void 0,ww=typeof queueMicrotask=="function"?queueMicrotask:typeof Zf<"u"?function(n){return Zf.resolve(null).then(n).catch(Ew)}:Mc;function Ew(n){setTimeout(function(){throw n})}function Fc(n,i){var o=i,u=0;do{var h=o.nextSibling;if(n.removeChild(o),h&&h.nodeType===8)if(o=h.data,o==="/$"){if(u===0){n.removeChild(h),kn(i);return}u--}else o!=="$"&&o!=="$?"&&o!=="$!"||u++;o=h}while(o);kn(i)}function qr(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function ep(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var o=n.data;if(o==="$"||o==="$!"||o==="$?"){if(i===0)return n;i--}else o==="/$"&&i++}n=n.previousSibling}return null}var Us=Math.random().toString(36).slice(2),Gn="__reactFiber$"+Us,ea="__reactProps$"+Us,mr="__reactContainer$"+Us,Uc="__reactEvents$"+Us,Tw="__reactListeners$"+Us,Iw="__reactHandles$"+Us;function Vi(n){var i=n[Gn];if(i)return i;for(var o=n.parentNode;o;){if(i=o[mr]||o[Gn]){if(o=i.alternate,i.child!==null||o!==null&&o.child!==null)for(n=ep(n);n!==null;){if(o=n[Gn])return o;n=ep(n)}return i}n=o,o=n.parentNode}return null}function ta(n){return n=n[Gn]||n[mr],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function js(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function kl(n){return n[ea]||null}var jc=[],Bs=-1;function Kr(n){return{current:n}}function ze(n){0>Bs||(n.current=jc[Bs],jc[Bs]=null,Bs--)}function Ue(n,i){Bs++,jc[Bs]=n.current,n.current=i}var Gr={},Rt=Kr(Gr),Ht=Kr(!1),bi=Gr;function zs(n,i){var o=n.type.contextTypes;if(!o)return Gr;var u=n.stateNode;if(u&&u.__reactInternalMemoizedUnmaskedChildContext===i)return u.__reactInternalMemoizedMaskedChildContext;var h={},p;for(p in o)h[p]=i[p];return u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=h),h}function Wt(n){return n=n.childContextTypes,n!=null}function Cl(){ze(Ht),ze(Rt)}function tp(n,i,o){if(Rt.current!==Gr)throw Error(t(168));Ue(Rt,i),Ue(Ht,o)}function np(n,i,o){var u=n.stateNode;if(i=i.childContextTypes,typeof u.getChildContext!="function")return o;u=u.getChildContext();for(var h in u)if(!(h in i))throw Error(t(108,De(n)||"Unknown",h));return te({},o,u)}function Rl(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Gr,bi=Rt.current,Ue(Rt,n),Ue(Ht,Ht.current),!0}function rp(n,i,o){var u=n.stateNode;if(!u)throw Error(t(169));o?(n=np(n,i,bi),u.__reactInternalMemoizedMergedChildContext=n,ze(Ht),ze(Rt),Ue(Rt,n)):ze(Ht),Ue(Ht,o)}var gr=null,Pl=!1,Bc=!1;function ip(n){gr===null?gr=[n]:gr.push(n)}function Sw(n){Pl=!0,ip(n)}function Qr(){if(!Bc&&gr!==null){Bc=!0;var n=0,i=Se;try{var o=gr;for(Se=1;n<o.length;n++){var u=o[n];do u=u(!0);while(u!==null)}gr=null,Pl=!1}catch(h){throw gr!==null&&(gr=gr.slice(n+1)),Es(ki,Qr),h}finally{Se=i,Bc=!1}}return null}var $s=[],Hs=0,Nl=null,xl=0,dn=[],fn=0,Li=null,yr=1,vr="";function Mi(n,i){$s[Hs++]=xl,$s[Hs++]=Nl,Nl=n,xl=i}function sp(n,i,o){dn[fn++]=yr,dn[fn++]=vr,dn[fn++]=Li,Li=n;var u=yr;n=vr;var h=32-Ft(u)-1;u&=~(1<<h),o+=1;var p=32-Ft(i)+h;if(30<p){var v=h-h%5;p=(u&(1<<v)-1).toString(32),u>>=v,h-=v,yr=1<<32-Ft(i)+h|o<<h|u,vr=p+n}else yr=1<<p|o<<h|u,vr=n}function zc(n){n.return!==null&&(Mi(n,1),sp(n,1,0))}function $c(n){for(;n===Nl;)Nl=$s[--Hs],$s[Hs]=null,xl=$s[--Hs],$s[Hs]=null;for(;n===Li;)Li=dn[--fn],dn[fn]=null,vr=dn[--fn],dn[fn]=null,yr=dn[--fn],dn[fn]=null}var rn=null,sn=null,He=!1,Pn=null;function op(n,i){var o=yn(5,null,null,0);o.elementType="DELETED",o.stateNode=i,o.return=n,i=n.deletions,i===null?(n.deletions=[o],n.flags|=16):i.push(o)}function ap(n,i){switch(n.tag){case 5:var o=n.type;return i=i.nodeType!==1||o.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,rn=n,sn=qr(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,rn=n,sn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(o=Li!==null?{id:yr,overflow:vr}:null,n.memoizedState={dehydrated:i,treeContext:o,retryLane:1073741824},o=yn(18,null,null,0),o.stateNode=i,o.return=n,n.child=o,rn=n,sn=null,!0):!1;default:return!1}}function Hc(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Wc(n){if(He){var i=sn;if(i){var o=i;if(!ap(n,i)){if(Hc(n))throw Error(t(418));i=qr(o.nextSibling);var u=rn;i&&ap(n,i)?op(u,o):(n.flags=n.flags&-4097|2,He=!1,rn=n)}}else{if(Hc(n))throw Error(t(418));n.flags=n.flags&-4097|2,He=!1,rn=n}}}function lp(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;rn=n}function Dl(n){if(n!==rn)return!1;if(!He)return lp(n),He=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!Lc(n.type,n.memoizedProps)),i&&(i=sn)){if(Hc(n))throw up(),Error(t(418));for(;i;)op(n,i),i=qr(i.nextSibling)}if(lp(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var o=n.data;if(o==="/$"){if(i===0){sn=qr(n.nextSibling);break e}i--}else o!=="$"&&o!=="$!"&&o!=="$?"||i++}n=n.nextSibling}sn=null}}else sn=rn?qr(n.stateNode.nextSibling):null;return!0}function up(){for(var n=sn;n;)n=qr(n.nextSibling)}function Ws(){sn=rn=null,He=!1}function qc(n){Pn===null?Pn=[n]:Pn.push(n)}var Aw=_e.ReactCurrentBatchConfig;function na(n,i,o){if(n=o.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(t(309));var u=o.stateNode}if(!u)throw Error(t(147,n));var h=u,p=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===p?i.ref:(i=function(v){var E=h.refs;v===null?delete E[p]:E[p]=v},i._stringRef=p,i)}if(typeof n!="string")throw Error(t(284));if(!o._owner)throw Error(t(290,n))}return n}function Ol(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function cp(n){var i=n._init;return i(n._payload)}function hp(n){function i(L,R){if(n){var M=L.deletions;M===null?(L.deletions=[R],L.flags|=16):M.push(R)}}function o(L,R){if(!n)return null;for(;R!==null;)i(L,R),R=R.sibling;return null}function u(L,R){for(L=new Map;R!==null;)R.key!==null?L.set(R.key,R):L.set(R.index,R),R=R.sibling;return L}function h(L,R){return L=ri(L,R),L.index=0,L.sibling=null,L}function p(L,R,M){return L.index=M,n?(M=L.alternate,M!==null?(M=M.index,M<R?(L.flags|=2,R):M):(L.flags|=2,R)):(L.flags|=1048576,R)}function v(L){return n&&L.alternate===null&&(L.flags|=2),L}function E(L,R,M,G){return R===null||R.tag!==6?(R=Mh(M,L.mode,G),R.return=L,R):(R=h(R,M),R.return=L,R)}function k(L,R,M,G){var oe=M.type;return oe===N?W(L,R,M.props.children,G,M.key):R!==null&&(R.elementType===oe||typeof oe=="object"&&oe!==null&&oe.$$typeof===Ct&&cp(oe)===R.type)?(G=h(R,M.props),G.ref=na(L,R,M),G.return=L,G):(G=ru(M.type,M.key,M.props,null,L.mode,G),G.ref=na(L,R,M),G.return=L,G)}function F(L,R,M,G){return R===null||R.tag!==4||R.stateNode.containerInfo!==M.containerInfo||R.stateNode.implementation!==M.implementation?(R=Fh(M,L.mode,G),R.return=L,R):(R=h(R,M.children||[]),R.return=L,R)}function W(L,R,M,G,oe){return R===null||R.tag!==7?(R=Wi(M,L.mode,G,oe),R.return=L,R):(R=h(R,M),R.return=L,R)}function q(L,R,M){if(typeof R=="string"&&R!==""||typeof R=="number")return R=Mh(""+R,L.mode,M),R.return=L,R;if(typeof R=="object"&&R!==null){switch(R.$$typeof){case Qe:return M=ru(R.type,R.key,R.props,null,L.mode,M),M.ref=na(L,null,R),M.return=L,M;case Ae:return R=Fh(R,L.mode,M),R.return=L,R;case Ct:var G=R._init;return q(L,G(R._payload),M)}if(or(R)||le(R))return R=Wi(R,L.mode,M,null),R.return=L,R;Ol(L,R)}return null}function H(L,R,M,G){var oe=R!==null?R.key:null;if(typeof M=="string"&&M!==""||typeof M=="number")return oe!==null?null:E(L,R,""+M,G);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case Qe:return M.key===oe?k(L,R,M,G):null;case Ae:return M.key===oe?F(L,R,M,G):null;case Ct:return oe=M._init,H(L,R,oe(M._payload),G)}if(or(M)||le(M))return oe!==null?null:W(L,R,M,G,null);Ol(L,M)}return null}function ee(L,R,M,G,oe){if(typeof G=="string"&&G!==""||typeof G=="number")return L=L.get(M)||null,E(R,L,""+G,oe);if(typeof G=="object"&&G!==null){switch(G.$$typeof){case Qe:return L=L.get(G.key===null?M:G.key)||null,k(R,L,G,oe);case Ae:return L=L.get(G.key===null?M:G.key)||null,F(R,L,G,oe);case Ct:var ue=G._init;return ee(L,R,M,ue(G._payload),oe)}if(or(G)||le(G))return L=L.get(M)||null,W(R,L,G,oe,null);Ol(R,G)}return null}function re(L,R,M,G){for(var oe=null,ue=null,ce=R,de=R=0,mt=null;ce!==null&&de<M.length;de++){ce.index>de?(mt=ce,ce=null):mt=ce.sibling;var xe=H(L,ce,M[de],G);if(xe===null){ce===null&&(ce=mt);break}n&&ce&&xe.alternate===null&&i(L,ce),R=p(xe,R,de),ue===null?oe=xe:ue.sibling=xe,ue=xe,ce=mt}if(de===M.length)return o(L,ce),He&&Mi(L,de),oe;if(ce===null){for(;de<M.length;de++)ce=q(L,M[de],G),ce!==null&&(R=p(ce,R,de),ue===null?oe=ce:ue.sibling=ce,ue=ce);return He&&Mi(L,de),oe}for(ce=u(L,ce);de<M.length;de++)mt=ee(ce,L,de,M[de],G),mt!==null&&(n&&mt.alternate!==null&&ce.delete(mt.key===null?de:mt.key),R=p(mt,R,de),ue===null?oe=mt:ue.sibling=mt,ue=mt);return n&&ce.forEach(function(ii){return i(L,ii)}),He&&Mi(L,de),oe}function ie(L,R,M,G){var oe=le(M);if(typeof oe!="function")throw Error(t(150));if(M=oe.call(M),M==null)throw Error(t(151));for(var ue=oe=null,ce=R,de=R=0,mt=null,xe=M.next();ce!==null&&!xe.done;de++,xe=M.next()){ce.index>de?(mt=ce,ce=null):mt=ce.sibling;var ii=H(L,ce,xe.value,G);if(ii===null){ce===null&&(ce=mt);break}n&&ce&&ii.alternate===null&&i(L,ce),R=p(ii,R,de),ue===null?oe=ii:ue.sibling=ii,ue=ii,ce=mt}if(xe.done)return o(L,ce),He&&Mi(L,de),oe;if(ce===null){for(;!xe.done;de++,xe=M.next())xe=q(L,xe.value,G),xe!==null&&(R=p(xe,R,de),ue===null?oe=xe:ue.sibling=xe,ue=xe);return He&&Mi(L,de),oe}for(ce=u(L,ce);!xe.done;de++,xe=M.next())xe=ee(ce,L,de,xe.value,G),xe!==null&&(n&&xe.alternate!==null&&ce.delete(xe.key===null?de:xe.key),R=p(xe,R,de),ue===null?oe=xe:ue.sibling=xe,ue=xe);return n&&ce.forEach(function(i0){return i(L,i0)}),He&&Mi(L,de),oe}function et(L,R,M,G){if(typeof M=="object"&&M!==null&&M.type===N&&M.key===null&&(M=M.props.children),typeof M=="object"&&M!==null){switch(M.$$typeof){case Qe:e:{for(var oe=M.key,ue=R;ue!==null;){if(ue.key===oe){if(oe=M.type,oe===N){if(ue.tag===7){o(L,ue.sibling),R=h(ue,M.props.children),R.return=L,L=R;break e}}else if(ue.elementType===oe||typeof oe=="object"&&oe!==null&&oe.$$typeof===Ct&&cp(oe)===ue.type){o(L,ue.sibling),R=h(ue,M.props),R.ref=na(L,ue,M),R.return=L,L=R;break e}o(L,ue);break}else i(L,ue);ue=ue.sibling}M.type===N?(R=Wi(M.props.children,L.mode,G,M.key),R.return=L,L=R):(G=ru(M.type,M.key,M.props,null,L.mode,G),G.ref=na(L,R,M),G.return=L,L=G)}return v(L);case Ae:e:{for(ue=M.key;R!==null;){if(R.key===ue)if(R.tag===4&&R.stateNode.containerInfo===M.containerInfo&&R.stateNode.implementation===M.implementation){o(L,R.sibling),R=h(R,M.children||[]),R.return=L,L=R;break e}else{o(L,R);break}else i(L,R);R=R.sibling}R=Fh(M,L.mode,G),R.return=L,L=R}return v(L);case Ct:return ue=M._init,et(L,R,ue(M._payload),G)}if(or(M))return re(L,R,M,G);if(le(M))return ie(L,R,M,G);Ol(L,M)}return typeof M=="string"&&M!==""||typeof M=="number"?(M=""+M,R!==null&&R.tag===6?(o(L,R.sibling),R=h(R,M),R.return=L,L=R):(o(L,R),R=Mh(M,L.mode,G),R.return=L,L=R),v(L)):o(L,R)}return et}var qs=hp(!0),dp=hp(!1),Vl=Kr(null),bl=null,Ks=null,Kc=null;function Gc(){Kc=Ks=bl=null}function Qc(n){var i=Vl.current;ze(Vl),n._currentValue=i}function Xc(n,i,o){for(;n!==null;){var u=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,u!==null&&(u.childLanes|=i)):u!==null&&(u.childLanes&i)!==i&&(u.childLanes|=i),n===o)break;n=n.return}}function Gs(n,i){bl=n,Kc=Ks=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&(qt=!0),n.firstContext=null)}function pn(n){var i=n._currentValue;if(Kc!==n)if(n={context:n,memoizedValue:i,next:null},Ks===null){if(bl===null)throw Error(t(308));Ks=n,bl.dependencies={lanes:0,firstContext:n}}else Ks=Ks.next=n;return i}var Fi=null;function Jc(n){Fi===null?Fi=[n]:Fi.push(n)}function fp(n,i,o,u){var h=i.interleaved;return h===null?(o.next=o,Jc(i)):(o.next=h.next,h.next=o),i.interleaved=o,_r(n,u)}function _r(n,i){n.lanes|=i;var o=n.alternate;for(o!==null&&(o.lanes|=i),o=n,n=n.return;n!==null;)n.childLanes|=i,o=n.alternate,o!==null&&(o.childLanes|=i),o=n,n=n.return;return o.tag===3?o.stateNode:null}var Xr=!1;function Yc(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function pp(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function wr(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function Jr(n,i,o){var u=n.updateQueue;if(u===null)return null;if(u=u.shared,(Pe&2)!==0){var h=u.pending;return h===null?i.next=i:(i.next=h.next,h.next=i),u.pending=i,_r(n,o)}return h=u.interleaved,h===null?(i.next=i,Jc(u)):(i.next=h.next,h.next=i),u.interleaved=i,_r(n,o)}function Ll(n,i,o){if(i=i.updateQueue,i!==null&&(i=i.shared,(o&4194240)!==0)){var u=i.lanes;u&=n.pendingLanes,o|=u,i.lanes=o,jr(n,o)}}function mp(n,i){var o=n.updateQueue,u=n.alternate;if(u!==null&&(u=u.updateQueue,o===u)){var h=null,p=null;if(o=o.firstBaseUpdate,o!==null){do{var v={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};p===null?h=p=v:p=p.next=v,o=o.next}while(o!==null);p===null?h=p=i:p=p.next=i}else h=p=i;o={baseState:u.baseState,firstBaseUpdate:h,lastBaseUpdate:p,shared:u.shared,effects:u.effects},n.updateQueue=o;return}n=o.lastBaseUpdate,n===null?o.firstBaseUpdate=i:n.next=i,o.lastBaseUpdate=i}function Ml(n,i,o,u){var h=n.updateQueue;Xr=!1;var p=h.firstBaseUpdate,v=h.lastBaseUpdate,E=h.shared.pending;if(E!==null){h.shared.pending=null;var k=E,F=k.next;k.next=null,v===null?p=F:v.next=F,v=k;var W=n.alternate;W!==null&&(W=W.updateQueue,E=W.lastBaseUpdate,E!==v&&(E===null?W.firstBaseUpdate=F:E.next=F,W.lastBaseUpdate=k))}if(p!==null){var q=h.baseState;v=0,W=F=k=null,E=p;do{var H=E.lane,ee=E.eventTime;if((u&H)===H){W!==null&&(W=W.next={eventTime:ee,lane:0,tag:E.tag,payload:E.payload,callback:E.callback,next:null});e:{var re=n,ie=E;switch(H=i,ee=o,ie.tag){case 1:if(re=ie.payload,typeof re=="function"){q=re.call(ee,q,H);break e}q=re;break e;case 3:re.flags=re.flags&-65537|128;case 0:if(re=ie.payload,H=typeof re=="function"?re.call(ee,q,H):re,H==null)break e;q=te({},q,H);break e;case 2:Xr=!0}}E.callback!==null&&E.lane!==0&&(n.flags|=64,H=h.effects,H===null?h.effects=[E]:H.push(E))}else ee={eventTime:ee,lane:H,tag:E.tag,payload:E.payload,callback:E.callback,next:null},W===null?(F=W=ee,k=q):W=W.next=ee,v|=H;if(E=E.next,E===null){if(E=h.shared.pending,E===null)break;H=E,E=H.next,H.next=null,h.lastBaseUpdate=H,h.shared.pending=null}}while(!0);if(W===null&&(k=q),h.baseState=k,h.firstBaseUpdate=F,h.lastBaseUpdate=W,i=h.shared.interleaved,i!==null){h=i;do v|=h.lane,h=h.next;while(h!==i)}else p===null&&(h.shared.lanes=0);Bi|=v,n.lanes=v,n.memoizedState=q}}function gp(n,i,o){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var u=n[i],h=u.callback;if(h!==null){if(u.callback=null,u=o,typeof h!="function")throw Error(t(191,h));h.call(u)}}}var ra={},Qn=Kr(ra),ia=Kr(ra),sa=Kr(ra);function Ui(n){if(n===ra)throw Error(t(174));return n}function Zc(n,i){switch(Ue(sa,i),Ue(ia,n),Ue(Qn,ra),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:at(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=at(i,n)}ze(Qn),Ue(Qn,i)}function Qs(){ze(Qn),ze(ia),ze(sa)}function yp(n){Ui(sa.current);var i=Ui(Qn.current),o=at(i,n.type);i!==o&&(Ue(ia,n),Ue(Qn,o))}function eh(n){ia.current===n&&(ze(Qn),ze(ia))}var Ke=Kr(0);function Fl(n){for(var i=n;i!==null;){if(i.tag===13){var o=i.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var th=[];function nh(){for(var n=0;n<th.length;n++)th[n]._workInProgressVersionPrimary=null;th.length=0}var Ul=_e.ReactCurrentDispatcher,rh=_e.ReactCurrentBatchConfig,ji=0,Ge=null,ut=null,ft=null,jl=!1,oa=!1,aa=0,kw=0;function Pt(){throw Error(t(321))}function ih(n,i){if(i===null)return!1;for(var o=0;o<i.length&&o<n.length;o++)if(!Rn(n[o],i[o]))return!1;return!0}function sh(n,i,o,u,h,p){if(ji=p,Ge=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Ul.current=n===null||n.memoizedState===null?Nw:xw,n=o(u,h),oa){p=0;do{if(oa=!1,aa=0,25<=p)throw Error(t(301));p+=1,ft=ut=null,i.updateQueue=null,Ul.current=Dw,n=o(u,h)}while(oa)}if(Ul.current=$l,i=ut!==null&&ut.next!==null,ji=0,ft=ut=Ge=null,jl=!1,i)throw Error(t(300));return n}function oh(){var n=aa!==0;return aa=0,n}function Xn(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ft===null?Ge.memoizedState=ft=n:ft=ft.next=n,ft}function mn(){if(ut===null){var n=Ge.alternate;n=n!==null?n.memoizedState:null}else n=ut.next;var i=ft===null?Ge.memoizedState:ft.next;if(i!==null)ft=i,ut=n;else{if(n===null)throw Error(t(310));ut=n,n={memoizedState:ut.memoizedState,baseState:ut.baseState,baseQueue:ut.baseQueue,queue:ut.queue,next:null},ft===null?Ge.memoizedState=ft=n:ft=ft.next=n}return ft}function la(n,i){return typeof i=="function"?i(n):i}function ah(n){var i=mn(),o=i.queue;if(o===null)throw Error(t(311));o.lastRenderedReducer=n;var u=ut,h=u.baseQueue,p=o.pending;if(p!==null){if(h!==null){var v=h.next;h.next=p.next,p.next=v}u.baseQueue=h=p,o.pending=null}if(h!==null){p=h.next,u=u.baseState;var E=v=null,k=null,F=p;do{var W=F.lane;if((ji&W)===W)k!==null&&(k=k.next={lane:0,action:F.action,hasEagerState:F.hasEagerState,eagerState:F.eagerState,next:null}),u=F.hasEagerState?F.eagerState:n(u,F.action);else{var q={lane:W,action:F.action,hasEagerState:F.hasEagerState,eagerState:F.eagerState,next:null};k===null?(E=k=q,v=u):k=k.next=q,Ge.lanes|=W,Bi|=W}F=F.next}while(F!==null&&F!==p);k===null?v=u:k.next=E,Rn(u,i.memoizedState)||(qt=!0),i.memoizedState=u,i.baseState=v,i.baseQueue=k,o.lastRenderedState=u}if(n=o.interleaved,n!==null){h=n;do p=h.lane,Ge.lanes|=p,Bi|=p,h=h.next;while(h!==n)}else h===null&&(o.lanes=0);return[i.memoizedState,o.dispatch]}function lh(n){var i=mn(),o=i.queue;if(o===null)throw Error(t(311));o.lastRenderedReducer=n;var u=o.dispatch,h=o.pending,p=i.memoizedState;if(h!==null){o.pending=null;var v=h=h.next;do p=n(p,v.action),v=v.next;while(v!==h);Rn(p,i.memoizedState)||(qt=!0),i.memoizedState=p,i.baseQueue===null&&(i.baseState=p),o.lastRenderedState=p}return[p,u]}function vp(){}function _p(n,i){var o=Ge,u=mn(),h=i(),p=!Rn(u.memoizedState,h);if(p&&(u.memoizedState=h,qt=!0),u=u.queue,uh(Tp.bind(null,o,u,n),[n]),u.getSnapshot!==i||p||ft!==null&&ft.memoizedState.tag&1){if(o.flags|=2048,ua(9,Ep.bind(null,o,u,h,i),void 0,null),pt===null)throw Error(t(349));(ji&30)!==0||wp(o,i,h)}return h}function wp(n,i,o){n.flags|=16384,n={getSnapshot:i,value:o},i=Ge.updateQueue,i===null?(i={lastEffect:null,stores:null},Ge.updateQueue=i,i.stores=[n]):(o=i.stores,o===null?i.stores=[n]:o.push(n))}function Ep(n,i,o,u){i.value=o,i.getSnapshot=u,Ip(i)&&Sp(n)}function Tp(n,i,o){return o(function(){Ip(i)&&Sp(n)})}function Ip(n){var i=n.getSnapshot;n=n.value;try{var o=i();return!Rn(n,o)}catch{return!0}}function Sp(n){var i=_r(n,1);i!==null&&On(i,n,1,-1)}function Ap(n){var i=Xn();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:la,lastRenderedState:n},i.queue=n,n=n.dispatch=Pw.bind(null,Ge,n),[i.memoizedState,n]}function ua(n,i,o,u){return n={tag:n,create:i,destroy:o,deps:u,next:null},i=Ge.updateQueue,i===null?(i={lastEffect:null,stores:null},Ge.updateQueue=i,i.lastEffect=n.next=n):(o=i.lastEffect,o===null?i.lastEffect=n.next=n:(u=o.next,o.next=n,n.next=u,i.lastEffect=n)),n}function kp(){return mn().memoizedState}function Bl(n,i,o,u){var h=Xn();Ge.flags|=n,h.memoizedState=ua(1|i,o,void 0,u===void 0?null:u)}function zl(n,i,o,u){var h=mn();u=u===void 0?null:u;var p=void 0;if(ut!==null){var v=ut.memoizedState;if(p=v.destroy,u!==null&&ih(u,v.deps)){h.memoizedState=ua(i,o,p,u);return}}Ge.flags|=n,h.memoizedState=ua(1|i,o,p,u)}function Cp(n,i){return Bl(8390656,8,n,i)}function uh(n,i){return zl(2048,8,n,i)}function Rp(n,i){return zl(4,2,n,i)}function Pp(n,i){return zl(4,4,n,i)}function Np(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function xp(n,i,o){return o=o!=null?o.concat([n]):null,zl(4,4,Np.bind(null,i,n),o)}function ch(){}function Dp(n,i){var o=mn();i=i===void 0?null:i;var u=o.memoizedState;return u!==null&&i!==null&&ih(i,u[1])?u[0]:(o.memoizedState=[n,i],n)}function Op(n,i){var o=mn();i=i===void 0?null:i;var u=o.memoizedState;return u!==null&&i!==null&&ih(i,u[1])?u[0]:(n=n(),o.memoizedState=[n,i],n)}function Vp(n,i,o){return(ji&21)===0?(n.baseState&&(n.baseState=!1,qt=!0),n.memoizedState=o):(Rn(o,i)||(o=Pi(),Ge.lanes|=o,Bi|=o,n.baseState=!0),i)}function Cw(n,i){var o=Se;Se=o!==0&&4>o?o:4,n(!0);var u=rh.transition;rh.transition={};try{n(!1),i()}finally{Se=o,rh.transition=u}}function bp(){return mn().memoizedState}function Rw(n,i,o){var u=ti(n);if(o={lane:u,action:o,hasEagerState:!1,eagerState:null,next:null},Lp(n))Mp(i,o);else if(o=fp(n,i,o,u),o!==null){var h=Bt();On(o,n,u,h),Fp(o,i,u)}}function Pw(n,i,o){var u=ti(n),h={lane:u,action:o,hasEagerState:!1,eagerState:null,next:null};if(Lp(n))Mp(i,h);else{var p=n.alternate;if(n.lanes===0&&(p===null||p.lanes===0)&&(p=i.lastRenderedReducer,p!==null))try{var v=i.lastRenderedState,E=p(v,o);if(h.hasEagerState=!0,h.eagerState=E,Rn(E,v)){var k=i.interleaved;k===null?(h.next=h,Jc(i)):(h.next=k.next,k.next=h),i.interleaved=h;return}}catch{}finally{}o=fp(n,i,h,u),o!==null&&(h=Bt(),On(o,n,u,h),Fp(o,i,u))}}function Lp(n){var i=n.alternate;return n===Ge||i!==null&&i===Ge}function Mp(n,i){oa=jl=!0;var o=n.pending;o===null?i.next=i:(i.next=o.next,o.next=i),n.pending=i}function Fp(n,i,o){if((o&4194240)!==0){var u=i.lanes;u&=n.pendingLanes,o|=u,i.lanes=o,jr(n,o)}}var $l={readContext:pn,useCallback:Pt,useContext:Pt,useEffect:Pt,useImperativeHandle:Pt,useInsertionEffect:Pt,useLayoutEffect:Pt,useMemo:Pt,useReducer:Pt,useRef:Pt,useState:Pt,useDebugValue:Pt,useDeferredValue:Pt,useTransition:Pt,useMutableSource:Pt,useSyncExternalStore:Pt,useId:Pt,unstable_isNewReconciler:!1},Nw={readContext:pn,useCallback:function(n,i){return Xn().memoizedState=[n,i===void 0?null:i],n},useContext:pn,useEffect:Cp,useImperativeHandle:function(n,i,o){return o=o!=null?o.concat([n]):null,Bl(4194308,4,Np.bind(null,i,n),o)},useLayoutEffect:function(n,i){return Bl(4194308,4,n,i)},useInsertionEffect:function(n,i){return Bl(4,2,n,i)},useMemo:function(n,i){var o=Xn();return i=i===void 0?null:i,n=n(),o.memoizedState=[n,i],n},useReducer:function(n,i,o){var u=Xn();return i=o!==void 0?o(i):i,u.memoizedState=u.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},u.queue=n,n=n.dispatch=Rw.bind(null,Ge,n),[u.memoizedState,n]},useRef:function(n){var i=Xn();return n={current:n},i.memoizedState=n},useState:Ap,useDebugValue:ch,useDeferredValue:function(n){return Xn().memoizedState=n},useTransition:function(){var n=Ap(!1),i=n[0];return n=Cw.bind(null,n[1]),Xn().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,o){var u=Ge,h=Xn();if(He){if(o===void 0)throw Error(t(407));o=o()}else{if(o=i(),pt===null)throw Error(t(349));(ji&30)!==0||wp(u,i,o)}h.memoizedState=o;var p={value:o,getSnapshot:i};return h.queue=p,Cp(Tp.bind(null,u,p,n),[n]),u.flags|=2048,ua(9,Ep.bind(null,u,p,o,i),void 0,null),o},useId:function(){var n=Xn(),i=pt.identifierPrefix;if(He){var o=vr,u=yr;o=(u&~(1<<32-Ft(u)-1)).toString(32)+o,i=":"+i+"R"+o,o=aa++,0<o&&(i+="H"+o.toString(32)),i+=":"}else o=kw++,i=":"+i+"r"+o.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},xw={readContext:pn,useCallback:Dp,useContext:pn,useEffect:uh,useImperativeHandle:xp,useInsertionEffect:Rp,useLayoutEffect:Pp,useMemo:Op,useReducer:ah,useRef:kp,useState:function(){return ah(la)},useDebugValue:ch,useDeferredValue:function(n){var i=mn();return Vp(i,ut.memoizedState,n)},useTransition:function(){var n=ah(la)[0],i=mn().memoizedState;return[n,i]},useMutableSource:vp,useSyncExternalStore:_p,useId:bp,unstable_isNewReconciler:!1},Dw={readContext:pn,useCallback:Dp,useContext:pn,useEffect:uh,useImperativeHandle:xp,useInsertionEffect:Rp,useLayoutEffect:Pp,useMemo:Op,useReducer:lh,useRef:kp,useState:function(){return lh(la)},useDebugValue:ch,useDeferredValue:function(n){var i=mn();return ut===null?i.memoizedState=n:Vp(i,ut.memoizedState,n)},useTransition:function(){var n=lh(la)[0],i=mn().memoizedState;return[n,i]},useMutableSource:vp,useSyncExternalStore:_p,useId:bp,unstable_isNewReconciler:!1};function Nn(n,i){if(n&&n.defaultProps){i=te({},i),n=n.defaultProps;for(var o in n)i[o]===void 0&&(i[o]=n[o]);return i}return i}function hh(n,i,o,u){i=n.memoizedState,o=o(u,i),o=o==null?i:te({},i,o),n.memoizedState=o,n.lanes===0&&(n.updateQueue.baseState=o)}var Hl={isMounted:function(n){return(n=n._reactInternals)?En(n)===n:!1},enqueueSetState:function(n,i,o){n=n._reactInternals;var u=Bt(),h=ti(n),p=wr(u,h);p.payload=i,o!=null&&(p.callback=o),i=Jr(n,p,h),i!==null&&(On(i,n,h,u),Ll(i,n,h))},enqueueReplaceState:function(n,i,o){n=n._reactInternals;var u=Bt(),h=ti(n),p=wr(u,h);p.tag=1,p.payload=i,o!=null&&(p.callback=o),i=Jr(n,p,h),i!==null&&(On(i,n,h,u),Ll(i,n,h))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var o=Bt(),u=ti(n),h=wr(o,u);h.tag=2,i!=null&&(h.callback=i),i=Jr(n,h,u),i!==null&&(On(i,n,u,o),Ll(i,n,u))}};function Up(n,i,o,u,h,p,v){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(u,p,v):i.prototype&&i.prototype.isPureReactComponent?!Qo(o,u)||!Qo(h,p):!0}function jp(n,i,o){var u=!1,h=Gr,p=i.contextType;return typeof p=="object"&&p!==null?p=pn(p):(h=Wt(i)?bi:Rt.current,u=i.contextTypes,p=(u=u!=null)?zs(n,h):Gr),i=new i(o,p),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Hl,n.stateNode=i,i._reactInternals=n,u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=h,n.__reactInternalMemoizedMaskedChildContext=p),i}function Bp(n,i,o,u){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(o,u),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(o,u),i.state!==n&&Hl.enqueueReplaceState(i,i.state,null)}function dh(n,i,o,u){var h=n.stateNode;h.props=o,h.state=n.memoizedState,h.refs={},Yc(n);var p=i.contextType;typeof p=="object"&&p!==null?h.context=pn(p):(p=Wt(i)?bi:Rt.current,h.context=zs(n,p)),h.state=n.memoizedState,p=i.getDerivedStateFromProps,typeof p=="function"&&(hh(n,i,p,o),h.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(i=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),i!==h.state&&Hl.enqueueReplaceState(h,h.state,null),Ml(n,o,h,u),h.state=n.memoizedState),typeof h.componentDidMount=="function"&&(n.flags|=4194308)}function Xs(n,i){try{var o="",u=i;do o+=we(u),u=u.return;while(u);var h=o}catch(p){h=`
Error generating stack: `+p.message+`
`+p.stack}return{value:n,source:i,stack:h,digest:null}}function fh(n,i,o){return{value:n,source:null,stack:o??null,digest:i??null}}function ph(n,i){try{console.error(i.value)}catch(o){setTimeout(function(){throw o})}}var Ow=typeof WeakMap=="function"?WeakMap:Map;function zp(n,i,o){o=wr(-1,o),o.tag=3,o.payload={element:null};var u=i.value;return o.callback=function(){Jl||(Jl=!0,Ph=u),ph(n,i)},o}function $p(n,i,o){o=wr(-1,o),o.tag=3;var u=n.type.getDerivedStateFromError;if(typeof u=="function"){var h=i.value;o.payload=function(){return u(h)},o.callback=function(){ph(n,i)}}var p=n.stateNode;return p!==null&&typeof p.componentDidCatch=="function"&&(o.callback=function(){ph(n,i),typeof u!="function"&&(Zr===null?Zr=new Set([this]):Zr.add(this));var v=i.stack;this.componentDidCatch(i.value,{componentStack:v!==null?v:""})}),o}function Hp(n,i,o){var u=n.pingCache;if(u===null){u=n.pingCache=new Ow;var h=new Set;u.set(i,h)}else h=u.get(i),h===void 0&&(h=new Set,u.set(i,h));h.has(o)||(h.add(o),n=Kw.bind(null,n,i,o),i.then(n,n))}function Wp(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function qp(n,i,o,u,h){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(i=wr(-1,1),i.tag=2,Jr(o,i,1))),o.lanes|=1),n):(n.flags|=65536,n.lanes=h,n)}var Vw=_e.ReactCurrentOwner,qt=!1;function jt(n,i,o,u){i.child=n===null?dp(i,null,o,u):qs(i,n.child,o,u)}function Kp(n,i,o,u,h){o=o.render;var p=i.ref;return Gs(i,h),u=sh(n,i,o,u,p,h),o=oh(),n!==null&&!qt?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~h,Er(n,i,h)):(He&&o&&zc(i),i.flags|=1,jt(n,i,u,h),i.child)}function Gp(n,i,o,u,h){if(n===null){var p=o.type;return typeof p=="function"&&!Lh(p)&&p.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(i.tag=15,i.type=p,Qp(n,i,p,u,h)):(n=ru(o.type,null,u,i,i.mode,h),n.ref=i.ref,n.return=i,i.child=n)}if(p=n.child,(n.lanes&h)===0){var v=p.memoizedProps;if(o=o.compare,o=o!==null?o:Qo,o(v,u)&&n.ref===i.ref)return Er(n,i,h)}return i.flags|=1,n=ri(p,u),n.ref=i.ref,n.return=i,i.child=n}function Qp(n,i,o,u,h){if(n!==null){var p=n.memoizedProps;if(Qo(p,u)&&n.ref===i.ref)if(qt=!1,i.pendingProps=u=p,(n.lanes&h)!==0)(n.flags&131072)!==0&&(qt=!0);else return i.lanes=n.lanes,Er(n,i,h)}return mh(n,i,o,u,h)}function Xp(n,i,o){var u=i.pendingProps,h=u.children,p=n!==null?n.memoizedState:null;if(u.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ue(Ys,on),on|=o;else{if((o&1073741824)===0)return n=p!==null?p.baseLanes|o:o,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,Ue(Ys,on),on|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},u=p!==null?p.baseLanes:o,Ue(Ys,on),on|=u}else p!==null?(u=p.baseLanes|o,i.memoizedState=null):u=o,Ue(Ys,on),on|=u;return jt(n,i,h,o),i.child}function Jp(n,i){var o=i.ref;(n===null&&o!==null||n!==null&&n.ref!==o)&&(i.flags|=512,i.flags|=2097152)}function mh(n,i,o,u,h){var p=Wt(o)?bi:Rt.current;return p=zs(i,p),Gs(i,h),o=sh(n,i,o,u,p,h),u=oh(),n!==null&&!qt?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~h,Er(n,i,h)):(He&&u&&zc(i),i.flags|=1,jt(n,i,o,h),i.child)}function Yp(n,i,o,u,h){if(Wt(o)){var p=!0;Rl(i)}else p=!1;if(Gs(i,h),i.stateNode===null)ql(n,i),jp(i,o,u),dh(i,o,u,h),u=!0;else if(n===null){var v=i.stateNode,E=i.memoizedProps;v.props=E;var k=v.context,F=o.contextType;typeof F=="object"&&F!==null?F=pn(F):(F=Wt(o)?bi:Rt.current,F=zs(i,F));var W=o.getDerivedStateFromProps,q=typeof W=="function"||typeof v.getSnapshotBeforeUpdate=="function";q||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(E!==u||k!==F)&&Bp(i,v,u,F),Xr=!1;var H=i.memoizedState;v.state=H,Ml(i,u,v,h),k=i.memoizedState,E!==u||H!==k||Ht.current||Xr?(typeof W=="function"&&(hh(i,o,W,u),k=i.memoizedState),(E=Xr||Up(i,o,E,u,H,k,F))?(q||typeof v.UNSAFE_componentWillMount!="function"&&typeof v.componentWillMount!="function"||(typeof v.componentWillMount=="function"&&v.componentWillMount(),typeof v.UNSAFE_componentWillMount=="function"&&v.UNSAFE_componentWillMount()),typeof v.componentDidMount=="function"&&(i.flags|=4194308)):(typeof v.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=u,i.memoizedState=k),v.props=u,v.state=k,v.context=F,u=E):(typeof v.componentDidMount=="function"&&(i.flags|=4194308),u=!1)}else{v=i.stateNode,pp(n,i),E=i.memoizedProps,F=i.type===i.elementType?E:Nn(i.type,E),v.props=F,q=i.pendingProps,H=v.context,k=o.contextType,typeof k=="object"&&k!==null?k=pn(k):(k=Wt(o)?bi:Rt.current,k=zs(i,k));var ee=o.getDerivedStateFromProps;(W=typeof ee=="function"||typeof v.getSnapshotBeforeUpdate=="function")||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(E!==q||H!==k)&&Bp(i,v,u,k),Xr=!1,H=i.memoizedState,v.state=H,Ml(i,u,v,h);var re=i.memoizedState;E!==q||H!==re||Ht.current||Xr?(typeof ee=="function"&&(hh(i,o,ee,u),re=i.memoizedState),(F=Xr||Up(i,o,F,u,H,re,k)||!1)?(W||typeof v.UNSAFE_componentWillUpdate!="function"&&typeof v.componentWillUpdate!="function"||(typeof v.componentWillUpdate=="function"&&v.componentWillUpdate(u,re,k),typeof v.UNSAFE_componentWillUpdate=="function"&&v.UNSAFE_componentWillUpdate(u,re,k)),typeof v.componentDidUpdate=="function"&&(i.flags|=4),typeof v.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof v.componentDidUpdate!="function"||E===n.memoizedProps&&H===n.memoizedState||(i.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||E===n.memoizedProps&&H===n.memoizedState||(i.flags|=1024),i.memoizedProps=u,i.memoizedState=re),v.props=u,v.state=re,v.context=k,u=F):(typeof v.componentDidUpdate!="function"||E===n.memoizedProps&&H===n.memoizedState||(i.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||E===n.memoizedProps&&H===n.memoizedState||(i.flags|=1024),u=!1)}return gh(n,i,o,u,p,h)}function gh(n,i,o,u,h,p){Jp(n,i);var v=(i.flags&128)!==0;if(!u&&!v)return h&&rp(i,o,!1),Er(n,i,p);u=i.stateNode,Vw.current=i;var E=v&&typeof o.getDerivedStateFromError!="function"?null:u.render();return i.flags|=1,n!==null&&v?(i.child=qs(i,n.child,null,p),i.child=qs(i,null,E,p)):jt(n,i,E,p),i.memoizedState=u.state,h&&rp(i,o,!0),i.child}function Zp(n){var i=n.stateNode;i.pendingContext?tp(n,i.pendingContext,i.pendingContext!==i.context):i.context&&tp(n,i.context,!1),Zc(n,i.containerInfo)}function em(n,i,o,u,h){return Ws(),qc(h),i.flags|=256,jt(n,i,o,u),i.child}var yh={dehydrated:null,treeContext:null,retryLane:0};function vh(n){return{baseLanes:n,cachePool:null,transitions:null}}function tm(n,i,o){var u=i.pendingProps,h=Ke.current,p=!1,v=(i.flags&128)!==0,E;if((E=v)||(E=n!==null&&n.memoizedState===null?!1:(h&2)!==0),E?(p=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(h|=1),Ue(Ke,h&1),n===null)return Wc(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(v=u.children,n=u.fallback,p?(u=i.mode,p=i.child,v={mode:"hidden",children:v},(u&1)===0&&p!==null?(p.childLanes=0,p.pendingProps=v):p=iu(v,u,0,null),n=Wi(n,u,o,null),p.return=i,n.return=i,p.sibling=n,i.child=p,i.child.memoizedState=vh(o),i.memoizedState=yh,n):_h(i,v));if(h=n.memoizedState,h!==null&&(E=h.dehydrated,E!==null))return bw(n,i,v,u,E,h,o);if(p){p=u.fallback,v=i.mode,h=n.child,E=h.sibling;var k={mode:"hidden",children:u.children};return(v&1)===0&&i.child!==h?(u=i.child,u.childLanes=0,u.pendingProps=k,i.deletions=null):(u=ri(h,k),u.subtreeFlags=h.subtreeFlags&14680064),E!==null?p=ri(E,p):(p=Wi(p,v,o,null),p.flags|=2),p.return=i,u.return=i,u.sibling=p,i.child=u,u=p,p=i.child,v=n.child.memoizedState,v=v===null?vh(o):{baseLanes:v.baseLanes|o,cachePool:null,transitions:v.transitions},p.memoizedState=v,p.childLanes=n.childLanes&~o,i.memoizedState=yh,u}return p=n.child,n=p.sibling,u=ri(p,{mode:"visible",children:u.children}),(i.mode&1)===0&&(u.lanes=o),u.return=i,u.sibling=null,n!==null&&(o=i.deletions,o===null?(i.deletions=[n],i.flags|=16):o.push(n)),i.child=u,i.memoizedState=null,u}function _h(n,i){return i=iu({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function Wl(n,i,o,u){return u!==null&&qc(u),qs(i,n.child,null,o),n=_h(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function bw(n,i,o,u,h,p,v){if(o)return i.flags&256?(i.flags&=-257,u=fh(Error(t(422))),Wl(n,i,v,u)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(p=u.fallback,h=i.mode,u=iu({mode:"visible",children:u.children},h,0,null),p=Wi(p,h,v,null),p.flags|=2,u.return=i,p.return=i,u.sibling=p,i.child=u,(i.mode&1)!==0&&qs(i,n.child,null,v),i.child.memoizedState=vh(v),i.memoizedState=yh,p);if((i.mode&1)===0)return Wl(n,i,v,null);if(h.data==="$!"){if(u=h.nextSibling&&h.nextSibling.dataset,u)var E=u.dgst;return u=E,p=Error(t(419)),u=fh(p,u,void 0),Wl(n,i,v,u)}if(E=(v&n.childLanes)!==0,qt||E){if(u=pt,u!==null){switch(v&-v){case 4:h=2;break;case 16:h=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:h=32;break;case 536870912:h=268435456;break;default:h=0}h=(h&(u.suspendedLanes|v))!==0?0:h,h!==0&&h!==p.retryLane&&(p.retryLane=h,_r(n,h),On(u,n,h,-1))}return bh(),u=fh(Error(t(421))),Wl(n,i,v,u)}return h.data==="$?"?(i.flags|=128,i.child=n.child,i=Gw.bind(null,n),h._reactRetry=i,null):(n=p.treeContext,sn=qr(h.nextSibling),rn=i,He=!0,Pn=null,n!==null&&(dn[fn++]=yr,dn[fn++]=vr,dn[fn++]=Li,yr=n.id,vr=n.overflow,Li=i),i=_h(i,u.children),i.flags|=4096,i)}function nm(n,i,o){n.lanes|=i;var u=n.alternate;u!==null&&(u.lanes|=i),Xc(n.return,i,o)}function wh(n,i,o,u,h){var p=n.memoizedState;p===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:u,tail:o,tailMode:h}:(p.isBackwards=i,p.rendering=null,p.renderingStartTime=0,p.last=u,p.tail=o,p.tailMode=h)}function rm(n,i,o){var u=i.pendingProps,h=u.revealOrder,p=u.tail;if(jt(n,i,u.children,o),u=Ke.current,(u&2)!==0)u=u&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&nm(n,o,i);else if(n.tag===19)nm(n,o,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}u&=1}if(Ue(Ke,u),(i.mode&1)===0)i.memoizedState=null;else switch(h){case"forwards":for(o=i.child,h=null;o!==null;)n=o.alternate,n!==null&&Fl(n)===null&&(h=o),o=o.sibling;o=h,o===null?(h=i.child,i.child=null):(h=o.sibling,o.sibling=null),wh(i,!1,h,o,p);break;case"backwards":for(o=null,h=i.child,i.child=null;h!==null;){if(n=h.alternate,n!==null&&Fl(n)===null){i.child=h;break}n=h.sibling,h.sibling=o,o=h,h=n}wh(i,!0,o,null,p);break;case"together":wh(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function ql(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function Er(n,i,o){if(n!==null&&(i.dependencies=n.dependencies),Bi|=i.lanes,(o&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,o=ri(n,n.pendingProps),i.child=o,o.return=i;n.sibling!==null;)n=n.sibling,o=o.sibling=ri(n,n.pendingProps),o.return=i;o.sibling=null}return i.child}function Lw(n,i,o){switch(i.tag){case 3:Zp(i),Ws();break;case 5:yp(i);break;case 1:Wt(i.type)&&Rl(i);break;case 4:Zc(i,i.stateNode.containerInfo);break;case 10:var u=i.type._context,h=i.memoizedProps.value;Ue(Vl,u._currentValue),u._currentValue=h;break;case 13:if(u=i.memoizedState,u!==null)return u.dehydrated!==null?(Ue(Ke,Ke.current&1),i.flags|=128,null):(o&i.child.childLanes)!==0?tm(n,i,o):(Ue(Ke,Ke.current&1),n=Er(n,i,o),n!==null?n.sibling:null);Ue(Ke,Ke.current&1);break;case 19:if(u=(o&i.childLanes)!==0,(n.flags&128)!==0){if(u)return rm(n,i,o);i.flags|=128}if(h=i.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),Ue(Ke,Ke.current),u)break;return null;case 22:case 23:return i.lanes=0,Xp(n,i,o)}return Er(n,i,o)}var im,Eh,sm,om;im=function(n,i){for(var o=i.child;o!==null;){if(o.tag===5||o.tag===6)n.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},Eh=function(){},sm=function(n,i,o,u){var h=n.memoizedProps;if(h!==u){n=i.stateNode,Ui(Qn.current);var p=null;switch(o){case"input":h=vi(n,h),u=vi(n,u),p=[];break;case"select":h=te({},h,{value:void 0}),u=te({},u,{value:void 0}),p=[];break;case"textarea":h=So(n,h),u=So(n,u),p=[];break;default:typeof h.onClick!="function"&&typeof u.onClick=="function"&&(n.onclick=Al)}No(o,u);var v;o=null;for(F in h)if(!u.hasOwnProperty(F)&&h.hasOwnProperty(F)&&h[F]!=null)if(F==="style"){var E=h[F];for(v in E)E.hasOwnProperty(v)&&(o||(o={}),o[v]="")}else F!=="dangerouslySetInnerHTML"&&F!=="children"&&F!=="suppressContentEditableWarning"&&F!=="suppressHydrationWarning"&&F!=="autoFocus"&&(a.hasOwnProperty(F)?p||(p=[]):(p=p||[]).push(F,null));for(F in u){var k=u[F];if(E=h?.[F],u.hasOwnProperty(F)&&k!==E&&(k!=null||E!=null))if(F==="style")if(E){for(v in E)!E.hasOwnProperty(v)||k&&k.hasOwnProperty(v)||(o||(o={}),o[v]="");for(v in k)k.hasOwnProperty(v)&&E[v]!==k[v]&&(o||(o={}),o[v]=k[v])}else o||(p||(p=[]),p.push(F,o)),o=k;else F==="dangerouslySetInnerHTML"?(k=k?k.__html:void 0,E=E?E.__html:void 0,k!=null&&E!==k&&(p=p||[]).push(F,k)):F==="children"?typeof k!="string"&&typeof k!="number"||(p=p||[]).push(F,""+k):F!=="suppressContentEditableWarning"&&F!=="suppressHydrationWarning"&&(a.hasOwnProperty(F)?(k!=null&&F==="onScroll"&&Be("scroll",n),p||E===k||(p=[])):(p=p||[]).push(F,k))}o&&(p=p||[]).push("style",o);var F=p;(i.updateQueue=F)&&(i.flags|=4)}},om=function(n,i,o,u){o!==u&&(i.flags|=4)};function ca(n,i){if(!He)switch(n.tailMode){case"hidden":i=n.tail;for(var o=null;i!==null;)i.alternate!==null&&(o=i),i=i.sibling;o===null?n.tail=null:o.sibling=null;break;case"collapsed":o=n.tail;for(var u=null;o!==null;)o.alternate!==null&&(u=o),o=o.sibling;u===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:u.sibling=null}}function Nt(n){var i=n.alternate!==null&&n.alternate.child===n.child,o=0,u=0;if(i)for(var h=n.child;h!==null;)o|=h.lanes|h.childLanes,u|=h.subtreeFlags&14680064,u|=h.flags&14680064,h.return=n,h=h.sibling;else for(h=n.child;h!==null;)o|=h.lanes|h.childLanes,u|=h.subtreeFlags,u|=h.flags,h.return=n,h=h.sibling;return n.subtreeFlags|=u,n.childLanes=o,i}function Mw(n,i,o){var u=i.pendingProps;switch($c(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Nt(i),null;case 1:return Wt(i.type)&&Cl(),Nt(i),null;case 3:return u=i.stateNode,Qs(),ze(Ht),ze(Rt),nh(),u.pendingContext&&(u.context=u.pendingContext,u.pendingContext=null),(n===null||n.child===null)&&(Dl(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Pn!==null&&(Dh(Pn),Pn=null))),Eh(n,i),Nt(i),null;case 5:eh(i);var h=Ui(sa.current);if(o=i.type,n!==null&&i.stateNode!=null)sm(n,i,o,u,h),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!u){if(i.stateNode===null)throw Error(t(166));return Nt(i),null}if(n=Ui(Qn.current),Dl(i)){u=i.stateNode,o=i.type;var p=i.memoizedProps;switch(u[Gn]=i,u[ea]=p,n=(i.mode&1)!==0,o){case"dialog":Be("cancel",u),Be("close",u);break;case"iframe":case"object":case"embed":Be("load",u);break;case"video":case"audio":for(h=0;h<Jo.length;h++)Be(Jo[h],u);break;case"source":Be("error",u);break;case"img":case"image":case"link":Be("error",u),Be("load",u);break;case"details":Be("toggle",u);break;case"input":cs(u,p),Be("invalid",u);break;case"select":u._wrapperState={wasMultiple:!!p.multiple},Be("invalid",u);break;case"textarea":ds(u,p),Be("invalid",u)}No(o,p),h=null;for(var v in p)if(p.hasOwnProperty(v)){var E=p[v];v==="children"?typeof E=="string"?u.textContent!==E&&(p.suppressHydrationWarning!==!0&&Sl(u.textContent,E,n),h=["children",E]):typeof E=="number"&&u.textContent!==""+E&&(p.suppressHydrationWarning!==!0&&Sl(u.textContent,E,n),h=["children",""+E]):a.hasOwnProperty(v)&&E!=null&&v==="onScroll"&&Be("scroll",u)}switch(o){case"input":sr(u),Xa(u,p,!0);break;case"textarea":sr(u),Ao(u);break;case"select":case"option":break;default:typeof p.onClick=="function"&&(u.onclick=Al)}u=h,i.updateQueue=u,u!==null&&(i.flags|=4)}else{v=h.nodeType===9?h:h.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=ot(o)),n==="http://www.w3.org/1999/xhtml"?o==="script"?(n=v.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof u.is=="string"?n=v.createElement(o,{is:u.is}):(n=v.createElement(o),o==="select"&&(v=n,u.multiple?v.multiple=!0:u.size&&(v.size=u.size))):n=v.createElementNS(n,o),n[Gn]=i,n[ea]=u,im(n,i,!1,!1),i.stateNode=n;e:{switch(v=xo(o,u),o){case"dialog":Be("cancel",n),Be("close",n),h=u;break;case"iframe":case"object":case"embed":Be("load",n),h=u;break;case"video":case"audio":for(h=0;h<Jo.length;h++)Be(Jo[h],n);h=u;break;case"source":Be("error",n),h=u;break;case"img":case"image":case"link":Be("error",n),Be("load",n),h=u;break;case"details":Be("toggle",n),h=u;break;case"input":cs(n,u),h=vi(n,u),Be("invalid",n);break;case"option":h=u;break;case"select":n._wrapperState={wasMultiple:!!u.multiple},h=te({},u,{value:void 0}),Be("invalid",n);break;case"textarea":ds(n,u),h=So(n,u),Be("invalid",n);break;default:h=u}No(o,h),E=h;for(p in E)if(E.hasOwnProperty(p)){var k=E[p];p==="style"?Ro(n,k):p==="dangerouslySetInnerHTML"?(k=k?k.__html:void 0,k!=null&&ko(n,k)):p==="children"?typeof k=="string"?(o!=="textarea"||k!=="")&&br(n,k):typeof k=="number"&&br(n,""+k):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(a.hasOwnProperty(p)?k!=null&&p==="onScroll"&&Be("scroll",n):k!=null&&me(n,p,k,v))}switch(o){case"input":sr(n),Xa(n,u,!1);break;case"textarea":sr(n),Ao(n);break;case"option":u.value!=null&&n.setAttribute("value",""+Oe(u.value));break;case"select":n.multiple=!!u.multiple,p=u.value,p!=null?ar(n,!!u.multiple,p,!1):u.defaultValue!=null&&ar(n,!!u.multiple,u.defaultValue,!0);break;default:typeof h.onClick=="function"&&(n.onclick=Al)}switch(o){case"button":case"input":case"select":case"textarea":u=!!u.autoFocus;break e;case"img":u=!0;break e;default:u=!1}}u&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return Nt(i),null;case 6:if(n&&i.stateNode!=null)om(n,i,n.memoizedProps,u);else{if(typeof u!="string"&&i.stateNode===null)throw Error(t(166));if(o=Ui(sa.current),Ui(Qn.current),Dl(i)){if(u=i.stateNode,o=i.memoizedProps,u[Gn]=i,(p=u.nodeValue!==o)&&(n=rn,n!==null))switch(n.tag){case 3:Sl(u.nodeValue,o,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Sl(u.nodeValue,o,(n.mode&1)!==0)}p&&(i.flags|=4)}else u=(o.nodeType===9?o:o.ownerDocument).createTextNode(u),u[Gn]=i,i.stateNode=u}return Nt(i),null;case 13:if(ze(Ke),u=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(He&&sn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)up(),Ws(),i.flags|=98560,p=!1;else if(p=Dl(i),u!==null&&u.dehydrated!==null){if(n===null){if(!p)throw Error(t(318));if(p=i.memoizedState,p=p!==null?p.dehydrated:null,!p)throw Error(t(317));p[Gn]=i}else Ws(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Nt(i),p=!1}else Pn!==null&&(Dh(Pn),Pn=null),p=!0;if(!p)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=o,i):(u=u!==null,u!==(n!==null&&n.memoizedState!==null)&&u&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||(Ke.current&1)!==0?ct===0&&(ct=3):bh())),i.updateQueue!==null&&(i.flags|=4),Nt(i),null);case 4:return Qs(),Eh(n,i),n===null&&Yo(i.stateNode.containerInfo),Nt(i),null;case 10:return Qc(i.type._context),Nt(i),null;case 17:return Wt(i.type)&&Cl(),Nt(i),null;case 19:if(ze(Ke),p=i.memoizedState,p===null)return Nt(i),null;if(u=(i.flags&128)!==0,v=p.rendering,v===null)if(u)ca(p,!1);else{if(ct!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(v=Fl(n),v!==null){for(i.flags|=128,ca(p,!1),u=v.updateQueue,u!==null&&(i.updateQueue=u,i.flags|=4),i.subtreeFlags=0,u=o,o=i.child;o!==null;)p=o,n=u,p.flags&=14680066,v=p.alternate,v===null?(p.childLanes=0,p.lanes=n,p.child=null,p.subtreeFlags=0,p.memoizedProps=null,p.memoizedState=null,p.updateQueue=null,p.dependencies=null,p.stateNode=null):(p.childLanes=v.childLanes,p.lanes=v.lanes,p.child=v.child,p.subtreeFlags=0,p.deletions=null,p.memoizedProps=v.memoizedProps,p.memoizedState=v.memoizedState,p.updateQueue=v.updateQueue,p.type=v.type,n=v.dependencies,p.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),o=o.sibling;return Ue(Ke,Ke.current&1|2),i.child}n=n.sibling}p.tail!==null&&Fe()>Zs&&(i.flags|=128,u=!0,ca(p,!1),i.lanes=4194304)}else{if(!u)if(n=Fl(v),n!==null){if(i.flags|=128,u=!0,o=n.updateQueue,o!==null&&(i.updateQueue=o,i.flags|=4),ca(p,!0),p.tail===null&&p.tailMode==="hidden"&&!v.alternate&&!He)return Nt(i),null}else 2*Fe()-p.renderingStartTime>Zs&&o!==1073741824&&(i.flags|=128,u=!0,ca(p,!1),i.lanes=4194304);p.isBackwards?(v.sibling=i.child,i.child=v):(o=p.last,o!==null?o.sibling=v:i.child=v,p.last=v)}return p.tail!==null?(i=p.tail,p.rendering=i,p.tail=i.sibling,p.renderingStartTime=Fe(),i.sibling=null,o=Ke.current,Ue(Ke,u?o&1|2:o&1),i):(Nt(i),null);case 22:case 23:return Vh(),u=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==u&&(i.flags|=8192),u&&(i.mode&1)!==0?(on&1073741824)!==0&&(Nt(i),i.subtreeFlags&6&&(i.flags|=8192)):Nt(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function Fw(n,i){switch($c(i),i.tag){case 1:return Wt(i.type)&&Cl(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return Qs(),ze(Ht),ze(Rt),nh(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return eh(i),null;case 13:if(ze(Ke),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));Ws()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return ze(Ke),null;case 4:return Qs(),null;case 10:return Qc(i.type._context),null;case 22:case 23:return Vh(),null;case 24:return null;default:return null}}var Kl=!1,xt=!1,Uw=typeof WeakSet=="function"?WeakSet:Set,ne=null;function Js(n,i){var o=n.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(u){Xe(n,i,u)}else o.current=null}function Th(n,i,o){try{o()}catch(u){Xe(n,i,u)}}var am=!1;function jw(n,i){if(Vc=$r,n=Uf(),kc(n)){if("selectionStart"in n)var o={start:n.selectionStart,end:n.selectionEnd};else e:{o=(o=n.ownerDocument)&&o.defaultView||window;var u=o.getSelection&&o.getSelection();if(u&&u.rangeCount!==0){o=u.anchorNode;var h=u.anchorOffset,p=u.focusNode;u=u.focusOffset;try{o.nodeType,p.nodeType}catch{o=null;break e}var v=0,E=-1,k=-1,F=0,W=0,q=n,H=null;t:for(;;){for(var ee;q!==o||h!==0&&q.nodeType!==3||(E=v+h),q!==p||u!==0&&q.nodeType!==3||(k=v+u),q.nodeType===3&&(v+=q.nodeValue.length),(ee=q.firstChild)!==null;)H=q,q=ee;for(;;){if(q===n)break t;if(H===o&&++F===h&&(E=v),H===p&&++W===u&&(k=v),(ee=q.nextSibling)!==null)break;q=H,H=q.parentNode}q=ee}o=E===-1||k===-1?null:{start:E,end:k}}else o=null}o=o||{start:0,end:0}}else o=null;for(bc={focusedElem:n,selectionRange:o},$r=!1,ne=i;ne!==null;)if(i=ne,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,ne=n;else for(;ne!==null;){i=ne;try{var re=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(re!==null){var ie=re.memoizedProps,et=re.memoizedState,L=i.stateNode,R=L.getSnapshotBeforeUpdate(i.elementType===i.type?ie:Nn(i.type,ie),et);L.__reactInternalSnapshotBeforeUpdate=R}break;case 3:var M=i.stateNode.containerInfo;M.nodeType===1?M.textContent="":M.nodeType===9&&M.documentElement&&M.removeChild(M.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(G){Xe(i,i.return,G)}if(n=i.sibling,n!==null){n.return=i.return,ne=n;break}ne=i.return}return re=am,am=!1,re}function ha(n,i,o){var u=i.updateQueue;if(u=u!==null?u.lastEffect:null,u!==null){var h=u=u.next;do{if((h.tag&n)===n){var p=h.destroy;h.destroy=void 0,p!==void 0&&Th(i,o,p)}h=h.next}while(h!==u)}}function Gl(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var o=i=i.next;do{if((o.tag&n)===n){var u=o.create;o.destroy=u()}o=o.next}while(o!==i)}}function Ih(n){var i=n.ref;if(i!==null){var o=n.stateNode;switch(n.tag){case 5:n=o;break;default:n=o}typeof i=="function"?i(n):i.current=n}}function lm(n){var i=n.alternate;i!==null&&(n.alternate=null,lm(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[Gn],delete i[ea],delete i[Uc],delete i[Tw],delete i[Iw])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function um(n){return n.tag===5||n.tag===3||n.tag===4}function cm(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||um(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Sh(n,i,o){var u=n.tag;if(u===5||u===6)n=n.stateNode,i?o.nodeType===8?o.parentNode.insertBefore(n,i):o.insertBefore(n,i):(o.nodeType===8?(i=o.parentNode,i.insertBefore(n,o)):(i=o,i.appendChild(n)),o=o._reactRootContainer,o!=null||i.onclick!==null||(i.onclick=Al));else if(u!==4&&(n=n.child,n!==null))for(Sh(n,i,o),n=n.sibling;n!==null;)Sh(n,i,o),n=n.sibling}function Ah(n,i,o){var u=n.tag;if(u===5||u===6)n=n.stateNode,i?o.insertBefore(n,i):o.appendChild(n);else if(u!==4&&(n=n.child,n!==null))for(Ah(n,i,o),n=n.sibling;n!==null;)Ah(n,i,o),n=n.sibling}var wt=null,xn=!1;function Yr(n,i,o){for(o=o.child;o!==null;)hm(n,i,o),o=o.sibling}function hm(n,i,o){if(Zt&&typeof Zt.onCommitFiberUnmount=="function")try{Zt.onCommitFiberUnmount(Ci,o)}catch{}switch(o.tag){case 5:xt||Js(o,i);case 6:var u=wt,h=xn;wt=null,Yr(n,i,o),wt=u,xn=h,wt!==null&&(xn?(n=wt,o=o.stateNode,n.nodeType===8?n.parentNode.removeChild(o):n.removeChild(o)):wt.removeChild(o.stateNode));break;case 18:wt!==null&&(xn?(n=wt,o=o.stateNode,n.nodeType===8?Fc(n.parentNode,o):n.nodeType===1&&Fc(n,o),kn(n)):Fc(wt,o.stateNode));break;case 4:u=wt,h=xn,wt=o.stateNode.containerInfo,xn=!0,Yr(n,i,o),wt=u,xn=h;break;case 0:case 11:case 14:case 15:if(!xt&&(u=o.updateQueue,u!==null&&(u=u.lastEffect,u!==null))){h=u=u.next;do{var p=h,v=p.destroy;p=p.tag,v!==void 0&&((p&2)!==0||(p&4)!==0)&&Th(o,i,v),h=h.next}while(h!==u)}Yr(n,i,o);break;case 1:if(!xt&&(Js(o,i),u=o.stateNode,typeof u.componentWillUnmount=="function"))try{u.props=o.memoizedProps,u.state=o.memoizedState,u.componentWillUnmount()}catch(E){Xe(o,i,E)}Yr(n,i,o);break;case 21:Yr(n,i,o);break;case 22:o.mode&1?(xt=(u=xt)||o.memoizedState!==null,Yr(n,i,o),xt=u):Yr(n,i,o);break;default:Yr(n,i,o)}}function dm(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var o=n.stateNode;o===null&&(o=n.stateNode=new Uw),i.forEach(function(u){var h=Qw.bind(null,n,u);o.has(u)||(o.add(u),u.then(h,h))})}}function Dn(n,i){var o=i.deletions;if(o!==null)for(var u=0;u<o.length;u++){var h=o[u];try{var p=n,v=i,E=v;e:for(;E!==null;){switch(E.tag){case 5:wt=E.stateNode,xn=!1;break e;case 3:wt=E.stateNode.containerInfo,xn=!0;break e;case 4:wt=E.stateNode.containerInfo,xn=!0;break e}E=E.return}if(wt===null)throw Error(t(160));hm(p,v,h),wt=null,xn=!1;var k=h.alternate;k!==null&&(k.return=null),h.return=null}catch(F){Xe(h,i,F)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)fm(i,n),i=i.sibling}function fm(n,i){var o=n.alternate,u=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Dn(i,n),Jn(n),u&4){try{ha(3,n,n.return),Gl(3,n)}catch(ie){Xe(n,n.return,ie)}try{ha(5,n,n.return)}catch(ie){Xe(n,n.return,ie)}}break;case 1:Dn(i,n),Jn(n),u&512&&o!==null&&Js(o,o.return);break;case 5:if(Dn(i,n),Jn(n),u&512&&o!==null&&Js(o,o.return),n.flags&32){var h=n.stateNode;try{br(h,"")}catch(ie){Xe(n,n.return,ie)}}if(u&4&&(h=n.stateNode,h!=null)){var p=n.memoizedProps,v=o!==null?o.memoizedProps:p,E=n.type,k=n.updateQueue;if(n.updateQueue=null,k!==null)try{E==="input"&&p.type==="radio"&&p.name!=null&&To(h,p),xo(E,v);var F=xo(E,p);for(v=0;v<k.length;v+=2){var W=k[v],q=k[v+1];W==="style"?Ro(h,q):W==="dangerouslySetInnerHTML"?ko(h,q):W==="children"?br(h,q):me(h,W,q,F)}switch(E){case"input":Io(h,p);break;case"textarea":fs(h,p);break;case"select":var H=h._wrapperState.wasMultiple;h._wrapperState.wasMultiple=!!p.multiple;var ee=p.value;ee!=null?ar(h,!!p.multiple,ee,!1):H!==!!p.multiple&&(p.defaultValue!=null?ar(h,!!p.multiple,p.defaultValue,!0):ar(h,!!p.multiple,p.multiple?[]:"",!1))}h[ea]=p}catch(ie){Xe(n,n.return,ie)}}break;case 6:if(Dn(i,n),Jn(n),u&4){if(n.stateNode===null)throw Error(t(162));h=n.stateNode,p=n.memoizedProps;try{h.nodeValue=p}catch(ie){Xe(n,n.return,ie)}}break;case 3:if(Dn(i,n),Jn(n),u&4&&o!==null&&o.memoizedState.isDehydrated)try{kn(i.containerInfo)}catch(ie){Xe(n,n.return,ie)}break;case 4:Dn(i,n),Jn(n);break;case 13:Dn(i,n),Jn(n),h=n.child,h.flags&8192&&(p=h.memoizedState!==null,h.stateNode.isHidden=p,!p||h.alternate!==null&&h.alternate.memoizedState!==null||(Rh=Fe())),u&4&&dm(n);break;case 22:if(W=o!==null&&o.memoizedState!==null,n.mode&1?(xt=(F=xt)||W,Dn(i,n),xt=F):Dn(i,n),Jn(n),u&8192){if(F=n.memoizedState!==null,(n.stateNode.isHidden=F)&&!W&&(n.mode&1)!==0)for(ne=n,W=n.child;W!==null;){for(q=ne=W;ne!==null;){switch(H=ne,ee=H.child,H.tag){case 0:case 11:case 14:case 15:ha(4,H,H.return);break;case 1:Js(H,H.return);var re=H.stateNode;if(typeof re.componentWillUnmount=="function"){u=H,o=H.return;try{i=u,re.props=i.memoizedProps,re.state=i.memoizedState,re.componentWillUnmount()}catch(ie){Xe(u,o,ie)}}break;case 5:Js(H,H.return);break;case 22:if(H.memoizedState!==null){gm(q);continue}}ee!==null?(ee.return=H,ne=ee):gm(q)}W=W.sibling}e:for(W=null,q=n;;){if(q.tag===5){if(W===null){W=q;try{h=q.stateNode,F?(p=h.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none"):(E=q.stateNode,k=q.memoizedProps.style,v=k!=null&&k.hasOwnProperty("display")?k.display:null,E.style.display=Co("display",v))}catch(ie){Xe(n,n.return,ie)}}}else if(q.tag===6){if(W===null)try{q.stateNode.nodeValue=F?"":q.memoizedProps}catch(ie){Xe(n,n.return,ie)}}else if((q.tag!==22&&q.tag!==23||q.memoizedState===null||q===n)&&q.child!==null){q.child.return=q,q=q.child;continue}if(q===n)break e;for(;q.sibling===null;){if(q.return===null||q.return===n)break e;W===q&&(W=null),q=q.return}W===q&&(W=null),q.sibling.return=q.return,q=q.sibling}}break;case 19:Dn(i,n),Jn(n),u&4&&dm(n);break;case 21:break;default:Dn(i,n),Jn(n)}}function Jn(n){var i=n.flags;if(i&2){try{e:{for(var o=n.return;o!==null;){if(um(o)){var u=o;break e}o=o.return}throw Error(t(160))}switch(u.tag){case 5:var h=u.stateNode;u.flags&32&&(br(h,""),u.flags&=-33);var p=cm(n);Ah(n,p,h);break;case 3:case 4:var v=u.stateNode.containerInfo,E=cm(n);Sh(n,E,v);break;default:throw Error(t(161))}}catch(k){Xe(n,n.return,k)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function Bw(n,i,o){ne=n,pm(n)}function pm(n,i,o){for(var u=(n.mode&1)!==0;ne!==null;){var h=ne,p=h.child;if(h.tag===22&&u){var v=h.memoizedState!==null||Kl;if(!v){var E=h.alternate,k=E!==null&&E.memoizedState!==null||xt;E=Kl;var F=xt;if(Kl=v,(xt=k)&&!F)for(ne=h;ne!==null;)v=ne,k=v.child,v.tag===22&&v.memoizedState!==null?ym(h):k!==null?(k.return=v,ne=k):ym(h);for(;p!==null;)ne=p,pm(p),p=p.sibling;ne=h,Kl=E,xt=F}mm(n)}else(h.subtreeFlags&8772)!==0&&p!==null?(p.return=h,ne=p):mm(n)}}function mm(n){for(;ne!==null;){var i=ne;if((i.flags&8772)!==0){var o=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:xt||Gl(5,i);break;case 1:var u=i.stateNode;if(i.flags&4&&!xt)if(o===null)u.componentDidMount();else{var h=i.elementType===i.type?o.memoizedProps:Nn(i.type,o.memoizedProps);u.componentDidUpdate(h,o.memoizedState,u.__reactInternalSnapshotBeforeUpdate)}var p=i.updateQueue;p!==null&&gp(i,p,u);break;case 3:var v=i.updateQueue;if(v!==null){if(o=null,i.child!==null)switch(i.child.tag){case 5:o=i.child.stateNode;break;case 1:o=i.child.stateNode}gp(i,v,o)}break;case 5:var E=i.stateNode;if(o===null&&i.flags&4){o=E;var k=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":k.autoFocus&&o.focus();break;case"img":k.src&&(o.src=k.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var F=i.alternate;if(F!==null){var W=F.memoizedState;if(W!==null){var q=W.dehydrated;q!==null&&kn(q)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}xt||i.flags&512&&Ih(i)}catch(H){Xe(i,i.return,H)}}if(i===n){ne=null;break}if(o=i.sibling,o!==null){o.return=i.return,ne=o;break}ne=i.return}}function gm(n){for(;ne!==null;){var i=ne;if(i===n){ne=null;break}var o=i.sibling;if(o!==null){o.return=i.return,ne=o;break}ne=i.return}}function ym(n){for(;ne!==null;){var i=ne;try{switch(i.tag){case 0:case 11:case 15:var o=i.return;try{Gl(4,i)}catch(k){Xe(i,o,k)}break;case 1:var u=i.stateNode;if(typeof u.componentDidMount=="function"){var h=i.return;try{u.componentDidMount()}catch(k){Xe(i,h,k)}}var p=i.return;try{Ih(i)}catch(k){Xe(i,p,k)}break;case 5:var v=i.return;try{Ih(i)}catch(k){Xe(i,v,k)}}}catch(k){Xe(i,i.return,k)}if(i===n){ne=null;break}var E=i.sibling;if(E!==null){E.return=i.return,ne=E;break}ne=i.return}}var zw=Math.ceil,Ql=_e.ReactCurrentDispatcher,kh=_e.ReactCurrentOwner,gn=_e.ReactCurrentBatchConfig,Pe=0,pt=null,rt=null,Et=0,on=0,Ys=Kr(0),ct=0,da=null,Bi=0,Xl=0,Ch=0,fa=null,Kt=null,Rh=0,Zs=1/0,Tr=null,Jl=!1,Ph=null,Zr=null,Yl=!1,ei=null,Zl=0,pa=0,Nh=null,eu=-1,tu=0;function Bt(){return(Pe&6)!==0?Fe():eu!==-1?eu:eu=Fe()}function ti(n){return(n.mode&1)===0?1:(Pe&2)!==0&&Et!==0?Et&-Et:Aw.transition!==null?(tu===0&&(tu=Pi()),tu):(n=Se,n!==0||(n=window.event,n=n===void 0?16:zo(n.type)),n)}function On(n,i,o,u){if(50<pa)throw pa=0,Nh=null,Error(t(185));Ur(n,o,u),((Pe&2)===0||n!==pt)&&(n===pt&&((Pe&2)===0&&(Xl|=o),ct===4&&ni(n,Et)),Gt(n,u),o===1&&Pe===0&&(i.mode&1)===0&&(Zs=Fe()+500,Pl&&Qr()))}function Gt(n,i){var o=n.callbackNode;cr(n,i);var u=Ri(n,n===pt?Et:0);if(u===0)o!==null&&Mo(o),n.callbackNode=null,n.callbackPriority=0;else if(i=u&-u,n.callbackPriority!==i){if(o!=null&&Mo(o),i===1)n.tag===0?Sw(_m.bind(null,n)):ip(_m.bind(null,n)),ww(function(){(Pe&6)===0&&Qr()}),o=null;else{switch(Br(u)){case 1:o=ki;break;case 4:o=Lr;break;case 16:o=un;break;case 536870912:o=tl;break;default:o=un}o=Cm(o,vm.bind(null,n))}n.callbackPriority=i,n.callbackNode=o}}function vm(n,i){if(eu=-1,tu=0,(Pe&6)!==0)throw Error(t(327));var o=n.callbackNode;if(eo()&&n.callbackNode!==o)return null;var u=Ri(n,n===pt?Et:0);if(u===0)return null;if((u&30)!==0||(u&n.expiredLanes)!==0||i)i=nu(n,u);else{i=u;var h=Pe;Pe|=2;var p=Em();(pt!==n||Et!==i)&&(Tr=null,Zs=Fe()+500,$i(n,i));do try{Ww();break}catch(E){wm(n,E)}while(!0);Gc(),Ql.current=p,Pe=h,rt!==null?i=0:(pt=null,Et=0,i=ct)}if(i!==0){if(i===2&&(h=en(n),h!==0&&(u=h,i=xh(n,h))),i===1)throw o=da,$i(n,0),ni(n,u),Gt(n,Fe()),o;if(i===6)ni(n,u);else{if(h=n.current.alternate,(u&30)===0&&!$w(h)&&(i=nu(n,u),i===2&&(p=en(n),p!==0&&(u=p,i=xh(n,p))),i===1))throw o=da,$i(n,0),ni(n,u),Gt(n,Fe()),o;switch(n.finishedWork=h,n.finishedLanes=u,i){case 0:case 1:throw Error(t(345));case 2:Hi(n,Kt,Tr);break;case 3:if(ni(n,u),(u&130023424)===u&&(i=Rh+500-Fe(),10<i)){if(Ri(n,0)!==0)break;if(h=n.suspendedLanes,(h&u)!==u){Bt(),n.pingedLanes|=n.suspendedLanes&h;break}n.timeoutHandle=Mc(Hi.bind(null,n,Kt,Tr),i);break}Hi(n,Kt,Tr);break;case 4:if(ni(n,u),(u&4194240)===u)break;for(i=n.eventTimes,h=-1;0<u;){var v=31-Ft(u);p=1<<v,v=i[v],v>h&&(h=v),u&=~p}if(u=h,u=Fe()-u,u=(120>u?120:480>u?480:1080>u?1080:1920>u?1920:3e3>u?3e3:4320>u?4320:1960*zw(u/1960))-u,10<u){n.timeoutHandle=Mc(Hi.bind(null,n,Kt,Tr),u);break}Hi(n,Kt,Tr);break;case 5:Hi(n,Kt,Tr);break;default:throw Error(t(329))}}}return Gt(n,Fe()),n.callbackNode===o?vm.bind(null,n):null}function xh(n,i){var o=fa;return n.current.memoizedState.isDehydrated&&($i(n,i).flags|=256),n=nu(n,i),n!==2&&(i=Kt,Kt=o,i!==null&&Dh(i)),n}function Dh(n){Kt===null?Kt=n:Kt.push.apply(Kt,n)}function $w(n){for(var i=n;;){if(i.flags&16384){var o=i.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var u=0;u<o.length;u++){var h=o[u],p=h.getSnapshot;h=h.value;try{if(!Rn(p(),h))return!1}catch{return!1}}}if(o=i.child,i.subtreeFlags&16384&&o!==null)o.return=i,i=o;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function ni(n,i){for(i&=~Ch,i&=~Xl,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var o=31-Ft(i),u=1<<o;n[o]=-1,i&=~u}}function _m(n){if((Pe&6)!==0)throw Error(t(327));eo();var i=Ri(n,0);if((i&1)===0)return Gt(n,Fe()),null;var o=nu(n,i);if(n.tag!==0&&o===2){var u=en(n);u!==0&&(i=u,o=xh(n,u))}if(o===1)throw o=da,$i(n,0),ni(n,i),Gt(n,Fe()),o;if(o===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,Hi(n,Kt,Tr),Gt(n,Fe()),null}function Oh(n,i){var o=Pe;Pe|=1;try{return n(i)}finally{Pe=o,Pe===0&&(Zs=Fe()+500,Pl&&Qr())}}function zi(n){ei!==null&&ei.tag===0&&(Pe&6)===0&&eo();var i=Pe;Pe|=1;var o=gn.transition,u=Se;try{if(gn.transition=null,Se=1,n)return n()}finally{Se=u,gn.transition=o,Pe=i,(Pe&6)===0&&Qr()}}function Vh(){on=Ys.current,ze(Ys)}function $i(n,i){n.finishedWork=null,n.finishedLanes=0;var o=n.timeoutHandle;if(o!==-1&&(n.timeoutHandle=-1,_w(o)),rt!==null)for(o=rt.return;o!==null;){var u=o;switch($c(u),u.tag){case 1:u=u.type.childContextTypes,u!=null&&Cl();break;case 3:Qs(),ze(Ht),ze(Rt),nh();break;case 5:eh(u);break;case 4:Qs();break;case 13:ze(Ke);break;case 19:ze(Ke);break;case 10:Qc(u.type._context);break;case 22:case 23:Vh()}o=o.return}if(pt=n,rt=n=ri(n.current,null),Et=on=i,ct=0,da=null,Ch=Xl=Bi=0,Kt=fa=null,Fi!==null){for(i=0;i<Fi.length;i++)if(o=Fi[i],u=o.interleaved,u!==null){o.interleaved=null;var h=u.next,p=o.pending;if(p!==null){var v=p.next;p.next=h,u.next=v}o.pending=u}Fi=null}return n}function wm(n,i){do{var o=rt;try{if(Gc(),Ul.current=$l,jl){for(var u=Ge.memoizedState;u!==null;){var h=u.queue;h!==null&&(h.pending=null),u=u.next}jl=!1}if(ji=0,ft=ut=Ge=null,oa=!1,aa=0,kh.current=null,o===null||o.return===null){ct=1,da=i,rt=null;break}e:{var p=n,v=o.return,E=o,k=i;if(i=Et,E.flags|=32768,k!==null&&typeof k=="object"&&typeof k.then=="function"){var F=k,W=E,q=W.tag;if((W.mode&1)===0&&(q===0||q===11||q===15)){var H=W.alternate;H?(W.updateQueue=H.updateQueue,W.memoizedState=H.memoizedState,W.lanes=H.lanes):(W.updateQueue=null,W.memoizedState=null)}var ee=Wp(v);if(ee!==null){ee.flags&=-257,qp(ee,v,E,p,i),ee.mode&1&&Hp(p,F,i),i=ee,k=F;var re=i.updateQueue;if(re===null){var ie=new Set;ie.add(k),i.updateQueue=ie}else re.add(k);break e}else{if((i&1)===0){Hp(p,F,i),bh();break e}k=Error(t(426))}}else if(He&&E.mode&1){var et=Wp(v);if(et!==null){(et.flags&65536)===0&&(et.flags|=256),qp(et,v,E,p,i),qc(Xs(k,E));break e}}p=k=Xs(k,E),ct!==4&&(ct=2),fa===null?fa=[p]:fa.push(p),p=v;do{switch(p.tag){case 3:p.flags|=65536,i&=-i,p.lanes|=i;var L=zp(p,k,i);mp(p,L);break e;case 1:E=k;var R=p.type,M=p.stateNode;if((p.flags&128)===0&&(typeof R.getDerivedStateFromError=="function"||M!==null&&typeof M.componentDidCatch=="function"&&(Zr===null||!Zr.has(M)))){p.flags|=65536,i&=-i,p.lanes|=i;var G=$p(p,E,i);mp(p,G);break e}}p=p.return}while(p!==null)}Im(o)}catch(oe){i=oe,rt===o&&o!==null&&(rt=o=o.return);continue}break}while(!0)}function Em(){var n=Ql.current;return Ql.current=$l,n===null?$l:n}function bh(){(ct===0||ct===3||ct===2)&&(ct=4),pt===null||(Bi&268435455)===0&&(Xl&268435455)===0||ni(pt,Et)}function nu(n,i){var o=Pe;Pe|=2;var u=Em();(pt!==n||Et!==i)&&(Tr=null,$i(n,i));do try{Hw();break}catch(h){wm(n,h)}while(!0);if(Gc(),Pe=o,Ql.current=u,rt!==null)throw Error(t(261));return pt=null,Et=0,ct}function Hw(){for(;rt!==null;)Tm(rt)}function Ww(){for(;rt!==null&&!Za();)Tm(rt)}function Tm(n){var i=km(n.alternate,n,on);n.memoizedProps=n.pendingProps,i===null?Im(n):rt=i,kh.current=null}function Im(n){var i=n;do{var o=i.alternate;if(n=i.return,(i.flags&32768)===0){if(o=Mw(o,i,on),o!==null){rt=o;return}}else{if(o=Fw(o,i),o!==null){o.flags&=32767,rt=o;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{ct=6,rt=null;return}}if(i=i.sibling,i!==null){rt=i;return}rt=i=n}while(i!==null);ct===0&&(ct=5)}function Hi(n,i,o){var u=Se,h=gn.transition;try{gn.transition=null,Se=1,qw(n,i,o,u)}finally{gn.transition=h,Se=u}return null}function qw(n,i,o,u){do eo();while(ei!==null);if((Pe&6)!==0)throw Error(t(327));o=n.finishedWork;var h=n.finishedLanes;if(o===null)return null;if(n.finishedWork=null,n.finishedLanes=0,o===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var p=o.lanes|o.childLanes;if(Le(n,p),n===pt&&(rt=pt=null,Et=0),(o.subtreeFlags&2064)===0&&(o.flags&2064)===0||Yl||(Yl=!0,Cm(un,function(){return eo(),null})),p=(o.flags&15990)!==0,(o.subtreeFlags&15990)!==0||p){p=gn.transition,gn.transition=null;var v=Se;Se=1;var E=Pe;Pe|=4,kh.current=null,jw(n,o),fm(o,n),dw(bc),$r=!!Vc,bc=Vc=null,n.current=o,Bw(o),vc(),Pe=E,Se=v,gn.transition=p}else n.current=o;if(Yl&&(Yl=!1,ei=n,Zl=h),p=n.pendingLanes,p===0&&(Zr=null),nl(o.stateNode),Gt(n,Fe()),i!==null)for(u=n.onRecoverableError,o=0;o<i.length;o++)h=i[o],u(h.value,{componentStack:h.stack,digest:h.digest});if(Jl)throw Jl=!1,n=Ph,Ph=null,n;return(Zl&1)!==0&&n.tag!==0&&eo(),p=n.pendingLanes,(p&1)!==0?n===Nh?pa++:(pa=0,Nh=n):pa=0,Qr(),null}function eo(){if(ei!==null){var n=Br(Zl),i=gn.transition,o=Se;try{if(gn.transition=null,Se=16>n?16:n,ei===null)var u=!1;else{if(n=ei,ei=null,Zl=0,(Pe&6)!==0)throw Error(t(331));var h=Pe;for(Pe|=4,ne=n.current;ne!==null;){var p=ne,v=p.child;if((ne.flags&16)!==0){var E=p.deletions;if(E!==null){for(var k=0;k<E.length;k++){var F=E[k];for(ne=F;ne!==null;){var W=ne;switch(W.tag){case 0:case 11:case 15:ha(8,W,p)}var q=W.child;if(q!==null)q.return=W,ne=q;else for(;ne!==null;){W=ne;var H=W.sibling,ee=W.return;if(lm(W),W===F){ne=null;break}if(H!==null){H.return=ee,ne=H;break}ne=ee}}}var re=p.alternate;if(re!==null){var ie=re.child;if(ie!==null){re.child=null;do{var et=ie.sibling;ie.sibling=null,ie=et}while(ie!==null)}}ne=p}}if((p.subtreeFlags&2064)!==0&&v!==null)v.return=p,ne=v;else e:for(;ne!==null;){if(p=ne,(p.flags&2048)!==0)switch(p.tag){case 0:case 11:case 15:ha(9,p,p.return)}var L=p.sibling;if(L!==null){L.return=p.return,ne=L;break e}ne=p.return}}var R=n.current;for(ne=R;ne!==null;){v=ne;var M=v.child;if((v.subtreeFlags&2064)!==0&&M!==null)M.return=v,ne=M;else e:for(v=R;ne!==null;){if(E=ne,(E.flags&2048)!==0)try{switch(E.tag){case 0:case 11:case 15:Gl(9,E)}}catch(oe){Xe(E,E.return,oe)}if(E===v){ne=null;break e}var G=E.sibling;if(G!==null){G.return=E.return,ne=G;break e}ne=E.return}}if(Pe=h,Qr(),Zt&&typeof Zt.onPostCommitFiberRoot=="function")try{Zt.onPostCommitFiberRoot(Ci,n)}catch{}u=!0}return u}finally{Se=o,gn.transition=i}}return!1}function Sm(n,i,o){i=Xs(o,i),i=zp(n,i,1),n=Jr(n,i,1),i=Bt(),n!==null&&(Ur(n,1,i),Gt(n,i))}function Xe(n,i,o){if(n.tag===3)Sm(n,n,o);else for(;i!==null;){if(i.tag===3){Sm(i,n,o);break}else if(i.tag===1){var u=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(Zr===null||!Zr.has(u))){n=Xs(o,n),n=$p(i,n,1),i=Jr(i,n,1),n=Bt(),i!==null&&(Ur(i,1,n),Gt(i,n));break}}i=i.return}}function Kw(n,i,o){var u=n.pingCache;u!==null&&u.delete(i),i=Bt(),n.pingedLanes|=n.suspendedLanes&o,pt===n&&(Et&o)===o&&(ct===4||ct===3&&(Et&130023424)===Et&&500>Fe()-Rh?$i(n,0):Ch|=o),Gt(n,i)}function Am(n,i){i===0&&((n.mode&1)===0?i=1:(i=Is,Is<<=1,(Is&130023424)===0&&(Is=4194304)));var o=Bt();n=_r(n,i),n!==null&&(Ur(n,i,o),Gt(n,o))}function Gw(n){var i=n.memoizedState,o=0;i!==null&&(o=i.retryLane),Am(n,o)}function Qw(n,i){var o=0;switch(n.tag){case 13:var u=n.stateNode,h=n.memoizedState;h!==null&&(o=h.retryLane);break;case 19:u=n.stateNode;break;default:throw Error(t(314))}u!==null&&u.delete(i),Am(n,o)}var km;km=function(n,i,o){if(n!==null)if(n.memoizedProps!==i.pendingProps||Ht.current)qt=!0;else{if((n.lanes&o)===0&&(i.flags&128)===0)return qt=!1,Lw(n,i,o);qt=(n.flags&131072)!==0}else qt=!1,He&&(i.flags&1048576)!==0&&sp(i,xl,i.index);switch(i.lanes=0,i.tag){case 2:var u=i.type;ql(n,i),n=i.pendingProps;var h=zs(i,Rt.current);Gs(i,o),h=sh(null,i,u,n,h,o);var p=oh();return i.flags|=1,typeof h=="object"&&h!==null&&typeof h.render=="function"&&h.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Wt(u)?(p=!0,Rl(i)):p=!1,i.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,Yc(i),h.updater=Hl,i.stateNode=h,h._reactInternals=i,dh(i,u,n,o),i=gh(null,i,u,!0,p,o)):(i.tag=0,He&&p&&zc(i),jt(null,i,h,o),i=i.child),i;case 16:u=i.elementType;e:{switch(ql(n,i),n=i.pendingProps,h=u._init,u=h(u._payload),i.type=u,h=i.tag=Jw(u),n=Nn(u,n),h){case 0:i=mh(null,i,u,n,o);break e;case 1:i=Yp(null,i,u,n,o);break e;case 11:i=Kp(null,i,u,n,o);break e;case 14:i=Gp(null,i,u,Nn(u.type,n),o);break e}throw Error(t(306,u,""))}return i;case 0:return u=i.type,h=i.pendingProps,h=i.elementType===u?h:Nn(u,h),mh(n,i,u,h,o);case 1:return u=i.type,h=i.pendingProps,h=i.elementType===u?h:Nn(u,h),Yp(n,i,u,h,o);case 3:e:{if(Zp(i),n===null)throw Error(t(387));u=i.pendingProps,p=i.memoizedState,h=p.element,pp(n,i),Ml(i,u,null,o);var v=i.memoizedState;if(u=v.element,p.isDehydrated)if(p={element:u,isDehydrated:!1,cache:v.cache,pendingSuspenseBoundaries:v.pendingSuspenseBoundaries,transitions:v.transitions},i.updateQueue.baseState=p,i.memoizedState=p,i.flags&256){h=Xs(Error(t(423)),i),i=em(n,i,u,o,h);break e}else if(u!==h){h=Xs(Error(t(424)),i),i=em(n,i,u,o,h);break e}else for(sn=qr(i.stateNode.containerInfo.firstChild),rn=i,He=!0,Pn=null,o=dp(i,null,u,o),i.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(Ws(),u===h){i=Er(n,i,o);break e}jt(n,i,u,o)}i=i.child}return i;case 5:return yp(i),n===null&&Wc(i),u=i.type,h=i.pendingProps,p=n!==null?n.memoizedProps:null,v=h.children,Lc(u,h)?v=null:p!==null&&Lc(u,p)&&(i.flags|=32),Jp(n,i),jt(n,i,v,o),i.child;case 6:return n===null&&Wc(i),null;case 13:return tm(n,i,o);case 4:return Zc(i,i.stateNode.containerInfo),u=i.pendingProps,n===null?i.child=qs(i,null,u,o):jt(n,i,u,o),i.child;case 11:return u=i.type,h=i.pendingProps,h=i.elementType===u?h:Nn(u,h),Kp(n,i,u,h,o);case 7:return jt(n,i,i.pendingProps,o),i.child;case 8:return jt(n,i,i.pendingProps.children,o),i.child;case 12:return jt(n,i,i.pendingProps.children,o),i.child;case 10:e:{if(u=i.type._context,h=i.pendingProps,p=i.memoizedProps,v=h.value,Ue(Vl,u._currentValue),u._currentValue=v,p!==null)if(Rn(p.value,v)){if(p.children===h.children&&!Ht.current){i=Er(n,i,o);break e}}else for(p=i.child,p!==null&&(p.return=i);p!==null;){var E=p.dependencies;if(E!==null){v=p.child;for(var k=E.firstContext;k!==null;){if(k.context===u){if(p.tag===1){k=wr(-1,o&-o),k.tag=2;var F=p.updateQueue;if(F!==null){F=F.shared;var W=F.pending;W===null?k.next=k:(k.next=W.next,W.next=k),F.pending=k}}p.lanes|=o,k=p.alternate,k!==null&&(k.lanes|=o),Xc(p.return,o,i),E.lanes|=o;break}k=k.next}}else if(p.tag===10)v=p.type===i.type?null:p.child;else if(p.tag===18){if(v=p.return,v===null)throw Error(t(341));v.lanes|=o,E=v.alternate,E!==null&&(E.lanes|=o),Xc(v,o,i),v=p.sibling}else v=p.child;if(v!==null)v.return=p;else for(v=p;v!==null;){if(v===i){v=null;break}if(p=v.sibling,p!==null){p.return=v.return,v=p;break}v=v.return}p=v}jt(n,i,h.children,o),i=i.child}return i;case 9:return h=i.type,u=i.pendingProps.children,Gs(i,o),h=pn(h),u=u(h),i.flags|=1,jt(n,i,u,o),i.child;case 14:return u=i.type,h=Nn(u,i.pendingProps),h=Nn(u.type,h),Gp(n,i,u,h,o);case 15:return Qp(n,i,i.type,i.pendingProps,o);case 17:return u=i.type,h=i.pendingProps,h=i.elementType===u?h:Nn(u,h),ql(n,i),i.tag=1,Wt(u)?(n=!0,Rl(i)):n=!1,Gs(i,o),jp(i,u,h),dh(i,u,h,o),gh(null,i,u,!0,n,o);case 19:return rm(n,i,o);case 22:return Xp(n,i,o)}throw Error(t(156,i.tag))};function Cm(n,i){return Es(n,i)}function Xw(n,i,o,u){this.tag=n,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function yn(n,i,o,u){return new Xw(n,i,o,u)}function Lh(n){return n=n.prototype,!(!n||!n.isReactComponent)}function Jw(n){if(typeof n=="function")return Lh(n)?1:0;if(n!=null){if(n=n.$$typeof,n===O)return 11;if(n===kt)return 14}return 2}function ri(n,i){var o=n.alternate;return o===null?(o=yn(n.tag,i,n.key,n.mode),o.elementType=n.elementType,o.type=n.type,o.stateNode=n.stateNode,o.alternate=n,n.alternate=o):(o.pendingProps=i,o.type=n.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=n.flags&14680064,o.childLanes=n.childLanes,o.lanes=n.lanes,o.child=n.child,o.memoizedProps=n.memoizedProps,o.memoizedState=n.memoizedState,o.updateQueue=n.updateQueue,i=n.dependencies,o.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},o.sibling=n.sibling,o.index=n.index,o.ref=n.ref,o}function ru(n,i,o,u,h,p){var v=2;if(u=n,typeof n=="function")Lh(n)&&(v=1);else if(typeof n=="string")v=5;else e:switch(n){case N:return Wi(o.children,h,p,i);case T:v=8,h|=8;break;case A:return n=yn(12,o,i,h|2),n.elementType=A,n.lanes=p,n;case S:return n=yn(13,o,i,h),n.elementType=S,n.lanes=p,n;case Ye:return n=yn(19,o,i,h),n.elementType=Ye,n.lanes=p,n;case be:return iu(o,h,p,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case C:v=10;break e;case x:v=9;break e;case O:v=11;break e;case kt:v=14;break e;case Ct:v=16,u=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=yn(v,o,i,h),i.elementType=n,i.type=u,i.lanes=p,i}function Wi(n,i,o,u){return n=yn(7,n,u,i),n.lanes=o,n}function iu(n,i,o,u){return n=yn(22,n,u,i),n.elementType=be,n.lanes=o,n.stateNode={isHidden:!1},n}function Mh(n,i,o){return n=yn(6,n,null,i),n.lanes=o,n}function Fh(n,i,o){return i=yn(4,n.children!==null?n.children:[],n.key,i),i.lanes=o,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function Yw(n,i,o,u,h){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Fr(0),this.expirationTimes=Fr(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Fr(0),this.identifierPrefix=u,this.onRecoverableError=h,this.mutableSourceEagerHydrationData=null}function Uh(n,i,o,u,h,p,v,E,k){return n=new Yw(n,i,o,E,k),i===1?(i=1,p===!0&&(i|=8)):i=0,p=yn(3,null,null,i),n.current=p,p.stateNode=n,p.memoizedState={element:u,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},Yc(p),n}function Zw(n,i,o){var u=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ae,key:u==null?null:""+u,children:n,containerInfo:i,implementation:o}}function Rm(n){if(!n)return Gr;n=n._reactInternals;e:{if(En(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Wt(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var o=n.type;if(Wt(o))return np(n,o,i)}return i}function Pm(n,i,o,u,h,p,v,E,k){return n=Uh(o,u,!0,n,h,p,v,E,k),n.context=Rm(null),o=n.current,u=Bt(),h=ti(o),p=wr(u,h),p.callback=i??null,Jr(o,p,h),n.current.lanes=h,Ur(n,h,u),Gt(n,u),n}function su(n,i,o,u){var h=i.current,p=Bt(),v=ti(h);return o=Rm(o),i.context===null?i.context=o:i.pendingContext=o,i=wr(p,v),i.payload={element:n},u=u===void 0?null:u,u!==null&&(i.callback=u),n=Jr(h,i,v),n!==null&&(On(n,h,v,p),Ll(n,h,v)),v}function ou(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Nm(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var o=n.retryLane;n.retryLane=o!==0&&o<i?o:i}}function jh(n,i){Nm(n,i),(n=n.alternate)&&Nm(n,i)}function e0(){return null}var xm=typeof reportError=="function"?reportError:function(n){console.error(n)};function Bh(n){this._internalRoot=n}au.prototype.render=Bh.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));su(n,i,null,null)},au.prototype.unmount=Bh.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;zi(function(){su(null,n,null,null)}),i[mr]=null}};function au(n){this._internalRoot=n}au.prototype.unstable_scheduleHydration=function(n){if(n){var i=al();n={blockedOn:null,target:n,priority:i};for(var o=0;o<Hn.length&&i!==0&&i<Hn[o].priority;o++);Hn.splice(o,0,n),o===0&&cl(n)}};function zh(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function lu(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Dm(){}function t0(n,i,o,u,h){if(h){if(typeof u=="function"){var p=u;u=function(){var F=ou(v);p.call(F)}}var v=Pm(i,u,n,0,null,!1,!1,"",Dm);return n._reactRootContainer=v,n[mr]=v.current,Yo(n.nodeType===8?n.parentNode:n),zi(),v}for(;h=n.lastChild;)n.removeChild(h);if(typeof u=="function"){var E=u;u=function(){var F=ou(k);E.call(F)}}var k=Uh(n,0,!1,null,null,!1,!1,"",Dm);return n._reactRootContainer=k,n[mr]=k.current,Yo(n.nodeType===8?n.parentNode:n),zi(function(){su(i,k,o,u)}),k}function uu(n,i,o,u,h){var p=o._reactRootContainer;if(p){var v=p;if(typeof h=="function"){var E=h;h=function(){var k=ou(v);E.call(k)}}su(i,v,n,h)}else v=t0(o,i,n,h,u);return ou(v)}sl=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var o=Mr(i.pendingLanes);o!==0&&(jr(i,o|1),Gt(i,Fe()),(Pe&6)===0&&(Zs=Fe()+500,Qr()))}break;case 13:zi(function(){var u=_r(n,1);if(u!==null){var h=Bt();On(u,n,1,h)}}),jh(n,1)}},Ss=function(n){if(n.tag===13){var i=_r(n,134217728);if(i!==null){var o=Bt();On(i,n,134217728,o)}jh(n,134217728)}},ol=function(n){if(n.tag===13){var i=ti(n),o=_r(n,i);if(o!==null){var u=Bt();On(o,n,i,u)}jh(n,i)}},al=function(){return Se},ll=function(n,i){var o=Se;try{return Se=n,i()}finally{Se=o}},ms=function(n,i,o){switch(i){case"input":if(Io(n,o),i=o.name,o.type==="radio"&&i!=null){for(o=n;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<o.length;i++){var u=o[i];if(u!==n&&u.form===n.form){var h=kl(u);if(!h)throw Error(t(90));us(u),Io(u,h)}}}break;case"textarea":fs(n,o);break;case"select":i=o.value,i!=null&&ar(n,!!o.multiple,i,!1)}},Ti=Oh,Oo=zi;var n0={usingClientEntryPoint:!1,Events:[ta,js,kl,zn,Do,Oh]},ma={findFiberByHostInstance:Vi,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},r0={bundleType:ma.bundleType,version:ma.version,rendererPackageName:ma.rendererPackageName,rendererConfig:ma.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:_e.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Lo(n),n===null?null:n.stateNode},findFiberByHostInstance:ma.findFiberByHostInstance||e0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var cu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!cu.isDisabled&&cu.supportsFiber)try{Ci=cu.inject(r0),Zt=cu}catch{}}return Qt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=n0,Qt.createPortal=function(n,i){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!zh(i))throw Error(t(200));return Zw(n,i,null,o)},Qt.createRoot=function(n,i){if(!zh(n))throw Error(t(299));var o=!1,u="",h=xm;return i!=null&&(i.unstable_strictMode===!0&&(o=!0),i.identifierPrefix!==void 0&&(u=i.identifierPrefix),i.onRecoverableError!==void 0&&(h=i.onRecoverableError)),i=Uh(n,1,!1,null,null,o,!1,u,h),n[mr]=i.current,Yo(n.nodeType===8?n.parentNode:n),new Bh(i)},Qt.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=Lo(i),n=n===null?null:n.stateNode,n},Qt.flushSync=function(n){return zi(n)},Qt.hydrate=function(n,i,o){if(!lu(i))throw Error(t(200));return uu(null,n,i,!0,o)},Qt.hydrateRoot=function(n,i,o){if(!zh(n))throw Error(t(405));var u=o!=null&&o.hydratedSources||null,h=!1,p="",v=xm;if(o!=null&&(o.unstable_strictMode===!0&&(h=!0),o.identifierPrefix!==void 0&&(p=o.identifierPrefix),o.onRecoverableError!==void 0&&(v=o.onRecoverableError)),i=Pm(i,null,n,1,o??null,h,!1,p,v),n[mr]=i.current,Yo(n),u)for(n=0;n<u.length;n++)o=u[n],h=o._getVersion,h=h(o._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[o,h]:i.mutableSourceEagerHydrationData.push(o,h);return new au(i)},Qt.render=function(n,i,o){if(!lu(i))throw Error(t(200));return uu(null,n,i,!1,o)},Qt.unmountComponentAtNode=function(n){if(!lu(n))throw Error(t(40));return n._reactRootContainer?(zi(function(){uu(null,null,n,!1,function(){n._reactRootContainer=null,n[mr]=null})}),!0):!1},Qt.unstable_batchedUpdates=Oh,Qt.unstable_renderSubtreeIntoContainer=function(n,i,o,u){if(!lu(o))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return uu(n,i,o,!1,u)},Qt.version="18.3.1-next-f1338f8080-20240426",Qt}var jm;function h0(){if(jm)return Wh.exports;jm=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),Wh.exports=c0(),Wh.exports}var Bm;function d0(){if(Bm)return hu;Bm=1;var r=h0();return hu.createRoot=r.createRoot,hu.hydrateRoot=r.hydrateRoot,hu}var f0=d0();const p0=vy(f0);function m0(r){return Q.jsx("div",{className:"min-h-screen bg-gradient-to-b from-slate-950 via-black to-slate-950 text-white flex justify-center",children:Q.jsx("div",{className:"w-full max-w-md px-4 pb-6 flex flex-col pt-2",children:r.children})})}const zm=r=>{let e;const t=new Set,s=(_,I)=>{const P=typeof _=="function"?_(e):_;if(!Object.is(P,e)){const b=e;e=I??(typeof P!="object"||P===null)?P:Object.assign({},e,P),t.forEach($=>$(e,b))}},a=()=>e,m={setState:s,getState:a,getInitialState:()=>y,subscribe:_=>(t.add(_),()=>t.delete(_))},y=e=r(s,a,m);return m},g0=(r=>r?zm(r):zm),y0=r=>r;function v0(r,e=y0){const t=va.useSyncExternalStore(r.subscribe,va.useCallback(()=>e(r.getState()),[r,e]),va.useCallback(()=>e(r.getInitialState()),[r,e]));return va.useDebugValue(t),t}const $m=r=>{const e=g0(r),t=s=>v0(e,s);return Object.assign(t,e),t},_y=(r=>r?$m(r):$m),Ki=_y(r=>({toasts:[],push:e=>r(t=>{const s=crypto.randomUUID(),a=Date.now();return{toasts:[{...e,id:s,createdAt:a},...t.toasts].slice(0,4)}}),dismiss:e=>r(t=>({toasts:t.toasts.filter(s=>s.id!==e)}))}));function _0(r){switch(r){case"success":return"border-emerald-400/30 bg-emerald-400/10 text-emerald-100";case"warning":return"border-amber-400/30 bg-amber-400/10 text-amber-100";case"danger":return"border-red-400/30 bg-red-400/10 text-red-100";default:return"border-brand/30 bg-brand/10 text-brand-100"}}function w0(){const r=Ki(t=>t.toasts),e=Ki(t=>t.dismiss);return Q.jsx("div",{className:"fixed inset-x-0 top-4 z-50 pointer-events-none","aria-live":"polite",children:Q.jsx("div",{className:"mx-auto w-full max-w-md px-4 flex flex-col gap-2",children:r.map(t=>Q.jsx("div",{className:`pointer-events-auto rounded-2xl border px-4 py-3 shadow-card ${_0(t.kind)} transform transition-all duration-200`,children:Q.jsxs("div",{className:"flex items-start justify-between gap-3",children:[Q.jsxs("div",{children:[Q.jsx("p",{className:"text-xs uppercase tracking-[0.16em] opacity-80",children:t.kind}),Q.jsx("p",{className:"font-semibold",children:t.title}),t.message?Q.jsx("p",{className:"text-sm text-slate-200/90 mt-1",children:t.message}):null]}),Q.jsx("button",{type:"button",className:"text-slate-200/70 hover:text-slate-200",onClick:()=>e(t.id),"aria-label":"Dismiss notification",children:"✕"})]})},t.id))})})}function E0(r){return Q.jsxs(m0,{children:[Q.jsxs("header",{className:"pt-8 pb-3",children:[Q.jsx("h1",{className:"text-2xl font-semibold tracking-tight",children:"Semavik Tracker"}),Q.jsx("p",{className:"text-xs text-slate-400 mt-1",children:"Weekly injection companion"})]}),Q.jsx("div",{className:"flex-1 flex flex-col",children:r.children}),Q.jsx(w0,{})]})}function wa(r){return Q.jsx("section",{className:`card-elevated px-5 py-4 ${r.className??""}`,children:r.children})}function wy(r){const e=r.variant??"primary",t=["inline-flex items-center justify-center rounded-2xl font-semibold transition active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand focus-visible:ring-offset-black",r.disabled?"opacity-60":"",e==="primary"?"btn-primary px-5 py-4":"bg-slate-800/70 text-slate-100 border border-slate-700 hover:bg-slate-700 px-4 py-3",r.className??""].filter(Boolean).join(" ");return Q.jsx("button",{...r,className:t,children:r.children})}const T0=7,Ey=28;function ec(r){const e=r.getFullYear(),t=`${r.getMonth()+1}`.padStart(2,"0"),s=`${r.getDate()}`.padStart(2,"0");return`${e}-${t}-${s}`}function Du(r){const[e,t,s]=r.split("-").map(a=>Number(a));return new Date(e,t-1,s,0,0,0,0)}function I0(r,e){const t=Du(r);return t.setDate(t.getDate()+e),ec(t)}function tc(r,e){const t=Du(r),s=Du(e),a=1e3*60*60*24;return Math.round((s.getTime()-t.getTime())/a)}function Gh(r){return Du(r).toLocaleDateString(void 0,{weekday:"short",month:"short",day:"numeric"})}function Ty(r,e){const t=tc(e,r);if(t===0)return"today";if(t>0)return`in ${t} day${t===1?"":"s"}`;const s=Math.abs(t);return`${s} day${s===1?"":"s"} overdue`}function Iy(r){return r===.25?.5:1}function S0(r,e){return e<Ey||r===1?null:Iy(r)}function A0(r){return I0(r,T0)}function k0(r,e){return r===e?"today":r>e?"overdue":"waiting"}const C0=()=>{};var Hm={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sy=function(r){const e=[];let t=0;for(let s=0;s<r.length;s++){let a=r.charCodeAt(s);a<128?e[t++]=a:a<2048?(e[t++]=a>>6|192,e[t++]=a&63|128):(a&64512)===55296&&s+1<r.length&&(r.charCodeAt(s+1)&64512)===56320?(a=65536+((a&1023)<<10)+(r.charCodeAt(++s)&1023),e[t++]=a>>18|240,e[t++]=a>>12&63|128,e[t++]=a>>6&63|128,e[t++]=a&63|128):(e[t++]=a>>12|224,e[t++]=a>>6&63|128,e[t++]=a&63|128)}return e},R0=function(r){const e=[];let t=0,s=0;for(;t<r.length;){const a=r[t++];if(a<128)e[s++]=String.fromCharCode(a);else if(a>191&&a<224){const c=r[t++];e[s++]=String.fromCharCode((a&31)<<6|c&63)}else if(a>239&&a<365){const c=r[t++],d=r[t++],m=r[t++],y=((a&7)<<18|(c&63)<<12|(d&63)<<6|m&63)-65536;e[s++]=String.fromCharCode(55296+(y>>10)),e[s++]=String.fromCharCode(56320+(y&1023))}else{const c=r[t++],d=r[t++];e[s++]=String.fromCharCode((a&15)<<12|(c&63)<<6|d&63)}}return e.join("")},Ay={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,e){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let a=0;a<r.length;a+=3){const c=r[a],d=a+1<r.length,m=d?r[a+1]:0,y=a+2<r.length,_=y?r[a+2]:0,I=c>>2,P=(c&3)<<4|m>>4;let b=(m&15)<<2|_>>6,$=_&63;y||($=64,d||(b=64)),s.push(t[I],t[P],t[b],t[$])}return s.join("")},encodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(r):this.encodeByteArray(Sy(r),e)},decodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(r):R0(this.decodeStringToByteArray(r,e))},decodeStringToByteArray(r,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let a=0;a<r.length;){const c=t[r.charAt(a++)],m=a<r.length?t[r.charAt(a)]:0;++a;const _=a<r.length?t[r.charAt(a)]:64;++a;const P=a<r.length?t[r.charAt(a)]:64;if(++a,c==null||m==null||_==null||P==null)throw new P0;const b=c<<2|m>>4;if(s.push(b),_!==64){const $=m<<4&240|_>>2;if(s.push($),P!==64){const z=_<<6&192|P;s.push(z)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class P0 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const N0=function(r){const e=Sy(r);return Ay.encodeByteArray(e,!0)},Ou=function(r){return N0(r).replace(/\./g,"")},ky=function(r){try{return Ay.decodeString(r,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x0(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D0=()=>x0().__FIREBASE_DEFAULTS__,O0=()=>{if(typeof process>"u"||typeof Hm>"u")return;const r=Hm.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},V0=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=r&&ky(r[1]);return e&&JSON.parse(e)},nc=()=>{try{return C0()||D0()||O0()||V0()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},Cy=r=>{var e,t;return(t=(e=nc())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[r]},b0=r=>{const e=Cy(r);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},Ry=()=>{var r;return(r=nc())===null||r===void 0?void 0:r.config},Py=r=>{var e;return(e=nc())===null||e===void 0?void 0:e[`_${r}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L0{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function go(r){try{return(r.startsWith("http://")||r.startsWith("https://")?new URL(r).hostname:r).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Ny(r){return(await fetch(r,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M0(r,e){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",a=r.iat||0,c=r.sub||r.user_id;if(!c)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const d=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:a,exp:a+3600,auth_time:a,sub:c,user_id:c,firebase:{sign_in_provider:"custom",identities:{}}},r);return[Ou(JSON.stringify(t)),Ou(JSON.stringify(d)),""].join(".")}const Ea={};function F0(){const r={prod:[],emulator:[]};for(const e of Object.keys(Ea))Ea[e]?r.emulator.push(e):r.prod.push(e);return r}function U0(r){let e=document.getElementById(r),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",r),t=!0),{created:t,element:e}}let Wm=!1;function xy(r,e){if(typeof window>"u"||typeof document>"u"||!go(window.location.host)||Ea[r]===e||Ea[r]||Wm)return;Ea[r]=e;function t(b){return`__firebase__banner__${b}`}const s="__firebase__banner",c=F0().prod.length>0;function d(){const b=document.getElementById(s);b&&b.remove()}function m(b){b.style.display="flex",b.style.background="#7faaf0",b.style.position="fixed",b.style.bottom="5px",b.style.left="5px",b.style.padding=".5em",b.style.borderRadius="5px",b.style.alignItems="center"}function y(b,$){b.setAttribute("width","24"),b.setAttribute("id",$),b.setAttribute("height","24"),b.setAttribute("viewBox","0 0 24 24"),b.setAttribute("fill","none"),b.style.marginLeft="-6px"}function _(){const b=document.createElement("span");return b.style.cursor="pointer",b.style.marginLeft="16px",b.style.fontSize="24px",b.innerHTML=" &times;",b.onclick=()=>{Wm=!0,d()},b}function I(b,$){b.setAttribute("id",$),b.innerText="Learn more",b.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",b.setAttribute("target","__blank"),b.style.paddingLeft="5px",b.style.textDecoration="underline"}function P(){const b=U0(s),$=t("text"),z=document.getElementById($)||document.createElement("span"),Z=t("learnmore"),X=document.getElementById(Z)||document.createElement("a"),Te=t("preprendIcon"),pe=document.getElementById(Te)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(b.created){const me=b.element;m(me),I(X,Z);const _e=_();y(pe,Te),me.append(pe,z,X,_e),document.body.appendChild(me)}c?(z.innerText="Preview backend disconnected.",pe.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(pe.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,z.innerText="Preview backend running in this workspace."),z.setAttribute("id",$)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",P):P()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function j0(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Mt())}function B0(){var r;const e=(r=nc())===null||r===void 0?void 0:r.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function z0(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function $0(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function H0(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function W0(){const r=Mt();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function q0(){return!B0()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Dy(){try{return typeof indexedDB=="object"}catch{return!1}}function Oy(){return new Promise((r,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",a=self.indexedDB.open(s);a.onsuccess=()=>{a.result.close(),t||self.indexedDB.deleteDatabase(s),r(!0)},a.onupgradeneeded=()=>{t=!1},a.onerror=()=>{var c;e(((c=a.error)===null||c===void 0?void 0:c.message)||"")}}catch(t){e(t)}})}function K0(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G0="FirebaseError";class ir extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=G0,Object.setPrototypeOf(this,ir.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,os.prototype.create)}}class os{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},a=`${this.service}/${e}`,c=this.errors[e],d=c?Q0(c,s):"Error",m=`${this.serviceName}: ${d} (${a}).`;return new ir(a,m,s)}}function Q0(r,e){return r.replace(X0,(t,s)=>{const a=e[s];return a!=null?String(a):`<${s}?>`})}const X0=/\{\$([^}]+)}/g;function J0(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}function Yi(r,e){if(r===e)return!0;const t=Object.keys(r),s=Object.keys(e);for(const a of t){if(!s.includes(a))return!1;const c=r[a],d=e[a];if(qm(c)&&qm(d)){if(!Yi(c,d))return!1}else if(c!==d)return!1}for(const a of s)if(!t.includes(a))return!1;return!0}function qm(r){return r!==null&&typeof r=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ua(r){const e=[];for(const[t,s]of Object.entries(r))Array.isArray(s)?s.forEach(a=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(a))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Y0(r,e){const t=new Z0(r,e);return t.subscribe.bind(t)}class Z0{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let a;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");eE(e,["next","error","complete"])?a=e:a={next:e,error:t,complete:s},a.next===void 0&&(a.next=Qh),a.error===void 0&&(a.error=Qh),a.complete===void 0&&(a.complete=Qh);const c=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?a.error(this.finalError):a.complete()}catch{}}),this.observers.push(a),c}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function eE(r,e){if(typeof r!="object"||r===null)return!1;for(const t of e)if(t in r&&typeof r[t]=="function")return!0;return!1}function Qh(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function an(r){return r&&r._delegate?r._delegate:r}class jn{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qi="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tE{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new L0;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const a=this.getOrInitializeService({instanceIdentifier:t});a&&s.resolve(a)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const s=this.normalizeInstanceIdentifier(e?.identifier),a=(t=e?.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(c){if(a)return null;throw c}else{if(a)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(rE(e))try{this.getOrInitializeService({instanceIdentifier:qi})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(t);try{const c=this.getOrInitializeService({instanceIdentifier:a});s.resolve(c)}catch{}}}}clearInstance(e=qi){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=qi){return this.instances.has(e)}getOptions(e=qi){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const a=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[c,d]of this.instancesDeferred.entries()){const m=this.normalizeInstanceIdentifier(c);s===m&&d.resolve(a)}return a}onInit(e,t){var s;const a=this.normalizeInstanceIdentifier(t),c=(s=this.onInitCallbacks.get(a))!==null&&s!==void 0?s:new Set;c.add(e),this.onInitCallbacks.set(a,c);const d=this.instances.get(a);return d&&e(d,a),()=>{c.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const a of s)try{a(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:nE(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=qi){return this.component?this.component.multipleInstances?e:qi:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function nE(r){return r===qi?void 0:r}function rE(r){return r.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iE{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new tE(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ie;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(Ie||(Ie={}));const sE={debug:Ie.DEBUG,verbose:Ie.VERBOSE,info:Ie.INFO,warn:Ie.WARN,error:Ie.ERROR,silent:Ie.SILENT},oE=Ie.INFO,aE={[Ie.DEBUG]:"log",[Ie.VERBOSE]:"log",[Ie.INFO]:"info",[Ie.WARN]:"warn",[Ie.ERROR]:"error"},lE=(r,e,...t)=>{if(e<r.logLevel)return;const s=new Date().toISOString(),a=aE[e];if(a)console[a](`[${s}]  ${r.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ld{constructor(e){this.name=e,this._logLevel=oE,this._logHandler=lE,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ie))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?sE[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ie.DEBUG,...e),this._logHandler(this,Ie.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ie.VERBOSE,...e),this._logHandler(this,Ie.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ie.INFO,...e),this._logHandler(this,Ie.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ie.WARN,...e),this._logHandler(this,Ie.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ie.ERROR,...e),this._logHandler(this,Ie.ERROR,...e)}}const uE=(r,e)=>e.some(t=>r instanceof t);let Km,Gm;function cE(){return Km||(Km=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function hE(){return Gm||(Gm=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Vy=new WeakMap,dd=new WeakMap,by=new WeakMap,Xh=new WeakMap,Md=new WeakMap;function dE(r){const e=new Promise((t,s)=>{const a=()=>{r.removeEventListener("success",c),r.removeEventListener("error",d)},c=()=>{t(Cr(r.result)),a()},d=()=>{s(r.error),a()};r.addEventListener("success",c),r.addEventListener("error",d)});return e.then(t=>{t instanceof IDBCursor&&Vy.set(t,r)}).catch(()=>{}),Md.set(e,r),e}function fE(r){if(dd.has(r))return;const e=new Promise((t,s)=>{const a=()=>{r.removeEventListener("complete",c),r.removeEventListener("error",d),r.removeEventListener("abort",d)},c=()=>{t(),a()},d=()=>{s(r.error||new DOMException("AbortError","AbortError")),a()};r.addEventListener("complete",c),r.addEventListener("error",d),r.addEventListener("abort",d)});dd.set(r,e)}let fd={get(r,e,t){if(r instanceof IDBTransaction){if(e==="done")return dd.get(r);if(e==="objectStoreNames")return r.objectStoreNames||by.get(r);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Cr(r[e])},set(r,e,t){return r[e]=t,!0},has(r,e){return r instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in r}};function pE(r){fd=r(fd)}function mE(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=r.call(Jh(this),e,...t);return by.set(s,e.sort?e.sort():[e]),Cr(s)}:hE().includes(r)?function(...e){return r.apply(Jh(this),e),Cr(Vy.get(this))}:function(...e){return Cr(r.apply(Jh(this),e))}}function gE(r){return typeof r=="function"?mE(r):(r instanceof IDBTransaction&&fE(r),uE(r,cE())?new Proxy(r,fd):r)}function Cr(r){if(r instanceof IDBRequest)return dE(r);if(Xh.has(r))return Xh.get(r);const e=gE(r);return e!==r&&(Xh.set(r,e),Md.set(e,r)),e}const Jh=r=>Md.get(r);function rc(r,e,{blocked:t,upgrade:s,blocking:a,terminated:c}={}){const d=indexedDB.open(r,e),m=Cr(d);return s&&d.addEventListener("upgradeneeded",y=>{s(Cr(d.result),y.oldVersion,y.newVersion,Cr(d.transaction),y)}),t&&d.addEventListener("blocked",y=>t(y.oldVersion,y.newVersion,y)),m.then(y=>{c&&y.addEventListener("close",()=>c()),a&&y.addEventListener("versionchange",_=>a(_.oldVersion,_.newVersion,_))}).catch(()=>{}),m}function Yh(r,{blocked:e}={}){const t=indexedDB.deleteDatabase(r);return e&&t.addEventListener("blocked",s=>e(s.oldVersion,s)),Cr(t).then(()=>{})}const yE=["get","getKey","getAll","getAllKeys","count"],vE=["put","add","delete","clear"],Zh=new Map;function Qm(r,e){if(!(r instanceof IDBDatabase&&!(e in r)&&typeof e=="string"))return;if(Zh.get(e))return Zh.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,a=vE.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(a||yE.includes(t)))return;const c=async function(d,...m){const y=this.transaction(d,a?"readwrite":"readonly");let _=y.store;return s&&(_=_.index(m.shift())),(await Promise.all([_[t](...m),a&&y.done]))[0]};return Zh.set(e,c),c}pE(r=>({...r,get:(e,t,s)=>Qm(e,t)||r.get(e,t,s),has:(e,t)=>!!Qm(e,t)||r.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _E{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(wE(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function wE(r){const e=r.getComponent();return e?.type==="VERSION"}const pd="@firebase/app",Xm="0.13.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xr=new Ld("@firebase/app"),EE="@firebase/app-compat",TE="@firebase/analytics-compat",IE="@firebase/analytics",SE="@firebase/app-check-compat",AE="@firebase/app-check",kE="@firebase/auth",CE="@firebase/auth-compat",RE="@firebase/database",PE="@firebase/data-connect",NE="@firebase/database-compat",xE="@firebase/functions",DE="@firebase/functions-compat",OE="@firebase/installations",VE="@firebase/installations-compat",bE="@firebase/messaging",LE="@firebase/messaging-compat",ME="@firebase/performance",FE="@firebase/performance-compat",UE="@firebase/remote-config",jE="@firebase/remote-config-compat",BE="@firebase/storage",zE="@firebase/storage-compat",$E="@firebase/firestore",HE="@firebase/ai",WE="@firebase/firestore-compat",qE="firebase",KE="11.10.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const md="[DEFAULT]",GE={[pd]:"fire-core",[EE]:"fire-core-compat",[IE]:"fire-analytics",[TE]:"fire-analytics-compat",[AE]:"fire-app-check",[SE]:"fire-app-check-compat",[kE]:"fire-auth",[CE]:"fire-auth-compat",[RE]:"fire-rtdb",[PE]:"fire-data-connect",[NE]:"fire-rtdb-compat",[xE]:"fire-fn",[DE]:"fire-fn-compat",[OE]:"fire-iid",[VE]:"fire-iid-compat",[bE]:"fire-fcm",[LE]:"fire-fcm-compat",[ME]:"fire-perf",[FE]:"fire-perf-compat",[UE]:"fire-rc",[jE]:"fire-rc-compat",[BE]:"fire-gcs",[zE]:"fire-gcs-compat",[$E]:"fire-fst",[WE]:"fire-fst-compat",[HE]:"fire-vertex","fire-js":"fire-js",[qE]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ra=new Map,QE=new Map,gd=new Map;function Jm(r,e){try{r.container.addComponent(e)}catch(t){xr.debug(`Component ${e.name} failed to register with FirebaseApp ${r.name}`,t)}}function tr(r){const e=r.name;if(gd.has(e))return xr.debug(`There were multiple attempts to register component ${e}.`),!1;gd.set(e,r);for(const t of Ra.values())Jm(t,r);for(const t of QE.values())Jm(t,r);return!0}function yo(r,e){const t=r.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),r.container.getProvider(e)}function bn(r){return r==null?!1:r.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XE={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},hi=new os("app","Firebase",XE);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JE{constructor(e,t,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new jn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw hi.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vo=KE;function Ly(r,e={}){let t=r;typeof e!="object"&&(e={name:e});const s=Object.assign({name:md,automaticDataCollectionEnabled:!0},e),a=s.name;if(typeof a!="string"||!a)throw hi.create("bad-app-name",{appName:String(a)});if(t||(t=Ry()),!t)throw hi.create("no-options");const c=Ra.get(a);if(c){if(Yi(t,c.options)&&Yi(s,c.config))return c;throw hi.create("duplicate-app",{appName:a})}const d=new iE(a);for(const y of gd.values())d.addComponent(y);const m=new JE(t,s,d);return Ra.set(a,m),m}function Fd(r=md){const e=Ra.get(r);if(!e&&r===md&&Ry())return Ly();if(!e)throw hi.create("no-app",{appName:r});return e}function Ym(){return Array.from(Ra.values())}function vn(r,e,t){var s;let a=(s=GE[r])!==null&&s!==void 0?s:r;t&&(a+=`-${t}`);const c=a.match(/\s|\//),d=e.match(/\s|\//);if(c||d){const m=[`Unable to register library "${a}" with version "${e}":`];c&&m.push(`library name "${a}" contains illegal characters (whitespace or "/")`),c&&d&&m.push("and"),d&&m.push(`version name "${e}" contains illegal characters (whitespace or "/")`),xr.warn(m.join(" "));return}tr(new jn(`${a}-version`,()=>({library:a,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YE="firebase-heartbeat-database",ZE=1,Pa="firebase-heartbeat-store";let ed=null;function My(){return ed||(ed=rc(YE,ZE,{upgrade:(r,e)=>{switch(e){case 0:try{r.createObjectStore(Pa)}catch(t){console.warn(t)}}}}).catch(r=>{throw hi.create("idb-open",{originalErrorMessage:r.message})})),ed}async function eT(r){try{const t=(await My()).transaction(Pa),s=await t.objectStore(Pa).get(Fy(r));return await t.done,s}catch(e){if(e instanceof ir)xr.warn(e.message);else{const t=hi.create("idb-get",{originalErrorMessage:e?.message});xr.warn(t.message)}}}async function Zm(r,e){try{const s=(await My()).transaction(Pa,"readwrite");await s.objectStore(Pa).put(e,Fy(r)),await s.done}catch(t){if(t instanceof ir)xr.warn(t.message);else{const s=hi.create("idb-set",{originalErrorMessage:t?.message});xr.warn(s.message)}}}function Fy(r){return`${r.name}!${r.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tT=1024,nT=30;class rT{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new sT(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;try{const a=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),c=eg();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===c||this._heartbeatsCache.heartbeats.some(d=>d.date===c))return;if(this._heartbeatsCache.heartbeats.push({date:c,agent:a}),this._heartbeatsCache.heartbeats.length>nT){const d=oT(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(d,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){xr.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=eg(),{heartbeatsToSend:s,unsentEntries:a}=iT(this._heartbeatsCache.heartbeats),c=Ou(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,a.length>0?(this._heartbeatsCache.heartbeats=a,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),c}catch(t){return xr.warn(t),""}}}function eg(){return new Date().toISOString().substring(0,10)}function iT(r,e=tT){const t=[];let s=r.slice();for(const a of r){const c=t.find(d=>d.agent===a.agent);if(c){if(c.dates.push(a.date),tg(t)>e){c.dates.pop();break}}else if(t.push({agent:a.agent,dates:[a.date]}),tg(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class sT{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Dy()?Oy().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await eT(this.app);return t?.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const a=await this.read();return Zm(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:a.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const a=await this.read();return Zm(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:a.lastSentHeartbeatDate,heartbeats:[...a.heartbeats,...e.heartbeats]})}else return}}function tg(r){return Ou(JSON.stringify({version:2,heartbeats:r})).length}function oT(r){if(r.length===0)return-1;let e=0,t=r[0].date;for(let s=1;s<r.length;s++)r[s].date<t&&(t=r[s].date,e=s);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aT(r){tr(new jn("platform-logger",e=>new _E(e),"PRIVATE")),tr(new jn("heartbeat",e=>new rT(e),"PRIVATE")),vn(pd,Xm,r),vn(pd,Xm,"esm2017"),vn("fire-js","")}aT("");const Uy="@firebase/installations",Ud="0.6.18";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jy=1e4,By=`w:${Ud}`,zy="FIS_v2",lT="https://firebaseinstallations.googleapis.com/v1",uT=3600*1e3,cT="installations",hT="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dT={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Zi=new os(cT,hT,dT);function $y(r){return r instanceof ir&&r.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hy({projectId:r}){return`${lT}/projects/${r}/installations`}function Wy(r){return{token:r.token,requestStatus:2,expiresIn:pT(r.expiresIn),creationTime:Date.now()}}async function qy(r,e){const s=(await e.json()).error;return Zi.create("request-failed",{requestName:r,serverCode:s.code,serverMessage:s.message,serverStatus:s.status})}function Ky({apiKey:r}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":r})}function fT(r,{refreshToken:e}){const t=Ky(r);return t.append("Authorization",mT(e)),t}async function Gy(r){const e=await r();return e.status>=500&&e.status<600?r():e}function pT(r){return Number(r.replace("s","000"))}function mT(r){return`${zy} ${r}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gT({appConfig:r,heartbeatServiceProvider:e},{fid:t}){const s=Hy(r),a=Ky(r),c=e.getImmediate({optional:!0});if(c){const _=await c.getHeartbeatsHeader();_&&a.append("x-firebase-client",_)}const d={fid:t,authVersion:zy,appId:r.appId,sdkVersion:By},m={method:"POST",headers:a,body:JSON.stringify(d)},y=await Gy(()=>fetch(s,m));if(y.ok){const _=await y.json();return{fid:_.fid||t,registrationStatus:2,refreshToken:_.refreshToken,authToken:Wy(_.authToken)}}else throw await qy("Create Installation",y)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qy(r){return new Promise(e=>{setTimeout(e,r)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yT(r){return btoa(String.fromCharCode(...r)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vT=/^[cdef][\w-]{21}$/,yd="";function _T(){try{const r=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(r),r[0]=112+r[0]%16;const t=wT(r);return vT.test(t)?t:yd}catch{return yd}}function wT(r){return yT(r).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ic(r){return`${r.appName}!${r.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xy=new Map;function Jy(r,e){const t=ic(r);Yy(t,e),ET(t,e)}function Yy(r,e){const t=Xy.get(r);if(t)for(const s of t)s(e)}function ET(r,e){const t=TT();t&&t.postMessage({key:r,fid:e}),IT()}let Gi=null;function TT(){return!Gi&&"BroadcastChannel"in self&&(Gi=new BroadcastChannel("[Firebase] FID Change"),Gi.onmessage=r=>{Yy(r.data.key,r.data.fid)}),Gi}function IT(){Xy.size===0&&Gi&&(Gi.close(),Gi=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ST="firebase-installations-database",AT=1,es="firebase-installations-store";let td=null;function jd(){return td||(td=rc(ST,AT,{upgrade:(r,e)=>{switch(e){case 0:r.createObjectStore(es)}}})),td}async function Vu(r,e){const t=ic(r),a=(await jd()).transaction(es,"readwrite"),c=a.objectStore(es),d=await c.get(t);return await c.put(e,t),await a.done,(!d||d.fid!==e.fid)&&Jy(r,e.fid),e}async function Zy(r){const e=ic(r),s=(await jd()).transaction(es,"readwrite");await s.objectStore(es).delete(e),await s.done}async function sc(r,e){const t=ic(r),a=(await jd()).transaction(es,"readwrite"),c=a.objectStore(es),d=await c.get(t),m=e(d);return m===void 0?await c.delete(t):await c.put(m,t),await a.done,m&&(!d||d.fid!==m.fid)&&Jy(r,m.fid),m}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bd(r){let e;const t=await sc(r.appConfig,s=>{const a=kT(s),c=CT(r,a);return e=c.registrationPromise,c.installationEntry});return t.fid===yd?{installationEntry:await e}:{installationEntry:t,registrationPromise:e}}function kT(r){const e=r||{fid:_T(),registrationStatus:0};return ev(e)}function CT(r,e){if(e.registrationStatus===0){if(!navigator.onLine){const a=Promise.reject(Zi.create("app-offline"));return{installationEntry:e,registrationPromise:a}}const t={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},s=RT(r,t);return{installationEntry:t,registrationPromise:s}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:PT(r)}:{installationEntry:e}}async function RT(r,e){try{const t=await gT(r,e);return Vu(r.appConfig,t)}catch(t){throw $y(t)&&t.customData.serverCode===409?await Zy(r.appConfig):await Vu(r.appConfig,{fid:e.fid,registrationStatus:0}),t}}async function PT(r){let e=await ng(r.appConfig);for(;e.registrationStatus===1;)await Qy(100),e=await ng(r.appConfig);if(e.registrationStatus===0){const{installationEntry:t,registrationPromise:s}=await Bd(r);return s||t}return e}function ng(r){return sc(r,e=>{if(!e)throw Zi.create("installation-not-found");return ev(e)})}function ev(r){return NT(r)?{fid:r.fid,registrationStatus:0}:r}function NT(r){return r.registrationStatus===1&&r.registrationTime+jy<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xT({appConfig:r,heartbeatServiceProvider:e},t){const s=DT(r,t),a=fT(r,t),c=e.getImmediate({optional:!0});if(c){const _=await c.getHeartbeatsHeader();_&&a.append("x-firebase-client",_)}const d={installation:{sdkVersion:By,appId:r.appId}},m={method:"POST",headers:a,body:JSON.stringify(d)},y=await Gy(()=>fetch(s,m));if(y.ok){const _=await y.json();return Wy(_)}else throw await qy("Generate Auth Token",y)}function DT(r,{fid:e}){return`${Hy(r)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zd(r,e=!1){let t;const s=await sc(r.appConfig,c=>{if(!tv(c))throw Zi.create("not-registered");const d=c.authToken;if(!e&&bT(d))return c;if(d.requestStatus===1)return t=OT(r,e),c;{if(!navigator.onLine)throw Zi.create("app-offline");const m=MT(c);return t=VT(r,m),m}});return t?await t:s.authToken}async function OT(r,e){let t=await rg(r.appConfig);for(;t.authToken.requestStatus===1;)await Qy(100),t=await rg(r.appConfig);const s=t.authToken;return s.requestStatus===0?zd(r,e):s}function rg(r){return sc(r,e=>{if(!tv(e))throw Zi.create("not-registered");const t=e.authToken;return FT(t)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function VT(r,e){try{const t=await xT(r,e),s=Object.assign(Object.assign({},e),{authToken:t});return await Vu(r.appConfig,s),t}catch(t){if($y(t)&&(t.customData.serverCode===401||t.customData.serverCode===404))await Zy(r.appConfig);else{const s=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Vu(r.appConfig,s)}throw t}}function tv(r){return r!==void 0&&r.registrationStatus===2}function bT(r){return r.requestStatus===2&&!LT(r)}function LT(r){const e=Date.now();return e<r.creationTime||r.creationTime+r.expiresIn<e+uT}function MT(r){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},r),{authToken:e})}function FT(r){return r.requestStatus===1&&r.requestTime+jy<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function UT(r){const e=r,{installationEntry:t,registrationPromise:s}=await Bd(e);return s?s.catch(console.error):zd(e).catch(console.error),t.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jT(r,e=!1){const t=r;return await BT(t),(await zd(t,e)).token}async function BT(r){const{registrationPromise:e}=await Bd(r);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zT(r){if(!r||!r.options)throw nd("App Configuration");if(!r.name)throw nd("App Name");const e=["projectId","apiKey","appId"];for(const t of e)if(!r.options[t])throw nd(t);return{appName:r.name,projectId:r.options.projectId,apiKey:r.options.apiKey,appId:r.options.appId}}function nd(r){return Zi.create("missing-app-config-values",{valueName:r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nv="installations",$T="installations-internal",HT=r=>{const e=r.getProvider("app").getImmediate(),t=zT(e),s=yo(e,"heartbeat");return{app:e,appConfig:t,heartbeatServiceProvider:s,_delete:()=>Promise.resolve()}},WT=r=>{const e=r.getProvider("app").getImmediate(),t=yo(e,nv).getImmediate();return{getId:()=>UT(t),getToken:a=>jT(t,a)}};function qT(){tr(new jn(nv,HT,"PUBLIC")),tr(new jn($T,WT,"PRIVATE"))}qT();vn(Uy,Ud);vn(Uy,Ud,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KT="/firebase-messaging-sw.js",GT="/firebase-cloud-messaging-push-scope",rv="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",QT="https://fcmregistrations.googleapis.com/v1",iv="google.c.a.c_id",XT="google.c.a.c_l",JT="google.c.a.ts",YT="google.c.a.e",ig=1e4;var sg;(function(r){r[r.DATA_MESSAGE=1]="DATA_MESSAGE",r[r.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"})(sg||(sg={}));/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the License
 * is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
 * or implied. See the License for the specific language governing permissions and limitations under
 * the License.
 */var Na;(function(r){r.PUSH_RECEIVED="push-received",r.NOTIFICATION_CLICKED="notification-clicked"})(Na||(Na={}));/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ir(r){const e=new Uint8Array(r);return btoa(String.fromCharCode(...e)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function ZT(r){const e="=".repeat((4-r.length%4)%4),t=(r+e).replace(/\-/g,"+").replace(/_/g,"/"),s=atob(t),a=new Uint8Array(s.length);for(let c=0;c<s.length;++c)a[c]=s.charCodeAt(c);return a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rd="fcm_token_details_db",eI=5,og="fcm_token_object_Store";async function tI(r){if("databases"in indexedDB&&!(await indexedDB.databases()).map(c=>c.name).includes(rd))return null;let e=null;return(await rc(rd,eI,{upgrade:async(s,a,c,d)=>{var m;if(a<2||!s.objectStoreNames.contains(og))return;const y=d.objectStore(og),_=await y.index("fcmSenderId").get(r);if(await y.clear(),!!_){if(a===2){const I=_;if(!I.auth||!I.p256dh||!I.endpoint)return;e={token:I.fcmToken,createTime:(m=I.createTime)!==null&&m!==void 0?m:Date.now(),subscriptionOptions:{auth:I.auth,p256dh:I.p256dh,endpoint:I.endpoint,swScope:I.swScope,vapidKey:typeof I.vapidKey=="string"?I.vapidKey:Ir(I.vapidKey)}}}else if(a===3){const I=_;e={token:I.fcmToken,createTime:I.createTime,subscriptionOptions:{auth:Ir(I.auth),p256dh:Ir(I.p256dh),endpoint:I.endpoint,swScope:I.swScope,vapidKey:Ir(I.vapidKey)}}}else if(a===4){const I=_;e={token:I.fcmToken,createTime:I.createTime,subscriptionOptions:{auth:Ir(I.auth),p256dh:Ir(I.p256dh),endpoint:I.endpoint,swScope:I.swScope,vapidKey:Ir(I.vapidKey)}}}}}})).close(),await Yh(rd),await Yh("fcm_vapid_details_db"),await Yh("undefined"),nI(e)?e:null}function nI(r){if(!r||!r.subscriptionOptions)return!1;const{subscriptionOptions:e}=r;return typeof r.createTime=="number"&&r.createTime>0&&typeof r.token=="string"&&r.token.length>0&&typeof e.auth=="string"&&e.auth.length>0&&typeof e.p256dh=="string"&&e.p256dh.length>0&&typeof e.endpoint=="string"&&e.endpoint.length>0&&typeof e.swScope=="string"&&e.swScope.length>0&&typeof e.vapidKey=="string"&&e.vapidKey.length>0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rI="firebase-messaging-database",iI=1,xa="firebase-messaging-store";let id=null;function sv(){return id||(id=rc(rI,iI,{upgrade:(r,e)=>{switch(e){case 0:r.createObjectStore(xa)}}})),id}async function sI(r){const e=ov(r),s=await(await sv()).transaction(xa).objectStore(xa).get(e);if(s)return s;{const a=await tI(r.appConfig.senderId);if(a)return await $d(r,a),a}}async function $d(r,e){const t=ov(r),a=(await sv()).transaction(xa,"readwrite");return await a.objectStore(xa).put(e,t),await a.done,e}function ov({appConfig:r}){return r.appId}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oI={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"only-available-in-window":"This method is available in a Window context.","only-available-in-sw":"This method is available in a service worker context.","permission-default":"The notification permission was not granted and dismissed instead.","permission-blocked":"The notification permission was not granted and blocked instead.","unsupported-browser":"This browser doesn't support the API's required to use the Firebase SDK.","indexed-db-unsupported":"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)","failed-service-worker-registration":"We are unable to register the default service worker. {$browserErrorMessage}","token-subscribe-failed":"A problem occurred while subscribing the user to FCM: {$errorInfo}","token-subscribe-no-token":"FCM returned no token when subscribing the user to push.","token-unsubscribe-failed":"A problem occurred while unsubscribing the user from FCM: {$errorInfo}","token-update-failed":"A problem occurred while updating the user from FCM: {$errorInfo}","token-update-no-token":"FCM returned no token when updating the user to push.","use-sw-after-get-token":"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.","invalid-sw-registration":"The input to useServiceWorker() must be a ServiceWorkerRegistration.","invalid-bg-handler":"The input to setBackgroundMessageHandler() must be a function.","invalid-vapid-key":"The public VAPID key must be a string.","use-vapid-key-after-get-token":"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},Lt=new os("messaging","Messaging",oI);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function aI(r,e){const t=await Wd(r),s=av(e),a={method:"POST",headers:t,body:JSON.stringify(s)};let c;try{c=await(await fetch(Hd(r.appConfig),a)).json()}catch(d){throw Lt.create("token-subscribe-failed",{errorInfo:d?.toString()})}if(c.error){const d=c.error.message;throw Lt.create("token-subscribe-failed",{errorInfo:d})}if(!c.token)throw Lt.create("token-subscribe-no-token");return c.token}async function lI(r,e){const t=await Wd(r),s=av(e.subscriptionOptions),a={method:"PATCH",headers:t,body:JSON.stringify(s)};let c;try{c=await(await fetch(`${Hd(r.appConfig)}/${e.token}`,a)).json()}catch(d){throw Lt.create("token-update-failed",{errorInfo:d?.toString()})}if(c.error){const d=c.error.message;throw Lt.create("token-update-failed",{errorInfo:d})}if(!c.token)throw Lt.create("token-update-no-token");return c.token}async function uI(r,e){const s={method:"DELETE",headers:await Wd(r)};try{const c=await(await fetch(`${Hd(r.appConfig)}/${e}`,s)).json();if(c.error){const d=c.error.message;throw Lt.create("token-unsubscribe-failed",{errorInfo:d})}}catch(a){throw Lt.create("token-unsubscribe-failed",{errorInfo:a?.toString()})}}function Hd({projectId:r}){return`${QT}/projects/${r}/registrations`}async function Wd({appConfig:r,installations:e}){const t=await e.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":r.apiKey,"x-goog-firebase-installations-auth":`FIS ${t}`})}function av({p256dh:r,auth:e,endpoint:t,vapidKey:s}){const a={web:{endpoint:t,auth:e,p256dh:r}};return s!==rv&&(a.web.applicationPubKey=s),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cI=10080*60*1e3;async function hI(r){const e=await fI(r.swRegistration,r.vapidKey),t={vapidKey:r.vapidKey,swScope:r.swRegistration.scope,endpoint:e.endpoint,auth:Ir(e.getKey("auth")),p256dh:Ir(e.getKey("p256dh"))},s=await sI(r.firebaseDependencies);if(s){if(pI(s.subscriptionOptions,t))return Date.now()>=s.createTime+cI?dI(r,{token:s.token,createTime:Date.now(),subscriptionOptions:t}):s.token;try{await uI(r.firebaseDependencies,s.token)}catch(a){console.warn(a)}return ag(r.firebaseDependencies,t)}else return ag(r.firebaseDependencies,t)}async function dI(r,e){try{const t=await lI(r.firebaseDependencies,e),s=Object.assign(Object.assign({},e),{token:t,createTime:Date.now()});return await $d(r.firebaseDependencies,s),t}catch(t){throw t}}async function ag(r,e){const s={token:await aI(r,e),createTime:Date.now(),subscriptionOptions:e};return await $d(r,s),s.token}async function fI(r,e){const t=await r.pushManager.getSubscription();return t||r.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:ZT(e)})}function pI(r,e){const t=e.vapidKey===r.vapidKey,s=e.endpoint===r.endpoint,a=e.auth===r.auth,c=e.p256dh===r.p256dh;return t&&s&&a&&c}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lg(r){const e={from:r.from,collapseKey:r.collapse_key,messageId:r.fcmMessageId};return mI(e,r),gI(e,r),yI(e,r),e}function mI(r,e){if(!e.notification)return;r.notification={};const t=e.notification.title;t&&(r.notification.title=t);const s=e.notification.body;s&&(r.notification.body=s);const a=e.notification.image;a&&(r.notification.image=a);const c=e.notification.icon;c&&(r.notification.icon=c)}function gI(r,e){e.data&&(r.data=e.data)}function yI(r,e){var t,s,a,c,d;if(!e.fcmOptions&&!(!((t=e.notification)===null||t===void 0)&&t.click_action))return;r.fcmOptions={};const m=(a=(s=e.fcmOptions)===null||s===void 0?void 0:s.link)!==null&&a!==void 0?a:(c=e.notification)===null||c===void 0?void 0:c.click_action;m&&(r.fcmOptions.link=m);const y=(d=e.fcmOptions)===null||d===void 0?void 0:d.analytics_label;y&&(r.fcmOptions.analyticsLabel=y)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vI(r){return typeof r=="object"&&!!r&&iv in r}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _I(r){if(!r||!r.options)throw sd("App Configuration Object");if(!r.name)throw sd("App Name");const e=["projectId","apiKey","appId","messagingSenderId"],{options:t}=r;for(const s of e)if(!t[s])throw sd(s);return{appName:r.name,projectId:t.projectId,apiKey:t.apiKey,appId:t.appId,senderId:t.messagingSenderId}}function sd(r){return Lt.create("missing-app-config-values",{valueName:r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wI{constructor(e,t,s){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const a=_I(e);this.firebaseDependencies={app:e,appConfig:a,installations:t,analyticsProvider:s}}_delete(){return Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function EI(r){try{r.swRegistration=await navigator.serviceWorker.register(KT,{scope:GT}),r.swRegistration.update().catch(()=>{}),await TI(r.swRegistration)}catch(e){throw Lt.create("failed-service-worker-registration",{browserErrorMessage:e?.message})}}async function TI(r){return new Promise((e,t)=>{const s=setTimeout(()=>t(new Error(`Service worker not registered after ${ig} ms`)),ig),a=r.installing||r.waiting;r.active?(clearTimeout(s),e()):a?a.onstatechange=c=>{var d;((d=c.target)===null||d===void 0?void 0:d.state)==="activated"&&(a.onstatechange=null,clearTimeout(s),e())}:(clearTimeout(s),t(new Error("No incoming service worker found.")))})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function II(r,e){if(!e&&!r.swRegistration&&await EI(r),!(!e&&r.swRegistration)){if(!(e instanceof ServiceWorkerRegistration))throw Lt.create("invalid-sw-registration");r.swRegistration=e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function SI(r,e){e?r.vapidKey=e:r.vapidKey||(r.vapidKey=rv)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lv(r,e){if(!navigator)throw Lt.create("only-available-in-window");if(Notification.permission==="default"&&await Notification.requestPermission(),Notification.permission!=="granted")throw Lt.create("permission-blocked");return await SI(r,e?.vapidKey),await II(r,e?.serviceWorkerRegistration),hI(r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function AI(r,e,t){const s=kI(e);(await r.firebaseDependencies.analyticsProvider.get()).logEvent(s,{message_id:t[iv],message_name:t[XT],message_time:t[JT],message_device_time:Math.floor(Date.now()/1e3)})}function kI(r){switch(r){case Na.NOTIFICATION_CLICKED:return"notification_open";case Na.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function CI(r,e){const t=e.data;if(!t.isFirebaseMessaging)return;r.onMessageHandler&&t.messageType===Na.PUSH_RECEIVED&&(typeof r.onMessageHandler=="function"?r.onMessageHandler(lg(t)):r.onMessageHandler.next(lg(t)));const s=t.data;vI(s)&&s[YT]==="1"&&await AI(r,t.messageType,s)}const ug="@firebase/messaging",cg="0.12.22";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RI=r=>{const e=new wI(r.getProvider("app").getImmediate(),r.getProvider("installations-internal").getImmediate(),r.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",t=>CI(e,t)),e},PI=r=>{const e=r.getProvider("messaging").getImmediate();return{getToken:s=>lv(e,s)}};function NI(){tr(new jn("messaging",RI,"PUBLIC")),tr(new jn("messaging-internal",PI,"PRIVATE")),vn(ug,cg),vn(ug,cg,"esm2017")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uv(){try{await Oy()}catch{return!1}return typeof window<"u"&&Dy()&&K0()&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xI(r,e){if(!navigator)throw Lt.create("only-available-in-window");return r.onMessageHandler=e,()=>{r.onMessageHandler=null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DI(r=Fd()){return uv().then(e=>{if(!e)throw Lt.create("unsupported-browser")},e=>{throw Lt.create("indexed-db-unsupported")}),yo(an(r),"messaging").getImmediate()}async function cv(r,e){return r=an(r),lv(r,e)}function OI(r,e){return r=an(r),xI(r,e)}NI();var VI="firebase",bI="11.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */vn(VI,bI,"app");function qd(r,e){var t={};for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&e.indexOf(s)<0&&(t[s]=r[s]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,s=Object.getOwnPropertySymbols(r);a<s.length;a++)e.indexOf(s[a])<0&&Object.prototype.propertyIsEnumerable.call(r,s[a])&&(t[s[a]]=r[s[a]]);return t}function hv(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const LI=hv,dv=new os("auth","Firebase",hv());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bu=new Ld("@firebase/auth");function MI(r,...e){bu.logLevel<=Ie.WARN&&bu.warn(`Auth (${vo}): ${r}`,...e)}function Iu(r,...e){bu.logLevel<=Ie.ERROR&&bu.error(`Auth (${vo}): ${r}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dr(r,...e){throw Kd(r,...e)}function Zn(r,...e){return Kd(r,...e)}function fv(r,e,t){const s=Object.assign(Object.assign({},LI()),{[e]:t});return new os("auth","Firebase",s).create(e,{appName:r.name})}function di(r){return fv(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Kd(r,...e){if(typeof r!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=r.name),r._errorFactory.create(t,...s)}return dv.create(r,...e)}function fe(r,e,...t){if(!r)throw Kd(e,...t)}function Ar(r){const e="INTERNAL ASSERTION FAILED: "+r;throw Iu(e),new Error(e)}function Or(r,e){r||Ar(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vd(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.href)||""}function FI(){return hg()==="http:"||hg()==="https:"}function hg(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UI(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(FI()||$0()||"connection"in navigator)?navigator.onLine:!0}function jI(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ja{constructor(e,t){this.shortDelay=e,this.longDelay=t,Or(t>e,"Short delay should be less than long delay!"),this.isMobile=j0()||H0()}get(){return UI()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gd(r,e){Or(r.emulator,"Emulator should always be set here");const{url:t}=r.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pv{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Ar("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Ar("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Ar("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BI={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zI=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],$I=new ja(3e4,6e4);function oc(r,e){return r.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:r.tenantId}):e}async function _o(r,e,t,s,a={}){return mv(r,a,async()=>{let c={},d={};s&&(e==="GET"?d=s:c={body:JSON.stringify(s)});const m=Ua(Object.assign({key:r.config.apiKey},d)).slice(1),y=await r._getAdditionalHeaders();y["Content-Type"]="application/json",r.languageCode&&(y["X-Firebase-Locale"]=r.languageCode);const _=Object.assign({method:e,headers:y},c);return z0()||(_.referrerPolicy="no-referrer"),r.emulatorConfig&&go(r.emulatorConfig.host)&&(_.credentials="include"),pv.fetch()(await yv(r,r.config.apiHost,t,m),_)})}async function mv(r,e,t){r._canInitEmulator=!1;const s=Object.assign(Object.assign({},BI),e);try{const a=new HI(r),c=await Promise.race([t(),a.promise]);a.clearNetworkTimeout();const d=await c.json();if("needConfirmation"in d)throw du(r,"account-exists-with-different-credential",d);if(c.ok&&!("errorMessage"in d))return d;{const m=c.ok?d.errorMessage:d.error.message,[y,_]=m.split(" : ");if(y==="FEDERATED_USER_ID_ALREADY_LINKED")throw du(r,"credential-already-in-use",d);if(y==="EMAIL_EXISTS")throw du(r,"email-already-in-use",d);if(y==="USER_DISABLED")throw du(r,"user-disabled",d);const I=s[y]||y.toLowerCase().replace(/[_\s]+/g,"-");if(_)throw fv(r,I,_);Dr(r,I)}}catch(a){if(a instanceof ir)throw a;Dr(r,"network-request-failed",{message:String(a)})}}async function gv(r,e,t,s,a={}){const c=await _o(r,e,t,s,a);return"mfaPendingCredential"in c&&Dr(r,"multi-factor-auth-required",{_serverResponse:c}),c}async function yv(r,e,t,s){const a=`${e}${t}?${s}`,c=r,d=c.config.emulator?Gd(r.config,a):`${r.config.apiScheme}://${a}`;return zI.includes(t)&&(await c._persistenceManagerAvailable,c._getPersistenceType()==="COOKIE")?c._getPersistence()._getFinalTarget(d).toString():d}class HI{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(Zn(this.auth,"network-request-failed")),$I.get())})}}function du(r,e,t){const s={appName:r.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const a=Zn(r,e,s);return a.customData._tokenResponse=t,a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function WI(r,e){return _o(r,"POST","/v1/accounts:delete",e)}async function Lu(r,e){return _o(r,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ta(r){if(r)try{const e=new Date(Number(r));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function qI(r,e=!1){const t=an(r),s=await t.getIdToken(e),a=Qd(s);fe(a&&a.exp&&a.auth_time&&a.iat,t.auth,"internal-error");const c=typeof a.firebase=="object"?a.firebase:void 0,d=c?.sign_in_provider;return{claims:a,token:s,authTime:Ta(od(a.auth_time)),issuedAtTime:Ta(od(a.iat)),expirationTime:Ta(od(a.exp)),signInProvider:d||null,signInSecondFactor:c?.sign_in_second_factor||null}}function od(r){return Number(r)*1e3}function Qd(r){const[e,t,s]=r.split(".");if(e===void 0||t===void 0||s===void 0)return Iu("JWT malformed, contained fewer than 3 sections"),null;try{const a=ky(t);return a?JSON.parse(a):(Iu("Failed to decode base64 JWT payload"),null)}catch(a){return Iu("Caught error parsing JWT payload as JSON",a?.toString()),null}}function dg(r){const e=Qd(r);return fe(e,"internal-error"),fe(typeof e.exp<"u","internal-error"),fe(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Da(r,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof ir&&KI(s)&&r.auth.currentUser===r&&await r.auth.signOut(),s}}function KI({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GI{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const a=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,a)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _d{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ta(this.lastLoginAt),this.creationTime=Ta(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mu(r){var e;const t=r.auth,s=await r.getIdToken(),a=await Da(r,Lu(t,{idToken:s}));fe(a?.users.length,t,"internal-error");const c=a.users[0];r._notifyReloadListener(c);const d=!((e=c.providerUserInfo)===null||e===void 0)&&e.length?vv(c.providerUserInfo):[],m=XI(r.providerData,d),y=r.isAnonymous,_=!(r.email&&c.passwordHash)&&!m?.length,I=y?_:!1,P={uid:c.localId,displayName:c.displayName||null,photoURL:c.photoUrl||null,email:c.email||null,emailVerified:c.emailVerified||!1,phoneNumber:c.phoneNumber||null,tenantId:c.tenantId||null,providerData:m,metadata:new _d(c.createdAt,c.lastLoginAt),isAnonymous:I};Object.assign(r,P)}async function QI(r){const e=an(r);await Mu(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function XI(r,e){return[...r.filter(s=>!e.some(a=>a.providerId===s.providerId)),...e]}function vv(r){return r.map(e=>{var{providerId:t}=e,s=qd(e,["providerId"]);return{providerId:t,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function JI(r,e){const t=await mv(r,{},async()=>{const s=Ua({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:a,apiKey:c}=r.config,d=await yv(r,a,"/v1/token",`key=${c}`),m=await r._getAdditionalHeaders();m["Content-Type"]="application/x-www-form-urlencoded";const y={method:"POST",headers:m,body:s};return r.emulatorConfig&&go(r.emulatorConfig.host)&&(y.credentials="include"),pv.fetch()(d,y)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function YI(r,e){return _o(r,"POST","/v2/accounts:revokeToken",oc(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class io{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){fe(e.idToken,"internal-error"),fe(typeof e.idToken<"u","internal-error"),fe(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):dg(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){fe(e.length!==0,"internal-error");const t=dg(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(fe(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:a,expiresIn:c}=await JI(e,t);this.updateTokensAndExpiration(s,a,Number(c))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:a,expirationTime:c}=t,d=new io;return s&&(fe(typeof s=="string","internal-error",{appName:e}),d.refreshToken=s),a&&(fe(typeof a=="string","internal-error",{appName:e}),d.accessToken=a),c&&(fe(typeof c=="number","internal-error",{appName:e}),d.expirationTime=c),d}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new io,this.toJSON())}_performRefresh(){return Ar("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function si(r,e){fe(typeof r=="string"||typeof r>"u","internal-error",{appName:e})}class Fn{constructor(e){var{uid:t,auth:s,stsTokenManager:a}=e,c=qd(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new GI(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=s,this.stsTokenManager=a,this.accessToken=a.accessToken,this.displayName=c.displayName||null,this.email=c.email||null,this.emailVerified=c.emailVerified||!1,this.phoneNumber=c.phoneNumber||null,this.photoURL=c.photoURL||null,this.isAnonymous=c.isAnonymous||!1,this.tenantId=c.tenantId||null,this.providerData=c.providerData?[...c.providerData]:[],this.metadata=new _d(c.createdAt||void 0,c.lastLoginAt||void 0)}async getIdToken(e){const t=await Da(this,this.stsTokenManager.getToken(this.auth,e));return fe(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return qI(this,e)}reload(){return QI(this)}_assign(e){this!==e&&(fe(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Fn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){fe(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await Mu(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(bn(this.auth.app))return Promise.reject(di(this.auth));const e=await this.getIdToken();return await Da(this,WI(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var s,a,c,d,m,y,_,I;const P=(s=t.displayName)!==null&&s!==void 0?s:void 0,b=(a=t.email)!==null&&a!==void 0?a:void 0,$=(c=t.phoneNumber)!==null&&c!==void 0?c:void 0,z=(d=t.photoURL)!==null&&d!==void 0?d:void 0,Z=(m=t.tenantId)!==null&&m!==void 0?m:void 0,X=(y=t._redirectEventId)!==null&&y!==void 0?y:void 0,Te=(_=t.createdAt)!==null&&_!==void 0?_:void 0,pe=(I=t.lastLoginAt)!==null&&I!==void 0?I:void 0,{uid:me,emailVerified:_e,isAnonymous:Qe,providerData:Ae,stsTokenManager:N}=t;fe(me&&N,e,"internal-error");const T=io.fromJSON(this.name,N);fe(typeof me=="string",e,"internal-error"),si(P,e.name),si(b,e.name),fe(typeof _e=="boolean",e,"internal-error"),fe(typeof Qe=="boolean",e,"internal-error"),si($,e.name),si(z,e.name),si(Z,e.name),si(X,e.name),si(Te,e.name),si(pe,e.name);const A=new Fn({uid:me,auth:e,email:b,emailVerified:_e,displayName:P,isAnonymous:Qe,photoURL:z,phoneNumber:$,tenantId:Z,stsTokenManager:T,createdAt:Te,lastLoginAt:pe});return Ae&&Array.isArray(Ae)&&(A.providerData=Ae.map(C=>Object.assign({},C))),X&&(A._redirectEventId=X),A}static async _fromIdTokenResponse(e,t,s=!1){const a=new io;a.updateFromServerResponse(t);const c=new Fn({uid:t.localId,auth:e,stsTokenManager:a,isAnonymous:s});return await Mu(c),c}static async _fromGetAccountInfoResponse(e,t,s){const a=t.users[0];fe(a.localId!==void 0,"internal-error");const c=a.providerUserInfo!==void 0?vv(a.providerUserInfo):[],d=!(a.email&&a.passwordHash)&&!c?.length,m=new io;m.updateFromIdToken(s);const y=new Fn({uid:a.localId,auth:e,stsTokenManager:m,isAnonymous:d}),_={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:c,metadata:new _d(a.createdAt,a.lastLoginAt),isAnonymous:!(a.email&&a.passwordHash)&&!c?.length};return Object.assign(y,_),y}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fg=new Map;function kr(r){Or(r instanceof Function,"Expected a class definition");let e=fg.get(r);return e?(Or(e instanceof r,"Instance stored in cache mismatched with class"),e):(e=new r,fg.set(r,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _v{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}_v.type="NONE";const pg=_v;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Su(r,e,t){return`firebase:${r}:${e}:${t}`}class so{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:a,name:c}=this.auth;this.fullUserKey=Su(this.userKey,a.apiKey,c),this.fullPersistenceKey=Su("persistence",a.apiKey,c),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Lu(this.auth,{idToken:e}).catch(()=>{});return t?Fn._fromGetAccountInfoResponse(this.auth,t,e):null}return Fn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new so(kr(pg),e,s);const a=(await Promise.all(t.map(async _=>{if(await _._isAvailable())return _}))).filter(_=>_);let c=a[0]||kr(pg);const d=Su(s,e.config.apiKey,e.name);let m=null;for(const _ of t)try{const I=await _._get(d);if(I){let P;if(typeof I=="string"){const b=await Lu(e,{idToken:I}).catch(()=>{});if(!b)break;P=await Fn._fromGetAccountInfoResponse(e,b,I)}else P=Fn._fromJSON(e,I);_!==c&&(m=P),c=_;break}}catch{}const y=a.filter(_=>_._shouldAllowMigration);return!c._shouldAllowMigration||!y.length?new so(c,e,s):(c=y[0],m&&await c._set(d,m.toJSON()),await Promise.all(t.map(async _=>{if(_!==c)try{await _._remove(d)}catch{}})),new so(c,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mg(r){const e=r.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Iv(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(wv(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Av(e))return"Blackberry";if(kv(e))return"Webos";if(Ev(e))return"Safari";if((e.includes("chrome/")||Tv(e))&&!e.includes("edge/"))return"Chrome";if(Sv(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=r.match(t);if(s?.length===2)return s[1]}return"Other"}function wv(r=Mt()){return/firefox\//i.test(r)}function Ev(r=Mt()){const e=r.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Tv(r=Mt()){return/crios\//i.test(r)}function Iv(r=Mt()){return/iemobile/i.test(r)}function Sv(r=Mt()){return/android/i.test(r)}function Av(r=Mt()){return/blackberry/i.test(r)}function kv(r=Mt()){return/webos/i.test(r)}function Xd(r=Mt()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function ZI(r=Mt()){var e;return Xd(r)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function eS(){return W0()&&document.documentMode===10}function Cv(r=Mt()){return Xd(r)||Sv(r)||kv(r)||Av(r)||/windows phone/i.test(r)||Iv(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rv(r,e=[]){let t;switch(r){case"Browser":t=mg(Mt());break;case"Worker":t=`${mg(Mt())}-${r}`;break;default:t=r}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${vo}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tS{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=c=>new Promise((d,m)=>{try{const y=e(c);d(y)}catch(y){m(y)}});s.onAbort=t,this.queue.push(s);const a=this.queue.length-1;return()=>{this.queue[a]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const a of t)try{a()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s?.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nS(r,e={}){return _o(r,"GET","/v2/passwordPolicy",oc(r,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rS=6;class iS{constructor(e){var t,s,a,c;const d=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=d.minPasswordLength)!==null&&t!==void 0?t:rS,d.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=d.maxPasswordLength),d.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=d.containsLowercaseCharacter),d.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=d.containsUppercaseCharacter),d.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=d.containsNumericCharacter),d.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=d.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(a=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&a!==void 0?a:"",this.forceUpgradeOnSignin=(c=e.forceUpgradeOnSignin)!==null&&c!==void 0?c:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,s,a,c,d,m;const y={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,y),this.validatePasswordCharacterOptions(e,y),y.isValid&&(y.isValid=(t=y.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),y.isValid&&(y.isValid=(s=y.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),y.isValid&&(y.isValid=(a=y.containsLowercaseLetter)!==null&&a!==void 0?a:!0),y.isValid&&(y.isValid=(c=y.containsUppercaseLetter)!==null&&c!==void 0?c:!0),y.isValid&&(y.isValid=(d=y.containsNumericCharacter)!==null&&d!==void 0?d:!0),y.isValid&&(y.isValid=(m=y.containsNonAlphanumericCharacter)!==null&&m!==void 0?m:!0),y}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,a=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),a&&(t.meetsMaxPasswordLength=e.length<=a)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let a=0;a<e.length;a++)s=e.charAt(a),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,a,c){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=a)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sS{constructor(e,t,s,a){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=a,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new gg(this),this.idTokenSubscription=new gg(this),this.beforeStateQueue=new tS(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=dv,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=a.sdkClientVersion,this._persistenceManagerAvailable=new Promise(c=>this._resolvePersistenceManagerAvailable=c)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=kr(t)),this._initializationPromise=this.queue(async()=>{var s,a,c;if(!this._deleted&&(this.persistenceManager=await so.create(this,e),(s=this._resolvePersistenceManagerAvailable)===null||s===void 0||s.call(this),!this._deleted)){if(!((a=this._popupRedirectResolver)===null||a===void 0)&&a._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((c=this.currentUser)===null||c===void 0?void 0:c.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Lu(this,{idToken:e}),s=await Fn._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(bn(this.app)){const d=this.app.settings.authIdToken;return d?new Promise(m=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(d).then(m,m))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let a=s,c=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const d=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,m=a?._redirectEventId,y=await this.tryRedirectSignIn(e);(!d||d===m)&&y?.user&&(a=y.user,c=!0)}if(!a)return this.directlySetCurrentUser(null);if(!a._redirectEventId){if(c)try{await this.beforeStateQueue.runMiddleware(a)}catch(d){a=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(d))}return a?this.reloadAndSetCurrentUserOrClear(a):this.directlySetCurrentUser(null)}return fe(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===a._redirectEventId?this.directlySetCurrentUser(a):this.reloadAndSetCurrentUserOrClear(a)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Mu(e)}catch(t){if(t?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=jI()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(bn(this.app))return Promise.reject(di(this));const t=e?an(e):null;return t&&fe(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&fe(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return bn(this.app)?Promise.reject(di(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return bn(this.app)?Promise.reject(di(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(kr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await nS(this),t=new iS(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new os("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await YI(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&kr(e)||this._popupRedirectResolver;fe(t,this,"argument-error"),this.redirectPersistenceManager=await so.create(this,[kr(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,s;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,a){if(this._deleted)return()=>{};const c=typeof t=="function"?t:t.next.bind(t);let d=!1;const m=this._isInitialized?Promise.resolve():this._initializationPromise;if(fe(m,this,"internal-error"),m.then(()=>{d||c(this.currentUser)}),typeof t=="function"){const y=e.addObserver(t,s,a);return()=>{d=!0,y()}}else{const y=e.addObserver(t);return()=>{d=!0,y()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return fe(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Rv(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(t["X-Firebase-Client"]=s);const a=await this._getAppCheckToken();return a&&(t["X-Firebase-AppCheck"]=a),t}async _getAppCheckToken(){var e;if(bn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t?.error&&MI(`Error while retrieving App Check token: ${t.error}`),t?.token}}function ac(r){return an(r)}class gg{constructor(e){this.auth=e,this.observer=null,this.addObserver=Y0(t=>this.observer=t)}get next(){return fe(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Jd={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function oS(r){Jd=r}function aS(r){return Jd.loadJS(r)}function lS(){return Jd.gapiScript}function uS(r){return`__${r}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cS(r,e){const t=yo(r,"auth");if(t.isInitialized()){const a=t.getImmediate(),c=t.getOptions();if(Yi(c,e??{}))return a;Dr(a,"already-initialized")}return t.initialize({options:e})}function hS(r,e){const t=e?.persistence||[],s=(Array.isArray(t)?t:[t]).map(kr);e?.errorMap&&r._updateErrorMap(e.errorMap),r._initializeWithPersistence(s,e?.popupRedirectResolver)}function dS(r,e,t){const s=ac(r);fe(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const a=!1,c=Pv(e),{host:d,port:m}=fS(e),y=m===null?"":`:${m}`,_={url:`${c}//${d}${y}/`},I=Object.freeze({host:d,port:m,protocol:c.replace(":",""),options:Object.freeze({disableWarnings:a})});if(!s._canInitEmulator){fe(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),fe(Yi(_,s.config.emulator)&&Yi(I,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=_,s.emulatorConfig=I,s.settings.appVerificationDisabledForTesting=!0,go(d)?(Ny(`${c}//${d}${y}`),xy("Auth",!0)):pS()}function Pv(r){const e=r.indexOf(":");return e<0?"":r.substr(0,e+1)}function fS(r){const e=Pv(r),t=/(\/\/)?([^?#/]+)/.exec(r.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",a=/^(\[[^\]]+\])(:|$)/.exec(s);if(a){const c=a[1];return{host:c,port:yg(s.substr(c.length+1))}}else{const[c,d]=s.split(":");return{host:c,port:yg(d)}}}function yg(r){if(!r)return null;const e=Number(r);return isNaN(e)?null:e}function pS(){function r(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nv{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Ar("not implemented")}_getIdTokenResponse(e){return Ar("not implemented")}_linkToIdToken(e,t){return Ar("not implemented")}_getReauthenticationResolver(e){return Ar("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oo(r,e){return gv(r,"POST","/v1/accounts:signInWithIdp",oc(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mS="http://localhost";class ts extends Nv{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new ts(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Dr("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:a}=t,c=qd(t,["providerId","signInMethod"]);if(!s||!a)return null;const d=new ts(s,a);return d.idToken=c.idToken||void 0,d.accessToken=c.accessToken||void 0,d.secret=c.secret,d.nonce=c.nonce,d.pendingToken=c.pendingToken||null,d}_getIdTokenResponse(e){const t=this.buildRequest();return oo(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,oo(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,oo(e,t)}buildRequest(){const e={requestUri:mS,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Ua(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xv{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ba extends xv{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ai extends Ba{constructor(){super("facebook.com")}static credential(e){return ts._fromParams({providerId:ai.PROVIDER_ID,signInMethod:ai.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ai.credentialFromTaggedObject(e)}static credentialFromError(e){return ai.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ai.credential(e.oauthAccessToken)}catch{return null}}}ai.FACEBOOK_SIGN_IN_METHOD="facebook.com";ai.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class li extends Ba{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return ts._fromParams({providerId:li.PROVIDER_ID,signInMethod:li.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return li.credentialFromTaggedObject(e)}static credentialFromError(e){return li.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return li.credential(t,s)}catch{return null}}}li.GOOGLE_SIGN_IN_METHOD="google.com";li.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ui extends Ba{constructor(){super("github.com")}static credential(e){return ts._fromParams({providerId:ui.PROVIDER_ID,signInMethod:ui.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ui.credentialFromTaggedObject(e)}static credentialFromError(e){return ui.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ui.credential(e.oauthAccessToken)}catch{return null}}}ui.GITHUB_SIGN_IN_METHOD="github.com";ui.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ci extends Ba{constructor(){super("twitter.com")}static credential(e,t){return ts._fromParams({providerId:ci.PROVIDER_ID,signInMethod:ci.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return ci.credentialFromTaggedObject(e)}static credentialFromError(e){return ci.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return ci.credential(t,s)}catch{return null}}}ci.TWITTER_SIGN_IN_METHOD="twitter.com";ci.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gS(r,e){return gv(r,"POST","/v1/accounts:signUp",oc(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,a=!1){const c=await Fn._fromIdTokenResponse(e,s,a),d=vg(s);return new fi({user:c,providerId:d,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const a=vg(s);return new fi({user:e,providerId:a,_tokenResponse:s,operationType:t})}}function vg(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yS(r){var e;if(bn(r.app))return Promise.reject(di(r));const t=ac(r);if(await t._initializationPromise,!((e=t.currentUser)===null||e===void 0)&&e.isAnonymous)return new fi({user:t.currentUser,providerId:null,operationType:"signIn"});const s=await gS(t,{returnSecureToken:!0}),a=await fi._fromIdTokenResponse(t,"signIn",s,!0);return await t._updateCurrentUser(a.user),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fu extends ir{constructor(e,t,s,a){var c;super(t.code,t.message),this.operationType=s,this.user=a,Object.setPrototypeOf(this,Fu.prototype),this.customData={appName:e.name,tenantId:(c=e.tenantId)!==null&&c!==void 0?c:void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,a){return new Fu(e,t,s,a)}}function Dv(r,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(r):t._getIdTokenResponse(r)).catch(c=>{throw c.code==="auth/multi-factor-auth-required"?Fu._fromErrorAndOperation(r,c,e,s):c})}async function vS(r,e,t=!1){const s=await Da(r,e._linkToIdToken(r.auth,await r.getIdToken()),t);return fi._forOperation(r,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _S(r,e,t=!1){const{auth:s}=r;if(bn(s.app))return Promise.reject(di(s));const a="reauthenticate";try{const c=await Da(r,Dv(s,a,e,r),t);fe(c.idToken,s,"internal-error");const d=Qd(c.idToken);fe(d,s,"internal-error");const{sub:m}=d;return fe(r.uid===m,s,"user-mismatch"),fi._forOperation(r,a,c)}catch(c){throw c?.code==="auth/user-not-found"&&Dr(s,"user-mismatch"),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wS(r,e,t=!1){if(bn(r.app))return Promise.reject(di(r));const s="signIn",a=await Dv(r,s,e),c=await fi._fromIdTokenResponse(r,s,a);return t||await r._updateCurrentUser(c.user),c}function ES(r,e,t,s){return an(r).onIdTokenChanged(e,t,s)}function TS(r,e,t){return an(r).beforeAuthStateChanged(e,t)}const Uu="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ov{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Uu,"1"),this.storage.removeItem(Uu),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IS=1e3,SS=10;class Vv extends Ov{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Cv(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),a=this.localCache[t];s!==a&&e(t,a,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((d,m,y)=>{this.notifyListeners(d,y)});return}const s=e.key;t?this.detachListener():this.stopPolling();const a=()=>{const d=this.storage.getItem(s);!t&&this.localCache[s]===d||this.notifyListeners(s,d)},c=this.storage.getItem(s);eS()&&c!==e.newValue&&e.newValue!==e.oldValue?setTimeout(a,SS):a()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const a of Array.from(s))a(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},IS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Vv.type="LOCAL";const AS=Vv;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bv extends Ov{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}bv.type="SESSION";const Lv=bv;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kS(r){return Promise.all(r.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(a=>a.isListeningto(e));if(t)return t;const s=new lc(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:a,data:c}=t.data,d=this.handlersMap[a];if(!d?.size)return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:a});const m=Array.from(d).map(async _=>_(t.origin,c)),y=await kS(m);t.ports[0].postMessage({status:"done",eventId:s,eventType:a,response:y})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}lc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yd(r="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return r+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CS{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const a=typeof MessageChannel<"u"?new MessageChannel:null;if(!a)throw new Error("connection_unavailable");let c,d;return new Promise((m,y)=>{const _=Yd("",20);a.port1.start();const I=setTimeout(()=>{y(new Error("unsupported_event"))},s);d={messageChannel:a,onMessage(P){const b=P;if(b.data.eventId===_)switch(b.data.status){case"ack":clearTimeout(I),c=setTimeout(()=>{y(new Error("timeout"))},3e3);break;case"done":clearTimeout(c),m(b.data.response);break;default:clearTimeout(I),clearTimeout(c),y(new Error("invalid_response"));break}}},this.handlers.add(d),a.port1.addEventListener("message",d.onMessage),this.target.postMessage({eventType:e,eventId:_,data:t},[a.port2])}).finally(()=>{d&&this.removeMessageHandler(d)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function er(){return window}function RS(r){er().location.href=r}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mv(){return typeof er().WorkerGlobalScope<"u"&&typeof er().importScripts=="function"}async function PS(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function NS(){var r;return((r=navigator?.serviceWorker)===null||r===void 0?void 0:r.controller)||null}function xS(){return Mv()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fv="firebaseLocalStorageDb",DS=1,ju="firebaseLocalStorage",Uv="fbase_key";class za{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function uc(r,e){return r.transaction([ju],e?"readwrite":"readonly").objectStore(ju)}function OS(){const r=indexedDB.deleteDatabase(Fv);return new za(r).toPromise()}function wd(){const r=indexedDB.open(Fv,DS);return new Promise((e,t)=>{r.addEventListener("error",()=>{t(r.error)}),r.addEventListener("upgradeneeded",()=>{const s=r.result;try{s.createObjectStore(ju,{keyPath:Uv})}catch(a){t(a)}}),r.addEventListener("success",async()=>{const s=r.result;s.objectStoreNames.contains(ju)?e(s):(s.close(),await OS(),e(await wd()))})})}async function _g(r,e,t){const s=uc(r,!0).put({[Uv]:e,value:t});return new za(s).toPromise()}async function VS(r,e){const t=uc(r,!1).get(e),s=await new za(t).toPromise();return s===void 0?null:s.value}function wg(r,e){const t=uc(r,!0).delete(e);return new za(t).toPromise()}const bS=800,LS=3;class jv{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await wd(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>LS)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Mv()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=lc._getInstance(xS()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await PS(),!this.activeServiceWorker)return;this.sender=new CS(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((t=s[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||NS()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await wd();return await _g(e,Uu,"1"),await wg(e,Uu),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>_g(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>VS(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>wg(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(a=>{const c=uc(a,!1).getAll();return new za(c).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:a,value:c}of e)s.add(a),JSON.stringify(this.localCache[a])!==JSON.stringify(c)&&(this.notifyListeners(a,c),t.push(a));for(const a of Object.keys(this.localCache))this.localCache[a]&&!s.has(a)&&(this.notifyListeners(a,null),t.push(a));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const a of Array.from(s))a(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),bS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}jv.type="LOCAL";const MS=jv;new ja(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FS(r,e){return e?kr(e):(fe(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zd extends Nv{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return oo(e,this._buildIdpRequest())}_linkToIdToken(e,t){return oo(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return oo(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function US(r){return wS(r.auth,new Zd(r),r.bypassAuthState)}function jS(r){const{auth:e,user:t}=r;return fe(t,e,"internal-error"),_S(t,new Zd(r),r.bypassAuthState)}async function BS(r){const{auth:e,user:t}=r;return fe(t,e,"internal-error"),vS(t,new Zd(r),r.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bv{constructor(e,t,s,a,c=!1){this.auth=e,this.resolver=s,this.user=a,this.bypassAuthState=c,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:a,tenantId:c,error:d,type:m}=e;if(d){this.reject(d);return}const y={auth:this.auth,requestUri:t,sessionId:s,tenantId:c||void 0,postBody:a||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(m)(y))}catch(_){this.reject(_)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return US;case"linkViaPopup":case"linkViaRedirect":return BS;case"reauthViaPopup":case"reauthViaRedirect":return jS;default:Dr(this.auth,"internal-error")}}resolve(e){Or(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Or(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zS=new ja(2e3,1e4);class ro extends Bv{constructor(e,t,s,a,c){super(e,t,a,c),this.provider=s,this.authWindow=null,this.pollId=null,ro.currentPopupAction&&ro.currentPopupAction.cancel(),ro.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return fe(e,this.auth,"internal-error"),e}async onExecution(){Or(this.filter.length===1,"Popup operations only handle one event");const e=Yd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Zn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Zn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ro.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,s;if(!((s=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Zn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,zS.get())};e()}}ro.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $S="pendingRedirect",Au=new Map;class HS extends Bv{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=Au.get(this.auth._key());if(!e){try{const s=await WS(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}Au.set(this.auth._key(),e)}return this.bypassAuthState||Au.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function WS(r,e){const t=GS(e),s=KS(r);if(!await s._isAvailable())return!1;const a=await s._get(t)==="true";return await s._remove(t),a}function qS(r,e){Au.set(r._key(),e)}function KS(r){return kr(r._redirectPersistence)}function GS(r){return Su($S,r.config.apiKey,r.name)}async function QS(r,e,t=!1){if(bn(r.app))return Promise.reject(di(r));const s=ac(r),a=FS(s,e),d=await new HS(s,a,t).execute();return d&&!t&&(delete d.user._redirectEventId,await s._persistUserIfCurrent(d.user),await s._setRedirectUser(null,e)),d}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XS=600*1e3;class JS{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!YS(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var s;if(e.error&&!zv(e)){const a=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";t.onError(Zn(this.auth,a))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=XS&&this.cachedEventUids.clear(),this.cachedEventUids.has(Eg(e))}saveEventToCache(e){this.cachedEventUids.add(Eg(e)),this.lastProcessedEventTime=Date.now()}}function Eg(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(e=>e).join("-")}function zv({type:r,error:e}){return r==="unknown"&&e?.code==="auth/no-auth-event"}function YS(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return zv(r);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ZS(r,e={}){return _o(r,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e1=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,t1=/^https?/;async function n1(r){if(r.config.emulator)return;const{authorizedDomains:e}=await ZS(r);for(const t of e)try{if(r1(t))return}catch{}Dr(r,"unauthorized-domain")}function r1(r){const e=vd(),{protocol:t,hostname:s}=new URL(e);if(r.startsWith("chrome-extension://")){const d=new URL(r);return d.hostname===""&&s===""?t==="chrome-extension:"&&r.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&d.hostname===s}if(!t1.test(t))return!1;if(e1.test(r))return s===r;const a=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+a+"|"+a+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i1=new ja(3e4,6e4);function Tg(){const r=er().___jsl;if(r?.H){for(const e of Object.keys(r.H))if(r.H[e].r=r.H[e].r||[],r.H[e].L=r.H[e].L||[],r.H[e].r=[...r.H[e].L],r.CP)for(let t=0;t<r.CP.length;t++)r.CP[t]=null}}function s1(r){return new Promise((e,t)=>{var s,a,c;function d(){Tg(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Tg(),t(Zn(r,"network-request-failed"))},timeout:i1.get()})}if(!((a=(s=er().gapi)===null||s===void 0?void 0:s.iframes)===null||a===void 0)&&a.Iframe)e(gapi.iframes.getContext());else if(!((c=er().gapi)===null||c===void 0)&&c.load)d();else{const m=uS("iframefcb");return er()[m]=()=>{gapi.load?d():t(Zn(r,"network-request-failed"))},aS(`${lS()}?onload=${m}`).catch(y=>t(y))}}).catch(e=>{throw ku=null,e})}let ku=null;function o1(r){return ku=ku||s1(r),ku}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a1=new ja(5e3,15e3),l1="__/auth/iframe",u1="emulator/auth/iframe",c1={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},h1=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function d1(r){const e=r.config;fe(e.authDomain,r,"auth-domain-config-required");const t=e.emulator?Gd(e,u1):`https://${r.config.authDomain}/${l1}`,s={apiKey:e.apiKey,appName:r.name,v:vo},a=h1.get(r.config.apiHost);a&&(s.eid=a);const c=r._getFrameworks();return c.length&&(s.fw=c.join(",")),`${t}?${Ua(s).slice(1)}`}async function f1(r){const e=await o1(r),t=er().gapi;return fe(t,r,"internal-error"),e.open({where:document.body,url:d1(r),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:c1,dontclear:!0},s=>new Promise(async(a,c)=>{await s.restyle({setHideOnLeave:!1});const d=Zn(r,"network-request-failed"),m=er().setTimeout(()=>{c(d)},a1.get());function y(){er().clearTimeout(m),a(s)}s.ping(y).then(y,()=>{c(d)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p1={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},m1=500,g1=600,y1="_blank",v1="http://localhost";class Ig{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function _1(r,e,t,s=m1,a=g1){const c=Math.max((window.screen.availHeight-a)/2,0).toString(),d=Math.max((window.screen.availWidth-s)/2,0).toString();let m="";const y=Object.assign(Object.assign({},p1),{width:s.toString(),height:a.toString(),top:c,left:d}),_=Mt().toLowerCase();t&&(m=Tv(_)?y1:t),wv(_)&&(e=e||v1,y.scrollbars="yes");const I=Object.entries(y).reduce((b,[$,z])=>`${b}${$}=${z},`,"");if(ZI(_)&&m!=="_self")return w1(e||"",m),new Ig(null);const P=window.open(e||"",m,I);fe(P,r,"popup-blocked");try{P.focus()}catch{}return new Ig(P)}function w1(r,e){const t=document.createElement("a");t.href=r,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E1="__/auth/handler",T1="emulator/auth/handler",I1=encodeURIComponent("fac");async function Sg(r,e,t,s,a,c){fe(r.config.authDomain,r,"auth-domain-config-required"),fe(r.config.apiKey,r,"invalid-api-key");const d={apiKey:r.config.apiKey,appName:r.name,authType:t,redirectUrl:s,v:vo,eventId:a};if(e instanceof xv){e.setDefaultLanguage(r.languageCode),d.providerId=e.providerId||"",J0(e.getCustomParameters())||(d.customParameters=JSON.stringify(e.getCustomParameters()));for(const[I,P]of Object.entries({}))d[I]=P}if(e instanceof Ba){const I=e.getScopes().filter(P=>P!=="");I.length>0&&(d.scopes=I.join(","))}r.tenantId&&(d.tid=r.tenantId);const m=d;for(const I of Object.keys(m))m[I]===void 0&&delete m[I];const y=await r._getAppCheckToken(),_=y?`#${I1}=${encodeURIComponent(y)}`:"";return`${S1(r)}?${Ua(m).slice(1)}${_}`}function S1({config:r}){return r.emulator?Gd(r,T1):`https://${r.authDomain}/${E1}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ad="webStorageSupport";class A1{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Lv,this._completeRedirectFn=QS,this._overrideRedirectResult=qS}async _openPopup(e,t,s,a){var c;Or((c=this.eventManagers[e._key()])===null||c===void 0?void 0:c.manager,"_initialize() not called before _openPopup()");const d=await Sg(e,t,s,vd(),a);return _1(e,d,Yd())}async _openRedirect(e,t,s,a){await this._originValidation(e);const c=await Sg(e,t,s,vd(),a);return RS(c),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:a,promise:c}=this.eventManagers[t];return a?Promise.resolve(a):(Or(c,"If manager is not set, promise should be"),c)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await f1(e),s=new JS(e);return t.register("authEvent",a=>(fe(a?.authEvent,e,"invalid-auth-event"),{status:s.onEvent(a.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(ad,{type:ad},a=>{var c;const d=(c=a?.[0])===null||c===void 0?void 0:c[ad];d!==void 0&&t(!!d),Dr(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=n1(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Cv()||Ev()||Xd()}}const k1=A1;var Ag="@firebase/auth",kg="1.10.8";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C1{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e(s?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){fe(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R1(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function P1(r){tr(new jn("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),a=e.getProvider("heartbeat"),c=e.getProvider("app-check-internal"),{apiKey:d,authDomain:m}=s.options;fe(d&&!d.includes(":"),"invalid-api-key",{appName:s.name});const y={apiKey:d,authDomain:m,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Rv(r)},_=new sS(s,a,c,y);return hS(_,t),_},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),tr(new jn("auth-internal",e=>{const t=ac(e.getProvider("auth").getImmediate());return(s=>new C1(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),vn(Ag,kg,R1(r)),vn(Ag,kg,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N1=300,x1=Py("authIdTokenMaxAge")||N1;let Cg=null;const D1=r=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>x1)return;const a=t?.token;Cg!==a&&(Cg=a,await fetch(r,{method:a?"POST":"DELETE",headers:a?{Authorization:`Bearer ${a}`}:{}}))};function O1(r=Fd()){const e=yo(r,"auth");if(e.isInitialized())return e.getImmediate();const t=cS(r,{popupRedirectResolver:k1,persistence:[MS,AS,Lv]}),s=Py("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const c=new URL(s,location.origin);if(location.origin===c.origin){const d=D1(c.toString());TS(t,d,()=>d(t.currentUser)),ES(t,m=>d(m))}}const a=Cy("auth");return a&&dS(t,`http://${a}`),t}function V1(){var r,e;return(e=(r=document.getElementsByTagName("head"))===null||r===void 0?void 0:r[0])!==null&&e!==void 0?e:document}oS({loadJS(r){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",r),s.onload=e,s.onerror=a=>{const c=Zn("internal-error");c.customData=a,t(c)},s.type="text/javascript",s.charset="UTF-8",V1().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});P1("Browser");var Rg=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ef;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(N,T){function A(){}A.prototype=T.prototype,N.D=T.prototype,N.prototype=new A,N.prototype.constructor=N,N.C=function(C,x,O){for(var S=Array(arguments.length-2),Ye=2;Ye<arguments.length;Ye++)S[Ye-2]=arguments[Ye];return T.prototype[x].apply(C,S)}}function t(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(s,t),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function a(N,T,A){A||(A=0);var C=Array(16);if(typeof T=="string")for(var x=0;16>x;++x)C[x]=T.charCodeAt(A++)|T.charCodeAt(A++)<<8|T.charCodeAt(A++)<<16|T.charCodeAt(A++)<<24;else for(x=0;16>x;++x)C[x]=T[A++]|T[A++]<<8|T[A++]<<16|T[A++]<<24;T=N.g[0],A=N.g[1],x=N.g[2];var O=N.g[3],S=T+(O^A&(x^O))+C[0]+3614090360&4294967295;T=A+(S<<7&4294967295|S>>>25),S=O+(x^T&(A^x))+C[1]+3905402710&4294967295,O=T+(S<<12&4294967295|S>>>20),S=x+(A^O&(T^A))+C[2]+606105819&4294967295,x=O+(S<<17&4294967295|S>>>15),S=A+(T^x&(O^T))+C[3]+3250441966&4294967295,A=x+(S<<22&4294967295|S>>>10),S=T+(O^A&(x^O))+C[4]+4118548399&4294967295,T=A+(S<<7&4294967295|S>>>25),S=O+(x^T&(A^x))+C[5]+1200080426&4294967295,O=T+(S<<12&4294967295|S>>>20),S=x+(A^O&(T^A))+C[6]+2821735955&4294967295,x=O+(S<<17&4294967295|S>>>15),S=A+(T^x&(O^T))+C[7]+4249261313&4294967295,A=x+(S<<22&4294967295|S>>>10),S=T+(O^A&(x^O))+C[8]+1770035416&4294967295,T=A+(S<<7&4294967295|S>>>25),S=O+(x^T&(A^x))+C[9]+2336552879&4294967295,O=T+(S<<12&4294967295|S>>>20),S=x+(A^O&(T^A))+C[10]+4294925233&4294967295,x=O+(S<<17&4294967295|S>>>15),S=A+(T^x&(O^T))+C[11]+2304563134&4294967295,A=x+(S<<22&4294967295|S>>>10),S=T+(O^A&(x^O))+C[12]+1804603682&4294967295,T=A+(S<<7&4294967295|S>>>25),S=O+(x^T&(A^x))+C[13]+4254626195&4294967295,O=T+(S<<12&4294967295|S>>>20),S=x+(A^O&(T^A))+C[14]+2792965006&4294967295,x=O+(S<<17&4294967295|S>>>15),S=A+(T^x&(O^T))+C[15]+1236535329&4294967295,A=x+(S<<22&4294967295|S>>>10),S=T+(x^O&(A^x))+C[1]+4129170786&4294967295,T=A+(S<<5&4294967295|S>>>27),S=O+(A^x&(T^A))+C[6]+3225465664&4294967295,O=T+(S<<9&4294967295|S>>>23),S=x+(T^A&(O^T))+C[11]+643717713&4294967295,x=O+(S<<14&4294967295|S>>>18),S=A+(O^T&(x^O))+C[0]+3921069994&4294967295,A=x+(S<<20&4294967295|S>>>12),S=T+(x^O&(A^x))+C[5]+3593408605&4294967295,T=A+(S<<5&4294967295|S>>>27),S=O+(A^x&(T^A))+C[10]+38016083&4294967295,O=T+(S<<9&4294967295|S>>>23),S=x+(T^A&(O^T))+C[15]+3634488961&4294967295,x=O+(S<<14&4294967295|S>>>18),S=A+(O^T&(x^O))+C[4]+3889429448&4294967295,A=x+(S<<20&4294967295|S>>>12),S=T+(x^O&(A^x))+C[9]+568446438&4294967295,T=A+(S<<5&4294967295|S>>>27),S=O+(A^x&(T^A))+C[14]+3275163606&4294967295,O=T+(S<<9&4294967295|S>>>23),S=x+(T^A&(O^T))+C[3]+4107603335&4294967295,x=O+(S<<14&4294967295|S>>>18),S=A+(O^T&(x^O))+C[8]+1163531501&4294967295,A=x+(S<<20&4294967295|S>>>12),S=T+(x^O&(A^x))+C[13]+2850285829&4294967295,T=A+(S<<5&4294967295|S>>>27),S=O+(A^x&(T^A))+C[2]+4243563512&4294967295,O=T+(S<<9&4294967295|S>>>23),S=x+(T^A&(O^T))+C[7]+1735328473&4294967295,x=O+(S<<14&4294967295|S>>>18),S=A+(O^T&(x^O))+C[12]+2368359562&4294967295,A=x+(S<<20&4294967295|S>>>12),S=T+(A^x^O)+C[5]+4294588738&4294967295,T=A+(S<<4&4294967295|S>>>28),S=O+(T^A^x)+C[8]+2272392833&4294967295,O=T+(S<<11&4294967295|S>>>21),S=x+(O^T^A)+C[11]+1839030562&4294967295,x=O+(S<<16&4294967295|S>>>16),S=A+(x^O^T)+C[14]+4259657740&4294967295,A=x+(S<<23&4294967295|S>>>9),S=T+(A^x^O)+C[1]+2763975236&4294967295,T=A+(S<<4&4294967295|S>>>28),S=O+(T^A^x)+C[4]+1272893353&4294967295,O=T+(S<<11&4294967295|S>>>21),S=x+(O^T^A)+C[7]+4139469664&4294967295,x=O+(S<<16&4294967295|S>>>16),S=A+(x^O^T)+C[10]+3200236656&4294967295,A=x+(S<<23&4294967295|S>>>9),S=T+(A^x^O)+C[13]+681279174&4294967295,T=A+(S<<4&4294967295|S>>>28),S=O+(T^A^x)+C[0]+3936430074&4294967295,O=T+(S<<11&4294967295|S>>>21),S=x+(O^T^A)+C[3]+3572445317&4294967295,x=O+(S<<16&4294967295|S>>>16),S=A+(x^O^T)+C[6]+76029189&4294967295,A=x+(S<<23&4294967295|S>>>9),S=T+(A^x^O)+C[9]+3654602809&4294967295,T=A+(S<<4&4294967295|S>>>28),S=O+(T^A^x)+C[12]+3873151461&4294967295,O=T+(S<<11&4294967295|S>>>21),S=x+(O^T^A)+C[15]+530742520&4294967295,x=O+(S<<16&4294967295|S>>>16),S=A+(x^O^T)+C[2]+3299628645&4294967295,A=x+(S<<23&4294967295|S>>>9),S=T+(x^(A|~O))+C[0]+4096336452&4294967295,T=A+(S<<6&4294967295|S>>>26),S=O+(A^(T|~x))+C[7]+1126891415&4294967295,O=T+(S<<10&4294967295|S>>>22),S=x+(T^(O|~A))+C[14]+2878612391&4294967295,x=O+(S<<15&4294967295|S>>>17),S=A+(O^(x|~T))+C[5]+4237533241&4294967295,A=x+(S<<21&4294967295|S>>>11),S=T+(x^(A|~O))+C[12]+1700485571&4294967295,T=A+(S<<6&4294967295|S>>>26),S=O+(A^(T|~x))+C[3]+2399980690&4294967295,O=T+(S<<10&4294967295|S>>>22),S=x+(T^(O|~A))+C[10]+4293915773&4294967295,x=O+(S<<15&4294967295|S>>>17),S=A+(O^(x|~T))+C[1]+2240044497&4294967295,A=x+(S<<21&4294967295|S>>>11),S=T+(x^(A|~O))+C[8]+1873313359&4294967295,T=A+(S<<6&4294967295|S>>>26),S=O+(A^(T|~x))+C[15]+4264355552&4294967295,O=T+(S<<10&4294967295|S>>>22),S=x+(T^(O|~A))+C[6]+2734768916&4294967295,x=O+(S<<15&4294967295|S>>>17),S=A+(O^(x|~T))+C[13]+1309151649&4294967295,A=x+(S<<21&4294967295|S>>>11),S=T+(x^(A|~O))+C[4]+4149444226&4294967295,T=A+(S<<6&4294967295|S>>>26),S=O+(A^(T|~x))+C[11]+3174756917&4294967295,O=T+(S<<10&4294967295|S>>>22),S=x+(T^(O|~A))+C[2]+718787259&4294967295,x=O+(S<<15&4294967295|S>>>17),S=A+(O^(x|~T))+C[9]+3951481745&4294967295,N.g[0]=N.g[0]+T&4294967295,N.g[1]=N.g[1]+(x+(S<<21&4294967295|S>>>11))&4294967295,N.g[2]=N.g[2]+x&4294967295,N.g[3]=N.g[3]+O&4294967295}s.prototype.u=function(N,T){T===void 0&&(T=N.length);for(var A=T-this.blockSize,C=this.B,x=this.h,O=0;O<T;){if(x==0)for(;O<=A;)a(this,N,O),O+=this.blockSize;if(typeof N=="string"){for(;O<T;)if(C[x++]=N.charCodeAt(O++),x==this.blockSize){a(this,C),x=0;break}}else for(;O<T;)if(C[x++]=N[O++],x==this.blockSize){a(this,C),x=0;break}}this.h=x,this.o+=T},s.prototype.v=function(){var N=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);N[0]=128;for(var T=1;T<N.length-8;++T)N[T]=0;var A=8*this.o;for(T=N.length-8;T<N.length;++T)N[T]=A&255,A/=256;for(this.u(N),N=Array(16),T=A=0;4>T;++T)for(var C=0;32>C;C+=8)N[A++]=this.g[T]>>>C&255;return N};function c(N,T){var A=m;return Object.prototype.hasOwnProperty.call(A,N)?A[N]:A[N]=T(N)}function d(N,T){this.h=T;for(var A=[],C=!0,x=N.length-1;0<=x;x--){var O=N[x]|0;C&&O==T||(A[x]=O,C=!1)}this.g=A}var m={};function y(N){return-128<=N&&128>N?c(N,function(T){return new d([T|0],0>T?-1:0)}):new d([N|0],0>N?-1:0)}function _(N){if(isNaN(N)||!isFinite(N))return P;if(0>N)return X(_(-N));for(var T=[],A=1,C=0;N>=A;C++)T[C]=N/A|0,A*=4294967296;return new d(T,0)}function I(N,T){if(N.length==0)throw Error("number format error: empty string");if(T=T||10,2>T||36<T)throw Error("radix out of range: "+T);if(N.charAt(0)=="-")return X(I(N.substring(1),T));if(0<=N.indexOf("-"))throw Error('number format error: interior "-" character');for(var A=_(Math.pow(T,8)),C=P,x=0;x<N.length;x+=8){var O=Math.min(8,N.length-x),S=parseInt(N.substring(x,x+O),T);8>O?(O=_(Math.pow(T,O)),C=C.j(O).add(_(S))):(C=C.j(A),C=C.add(_(S)))}return C}var P=y(0),b=y(1),$=y(16777216);r=d.prototype,r.m=function(){if(Z(this))return-X(this).m();for(var N=0,T=1,A=0;A<this.g.length;A++){var C=this.i(A);N+=(0<=C?C:4294967296+C)*T,T*=4294967296}return N},r.toString=function(N){if(N=N||10,2>N||36<N)throw Error("radix out of range: "+N);if(z(this))return"0";if(Z(this))return"-"+X(this).toString(N);for(var T=_(Math.pow(N,6)),A=this,C="";;){var x=_e(A,T).g;A=Te(A,x.j(T));var O=((0<A.g.length?A.g[0]:A.h)>>>0).toString(N);if(A=x,z(A))return O+C;for(;6>O.length;)O="0"+O;C=O+C}},r.i=function(N){return 0>N?0:N<this.g.length?this.g[N]:this.h};function z(N){if(N.h!=0)return!1;for(var T=0;T<N.g.length;T++)if(N.g[T]!=0)return!1;return!0}function Z(N){return N.h==-1}r.l=function(N){return N=Te(this,N),Z(N)?-1:z(N)?0:1};function X(N){for(var T=N.g.length,A=[],C=0;C<T;C++)A[C]=~N.g[C];return new d(A,~N.h).add(b)}r.abs=function(){return Z(this)?X(this):this},r.add=function(N){for(var T=Math.max(this.g.length,N.g.length),A=[],C=0,x=0;x<=T;x++){var O=C+(this.i(x)&65535)+(N.i(x)&65535),S=(O>>>16)+(this.i(x)>>>16)+(N.i(x)>>>16);C=S>>>16,O&=65535,S&=65535,A[x]=S<<16|O}return new d(A,A[A.length-1]&-2147483648?-1:0)};function Te(N,T){return N.add(X(T))}r.j=function(N){if(z(this)||z(N))return P;if(Z(this))return Z(N)?X(this).j(X(N)):X(X(this).j(N));if(Z(N))return X(this.j(X(N)));if(0>this.l($)&&0>N.l($))return _(this.m()*N.m());for(var T=this.g.length+N.g.length,A=[],C=0;C<2*T;C++)A[C]=0;for(C=0;C<this.g.length;C++)for(var x=0;x<N.g.length;x++){var O=this.i(C)>>>16,S=this.i(C)&65535,Ye=N.i(x)>>>16,kt=N.i(x)&65535;A[2*C+2*x]+=S*kt,pe(A,2*C+2*x),A[2*C+2*x+1]+=O*kt,pe(A,2*C+2*x+1),A[2*C+2*x+1]+=S*Ye,pe(A,2*C+2*x+1),A[2*C+2*x+2]+=O*Ye,pe(A,2*C+2*x+2)}for(C=0;C<T;C++)A[C]=A[2*C+1]<<16|A[2*C];for(C=T;C<2*T;C++)A[C]=0;return new d(A,0)};function pe(N,T){for(;(N[T]&65535)!=N[T];)N[T+1]+=N[T]>>>16,N[T]&=65535,T++}function me(N,T){this.g=N,this.h=T}function _e(N,T){if(z(T))throw Error("division by zero");if(z(N))return new me(P,P);if(Z(N))return T=_e(X(N),T),new me(X(T.g),X(T.h));if(Z(T))return T=_e(N,X(T)),new me(X(T.g),T.h);if(30<N.g.length){if(Z(N)||Z(T))throw Error("slowDivide_ only works with positive integers.");for(var A=b,C=T;0>=C.l(N);)A=Qe(A),C=Qe(C);var x=Ae(A,1),O=Ae(C,1);for(C=Ae(C,2),A=Ae(A,2);!z(C);){var S=O.add(C);0>=S.l(N)&&(x=x.add(A),O=S),C=Ae(C,1),A=Ae(A,1)}return T=Te(N,x.j(T)),new me(x,T)}for(x=P;0<=N.l(T);){for(A=Math.max(1,Math.floor(N.m()/T.m())),C=Math.ceil(Math.log(A)/Math.LN2),C=48>=C?1:Math.pow(2,C-48),O=_(A),S=O.j(T);Z(S)||0<S.l(N);)A-=C,O=_(A),S=O.j(T);z(O)&&(O=b),x=x.add(O),N=Te(N,S)}return new me(x,N)}r.A=function(N){return _e(this,N).h},r.and=function(N){for(var T=Math.max(this.g.length,N.g.length),A=[],C=0;C<T;C++)A[C]=this.i(C)&N.i(C);return new d(A,this.h&N.h)},r.or=function(N){for(var T=Math.max(this.g.length,N.g.length),A=[],C=0;C<T;C++)A[C]=this.i(C)|N.i(C);return new d(A,this.h|N.h)},r.xor=function(N){for(var T=Math.max(this.g.length,N.g.length),A=[],C=0;C<T;C++)A[C]=this.i(C)^N.i(C);return new d(A,this.h^N.h)};function Qe(N){for(var T=N.g.length+1,A=[],C=0;C<T;C++)A[C]=N.i(C)<<1|N.i(C-1)>>>31;return new d(A,N.h)}function Ae(N,T){var A=T>>5;T%=32;for(var C=N.g.length-A,x=[],O=0;O<C;O++)x[O]=0<T?N.i(O+A)>>>T|N.i(O+A+1)<<32-T:N.i(O+A);return new d(x,N.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,d.prototype.add=d.prototype.add,d.prototype.multiply=d.prototype.j,d.prototype.modulo=d.prototype.A,d.prototype.compare=d.prototype.l,d.prototype.toNumber=d.prototype.m,d.prototype.toString=d.prototype.toString,d.prototype.getBits=d.prototype.i,d.fromNumber=_,d.fromString=I,ef=d}).apply(typeof Rg<"u"?Rg:typeof self<"u"?self:typeof window<"u"?window:{});var fu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var $v,_a,Hv,Cu,Ed,Wv,qv,Kv;(function(){var r,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(l,f,g){return l==Array.prototype||l==Object.prototype||(l[f]=g.value),l};function t(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof fu=="object"&&fu];for(var f=0;f<l.length;++f){var g=l[f];if(g&&g.Math==Math)return g}throw Error("Cannot find global object")}var s=t(this);function a(l,f){if(f)e:{var g=s;l=l.split(".");for(var w=0;w<l.length-1;w++){var V=l[w];if(!(V in g))break e;g=g[V]}l=l[l.length-1],w=g[l],f=f(w),f!=w&&f!=null&&e(g,l,{configurable:!0,writable:!0,value:f})}}function c(l,f){l instanceof String&&(l+="");var g=0,w=!1,V={next:function(){if(!w&&g<l.length){var U=g++;return{value:f(U,l[U]),done:!1}}return w=!0,{done:!0,value:void 0}}};return V[Symbol.iterator]=function(){return V},V}a("Array.prototype.values",function(l){return l||function(){return c(this,function(f,g){return g})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var d=d||{},m=this||self;function y(l){var f=typeof l;return f=f!="object"?f:l?Array.isArray(l)?"array":f:"null",f=="array"||f=="object"&&typeof l.length=="number"}function _(l){var f=typeof l;return f=="object"&&l!=null||f=="function"}function I(l,f,g){return l.call.apply(l.bind,arguments)}function P(l,f,g){if(!l)throw Error();if(2<arguments.length){var w=Array.prototype.slice.call(arguments,2);return function(){var V=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(V,w),l.apply(f,V)}}return function(){return l.apply(f,arguments)}}function b(l,f,g){return b=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?I:P,b.apply(null,arguments)}function $(l,f){var g=Array.prototype.slice.call(arguments,1);return function(){var w=g.slice();return w.push.apply(w,arguments),l.apply(this,w)}}function z(l,f){function g(){}g.prototype=f.prototype,l.aa=f.prototype,l.prototype=new g,l.prototype.constructor=l,l.Qb=function(w,V,U){for(var J=Array(arguments.length-2),Ve=2;Ve<arguments.length;Ve++)J[Ve-2]=arguments[Ve];return f.prototype[V].apply(w,J)}}function Z(l){const f=l.length;if(0<f){const g=Array(f);for(let w=0;w<f;w++)g[w]=l[w];return g}return[]}function X(l,f){for(let g=1;g<arguments.length;g++){const w=arguments[g];if(y(w)){const V=l.length||0,U=w.length||0;l.length=V+U;for(let J=0;J<U;J++)l[V+J]=w[J]}else l.push(w)}}class Te{constructor(f,g){this.i=f,this.j=g,this.h=0,this.g=null}get(){let f;return 0<this.h?(this.h--,f=this.g,this.g=f.next,f.next=null):f=this.i(),f}}function pe(l){return/^[\s\xa0]*$/.test(l)}function me(){var l=m.navigator;return l&&(l=l.userAgent)?l:""}function _e(l){return _e[" "](l),l}_e[" "]=function(){};var Qe=me().indexOf("Gecko")!=-1&&!(me().toLowerCase().indexOf("webkit")!=-1&&me().indexOf("Edge")==-1)&&!(me().indexOf("Trident")!=-1||me().indexOf("MSIE")!=-1)&&me().indexOf("Edge")==-1;function Ae(l,f,g){for(const w in l)f.call(g,l[w],w,l)}function N(l,f){for(const g in l)f.call(void 0,l[g],g,l)}function T(l){const f={};for(const g in l)f[g]=l[g];return f}const A="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function C(l,f){let g,w;for(let V=1;V<arguments.length;V++){w=arguments[V];for(g in w)l[g]=w[g];for(let U=0;U<A.length;U++)g=A[U],Object.prototype.hasOwnProperty.call(w,g)&&(l[g]=w[g])}}function x(l){var f=1;l=l.split(":");const g=[];for(;0<f&&l.length;)g.push(l.shift()),f--;return l.length&&g.push(l.join(":")),g}function O(l){m.setTimeout(()=>{throw l},0)}function S(){var l=le;let f=null;return l.g&&(f=l.g,l.g=l.g.next,l.g||(l.h=null),f.next=null),f}class Ye{constructor(){this.h=this.g=null}add(f,g){const w=kt.get();w.set(f,g),this.h?this.h.next=w:this.g=w,this.h=w}}var kt=new Te(()=>new Ct,l=>l.reset());class Ct{constructor(){this.next=this.g=this.h=null}set(f,g){this.h=f,this.g=g,this.next=null}reset(){this.next=this.g=this.h=null}}let be,Y=!1,le=new Ye,te=()=>{const l=m.Promise.resolve(void 0);be=()=>{l.then(D)}};var D=()=>{for(var l;l=S();){try{l.h.call(l.g)}catch(g){O(g)}var f=kt;f.j(l),100>f.h&&(f.h++,l.next=f.g,f.g=l)}Y=!1};function j(){this.s=this.s,this.C=this.C}j.prototype.s=!1,j.prototype.ma=function(){this.s||(this.s=!0,this.N())},j.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ae(l,f){this.type=l,this.g=this.target=f,this.defaultPrevented=!1}ae.prototype.h=function(){this.defaultPrevented=!0};var ye=(function(){if(!m.addEventListener||!Object.defineProperty)return!1;var l=!1,f=Object.defineProperty({},"passive",{get:function(){l=!0}});try{const g=()=>{};m.addEventListener("test",g,f),m.removeEventListener("test",g,f)}catch{}return l})();function we(l,f){if(ae.call(this,l?l.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,l){var g=this.type=l.type,w=l.changedTouches&&l.changedTouches.length?l.changedTouches[0]:null;if(this.target=l.target||l.srcElement,this.g=f,f=l.relatedTarget){if(Qe){e:{try{_e(f.nodeName);var V=!0;break e}catch{}V=!1}V||(f=null)}}else g=="mouseover"?f=l.fromElement:g=="mouseout"&&(f=l.toElement);this.relatedTarget=f,w?(this.clientX=w.clientX!==void 0?w.clientX:w.pageX,this.clientY=w.clientY!==void 0?w.clientY:w.pageY,this.screenX=w.screenX||0,this.screenY=w.screenY||0):(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0),this.button=l.button,this.key=l.key||"",this.ctrlKey=l.ctrlKey,this.altKey=l.altKey,this.shiftKey=l.shiftKey,this.metaKey=l.metaKey,this.pointerId=l.pointerId||0,this.pointerType=typeof l.pointerType=="string"?l.pointerType:ke[l.pointerType]||"",this.state=l.state,this.i=l,l.defaultPrevented&&we.aa.h.call(this)}}z(we,ae);var ke={2:"touch",3:"pen",4:"mouse"};we.prototype.h=function(){we.aa.h.call(this);var l=this.i;l.preventDefault?l.preventDefault():l.returnValue=!1};var De="closure_listenable_"+(1e6*Math.random()|0),Oe=0;function Me(l,f,g,w,V){this.listener=l,this.proxy=null,this.src=f,this.type=g,this.capture=!!w,this.ha=V,this.key=++Oe,this.da=this.fa=!1}function ht(l){l.da=!0,l.listener=null,l.proxy=null,l.src=null,l.ha=null}function sr(l){this.src=l,this.g={},this.h=0}sr.prototype.add=function(l,f,g,w,V){var U=l.toString();l=this.g[U],l||(l=this.g[U]=[],this.h++);var J=Vr(l,f,w,V);return-1<J?(f=l[J],g||(f.fa=!1)):(f=new Me(f,this.src,U,!!w,V),f.fa=g,l.push(f)),f};function us(l,f){var g=f.type;if(g in l.g){var w=l.g[g],V=Array.prototype.indexOf.call(w,f,void 0),U;(U=0<=V)&&Array.prototype.splice.call(w,V,1),U&&(ht(f),l.g[g].length==0&&(delete l.g[g],l.h--))}}function Vr(l,f,g,w){for(var V=0;V<l.length;++V){var U=l[V];if(!U.da&&U.listener==f&&U.capture==!!g&&U.ha==w)return V}return-1}var vi="closure_lm_"+(1e6*Math.random()|0),cs={};function To(l,f,g,w,V){if(Array.isArray(f)){for(var U=0;U<f.length;U++)To(l,f[U],g,w,V);return null}return g=Ao(g),l&&l[De]?l.K(f,g,_(w)?!!w.capture:!1,V):Io(l,f,g,!1,w,V)}function Io(l,f,g,w,V,U){if(!f)throw Error("Invalid event type");var J=_(V)?!!V.capture:!!V,Ve=ds(l);if(Ve||(l[vi]=Ve=new sr(l)),g=Ve.add(f,g,w,J,U),g.proxy)return g;if(w=Xa(),g.proxy=w,w.src=l,w.listener=g,l.addEventListener)ye||(V=J),V===void 0&&(V=!1),l.addEventListener(f.toString(),w,V);else if(l.attachEvent)l.attachEvent(ar(f.toString()),w);else if(l.addListener&&l.removeListener)l.addListener(w);else throw Error("addEventListener and attachEvent are unavailable.");return g}function Xa(){function l(g){return f.call(l.src,l.listener,g)}const f=So;return l}function hs(l,f,g,w,V){if(Array.isArray(f))for(var U=0;U<f.length;U++)hs(l,f[U],g,w,V);else w=_(w)?!!w.capture:!!w,g=Ao(g),l&&l[De]?(l=l.i,f=String(f).toString(),f in l.g&&(U=l.g[f],g=Vr(U,g,w,V),-1<g&&(ht(U[g]),Array.prototype.splice.call(U,g,1),U.length==0&&(delete l.g[f],l.h--)))):l&&(l=ds(l))&&(f=l.g[f.toString()],l=-1,f&&(l=Vr(f,g,w,V)),(g=-1<l?f[l]:null)&&or(g))}function or(l){if(typeof l!="number"&&l&&!l.da){var f=l.src;if(f&&f[De])us(f.i,l);else{var g=l.type,w=l.proxy;f.removeEventListener?f.removeEventListener(g,w,l.capture):f.detachEvent?f.detachEvent(ar(g),w):f.addListener&&f.removeListener&&f.removeListener(w),(g=ds(f))?(us(g,l),g.h==0&&(g.src=null,f[vi]=null)):ht(l)}}}function ar(l){return l in cs?cs[l]:cs[l]="on"+l}function So(l,f){if(l.da)l=!0;else{f=new we(f,this);var g=l.listener,w=l.ha||l.src;l.fa&&or(l),l=g.call(w,f)}return l}function ds(l){return l=l[vi],l instanceof sr?l:null}var fs="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ao(l){return typeof l=="function"?l:(l[fs]||(l[fs]=function(f){return l.handleEvent(f)}),l[fs])}function ot(){j.call(this),this.i=new sr(this),this.M=this,this.F=null}z(ot,j),ot.prototype[De]=!0,ot.prototype.removeEventListener=function(l,f,g,w){hs(this,l,f,g,w)};function at(l,f){var g,w=l.F;if(w)for(g=[];w;w=w.F)g.push(w);if(l=l.M,w=f.type||f,typeof f=="string")f=new ae(f,l);else if(f instanceof ae)f.target=f.target||l;else{var V=f;f=new ae(w,l),C(f,V)}if(V=!0,g)for(var U=g.length-1;0<=U;U--){var J=f.g=g[U];V=lr(J,w,!0,f)&&V}if(J=f.g=l,V=lr(J,w,!0,f)&&V,V=lr(J,w,!1,f)&&V,g)for(U=0;U<g.length;U++)J=f.g=g[U],V=lr(J,w,!1,f)&&V}ot.prototype.N=function(){if(ot.aa.N.call(this),this.i){var l=this.i,f;for(f in l.g){for(var g=l.g[f],w=0;w<g.length;w++)ht(g[w]);delete l.g[f],l.h--}}this.F=null},ot.prototype.K=function(l,f,g,w){return this.i.add(String(l),f,!1,g,w)},ot.prototype.L=function(l,f,g,w){return this.i.add(String(l),f,!0,g,w)};function lr(l,f,g,w){if(f=l.i.g[String(f)],!f)return!0;f=f.concat();for(var V=!0,U=0;U<f.length;++U){var J=f[U];if(J&&!J.da&&J.capture==g){var Ve=J.listener,lt=J.ha||J.src;J.fa&&us(l.i,J),V=Ve.call(lt,w)!==!1&&V}}return V&&!w.defaultPrevented}function ko(l,f,g){if(typeof l=="function")g&&(l=b(l,g));else if(l&&typeof l.handleEvent=="function")l=b(l.handleEvent,l);else throw Error("Invalid listener argument");return 2147483647<Number(f)?-1:m.setTimeout(l,f||0)}function br(l){l.g=ko(()=>{l.g=null,l.i&&(l.i=!1,br(l))},l.l);const f=l.h;l.h=null,l.m.apply(null,f)}class _i extends j{constructor(f,g){super(),this.m=f,this.l=g,this.h=null,this.i=!1,this.g=null}j(f){this.h=arguments,this.g?this.i=!0:br(this)}N(){super.N(),this.g&&(m.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function wi(l){j.call(this),this.h=l,this.g={}}z(wi,j);var Co=[];function Ro(l){Ae(l.g,function(f,g){this.g.hasOwnProperty(g)&&or(f)},l),l.g={}}wi.prototype.N=function(){wi.aa.N.call(this),Ro(this)},wi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Po=m.JSON.stringify,No=m.JSON.parse,xo=class{stringify(l){return m.JSON.stringify(l,void 0)}parse(l){return m.JSON.parse(l,void 0)}};function Ei(){}Ei.prototype.h=null;function ps(l){return l.h||(l.h=l.i())}function ms(){}var ln={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Bn(){ae.call(this,"d")}z(Bn,ae);function gs(){ae.call(this,"c")}z(gs,ae);var zn={},Do=null;function Ti(){return Do=Do||new ot}zn.La="serverreachability";function Oo(l){ae.call(this,zn.La,l)}z(Oo,ae);function ur(l){const f=Ti();at(f,new Oo(f))}zn.STAT_EVENT="statevent";function Vo(l,f){ae.call(this,zn.STAT_EVENT,l),this.stat=f}z(Vo,ae);function Ze(l){const f=Ti();at(f,new Vo(f,l))}zn.Ma="timingevent";function ys(l,f){ae.call(this,zn.Ma,l),this.size=f}z(ys,ae);function _n(l,f){if(typeof l!="function")throw Error("Fn must not be null and must be a function");return m.setTimeout(function(){l()},f)}function Ii(){this.g=!0}Ii.prototype.xa=function(){this.g=!1};function Si(l,f,g,w,V,U){l.info(function(){if(l.g)if(U)for(var J="",Ve=U.split("&"),lt=0;lt<Ve.length;lt++){var Ce=Ve[lt].split("=");if(1<Ce.length){var dt=Ce[0];Ce=Ce[1];var nt=dt.split("_");J=2<=nt.length&&nt[1]=="type"?J+(dt+"="+Ce+"&"):J+(dt+"=redacted&")}}else J=null;else J=U;return"XMLHTTP REQ ("+w+") [attempt "+V+"]: "+f+`
`+g+`
`+J})}function vs(l,f,g,w,V,U,J){l.info(function(){return"XMLHTTP RESP ("+w+") [ attempt "+V+"]: "+f+`
`+g+`
`+U+" "+J})}function wn(l,f,g,w){l.info(function(){return"XMLHTTP TEXT ("+f+"): "+yc(l,g)+(w?" "+w:"")})}function bo(l,f){l.info(function(){return"TIMEOUT: "+f})}Ii.prototype.info=function(){};function yc(l,f){if(!l.g)return f;if(!f)return null;try{var g=JSON.parse(f);if(g){for(l=0;l<g.length;l++)if(Array.isArray(g[l])){var w=g[l];if(!(2>w.length)){var V=w[1];if(Array.isArray(V)&&!(1>V.length)){var U=V[0];if(U!="noop"&&U!="stop"&&U!="close")for(var J=1;J<V.length;J++)V[J]=""}}}}return Po(g)}catch{return f}}var _s={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Ja={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},En;function Ai(){}z(Ai,Ei),Ai.prototype.g=function(){return new XMLHttpRequest},Ai.prototype.i=function(){return{}},En=new Ai;function Tn(l,f,g,w){this.j=l,this.i=f,this.l=g,this.R=w||1,this.U=new wi(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Ya}function Ya(){this.i=null,this.g="",this.h=!1}var Lo={},ws={};function Es(l,f,g){l.L=1,l.v=jr(en(f)),l.m=g,l.P=!0,Mo(l,null)}function Mo(l,f){l.F=Date.now(),Fe(l),l.A=en(l.v);var g=l.A,w=l.R;Array.isArray(w)||(w=[String(w)]),zr(g.i,"t",w),l.C=0,g=l.j.J,l.h=new Ya,l.g=gl(l.j,g?f:null,!l.m),0<l.O&&(l.M=new _i(b(l.Y,l,l.g),l.O)),f=l.U,g=l.g,w=l.ca;var V="readystatechange";Array.isArray(V)||(V&&(Co[0]=V.toString()),V=Co);for(var U=0;U<V.length;U++){var J=To(g,V[U],w||f.handleEvent,!1,f.h||f);if(!J)break;f.g[J.key]=J}f=l.H?T(l.H):{},l.m?(l.u||(l.u="POST"),f["Content-Type"]="application/x-www-form-urlencoded",l.g.ea(l.A,l.u,l.m,f)):(l.u="GET",l.g.ea(l.A,l.u,null,f)),ur(),Si(l.i,l.u,l.A,l.l,l.R,l.m)}Tn.prototype.ca=function(l){l=l.target;const f=this.M;f&&$t(l)==3?f.j():this.Y(l)},Tn.prototype.Y=function(l){try{if(l==this.g)e:{const nt=$t(this.g);var f=this.g.Ba();const hn=this.g.Z();if(!(3>nt)&&(nt!=3||this.g&&(this.h.h||this.g.oa()||$o(this.g)))){this.J||nt!=4||f==7||(f==8||0>=hn?ur(3):ur(2)),ki(this);var g=this.g.Z();this.X=g;t:if(Za(this)){var w=$o(this.g);l="";var V=w.length,U=$t(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){un(this),Lr(this);var J="";break t}this.h.i=new m.TextDecoder}for(f=0;f<V;f++)this.h.h=!0,l+=this.h.i.decode(w[f],{stream:!(U&&f==V-1)});w.length=0,this.h.g+=l,this.C=0,J=this.h.g}else J=this.g.oa();if(this.o=g==200,vs(this.i,this.u,this.A,this.l,this.R,nt,g),this.o){if(this.T&&!this.K){t:{if(this.g){var Ve,lt=this.g;if((Ve=lt.g?lt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!pe(Ve)){var Ce=Ve;break t}}Ce=null}if(g=Ce)wn(this.i,this.l,g,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Fo(this,g);else{this.o=!1,this.s=3,Ze(12),un(this),Lr(this);break e}}if(this.P){g=!0;let nn;for(;!this.J&&this.C<J.length;)if(nn=vc(this,J),nn==ws){nt==4&&(this.s=4,Ze(14),g=!1),wn(this.i,this.l,null,"[Incomplete Response]");break}else if(nn==Lo){this.s=4,Ze(15),wn(this.i,this.l,J,"[Invalid Chunk]"),g=!1;break}else wn(this.i,this.l,nn,null),Fo(this,nn);if(Za(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),nt!=4||J.length!=0||this.h.h||(this.s=1,Ze(16),g=!1),this.o=this.o&&g,!g)wn(this.i,this.l,J,"[Invalid Chunked Response]"),un(this),Lr(this);else if(0<J.length&&!this.W){this.W=!0;var dt=this.j;dt.g==this&&dt.ba&&!dt.M&&(dt.j.info("Great, no buffering proxy detected. Bytes received: "+J.length),Wo(dt),dt.M=!0,Ze(11))}}else wn(this.i,this.l,J,null),Fo(this,J);nt==4&&un(this),this.o&&!this.J&&(nt==4?Ds(this.j,this):(this.o=!1,Fe(this)))}else Cs(this.g),g==400&&0<J.indexOf("Unknown SID")?(this.s=3,Ze(12)):(this.s=0,Ze(13)),un(this),Lr(this)}}}catch{}finally{}};function Za(l){return l.g?l.u=="GET"&&l.L!=2&&l.j.Ca:!1}function vc(l,f){var g=l.C,w=f.indexOf(`
`,g);return w==-1?ws:(g=Number(f.substring(g,w)),isNaN(g)?Lo:(w+=1,w+g>f.length?ws:(f=f.slice(w,w+g),l.C=w+g,f)))}Tn.prototype.cancel=function(){this.J=!0,un(this)};function Fe(l){l.S=Date.now()+l.I,el(l,l.I)}function el(l,f){if(l.B!=null)throw Error("WatchDog timer not null");l.B=_n(b(l.ba,l),f)}function ki(l){l.B&&(m.clearTimeout(l.B),l.B=null)}Tn.prototype.ba=function(){this.B=null;const l=Date.now();0<=l-this.S?(bo(this.i,this.A),this.L!=2&&(ur(),Ze(17)),un(this),this.s=2,Lr(this)):el(this,this.S-l)};function Lr(l){l.j.G==0||l.J||Ds(l.j,l)}function un(l){ki(l);var f=l.M;f&&typeof f.ma=="function"&&f.ma(),l.M=null,Ro(l.U),l.g&&(f=l.g,l.g=null,f.abort(),f.ma())}function Fo(l,f){try{var g=l.j;if(g.G!=0&&(g.g==l||Ft(g.h,l))){if(!l.K&&Ft(g.h,l)&&g.G==3){try{var w=g.Da.g.parse(f)}catch{w=null}if(Array.isArray(w)&&w.length==3){var V=w;if(V[0]==0){e:if(!g.u){if(g.g)if(g.g.F+3e3<l.F)xs(g),Cn(g);else break e;Ns(g),Ze(18)}}else g.za=V[1],0<g.za-g.T&&37500>V[2]&&g.F&&g.v==0&&!g.C&&(g.C=_n(b(g.Za,g),6e3));if(1>=nl(g.h)&&g.ca){try{g.ca()}catch{}g.ca=void 0}}else pr(g,11)}else if((l.K||g.g==l)&&xs(g),!pe(f))for(V=g.Da.g.parse(f),f=0;f<V.length;f++){let Ce=V[f];if(g.T=Ce[0],Ce=Ce[1],g.G==2)if(Ce[0]=="c"){g.K=Ce[1],g.ia=Ce[2];const dt=Ce[3];dt!=null&&(g.la=dt,g.j.info("VER="+g.la));const nt=Ce[4];nt!=null&&(g.Aa=nt,g.j.info("SVER="+g.Aa));const hn=Ce[5];hn!=null&&typeof hn=="number"&&0<hn&&(w=1.5*hn,g.L=w,g.j.info("backChannelRequestTimeoutMs_="+w)),w=g;const nn=l.g;if(nn){const Oi=nn.g?nn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Oi){var U=w.h;U.g||Oi.indexOf("spdy")==-1&&Oi.indexOf("quic")==-1&&Oi.indexOf("h2")==-1||(U.j=U.l,U.g=new Set,U.h&&(Uo(U,U.h),U.h=null))}if(w.D){const Vs=nn.g?nn.g.getResponseHeader("X-HTTP-Session-Id"):null;Vs&&(w.ya=Vs,Le(w.I,w.D,Vs))}}g.G=3,g.l&&g.l.ua(),g.ba&&(g.R=Date.now()-l.F,g.j.info("Handshake RTT: "+g.R+"ms")),w=g;var J=l;if(w.qa=ml(w,w.J?w.ia:null,w.W),J.K){rl(w.h,J);var Ve=J,lt=w.L;lt&&(Ve.I=lt),Ve.B&&(ki(Ve),Fe(Ve)),w.g=J}else Di(w);0<g.i.length&&qn(g)}else Ce[0]!="stop"&&Ce[0]!="close"||pr(g,7);else g.G==3&&(Ce[0]=="stop"||Ce[0]=="close"?Ce[0]=="stop"?pr(g,7):_t(g):Ce[0]!="noop"&&g.l&&g.l.ta(Ce),g.v=0)}}ur(4)}catch{}}var tl=class{constructor(l,f){this.g=l,this.map=f}};function Ci(l){this.l=l||10,m.PerformanceNavigationTiming?(l=m.performance.getEntriesByType("navigation"),l=0<l.length&&(l[0].nextHopProtocol=="hq"||l[0].nextHopProtocol=="h2")):l=!!(m.chrome&&m.chrome.loadTimes&&m.chrome.loadTimes()&&m.chrome.loadTimes().wasFetchedViaSpdy),this.j=l?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Zt(l){return l.h?!0:l.g?l.g.size>=l.j:!1}function nl(l){return l.h?1:l.g?l.g.size:0}function Ft(l,f){return l.h?l.h==f:l.g?l.g.has(f):!1}function Uo(l,f){l.g?l.g.add(f):l.h=f}function rl(l,f){l.h&&l.h==f?l.h=null:l.g&&l.g.has(f)&&l.g.delete(f)}Ci.prototype.cancel=function(){if(this.i=il(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const l of this.g.values())l.cancel();this.g.clear()}};function il(l){if(l.h!=null)return l.i.concat(l.h.D);if(l.g!=null&&l.g.size!==0){let f=l.i;for(const g of l.g.values())f=f.concat(g.D);return f}return Z(l.i)}function Ts(l){if(l.V&&typeof l.V=="function")return l.V();if(typeof Map<"u"&&l instanceof Map||typeof Set<"u"&&l instanceof Set)return Array.from(l.values());if(typeof l=="string")return l.split("");if(y(l)){for(var f=[],g=l.length,w=0;w<g;w++)f.push(l[w]);return f}f=[],g=0;for(w in l)f[g++]=l[w];return f}function Is(l){if(l.na&&typeof l.na=="function")return l.na();if(!l.V||typeof l.V!="function"){if(typeof Map<"u"&&l instanceof Map)return Array.from(l.keys());if(!(typeof Set<"u"&&l instanceof Set)){if(y(l)||typeof l=="string"){var f=[];l=l.length;for(var g=0;g<l;g++)f.push(g);return f}f=[],g=0;for(const w in l)f[g++]=w;return f}}}function Mr(l,f){if(l.forEach&&typeof l.forEach=="function")l.forEach(f,void 0);else if(y(l)||typeof l=="string")Array.prototype.forEach.call(l,f,void 0);else for(var g=Is(l),w=Ts(l),V=w.length,U=0;U<V;U++)f.call(void 0,w[U],g&&g[U],l)}var Ri=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function _c(l,f){if(l){l=l.split("&");for(var g=0;g<l.length;g++){var w=l[g].indexOf("="),V=null;if(0<=w){var U=l[g].substring(0,w);V=l[g].substring(w+1)}else U=l[g];f(U,V?decodeURIComponent(V.replace(/\+/g," ")):"")}}}function cr(l){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,l instanceof cr){this.h=l.h,Pi(this,l.j),this.o=l.o,this.g=l.g,Fr(this,l.s),this.l=l.l;var f=l.i,g=new $n;g.i=f.i,f.g&&(g.g=new Map(f.g),g.h=f.h),Ur(this,g),this.m=l.m}else l&&(f=String(l).match(Ri))?(this.h=!1,Pi(this,f[1]||"",!0),this.o=Se(f[2]||""),this.g=Se(f[3]||"",!0),Fr(this,f[4]),this.l=Se(f[5]||"",!0),Ur(this,f[6]||"",!0),this.m=Se(f[7]||"")):(this.h=!1,this.i=new $n(null,this.h))}cr.prototype.toString=function(){var l=[],f=this.j;f&&l.push(Br(f,Ss,!0),":");var g=this.g;return(g||f=="file")&&(l.push("//"),(f=this.o)&&l.push(Br(f,Ss,!0),"@"),l.push(encodeURIComponent(String(g)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),g=this.s,g!=null&&l.push(":",String(g))),(g=this.l)&&(this.g&&g.charAt(0)!="/"&&l.push("/"),l.push(Br(g,g.charAt(0)=="/"?al:ol,!0))),(g=this.i.toString())&&l.push("?",g),(g=this.m)&&l.push("#",Br(g,jo)),l.join("")};function en(l){return new cr(l)}function Pi(l,f,g){l.j=g?Se(f,!0):f,l.j&&(l.j=l.j.replace(/:$/,""))}function Fr(l,f){if(f){if(f=Number(f),isNaN(f)||0>f)throw Error("Bad port number "+f);l.s=f}else l.s=null}function Ur(l,f,g){f instanceof $n?(l.i=f,Hn(l.i,l.h)):(g||(f=Br(f,ll)),l.i=new $n(f,l.h))}function Le(l,f,g){l.i.set(f,g)}function jr(l){return Le(l,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),l}function Se(l,f){return l?f?decodeURI(l.replace(/%25/g,"%2525")):decodeURIComponent(l):""}function Br(l,f,g){return typeof l=="string"?(l=encodeURI(l).replace(f,sl),g&&(l=l.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l):null}function sl(l){return l=l.charCodeAt(0),"%"+(l>>4&15).toString(16)+(l&15).toString(16)}var Ss=/[#\/\?@]/g,ol=/[#\?:]/g,al=/[#\?]/g,ll=/[#\?@]/g,jo=/#/g;function $n(l,f){this.h=this.g=null,this.i=l||null,this.j=!!f}function vt(l){l.g||(l.g=new Map,l.h=0,l.i&&_c(l.i,function(f,g){l.add(decodeURIComponent(f.replace(/\+/g," ")),g)}))}r=$n.prototype,r.add=function(l,f){vt(this),this.i=null,l=cn(this,l);var g=this.g.get(l);return g||this.g.set(l,g=[]),g.push(f),this.h+=1,this};function In(l,f){vt(l),f=cn(l,f),l.g.has(f)&&(l.i=null,l.h-=l.g.get(f).length,l.g.delete(f))}function Sn(l,f){return vt(l),f=cn(l,f),l.g.has(f)}r.forEach=function(l,f){vt(this),this.g.forEach(function(g,w){g.forEach(function(V){l.call(f,V,w,this)},this)},this)},r.na=function(){vt(this);const l=Array.from(this.g.values()),f=Array.from(this.g.keys()),g=[];for(let w=0;w<f.length;w++){const V=l[w];for(let U=0;U<V.length;U++)g.push(f[w])}return g},r.V=function(l){vt(this);let f=[];if(typeof l=="string")Sn(this,l)&&(f=f.concat(this.g.get(cn(this,l))));else{l=Array.from(this.g.values());for(let g=0;g<l.length;g++)f=f.concat(l[g])}return f},r.set=function(l,f){return vt(this),this.i=null,l=cn(this,l),Sn(this,l)&&(this.h-=this.g.get(l).length),this.g.set(l,[f]),this.h+=1,this},r.get=function(l,f){return l?(l=this.V(l),0<l.length?String(l[0]):f):f};function zr(l,f,g){In(l,f),0<g.length&&(l.i=null,l.g.set(cn(l,f),Z(g)),l.h+=g.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const l=[],f=Array.from(this.g.keys());for(var g=0;g<f.length;g++){var w=f[g];const U=encodeURIComponent(String(w)),J=this.V(w);for(w=0;w<J.length;w++){var V=U;J[w]!==""&&(V+="="+encodeURIComponent(String(J[w]))),l.push(V)}}return this.i=l.join("&")};function cn(l,f){return f=String(f),l.j&&(f=f.toLowerCase()),f}function Hn(l,f){f&&!l.j&&(vt(l),l.i=null,l.g.forEach(function(g,w){var V=w.toLowerCase();w!=V&&(In(this,w),zr(this,V,g))},l)),l.j=f}function wc(l,f){const g=new Ii;if(m.Image){const w=new Image;w.onload=$(zt,g,"TestLoadImage: loaded",!0,f,w),w.onerror=$(zt,g,"TestLoadImage: error",!1,f,w),w.onabort=$(zt,g,"TestLoadImage: abort",!1,f,w),w.ontimeout=$(zt,g,"TestLoadImage: timeout",!1,f,w),m.setTimeout(function(){w.ontimeout&&w.ontimeout()},1e4),w.src=l}else f(!1)}function ul(l,f){const g=new Ii,w=new AbortController,V=setTimeout(()=>{w.abort(),zt(g,"TestPingServer: timeout",!1,f)},1e4);fetch(l,{signal:w.signal}).then(U=>{clearTimeout(V),U.ok?zt(g,"TestPingServer: ok",!0,f):zt(g,"TestPingServer: server error",!1,f)}).catch(()=>{clearTimeout(V),zt(g,"TestPingServer: error",!1,f)})}function zt(l,f,g,w,V){try{V&&(V.onload=null,V.onerror=null,V.onabort=null,V.ontimeout=null),w(g)}catch{}}function Ec(){this.g=new xo}function cl(l,f,g){const w=g||"";try{Mr(l,function(V,U){let J=V;_(V)&&(J=Po(V)),f.push(w+U+"="+encodeURIComponent(J))})}catch(V){throw f.push(w+"type="+encodeURIComponent("_badmap")),V}}function hr(l){this.l=l.Ub||null,this.j=l.eb||!1}z(hr,Ei),hr.prototype.g=function(){return new Ni(this.l,this.j)},hr.prototype.i=(function(l){return function(){return l}})({});function Ni(l,f){ot.call(this),this.D=l,this.o=f,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}z(Ni,ot),r=Ni.prototype,r.open=function(l,f){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=l,this.A=f,this.readyState=1,kn(this)},r.send=function(l){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const f={headers:this.u,method:this.B,credentials:this.m,cache:void 0};l&&(f.body=l),(this.D||m).fetch(new Request(this.A,f)).then(this.Sa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,An(this)),this.readyState=0},r.Sa=function(l){if(this.g&&(this.l=l,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=l.headers,this.readyState=2,kn(this)),this.g&&(this.readyState=3,kn(this),this.g)))if(this.responseType==="arraybuffer")l.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof m.ReadableStream<"u"&&"body"in l){if(this.j=l.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;hl(this)}else l.text().then(this.Ra.bind(this),this.ga.bind(this))};function hl(l){l.j.read().then(l.Pa.bind(l)).catch(l.ga.bind(l))}r.Pa=function(l){if(this.g){if(this.o&&l.value)this.response.push(l.value);else if(!this.o){var f=l.value?l.value:new Uint8Array(0);(f=this.v.decode(f,{stream:!l.done}))&&(this.response=this.responseText+=f)}l.done?An(this):kn(this),this.readyState==3&&hl(this)}},r.Ra=function(l){this.g&&(this.response=this.responseText=l,An(this))},r.Qa=function(l){this.g&&(this.response=l,An(this))},r.ga=function(){this.g&&An(this)};function An(l){l.readyState=4,l.l=null,l.j=null,l.v=null,kn(l)}r.setRequestHeader=function(l,f){this.u.append(l,f)},r.getResponseHeader=function(l){return this.h&&this.h.get(l.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const l=[],f=this.h.entries();for(var g=f.next();!g.done;)g=g.value,l.push(g[0]+": "+g[1]),g=f.next();return l.join(`\r
`)};function kn(l){l.onreadystatechange&&l.onreadystatechange.call(l)}Object.defineProperty(Ni.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(l){this.m=l?"include":"same-origin"}});function dr(l){let f="";return Ae(l,function(g,w){f+=w,f+=":",f+=g,f+=`\r
`}),f}function $r(l,f,g){e:{for(w in g){var w=!1;break e}w=!0}w||(g=dr(g),typeof l=="string"?g!=null&&encodeURIComponent(String(g)):Le(l,f,g))}function $e(l){ot.call(this),this.headers=new Map,this.o=l||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}z($e,ot);var Tc=/^https?$/i,Bo=["POST","PUT"];r=$e.prototype,r.Ha=function(l){this.J=l},r.ea=function(l,f,g,w){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+l);f=f?f.toUpperCase():"GET",this.D=l,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():En.g(),this.v=this.o?ps(this.o):ps(En),this.g.onreadystatechange=b(this.Ea,this);try{this.B=!0,this.g.open(f,String(l),!0),this.B=!1}catch(U){xi(this,U);return}if(l=g||"",g=new Map(this.headers),w)if(Object.getPrototypeOf(w)===Object.prototype)for(var V in w)g.set(V,w[V]);else if(typeof w.keys=="function"&&typeof w.get=="function")for(const U of w.keys())g.set(U,w.get(U));else throw Error("Unknown input type for opt_headers: "+String(w));w=Array.from(g.keys()).find(U=>U.toLowerCase()=="content-type"),V=m.FormData&&l instanceof m.FormData,!(0<=Array.prototype.indexOf.call(Bo,f,void 0))||w||V||g.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[U,J]of g)this.g.setRequestHeader(U,J);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{ks(this),this.u=!0,this.g.send(l),this.u=!1}catch(U){xi(this,U)}};function xi(l,f){l.h=!1,l.g&&(l.j=!0,l.g.abort(),l.j=!1),l.l=f,l.m=5,As(l),tn(l)}function As(l){l.A||(l.A=!0,at(l,"complete"),at(l,"error"))}r.abort=function(l){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=l||7,at(this,"complete"),at(this,"abort"),tn(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),tn(this,!0)),$e.aa.N.call(this)},r.Ea=function(){this.s||(this.B||this.u||this.j?zo(this):this.bb())},r.bb=function(){zo(this)};function zo(l){if(l.h&&typeof d<"u"&&(!l.v[1]||$t(l)!=4||l.Z()!=2)){if(l.u&&$t(l)==4)ko(l.Ea,0,l);else if(at(l,"readystatechange"),$t(l)==4){l.h=!1;try{const J=l.Z();e:switch(J){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var f=!0;break e;default:f=!1}var g;if(!(g=f)){var w;if(w=J===0){var V=String(l.D).match(Ri)[1]||null;!V&&m.self&&m.self.location&&(V=m.self.location.protocol.slice(0,-1)),w=!Tc.test(V?V.toLowerCase():"")}g=w}if(g)at(l,"complete"),at(l,"success");else{l.m=6;try{var U=2<$t(l)?l.g.statusText:""}catch{U=""}l.l=U+" ["+l.Z()+"]",As(l)}}finally{tn(l)}}}}function tn(l,f){if(l.g){ks(l);const g=l.g,w=l.v[0]?()=>{}:null;l.g=null,l.v=null,f||at(l,"ready");try{g.onreadystatechange=w}catch{}}}function ks(l){l.I&&(m.clearTimeout(l.I),l.I=null)}r.isActive=function(){return!!this.g};function $t(l){return l.g?l.g.readyState:0}r.Z=function(){try{return 2<$t(this)?this.g.status:-1}catch{return-1}},r.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.Oa=function(l){if(this.g){var f=this.g.responseText;return l&&f.indexOf(l)==0&&(f=f.substring(l.length)),No(f)}};function $o(l){try{if(!l.g)return null;if("response"in l.g)return l.g.response;switch(l.H){case"":case"text":return l.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in l.g)return l.g.mozResponseArrayBuffer}return null}catch{return null}}function Cs(l){const f={};l=(l.g&&2<=$t(l)&&l.g.getAllResponseHeaders()||"").split(`\r
`);for(let w=0;w<l.length;w++){if(pe(l[w]))continue;var g=x(l[w]);const V=g[0];if(g=g[1],typeof g!="string")continue;g=g.trim();const U=f[V]||[];f[V]=U,U.push(g)}N(f,function(w){return w.join(", ")})}r.Ba=function(){return this.m},r.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Wn(l,f,g){return g&&g.internalChannelParams&&g.internalChannelParams[l]||f}function Ho(l){this.Aa=0,this.i=[],this.j=new Ii,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Wn("failFast",!1,l),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Wn("baseRetryDelayMs",5e3,l),this.cb=Wn("retryDelaySeedMs",1e4,l),this.Wa=Wn("forwardChannelMaxRetries",2,l),this.wa=Wn("forwardChannelRequestTimeoutMs",2e4,l),this.pa=l&&l.xmlHttpFactory||void 0,this.Xa=l&&l.Tb||void 0,this.Ca=l&&l.useFetchStreams||!1,this.L=void 0,this.J=l&&l.supportsCrossDomainXhr||!1,this.K="",this.h=new Ci(l&&l.concurrentRequestLimit),this.Da=new Ec,this.P=l&&l.fastHandshake||!1,this.O=l&&l.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=l&&l.Rb||!1,l&&l.xa&&this.j.xa(),l&&l.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&l&&l.detectBufferingProxy||!1,this.ja=void 0,l&&l.longPollingTimeout&&0<l.longPollingTimeout&&(this.ja=l.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}r=Ho.prototype,r.la=8,r.G=1,r.connect=function(l,f,g,w){Ze(0),this.W=l,this.H=f||{},g&&w!==void 0&&(this.H.OSID=g,this.H.OAID=w),this.F=this.X,this.I=ml(this,null,this.W),qn(this)};function _t(l){if(Rs(l),l.G==3){var f=l.U++,g=en(l.I);if(Le(g,"SID",l.K),Le(g,"RID",f),Le(g,"TYPE","terminate"),fr(l,g),f=new Tn(l,l.j,f),f.L=2,f.v=jr(en(g)),g=!1,m.navigator&&m.navigator.sendBeacon)try{g=m.navigator.sendBeacon(f.v.toString(),"")}catch{}!g&&m.Image&&(new Image().src=f.v,g=!0),g||(f.g=gl(f.j,null),f.g.ea(f.v)),f.F=Date.now(),Fe(f)}pl(l)}function Cn(l){l.g&&(Wo(l),l.g.cancel(),l.g=null)}function Rs(l){Cn(l),l.u&&(m.clearTimeout(l.u),l.u=null),xs(l),l.h.cancel(),l.s&&(typeof l.s=="number"&&m.clearTimeout(l.s),l.s=null)}function qn(l){if(!Zt(l.h)&&!l.s){l.s=!0;var f=l.Ga;be||te(),Y||(be(),Y=!0),le.add(f,l),l.B=0}}function Ic(l,f){return nl(l.h)>=l.h.j-(l.s?1:0)?!1:l.s?(l.i=f.D.concat(l.i),!0):l.G==1||l.G==2||l.B>=(l.Va?0:l.Wa)?!1:(l.s=_n(b(l.Ga,l,f),fl(l,l.B)),l.B++,!0)}r.Ga=function(l){if(this.s)if(this.s=null,this.G==1){if(!l){this.U=Math.floor(1e5*Math.random()),l=this.U++;const V=new Tn(this,this.j,l);let U=this.o;if(this.S&&(U?(U=T(U),C(U,this.S)):U=this.S),this.m!==null||this.O||(V.H=U,U=null),this.P)e:{for(var f=0,g=0;g<this.i.length;g++){t:{var w=this.i[g];if("__data__"in w.map&&(w=w.map.__data__,typeof w=="string")){w=w.length;break t}w=void 0}if(w===void 0)break;if(f+=w,4096<f){f=g;break e}if(f===4096||g===this.i.length-1){f=g+1;break e}}f=1e3}else f=1e3;f=Hr(this,V,f),g=en(this.I),Le(g,"RID",l),Le(g,"CVER",22),this.D&&Le(g,"X-HTTP-Session-Id",this.D),fr(this,g),U&&(this.O?f="headers="+encodeURIComponent(String(dr(U)))+"&"+f:this.m&&$r(g,this.m,U)),Uo(this.h,V),this.Ua&&Le(g,"TYPE","init"),this.P?(Le(g,"$req",f),Le(g,"SID","null"),V.T=!0,Es(V,g,null)):Es(V,g,f),this.G=2}}else this.G==3&&(l?Ps(this,l):this.i.length==0||Zt(this.h)||Ps(this))};function Ps(l,f){var g;f?g=f.l:g=l.U++;const w=en(l.I);Le(w,"SID",l.K),Le(w,"RID",g),Le(w,"AID",l.T),fr(l,w),l.m&&l.o&&$r(w,l.m,l.o),g=new Tn(l,l.j,g,l.B+1),l.m===null&&(g.H=l.o),f&&(l.i=f.D.concat(l.i)),f=Hr(l,g,1e3),g.I=Math.round(.5*l.wa)+Math.round(.5*l.wa*Math.random()),Uo(l.h,g),Es(g,w,f)}function fr(l,f){l.H&&Ae(l.H,function(g,w){Le(f,w,g)}),l.l&&Mr({},function(g,w){Le(f,w,g)})}function Hr(l,f,g){g=Math.min(l.i.length,g);var w=l.l?b(l.l.Na,l.l,l):null;e:{var V=l.i;let U=-1;for(;;){const J=["count="+g];U==-1?0<g?(U=V[0].g,J.push("ofs="+U)):U=0:J.push("ofs="+U);let Ve=!0;for(let lt=0;lt<g;lt++){let Ce=V[lt].g;const dt=V[lt].map;if(Ce-=U,0>Ce)U=Math.max(0,V[lt].g-100),Ve=!1;else try{cl(dt,J,"req"+Ce+"_")}catch{w&&w(dt)}}if(Ve){w=J.join("&");break e}}}return l=l.i.splice(0,g),f.D=l,w}function Di(l){if(!l.g&&!l.u){l.Y=1;var f=l.Fa;be||te(),Y||(be(),Y=!0),le.add(f,l),l.v=0}}function Ns(l){return l.g||l.u||3<=l.v?!1:(l.Y++,l.u=_n(b(l.Fa,l),fl(l,l.v)),l.v++,!0)}r.Fa=function(){if(this.u=null,dl(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var l=2*this.R;this.j.info("BP detection timer enabled: "+l),this.A=_n(b(this.ab,this),l)}},r.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Ze(10),Cn(this),dl(this))};function Wo(l){l.A!=null&&(m.clearTimeout(l.A),l.A=null)}function dl(l){l.g=new Tn(l,l.j,"rpc",l.Y),l.m===null&&(l.g.H=l.o),l.g.O=0;var f=en(l.qa);Le(f,"RID","rpc"),Le(f,"SID",l.K),Le(f,"AID",l.T),Le(f,"CI",l.F?"0":"1"),!l.F&&l.ja&&Le(f,"TO",l.ja),Le(f,"TYPE","xmlhttp"),fr(l,f),l.m&&l.o&&$r(f,l.m,l.o),l.L&&(l.g.I=l.L);var g=l.g;l=l.ia,g.L=1,g.v=jr(en(f)),g.m=null,g.P=!0,Mo(g,l)}r.Za=function(){this.C!=null&&(this.C=null,Cn(this),Ns(this),Ze(19))};function xs(l){l.C!=null&&(m.clearTimeout(l.C),l.C=null)}function Ds(l,f){var g=null;if(l.g==f){xs(l),Wo(l),l.g=null;var w=2}else if(Ft(l.h,f))g=f.D,rl(l.h,f),w=1;else return;if(l.G!=0){if(f.o)if(w==1){g=f.m?f.m.length:0,f=Date.now()-f.F;var V=l.B;w=Ti(),at(w,new ys(w,g)),qn(l)}else Di(l);else if(V=f.s,V==3||V==0&&0<f.X||!(w==1&&Ic(l,f)||w==2&&Ns(l)))switch(g&&0<g.length&&(f=l.h,f.i=f.i.concat(g)),V){case 1:pr(l,5);break;case 4:pr(l,10);break;case 3:pr(l,6);break;default:pr(l,2)}}}function fl(l,f){let g=l.Ta+Math.floor(Math.random()*l.cb);return l.isActive()||(g*=2),g*f}function pr(l,f){if(l.j.info("Error code "+f),f==2){var g=b(l.fb,l),w=l.Xa;const V=!w;w=new cr(w||"//www.google.com/images/cleardot.gif"),m.location&&m.location.protocol=="http"||Pi(w,"https"),jr(w),V?wc(w.toString(),g):ul(w.toString(),g)}else Ze(2);l.G=0,l.l&&l.l.sa(f),pl(l),Rs(l)}r.fb=function(l){l?(this.j.info("Successfully pinged google.com"),Ze(2)):(this.j.info("Failed to ping google.com"),Ze(1))};function pl(l){if(l.G=0,l.ka=[],l.l){const f=il(l.h);(f.length!=0||l.i.length!=0)&&(X(l.ka,f),X(l.ka,l.i),l.h.i.length=0,Z(l.i),l.i.length=0),l.l.ra()}}function ml(l,f,g){var w=g instanceof cr?en(g):new cr(g);if(w.g!="")f&&(w.g=f+"."+w.g),Fr(w,w.s);else{var V=m.location;w=V.protocol,f=f?f+"."+V.hostname:V.hostname,V=+V.port;var U=new cr(null);w&&Pi(U,w),f&&(U.g=f),V&&Fr(U,V),g&&(U.l=g),w=U}return g=l.D,f=l.ya,g&&f&&Le(w,g,f),Le(w,"VER",l.la),fr(l,w),w}function gl(l,f,g){if(f&&!l.J)throw Error("Can't create secondary domain capable XhrIo object.");return f=l.Ca&&!l.pa?new $e(new hr({eb:g})):new $e(l.pa),f.Ha(l.J),f}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function qo(){}r=qo.prototype,r.ua=function(){},r.ta=function(){},r.sa=function(){},r.ra=function(){},r.isActive=function(){return!0},r.Na=function(){};function Os(){}Os.prototype.g=function(l,f){return new Ut(l,f)};function Ut(l,f){ot.call(this),this.g=new Ho(f),this.l=l,this.h=f&&f.messageUrlParams||null,l=f&&f.messageHeaders||null,f&&f.clientProtocolHeaderRequired&&(l?l["X-Client-Protocol"]="webchannel":l={"X-Client-Protocol":"webchannel"}),this.g.o=l,l=f&&f.initMessageHeaders||null,f&&f.messageContentType&&(l?l["X-WebChannel-Content-Type"]=f.messageContentType:l={"X-WebChannel-Content-Type":f.messageContentType}),f&&f.va&&(l?l["X-WebChannel-Client-Profile"]=f.va:l={"X-WebChannel-Client-Profile":f.va}),this.g.S=l,(l=f&&f.Sb)&&!pe(l)&&(this.g.m=l),this.v=f&&f.supportsCrossDomainXhr||!1,this.u=f&&f.sendRawJson||!1,(f=f&&f.httpSessionIdParam)&&!pe(f)&&(this.g.D=f,l=this.h,l!==null&&f in l&&(l=this.h,f in l&&delete l[f])),this.j=new Kn(this)}z(Ut,ot),Ut.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Ut.prototype.close=function(){_t(this.g)},Ut.prototype.o=function(l){var f=this.g;if(typeof l=="string"){var g={};g.__data__=l,l=g}else this.u&&(g={},g.__data__=Po(l),l=g);f.i.push(new tl(f.Ya++,l)),f.G==3&&qn(f)},Ut.prototype.N=function(){this.g.l=null,delete this.j,_t(this.g),delete this.g,Ut.aa.N.call(this)};function yl(l){Bn.call(this),l.__headers__&&(this.headers=l.__headers__,this.statusCode=l.__status__,delete l.__headers__,delete l.__status__);var f=l.__sm__;if(f){e:{for(const g in f){l=g;break e}l=void 0}(this.i=l)&&(l=this.i,f=f!==null&&l in f?f[l]:void 0),this.data=f}else this.data=l}z(yl,Bn);function vl(){gs.call(this),this.status=1}z(vl,gs);function Kn(l){this.g=l}z(Kn,qo),Kn.prototype.ua=function(){at(this.g,"a")},Kn.prototype.ta=function(l){at(this.g,new yl(l))},Kn.prototype.sa=function(l){at(this.g,new vl)},Kn.prototype.ra=function(){at(this.g,"b")},Os.prototype.createWebChannel=Os.prototype.g,Ut.prototype.send=Ut.prototype.o,Ut.prototype.open=Ut.prototype.m,Ut.prototype.close=Ut.prototype.close,Kv=function(){return new Os},qv=function(){return Ti()},Wv=zn,Ed={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},_s.NO_ERROR=0,_s.TIMEOUT=8,_s.HTTP_ERROR=6,Cu=_s,Ja.COMPLETE="complete",Hv=Ja,ms.EventType=ln,ln.OPEN="a",ln.CLOSE="b",ln.ERROR="c",ln.MESSAGE="d",ot.prototype.listen=ot.prototype.K,_a=ms,$e.prototype.listenOnce=$e.prototype.L,$e.prototype.getLastError=$e.prototype.Ka,$e.prototype.getLastErrorCode=$e.prototype.Ba,$e.prototype.getStatus=$e.prototype.Z,$e.prototype.getResponseJson=$e.prototype.Oa,$e.prototype.getResponseText=$e.prototype.oa,$e.prototype.send=$e.prototype.ea,$e.prototype.setWithCredentials=$e.prototype.Ha,$v=$e}).apply(typeof fu<"u"?fu:typeof self<"u"?self:typeof window<"u"?window:{});const Pg="@firebase/firestore",Ng="4.8.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ot.UNAUTHENTICATED=new Ot(null),Ot.GOOGLE_CREDENTIALS=new Ot("google-credentials-uid"),Ot.FIRST_PARTY=new Ot("first-party-uid"),Ot.MOCK_USER=new Ot("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let wo="11.10.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ns=new Ld("@firebase/firestore");function to(){return ns.logLevel}function se(r,...e){if(ns.logLevel<=Ie.DEBUG){const t=e.map(tf);ns.debug(`Firestore (${wo}): ${r}`,...t)}}function rs(r,...e){if(ns.logLevel<=Ie.ERROR){const t=e.map(tf);ns.error(`Firestore (${wo}): ${r}`,...t)}}function uo(r,...e){if(ns.logLevel<=Ie.WARN){const t=e.map(tf);ns.warn(`Firestore (${wo}): ${r}`,...t)}}function tf(r){if(typeof r=="string")return r;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return(function(t){return JSON.stringify(t)})(r)}catch{return r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ve(r,e,t){let s="Unexpected state";typeof e=="string"?s=e:t=e,Gv(r,s,t)}function Gv(r,e,t){let s=`FIRESTORE (${wo}) INTERNAL ASSERTION FAILED: ${e} (ID: ${r.toString(16)})`;if(t!==void 0)try{s+=" CONTEXT: "+JSON.stringify(t)}catch{s+=" CONTEXT: "+t}throw rs(s),new Error(s)}function Je(r,e,t,s){let a="Unexpected state";typeof t=="string"?a=t:s=t,r||Gv(e,a,s)}function je(r,e){return r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class he extends ir{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xi{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qv{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class b1{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(Ot.UNAUTHENTICATED)))}shutdown(){}}class L1{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class M1{constructor(e){this.t=e,this.currentUser=Ot.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Je(this.o===void 0,42304);let s=this.i;const a=y=>this.i!==s?(s=this.i,t(y)):Promise.resolve();let c=new Xi;this.o=()=>{this.i++,this.currentUser=this.u(),c.resolve(),c=new Xi,e.enqueueRetryable((()=>a(this.currentUser)))};const d=()=>{const y=c;e.enqueueRetryable((async()=>{await y.promise,await a(this.currentUser)}))},m=y=>{se("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=y,this.o&&(this.auth.addAuthTokenListener(this.o),d())};this.t.onInit((y=>m(y))),setTimeout((()=>{if(!this.auth){const y=this.t.getImmediate({optional:!0});y?m(y):(se("FirebaseAuthCredentialsProvider","Auth not yet detected"),c.resolve(),c=new Xi)}}),0),d()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((s=>this.i!==e?(se("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Je(typeof s.accessToken=="string",31837,{l:s}),new Qv(s.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Je(e===null||typeof e=="string",2055,{h:e}),new Ot(e)}}class F1{constructor(e,t,s){this.P=e,this.T=t,this.I=s,this.type="FirstParty",this.user=Ot.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class U1{constructor(e,t,s){this.P=e,this.T=t,this.I=s}getToken(){return Promise.resolve(new F1(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(Ot.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class xg{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class j1{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,bn(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){Je(this.o===void 0,3512);const s=c=>{c.error!=null&&se("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${c.error.message}`);const d=c.token!==this.m;return this.m=c.token,se("FirebaseAppCheckTokenProvider",`Received ${d?"new":"existing"} token.`),d?t(c.token):Promise.resolve()};this.o=c=>{e.enqueueRetryable((()=>s(c)))};const a=c=>{se("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=c,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((c=>a(c))),setTimeout((()=>{if(!this.appCheck){const c=this.V.getImmediate({optional:!0});c?a(c):se("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new xg(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(Je(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new xg(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B1(r){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(r);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<r;s++)t[s]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z1(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nf{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const a=B1(40);for(let c=0;c<a.length;++c)s.length<20&&a[c]<t&&(s+=e.charAt(a[c]%62))}return s}}function Ne(r,e){return r<e?-1:r>e?1:0}function Td(r,e){let t=0;for(;t<r.length&&t<e.length;){const s=r.codePointAt(t),a=e.codePointAt(t);if(s!==a){if(s<128&&a<128)return Ne(s,a);{const c=z1(),d=$1(c.encode(Dg(r,t)),c.encode(Dg(e,t)));return d!==0?d:Ne(s,a)}}t+=s>65535?2:1}return Ne(r.length,e.length)}function Dg(r,e){return r.codePointAt(e)>65535?r.substring(e,e+2):r.substring(e,e+1)}function $1(r,e){for(let t=0;t<r.length&&t<e.length;++t)if(r[t]!==e[t])return Ne(r[t],e[t]);return Ne(r.length,e.length)}function co(r,e,t){return r.length===e.length&&r.every(((s,a)=>t(s,e[a])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Og="__name__";class Yn{constructor(e,t,s){t===void 0?t=0:t>e.length&&ve(637,{offset:t,range:e.length}),s===void 0?s=e.length-t:s>e.length-t&&ve(1746,{length:s,range:e.length-t}),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return Yn.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Yn?e.forEach((s=>{t.push(s)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let a=0;a<s;a++){const c=Yn.compareSegments(e.get(a),t.get(a));if(c!==0)return c}return Ne(e.length,t.length)}static compareSegments(e,t){const s=Yn.isNumericId(e),a=Yn.isNumericId(t);return s&&!a?-1:!s&&a?1:s&&a?Yn.extractNumericId(e).compare(Yn.extractNumericId(t)):Td(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return ef.fromString(e.substring(4,e.length-2))}}class tt extends Yn{construct(e,t,s){return new tt(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new he(K.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter((a=>a.length>0)))}return new tt(t)}static emptyPath(){return new tt([])}}const H1=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class St extends Yn{construct(e,t,s){return new St(e,t,s)}static isValidIdentifier(e){return H1.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),St.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Og}static keyField(){return new St([Og])}static fromServerFormat(e){const t=[];let s="",a=0;const c=()=>{if(s.length===0)throw new he(K.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let d=!1;for(;a<e.length;){const m=e[a];if(m==="\\"){if(a+1===e.length)throw new he(K.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const y=e[a+1];if(y!=="\\"&&y!=="."&&y!=="`")throw new he(K.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=y,a+=2}else m==="`"?(d=!d,a++):m!=="."||d?(s+=m,a++):(c(),a++)}if(c(),d)throw new he(K.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new St(t)}static emptyPath(){return new St([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ge{constructor(e){this.path=e}static fromPath(e){return new ge(tt.fromString(e))}static fromName(e){return new ge(tt.fromString(e).popFirst(5))}static empty(){return new ge(tt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&tt.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return tt.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ge(new tt(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function W1(r,e,t){if(!t)throw new he(K.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${e}.`)}function q1(r,e,t,s){if(e===!0&&s===!0)throw new he(K.INVALID_ARGUMENT,`${r} and ${t} cannot be used together.`)}function Vg(r){if(!ge.isDocumentKey(r))throw new he(K.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function Xv(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}function rf(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const e=(function(s){return s.constructor?s.constructor.name:null})(r);return e?`a custom ${e} object`:"an object"}}return typeof r=="function"?"a function":ve(12329,{type:typeof r})}function Id(r,e){if("_delegate"in r&&(r=r._delegate),!(r instanceof e)){if(e.name===r.constructor.name)throw new he(K.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=rf(r);throw new he(K.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return r}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function st(r,e){const t={typeString:r};return e&&(t.value=e),t}function $a(r,e){if(!Xv(r))throw new he(K.INVALID_ARGUMENT,"JSON must be an object");let t;for(const s in e)if(e[s]){const a=e[s].typeString,c="value"in e[s]?{value:e[s].value}:void 0;if(!(s in r)){t=`JSON missing required field: '${s}'`;break}const d=r[s];if(a&&typeof d!==a){t=`JSON field '${s}' must be a ${a}.`;break}if(c!==void 0&&d!==c.value){t=`Expected '${s}' field to equal '${c.value}'`;break}}if(t)throw new he(K.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bg=-62135596800,Lg=1e6;class qe{static now(){return qe.fromMillis(Date.now())}static fromDate(e){return qe.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor((e-1e3*t)*Lg);return new qe(t,s)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new he(K.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new he(K.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<bg)throw new he(K.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new he(K.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Lg}_compareTo(e){return this.seconds===e.seconds?Ne(this.nanoseconds,e.nanoseconds):Ne(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:qe._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if($a(e,qe._jsonSchema))return new qe(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-bg;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}qe._jsonSchemaVersion="firestore/timestamp/1.0",qe._jsonSchema={type:st("string",qe._jsonSchemaVersion),seconds:st("number"),nanoseconds:st("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class We{static fromTimestamp(e){return new We(e)}static min(){return new We(new qe(0,0))}static max(){return new We(new qe(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oa=-1;function K1(r,e){const t=r.toTimestamp().seconds,s=r.toTimestamp().nanoseconds+1,a=We.fromTimestamp(s===1e9?new qe(t+1,0):new qe(t,s));return new pi(a,ge.empty(),e)}function G1(r){return new pi(r.readTime,r.key,Oa)}class pi{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new pi(We.min(),ge.empty(),Oa)}static max(){return new pi(We.max(),ge.empty(),Oa)}}function Q1(r,e){let t=r.readTime.compareTo(e.readTime);return t!==0?t:(t=ge.comparator(r.documentKey,e.documentKey),t!==0?t:Ne(r.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X1="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class J1{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sf(r){if(r.code!==K.FAILED_PRECONDITION||r.message!==X1)throw r;se("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&ve(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new B(((s,a)=>{this.nextCallback=c=>{this.wrapSuccess(e,c).next(s,a)},this.catchCallback=c=>{this.wrapFailure(t,c).next(s,a)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof B?t:B.resolve(t)}catch(t){return B.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):B.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):B.reject(t)}static resolve(e){return new B(((t,s)=>{t(e)}))}static reject(e){return new B(((t,s)=>{s(e)}))}static waitFor(e){return new B(((t,s)=>{let a=0,c=0,d=!1;e.forEach((m=>{++a,m.next((()=>{++c,d&&c===a&&t()}),(y=>s(y)))})),d=!0,c===a&&t()}))}static or(e){let t=B.resolve(!1);for(const s of e)t=t.next((a=>a?B.resolve(a):s()));return t}static forEach(e,t){const s=[];return e.forEach(((a,c)=>{s.push(t.call(this,a,c))})),this.waitFor(s)}static mapArray(e,t){return new B(((s,a)=>{const c=e.length,d=new Array(c);let m=0;for(let y=0;y<c;y++){const _=y;t(e[_]).next((I=>{d[_]=I,++m,m===c&&s(d)}),(I=>a(I)))}}))}static doWhile(e,t){return new B(((s,a)=>{const c=()=>{e()===!0?t().next((()=>{c()}),a):s()};c()}))}}function Y1(r){const e=r.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Ha(r){return r.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class of{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=s=>this._e(s),this.ae=s=>t.writeSequenceNumber(s))}_e(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ae&&this.ae(e),e}}of.ue=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const af=-1;function lf(r){return r==null}function Bu(r){return r===0&&1/r==-1/0}function Z1(r){return typeof r=="number"&&Number.isInteger(r)&&!Bu(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jv="";function eA(r){let e="";for(let t=0;t<r.length;t++)e.length>0&&(e=Mg(e)),e=tA(r.get(t),e);return Mg(e)}function tA(r,e){let t=e;const s=r.length;for(let a=0;a<s;a++){const c=r.charAt(a);switch(c){case"\0":t+="";break;case Jv:t+="";break;default:t+=c}}return t}function Mg(r){return r+Jv+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fg(r){let e=0;for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e++;return e}function Eo(r,e){for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e(t,r[t])}function Yv(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yt{constructor(e,t){this.comparator=e,this.root=t||Tt.EMPTY}insert(e,t){return new Yt(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Tt.BLACK,null,null))}remove(e){return new Yt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Tt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const a=this.comparator(e,s.key);if(a===0)return t+s.left.size;a<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,s)=>(e(t,s),!1)))}toString(){const e=[];return this.inorderTraversal(((t,s)=>(e.push(`${t}:${s}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new pu(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new pu(this.root,e,this.comparator,!1)}getReverseIterator(){return new pu(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new pu(this.root,e,this.comparator,!0)}}class pu{constructor(e,t,s,a){this.isReverse=a,this.nodeStack=[];let c=1;for(;!e.isEmpty();)if(c=t?s(e.key,t):1,t&&a&&(c*=-1),c<0)e=this.isReverse?e.left:e.right;else{if(c===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Tt{constructor(e,t,s,a,c){this.key=e,this.value=t,this.color=s??Tt.RED,this.left=a??Tt.EMPTY,this.right=c??Tt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,a,c){return new Tt(e??this.key,t??this.value,s??this.color,a??this.left,c??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let a=this;const c=s(e,a.key);return a=c<0?a.copy(null,null,null,a.left.insert(e,t,s),null):c===0?a.copy(null,t,null,null,null):a.copy(null,null,null,null,a.right.insert(e,t,s)),a.fixUp()}removeMin(){if(this.left.isEmpty())return Tt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,a=this;if(t(e,a.key)<0)a.left.isEmpty()||a.left.isRed()||a.left.left.isRed()||(a=a.moveRedLeft()),a=a.copy(null,null,null,a.left.remove(e,t),null);else{if(a.left.isRed()&&(a=a.rotateRight()),a.right.isEmpty()||a.right.isRed()||a.right.left.isRed()||(a=a.moveRedRight()),t(e,a.key)===0){if(a.right.isEmpty())return Tt.EMPTY;s=a.right.min(),a=a.copy(s.key,s.value,null,null,a.right.removeMin())}a=a.copy(null,null,null,null,a.right.remove(e,t))}return a.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Tt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Tt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw ve(43730,{key:this.key,value:this.value});if(this.right.isRed())throw ve(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw ve(27949);return e+(this.isRed()?0:1)}}Tt.EMPTY=null,Tt.RED=!0,Tt.BLACK=!1;Tt.EMPTY=new class{constructor(){this.size=0}get key(){throw ve(57766)}get value(){throw ve(16141)}get color(){throw ve(16727)}get left(){throw ve(29726)}get right(){throw ve(36894)}copy(e,t,s,a,c){return this}insert(e,t,s){return new Tt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At{constructor(e){this.comparator=e,this.data=new Yt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,s)=>(e(t),!1)))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const a=s.getNext();if(this.comparator(a.key,e[1])>=0)return;t(a.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Ug(this.data.getIterator())}getIteratorFrom(e){return new Ug(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((s=>{t=t.add(s)})),t}isEqual(e){if(!(e instanceof At)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const a=t.getNext().key,c=s.getNext().key;if(this.comparator(a,c)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new At(this.comparator);return t.data=e,t}}class Ug{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Un{constructor(e){this.fields=e,e.sort(St.comparator)}static empty(){return new Un([])}unionWith(e){let t=new At(St.comparator);for(const s of this.fields)t=t.add(s);for(const s of e)t=t.add(s);return new Un(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return co(this.fields,e.fields,((t,s)=>t.isEqual(s)))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nA extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nr{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(a){try{return atob(a)}catch(c){throw typeof DOMException<"u"&&c instanceof DOMException?new nA("Invalid base64 string: "+c):c}})(e);return new nr(t)}static fromUint8Array(e){const t=(function(a){let c="";for(let d=0;d<a.length;++d)c+=String.fromCharCode(a[d]);return c})(e);return new nr(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const s=new Uint8Array(t.length);for(let a=0;a<t.length;a++)s[a]=t.charCodeAt(a);return s})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ne(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}nr.EMPTY_BYTE_STRING=new nr("");const rA=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function is(r){if(Je(!!r,39018),typeof r=="string"){let e=0;const t=rA.exec(r);if(Je(!!t,46558,{timestamp:r}),t[1]){let a=t[1];a=(a+"000000000").substr(0,9),e=Number(a)}const s=new Date(r);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:It(r.seconds),nanos:It(r.nanos)}}function It(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function ho(r){return typeof r=="string"?nr.fromBase64String(r):nr.fromUint8Array(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zv="server_timestamp",e_="__type__",t_="__previous_value__",n_="__local_write_time__";function uf(r){var e,t;return((t=(((e=r?.mapValue)===null||e===void 0?void 0:e.fields)||{})[e_])===null||t===void 0?void 0:t.stringValue)===Zv}function cf(r){const e=r.mapValue.fields[t_];return uf(e)?cf(e):e}function zu(r){const e=is(r.mapValue.fields[n_].timestampValue);return new qe(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iA{constructor(e,t,s,a,c,d,m,y,_,I){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=a,this.ssl=c,this.forceLongPolling=d,this.autoDetectLongPolling=m,this.longPollingOptions=y,this.useFetchStreams=_,this.isUsingEmulator=I}}const $u="(default)";class Hu{constructor(e,t){this.projectId=e,this.database=t||$u}static empty(){return new Hu("","")}get isDefaultDatabase(){return this.database===$u}isEqual(e){return e instanceof Hu&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r_="__type__",sA="__max__",mu={mapValue:{}},i_="__vector__",Sd="value";function ss(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?uf(r)?4:aA(r)?9007199254740991:oA(r)?10:11:ve(28295,{value:r})}function rr(r,e){if(r===e)return!0;const t=ss(r);if(t!==ss(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===e.booleanValue;case 4:return zu(r).isEqual(zu(e));case 3:return(function(a,c){if(typeof a.timestampValue=="string"&&typeof c.timestampValue=="string"&&a.timestampValue.length===c.timestampValue.length)return a.timestampValue===c.timestampValue;const d=is(a.timestampValue),m=is(c.timestampValue);return d.seconds===m.seconds&&d.nanos===m.nanos})(r,e);case 5:return r.stringValue===e.stringValue;case 6:return(function(a,c){return ho(a.bytesValue).isEqual(ho(c.bytesValue))})(r,e);case 7:return r.referenceValue===e.referenceValue;case 8:return(function(a,c){return It(a.geoPointValue.latitude)===It(c.geoPointValue.latitude)&&It(a.geoPointValue.longitude)===It(c.geoPointValue.longitude)})(r,e);case 2:return(function(a,c){if("integerValue"in a&&"integerValue"in c)return It(a.integerValue)===It(c.integerValue);if("doubleValue"in a&&"doubleValue"in c){const d=It(a.doubleValue),m=It(c.doubleValue);return d===m?Bu(d)===Bu(m):isNaN(d)&&isNaN(m)}return!1})(r,e);case 9:return co(r.arrayValue.values||[],e.arrayValue.values||[],rr);case 10:case 11:return(function(a,c){const d=a.mapValue.fields||{},m=c.mapValue.fields||{};if(Fg(d)!==Fg(m))return!1;for(const y in d)if(d.hasOwnProperty(y)&&(m[y]===void 0||!rr(d[y],m[y])))return!1;return!0})(r,e);default:return ve(52216,{left:r})}}function Va(r,e){return(r.values||[]).find((t=>rr(t,e)))!==void 0}function fo(r,e){if(r===e)return 0;const t=ss(r),s=ss(e);if(t!==s)return Ne(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return Ne(r.booleanValue,e.booleanValue);case 2:return(function(c,d){const m=It(c.integerValue||c.doubleValue),y=It(d.integerValue||d.doubleValue);return m<y?-1:m>y?1:m===y?0:isNaN(m)?isNaN(y)?0:-1:1})(r,e);case 3:return jg(r.timestampValue,e.timestampValue);case 4:return jg(zu(r),zu(e));case 5:return Td(r.stringValue,e.stringValue);case 6:return(function(c,d){const m=ho(c),y=ho(d);return m.compareTo(y)})(r.bytesValue,e.bytesValue);case 7:return(function(c,d){const m=c.split("/"),y=d.split("/");for(let _=0;_<m.length&&_<y.length;_++){const I=Ne(m[_],y[_]);if(I!==0)return I}return Ne(m.length,y.length)})(r.referenceValue,e.referenceValue);case 8:return(function(c,d){const m=Ne(It(c.latitude),It(d.latitude));return m!==0?m:Ne(It(c.longitude),It(d.longitude))})(r.geoPointValue,e.geoPointValue);case 9:return Bg(r.arrayValue,e.arrayValue);case 10:return(function(c,d){var m,y,_,I;const P=c.fields||{},b=d.fields||{},$=(m=P[Sd])===null||m===void 0?void 0:m.arrayValue,z=(y=b[Sd])===null||y===void 0?void 0:y.arrayValue,Z=Ne(((_=$?.values)===null||_===void 0?void 0:_.length)||0,((I=z?.values)===null||I===void 0?void 0:I.length)||0);return Z!==0?Z:Bg($,z)})(r.mapValue,e.mapValue);case 11:return(function(c,d){if(c===mu.mapValue&&d===mu.mapValue)return 0;if(c===mu.mapValue)return 1;if(d===mu.mapValue)return-1;const m=c.fields||{},y=Object.keys(m),_=d.fields||{},I=Object.keys(_);y.sort(),I.sort();for(let P=0;P<y.length&&P<I.length;++P){const b=Td(y[P],I[P]);if(b!==0)return b;const $=fo(m[y[P]],_[I[P]]);if($!==0)return $}return Ne(y.length,I.length)})(r.mapValue,e.mapValue);default:throw ve(23264,{le:t})}}function jg(r,e){if(typeof r=="string"&&typeof e=="string"&&r.length===e.length)return Ne(r,e);const t=is(r),s=is(e),a=Ne(t.seconds,s.seconds);return a!==0?a:Ne(t.nanos,s.nanos)}function Bg(r,e){const t=r.values||[],s=e.values||[];for(let a=0;a<t.length&&a<s.length;++a){const c=fo(t[a],s[a]);if(c)return c}return Ne(t.length,s.length)}function po(r){return Ad(r)}function Ad(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?(function(t){const s=is(t);return`time(${s.seconds},${s.nanos})`})(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?(function(t){return ho(t).toBase64()})(r.bytesValue):"referenceValue"in r?(function(t){return ge.fromName(t).toString()})(r.referenceValue):"geoPointValue"in r?(function(t){return`geo(${t.latitude},${t.longitude})`})(r.geoPointValue):"arrayValue"in r?(function(t){let s="[",a=!0;for(const c of t.values||[])a?a=!1:s+=",",s+=Ad(c);return s+"]"})(r.arrayValue):"mapValue"in r?(function(t){const s=Object.keys(t.fields||{}).sort();let a="{",c=!0;for(const d of s)c?c=!1:a+=",",a+=`${d}:${Ad(t.fields[d])}`;return a+"}"})(r.mapValue):ve(61005,{value:r})}function Ru(r){switch(ss(r)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=cf(r);return e?16+Ru(e):16;case 5:return 2*r.stringValue.length;case 6:return ho(r.bytesValue).approximateByteSize();case 7:return r.referenceValue.length;case 9:return(function(s){return(s.values||[]).reduce(((a,c)=>a+Ru(c)),0)})(r.arrayValue);case 10:case 11:return(function(s){let a=0;return Eo(s.fields,((c,d)=>{a+=c.length+Ru(d)})),a})(r.mapValue);default:throw ve(13486,{value:r})}}function kd(r){return!!r&&"integerValue"in r}function hf(r){return!!r&&"arrayValue"in r}function Pu(r){return!!r&&"mapValue"in r}function oA(r){var e,t;return((t=(((e=r?.mapValue)===null||e===void 0?void 0:e.fields)||{})[r_])===null||t===void 0?void 0:t.stringValue)===i_}function Ia(r){if(r.geoPointValue)return{geoPointValue:Object.assign({},r.geoPointValue)};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:Object.assign({},r.timestampValue)};if(r.mapValue){const e={mapValue:{fields:{}}};return Eo(r.mapValue.fields,((t,s)=>e.mapValue.fields[t]=Ia(s))),e}if(r.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(r.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Ia(r.arrayValue.values[t]);return e}return Object.assign({},r)}function aA(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue===sA}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ln{constructor(e){this.value=e}static empty(){return new Ln({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!Pu(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ia(t)}setAll(e){let t=St.emptyPath(),s={},a=[];e.forEach(((d,m)=>{if(!t.isImmediateParentOf(m)){const y=this.getFieldsMap(t);this.applyChanges(y,s,a),s={},a=[],t=m.popLast()}d?s[m.lastSegment()]=Ia(d):a.push(m.lastSegment())}));const c=this.getFieldsMap(t);this.applyChanges(c,s,a)}delete(e){const t=this.field(e.popLast());Pu(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return rr(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let a=t.mapValue.fields[e.get(s)];Pu(a)&&a.mapValue.fields||(a={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=a),t=a}return t.mapValue.fields}applyChanges(e,t,s){Eo(t,((a,c)=>e[a]=c));for(const a of s)delete e[a]}clone(){return new Ln(Ia(this.value))}}function s_(r){const e=[];return Eo(r.fields,((t,s)=>{const a=new St([t]);if(Pu(s)){const c=s_(s.mapValue).fields;if(c.length===0)e.push(a);else for(const d of c)e.push(a.child(d))}else e.push(a)})),new Un(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vn{constructor(e,t,s,a,c,d,m){this.key=e,this.documentType=t,this.version=s,this.readTime=a,this.createTime=c,this.data=d,this.documentState=m}static newInvalidDocument(e){return new Vn(e,0,We.min(),We.min(),We.min(),Ln.empty(),0)}static newFoundDocument(e,t,s,a){return new Vn(e,1,t,We.min(),s,a,0)}static newNoDocument(e,t){return new Vn(e,2,t,We.min(),We.min(),Ln.empty(),0)}static newUnknownDocument(e,t){return new Vn(e,3,t,We.min(),We.min(),Ln.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(We.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ln.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ln.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=We.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Vn&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Vn(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wu{constructor(e,t){this.position=e,this.inclusive=t}}function zg(r,e,t){let s=0;for(let a=0;a<r.position.length;a++){const c=e[a],d=r.position[a];if(c.field.isKeyField()?s=ge.comparator(ge.fromName(d.referenceValue),t.key):s=fo(d,t.data.field(c.field)),c.dir==="desc"&&(s*=-1),s!==0)break}return s}function $g(r,e){if(r===null)return e===null;if(e===null||r.inclusive!==e.inclusive||r.position.length!==e.position.length)return!1;for(let t=0;t<r.position.length;t++)if(!rr(r.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qu{constructor(e,t="asc"){this.field=e,this.dir=t}}function lA(r,e){return r.dir===e.dir&&r.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o_{}class yt extends o_{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,s):new cA(e,t,s):t==="array-contains"?new fA(e,s):t==="in"?new pA(e,s):t==="not-in"?new mA(e,s):t==="array-contains-any"?new gA(e,s):new yt(e,t,s)}static createKeyFieldInFilter(e,t,s){return t==="in"?new hA(e,s):new dA(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(fo(t,this.value)):t!==null&&ss(this.value)===ss(t)&&this.matchesComparison(fo(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ve(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class mi extends o_{constructor(e,t){super(),this.filters=e,this.op=t,this.he=null}static create(e,t){return new mi(e,t)}matches(e){return a_(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.he!==null||(this.he=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.he}getFilters(){return Object.assign([],this.filters)}}function a_(r){return r.op==="and"}function l_(r){return uA(r)&&a_(r)}function uA(r){for(const e of r.filters)if(e instanceof mi)return!1;return!0}function Cd(r){if(r instanceof yt)return r.field.canonicalString()+r.op.toString()+po(r.value);if(l_(r))return r.filters.map((e=>Cd(e))).join(",");{const e=r.filters.map((t=>Cd(t))).join(",");return`${r.op}(${e})`}}function u_(r,e){return r instanceof yt?(function(s,a){return a instanceof yt&&s.op===a.op&&s.field.isEqual(a.field)&&rr(s.value,a.value)})(r,e):r instanceof mi?(function(s,a){return a instanceof mi&&s.op===a.op&&s.filters.length===a.filters.length?s.filters.reduce(((c,d,m)=>c&&u_(d,a.filters[m])),!0):!1})(r,e):void ve(19439)}function c_(r){return r instanceof yt?(function(t){return`${t.field.canonicalString()} ${t.op} ${po(t.value)}`})(r):r instanceof mi?(function(t){return t.op.toString()+" {"+t.getFilters().map(c_).join(" ,")+"}"})(r):"Filter"}class cA extends yt{constructor(e,t,s){super(e,t,s),this.key=ge.fromName(s.referenceValue)}matches(e){const t=ge.comparator(e.key,this.key);return this.matchesComparison(t)}}class hA extends yt{constructor(e,t){super(e,"in",t),this.keys=h_("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class dA extends yt{constructor(e,t){super(e,"not-in",t),this.keys=h_("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function h_(r,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map((s=>ge.fromName(s.referenceValue)))}class fA extends yt{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return hf(t)&&Va(t.arrayValue,this.value)}}class pA extends yt{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Va(this.value.arrayValue,t)}}class mA extends yt{constructor(e,t){super(e,"not-in",t)}matches(e){if(Va(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!Va(this.value.arrayValue,t)}}class gA extends yt{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!hf(t)||!t.arrayValue.values)&&t.arrayValue.values.some((s=>Va(this.value.arrayValue,s)))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yA{constructor(e,t=null,s=[],a=[],c=null,d=null,m=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=a,this.limit=c,this.startAt=d,this.endAt=m,this.Pe=null}}function Hg(r,e=null,t=[],s=[],a=null,c=null,d=null){return new yA(r,e,t,s,a,c,d)}function df(r){const e=je(r);if(e.Pe===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((s=>Cd(s))).join(","),t+="|ob:",t+=e.orderBy.map((s=>(function(c){return c.field.canonicalString()+c.dir})(s))).join(","),lf(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((s=>po(s))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((s=>po(s))).join(",")),e.Pe=t}return e.Pe}function ff(r,e){if(r.limit!==e.limit||r.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<r.orderBy.length;t++)if(!lA(r.orderBy[t],e.orderBy[t]))return!1;if(r.filters.length!==e.filters.length)return!1;for(let t=0;t<r.filters.length;t++)if(!u_(r.filters[t],e.filters[t]))return!1;return r.collectionGroup===e.collectionGroup&&!!r.path.isEqual(e.path)&&!!$g(r.startAt,e.startAt)&&$g(r.endAt,e.endAt)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cc{constructor(e,t=null,s=[],a=[],c=null,d="F",m=null,y=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=a,this.limit=c,this.limitType=d,this.startAt=m,this.endAt=y,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function vA(r,e,t,s,a,c,d,m){return new cc(r,e,t,s,a,c,d,m)}function _A(r){return new cc(r)}function Wg(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function wA(r){return r.collectionGroup!==null}function Sa(r){const e=je(r);if(e.Te===null){e.Te=[];const t=new Set;for(const c of e.explicitOrderBy)e.Te.push(c),t.add(c.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(d){let m=new At(St.comparator);return d.filters.forEach((y=>{y.getFlattenedFilters().forEach((_=>{_.isInequality()&&(m=m.add(_.field))}))})),m})(e).forEach((c=>{t.has(c.canonicalString())||c.isKeyField()||e.Te.push(new qu(c,s))})),t.has(St.keyField().canonicalString())||e.Te.push(new qu(St.keyField(),s))}return e.Te}function Ji(r){const e=je(r);return e.Ie||(e.Ie=EA(e,Sa(r))),e.Ie}function EA(r,e){if(r.limitType==="F")return Hg(r.path,r.collectionGroup,e,r.filters,r.limit,r.startAt,r.endAt);{e=e.map((a=>{const c=a.dir==="desc"?"asc":"desc";return new qu(a.field,c)}));const t=r.endAt?new Wu(r.endAt.position,r.endAt.inclusive):null,s=r.startAt?new Wu(r.startAt.position,r.startAt.inclusive):null;return Hg(r.path,r.collectionGroup,e,r.filters,r.limit,t,s)}}function Rd(r,e,t){return new cc(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),e,t,r.startAt,r.endAt)}function d_(r,e){return ff(Ji(r),Ji(e))&&r.limitType===e.limitType}function f_(r){return`${df(Ji(r))}|lt:${r.limitType}`}function ya(r){return`Query(target=${(function(t){let s=t.path.canonicalString();return t.collectionGroup!==null&&(s+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(s+=`, filters: [${t.filters.map((a=>c_(a))).join(", ")}]`),lf(t.limit)||(s+=", limit: "+t.limit),t.orderBy.length>0&&(s+=`, orderBy: [${t.orderBy.map((a=>(function(d){return`${d.field.canonicalString()} (${d.dir})`})(a))).join(", ")}]`),t.startAt&&(s+=", startAt: ",s+=t.startAt.inclusive?"b:":"a:",s+=t.startAt.position.map((a=>po(a))).join(",")),t.endAt&&(s+=", endAt: ",s+=t.endAt.inclusive?"a:":"b:",s+=t.endAt.position.map((a=>po(a))).join(",")),`Target(${s})`})(Ji(r))}; limitType=${r.limitType})`}function pf(r,e){return e.isFoundDocument()&&(function(s,a){const c=a.key.path;return s.collectionGroup!==null?a.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(c):ge.isDocumentKey(s.path)?s.path.isEqual(c):s.path.isImmediateParentOf(c)})(r,e)&&(function(s,a){for(const c of Sa(s))if(!c.field.isKeyField()&&a.data.field(c.field)===null)return!1;return!0})(r,e)&&(function(s,a){for(const c of s.filters)if(!c.matches(a))return!1;return!0})(r,e)&&(function(s,a){return!(s.startAt&&!(function(d,m,y){const _=zg(d,m,y);return d.inclusive?_<=0:_<0})(s.startAt,Sa(s),a)||s.endAt&&!(function(d,m,y){const _=zg(d,m,y);return d.inclusive?_>=0:_>0})(s.endAt,Sa(s),a))})(r,e)}function TA(r){return(e,t)=>{let s=!1;for(const a of Sa(r)){const c=IA(a,e,t);if(c!==0)return c;s=s||a.field.isKeyField()}return 0}}function IA(r,e,t){const s=r.field.isKeyField()?ge.comparator(e.key,t.key):(function(c,d,m){const y=d.data.field(c),_=m.data.field(c);return y!==null&&_!==null?fo(y,_):ve(42886)})(r.field,e,t);switch(r.dir){case"asc":return s;case"desc":return-1*s;default:return ve(19790,{direction:r.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class as{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(const[a,c]of s)if(this.equalsFn(a,e))return c}}has(e){return this.get(e)!==void 0}set(e,t){const s=this.mapKeyFn(e),a=this.inner[s];if(a===void 0)return this.inner[s]=[[e,t]],void this.innerSize++;for(let c=0;c<a.length;c++)if(this.equalsFn(a[c][0],e))return void(a[c]=[e,t]);a.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let a=0;a<s.length;a++)if(this.equalsFn(s[a][0],e))return s.length===1?delete this.inner[t]:s.splice(a,1),this.innerSize--,!0;return!1}forEach(e){Eo(this.inner,((t,s)=>{for(const[a,c]of s)e(a,c)}))}isEmpty(){return Yv(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SA=new Yt(ge.comparator);function Ku(){return SA}const p_=new Yt(ge.comparator);function gu(...r){let e=p_;for(const t of r)e=e.insert(t.key,t);return e}function m_(r){let e=p_;return r.forEach(((t,s)=>e=e.insert(t,s.overlayedDocument))),e}function Qi(){return Aa()}function g_(){return Aa()}function Aa(){return new as((r=>r.toString()),((r,e)=>r.isEqual(e)))}const AA=new Yt(ge.comparator),kA=new At(ge.comparator);function Vt(...r){let e=kA;for(const t of r)e=e.add(t);return e}const CA=new At(Ne);function RA(){return CA}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mf(r,e){if(r.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Bu(e)?"-0":e}}function y_(r){return{integerValue:""+r}}function PA(r,e){return Z1(e)?y_(e):mf(r,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hc{constructor(){this._=void 0}}function NA(r,e,t){return r instanceof ba?(function(a,c){const d={fields:{[e_]:{stringValue:Zv},[n_]:{timestampValue:{seconds:a.seconds,nanos:a.nanoseconds}}}};return c&&uf(c)&&(c=cf(c)),c&&(d.fields[t_]=c),{mapValue:d}})(t,e):r instanceof La?__(r,e):r instanceof Ma?w_(r,e):(function(a,c){const d=v_(a,c),m=qg(d)+qg(a.Ee);return kd(d)&&kd(a.Ee)?y_(m):mf(a.serializer,m)})(r,e)}function xA(r,e,t){return r instanceof La?__(r,e):r instanceof Ma?w_(r,e):t}function v_(r,e){return r instanceof Gu?(function(s){return kd(s)||(function(c){return!!c&&"doubleValue"in c})(s)})(e)?e:{integerValue:0}:null}class ba extends hc{}class La extends hc{constructor(e){super(),this.elements=e}}function __(r,e){const t=E_(e);for(const s of r.elements)t.some((a=>rr(a,s)))||t.push(s);return{arrayValue:{values:t}}}class Ma extends hc{constructor(e){super(),this.elements=e}}function w_(r,e){let t=E_(e);for(const s of r.elements)t=t.filter((a=>!rr(a,s)));return{arrayValue:{values:t}}}class Gu extends hc{constructor(e,t){super(),this.serializer=e,this.Ee=t}}function qg(r){return It(r.integerValue||r.doubleValue)}function E_(r){return hf(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DA{constructor(e,t){this.field=e,this.transform=t}}function OA(r,e){return r.field.isEqual(e.field)&&(function(s,a){return s instanceof La&&a instanceof La||s instanceof Ma&&a instanceof Ma?co(s.elements,a.elements,rr):s instanceof Gu&&a instanceof Gu?rr(s.Ee,a.Ee):s instanceof ba&&a instanceof ba})(r.transform,e.transform)}class VA{constructor(e,t){this.version=e,this.transformResults=t}}class Rr{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Rr}static exists(e){return new Rr(void 0,e)}static updateTime(e){return new Rr(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Nu(r,e){return r.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(r.updateTime):r.exists===void 0||r.exists===e.isFoundDocument()}class dc{}function T_(r,e){if(!r.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return r.isNoDocument()?new S_(r.key,Rr.none()):new Wa(r.key,r.data,Rr.none());{const t=r.data,s=Ln.empty();let a=new At(St.comparator);for(let c of e.fields)if(!a.has(c)){let d=t.field(c);d===null&&c.length>1&&(c=c.popLast(),d=t.field(c)),d===null?s.delete(c):s.set(c,d),a=a.add(c)}return new ls(r.key,s,new Un(a.toArray()),Rr.none())}}function bA(r,e,t){r instanceof Wa?(function(a,c,d){const m=a.value.clone(),y=Gg(a.fieldTransforms,c,d.transformResults);m.setAll(y),c.convertToFoundDocument(d.version,m).setHasCommittedMutations()})(r,e,t):r instanceof ls?(function(a,c,d){if(!Nu(a.precondition,c))return void c.convertToUnknownDocument(d.version);const m=Gg(a.fieldTransforms,c,d.transformResults),y=c.data;y.setAll(I_(a)),y.setAll(m),c.convertToFoundDocument(d.version,y).setHasCommittedMutations()})(r,e,t):(function(a,c,d){c.convertToNoDocument(d.version).setHasCommittedMutations()})(0,e,t)}function ka(r,e,t,s){return r instanceof Wa?(function(c,d,m,y){if(!Nu(c.precondition,d))return m;const _=c.value.clone(),I=Qg(c.fieldTransforms,y,d);return _.setAll(I),d.convertToFoundDocument(d.version,_).setHasLocalMutations(),null})(r,e,t,s):r instanceof ls?(function(c,d,m,y){if(!Nu(c.precondition,d))return m;const _=Qg(c.fieldTransforms,y,d),I=d.data;return I.setAll(I_(c)),I.setAll(_),d.convertToFoundDocument(d.version,I).setHasLocalMutations(),m===null?null:m.unionWith(c.fieldMask.fields).unionWith(c.fieldTransforms.map((P=>P.field)))})(r,e,t,s):(function(c,d,m){return Nu(c.precondition,d)?(d.convertToNoDocument(d.version).setHasLocalMutations(),null):m})(r,e,t)}function LA(r,e){let t=null;for(const s of r.fieldTransforms){const a=e.data.field(s.field),c=v_(s.transform,a||null);c!=null&&(t===null&&(t=Ln.empty()),t.set(s.field,c))}return t||null}function Kg(r,e){return r.type===e.type&&!!r.key.isEqual(e.key)&&!!r.precondition.isEqual(e.precondition)&&!!(function(s,a){return s===void 0&&a===void 0||!(!s||!a)&&co(s,a,((c,d)=>OA(c,d)))})(r.fieldTransforms,e.fieldTransforms)&&(r.type===0?r.value.isEqual(e.value):r.type!==1||r.data.isEqual(e.data)&&r.fieldMask.isEqual(e.fieldMask))}class Wa extends dc{constructor(e,t,s,a=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=a,this.type=0}getFieldMask(){return null}}class ls extends dc{constructor(e,t,s,a,c=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=a,this.fieldTransforms=c,this.type=1}getFieldMask(){return this.fieldMask}}function I_(r){const e=new Map;return r.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const s=r.data.field(t);e.set(t,s)}})),e}function Gg(r,e,t){const s=new Map;Je(r.length===t.length,32656,{Ae:t.length,Re:r.length});for(let a=0;a<t.length;a++){const c=r[a],d=c.transform,m=e.data.field(c.field);s.set(c.field,xA(d,m,t[a]))}return s}function Qg(r,e,t){const s=new Map;for(const a of r){const c=a.transform,d=t.data.field(a.field);s.set(a.field,NA(c,d,e))}return s}class S_ extends dc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class MA extends dc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FA{constructor(e,t,s,a){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=a}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let a=0;a<this.mutations.length;a++){const c=this.mutations[a];c.key.isEqual(e.key)&&bA(c,e,s[a])}}applyToLocalView(e,t){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(t=ka(s,e,t,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(t=ka(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const s=g_();return this.mutations.forEach((a=>{const c=e.get(a.key),d=c.overlayedDocument;let m=this.applyToLocalView(d,c.mutatedFields);m=t.has(a.key)?null:m;const y=T_(d,m);y!==null&&s.set(a.key,y),d.isValidDocument()||d.convertToNoDocument(We.min())})),s}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),Vt())}isEqual(e){return this.batchId===e.batchId&&co(this.mutations,e.mutations,((t,s)=>Kg(t,s)))&&co(this.baseMutations,e.baseMutations,((t,s)=>Kg(t,s)))}}class gf{constructor(e,t,s,a){this.batch=e,this.commitVersion=t,this.mutationResults=s,this.docVersions=a}static from(e,t,s){Je(e.mutations.length===s.length,58842,{Ve:e.mutations.length,me:s.length});let a=(function(){return AA})();const c=e.mutations;for(let d=0;d<c.length;d++)a=a.insert(c[d].key,s[d].version);return new gf(e,t,s,a)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UA{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var it,Re;function jA(r){switch(r){case K.OK:return ve(64938);case K.CANCELLED:case K.UNKNOWN:case K.DEADLINE_EXCEEDED:case K.RESOURCE_EXHAUSTED:case K.INTERNAL:case K.UNAVAILABLE:case K.UNAUTHENTICATED:return!1;case K.INVALID_ARGUMENT:case K.NOT_FOUND:case K.ALREADY_EXISTS:case K.PERMISSION_DENIED:case K.FAILED_PRECONDITION:case K.ABORTED:case K.OUT_OF_RANGE:case K.UNIMPLEMENTED:case K.DATA_LOSS:return!0;default:return ve(15467,{code:r})}}function BA(r){if(r===void 0)return rs("GRPC error has no .code"),K.UNKNOWN;switch(r){case it.OK:return K.OK;case it.CANCELLED:return K.CANCELLED;case it.UNKNOWN:return K.UNKNOWN;case it.DEADLINE_EXCEEDED:return K.DEADLINE_EXCEEDED;case it.RESOURCE_EXHAUSTED:return K.RESOURCE_EXHAUSTED;case it.INTERNAL:return K.INTERNAL;case it.UNAVAILABLE:return K.UNAVAILABLE;case it.UNAUTHENTICATED:return K.UNAUTHENTICATED;case it.INVALID_ARGUMENT:return K.INVALID_ARGUMENT;case it.NOT_FOUND:return K.NOT_FOUND;case it.ALREADY_EXISTS:return K.ALREADY_EXISTS;case it.PERMISSION_DENIED:return K.PERMISSION_DENIED;case it.FAILED_PRECONDITION:return K.FAILED_PRECONDITION;case it.ABORTED:return K.ABORTED;case it.OUT_OF_RANGE:return K.OUT_OF_RANGE;case it.UNIMPLEMENTED:return K.UNIMPLEMENTED;case it.DATA_LOSS:return K.DATA_LOSS;default:return ve(39323,{code:r})}}(Re=it||(it={}))[Re.OK=0]="OK",Re[Re.CANCELLED=1]="CANCELLED",Re[Re.UNKNOWN=2]="UNKNOWN",Re[Re.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Re[Re.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Re[Re.NOT_FOUND=5]="NOT_FOUND",Re[Re.ALREADY_EXISTS=6]="ALREADY_EXISTS",Re[Re.PERMISSION_DENIED=7]="PERMISSION_DENIED",Re[Re.UNAUTHENTICATED=16]="UNAUTHENTICATED",Re[Re.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Re[Re.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Re[Re.ABORTED=10]="ABORTED",Re[Re.OUT_OF_RANGE=11]="OUT_OF_RANGE",Re[Re.UNIMPLEMENTED=12]="UNIMPLEMENTED",Re[Re.INTERNAL=13]="INTERNAL",Re[Re.UNAVAILABLE=14]="UNAVAILABLE",Re[Re.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new ef([4294967295,4294967295],0);class zA{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Pd(r,e){return r.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function $A(r,e){return r.useProto3Json?e.toBase64():e.toUint8Array()}function HA(r,e){return Pd(r,e.toTimestamp())}function ao(r){return Je(!!r,49232),We.fromTimestamp((function(t){const s=is(t);return new qe(s.seconds,s.nanos)})(r))}function A_(r,e){return Nd(r,e).canonicalString()}function Nd(r,e){const t=(function(a){return new tt(["projects",a.projectId,"databases",a.database])})(r).child("documents");return e===void 0?t:t.child(e)}function WA(r){const e=tt.fromString(r);return Je(ZA(e),10190,{key:e.toString()}),e}function xd(r,e){return A_(r.databaseId,e.path)}function qA(r){const e=WA(r);return e.length===4?tt.emptyPath():GA(e)}function KA(r){return new tt(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function GA(r){return Je(r.length>4&&r.get(4)==="documents",29091,{key:r.toString()}),r.popFirst(5)}function Xg(r,e,t){return{name:xd(r,e),fields:t.value.mapValue.fields}}function QA(r,e){let t;if(e instanceof Wa)t={update:Xg(r,e.key,e.value)};else if(e instanceof S_)t={delete:xd(r,e.key)};else if(e instanceof ls)t={update:Xg(r,e.key,e.data),updateMask:YA(e.fieldMask)};else{if(!(e instanceof MA))return ve(16599,{Rt:e.type});t={verify:xd(r,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((s=>(function(c,d){const m=d.transform;if(m instanceof ba)return{fieldPath:d.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(m instanceof La)return{fieldPath:d.field.canonicalString(),appendMissingElements:{values:m.elements}};if(m instanceof Ma)return{fieldPath:d.field.canonicalString(),removeAllFromArray:{values:m.elements}};if(m instanceof Gu)return{fieldPath:d.field.canonicalString(),increment:m.Ee};throw ve(20930,{transform:d.transform})})(0,s)))),e.precondition.isNone||(t.currentDocument=(function(a,c){return c.updateTime!==void 0?{updateTime:HA(a,c.updateTime)}:c.exists!==void 0?{exists:c.exists}:ve(27497)})(r,e.precondition)),t}function XA(r,e){return r&&r.length>0?(Je(e!==void 0,14353),r.map((t=>(function(a,c){let d=a.updateTime?ao(a.updateTime):ao(c);return d.isEqual(We.min())&&(d=ao(c)),new VA(d,a.transformResults||[])})(t,e)))):[]}function JA(r){let e=qA(r.parent);const t=r.structuredQuery,s=t.from?t.from.length:0;let a=null;if(s>0){Je(s===1,65062);const I=t.from[0];I.allDescendants?a=I.collectionId:e=e.child(I.collectionId)}let c=[];t.where&&(c=(function(P){const b=k_(P);return b instanceof mi&&l_(b)?b.getFilters():[b]})(t.where));let d=[];t.orderBy&&(d=(function(P){return P.map((b=>(function(z){return new qu(no(z.field),(function(X){switch(X){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(z.direction))})(b)))})(t.orderBy));let m=null;t.limit&&(m=(function(P){let b;return b=typeof P=="object"?P.value:P,lf(b)?null:b})(t.limit));let y=null;t.startAt&&(y=(function(P){const b=!!P.before,$=P.values||[];return new Wu($,b)})(t.startAt));let _=null;return t.endAt&&(_=(function(P){const b=!P.before,$=P.values||[];return new Wu($,b)})(t.endAt)),vA(e,a,d,c,m,"F",y,_)}function k_(r){return r.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const s=no(t.unaryFilter.field);return yt.create(s,"==",{doubleValue:NaN});case"IS_NULL":const a=no(t.unaryFilter.field);return yt.create(a,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const c=no(t.unaryFilter.field);return yt.create(c,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const d=no(t.unaryFilter.field);return yt.create(d,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return ve(61313);default:return ve(60726)}})(r):r.fieldFilter!==void 0?(function(t){return yt.create(no(t.fieldFilter.field),(function(a){switch(a){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return ve(58110);default:return ve(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(r):r.compositeFilter!==void 0?(function(t){return mi.create(t.compositeFilter.filters.map((s=>k_(s))),(function(a){switch(a){case"AND":return"and";case"OR":return"or";default:return ve(1026)}})(t.compositeFilter.op))})(r):ve(30097,{filter:r})}function no(r){return St.fromServerFormat(r.fieldPath)}function YA(r){const e=[];return r.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function ZA(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ek{constructor(e){this.gt=e}}function tk(r){const e=JA({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?Rd(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nk{constructor(){this.Dn=new rk}addToCollectionParentIndex(e,t){return this.Dn.add(t),B.resolve()}getCollectionParents(e,t){return B.resolve(this.Dn.getEntries(t))}addFieldIndex(e,t){return B.resolve()}deleteFieldIndex(e,t){return B.resolve()}deleteAllFieldIndexes(e){return B.resolve()}createTargetIndexes(e,t){return B.resolve()}getDocumentsMatchingTarget(e,t){return B.resolve(null)}getIndexType(e,t){return B.resolve(0)}getFieldIndexes(e,t){return B.resolve([])}getNextCollectionGroupToUpdate(e){return B.resolve(null)}getMinOffset(e,t){return B.resolve(pi.min())}getMinOffsetFromCollectionGroup(e,t){return B.resolve(pi.min())}updateCollectionGroup(e,t,s){return B.resolve()}updateIndexEntries(e,t){return B.resolve()}}class rk{constructor(){this.index={}}add(e){const t=e.lastSegment(),s=e.popLast(),a=this.index[t]||new At(tt.comparator),c=!a.has(s);return this.index[t]=a.add(s),c}has(e){const t=e.lastSegment(),s=e.popLast(),a=this.index[t];return a&&a.has(s)}getEntries(e){return(this.index[e]||new At(tt.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jg={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},C_=41943040;class Xt{static withCacheSize(e){return new Xt(e,Xt.DEFAULT_COLLECTION_PERCENTILE,Xt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Xt.DEFAULT_COLLECTION_PERCENTILE=10,Xt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Xt.DEFAULT=new Xt(C_,Xt.DEFAULT_COLLECTION_PERCENTILE,Xt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Xt.DISABLED=new Xt(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mo{constructor(e){this._r=e}next(){return this._r+=2,this._r}static ar(){return new mo(0)}static ur(){return new mo(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yg="LruGarbageCollector",ik=1048576;function Zg([r,e],[t,s]){const a=Ne(r,t);return a===0?Ne(e,s):a}class sk{constructor(e){this.Tr=e,this.buffer=new At(Zg),this.Ir=0}dr(){return++this.Ir}Er(e){const t=[e,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(t);else{const s=this.buffer.last();Zg(t,s)<0&&(this.buffer=this.buffer.delete(s).add(t))}}get maxValue(){return this.buffer.last()[0]}}class ok{constructor(e,t,s){this.garbageCollector=e,this.asyncQueue=t,this.localStore=s,this.Ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return this.Ar!==null}Rr(e){se(Yg,`Garbage collection scheduled in ${e}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Ha(t)?se(Yg,"Ignoring IndexedDB error during garbage collection: ",t):await sf(t)}await this.Rr(3e5)}))}}class ak{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.mr(e).next((s=>Math.floor(t/100*s)))}nthSequenceNumber(e,t){if(t===0)return B.resolve(of.ue);const s=new sk(t);return this.Vr.forEachTarget(e,(a=>s.Er(a.sequenceNumber))).next((()=>this.Vr.gr(e,(a=>s.Er(a))))).next((()=>s.maxValue))}removeTargets(e,t,s){return this.Vr.removeTargets(e,t,s)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(se("LruGarbageCollector","Garbage collection skipped; disabled"),B.resolve(Jg)):this.getCacheSize(e).next((s=>s<this.params.cacheSizeCollectionThreshold?(se("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Jg):this.pr(e,t)))}getCacheSize(e){return this.Vr.getCacheSize(e)}pr(e,t){let s,a,c,d,m,y,_;const I=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((P=>(P>this.params.maximumSequenceNumbersToCollect?(se("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${P}`),a=this.params.maximumSequenceNumbersToCollect):a=P,d=Date.now(),this.nthSequenceNumber(e,a)))).next((P=>(s=P,m=Date.now(),this.removeTargets(e,s,t)))).next((P=>(c=P,y=Date.now(),this.removeOrphanedDocuments(e,s)))).next((P=>(_=Date.now(),to()<=Ie.DEBUG&&se("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${d-I}ms
	Determined least recently used ${a} in `+(m-d)+`ms
	Removed ${c} targets in `+(y-m)+`ms
	Removed ${P} documents in `+(_-y)+`ms
Total Duration: ${_-I}ms`),B.resolve({didRun:!0,sequenceNumbersCollected:a,targetsRemoved:c,documentsRemoved:P}))))}}function lk(r,e){return new ak(r,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uk{constructor(){this.changes=new as((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Vn.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const s=this.changes.get(t);return s!==void 0?B.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ck{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hk{constructor(e,t,s,a){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=a}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next((a=>(s=a,this.remoteDocumentCache.getEntry(e,t)))).next((a=>(s!==null&&ka(s.mutation,a,Un.empty(),qe.now()),a)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((s=>this.getLocalViewOfDocuments(e,s,Vt()).next((()=>s))))}getLocalViewOfDocuments(e,t,s=Vt()){const a=Qi();return this.populateOverlays(e,a,t).next((()=>this.computeViews(e,t,a,s).next((c=>{let d=gu();return c.forEach(((m,y)=>{d=d.insert(m,y.overlayedDocument)})),d}))))}getOverlayedDocuments(e,t){const s=Qi();return this.populateOverlays(e,s,t).next((()=>this.computeViews(e,t,s,Vt())))}populateOverlays(e,t,s){const a=[];return s.forEach((c=>{t.has(c)||a.push(c)})),this.documentOverlayCache.getOverlays(e,a).next((c=>{c.forEach(((d,m)=>{t.set(d,m)}))}))}computeViews(e,t,s,a){let c=Ku();const d=Aa(),m=(function(){return Aa()})();return t.forEach(((y,_)=>{const I=s.get(_.key);a.has(_.key)&&(I===void 0||I.mutation instanceof ls)?c=c.insert(_.key,_):I!==void 0?(d.set(_.key,I.mutation.getFieldMask()),ka(I.mutation,_,I.mutation.getFieldMask(),qe.now())):d.set(_.key,Un.empty())})),this.recalculateAndSaveOverlays(e,c).next((y=>(y.forEach(((_,I)=>d.set(_,I))),t.forEach(((_,I)=>{var P;return m.set(_,new ck(I,(P=d.get(_))!==null&&P!==void 0?P:null))})),m)))}recalculateAndSaveOverlays(e,t){const s=Aa();let a=new Yt(((d,m)=>d-m)),c=Vt();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((d=>{for(const m of d)m.keys().forEach((y=>{const _=t.get(y);if(_===null)return;let I=s.get(y)||Un.empty();I=m.applyToLocalView(_,I),s.set(y,I);const P=(a.get(m.batchId)||Vt()).add(y);a=a.insert(m.batchId,P)}))})).next((()=>{const d=[],m=a.getReverseIterator();for(;m.hasNext();){const y=m.getNext(),_=y.key,I=y.value,P=g_();I.forEach((b=>{if(!c.has(b)){const $=T_(t.get(b),s.get(b));$!==null&&P.set(b,$),c=c.add(b)}})),d.push(this.documentOverlayCache.saveOverlays(e,_,P))}return B.waitFor(d)})).next((()=>s))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((s=>this.recalculateAndSaveOverlays(e,s)))}getDocumentsMatchingQuery(e,t,s,a){return(function(d){return ge.isDocumentKey(d.path)&&d.collectionGroup===null&&d.filters.length===0})(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):wA(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,s,a):this.getDocumentsMatchingCollectionQuery(e,t,s,a)}getNextDocuments(e,t,s,a){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,a).next((c=>{const d=a-c.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,a-c.size):B.resolve(Qi());let m=Oa,y=c;return d.next((_=>B.forEach(_,((I,P)=>(m<P.largestBatchId&&(m=P.largestBatchId),c.get(I)?B.resolve():this.remoteDocumentCache.getEntry(e,I).next((b=>{y=y.insert(I,b)}))))).next((()=>this.populateOverlays(e,_,c))).next((()=>this.computeViews(e,y,_,Vt()))).next((I=>({batchId:m,changes:m_(I)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new ge(t)).next((s=>{let a=gu();return s.isFoundDocument()&&(a=a.insert(s.key,s)),a}))}getDocumentsMatchingCollectionGroupQuery(e,t,s,a){const c=t.collectionGroup;let d=gu();return this.indexManager.getCollectionParents(e,c).next((m=>B.forEach(m,(y=>{const _=(function(P,b){return new cc(b,null,P.explicitOrderBy.slice(),P.filters.slice(),P.limit,P.limitType,P.startAt,P.endAt)})(t,y.child(c));return this.getDocumentsMatchingCollectionQuery(e,_,s,a).next((I=>{I.forEach(((P,b)=>{d=d.insert(P,b)}))}))})).next((()=>d))))}getDocumentsMatchingCollectionQuery(e,t,s,a){let c;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId).next((d=>(c=d,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,s,c,a)))).next((d=>{c.forEach(((y,_)=>{const I=_.getKey();d.get(I)===null&&(d=d.insert(I,Vn.newInvalidDocument(I)))}));let m=gu();return d.forEach(((y,_)=>{const I=c.get(y);I!==void 0&&ka(I.mutation,_,Un.empty(),qe.now()),pf(t,_)&&(m=m.insert(y,_))})),m}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dk{constructor(e){this.serializer=e,this.Br=new Map,this.Lr=new Map}getBundleMetadata(e,t){return B.resolve(this.Br.get(t))}saveBundleMetadata(e,t){return this.Br.set(t.id,(function(a){return{id:a.id,version:a.version,createTime:ao(a.createTime)}})(t)),B.resolve()}getNamedQuery(e,t){return B.resolve(this.Lr.get(t))}saveNamedQuery(e,t){return this.Lr.set(t.name,(function(a){return{name:a.name,query:tk(a.bundledQuery),readTime:ao(a.readTime)}})(t)),B.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fk{constructor(){this.overlays=new Yt(ge.comparator),this.kr=new Map}getOverlay(e,t){return B.resolve(this.overlays.get(t))}getOverlays(e,t){const s=Qi();return B.forEach(t,(a=>this.getOverlay(e,a).next((c=>{c!==null&&s.set(a,c)})))).next((()=>s))}saveOverlays(e,t,s){return s.forEach(((a,c)=>{this.wt(e,t,c)})),B.resolve()}removeOverlaysForBatchId(e,t,s){const a=this.kr.get(s);return a!==void 0&&(a.forEach((c=>this.overlays=this.overlays.remove(c))),this.kr.delete(s)),B.resolve()}getOverlaysForCollection(e,t,s){const a=Qi(),c=t.length+1,d=new ge(t.child("")),m=this.overlays.getIteratorFrom(d);for(;m.hasNext();){const y=m.getNext().value,_=y.getKey();if(!t.isPrefixOf(_.path))break;_.path.length===c&&y.largestBatchId>s&&a.set(y.getKey(),y)}return B.resolve(a)}getOverlaysForCollectionGroup(e,t,s,a){let c=new Yt(((_,I)=>_-I));const d=this.overlays.getIterator();for(;d.hasNext();){const _=d.getNext().value;if(_.getKey().getCollectionGroup()===t&&_.largestBatchId>s){let I=c.get(_.largestBatchId);I===null&&(I=Qi(),c=c.insert(_.largestBatchId,I)),I.set(_.getKey(),_)}}const m=Qi(),y=c.getIterator();for(;y.hasNext()&&(y.getNext().value.forEach(((_,I)=>m.set(_,I))),!(m.size()>=a)););return B.resolve(m)}wt(e,t,s){const a=this.overlays.get(s.key);if(a!==null){const d=this.kr.get(a.largestBatchId).delete(s.key);this.kr.set(a.largestBatchId,d)}this.overlays=this.overlays.insert(s.key,new UA(t,s));let c=this.kr.get(t);c===void 0&&(c=Vt(),this.kr.set(t,c)),this.kr.set(t,c.add(s.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pk{constructor(){this.sessionToken=nr.EMPTY_BYTE_STRING}getSessionToken(e){return B.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,B.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yf{constructor(){this.qr=new At(gt.Qr),this.$r=new At(gt.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(e,t){const s=new gt(e,t);this.qr=this.qr.add(s),this.$r=this.$r.add(s)}Kr(e,t){e.forEach((s=>this.addReference(s,t)))}removeReference(e,t){this.Wr(new gt(e,t))}Gr(e,t){e.forEach((s=>this.removeReference(s,t)))}zr(e){const t=new ge(new tt([])),s=new gt(t,e),a=new gt(t,e+1),c=[];return this.$r.forEachInRange([s,a],(d=>{this.Wr(d),c.push(d.key)})),c}jr(){this.qr.forEach((e=>this.Wr(e)))}Wr(e){this.qr=this.qr.delete(e),this.$r=this.$r.delete(e)}Jr(e){const t=new ge(new tt([])),s=new gt(t,e),a=new gt(t,e+1);let c=Vt();return this.$r.forEachInRange([s,a],(d=>{c=c.add(d.key)})),c}containsKey(e){const t=new gt(e,0),s=this.qr.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class gt{constructor(e,t){this.key=e,this.Hr=t}static Qr(e,t){return ge.comparator(e.key,t.key)||Ne(e.Hr,t.Hr)}static Ur(e,t){return Ne(e.Hr,t.Hr)||ge.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mk{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.er=1,this.Yr=new At(gt.Qr)}checkEmpty(e){return B.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,s,a){const c=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const d=new FA(c,t,s,a);this.mutationQueue.push(d);for(const m of a)this.Yr=this.Yr.add(new gt(m.key,c)),this.indexManager.addToCollectionParentIndex(e,m.key.path.popLast());return B.resolve(d)}lookupMutationBatch(e,t){return B.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,a=this.Xr(s),c=a<0?0:a;return B.resolve(this.mutationQueue.length>c?this.mutationQueue[c]:null)}getHighestUnacknowledgedBatchId(){return B.resolve(this.mutationQueue.length===0?af:this.er-1)}getAllMutationBatches(e){return B.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new gt(t,0),a=new gt(t,Number.POSITIVE_INFINITY),c=[];return this.Yr.forEachInRange([s,a],(d=>{const m=this.Zr(d.Hr);c.push(m)})),B.resolve(c)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new At(Ne);return t.forEach((a=>{const c=new gt(a,0),d=new gt(a,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([c,d],(m=>{s=s.add(m.Hr)}))})),B.resolve(this.ei(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,a=s.length+1;let c=s;ge.isDocumentKey(c)||(c=c.child(""));const d=new gt(new ge(c),0);let m=new At(Ne);return this.Yr.forEachWhile((y=>{const _=y.key.path;return!!s.isPrefixOf(_)&&(_.length===a&&(m=m.add(y.Hr)),!0)}),d),B.resolve(this.ei(m))}ei(e){const t=[];return e.forEach((s=>{const a=this.Zr(s);a!==null&&t.push(a)})),t}removeMutationBatch(e,t){Je(this.ti(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let s=this.Yr;return B.forEach(t.mutations,(a=>{const c=new gt(a.key,t.batchId);return s=s.delete(c),this.referenceDelegate.markPotentiallyOrphaned(e,a.key)})).next((()=>{this.Yr=s}))}rr(e){}containsKey(e,t){const s=new gt(t,0),a=this.Yr.firstAfterOrEqual(s);return B.resolve(t.isEqual(a&&a.key))}performConsistencyCheck(e){return this.mutationQueue.length,B.resolve()}ti(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gk{constructor(e){this.ni=e,this.docs=(function(){return new Yt(ge.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,a=this.docs.get(s),c=a?a.size:0,d=this.ni(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:d}),this.size+=d-c,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return B.resolve(s?s.document.mutableCopy():Vn.newInvalidDocument(t))}getEntries(e,t){let s=Ku();return t.forEach((a=>{const c=this.docs.get(a);s=s.insert(a,c?c.document.mutableCopy():Vn.newInvalidDocument(a))})),B.resolve(s)}getDocumentsMatchingQuery(e,t,s,a){let c=Ku();const d=t.path,m=new ge(d.child("__id-9223372036854775808__")),y=this.docs.getIteratorFrom(m);for(;y.hasNext();){const{key:_,value:{document:I}}=y.getNext();if(!d.isPrefixOf(_.path))break;_.path.length>d.length+1||Q1(G1(I),s)<=0||(a.has(I.key)||pf(t,I))&&(c=c.insert(I.key,I.mutableCopy()))}return B.resolve(c)}getAllFromCollectionGroup(e,t,s,a){ve(9500)}ri(e,t){return B.forEach(this.docs,(s=>t(s)))}newChangeBuffer(e){return new yk(this)}getSize(e){return B.resolve(this.size)}}class yk extends uk{constructor(e){super(),this.Or=e}applyChanges(e){const t=[];return this.changes.forEach(((s,a)=>{a.isValidDocument()?t.push(this.Or.addEntry(e,a)):this.Or.removeEntry(s)})),B.waitFor(t)}getFromCache(e,t){return this.Or.getEntry(e,t)}getAllFromCache(e,t){return this.Or.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vk{constructor(e){this.persistence=e,this.ii=new as((t=>df(t)),ff),this.lastRemoteSnapshotVersion=We.min(),this.highestTargetId=0,this.si=0,this.oi=new yf,this.targetCount=0,this._i=mo.ar()}forEachTarget(e,t){return this.ii.forEach(((s,a)=>t(a))),B.resolve()}getLastRemoteSnapshotVersion(e){return B.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return B.resolve(this.si)}allocateTargetId(e){return this.highestTargetId=this._i.next(),B.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this.si&&(this.si=t),B.resolve()}hr(e){this.ii.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this._i=new mo(t),this.highestTargetId=t),e.sequenceNumber>this.si&&(this.si=e.sequenceNumber)}addTargetData(e,t){return this.hr(t),this.targetCount+=1,B.resolve()}updateTargetData(e,t){return this.hr(t),B.resolve()}removeTargetData(e,t){return this.ii.delete(t.target),this.oi.zr(t.targetId),this.targetCount-=1,B.resolve()}removeTargets(e,t,s){let a=0;const c=[];return this.ii.forEach(((d,m)=>{m.sequenceNumber<=t&&s.get(m.targetId)===null&&(this.ii.delete(d),c.push(this.removeMatchingKeysForTargetId(e,m.targetId)),a++)})),B.waitFor(c).next((()=>a))}getTargetCount(e){return B.resolve(this.targetCount)}getTargetData(e,t){const s=this.ii.get(t)||null;return B.resolve(s)}addMatchingKeys(e,t,s){return this.oi.Kr(t,s),B.resolve()}removeMatchingKeys(e,t,s){this.oi.Gr(t,s);const a=this.persistence.referenceDelegate,c=[];return a&&t.forEach((d=>{c.push(a.markPotentiallyOrphaned(e,d))})),B.waitFor(c)}removeMatchingKeysForTargetId(e,t){return this.oi.zr(t),B.resolve()}getMatchingKeysForTargetId(e,t){const s=this.oi.Jr(t);return B.resolve(s)}containsKey(e,t){return B.resolve(this.oi.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R_{constructor(e,t){this.ai={},this.overlays={},this.ui=new of(0),this.ci=!1,this.ci=!0,this.li=new pk,this.referenceDelegate=e(this),this.hi=new vk(this),this.indexManager=new nk,this.remoteDocumentCache=(function(a){return new gk(a)})((s=>this.referenceDelegate.Pi(s))),this.serializer=new ek(t),this.Ti=new dk(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new fk,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this.ai[e.toKey()];return s||(s=new mk(t,this.referenceDelegate),this.ai[e.toKey()]=s),s}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(e,t,s){se("MemoryPersistence","Starting transaction:",e);const a=new _k(this.ui.next());return this.referenceDelegate.Ii(),s(a).next((c=>this.referenceDelegate.di(a).next((()=>c)))).toPromise().then((c=>(a.raiseOnCommittedEvent(),c)))}Ei(e,t){return B.or(Object.values(this.ai).map((s=>()=>s.containsKey(e,t))))}}class _k extends J1{constructor(e){super(),this.currentSequenceNumber=e}}class vf{constructor(e){this.persistence=e,this.Ai=new yf,this.Ri=null}static Vi(e){return new vf(e)}get mi(){if(this.Ri)return this.Ri;throw ve(60996)}addReference(e,t,s){return this.Ai.addReference(s,t),this.mi.delete(s.toString()),B.resolve()}removeReference(e,t,s){return this.Ai.removeReference(s,t),this.mi.add(s.toString()),B.resolve()}markPotentiallyOrphaned(e,t){return this.mi.add(t.toString()),B.resolve()}removeTarget(e,t){this.Ai.zr(t.targetId).forEach((a=>this.mi.add(a.toString())));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next((a=>{a.forEach((c=>this.mi.add(c.toString())))})).next((()=>s.removeTargetData(e,t)))}Ii(){this.Ri=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return B.forEach(this.mi,(s=>{const a=ge.fromPath(s);return this.fi(e,a).next((c=>{c||t.removeEntry(a,We.min())}))})).next((()=>(this.Ri=null,t.apply(e))))}updateLimboDocument(e,t){return this.fi(e,t).next((s=>{s?this.mi.delete(t.toString()):this.mi.add(t.toString())}))}Pi(e){return 0}fi(e,t){return B.or([()=>B.resolve(this.Ai.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ei(e,t)])}}class Qu{constructor(e,t){this.persistence=e,this.gi=new as((s=>eA(s.path)),((s,a)=>s.isEqual(a))),this.garbageCollector=lk(this,t)}static Vi(e,t){return new Qu(e,t)}Ii(){}di(e){return B.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}mr(e){const t=this.yr(e);return this.persistence.getTargetCache().getTargetCount(e).next((s=>t.next((a=>s+a))))}yr(e){let t=0;return this.gr(e,(s=>{t++})).next((()=>t))}gr(e,t){return B.forEach(this.gi,((s,a)=>this.Sr(e,s,a).next((c=>c?B.resolve():t(a)))))}removeTargets(e,t,s){return this.persistence.getTargetCache().removeTargets(e,t,s)}removeOrphanedDocuments(e,t){let s=0;const a=this.persistence.getRemoteDocumentCache(),c=a.newChangeBuffer();return a.ri(e,(d=>this.Sr(e,d,t).next((m=>{m||(s++,c.removeEntry(d,We.min()))})))).next((()=>c.apply(e))).next((()=>s))}markPotentiallyOrphaned(e,t){return this.gi.set(t,e.currentSequenceNumber),B.resolve()}removeTarget(e,t){const s=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,t,s){return this.gi.set(s,e.currentSequenceNumber),B.resolve()}removeReference(e,t,s){return this.gi.set(s,e.currentSequenceNumber),B.resolve()}updateLimboDocument(e,t){return this.gi.set(t,e.currentSequenceNumber),B.resolve()}Pi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Ru(e.data.value)),t}Sr(e,t,s){return B.or([()=>this.persistence.Ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const a=this.gi.get(t);return B.resolve(a!==void 0&&a>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _f{constructor(e,t,s,a){this.targetId=e,this.fromCache=t,this.Is=s,this.ds=a}static Es(e,t){let s=Vt(),a=Vt();for(const c of t.docChanges)switch(c.type){case 0:s=s.add(c.doc.key);break;case 1:a=a.add(c.doc.key)}return new _f(e,t.fromCache,s,a)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wk{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ek{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=(function(){return q0()?8:Y1(Mt())>0?6:4})()}initialize(e,t){this.gs=e,this.indexManager=t,this.As=!0}getDocumentsMatchingQuery(e,t,s,a){const c={result:null};return this.ps(e,t).next((d=>{c.result=d})).next((()=>{if(!c.result)return this.ys(e,t,a,s).next((d=>{c.result=d}))})).next((()=>{if(c.result)return;const d=new wk;return this.ws(e,t,d).next((m=>{if(c.result=m,this.Rs)return this.Ss(e,t,d,m.size)}))})).next((()=>c.result))}Ss(e,t,s,a){return s.documentReadCount<this.Vs?(to()<=Ie.DEBUG&&se("QueryEngine","SDK will not create cache indexes for query:",ya(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),B.resolve()):(to()<=Ie.DEBUG&&se("QueryEngine","Query:",ya(t),"scans",s.documentReadCount,"local documents and returns",a,"documents as results."),s.documentReadCount>this.fs*a?(to()<=Ie.DEBUG&&se("QueryEngine","The SDK decides to create cache indexes for query:",ya(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Ji(t))):B.resolve())}ps(e,t){if(Wg(t))return B.resolve(null);let s=Ji(t);return this.indexManager.getIndexType(e,s).next((a=>a===0?null:(t.limit!==null&&a===1&&(t=Rd(t,null,"F"),s=Ji(t)),this.indexManager.getDocumentsMatchingTarget(e,s).next((c=>{const d=Vt(...c);return this.gs.getDocuments(e,d).next((m=>this.indexManager.getMinOffset(e,s).next((y=>{const _=this.bs(t,m);return this.Ds(t,_,d,y.readTime)?this.ps(e,Rd(t,null,"F")):this.vs(e,_,t,y)}))))})))))}ys(e,t,s,a){return Wg(t)||a.isEqual(We.min())?B.resolve(null):this.gs.getDocuments(e,s).next((c=>{const d=this.bs(t,c);return this.Ds(t,d,s,a)?B.resolve(null):(to()<=Ie.DEBUG&&se("QueryEngine","Re-using previous result from %s to execute query: %s",a.toString(),ya(t)),this.vs(e,d,t,K1(a,Oa)).next((m=>m)))}))}bs(e,t){let s=new At(TA(e));return t.forEach(((a,c)=>{pf(e,c)&&(s=s.add(c))})),s}Ds(e,t,s,a){if(e.limit===null)return!1;if(s.size!==t.size)return!0;const c=e.limitType==="F"?t.last():t.first();return!!c&&(c.hasPendingWrites||c.version.compareTo(a)>0)}ws(e,t,s){return to()<=Ie.DEBUG&&se("QueryEngine","Using full collection scan to execute query:",ya(t)),this.gs.getDocumentsMatchingQuery(e,t,pi.min(),s)}vs(e,t,s,a){return this.gs.getDocumentsMatchingQuery(e,s,a).next((c=>(t.forEach((d=>{c=c.insert(d.key,d)})),c)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tk="LocalStore";class Ik{constructor(e,t,s,a){this.persistence=e,this.Cs=t,this.serializer=a,this.Fs=new Yt(Ne),this.Ms=new as((c=>df(c)),ff),this.xs=new Map,this.Os=e.getRemoteDocumentCache(),this.hi=e.getTargetCache(),this.Ti=e.getBundleCache(),this.Ns(s)}Ns(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new hk(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Fs)))}}function Sk(r,e,t,s){return new Ik(r,e,t,s)}async function P_(r,e){const t=je(r);return await t.persistence.runTransaction("Handle user change","readonly",(s=>{let a;return t.mutationQueue.getAllMutationBatches(s).next((c=>(a=c,t.Ns(e),t.mutationQueue.getAllMutationBatches(s)))).next((c=>{const d=[],m=[];let y=Vt();for(const _ of a){d.push(_.batchId);for(const I of _.mutations)y=y.add(I.key)}for(const _ of c){m.push(_.batchId);for(const I of _.mutations)y=y.add(I.key)}return t.localDocuments.getDocuments(s,y).next((_=>({Bs:_,removedBatchIds:d,addedBatchIds:m})))}))}))}function Ak(r,e){const t=je(r);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(s=>{const a=e.batch.keys(),c=t.Os.newChangeBuffer({trackRemovals:!0});return(function(m,y,_,I){const P=_.batch,b=P.keys();let $=B.resolve();return b.forEach((z=>{$=$.next((()=>I.getEntry(y,z))).next((Z=>{const X=_.docVersions.get(z);Je(X!==null,48541),Z.version.compareTo(X)<0&&(P.applyToRemoteDocument(Z,_),Z.isValidDocument()&&(Z.setReadTime(_.commitVersion),I.addEntry(Z)))}))})),$.next((()=>m.mutationQueue.removeMutationBatch(y,P)))})(t,s,e,c).next((()=>c.apply(s))).next((()=>t.mutationQueue.performConsistencyCheck(s))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(s,a,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,(function(m){let y=Vt();for(let _=0;_<m.mutationResults.length;++_)m.mutationResults[_].transformResults.length>0&&(y=y.add(m.batch.mutations[_].key));return y})(e)))).next((()=>t.localDocuments.getDocuments(s,a)))}))}function kk(r){const e=je(r);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.hi.getLastRemoteSnapshotVersion(t)))}function Ck(r,e){const t=je(r);return t.persistence.runTransaction("Get next mutation batch","readonly",(s=>(e===void 0&&(e=af),t.mutationQueue.getNextMutationBatchAfterBatchId(s,e))))}class ey{constructor(){this.activeTargetIds=RA()}Gs(e){this.activeTargetIds=this.activeTargetIds.add(e)}zs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Rk{constructor(){this.Fo=new ey,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e,t=!0){return t&&this.Fo.Gs(e),this.Mo[e]||"not-current"}updateQueryState(e,t,s){this.Mo[e]=t}removeLocalQueryTarget(e){this.Fo.zs(e)}isLocalQueryTarget(e){return this.Fo.activeTargetIds.has(e)}clearQueryState(e){delete this.Mo[e]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(e){return this.Fo.activeTargetIds.has(e)}start(){return this.Fo=new ey,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pk{xo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ty="ConnectivityMonitor";class ny{constructor(){this.Oo=()=>this.No(),this.Bo=()=>this.Lo(),this.ko=[],this.qo()}xo(e){this.ko.push(e)}shutdown(){window.removeEventListener("online",this.Oo),window.removeEventListener("offline",this.Bo)}qo(){window.addEventListener("online",this.Oo),window.addEventListener("offline",this.Bo)}No(){se(ty,"Network connectivity changed: AVAILABLE");for(const e of this.ko)e(0)}Lo(){se(ty,"Network connectivity changed: UNAVAILABLE");for(const e of this.ko)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let yu=null;function Dd(){return yu===null?yu=(function(){return 268435456+Math.round(2147483648*Math.random())})():yu++,"0x"+yu.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ld="RestConnection",Nk={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class xk{get Qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),a=encodeURIComponent(this.databaseId.database);this.$o=t+"://"+e.host,this.Uo=`projects/${s}/databases/${a}`,this.Ko=this.databaseId.database===$u?`project_id=${s}`:`project_id=${s}&database_id=${a}`}Wo(e,t,s,a,c){const d=Dd(),m=this.Go(e,t.toUriEncodedString());se(ld,`Sending RPC '${e}' ${d}:`,m,s);const y={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(y,a,c);const{host:_}=new URL(m),I=go(_);return this.jo(e,m,y,s,I).then((P=>(se(ld,`Received RPC '${e}' ${d}: `,P),P)),(P=>{throw uo(ld,`RPC '${e}' ${d} failed with error: `,P,"url: ",m,"request:",s),P}))}Jo(e,t,s,a,c,d){return this.Wo(e,t,s,a,c)}zo(e,t,s){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+wo})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((a,c)=>e[c]=a)),s&&s.headers.forEach(((a,c)=>e[c]=a))}Go(e,t){const s=Nk[e];return`${this.$o}/v1/${t}:${s}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dk{constructor(e){this.Ho=e.Ho,this.Yo=e.Yo}Zo(e){this.Xo=e}e_(e){this.t_=e}n_(e){this.r_=e}onMessage(e){this.i_=e}close(){this.Yo()}send(e){this.Ho(e)}s_(){this.Xo()}o_(){this.t_()}__(e){this.r_(e)}a_(e){this.i_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dt="WebChannelConnection";class Ok extends xk{constructor(e){super(e),this.u_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}jo(e,t,s,a,c){const d=Dd();return new Promise(((m,y)=>{const _=new $v;_.setWithCredentials(!0),_.listenOnce(Hv.COMPLETE,(()=>{try{switch(_.getLastErrorCode()){case Cu.NO_ERROR:const P=_.getResponseJson();se(Dt,`XHR for RPC '${e}' ${d} received:`,JSON.stringify(P)),m(P);break;case Cu.TIMEOUT:se(Dt,`RPC '${e}' ${d} timed out`),y(new he(K.DEADLINE_EXCEEDED,"Request time out"));break;case Cu.HTTP_ERROR:const b=_.getStatus();if(se(Dt,`RPC '${e}' ${d} failed with status:`,b,"response text:",_.getResponseText()),b>0){let $=_.getResponseJson();Array.isArray($)&&($=$[0]);const z=$?.error;if(z&&z.status&&z.message){const Z=(function(Te){const pe=Te.toLowerCase().replace(/_/g,"-");return Object.values(K).indexOf(pe)>=0?pe:K.UNKNOWN})(z.status);y(new he(Z,z.message))}else y(new he(K.UNKNOWN,"Server responded with status "+_.getStatus()))}else y(new he(K.UNAVAILABLE,"Connection failed."));break;default:ve(9055,{c_:e,streamId:d,l_:_.getLastErrorCode(),h_:_.getLastError()})}}finally{se(Dt,`RPC '${e}' ${d} completed.`)}}));const I=JSON.stringify(a);se(Dt,`RPC '${e}' ${d} sending request:`,a),_.send(t,"POST",I,s,15)}))}P_(e,t,s){const a=Dd(),c=[this.$o,"/","google.firestore.v1.Firestore","/",e,"/channel"],d=Kv(),m=qv(),y={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},_=this.longPollingOptions.timeoutSeconds;_!==void 0&&(y.longPollingTimeout=Math.round(1e3*_)),this.useFetchStreams&&(y.useFetchStreams=!0),this.zo(y.initMessageHeaders,t,s),y.encodeInitMessageHeaders=!0;const I=c.join("");se(Dt,`Creating RPC '${e}' stream ${a}: ${I}`,y);const P=d.createWebChannel(I,y);this.T_(P);let b=!1,$=!1;const z=new Dk({Ho:X=>{$?se(Dt,`Not sending because RPC '${e}' stream ${a} is closed:`,X):(b||(se(Dt,`Opening RPC '${e}' stream ${a} transport.`),P.open(),b=!0),se(Dt,`RPC '${e}' stream ${a} sending:`,X),P.send(X))},Yo:()=>P.close()}),Z=(X,Te,pe)=>{X.listen(Te,(me=>{try{pe(me)}catch(_e){setTimeout((()=>{throw _e}),0)}}))};return Z(P,_a.EventType.OPEN,(()=>{$||(se(Dt,`RPC '${e}' stream ${a} transport opened.`),z.s_())})),Z(P,_a.EventType.CLOSE,(()=>{$||($=!0,se(Dt,`RPC '${e}' stream ${a} transport closed`),z.__(),this.I_(P))})),Z(P,_a.EventType.ERROR,(X=>{$||($=!0,uo(Dt,`RPC '${e}' stream ${a} transport errored. Name:`,X.name,"Message:",X.message),z.__(new he(K.UNAVAILABLE,"The operation could not be completed")))})),Z(P,_a.EventType.MESSAGE,(X=>{var Te;if(!$){const pe=X.data[0];Je(!!pe,16349);const me=pe,_e=me?.error||((Te=me[0])===null||Te===void 0?void 0:Te.error);if(_e){se(Dt,`RPC '${e}' stream ${a} received error:`,_e);const Qe=_e.status;let Ae=(function(A){const C=it[A];if(C!==void 0)return BA(C)})(Qe),N=_e.message;Ae===void 0&&(Ae=K.INTERNAL,N="Unknown error status: "+Qe+" with message "+_e.message),$=!0,z.__(new he(Ae,N)),P.close()}else se(Dt,`RPC '${e}' stream ${a} received:`,pe),z.a_(pe)}})),Z(m,Wv.STAT_EVENT,(X=>{X.stat===Ed.PROXY?se(Dt,`RPC '${e}' stream ${a} detected buffering proxy`):X.stat===Ed.NOPROXY&&se(Dt,`RPC '${e}' stream ${a} detected no buffering proxy`)})),setTimeout((()=>{z.o_()}),0),z}terminate(){this.u_.forEach((e=>e.close())),this.u_=[]}T_(e){this.u_.push(e)}I_(e){this.u_=this.u_.filter((t=>t===e))}}function ud(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fc(r){return new zA(r,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N_{constructor(e,t,s=1e3,a=1.5,c=6e4){this.Fi=e,this.timerId=t,this.d_=s,this.E_=a,this.A_=c,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(e){this.cancel();const t=Math.floor(this.R_+this.p_()),s=Math.max(0,Date.now()-this.m_),a=Math.max(0,t-s);a>0&&se("ExponentialBackoff",`Backing off for ${a} ms (base delay: ${this.R_} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,a,(()=>(this.m_=Date.now(),e()))),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ry="PersistentStream";class Vk{constructor(e,t,s,a,c,d,m,y){this.Fi=e,this.w_=s,this.S_=a,this.connection=c,this.authCredentialsProvider=d,this.appCheckCredentialsProvider=m,this.listener=y,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new N_(e,t)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.C_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,(()=>this.L_())))}k_(e){this.q_(),this.stream.send(e)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,e!==4?this.F_.reset():t&&t.code===K.RESOURCE_EXHAUSTED?(rs(t.toString()),rs("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):t&&t.code===K.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.n_(t)}U_(){}auth(){this.state=1;const e=this.K_(this.b_),t=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([s,a])=>{this.b_===t&&this.W_(s,a)}),(s=>{e((()=>{const a=new he(K.UNKNOWN,"Fetching auth token failed: "+s.message);return this.G_(a)}))}))}W_(e,t){const s=this.K_(this.b_);this.stream=this.z_(e,t),this.stream.Zo((()=>{s((()=>this.listener.Zo()))})),this.stream.e_((()=>{s((()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,(()=>(this.x_()&&(this.state=3),Promise.resolve()))),this.listener.e_())))})),this.stream.n_((a=>{s((()=>this.G_(a)))})),this.stream.onMessage((a=>{s((()=>++this.C_==1?this.j_(a):this.onNext(a)))}))}O_(){this.state=5,this.F_.g_((async()=>{this.state=0,this.start()}))}G_(e){return se(ry,`close with error: ${e}`),this.stream=null,this.close(4,e)}K_(e){return t=>{this.Fi.enqueueAndForget((()=>this.b_===e?t():(se(ry,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class bk extends Vk{constructor(e,t,s,a,c,d){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,s,a,d),this.serializer=c}get Z_(){return this.C_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.Z_&&this.X_([])}z_(e,t){return this.connection.P_("Write",e,t)}j_(e){return Je(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Je(!e.writeResults||e.writeResults.length===0,55816),this.listener.ea()}onNext(e){Je(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.F_.reset();const t=XA(e.writeResults,e.commitTime),s=ao(e.commitTime);return this.listener.ta(s,t)}na(){const e={};e.database=KA(this.serializer),this.k_(e)}X_(e){const t={streamToken:this.lastStreamToken,writes:e.map((s=>QA(this.serializer,s)))};this.k_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lk{}class Mk extends Lk{constructor(e,t,s,a){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=s,this.serializer=a,this.ra=!1}ia(){if(this.ra)throw new he(K.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,s,a){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([c,d])=>this.connection.Wo(e,Nd(t,s),a,c,d))).catch((c=>{throw c.name==="FirebaseError"?(c.code===K.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),c):new he(K.UNKNOWN,c.toString())}))}Jo(e,t,s,a,c){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([d,m])=>this.connection.Jo(e,Nd(t,s),a,d,m,c))).catch((d=>{throw d.name==="FirebaseError"?(d.code===K.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),d):new he(K.UNKNOWN,d.toString())}))}terminate(){this.ra=!0,this.connection.terminate()}}class Fk{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve()))))}la(e){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ua("Offline")))}set(e){this.ha(),this.sa=0,e==="Online"&&(this._a=!1),this.ua(e)}ua(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ca(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(rs(t),this._a=!1):se("OnlineStateTracker",t)}ha(){this.oa!==null&&(this.oa.cancel(),this.oa=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qa="RemoteStore";class Uk{constructor(e,t,s,a,c){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=c,this.Ea.xo((d=>{s.enqueueAndForget((async()=>{Ga(this)&&(se(qa,"Restarting streams for network reachability change."),await(async function(y){const _=je(y);_.Ia.add(4),await Ka(_),_.Aa.set("Unknown"),_.Ia.delete(4),await pc(_)})(this))}))})),this.Aa=new Fk(s,a)}}async function pc(r){if(Ga(r))for(const e of r.da)await e(!0)}async function Ka(r){for(const e of r.da)await e(!1)}function Ga(r){return je(r).Ia.size===0}async function x_(r,e,t){if(!Ha(e))throw e;r.Ia.add(1),await Ka(r),r.Aa.set("Offline"),t||(t=()=>kk(r.localStore)),r.asyncQueue.enqueueRetryable((async()=>{se(qa,"Retrying IndexedDB access"),await t(),r.Ia.delete(1),await pc(r)}))}function D_(r,e){return e().catch((t=>x_(r,t,e)))}async function mc(r){const e=je(r),t=gi(e);let s=e.Pa.length>0?e.Pa[e.Pa.length-1].batchId:af;for(;jk(e);)try{const a=await Ck(e.localStore,s);if(a===null){e.Pa.length===0&&t.B_();break}s=a.batchId,Bk(e,a)}catch(a){await x_(e,a)}O_(e)&&V_(e)}function jk(r){return Ga(r)&&r.Pa.length<10}function Bk(r,e){r.Pa.push(e);const t=gi(r);t.x_()&&t.Z_&&t.X_(e.mutations)}function O_(r){return Ga(r)&&!gi(r).M_()&&r.Pa.length>0}function V_(r){gi(r).start()}async function zk(r){gi(r).na()}async function $k(r){const e=gi(r);for(const t of r.Pa)e.X_(t.mutations)}async function Hk(r,e,t){const s=r.Pa.shift(),a=gf.from(s,e,t);await D_(r,(()=>r.remoteSyncer.applySuccessfulWrite(a))),await mc(r)}async function Wk(r,e){e&&gi(r).Z_&&await(async function(s,a){if((function(d){return jA(d)&&d!==K.ABORTED})(a.code)){const c=s.Pa.shift();gi(s).N_(),await D_(s,(()=>s.remoteSyncer.rejectFailedWrite(c.batchId,a))),await mc(s)}})(r,e),O_(r)&&V_(r)}async function iy(r,e){const t=je(r);t.asyncQueue.verifyOperationInProgress(),se(qa,"RemoteStore received new credentials");const s=Ga(t);t.Ia.add(3),await Ka(t),s&&t.Aa.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ia.delete(3),await pc(t)}async function qk(r,e){const t=je(r);e?(t.Ia.delete(2),await pc(t)):e||(t.Ia.add(2),await Ka(t),t.Aa.set("Unknown"))}function gi(r){return r.ma||(r.ma=(function(t,s,a){const c=je(t);return c.ia(),new bk(s,c.connection,c.authCredentials,c.appCheckCredentials,c.serializer,a)})(r.datastore,r.asyncQueue,{Zo:()=>Promise.resolve(),e_:zk.bind(null,r),n_:Wk.bind(null,r),ea:$k.bind(null,r),ta:Hk.bind(null,r)}),r.da.push((async e=>{e?(r.ma.N_(),await mc(r)):(await r.ma.stop(),r.Pa.length>0&&(se(qa,`Stopping write stream with ${r.Pa.length} pending writes`),r.Pa=[]))}))),r.ma}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wf{constructor(e,t,s,a,c){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=a,this.removalCallback=c,this.deferred=new Xi,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((d=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,s,a,c){const d=Date.now()+s,m=new wf(e,t,d,a,c);return m.start(s),m}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new he(K.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function b_(r,e){if(rs("AsyncQueue",`${e}: ${r}`),Ha(r))return new he(K.UNAVAILABLE,`${e}: ${r}`);throw r}class Kk{constructor(){this.queries=sy(),this.onlineState="Unknown",this.Da=new Set}terminate(){(function(t,s){const a=je(t),c=a.queries;a.queries=sy(),c.forEach(((d,m)=>{for(const y of m.wa)y.onError(s)}))})(this,new he(K.ABORTED,"Firestore shutting down"))}}function sy(){return new as((r=>f_(r)),d_)}function Gk(r){r.Da.forEach((e=>{e.next()}))}var oy,ay;(ay=oy||(oy={})).Fa="default",ay.Cache="cache";const Qk="SyncEngine";class Xk{constructor(e,t,s,a,c,d){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=a,this.currentUser=c,this.maxConcurrentLimboResolutions=d,this.hu={},this.Pu=new as((m=>f_(m)),d_),this.Tu=new Map,this.Iu=new Set,this.du=new Yt(ge.comparator),this.Eu=new Map,this.Au=new yf,this.Ru={},this.Vu=new Map,this.mu=mo.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return this.fu===!0}}async function Jk(r,e,t){const s=tC(r);try{const a=await(function(d,m){const y=je(d),_=qe.now(),I=m.reduce((($,z)=>$.add(z.key)),Vt());let P,b;return y.persistence.runTransaction("Locally write mutations","readwrite",($=>{let z=Ku(),Z=Vt();return y.Os.getEntries($,I).next((X=>{z=X,z.forEach(((Te,pe)=>{pe.isValidDocument()||(Z=Z.add(Te))}))})).next((()=>y.localDocuments.getOverlayedDocuments($,z))).next((X=>{P=X;const Te=[];for(const pe of m){const me=LA(pe,P.get(pe.key).overlayedDocument);me!=null&&Te.push(new ls(pe.key,me,s_(me.value.mapValue),Rr.exists(!0)))}return y.mutationQueue.addMutationBatch($,_,Te,m)})).next((X=>{b=X;const Te=X.applyToLocalDocumentSet(P,Z);return y.documentOverlayCache.saveOverlays($,X.batchId,Te)}))})).then((()=>({batchId:b.batchId,changes:m_(P)})))})(s.localStore,e);s.sharedClientState.addPendingMutation(a.batchId),(function(d,m,y){let _=d.Ru[d.currentUser.toKey()];_||(_=new Yt(Ne)),_=_.insert(m,y),d.Ru[d.currentUser.toKey()]=_})(s,a.batchId,t),await gc(s,a.changes),await mc(s.remoteStore)}catch(a){const c=b_(a,"Failed to persist write");t.reject(c)}}function ly(r,e,t){const s=je(r);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const a=[];s.Pu.forEach(((c,d)=>{const m=d.view.va(e);m.snapshot&&a.push(m.snapshot)})),(function(d,m){const y=je(d);y.onlineState=m;let _=!1;y.queries.forEach(((I,P)=>{for(const b of P.wa)b.va(m)&&(_=!0)})),_&&Gk(y)})(s.eventManager,e),a.length&&s.hu.J_(a),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function Yk(r,e){const t=je(r),s=e.batch.batchId;try{const a=await Ak(t.localStore,e);M_(t,s,null),L_(t,s),t.sharedClientState.updateMutationState(s,"acknowledged"),await gc(t,a)}catch(a){await sf(a)}}async function Zk(r,e,t){const s=je(r);try{const a=await(function(d,m){const y=je(d);return y.persistence.runTransaction("Reject batch","readwrite-primary",(_=>{let I;return y.mutationQueue.lookupMutationBatch(_,m).next((P=>(Je(P!==null,37113),I=P.keys(),y.mutationQueue.removeMutationBatch(_,P)))).next((()=>y.mutationQueue.performConsistencyCheck(_))).next((()=>y.documentOverlayCache.removeOverlaysForBatchId(_,I,m))).next((()=>y.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(_,I))).next((()=>y.localDocuments.getDocuments(_,I)))}))})(s.localStore,e);M_(s,e,t),L_(s,e),s.sharedClientState.updateMutationState(e,"rejected",t),await gc(s,a)}catch(a){await sf(a)}}function L_(r,e){(r.Vu.get(e)||[]).forEach((t=>{t.resolve()})),r.Vu.delete(e)}function M_(r,e,t){const s=je(r);let a=s.Ru[s.currentUser.toKey()];if(a){const c=a.get(e);c&&(t?c.reject(t):c.resolve(),a=a.remove(e)),s.Ru[s.currentUser.toKey()]=a}}async function gc(r,e,t){const s=je(r),a=[],c=[],d=[];s.Pu.isEmpty()||(s.Pu.forEach(((m,y)=>{d.push(s.gu(y,e,t).then((_=>{var I;if((_||t)&&s.isPrimaryClient){const P=_?!_.fromCache:(I=void 0)===null||I===void 0?void 0:I.current;s.sharedClientState.updateQueryState(y.targetId,P?"current":"not-current")}if(_){a.push(_);const P=_f.Es(y.targetId,_);c.push(P)}})))})),await Promise.all(d),s.hu.J_(a),await(async function(y,_){const I=je(y);try{await I.persistence.runTransaction("notifyLocalViewChanges","readwrite",(P=>B.forEach(_,(b=>B.forEach(b.Is,($=>I.persistence.referenceDelegate.addReference(P,b.targetId,$))).next((()=>B.forEach(b.ds,($=>I.persistence.referenceDelegate.removeReference(P,b.targetId,$)))))))))}catch(P){if(!Ha(P))throw P;se(Tk,"Failed to update sequence numbers: "+P)}for(const P of _){const b=P.targetId;if(!P.fromCache){const $=I.Fs.get(b),z=$.snapshotVersion,Z=$.withLastLimboFreeSnapshotVersion(z);I.Fs=I.Fs.insert(b,Z)}}})(s.localStore,c))}async function eC(r,e){const t=je(r);if(!t.currentUser.isEqual(e)){se(Qk,"User change. New user:",e.toKey());const s=await P_(t.localStore,e);t.currentUser=e,(function(c,d){c.Vu.forEach((m=>{m.forEach((y=>{y.reject(new he(K.CANCELLED,d))}))})),c.Vu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await gc(t,s.Bs)}}function tC(r){const e=je(r);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Yk.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Zk.bind(null,e),e}class Xu{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=fc(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Du(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Cu(e,this.localStore),this.indexBackfillerScheduler=this.Fu(e,this.localStore)}Cu(e,t){return null}Fu(e,t){return null}vu(e){return Sk(this.persistence,new Ek,e.initialUser,this.serializer)}Du(e){return new R_(vf.Vi,this.serializer)}bu(e){return new Rk}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Xu.provider={build:()=>new Xu};class nC extends Xu{constructor(e){super(),this.cacheSizeBytes=e}Cu(e,t){Je(this.persistence.referenceDelegate instanceof Qu,46915);const s=this.persistence.referenceDelegate.garbageCollector;return new ok(s,e.asyncQueue,t)}Du(e){const t=this.cacheSizeBytes!==void 0?Xt.withCacheSize(this.cacheSizeBytes):Xt.DEFAULT;return new R_((s=>Qu.Vi(s,t)),this.serializer)}}class Od{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>ly(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=eC.bind(null,this.syncEngine),await qk(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new Kk})()}createDatastore(e){const t=fc(e.databaseInfo.databaseId),s=(function(c){return new Ok(c)})(e.databaseInfo);return(function(c,d,m,y){return new Mk(c,d,m,y)})(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return(function(s,a,c,d,m){return new Uk(s,a,c,d,m)})(this.localStore,this.datastore,e.asyncQueue,(t=>ly(this.syncEngine,t,0)),(function(){return ny.C()?new ny:new Pk})())}createSyncEngine(e,t){return(function(a,c,d,m,y,_,I){const P=new Xk(a,c,d,m,y,_);return I&&(P.fu=!0),P})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(a){const c=je(a);se(qa,"RemoteStore shutting down."),c.Ia.add(5),await Ka(c),c.Ea.shutdown(),c.Aa.set("Unknown")})(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}Od.provider={build:()=>new Od};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yi="FirestoreClient";class rC{constructor(e,t,s,a,c){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this.databaseInfo=a,this.user=Ot.UNAUTHENTICATED,this.clientId=nf.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=c,this.authCredentials.start(s,(async d=>{se(yi,"Received user=",d.uid),await this.authCredentialListener(d),this.user=d})),this.appCheckCredentials.start(s,(d=>(se(yi,"Received new app check token=",d),this.appCheckCredentialListener(d,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Xi;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=b_(t,"Failed to shutdown persistence");e.reject(s)}})),e.promise}}async function cd(r,e){r.asyncQueue.verifyOperationInProgress(),se(yi,"Initializing OfflineComponentProvider");const t=r.configuration;await e.initialize(t);let s=t.initialUser;r.setCredentialChangeListener((async a=>{s.isEqual(a)||(await P_(e.localStore,a),s=a)})),e.persistence.setDatabaseDeletedListener((()=>{uo("Terminating Firestore due to IndexedDb database deletion"),r.terminate().then((()=>{se("Terminating Firestore due to IndexedDb database deletion completed successfully")})).catch((a=>{uo("Terminating Firestore due to IndexedDb database deletion failed",a)}))})),r._offlineComponents=e}async function uy(r,e){r.asyncQueue.verifyOperationInProgress();const t=await iC(r);se(yi,"Initializing OnlineComponentProvider"),await e.initialize(t,r.configuration),r.setCredentialChangeListener((s=>iy(e.remoteStore,s))),r.setAppCheckTokenChangeListener(((s,a)=>iy(e.remoteStore,a))),r._onlineComponents=e}async function iC(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){se(yi,"Using user provided OfflineComponentProvider");try{await cd(r,r._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(a){return a.name==="FirebaseError"?a.code===K.FAILED_PRECONDITION||a.code===K.UNIMPLEMENTED:!(typeof DOMException<"u"&&a instanceof DOMException)||a.code===22||a.code===20||a.code===11})(t))throw t;uo("Error using user provided cache. Falling back to memory cache: "+t),await cd(r,new Xu)}}else se(yi,"Using default OfflineComponentProvider"),await cd(r,new nC(void 0));return r._offlineComponents}async function sC(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(se(yi,"Using user provided OnlineComponentProvider"),await uy(r,r._uninitializedComponentsProvider._online)):(se(yi,"Using default OnlineComponentProvider"),await uy(r,new Od))),r._onlineComponents}function oC(r){return sC(r).then((e=>e.syncEngine))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F_(r){const e={};return r.timeoutSeconds!==void 0&&(e.timeoutSeconds=r.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cy=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U_="firestore.googleapis.com",hy=!0;class dy{constructor(e){var t,s;if(e.host===void 0){if(e.ssl!==void 0)throw new he(K.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=U_,this.ssl=hy}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:hy;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=C_;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<ik)throw new he(K.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}q1("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=F_((s=e.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),(function(c){if(c.timeoutSeconds!==void 0){if(isNaN(c.timeoutSeconds))throw new he(K.INVALID_ARGUMENT,`invalid long polling timeout: ${c.timeoutSeconds} (must not be NaN)`);if(c.timeoutSeconds<5)throw new he(K.INVALID_ARGUMENT,`invalid long polling timeout: ${c.timeoutSeconds} (minimum allowed value is 5)`);if(c.timeoutSeconds>30)throw new he(K.INVALID_ARGUMENT,`invalid long polling timeout: ${c.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(s,a){return s.timeoutSeconds===a.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Ef{constructor(e,t,s,a){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=a,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new dy({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new he(K.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new he(K.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new dy(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(s){if(!s)return new b1;switch(s.type){case"firstParty":return new U1(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new he(K.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const s=cy.get(t);s&&(se("ComponentProvider","Removing Datastore"),cy.delete(t),s.terminate())})(this),Promise.resolve()}}function aC(r,e,t,s={}){var a;r=Id(r,Ef);const c=go(e),d=r._getSettings(),m=Object.assign(Object.assign({},d),{emulatorOptions:r._getEmulatorOptions()}),y=`${e}:${t}`;c&&(Ny(`https://${y}`),xy("Firestore",!0)),d.host!==U_&&d.host!==y&&uo("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const _=Object.assign(Object.assign({},d),{host:y,ssl:c,emulatorOptions:s});if(!Yi(_,m)&&(r._setSettings(_),s.mockUserToken)){let I,P;if(typeof s.mockUserToken=="string")I=s.mockUserToken,P=Ot.MOCK_USER;else{I=M0(s.mockUserToken,(a=r._app)===null||a===void 0?void 0:a.options.projectId);const b=s.mockUserToken.sub||s.mockUserToken.user_id;if(!b)throw new he(K.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");P=new Ot(b)}r._authCredentials=new L1(new Qv(I,P))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tf{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Tf(this.firestore,e,this._query)}}class bt{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Fa(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new bt(this.firestore,e,this._key)}toJSON(){return{type:bt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,s){if($a(t,bt._jsonSchema))return new bt(e,s||null,new ge(tt.fromString(t.referencePath)))}}bt._jsonSchemaVersion="firestore/documentReference/1.0",bt._jsonSchema={type:st("string",bt._jsonSchemaVersion),referencePath:st("string")};class Fa extends Tf{constructor(e,t,s){super(e,t,_A(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new bt(this.firestore,null,new ge(e))}withConverter(e){return new Fa(this.firestore,e,this._path)}}function lC(r,e,...t){if(r=an(r),arguments.length===1&&(e=nf.newId()),W1("doc","path",e),r instanceof Ef){const s=tt.fromString(e,...t);return Vg(s),new bt(r,null,new ge(s))}{if(!(r instanceof bt||r instanceof Fa))throw new he(K.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=r._path.child(tt.fromString(e,...t));return Vg(s),new bt(r.firestore,r instanceof Fa?r.converter:null,new ge(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fy="AsyncQueue";class py{constructor(e=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new N_(this,"async_queue_retry"),this.oc=()=>{const s=ud();s&&se(fy,"Visibility state changed to "+s.visibilityState),this.F_.y_()},this._c=e;const t=ud();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ac(),this.uc(e)}enterRestrictedMode(e){if(!this.Xu){this.Xu=!0,this.rc=e||!1;const t=ud();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.oc)}}enqueue(e){if(this.ac(),this.Xu)return new Promise((()=>{}));const t=new Xi;return this.uc((()=>this.Xu&&this.rc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Zu.push(e),this.cc())))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(e){if(!Ha(e))throw e;se(fy,"Operation failed with retryable error: "+e)}this.Zu.length>0&&this.F_.g_((()=>this.cc()))}}uc(e){const t=this._c.then((()=>(this.nc=!0,e().catch((s=>{throw this.tc=s,this.nc=!1,rs("INTERNAL UNHANDLED ERROR: ",my(s)),s})).then((s=>(this.nc=!1,s))))));return this._c=t,t}enqueueAfterDelay(e,t,s){this.ac(),this.sc.indexOf(e)>-1&&(t=0);const a=wf.createAndSchedule(this,e,t,s,(c=>this.lc(c)));return this.ec.push(a),a}ac(){this.tc&&ve(47125,{hc:my(this.tc)})}verifyOperationInProgress(){}async Pc(){let e;do e=this._c,await e;while(e!==this._c)}Tc(e){for(const t of this.ec)if(t.timerId===e)return!0;return!1}Ic(e){return this.Pc().then((()=>{this.ec.sort(((t,s)=>t.targetTimeMs-s.targetTimeMs));for(const t of this.ec)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Pc()}))}dc(e){this.sc.push(e)}lc(e){const t=this.ec.indexOf(e);this.ec.splice(t,1)}}function my(r){let e=r.message||"";return r.stack&&(e=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),e}class j_ extends Ef{constructor(e,t,s,a){super(e,t,s,a),this.type="firestore",this._queue=new py,this._persistenceKey=a?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new py(e),this._firestoreClient=void 0,await e}}}function uC(r,e){const t=typeof r=="object"?r:Fd(),s=typeof r=="string"?r:$u,a=yo(t,"firestore").getImmediate({identifier:s});if(!a._initialized){const c=b0("firestore");c&&aC(a,...c)}return a}function cC(r){if(r._terminated)throw new he(K.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||hC(r),r._firestoreClient}function hC(r){var e,t,s;const a=r._freezeSettings(),c=(function(m,y,_,I){return new iA(m,y,_,I.host,I.ssl,I.experimentalForceLongPolling,I.experimentalAutoDetectLongPolling,F_(I.experimentalLongPollingOptions),I.useFetchStreams,I.isUsingEmulator)})(r._databaseId,((e=r._app)===null||e===void 0?void 0:e.options.appId)||"",r._persistenceKey,a);r._componentsProvider||!((t=a.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((s=a.localCache)===null||s===void 0)&&s._onlineComponentProvider)&&(r._componentsProvider={_offline:a.localCache._offlineComponentProvider,_online:a.localCache._onlineComponentProvider}),r._firestoreClient=new rC(r._authCredentials,r._appCheckCredentials,r._queue,c,r._componentsProvider&&(function(m){const y=m?._online.build();return{_offline:m?._offline.build(y),_online:y}})(r._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Mn(nr.fromBase64String(e))}catch(t){throw new he(K.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Mn(nr.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Mn._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if($a(e,Mn._jsonSchema))return Mn.fromBase64String(e.bytes)}}Mn._jsonSchemaVersion="firestore/bytes/1.0",Mn._jsonSchema={type:st("string",Mn._jsonSchemaVersion),bytes:st("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class If{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new he(K.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new St(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sf{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pr{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new he(K.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new he(K.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Ne(this._lat,e._lat)||Ne(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Pr._jsonSchemaVersion}}static fromJSON(e){if($a(e,Pr._jsonSchema))return new Pr(e.latitude,e.longitude)}}Pr._jsonSchemaVersion="firestore/geoPoint/1.0",Pr._jsonSchema={type:st("string",Pr._jsonSchemaVersion),latitude:st("number"),longitude:st("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nr{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(s,a){if(s.length!==a.length)return!1;for(let c=0;c<s.length;++c)if(s[c]!==a[c])return!1;return!0})(this._values,e._values)}toJSON(){return{type:Nr._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if($a(e,Nr._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new Nr(e.vectorValues);throw new he(K.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Nr._jsonSchemaVersion="firestore/vectorValue/1.0",Nr._jsonSchema={type:st("string",Nr._jsonSchemaVersion),vectorValues:st("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dC=/^__.*__$/;class fC{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return this.fieldMask!==null?new ls(e,this.data,this.fieldMask,t,this.fieldTransforms):new Wa(e,this.data,t,this.fieldTransforms)}}function B_(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ve(40011,{Ec:r})}}class Af{constructor(e,t,s,a,c,d){this.settings=e,this.databaseId=t,this.serializer=s,this.ignoreUndefinedProperties=a,c===void 0&&this.Ac(),this.fieldTransforms=c||[],this.fieldMask=d||[]}get path(){return this.settings.path}get Ec(){return this.settings.Ec}Rc(e){return new Af(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Vc(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),a=this.Rc({path:s,mc:!1});return a.fc(e),a}gc(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),a=this.Rc({path:s,mc:!1});return a.Ac(),a}yc(e){return this.Rc({path:void 0,mc:!0})}wc(e){return Ju(e,this.settings.methodName,this.settings.Sc||!1,this.path,this.settings.bc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.fc(this.path.get(e))}fc(e){if(e.length===0)throw this.wc("Document fields must not be empty");if(B_(this.Ec)&&dC.test(e))throw this.wc('Document fields cannot begin and end with "__"')}}class pC{constructor(e,t,s){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=s||fc(e)}Dc(e,t,s,a=!1){return new Af({Ec:e,methodName:t,bc:s,path:St.emptyPath(),mc:!1,Sc:a},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function mC(r){const e=r._freezeSettings(),t=fc(r._databaseId);return new pC(r._databaseId,!!e.ignoreUndefinedProperties,t)}function gC(r,e,t,s,a,c={}){const d=r.Dc(c.merge||c.mergeFields?2:0,e,t,a);W_("Data must be an object, but it was:",d,s);const m=$_(s,d);let y,_;if(c.merge)y=new Un(d.fieldMask),_=d.fieldTransforms;else if(c.mergeFields){const I=[];for(const P of c.mergeFields){const b=yC(e,P,t);if(!d.contains(b))throw new he(K.INVALID_ARGUMENT,`Field '${b}' is specified in your field mask but missing from your input data.`);_C(I,b)||I.push(b)}y=new Un(I),_=d.fieldTransforms.filter((P=>y.covers(P.field)))}else y=null,_=d.fieldTransforms;return new fC(new Ln(m),y,_)}class kf extends Sf{_toFieldTransform(e){return new DA(e.path,new ba)}isEqual(e){return e instanceof kf}}function z_(r,e){if(H_(r=an(r)))return W_("Unsupported field value:",e,r),$_(r,e);if(r instanceof Sf)return(function(s,a){if(!B_(a.Ec))throw a.wc(`${s._methodName}() can only be used with update() and set()`);if(!a.path)throw a.wc(`${s._methodName}() is not currently supported inside arrays`);const c=s._toFieldTransform(a);c&&a.fieldTransforms.push(c)})(r,e),null;if(r===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),r instanceof Array){if(e.settings.mc&&e.Ec!==4)throw e.wc("Nested arrays are not supported");return(function(s,a){const c=[];let d=0;for(const m of s){let y=z_(m,a.yc(d));y==null&&(y={nullValue:"NULL_VALUE"}),c.push(y),d++}return{arrayValue:{values:c}}})(r,e)}return(function(s,a){if((s=an(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return PA(a.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const c=qe.fromDate(s);return{timestampValue:Pd(a.serializer,c)}}if(s instanceof qe){const c=new qe(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:Pd(a.serializer,c)}}if(s instanceof Pr)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof Mn)return{bytesValue:$A(a.serializer,s._byteString)};if(s instanceof bt){const c=a.databaseId,d=s.firestore._databaseId;if(!d.isEqual(c))throw a.wc(`Document reference is for database ${d.projectId}/${d.database} but should be for database ${c.projectId}/${c.database}`);return{referenceValue:A_(s.firestore._databaseId||a.databaseId,s._key.path)}}if(s instanceof Nr)return(function(d,m){return{mapValue:{fields:{[r_]:{stringValue:i_},[Sd]:{arrayValue:{values:d.toArray().map((_=>{if(typeof _!="number")throw m.wc("VectorValues must only contain numeric values.");return mf(m.serializer,_)}))}}}}}})(s,a);throw a.wc(`Unsupported field value: ${rf(s)}`)})(r,e)}function $_(r,e){const t={};return Yv(r)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Eo(r,((s,a)=>{const c=z_(a,e.Vc(s));c!=null&&(t[s]=c)})),{mapValue:{fields:t}}}function H_(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof qe||r instanceof Pr||r instanceof Mn||r instanceof bt||r instanceof Sf||r instanceof Nr)}function W_(r,e,t){if(!H_(t)||!Xv(t)){const s=rf(t);throw s==="an object"?e.wc(r+" a custom object"):e.wc(r+" "+s)}}function yC(r,e,t){if((e=an(e))instanceof If)return e._internalPath;if(typeof e=="string")return q_(r,e);throw Ju("Field path arguments must be of type string or ",r,!1,void 0,t)}const vC=new RegExp("[~\\*/\\[\\]]");function q_(r,e,t){if(e.search(vC)>=0)throw Ju(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,t);try{return new If(...e.split("."))._internalPath}catch{throw Ju(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,t)}}function Ju(r,e,t,s,a){const c=s&&!s.isEmpty(),d=a!==void 0;let m=`Function ${e}() called with invalid data`;t&&(m+=" (via `toFirestore()`)"),m+=". ";let y="";return(c||d)&&(y+=" (found",c&&(y+=` in field ${s}`),d&&(y+=` in document ${a}`),y+=")"),new he(K.INVALID_ARGUMENT,m+r+y)}function _C(r,e){return r.some((t=>t.isEqual(e)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K_{constructor(e,t,s,a,c){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=a,this._converter=c}get id(){return this._key.path.lastSegment()}get ref(){return new bt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new wC(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(G_("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class wC extends K_{data(){return super.data()}}function G_(r,e){return typeof e=="string"?q_(r,e):e instanceof If?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EC(r,e,t){let s;return s=r?t&&(t.merge||t.mergeFields)?r.toFirestore(e,t):r.toFirestore(e):e,s}class vu{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class lo extends K_{constructor(e,t,s,a,c,d){super(e,t,s,a,d),this._firestore=e,this._firestoreImpl=e,this.metadata=c}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new xu(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field(G_("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new he(K.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=lo._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}lo._jsonSchemaVersion="firestore/documentSnapshot/1.0",lo._jsonSchema={type:st("string",lo._jsonSchemaVersion),bundleSource:st("string","DocumentSnapshot"),bundleName:st("string"),bundle:st("string")};class xu extends lo{data(e={}){return super.data(e)}}class Ca{constructor(e,t,s,a){this._firestore=e,this._userDataWriter=t,this._snapshot=a,this.metadata=new vu(a.hasPendingWrites,a.fromCache),this.query=s}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((s=>{e.call(t,new xu(this._firestore,this._userDataWriter,s.key,s,new vu(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new he(K.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(a,c){if(a._snapshot.oldDocs.isEmpty()){let d=0;return a._snapshot.docChanges.map((m=>{const y=new xu(a._firestore,a._userDataWriter,m.doc.key,m.doc,new vu(a._snapshot.mutatedKeys.has(m.doc.key),a._snapshot.fromCache),a.query.converter);return m.doc,{type:"added",doc:y,oldIndex:-1,newIndex:d++}}))}{let d=a._snapshot.oldDocs;return a._snapshot.docChanges.filter((m=>c||m.type!==3)).map((m=>{const y=new xu(a._firestore,a._userDataWriter,m.doc.key,m.doc,new vu(a._snapshot.mutatedKeys.has(m.doc.key),a._snapshot.fromCache),a.query.converter);let _=-1,I=-1;return m.type!==0&&(_=d.indexOf(m.doc.key),d=d.delete(m.doc.key)),m.type!==1&&(d=d.add(m.doc),I=d.indexOf(m.doc.key)),{type:TC(m.type),doc:y,oldIndex:_,newIndex:I}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new he(K.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Ca._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=nf.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],s=[],a=[];return this.docs.forEach((c=>{c._document!==null&&(t.push(c._document),s.push(this._userDataWriter.convertObjectMap(c._document.data.value.mapValue.fields,"previous")),a.push(c.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function TC(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ve(61501,{type:r})}}Ca._jsonSchemaVersion="firestore/querySnapshot/1.0",Ca._jsonSchema={type:st("string",Ca._jsonSchemaVersion),bundleSource:st("string","QuerySnapshot"),bundleName:st("string"),bundle:st("string")};function Q_(r,e,t){r=Id(r,bt);const s=Id(r.firestore,j_),a=EC(r.converter,e,t);return IC(s,[gC(mC(s),"setDoc",r._key,a,r.converter!==null,t).toMutation(r._key,Rr.none())])}function IC(r,e){return(function(s,a){const c=new Xi;return s.asyncQueue.enqueueAndForget((async()=>Jk(await oC(s),a,c))),c.promise})(cC(r),e)}function X_(){return new kf("serverTimestamp")}(function(e,t=!0){(function(a){wo=a})(vo),tr(new jn("firestore",((s,{instanceIdentifier:a,options:c})=>{const d=s.getProvider("app").getImmediate(),m=new j_(new M1(s.getProvider("auth-internal")),new j1(d,s.getProvider("app-check-internal")),(function(_,I){if(!Object.prototype.hasOwnProperty.apply(_.options,["projectId"]))throw new he(K.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Hu(_.options.projectId,I)})(d,a),d);return c=Object.assign({useFetchStreams:t},c),m._setSettings(c),m}),"PUBLIC").setMultipleInstances(!0)),vn(Pg,Ng,e),vn(Pg,Ng,"esm2017")})();let _u=null;function SC(){return{apiKey:"AIzaSyDynRWbO8apFAUv5y_W-5VnqyJ0oy3wChQ",authDomain:"semavik-tracker.firebaseapp.com",projectId:"semavik-tracker",storageBucket:"semavik-tracker.firebasestorage.app",messagingSenderId:"660018689227",appId:"1:660018689227:web:1005164d5adb930120974e"}}async function Qa(){if(_u)return _u;const r=SC();if(!r)return null;const e=Ym().length>0?Ym()[0]:Ly(r),t=O1(e),s=uC(e);let a=null;try{await uv()&&(a=DI(e))}catch{a=null}return _u={app:e,auth:t,firestore:s,messaging:a},_u}async function AC(){const r=await Qa();if(!r)return null;const e=r.auth.currentUser;if(e?.uid)return e.uid;try{return(await yS(r.auth)).user.uid}catch{return null}}function J_(){try{return Intl.DateTimeFormat().resolvedOptions().timeZone||"UTC"}catch{return"UTC"}}async function Y_(){const r=await Qa();if(!r)return null;const e=await AC();return e?lC(r.firestore,"users",e):null}async function Z_(r){const e=await Y_();e&&await Q_(e,{token:r,updated_at:X_(),time_zone:J_()},{merge:!0})}async function Yu(r){const e=await Y_();if(!e)return;const t={last_injection:r.lastInjectionIso,start_date:r.startDateIso,dose:r.dose,time_zone:J_(),updated_at:X_()};await Q_(e,t,{merge:!0})}let Zu=null;function kC(){return"/semavik-tracker/service-worker.js"}function ew(){Zu||"serviceWorker"in navigator&&(Zu=(async()=>{try{return await navigator.serviceWorker.register(kC())}catch(r){return console.warn("Service worker registration failed",r),null}})())}async function tw(){return Zu||ew(),await Zu}const CC="semavik_tracker_db",oi="kv",RC=1;class PC{dbPromise=null;open(){return this.dbPromise?this.dbPromise:(this.dbPromise=new Promise((e,t)=>{const s=indexedDB.open(CC,RC);s.onupgradeneeded=()=>{const a=s.result;a.objectStoreNames.contains(oi)||a.createObjectStore(oi)},s.onsuccess=()=>e(s.result),s.onerror=()=>t(s.error)}),this.dbPromise)}async get(e){if(typeof indexedDB>"u")return null;try{const t=await this.open();return await new Promise((s,a)=>{const m=t.transaction(oi,"readonly").objectStore(oi).get(e);m.onsuccess=()=>{s(m.result??null)},m.onerror=()=>a(m.error)})}catch(t){return console.warn("IndexedDB get failed, falling back",t),null}}async set(e,t){if(!(typeof indexedDB>"u"))try{const s=await this.open();await new Promise((a,c)=>{const y=s.transaction(oi,"readwrite").objectStore(oi).put(t,e);y.onsuccess=()=>a(),y.onerror=()=>c(y.error)})}catch(s){console.warn("IndexedDB set failed, falling back",s)}}async del(e){if(!(typeof indexedDB>"u"))try{const t=await this.open();await new Promise((s,a)=>{const m=t.transaction(oi,"readwrite").objectStore(oi).delete(e);m.onsuccess=()=>s(),m.onerror=()=>a(m.error)})}catch(t){console.warn("IndexedDB delete failed, falling back",t)}}}class NC{idb=new PC;async getItem(e){const t=await this.idb.get(e);if(t!==null)return t;try{const s=localStorage.getItem(e);return s?JSON.parse(s):null}catch{return null}}async setItem(e,t){await this.idb.set(e,t);try{localStorage.setItem(e,JSON.stringify(t))}catch{}}async removeItem(e){await this.idb.del(e);try{localStorage.removeItem(e)}catch{}}}const wu=new NC,Eu="semavik-tracker-schedule-v1";function xC(r){return r===.25||r===.5||r===1}function gy(r){return typeof r=="string"&&/^\d{4}-\d{2}-\d{2}$/.test(r)}function Tu(r){const e=ec(new Date),t=A0(r.last_injection),s=k0(e,t),a=tc(r.start_date,e),c=S0(r.dose,a),d=Ty(t,e);return{todayIso:e,nextInjectionIso:t,status:s,doseSuggestion:c,countdownText:d}}const Jt=_y((r,e)=>({initialized:!1,schedule:null,derived:null,actionBusy:!1,error:null,initializeFromStorage:async()=>{const t=await wu.getItem(Eu);if(t&&gy(t.start_date)&&gy(t.last_injection)&&xC(t.dose)&&Array.isArray(t.history)){r({schedule:t,derived:Tu(t),initialized:!0});return}r({schedule:null,derived:null,initialized:!0})},refreshDerivedNow:()=>{const t=e().schedule;t&&r({derived:Tu(t)})},completeOnboarding:async({lastInjectionIso:t,dose:s})=>{const a={start_date:t,last_injection:t,dose:s,history:[{date:t,dose:s}]};r({schedule:a,derived:Tu(a),error:null}),await wu.setItem(Eu,a);try{await Yu({lastInjectionIso:t,startDateIso:t,dose:s})}catch{r({error:"Could not sync to server yet."})}},markInjectionDone:async()=>{if(e().actionBusy)return;const t=e().schedule;if(!t)return;r({actionBusy:!0,error:null});const s=ec(new Date),a=tc(t.start_date,s),c=t.dose,d=a>=Ey&&(c===.25||c===.5),m=d?Iy(c):c,y=d?s:t.start_date,_={...t,last_injection:s,dose:m,start_date:y,history:[{date:s,dose:c},...t.history].slice(0,32)};r({schedule:_,derived:Tu(_)}),await wu.setItem(Eu,_);try{await Yu({lastInjectionIso:s,startDateIso:_.start_date,dose:m})}catch{r({error:"Could not sync to server yet."})}finally{r({actionBusy:!1})}},resetAll:async()=>{r({actionBusy:!1,error:null,schedule:null,derived:null,initialized:!0}),await wu.removeItem(Eu)}}));Jt.getState().initializeFromStorage();const Vd="semavik-fcm-token-last";function DC(r){const e=r?.data??{},t=e.type,s=r?.notification?.title||e.title||"Semavik Tracker",a=r?.notification?.body||e.body||void 0,c=t==="dose_suggestion"?"warning":t==="overdue"?"danger":"info";Ki.getState().push({kind:c,title:s,message:a})}async function OC(){const r=await Qa();!r||!r.messaging||OI(r.messaging,e=>{try{DC(e)}catch{}})}async function VC(){if(typeof window>"u"||!("Notification"in window))return;if(await Notification.requestPermission()!=="granted"){Ki.getState().push({kind:"warning",title:"Notifications disabled",message:"You can enable them later in your browser settings."});return}const e=await Qa();if(!e||!e.messaging){Ki.getState().push({kind:"danger",title:"FCM not configured",message:"Set your Firebase env variables (.env) to enable push notifications."});return}const t="BDutHrEgIarXfNPORFdew_-maE8hwUP78XCdBXfxwr2pl8nVImlqRR1TWmyHRUyw3hJ-ZttN6a5KetSaGCKI-uQ",s=await tw();if(!s){Ki.getState().push({kind:"danger",title:"Service worker not ready",message:"Reload the page and try again."});return}const a=await cv(e.messaging,{vapidKey:t,serviceWorkerRegistration:s});if(!a){Ki.getState().push({kind:"warning",title:"No device token",message:"Push notifications could not be enabled."});return}try{localStorage.setItem(Vd,a)}catch{}await Z_(a);const c=Jt.getState().schedule;c&&await Yu({lastInjectionIso:c.last_injection,startDateIso:c.start_date,dose:c.dose})}async function hd(){try{if(typeof window>"u"||!("Notification"in window)||Notification.permission!=="granted")return;const r=await Qa();if(!r||!r.messaging)return;const e="BDutHrEgIarXfNPORFdew_-maE8hwUP78XCdBXfxwr2pl8nVImlqRR1TWmyHRUyw3hJ-ZttN6a5KetSaGCKI-uQ",t=await tw();if(!t)return;const s=await cv(r.messaging,{vapidKey:e,serviceWorkerRegistration:t});if(!s||localStorage.getItem(Vd)===s)return;localStorage.setItem(Vd,s),await Z_(s);const c=Jt.getState().schedule;c&&await Yu({lastInjectionIso:c.last_injection,startDateIso:c.start_date,dose:c.dose})}catch{}}const bC=[.25,.5,1];function yy(){return ec(new Date)}function LC(){const r=Jt($=>$.completeOnboarding),e=Jt($=>$.error),[t,s]=Sr.useState(()=>yy()),[a,c]=Sr.useState(.25),[d,m]=Sr.useState(!1),[y,_]=Sr.useState(null),I=y??e,P=Sr.useMemo(()=>yy(),[]),b=async()=>{_(null),m(!0);try{if(!/^\d{4}-\d{2}-\d{2}$/.test(t)){_("Please pick a valid last injection date.");return}await r({lastInjectionIso:t,dose:a}),await VC()}catch($){_($?.message||"Something went wrong. Please try again.")}finally{m(!1)}};return Q.jsxs("div",{className:"flex flex-col gap-5 mt-2 flex-1",children:[Q.jsxs(wa,{children:[Q.jsx("p",{className:"text-xs uppercase tracking-[0.16em] text-slate-400",children:"Getting started"}),Q.jsx("h2",{className:"text-lg font-semibold mt-2",children:"Set your last injection"}),Q.jsx("p",{className:"text-sm text-slate-300 mt-2 leading-5",children:"Semavik injections are taken once a week. We'll use your last injection date to calculate when you're due next and suggest dose progression."}),Q.jsxs("label",{className:"block mt-5 text-sm",children:[Q.jsx("span",{className:"text-slate-300",children:"Last injection date"}),Q.jsx("input",{type:"date",value:t,max:P,onChange:$=>s($.target.value),className:"mt-2 w-full bg-slate-900/50 border border-slate-700 rounded-2xl px-3 py-3 text-sm outline-none focus:ring-2 focus:ring-brand"})]})]}),Q.jsxs(wa,{children:[Q.jsx("p",{className:"text-xs uppercase tracking-[0.16em] text-slate-400",children:"Starting dose"}),Q.jsx("h2",{className:"text-lg font-semibold mt-2",children:"Choose your current dose"}),Q.jsx("p",{className:"text-sm text-slate-300 mt-2 leading-5",children:"Choose 0.25 / 0.5 / 1 mg. After 28 days from start, the app will suggest dose increases according to your plan."}),Q.jsx("div",{className:"mt-4 grid grid-cols-3 gap-2",children:bC.map($=>{const z=$===a;return Q.jsxs("button",{type:"button",onClick:()=>c($),className:["rounded-2xl border px-2 py-3 text-sm font-semibold transition active:scale-[0.99]",z?"border-brand bg-brand/20 text-white":"border-slate-700 bg-slate-900/50 text-slate-200 hover:bg-slate-800/60"].join(" "),children:[Q.jsx("span",{className:"block",children:$}),Q.jsx("span",{className:"text-[11px] text-slate-400 block mt-0.5",children:"mg"})]},$)})})]}),I?Q.jsx("div",{className:"text-sm text-red-400 px-1",children:I}):null,Q.jsxs("div",{className:"mt-auto",style:{paddingBottom:"env(safe-area-inset-bottom, 16px)"},children:[Q.jsx(wy,{onClick:b,disabled:d,"aria-busy":d,children:d?"Saving...":"Save & continue"}),Q.jsx("p",{className:"text-xs text-slate-400 mt-3 text-center",children:"We'll ask for notification permission so you can receive real reminders via Firebase."})]})]})}function MC(r){return r==="today"?"bg-emerald-400/10 text-emerald-200 border-emerald-400/30":r==="overdue"?"bg-red-400/10 text-red-200 border-red-400/30":"bg-brand/10 text-brand/90 border-brand/30"}function FC({dose:r}){return Q.jsxs("div",{className:"flex items-baseline gap-1",children:[Q.jsx("div",{className:"text-4xl font-semibold tracking-tight",children:r}),Q.jsx("div",{className:"text-xs text-slate-400 mb-1",children:"mg"})]})}function UC(){const r=Jt(z=>z.schedule),e=Jt(z=>z.derived),t=Jt(z=>z.markInjectionDone),s=Jt(z=>z.resetAll),a=Jt(z=>z.actionBusy),c=Jt(z=>z.error),[d,m]=Sr.useState(!1),y=Sr.useMemo(()=>r?r.history.slice(0,3):[],[r]);if(!r||!e)return null;const _=Ty(e.nextInjectionIso,e.todayIso),I=e.status,P=e.doseSuggestion,b=P!==null&&P!==r.dose,$=tc(r.start_date,e.todayIso);return Q.jsxs("div",{className:"flex flex-col gap-4 mt-1 flex-1",children:[Q.jsx(wa,{className:"mt-0",children:Q.jsxs("div",{className:"flex items-start justify-between gap-3",children:[Q.jsxs("div",{children:[Q.jsx("p",{className:"text-xs uppercase tracking-[0.16em] text-slate-400",children:"Next injection"}),Q.jsx("div",{className:"mt-3",children:Q.jsx("div",{className:"text-3xl font-semibold leading-tight",children:Gh(e.nextInjectionIso)})}),Q.jsx("p",{className:"text-sm text-slate-300 mt-2",children:_})]}),Q.jsx("div",{children:Q.jsx("span",{className:`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold border ${MC(I)}`,children:I==="waiting"?"Waiting":I==="today"?"Today":"Overdue"})})]})}),c?Q.jsx("div",{className:"text-sm text-red-400 px-1 -mt-2",children:c}):null,Q.jsx(wa,{children:Q.jsxs("div",{className:"flex items-start justify-between gap-3",children:[Q.jsxs("div",{children:[Q.jsx("p",{className:"text-xs uppercase tracking-[0.16em] text-slate-400",children:"Current dose"}),Q.jsx("div",{className:"mt-3",children:Q.jsx(FC,{dose:r.dose})}),Q.jsxs("p",{className:"text-xs text-slate-400 mt-2",children:["Started ",Gh(r.start_date)]})]}),Q.jsxs("div",{className:"text-right",children:[Q.jsx("p",{className:"text-xs text-slate-400",children:$>=0?`${$} days on therapy`:""}),b?Q.jsxs("p",{className:"text-xs text-amber-200 mt-2",children:["Suggestion: increase to ",P," mg"]}):Q.jsx("p",{className:"text-xs text-slate-400 mt-2",children:"Dose increases after 28 days"})]})]})}),Q.jsxs(wa,{children:[Q.jsxs("div",{className:"flex items-center justify-between mb-2 gap-3",children:[Q.jsx("p",{className:"text-xs uppercase tracking-[0.16em] text-slate-400",children:"Last injections"}),Q.jsx("button",{type:"button",onClick:()=>m(z=>!z),className:"text-xs text-slate-400 hover:text-slate-200 underline underline-offset-4",children:d?"Tap again to reset":"Edit / reset"})]}),Q.jsx("div",{className:"space-y-2",children:y.length===0?Q.jsx("p",{className:"text-sm text-slate-400",children:"No history yet."}):y.map(z=>Q.jsxs("div",{className:"flex items-center justify-between text-sm",children:[Q.jsx("span",{className:"text-slate-200",children:Gh(z.date)}),Q.jsxs("span",{className:"text-slate-400",children:[z.dose," mg"]})]},`${z.date}-${z.dose}`))})]}),Q.jsxs("div",{className:"mt-auto",style:{paddingBottom:"env(safe-area-inset-bottom, 16px)"},children:[Q.jsx("div",{className:"py-1",children:Q.jsx(wy,{onClick:async()=>{if(d){m(!1),await s();return}await t()},disabled:a||d&&y.length>0,children:a?"Updating...":d?"Confirm reset":"I did the injection"})}),Q.jsx("p",{className:"text-xs text-slate-400 mt-3 text-center",children:"Reminders are sent by the backend via Firebase every day based on your schedule."})]})]})}function jC(){return Jt(e=>e.schedule)?Q.jsx(UC,{}):Q.jsx(LC,{})}function BC(){Sr.useEffect(()=>{const r=()=>{Jt.getState().refreshDerivedNow()},e=()=>{r(),hd()},t=()=>{document.visibilityState==="visible"&&(r(),hd())};return window.addEventListener("focus",e),document.addEventListener("visibilitychange",t),r(),hd(),()=>{window.removeEventListener("focus",e),document.removeEventListener("visibilitychange",t)}},[])}function zC(){const r=Jt(e=>e.initialized);return BC(),Q.jsx(E0,{children:r?Q.jsx(jC,{}):Q.jsx("div",{className:"mt-10",children:"Loading..."})})}p0.createRoot(document.getElementById("root")).render(Q.jsx(va.StrictMode,{children:Q.jsx(zC,{})}));ew();OC();
