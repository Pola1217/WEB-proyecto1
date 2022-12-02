(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerpolicy&&(i.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?i.credentials="include":r.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();function Ta(t,e){const n=Object.create(null),s=t.split(",");for(let r=0;r<s.length;r++)n[s[r]]=!0;return e?r=>!!n[r.toLowerCase()]:r=>!!n[r]}const B_="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt",$_=Ta(B_),j_="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",H_=Ta(j_);function mp(t){return!!t||t===""}function Sa(t){if(z(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],r=Pe(s)?z_(s):Sa(s);if(r)for(const i in r)e[i]=r[i]}return e}else{if(Pe(t))return t;if(Re(t))return t}}const q_=/;(?![^(]*\))/g,K_=/:(.+)/;function z_(t){const e={};return t.split(q_).forEach(n=>{if(n){const s=n.split(K_);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function Ca(t){let e="";if(Pe(t))e=t;else if(z(t))for(let n=0;n<t.length;n++){const s=Ca(t[n]);s&&(e+=s+" ")}else if(Re(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}function vN(t){if(!t)return null;let{class:e,style:n}=t;return e&&!Pe(e)&&(t.class=Ca(e)),n&&(t.style=Sa(n)),t}function W_(t,e){if(t.length!==e.length)return!1;let n=!0;for(let s=0;n&&s<t.length;s++)n=Yn(t[s],e[s]);return n}function Yn(t,e){if(t===e)return!0;let n=Oh(t),s=Oh(e);if(n||s)return n&&s?t.getTime()===e.getTime():!1;if(n=ci(t),s=ci(e),n||s)return t===e;if(n=z(t),s=z(e),n||s)return n&&s?W_(t,e):!1;if(n=Re(t),s=Re(e),n||s){if(!n||!s)return!1;const r=Object.keys(t).length,i=Object.keys(e).length;if(r!==i)return!1;for(const o in t){const a=t.hasOwnProperty(o),c=e.hasOwnProperty(o);if(a&&!c||!a&&c||!Yn(t[o],e[o]))return!1}}return String(t)===String(e)}function Aa(t,e){return t.findIndex(n=>Yn(n,e))}const jo=t=>Pe(t)?t:t==null?"":z(t)||Re(t)&&(t.toString===vp||!ne(t.toString))?JSON.stringify(t,yp,2):String(t),yp=(t,e)=>e&&e.__v_isRef?yp(t,e.value):Ys(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,r])=>(n[`${s} =>`]=r,n),{})}:xs(e)?{[`Set(${e.size})`]:[...e.values()]}:Re(e)&&!z(e)&&!_p(e)?String(e):e,Ee={},Qs=[],Ht=()=>{},G_=()=>!1,Q_=/^on[^a-z]/,Pi=t=>Q_.test(t),Jl=t=>t.startsWith("onUpdate:"),Le=Object.assign,Zl=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Y_=Object.prototype.hasOwnProperty,me=(t,e)=>Y_.call(t,e),z=Array.isArray,Ys=t=>Mi(t)==="[object Map]",xs=t=>Mi(t)==="[object Set]",Oh=t=>Mi(t)==="[object Date]",ne=t=>typeof t=="function",Pe=t=>typeof t=="string",ci=t=>typeof t=="symbol",Re=t=>t!==null&&typeof t=="object",eu=t=>Re(t)&&ne(t.then)&&ne(t.catch),vp=Object.prototype.toString,Mi=t=>vp.call(t),X_=t=>Mi(t).slice(8,-1),_p=t=>Mi(t)==="[object Object]",tu=t=>Pe(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Wr=Ta(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ka=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},J_=/-(\w)/g,Ut=ka(t=>t.replace(J_,(e,n)=>n?n.toUpperCase():"")),Z_=/\B([A-Z])/g,Jt=ka(t=>t.replace(Z_,"-$1").toLowerCase()),Ra=ka(t=>t.charAt(0).toUpperCase()+t.slice(1)),Oo=ka(t=>t?`on${Ra(t)}`:""),or=(t,e)=>!Object.is(t,e),Xs=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Ho=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Xn=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Nh;const ew=()=>Nh||(Nh=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let It;class wp{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&It&&(this.parent=It,this.index=(It.scopes||(It.scopes=[])).push(this)-1)}run(e){if(this.active){const n=It;try{return It=this,e()}finally{It=n}}}on(){It=this}off(){It=this.parent}stop(e){if(this.active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.active=!1}}}function bp(t){return new wp(t)}function Ep(t,e=It){e&&e.active&&e.effects.push(t)}function _N(){return It}function wN(t){It&&It.cleanups.push(t)}const nu=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Ip=t=>(t.w&Jn)>0,Tp=t=>(t.n&Jn)>0,tw=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Jn},nw=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const r=e[s];Ip(r)&&!Tp(r)?r.delete(t):e[n++]=r,r.w&=~Jn,r.n&=~Jn}e.length=n}},el=new WeakMap;let Vr=0,Jn=1;const tl=30;let $t;const _s=Symbol(""),nl=Symbol("");class Da{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Ep(this,s)}run(){if(!this.active)return this.fn();let e=$t,n=Hn;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=$t,$t=this,Hn=!0,Jn=1<<++Vr,Vr<=tl?tw(this):xh(this),this.fn()}finally{Vr<=tl&&nw(this),Jn=1<<--Vr,$t=this.parent,Hn=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){$t===this?this.deferStop=!0:this.active&&(xh(this),this.onStop&&this.onStop(),this.active=!1)}}function xh(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}function bN(t,e){t.effect&&(t=t.effect.fn);const n=new Da(t);e&&(Le(n,e),e.scope&&Ep(n,e.scope)),(!e||!e.lazy)&&n.run();const s=n.run.bind(n);return s.effect=n,s}function EN(t){t.effect.stop()}let Hn=!0;const Sp=[];function Ps(){Sp.push(Hn),Hn=!1}function Ms(){const t=Sp.pop();Hn=t===void 0?!0:t}function kt(t,e,n){if(Hn&&$t){let s=el.get(t);s||el.set(t,s=new Map);let r=s.get(n);r||s.set(n,r=nu()),Cp(r)}}function Cp(t,e){let n=!1;Vr<=tl?Tp(t)||(t.n|=Jn,n=!Ip(t)):n=!t.has($t),n&&(t.add($t),$t.deps.push(t))}function bn(t,e,n,s,r,i){const o=el.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&z(t))o.forEach((c,l)=>{(l==="length"||l>=s)&&a.push(c)});else switch(n!==void 0&&a.push(o.get(n)),e){case"add":z(t)?tu(n)&&a.push(o.get("length")):(a.push(o.get(_s)),Ys(t)&&a.push(o.get(nl)));break;case"delete":z(t)||(a.push(o.get(_s)),Ys(t)&&a.push(o.get(nl)));break;case"set":Ys(t)&&a.push(o.get(_s));break}if(a.length===1)a[0]&&sl(a[0]);else{const c=[];for(const l of a)l&&c.push(...l);sl(nu(c))}}function sl(t,e){const n=z(t)?t:[...t];for(const s of n)s.computed&&Ph(s);for(const s of n)s.computed||Ph(s)}function Ph(t,e){(t!==$t||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const sw=Ta("__proto__,__v_isRef,__isVue"),Ap=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(ci)),rw=Oa(),iw=Oa(!1,!0),ow=Oa(!0),aw=Oa(!0,!0),Mh=cw();function cw(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=fe(this);for(let i=0,o=this.length;i<o;i++)kt(s,"get",i+"");const r=s[e](...n);return r===-1||r===!1?s[e](...n.map(fe)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Ps();const s=fe(this)[e].apply(this,n);return Ms(),s}}),t}function Oa(t=!1,e=!1){return function(s,r,i){if(r==="__v_isReactive")return!t;if(r==="__v_isReadonly")return t;if(r==="__v_isShallow")return e;if(r==="__v_raw"&&i===(t?e?Pp:xp:e?Np:Op).get(s))return s;const o=z(s);if(!t&&o&&me(Mh,r))return Reflect.get(Mh,r,i);const a=Reflect.get(s,r,i);return(ci(r)?Ap.has(r):sw(r))||(t||kt(s,"get",r),e)?a:Me(a)?o&&tu(r)?a:a.value:Re(a)?t?Mp(a):Zt(a):a}}const lw=kp(),uw=kp(!0);function kp(t=!1){return function(n,s,r,i){let o=n[s];if(ar(o)&&Me(o)&&!Me(r))return!1;if(!t&&(!qo(r)&&!ar(r)&&(o=fe(o),r=fe(r)),!z(n)&&Me(o)&&!Me(r)))return o.value=r,!0;const a=z(n)&&tu(s)?Number(s)<n.length:me(n,s),c=Reflect.set(n,s,r,i);return n===fe(i)&&(a?or(r,o)&&bn(n,"set",s,r):bn(n,"add",s,r)),c}}function hw(t,e){const n=me(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&n&&bn(t,"delete",e,void 0),s}function fw(t,e){const n=Reflect.has(t,e);return(!ci(e)||!Ap.has(e))&&kt(t,"has",e),n}function dw(t){return kt(t,"iterate",z(t)?"length":_s),Reflect.ownKeys(t)}const Rp={get:rw,set:lw,deleteProperty:hw,has:fw,ownKeys:dw},Dp={get:ow,set(t,e){return!0},deleteProperty(t,e){return!0}},pw=Le({},Rp,{get:iw,set:uw}),gw=Le({},Dp,{get:aw}),su=t=>t,Na=t=>Reflect.getPrototypeOf(t);function fo(t,e,n=!1,s=!1){t=t.__v_raw;const r=fe(t),i=fe(e);n||(e!==i&&kt(r,"get",e),kt(r,"get",i));const{has:o}=Na(r),a=s?su:n?ru:li;if(o.call(r,e))return a(t.get(e));if(o.call(r,i))return a(t.get(i));t!==r&&t.get(e)}function po(t,e=!1){const n=this.__v_raw,s=fe(n),r=fe(t);return e||(t!==r&&kt(s,"has",t),kt(s,"has",r)),t===r?n.has(t):n.has(t)||n.has(r)}function go(t,e=!1){return t=t.__v_raw,!e&&kt(fe(t),"iterate",_s),Reflect.get(t,"size",t)}function Lh(t){t=fe(t);const e=fe(this);return Na(e).has.call(e,t)||(e.add(t),bn(e,"add",t,t)),this}function Uh(t,e){e=fe(e);const n=fe(this),{has:s,get:r}=Na(n);let i=s.call(n,t);i||(t=fe(t),i=s.call(n,t));const o=r.call(n,t);return n.set(t,e),i?or(e,o)&&bn(n,"set",t,e):bn(n,"add",t,e),this}function Fh(t){const e=fe(this),{has:n,get:s}=Na(e);let r=n.call(e,t);r||(t=fe(t),r=n.call(e,t)),s&&s.call(e,t);const i=e.delete(t);return r&&bn(e,"delete",t,void 0),i}function Vh(){const t=fe(this),e=t.size!==0,n=t.clear();return e&&bn(t,"clear",void 0,void 0),n}function mo(t,e){return function(s,r){const i=this,o=i.__v_raw,a=fe(o),c=e?su:t?ru:li;return!t&&kt(a,"iterate",_s),o.forEach((l,u)=>s.call(r,c(l),c(u),i))}}function yo(t,e,n){return function(...s){const r=this.__v_raw,i=fe(r),o=Ys(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=r[t](...s),u=n?su:e?ru:li;return!e&&kt(i,"iterate",c?nl:_s),{next(){const{value:h,done:f}=l.next();return f?{value:h,done:f}:{value:a?[u(h[0]),u(h[1])]:u(h),done:f}},[Symbol.iterator](){return this}}}}function Dn(t){return function(...e){return t==="delete"?!1:this}}function mw(){const t={get(i){return fo(this,i)},get size(){return go(this)},has:po,add:Lh,set:Uh,delete:Fh,clear:Vh,forEach:mo(!1,!1)},e={get(i){return fo(this,i,!1,!0)},get size(){return go(this)},has:po,add:Lh,set:Uh,delete:Fh,clear:Vh,forEach:mo(!1,!0)},n={get(i){return fo(this,i,!0)},get size(){return go(this,!0)},has(i){return po.call(this,i,!0)},add:Dn("add"),set:Dn("set"),delete:Dn("delete"),clear:Dn("clear"),forEach:mo(!0,!1)},s={get(i){return fo(this,i,!0,!0)},get size(){return go(this,!0)},has(i){return po.call(this,i,!0)},add:Dn("add"),set:Dn("set"),delete:Dn("delete"),clear:Dn("clear"),forEach:mo(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=yo(i,!1,!1),n[i]=yo(i,!0,!1),e[i]=yo(i,!1,!0),s[i]=yo(i,!0,!0)}),[t,n,e,s]}const[yw,vw,_w,ww]=mw();function xa(t,e){const n=e?t?ww:_w:t?vw:yw;return(s,r,i)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?s:Reflect.get(me(n,r)&&r in s?n:s,r,i)}const bw={get:xa(!1,!1)},Ew={get:xa(!1,!0)},Iw={get:xa(!0,!1)},Tw={get:xa(!0,!0)},Op=new WeakMap,Np=new WeakMap,xp=new WeakMap,Pp=new WeakMap;function Sw(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Cw(t){return t.__v_skip||!Object.isExtensible(t)?0:Sw(X_(t))}function Zt(t){return ar(t)?t:Pa(t,!1,Rp,bw,Op)}function Aw(t){return Pa(t,!1,pw,Ew,Np)}function Mp(t){return Pa(t,!0,Dp,Iw,xp)}function IN(t){return Pa(t,!0,gw,Tw,Pp)}function Pa(t,e,n,s,r){if(!Re(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=r.get(t);if(i)return i;const o=Cw(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return r.set(t,a),a}function qn(t){return ar(t)?qn(t.__v_raw):!!(t&&t.__v_isReactive)}function ar(t){return!!(t&&t.__v_isReadonly)}function qo(t){return!!(t&&t.__v_isShallow)}function Lp(t){return qn(t)||ar(t)}function fe(t){const e=t&&t.__v_raw;return e?fe(e):t}function cr(t){return Ho(t,"__v_skip",!0),t}const li=t=>Re(t)?Zt(t):t,ru=t=>Re(t)?Mp(t):t;function iu(t){Hn&&$t&&(t=fe(t),Cp(t.dep||(t.dep=nu())))}function Ma(t,e){t=fe(t),t.dep&&sl(t.dep)}function Me(t){return!!(t&&t.__v_isRef===!0)}function ke(t){return Up(t,!1)}function kw(t){return Up(t,!0)}function Up(t,e){return Me(t)?t:new Rw(t,e)}class Rw{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:fe(e),this._value=n?e:li(e)}get value(){return iu(this),this._value}set value(e){const n=this.__v_isShallow||qo(e)||ar(e);e=n?e:fe(e),or(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:li(e),Ma(this))}}function TN(t){Ma(t)}function Js(t){return Me(t)?t.value:t}const Dw={get:(t,e,n)=>Js(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const r=t[e];return Me(r)&&!Me(n)?(r.value=n,!0):Reflect.set(t,e,n,s)}};function Fp(t){return qn(t)?t:new Proxy(t,Dw)}class Ow{constructor(e){this.dep=void 0,this.__v_isRef=!0;const{get:n,set:s}=e(()=>iu(this),()=>Ma(this));this._get=n,this._set=s}get value(){return this._get()}set value(e){this._set(e)}}function SN(t){return new Ow(t)}function Nw(t){const e=z(t)?new Array(t.length):{};for(const n in t)e[n]=Pw(t,n);return e}class xw{constructor(e,n,s){this._object=e,this._key=n,this._defaultValue=s,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}}function Pw(t,e,n){const s=t[e];return Me(s)?s:new xw(t,e,n)}var Vp;class Mw{constructor(e,n,s,r){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[Vp]=!1,this._dirty=!0,this.effect=new Da(e,()=>{this._dirty||(this._dirty=!0,Ma(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=s}get value(){const e=fe(this);return iu(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}Vp="__v_isReadonly";function Lw(t,e,n=!1){let s,r;const i=ne(t);return i?(s=t,r=Ht):(s=t.get,r=t.set),new Mw(s,r,i||!r,n)}const Gr=[];function Uw(t,...e){Ps();const n=Gr.length?Gr[Gr.length-1].component:null,s=n&&n.appContext.config.warnHandler,r=Fw();if(s)vn(s,n,11,[t+e.join(""),n&&n.proxy,r.map(({vnode:i})=>`at <${Eg(n,i.type)}>`).join(`
`),r]);else{const i=[`[Vue warn]: ${t}`,...e];r.length&&i.push(`
`,...Vw(r)),console.warn(...i)}Ms()}function Fw(){let t=Gr[Gr.length-1];if(!t)return[];const e=[];for(;t;){const n=e[0];n&&n.vnode===t?n.recurseCount++:e.push({vnode:t,recurseCount:0});const s=t.component&&t.component.parent;t=s&&s.vnode}return e}function Vw(t){const e=[];return t.forEach((n,s)=>{e.push(...s===0?[]:[`
`],...Bw(n))}),e}function Bw({vnode:t,recurseCount:e}){const n=e>0?`... (${e} recursive calls)`:"",s=t.component?t.component.parent==null:!1,r=` at <${Eg(t.component,t.type,s)}`,i=">"+n;return t.props?[r,...$w(t.props),i]:[r+i]}function $w(t){const e=[],n=Object.keys(t);return n.slice(0,3).forEach(s=>{e.push(...Bp(s,t[s]))}),n.length>3&&e.push(" ..."),e}function Bp(t,e,n){return Pe(e)?(e=JSON.stringify(e),n?e:[`${t}=${e}`]):typeof e=="number"||typeof e=="boolean"||e==null?n?e:[`${t}=${e}`]:Me(e)?(e=Bp(t,fe(e.value),!0),n?e:[`${t}=Ref<`,e,">"]):ne(e)?[`${t}=fn${e.name?`<${e.name}>`:""}`]:(e=fe(e),n?e:[`${t}=`,e])}function vn(t,e,n,s){let r;try{r=s?t(...s):t()}catch(i){Er(i,e,n)}return r}function Pt(t,e,n,s){if(ne(t)){const i=vn(t,e,n,s);return i&&eu(i)&&i.catch(o=>{Er(o,e,n)}),i}const r=[];for(let i=0;i<t.length;i++)r.push(Pt(t[i],e,n,s));return r}function Er(t,e,n,s=!0){const r=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const l=i.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){vn(c,null,10,[t,o,a]);return}}jw(t,n,r,s)}function jw(t,e,n,s=!0){console.error(t)}let Ko=!1,rl=!1;const rt=[];let Qt=0;const Zs=[];let fn=null,fs=0;const $p=Promise.resolve();let ou=null;function Li(t){const e=ou||$p;return t?e.then(this?t.bind(this):t):e}function Hw(t){let e=Qt+1,n=rt.length;for(;e<n;){const s=e+n>>>1;ui(rt[s])<t?e=s+1:n=s}return e}function La(t){(!rt.length||!rt.includes(t,Ko&&t.allowRecurse?Qt+1:Qt))&&(t.id==null?rt.push(t):rt.splice(Hw(t.id),0,t),jp())}function jp(){!Ko&&!rl&&(rl=!0,ou=$p.then(qp))}function qw(t){const e=rt.indexOf(t);e>Qt&&rt.splice(e,1)}function Hp(t){z(t)?Zs.push(...t):(!fn||!fn.includes(t,t.allowRecurse?fs+1:fs))&&Zs.push(t),jp()}function Bh(t,e=Qt){for(;e<rt.length;e++){const n=rt[e];n&&n.pre&&(rt.splice(e,1),e--,n())}}function zo(t){if(Zs.length){const e=[...new Set(Zs)];if(Zs.length=0,fn){fn.push(...e);return}for(fn=e,fn.sort((n,s)=>ui(n)-ui(s)),fs=0;fs<fn.length;fs++)fn[fs]();fn=null,fs=0}}const ui=t=>t.id==null?1/0:t.id,Kw=(t,e)=>{const n=ui(t)-ui(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function qp(t){rl=!1,Ko=!0,rt.sort(Kw);const e=Ht;try{for(Qt=0;Qt<rt.length;Qt++){const n=rt[Qt];n&&n.active!==!1&&vn(n,null,14)}}finally{Qt=0,rt.length=0,zo(),Ko=!1,ou=null,(rt.length||Zs.length)&&qp()}}let Pr,vo=[];function zw(t,e){var n,s;Pr=t,Pr?(Pr.enabled=!0,vo.forEach(({event:r,args:i})=>Pr.emit(r,...i)),vo=[]):typeof window<"u"&&window.HTMLElement&&!(!((s=(n=window.navigator)===null||n===void 0?void 0:n.userAgent)===null||s===void 0)&&s.includes("jsdom"))?((e.__VUE_DEVTOOLS_HOOK_REPLAY__=e.__VUE_DEVTOOLS_HOOK_REPLAY__||[]).push(i=>{zw(i,e)}),setTimeout(()=>{Pr||(e.__VUE_DEVTOOLS_HOOK_REPLAY__=null,vo=[])},3e3)):vo=[]}function Ww(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||Ee;let r=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in s){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:f}=s[u]||Ee;f&&(r=n.map(d=>d.trim())),h&&(r=n.map(Xn))}let a,c=s[a=Oo(e)]||s[a=Oo(Ut(e))];!c&&i&&(c=s[a=Oo(Jt(e))]),c&&Pt(c,t,6,r);const l=s[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Pt(l,t,6,r)}}function Kp(t,e,n=!1){const s=e.emitsCache,r=s.get(t);if(r!==void 0)return r;const i=t.emits;let o={},a=!1;if(!ne(t)){const c=l=>{const u=Kp(l,e,!0);u&&(a=!0,Le(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(Re(t)&&s.set(t,null),null):(z(i)?i.forEach(c=>o[c]=null):Le(o,i),Re(t)&&s.set(t,o),o)}function Ua(t,e){return!t||!Pi(e)?!1:(e=e.slice(2).replace(/Once$/,""),me(t,e[0].toLowerCase()+e.slice(1))||me(t,Jt(e))||me(t,e))}let at=null,Fa=null;function hi(t){const e=at;return at=t,Fa=t&&t.type.__scopeId||null,e}function zp(t){Fa=t}function Wp(){Fa=null}const CN=t=>Tt;function Tt(t,e=at,n){if(!e||t._n)return t;const s=(...r)=>{s._d&&Zh(-1);const i=hi(e),o=t(...r);return hi(i),s._d&&Zh(1),o};return s._n=!0,s._c=!0,s._d=!0,s}function No(t){const{type:e,vnode:n,proxy:s,withProxy:r,props:i,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:h,data:f,setupState:d,ctx:m,inheritAttrs:E}=t;let I,v;const g=hi(t);try{if(n.shapeFlag&4){const T=r||s;I=St(u.call(T,T,h,i,d,f,m)),v=c}else{const T=e;I=St(T.length>1?T(i,{attrs:c,slots:a,emit:l}):T(i,null)),v=e.props?c:Qw(c)}}catch(T){Yr.length=0,Er(T,t,1),I=ue(pt)}let w=I;if(v&&E!==!1){const T=Object.keys(v),{shapeFlag:A}=w;T.length&&A&7&&(o&&T.some(Jl)&&(v=Yw(v,o)),w=En(w,v))}return n.dirs&&(w=En(w),w.dirs=w.dirs?w.dirs.concat(n.dirs):n.dirs),n.transition&&(w.transition=n.transition),I=w,hi(g),I}function Gw(t){let e;for(let n=0;n<t.length;n++){const s=t[n];if(Ss(s)){if(s.type!==pt||s.children==="v-if"){if(e)return;e=s}}else return}return e}const Qw=t=>{let e;for(const n in t)(n==="class"||n==="style"||Pi(n))&&((e||(e={}))[n]=t[n]);return e},Yw=(t,e)=>{const n={};for(const s in t)(!Jl(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function Xw(t,e,n){const{props:s,children:r,component:i}=t,{props:o,children:a,patchFlag:c}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return s?$h(s,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(o[f]!==s[f]&&!Ua(l,f))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?$h(s,o,l):!0:!!o;return!1}function $h(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let r=0;r<s.length;r++){const i=s[r];if(e[i]!==t[i]&&!Ua(n,i))return!0}return!1}function au({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const Gp=t=>t.__isSuspense,Jw={name:"Suspense",__isSuspense:!0,process(t,e,n,s,r,i,o,a,c,l){t==null?Zw(e,n,s,r,i,o,a,c,l):eb(t,e,n,s,r,o,a,c,l)},hydrate:tb,create:cu,normalize:nb},AN=Jw;function fi(t,e){const n=t.props&&t.props[e];ne(n)&&n()}function Zw(t,e,n,s,r,i,o,a,c){const{p:l,o:{createElement:u}}=c,h=u("div"),f=t.suspense=cu(t,r,s,e,h,n,i,o,a,c);l(null,f.pendingBranch=t.ssContent,h,null,s,f,i,o),f.deps>0?(fi(t,"onPending"),fi(t,"onFallback"),l(null,t.ssFallback,e,n,s,null,i,o),er(f,t.ssFallback)):f.resolve()}function eb(t,e,n,s,r,i,o,a,{p:c,um:l,o:{createElement:u}}){const h=e.suspense=t.suspense;h.vnode=e,e.el=t.el;const f=e.ssContent,d=e.ssFallback,{activeBranch:m,pendingBranch:E,isInFallback:I,isHydrating:v}=h;if(E)h.pendingBranch=f,Yt(f,E)?(c(E,f,h.hiddenContainer,null,r,h,i,o,a),h.deps<=0?h.resolve():I&&(c(m,d,n,s,r,null,i,o,a),er(h,d))):(h.pendingId++,v?(h.isHydrating=!1,h.activeBranch=E):l(E,r,h),h.deps=0,h.effects.length=0,h.hiddenContainer=u("div"),I?(c(null,f,h.hiddenContainer,null,r,h,i,o,a),h.deps<=0?h.resolve():(c(m,d,n,s,r,null,i,o,a),er(h,d))):m&&Yt(f,m)?(c(m,f,n,s,r,h,i,o,a),h.resolve(!0)):(c(null,f,h.hiddenContainer,null,r,h,i,o,a),h.deps<=0&&h.resolve()));else if(m&&Yt(f,m))c(m,f,n,s,r,h,i,o,a),er(h,f);else if(fi(e,"onPending"),h.pendingBranch=f,h.pendingId++,c(null,f,h.hiddenContainer,null,r,h,i,o,a),h.deps<=0)h.resolve();else{const{timeout:g,pendingId:w}=h;g>0?setTimeout(()=>{h.pendingId===w&&h.fallback(d)},g):g===0&&h.fallback(d)}}function cu(t,e,n,s,r,i,o,a,c,l,u=!1){const{p:h,m:f,um:d,n:m,o:{parentNode:E,remove:I}}=l,v=Xn(t.props&&t.props.timeout),g={vnode:t,parent:e,parentComponent:n,isSVG:o,container:s,hiddenContainer:r,anchor:i,deps:0,pendingId:0,timeout:typeof v=="number"?v:-1,activeBranch:null,pendingBranch:null,isInFallback:!0,isHydrating:u,isUnmounted:!1,effects:[],resolve(w=!1){const{vnode:T,activeBranch:A,pendingBranch:L,pendingId:N,effects:S,parentComponent:F,container:H}=g;if(g.isHydrating)g.isHydrating=!1;else if(!w){const ee=A&&L.transition&&L.transition.mode==="out-in";ee&&(A.transition.afterLeave=()=>{N===g.pendingId&&f(L,H,$,0)});let{anchor:$}=g;A&&($=m(A),d(A,F,g,!0)),ee||f(L,H,$,0)}er(g,L),g.pendingBranch=null,g.isInFallback=!1;let j=g.parent,B=!1;for(;j;){if(j.pendingBranch){j.effects.push(...S),B=!0;break}j=j.parent}B||Hp(S),g.effects=[],fi(T,"onResolve")},fallback(w){if(!g.pendingBranch)return;const{vnode:T,activeBranch:A,parentComponent:L,container:N,isSVG:S}=g;fi(T,"onFallback");const F=m(A),H=()=>{!g.isInFallback||(h(null,w,N,F,L,null,S,a,c),er(g,w))},j=w.transition&&w.transition.mode==="out-in";j&&(A.transition.afterLeave=H),g.isInFallback=!0,d(A,L,null,!0),j||H()},move(w,T,A){g.activeBranch&&f(g.activeBranch,w,T,A),g.container=w},next(){return g.activeBranch&&m(g.activeBranch)},registerDep(w,T){const A=!!g.pendingBranch;A&&g.deps++;const L=w.vnode.el;w.asyncDep.catch(N=>{Er(N,w,0)}).then(N=>{if(w.isUnmounted||g.isUnmounted||g.pendingId!==w.suspenseId)return;w.asyncResolved=!0;const{vnode:S}=w;hl(w,N,!1),L&&(S.el=L);const F=!L&&w.subTree.el;T(w,S,E(L||w.subTree.el),L?null:m(w.subTree),g,o,c),F&&I(F),au(w,S.el),A&&--g.deps===0&&g.resolve()})},unmount(w,T){g.isUnmounted=!0,g.activeBranch&&d(g.activeBranch,n,w,T),g.pendingBranch&&d(g.pendingBranch,n,w,T)}};return g}function tb(t,e,n,s,r,i,o,a,c){const l=e.suspense=cu(e,s,n,t.parentNode,document.createElement("div"),null,r,i,o,a,!0),u=c(t,l.pendingBranch=e.ssContent,n,l,i,o);return l.deps===0&&l.resolve(),u}function nb(t){const{shapeFlag:e,children:n}=t,s=e&32;t.ssContent=jh(s?n.default:n),t.ssFallback=s?jh(n.fallback):ue(pt)}function jh(t){let e;if(ne(t)){const n=Ts&&t._c;n&&(t._d=!1,Mt()),t=t(),n&&(t._d=!0,e=yt,dg())}return z(t)&&(t=Gw(t)),t=St(t),e&&!t.dynamicChildren&&(t.dynamicChildren=e.filter(n=>n!==t)),t}function Qp(t,e){e&&e.pendingBranch?z(t)?e.effects.push(...t):e.effects.push(t):Hp(t)}function er(t,e){t.activeBranch=e;const{vnode:n,parentComponent:s}=t,r=n.el=e.el;s&&s.subTree===n&&(s.vnode.el=r,au(s,r))}function Nt(t,e){if($e){let n=$e.provides;const s=$e.parent&&$e.parent.provides;s===n&&(n=$e.provides=Object.create(s)),n[t]=e}}function We(t,e,n=!1){const s=$e||at;if(s){const r=s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides;if(r&&t in r)return r[t];if(arguments.length>1)return n&&ne(e)?e.call(s.proxy):e}}function sb(t,e){return Ui(t,null,e)}function rb(t,e){return Ui(t,null,{flush:"post"})}function kN(t,e){return Ui(t,null,{flush:"sync"})}const Hh={};function Kn(t,e,n){return Ui(t,e,n)}function Ui(t,e,{immediate:n,deep:s,flush:r,onTrack:i,onTrigger:o}=Ee){const a=$e;let c,l=!1,u=!1;if(Me(t)?(c=()=>t.value,l=qo(t)):qn(t)?(c=()=>t,s=!0):z(t)?(u=!0,l=t.some(v=>qn(v)||qo(v)),c=()=>t.map(v=>{if(Me(v))return v.value;if(qn(v))return ps(v);if(ne(v))return vn(v,a,2)})):ne(t)?e?c=()=>vn(t,a,2):c=()=>{if(!(a&&a.isUnmounted))return h&&h(),Pt(t,a,3,[f])}:c=Ht,e&&s){const v=c;c=()=>ps(v())}let h,f=v=>{h=I.onStop=()=>{vn(v,a,4)}};if(hr)return f=Ht,e?n&&Pt(e,a,3,[c(),u?[]:void 0,f]):c(),Ht;let d=u?[]:Hh;const m=()=>{if(!!I.active)if(e){const v=I.run();(s||l||(u?v.some((g,w)=>or(g,d[w])):or(v,d)))&&(h&&h(),Pt(e,a,3,[v,d===Hh?void 0:d,f]),d=v)}else I.run()};m.allowRecurse=!!e;let E;r==="sync"?E=m:r==="post"?E=()=>Ye(m,a&&a.suspense):(m.pre=!0,a&&(m.id=a.uid),E=()=>La(m));const I=new Da(c,E);return e?n?m():d=I.run():r==="post"?Ye(I.run.bind(I),a&&a.suspense):I.run(),()=>{I.stop(),a&&a.scope&&Zl(a.scope.effects,I)}}function ib(t,e,n){const s=this.proxy,r=Pe(t)?t.includes(".")?Yp(s,t):()=>s[t]:t.bind(s,s);let i;ne(e)?i=e:(i=e.handler,n=e);const o=$e;Zn(this);const a=Ui(r,i.bind(s),n);return o?Zn(o):zn(),a}function Yp(t,e){const n=e.split(".");return()=>{let s=t;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}function ps(t,e){if(!Re(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Me(t))ps(t.value,e);else if(z(t))for(let n=0;n<t.length;n++)ps(t[n],e);else if(xs(t)||Ys(t))t.forEach(n=>{ps(n,e)});else if(_p(t))for(const n in t)ps(t[n],e);return t}function Xp(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Vi(()=>{t.isMounted=!0}),hu(()=>{t.isUnmounting=!0}),t}const Ot=[Function,Array],ob={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Ot,onEnter:Ot,onAfterEnter:Ot,onEnterCancelled:Ot,onBeforeLeave:Ot,onLeave:Ot,onAfterLeave:Ot,onLeaveCancelled:Ot,onBeforeAppear:Ot,onAppear:Ot,onAfterAppear:Ot,onAppearCancelled:Ot},setup(t,{slots:e}){const n=Rn(),s=Xp();let r;return()=>{const i=e.default&&lu(e.default(),!0);if(!i||!i.length)return;let o=i[0];if(i.length>1){for(const E of i)if(E.type!==pt){o=E;break}}const a=fe(t),{mode:c}=a;if(s.isLeaving)return Tc(o);const l=qh(o);if(!l)return Tc(o);const u=di(l,a,s,n);lr(l,u);const h=n.subTree,f=h&&qh(h);let d=!1;const{getTransitionKey:m}=l.type;if(m){const E=m();r===void 0?r=E:E!==r&&(r=E,d=!0)}if(f&&f.type!==pt&&(!Yt(l,f)||d)){const E=di(f,a,s,n);if(lr(f,E),c==="out-in")return s.isLeaving=!0,E.afterLeave=()=>{s.isLeaving=!1,n.update()},Tc(o);c==="in-out"&&l.type!==pt&&(E.delayLeave=(I,v,g)=>{const w=Zp(s,f);w[String(f.key)]=f,I._leaveCb=()=>{v(),I._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=g})}return o}}},Jp=ob;function Zp(t,e){const{leavingVNodes:n}=t;let s=n.get(e.type);return s||(s=Object.create(null),n.set(e.type,s)),s}function di(t,e,n,s){const{appear:r,mode:i,persisted:o=!1,onBeforeEnter:a,onEnter:c,onAfterEnter:l,onEnterCancelled:u,onBeforeLeave:h,onLeave:f,onAfterLeave:d,onLeaveCancelled:m,onBeforeAppear:E,onAppear:I,onAfterAppear:v,onAppearCancelled:g}=e,w=String(t.key),T=Zp(n,t),A=(S,F)=>{S&&Pt(S,s,9,F)},L=(S,F)=>{const H=F[1];A(S,F),z(S)?S.every(j=>j.length<=1)&&H():S.length<=1&&H()},N={mode:i,persisted:o,beforeEnter(S){let F=a;if(!n.isMounted)if(r)F=E||a;else return;S._leaveCb&&S._leaveCb(!0);const H=T[w];H&&Yt(t,H)&&H.el._leaveCb&&H.el._leaveCb(),A(F,[S])},enter(S){let F=c,H=l,j=u;if(!n.isMounted)if(r)F=I||c,H=v||l,j=g||u;else return;let B=!1;const ee=S._enterCb=$=>{B||(B=!0,$?A(j,[S]):A(H,[S]),N.delayedLeave&&N.delayedLeave(),S._enterCb=void 0)};F?L(F,[S,ee]):ee()},leave(S,F){const H=String(t.key);if(S._enterCb&&S._enterCb(!0),n.isUnmounting)return F();A(h,[S]);let j=!1;const B=S._leaveCb=ee=>{j||(j=!0,F(),ee?A(m,[S]):A(d,[S]),S._leaveCb=void 0,T[H]===t&&delete T[H])};T[H]=t,f?L(f,[S,B]):B()},clone(S){return di(S,e,n,s)}};return N}function Tc(t){if(Fi(t))return t=En(t),t.children=null,t}function qh(t){return Fi(t)?t.children?t.children[0]:void 0:t}function lr(t,e){t.shapeFlag&6&&t.component?lr(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function lu(t,e=!1,n){let s=[],r=0;for(let i=0;i<t.length;i++){let o=t[i];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===Fe?(o.patchFlag&128&&r++,s=s.concat(lu(o.children,e,a))):(e||o.type!==pt)&&s.push(a!=null?En(o,{key:a}):o)}if(r>1)for(let i=0;i<s.length;i++)s[i].patchFlag=-2;return s}function Ir(t){return ne(t)?{setup:t,name:t.name}:t}const ws=t=>!!t.type.__asyncLoader;function RN(t){ne(t)&&(t={loader:t});const{loader:e,loadingComponent:n,errorComponent:s,delay:r=200,timeout:i,suspensible:o=!0,onError:a}=t;let c=null,l,u=0;const h=()=>(u++,c=null,f()),f=()=>{let d;return c||(d=c=e().catch(m=>{if(m=m instanceof Error?m:new Error(String(m)),a)return new Promise((E,I)=>{a(m,()=>E(h()),()=>I(m),u+1)});throw m}).then(m=>d!==c&&c?c:(m&&(m.__esModule||m[Symbol.toStringTag]==="Module")&&(m=m.default),l=m,m)))};return Ir({name:"AsyncComponentWrapper",__asyncLoader:f,get __asyncResolved(){return l},setup(){const d=$e;if(l)return()=>Sc(l,d);const m=g=>{c=null,Er(g,d,13,!s)};if(o&&d.suspense||hr)return f().then(g=>()=>Sc(g,d)).catch(g=>(m(g),()=>s?ue(s,{error:g}):null));const E=ke(!1),I=ke(),v=ke(!!r);return r&&setTimeout(()=>{v.value=!1},r),i!=null&&setTimeout(()=>{if(!E.value&&!I.value){const g=new Error(`Async component timed out after ${i}ms.`);m(g),I.value=g}},i),f().then(()=>{E.value=!0,d.parent&&Fi(d.parent.vnode)&&La(d.parent.update)}).catch(g=>{m(g),I.value=g}),()=>{if(E.value&&l)return Sc(l,d);if(I.value&&s)return ue(s,{error:I.value});if(n&&!v.value)return ue(n)}}})}function Sc(t,{vnode:{ref:e,props:n,children:s,shapeFlag:r},parent:i}){const o=ue(t,n,s);return o.ref=e,o}const Fi=t=>t.type.__isKeepAlive,ab={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(t,{slots:e}){const n=Rn(),s=n.ctx;if(!s.renderer)return()=>{const g=e.default&&e.default();return g&&g.length===1?g[0]:g};const r=new Map,i=new Set;let o=null;const a=n.suspense,{renderer:{p:c,m:l,um:u,o:{createElement:h}}}=s,f=h("div");s.activate=(g,w,T,A,L)=>{const N=g.component;l(g,w,T,0,a),c(N.vnode,g,w,T,N,a,A,g.slotScopeIds,L),Ye(()=>{N.isDeactivated=!1,N.a&&Xs(N.a);const S=g.props&&g.props.onVnodeMounted;S&&mt(S,N.parent,g)},a)},s.deactivate=g=>{const w=g.component;l(g,f,null,1,a),Ye(()=>{w.da&&Xs(w.da);const T=g.props&&g.props.onVnodeUnmounted;T&&mt(T,w.parent,g),w.isDeactivated=!0},a)};function d(g){Cc(g),u(g,n,a,!0)}function m(g){r.forEach((w,T)=>{const A=Xo(w.type);A&&(!g||!g(A))&&E(T)})}function E(g){const w=r.get(g);!o||w.type!==o.type?d(w):o&&Cc(o),r.delete(g),i.delete(g)}Kn(()=>[t.include,t.exclude],([g,w])=>{g&&m(T=>Br(g,T)),w&&m(T=>!Br(w,T))},{flush:"post",deep:!0});let I=null;const v=()=>{I!=null&&r.set(I,Ac(n.subTree))};return Vi(v),uu(v),hu(()=>{r.forEach(g=>{const{subTree:w,suspense:T}=n,A=Ac(w);if(g.type===A.type){Cc(A);const L=A.component.da;L&&Ye(L,T);return}d(g)})}),()=>{if(I=null,!e.default)return null;const g=e.default(),w=g[0];if(g.length>1)return o=null,g;if(!Ss(w)||!(w.shapeFlag&4)&&!(w.shapeFlag&128))return o=null,w;let T=Ac(w);const A=T.type,L=Xo(ws(T)?T.type.__asyncResolved||{}:A),{include:N,exclude:S,max:F}=t;if(N&&(!L||!Br(N,L))||S&&L&&Br(S,L))return o=T,w;const H=T.key==null?A:T.key,j=r.get(H);return T.el&&(T=En(T),w.shapeFlag&128&&(w.ssContent=T)),I=H,j?(T.el=j.el,T.component=j.component,T.transition&&lr(T,T.transition),T.shapeFlag|=512,i.delete(H),i.add(H)):(i.add(H),F&&i.size>parseInt(F,10)&&E(i.values().next().value)),T.shapeFlag|=256,o=T,Gp(w.type)?w:T}}},DN=ab;function Br(t,e){return z(t)?t.some(n=>Br(n,e)):Pe(t)?t.split(",").includes(e):t.test?t.test(e):!1}function cb(t,e){eg(t,"a",e)}function lb(t,e){eg(t,"da",e)}function eg(t,e,n=$e){const s=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(Va(e,s,n),n){let r=n.parent;for(;r&&r.parent;)Fi(r.parent.vnode)&&ub(s,e,n,r),r=r.parent}}function ub(t,e,n,s){const r=Va(e,t,s,!0);Bi(()=>{Zl(s[e],r)},n)}function Cc(t){let e=t.shapeFlag;e&256&&(e-=256),e&512&&(e-=512),t.shapeFlag=e}function Ac(t){return t.shapeFlag&128?t.ssContent:t}function Va(t,e,n=$e,s=!1){if(n){const r=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Ps(),Zn(n);const a=Pt(e,n,t,o);return zn(),Ms(),a});return s?r.unshift(i):r.push(i),i}}const kn=t=>(e,n=$e)=>(!hr||t==="sp")&&Va(t,e,n),hb=kn("bm"),Vi=kn("m"),fb=kn("bu"),uu=kn("u"),hu=kn("bum"),Bi=kn("um"),db=kn("sp"),pb=kn("rtg"),gb=kn("rtc");function mb(t,e=$e){Va("ec",t,e)}function ON(t,e){const n=at;if(n===null)return t;const s=$a(n)||n.proxy,r=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,c,l=Ee]=e[i];ne(o)&&(o={mounted:o,updated:o}),o.deep&&ps(a),r.push({dir:o,instance:s,value:a,oldValue:void 0,arg:c,modifiers:l})}return t}function Gt(t,e,n,s){const r=t.dirs,i=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];i&&(a.oldValue=i[o].value);let c=a.dir[s];c&&(Ps(),Pt(c,n,8,[t.el,a,t,e]),Ms())}}const fu="components",yb="directives";function en(t,e){return du(fu,t,!0,e)||t}const tg=Symbol();function NN(t){return Pe(t)?du(fu,t,!1)||t:t||tg}function xN(t){return du(yb,t)}function du(t,e,n=!0,s=!1){const r=at||$e;if(r){const i=r.type;if(t===fu){const a=Xo(i,!1);if(a&&(a===e||a===Ut(e)||a===Ra(Ut(e))))return i}const o=Kh(r[t]||i[t],e)||Kh(r.appContext[t],e);return!o&&s?i:o}}function Kh(t,e){return t&&(t[e]||t[Ut(e)]||t[Ra(Ut(e))])}function ng(t,e,n,s){let r;const i=n&&n[s];if(z(t)||Pe(t)){r=new Array(t.length);for(let o=0,a=t.length;o<a;o++)r[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){r=new Array(t);for(let o=0;o<t;o++)r[o]=e(o+1,o,void 0,i&&i[o])}else if(Re(t))if(t[Symbol.iterator])r=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);r=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];r[a]=e(t[l],l,a,i&&i[a])}}else r=[];return n&&(n[s]=r),r}function PN(t,e){for(let n=0;n<e.length;n++){const s=e[n];if(z(s))for(let r=0;r<s.length;r++)t[s[r].name]=s[r].fn;else s&&(t[s.name]=s.key?(...r)=>{const i=s.fn(...r);return i.key=s.key,i}:s.fn)}return t}function MN(t,e,n={},s,r){if(at.isCE||at.parent&&ws(at.parent)&&at.parent.isCE)return ue("slot",e==="default"?null:{name:e},s&&s());let i=t[e];i&&i._c&&(i._d=!1),Mt();const o=i&&sg(i(n)),a=gi(Fe,{key:n.key||o&&o.key||`_${e}`},o||(s?s():[]),o&&t._===1?64:-2);return!r&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),i&&i._c&&(i._d=!0),a}function sg(t){return t.some(e=>Ss(e)?!(e.type===pt||e.type===Fe&&!sg(e.children)):!0)?t:null}function LN(t,e){const n={};for(const s in t)n[e&&/[A-Z]/.test(s)?`on:${s}`:Oo(s)]=t[s];return n}const il=t=>t?vg(t)?$a(t)||t.proxy:il(t.parent):null,Wo=Le(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>il(t.parent),$root:t=>il(t.root),$emit:t=>t.emit,$options:t=>ig(t),$forceUpdate:t=>t.f||(t.f=()=>La(t.update)),$nextTick:t=>t.n||(t.n=Li.bind(t.proxy)),$watch:t=>ib.bind(t)}),ol={get({_:t},e){const{ctx:n,setupState:s,data:r,props:i,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const d=o[e];if(d!==void 0)switch(d){case 1:return s[e];case 2:return r[e];case 4:return n[e];case 3:return i[e]}else{if(s!==Ee&&me(s,e))return o[e]=1,s[e];if(r!==Ee&&me(r,e))return o[e]=2,r[e];if((l=t.propsOptions[0])&&me(l,e))return o[e]=3,i[e];if(n!==Ee&&me(n,e))return o[e]=4,n[e];al&&(o[e]=0)}}const u=Wo[e];let h,f;if(u)return e==="$attrs"&&kt(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==Ee&&me(n,e))return o[e]=4,n[e];if(f=c.config.globalProperties,me(f,e))return f[e]},set({_:t},e,n){const{data:s,setupState:r,ctx:i}=t;return r!==Ee&&me(r,e)?(r[e]=n,!0):s!==Ee&&me(s,e)?(s[e]=n,!0):me(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:r,propsOptions:i}},o){let a;return!!n[o]||t!==Ee&&me(t,o)||e!==Ee&&me(e,o)||(a=i[0])&&me(a,o)||me(s,o)||me(Wo,o)||me(r.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:me(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}},vb=Le({},ol,{get(t,e){if(e!==Symbol.unscopables)return ol.get(t,e,t)},has(t,e){return e[0]!=="_"&&!$_(e)}});let al=!0;function _b(t){const e=ig(t),n=t.proxy,s=t.ctx;al=!1,e.beforeCreate&&zh(e.beforeCreate,t,"bc");const{data:r,computed:i,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:h,mounted:f,beforeUpdate:d,updated:m,activated:E,deactivated:I,beforeDestroy:v,beforeUnmount:g,destroyed:w,unmounted:T,render:A,renderTracked:L,renderTriggered:N,errorCaptured:S,serverPrefetch:F,expose:H,inheritAttrs:j,components:B,directives:ee,filters:$}=e;if(l&&wb(l,s,null,t.appContext.config.unwrapInjectedRef),o)for(const Se in o){const we=o[Se];ne(we)&&(s[Se]=we.bind(n))}if(r){const Se=r.call(n,n);Re(Se)&&(t.data=Zt(Se))}if(al=!0,i)for(const Se in i){const we=i[Se],nt=ne(we)?we.bind(n,n):ne(we.get)?we.get.bind(n,n):Ht,ln=!ne(we)&&ne(we.set)?we.set.bind(n):Ht,Dt=it({get:nt,set:ln});Object.defineProperty(s,Se,{enumerable:!0,configurable:!0,get:()=>Dt.value,set:wt=>Dt.value=wt})}if(a)for(const Se in a)rg(a[Se],s,n,Se);if(c){const Se=ne(c)?c.call(n):c;Reflect.ownKeys(Se).forEach(we=>{Nt(we,Se[we])})}u&&zh(u,t,"c");function pe(Se,we){z(we)?we.forEach(nt=>Se(nt.bind(n))):we&&Se(we.bind(n))}if(pe(hb,h),pe(Vi,f),pe(fb,d),pe(uu,m),pe(cb,E),pe(lb,I),pe(mb,S),pe(gb,L),pe(pb,N),pe(hu,g),pe(Bi,T),pe(db,F),z(H))if(H.length){const Se=t.exposed||(t.exposed={});H.forEach(we=>{Object.defineProperty(Se,we,{get:()=>n[we],set:nt=>n[we]=nt})})}else t.exposed||(t.exposed={});A&&t.render===Ht&&(t.render=A),j!=null&&(t.inheritAttrs=j),B&&(t.components=B),ee&&(t.directives=ee)}function wb(t,e,n=Ht,s=!1){z(t)&&(t=cl(t));for(const r in t){const i=t[r];let o;Re(i)?"default"in i?o=We(i.from||r,i.default,!0):o=We(i.from||r):o=We(i),Me(o)&&s?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[r]=o}}function zh(t,e,n){Pt(z(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function rg(t,e,n,s){const r=s.includes(".")?Yp(n,s):()=>n[s];if(Pe(t)){const i=e[t];ne(i)&&Kn(r,i)}else if(ne(t))Kn(r,t.bind(n));else if(Re(t))if(z(t))t.forEach(i=>rg(i,e,n,s));else{const i=ne(t.handler)?t.handler.bind(n):e[t.handler];ne(i)&&Kn(r,i,t)}}function ig(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:r,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!r.length&&!n&&!s?c=e:(c={},r.length&&r.forEach(l=>Go(c,l,o,!0)),Go(c,e,o)),Re(e)&&i.set(e,c),c}function Go(t,e,n,s=!1){const{mixins:r,extends:i}=e;i&&Go(t,i,n,!0),r&&r.forEach(o=>Go(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=bb[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const bb={data:Wh,props:us,emits:us,methods:us,computed:us,beforeCreate:ft,created:ft,beforeMount:ft,mounted:ft,beforeUpdate:ft,updated:ft,beforeDestroy:ft,beforeUnmount:ft,destroyed:ft,unmounted:ft,activated:ft,deactivated:ft,errorCaptured:ft,serverPrefetch:ft,components:us,directives:us,watch:Ib,provide:Wh,inject:Eb};function Wh(t,e){return e?t?function(){return Le(ne(t)?t.call(this,this):t,ne(e)?e.call(this,this):e)}:e:t}function Eb(t,e){return us(cl(t),cl(e))}function cl(t){if(z(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function ft(t,e){return t?[...new Set([].concat(t,e))]:e}function us(t,e){return t?Le(Le(Object.create(null),t),e):e}function Ib(t,e){if(!t)return e;if(!e)return t;const n=Le(Object.create(null),t);for(const s in e)n[s]=ft(t[s],e[s]);return n}function Tb(t,e,n,s=!1){const r={},i={};Ho(i,Ba,1),t.propsDefaults=Object.create(null),og(t,e,r,i);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=s?r:Aw(r):t.type.props?t.props=r:t.props=i,t.attrs=i}function Sb(t,e,n,s){const{props:r,attrs:i,vnode:{patchFlag:o}}=t,a=fe(r),[c]=t.propsOptions;let l=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];if(Ua(t.emitsOptions,f))continue;const d=e[f];if(c)if(me(i,f))d!==i[f]&&(i[f]=d,l=!0);else{const m=Ut(f);r[m]=ll(c,a,m,d,t,!1)}else d!==i[f]&&(i[f]=d,l=!0)}}}else{og(t,e,r,i)&&(l=!0);let u;for(const h in a)(!e||!me(e,h)&&((u=Jt(h))===h||!me(e,u)))&&(c?n&&(n[h]!==void 0||n[u]!==void 0)&&(r[h]=ll(c,a,h,void 0,t,!0)):delete r[h]);if(i!==a)for(const h in i)(!e||!me(e,h)&&!0)&&(delete i[h],l=!0)}l&&bn(t,"set","$attrs")}function og(t,e,n,s){const[r,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(Wr(c))continue;const l=e[c];let u;r&&me(r,u=Ut(c))?!i||!i.includes(u)?n[u]=l:(a||(a={}))[u]=l:Ua(t.emitsOptions,c)||(!(c in s)||l!==s[c])&&(s[c]=l,o=!0)}if(i){const c=fe(n),l=a||Ee;for(let u=0;u<i.length;u++){const h=i[u];n[h]=ll(r,c,h,l[h],t,!me(l,h))}}return o}function ll(t,e,n,s,r,i){const o=t[n];if(o!=null){const a=me(o,"default");if(a&&s===void 0){const c=o.default;if(o.type!==Function&&ne(c)){const{propsDefaults:l}=r;n in l?s=l[n]:(Zn(r),s=l[n]=c.call(null,e),zn())}else s=c}o[0]&&(i&&!a?s=!1:o[1]&&(s===""||s===Jt(n))&&(s=!0))}return s}function ag(t,e,n=!1){const s=e.propsCache,r=s.get(t);if(r)return r;const i=t.props,o={},a=[];let c=!1;if(!ne(t)){const u=h=>{c=!0;const[f,d]=ag(h,e,!0);Le(o,f),d&&a.push(...d)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!c)return Re(t)&&s.set(t,Qs),Qs;if(z(i))for(let u=0;u<i.length;u++){const h=Ut(i[u]);Gh(h)&&(o[h]=Ee)}else if(i)for(const u in i){const h=Ut(u);if(Gh(h)){const f=i[u],d=o[h]=z(f)||ne(f)?{type:f}:f;if(d){const m=Xh(Boolean,d.type),E=Xh(String,d.type);d[0]=m>-1,d[1]=E<0||m<E,(m>-1||me(d,"default"))&&a.push(h)}}}const l=[o,a];return Re(t)&&s.set(t,l),l}function Gh(t){return t[0]!=="$"}function Qh(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function Yh(t,e){return Qh(t)===Qh(e)}function Xh(t,e){return z(e)?e.findIndex(n=>Yh(n,t)):ne(e)&&Yh(e,t)?0:-1}const cg=t=>t[0]==="_"||t==="$stable",pu=t=>z(t)?t.map(St):[St(t)],Cb=(t,e,n)=>{if(e._n)return e;const s=Tt((...r)=>pu(e(...r)),n);return s._c=!1,s},lg=(t,e,n)=>{const s=t._ctx;for(const r in t){if(cg(r))continue;const i=t[r];if(ne(i))e[r]=Cb(r,i,s);else if(i!=null){const o=pu(i);e[r]=()=>o}}},ug=(t,e)=>{const n=pu(e);t.slots.default=()=>n},Ab=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=fe(e),Ho(e,"_",n)):lg(e,t.slots={})}else t.slots={},e&&ug(t,e);Ho(t.slots,Ba,1)},kb=(t,e,n)=>{const{vnode:s,slots:r}=t;let i=!0,o=Ee;if(s.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(Le(r,e),!n&&a===1&&delete r._):(i=!e.$stable,lg(e,r)),o=e}else e&&(ug(t,e),o={default:1});if(i)for(const a in r)!cg(a)&&!(a in o)&&delete r[a]};function hg(){return{app:null,config:{isNativeTag:G_,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Rb=0;function Db(t,e){return function(s,r=null){ne(s)||(s=Object.assign({},s)),r!=null&&!Re(r)&&(r=null);const i=hg(),o=new Set;let a=!1;const c=i.app={_uid:Rb++,_component:s,_props:r,_container:null,_context:i,_instance:null,version:Yb,get config(){return i.config},set config(l){},use(l,...u){return o.has(l)||(l&&ne(l.install)?(o.add(l),l.install(c,...u)):ne(l)&&(o.add(l),l(c,...u))),c},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),c},component(l,u){return u?(i.components[l]=u,c):i.components[l]},directive(l,u){return u?(i.directives[l]=u,c):i.directives[l]},mount(l,u,h){if(!a){const f=ue(s,r);return f.appContext=i,u&&e?e(f,l):t(f,l,h),a=!0,c._container=l,l.__vue_app__=c,$a(f.component)||f.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(l,u){return i.provides[l]=u,c}};return c}}function Qo(t,e,n,s,r=!1){if(z(t)){t.forEach((f,d)=>Qo(f,e&&(z(e)?e[d]:e),n,s,r));return}if(ws(s)&&!r)return;const i=s.shapeFlag&4?$a(s.component)||s.component.proxy:s.el,o=r?null:i,{i:a,r:c}=t,l=e&&e.r,u=a.refs===Ee?a.refs={}:a.refs,h=a.setupState;if(l!=null&&l!==c&&(Pe(l)?(u[l]=null,me(h,l)&&(h[l]=null)):Me(l)&&(l.value=null)),ne(c))vn(c,a,12,[o,u]);else{const f=Pe(c),d=Me(c);if(f||d){const m=()=>{if(t.f){const E=f?u[c]:c.value;r?z(E)&&Zl(E,i):z(E)?E.includes(i)||E.push(i):f?(u[c]=[i],me(h,c)&&(h[c]=u[c])):(c.value=[i],t.k&&(u[t.k]=c.value))}else f?(u[c]=o,me(h,c)&&(h[c]=o)):d&&(c.value=o,t.k&&(u[t.k]=o))};o?(m.id=-1,Ye(m,n)):m()}}}let On=!1;const _o=t=>/svg/.test(t.namespaceURI)&&t.tagName!=="foreignObject",wo=t=>t.nodeType===8;function Ob(t){const{mt:e,p:n,o:{patchProp:s,createText:r,nextSibling:i,parentNode:o,remove:a,insert:c,createComment:l}}=t,u=(v,g)=>{if(!g.hasChildNodes()){n(null,v,g),zo(),g._vnode=v;return}On=!1,h(g.firstChild,v,null,null,null),zo(),g._vnode=v,On&&console.error("Hydration completed but contains mismatches.")},h=(v,g,w,T,A,L=!1)=>{const N=wo(v)&&v.data==="[",S=()=>E(v,g,w,T,A,N),{type:F,ref:H,shapeFlag:j,patchFlag:B}=g,ee=v.nodeType;g.el=v,B===-2&&(L=!1,g.dynamicChildren=null);let $=null;switch(F){case pi:ee!==3?g.children===""?(c(g.el=r(""),o(v),v),$=v):$=S():(v.data!==g.children&&(On=!0,v.data=g.children),$=i(v));break;case pt:ee!==8||N?$=S():$=i(v);break;case tr:if(ee!==1&&ee!==3)$=S();else{$=v;const de=!g.children.length;for(let pe=0;pe<g.staticCount;pe++)de&&(g.children+=$.nodeType===1?$.outerHTML:$.data),pe===g.staticCount-1&&(g.anchor=$),$=i($);return $}break;case Fe:N?$=m(v,g,w,T,A,L):$=S();break;default:if(j&1)ee!==1||g.type.toLowerCase()!==v.tagName.toLowerCase()?$=S():$=f(v,g,w,T,A,L);else if(j&6){g.slotScopeIds=A;const de=o(v);if(e(g,de,null,w,T,_o(de),L),$=N?I(v):i(v),$&&wo($)&&$.data==="teleport end"&&($=i($)),ws(g)){let pe;N?(pe=ue(Fe),pe.anchor=$?$.previousSibling:de.lastChild):pe=v.nodeType===3?Tr(""):ue("div"),pe.el=v,g.component.subTree=pe}}else j&64?ee!==8?$=S():$=g.type.hydrate(v,g,w,T,A,L,t,d):j&128&&($=g.type.hydrate(v,g,w,T,_o(o(v)),A,L,t,h))}return H!=null&&Qo(H,null,T,g),$},f=(v,g,w,T,A,L)=>{L=L||!!g.dynamicChildren;const{type:N,props:S,patchFlag:F,shapeFlag:H,dirs:j}=g,B=N==="input"&&j||N==="option";if(B||F!==-1){if(j&&Gt(g,null,w,"created"),S)if(B||!L||F&48)for(const $ in S)(B&&$.endsWith("value")||Pi($)&&!Wr($))&&s(v,$,null,S[$],!1,void 0,w);else S.onClick&&s(v,"onClick",null,S.onClick,!1,void 0,w);let ee;if((ee=S&&S.onVnodeBeforeMount)&&mt(ee,w,g),j&&Gt(g,null,w,"beforeMount"),((ee=S&&S.onVnodeMounted)||j)&&Qp(()=>{ee&&mt(ee,w,g),j&&Gt(g,null,w,"mounted")},T),H&16&&!(S&&(S.innerHTML||S.textContent))){let $=d(v.firstChild,g,v,w,T,A,L);for(;$;){On=!0;const de=$;$=$.nextSibling,a(de)}}else H&8&&v.textContent!==g.children&&(On=!0,v.textContent=g.children)}return v.nextSibling},d=(v,g,w,T,A,L,N)=>{N=N||!!g.dynamicChildren;const S=g.children,F=S.length;for(let H=0;H<F;H++){const j=N?S[H]:S[H]=St(S[H]);if(v)v=h(v,j,T,A,L,N);else{if(j.type===pi&&!j.children)continue;On=!0,n(null,j,w,null,T,A,_o(w),L)}}return v},m=(v,g,w,T,A,L)=>{const{slotScopeIds:N}=g;N&&(A=A?A.concat(N):N);const S=o(v),F=d(i(v),g,S,w,T,A,L);return F&&wo(F)&&F.data==="]"?i(g.anchor=F):(On=!0,c(g.anchor=l("]"),S,F),F)},E=(v,g,w,T,A,L)=>{if(On=!0,g.el=null,L){const F=I(v);for(;;){const H=i(v);if(H&&H!==F)a(H);else break}}const N=i(v),S=o(v);return a(v),n(null,g,S,N,w,T,_o(S),A),N},I=v=>{let g=0;for(;v;)if(v=i(v),v&&wo(v)&&(v.data==="["&&g++,v.data==="]")){if(g===0)return i(v);g--}return v};return[u,h]}const Ye=Qp;function Nb(t){return fg(t)}function xb(t){return fg(t,Ob)}function fg(t,e){const n=ew();n.__VUE__=!0;const{insert:s,remove:r,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:h,nextSibling:f,setScopeId:d=Ht,cloneNode:m,insertStaticContent:E}=t,I=(p,y,b,k=null,_=null,R=null,U=!1,O=null,M=!!y.dynamicChildren)=>{if(p===y)return;p&&!Yt(p,y)&&(k=G(p),Ke(p,_,R,!0),p=null),y.patchFlag===-2&&(M=!1,y.dynamicChildren=null);const{type:D,ref:Y,shapeFlag:K}=y;switch(D){case pi:v(p,y,b,k);break;case pt:g(p,y,b,k);break;case tr:p==null&&w(y,b,k,U);break;case Fe:ee(p,y,b,k,_,R,U,O,M);break;default:K&1?L(p,y,b,k,_,R,U,O,M):K&6?$(p,y,b,k,_,R,U,O,M):(K&64||K&128)&&D.process(p,y,b,k,_,R,U,O,M,Ie)}Y!=null&&_&&Qo(Y,p&&p.ref,R,y||p,!y)},v=(p,y,b,k)=>{if(p==null)s(y.el=a(y.children),b,k);else{const _=y.el=p.el;y.children!==p.children&&l(_,y.children)}},g=(p,y,b,k)=>{p==null?s(y.el=c(y.children||""),b,k):y.el=p.el},w=(p,y,b,k)=>{[p.el,p.anchor]=E(p.children,y,b,k,p.el,p.anchor)},T=({el:p,anchor:y},b,k)=>{let _;for(;p&&p!==y;)_=f(p),s(p,b,k),p=_;s(y,b,k)},A=({el:p,anchor:y})=>{let b;for(;p&&p!==y;)b=f(p),r(p),p=b;r(y)},L=(p,y,b,k,_,R,U,O,M)=>{U=U||y.type==="svg",p==null?N(y,b,k,_,R,U,O,M):H(p,y,_,R,U,O,M)},N=(p,y,b,k,_,R,U,O)=>{let M,D;const{type:Y,props:K,shapeFlag:X,transition:ie,patchFlag:ye,dirs:Ce}=p;if(p.el&&m!==void 0&&ye===-1)M=p.el=m(p.el);else{if(M=p.el=o(p.type,R,K&&K.is,K),X&8?u(M,p.children):X&16&&F(p.children,M,null,k,_,R&&Y!=="foreignObject",U,O),Ce&&Gt(p,null,k,"created"),K){for(const Oe in K)Oe!=="value"&&!Wr(Oe)&&i(M,Oe,null,K[Oe],R,p.children,k,_,V);"value"in K&&i(M,"value",null,K.value),(D=K.onVnodeBeforeMount)&&mt(D,k,p)}S(M,p,p.scopeId,U,k)}Ce&&Gt(p,null,k,"beforeMount");const Ae=(!_||_&&!_.pendingBranch)&&ie&&!ie.persisted;Ae&&ie.beforeEnter(M),s(M,y,b),((D=K&&K.onVnodeMounted)||Ae||Ce)&&Ye(()=>{D&&mt(D,k,p),Ae&&ie.enter(M),Ce&&Gt(p,null,k,"mounted")},_)},S=(p,y,b,k,_)=>{if(b&&d(p,b),k)for(let R=0;R<k.length;R++)d(p,k[R]);if(_){let R=_.subTree;if(y===R){const U=_.vnode;S(p,U,U.scopeId,U.slotScopeIds,_.parent)}}},F=(p,y,b,k,_,R,U,O,M=0)=>{for(let D=M;D<p.length;D++){const Y=p[D]=O?Un(p[D]):St(p[D]);I(null,Y,y,b,k,_,R,U,O)}},H=(p,y,b,k,_,R,U)=>{const O=y.el=p.el;let{patchFlag:M,dynamicChildren:D,dirs:Y}=y;M|=p.patchFlag&16;const K=p.props||Ee,X=y.props||Ee;let ie;b&&cs(b,!1),(ie=X.onVnodeBeforeUpdate)&&mt(ie,b,y,p),Y&&Gt(y,p,b,"beforeUpdate"),b&&cs(b,!0);const ye=_&&y.type!=="foreignObject";if(D?j(p.dynamicChildren,D,O,b,k,ye,R):U||nt(p,y,O,null,b,k,ye,R,!1),M>0){if(M&16)B(O,y,K,X,b,k,_);else if(M&2&&K.class!==X.class&&i(O,"class",null,X.class,_),M&4&&i(O,"style",K.style,X.style,_),M&8){const Ce=y.dynamicProps;for(let Ae=0;Ae<Ce.length;Ae++){const Oe=Ce[Ae],Bt=K[Oe],Bs=X[Oe];(Bs!==Bt||Oe==="value")&&i(O,Oe,Bt,Bs,_,p.children,b,k,V)}}M&1&&p.children!==y.children&&u(O,y.children)}else!U&&D==null&&B(O,y,K,X,b,k,_);((ie=X.onVnodeUpdated)||Y)&&Ye(()=>{ie&&mt(ie,b,y,p),Y&&Gt(y,p,b,"updated")},k)},j=(p,y,b,k,_,R,U)=>{for(let O=0;O<y.length;O++){const M=p[O],D=y[O],Y=M.el&&(M.type===Fe||!Yt(M,D)||M.shapeFlag&70)?h(M.el):b;I(M,D,Y,null,k,_,R,U,!0)}},B=(p,y,b,k,_,R,U)=>{if(b!==k){for(const O in k){if(Wr(O))continue;const M=k[O],D=b[O];M!==D&&O!=="value"&&i(p,O,D,M,U,y.children,_,R,V)}if(b!==Ee)for(const O in b)!Wr(O)&&!(O in k)&&i(p,O,b[O],null,U,y.children,_,R,V);"value"in k&&i(p,"value",b.value,k.value)}},ee=(p,y,b,k,_,R,U,O,M)=>{const D=y.el=p?p.el:a(""),Y=y.anchor=p?p.anchor:a("");let{patchFlag:K,dynamicChildren:X,slotScopeIds:ie}=y;ie&&(O=O?O.concat(ie):ie),p==null?(s(D,b,k),s(Y,b,k),F(y.children,b,Y,_,R,U,O,M)):K>0&&K&64&&X&&p.dynamicChildren?(j(p.dynamicChildren,X,b,_,R,U,O),(y.key!=null||_&&y===_.subTree)&&gu(p,y,!0)):nt(p,y,b,Y,_,R,U,O,M)},$=(p,y,b,k,_,R,U,O,M)=>{y.slotScopeIds=O,p==null?y.shapeFlag&512?_.ctx.activate(y,b,k,U,M):de(y,b,k,_,R,U,M):pe(p,y,M)},de=(p,y,b,k,_,R,U)=>{const O=p.component=yg(p,k,_);if(Fi(p)&&(O.ctx.renderer=Ie),_g(O),O.asyncDep){if(_&&_.registerDep(O,Se),!p.el){const M=O.subTree=ue(pt);g(null,M,y,b)}return}Se(O,p,y,b,_,R,U)},pe=(p,y,b)=>{const k=y.component=p.component;if(Xw(p,y,b))if(k.asyncDep&&!k.asyncResolved){we(k,y,b);return}else k.next=y,qw(k.update),k.update();else y.el=p.el,k.vnode=y},Se=(p,y,b,k,_,R,U)=>{const O=()=>{if(p.isMounted){let{next:Y,bu:K,u:X,parent:ie,vnode:ye}=p,Ce=Y,Ae;cs(p,!1),Y?(Y.el=ye.el,we(p,Y,U)):Y=ye,K&&Xs(K),(Ae=Y.props&&Y.props.onVnodeBeforeUpdate)&&mt(Ae,ie,Y,ye),cs(p,!0);const Oe=No(p),Bt=p.subTree;p.subTree=Oe,I(Bt,Oe,h(Bt.el),G(Bt),p,_,R),Y.el=Oe.el,Ce===null&&au(p,Oe.el),X&&Ye(X,_),(Ae=Y.props&&Y.props.onVnodeUpdated)&&Ye(()=>mt(Ae,ie,Y,ye),_)}else{let Y;const{el:K,props:X}=y,{bm:ie,m:ye,parent:Ce}=p,Ae=ws(y);if(cs(p,!1),ie&&Xs(ie),!Ae&&(Y=X&&X.onVnodeBeforeMount)&&mt(Y,Ce,y),cs(p,!0),K&&se){const Oe=()=>{p.subTree=No(p),se(K,p.subTree,p,_,null)};Ae?y.type.__asyncLoader().then(()=>!p.isUnmounted&&Oe()):Oe()}else{const Oe=p.subTree=No(p);I(null,Oe,b,k,p,_,R),y.el=Oe.el}if(ye&&Ye(ye,_),!Ae&&(Y=X&&X.onVnodeMounted)){const Oe=y;Ye(()=>mt(Y,Ce,Oe),_)}(y.shapeFlag&256||Ce&&ws(Ce.vnode)&&Ce.vnode.shapeFlag&256)&&p.a&&Ye(p.a,_),p.isMounted=!0,y=b=k=null}},M=p.effect=new Da(O,()=>La(D),p.scope),D=p.update=()=>M.run();D.id=p.uid,cs(p,!0),D()},we=(p,y,b)=>{y.component=p;const k=p.vnode.props;p.vnode=y,p.next=null,Sb(p,y.props,k,b),kb(p,y.children,b),Ps(),Bh(),Ms()},nt=(p,y,b,k,_,R,U,O,M=!1)=>{const D=p&&p.children,Y=p?p.shapeFlag:0,K=y.children,{patchFlag:X,shapeFlag:ie}=y;if(X>0){if(X&128){Dt(D,K,b,k,_,R,U,O,M);return}else if(X&256){ln(D,K,b,k,_,R,U,O,M);return}}ie&8?(Y&16&&V(D,_,R),K!==D&&u(b,K)):Y&16?ie&16?Dt(D,K,b,k,_,R,U,O,M):V(D,_,R,!0):(Y&8&&u(b,""),ie&16&&F(K,b,k,_,R,U,O,M))},ln=(p,y,b,k,_,R,U,O,M)=>{p=p||Qs,y=y||Qs;const D=p.length,Y=y.length,K=Math.min(D,Y);let X;for(X=0;X<K;X++){const ie=y[X]=M?Un(y[X]):St(y[X]);I(p[X],ie,b,null,_,R,U,O,M)}D>Y?V(p,_,R,!0,!1,K):F(y,b,k,_,R,U,O,M,K)},Dt=(p,y,b,k,_,R,U,O,M)=>{let D=0;const Y=y.length;let K=p.length-1,X=Y-1;for(;D<=K&&D<=X;){const ie=p[D],ye=y[D]=M?Un(y[D]):St(y[D]);if(Yt(ie,ye))I(ie,ye,b,null,_,R,U,O,M);else break;D++}for(;D<=K&&D<=X;){const ie=p[K],ye=y[X]=M?Un(y[X]):St(y[X]);if(Yt(ie,ye))I(ie,ye,b,null,_,R,U,O,M);else break;K--,X--}if(D>K){if(D<=X){const ie=X+1,ye=ie<Y?y[ie].el:k;for(;D<=X;)I(null,y[D]=M?Un(y[D]):St(y[D]),b,ye,_,R,U,O,M),D++}}else if(D>X)for(;D<=K;)Ke(p[D],_,R,!0),D++;else{const ie=D,ye=D,Ce=new Map;for(D=ye;D<=X;D++){const bt=y[D]=M?Un(y[D]):St(y[D]);bt.key!=null&&Ce.set(bt.key,D)}let Ae,Oe=0;const Bt=X-ye+1;let Bs=!1,kh=0;const xr=new Array(Bt);for(D=0;D<Bt;D++)xr[D]=0;for(D=ie;D<=K;D++){const bt=p[D];if(Oe>=Bt){Ke(bt,_,R,!0);continue}let Wt;if(bt.key!=null)Wt=Ce.get(bt.key);else for(Ae=ye;Ae<=X;Ae++)if(xr[Ae-ye]===0&&Yt(bt,y[Ae])){Wt=Ae;break}Wt===void 0?Ke(bt,_,R,!0):(xr[Wt-ye]=D+1,Wt>=kh?kh=Wt:Bs=!0,I(bt,y[Wt],b,null,_,R,U,O,M),Oe++)}const Rh=Bs?Pb(xr):Qs;for(Ae=Rh.length-1,D=Bt-1;D>=0;D--){const bt=ye+D,Wt=y[bt],Dh=bt+1<Y?y[bt+1].el:k;xr[D]===0?I(null,Wt,b,Dh,_,R,U,O,M):Bs&&(Ae<0||D!==Rh[Ae]?wt(Wt,b,Dh,2):Ae--)}}},wt=(p,y,b,k,_=null)=>{const{el:R,type:U,transition:O,children:M,shapeFlag:D}=p;if(D&6){wt(p.component.subTree,y,b,k);return}if(D&128){p.suspense.move(y,b,k);return}if(D&64){U.move(p,y,b,Ie);return}if(U===Fe){s(R,y,b);for(let K=0;K<M.length;K++)wt(M[K],y,b,k);s(p.anchor,y,b);return}if(U===tr){T(p,y,b);return}if(k!==2&&D&1&&O)if(k===0)O.beforeEnter(R),s(R,y,b),Ye(()=>O.enter(R),_);else{const{leave:K,delayLeave:X,afterLeave:ie}=O,ye=()=>s(R,y,b),Ce=()=>{K(R,()=>{ye(),ie&&ie()})};X?X(R,ye,Ce):Ce()}else s(R,y,b)},Ke=(p,y,b,k=!1,_=!1)=>{const{type:R,props:U,ref:O,children:M,dynamicChildren:D,shapeFlag:Y,patchFlag:K,dirs:X}=p;if(O!=null&&Qo(O,null,b,p,!0),Y&256){y.ctx.deactivate(p);return}const ie=Y&1&&X,ye=!ws(p);let Ce;if(ye&&(Ce=U&&U.onVnodeBeforeUnmount)&&mt(Ce,y,p),Y&6)q(p.component,b,k);else{if(Y&128){p.suspense.unmount(b,k);return}ie&&Gt(p,null,y,"beforeUnmount"),Y&64?p.type.remove(p,y,b,_,Ie,k):D&&(R!==Fe||K>0&&K&64)?V(D,y,b,!1,!0):(R===Fe&&K&384||!_&&Y&16)&&V(M,y,b),k&&gt(p)}(ye&&(Ce=U&&U.onVnodeUnmounted)||ie)&&Ye(()=>{Ce&&mt(Ce,y,p),ie&&Gt(p,null,y,"unmounted")},b)},gt=p=>{const{type:y,el:b,anchor:k,transition:_}=p;if(y===Fe){C(b,k);return}if(y===tr){A(p);return}const R=()=>{r(b),_&&!_.persisted&&_.afterLeave&&_.afterLeave()};if(p.shapeFlag&1&&_&&!_.persisted){const{leave:U,delayLeave:O}=_,M=()=>U(b,R);O?O(p.el,R,M):M()}else R()},C=(p,y)=>{let b;for(;p!==y;)b=f(p),r(p),p=b;r(y)},q=(p,y,b)=>{const{bum:k,scope:_,update:R,subTree:U,um:O}=p;k&&Xs(k),_.stop(),R&&(R.active=!1,Ke(U,p,y,b)),O&&Ye(O,y),Ye(()=>{p.isUnmounted=!0},y),y&&y.pendingBranch&&!y.isUnmounted&&p.asyncDep&&!p.asyncResolved&&p.suspenseId===y.pendingId&&(y.deps--,y.deps===0&&y.resolve())},V=(p,y,b,k=!1,_=!1,R=0)=>{for(let U=R;U<p.length;U++)Ke(p[U],y,b,k,_)},G=p=>p.shapeFlag&6?G(p.component.subTree):p.shapeFlag&128?p.suspense.next():f(p.anchor||p.el),ve=(p,y,b)=>{p==null?y._vnode&&Ke(y._vnode,null,null,!0):I(y._vnode||null,p,y,null,null,null,b),Bh(),zo(),y._vnode=p},Ie={p:I,um:Ke,m:wt,r:gt,mt:de,mc:F,pc:nt,pbc:j,n:G,o:t};let ce,se;return e&&([ce,se]=e(Ie)),{render:ve,hydrate:ce,createApp:Db(ve,ce)}}function cs({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function gu(t,e,n=!1){const s=t.children,r=e.children;if(z(s)&&z(r))for(let i=0;i<s.length;i++){const o=s[i];let a=r[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[i]=Un(r[i]),a.el=o.el),n||gu(o,a))}}function Pb(t){const e=t.slice(),n=[0];let s,r,i,o,a;const c=t.length;for(s=0;s<c;s++){const l=t[s];if(l!==0){if(r=n[n.length-1],t[r]<l){e[s]=r,n.push(s);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<l?i=a+1:o=a;l<t[n[i]]&&(i>0&&(e[s]=n[i-1]),n[i]=s)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const Mb=t=>t.__isTeleport,Qr=t=>t&&(t.disabled||t.disabled===""),Jh=t=>typeof SVGElement<"u"&&t instanceof SVGElement,ul=(t,e)=>{const n=t&&t.to;return Pe(n)?e?e(n):null:n},Lb={__isTeleport:!0,process(t,e,n,s,r,i,o,a,c,l){const{mc:u,pc:h,pbc:f,o:{insert:d,querySelector:m,createText:E,createComment:I}}=l,v=Qr(e.props);let{shapeFlag:g,children:w,dynamicChildren:T}=e;if(t==null){const A=e.el=E(""),L=e.anchor=E("");d(A,n,s),d(L,n,s);const N=e.target=ul(e.props,m),S=e.targetAnchor=E("");N&&(d(S,N),o=o||Jh(N));const F=(H,j)=>{g&16&&u(w,H,j,r,i,o,a,c)};v?F(n,L):N&&F(N,S)}else{e.el=t.el;const A=e.anchor=t.anchor,L=e.target=t.target,N=e.targetAnchor=t.targetAnchor,S=Qr(t.props),F=S?n:L,H=S?A:N;if(o=o||Jh(L),T?(f(t.dynamicChildren,T,F,r,i,o,a),gu(t,e,!0)):c||h(t,e,F,H,r,i,o,a,!1),v)S||bo(e,n,A,l,1);else if((e.props&&e.props.to)!==(t.props&&t.props.to)){const j=e.target=ul(e.props,m);j&&bo(e,j,null,l,0)}else S&&bo(e,L,N,l,1)}},remove(t,e,n,s,{um:r,o:{remove:i}},o){const{shapeFlag:a,children:c,anchor:l,targetAnchor:u,target:h,props:f}=t;if(h&&i(u),(o||!Qr(f))&&(i(l),a&16))for(let d=0;d<c.length;d++){const m=c[d];r(m,e,n,!0,!!m.dynamicChildren)}},move:bo,hydrate:Ub};function bo(t,e,n,{o:{insert:s},m:r},i=2){i===0&&s(t.targetAnchor,e,n);const{el:o,anchor:a,shapeFlag:c,children:l,props:u}=t,h=i===2;if(h&&s(o,e,n),(!h||Qr(u))&&c&16)for(let f=0;f<l.length;f++)r(l[f],e,n,2);h&&s(a,e,n)}function Ub(t,e,n,s,r,i,{o:{nextSibling:o,parentNode:a,querySelector:c}},l){const u=e.target=ul(e.props,c);if(u){const h=u._lpa||u.firstChild;if(e.shapeFlag&16)if(Qr(e.props))e.anchor=l(o(t),e,a(t),n,s,r,i),e.targetAnchor=h;else{e.anchor=o(t);let f=h;for(;f;)if(f=o(f),f&&f.nodeType===8&&f.data==="teleport anchor"){e.targetAnchor=f,u._lpa=e.targetAnchor&&o(e.targetAnchor);break}l(h,e,u,n,s,r,i)}}return e.anchor&&o(e.anchor)}const UN=Lb,Fe=Symbol(void 0),pi=Symbol(void 0),pt=Symbol(void 0),tr=Symbol(void 0),Yr=[];let yt=null;function Mt(t=!1){Yr.push(yt=t?null:[])}function dg(){Yr.pop(),yt=Yr[Yr.length-1]||null}let Ts=1;function Zh(t){Ts+=t}function pg(t){return t.dynamicChildren=Ts>0?yt||Qs:null,dg(),Ts>0&&yt&&yt.push(t),t}function ur(t,e,n,s,r,i){return pg(Ze(t,e,n,s,r,i,!0))}function gi(t,e,n,s,r){return pg(ue(t,e,n,s,r,!0))}function Ss(t){return t?t.__v_isVNode===!0:!1}function Yt(t,e){return t.type===e.type&&t.key===e.key}function FN(t){}const Ba="__vInternal",gg=({key:t})=>t!=null?t:null,xo=({ref:t,ref_key:e,ref_for:n})=>t!=null?Pe(t)||Me(t)||ne(t)?{i:at,r:t,k:e,f:!!n}:t:null;function Ze(t,e=null,n=null,s=0,r=null,i=t===Fe?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&gg(e),ref:e&&xo(e),scopeId:Fa,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null};return a?(mu(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=Pe(n)?8:16),Ts>0&&!o&&yt&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&yt.push(c),c}const ue=Fb;function Fb(t,e=null,n=null,s=0,r=null,i=!1){if((!t||t===tg)&&(t=pt),Ss(t)){const a=En(t,e,!0);return n&&mu(a,n),Ts>0&&!i&&yt&&(a.shapeFlag&6?yt[yt.indexOf(t)]=a:yt.push(a)),a.patchFlag|=-2,a}if(Wb(t)&&(t=t.__vccOpts),e){e=Vb(e);let{class:a,style:c}=e;a&&!Pe(a)&&(e.class=Ca(a)),Re(c)&&(Lp(c)&&!z(c)&&(c=Le({},c)),e.style=Sa(c))}const o=Pe(t)?1:Gp(t)?128:Mb(t)?64:Re(t)?4:ne(t)?2:0;return Ze(t,e,n,s,r,o,i,!0)}function Vb(t){return t?Lp(t)||Ba in t?Le({},t):t:null}function En(t,e,n=!1){const{props:s,ref:r,patchFlag:i,children:o}=t,a=e?Bb(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&gg(a),ref:e&&e.ref?n&&r?z(r)?r.concat(xo(e)):[r,xo(e)]:xo(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Fe?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&En(t.ssContent),ssFallback:t.ssFallback&&En(t.ssFallback),el:t.el,anchor:t.anchor}}function Tr(t=" ",e=0){return ue(pi,null,t,e)}function mg(t,e){const n=ue(tr,null,t);return n.staticCount=e,n}function VN(t="",e=!1){return e?(Mt(),gi(pt,null,t)):ue(pt,null,t)}function St(t){return t==null||typeof t=="boolean"?ue(pt):z(t)?ue(Fe,null,t.slice()):typeof t=="object"?Un(t):ue(pi,null,String(t))}function Un(t){return t.el===null||t.memo?t:En(t)}function mu(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(z(e))n=16;else if(typeof e=="object")if(s&65){const r=e.default;r&&(r._c&&(r._d=!1),mu(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!(Ba in e)?e._ctx=at:r===3&&at&&(at.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else ne(e)?(e={default:e,_ctx:at},n=32):(e=String(e),s&64?(n=16,e=[Tr(e)]):n=8);t.children=e,t.shapeFlag|=n}function Bb(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const r in s)if(r==="class")e.class!==s.class&&(e.class=Ca([e.class,s.class]));else if(r==="style")e.style=Sa([e.style,s.style]);else if(Pi(r)){const i=e[r],o=s[r];o&&i!==o&&!(z(i)&&i.includes(o))&&(e[r]=i?[].concat(i,o):o)}else r!==""&&(e[r]=s[r])}return e}function mt(t,e,n,s=null){Pt(t,e,7,[n,s])}const $b=hg();let jb=0;function yg(t,e,n){const s=t.type,r=(e?e.appContext:t.appContext)||$b,i={uid:jb++,vnode:t,type:s,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new wp(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ag(s,r),emitsOptions:Kp(s,r),emit:null,emitted:null,propsDefaults:Ee,inheritAttrs:s.inheritAttrs,ctx:Ee,data:Ee,props:Ee,attrs:Ee,slots:Ee,refs:Ee,setupState:Ee,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Ww.bind(null,i),t.ce&&t.ce(i),i}let $e=null;const Rn=()=>$e||at,Zn=t=>{$e=t,t.scope.on()},zn=()=>{$e&&$e.scope.off(),$e=null};function vg(t){return t.vnode.shapeFlag&4}let hr=!1;function _g(t,e=!1){hr=e;const{props:n,children:s}=t.vnode,r=vg(t);Tb(t,n,r,e),Ab(t,s);const i=r?Hb(t,e):void 0;return hr=!1,i}function Hb(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=cr(new Proxy(t.ctx,ol));const{setup:s}=n;if(s){const r=t.setupContext=s.length>1?bg(t):null;Zn(t),Ps();const i=vn(s,t,0,[t.props,r]);if(Ms(),zn(),eu(i)){if(i.then(zn,zn),e)return i.then(o=>{hl(t,o,e)}).catch(o=>{Er(o,t,0)});t.asyncDep=i}else hl(t,i,e)}else wg(t,e)}function hl(t,e,n){ne(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Re(e)&&(t.setupState=Fp(e)),wg(t,n)}let Yo,fl;function BN(t){Yo=t,fl=e=>{e.render._rc&&(e.withProxy=new Proxy(e.ctx,vb))}}const $N=()=>!Yo;function wg(t,e,n){const s=t.type;if(!t.render){if(!e&&Yo&&!s.render){const r=s.template;if(r){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=s,l=Le(Le({isCustomElement:i,delimiters:a},o),c);s.render=Yo(r,l)}}t.render=s.render||Ht,fl&&fl(t)}Zn(t),Ps(),_b(t),Ms(),zn()}function qb(t){return new Proxy(t.attrs,{get(e,n){return kt(t,"get","$attrs"),e[n]}})}function bg(t){const e=s=>{t.exposed=s||{}};let n;return{get attrs(){return n||(n=qb(t))},slots:t.slots,emit:t.emit,expose:e}}function $a(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Fp(cr(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Wo)return Wo[n](t)}}))}const Kb=/(?:^|[-_])(\w)/g,zb=t=>t.replace(Kb,e=>e.toUpperCase()).replace(/[-_]/g,"");function Xo(t,e=!0){return ne(t)?t.displayName||t.name:t.name||e&&t.__name}function Eg(t,e,n=!1){let s=Xo(e);if(!s&&e.__file){const r=e.__file.match(/([^/\\]+)\.\w+$/);r&&(s=r[1])}if(!s&&t&&t.parent){const r=i=>{for(const o in i)if(i[o]===e)return o};s=r(t.components||t.parent.type.components)||r(t.appContext.components)}return s?zb(s):n?"App":"Anonymous"}function Wb(t){return ne(t)&&"__vccOpts"in t}const it=(t,e)=>Lw(t,e,hr);function jN(){return null}function HN(){return null}function qN(t){}function KN(t,e){return null}function zN(){return Ig().slots}function WN(){return Ig().attrs}function Ig(){const t=Rn();return t.setupContext||(t.setupContext=bg(t))}function GN(t,e){const n=z(t)?t.reduce((s,r)=>(s[r]={},s),{}):t;for(const s in e){const r=n[s];r?z(r)||ne(r)?n[s]={type:r,default:e[s]}:r.default=e[s]:r===null&&(n[s]={default:e[s]})}return n}function QN(t,e){const n={};for(const s in t)e.includes(s)||Object.defineProperty(n,s,{enumerable:!0,get:()=>t[s]});return n}function YN(t){const e=Rn();let n=t();return zn(),eu(n)&&(n=n.catch(s=>{throw Zn(e),s})),[n,()=>Zn(e)]}function tn(t,e,n){const s=arguments.length;return s===2?Re(e)&&!z(e)?Ss(e)?ue(t,null,[e]):ue(t,e):ue(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&Ss(n)&&(n=[n]),ue(t,e,n))}const Gb=Symbol(""),XN=()=>{{const t=We(Gb);return t||Uw("Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."),t}};function JN(){}function ZN(t,e,n,s){const r=n[s];if(r&&Qb(r,t))return r;const i=e();return i.memo=t.slice(),n[s]=i}function Qb(t,e){const n=t.memo;if(n.length!=e.length)return!1;for(let s=0;s<n.length;s++)if(or(n[s],e[s]))return!1;return Ts>0&&yt&&yt.push(t),!0}const Yb="3.2.38",Xb={createComponentInstance:yg,setupComponent:_g,renderComponentRoot:No,setCurrentRenderingInstance:hi,isVNode:Ss,normalizeVNode:St},ex=Xb,tx=null,nx=null,Jb="http://www.w3.org/2000/svg",ds=typeof document<"u"?document:null,ef=ds&&ds.createElement("template"),Zb={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const r=e?ds.createElementNS(Jb,t):ds.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:t=>ds.createTextNode(t),createComment:t=>ds.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>ds.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},cloneNode(t){const e=t.cloneNode(!0);return"_value"in t&&(e._value=t._value),e},insertStaticContent(t,e,n,s,r,i){const o=n?n.previousSibling:e.lastChild;if(r&&(r===i||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===i||!(r=r.nextSibling)););else{ef.innerHTML=s?`<svg>${t}</svg>`:t;const a=ef.content;if(s){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function eE(t,e,n){const s=t._vtc;s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function tE(t,e,n){const s=t.style,r=Pe(n);if(n&&!r){for(const i in n)dl(s,i,n[i]);if(e&&!Pe(e))for(const i in e)n[i]==null&&dl(s,i,"")}else{const i=s.display;r?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(s.display=i)}}const tf=/\s*!important$/;function dl(t,e,n){if(z(n))n.forEach(s=>dl(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=nE(t,e);tf.test(n)?t.setProperty(Jt(s),n.replace(tf,""),"important"):t[s]=n}}const nf=["Webkit","Moz","ms"],kc={};function nE(t,e){const n=kc[e];if(n)return n;let s=Ut(e);if(s!=="filter"&&s in t)return kc[e]=s;s=Ra(s);for(let r=0;r<nf.length;r++){const i=nf[r]+s;if(i in t)return kc[e]=i}return e}const sf="http://www.w3.org/1999/xlink";function sE(t,e,n,s,r){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(sf,e.slice(6,e.length)):t.setAttributeNS(sf,e,n);else{const i=H_(e);n==null||i&&!mp(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function rE(t,e,n,s,r,i,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,r,i),t[e]=n==null?"":n;return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const c=n==null?"":n;(t.value!==c||t.tagName==="OPTION")&&(t.value=c),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=mp(n):n==null&&c==="string"?(n="",a=!0):c==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}const[Tg,iE]=(()=>{let t=Date.now,e=!1;if(typeof window<"u"){Date.now()>document.createEvent("Event").timeStamp&&(t=performance.now.bind(performance));const n=navigator.userAgent.match(/firefox\/(\d+)/i);e=!!(n&&Number(n[1])<=53)}return[t,e]})();let pl=0;const oE=Promise.resolve(),aE=()=>{pl=0},cE=()=>pl||(oE.then(aE),pl=Tg());function pn(t,e,n,s){t.addEventListener(e,n,s)}function lE(t,e,n,s){t.removeEventListener(e,n,s)}function uE(t,e,n,s,r=null){const i=t._vei||(t._vei={}),o=i[e];if(s&&o)o.value=s;else{const[a,c]=hE(e);if(s){const l=i[e]=fE(s,r);pn(t,a,l,c)}else o&&(lE(t,a,o,c),i[e]=void 0)}}const rf=/(?:Once|Passive|Capture)$/;function hE(t){let e;if(rf.test(t)){e={};let s;for(;s=t.match(rf);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Jt(t.slice(2)),e]}function fE(t,e){const n=s=>{const r=s.timeStamp||Tg();(iE||r>=n.attached-1)&&Pt(dE(s,n.value),e,5,[s])};return n.value=t,n.attached=cE(),n}function dE(t,e){if(z(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>r=>!r._stopped&&s&&s(r))}else return e}const of=/^on[a-z]/,pE=(t,e,n,s,r=!1,i,o,a,c)=>{e==="class"?eE(t,s,r):e==="style"?tE(t,n,s):Pi(e)?Jl(e)||uE(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):gE(t,e,s,r))?rE(t,e,s,i,o,a,c):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),sE(t,e,s,r))};function gE(t,e,n,s){return s?!!(e==="innerHTML"||e==="textContent"||e in t&&of.test(e)&&ne(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||of.test(e)&&Pe(n)?!1:e in t}function mE(t,e){const n=Ir(t);class s extends yu{constructor(i){super(n,i,e)}}return s.def=n,s}const sx=t=>mE(t,ME),yE=typeof HTMLElement<"u"?HTMLElement:class{};class yu extends yE{constructor(e,n={},s){super(),this._def=e,this._props=n,this._instance=null,this._connected=!1,this._resolved=!1,this._numberProps=null,this.shadowRoot&&s?s(this._createVNode(),this.shadowRoot):this.attachShadow({mode:"open"})}connectedCallback(){this._connected=!0,this._instance||this._resolveDef()}disconnectedCallback(){this._connected=!1,Li(()=>{this._connected||(vf(null,this.shadowRoot),this._instance=null)})}_resolveDef(){if(this._resolved)return;this._resolved=!0;for(let s=0;s<this.attributes.length;s++)this._setAttr(this.attributes[s].name);new MutationObserver(s=>{for(const r of s)this._setAttr(r.attributeName)}).observe(this,{attributes:!0});const e=s=>{const{props:r,styles:i}=s,o=!z(r),a=r?o?Object.keys(r):r:[];let c;if(o)for(const l in this._props){const u=r[l];(u===Number||u&&u.type===Number)&&(this._props[l]=Xn(this._props[l]),(c||(c=Object.create(null)))[l]=!0)}this._numberProps=c;for(const l of Object.keys(this))l[0]!=="_"&&this._setProp(l,this[l],!0,!1);for(const l of a.map(Ut))Object.defineProperty(this,l,{get(){return this._getProp(l)},set(u){this._setProp(l,u)}});this._applyStyles(i),this._update()},n=this._def.__asyncLoader;n?n().then(e):e(this._def)}_setAttr(e){let n=this.getAttribute(e);this._numberProps&&this._numberProps[e]&&(n=Xn(n)),this._setProp(Ut(e),n,!1)}_getProp(e){return this._props[e]}_setProp(e,n,s=!0,r=!0){n!==this._props[e]&&(this._props[e]=n,r&&this._instance&&this._update(),s&&(n===!0?this.setAttribute(Jt(e),""):typeof n=="string"||typeof n=="number"?this.setAttribute(Jt(e),n+""):n||this.removeAttribute(Jt(e))))}_update(){vf(this._createVNode(),this.shadowRoot)}_createVNode(){const e=ue(this._def,Le({},this._props));return this._instance||(e.ce=n=>{this._instance=n,n.isCE=!0,n.emit=(r,...i)=>{this.dispatchEvent(new CustomEvent(r,{detail:i}))};let s=this;for(;s=s&&(s.parentNode||s.host);)if(s instanceof yu){n.parent=s._instance;break}}),e}_applyStyles(e){e&&e.forEach(n=>{const s=document.createElement("style");s.textContent=n,this.shadowRoot.appendChild(s)})}}function rx(t="$style"){{const e=Rn();if(!e)return Ee;const n=e.type.__cssModules;if(!n)return Ee;const s=n[t];return s||Ee}}function ix(t){const e=Rn();if(!e)return;const n=()=>gl(e.subTree,t(e.proxy));rb(n),Vi(()=>{const s=new MutationObserver(n);s.observe(e.subTree.el.parentNode,{childList:!0}),Bi(()=>s.disconnect())})}function gl(t,e){if(t.shapeFlag&128){const n=t.suspense;t=n.activeBranch,n.pendingBranch&&!n.isHydrating&&n.effects.push(()=>{gl(n.activeBranch,e)})}for(;t.component;)t=t.component.subTree;if(t.shapeFlag&1&&t.el)af(t.el,e);else if(t.type===Fe)t.children.forEach(n=>gl(n,e));else if(t.type===tr){let{el:n,anchor:s}=t;for(;n&&(af(n,e),n!==s);)n=n.nextSibling}}function af(t,e){if(t.nodeType===1){const n=t.style;for(const s in e)n.setProperty(`--${s}`,e[s])}}const Nn="transition",Mr="animation",Sg=(t,{slots:e})=>tn(Jp,Ag(t),e);Sg.displayName="Transition";const Cg={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},vE=Sg.props=Le({},Jp.props,Cg),ls=(t,e=[])=>{z(t)?t.forEach(n=>n(...e)):t&&t(...e)},cf=t=>t?z(t)?t.some(e=>e.length>1):t.length>1:!1;function Ag(t){const e={};for(const B in t)B in Cg||(e[B]=t[B]);if(t.css===!1)return e;const{name:n="v",type:s,duration:r,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:c=i,appearActiveClass:l=o,appearToClass:u=a,leaveFromClass:h=`${n}-leave-from`,leaveActiveClass:f=`${n}-leave-active`,leaveToClass:d=`${n}-leave-to`}=t,m=_E(r),E=m&&m[0],I=m&&m[1],{onBeforeEnter:v,onEnter:g,onEnterCancelled:w,onLeave:T,onLeaveCancelled:A,onBeforeAppear:L=v,onAppear:N=g,onAppearCancelled:S=w}=e,F=(B,ee,$)=>{Mn(B,ee?u:a),Mn(B,ee?l:o),$&&$()},H=(B,ee)=>{B._isLeaving=!1,Mn(B,h),Mn(B,d),Mn(B,f),ee&&ee()},j=B=>(ee,$)=>{const de=B?N:g,pe=()=>F(ee,B,$);ls(de,[ee,pe]),lf(()=>{Mn(ee,B?c:i),hn(ee,B?u:a),cf(de)||uf(ee,s,E,pe)})};return Le(e,{onBeforeEnter(B){ls(v,[B]),hn(B,i),hn(B,o)},onBeforeAppear(B){ls(L,[B]),hn(B,c),hn(B,l)},onEnter:j(!1),onAppear:j(!0),onLeave(B,ee){B._isLeaving=!0;const $=()=>H(B,ee);hn(B,h),Rg(),hn(B,f),lf(()=>{!B._isLeaving||(Mn(B,h),hn(B,d),cf(T)||uf(B,s,I,$))}),ls(T,[B,$])},onEnterCancelled(B){F(B,!1),ls(w,[B])},onAppearCancelled(B){F(B,!0),ls(S,[B])},onLeaveCancelled(B){H(B),ls(A,[B])}})}function _E(t){if(t==null)return null;if(Re(t))return[Rc(t.enter),Rc(t.leave)];{const e=Rc(t);return[e,e]}}function Rc(t){return Xn(t)}function hn(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t._vtc||(t._vtc=new Set)).add(e)}function Mn(t,e){e.split(/\s+/).forEach(s=>s&&t.classList.remove(s));const{_vtc:n}=t;n&&(n.delete(e),n.size||(t._vtc=void 0))}function lf(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let wE=0;function uf(t,e,n,s){const r=t._endId=++wE,i=()=>{r===t._endId&&s()};if(n)return setTimeout(i,n);const{type:o,timeout:a,propCount:c}=kg(t,e);if(!o)return s();const l=o+"end";let u=0;const h=()=>{t.removeEventListener(l,f),i()},f=d=>{d.target===t&&++u>=c&&h()};setTimeout(()=>{u<c&&h()},a+1),t.addEventListener(l,f)}function kg(t,e){const n=window.getComputedStyle(t),s=m=>(n[m]||"").split(", "),r=s(Nn+"Delay"),i=s(Nn+"Duration"),o=hf(r,i),a=s(Mr+"Delay"),c=s(Mr+"Duration"),l=hf(a,c);let u=null,h=0,f=0;e===Nn?o>0&&(u=Nn,h=o,f=i.length):e===Mr?l>0&&(u=Mr,h=l,f=c.length):(h=Math.max(o,l),u=h>0?o>l?Nn:Mr:null,f=u?u===Nn?i.length:c.length:0);const d=u===Nn&&/\b(transform|all)(,|$)/.test(n[Nn+"Property"]);return{type:u,timeout:h,propCount:f,hasTransform:d}}function hf(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,s)=>ff(n)+ff(t[s])))}function ff(t){return Number(t.slice(0,-1).replace(",","."))*1e3}function Rg(){return document.body.offsetHeight}const Dg=new WeakMap,Og=new WeakMap,bE={name:"TransitionGroup",props:Le({},vE,{tag:String,moveClass:String}),setup(t,{slots:e}){const n=Rn(),s=Xp();let r,i;return uu(()=>{if(!r.length)return;const o=t.moveClass||`${t.name||"v"}-move`;if(!SE(r[0].el,n.vnode.el,o))return;r.forEach(EE),r.forEach(IE);const a=r.filter(TE);Rg(),a.forEach(c=>{const l=c.el,u=l.style;hn(l,o),u.transform=u.webkitTransform=u.transitionDuration="";const h=l._moveCb=f=>{f&&f.target!==l||(!f||/transform$/.test(f.propertyName))&&(l.removeEventListener("transitionend",h),l._moveCb=null,Mn(l,o))};l.addEventListener("transitionend",h)})}),()=>{const o=fe(t),a=Ag(o);let c=o.tag||Fe;r=i,i=e.default?lu(e.default()):[];for(let l=0;l<i.length;l++){const u=i[l];u.key!=null&&lr(u,di(u,a,s,n))}if(r)for(let l=0;l<r.length;l++){const u=r[l];lr(u,di(u,a,s,n)),Dg.set(u,u.el.getBoundingClientRect())}return ue(c,null,i)}}},ox=bE;function EE(t){const e=t.el;e._moveCb&&e._moveCb(),e._enterCb&&e._enterCb()}function IE(t){Og.set(t,t.el.getBoundingClientRect())}function TE(t){const e=Dg.get(t),n=Og.get(t),s=e.left-n.left,r=e.top-n.top;if(s||r){const i=t.el.style;return i.transform=i.webkitTransform=`translate(${s}px,${r}px)`,i.transitionDuration="0s",t}}function SE(t,e,n){const s=t.cloneNode();t._vtc&&t._vtc.forEach(o=>{o.split(/\s+/).forEach(a=>a&&s.classList.remove(a))}),n.split(/\s+/).forEach(o=>o&&s.classList.add(o)),s.style.display="none";const r=e.nodeType===1?e:e.parentNode;r.appendChild(s);const{hasTransform:i}=kg(s);return r.removeChild(s),i}const es=t=>{const e=t.props["onUpdate:modelValue"]||!1;return z(e)?n=>Xs(e,n):e};function CE(t){t.target.composing=!0}function df(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const ml={created(t,{modifiers:{lazy:e,trim:n,number:s}},r){t._assign=es(r);const i=s||r.props&&r.props.type==="number";pn(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=Xn(a)),t._assign(a)}),n&&pn(t,"change",()=>{t.value=t.value.trim()}),e||(pn(t,"compositionstart",CE),pn(t,"compositionend",df),pn(t,"change",df))},mounted(t,{value:e}){t.value=e==null?"":e},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:s,number:r}},i){if(t._assign=es(i),t.composing||document.activeElement===t&&t.type!=="range"&&(n||s&&t.value.trim()===e||(r||t.type==="number")&&Xn(t.value)===e))return;const o=e==null?"":e;t.value!==o&&(t.value=o)}},Ng={deep:!0,created(t,e,n){t._assign=es(n),pn(t,"change",()=>{const s=t._modelValue,r=fr(t),i=t.checked,o=t._assign;if(z(s)){const a=Aa(s,r),c=a!==-1;if(i&&!c)o(s.concat(r));else if(!i&&c){const l=[...s];l.splice(a,1),o(l)}}else if(xs(s)){const a=new Set(s);i?a.add(r):a.delete(r),o(a)}else o(Pg(t,i))})},mounted:pf,beforeUpdate(t,e,n){t._assign=es(n),pf(t,e,n)}};function pf(t,{value:e,oldValue:n},s){t._modelValue=e,z(e)?t.checked=Aa(e,s.props.value)>-1:xs(e)?t.checked=e.has(s.props.value):e!==n&&(t.checked=Yn(e,Pg(t,!0)))}const xg={created(t,{value:e},n){t.checked=Yn(e,n.props.value),t._assign=es(n),pn(t,"change",()=>{t._assign(fr(t))})},beforeUpdate(t,{value:e,oldValue:n},s){t._assign=es(s),e!==n&&(t.checked=Yn(e,s.props.value))}},AE={deep:!0,created(t,{value:e,modifiers:{number:n}},s){const r=xs(e);pn(t,"change",()=>{const i=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?Xn(fr(o)):fr(o));t._assign(t.multiple?r?new Set(i):i:i[0])}),t._assign=es(s)},mounted(t,{value:e}){gf(t,e)},beforeUpdate(t,e,n){t._assign=es(n)},updated(t,{value:e}){gf(t,e)}};function gf(t,e){const n=t.multiple;if(!(n&&!z(e)&&!xs(e))){for(let s=0,r=t.options.length;s<r;s++){const i=t.options[s],o=fr(i);if(n)z(e)?i.selected=Aa(e,o)>-1:i.selected=e.has(o);else if(Yn(fr(i),e)){t.selectedIndex!==s&&(t.selectedIndex=s);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function fr(t){return"_value"in t?t._value:t.value}function Pg(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const kE={created(t,e,n){Eo(t,e,n,null,"created")},mounted(t,e,n){Eo(t,e,n,null,"mounted")},beforeUpdate(t,e,n,s){Eo(t,e,n,s,"beforeUpdate")},updated(t,e,n,s){Eo(t,e,n,s,"updated")}};function Mg(t,e){switch(t){case"SELECT":return AE;case"TEXTAREA":return ml;default:switch(e){case"checkbox":return Ng;case"radio":return xg;default:return ml}}}function Eo(t,e,n,s,r){const o=Mg(t.tagName,n.props&&n.props.type)[r];o&&o(t,e,n,s)}function RE(){ml.getSSRProps=({value:t})=>({value:t}),xg.getSSRProps=({value:t},e)=>{if(e.props&&Yn(e.props.value,t))return{checked:!0}},Ng.getSSRProps=({value:t},e)=>{if(z(t)){if(e.props&&Aa(t,e.props.value)>-1)return{checked:!0}}else if(xs(t)){if(e.props&&t.has(e.props.value))return{checked:!0}}else if(t)return{checked:!0}},kE.getSSRProps=(t,e)=>{if(typeof e.type!="string")return;const n=Mg(e.type.toUpperCase(),e.props&&e.props.type);if(n.getSSRProps)return n.getSSRProps(t,e)}}const DE=["ctrl","shift","alt","meta"],OE={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>DE.some(n=>t[`${n}Key`]&&!e.includes(n))},mf=(t,e)=>(n,...s)=>{for(let r=0;r<e.length;r++){const i=OE[e[r]];if(i&&i(n,e))return}return t(n,...s)},NE={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},ax=(t,e)=>n=>{if(!("key"in n))return;const s=Jt(n.key);if(e.some(r=>r===s||NE[r]===s))return t(n)},xE={beforeMount(t,{value:e},{transition:n}){t._vod=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):Lr(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:s}){!e!=!n&&(s?e?(s.beforeEnter(t),Lr(t,!0),s.enter(t)):s.leave(t,()=>{Lr(t,!1)}):Lr(t,e))},beforeUnmount(t,{value:e}){Lr(t,e)}};function Lr(t,e){t.style.display=e?t._vod:"none"}function PE(){xE.getSSRProps=({value:t})=>{if(!t)return{style:{display:"none"}}}}const Lg=Le({patchProp:pE},Zb);let Xr,yf=!1;function Ug(){return Xr||(Xr=Nb(Lg))}function Fg(){return Xr=yf?Xr:xb(Lg),yf=!0,Xr}const vf=(...t)=>{Ug().render(...t)},ME=(...t)=>{Fg().hydrate(...t)},LE=(...t)=>{const e=Ug().createApp(...t),{mount:n}=e;return e.mount=s=>{const r=Vg(s);if(!r)return;const i=e._component;!ne(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.innerHTML="";const o=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e},cx=(...t)=>{const e=Fg().createApp(...t),{mount:n}=e;return e.mount=s=>{const r=Vg(s);if(r)return n(r,!0,r instanceof SVGElement)},e};function Vg(t){return Pe(t)?document.querySelector(t):t}let _f=!1;const lx=()=>{_f||(_f=!0,RE(),PE())};var UE=!1;/*!
  * pinia v2.0.21
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */let Bg;const ja=t=>Bg=t,$g=Symbol();function yl(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var Jr;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Jr||(Jr={}));function FE(){const t=bp(!0),e=t.run(()=>ke({}));let n=[],s=[];const r=cr({install(i){ja(r),r._a=i,i.provide($g,r),i.config.globalProperties.$pinia=r,s.forEach(o=>n.push(o)),s=[]},use(i){return!this._a&&!UE?s.push(i):n.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return r}const jg=()=>{};function wf(t,e,n,s=jg){t.push(e);const r=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),s())};return!n&&Rn()&&Bi(r),r}function $s(t,...e){t.slice().forEach(n=>{n(...e)})}function vl(t,e){for(const n in e){if(!e.hasOwnProperty(n))continue;const s=e[n],r=t[n];yl(r)&&yl(s)&&t.hasOwnProperty(n)&&!Me(s)&&!qn(s)?t[n]=vl(r,s):t[n]=s}return t}const VE=Symbol();function BE(t){return!yl(t)||!t.hasOwnProperty(VE)}const{assign:dn}=Object;function $E(t){return!!(Me(t)&&t.effect)}function jE(t,e,n,s){const{state:r,actions:i,getters:o}=e,a=n.state.value[t];let c;function l(){a||(n.state.value[t]=r?r():{});const u=Nw(n.state.value[t]);return dn(u,i,Object.keys(o||{}).reduce((h,f)=>(h[f]=cr(it(()=>{ja(n);const d=n._s.get(t);return o[f].call(d,d)})),h),{}))}return c=Hg(t,l,e,n,s,!0),c.$reset=function(){const h=r?r():{};this.$patch(f=>{dn(f,h)})},c}function Hg(t,e,n={},s,r,i){let o;const a=dn({actions:{}},n),c={deep:!0};let l,u,h=cr([]),f=cr([]),d;const m=s.state.value[t];!i&&!m&&(s.state.value[t]={}),ke({});let E;function I(N){let S;l=u=!1,typeof N=="function"?(N(s.state.value[t]),S={type:Jr.patchFunction,storeId:t,events:d}):(vl(s.state.value[t],N),S={type:Jr.patchObject,payload:N,storeId:t,events:d});const F=E=Symbol();Li().then(()=>{E===F&&(l=!0)}),u=!0,$s(h,S,s.state.value[t])}const v=jg;function g(){o.stop(),h=[],f=[],s._s.delete(t)}function w(N,S){return function(){ja(s);const F=Array.from(arguments),H=[],j=[];function B(de){H.push(de)}function ee(de){j.push(de)}$s(f,{args:F,name:N,store:A,after:B,onError:ee});let $;try{$=S.apply(this&&this.$id===t?this:A,F)}catch(de){throw $s(j,de),de}return $ instanceof Promise?$.then(de=>($s(H,de),de)).catch(de=>($s(j,de),Promise.reject(de))):($s(H,$),$)}}const T={_p:s,$id:t,$onAction:wf.bind(null,f),$patch:I,$reset:v,$subscribe(N,S={}){const F=wf(h,N,S.detached,()=>H()),H=o.run(()=>Kn(()=>s.state.value[t],j=>{(S.flush==="sync"?u:l)&&N({storeId:t,type:Jr.direct,events:d},j)},dn({},c,S)));return F},$dispose:g},A=Zt(dn({},T));s._s.set(t,A);const L=s._e.run(()=>(o=bp(),o.run(()=>e())));for(const N in L){const S=L[N];if(Me(S)&&!$E(S)||qn(S))i||(m&&BE(S)&&(Me(S)?S.value=m[N]:vl(S,m[N])),s.state.value[t][N]=S);else if(typeof S=="function"){const F=w(N,S);L[N]=F,a.actions[N]=S}}return dn(A,L),dn(fe(A),L),Object.defineProperty(A,"$state",{get:()=>s.state.value[t],set:N=>{I(S=>{dn(S,N)})}}),s._p.forEach(N=>{dn(A,o.run(()=>N({store:A,app:s._a,pinia:s,options:a})))}),m&&i&&n.hydrate&&n.hydrate(A.$state,m),l=!0,u=!0,A}function HE(t,e,n){let s,r;const i=typeof e=="function";typeof t=="string"?(s=t,r=i?n:e):(r=t,s=t.id);function o(a,c){const l=Rn();return a=a||l&&We($g),a&&ja(a),a=Bg,a._s.has(s)||(i?Hg(s,e,r,a):jE(s,r,a)),a._s.get(s)}return o.$id=s,o}let qE="Store";function KE(...t){return t.reduce((e,n)=>(e[n.$id+qE]=function(){return n(this.$pinia)},e),{})}/*!
  * vue-router v4.1.5
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const Ks=typeof window<"u";function zE(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const Te=Object.assign;function Dc(t,e){const n={};for(const s in e){const r=e[s];n[s]=qt(r)?r.map(t):t(r)}return n}const Zr=()=>{},qt=Array.isArray,WE=/\/$/,GE=t=>t.replace(WE,"");function Oc(t,e,n="/"){let s,r={},i="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(s=e.slice(0,c),i=e.slice(c+1,a>-1?a:e.length),r=t(i)),a>-1&&(s=s||e.slice(0,a),o=e.slice(a,e.length)),s=JE(s!=null?s:e,n),{fullPath:s+(i&&"?")+i+o,path:s,query:r,hash:o}}function QE(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function bf(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function YE(t,e,n){const s=e.matched.length-1,r=n.matched.length-1;return s>-1&&s===r&&dr(e.matched[s],n.matched[r])&&qg(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function dr(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function qg(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!XE(t[n],e[n]))return!1;return!0}function XE(t,e){return qt(t)?Ef(t,e):qt(e)?Ef(e,t):t===e}function Ef(t,e){return qt(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function JE(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/");let r=n.length-1,i,o;for(i=0;i<s.length;i++)if(o=s[i],o!==".")if(o==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+s.slice(i-(i===s.length?1:0)).join("/")}var mi;(function(t){t.pop="pop",t.push="push"})(mi||(mi={}));var ei;(function(t){t.back="back",t.forward="forward",t.unknown=""})(ei||(ei={}));function ZE(t){if(!t)if(Ks){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),GE(t)}const e0=/^[^#]+#/;function t0(t,e){return t.replace(e0,"#")+e}function n0(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const Ha=()=>({left:window.pageXOffset,top:window.pageYOffset});function s0(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;e=n0(r,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function If(t,e){return(history.state?history.state.position-e:-1)+t}const _l=new Map;function r0(t,e){_l.set(t,e)}function i0(t){const e=_l.get(t);return _l.delete(t),e}let o0=()=>location.protocol+"//"+location.host;function Kg(t,e){const{pathname:n,search:s,hash:r}=e,i=t.indexOf("#");if(i>-1){let a=r.includes(t.slice(i))?t.slice(i).length:1,c=r.slice(a);return c[0]!=="/"&&(c="/"+c),bf(c,"")}return bf(n,t)+s+r}function a0(t,e,n,s){let r=[],i=[],o=null;const a=({state:f})=>{const d=Kg(t,location),m=n.value,E=e.value;let I=0;if(f){if(n.value=d,e.value=f,o&&o===m){o=null;return}I=E?f.position-E.position:0}else s(d);r.forEach(v=>{v(n.value,m,{delta:I,type:mi.pop,direction:I?I>0?ei.forward:ei.back:ei.unknown})})};function c(){o=n.value}function l(f){r.push(f);const d=()=>{const m=r.indexOf(f);m>-1&&r.splice(m,1)};return i.push(d),d}function u(){const{history:f}=window;!f.state||f.replaceState(Te({},f.state,{scroll:Ha()}),"")}function h(){for(const f of i)f();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:c,listen:l,destroy:h}}function Tf(t,e,n,s=!1,r=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:r?Ha():null}}function c0(t){const{history:e,location:n}=window,s={value:Kg(t,n)},r={value:e.state};r.value||i(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,l,u){const h=t.indexOf("#"),f=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+c:o0()+t+c;try{e[u?"replaceState":"pushState"](l,"",f),r.value=l}catch(d){console.error(d),n[u?"replace":"assign"](f)}}function o(c,l){const u=Te({},e.state,Tf(r.value.back,c,r.value.forward,!0),l,{position:r.value.position});i(c,u,!0),s.value=c}function a(c,l){const u=Te({},r.value,e.state,{forward:c,scroll:Ha()});i(u.current,u,!0);const h=Te({},Tf(s.value,c,null),{position:u.position+1},l);i(c,h,!1),s.value=c}return{location:s,state:r,push:a,replace:o}}function l0(t){t=ZE(t);const e=c0(t),n=a0(t,e.state,e.location,e.replace);function s(i,o=!0){o||n.pauseListeners(),history.go(i)}const r=Te({location:"",base:t,go:s,createHref:t0.bind(null,t)},e,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function u0(t){return typeof t=="string"||t&&typeof t=="object"}function zg(t){return typeof t=="string"||typeof t=="symbol"}const xn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Wg=Symbol("");var Sf;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Sf||(Sf={}));function pr(t,e){return Te(new Error,{type:t,[Wg]:!0},e)}function un(t,e){return t instanceof Error&&Wg in t&&(e==null||!!(t.type&e))}const Cf="[^/]+?",h0={sensitive:!1,strict:!1,start:!0,end:!0},f0=/[.+*?^${}()[\]/\\]/g;function d0(t,e){const n=Te({},h0,e),s=[];let r=n.start?"^":"";const i=[];for(const l of t){const u=l.length?[]:[90];n.strict&&!l.length&&(r+="/");for(let h=0;h<l.length;h++){const f=l[h];let d=40+(n.sensitive?.25:0);if(f.type===0)h||(r+="/"),r+=f.value.replace(f0,"\\$&"),d+=40;else if(f.type===1){const{value:m,repeatable:E,optional:I,regexp:v}=f;i.push({name:m,repeatable:E,optional:I});const g=v||Cf;if(g!==Cf){d+=10;try{new RegExp(`(${g})`)}catch(T){throw new Error(`Invalid custom RegExp for param "${m}" (${g}): `+T.message)}}let w=E?`((?:${g})(?:/(?:${g}))*)`:`(${g})`;h||(w=I&&l.length<2?`(?:/${w})`:"/"+w),I&&(w+="?"),r+=w,d+=20,I&&(d+=-8),E&&(d+=-20),g===".*"&&(d+=-50)}u.push(d)}s.push(u)}if(n.strict&&n.end){const l=s.length-1;s[l][s[l].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&(r+="(?:/|$)");const o=new RegExp(r,n.sensitive?"":"i");function a(l){const u=l.match(o),h={};if(!u)return null;for(let f=1;f<u.length;f++){const d=u[f]||"",m=i[f-1];h[m.name]=d&&m.repeatable?d.split("/"):d}return h}function c(l){let u="",h=!1;for(const f of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const d of f)if(d.type===0)u+=d.value;else if(d.type===1){const{value:m,repeatable:E,optional:I}=d,v=m in l?l[m]:"";if(qt(v)&&!E)throw new Error(`Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`);const g=qt(v)?v.join("/"):v;if(!g)if(I)f.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${m}"`);u+=g}}return u||"/"}return{re:o,score:s,keys:i,parse:a,stringify:c}}function p0(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function g0(t,e){let n=0;const s=t.score,r=e.score;for(;n<s.length&&n<r.length;){const i=p0(s[n],r[n]);if(i)return i;n++}if(Math.abs(r.length-s.length)===1){if(Af(s))return 1;if(Af(r))return-1}return r.length-s.length}function Af(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const m0={type:0,value:""},y0=/[a-zA-Z0-9_]/;function v0(t){if(!t)return[[]];if(t==="/")return[[m0]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(d){throw new Error(`ERR (${n})/"${l}": ${d}`)}let n=0,s=n;const r=[];let i;function o(){i&&r.push(i),i=[]}let a=0,c,l="",u="";function h(){!l||(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function f(){l+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:c==="/"?(l&&h(),o()):c===":"?(h(),n=1):f();break;case 4:f(),n=s;break;case 1:c==="("?n=2:y0.test(c)?f():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),h(),o(),r}function _0(t,e,n){const s=d0(v0(t.path),n),r=Te(s,{record:t,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function w0(t,e){const n=[],s=new Map;e=Df({strict:!1,end:!0,sensitive:!1},e);function r(u){return s.get(u)}function i(u,h,f){const d=!f,m=b0(u);m.aliasOf=f&&f.record;const E=Df(e,u),I=[m];if("alias"in u){const w=typeof u.alias=="string"?[u.alias]:u.alias;for(const T of w)I.push(Te({},m,{components:f?f.record.components:m.components,path:T,aliasOf:f?f.record:m}))}let v,g;for(const w of I){const{path:T}=w;if(h&&T[0]!=="/"){const A=h.record.path,L=A[A.length-1]==="/"?"":"/";w.path=h.record.path+(T&&L+T)}if(v=_0(w,h,E),f?f.alias.push(v):(g=g||v,g!==v&&g.alias.push(v),d&&u.name&&!Rf(v)&&o(u.name)),m.children){const A=m.children;for(let L=0;L<A.length;L++)i(A[L],v,f&&f.children[L])}f=f||v,c(v)}return g?()=>{o(g)}:Zr}function o(u){if(zg(u)){const h=s.get(u);h&&(s.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&s.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function c(u){let h=0;for(;h<n.length&&g0(u,n[h])>=0&&(u.record.path!==n[h].record.path||!Gg(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!Rf(u)&&s.set(u.record.name,u)}function l(u,h){let f,d={},m,E;if("name"in u&&u.name){if(f=s.get(u.name),!f)throw pr(1,{location:u});E=f.record.name,d=Te(kf(h.params,f.keys.filter(g=>!g.optional).map(g=>g.name)),u.params&&kf(u.params,f.keys.map(g=>g.name))),m=f.stringify(d)}else if("path"in u)m=u.path,f=n.find(g=>g.re.test(m)),f&&(d=f.parse(m),E=f.record.name);else{if(f=h.name?s.get(h.name):n.find(g=>g.re.test(h.path)),!f)throw pr(1,{location:u,currentLocation:h});E=f.record.name,d=Te({},h.params,u.params),m=f.stringify(d)}const I=[];let v=f;for(;v;)I.unshift(v.record),v=v.parent;return{name:E,path:m,params:d,matched:I,meta:I0(I)}}return t.forEach(u=>i(u)),{addRoute:i,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:r}}function kf(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function b0(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:E0(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function E0(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="boolean"?n:n[s];return e}function Rf(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function I0(t){return t.reduce((e,n)=>Te(e,n.meta),{})}function Df(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function Gg(t,e){return e.children.some(n=>n===t||Gg(t,n))}const Qg=/#/g,T0=/&/g,S0=/\//g,C0=/=/g,A0=/\?/g,Yg=/\+/g,k0=/%5B/g,R0=/%5D/g,Xg=/%5E/g,D0=/%60/g,Jg=/%7B/g,O0=/%7C/g,Zg=/%7D/g,N0=/%20/g;function vu(t){return encodeURI(""+t).replace(O0,"|").replace(k0,"[").replace(R0,"]")}function x0(t){return vu(t).replace(Jg,"{").replace(Zg,"}").replace(Xg,"^")}function wl(t){return vu(t).replace(Yg,"%2B").replace(N0,"+").replace(Qg,"%23").replace(T0,"%26").replace(D0,"`").replace(Jg,"{").replace(Zg,"}").replace(Xg,"^")}function P0(t){return wl(t).replace(C0,"%3D")}function M0(t){return vu(t).replace(Qg,"%23").replace(A0,"%3F")}function L0(t){return t==null?"":M0(t).replace(S0,"%2F")}function Jo(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function U0(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<s.length;++r){const i=s[r].replace(Yg," "),o=i.indexOf("="),a=Jo(o<0?i:i.slice(0,o)),c=o<0?null:Jo(i.slice(o+1));if(a in e){let l=e[a];qt(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function Of(t){let e="";for(let n in t){const s=t[n];if(n=P0(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(qt(s)?s.map(i=>i&&wl(i)):[s&&wl(s)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function F0(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=qt(s)?s.map(r=>r==null?null:""+r):s==null?s:""+s)}return e}const V0=Symbol(""),Nf=Symbol(""),_u=Symbol(""),em=Symbol(""),bl=Symbol("");function Ur(){let t=[];function e(s){return t.push(s),()=>{const r=t.indexOf(s);r>-1&&t.splice(r,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function Fn(t,e,n,s,r){const i=s&&(s.enterCallbacks[r]=s.enterCallbacks[r]||[]);return()=>new Promise((o,a)=>{const c=h=>{h===!1?a(pr(4,{from:n,to:e})):h instanceof Error?a(h):u0(h)?a(pr(2,{from:e,to:h})):(i&&s.enterCallbacks[r]===i&&typeof h=="function"&&i.push(h),o())},l=t.call(s&&s.instances[r],e,n,c);let u=Promise.resolve(l);t.length<3&&(u=u.then(c)),u.catch(h=>a(h))})}function Nc(t,e,n,s){const r=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(B0(a)){const l=(a.__vccOpts||a)[e];l&&r.push(Fn(l,n,s,i,o))}else{let c=a();r.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const u=zE(l)?l.default:l;i.components[o]=u;const f=(u.__vccOpts||u)[e];return f&&Fn(f,n,s,i,o)()}))}}return r}function B0(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function xf(t){const e=We(_u),n=We(em),s=it(()=>e.resolve(Js(t.to))),r=it(()=>{const{matched:c}=s.value,{length:l}=c,u=c[l-1],h=n.matched;if(!u||!h.length)return-1;const f=h.findIndex(dr.bind(null,u));if(f>-1)return f;const d=Pf(c[l-2]);return l>1&&Pf(u)===d&&h[h.length-1].path!==d?h.findIndex(dr.bind(null,c[l-2])):f}),i=it(()=>r.value>-1&&H0(n.params,s.value.params)),o=it(()=>r.value>-1&&r.value===n.matched.length-1&&qg(n.params,s.value.params));function a(c={}){return j0(c)?e[Js(t.replace)?"replace":"push"](Js(t.to)).catch(Zr):Promise.resolve()}return{route:s,href:it(()=>s.value.href),isActive:i,isExactActive:o,navigate:a}}const $0=Ir({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:xf,setup(t,{slots:e}){const n=Zt(xf(t)),{options:s}=We(_u),r=it(()=>({[Mf(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[Mf(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:tn("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},i)}}}),tm=$0;function j0(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function H0(t,e){for(const n in e){const s=e[n],r=t[n];if(typeof s=="string"){if(s!==r)return!1}else if(!qt(r)||r.length!==s.length||s.some((i,o)=>i!==r[o]))return!1}return!0}function Pf(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Mf=(t,e,n)=>t!=null?t:e!=null?e:n,q0=Ir({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=We(bl),r=it(()=>t.route||s.value),i=We(Nf,0),o=it(()=>{let l=Js(i);const{matched:u}=r.value;let h;for(;(h=u[l])&&!h.components;)l++;return l}),a=it(()=>r.value.matched[o.value]);Nt(Nf,it(()=>o.value+1)),Nt(V0,a),Nt(bl,r);const c=ke();return Kn(()=>[c.value,a.value,t.name],([l,u,h],[f,d,m])=>{u&&(u.instances[h]=l,d&&d!==u&&l&&l===f&&(u.leaveGuards.size||(u.leaveGuards=d.leaveGuards),u.updateGuards.size||(u.updateGuards=d.updateGuards))),l&&u&&(!d||!dr(u,d)||!f)&&(u.enterCallbacks[h]||[]).forEach(E=>E(l))},{flush:"post"}),()=>{const l=r.value,u=t.name,h=a.value,f=h&&h.components[u];if(!f)return Lf(n.default,{Component:f,route:l});const d=h.props[u],m=d?d===!0?l.params:typeof d=="function"?d(l):d:null,I=tn(f,Te({},m,e,{onVnodeUnmounted:v=>{v.component.isUnmounted&&(h.instances[u]=null)},ref:c}));return Lf(n.default,{Component:I,route:l})||I}}});function Lf(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const nm=q0;function K0(t){const e=w0(t.routes,t),n=t.parseQuery||U0,s=t.stringifyQuery||Of,r=t.history,i=Ur(),o=Ur(),a=Ur(),c=kw(xn);let l=xn;Ks&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Dc.bind(null,C=>""+C),h=Dc.bind(null,L0),f=Dc.bind(null,Jo);function d(C,q){let V,G;return zg(C)?(V=e.getRecordMatcher(C),G=q):G=C,e.addRoute(G,V)}function m(C){const q=e.getRecordMatcher(C);q&&e.removeRoute(q)}function E(){return e.getRoutes().map(C=>C.record)}function I(C){return!!e.getRecordMatcher(C)}function v(C,q){if(q=Te({},q||c.value),typeof C=="string"){const se=Oc(n,C,q.path),p=e.resolve({path:se.path},q),y=r.createHref(se.fullPath);return Te(se,p,{params:f(p.params),hash:Jo(se.hash),redirectedFrom:void 0,href:y})}let V;if("path"in C)V=Te({},C,{path:Oc(n,C.path,q.path).path});else{const se=Te({},C.params);for(const p in se)se[p]==null&&delete se[p];V=Te({},C,{params:h(C.params)}),q.params=h(q.params)}const G=e.resolve(V,q),ve=C.hash||"";G.params=u(f(G.params));const Ie=QE(s,Te({},C,{hash:x0(ve),path:G.path})),ce=r.createHref(Ie);return Te({fullPath:Ie,hash:ve,query:s===Of?F0(C.query):C.query||{}},G,{redirectedFrom:void 0,href:ce})}function g(C){return typeof C=="string"?Oc(n,C,c.value.path):Te({},C)}function w(C,q){if(l!==C)return pr(8,{from:q,to:C})}function T(C){return N(C)}function A(C){return T(Te(g(C),{replace:!0}))}function L(C){const q=C.matched[C.matched.length-1];if(q&&q.redirect){const{redirect:V}=q;let G=typeof V=="function"?V(C):V;return typeof G=="string"&&(G=G.includes("?")||G.includes("#")?G=g(G):{path:G},G.params={}),Te({query:C.query,hash:C.hash,params:"path"in G?{}:C.params},G)}}function N(C,q){const V=l=v(C),G=c.value,ve=C.state,Ie=C.force,ce=C.replace===!0,se=L(V);if(se)return N(Te(g(se),{state:typeof se=="object"?Te({},ve,se.state):ve,force:Ie,replace:ce}),q||V);const p=V;p.redirectedFrom=q;let y;return!Ie&&YE(s,G,V)&&(y=pr(16,{to:p,from:G}),ln(G,G,!0,!1)),(y?Promise.resolve(y):F(p,G)).catch(b=>un(b)?un(b,2)?b:nt(b):Se(b,p,G)).then(b=>{if(b){if(un(b,2))return N(Te({replace:ce},g(b.to),{state:typeof b.to=="object"?Te({},ve,b.to.state):ve,force:Ie}),q||p)}else b=j(p,G,!0,ce,ve);return H(p,G,b),b})}function S(C,q){const V=w(C,q);return V?Promise.reject(V):Promise.resolve()}function F(C,q){let V;const[G,ve,Ie]=z0(C,q);V=Nc(G.reverse(),"beforeRouteLeave",C,q);for(const se of G)se.leaveGuards.forEach(p=>{V.push(Fn(p,C,q))});const ce=S.bind(null,C,q);return V.push(ce),js(V).then(()=>{V=[];for(const se of i.list())V.push(Fn(se,C,q));return V.push(ce),js(V)}).then(()=>{V=Nc(ve,"beforeRouteUpdate",C,q);for(const se of ve)se.updateGuards.forEach(p=>{V.push(Fn(p,C,q))});return V.push(ce),js(V)}).then(()=>{V=[];for(const se of C.matched)if(se.beforeEnter&&!q.matched.includes(se))if(qt(se.beforeEnter))for(const p of se.beforeEnter)V.push(Fn(p,C,q));else V.push(Fn(se.beforeEnter,C,q));return V.push(ce),js(V)}).then(()=>(C.matched.forEach(se=>se.enterCallbacks={}),V=Nc(Ie,"beforeRouteEnter",C,q),V.push(ce),js(V))).then(()=>{V=[];for(const se of o.list())V.push(Fn(se,C,q));return V.push(ce),js(V)}).catch(se=>un(se,8)?se:Promise.reject(se))}function H(C,q,V){for(const G of a.list())G(C,q,V)}function j(C,q,V,G,ve){const Ie=w(C,q);if(Ie)return Ie;const ce=q===xn,se=Ks?history.state:{};V&&(G||ce?r.replace(C.fullPath,Te({scroll:ce&&se&&se.scroll},ve)):r.push(C.fullPath,ve)),c.value=C,ln(C,q,V,ce),nt()}let B;function ee(){B||(B=r.listen((C,q,V)=>{if(!gt.listening)return;const G=v(C),ve=L(G);if(ve){N(Te(ve,{replace:!0}),G).catch(Zr);return}l=G;const Ie=c.value;Ks&&r0(If(Ie.fullPath,V.delta),Ha()),F(G,Ie).catch(ce=>un(ce,12)?ce:un(ce,2)?(N(ce.to,G).then(se=>{un(se,20)&&!V.delta&&V.type===mi.pop&&r.go(-1,!1)}).catch(Zr),Promise.reject()):(V.delta&&r.go(-V.delta,!1),Se(ce,G,Ie))).then(ce=>{ce=ce||j(G,Ie,!1),ce&&(V.delta&&!un(ce,8)?r.go(-V.delta,!1):V.type===mi.pop&&un(ce,20)&&r.go(-1,!1)),H(G,Ie,ce)}).catch(Zr)}))}let $=Ur(),de=Ur(),pe;function Se(C,q,V){nt(C);const G=de.list();return G.length?G.forEach(ve=>ve(C,q,V)):console.error(C),Promise.reject(C)}function we(){return pe&&c.value!==xn?Promise.resolve():new Promise((C,q)=>{$.add([C,q])})}function nt(C){return pe||(pe=!C,ee(),$.list().forEach(([q,V])=>C?V(C):q()),$.reset()),C}function ln(C,q,V,G){const{scrollBehavior:ve}=t;if(!Ks||!ve)return Promise.resolve();const Ie=!V&&i0(If(C.fullPath,0))||(G||!V)&&history.state&&history.state.scroll||null;return Li().then(()=>ve(C,q,Ie)).then(ce=>ce&&s0(ce)).catch(ce=>Se(ce,C,q))}const Dt=C=>r.go(C);let wt;const Ke=new Set,gt={currentRoute:c,listening:!0,addRoute:d,removeRoute:m,hasRoute:I,getRoutes:E,resolve:v,options:t,push:T,replace:A,go:Dt,back:()=>Dt(-1),forward:()=>Dt(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:de.add,isReady:we,install(C){const q=this;C.component("RouterLink",tm),C.component("RouterView",nm),C.config.globalProperties.$router=q,Object.defineProperty(C.config.globalProperties,"$route",{enumerable:!0,get:()=>Js(c)}),Ks&&!wt&&c.value===xn&&(wt=!0,T(r.location).catch(ve=>{}));const V={};for(const ve in xn)V[ve]=it(()=>c.value[ve]);C.provide(_u,q),C.provide(em,Zt(V)),C.provide(bl,c);const G=C.unmount;Ke.add(C),C.unmount=function(){Ke.delete(C),Ke.size<1&&(l=xn,B&&B(),B=null,c.value=xn,wt=!1,pe=!1),G()}}};return gt}function js(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function z0(t,e){const n=[],s=[],r=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(l=>dr(l,a))?s.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(l=>dr(l,c))||r.push(c))}return[n,s,r]}/**
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
 */const sm=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},W0=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const r=t[n++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=t[n++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=t[n++],o=t[n++],a=t[n++],c=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return e.join("")},rm={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<t.length;r+=3){const i=t[r],o=r+1<t.length,a=o?t[r+1]:0,c=r+2<t.length,l=c?t[r+2]:0,u=i>>2,h=(i&3)<<4|a>>4;let f=(a&15)<<2|l>>6,d=l&63;c||(d=64,o||(f=64)),s.push(n[u],n[h],n[f],n[d])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(sm(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):W0(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<t.length;){const i=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const l=r<t.length?n[t.charAt(r)]:64;++r;const h=r<t.length?n[t.charAt(r)]:64;if(++r,i==null||a==null||l==null||h==null)throw Error();const f=i<<2|a>>4;if(s.push(f),l!==64){const d=a<<4&240|l>>2;if(s.push(d),h!==64){const m=l<<6&192|h;s.push(m)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},G0=function(t){const e=sm(t);return rm.encodeByteArray(e,!0)},Zo=function(t){return G0(t).replace(/\./g,"")},im=function(t){try{return rm.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function ut(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Q0(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ut())}function om(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Y0(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function X0(){const t=ut();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function am(){return typeof indexedDB=="object"}function cm(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var i;e(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}function J0(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}function Z0(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const eI=()=>Z0().__FIREBASE_DEFAULTS__,tI=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t=process.env.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},nI=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&im(t[1]);return e&&JSON.parse(e)},wu=()=>{try{return eI()||tI()||nI()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},lm=t=>{var e,n;return(n=(e=wu())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},um=t=>{const e=lm(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},sI=()=>{var t;return(t=wu())===null||t===void 0?void 0:t.config},hm=t=>{var e;return(e=wu())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class rI{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function fm(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",r=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Zo(JSON.stringify(n)),Zo(JSON.stringify(o)),a].join(".")}/**
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
 */const iI="FirebaseError";class Vt extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=iI,Object.setPrototypeOf(this,Vt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ls.prototype.create)}}class Ls{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?oI(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new Vt(r,a,s)}}function oI(t,e){return t.replace(aI,(n,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const aI=/\{\$([^}]+)}/g;function cI(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function yi(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const r of n){if(!s.includes(r))return!1;const i=t[r],o=e[r];if(Uf(i)&&Uf(o)){if(!yi(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function Uf(t){return t!==null&&typeof t=="object"}/**
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
 */function $i(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function $r(t){const e={};return t.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[r,i]=s.split("=");e[decodeURIComponent(r)]=decodeURIComponent(i)}}),e}function jr(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function lI(t,e){const n=new uI(t,e);return n.subscribe.bind(n)}class uI{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let r;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");hI(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:s},r.next===void 0&&(r.next=xc),r.error===void 0&&(r.error=xc),r.complete===void 0&&(r.complete=xc);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function hI(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function xc(){}/**
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
 */const fI=1e3,dI=2,pI=4*60*60*1e3,gI=.5;function Ff(t,e=fI,n=dI){const s=e*Math.pow(n,t),r=Math.round(gI*s*(Math.random()-.5)*2);return Math.min(pI,s+r)}/**
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
 */function Ge(t){return t&&t._delegate?t._delegate:t}class Ft{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const hs="[DEFAULT]";/**
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
 */class mI{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new rI;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(vI(e))try{this.getOrInitializeService({instanceIdentifier:hs})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=hs){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=hs){return this.instances.has(e)}getOptions(e=hs){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);s===a&&o.resolve(r)}return r}onInit(e,n){var s;const r=this.normalizeInstanceIdentifier(n),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(!!s)for(const r of s)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:yI(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=hs){return this.component?this.component.multipleInstances?e:hs:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function yI(t){return t===hs?void 0:t}function vI(t){return t.instantiationMode==="EAGER"}/**
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
 */class _I{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new mI(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var _e;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(_e||(_e={}));const wI={debug:_e.DEBUG,verbose:_e.VERBOSE,info:_e.INFO,warn:_e.WARN,error:_e.ERROR,silent:_e.SILENT},bI=_e.INFO,EI={[_e.DEBUG]:"log",[_e.VERBOSE]:"log",[_e.INFO]:"info",[_e.WARN]:"warn",[_e.ERROR]:"error"},II=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),r=EI[e];if(r)console[r](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class qa{constructor(e){this.name=e,this._logLevel=bI,this._logHandler=II,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in _e))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?wI[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,_e.DEBUG,...e),this._logHandler(this,_e.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,_e.VERBOSE,...e),this._logHandler(this,_e.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,_e.INFO,...e),this._logHandler(this,_e.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,_e.WARN,...e),this._logHandler(this,_e.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,_e.ERROR,...e),this._logHandler(this,_e.ERROR,...e)}}const TI=(t,e)=>e.some(n=>t instanceof n);let Vf,Bf;function SI(){return Vf||(Vf=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function CI(){return Bf||(Bf=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const dm=new WeakMap,El=new WeakMap,pm=new WeakMap,Pc=new WeakMap,bu=new WeakMap;function AI(t){const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Wn(t.result)),r()},o=()=>{s(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&dm.set(n,t)}).catch(()=>{}),bu.set(e,t),e}function kI(t){if(El.has(t))return;const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),r()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});El.set(t,e)}let Il={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return El.get(t);if(e==="objectStoreNames")return t.objectStoreNames||pm.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Wn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function RI(t){Il=t(Il)}function DI(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(Mc(this),e,...n);return pm.set(s,e.sort?e.sort():[e]),Wn(s)}:CI().includes(t)?function(...e){return t.apply(Mc(this),e),Wn(dm.get(this))}:function(...e){return Wn(t.apply(Mc(this),e))}}function OI(t){return typeof t=="function"?DI(t):(t instanceof IDBTransaction&&kI(t),TI(t,SI())?new Proxy(t,Il):t)}function Wn(t){if(t instanceof IDBRequest)return AI(t);if(Pc.has(t))return Pc.get(t);const e=OI(t);return e!==t&&(Pc.set(t,e),bu.set(e,t)),e}const Mc=t=>bu.get(t);function gm(t,e,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(t,e),a=Wn(o);return s&&o.addEventListener("upgradeneeded",c=>{s(Wn(o.result),c.oldVersion,c.newVersion,Wn(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{i&&c.addEventListener("close",()=>i()),r&&c.addEventListener("versionchange",()=>r())}).catch(()=>{}),a}const NI=["get","getKey","getAll","getAllKeys","count"],xI=["put","add","delete","clear"],Lc=new Map;function $f(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Lc.get(e))return Lc.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,r=xI.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||NI.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,r?"readwrite":"readonly");let l=c.store;return s&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),r&&c.done]))[0]};return Lc.set(e,i),i}RI(t=>({...t,get:(e,n,s)=>$f(e,n)||t.get(e,n,s),has:(e,n)=>!!$f(e,n)||t.has(e,n)}));/**
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
 */class PI{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(MI(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function MI(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Tl="@firebase/app",jf="0.8.4";/**
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
 */const Cs=new qa("@firebase/app"),LI="@firebase/app-compat",UI="@firebase/analytics-compat",FI="@firebase/analytics",VI="@firebase/app-check-compat",BI="@firebase/app-check",$I="@firebase/auth",jI="@firebase/auth-compat",HI="@firebase/database",qI="@firebase/database-compat",KI="@firebase/functions",zI="@firebase/functions-compat",WI="@firebase/installations",GI="@firebase/installations-compat",QI="@firebase/messaging",YI="@firebase/messaging-compat",XI="@firebase/performance",JI="@firebase/performance-compat",ZI="@firebase/remote-config",eT="@firebase/remote-config-compat",tT="@firebase/storage",nT="@firebase/storage-compat",sT="@firebase/firestore",rT="@firebase/firestore-compat",iT="firebase",oT="9.14.0";/**
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
 */const Sl="[DEFAULT]",aT={[Tl]:"fire-core",[LI]:"fire-core-compat",[FI]:"fire-analytics",[UI]:"fire-analytics-compat",[BI]:"fire-app-check",[VI]:"fire-app-check-compat",[$I]:"fire-auth",[jI]:"fire-auth-compat",[HI]:"fire-rtdb",[qI]:"fire-rtdb-compat",[KI]:"fire-fn",[zI]:"fire-fn-compat",[WI]:"fire-iid",[GI]:"fire-iid-compat",[QI]:"fire-fcm",[YI]:"fire-fcm-compat",[XI]:"fire-perf",[JI]:"fire-perf-compat",[ZI]:"fire-rc",[eT]:"fire-rc-compat",[tT]:"fire-gcs",[nT]:"fire-gcs-compat",[sT]:"fire-fst",[rT]:"fire-fst-compat","fire-js":"fire-js",[iT]:"fire-js-all"};/**
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
 */const ea=new Map,Cl=new Map;function cT(t,e){try{t.container.addComponent(e)}catch(n){Cs.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Kt(t){const e=t.name;if(Cl.has(e))return Cs.debug(`There were multiple attempts to register component ${e}.`),!1;Cl.set(e,t);for(const n of ea.values())cT(n,t);return!0}function is(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const lT={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Gn=new Ls("app","Firebase",lT);/**
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
 */class uT{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Ft("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Gn.create("app-deleted",{appName:this._name})}}/**
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
 */const Sr=oT;function mm(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Sl,automaticDataCollectionEnabled:!1},e),r=s.name;if(typeof r!="string"||!r)throw Gn.create("bad-app-name",{appName:String(r)});if(n||(n=sI()),!n)throw Gn.create("no-options");const i=ea.get(r);if(i){if(yi(n,i.options)&&yi(s,i.config))return i;throw Gn.create("duplicate-app",{appName:r})}const o=new _I(r);for(const c of Cl.values())o.addComponent(c);const a=new uT(n,s,o);return ea.set(r,a),a}function Ka(t=Sl){const e=ea.get(t);if(!e&&t===Sl)return mm();if(!e)throw Gn.create("no-app",{appName:t});return e}function _t(t,e,n){var s;let r=(s=aT[t])!==null&&s!==void 0?s:t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${e}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Cs.warn(a.join(" "));return}Kt(new Ft(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const hT="firebase-heartbeat-database",fT=1,vi="firebase-heartbeat-store";let Uc=null;function ym(){return Uc||(Uc=gm(hT,fT,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(vi)}}}).catch(t=>{throw Gn.create("idb-open",{originalErrorMessage:t.message})})),Uc}async function dT(t){var e;try{return(await ym()).transaction(vi).objectStore(vi).get(vm(t))}catch(n){if(n instanceof Vt)Cs.warn(n.message);else{const s=Gn.create("idb-get",{originalErrorMessage:(e=n)===null||e===void 0?void 0:e.message});Cs.warn(s.message)}}}async function Hf(t,e){var n;try{const r=(await ym()).transaction(vi,"readwrite");return await r.objectStore(vi).put(e,vm(t)),r.done}catch(s){if(s instanceof Vt)Cs.warn(s.message);else{const r=Gn.create("idb-set",{originalErrorMessage:(n=s)===null||n===void 0?void 0:n.message});Cs.warn(r.message)}}}function vm(t){return`${t.name}!${t.options.appId}`}/**
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
 */const pT=1024,gT=30*24*60*60*1e3;class mT{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new vT(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=qf();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(r=>r.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const i=new Date(r.date).valueOf();return Date.now()-i<=gT}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=qf(),{heartbeatsToSend:n,unsentEntries:s}=yT(this._heartbeatsCache.heartbeats),r=Zo(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function qf(){return new Date().toISOString().substring(0,10)}function yT(t,e=pT){const n=[];let s=t.slice();for(const r of t){const i=n.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),Kf(n)>e){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),Kf(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class vT{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return am()?cm().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await dT(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Hf(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Hf(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Kf(t){return Zo(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function _T(t){Kt(new Ft("platform-logger",e=>new PI(e),"PRIVATE")),Kt(new Ft("heartbeat",e=>new mT(e),"PRIVATE")),_t(Tl,jf,t),_t(Tl,jf,"esm2017"),_t("fire-js","")}_T("");function Eu(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,s=Object.getOwnPropertySymbols(t);r<s.length;r++)e.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(t,s[r])&&(n[s[r]]=t[s[r]]);return n}function _m(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const wT=_m,wm=new Ls("auth","Firebase",_m());/**
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
 */const zf=new qa("@firebase/auth");function Po(t,...e){zf.logLevel<=_e.ERROR&&zf.error(`Auth (${Sr}): ${t}`,...e)}/**
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
 */function zt(t,...e){throw Iu(t,...e)}function nn(t,...e){return Iu(t,...e)}function bT(t,e,n){const s=Object.assign(Object.assign({},wT()),{[e]:n});return new Ls("auth","Firebase",s).create(e,{appName:t.name})}function Iu(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return wm.create(t,...e)}function te(t,e,...n){if(!t)throw Iu(e,...n)}function gn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Po(e),new Error(e)}function In(t,e){t||gn(e)}/**
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
 */const Wf=new Map;function mn(t){In(t instanceof Function,"Expected a class definition");let e=Wf.get(t);return e?(In(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Wf.set(t,e),e)}/**
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
 */function ET(t,e){const n=is(t,"auth");if(n.isInitialized()){const r=n.getImmediate(),i=n.getOptions();if(yi(i,e!=null?e:{}))return r;zt(r,"already-initialized")}return n.initialize({options:e})}function IT(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(mn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}/**
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
 */function Al(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function TT(){return Gf()==="http:"||Gf()==="https:"}function Gf(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function ST(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(TT()||om()||"connection"in navigator)?navigator.onLine:!0}function CT(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class ji{constructor(e,n){this.shortDelay=e,this.longDelay=n,In(n>e,"Short delay should be less than long delay!"),this.isMobile=Q0()||Y0()}get(){return ST()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Tu(t,e){In(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class bm{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;gn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;gn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;gn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const AT={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
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
 */const kT=new ji(3e4,6e4);function Hi(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function qi(t,e,n,s,r={}){return Em(t,r,async()=>{let i={},o={};s&&(e==="GET"?o=s:i={body:JSON.stringify(s)});const a=$i(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),bm.fetch()(Im(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function Em(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},AT),e);try{const r=new RT(t),i=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Io(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Io(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Io(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw Io(t,"user-disabled",o);const u=s[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw bT(t,u,l);zt(t,u)}}catch(r){if(r instanceof Vt)throw r;zt(t,"network-request-failed")}}async function Ki(t,e,n,s,r={}){const i=await qi(t,e,n,s,r);return"mfaPendingCredential"in i&&zt(t,"multi-factor-auth-required",{_serverResponse:i}),i}function Im(t,e,n,s){const r=`${e}${n}?${s}`;return t.config.emulator?Tu(t.config,r):`${t.config.apiScheme}://${r}`}class RT{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(nn(this.auth,"network-request-failed")),kT.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Io(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const r=nn(t,e,s);return r.customData._tokenResponse=n,r}/**
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
 */async function DT(t,e){return qi(t,"POST","/v1/accounts:delete",e)}async function OT(t,e){return qi(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function ti(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function NT(t,e=!1){const n=Ge(t),s=await n.getIdToken(e),r=Su(s);te(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:r,token:s,authTime:ti(Fc(r.auth_time)),issuedAtTime:ti(Fc(r.iat)),expirationTime:ti(Fc(r.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Fc(t){return Number(t)*1e3}function Su(t){var e;const[n,s,r]=t.split(".");if(n===void 0||s===void 0||r===void 0)return Po("JWT malformed, contained fewer than 3 sections"),null;try{const i=im(s);return i?JSON.parse(i):(Po("Failed to decode base64 JWT payload"),null)}catch(i){return Po("Caught error parsing JWT payload as JSON",(e=i)===null||e===void 0?void 0:e.toString()),null}}function xT(t){const e=Su(t);return te(e,"internal-error"),te(typeof e.exp<"u","internal-error"),te(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function _i(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof Vt&&PT(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function PT({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class MT{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const r=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){var e;try{await this.user.getIdToken(!0)}catch(n){((e=n)===null||e===void 0?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Tm{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ti(this.lastLoginAt),this.creationTime=ti(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function ta(t){var e;const n=t.auth,s=await t.getIdToken(),r=await _i(t,OT(n,{idToken:s}));te(r==null?void 0:r.users.length,n,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?FT(i.providerUserInfo):[],a=UT(t.providerData,o),c=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new Tm(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function LT(t){const e=Ge(t);await ta(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function UT(t,e){return[...t.filter(s=>!e.some(r=>r.providerId===s.providerId)),...e]}function FT(t){return t.map(e=>{var{providerId:n}=e,s=Eu(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function VT(t,e){const n=await Em(t,{},async()=>{const s=$i({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=t.config,o=Im(t,r,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",bm.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class wi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){te(e.idToken,"internal-error"),te(typeof e.idToken<"u","internal-error"),te(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):xT(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return te(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:r,expiresIn:i}=await VT(e,n);this.updateTokensAndExpiration(s,r,Number(i))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:r,expirationTime:i}=n,o=new wi;return s&&(te(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),r&&(te(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),i&&(te(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new wi,this.toJSON())}_performRefresh(){return gn("not implemented")}}/**
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
 */function Pn(t,e){te(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class bs{constructor(e){var{uid:n,auth:s,stsTokenManager:r}=e,i=Eu(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new MT(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Tm(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await _i(this,this.stsTokenManager.getToken(this.auth,e));return te(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return NT(this,e)}reload(){return LT(this)}_assign(e){this!==e&&(te(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new bs(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){te(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await ta(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await _i(this,DT(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,r,i,o,a,c,l,u;const h=(s=n.displayName)!==null&&s!==void 0?s:void 0,f=(r=n.email)!==null&&r!==void 0?r:void 0,d=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,m=(o=n.photoURL)!==null&&o!==void 0?o:void 0,E=(a=n.tenantId)!==null&&a!==void 0?a:void 0,I=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,v=(l=n.createdAt)!==null&&l!==void 0?l:void 0,g=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:w,emailVerified:T,isAnonymous:A,providerData:L,stsTokenManager:N}=n;te(w&&N,e,"internal-error");const S=wi.fromJSON(this.name,N);te(typeof w=="string",e,"internal-error"),Pn(h,e.name),Pn(f,e.name),te(typeof T=="boolean",e,"internal-error"),te(typeof A=="boolean",e,"internal-error"),Pn(d,e.name),Pn(m,e.name),Pn(E,e.name),Pn(I,e.name),Pn(v,e.name),Pn(g,e.name);const F=new bs({uid:w,auth:e,email:f,emailVerified:T,displayName:h,isAnonymous:A,photoURL:m,phoneNumber:d,tenantId:E,stsTokenManager:S,createdAt:v,lastLoginAt:g});return L&&Array.isArray(L)&&(F.providerData=L.map(H=>Object.assign({},H))),I&&(F._redirectEventId=I),F}static async _fromIdTokenResponse(e,n,s=!1){const r=new wi;r.updateFromServerResponse(n);const i=new bs({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:s});return await ta(i),i}}/**
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
 */class Sm{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Sm.type="NONE";const Qf=Sm;/**
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
 */function Mo(t,e,n){return`firebase:${t}:${e}:${n}`}class nr{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:r,name:i}=this.auth;this.fullUserKey=Mo(this.userKey,r.apiKey,i),this.fullPersistenceKey=Mo("persistence",r.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?bs._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new nr(mn(Qf),e,s);const r=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=r[0]||mn(Qf);const o=Mo(s,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const h=bs._fromJSON(e,u);l!==i&&(a=h),i=l;break}}catch{}const c=r.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new nr(i,e,s):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new nr(i,e,s))}}/**
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
 */function Yf(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(km(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Cm(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Dm(e))return"Blackberry";if(Om(e))return"Webos";if(Cu(e))return"Safari";if((e.includes("chrome/")||Am(e))&&!e.includes("edge/"))return"Chrome";if(Rm(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Cm(t=ut()){return/firefox\//i.test(t)}function Cu(t=ut()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Am(t=ut()){return/crios\//i.test(t)}function km(t=ut()){return/iemobile/i.test(t)}function Rm(t=ut()){return/android/i.test(t)}function Dm(t=ut()){return/blackberry/i.test(t)}function Om(t=ut()){return/webos/i.test(t)}function za(t=ut()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function BT(t=ut()){var e;return za(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function $T(){return X0()&&document.documentMode===10}function Nm(t=ut()){return za(t)||Rm(t)||Om(t)||Dm(t)||/windows phone/i.test(t)||km(t)}function jT(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function xm(t,e=[]){let n;switch(t){case"Browser":n=Yf(ut());break;case"Worker":n=`${Yf(ut())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Sr}/${s}`}/**
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
 */class HT{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});s.onAbort=n,this.queue.push(s);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){var n;if(this.auth.currentUser===e)return;const s=[];try{for(const r of this.queue)await r(e),r.onAbort&&s.push(r.onAbort)}catch(r){s.reverse();for(const i of s)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:(n=r)===null||n===void 0?void 0:n.message})}}}/**
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
 */class qT{constructor(e,n,s){this.app=e,this.heartbeatServiceProvider=n,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Xf(this),this.idTokenSubscription=new Xf(this),this.beforeStateQueue=new HT(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=wm,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=mn(n)),this._initializationPromise=this.queue(async()=>{var s,r;if(!this._deleted&&(this.persistenceManager=await nr.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const s=await this.assertedPersistence.getCurrentUser();let r=s,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=r==null?void 0:r._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c==null?void 0:c.user)&&(r=c.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return te(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){var n;try{await ta(e)}catch(s){if(((n=s)===null||n===void 0?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=CT()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Ge(e):null;return n&&te(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&te(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(mn(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ls("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&mn(e)||this._popupRedirectResolver;te(n,this,"argument-error"),this.redirectPersistenceManager=await nr.create(this,[mn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,r){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return te(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?e.addObserver(n,s,r):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return te(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=xm(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return s&&(n["X-Firebase-Client"]=s),n}}function zi(t){return Ge(t)}class Xf{constructor(e){this.auth=e,this.observer=null,this.addObserver=lI(n=>this.observer=n)}get next(){return te(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function KT(t,e,n){const s=zi(t);te(s._canInitEmulator,s,"emulator-config-failed"),te(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const r=!!(n!=null&&n.disableWarnings),i=Pm(e),{host:o,port:a}=zT(e),c=a===null?"":`:${a}`;s.config.emulator={url:`${i}//${o}${c}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:r})}),r||WT()}function Pm(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function zT(t){const e=Pm(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(s);if(r){const i=r[1];return{host:i,port:Jf(s.substr(i.length+1))}}else{const[i,o]=s.split(":");return{host:i,port:Jf(o)}}}function Jf(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function WT(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Au{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return gn("not implemented")}_getIdTokenResponse(e){return gn("not implemented")}_linkToIdToken(e,n){return gn("not implemented")}_getReauthenticationResolver(e){return gn("not implemented")}}async function GT(t,e){return qi(t,"POST","/v1/accounts:update",e)}/**
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
 */async function QT(t,e){return Ki(t,"POST","/v1/accounts:signInWithPassword",Hi(t,e))}/**
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
 */async function YT(t,e){return Ki(t,"POST","/v1/accounts:signInWithEmailLink",Hi(t,e))}async function XT(t,e){return Ki(t,"POST","/v1/accounts:signInWithEmailLink",Hi(t,e))}/**
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
 */class bi extends Au{constructor(e,n,s,r=null){super("password",s),this._email=e,this._password=n,this._tenantId=r}static _fromEmailAndPassword(e,n){return new bi(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new bi(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return QT(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return YT(e,{email:this._email,oobCode:this._password});default:zt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return GT(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return XT(e,{idToken:n,email:this._email,oobCode:this._password});default:zt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function sr(t,e){return Ki(t,"POST","/v1/accounts:signInWithIdp",Hi(t,e))}/**
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
 */const JT="http://localhost";class As extends Au{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new As(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):zt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:r}=n,i=Eu(n,["providerId","signInMethod"]);if(!s||!r)return null;const o=new As(s,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return sr(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,sr(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,sr(e,n)}buildRequest(){const e={requestUri:JT,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=$i(n)}return e}}/**
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
 */function ZT(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function eS(t){const e=$r(jr(t)).link,n=e?$r(jr(e)).deep_link_id:null,s=$r(jr(t)).deep_link_id;return(s?$r(jr(s)).link:null)||s||n||e||t}class ku{constructor(e){var n,s,r,i,o,a;const c=$r(jr(e)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,u=(s=c.oobCode)!==null&&s!==void 0?s:null,h=ZT((r=c.mode)!==null&&r!==void 0?r:null);te(l&&u&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=u,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=eS(e);try{return new ku(n)}catch{return null}}}/**
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
 */class Cr{constructor(){this.providerId=Cr.PROVIDER_ID}static credential(e,n){return bi._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=ku.parseLink(n);return te(s,"argument-error"),bi._fromEmailAndCode(e,s.code,s.tenantId)}}Cr.PROVIDER_ID="password";Cr.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Cr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Mm{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Wi extends Mm{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Vn extends Wi{constructor(){super("facebook.com")}static credential(e){return As._fromParams({providerId:Vn.PROVIDER_ID,signInMethod:Vn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Vn.credentialFromTaggedObject(e)}static credentialFromError(e){return Vn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Vn.credential(e.oauthAccessToken)}catch{return null}}}Vn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Vn.PROVIDER_ID="facebook.com";/**
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
 */class Bn extends Wi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return As._fromParams({providerId:Bn.PROVIDER_ID,signInMethod:Bn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Bn.credentialFromTaggedObject(e)}static credentialFromError(e){return Bn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return Bn.credential(n,s)}catch{return null}}}Bn.GOOGLE_SIGN_IN_METHOD="google.com";Bn.PROVIDER_ID="google.com";/**
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
 */class $n extends Wi{constructor(){super("github.com")}static credential(e){return As._fromParams({providerId:$n.PROVIDER_ID,signInMethod:$n.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return $n.credentialFromTaggedObject(e)}static credentialFromError(e){return $n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return $n.credential(e.oauthAccessToken)}catch{return null}}}$n.GITHUB_SIGN_IN_METHOD="github.com";$n.PROVIDER_ID="github.com";/**
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
 */class jn extends Wi{constructor(){super("twitter.com")}static credential(e,n){return As._fromParams({providerId:jn.PROVIDER_ID,signInMethod:jn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return jn.credentialFromTaggedObject(e)}static credentialFromError(e){return jn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return jn.credential(n,s)}catch{return null}}}jn.TWITTER_SIGN_IN_METHOD="twitter.com";jn.PROVIDER_ID="twitter.com";/**
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
 */async function tS(t,e){return Ki(t,"POST","/v1/accounts:signUp",Hi(t,e))}/**
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
 */class ks{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,r=!1){const i=await bs._fromIdTokenResponse(e,s,r),o=Zf(s);return new ks({user:i,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const r=Zf(s);return new ks({user:e,providerId:r,_tokenResponse:s,operationType:n})}}function Zf(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class na extends Vt{constructor(e,n,s,r){var i;super(n.code,n.message),this.operationType=s,this.user=r,Object.setPrototypeOf(this,na.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,r){return new na(e,n,s,r)}}function Lm(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?na._fromErrorAndOperation(t,i,e,s):i})}async function nS(t,e,n=!1){const s=await _i(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ks._forOperation(t,"link",s)}/**
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
 */async function sS(t,e,n=!1){var s;const{auth:r}=t,i="reauthenticate";try{const o=await _i(t,Lm(r,i,e,t),n);te(o.idToken,r,"internal-error");const a=Su(o.idToken);te(a,r,"internal-error");const{sub:c}=a;return te(t.uid===c,r,"user-mismatch"),ks._forOperation(t,i,o)}catch(o){throw((s=o)===null||s===void 0?void 0:s.code)==="auth/user-not-found"&&zt(r,"user-mismatch"),o}}/**
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
 */async function Um(t,e,n=!1){const s="signIn",r=await Lm(t,s,e),i=await ks._fromIdTokenResponse(t,s,r);return n||await t._updateCurrentUser(i.user),i}async function rS(t,e){return Um(zi(t),e)}async function ed(t,e,n){const s=zi(t),r=await tS(s,{returnSecureToken:!0,email:e,password:n}),i=await ks._fromIdTokenResponse(s,"signIn",r);return await s._updateCurrentUser(i.user),i}function iS(t,e,n){return rS(Ge(t),Cr.credential(e,n))}function oS(t,e,n,s){return Ge(t).onIdTokenChanged(e,n,s)}function aS(t,e,n){return Ge(t).beforeAuthStateChanged(e,n)}function Fm(t,e,n,s){return Ge(t).onAuthStateChanged(e,n,s)}function cS(t){return Ge(t).signOut()}async function lS(t){return Ge(t).delete()}const sa="__sak";/**
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
 */class Vm{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(sa,"1"),this.storage.removeItem(sa),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function uS(){const t=ut();return Cu(t)||za(t)}const hS=1e3,fS=10;class Bm extends Vm{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=uS()&&jT(),this.fallbackToPolling=Nm(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),r=this.localCache[n];s!==r&&e(n,r,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const s=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!n)return}const r=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},i=this.storage.getItem(s);$T()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,fS):r()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},hS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Bm.type="LOCAL";const dS=Bm;/**
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
 */class $m extends Vm{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}$m.type="SESSION";const jm=$m;/**
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
 */function pS(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Wa{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const s=new Wa(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:r,data:i}=n.data,o=this.handlersMap[r];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await pS(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Wa.receivers=[];/**
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
 */function Ru(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class gS{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=Ru("",20);r.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},s);o={messageChannel:r,onMessage(h){const f=h;if(f.data.eventId===l)switch(f.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(f.data.response);break;default:clearTimeout(u),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function sn(){return window}function mS(t){sn().location.href=t}/**
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
 */function Hm(){return typeof sn().WorkerGlobalScope<"u"&&typeof sn().importScripts=="function"}async function yS(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function vS(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function _S(){return Hm()?self:null}/**
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
 */const qm="firebaseLocalStorageDb",wS=1,ra="firebaseLocalStorage",Km="fbase_key";class Gi{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ga(t,e){return t.transaction([ra],e?"readwrite":"readonly").objectStore(ra)}function bS(){const t=indexedDB.deleteDatabase(qm);return new Gi(t).toPromise()}function kl(){const t=indexedDB.open(qm,wS);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(ra,{keyPath:Km})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(ra)?e(s):(s.close(),await bS(),e(await kl()))})})}async function td(t,e,n){const s=Ga(t,!0).put({[Km]:e,value:n});return new Gi(s).toPromise()}async function ES(t,e){const n=Ga(t,!1).get(e),s=await new Gi(n).toPromise();return s===void 0?null:s.value}function nd(t,e){const n=Ga(t,!0).delete(e);return new Gi(n).toPromise()}const IS=800,TS=3;class zm{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await kl(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>TS)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Hm()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Wa._getInstance(_S()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await yS(),!this.activeServiceWorker)return;this.sender=new gS(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);!s||((e=s[0])===null||e===void 0?void 0:e.fulfilled)&&((n=s[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||vS()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await kl();return await td(e,sa,"1"),await nd(e,sa),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>td(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>ES(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>nd(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const i=Ga(r,!1).getAll();return new Gi(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;for(const{fbase_key:r,value:i}of e)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),IS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}zm.type="LOCAL";const SS=zm;/**
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
 */function CS(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function AS(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=r=>{const i=nn("internal-error");i.customData=r,n(i)},s.type="text/javascript",s.charset="UTF-8",CS().appendChild(s)})}function kS(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new ji(3e4,6e4);/**
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
 */function RS(t,e){return e?mn(e):(te(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Du extends Au{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return sr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return sr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return sr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function DS(t){return Um(t.auth,new Du(t),t.bypassAuthState)}function OS(t){const{auth:e,user:n}=t;return te(n,e,"internal-error"),sS(n,new Du(t),t.bypassAuthState)}async function NS(t){const{auth:e,user:n}=t;return te(n,e,"internal-error"),nS(n,new Du(t),t.bypassAuthState)}/**
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
 */class Wm{constructor(e,n,s,r,i=!1){this.auth=e,this.resolver=s,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:r,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:s,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return DS;case"linkViaPopup":case"linkViaRedirect":return NS;case"reauthViaPopup":case"reauthViaRedirect":return OS;default:zt(this.auth,"internal-error")}}resolve(e){In(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){In(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const xS=new ji(2e3,1e4);class zs extends Wm{constructor(e,n,s,r,i){super(e,n,r,i),this.provider=s,this.authWindow=null,this.pollId=null,zs.currentPopupAction&&zs.currentPopupAction.cancel(),zs.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return te(e,this.auth,"internal-error"),e}async onExecution(){In(this.filter.length===1,"Popup operations only handle one event");const e=Ru();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(nn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(nn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,zs.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(nn(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,xS.get())};e()}}zs.currentPopupAction=null;/**
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
 */const PS="pendingRedirect",Lo=new Map;class MS extends Wm{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=Lo.get(this.auth._key());if(!e){try{const s=await LS(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}Lo.set(this.auth._key(),e)}return this.bypassAuthState||Lo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function LS(t,e){const n=VS(e),s=FS(t);if(!await s._isAvailable())return!1;const r=await s._get(n)==="true";return await s._remove(n),r}function US(t,e){Lo.set(t._key(),e)}function FS(t){return mn(t._redirectPersistence)}function VS(t){return Mo(PS,t.config.apiKey,t.name)}async function BS(t,e,n=!1){const s=zi(t),r=RS(s,e),o=await new MS(s,r,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
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
 */const $S=10*60*1e3;class jS{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!HS(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!Gm(e)){const r=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(nn(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=$S&&this.cachedEventUids.clear(),this.cachedEventUids.has(sd(e))}saveEventToCache(e){this.cachedEventUids.add(sd(e)),this.lastProcessedEventTime=Date.now()}}function sd(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Gm({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function HS(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Gm(t);default:return!1}}/**
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
 */async function qS(t,e={}){return qi(t,"GET","/v1/projects",e)}/**
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
 */const KS=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,zS=/^https?/;async function WS(t){if(t.config.emulator)return;const{authorizedDomains:e}=await qS(t);for(const n of e)try{if(GS(n))return}catch{}zt(t,"unauthorized-domain")}function GS(t){const e=Al(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!zS.test(n))return!1;if(KS.test(t))return s===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}/**
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
 */const QS=new ji(3e4,6e4);function rd(){const t=sn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function YS(t){return new Promise((e,n)=>{var s,r,i;function o(){rd(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{rd(),n(nn(t,"network-request-failed"))},timeout:QS.get()})}if(!((r=(s=sn().gapi)===null||s===void 0?void 0:s.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((i=sn().gapi)===null||i===void 0)&&i.load)o();else{const a=kS("iframefcb");return sn()[a]=()=>{gapi.load?o():n(nn(t,"network-request-failed"))},AS(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw Uo=null,e})}let Uo=null;function XS(t){return Uo=Uo||YS(t),Uo}/**
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
 */const JS=new ji(5e3,15e3),ZS="__/auth/iframe",eC="emulator/auth/iframe",tC={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},nC=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function sC(t){const e=t.config;te(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Tu(e,eC):`https://${t.config.authDomain}/${ZS}`,s={apiKey:e.apiKey,appName:t.name,v:Sr},r=nC.get(t.config.apiHost);r&&(s.eid=r);const i=t._getFrameworks();return i.length&&(s.fw=i.join(",")),`${n}?${$i(s).slice(1)}`}async function rC(t){const e=await XS(t),n=sn().gapi;return te(n,t,"internal-error"),e.open({where:document.body,url:sC(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:tC,dontclear:!0},s=>new Promise(async(r,i)=>{await s.restyle({setHideOnLeave:!1});const o=nn(t,"network-request-failed"),a=sn().setTimeout(()=>{i(o)},JS.get());function c(){sn().clearTimeout(a),r(s)}s.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const iC={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},oC=500,aC=600,cC="_blank",lC="http://localhost";class id{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function uC(t,e,n,s=oC,r=aC){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const c=Object.assign(Object.assign({},iC),{width:s.toString(),height:r.toString(),top:i,left:o}),l=ut().toLowerCase();n&&(a=Am(l)?cC:n),Cm(l)&&(e=e||lC,c.scrollbars="yes");const u=Object.entries(c).reduce((f,[d,m])=>`${f}${d}=${m},`,"");if(BT(l)&&a!=="_self")return hC(e||"",a),new id(null);const h=window.open(e||"",a,u);te(h,t,"popup-blocked");try{h.focus()}catch{}return new id(h)}function hC(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const fC="__/auth/handler",dC="emulator/auth/handler";function od(t,e,n,s,r,i){te(t.config.authDomain,t,"auth-domain-config-required"),te(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:Sr,eventId:r};if(e instanceof Mm){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",cI(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,l]of Object.entries(i||{}))o[c]=l}if(e instanceof Wi){const c=e.getScopes().filter(l=>l!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];return`${pC(t)}?${$i(a).slice(1)}`}function pC({config:t}){return t.emulator?Tu(t,dC):`https://${t.authDomain}/${fC}`}/**
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
 */const Vc="webStorageSupport";class gC{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=jm,this._completeRedirectFn=BS,this._overrideRedirectResult=US}async _openPopup(e,n,s,r){var i;In((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=od(e,n,s,Al(),r);return uC(e,o,Ru())}async _openRedirect(e,n,s,r){return await this._originValidation(e),mS(od(e,n,s,Al(),r)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:i}=this.eventManagers[n];return r?Promise.resolve(r):(In(i,"If manager is not set, promise should be"),i)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await rC(e),s=new jS(e);return n.register("authEvent",r=>(te(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Vc,{type:Vc},r=>{var i;const o=(i=r==null?void 0:r[0])===null||i===void 0?void 0:i[Vc];o!==void 0&&n(!!o),zt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=WS(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Nm()||Cu()||za()}}const mC=gC;var ad="@firebase/auth",cd="0.20.11";/**
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
 */class yC{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{var r;e(((r=s)===null||r===void 0?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){te(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function vC(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function _C(t){Kt(new Ft("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),{apiKey:i,authDomain:o}=s.options;return((a,c)=>{te(i&&!i.includes(":"),"invalid-api-key",{appName:a.name}),te(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const l={apiKey:i,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:xm(t)},u=new qT(a,c,l);return IT(u,n),u})(s,r)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),Kt(new Ft("auth-internal",e=>{const n=zi(e.getProvider("auth").getImmediate());return(s=>new yC(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),_t(ad,cd,vC(t)),_t(ad,cd,"esm2017")}/**
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
 */const wC=5*60,bC=hm("authIdTokenMaxAge")||wC;let ld=null;const EC=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>bC)return;const r=n==null?void 0:n.token;ld!==r&&(ld=r,await fetch(t,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function IC(t=Ka()){const e=is(t,"auth");if(e.isInitialized())return e.getImmediate();const n=ET(t,{popupRedirectResolver:mC,persistence:[SS,dS,jm]}),s=hm("authTokenSyncURL");if(s){const i=EC(s);aS(n,i,()=>i(n.currentUser)),oS(n,o=>i(o))}const r=lm("auth");return r&&KT(n,`http://${r}`),n}_C("Browser");var TC="firebase",SC="9.14.0";/**
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
 */_t(TC,SC,"app");const Qm="@firebase/installations",Ou="0.5.16";/**
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
 */const Ym=1e4,Xm=`w:${Ou}`,Jm="FIS_v2",CC="https://firebaseinstallations.googleapis.com/v1",AC=60*60*1e3,kC="installations",RC="Installations";/**
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
 */const DC={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},Rs=new Ls(kC,RC,DC);function Zm(t){return t instanceof Vt&&t.code.includes("request-failed")}/**
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
 */function ey({projectId:t}){return`${CC}/projects/${t}/installations`}function ty(t){return{token:t.token,requestStatus:2,expiresIn:NC(t.expiresIn),creationTime:Date.now()}}async function ny(t,e){const s=(await e.json()).error;return Rs.create("request-failed",{requestName:t,serverCode:s.code,serverMessage:s.message,serverStatus:s.status})}function sy({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function OC(t,{refreshToken:e}){const n=sy(t);return n.append("Authorization",xC(e)),n}async function ry(t){const e=await t();return e.status>=500&&e.status<600?t():e}function NC(t){return Number(t.replace("s","000"))}function xC(t){return`${Jm} ${t}`}/**
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
 */async function PC({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const s=ey(t),r=sy(t),i=e.getImmediate({optional:!0});if(i){const l=await i.getHeartbeatsHeader();l&&r.append("x-firebase-client",l)}const o={fid:n,authVersion:Jm,appId:t.appId,sdkVersion:Xm},a={method:"POST",headers:r,body:JSON.stringify(o)},c=await ry(()=>fetch(s,a));if(c.ok){const l=await c.json();return{fid:l.fid||n,registrationStatus:2,refreshToken:l.refreshToken,authToken:ty(l.authToken)}}else throw await ny("Create Installation",c)}/**
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
 */function iy(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function MC(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const LC=/^[cdef][\w-]{21}$/,Rl="";function UC(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=FC(t);return LC.test(n)?n:Rl}catch{return Rl}}function FC(t){return MC(t).substr(0,22)}/**
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
 */function Qa(t){return`${t.appName}!${t.appId}`}/**
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
 */const oy=new Map;function ay(t,e){const n=Qa(t);cy(n,e),VC(n,e)}function cy(t,e){const n=oy.get(t);if(!!n)for(const s of n)s(e)}function VC(t,e){const n=BC();n&&n.postMessage({key:t,fid:e}),$C()}let gs=null;function BC(){return!gs&&"BroadcastChannel"in self&&(gs=new BroadcastChannel("[Firebase] FID Change"),gs.onmessage=t=>{cy(t.data.key,t.data.fid)}),gs}function $C(){oy.size===0&&gs&&(gs.close(),gs=null)}/**
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
 */const jC="firebase-installations-database",HC=1,Ds="firebase-installations-store";let Bc=null;function Nu(){return Bc||(Bc=gm(jC,HC,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Ds)}}})),Bc}async function ia(t,e){const n=Qa(t),r=(await Nu()).transaction(Ds,"readwrite"),i=r.objectStore(Ds),o=await i.get(n);return await i.put(e,n),await r.done,(!o||o.fid!==e.fid)&&ay(t,e.fid),e}async function ly(t){const e=Qa(t),s=(await Nu()).transaction(Ds,"readwrite");await s.objectStore(Ds).delete(e),await s.done}async function Ya(t,e){const n=Qa(t),r=(await Nu()).transaction(Ds,"readwrite"),i=r.objectStore(Ds),o=await i.get(n),a=e(o);return a===void 0?await i.delete(n):await i.put(a,n),await r.done,a&&(!o||o.fid!==a.fid)&&ay(t,a.fid),a}/**
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
 */async function xu(t){let e;const n=await Ya(t.appConfig,s=>{const r=qC(s),i=KC(t,r);return e=i.registrationPromise,i.installationEntry});return n.fid===Rl?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function qC(t){const e=t||{fid:UC(),registrationStatus:0};return uy(e)}function KC(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const r=Promise.reject(Rs.create("app-offline"));return{installationEntry:e,registrationPromise:r}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},s=zC(t,n);return{installationEntry:n,registrationPromise:s}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:WC(t)}:{installationEntry:e}}async function zC(t,e){try{const n=await PC(t,e);return ia(t.appConfig,n)}catch(n){throw Zm(n)&&n.customData.serverCode===409?await ly(t.appConfig):await ia(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function WC(t){let e=await ud(t.appConfig);for(;e.registrationStatus===1;)await iy(100),e=await ud(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:s}=await xu(t);return s||n}return e}function ud(t){return Ya(t,e=>{if(!e)throw Rs.create("installation-not-found");return uy(e)})}function uy(t){return GC(t)?{fid:t.fid,registrationStatus:0}:t}function GC(t){return t.registrationStatus===1&&t.registrationTime+Ym<Date.now()}/**
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
 */async function QC({appConfig:t,heartbeatServiceProvider:e},n){const s=YC(t,n),r=OC(t,n),i=e.getImmediate({optional:!0});if(i){const l=await i.getHeartbeatsHeader();l&&r.append("x-firebase-client",l)}const o={installation:{sdkVersion:Xm,appId:t.appId}},a={method:"POST",headers:r,body:JSON.stringify(o)},c=await ry(()=>fetch(s,a));if(c.ok){const l=await c.json();return ty(l)}else throw await ny("Generate Auth Token",c)}function YC(t,{fid:e}){return`${ey(t)}/${e}/authTokens:generate`}/**
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
 */async function Pu(t,e=!1){let n;const s=await Ya(t.appConfig,i=>{if(!hy(i))throw Rs.create("not-registered");const o=i.authToken;if(!e&&ZC(o))return i;if(o.requestStatus===1)return n=XC(t,e),i;{if(!navigator.onLine)throw Rs.create("app-offline");const a=tA(i);return n=JC(t,a),a}});return n?await n:s.authToken}async function XC(t,e){let n=await hd(t.appConfig);for(;n.authToken.requestStatus===1;)await iy(100),n=await hd(t.appConfig);const s=n.authToken;return s.requestStatus===0?Pu(t,e):s}function hd(t){return Ya(t,e=>{if(!hy(e))throw Rs.create("not-registered");const n=e.authToken;return nA(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function JC(t,e){try{const n=await QC(t,e),s=Object.assign(Object.assign({},e),{authToken:n});return await ia(t.appConfig,s),n}catch(n){if(Zm(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await ly(t.appConfig);else{const s=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await ia(t.appConfig,s)}throw n}}function hy(t){return t!==void 0&&t.registrationStatus===2}function ZC(t){return t.requestStatus===2&&!eA(t)}function eA(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+AC}function tA(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function nA(t){return t.requestStatus===1&&t.requestTime+Ym<Date.now()}/**
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
 */async function sA(t){const e=t,{installationEntry:n,registrationPromise:s}=await xu(e);return s?s.catch(console.error):Pu(e).catch(console.error),n.fid}/**
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
 */async function rA(t,e=!1){const n=t;return await iA(n),(await Pu(n,e)).token}async function iA(t){const{registrationPromise:e}=await xu(t);e&&await e}/**
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
 */function oA(t){if(!t||!t.options)throw $c("App Configuration");if(!t.name)throw $c("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw $c(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function $c(t){return Rs.create("missing-app-config-values",{valueName:t})}/**
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
 */const fy="installations",aA="installations-internal",cA=t=>{const e=t.getProvider("app").getImmediate(),n=oA(e),s=is(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:s,_delete:()=>Promise.resolve()}},lA=t=>{const e=t.getProvider("app").getImmediate(),n=is(e,fy).getImmediate();return{getId:()=>sA(n),getToken:r=>rA(n,r)}};function uA(){Kt(new Ft(fy,cA,"PUBLIC")),Kt(new Ft(aA,lA,"PRIVATE"))}uA();_t(Qm,Ou);_t(Qm,Ou,"esm2017");/**
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
 */const oa="analytics",hA="firebase_id",fA="origin",dA=60*1e3,pA="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",dy="https://www.googletagmanager.com/gtag/js";/**
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
 */const Ct=new qa("@firebase/analytics");/**
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
 */function py(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function gA(t,e){const n=document.createElement("script");n.src=`${dy}?l=${t}&id=${e}`,n.async=!0,document.head.appendChild(n)}function mA(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function yA(t,e,n,s,r,i){const o=s[r];try{if(o)await e[o];else{const c=(await py(n)).find(l=>l.measurementId===r);c&&await e[c.appId]}}catch(a){Ct.error(a)}t("config",r,i)}async function vA(t,e,n,s,r){try{let i=[];if(r&&r.send_to){let o=r.send_to;Array.isArray(o)||(o=[o]);const a=await py(n);for(const c of o){const l=a.find(h=>h.measurementId===c),u=l&&e[l.appId];if(u)i.push(u);else{i=[];break}}}i.length===0&&(i=Object.values(e)),await Promise.all(i),t("event",s,r||{})}catch(i){Ct.error(i)}}function _A(t,e,n,s){async function r(i,o,a){try{i==="event"?await vA(t,e,n,o,a):i==="config"?await yA(t,e,n,s,o,a):i==="consent"?t("consent","update",a):t("set",o)}catch(c){Ct.error(c)}}return r}function wA(t,e,n,s,r){let i=function(...o){window[s].push(arguments)};return window[r]&&typeof window[r]=="function"&&(i=window[r]),window[r]=_A(i,t,e,n),{gtagCore:i,wrappedGtag:window[r]}}function bA(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(dy)&&n.src.includes(t))return n;return null}/**
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
 */const EA={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.'},Lt=new Ls("analytics","Analytics",EA);/**
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
 */const IA=30,TA=1e3;class SA{constructor(e={},n=TA){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const gy=new SA;function CA(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function AA(t){var e;const{appId:n,apiKey:s}=t,r={method:"GET",headers:CA(s)},i=pA.replace("{app-id}",n),o=await fetch(i,r);if(o.status!==200&&o.status!==304){let a="";try{const c=await o.json();!((e=c.error)===null||e===void 0)&&e.message&&(a=c.error.message)}catch{}throw Lt.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function kA(t,e=gy,n){const{appId:s,apiKey:r,measurementId:i}=t.options;if(!s)throw Lt.create("no-app-id");if(!r){if(i)return{measurementId:i,appId:s};throw Lt.create("no-api-key")}const o=e.getThrottleMetadata(s)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new OA;return setTimeout(async()=>{a.abort()},n!==void 0?n:dA),my({appId:s,apiKey:r,measurementId:i},o,a,e)}async function my(t,{throttleEndTimeMillis:e,backoffCount:n},s,r=gy){var i,o;const{appId:a,measurementId:c}=t;try{await RA(s,e)}catch(l){if(c)return Ct.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${c} provided in the "measurementId" field in the local Firebase config. [${(i=l)===null||i===void 0?void 0:i.message}]`),{appId:a,measurementId:c};throw l}try{const l=await AA(t);return r.deleteThrottleMetadata(a),l}catch(l){const u=l;if(!DA(u)){if(r.deleteThrottleMetadata(a),c)return Ct.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${c} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:a,measurementId:c};throw l}const h=Number((o=u==null?void 0:u.customData)===null||o===void 0?void 0:o.httpStatus)===503?Ff(n,r.intervalMillis,IA):Ff(n,r.intervalMillis),f={throttleEndTimeMillis:Date.now()+h,backoffCount:n+1};return r.setThrottleMetadata(a,f),Ct.debug(`Calling attemptFetch again in ${h} millis`),my(t,f,s,r)}}function RA(t,e){return new Promise((n,s)=>{const r=Math.max(e-Date.now(),0),i=setTimeout(n,r);t.addEventListener(()=>{clearTimeout(i),s(Lt.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function DA(t){if(!(t instanceof Vt)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class OA{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function NA(t,e,n,s,r){if(r&&r.global){t("event",n,s);return}else{const i=await e,o=Object.assign(Object.assign({},s),{send_to:i});t("event",n,o)}}/**
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
 */async function xA(){var t;if(am())try{await cm()}catch(e){return Ct.warn(Lt.create("indexeddb-unavailable",{errorInfo:(t=e)===null||t===void 0?void 0:t.toString()}).message),!1}else return Ct.warn(Lt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function PA(t,e,n,s,r,i,o){var a;const c=kA(t);c.then(d=>{n[d.measurementId]=d.appId,t.options.measurementId&&d.measurementId!==t.options.measurementId&&Ct.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${d.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(d=>Ct.error(d)),e.push(c);const l=xA().then(d=>{if(d)return s.getId()}),[u,h]=await Promise.all([c,l]);bA(i)||gA(i,u.measurementId),r("js",new Date);const f=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return f[fA]="firebase",f.update=!0,h!=null&&(f[hA]=h),r("config",u.measurementId,f),u.measurementId}/**
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
 */class MA{constructor(e){this.app=e}_delete(){return delete ni[this.app.options.appId],Promise.resolve()}}let ni={},fd=[];const dd={};let jc="dataLayer",LA="gtag",pd,yy,gd=!1;function UA(){const t=[];if(om()&&t.push("This is a browser extension environment."),J0()||t.push("Cookies are not available."),t.length>0){const e=t.map((s,r)=>`(${r+1}) ${s}`).join(" "),n=Lt.create("invalid-analytics-context",{errorInfo:e});Ct.warn(n.message)}}function FA(t,e,n){UA();const s=t.options.appId;if(!s)throw Lt.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)Ct.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Lt.create("no-api-key");if(ni[s]!=null)throw Lt.create("already-exists",{id:s});if(!gd){mA(jc);const{wrappedGtag:i,gtagCore:o}=wA(ni,fd,dd,jc,LA);yy=i,pd=o,gd=!0}return ni[s]=PA(t,fd,dd,e,pd,jc,n),new MA(t)}function VA(t=Ka()){t=Ge(t);const e=is(t,oa);return e.isInitialized()?e.getImmediate():BA(t)}function BA(t,e={}){const n=is(t,oa);if(n.isInitialized()){const r=n.getImmediate();if(yi(e,n.getOptions()))return r;throw Lt.create("already-initialized")}return n.initialize({options:e})}function $A(t,e,n,s){t=Ge(t),NA(yy,ni[t.app.options.appId],e,n,s).catch(r=>Ct.error(r))}const md="@firebase/analytics",yd="0.8.4";function jA(){Kt(new Ft(oa,(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("installations-internal").getImmediate();return FA(s,r,n)},"PUBLIC")),Kt(new Ft("analytics-internal",t,"PRIVATE")),_t(md,yd),_t(md,yd,"esm2017");function t(e){try{const n=e.getProvider(oa).getImmediate();return{logEvent:(s,r,i)=>$A(n,s,r,i)}}catch(n){throw Lt.create("interop-component-reg-failed",{reason:n})}}}jA();var HA=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},W,Mu=Mu||{},re=HA||self;function aa(){}function Xa(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Qi(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function qA(t){return Object.prototype.hasOwnProperty.call(t,Hc)&&t[Hc]||(t[Hc]=++KA)}var Hc="closure_uid_"+(1e9*Math.random()>>>0),KA=0;function zA(t,e,n){return t.call.apply(t.bind,arguments)}function WA(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,s),t.apply(e,r)}}return function(){return t.apply(e,arguments)}}function ct(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?ct=zA:ct=WA,ct.apply(null,arguments)}function To(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),t.apply(this,s)}}function tt(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(s,r,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[r].apply(s,o)}}function os(){this.s=this.s,this.o=this.o}var GA=0;os.prototype.s=!1;os.prototype.na=function(){!this.s&&(this.s=!0,this.M(),GA!=0)&&qA(this)};os.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const vy=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Lu(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function vd(t,e){for(let n=1;n<arguments.length;n++){const s=arguments[n];if(Xa(s)){const r=t.length||0,i=s.length||0;t.length=r+i;for(let o=0;o<i;o++)t[r+o]=s[o]}else t.push(s)}}function lt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}lt.prototype.h=function(){this.defaultPrevented=!0};var QA=function(){if(!re.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{re.addEventListener("test",aa,e),re.removeEventListener("test",aa,e)}catch{}return t}();function ca(t){return/^[\s\xa0]*$/.test(t)}var _d=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function qc(t,e){return t<e?-1:t>e?1:0}function Ja(){var t=re.navigator;return t&&(t=t.userAgent)?t:""}function Xt(t){return Ja().indexOf(t)!=-1}function Uu(t){return Uu[" "](t),t}Uu[" "]=aa;function YA(t){var e=ZA;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var XA=Xt("Opera"),gr=Xt("Trident")||Xt("MSIE"),_y=Xt("Edge"),Dl=_y||gr,wy=Xt("Gecko")&&!(Ja().toLowerCase().indexOf("webkit")!=-1&&!Xt("Edge"))&&!(Xt("Trident")||Xt("MSIE"))&&!Xt("Edge"),JA=Ja().toLowerCase().indexOf("webkit")!=-1&&!Xt("Edge");function by(){var t=re.document;return t?t.documentMode:void 0}var la;e:{var Kc="",zc=function(){var t=Ja();if(wy)return/rv:([^\);]+)(\)|;)/.exec(t);if(_y)return/Edge\/([\d\.]+)/.exec(t);if(gr)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(JA)return/WebKit\/(\S+)/.exec(t);if(XA)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(zc&&(Kc=zc?zc[1]:""),gr){var Wc=by();if(Wc!=null&&Wc>parseFloat(Kc)){la=String(Wc);break e}}la=Kc}var ZA={};function ek(){return YA(function(){let t=0;const e=_d(String(la)).split("."),n=_d("9").split("."),s=Math.max(e.length,n.length);for(let o=0;t==0&&o<s;o++){var r=e[o]||"",i=n[o]||"";do{if(r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r[0].length==0&&i[0].length==0)break;t=qc(r[1].length==0?0:parseInt(r[1],10),i[1].length==0?0:parseInt(i[1],10))||qc(r[2].length==0,i[2].length==0)||qc(r[2],i[2]),r=r[3],i=i[3]}while(t==0)}return 0<=t})}var Ol;if(re.document&&gr){var wd=by();Ol=wd||parseInt(la,10)||void 0}else Ol=void 0;var tk=Ol;function Ei(t,e){if(lt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(wy){e:{try{Uu(e.nodeName);var r=!0;break e}catch{}r=!1}r||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:nk[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Ei.X.h.call(this)}}tt(Ei,lt);var nk={2:"touch",3:"pen",4:"mouse"};Ei.prototype.h=function(){Ei.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Yi="closure_listenable_"+(1e6*Math.random()|0),sk=0;function rk(t,e,n,s,r){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.ha=r,this.key=++sk,this.ba=this.ea=!1}function Za(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function Fu(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function Ey(t){const e={};for(const n in t)e[n]=t[n];return e}const bd="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Iy(t,e){let n,s;for(let r=1;r<arguments.length;r++){s=arguments[r];for(n in s)t[n]=s[n];for(let i=0;i<bd.length;i++)n=bd[i],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function ec(t){this.src=t,this.g={},this.h=0}ec.prototype.add=function(t,e,n,s,r){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=xl(t,e,s,r);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new rk(e,this.src,i,!!s,r),e.ea=n,t.push(e)),e};function Nl(t,e){var n=e.type;if(n in t.g){var s=t.g[n],r=vy(s,e),i;(i=0<=r)&&Array.prototype.splice.call(s,r,1),i&&(Za(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function xl(t,e,n,s){for(var r=0;r<t.length;++r){var i=t[r];if(!i.ba&&i.listener==e&&i.capture==!!n&&i.ha==s)return r}return-1}var Vu="closure_lm_"+(1e6*Math.random()|0),Gc={};function Ty(t,e,n,s,r){if(s&&s.once)return Cy(t,e,n,s,r);if(Array.isArray(e)){for(var i=0;i<e.length;i++)Ty(t,e[i],n,s,r);return null}return n=ju(n),t&&t[Yi]?t.N(e,n,Qi(s)?!!s.capture:!!s,r):Sy(t,e,n,!1,s,r)}function Sy(t,e,n,s,r,i){if(!e)throw Error("Invalid event type");var o=Qi(r)?!!r.capture:!!r,a=$u(t);if(a||(t[Vu]=a=new ec(t)),n=a.add(e,n,s,o,i),n.proxy)return n;if(s=ik(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)QA||(r=o),r===void 0&&(r=!1),t.addEventListener(e.toString(),s,r);else if(t.attachEvent)t.attachEvent(ky(e.toString()),s);else if(t.addListener&&t.removeListener)t.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function ik(){function t(n){return e.call(t.src,t.listener,n)}const e=ok;return t}function Cy(t,e,n,s,r){if(Array.isArray(e)){for(var i=0;i<e.length;i++)Cy(t,e[i],n,s,r);return null}return n=ju(n),t&&t[Yi]?t.O(e,n,Qi(s)?!!s.capture:!!s,r):Sy(t,e,n,!0,s,r)}function Ay(t,e,n,s,r){if(Array.isArray(e))for(var i=0;i<e.length;i++)Ay(t,e[i],n,s,r);else s=Qi(s)?!!s.capture:!!s,n=ju(n),t&&t[Yi]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=xl(i,n,s,r),-1<n&&(Za(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=$u(t))&&(e=t.g[e.toString()],t=-1,e&&(t=xl(e,n,s,r)),(n=-1<t?e[t]:null)&&Bu(n))}function Bu(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[Yi])Nl(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(ky(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=$u(e))?(Nl(n,t),n.h==0&&(n.src=null,e[Vu]=null)):Za(t)}}}function ky(t){return t in Gc?Gc[t]:Gc[t]="on"+t}function ok(t,e){if(t.ba)t=!0;else{e=new Ei(e,this);var n=t.listener,s=t.ha||t.src;t.ea&&Bu(t),t=n.call(s,e)}return t}function $u(t){return t=t[Vu],t instanceof ec?t:null}var Qc="__closure_events_fn_"+(1e9*Math.random()>>>0);function ju(t){return typeof t=="function"?t:(t[Qc]||(t[Qc]=function(e){return t.handleEvent(e)}),t[Qc])}function Qe(){os.call(this),this.i=new ec(this),this.P=this,this.I=null}tt(Qe,os);Qe.prototype[Yi]=!0;Qe.prototype.removeEventListener=function(t,e,n,s){Ay(this,t,e,n,s)};function et(t,e){var n,s=t.I;if(s)for(n=[];s;s=s.I)n.push(s);if(t=t.P,s=e.type||e,typeof e=="string")e=new lt(e,t);else if(e instanceof lt)e.target=e.target||t;else{var r=e;e=new lt(s,t),Iy(e,r)}if(r=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];r=So(o,s,!0,e)&&r}if(o=e.g=t,r=So(o,s,!0,e)&&r,r=So(o,s,!1,e)&&r,n)for(i=0;i<n.length;i++)o=e.g=n[i],r=So(o,s,!1,e)&&r}Qe.prototype.M=function(){if(Qe.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)Za(n[s]);delete t.g[e],t.h--}}this.I=null};Qe.prototype.N=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)};Qe.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};function So(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var r=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.ba&&o.capture==n){var a=o.listener,c=o.ha||o.src;o.ea&&Nl(t.i,o),r=a.call(c,s)!==!1&&r}}return r&&!s.defaultPrevented}var Hu=re.JSON.stringify;function ak(){var t=Oy;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class ck{constructor(){this.h=this.g=null}add(e,n){const s=Ry.get();s.set(e,n),this.h?this.h.next=s:this.g=s,this.h=s}}var Ry=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new lk,t=>t.reset());class lk{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function uk(t){re.setTimeout(()=>{throw t},0)}function Dy(t,e){Pl||hk(),Ml||(Pl(),Ml=!0),Oy.add(t,e)}var Pl;function hk(){var t=re.Promise.resolve(void 0);Pl=function(){t.then(fk)}}var Ml=!1,Oy=new ck;function fk(){for(var t;t=ak();){try{t.h.call(t.g)}catch(n){uk(n)}var e=Ry;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Ml=!1}function tc(t,e){Qe.call(this),this.h=t||1,this.g=e||re,this.j=ct(this.lb,this),this.l=Date.now()}tt(tc,Qe);W=tc.prototype;W.ca=!1;W.R=null;W.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),et(this,"tick"),this.ca&&(qu(this),this.start()))}};W.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function qu(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}W.M=function(){tc.X.M.call(this),qu(this),delete this.g};function Ku(t,e,n){if(typeof t=="function")n&&(t=ct(t,n));else if(t&&typeof t.handleEvent=="function")t=ct(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:re.setTimeout(t,e||0)}function Ny(t){t.g=Ku(()=>{t.g=null,t.i&&(t.i=!1,Ny(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class dk extends os{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Ny(this)}M(){super.M(),this.g&&(re.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ii(t){os.call(this),this.h=t,this.g={}}tt(Ii,os);var Ed=[];function xy(t,e,n,s){Array.isArray(n)||(n&&(Ed[0]=n.toString()),n=Ed);for(var r=0;r<n.length;r++){var i=Ty(e,n[r],s||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function Py(t){Fu(t.g,function(e,n){this.g.hasOwnProperty(n)&&Bu(e)},t),t.g={}}Ii.prototype.M=function(){Ii.X.M.call(this),Py(this)};Ii.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function nc(){this.g=!0}nc.prototype.Aa=function(){this.g=!1};function pk(t,e,n,s,r,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+s+") [attempt "+r+"]: "+e+`
`+n+`
`+o})}function gk(t,e,n,s,r,i,o){t.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+r+"]: "+e+`
`+n+`
`+i+" "+o})}function Ws(t,e,n,s){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+yk(t,n)+(s?" "+s:"")})}function mk(t,e){t.info(function(){return"TIMEOUT: "+e})}nc.prototype.info=function(){};function yk(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var r=s[1];if(Array.isArray(r)&&!(1>r.length)){var i=r[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<r.length;o++)r[o]=""}}}}return Hu(n)}catch{return e}}var Us={},Id=null;function sc(){return Id=Id||new Qe}Us.Pa="serverreachability";function My(t){lt.call(this,Us.Pa,t)}tt(My,lt);function Ti(t){const e=sc();et(e,new My(e))}Us.STAT_EVENT="statevent";function Ly(t,e){lt.call(this,Us.STAT_EVENT,t),this.stat=e}tt(Ly,lt);function dt(t){const e=sc();et(e,new Ly(e,t))}Us.Qa="timingevent";function Uy(t,e){lt.call(this,Us.Qa,t),this.size=e}tt(Uy,lt);function Xi(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return re.setTimeout(function(){t()},e)}var rc={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},Fy={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function zu(){}zu.prototype.h=null;function Td(t){return t.h||(t.h=t.i())}function Vy(){}var Ji={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function Wu(){lt.call(this,"d")}tt(Wu,lt);function Gu(){lt.call(this,"c")}tt(Gu,lt);var Ll;function ic(){}tt(ic,zu);ic.prototype.g=function(){return new XMLHttpRequest};ic.prototype.i=function(){return{}};Ll=new ic;function Zi(t,e,n,s){this.l=t,this.j=e,this.m=n,this.U=s||1,this.S=new Ii(this),this.O=vk,t=Dl?125:void 0,this.T=new tc(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new By}function By(){this.i=null,this.g="",this.h=!1}var vk=45e3,Ul={},ua={};W=Zi.prototype;W.setTimeout=function(t){this.O=t};function Fl(t,e,n){t.K=1,t.v=ac(Tn(e)),t.s=n,t.P=!0,$y(t,null)}function $y(t,e){t.F=Date.now(),eo(t),t.A=Tn(t.v);var n=t.A,s=t.U;Array.isArray(s)||(s=[String(s)]),Qy(n.i,"t",s),t.C=0,n=t.l.H,t.h=new By,t.g=mv(t.l,n?e:null,!t.s),0<t.N&&(t.L=new dk(ct(t.La,t,t.g),t.N)),xy(t.S,t.g,"readystatechange",t.ib),e=t.H?Ey(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),Ti(),pk(t.j,t.u,t.A,t.m,t.U,t.s)}W.ib=function(t){t=t.target;const e=this.L;e&&yn(t)==3?e.l():this.La(t)};W.La=function(t){try{if(t==this.g)e:{const u=yn(this.g);var e=this.g.Ea();const h=this.g.aa();if(!(3>u)&&(u!=3||Dl||this.g&&(this.h.h||this.g.fa()||kd(this.g)))){this.I||u!=4||e==7||(e==8||0>=h?Ti(3):Ti(2)),oc(this);var n=this.g.aa();this.Y=n;t:if(jy(this)){var s=kd(this.g);t="";var r=s.length,i=yn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ms(this),si(this);var o="";break t}this.h.i=new re.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:i&&e==r-1});s.splice(0,r),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,gk(this.j,this.u,this.A,this.m,this.U,u,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ca(a)){var l=a;break t}}l=null}if(n=l)Ws(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Vl(this,n);else{this.i=!1,this.o=3,dt(12),ms(this),si(this);break e}}this.P?(Hy(this,u,o),Dl&&this.i&&u==3&&(xy(this.S,this.T,"tick",this.hb),this.T.start())):(Ws(this.j,this.m,o,null),Vl(this,o)),u==4&&ms(this),this.i&&!this.I&&(u==4?fv(this.l,this):(this.i=!1,eo(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,dt(12)):(this.o=0,dt(13)),ms(this),si(this)}}}catch{}finally{}};function jy(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function Hy(t,e,n){let s=!0,r;for(;!t.I&&t.C<n.length;)if(r=_k(t,n),r==ua){e==4&&(t.o=4,dt(14),s=!1),Ws(t.j,t.m,null,"[Incomplete Response]");break}else if(r==Ul){t.o=4,dt(15),Ws(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}else Ws(t.j,t.m,r,null),Vl(t,r);jy(t)&&r!=ua&&r!=Ul&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,dt(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),th(e),e.K=!0,dt(11))):(Ws(t.j,t.m,n,"[Invalid Chunked Response]"),ms(t),si(t))}W.hb=function(){if(this.g){var t=yn(this.g),e=this.g.fa();this.C<e.length&&(oc(this),Hy(this,t,e),this.i&&t!=4&&eo(this))}};function _k(t,e){var n=t.C,s=e.indexOf(`
`,n);return s==-1?ua:(n=Number(e.substring(n,s)),isNaN(n)?Ul:(s+=1,s+n>e.length?ua:(e=e.substr(s,n),t.C=s+n,e)))}W.cancel=function(){this.I=!0,ms(this)};function eo(t){t.V=Date.now()+t.O,qy(t,t.O)}function qy(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Xi(ct(t.gb,t),e)}function oc(t){t.B&&(re.clearTimeout(t.B),t.B=null)}W.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(mk(this.j,this.A),this.K!=2&&(Ti(),dt(17)),ms(this),this.o=2,si(this)):qy(this,this.V-t)};function si(t){t.l.G==0||t.I||fv(t.l,t)}function ms(t){oc(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,qu(t.T),Py(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Vl(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||Bl(n.h,t))){if(!t.J&&Bl(n.h,t)&&n.G==3){try{var s=n.Fa.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var r=s;if(r[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)da(n),uc(n);else break e;eh(n),dt(18)}}else n.Ba=r[1],0<n.Ba-n.T&&37500>r[2]&&n.L&&n.A==0&&!n.v&&(n.v=Xi(ct(n.cb,n),6e3));if(1>=Jy(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else ys(n,11)}else if((t.J||n.g==t)&&da(n),!ca(e))for(r=n.Fa.g.parse(e),e=0;e<r.length;e++){let l=r[e];if(n.T=l[0],l=l[1],n.G==2)if(l[0]=="c"){n.I=l[1],n.ka=l[2];const u=l[3];u!=null&&(n.ma=u,n.j.info("VER="+n.ma));const h=l[4];h!=null&&(n.Ca=h,n.j.info("SVER="+n.Ca));const f=l[5];f!=null&&typeof f=="number"&&0<f&&(s=1.5*f,n.J=s,n.j.info("backChannelRequestTimeoutMs_="+s)),s=n;const d=t.g;if(d){const m=d.g?d.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(m){var i=s.h;i.g||m.indexOf("spdy")==-1&&m.indexOf("quic")==-1&&m.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(Qu(i,i.h),i.h=null))}if(s.D){const E=d.g?d.g.getResponseHeader("X-HTTP-Session-Id"):null;E&&(s.za=E,Ne(s.F,s.D,E))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),s=n;var o=t;if(s.sa=gv(s,s.H?s.ka:null,s.V),o.J){Zy(s.h,o);var a=o,c=s.J;c&&a.setTimeout(c),a.B&&(oc(a),eo(a)),s.g=o}else uv(s);0<n.i.length&&hc(n)}else l[0]!="stop"&&l[0]!="close"||ys(n,7);else n.G==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?ys(n,7):Zu(n):l[0]!="noop"&&n.l&&n.l.wa(l),n.A=0)}}Ti(4)}catch{}}function wk(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Xa(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}e=[],n=0;for(s in t)e[n++]=t[s];return e}function bk(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Xa(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const s in t)e[n++]=s;return e}}}function Ky(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Xa(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=bk(t),s=wk(t),r=s.length,i=0;i<r;i++)e.call(void 0,s[i],n&&n[i],t)}var zy=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Ek(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),r=null;if(0<=s){var i=t[n].substring(0,s);r=t[n].substring(s+1)}else i=t[n];e(i,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function Es(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Es){this.h=e!==void 0?e:t.h,ha(this,t.j),this.s=t.s,this.g=t.g,fa(this,t.m),this.l=t.l,e=t.i;var n=new Si;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Sd(this,n),this.o=t.o}else t&&(n=String(t).match(zy))?(this.h=!!e,ha(this,n[1]||"",!0),this.s=Hr(n[2]||""),this.g=Hr(n[3]||"",!0),fa(this,n[4]),this.l=Hr(n[5]||"",!0),Sd(this,n[6]||"",!0),this.o=Hr(n[7]||"")):(this.h=!!e,this.i=new Si(null,this.h))}Es.prototype.toString=function(){var t=[],e=this.j;e&&t.push(qr(e,Cd,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(qr(e,Cd,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(qr(n,n.charAt(0)=="/"?Sk:Tk,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",qr(n,Ak)),t.join("")};function Tn(t){return new Es(t)}function ha(t,e,n){t.j=n?Hr(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function fa(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Sd(t,e,n){e instanceof Si?(t.i=e,kk(t.i,t.h)):(n||(e=qr(e,Ck)),t.i=new Si(e,t.h))}function Ne(t,e,n){t.i.set(e,n)}function ac(t){return Ne(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Hr(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function qr(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,Ik),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function Ik(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Cd=/[#\/\?@]/g,Tk=/[#\?:]/g,Sk=/[#\?]/g,Ck=/[#\?@]/g,Ak=/#/g;function Si(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function as(t){t.g||(t.g=new Map,t.h=0,t.i&&Ek(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}W=Si.prototype;W.add=function(t,e){as(this),this.i=null,t=Ar(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function Wy(t,e){as(t),e=Ar(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function Gy(t,e){return as(t),e=Ar(t,e),t.g.has(e)}W.forEach=function(t,e){as(this),this.g.forEach(function(n,s){n.forEach(function(r){t.call(e,r,s,this)},this)},this)};W.oa=function(){as(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let s=0;s<e.length;s++){const r=t[s];for(let i=0;i<r.length;i++)n.push(e[s])}return n};W.W=function(t){as(this);let e=[];if(typeof t=="string")Gy(this,t)&&(e=e.concat(this.g.get(Ar(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};W.set=function(t,e){return as(this),this.i=null,t=Ar(this,t),Gy(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};W.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function Qy(t,e,n){Wy(t,e),0<n.length&&(t.i=null,t.g.set(Ar(t,e),Lu(n)),t.h+=n.length)}W.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var s=e[n];const i=encodeURIComponent(String(s)),o=this.W(s);for(s=0;s<o.length;s++){var r=i;o[s]!==""&&(r+="="+encodeURIComponent(String(o[s]))),t.push(r)}}return this.i=t.join("&")};function Ar(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function kk(t,e){e&&!t.j&&(as(t),t.i=null,t.g.forEach(function(n,s){var r=s.toLowerCase();s!=r&&(Wy(this,s),Qy(this,r,n))},t)),t.j=e}var Rk=class{constructor(t,e){this.h=t,this.g=e}};function Yy(t){this.l=t||Dk,re.PerformanceNavigationTiming?(t=re.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(re.g&&re.g.Ga&&re.g.Ga()&&re.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Dk=10;function Xy(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Jy(t){return t.h?1:t.g?t.g.size:0}function Bl(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Qu(t,e){t.g?t.g.add(e):t.h=e}function Zy(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}Yy.prototype.cancel=function(){if(this.i=ev(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function ev(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return Lu(t.i)}function Yu(){}Yu.prototype.stringify=function(t){return re.JSON.stringify(t,void 0)};Yu.prototype.parse=function(t){return re.JSON.parse(t,void 0)};function Ok(){this.g=new Yu}function Nk(t,e,n){const s=n||"";try{Ky(t,function(r,i){let o=r;Qi(r)&&(o=Hu(r)),e.push(s+i+"="+encodeURIComponent(o))})}catch(r){throw e.push(s+"type="+encodeURIComponent("_badmap")),r}}function xk(t,e){const n=new nc;if(re.Image){const s=new Image;s.onload=To(Co,n,s,"TestLoadImage: loaded",!0,e),s.onerror=To(Co,n,s,"TestLoadImage: error",!1,e),s.onabort=To(Co,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=To(Co,n,s,"TestLoadImage: timeout",!1,e),re.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=t}else e(!1)}function Co(t,e,n,s,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(s)}catch{}}function to(t){this.l=t.ac||null,this.j=t.jb||!1}tt(to,zu);to.prototype.g=function(){return new cc(this.l,this.j)};to.prototype.i=function(t){return function(){return t}}({});function cc(t,e){Qe.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Xu,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}tt(cc,Qe);var Xu=0;W=cc.prototype;W.open=function(t,e){if(this.readyState!=Xu)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Ci(this)};W.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||re).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};W.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,no(this)),this.readyState=Xu};W.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Ci(this)),this.g&&(this.readyState=3,Ci(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof re.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;tv(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))};function tv(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}W.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?no(this):Ci(this),this.readyState==3&&tv(this)}};W.Va=function(t){this.g&&(this.response=this.responseText=t,no(this))};W.Ua=function(t){this.g&&(this.response=t,no(this))};W.ga=function(){this.g&&no(this)};function no(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Ci(t)}W.setRequestHeader=function(t,e){this.v.append(t,e)};W.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};W.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Ci(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(cc.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var Pk=re.JSON.parse;function Ue(t){Qe.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=nv,this.K=this.L=!1}tt(Ue,Qe);var nv="",Mk=/^https?$/i,Lk=["POST","PUT"];W=Ue.prototype;W.Ka=function(t){this.L=t};W.da=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Ll.g(),this.C=this.u?Td(this.u):Td(Ll),this.g.onreadystatechange=ct(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(i){Ad(this,i);return}if(t=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var r in s)n.set(r,s[r]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const i of s.keys())n.set(i,s.get(i));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),r=re.FormData&&t instanceof re.FormData,!(0<=vy(Lk,e))||s||r||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{iv(this),0<this.B&&((this.K=Uk(this.g))?(this.g.timeout=this.B,this.g.ontimeout=ct(this.qa,this)):this.A=Ku(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){Ad(this,i)}};function Uk(t){return gr&&ek()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}W.qa=function(){typeof Mu<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,et(this,"timeout"),this.abort(8))};function Ad(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,sv(t),lc(t)}function sv(t){t.D||(t.D=!0,et(t,"complete"),et(t,"error"))}W.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,et(this,"complete"),et(this,"abort"),lc(this))};W.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),lc(this,!0)),Ue.X.M.call(this)};W.Ha=function(){this.s||(this.F||this.v||this.l?rv(this):this.fb())};W.fb=function(){rv(this)};function rv(t){if(t.h&&typeof Mu<"u"&&(!t.C[1]||yn(t)!=4||t.aa()!=2)){if(t.v&&yn(t)==4)Ku(t.Ha,0,t);else if(et(t,"readystatechange"),yn(t)==4){t.h=!1;try{const a=t.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var s;if(s=a===0){var r=String(t.H).match(zy)[1]||null;if(!r&&re.self&&re.self.location){var i=re.self.location.protocol;r=i.substr(0,i.length-1)}s=!Mk.test(r?r.toLowerCase():"")}n=s}if(n)et(t,"complete"),et(t,"success");else{t.m=6;try{var o=2<yn(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",sv(t)}}finally{lc(t)}}}}function lc(t,e){if(t.g){iv(t);const n=t.g,s=t.C[0]?aa:null;t.g=null,t.C=null,e||et(t,"ready");try{n.onreadystatechange=s}catch{}}}function iv(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(re.clearTimeout(t.A),t.A=null)}function yn(t){return t.g?t.g.readyState:0}W.aa=function(){try{return 2<yn(this)?this.g.status:-1}catch{return-1}};W.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};W.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),Pk(e)}};function kd(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case nv:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}W.Ea=function(){return this.m};W.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function ov(t){let e="";return Fu(t,function(n,s){e+=s,e+=":",e+=n,e+=`\r
`}),e}function Ju(t,e,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=ov(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Ne(t,e,n))}function Fr(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function av(t){this.Ca=0,this.i=[],this.j=new nc,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=Fr("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=Fr("baseRetryDelayMs",5e3,t),this.bb=Fr("retryDelaySeedMs",1e4,t),this.$a=Fr("forwardChannelMaxRetries",2,t),this.ta=Fr("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new Yy(t&&t.concurrentRequestLimit),this.Fa=new Ok,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}W=av.prototype;W.ma=8;W.G=1;function Zu(t){if(cv(t),t.G==3){var e=t.U++,n=Tn(t.F);Ne(n,"SID",t.I),Ne(n,"RID",e),Ne(n,"TYPE","terminate"),so(t,n),e=new Zi(t,t.j,e,void 0),e.K=2,e.v=ac(Tn(n)),n=!1,re.navigator&&re.navigator.sendBeacon&&(n=re.navigator.sendBeacon(e.v.toString(),"")),!n&&re.Image&&(new Image().src=e.v,n=!0),n||(e.g=mv(e.l,null),e.g.da(e.v)),e.F=Date.now(),eo(e)}pv(t)}function uc(t){t.g&&(th(t),t.g.cancel(),t.g=null)}function cv(t){uc(t),t.u&&(re.clearTimeout(t.u),t.u=null),da(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&re.clearTimeout(t.m),t.m=null)}function hc(t){Xy(t.h)||t.m||(t.m=!0,Dy(t.Ja,t),t.C=0)}function Fk(t,e){return Jy(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Za?0:t.$a)?!1:(t.m=Xi(ct(t.Ja,t,e),dv(t,t.C)),t.C++,!0)}W.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const r=new Zi(this,this.j,t,void 0);let i=this.s;if(this.S&&(i?(i=Ey(i),Iy(i,this.S)):i=this.S),this.o!==null||this.N||(r.H=i,i=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var s=this.i[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=lv(this,r,e),n=Tn(this.F),Ne(n,"RID",t),Ne(n,"CVER",22),this.D&&Ne(n,"X-HTTP-Session-Id",this.D),so(this,n),i&&(this.N?e="headers="+encodeURIComponent(String(ov(i)))+"&"+e:this.o&&Ju(n,this.o,i)),Qu(this.h,r),this.Ya&&Ne(n,"TYPE","init"),this.O?(Ne(n,"$req",e),Ne(n,"SID","null"),r.Z=!0,Fl(r,n,null)):Fl(r,n,e),this.G=2}}else this.G==3&&(t?Rd(this,t):this.i.length==0||Xy(this.h)||Rd(this))};function Rd(t,e){var n;e?n=e.m:n=t.U++;const s=Tn(t.F);Ne(s,"SID",t.I),Ne(s,"RID",n),Ne(s,"AID",t.T),so(t,s),t.o&&t.s&&Ju(s,t.o,t.s),n=new Zi(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=lv(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),Qu(t.h,n),Fl(n,s,e)}function so(t,e){t.ia&&Fu(t.ia,function(n,s){Ne(e,s,n)}),t.l&&Ky({},function(n,s){Ne(e,s,n)})}function lv(t,e,n){n=Math.min(t.i.length,n);var s=t.l?ct(t.l.Ra,t.l,t):null;e:{var r=t.i;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=r[0].h,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let l=r[c].h;const u=r[c].g;if(l-=i,0>l)i=Math.max(0,r[c].h-100),a=!1;else try{Nk(u,o,"req"+l+"_")}catch{s&&s(u)}}if(a){s=o.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,s}function uv(t){t.g||t.u||(t.Z=1,Dy(t.Ia,t),t.A=0)}function eh(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=Xi(ct(t.Ia,t),dv(t,t.A)),t.A++,!0)}W.Ia=function(){if(this.u=null,hv(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=Xi(ct(this.eb,this),t)}};W.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,dt(10),uc(this),hv(this))};function th(t){t.B!=null&&(re.clearTimeout(t.B),t.B=null)}function hv(t){t.g=new Zi(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=Tn(t.sa);Ne(e,"RID","rpc"),Ne(e,"SID",t.I),Ne(e,"CI",t.L?"0":"1"),Ne(e,"AID",t.T),Ne(e,"TYPE","xmlhttp"),so(t,e),t.o&&t.s&&Ju(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=ac(Tn(e)),n.s=null,n.P=!0,$y(n,t)}W.cb=function(){this.v!=null&&(this.v=null,uc(this),eh(this),dt(19))};function da(t){t.v!=null&&(re.clearTimeout(t.v),t.v=null)}function fv(t,e){var n=null;if(t.g==e){da(t),th(t),t.g=null;var s=2}else if(Bl(t.h,e))n=e.D,Zy(t.h,e),s=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(s==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var r=t.C;s=sc(),et(s,new Uy(s,n)),hc(t)}else uv(t);else if(r=e.o,r==3||r==0&&0<t.pa||!(s==1&&Fk(t,e)||s==2&&eh(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),r){case 1:ys(t,5);break;case 4:ys(t,10);break;case 3:ys(t,6);break;default:ys(t,2)}}}function dv(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function ys(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var s=ct(t.kb,t);n||(n=new Es("//www.google.com/images/cleardot.gif"),re.location&&re.location.protocol=="http"||ha(n,"https"),ac(n)),xk(n.toString(),s)}else dt(2);t.G=0,t.l&&t.l.va(e),pv(t),cv(t)}W.kb=function(t){t?(this.j.info("Successfully pinged google.com"),dt(2)):(this.j.info("Failed to ping google.com"),dt(1))};function pv(t){if(t.G=0,t.la=[],t.l){const e=ev(t.h);(e.length!=0||t.i.length!=0)&&(vd(t.la,e),vd(t.la,t.i),t.h.i.length=0,Lu(t.i),t.i.length=0),t.l.ua()}}function gv(t,e,n){var s=n instanceof Es?Tn(n):new Es(n,void 0);if(s.g!="")e&&(s.g=e+"."+s.g),fa(s,s.m);else{var r=re.location;s=r.protocol,e=e?e+"."+r.hostname:r.hostname,r=+r.port;var i=new Es(null,void 0);s&&ha(i,s),e&&(i.g=e),r&&fa(i,r),n&&(i.l=n),s=i}return n=t.D,e=t.za,n&&e&&Ne(s,n,e),Ne(s,"VER",t.ma),so(t,s),s}function mv(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new Ue(new to({jb:!0})):new Ue(t.ra),e.Ka(t.H),e}function yv(){}W=yv.prototype;W.xa=function(){};W.wa=function(){};W.va=function(){};W.ua=function(){};W.Ra=function(){};function pa(){if(gr&&!(10<=Number(tk)))throw Error("Environmental error: no available transport.")}pa.prototype.g=function(t,e){return new Rt(t,e)};function Rt(t,e){Qe.call(this),this.g=new av(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!ca(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!ca(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new kr(this)}tt(Rt,Qe);Rt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;dt(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=gv(t,null,t.V),hc(t)};Rt.prototype.close=function(){Zu(this.g)};Rt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Hu(t),t=n);e.i.push(new Rk(e.ab++,t)),e.G==3&&hc(e)};Rt.prototype.M=function(){this.g.l=null,delete this.j,Zu(this.g),delete this.g,Rt.X.M.call(this)};function vv(t){Wu.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}tt(vv,Wu);function _v(){Gu.call(this),this.status=1}tt(_v,Gu);function kr(t){this.g=t}tt(kr,yv);kr.prototype.xa=function(){et(this.g,"a")};kr.prototype.wa=function(t){et(this.g,new vv(t))};kr.prototype.va=function(t){et(this.g,new _v)};kr.prototype.ua=function(){et(this.g,"b")};pa.prototype.createWebChannel=pa.prototype.g;Rt.prototype.send=Rt.prototype.u;Rt.prototype.open=Rt.prototype.m;Rt.prototype.close=Rt.prototype.close;rc.NO_ERROR=0;rc.TIMEOUT=8;rc.HTTP_ERROR=6;Fy.COMPLETE="complete";Vy.EventType=Ji;Ji.OPEN="a";Ji.CLOSE="b";Ji.ERROR="c";Ji.MESSAGE="d";Qe.prototype.listen=Qe.prototype.N;Ue.prototype.listenOnce=Ue.prototype.O;Ue.prototype.getLastError=Ue.prototype.Oa;Ue.prototype.getLastErrorCode=Ue.prototype.Ea;Ue.prototype.getStatus=Ue.prototype.aa;Ue.prototype.getResponseJson=Ue.prototype.Sa;Ue.prototype.getResponseText=Ue.prototype.fa;Ue.prototype.send=Ue.prototype.da;Ue.prototype.setWithCredentials=Ue.prototype.Ka;var Vk=function(){return new pa},Bk=function(){return sc()},Yc=rc,$k=Fy,jk=Us,Dd={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},Hk=to,Ao=Vy,qk=Ue;const Od="@firebase/firestore";/**
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
 */class st{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}st.UNAUTHENTICATED=new st(null),st.GOOGLE_CREDENTIALS=new st("google-credentials-uid"),st.FIRST_PARTY=new st("first-party-uid"),st.MOCK_USER=new st("mock-user");/**
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
 */let Rr="9.14.0";/**
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
 */const Os=new qa("@firebase/firestore");function Nd(){return Os.logLevel}function Q(t,...e){if(Os.logLevel<=_e.DEBUG){const n=e.map(nh);Os.debug(`Firestore (${Rr}): ${t}`,...n)}}function Sn(t,...e){if(Os.logLevel<=_e.ERROR){const n=e.map(nh);Os.error(`Firestore (${Rr}): ${t}`,...n)}}function $l(t,...e){if(Os.logLevel<=_e.WARN){const n=e.map(nh);Os.warn(`Firestore (${Rr}): ${t}`,...n)}}function nh(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
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
*/var e}/**
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
 */function oe(t="Unexpected state"){const e=`FIRESTORE (${Rr}) INTERNAL ASSERTION FAILED: `+t;throw Sn(e),new Error(e)}function De(t,e){t||oe()}function ae(t,e){return t}/**
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
 */const x={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class J extends Vt{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class _n{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class wv{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Kk{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(st.UNAUTHENTICATED))}shutdown(){}}class zk{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class Wk{constructor(e){this.t=e,this.currentUser=st.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let s=this.i;const r=c=>this.i!==s?(s=this.i,n(c)):Promise.resolve();let i=new _n;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new _n,e.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await r(this.currentUser)})},a=c=>{Q("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(Q("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new _n)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(Q("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(De(typeof s.accessToken=="string"),new wv(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return De(e===null||typeof e=="string"),new st(e)}}class Gk{constructor(e,n,s,r){this.h=e,this.l=n,this.m=s,this.g=r,this.type="FirstParty",this.user=st.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(De(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class Qk{constructor(e,n,s,r){this.h=e,this.l=n,this.m=s,this.g=r}getToken(){return Promise.resolve(new Gk(this.h,this.l,this.m,this.g))}start(e,n){e.enqueueRetryable(()=>n(st.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Yk{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Xk{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,n){const s=i=>{i.error!=null&&Q("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.A;return this.A=i.token,Q("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>s(i))};const r=i=>{Q("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.T.onInit(i=>r(i)),setTimeout(()=>{if(!this.appCheck){const i=this.T.getImmediate({optional:!0});i?r(i):Q("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(De(typeof n.token=="string"),this.A=n.token,new Yk(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function Jk(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
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
 */class bv{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const r=Jk(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<n&&(s+=e.charAt(r[i]%e.length))}return s}}function be(t,e){return t<e?-1:t>e?1:0}function mr(t,e,n){return t.length===e.length&&t.every((s,r)=>n(s,e[r]))}/**
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
 */class je{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new J(x.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new J(x.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new J(x.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new J(x.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return je.fromMillis(Date.now())}static fromDate(e){return je.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new je(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?be(this.nanoseconds,e.nanoseconds):be(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class le{constructor(e){this.timestamp=e}static fromTimestamp(e){return new le(e)}static min(){return new le(new je(0,0))}static max(){return new le(new je(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Ai{constructor(e,n,s){n===void 0?n=0:n>e.length&&oe(),s===void 0?s=e.length-n:s>e.length-n&&oe(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return Ai.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Ai?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let r=0;r<s;r++){const i=e.get(r),o=n.get(r);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class xe extends Ai{construct(e,n,s){return new xe(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new J(x.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(r=>r.length>0))}return new xe(n)}static emptyPath(){return new xe([])}}const Zk=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ot extends Ai{construct(e,n,s){return new ot(e,n,s)}static isValidIdentifier(e){return Zk.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ot.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ot(["__name__"])}static fromServerFormat(e){const n=[];let s="",r=0;const i=()=>{if(s.length===0)throw new J(x.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;r<e.length;){const a=e[r];if(a==="\\"){if(r+1===e.length)throw new J(x.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[r+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new J(x.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=c,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(s+=a,r++):(i(),r++)}if(i(),o)throw new J(x.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ot(n)}static emptyPath(){return new ot([])}}/**
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
 */class Z{constructor(e){this.path=e}static fromPath(e){return new Z(xe.fromString(e))}static fromName(e){return new Z(xe.fromString(e).popFirst(5))}static empty(){return new Z(xe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&xe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return xe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Z(new xe(e.slice()))}}function eR(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,r=le.fromTimestamp(s===1e9?new je(n+1,0):new je(n,s));return new ts(r,Z.empty(),e)}function tR(t){return new ts(t.readTime,t.key,-1)}class ts{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new ts(le.min(),Z.empty(),-1)}static max(){return new ts(le.max(),Z.empty(),-1)}}function nR(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=Z.comparator(t.documentKey,e.documentKey),n!==0?n:be(t.largestBatchId,e.largestBatchId))}/**
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
 */const sR="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class rR{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function ro(t){if(t.code!==x.FAILED_PRECONDITION||t.message!==sR)throw t;Q("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class P{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&oe(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new P((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(n,i).next(s,r)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof P?n:P.resolve(n)}catch(n){return P.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):P.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):P.reject(n)}static resolve(e){return new P((n,s)=>{n(e)})}static reject(e){return new P((n,s)=>{s(e)})}static waitFor(e){return new P((n,s)=>{let r=0,i=0,o=!1;e.forEach(a=>{++r,a.next(()=>{++i,o&&i===r&&n()},c=>s(c))}),o=!0,i===r&&n()})}static or(e){let n=P.resolve(!1);for(const s of e)n=n.next(r=>r?P.resolve(r):s());return n}static forEach(e,n){const s=[];return e.forEach((r,i)=>{s.push(n.call(this,r,i))}),this.waitFor(s)}static mapArray(e,n){return new P((s,r)=>{const i=e.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const l=c;n(e[l]).next(u=>{o[l]=u,++a,a===i&&s(o)},u=>r(u))}})}static doWhile(e,n){return new P((s,r)=>{const i=()=>{e()===!0?n().next(()=>{i()},r):s()};i()})}}function io(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class sh{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.ut(s),this.ct=s=>n.writeSequenceNumber(s))}ut(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ct&&this.ct(e),e}}/**
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
 */function xd(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Dr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Ev(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */sh.at=-1;class qe{constructor(e,n){this.comparator=e,this.root=n||Xe.EMPTY}insert(e,n){return new qe(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Xe.BLACK,null,null))}remove(e){return new qe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Xe.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(e,s.key);if(r===0)return n+s.left.size;r<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ko(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ko(this.root,e,this.comparator,!1)}getReverseIterator(){return new ko(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ko(this.root,e,this.comparator,!0)}}class ko{constructor(e,n,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?s(e.key,n):1,n&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Xe{constructor(e,n,s,r,i){this.key=e,this.value=n,this.color=s!=null?s:Xe.RED,this.left=r!=null?r:Xe.EMPTY,this.right=i!=null?i:Xe.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,r,i){return new Xe(e!=null?e:this.key,n!=null?n:this.value,s!=null?s:this.color,r!=null?r:this.left,i!=null?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let r=this;const i=s(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,n,s),null):i===0?r.copy(null,n,null,null,null):r.copy(null,null,null,null,r.right.insert(e,n,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Xe.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,r=this;if(n(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),n(e,r.key)===0){if(r.right.isEmpty())return Xe.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Xe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Xe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw oe();const e=this.left.check();if(e!==this.right.check())throw oe();return e+(this.isRed()?0:1)}}Xe.EMPTY=null,Xe.RED=!0,Xe.BLACK=!1;Xe.EMPTY=new class{constructor(){this.size=0}get key(){throw oe()}get value(){throw oe()}get color(){throw oe()}get left(){throw oe()}get right(){throw oe()}copy(t,e,n,s,r){return this}insert(t,e,n){return new Xe(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class He{constructor(e){this.comparator=e,this.data=new qe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,e[1])>=0)return;n(r.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Pd(this.data.getIterator())}getIteratorFrom(e){return new Pd(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof He)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new He(this.comparator);return n.data=e,n}}class Pd{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class rn{constructor(e){this.fields=e,e.sort(ot.comparator)}static empty(){return new rn([])}unionWith(e){let n=new He(ot.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new rn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return mr(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
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
 */class ht{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new ht(n)}static fromUint8Array(e){const n=function(s){let r="";for(let i=0;i<s.length;++i)r+=String.fromCharCode(s[i]);return r}(e);return new ht(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return be(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ht.EMPTY_BYTE_STRING=new ht("");const iR=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ns(t){if(De(!!t),typeof t=="string"){let e=0;const n=iR.exec(t);if(De(!!n),n[1]){let r=n[1];r=(r+"000000000").substr(0,9),e=Number(r)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:Be(t.seconds),nanos:Be(t.nanos)}}function Be(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function yr(t){return typeof t=="string"?ht.fromBase64String(t):ht.fromUint8Array(t)}/**
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
 */function Iv(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Tv(t){const e=t.mapValue.fields.__previous_value__;return Iv(e)?Tv(e):e}function ki(t){const e=ns(t.mapValue.fields.__local_write_time__.timestampValue);return new je(e.seconds,e.nanos)}/**
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
 */class oR{constructor(e,n,s,r,i,o,a,c){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class Ri{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Ri("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Ri&&e.projectId===this.projectId&&e.database===this.database}}function fc(t){return t==null}function ga(t){return t===0&&1/t==-1/0}function aR(t){return typeof t=="number"&&Number.isInteger(t)&&!ga(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */const Ro={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Ns(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Iv(t)?4:cR(t)?9007199254740991:10:oe()}function an(t,e){if(t===e)return!0;const n=Ns(t);if(n!==Ns(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return ki(t).isEqual(ki(e));case 3:return function(s,r){if(typeof s.timestampValue=="string"&&typeof r.timestampValue=="string"&&s.timestampValue.length===r.timestampValue.length)return s.timestampValue===r.timestampValue;const i=ns(s.timestampValue),o=ns(r.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,r){return yr(s.bytesValue).isEqual(yr(r.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,r){return Be(s.geoPointValue.latitude)===Be(r.geoPointValue.latitude)&&Be(s.geoPointValue.longitude)===Be(r.geoPointValue.longitude)}(t,e);case 2:return function(s,r){if("integerValue"in s&&"integerValue"in r)return Be(s.integerValue)===Be(r.integerValue);if("doubleValue"in s&&"doubleValue"in r){const i=Be(s.doubleValue),o=Be(r.doubleValue);return i===o?ga(i)===ga(o):isNaN(i)&&isNaN(o)}return!1}(t,e);case 9:return mr(t.arrayValue.values||[],e.arrayValue.values||[],an);case 10:return function(s,r){const i=s.mapValue.fields||{},o=r.mapValue.fields||{};if(xd(i)!==xd(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!an(i[a],o[a])))return!1;return!0}(t,e);default:return oe()}}function Di(t,e){return(t.values||[]).find(n=>an(n,e))!==void 0}function vr(t,e){if(t===e)return 0;const n=Ns(t),s=Ns(e);if(n!==s)return be(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return be(t.booleanValue,e.booleanValue);case 2:return function(r,i){const o=Be(r.integerValue||r.doubleValue),a=Be(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return Md(t.timestampValue,e.timestampValue);case 4:return Md(ki(t),ki(e));case 5:return be(t.stringValue,e.stringValue);case 6:return function(r,i){const o=yr(r),a=yr(i);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(r,i){const o=r.split("/"),a=i.split("/");for(let c=0;c<o.length&&c<a.length;c++){const l=be(o[c],a[c]);if(l!==0)return l}return be(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(r,i){const o=be(Be(r.latitude),Be(i.latitude));return o!==0?o:be(Be(r.longitude),Be(i.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(r,i){const o=r.values||[],a=i.values||[];for(let c=0;c<o.length&&c<a.length;++c){const l=vr(o[c],a[c]);if(l)return l}return be(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(r,i){if(r===Ro.mapValue&&i===Ro.mapValue)return 0;if(r===Ro.mapValue)return 1;if(i===Ro.mapValue)return-1;const o=r.fields||{},a=Object.keys(o),c=i.fields||{},l=Object.keys(c);a.sort(),l.sort();for(let u=0;u<a.length&&u<l.length;++u){const h=be(a[u],l[u]);if(h!==0)return h;const f=vr(o[a[u]],c[l[u]]);if(f!==0)return f}return be(a.length,l.length)}(t.mapValue,e.mapValue);default:throw oe()}}function Md(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return be(t,e);const n=ns(t),s=ns(e),r=be(n.seconds,s.seconds);return r!==0?r:be(n.nanos,s.nanos)}function rr(t){return jl(t)}function jl(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(s){const r=ns(s);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?yr(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,Z.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(s){let r="[",i=!0;for(const o of s.values||[])i?i=!1:r+=",",r+=jl(o);return r+"]"}(t.arrayValue):"mapValue"in t?function(s){const r=Object.keys(s.fields||{}).sort();let i="{",o=!0;for(const a of r)o?o=!1:i+=",",i+=`${a}:${jl(s.fields[a])}`;return i+"}"}(t.mapValue):oe();var e,n}function Hl(t){return!!t&&"integerValue"in t}function rh(t){return!!t&&"arrayValue"in t}function Ld(t){return!!t&&"nullValue"in t}function Ud(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Fo(t){return!!t&&"mapValue"in t}function ri(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Dr(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=ri(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=ri(t.arrayValue.values[n]);return e}return Object.assign({},t)}function cR(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class xt{constructor(e){this.value=e}static empty(){return new xt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!Fo(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=ri(n)}setAll(e){let n=ot.emptyPath(),s={},r=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,s,r),s={},r=[],n=a.popLast()}o?s[a.lastSegment()]=ri(o):r.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,s,r)}delete(e){const n=this.field(e.popLast());Fo(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return an(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let r=n.mapValue.fields[e.get(s)];Fo(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=r),n=r}return n.mapValue.fields}applyChanges(e,n,s){Dr(n,(r,i)=>e[r]=i);for(const r of s)delete e[r]}clone(){return new xt(ri(this.value))}}function Sv(t){const e=[];return Dr(t.fields,(n,s)=>{const r=new ot([n]);if(Fo(s)){const i=Sv(s.mapValue).fields;if(i.length===0)e.push(r);else for(const o of i)e.push(r.child(o))}else e.push(r)}),new rn(e)}/**
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
 */class Je{constructor(e,n,s,r,i,o){this.key=e,this.documentType=n,this.version=s,this.readTime=r,this.data=i,this.documentState=o}static newInvalidDocument(e){return new Je(e,0,le.min(),le.min(),xt.empty(),0)}static newFoundDocument(e,n,s){return new Je(e,1,n,le.min(),s,0)}static newNoDocument(e,n){return new Je(e,2,n,le.min(),xt.empty(),0)}static newUnknownDocument(e,n){return new Je(e,3,n,le.min(),xt.empty(),2)}convertToFoundDocument(e,n){return this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=xt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=xt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=le.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Je&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Je(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class lR{constructor(e,n=null,s=[],r=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=o,this.endAt=a,this.ht=null}}function Fd(t,e=null,n=[],s=[],r=null,i=null,o=null){return new lR(t,e,n,s,r,i,o)}function ih(t){const e=ae(t);if(e.ht===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>{return(r=s).field.canonicalString()+r.op.toString()+rr(r.value);var r}).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(r){return r.field.canonicalString()+r.dir}(s)).join(","),fc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>rr(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>rr(s)).join(",")),e.ht=n}return e.ht}function uR(t){let e=t.path.canonicalString();return t.collectionGroup!==null&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(n=>{return`${(s=n).field.canonicalString()} ${s.op} ${rr(s.value)}`;var s}).join(", ")}]`),fc(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(n=>function(s){return`${s.field.canonicalString()} (${s.dir})`}(n)).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(n=>rr(n)).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(n=>rr(n)).join(",")),`Target(${e})`}function oh(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let r=0;r<t.orderBy.length;r++)if(!vR(t.orderBy[r],e.orderBy[r]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let r=0;r<t.filters.length;r++)if(n=t.filters[r],s=e.filters[r],n.op!==s.op||!n.field.isEqual(s.field)||!an(n.value,s.value))return!1;var n,s;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Bd(t.startAt,e.startAt)&&Bd(t.endAt,e.endAt)}function ql(t){return Z.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}class vt extends class{}{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.lt(e,n,s):new hR(e,n,s):n==="array-contains"?new pR(e,s):n==="in"?new gR(e,s):n==="not-in"?new mR(e,s):n==="array-contains-any"?new yR(e,s):new vt(e,n,s)}static lt(e,n,s){return n==="in"?new fR(e,s):new dR(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.ft(vr(n,this.value)):n!==null&&Ns(this.value)===Ns(n)&&this.ft(vr(n,this.value))}ft(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return oe()}}dt(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class hR extends vt{constructor(e,n,s){super(e,n,s),this.key=Z.fromName(s.referenceValue)}matches(e){const n=Z.comparator(e.key,this.key);return this.ft(n)}}class fR extends vt{constructor(e,n){super(e,"in",n),this.keys=Cv("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class dR extends vt{constructor(e,n){super(e,"not-in",n),this.keys=Cv("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Cv(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>Z.fromName(s.referenceValue))}class pR extends vt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return rh(n)&&Di(n.arrayValue,this.value)}}class gR extends vt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Di(this.value.arrayValue,n)}}class mR extends vt{constructor(e,n){super(e,"not-in",n)}matches(e){if(Di(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Di(this.value.arrayValue,n)}}class yR extends vt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!rh(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>Di(this.value.arrayValue,s))}}class ma{constructor(e,n){this.position=e,this.inclusive=n}}class ii{constructor(e,n="asc"){this.field=e,this.dir=n}}function vR(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function Vd(t,e,n){let s=0;for(let r=0;r<t.position.length;r++){const i=e[r],o=t.position[r];if(i.field.isKeyField()?s=Z.comparator(Z.fromName(o.referenceValue),n.key):s=vr(o,n.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function Bd(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!an(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class dc{constructor(e,n=null,s=[],r=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this._t=null,this.wt=null,this.startAt,this.endAt}}function _R(t,e,n,s,r,i,o,a){return new dc(t,e,n,s,r,i,o,a)}function ah(t){return new dc(t)}function $d(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function wR(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function bR(t){for(const e of t.filters)if(e.dt())return e.field;return null}function ER(t){return t.collectionGroup!==null}function Oi(t){const e=ae(t);if(e._t===null){e._t=[];const n=bR(e),s=wR(e);if(n!==null&&s===null)n.isKeyField()||e._t.push(new ii(n)),e._t.push(new ii(ot.keyField(),"asc"));else{let r=!1;for(const i of e.explicitOrderBy)e._t.push(i),i.field.isKeyField()&&(r=!0);if(!r){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e._t.push(new ii(ot.keyField(),i))}}}return e._t}function Cn(t){const e=ae(t);if(!e.wt)if(e.limitType==="F")e.wt=Fd(e.path,e.collectionGroup,Oi(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const i of Oi(e)){const o=i.dir==="desc"?"asc":"desc";n.push(new ii(i.field,o))}const s=e.endAt?new ma(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new ma(e.startAt.position,e.startAt.inclusive):null;e.wt=Fd(e.path,e.collectionGroup,n,e.filters,e.limit,s,r)}return e.wt}function Kl(t,e,n){return new dc(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function pc(t,e){return oh(Cn(t),Cn(e))&&t.limitType===e.limitType}function Av(t){return`${ih(Cn(t))}|lt:${t.limitType}`}function zl(t){return`Query(target=${uR(Cn(t))}; limitType=${t.limitType})`}function ch(t,e){return e.isFoundDocument()&&function(n,s){const r=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(r):Z.isDocumentKey(n.path)?n.path.isEqual(r):n.path.isImmediateParentOf(r)}(t,e)&&function(n,s){for(const r of n.explicitOrderBy)if(!r.field.isKeyField()&&s.data.field(r.field)===null)return!1;return!0}(t,e)&&function(n,s){for(const r of n.filters)if(!r.matches(s))return!1;return!0}(t,e)&&function(n,s){return!(n.startAt&&!function(r,i,o){const a=Vd(r,i,o);return r.inclusive?a<=0:a<0}(n.startAt,Oi(n),s)||n.endAt&&!function(r,i,o){const a=Vd(r,i,o);return r.inclusive?a>=0:a>0}(n.endAt,Oi(n),s))}(t,e)}function IR(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function kv(t){return(e,n)=>{let s=!1;for(const r of Oi(t)){const i=TR(r,e,n);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function TR(t,e,n){const s=t.field.isKeyField()?Z.comparator(e.key,n.key):function(r,i,o){const a=i.data.field(r),c=o.data.field(r);return a!==null&&c!==null?vr(a,c):oe()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return oe()}}/**
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
 */function Rv(t,e){if(t.gt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ga(e)?"-0":e}}function Dv(t){return{integerValue:""+t}}function SR(t,e){return aR(e)?Dv(e):Rv(t,e)}/**
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
 */class gc{constructor(){this._=void 0}}function CR(t,e,n){return t instanceof ya?function(s,r){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return r&&(i.fields.__previous_value__=r),{mapValue:i}}(n,e):t instanceof Ni?Nv(t,e):t instanceof xi?xv(t,e):function(s,r){const i=Ov(s,r),o=jd(i)+jd(s.yt);return Hl(i)&&Hl(s.yt)?Dv(o):Rv(s.It,o)}(t,e)}function AR(t,e,n){return t instanceof Ni?Nv(t,e):t instanceof xi?xv(t,e):n}function Ov(t,e){return t instanceof va?Hl(n=e)||function(s){return!!s&&"doubleValue"in s}(n)?e:{integerValue:0}:null;var n}class ya extends gc{}class Ni extends gc{constructor(e){super(),this.elements=e}}function Nv(t,e){const n=Pv(e);for(const s of t.elements)n.some(r=>an(r,s))||n.push(s);return{arrayValue:{values:n}}}class xi extends gc{constructor(e){super(),this.elements=e}}function xv(t,e){let n=Pv(e);for(const s of t.elements)n=n.filter(r=>!an(r,s));return{arrayValue:{values:n}}}class va extends gc{constructor(e,n){super(),this.It=e,this.yt=n}}function jd(t){return Be(t.integerValue||t.doubleValue)}function Pv(t){return rh(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function kR(t,e){return t.field.isEqual(e.field)&&function(n,s){return n instanceof Ni&&s instanceof Ni||n instanceof xi&&s instanceof xi?mr(n.elements,s.elements,an):n instanceof va&&s instanceof va?an(n.yt,s.yt):n instanceof ya&&s instanceof ya}(t.transform,e.transform)}class RR{constructor(e,n){this.version=e,this.transformResults=n}}class on{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new on}static exists(e){return new on(void 0,e)}static updateTime(e){return new on(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Vo(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class mc{}function Mv(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new lh(t.key,on.none()):new oo(t.key,t.data,on.none());{const n=t.data,s=xt.empty();let r=new He(ot.comparator);for(let i of e.fields)if(!r.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?s.delete(i):s.set(i,o),r=r.add(i)}return new Fs(t.key,s,new rn(r.toArray()),on.none())}}function DR(t,e,n){t instanceof oo?function(s,r,i){const o=s.value.clone(),a=qd(s.fieldTransforms,r,i.transformResults);o.setAll(a),r.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(t,e,n):t instanceof Fs?function(s,r,i){if(!Vo(s.precondition,r))return void r.convertToUnknownDocument(i.version);const o=qd(s.fieldTransforms,r,i.transformResults),a=r.data;a.setAll(Lv(s)),a.setAll(o),r.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(t,e,n):function(s,r,i){r.convertToNoDocument(i.version).setHasCommittedMutations()}(0,e,n)}function oi(t,e,n,s){return t instanceof oo?function(r,i,o,a){if(!Vo(r.precondition,i))return o;const c=r.value.clone(),l=Kd(r.fieldTransforms,a,i);return c.setAll(l),i.convertToFoundDocument(i.version,c).setHasLocalMutations(),null}(t,e,n,s):t instanceof Fs?function(r,i,o,a){if(!Vo(r.precondition,i))return o;const c=Kd(r.fieldTransforms,a,i),l=i.data;return l.setAll(Lv(r)),l.setAll(c),i.convertToFoundDocument(i.version,l).setHasLocalMutations(),o===null?null:o.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map(u=>u.field))}(t,e,n,s):function(r,i,o){return Vo(r.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):o}(t,e,n)}function OR(t,e){let n=null;for(const s of t.fieldTransforms){const r=e.data.field(s.field),i=Ov(s.transform,r||null);i!=null&&(n===null&&(n=xt.empty()),n.set(s.field,i))}return n||null}function Hd(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&mr(n,s,(r,i)=>kR(r,i))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class oo extends mc{constructor(e,n,s,r=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class Fs extends mc{constructor(e,n,s,r,i=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Lv(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function qd(t,e,n){const s=new Map;De(t.length===n.length);for(let r=0;r<n.length;r++){const i=t[r],o=i.transform,a=e.data.field(i.field);s.set(i.field,AR(o,a,n[r]))}return s}function Kd(t,e,n){const s=new Map;for(const r of t){const i=r.transform,o=n.data.field(r.field);s.set(r.field,CR(i,o,e))}return s}class lh extends mc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class NR extends mc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class xR{constructor(e){this.count=e}}/**
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
 */var Ve,ge;function PR(t){switch(t){default:return oe();case x.CANCELLED:case x.UNKNOWN:case x.DEADLINE_EXCEEDED:case x.RESOURCE_EXHAUSTED:case x.INTERNAL:case x.UNAVAILABLE:case x.UNAUTHENTICATED:return!1;case x.INVALID_ARGUMENT:case x.NOT_FOUND:case x.ALREADY_EXISTS:case x.PERMISSION_DENIED:case x.FAILED_PRECONDITION:case x.ABORTED:case x.OUT_OF_RANGE:case x.UNIMPLEMENTED:case x.DATA_LOSS:return!0}}function Uv(t){if(t===void 0)return Sn("GRPC error has no .code"),x.UNKNOWN;switch(t){case Ve.OK:return x.OK;case Ve.CANCELLED:return x.CANCELLED;case Ve.UNKNOWN:return x.UNKNOWN;case Ve.DEADLINE_EXCEEDED:return x.DEADLINE_EXCEEDED;case Ve.RESOURCE_EXHAUSTED:return x.RESOURCE_EXHAUSTED;case Ve.INTERNAL:return x.INTERNAL;case Ve.UNAVAILABLE:return x.UNAVAILABLE;case Ve.UNAUTHENTICATED:return x.UNAUTHENTICATED;case Ve.INVALID_ARGUMENT:return x.INVALID_ARGUMENT;case Ve.NOT_FOUND:return x.NOT_FOUND;case Ve.ALREADY_EXISTS:return x.ALREADY_EXISTS;case Ve.PERMISSION_DENIED:return x.PERMISSION_DENIED;case Ve.FAILED_PRECONDITION:return x.FAILED_PRECONDITION;case Ve.ABORTED:return x.ABORTED;case Ve.OUT_OF_RANGE:return x.OUT_OF_RANGE;case Ve.UNIMPLEMENTED:return x.UNIMPLEMENTED;case Ve.DATA_LOSS:return x.DATA_LOSS;default:return oe()}}(ge=Ve||(Ve={}))[ge.OK=0]="OK",ge[ge.CANCELLED=1]="CANCELLED",ge[ge.UNKNOWN=2]="UNKNOWN",ge[ge.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ge[ge.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ge[ge.NOT_FOUND=5]="NOT_FOUND",ge[ge.ALREADY_EXISTS=6]="ALREADY_EXISTS",ge[ge.PERMISSION_DENIED=7]="PERMISSION_DENIED",ge[ge.UNAUTHENTICATED=16]="UNAUTHENTICATED",ge[ge.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ge[ge.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ge[ge.ABORTED=10]="ABORTED",ge[ge.OUT_OF_RANGE=11]="OUT_OF_RANGE",ge[ge.UNIMPLEMENTED=12]="UNIMPLEMENTED",ge[ge.INTERNAL=13]="INTERNAL",ge[ge.UNAVAILABLE=14]="UNAVAILABLE",ge[ge.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class Or{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),r=this.inner[s];if(r===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,n]);r.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return s.length===1?delete this.inner[n]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(e){Dr(this.inner,(n,s)=>{for(const[r,i]of s)e(r,i)})}isEmpty(){return Ev(this.inner)}size(){return this.innerSize}}/**
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
 */const MR=new qe(Z.comparator);function An(){return MR}const Fv=new qe(Z.comparator);function Kr(...t){let e=Fv;for(const n of t)e=e.insert(n.key,n);return e}function Vv(t){let e=Fv;return t.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function vs(){return ai()}function Bv(){return ai()}function ai(){return new Or(t=>t.toString(),(t,e)=>t.isEqual(e))}const LR=new qe(Z.comparator),UR=new He(Z.comparator);function he(...t){let e=UR;for(const n of t)e=e.add(n);return e}const FR=new He(be);function $v(){return FR}/**
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
 */class yc{constructor(e,n,s,r,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,s){const r=new Map;return r.set(e,ao.createSynthesizedTargetChangeForCurrentChange(e,n,s)),new yc(le.min(),r,$v(),An(),he())}}class ao{constructor(e,n,s,r,i){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,s){return new ao(s,n,he(),he(),he())}}/**
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
 */class Bo{constructor(e,n,s,r){this.Tt=e,this.removedTargetIds=n,this.key=s,this.Et=r}}class jv{constructor(e,n){this.targetId=e,this.At=n}}class Hv{constructor(e,n,s=ht.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=r}}class zd{constructor(){this.Rt=0,this.bt=Gd(),this.Pt=ht.EMPTY_BYTE_STRING,this.vt=!1,this.Vt=!0}get current(){return this.vt}get resumeToken(){return this.Pt}get St(){return this.Rt!==0}get Dt(){return this.Vt}Ct(e){e.approximateByteSize()>0&&(this.Vt=!0,this.Pt=e)}xt(){let e=he(),n=he(),s=he();return this.bt.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:n=n.add(r);break;case 1:s=s.add(r);break;default:oe()}}),new ao(this.Pt,this.vt,e,n,s)}Nt(){this.Vt=!1,this.bt=Gd()}kt(e,n){this.Vt=!0,this.bt=this.bt.insert(e,n)}Ot(e){this.Vt=!0,this.bt=this.bt.remove(e)}Mt(){this.Rt+=1}Ft(){this.Rt-=1}$t(){this.Vt=!0,this.vt=!0}}class VR{constructor(e){this.Bt=e,this.Lt=new Map,this.Ut=An(),this.qt=Wd(),this.Kt=new He(be)}Gt(e){for(const n of e.Tt)e.Et&&e.Et.isFoundDocument()?this.Qt(n,e.Et):this.jt(n,e.key,e.Et);for(const n of e.removedTargetIds)this.jt(n,e.key,e.Et)}Wt(e){this.forEachTarget(e,n=>{const s=this.zt(n);switch(e.state){case 0:this.Ht(n)&&s.Ct(e.resumeToken);break;case 1:s.Ft(),s.St||s.Nt(),s.Ct(e.resumeToken);break;case 2:s.Ft(),s.St||this.removeTarget(n);break;case 3:this.Ht(n)&&(s.$t(),s.Ct(e.resumeToken));break;case 4:this.Ht(n)&&(this.Jt(n),s.Ct(e.resumeToken));break;default:oe()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Lt.forEach((s,r)=>{this.Ht(r)&&n(r)})}Yt(e){const n=e.targetId,s=e.At.count,r=this.Xt(n);if(r){const i=r.target;if(ql(i))if(s===0){const o=new Z(i.path);this.jt(n,o,Je.newNoDocument(o,le.min()))}else De(s===1);else this.Zt(n)!==s&&(this.Jt(n),this.Kt=this.Kt.add(n))}}te(e){const n=new Map;this.Lt.forEach((i,o)=>{const a=this.Xt(o);if(a){if(i.current&&ql(a.target)){const c=new Z(a.target.path);this.Ut.get(c)!==null||this.ee(o,c)||this.jt(o,c,Je.newNoDocument(c,e))}i.Dt&&(n.set(o,i.xt()),i.Nt())}});let s=he();this.qt.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.Xt(c);return!l||l.purpose===2||(a=!1,!1)}),a&&(s=s.add(i))}),this.Ut.forEach((i,o)=>o.setReadTime(e));const r=new yc(e,n,this.Kt,this.Ut,s);return this.Ut=An(),this.qt=Wd(),this.Kt=new He(be),r}Qt(e,n){if(!this.Ht(e))return;const s=this.ee(e,n.key)?2:0;this.zt(e).kt(n.key,s),this.Ut=this.Ut.insert(n.key,n),this.qt=this.qt.insert(n.key,this.ne(n.key).add(e))}jt(e,n,s){if(!this.Ht(e))return;const r=this.zt(e);this.ee(e,n)?r.kt(n,1):r.Ot(n),this.qt=this.qt.insert(n,this.ne(n).delete(e)),s&&(this.Ut=this.Ut.insert(n,s))}removeTarget(e){this.Lt.delete(e)}Zt(e){const n=this.zt(e).xt();return this.Bt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Mt(e){this.zt(e).Mt()}zt(e){let n=this.Lt.get(e);return n||(n=new zd,this.Lt.set(e,n)),n}ne(e){let n=this.qt.get(e);return n||(n=new He(be),this.qt=this.qt.insert(e,n)),n}Ht(e){const n=this.Xt(e)!==null;return n||Q("WatchChangeAggregator","Detected inactive target",e),n}Xt(e){const n=this.Lt.get(e);return n&&n.St?null:this.Bt.se(e)}Jt(e){this.Lt.set(e,new zd),this.Bt.getRemoteKeysForTarget(e).forEach(n=>{this.jt(e,n,null)})}ee(e,n){return this.Bt.getRemoteKeysForTarget(e).has(n)}}function Wd(){return new qe(Z.comparator)}function Gd(){return new qe(Z.comparator)}/**
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
 */const BR=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),$R=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class jR{constructor(e,n){this.databaseId=e,this.gt=n}}function _a(t,e){return t.gt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function qv(t,e){return t.gt?e.toBase64():e.toUint8Array()}function HR(t,e){return _a(t,e.toTimestamp())}function wn(t){return De(!!t),le.fromTimestamp(function(e){const n=ns(e);return new je(n.seconds,n.nanos)}(t))}function uh(t,e){return function(n){return new xe(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function Kv(t){const e=xe.fromString(t);return De(Gv(e)),e}function Wl(t,e){return uh(t.databaseId,e.path)}function Xc(t,e){const n=Kv(e);if(n.get(1)!==t.databaseId.projectId)throw new J(x.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new J(x.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new Z(zv(n))}function Gl(t,e){return uh(t.databaseId,e)}function qR(t){const e=Kv(t);return e.length===4?xe.emptyPath():zv(e)}function Ql(t){return new xe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function zv(t){return De(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Qd(t,e,n){return{name:Wl(t,e),fields:n.value.mapValue.fields}}function KR(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:oe()}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],i=function(c,l){return c.gt?(De(l===void 0||typeof l=="string"),ht.fromBase64String(l||"")):(De(l===void 0||l instanceof Uint8Array),ht.fromUint8Array(l||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const l=c.code===void 0?x.UNKNOWN:Uv(c.code);return new J(l,c.message||"")}(o);n=new Hv(s,r,i,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const r=Xc(t,s.document.name),i=wn(s.document.updateTime),o=new xt({mapValue:{fields:s.document.fields}}),a=Je.newFoundDocument(r,i,o),c=s.targetIds||[],l=s.removedTargetIds||[];n=new Bo(c,l,a.key,a)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const r=Xc(t,s.document),i=s.readTime?wn(s.readTime):le.min(),o=Je.newNoDocument(r,i),a=s.removedTargetIds||[];n=new Bo([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const r=Xc(t,s.document),i=s.removedTargetIds||[];n=new Bo([],i,r,null)}else{if(!("filter"in e))return oe();{e.filter;const s=e.filter;s.targetId;const r=s.count||0,i=new xR(r),o=s.targetId;n=new jv(o,i)}}return n}function zR(t,e){let n;if(e instanceof oo)n={update:Qd(t,e.key,e.value)};else if(e instanceof lh)n={delete:Wl(t,e.key)};else if(e instanceof Fs)n={update:Qd(t,e.key,e.data),updateMask:n1(e.fieldMask)};else{if(!(e instanceof NR))return oe();n={verify:Wl(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(s=>function(r,i){const o=i.transform;if(o instanceof ya)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Ni)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof xi)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof va)return{fieldPath:i.field.canonicalString(),increment:o.yt};throw oe()}(0,s))),e.precondition.isNone||(n.currentDocument=function(s,r){return r.updateTime!==void 0?{updateTime:HR(s,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:oe()}(t,e.precondition)),n}function WR(t,e){return t&&t.length>0?(De(e!==void 0),t.map(n=>function(s,r){let i=s.updateTime?wn(s.updateTime):wn(r);return i.isEqual(le.min())&&(i=wn(r)),new RR(i,s.transformResults||[])}(n,e))):[]}function GR(t,e){return{documents:[Gl(t,e.path)]}}function QR(t,e){const n={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(n.parent=Gl(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Gl(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const r=function(c){if(c.length===0)return;const l=c.map(u=>function(h){if(h.op==="=="){if(Ud(h.value))return{unaryFilter:{field:Hs(h.field),op:"IS_NAN"}};if(Ld(h.value))return{unaryFilter:{field:Hs(h.field),op:"IS_NULL"}}}else if(h.op==="!="){if(Ud(h.value))return{unaryFilter:{field:Hs(h.field),op:"IS_NOT_NAN"}};if(Ld(h.value))return{unaryFilter:{field:Hs(h.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Hs(h.field),op:ZR(h.op),value:h.value}}}(u));return l.length===1?l[0]:{compositeFilter:{op:"AND",filters:l}}}(e.filters);r&&(n.structuredQuery.where=r);const i=function(c){if(c.length!==0)return c.map(l=>function(u){return{field:Hs(u.field),direction:JR(u.dir)}}(l))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=function(c,l){return c.gt||fc(l)?l:{value:l}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function YR(t){let e=qR(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let r=null;if(s>0){De(s===1);const u=n.from[0];u.allDescendants?r=u.collectionId:e=e.child(u.collectionId)}let i=[];n.where&&(i=Wv(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(u=>function(h){return new ii(Gs(h.field),function(f){switch(f){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(u)));let a=null;n.limit&&(a=function(u){let h;return h=typeof u=="object"?u.value:u,fc(h)?null:h}(n.limit));let c=null;n.startAt&&(c=function(u){const h=!!u.before,f=u.values||[];return new ma(f,h)}(n.startAt));let l=null;return n.endAt&&(l=function(u){const h=!u.before,f=u.values||[];return new ma(f,h)}(n.endAt)),_R(e,r,o,i,a,"F",c,l)}function XR(t,e){const n=function(s,r){switch(r){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return oe()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function Wv(t){return t?t.unaryFilter!==void 0?[t1(t)]:t.fieldFilter!==void 0?[e1(t)]:t.compositeFilter!==void 0?t.compositeFilter.filters.map(e=>Wv(e)).reduce((e,n)=>e.concat(n)):oe():[]}function JR(t){return BR[t]}function ZR(t){return $R[t]}function Hs(t){return{fieldPath:t.canonicalString()}}function Gs(t){return ot.fromServerFormat(t.fieldPath)}function e1(t){return vt.create(Gs(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return oe()}}(t.fieldFilter.op),t.fieldFilter.value)}function t1(t){switch(t.unaryFilter.op){case"IS_NAN":const e=Gs(t.unaryFilter.field);return vt.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=Gs(t.unaryFilter.field);return vt.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Gs(t.unaryFilter.field);return vt.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=Gs(t.unaryFilter.field);return vt.create(r,"!=",{nullValue:"NULL_VALUE"});default:return oe()}}function n1(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Gv(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class s1{constructor(e,n,s,r){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(e.key)&&DR(i,e,s[r])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=oi(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=oi(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=Bv();return this.mutations.forEach(r=>{const i=e.get(r.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(r.key)?null:a;const c=Mv(o,a);c!==null&&s.set(r.key,c),o.isValidDocument()||o.convertToNoDocument(le.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),he())}isEqual(e){return this.batchId===e.batchId&&mr(this.mutations,e.mutations,(n,s)=>Hd(n,s))&&mr(this.baseMutations,e.baseMutations,(n,s)=>Hd(n,s))}}class hh{constructor(e,n,s,r){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=r}static from(e,n,s){De(e.mutations.length===s.length);let r=LR;const i=e.mutations;for(let o=0;o<i.length;o++)r=r.insert(i[o].key,s[o].version);return new hh(e,n,s,r)}}/**
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
 */class r1{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class Is{constructor(e,n,s,r,i=le.min(),o=le.min(),a=ht.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new Is(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new Is(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new Is(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
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
 */class i1{constructor(e){this.re=e}}function o1(t){const e=YR({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Kl(e,e.limit,"L"):e}/**
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
 */class a1{constructor(){this.Ye=new c1}addToCollectionParentIndex(e,n){return this.Ye.add(n),P.resolve()}getCollectionParents(e,n){return P.resolve(this.Ye.getEntries(n))}addFieldIndex(e,n){return P.resolve()}deleteFieldIndex(e,n){return P.resolve()}getDocumentsMatchingTarget(e,n){return P.resolve(null)}getIndexType(e,n){return P.resolve(0)}getFieldIndexes(e,n){return P.resolve([])}getNextCollectionGroupToUpdate(e){return P.resolve(null)}getMinOffset(e,n){return P.resolve(ts.min())}getMinOffsetFromCollectionGroup(e,n){return P.resolve(ts.min())}updateCollectionGroup(e,n,s){return P.resolve()}updateIndexEntries(e,n){return P.resolve()}}class c1{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n]||new He(xe.comparator),i=!r.has(s);return this.index[n]=r.add(s),i}has(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n];return r&&r.has(s)}getEntries(e){return(this.index[e]||new He(xe.comparator)).toArray()}}/**
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
 */class _r{constructor(e){this.bn=e}next(){return this.bn+=2,this.bn}static Pn(){return new _r(0)}static vn(){return new _r(-1)}}/**
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
 */class l1{constructor(){this.changes=new Or(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Je.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?P.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class u1{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class h1{constructor(e,n,s,r){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=r}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(r=>(s=r,this.getBaseDocument(e,n,s))).next(r=>(s!==null&&oi(s.mutation,r,rn.empty(),je.now()),r))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,he()).next(()=>s))}getLocalViewOfDocuments(e,n,s=he()){const r=vs();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,s).next(i=>{let o=Kr();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const s=vs();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,he()))}populateOverlays(e,n,s){const r=[];return s.forEach(i=>{n.has(i)||r.push(i)}),this.documentOverlayCache.getOverlays(e,r).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,s,r){let i=An();const o=ai(),a=ai();return n.forEach((c,l)=>{const u=s.get(l.key);r.has(l.key)&&(u===void 0||u.mutation instanceof Fs)?i=i.insert(l.key,l):u!==void 0&&(o.set(l.key,u.mutation.getFieldMask()),oi(u.mutation,l,u.mutation.getFieldMask(),je.now()))}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((l,u)=>o.set(l,u)),n.forEach((l,u)=>{var h;return a.set(l,new u1(u,(h=o.get(l))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const s=ai();let r=new qe((o,a)=>o-a),i=he();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const l=n.get(c);if(l===null)return;let u=s.get(c)||rn.empty();u=a.applyToLocalView(l,u),s.set(c,u);const h=(r.get(a.batchId)||he()).add(c);r=r.insert(a.batchId,h)})}).next(()=>{const o=[],a=r.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,u=c.value,h=Bv();u.forEach(f=>{if(!i.has(f)){const d=Mv(n.get(f),s.get(f));d!==null&&h.set(f,d),i=i.add(f)}}),o.push(this.documentOverlayCache.saveOverlays(e,l,h))}return P.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s){return function(r){return Z.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):ER(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s):this.getDocumentsMatchingCollectionQuery(e,n,s)}getNextDocuments(e,n,s,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,r).next(i=>{const o=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,r-i.size):P.resolve(vs());let a=-1,c=i;return o.next(l=>P.forEach(l,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(u)?P.resolve():this.getBaseDocument(e,u,h).next(f=>{c=c.insert(u,f)}))).next(()=>this.populateOverlays(e,l,i)).next(()=>this.computeViews(e,c,l,he())).next(u=>({batchId:a,changes:Vv(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new Z(n)).next(s=>{let r=Kr();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r})}getDocumentsMatchingCollectionGroupQuery(e,n,s){const r=n.collectionGroup;let i=Kr();return this.indexManager.getCollectionParents(e,r).next(o=>P.forEach(o,a=>{const c=function(l,u){return new dc(u,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt)}(n,a.child(r));return this.getDocumentsMatchingCollectionQuery(e,c,s).next(l=>{l.forEach((u,h)=>{i=i.insert(u,h)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(e,n,s){let r;return this.remoteDocumentCache.getAllFromCollection(e,n.path,s).next(i=>(r=i,this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId))).next(i=>{i.forEach((a,c)=>{const l=c.getKey();r.get(l)===null&&(r=r.insert(l,Je.newInvalidDocument(l)))});let o=Kr();return r.forEach((a,c)=>{const l=i.get(a);l!==void 0&&oi(l.mutation,c,rn.empty(),je.now()),ch(n,c)&&(o=o.insert(a,c))}),o})}getBaseDocument(e,n,s){return s===null||s.mutation.type===1?this.remoteDocumentCache.getEntry(e,n):P.resolve(Je.newInvalidDocument(n))}}/**
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
 */class f1{constructor(e){this.It=e,this.Zn=new Map,this.ts=new Map}getBundleMetadata(e,n){return P.resolve(this.Zn.get(n))}saveBundleMetadata(e,n){var s;return this.Zn.set(n.id,{id:(s=n).id,version:s.version,createTime:wn(s.createTime)}),P.resolve()}getNamedQuery(e,n){return P.resolve(this.ts.get(n))}saveNamedQuery(e,n){return this.ts.set(n.name,function(s){return{name:s.name,query:o1(s.bundledQuery),readTime:wn(s.readTime)}}(n)),P.resolve()}}/**
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
 */class d1{constructor(){this.overlays=new qe(Z.comparator),this.es=new Map}getOverlay(e,n){return P.resolve(this.overlays.get(n))}getOverlays(e,n){const s=vs();return P.forEach(n,r=>this.getOverlay(e,r).next(i=>{i!==null&&s.set(r,i)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((r,i)=>{this.ue(e,n,i)}),P.resolve()}removeOverlaysForBatchId(e,n,s){const r=this.es.get(s);return r!==void 0&&(r.forEach(i=>this.overlays=this.overlays.remove(i)),this.es.delete(s)),P.resolve()}getOverlaysForCollection(e,n,s){const r=vs(),i=n.length+1,o=new Z(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===i&&c.largestBatchId>s&&r.set(c.getKey(),c)}return P.resolve(r)}getOverlaysForCollectionGroup(e,n,s,r){let i=new qe((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>s){let u=i.get(l.largestBatchId);u===null&&(u=vs(),i=i.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=vs(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(l,u)),!(a.size()>=r)););return P.resolve(a)}ue(e,n,s){const r=this.overlays.get(s.key);if(r!==null){const o=this.es.get(r.largestBatchId).delete(s.key);this.es.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new r1(n,s));let i=this.es.get(n);i===void 0&&(i=he(),this.es.set(n,i)),this.es.set(n,i.add(s.key))}}/**
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
 */class fh{constructor(){this.ns=new He(ze.ss),this.rs=new He(ze.os)}isEmpty(){return this.ns.isEmpty()}addReference(e,n){const s=new ze(e,n);this.ns=this.ns.add(s),this.rs=this.rs.add(s)}us(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.cs(new ze(e,n))}hs(e,n){e.forEach(s=>this.removeReference(s,n))}ls(e){const n=new Z(new xe([])),s=new ze(n,e),r=new ze(n,e+1),i=[];return this.rs.forEachInRange([s,r],o=>{this.cs(o),i.push(o.key)}),i}fs(){this.ns.forEach(e=>this.cs(e))}cs(e){this.ns=this.ns.delete(e),this.rs=this.rs.delete(e)}ds(e){const n=new Z(new xe([])),s=new ze(n,e),r=new ze(n,e+1);let i=he();return this.rs.forEachInRange([s,r],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new ze(e,0),s=this.ns.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class ze{constructor(e,n){this.key=e,this._s=n}static ss(e,n){return Z.comparator(e.key,n.key)||be(e._s,n._s)}static os(e,n){return be(e._s,n._s)||Z.comparator(e.key,n.key)}}/**
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
 */class p1{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.ws=1,this.gs=new He(ze.ss)}checkEmpty(e){return P.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,r){const i=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new s1(i,n,s,r);this.mutationQueue.push(o);for(const a of r)this.gs=this.gs.add(new ze(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return P.resolve(o)}lookupMutationBatch(e,n){return P.resolve(this.ys(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,r=this.ps(s),i=r<0?0:r;return P.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return P.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(e){return P.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new ze(n,0),r=new ze(n,Number.POSITIVE_INFINITY),i=[];return this.gs.forEachInRange([s,r],o=>{const a=this.ys(o._s);i.push(a)}),P.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new He(be);return n.forEach(r=>{const i=new ze(r,0),o=new ze(r,Number.POSITIVE_INFINITY);this.gs.forEachInRange([i,o],a=>{s=s.add(a._s)})}),P.resolve(this.Is(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,r=s.length+1;let i=s;Z.isDocumentKey(i)||(i=i.child(""));const o=new ze(new Z(i),0);let a=new He(be);return this.gs.forEachWhile(c=>{const l=c.key.path;return!!s.isPrefixOf(l)&&(l.length===r&&(a=a.add(c._s)),!0)},o),P.resolve(this.Is(a))}Is(e){const n=[];return e.forEach(s=>{const r=this.ys(s);r!==null&&n.push(r)}),n}removeMutationBatch(e,n){De(this.Ts(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.gs;return P.forEach(n.mutations,r=>{const i=new ze(r.key,n.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.gs=s})}An(e){}containsKey(e,n){const s=new ze(n,0),r=this.gs.firstAfterOrEqual(s);return P.resolve(n.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,P.resolve()}Ts(e,n){return this.ps(e)}ps(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}ys(e){const n=this.ps(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class g1{constructor(e){this.Es=e,this.docs=new qe(Z.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,r=this.docs.get(s),i=r?r.size:0,o=this.Es(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return P.resolve(s?s.document.mutableCopy():Je.newInvalidDocument(n))}getEntries(e,n){let s=An();return n.forEach(r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():Je.newInvalidDocument(r))}),P.resolve(s)}getAllFromCollection(e,n,s){let r=An();const i=new Z(n.child("")),o=this.docs.getIteratorFrom(i);for(;o.hasNext();){const{key:a,value:{document:c}}=o.getNext();if(!n.isPrefixOf(a.path))break;a.path.length>n.length+1||nR(tR(c),s)<=0||(r=r.insert(c.key,c.mutableCopy()))}return P.resolve(r)}getAllFromCollectionGroup(e,n,s,r){oe()}As(e,n){return P.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new m1(this)}getSize(e){return P.resolve(this.size)}}class m1 extends l1{constructor(e){super(),this.Yn=e}applyChanges(e){const n=[];return this.changes.forEach((s,r)=>{r.isValidDocument()?n.push(this.Yn.addEntry(e,r)):this.Yn.removeEntry(s)}),P.waitFor(n)}getFromCache(e,n){return this.Yn.getEntry(e,n)}getAllFromCache(e,n){return this.Yn.getEntries(e,n)}}/**
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
 */class y1{constructor(e){this.persistence=e,this.Rs=new Or(n=>ih(n),oh),this.lastRemoteSnapshotVersion=le.min(),this.highestTargetId=0,this.bs=0,this.Ps=new fh,this.targetCount=0,this.vs=_r.Pn()}forEachTarget(e,n){return this.Rs.forEach((s,r)=>n(r)),P.resolve()}getLastRemoteSnapshotVersion(e){return P.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return P.resolve(this.bs)}allocateTargetId(e){return this.highestTargetId=this.vs.next(),P.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.bs&&(this.bs=n),P.resolve()}Dn(e){this.Rs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.vs=new _r(n),this.highestTargetId=n),e.sequenceNumber>this.bs&&(this.bs=e.sequenceNumber)}addTargetData(e,n){return this.Dn(n),this.targetCount+=1,P.resolve()}updateTargetData(e,n){return this.Dn(n),P.resolve()}removeTargetData(e,n){return this.Rs.delete(n.target),this.Ps.ls(n.targetId),this.targetCount-=1,P.resolve()}removeTargets(e,n,s){let r=0;const i=[];return this.Rs.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.Rs.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)}),P.waitFor(i).next(()=>r)}getTargetCount(e){return P.resolve(this.targetCount)}getTargetData(e,n){const s=this.Rs.get(n)||null;return P.resolve(s)}addMatchingKeys(e,n,s){return this.Ps.us(n,s),P.resolve()}removeMatchingKeys(e,n,s){this.Ps.hs(n,s);const r=this.persistence.referenceDelegate,i=[];return r&&n.forEach(o=>{i.push(r.markPotentiallyOrphaned(e,o))}),P.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Ps.ls(n),P.resolve()}getMatchingKeysForTargetId(e,n){const s=this.Ps.ds(n);return P.resolve(s)}containsKey(e,n){return P.resolve(this.Ps.containsKey(n))}}/**
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
 */class v1{constructor(e,n){this.Vs={},this.overlays={},this.Ss=new sh(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=e(this),this.Cs=new y1(this),this.indexManager=new a1,this.remoteDocumentCache=function(s){return new g1(s)}(s=>this.referenceDelegate.xs(s)),this.It=new i1(n),this.Ns=new f1(this.It)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new d1,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.Vs[e.toKey()];return s||(s=new p1(n,this.referenceDelegate),this.Vs[e.toKey()]=s),s}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(e,n,s){Q("MemoryPersistence","Starting transaction:",e);const r=new _1(this.Ss.next());return this.referenceDelegate.ks(),s(r).next(i=>this.referenceDelegate.Os(r).next(()=>i)).toPromise().then(i=>(r.raiseOnCommittedEvent(),i))}Ms(e,n){return P.or(Object.values(this.Vs).map(s=>()=>s.containsKey(e,n)))}}class _1 extends rR{constructor(e){super(),this.currentSequenceNumber=e}}class dh{constructor(e){this.persistence=e,this.Fs=new fh,this.$s=null}static Bs(e){return new dh(e)}get Ls(){if(this.$s)return this.$s;throw oe()}addReference(e,n,s){return this.Fs.addReference(s,n),this.Ls.delete(s.toString()),P.resolve()}removeReference(e,n,s){return this.Fs.removeReference(s,n),this.Ls.add(s.toString()),P.resolve()}markPotentiallyOrphaned(e,n){return this.Ls.add(n.toString()),P.resolve()}removeTarget(e,n){this.Fs.ls(n.targetId).forEach(r=>this.Ls.add(r.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(r=>{r.forEach(i=>this.Ls.add(i.toString()))}).next(()=>s.removeTargetData(e,n))}ks(){this.$s=new Set}Os(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return P.forEach(this.Ls,s=>{const r=Z.fromPath(s);return this.Us(e,r).next(i=>{i||n.removeEntry(r,le.min())})}).next(()=>(this.$s=null,n.apply(e)))}updateLimboDocument(e,n){return this.Us(e,n).next(s=>{s?this.Ls.delete(n.toString()):this.Ls.add(n.toString())})}xs(e){return 0}Us(e,n){return P.or([()=>P.resolve(this.Fs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ms(e,n)])}}/**
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
 */class ph{constructor(e,n,s,r){this.targetId=e,this.fromCache=n,this.Si=s,this.Di=r}static Ci(e,n){let s=he(),r=he();for(const i of n.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new ph(e,n.fromCache,s,r)}}/**
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
 */class w1{constructor(){this.xi=!1}initialize(e,n){this.Ni=e,this.indexManager=n,this.xi=!0}getDocumentsMatchingQuery(e,n,s,r){return this.ki(e,n).next(i=>i||this.Oi(e,n,r,s)).next(i=>i||this.Mi(e,n))}ki(e,n){if($d(n))return P.resolve(null);let s=Cn(n);return this.indexManager.getIndexType(e,s).next(r=>r===0?null:(n.limit!==null&&r===1&&(n=Kl(n,null,"F"),s=Cn(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(i=>{const o=he(...i);return this.Ni.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,s).next(c=>{const l=this.Fi(n,a);return this.$i(n,l,o,c.readTime)?this.ki(e,Kl(n,null,"F")):this.Bi(e,l,n,c)}))})))}Oi(e,n,s,r){return $d(n)||r.isEqual(le.min())?this.Mi(e,n):this.Ni.getDocuments(e,s).next(i=>{const o=this.Fi(n,i);return this.$i(n,o,s,r)?this.Mi(e,n):(Nd()<=_e.DEBUG&&Q("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),zl(n)),this.Bi(e,o,n,eR(r,-1)))})}Fi(e,n){let s=new He(kv(e));return n.forEach((r,i)=>{ch(e,i)&&(s=s.add(i))}),s}$i(e,n,s,r){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Mi(e,n){return Nd()<=_e.DEBUG&&Q("QueryEngine","Using full collection scan to execute query:",zl(n)),this.Ni.getDocumentsMatchingQuery(e,n,ts.min())}Bi(e,n,s,r){return this.Ni.getDocumentsMatchingQuery(e,s,r).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */class b1{constructor(e,n,s,r){this.persistence=e,this.Li=n,this.It=r,this.Ui=new qe(be),this.qi=new Or(i=>ih(i),oh),this.Ki=new Map,this.Gi=e.getRemoteDocumentCache(),this.Cs=e.getTargetCache(),this.Ns=e.getBundleCache(),this.Qi(s)}Qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new h1(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ui))}}function E1(t,e,n,s){return new b1(t,e,n,s)}async function Qv(t,e){const n=ae(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let r;return n.mutationQueue.getAllMutationBatches(s).next(i=>(r=i,n.Qi(e),n.mutationQueue.getAllMutationBatches(s))).next(i=>{const o=[],a=[];let c=he();for(const l of r){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of i){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return n.localDocuments.getDocuments(s,c).next(l=>({ji:l,removedBatchIds:o,addedBatchIds:a}))})})}function I1(t,e){const n=ae(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const r=e.batch.keys(),i=n.Gi.newChangeBuffer({trackRemovals:!0});return function(o,a,c,l){const u=c.batch,h=u.keys();let f=P.resolve();return h.forEach(d=>{f=f.next(()=>l.getEntry(a,d)).next(m=>{const E=c.docVersions.get(d);De(E!==null),m.version.compareTo(E)<0&&(u.applyToRemoteDocument(m,c),m.isValidDocument()&&(m.setReadTime(c.commitVersion),l.addEntry(m)))})}),f.next(()=>o.mutationQueue.removeMutationBatch(a,u))}(n,s,e,i).next(()=>i.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,r,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(o){let a=he();for(let c=0;c<o.mutationResults.length;++c)o.mutationResults[c].transformResults.length>0&&(a=a.add(o.batch.mutations[c].key));return a}(e))).next(()=>n.localDocuments.getDocuments(s,r))})}function Yv(t){const e=ae(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Cs.getLastRemoteSnapshotVersion(n))}function T1(t,e){const n=ae(t),s=e.snapshotVersion;let r=n.Ui;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Gi.newChangeBuffer({trackRemovals:!0});r=n.Ui;const a=[];e.targetChanges.forEach((u,h)=>{const f=r.get(h);if(!f)return;a.push(n.Cs.removeMatchingKeys(i,u.removedDocuments,h).next(()=>n.Cs.addMatchingKeys(i,u.addedDocuments,h)));let d=f.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.has(h)?d=d.withResumeToken(ht.EMPTY_BYTE_STRING,le.min()).withLastLimboFreeSnapshotVersion(le.min()):u.resumeToken.approximateByteSize()>0&&(d=d.withResumeToken(u.resumeToken,s)),r=r.insert(h,d),function(m,E,I){return m.resumeToken.approximateByteSize()===0||E.snapshotVersion.toMicroseconds()-m.snapshotVersion.toMicroseconds()>=3e8?!0:I.addedDocuments.size+I.modifiedDocuments.size+I.removedDocuments.size>0}(f,d,u)&&a.push(n.Cs.updateTargetData(i,d))});let c=An(),l=he();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,u))}),a.push(S1(i,o,e.documentUpdates).next(u=>{c=u.Wi,l=u.zi})),!s.isEqual(le.min())){const u=n.Cs.getLastRemoteSnapshotVersion(i).next(h=>n.Cs.setTargetsMetadata(i,i.currentSequenceNumber,s));a.push(u)}return P.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,l)).next(()=>c)}).then(i=>(n.Ui=r,i))}function S1(t,e,n){let s=he(),r=he();return n.forEach(i=>s=s.add(i)),e.getEntries(t,s).next(i=>{let o=An();return n.forEach((a,c)=>{const l=i.get(a);c.isFoundDocument()!==l.isFoundDocument()&&(r=r.add(a)),c.isNoDocument()&&c.version.isEqual(le.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):Q("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",c.version)}),{Wi:o,zi:r}})}function C1(t,e){const n=ae(t);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function A1(t,e){const n=ae(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let r;return n.Cs.getTargetData(s,e).next(i=>i?(r=i,P.resolve(r)):n.Cs.allocateTargetId(s).next(o=>(r=new Is(e,o,0,s.currentSequenceNumber),n.Cs.addTargetData(s,r).next(()=>r))))}).then(s=>{const r=n.Ui.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.Ui=n.Ui.insert(s.targetId,s),n.qi.set(e,s.targetId)),s})}async function Yl(t,e,n){const s=ae(t),r=s.Ui.get(e),i=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",i,o=>s.persistence.referenceDelegate.removeTarget(o,r))}catch(o){if(!io(o))throw o;Q("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.Ui=s.Ui.remove(e),s.qi.delete(r.target)}function Yd(t,e,n){const s=ae(t);let r=le.min(),i=he();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,c,l){const u=ae(a),h=u.qi.get(l);return h!==void 0?P.resolve(u.Ui.get(h)):u.Cs.getTargetData(c,l)}(s,o,Cn(e)).next(a=>{if(a)return r=a.lastLimboFreeSnapshotVersion,s.Cs.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>s.Li.getDocumentsMatchingQuery(o,e,n?r:le.min(),n?i:he())).next(a=>(k1(s,IR(e),a),{documents:a,Hi:i})))}function k1(t,e,n){let s=t.Ki.get(e)||le.min();n.forEach((r,i)=>{i.readTime.compareTo(s)>0&&(s=i.readTime)}),t.Ki.set(e,s)}class Xd{constructor(){this.activeTargetIds=$v()}er(e){this.activeTargetIds=this.activeTargetIds.add(e)}nr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}tr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class R1{constructor(){this.Lr=new Xd,this.Ur={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e){return this.Lr.er(e),this.Ur[e]||"not-current"}updateQueryState(e,n,s){this.Ur[e]=n}removeLocalQueryTarget(e){this.Lr.nr(e)}isLocalQueryTarget(e){return this.Lr.activeTargetIds.has(e)}clearQueryState(e){delete this.Ur[e]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(e){return this.Lr.activeTargetIds.has(e)}start(){return this.Lr=new Xd,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class D1{qr(e){}shutdown(){}}/**
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
 */class Jd{constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}qr(e){this.Wr.push(e)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){Q("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Wr)e(0)}jr(){Q("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Wr)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */const O1={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class N1{constructor(e){this.Hr=e.Hr,this.Jr=e.Jr}Yr(e){this.Xr=e}Zr(e){this.eo=e}onMessage(e){this.no=e}close(){this.Jr()}send(e){this.Hr(e)}so(){this.Xr()}io(e){this.eo(e)}ro(e){this.no(e)}}/**
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
 */class x1 extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.oo=n+"://"+e.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get co(){return!1}ao(e,n,s,r,i){const o=this.ho(e,n);Q("RestConnection","Sending: ",o,s);const a={};return this.lo(a,r,i),this.fo(e,o,a,s).then(c=>(Q("RestConnection","Received: ",c),c),c=>{throw $l("RestConnection",`${e} failed with error: `,c,"url: ",o,"request:",s),c})}_o(e,n,s,r,i,o){return this.ao(e,n,s,r,i)}lo(e,n,s){e["X-Goog-Api-Client"]="gl-js/ fire/"+Rr,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((r,i)=>e[i]=r),s&&s.headers.forEach((r,i)=>e[i]=r)}ho(e,n){const s=O1[e];return`${this.oo}/v1/${n}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}fo(e,n,s,r){return new Promise((i,o)=>{const a=new qk;a.setWithCredentials(!0),a.listenOnce($k.COMPLETE,()=>{var l;try{switch(a.getLastErrorCode()){case Yc.NO_ERROR:const u=a.getResponseJson();Q("Connection","XHR received:",JSON.stringify(u)),i(u);break;case Yc.TIMEOUT:Q("Connection",'RPC "'+e+'" timed out'),o(new J(x.DEADLINE_EXCEEDED,"Request time out"));break;case Yc.HTTP_ERROR:const h=a.getStatus();if(Q("Connection",'RPC "'+e+'" failed with status:',h,"response text:",a.getResponseText()),h>0){let f=a.getResponseJson();Array.isArray(f)&&(f=f[0]);const d=(l=f)===null||l===void 0?void 0:l.error;if(d&&d.status&&d.message){const m=function(E){const I=E.toLowerCase().replace(/_/g,"-");return Object.values(x).indexOf(I)>=0?I:x.UNKNOWN}(d.status);o(new J(m,d.message))}else o(new J(x.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new J(x.UNAVAILABLE,"Connection failed."));break;default:oe()}}finally{Q("Connection",'RPC "'+e+'" completed.')}});const c=JSON.stringify(r);a.send(n,"POST",c,s,15)})}wo(e,n,s){const r=[this.oo,"/","google.firestore.v1.Firestore","/",e,"/channel"],i=Vk(),o=Bk(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new Hk({})),this.lo(a.initMessageHeaders,n,s),a.encodeInitMessageHeaders=!0;const c=r.join("");Q("Connection","Creating WebChannel: "+c,a);const l=i.createWebChannel(c,a);let u=!1,h=!1;const f=new N1({Hr:m=>{h?Q("Connection","Not sending because WebChannel is closed:",m):(u||(Q("Connection","Opening WebChannel transport."),l.open(),u=!0),Q("Connection","WebChannel sending:",m),l.send(m))},Jr:()=>l.close()}),d=(m,E,I)=>{m.listen(E,v=>{try{I(v)}catch(g){setTimeout(()=>{throw g},0)}})};return d(l,Ao.EventType.OPEN,()=>{h||Q("Connection","WebChannel transport opened.")}),d(l,Ao.EventType.CLOSE,()=>{h||(h=!0,Q("Connection","WebChannel transport closed"),f.io())}),d(l,Ao.EventType.ERROR,m=>{h||(h=!0,$l("Connection","WebChannel transport errored:",m),f.io(new J(x.UNAVAILABLE,"The operation could not be completed")))}),d(l,Ao.EventType.MESSAGE,m=>{var E;if(!h){const I=m.data[0];De(!!I);const v=I,g=v.error||((E=v[0])===null||E===void 0?void 0:E.error);if(g){Q("Connection","WebChannel received error:",g);const w=g.status;let T=function(L){const N=Ve[L];if(N!==void 0)return Uv(N)}(w),A=g.message;T===void 0&&(T=x.INTERNAL,A="Unknown error status: "+w+" with message "+g.message),h=!0,f.io(new J(T,A)),l.close()}else Q("Connection","WebChannel received:",I),f.ro(I)}}),d(o,jk.STAT_EVENT,m=>{m.stat===Dd.PROXY?Q("Connection","Detected buffering proxy"):m.stat===Dd.NOPROXY&&Q("Connection","Detected no buffering proxy")}),setTimeout(()=>{f.so()},0),f}}function Jc(){return typeof document<"u"?document:null}/**
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
 */function vc(t){return new jR(t,!0)}class Xv{constructor(e,n,s=1e3,r=1.5,i=6e4){this.Hs=e,this.timerId=n,this.mo=s,this.yo=r,this.po=i,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(e){this.cancel();const n=Math.floor(this.Io+this.bo()),s=Math.max(0,Date.now()-this.Eo),r=Math.max(0,n-s);r>0&&Q("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Io} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.To=this.Hs.enqueueAfterDelay(this.timerId,r,()=>(this.Eo=Date.now(),e())),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){this.To!==null&&(this.To.skipDelay(),this.To=null)}cancel(){this.To!==null&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}/**
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
 */class Jv{constructor(e,n,s,r,i,o,a,c){this.Hs=e,this.vo=s,this.Vo=r,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.So=0,this.Do=null,this.Co=null,this.stream=null,this.xo=new Xv(e,n)}No(){return this.state===1||this.state===5||this.ko()}ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Oo()}async stop(){this.No()&&await this.close(0)}Mo(){this.state=0,this.xo.reset()}Fo(){this.ko()&&this.Do===null&&(this.Do=this.Hs.enqueueAfterDelay(this.vo,6e4,()=>this.$o()))}Bo(e){this.Lo(),this.stream.send(e)}async $o(){if(this.ko())return this.close(0)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}Uo(){this.Co&&(this.Co.cancel(),this.Co=null)}async close(e,n){this.Lo(),this.Uo(),this.xo.cancel(),this.So++,e!==4?this.xo.reset():n&&n.code===x.RESOURCE_EXHAUSTED?(Sn(n.toString()),Sn("Using maximum backoff delay to prevent overloading the backend."),this.xo.Ao()):n&&n.code===x.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.qo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(n)}qo(){}auth(){this.state=1;const e=this.Ko(this.So),n=this.So;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,r])=>{this.So===n&&this.Go(s,r)},s=>{e(()=>{const r=new J(x.UNKNOWN,"Fetching auth token failed: "+s.message);return this.Qo(r)})})}Go(e,n){const s=this.Ko(this.So);this.stream=this.jo(e,n),this.stream.Yr(()=>{s(()=>(this.state=2,this.Co=this.Hs.enqueueAfterDelay(this.Vo,1e4,()=>(this.ko()&&(this.state=3),Promise.resolve())),this.listener.Yr()))}),this.stream.Zr(r=>{s(()=>this.Qo(r))}),this.stream.onMessage(r=>{s(()=>this.onMessage(r))})}Oo(){this.state=5,this.xo.Ro(async()=>{this.state=0,this.start()})}Qo(e){return Q("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Ko(e){return n=>{this.Hs.enqueueAndForget(()=>this.So===e?n():(Q("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class P1 extends Jv{constructor(e,n,s,r,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,r,o),this.It=i}jo(e,n){return this.connection.wo("Listen",e,n)}onMessage(e){this.xo.reset();const n=KR(this.It,e),s=function(r){if(!("targetChange"in r))return le.min();const i=r.targetChange;return i.targetIds&&i.targetIds.length?le.min():i.readTime?wn(i.readTime):le.min()}(e);return this.listener.Wo(n,s)}zo(e){const n={};n.database=Ql(this.It),n.addTarget=function(r,i){let o;const a=i.target;return o=ql(a)?{documents:GR(r,a)}:{query:QR(r,a)},o.targetId=i.targetId,i.resumeToken.approximateByteSize()>0?o.resumeToken=qv(r,i.resumeToken):i.snapshotVersion.compareTo(le.min())>0&&(o.readTime=_a(r,i.snapshotVersion.toTimestamp())),o}(this.It,e);const s=XR(this.It,e);s&&(n.labels=s),this.Bo(n)}Ho(e){const n={};n.database=Ql(this.It),n.removeTarget=e,this.Bo(n)}}class M1 extends Jv{constructor(e,n,s,r,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,r,o),this.It=i,this.Jo=!1}get Yo(){return this.Jo}start(){this.Jo=!1,this.lastStreamToken=void 0,super.start()}qo(){this.Jo&&this.Xo([])}jo(e,n){return this.connection.wo("Write",e,n)}onMessage(e){if(De(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Jo){this.xo.reset();const n=WR(e.writeResults,e.commitTime),s=wn(e.commitTime);return this.listener.Zo(s,n)}return De(!e.writeResults||e.writeResults.length===0),this.Jo=!0,this.listener.tu()}eu(){const e={};e.database=Ql(this.It),this.Bo(e)}Xo(e){const n={streamToken:this.lastStreamToken,writes:e.map(s=>zR(this.It,s))};this.Bo(n)}}/**
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
 */class L1 extends class{}{constructor(e,n,s,r){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=s,this.It=r,this.nu=!1}su(){if(this.nu)throw new J(x.FAILED_PRECONDITION,"The client has already been terminated.")}ao(e,n,s){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.connection.ao(e,n,s,r,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===x.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new J(x.UNKNOWN,r.toString())})}_o(e,n,s,r){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection._o(e,n,s,i,o,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===x.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new J(x.UNKNOWN,i.toString())})}terminate(){this.nu=!0}}class U1{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.iu=0,this.ru=null,this.ou=!0}uu(){this.iu===0&&(this.cu("Unknown"),this.ru=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ru=null,this.au("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve())))}hu(e){this.state==="Online"?this.cu("Unknown"):(this.iu++,this.iu>=1&&(this.lu(),this.au(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.cu("Offline")))}set(e){this.lu(),this.iu=0,e==="Online"&&(this.ou=!1),this.cu(e)}cu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}au(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ou?(Sn(n),this.ou=!1):Q("OnlineStateTracker",n)}lu(){this.ru!==null&&(this.ru.cancel(),this.ru=null)}}/**
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
 */class F1{constructor(e,n,s,r,i){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.fu=[],this.du=new Map,this._u=new Set,this.wu=[],this.mu=i,this.mu.qr(o=>{s.enqueueAndForget(async()=>{Vs(this)&&(Q("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=ae(a);c._u.add(4),await co(c),c.gu.set("Unknown"),c._u.delete(4),await _c(c)}(this))})}),this.gu=new U1(s,r)}}async function _c(t){if(Vs(t))for(const e of t.wu)await e(!0)}async function co(t){for(const e of t.wu)await e(!1)}function Zv(t,e){const n=ae(t);n.du.has(e.targetId)||(n.du.set(e.targetId,e),yh(n)?mh(n):Nr(n).ko()&&gh(n,e))}function e_(t,e){const n=ae(t),s=Nr(n);n.du.delete(e),s.ko()&&t_(n,e),n.du.size===0&&(s.ko()?s.Fo():Vs(n)&&n.gu.set("Unknown"))}function gh(t,e){t.yu.Mt(e.targetId),Nr(t).zo(e)}function t_(t,e){t.yu.Mt(e),Nr(t).Ho(e)}function mh(t){t.yu=new VR({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),se:e=>t.du.get(e)||null}),Nr(t).start(),t.gu.uu()}function yh(t){return Vs(t)&&!Nr(t).No()&&t.du.size>0}function Vs(t){return ae(t)._u.size===0}function n_(t){t.yu=void 0}async function V1(t){t.du.forEach((e,n)=>{gh(t,e)})}async function B1(t,e){n_(t),yh(t)?(t.gu.hu(e),mh(t)):t.gu.set("Unknown")}async function $1(t,e,n){if(t.gu.set("Online"),e instanceof Hv&&e.state===2&&e.cause)try{await async function(s,r){const i=r.cause;for(const o of r.targetIds)s.du.has(o)&&(await s.remoteSyncer.rejectListen(o,i),s.du.delete(o),s.yu.removeTarget(o))}(t,e)}catch(s){Q("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await wa(t,s)}else if(e instanceof Bo?t.yu.Gt(e):e instanceof jv?t.yu.Yt(e):t.yu.Wt(e),!n.isEqual(le.min()))try{const s=await Yv(t.localStore);n.compareTo(s)>=0&&await function(r,i){const o=r.yu.te(i);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const l=r.du.get(c);l&&r.du.set(c,l.withResumeToken(a.resumeToken,i))}}),o.targetMismatches.forEach(a=>{const c=r.du.get(a);if(!c)return;r.du.set(a,c.withResumeToken(ht.EMPTY_BYTE_STRING,c.snapshotVersion)),t_(r,a);const l=new Is(c.target,a,1,c.sequenceNumber);gh(r,l)}),r.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(s){Q("RemoteStore","Failed to raise snapshot:",s),await wa(t,s)}}async function wa(t,e,n){if(!io(e))throw e;t._u.add(1),await co(t),t.gu.set("Offline"),n||(n=()=>Yv(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{Q("RemoteStore","Retrying IndexedDB access"),await n(),t._u.delete(1),await _c(t)})}function s_(t,e){return e().catch(n=>wa(t,n,e))}async function wc(t){const e=ae(t),n=ss(e);let s=e.fu.length>0?e.fu[e.fu.length-1].batchId:-1;for(;j1(e);)try{const r=await C1(e.localStore,s);if(r===null){e.fu.length===0&&n.Fo();break}s=r.batchId,H1(e,r)}catch(r){await wa(e,r)}r_(e)&&i_(e)}function j1(t){return Vs(t)&&t.fu.length<10}function H1(t,e){t.fu.push(e);const n=ss(t);n.ko()&&n.Yo&&n.Xo(e.mutations)}function r_(t){return Vs(t)&&!ss(t).No()&&t.fu.length>0}function i_(t){ss(t).start()}async function q1(t){ss(t).eu()}async function K1(t){const e=ss(t);for(const n of t.fu)e.Xo(n.mutations)}async function z1(t,e,n){const s=t.fu.shift(),r=hh.from(s,e,n);await s_(t,()=>t.remoteSyncer.applySuccessfulWrite(r)),await wc(t)}async function W1(t,e){e&&ss(t).Yo&&await async function(n,s){if(r=s.code,PR(r)&&r!==x.ABORTED){const i=n.fu.shift();ss(n).Mo(),await s_(n,()=>n.remoteSyncer.rejectFailedWrite(i.batchId,s)),await wc(n)}var r}(t,e),r_(t)&&i_(t)}async function Zd(t,e){const n=ae(t);n.asyncQueue.verifyOperationInProgress(),Q("RemoteStore","RemoteStore received new credentials");const s=Vs(n);n._u.add(3),await co(n),s&&n.gu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n._u.delete(3),await _c(n)}async function G1(t,e){const n=ae(t);e?(n._u.delete(2),await _c(n)):e||(n._u.add(2),await co(n),n.gu.set("Unknown"))}function Nr(t){return t.pu||(t.pu=function(e,n,s){const r=ae(e);return r.su(),new P1(n,r.connection,r.authCredentials,r.appCheckCredentials,r.It,s)}(t.datastore,t.asyncQueue,{Yr:V1.bind(null,t),Zr:B1.bind(null,t),Wo:$1.bind(null,t)}),t.wu.push(async e=>{e?(t.pu.Mo(),yh(t)?mh(t):t.gu.set("Unknown")):(await t.pu.stop(),n_(t))})),t.pu}function ss(t){return t.Iu||(t.Iu=function(e,n,s){const r=ae(e);return r.su(),new M1(n,r.connection,r.authCredentials,r.appCheckCredentials,r.It,s)}(t.datastore,t.asyncQueue,{Yr:q1.bind(null,t),Zr:W1.bind(null,t),tu:K1.bind(null,t),Zo:z1.bind(null,t)}),t.wu.push(async e=>{e?(t.Iu.Mo(),await wc(t)):(await t.Iu.stop(),t.fu.length>0&&(Q("RemoteStore",`Stopping write stream with ${t.fu.length} pending writes`),t.fu=[]))})),t.Iu}/**
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
 */class vh{constructor(e,n,s,r,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new _n,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,s,r,i){const o=Date.now()+s,a=new vh(e,n,o,r,i);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new J(x.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function _h(t,e){if(Sn("AsyncQueue",`${e}: ${t}`),io(t))return new J(x.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class ir{constructor(e){this.comparator=e?(n,s)=>e(n,s)||Z.comparator(n.key,s.key):(n,s)=>Z.comparator(n.key,s.key),this.keyedMap=Kr(),this.sortedSet=new qe(this.comparator)}static emptySet(e){return new ir(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof ir)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new ir;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
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
 */class ep{constructor(){this.Tu=new qe(Z.comparator)}track(e){const n=e.doc.key,s=this.Tu.get(n);s?e.type!==0&&s.type===3?this.Tu=this.Tu.insert(n,e):e.type===3&&s.type!==1?this.Tu=this.Tu.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.Tu=this.Tu.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.Tu=this.Tu.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.Tu=this.Tu.remove(n):e.type===1&&s.type===2?this.Tu=this.Tu.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.Tu=this.Tu.insert(n,{type:2,doc:e.doc}):oe():this.Tu=this.Tu.insert(n,e)}Eu(){const e=[];return this.Tu.inorderTraversal((n,s)=>{e.push(s)}),e}}class wr{constructor(e,n,s,r,i,o,a,c,l){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=l}static fromInitialDocuments(e,n,s,r,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new wr(e,n,ir.emptySet(n),o,s,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&pc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let r=0;r<n.length;r++)if(n[r].type!==s[r].type||!n[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
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
 */class Q1{constructor(){this.Au=void 0,this.listeners=[]}}class Y1{constructor(){this.queries=new Or(e=>Av(e),pc),this.onlineState="Unknown",this.Ru=new Set}}async function o_(t,e){const n=ae(t),s=e.query;let r=!1,i=n.queries.get(s);if(i||(r=!0,i=new Q1),r)try{i.Au=await n.onListen(s)}catch(o){const a=_h(o,`Initialization of query '${zl(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,i),i.listeners.push(e),e.bu(n.onlineState),i.Au&&e.Pu(i.Au)&&wh(n)}async function a_(t,e){const n=ae(t),s=e.query;let r=!1;const i=n.queries.get(s);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),r=i.listeners.length===0)}if(r)return n.queries.delete(s),n.onUnlisten(s)}function X1(t,e){const n=ae(t);let s=!1;for(const r of e){const i=r.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.Pu(r)&&(s=!0);o.Au=r}}s&&wh(n)}function J1(t,e,n){const s=ae(t),r=s.queries.get(e);if(r)for(const i of r.listeners)i.onError(n);s.queries.delete(e)}function wh(t){t.Ru.forEach(e=>{e.next()})}class c_{constructor(e,n,s){this.query=e,this.vu=n,this.Vu=!1,this.Su=null,this.onlineState="Unknown",this.options=s||{}}Pu(e){if(!this.options.includeMetadataChanges){const s=[];for(const r of e.docChanges)r.type!==3&&s.push(r);e=new wr(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Vu?this.Du(e)&&(this.vu.next(e),n=!0):this.Cu(e,this.onlineState)&&(this.xu(e),n=!0),this.Su=e,n}onError(e){this.vu.error(e)}bu(e){this.onlineState=e;let n=!1;return this.Su&&!this.Vu&&this.Cu(this.Su,e)&&(this.xu(this.Su),n=!0),n}Cu(e,n){if(!e.fromCache)return!0;const s=n!=="Offline";return(!this.options.Nu||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Du(e){if(e.docChanges.length>0)return!0;const n=this.Su&&this.Su.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}xu(e){e=wr.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Vu=!0,this.vu.next(e)}}/**
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
 */class l_{constructor(e){this.key=e}}class u_{constructor(e){this.key=e}}class Z1{constructor(e,n){this.query=e,this.Uu=n,this.qu=null,this.hasCachedResults=!1,this.current=!1,this.Ku=he(),this.mutatedKeys=he(),this.Gu=kv(e),this.Qu=new ir(this.Gu)}get ju(){return this.Uu}Wu(e,n){const s=n?n.zu:new ep,r=n?n.Qu:this.Qu;let i=n?n.mutatedKeys:this.mutatedKeys,o=r,a=!1;const c=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,l=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((u,h)=>{const f=r.get(u),d=ch(this.query,h)?h:null,m=!!f&&this.mutatedKeys.has(f.key),E=!!d&&(d.hasLocalMutations||this.mutatedKeys.has(d.key)&&d.hasCommittedMutations);let I=!1;f&&d?f.data.isEqual(d.data)?m!==E&&(s.track({type:3,doc:d}),I=!0):this.Hu(f,d)||(s.track({type:2,doc:d}),I=!0,(c&&this.Gu(d,c)>0||l&&this.Gu(d,l)<0)&&(a=!0)):!f&&d?(s.track({type:0,doc:d}),I=!0):f&&!d&&(s.track({type:1,doc:f}),I=!0,(c||l)&&(a=!0)),I&&(d?(o=o.add(d),i=E?i.add(u):i.delete(u)):(o=o.delete(u),i=i.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),i=i.delete(u.key),s.track({type:1,doc:u})}return{Qu:o,zu:s,$i:a,mutatedKeys:i}}Hu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s){const r=this.Qu;this.Qu=e.Qu,this.mutatedKeys=e.mutatedKeys;const i=e.zu.Eu();i.sort((l,u)=>function(h,f){const d=m=>{switch(m){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return oe()}};return d(h)-d(f)}(l.type,u.type)||this.Gu(l.doc,u.doc)),this.Ju(s);const o=n?this.Yu():[],a=this.Ku.size===0&&this.current?1:0,c=a!==this.qu;return this.qu=a,i.length!==0||c?{snapshot:new wr(this.query,e.Qu,r,i,e.mutatedKeys,a===0,c,!1,!!s&&s.resumeToken.approximateByteSize()>0),Xu:o}:{Xu:o}}bu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Qu:this.Qu,zu:new ep,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Xu:[]}}Zu(e){return!this.Uu.has(e)&&!!this.Qu.has(e)&&!this.Qu.get(e).hasLocalMutations}Ju(e){e&&(e.addedDocuments.forEach(n=>this.Uu=this.Uu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Uu=this.Uu.delete(n)),this.current=e.current)}Yu(){if(!this.current)return[];const e=this.Ku;this.Ku=he(),this.Qu.forEach(s=>{this.Zu(s.key)&&(this.Ku=this.Ku.add(s.key))});const n=[];return e.forEach(s=>{this.Ku.has(s)||n.push(new u_(s))}),this.Ku.forEach(s=>{e.has(s)||n.push(new l_(s))}),n}tc(e){this.Uu=e.Hi,this.Ku=he();const n=this.Wu(e.documents);return this.applyChanges(n,!0)}ec(){return wr.fromInitialDocuments(this.query,this.Qu,this.mutatedKeys,this.qu===0,this.hasCachedResults)}}class eD{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class tD{constructor(e){this.key=e,this.nc=!1}}class nD{constructor(e,n,s,r,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.sc={},this.ic=new Or(a=>Av(a),pc),this.rc=new Map,this.oc=new Set,this.uc=new qe(Z.comparator),this.cc=new Map,this.ac=new fh,this.hc={},this.lc=new Map,this.fc=_r.vn(),this.onlineState="Unknown",this.dc=void 0}get isPrimaryClient(){return this.dc===!0}}async function sD(t,e){const n=dD(t);let s,r;const i=n.ic.get(e);if(i)s=i.targetId,n.sharedClientState.addLocalQueryTarget(s),r=i.view.ec();else{const o=await A1(n.localStore,Cn(e));n.isPrimaryClient&&Zv(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,r=await rD(n,e,s,a==="current",o.resumeToken)}return r}async function rD(t,e,n,s,r){t._c=(h,f,d)=>async function(m,E,I,v){let g=E.view.Wu(I);g.$i&&(g=await Yd(m.localStore,E.query,!1).then(({documents:A})=>E.view.Wu(A,g)));const w=v&&v.targetChanges.get(E.targetId),T=E.view.applyChanges(g,m.isPrimaryClient,w);return np(m,E.targetId,T.Xu),T.snapshot}(t,h,f,d);const i=await Yd(t.localStore,e,!0),o=new Z1(e,i.Hi),a=o.Wu(i.documents),c=ao.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline",r),l=o.applyChanges(a,t.isPrimaryClient,c);np(t,n,l.Xu);const u=new eD(e,n,o);return t.ic.set(e,u),t.rc.has(n)?t.rc.get(n).push(e):t.rc.set(n,[e]),l.snapshot}async function iD(t,e){const n=ae(t),s=n.ic.get(e),r=n.rc.get(s.targetId);if(r.length>1)return n.rc.set(s.targetId,r.filter(i=>!pc(i,e))),void n.ic.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await Yl(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),e_(n.remoteStore,s.targetId),Xl(n,s.targetId)}).catch(ro)):(Xl(n,s.targetId),await Yl(n.localStore,s.targetId,!0))}async function oD(t,e,n){const s=pD(t);try{const r=await function(i,o){const a=ae(i),c=je.now(),l=o.reduce((f,d)=>f.add(d.key),he());let u,h;return a.persistence.runTransaction("Locally write mutations","readwrite",f=>{let d=An(),m=he();return a.Gi.getEntries(f,l).next(E=>{d=E,d.forEach((I,v)=>{v.isValidDocument()||(m=m.add(I))})}).next(()=>a.localDocuments.getOverlayedDocuments(f,d)).next(E=>{u=E;const I=[];for(const v of o){const g=OR(v,u.get(v.key).overlayedDocument);g!=null&&I.push(new Fs(v.key,g,Sv(g.value.mapValue),on.exists(!0)))}return a.mutationQueue.addMutationBatch(f,c,I,o)}).next(E=>{h=E;const I=E.applyToLocalDocumentSet(u,m);return a.documentOverlayCache.saveOverlays(f,E.batchId,I)})}).then(()=>({batchId:h.batchId,changes:Vv(u)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(r.batchId),function(i,o,a){let c=i.hc[i.currentUser.toKey()];c||(c=new qe(be)),c=c.insert(o,a),i.hc[i.currentUser.toKey()]=c}(s,r.batchId,n),await lo(s,r.changes),await wc(s.remoteStore)}catch(r){const i=_h(r,"Failed to persist write");n.reject(i)}}async function h_(t,e){const n=ae(t);try{const s=await T1(n.localStore,e);e.targetChanges.forEach((r,i)=>{const o=n.cc.get(i);o&&(De(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?o.nc=!0:r.modifiedDocuments.size>0?De(o.nc):r.removedDocuments.size>0&&(De(o.nc),o.nc=!1))}),await lo(n,s,e)}catch(s){await ro(s)}}function tp(t,e,n){const s=ae(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const r=[];s.ic.forEach((i,o)=>{const a=o.view.bu(e);a.snapshot&&r.push(a.snapshot)}),function(i,o){const a=ae(i);a.onlineState=o;let c=!1;a.queries.forEach((l,u)=>{for(const h of u.listeners)h.bu(o)&&(c=!0)}),c&&wh(a)}(s.eventManager,e),r.length&&s.sc.Wo(r),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function aD(t,e,n){const s=ae(t);s.sharedClientState.updateQueryState(e,"rejected",n);const r=s.cc.get(e),i=r&&r.key;if(i){let o=new qe(Z.comparator);o=o.insert(i,Je.newNoDocument(i,le.min()));const a=he().add(i),c=new yc(le.min(),new Map,new He(be),o,a);await h_(s,c),s.uc=s.uc.remove(i),s.cc.delete(e),bh(s)}else await Yl(s.localStore,e,!1).then(()=>Xl(s,e,n)).catch(ro)}async function cD(t,e){const n=ae(t),s=e.batch.batchId;try{const r=await I1(n.localStore,e);d_(n,s,null),f_(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await lo(n,r)}catch(r){await ro(r)}}async function lD(t,e,n){const s=ae(t);try{const r=await function(i,o){const a=ae(i);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let l;return a.mutationQueue.lookupMutationBatch(c,o).next(u=>(De(u!==null),l=u.keys(),a.mutationQueue.removeMutationBatch(c,u))).next(()=>a.mutationQueue.performConsistencyCheck(c)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(c,l,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,l)).next(()=>a.localDocuments.getDocuments(c,l))})}(s.localStore,e);d_(s,e,n),f_(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await lo(s,r)}catch(r){await ro(r)}}function f_(t,e){(t.lc.get(e)||[]).forEach(n=>{n.resolve()}),t.lc.delete(e)}function d_(t,e,n){const s=ae(t);let r=s.hc[s.currentUser.toKey()];if(r){const i=r.get(e);i&&(n?i.reject(n):i.resolve(),r=r.remove(e)),s.hc[s.currentUser.toKey()]=r}}function Xl(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.rc.get(e))t.ic.delete(s),n&&t.sc.wc(s,n);t.rc.delete(e),t.isPrimaryClient&&t.ac.ls(e).forEach(s=>{t.ac.containsKey(s)||p_(t,s)})}function p_(t,e){t.oc.delete(e.path.canonicalString());const n=t.uc.get(e);n!==null&&(e_(t.remoteStore,n),t.uc=t.uc.remove(e),t.cc.delete(n),bh(t))}function np(t,e,n){for(const s of n)s instanceof l_?(t.ac.addReference(s.key,e),uD(t,s)):s instanceof u_?(Q("SyncEngine","Document no longer in limbo: "+s.key),t.ac.removeReference(s.key,e),t.ac.containsKey(s.key)||p_(t,s.key)):oe()}function uD(t,e){const n=e.key,s=n.path.canonicalString();t.uc.get(n)||t.oc.has(s)||(Q("SyncEngine","New document in limbo: "+n),t.oc.add(s),bh(t))}function bh(t){for(;t.oc.size>0&&t.uc.size<t.maxConcurrentLimboResolutions;){const e=t.oc.values().next().value;t.oc.delete(e);const n=new Z(xe.fromString(e)),s=t.fc.next();t.cc.set(s,new tD(n)),t.uc=t.uc.insert(n,s),Zv(t.remoteStore,new Is(Cn(ah(n.path)),s,2,sh.at))}}async function lo(t,e,n){const s=ae(t),r=[],i=[],o=[];s.ic.isEmpty()||(s.ic.forEach((a,c)=>{o.push(s._c(c,e,n).then(l=>{if((l||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(c.targetId,l!=null&&l.fromCache?"not-current":"current"),l){r.push(l);const u=ph.Ci(c.targetId,l);i.push(u)}}))}),await Promise.all(o),s.sc.Wo(r),await async function(a,c){const l=ae(a);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>P.forEach(c,h=>P.forEach(h.Si,f=>l.persistence.referenceDelegate.addReference(u,h.targetId,f)).next(()=>P.forEach(h.Di,f=>l.persistence.referenceDelegate.removeReference(u,h.targetId,f)))))}catch(u){if(!io(u))throw u;Q("LocalStore","Failed to update sequence numbers: "+u)}for(const u of c){const h=u.targetId;if(!u.fromCache){const f=l.Ui.get(h),d=f.snapshotVersion,m=f.withLastLimboFreeSnapshotVersion(d);l.Ui=l.Ui.insert(h,m)}}}(s.localStore,i))}async function hD(t,e){const n=ae(t);if(!n.currentUser.isEqual(e)){Q("SyncEngine","User change. New user:",e.toKey());const s=await Qv(n.localStore,e);n.currentUser=e,function(r,i){r.lc.forEach(o=>{o.forEach(a=>{a.reject(new J(x.CANCELLED,i))})}),r.lc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await lo(n,s.ji)}}function fD(t,e){const n=ae(t),s=n.cc.get(e);if(s&&s.nc)return he().add(s.key);{let r=he();const i=n.rc.get(e);if(!i)return r;for(const o of i){const a=n.ic.get(o);r=r.unionWith(a.view.ju)}return r}}function dD(t){const e=ae(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=h_.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=fD.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=aD.bind(null,e),e.sc.Wo=X1.bind(null,e.eventManager),e.sc.wc=J1.bind(null,e.eventManager),e}function pD(t){const e=ae(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=cD.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=lD.bind(null,e),e}class gD{constructor(){this.synchronizeTabs=!1}async initialize(e){this.It=vc(e.databaseInfo.databaseId),this.sharedClientState=this.gc(e),this.persistence=this.yc(e),await this.persistence.start(),this.localStore=this.Ic(e),this.gcScheduler=this.Tc(e,this.localStore),this.indexBackfillerScheduler=this.Ec(e,this.localStore)}Tc(e,n){return null}Ec(e,n){return null}Ic(e){return E1(this.persistence,new w1,e.initialUser,this.It)}yc(e){return new v1(dh.Bs,this.It)}gc(e){return new R1}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class mD{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>tp(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=hD.bind(null,this.syncEngine),await G1(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new Y1}createDatastore(e){const n=vc(e.databaseInfo.databaseId),s=(r=e.databaseInfo,new x1(r));var r;return function(i,o,a,c){return new L1(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return n=this.localStore,s=this.datastore,r=e.asyncQueue,i=a=>tp(this.syncEngine,a,0),o=Jd.C()?new Jd:new D1,new F1(n,s,r,i,o);var n,s,r,i,o}createSyncEngine(e,n){return function(s,r,i,o,a,c,l){const u=new nD(s,r,i,o,a,c);return l&&(u.dc=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=ae(e);Q("RemoteStore","RemoteStore shutting down."),n._u.add(5),await co(n),n.mu.shutdown(),n.gu.set("Unknown")}(this.remoteStore)}}/**
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
 */function g_(t,e,n){if(!n)throw new J(x.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function yD(t,e,n,s){if(e===!0&&s===!0)throw new J(x.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function sp(t){if(!Z.isDocumentKey(t))throw new J(x.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function rp(t){if(Z.isDocumentKey(t))throw new J(x.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Eh(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":oe()}function rs(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new J(x.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Eh(t);throw new J(x.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */const ip=new Map;class op{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new J(x.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new J(x.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,yD("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
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
 */class bc{constructor(e,n,s,r){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new op({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new J(x.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new J(x.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new op(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new Kk;switch(n.type){case"gapi":const s=n.client;return new Qk(s,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new J(x.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=ip.get(e);n&&(Q("ComponentProvider","Removing Datastore"),ip.delete(e),n.terminate())}(this),Promise.resolve()}}function vD(t,e,n,s={}){var r;const i=(t=rs(t,bc))._getSettings();if(i.host!=="firestore.googleapis.com"&&i.host!==e&&$l("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},i),{host:`${e}:${n}`,ssl:!1})),s.mockUserToken){let o,a;if(typeof s.mockUserToken=="string")o=s.mockUserToken,a=st.MOCK_USER;else{o=fm(s.mockUserToken,(r=t._app)===null||r===void 0?void 0:r.options.projectId);const c=s.mockUserToken.sub||s.mockUserToken.user_id;if(!c)throw new J(x.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new st(c)}t._authCredentials=new zk(new wv(o,a))}}/**
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
 */class At{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Qn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new At(this.firestore,e,this._key)}}class Ec{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Ec(this.firestore,e,this._query)}}class Qn extends Ec{constructor(e,n,s){super(e,n,ah(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new At(this.firestore,null,new Z(e))}withConverter(e){return new Qn(this.firestore,e,this._path)}}function ux(t,e,...n){if(t=Ge(t),g_("collection","path",e),t instanceof bc){const s=xe.fromString(e,...n);return rp(s),new Qn(t,null,s)}{if(!(t instanceof At||t instanceof Qn))throw new J(x.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(xe.fromString(e,...n));return rp(s),new Qn(t.firestore,null,s)}}function _D(t,e,...n){if(t=Ge(t),arguments.length===1&&(e=bv.R()),g_("doc","path",e),t instanceof bc){const s=xe.fromString(e,...n);return sp(s),new At(t,null,new Z(s))}{if(!(t instanceof At||t instanceof Qn))throw new J(x.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(xe.fromString(e,...n));return sp(s),new At(t.firestore,t instanceof Qn?t.converter:null,new Z(s))}}/**
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
 *//**
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
 */class m_{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Rc(this.observer.next,e)}error(e){this.observer.error?this.Rc(this.observer.error,e):Sn("Uncaught Error in snapshot listener:",e.toString())}bc(){this.muted=!0}Rc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class wD{constructor(e,n,s,r){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=r,this.user=st.UNAUTHENTICATED,this.clientId=bv.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async i=>{Q("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(s,i=>(Q("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new J(x.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new _n;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=_h(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function bD(t,e){t.asyncQueue.verifyOperationInProgress(),Q("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async r=>{s.isEqual(r)||(await Qv(e.localStore,r),s=r)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function ED(t,e){t.asyncQueue.verifyOperationInProgress();const n=await ID(t);Q("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener(r=>Zd(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>Zd(e.remoteStore,i)),t.onlineComponents=e}async function ID(t){return t.offlineComponents||(Q("FirestoreClient","Using default OfflineComponentProvider"),await bD(t,new gD)),t.offlineComponents}async function y_(t){return t.onlineComponents||(Q("FirestoreClient","Using default OnlineComponentProvider"),await ED(t,new mD)),t.onlineComponents}function TD(t){return y_(t).then(e=>e.syncEngine)}async function v_(t){const e=await y_(t),n=e.eventManager;return n.onListen=sD.bind(null,e.syncEngine),n.onUnlisten=iD.bind(null,e.syncEngine),n}function SD(t,e,n={}){const s=new _n;return t.asyncQueue.enqueueAndForget(async()=>function(r,i,o,a,c){const l=new m_({next:h=>{i.enqueueAndForget(()=>a_(r,u));const f=h.docs.has(o);!f&&h.fromCache?c.reject(new J(x.UNAVAILABLE,"Failed to get document because the client is offline.")):f&&h.fromCache&&a&&a.source==="server"?c.reject(new J(x.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(h)},error:h=>c.reject(h)}),u=new c_(ah(o.path),l,{includeMetadataChanges:!0,Nu:!0});return o_(r,u)}(await v_(t),t.asyncQueue,e,n,s)),s.promise}function CD(t,e,n={}){const s=new _n;return t.asyncQueue.enqueueAndForget(async()=>function(r,i,o,a,c){const l=new m_({next:h=>{i.enqueueAndForget(()=>a_(r,u)),h.fromCache&&a.source==="server"?c.reject(new J(x.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(h)},error:h=>c.reject(h)}),u=new c_(o,l,{includeMetadataChanges:!0,Nu:!0});return o_(r,u)}(await v_(t),t.asyncQueue,e,n,s)),s.promise}class AD{constructor(){this.Bc=Promise.resolve(),this.Lc=[],this.Uc=!1,this.qc=[],this.Kc=null,this.Gc=!1,this.Qc=!1,this.jc=[],this.xo=new Xv(this,"async_queue_retry"),this.Wc=()=>{const n=Jc();n&&Q("AsyncQueue","Visibility state changed to "+n.visibilityState),this.xo.Po()};const e=Jc();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Wc)}get isShuttingDown(){return this.Uc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.zc(),this.Hc(e)}enterRestrictedMode(e){if(!this.Uc){this.Uc=!0,this.Qc=e||!1;const n=Jc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Wc)}}enqueue(e){if(this.zc(),this.Uc)return new Promise(()=>{});const n=new _n;return this.Hc(()=>this.Uc&&this.Qc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Lc.push(e),this.Jc()))}async Jc(){if(this.Lc.length!==0){try{await this.Lc[0](),this.Lc.shift(),this.xo.reset()}catch(e){if(!io(e))throw e;Q("AsyncQueue","Operation failed with retryable error: "+e)}this.Lc.length>0&&this.xo.Ro(()=>this.Jc())}}Hc(e){const n=this.Bc.then(()=>(this.Gc=!0,e().catch(s=>{this.Kc=s,this.Gc=!1;const r=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(s);throw Sn("INTERNAL UNHANDLED ERROR: ",r),s}).then(s=>(this.Gc=!1,s))));return this.Bc=n,n}enqueueAfterDelay(e,n,s){this.zc(),this.jc.indexOf(e)>-1&&(n=0);const r=vh.createAndSchedule(this,e,n,s,i=>this.Yc(i));return this.qc.push(r),r}zc(){this.Kc&&oe()}verifyOperationInProgress(){}async Xc(){let e;do e=this.Bc,await e;while(e!==this.Bc)}Zc(e){for(const n of this.qc)if(n.timerId===e)return!0;return!1}ta(e){return this.Xc().then(()=>{this.qc.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.qc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Xc()})}ea(e){this.jc.push(e)}Yc(e){const n=this.qc.indexOf(e);this.qc.splice(n,1)}}class uo extends bc{constructor(e,n,s,r){super(e,n,s,r),this.type="firestore",this._queue=new AD,this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||__(this),this._firestoreClient.terminate()}}function kD(t,e){const n=typeof t=="object"?t:Ka(),s=typeof t=="string"?t:e||"(default)",r=is(n,"firestore").getImmediate({identifier:s});if(!r._initialized){const i=um("firestore");i&&vD(r,...i)}return r}function Ih(t){return t._firestoreClient||__(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function __(t){var e;const n=t._freezeSettings(),s=function(r,i,o,a){return new oR(r,i,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new wD(t._authCredentials,t._appCheckCredentials,t._queue,s)}/**
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
 *//**
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
 */class br{constructor(e){this._byteString=e}static fromBase64String(e){try{return new br(ht.fromBase64String(e))}catch(n){throw new J(x.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new br(ht.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Th{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new J(x.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ot(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class w_{constructor(e){this._methodName=e}}/**
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
 */class Sh{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new J(x.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new J(x.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return be(this._lat,e._lat)||be(this._long,e._long)}}/**
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
 */const RD=/^__.*__$/;class DD{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new Fs(e,this.data,this.fieldMask,n,this.fieldTransforms):new oo(e,this.data,n,this.fieldTransforms)}}function b_(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw oe()}}class Ch{constructor(e,n,s,r,i,o){this.settings=e,this.databaseId=n,this.It=s,this.ignoreUndefinedProperties=r,i===void 0&&this.na(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get sa(){return this.settings.sa}ia(e){return new Ch(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.It,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ra(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.ia({path:s,oa:!1});return r.ua(e),r}ca(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.ia({path:s,oa:!1});return r.na(),r}aa(e){return this.ia({path:void 0,oa:!0})}ha(e){return ba(e,this.settings.methodName,this.settings.la||!1,this.path,this.settings.fa)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}na(){if(this.path)for(let e=0;e<this.path.length;e++)this.ua(this.path.get(e))}ua(e){if(e.length===0)throw this.ha("Document fields must not be empty");if(b_(this.sa)&&RD.test(e))throw this.ha('Document fields cannot begin and end with "__"')}}class OD{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.It=s||vc(e)}da(e,n,s,r=!1){return new Ch({sa:e,methodName:n,fa:s,path:ot.emptyPath(),oa:!1,la:r},this.databaseId,this.It,this.ignoreUndefinedProperties)}}function ND(t){const e=t._freezeSettings(),n=vc(t._databaseId);return new OD(t._databaseId,!!e.ignoreUndefinedProperties,n)}function xD(t,e,n,s,r,i={}){const o=t.da(i.merge||i.mergeFields?2:0,e,n,r);S_("Data must be an object, but it was:",o,s);const a=I_(s,o);let c,l;if(i.merge)c=new rn(o.fieldMask),l=o.fieldTransforms;else if(i.mergeFields){const u=[];for(const h of i.mergeFields){const f=PD(e,h,n);if(!o.contains(f))throw new J(x.INVALID_ARGUMENT,`Field '${f}' is specified in your field mask but missing from your input data.`);LD(u,f)||u.push(f)}c=new rn(u),l=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,l=o.fieldTransforms;return new DD(new xt(a),c,l)}function E_(t,e){if(T_(t=Ge(t)))return S_("Unsupported field value:",e,t),I_(t,e);if(t instanceof w_)return function(n,s){if(!b_(s.sa))throw s.ha(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.ha(`${n._methodName}() is not currently supported inside arrays`);const r=n._toFieldTransform(s);r&&s.fieldTransforms.push(r)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.oa&&e.sa!==4)throw e.ha("Nested arrays are not supported");return function(n,s){const r=[];let i=0;for(const o of n){let a=E_(o,s.aa(i));a==null&&(a={nullValue:"NULL_VALUE"}),r.push(a),i++}return{arrayValue:{values:r}}}(t,e)}return function(n,s){if((n=Ge(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return SR(s.It,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const r=je.fromDate(n);return{timestampValue:_a(s.It,r)}}if(n instanceof je){const r=new je(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:_a(s.It,r)}}if(n instanceof Sh)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof br)return{bytesValue:qv(s.It,n._byteString)};if(n instanceof At){const r=s.databaseId,i=n.firestore._databaseId;if(!i.isEqual(r))throw s.ha(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:uh(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s.ha(`Unsupported field value: ${Eh(n)}`)}(t,e)}function I_(t,e){const n={};return Ev(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Dr(t,(s,r)=>{const i=E_(r,e.ra(s));i!=null&&(n[s]=i)}),{mapValue:{fields:n}}}function T_(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof je||t instanceof Sh||t instanceof br||t instanceof At||t instanceof w_)}function S_(t,e,n){if(!T_(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=Eh(n);throw s==="an object"?e.ha(t+" a custom object"):e.ha(t+" "+s)}}function PD(t,e,n){if((e=Ge(e))instanceof Th)return e._internalPath;if(typeof e=="string")return C_(t,e);throw ba("Field path arguments must be of type string or ",t,!1,void 0,n)}const MD=new RegExp("[~\\*/\\[\\]]");function C_(t,e,n){if(e.search(MD)>=0)throw ba(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Th(...e.split("."))._internalPath}catch{throw ba(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function ba(t,e,n,s,r){const i=s&&!s.isEmpty(),o=r!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${s}`),o&&(c+=` in document ${r}`),c+=")"),new J(x.INVALID_ARGUMENT,a+t+c)}function LD(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class A_{constructor(e,n,s,r,i){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new At(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new UD(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(k_("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class UD extends A_{data(){return super.data()}}function k_(t,e){return typeof e=="string"?C_(t,e):e instanceof Th?e._internalPath:e._delegate._internalPath}/**
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
 */function FD(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new J(x.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}/**
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
 */class VD{convertValue(e,n="none"){switch(Ns(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Be(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(yr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw oe()}}convertObject(e,n){const s={};return Dr(e.fields,(r,i)=>{s[r]=this.convertValue(i,n)}),s}convertGeoPoint(e){return new Sh(Be(e.latitude),Be(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=Tv(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(ki(e));default:return null}}convertTimestamp(e){const n=ns(e);return new je(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=xe.fromString(e);De(Gv(s));const r=new Ri(s.get(1),s.get(3)),i=new Z(s.popFirst(5));return r.isEqual(n)||Sn(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function BD(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}/**
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
 */class zr{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class R_ extends A_{constructor(e,n,s,r,i,o){super(e,n,s,r,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new $o(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(k_("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class $o extends R_{data(e={}){return super.data(e)}}class $D{constructor(e,n,s,r){this._firestore=e,this._userDataWriter=n,this._snapshot=r,this.metadata=new zr(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new $o(this._firestore,this._userDataWriter,s.key,s,new zr(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new J(x.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,r){if(s._snapshot.oldDocs.isEmpty()){let i=0;return s._snapshot.docChanges.map(o=>{const a=new $o(s._firestore,s._userDataWriter,o.doc.key,o.doc,new zr(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:i++}})}{let i=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>r||o.type!==3).map(o=>{const a=new $o(s._firestore,s._userDataWriter,o.doc.key,o.doc,new zr(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,l=-1;return o.type!==0&&(c=i.indexOf(o.doc.key),i=i.delete(o.doc.key)),o.type!==1&&(i=i.add(o.doc),l=i.indexOf(o.doc.key)),{type:jD(o.type),doc:a,oldIndex:c,newIndex:l}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function jD(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return oe()}}/**
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
 */function hx(t){t=rs(t,At);const e=rs(t.firestore,uo);return SD(Ih(e),t._key).then(n=>qD(e,t,n))}class D_ extends VD{constructor(e){super(),this.firestore=e}convertBytes(e){return new br(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new At(this.firestore,null,n)}}function fx(t){t=rs(t,Ec);const e=rs(t.firestore,uo),n=Ih(e),s=new D_(e);return FD(t._query),CD(n,t._query).then(r=>new $D(e,s,t,r))}function dx(t,e,n){t=rs(t,At);const s=rs(t.firestore,uo),r=BD(t.converter,e,n);return O_(s,[xD(ND(s),"setDoc",t._key,r,t.converter!==null,n).toMutation(t._key,on.none())])}function HD(t){return O_(rs(t.firestore,uo),[new lh(t._key,on.none())])}function O_(t,e){return function(n,s){const r=new _n;return n.asyncQueue.enqueueAndForget(async()=>oD(await TD(n),s,r)),r.promise}(Ih(t),e)}function qD(t,e,n){const s=n.docs.get(e._key),r=new D_(t);return new R_(t,r,e._key,s,new zr(n.hasPendingWrites,n.fromCache),e.converter)}(function(t,e=!0){(function(n){Rr=n})(Sr),Kt(new Ft("firestore",(n,{instanceIdentifier:s,options:r})=>{const i=n.getProvider("app").getImmediate(),o=new uo(new Wk(n.getProvider("auth-internal")),new Xk(n.getProvider("app-check-internal")),function(a,c){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new J(x.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ri(a.options.projectId,c)}(i,s),i);return r=Object.assign({useFetchStreams:e},r),o._setSettings(r),o},"PUBLIC").setMultipleInstances(!0)),_t(Od,"3.7.3",t),_t(Od,"3.7.3","esm2017")})();/**
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
 */const N_="firebasestorage.googleapis.com",KD="storageBucket",zD=2*60*1e3,WD=10*60*1e3;/**
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
 */class cn extends Vt{constructor(e,n,s=0){super(Zc(e),`Firebase Storage: ${n} (${Zc(e)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,cn.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Zc(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}function Zc(t){return"storage/"+t}function GD(){const t="An unknown error occurred, please check the error payload for server response.";return new cn("unknown",t)}function QD(){return new cn("retry-limit-exceeded","Max retry time for operation exceeded, please try again.")}function YD(){return new cn("canceled","User canceled the upload/download.")}function XD(t){return new cn("invalid-url","Invalid URL '"+t+"'.")}function JD(t){return new cn("invalid-default-bucket","Invalid default bucket '"+t+"'.")}function ap(t){return new cn("invalid-argument",t)}function x_(){return new cn("app-deleted","The Firebase app was deleted.")}function ZD(t){return new cn("invalid-root-operation","The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
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
 */class jt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let s;try{s=jt.makeFromUrl(e,n)}catch{return new jt(e,"")}if(s.path==="")return s;throw JD(e)}static makeFromUrl(e,n){let s=null;const r="([A-Za-z0-9.\\-_]+)";function i(T){T.path.charAt(T.path.length-1)==="/"&&(T.path_=T.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+r+o,"i"),c={bucket:1,path:3};function l(T){T.path_=decodeURIComponent(T.path)}const u="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),f="(/([^?#]*).*)?$",d=new RegExp(`^https?://${h}/${u}/b/${r}/o${f}`,"i"),m={bucket:1,path:3},E=n===N_?"(?:storage.googleapis.com|storage.cloud.google.com)":n,I="([^?#]*)",v=new RegExp(`^https?://${E}/${r}/${I}`,"i"),w=[{regex:a,indices:c,postModify:i},{regex:d,indices:m,postModify:l},{regex:v,indices:{bucket:1,path:2},postModify:l}];for(let T=0;T<w.length;T++){const A=w[T],L=A.regex.exec(e);if(L){const N=L[A.indices.bucket];let S=L[A.indices.path];S||(S=""),s=new jt(N,S),A.postModify(s);break}}if(s==null)throw XD(e);return s}}class eO{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function tO(t,e,n){let s=1,r=null,i=null,o=!1,a=0;function c(){return a===2}let l=!1;function u(...I){l||(l=!0,e.apply(null,I))}function h(I){r=setTimeout(()=>{r=null,t(d,c())},I)}function f(){i&&clearTimeout(i)}function d(I,...v){if(l){f();return}if(I){f(),u.call(null,I,...v);return}if(c()||o){f(),u.call(null,I,...v);return}s<64&&(s*=2);let w;a===1?(a=2,w=0):w=(s+Math.random())*1e3,h(w)}let m=!1;function E(I){m||(m=!0,f(),!l&&(r!==null?(I||(a=2),clearTimeout(r),h(0)):I||(a=1)))}return h(0),i=setTimeout(()=>{o=!0,E(!0)},n),E}function nO(t){t(!1)}/**
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
 */function sO(t){return t!==void 0}function cp(t,e,n,s){if(s<e)throw ap(`Invalid value for '${t}'. Expected ${e} or greater.`);if(s>n)throw ap(`Invalid value for '${t}'. Expected ${n} or less.`)}function rO(t){const e=encodeURIComponent;let n="?";for(const s in t)if(t.hasOwnProperty(s)){const r=e(s)+"="+e(t[s]);n=n+r+"&"}return n=n.slice(0,-1),n}/**
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
 */var Ea;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Ea||(Ea={}));/**
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
 */function iO(t,e){const n=t>=500&&t<600,r=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||r||i}/**
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
 */class oO{constructor(e,n,s,r,i,o,a,c,l,u,h,f=!0){this.url_=e,this.method_=n,this.headers_=s,this.body_=r,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=c,this.timeout_=l,this.progressCallback_=u,this.connectionFactory_=h,this.retry=f,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((d,m)=>{this.resolve_=d,this.reject_=m,this.start_()})}start_(){const e=(s,r)=>{if(r){s(!1,new Do(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=a=>{const c=a.loaded,l=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,l)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const a=i.getErrorCode()===Ea.NO_ERROR,c=i.getStatus();if((!a||iO(c,this.additionalRetryCodes_))&&this.retry){const u=i.getErrorCode()===Ea.ABORT;s(!1,new Do(!1,null,u));return}const l=this.successCodes_.indexOf(c)!==-1;s(!0,new Do(l,i))})},n=(s,r)=>{const i=this.resolve_,o=this.reject_,a=r.connection;if(r.wasSuccessCode)try{const c=this.callback_(a,a.getResponse());sO(c)?i(c):i()}catch(c){o(c)}else if(a!==null){const c=GD();c.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,c)):o(c)}else if(r.canceled){const c=this.appDelete_?x_():YD();o(c)}else{const c=QD();o(c)}};this.canceled_?n(!1,new Do(!1,null,!0)):this.backoffId_=tO(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&nO(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Do{constructor(e,n,s){this.wasSuccessCode=e,this.connection=n,this.canceled=!!s}}function aO(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function cO(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e!=null?e:"AppManager")}function lO(t,e){e&&(t["X-Firebase-GMPID"]=e)}function uO(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function hO(t,e,n,s,r,i,o=!0){const a=rO(t.urlParams),c=t.url+a,l=Object.assign({},t.headers);return lO(l,e),aO(l,n),cO(l,i),uO(l,s),new oO(c,t.method,l,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,r,o)}/**
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
 */function fO(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function dO(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */class Ia{constructor(e,n){this._service=e,n instanceof jt?this._location=n:this._location=jt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Ia(e,n)}get root(){const e=new jt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return dO(this._location.path)}get storage(){return this._service}get parent(){const e=fO(this._location.path);if(e===null)return null;const n=new jt(this._location.bucket,e);return new Ia(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw ZD(e)}}function lp(t,e){const n=e==null?void 0:e[KD];return n==null?null:jt.makeFromBucketSpec(n,t)}function pO(t,e,n,s={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:r}=s;r&&(t._overrideAuthToken=typeof r=="string"?r:fm(r,t.app.options.projectId))}class gO{constructor(e,n,s,r,i){this.app=e,this._authProvider=n,this._appCheckProvider=s,this._url=r,this._firebaseVersion=i,this._bucket=null,this._host=N_,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=zD,this._maxUploadRetryTime=WD,this._requests=new Set,r!=null?this._bucket=jt.makeFromBucketSpec(r,this._host):this._bucket=lp(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=jt.makeFromBucketSpec(this._url,e):this._bucket=lp(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){cp("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){cp("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Ia(this,e)}_makeRequest(e,n,s,r,i=!0){if(this._deleted)return new eO(x_());{const o=hO(e,this._appId,s,r,n,this._firebaseVersion,i);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[s,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,s,r).getPromise()}}const up="@firebase/storage",hp="0.9.14";/**
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
 */const P_="storage";function mO(t=Ka(),e){t=Ge(t);const s=is(t,P_).getImmediate({identifier:e}),r=um("storage");return r&&yO(s,...r),s}function yO(t,e,n,s={}){pO(t,e,n,s)}function vO(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),s=t.getProvider("auth-internal"),r=t.getProvider("app-check-internal");return new gO(n,s,r,e,Sr)}function _O(){Kt(new Ft(P_,vO,"PUBLIC").setMultipleInstances(!0)),_t(up,hp,""),_t(up,hp,"esm2017")}_O();const wO={apiKey:"AIzaSyBXiIsEUQfH4R9N954IdaqVrRPOWQ2sSzA",authDomain:"web-avanzada-87fdb.firebaseapp.com",databaseURL:"https://web-avanzada-87fdb-default-rtdb.firebaseio.com",projectId:"web-avanzada-87fdb",storageBucket:"web-avanzada-87fdb.appspot.com",messagingSenderId:"168385134236",appId:"1:168385134236:web:a8a5e7265b674a9b84b759",measurementId:"G-8WK6P5KZ3V"},Ic=mm(wO);VA(Ic);const Ln=IC(Ic),bO=kD(Ic),px=mO(Ic);Fm(Ln,t=>{const e=M_();t?(t.uid,e.user=t,console.log(e.user)):(e.user=null,console.log(e.user))});const M_=HE("authentication",{state:()=>({user:null,userLogged:null,isAdmin:!1,auth:Ln}),actions:{signIn(t,e){console.log("sign in"),iS(Ln,t,e).then(n=>{const s=n.user;console.log("usuario loggeado",s)}).catch(n=>{n.code;const s=n.message;alert(s)})},signUp(t,e){ed(Ln,t,e).then(n=>{const s=n.user;console.log("usuario creado",s),alert("user created :)")}).catch(n=>{const s=n.message;alert(s)})},async newUserAwait(t,e){try{const n=await ed(Ln,t,e);console.log("usuario creado",n.user)}catch{alert(errorMessage)}},logOut(){cS(Ln).then(()=>{console.log("user loged out"),alert("user loged out")}).catch(t=>{alert(t)})},getUser(){return Fm(Ln,t=>{t?(this.userLogged=t,t.uid=="sThswpzVLBWPGZx7XAS59EKhWYp2"&&(this.isAdmin=!0,alert("this is admin",this.isAdmin))):console.log("No admin")}),this.userLogged},checkAdmin(){return this.isAdmin},async deleteAccount(){const t=Ln.currentUser;await HD(_D(bO,"users",t.uid)),console.log(t),lS(t).then(()=>{alert("User has been deleted"),location.reload()}).catch(e=>{console.log(e)})}}}),EO="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKYAAABGCAYAAABGzO/1AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAm/SURBVHgB7ZzRceM2EIb/yeQ9TgVGCZcKDiW4AyMVnFIBkQrkVEClgrtUwOvA6YDXga4DRzsiQgjC7oIUJdNnfDMYewhguQQWiwVACqhUKpVKpVJ5F5ghVSqvxt0hbQ7p8yH1h/SSpP0hdYfkUI21MhGLo3G1OBpRSGRsDrxBfcLR8IIRfh5k5Qz0ZbhuUakImENqcGpYXCKD+pDUd5lymyHPCrLofneoVDKkno6MzoD3dJS6REanlHkSZN3jdjgcPTnptkUNJ1aLw7mh2CHPQPagMR1TJsgir8gZ+q08ZoO8x35AZXVons4ib0zPiRxfUM7g3Dg9bgc3yPaorA7OizVRmQ9JuT3OY0zyes+MrG1SljwUxZ8Wt8NAjpvvUVkVUuz3mJQlg3Lgp1667pH3TJuoviQjlpXuDLRD3blUj/mGkGK/2DjJQzrw8VgzyClZ1b9ANjAb6dQPZWMde5x77BIco4tHZZUE7yQZaGwUOV4mJsPIeUB+8ZRez4UTJRgcZ4kO475sZaU0OHZSibfrGBk78CvzYNBkXBa8QZlEh32SV6pLDovR49sh1f3TFWOhGyMtakKMKHXmnSJDowVveAbzFy2NoNcGlVVC3kszzHaCPMljShjIxmwZuRY6z1jm2SozIY9lhjRlmqLykoGWeLvAXMPcYHqcqskM9IIMhx+Mn7EOyADpSNHi3Ht8PaQ/DulfRca34e935A3aoJxvTHltoHxkrv8e1Tc4Tt13w33+RBnSvbW2CfU/DGW/oyJCjUUb13voi5amUKY05d0XypC805x7e1yGNBOUeNx0N4D0bFFf28uSnsQQ0kZ5aSy2w+VTnmTckufiDLpkW0iS6wR9vkBHep4OK+QnvA4Gx60dE10L+5DfhHoNdKRprXTPUJrqfsF0wlEn6W+SPIvxZIjjo5D3FTpGyPuGyv9QR3DTnYXsNZ0iW6pf4l2Iz5gXDkj1Ug/a4zR8kXSTPJ422Az0WegBp3vApBuFWO9ujzTX0F2U30GOqebuQ5aeJ+8gdyTHnFW5NuAMLnueFvog4fKm7GT8EPTIN0TAQm5MP1M+pRIvsMN0AwLkQSGlXpD5INTroNNjvmFqA/FqXBJjWoxvzmyH/0tjuL8z1+LY8CtTJkBbS3O3Tyx07oW8j0IexaZ/YTrSlpEV8v6BjIMcX/52SL9C1tniDUDG0EAeZTSKTYGceCT3UR073EOKqyi1gnyP63kZrb72ptNU7y+1g1XqdihrPyeUe8DKSbd3tOmhxHtajI3bYOwEqu+hLyYsI9cr9e4h8yQ8V0lHGegDi2RpZ9xWkaHpUNp2rVDOYMVQZ4SVpMdlr5alGJx3ohvy7qB75xxPC+gVvxBMyWL6KtUNOu6T+/tCWR2mP3ugRVkbSG2s3eNVMRgV30TXNI+QjkpOdg95+tBWui4jN/Xu9D95X4+3tQVyiWH2KGszJ5TTPPqrEk+nLsnbQTYabdprmXo+KqN5TW5LI5wNv7Yhhs+I52DAG5hkmA3kfjFR2Uv2SFOovMUN3hM1OFW0zZSRpk0jixe/X4kfbIeyaWlNkP7UXtLgKSV8ErIbZJFRGqasgWyUbSL30naVFsQtrhSjptMo94sTHrLX4yhtQOqIdGR3g35rnJppOyvuqFtuVHvI7Wqjsi3K2p8jrD3SuuSsQjhF+Y9YmNyq2DNlzZC3QX6U0LUmudZBbkR6sGeMo9fi9p8TGJT/0puFfqp1bSzkNg0YyCGSVe7zyNTzUZlddH3Rbaec4XBeUyNMGya6ZiE3YjBOg9sST0/pirpl9GlwmfdZEot838WeewteX+2okwsB+qRch8vtJgu3j7jFdBzyHpdGUo9841DZW0/VBqef3dL9005OB0vJUWSIDR1uh8EYl1L6EF2XdP2iyO2hD0CTyXdYCGlhM3UrITwMF2+RgXrc/tctUuJGDx2U27JKvYP2Lmmu8zgMrouDrKO7oG6HY//lnNoTbvQApcbZoHya4LA4euqS17EMzn8Bo+T7a4fT5/ORvNzz26Q+N8O0g6wn8J9sUBv1ODd+qrtofAb92NQIdbl61Mba6aDHgg+geYBGeJDw6URapxSL/FbEZ6Y8NUyH0TPnGqkX9O3Aj/CcLKfU5ww41TmV7XG+OJH0notDPkyRdOXsIJ4JPaa3w2Q66MZJD9Ni/BCf/oZveaQHyBHeZNfum3rN9PUwC35x1SPvdXNeIJCbzk1Sn9us5jaqDfIGH3TLhQePWB6DYyxKA94K5R7A90e6uDE4nUEWm8YDFrphTkmtcJ8O5b8bZJP6fZIfwoyOqZ+GIQZ6YzuMYYHFOZzu98iTm/qfk/vldDJ4HTzkPsmFdgbzfganiA7LGabNyHdC+WeMP43S49yTAfnB0w55npGbyjBMOWkHIpzIBLhn4OrmysYrYleou8X4osk12UDu29K3yhbDoNyTSall5HuhjodObooJnSfFyRanz8iVa3C+/7pNnomrzy32uFV8m9yHk3kn3LfDdd6jtCjr5wY33OZzuMwoe8jnu9K5uUbuRQ8X5XeM7DTu0QbfPlPGD3UtU4eLqTmd2qiMFXQJnsljfrtNJdfOUlvRM24HHS2uiC9UaopRlsi20DEYt4ZCrBPeMGqhex5gXshih7oW0wyzZ8r7qIwtuC+3RdVHbbIf9FjCi3pcp/8vhjup4RI1XIlbv1NkBAz48/ggp4l0DCOXG+mb5NmmNnjACeVyiwJOH18oM7zSx8nZQl7xX0KH8ja6adxpcNxe6AWFSHmLaXAPHFainzB2RO7s9RHnHWWHPC/oWaJDLpmoXolRxx3U4zLD1PJb5rrF5VC771A2cG+6GIqxOHoEj7Lfn9RkvUxILqprmDL3Q760OWwTOf3EexNa/NUn5UsWPx7yYOqFfE4Pg+WwyP9YLt1/ra8kzmbK6t9E9VroRsdtgKeLIAPeI1Cjc17AMfp3yP80jGaYnPE6zNtfbnE9DKb/dOSbgusMSvshP/eih3ROrZXhVrAGpx+lGeiYQT/S00OeOn1Gl2dF337Ia8F7ZtJ5N8gKOwl0rx/WaG6BBW+Y0rGWF+qFxVKP/PTX4fXwOB8kwYBS70u6G8h7rg6Vq0GGMsWzEdobM5Q8jp3qMHrdNXiR+OUTSuQpt+DDgdyLMalRV66AdPRlhXoG50Ydtoss1o/BcdDQzNBifF3ORmXof65tWlSuirTCLZl2qb7FOj7fXZodeMM0qFwdbjqndI1z4LeCw/Qwp7IgFrxhfsH7xuLcc5bMJJUFMJi3On9PGMifbFSuBHeiUKm8KhbHrZMnvI1VdaVSqVQqlUqlUqlUKpVKpVKpVCqVSqVSqVTWz38h608ssOCFTQAAAABJRU5ErkJggg==",IO="/menu_mobile.png";const ho=(t,e)=>{const n=t.__vccOpts||t;for(const[s,r]of e)n[s]=r;return n},TO={components:{RouterLink:tm,RouterView:nm},computed:{...KE(M_),admin(){return this.useAuthenticationStore.checkAdmin()}}},L_=t=>(zp("data-v-54f68e4e"),t=t(),Wp(),t),SO={class:"header"},CO=L_(()=>Ze("img",{src:EO,alt:"",class:"header__logo"},null,-1)),AO={class:"header__bar"},kO={class:"header__pages"},RO=Tr("Home"),DO=Tr("Shop\xA0All"),OO=L_(()=>Ze("img",{src:IO,alt:"#",class:"header__bar__icon"},null,-1)),NO={class:"header__profile"},xO=Tr("Profile"),PO=Tr("Cart");function MO(t,e,n,s,r,i){const o=en("RouterLink"),a=en("RouterView");return Mt(),ur(Fe,null,[Ze("header",SO,[ue(o,{to:"/add"},{default:Tt(()=>[CO]),_:1}),Ze("div",AO,[Ze("nav",kO,[ue(o,{to:"/",class:"header__pages__item"},{default:Tt(()=>[RO]),_:1}),ue(o,{to:"/shopAll",class:"header__pages__item"},{default:Tt(()=>[DO]),_:1})]),ue(o,{to:"/"},{default:Tt(()=>[OO]),_:1})]),Ze("div",NO,[ue(o,{to:"/signIn",class:"header__profile__item"},{default:Tt(()=>[xO]),_:1}),ue(o,{to:"/cart",class:"header__profile__item"},{default:Tt(()=>[PO]),_:1})])]),ue(a)],64)}const LO=ho(TO,[["render",MO],["__scopeId","data-v-54f68e4e"]]),UO="modulepreload",FO=function(t){return"/"+t},fp={},qs=function(e,n,s){return!n||n.length===0?e():Promise.all(n.map(r=>{if(r=FO(r),r in fp)return;fp[r]=!0;const i=r.endsWith(".css"),o=i?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${o}`))return;const a=document.createElement("link");if(a.rel=i?"stylesheet":UO,i||(a.as="script",a.crossOrigin=""),a.href=r,document.head.appendChild(a),i)return new Promise((c,l)=>{a.addEventListener("load",c),a.addEventListener("error",()=>l(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>e())};/**
 * Vue 3 Carousel 0.1.46
 * (c) 2022
 * @license MIT
 */const Et={itemsToShow:1,itemsToScroll:1,modelValue:0,transition:300,autoplay:0,snapAlign:"center",wrapAround:!1,pauseAutoplayOnHover:!1,mouseDrag:!0,touchDrag:!0,dir:"ltr",breakpoints:void 0},dp={itemsToShow:{default:Et.itemsToShow,type:Number},itemsToScroll:{default:Et.itemsToScroll,type:Number},wrapAround:{default:Et.wrapAround,type:Boolean},snapAlign:{default:Et.snapAlign,validator(t){return["start","end","center","center-even","center-odd"].includes(t)}},transition:{default:Et.transition,type:Number},breakpoints:{default:Et.breakpoints,type:Object},autoplay:{default:Et.autoplay,type:Number},pauseAutoplayOnHover:{default:Et.pauseAutoplayOnHover,type:Boolean},modelValue:{default:void 0,type:Number},mouseDrag:{default:Et.mouseDrag,type:Boolean},touchDrag:{default:Et.touchDrag,type:Boolean},dir:{default:Et.dir,validator(t){return["rtl","ltr"].includes(t)}},settings:{default(){return{}},type:Object}};function VO(t,e){let n;return function(...s){n&&clearTimeout(n),n=setTimeout(()=>{t(...s),n=null},e)}}function BO(t,e){let n;return function(...s){const r=this;n||(t.apply(r,s),n=!0,setTimeout(()=>n=!1,e))}}function $O(t){var e,n,s;return t?((n=(e=t[0])===null||e===void 0?void 0:e.type)===null||n===void 0?void 0:n.name)==="CarouselSlide"?t:((s=t[0])===null||s===void 0?void 0:s.children)||[]:[]}function jO(t,e){if(t.wrapAround)return e-1;switch(t.snapAlign){case"start":return e-t.itemsToShow;case"end":return e-1;case"center":case"center-odd":return e-Math.ceil(t.itemsToShow/2);case"center-even":return e-Math.ceil(t.itemsToShow/2);default:return 0}}function HO(t){if(t.wrapAround)return 0;switch(t.snapAlign){case"start":return 0;case"end":return t.itemsToShow-1;case"center":case"center-odd":return Math.floor((t.itemsToShow-1)/2);case"center-even":return Math.floor((t.itemsToShow-2)/2);default:return 0}}function pp(t,e,n,s){return t.wrapAround?e:Math.min(Math.max(e,s),n)}function qO({slidesBuffer:t,currentSlide:e,snapAlign:n,itemsToShow:s,wrapAround:r,slidesCount:i}){let o=t.indexOf(e);if(o===-1&&(o=t.indexOf(Math.ceil(e))),n==="center"||n==="center-odd"?o-=(s-1)/2:n==="center-even"?o-=(s-2)/2:n==="end"&&(o-=s-1),!r){const a=i-s,c=0;o=Math.max(Math.min(o,a),c)}return o}var U_=Ir({name:"Carousel",props:dp,setup(t,{slots:e,emit:n,expose:s}){var r;const i=ke(null),o=ke([]),a=ke([]),c=ke(0),l=ke(1);let u,h,f=ke({}),d=Object.assign({},Et);const m=Zt(Object.assign({},d)),E=ke((r=m.modelValue)!==null&&r!==void 0?r:0),I=ke(0),v=ke(0),g=ke(0),w=ke(0);Nt("config",m),Nt("slidesBuffer",a),Nt("slidesCount",l),Nt("currentSlide",E),Nt("maxSlide",g),Nt("minSlide",w);function T(){const _=Object.assign(Object.assign({},t),t.settings);f=ke(Object.assign({},_.breakpoints)),d=Object.assign(Object.assign({},_),{settings:void 0,breakpoints:void 0}),L(d)}function A(){const _=Object.keys(f.value).map(U=>Number(U)).sort((U,O)=>+O-+U);let R=Object.assign({},d);_.some(U=>window.matchMedia(`(min-width: ${U}px)`).matches?(R=Object.assign(Object.assign({},R),f.value[U]),!0):!1),L(R)}function L(_){for(let R in _)m[R]=_[R]}const N=VO(()=>{f.value&&(A(),F()),S()},16);function S(){if(!i.value)return;const _=i.value.getBoundingClientRect();c.value=_.width/m.itemsToShow}function F(){l.value=Math.max(o.value.length,1),!(l.value<=0)&&(v.value=Math.ceil((l.value-1)/2),g.value=jO(m,l.value),w.value=HO(m),E.value=pp(m,E.value,g.value,w.value))}function H(){const _=[...Array(l.value).keys()];if(m.wrapAround&&m.itemsToShow+1<=l.value){let O=(m.itemsToShow!==1?Math.round((l.value-m.itemsToShow)/2):0)-E.value;if(m.snapAlign==="end"?O+=Math.floor(m.itemsToShow-1):(m.snapAlign==="center"||m.snapAlign==="center-odd")&&O++,O<0)for(let M=O;M<0;M++)_.push(Number(_.shift()));else for(let M=0;M<O;M++)_.unshift(Number(_.pop()))}a.value=_}Vi(()=>{f.value&&(A(),F()),Li(()=>setTimeout(S,16)),Dt(),window.addEventListener("resize",N,{passive:!0})}),Bi(()=>{h&&clearTimeout(h),u&&clearInterval(u)});let j=!1;const B={x:0,y:0},ee={x:0,y:0},$=Zt({x:0,y:0}),de=ke(!1),pe=()=>{de.value=!0},Se=()=>{de.value=!1};function we(_){j=_.type==="touchstart",!(!j&&_.button!==0||Ke.value)&&(j||_.preventDefault(),B.x=j?_.touches[0].clientX:_.clientX,B.y=j?_.touches[0].clientY:_.clientY,document.addEventListener(j?"touchmove":"mousemove",nt,!0),document.addEventListener(j?"touchend":"mouseup",ln,!0))}const nt=BO(_=>{ee.x=j?_.touches[0].clientX:_.clientX,ee.y=j?_.touches[0].clientY:_.clientY;const R=ee.x-B.x,U=ee.y-B.y;$.y=U,$.x=R},16);function ln(){const _=m.dir==="rtl"?-1:1,R=Math.sign($.x)*.4,U=Math.round($.x/c.value+R)*_;let O=pp(m,E.value-U,g.value,w.value);if(U&&!j){const M=D=>{D.stopPropagation(),window.removeEventListener("click",M,!0)};window.addEventListener("click",M,!0)}gt(O),$.x=0,$.y=0,document.removeEventListener(j?"touchmove":"mousemove",nt,!0),document.removeEventListener(j?"touchend":"mouseup",ln,!0)}function Dt(){!m.autoplay||m.autoplay<=0||(u=setInterval(()=>{m.pauseAutoplayOnHover&&de.value||C()},m.autoplay))}function wt(){u&&(clearInterval(u),u=null),Dt()}const Ke=ke(!1);function gt(_,R=!1){if(E.value===_||Ke.value)return;wt();const U=l.value-1;if(_>U)return gt(_-l.value);if(_<0)return gt(_+l.value);Ke.value=!0,I.value=E.value,E.value=_,R||n("update:modelValue",E.value),h=setTimeout(()=>{m.wrapAround&&H(),Ke.value=!1},m.transition)}function C(){let _=E.value+m.itemsToScroll;m.wrapAround||(_=Math.min(_,g.value)),gt(_)}function q(){let _=E.value-m.itemsToScroll;m.wrapAround||(_=Math.max(_,w.value)),gt(_)}const V={slideTo:gt,next:C,prev:q};Nt("nav",V);const G=it(()=>qO({slidesBuffer:a.value,itemsToShow:m.itemsToShow,snapAlign:m.snapAlign,wrapAround:Boolean(m.wrapAround),currentSlide:E.value,slidesCount:l.value}));Nt("slidesToScroll",G);const ve=it(()=>{const _=m.dir==="rtl"?-1:1,R=G.value*c.value*_;return{transform:`translateX(${$.x-R}px)`,transition:`${Ke.value?m.transition:0}ms`}});function Ie(){T()}function ce(){T(),A(),F(),H(),S(),wt()}function se(){F(),H()}Object.keys(dp).forEach(_=>{["modelValue"].includes(_)||Kn(()=>t[_],ce)}),Ie(),sb(()=>{const _=l.value!==o.value.length;t.modelValue!==void 0&&E.value!==t.modelValue&&gt(Number(t.modelValue),!0),_&&se()});const p={config:m,slidesBuffer:a,slidesCount:l,slideWidth:c,currentSlide:E,maxSlide:g,minSlide:w,middleSlide:v};s({updateBreakpointsConfigs:A,updateSlidesData:F,updateSlideWidth:S,updateSlidesBuffer:H,initCarousel:Ie,restartCarousel:ce,updateCarousel:se,slideTo:gt,next:C,prev:q,nav:V,data:p});const y=e.default||e.slides,b=e.addons,k=Zt(p);return()=>{const _=$O(y==null?void 0:y(k)),R=(b==null?void 0:b(k))||[];o.value=_,_.forEach((M,D)=>M.props.index=D);const U=tn("ol",{class:"carousel__track",style:ve.value,onMousedown:m.mouseDrag?mf(we,["capture"]):null,onTouchstart:m.touchDrag?mf(we,["capture"]):null},_),O=tn("div",{class:"carousel__viewport"},U);return tn("section",{ref:i,class:{carousel:!0,"carousel--rtl":m.dir==="rtl"},dir:m.dir,"aria-label":"Gallery",onMouseenter:pe,onMouseleave:Se},[O,R])}}}),F_=Ir({name:"CarouselSlide",props:{index:{type:Number,default:1}},setup(t,{slots:e}){const n=We("config",Zt(Object.assign({},Et))),s=We("slidesBuffer",ke([])),r=We("currentSlide",ke(0)),i=We("slidesToScroll",ke(0)),o=ke(t.index);n.wrapAround&&(a(),Kn(s,a));function a(){o.value=s.value.indexOf(t.index)}const c=it(()=>{const d=n.itemsToShow;return{width:`${1/d*100}%`,order:o.value.toString()}}),l=()=>t.index===r.value,u=()=>{const d=Math.ceil(i.value),m=Math.floor(i.value+n.itemsToShow);return s.value.slice(d,m).includes(t.index)},h=()=>t.index===s.value[Math.ceil(i.value)-1],f=()=>t.index===s.value[Math.floor(i.value+n.itemsToShow)];return()=>{var d;return tn("li",{style:c.value,class:{carousel__slide:!0,"carousel__slide--active":l(),"carousel__slide--visible":u(),"carousel__slide--prev":h(),"carousel__slide--next":f()}},(d=e.default)===null||d===void 0?void 0:d.call(e))}}});const V_=()=>{const t=We("maxSlide",ke(1)),e=We("minSlide",ke(1)),n=We("currentSlide",ke(1)),s=We("nav",{});function r(a){s.slideTo(a)}const i=a=>{const c=n.value;return c===a||c>t.value&&a>=t.value||c<e.value&&a<=e.value},o=[];for(let a=e.value;a<t.value+1;a++){const c=tn("button",{type:"button",class:{"carousel__pagination-button":!0,"carousel__pagination-button--active":i(a)},"aria-label":`Navigate to slide ${a+1}`,onClick:()=>r(a)}),l=tn("li",{class:"carousel__pagination-item",key:a},c);o.push(l)}return tn("ol",{class:"carousel__pagination"},o)};const KO={data(){return{slides:[{banner:"/promo1.png",text:"The ultimate coffee crowd pleaser.",go:"Go to shop"},{banner:"/promo2.png",text:"Woke and wise, this is the essential midnight oil rose.",go:"Go to shop"},{banner:"/promo3.png",text:"This one is for the early risers. Dont miss the opportunity",go:"Go to shop"}]}},components:{Carousel:U_,Slide:F_,Pagination:V_}},zO=["src"],WO={class:"info"},GO={class:"info__text"},QO={class:"info__button"};function YO(t,e,n,s,r,i){const o=en("router-link"),a=en("slide"),c=en("Carousel");return Mt(),gi(c,{autoplay:3e3,"wrap-around":!0},{default:Tt(()=>[(Mt(!0),ur(Fe,null,ng(r.slides,l=>(Mt(),gi(a,{key:l},{default:Tt(()=>[Ze("img",{src:l.banner,class:"banner"},null,8,zO),Ze("div",WO,[Ze("h3",GO,jo(l.text),1),ue(o,{to:"/shopAll"},{default:Tt(()=>[Ze("button",QO,jo(l.go),1)]),_:2},1024)])]),_:2},1024))),128))]),_:1})}const XO=ho(KO,[["render",YO],["__scopeId","data-v-037c4bf8"]]);const JO={data(){return{faves:[{pic:"/best1.png",name:"Can-Shaped Cup Set",price:"29.00"},{pic:"/best3.png",name:"Original Family Blend",price:"29.00"},{pic:"/best2.png",name:"Social Dog",price:"29.00"},{pic:"/best4.png",name:"Matcha Bundle",price:"29.00"},{pic:"/best5.png",name:"Variety Box",price:"29.00"}]}},components:{Carousel:U_,Slide:F_,Pagination:V_}},ZO=t=>(zp("data-v-ff3f626d"),t=t(),Wp(),t),eN=ZO(()=>Ze("h4",{class:"title"},"Check Out Our Best Sellers",-1)),tN={class:"faves"},nN=["src"],sN={class:"faves__text"},rN={class:"faves__price"};function iN(t,e,n,s,r,i){const o=en("Slide"),a=en("Carousel");return Mt(),ur(Fe,null,[eN,ue(a,{itemsToShow:2.95,wrapAround:!0},{default:Tt(()=>[(Mt(!0),ur(Fe,null,ng(r.faves,c=>(Mt(),gi(o,{key:c},{default:Tt(()=>[Ze("div",tN,[Ze("img",{src:c.pic,class:"faves__pic"},null,8,nN),Ze("h3",sN,jo(c.name),1),Ze("h3",rN,jo(c.price),1)])]),_:2},1024))),128))]),_:1},8,["itemsToShow"])],64)}const oN=ho(JO,[["render",iN],["__scopeId","data-v-ff3f626d"]]);const aN={},cN=mg('<div class="footer"><p>\xA92022 Caffeine Factor Coffee, LLC. All Rights Reserved.</p><ul><li><a href="">Privacy Policy</a></li><li><a href="">Terms &amp; Conditions</a></li><div class="footer__social"><li><img class="footer__social__icon" src="https://img.favpng.com/8/15/12/belfast-youtube-logo-industry-png-favpng-FjjFZsdXvMVvi3NzvFBGebeF4.jpg" alt=""></li><li><img class="footer__social__icon" src="https://cdn-icons-png.flaticon.com/512/49/49351.png" alt=""></li></div></ul></div>',1),lN=[cN];function uN(t,e,n,s,r,i){return Mt(),ur("footer",null,lN)}const gp=ho(aN,[["render",uN]]),hN="/sub.png",fN="/subMedia.png";const dN={components:{Carousel:XO,Faves:oN,Footers:gp,Subscribe:gp}},pN=mg('<div class="quote" data-v-cba8158c><h4 class="quote__title" data-v-cba8158c>You are what you drink</h4><h4 class="quote__subtitle" data-v-cba8158c>We make sure every cup of coffee you enjoy from us has been sourced, made and delivered to you in the most sustainable way possible.</h4></div><img src="'+hN+'" alt="preview" class="subscribe" data-v-cba8158c><img src="'+fN+'" alt="preview" class="subscribe__media" data-v-cba8158c>',3);function gN(t,e,n,s,r,i){const o=en("Carousel"),a=en("Faves"),c=en("Footers");return Mt(),ur(Fe,null,[ue(o),ue(a),pN,ue(c)],64)}const mN=ho(dN,[["render",gN],["__scopeId","data-v-cba8158c"]]),yN=K0({history:l0("/"),routes:[{path:"/",name:"home",component:mN},{path:"/shopAll",name:"shopAll",component:()=>qs(()=>import("./ShopView.167b5558.js"),["assets/ShopView.167b5558.js","assets/ShopView.6818a3bb.css","assets/products.2abeeee1.js","assets/firestore.898c49cc.js"])},{path:"/add",name:"add",component:()=>qs(()=>import("./AddProduct.b2619157.js"),["assets/AddProduct.b2619157.js","assets/AddProduct.502262ad.css","assets/VueStarRating.common.2328365b.js","assets/products.2abeeee1.js","assets/firestore.898c49cc.js"])},{path:"/detail/:productId",name:"detail",component:()=>qs(()=>import("./DetailsView.503744a7.js"),["assets/DetailsView.503744a7.js","assets/DetailsView.aad097ad.css","assets/VueStarRating.common.2328365b.js","assets/products.2abeeee1.js","assets/firestore.898c49cc.js"])},{path:"/signIn",name:"signIn",component:()=>qs(()=>import("./SignInView.a58ef23d.js"),["assets/SignInView.a58ef23d.js","assets/SignInView.41d1e973.css"])},{path:"/signUp",name:"signUp",component:()=>qs(()=>import("./SignUpView.384beac1.js"),["assets/SignUpView.384beac1.js","assets/SignUpView.744ed142.css","assets/firestore.898c49cc.js"])},{path:"/cart",name:"cart",component:()=>qs(()=>import("./cartView.88b172dd.js"),["assets/cartView.88b172dd.js","assets/cartView.f6f68bd3.css","assets/firestore.898c49cc.js","assets/products.2abeeee1.js"])}]});const Ah=LE(LO);Ah.use(FE());Ah.use(yN);Ah.mount("#app");export{Js as $,SN as A,bN as B,bp as C,_N as D,wp as E,gp as F,Lp as G,qn as H,ar as I,Me as J,qo as K,cr as L,wN as M,Fp as N,Zt as O,Mp as P,ke as Q,Da as R,Aw as S,IN as T,kw as U,EN as V,fe as W,Pw as X,Nw as Y,TN as Z,ho as _,Ze as a,di as a$,Ut as a0,Ra as a1,Ca as a2,vN as a3,Sa as a4,Oo as a5,Jp as a6,pt as a7,DN as a8,tr as a9,Qb as aA,$N as aB,Ss as aC,GN as aD,Bb as aE,Li as aF,cb as aG,hb as aH,hu as aI,fb as aJ,lb as aK,mb as aL,Vi as aM,gb as aN,pb as aO,db as aP,Bi as aQ,uu as aR,Wp as aS,Nt as aT,zp as aU,Hp as aV,BN as aW,MN as aX,xN as aY,NN as aZ,tx as a_,AN as aa,UN as ab,pi as ac,Pt as ad,vn as ae,En as af,nx as ag,it as ah,xb as ai,QN as aj,Nb as ak,PN as al,Tr as am,RN as an,Ir as ao,HN as ap,qN as aq,jN as ar,Pr as as,Rn as at,lu as au,Vb as av,tn as aw,Er as ax,JN as ay,We as az,Fe as b,Zh as b0,zw as b1,lr as b2,Gb as b3,ex as b4,LN as b5,FN as b6,WN as b7,XN as b8,zN as b9,xE as bA,ax as bB,mf as bC,Ln as bD,Xp as ba,Yb as bb,Uw as bc,Kn as bd,sb as be,rb as bf,kN as bg,YN as bh,KN as bi,ZN as bj,CN as bk,Sg as bl,ox as bm,yu as bn,LE as bo,cx as bp,mE as bq,sx as br,ME as bs,lx as bt,vf as bu,rx as bv,ix as bw,Ng as bx,kE as by,xg as bz,ur as c,ng as d,AE as e,ue as f,VN as g,gi as h,Tt as i,mg as j,HE as k,fx as l,KE as m,ux as n,Mt as o,dx as p,bO as q,en as r,_D as s,jo as t,M_ as u,ml as v,ON as w,px as x,HD as y,hx as z};
