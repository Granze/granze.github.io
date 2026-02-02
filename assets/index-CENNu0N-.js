(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const H=globalThis,J=H.ShadowRoot&&(H.ShadyCSS===void 0||H.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,X=Symbol(),ie=new WeakMap;let me=class{constructor(e,t,o){if(this._$cssResult$=!0,o!==X)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(J&&e===void 0){const o=t!==void 0&&t.length===1;o&&(e=ie.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),o&&ie.set(t,e))}return e}toString(){return this.cssText}};const be=s=>new me(typeof s=="string"?s:s+"",void 0,X),u=(s,...e)=>{const t=s.length===1?s[0]:e.reduce((o,i,r)=>o+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+s[r+1],s[0]);return new me(t,s,X)},$e=(s,e)=>{if(J)s.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const o=document.createElement("style"),i=H.litNonce;i!==void 0&&o.setAttribute("nonce",i),o.textContent=t.cssText,s.appendChild(o)}},oe=J?s=>s:s=>s instanceof CSSStyleSheet?(e=>{let t="";for(const o of e.cssRules)t+=o.cssText;return be(t)})(s):s;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:we,defineProperty:xe,getOwnPropertyDescriptor:_e,getOwnPropertyNames:Ae,getOwnPropertySymbols:ke,getPrototypeOf:Se}=Object,D=globalThis,se=D.trustedTypes,Ee=se?se.emptyScript:"",Ce=D.reactiveElementPolyfillSupport,C=(s,e)=>s,U={toAttribute(s,e){switch(e){case Boolean:s=s?Ee:null;break;case Object:case Array:s=s==null?s:JSON.stringify(s)}return s},fromAttribute(s,e){let t=s;switch(e){case Boolean:t=s!==null;break;case Number:t=s===null?null:Number(s);break;case Object:case Array:try{t=JSON.parse(s)}catch{t=null}}return t}},K=(s,e)=>!we(s,e),re={attribute:!0,type:String,converter:U,reflect:!1,useDefault:!1,hasChanged:K};Symbol.metadata??=Symbol("metadata"),D.litPropertyMetadata??=new WeakMap;let A=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=re){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const o=Symbol(),i=this.getPropertyDescriptor(e,o,t);i!==void 0&&xe(this.prototype,e,i)}}static getPropertyDescriptor(e,t,o){const{get:i,set:r}=_e(this.prototype,e)??{get(){return this[t]},set(n){this[t]=n}};return{get:i,set(n){const c=i?.call(this);r?.call(this,n),this.requestUpdate(e,c,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??re}static _$Ei(){if(this.hasOwnProperty(C("elementProperties")))return;const e=Se(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(C("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(C("properties"))){const t=this.properties,o=[...Ae(t),...ke(t)];for(const i of o)this.createProperty(i,t[i])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[o,i]of t)this.elementProperties.set(o,i)}this._$Eh=new Map;for(const[t,o]of this.elementProperties){const i=this._$Eu(t,o);i!==void 0&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const o=new Set(e.flat(1/0).reverse());for(const i of o)t.unshift(oe(i))}else e!==void 0&&t.push(oe(e));return t}static _$Eu(e,t){const o=t.attribute;return o===!1?void 0:typeof o=="string"?o:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const o of t.keys())this.hasOwnProperty(o)&&(e.set(o,this[o]),delete this[o]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return $e(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,o){this._$AK(e,o)}_$ET(e,t){const o=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,o);if(i!==void 0&&o.reflect===!0){const r=(o.converter?.toAttribute!==void 0?o.converter:U).toAttribute(t,o.type);this._$Em=e,r==null?this.removeAttribute(i):this.setAttribute(i,r),this._$Em=null}}_$AK(e,t){const o=this.constructor,i=o._$Eh.get(e);if(i!==void 0&&this._$Em!==i){const r=o.getPropertyOptions(i),n=typeof r.converter=="function"?{fromAttribute:r.converter}:r.converter?.fromAttribute!==void 0?r.converter:U;this._$Em=i;const c=n.fromAttribute(t,r.type);this[i]=c??this._$Ej?.get(i)??c,this._$Em=null}}requestUpdate(e,t,o,i=!1,r){if(e!==void 0){const n=this.constructor;if(i===!1&&(r=this[e]),o??=n.getPropertyOptions(e),!((o.hasChanged??K)(r,t)||o.useDefault&&o.reflect&&r===this._$Ej?.get(e)&&!this.hasAttribute(n._$Eu(e,o))))return;this.C(e,t,o)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:o,reflect:i,wrapped:r},n){o&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,n??t??this[e]),r!==!0||n!==void 0)||(this._$AL.has(e)||(this.hasUpdated||o||(t=void 0),this._$AL.set(e,t)),i===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[i,r]of this._$Ep)this[i]=r;this._$Ep=void 0}const o=this.constructor.elementProperties;if(o.size>0)for(const[i,r]of o){const{wrapped:n}=r,c=this[i];n!==!0||this._$AL.has(i)||c===void 0||this.C(i,void 0,r,c)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(o=>o.hostUpdate?.()),this.update(t)):this._$EM()}catch(o){throw e=!1,this._$EM(),o}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(e){}firstUpdated(e){}};A.elementStyles=[],A.shadowRootOptions={mode:"open"},A[C("elementProperties")]=new Map,A[C("finalized")]=new Map,Ce?.({ReactiveElement:A}),(D.reactiveElementVersions??=[]).push("2.1.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Z=globalThis,ne=s=>s,j=Z.trustedTypes,ae=j?j.createPolicy("lit-html",{createHTML:s=>s}):void 0,ge="$lit$",f=`lit$${Math.random().toFixed(9).slice(2)}$`,ue="?"+f,Pe=`<${ue}>`,x=document,P=()=>x.createComment(""),O=s=>s===null||typeof s!="object"&&typeof s!="function",Q=Array.isArray,Oe=s=>Q(s)||typeof s?.[Symbol.iterator]=="function",L=`[ 	
\f\r]`,E=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ce=/-->/g,le=/>/g,$=RegExp(`>|${L}(?:([^\\s"'>=/]+)(${L}*=${L}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),he=/'/g,de=/"/g,ve=/^(?:script|style|textarea|title)$/i,ze=s=>(e,...t)=>({_$litType$:s,strings:e,values:t}),y=ze(1),k=Symbol.for("lit-noChange"),d=Symbol.for("lit-nothing"),pe=new WeakMap,w=x.createTreeWalker(x,129);function fe(s,e){if(!Q(s)||!s.hasOwnProperty("raw"))throw Error("invalid template strings array");return ae!==void 0?ae.createHTML(e):e}const Me=(s,e)=>{const t=s.length-1,o=[];let i,r=e===2?"<svg>":e===3?"<math>":"",n=E;for(let c=0;c<t;c++){const a=s[c];let h,p,l=-1,g=0;for(;g<a.length&&(n.lastIndex=g,p=n.exec(a),p!==null);)g=n.lastIndex,n===E?p[1]==="!--"?n=ce:p[1]!==void 0?n=le:p[2]!==void 0?(ve.test(p[2])&&(i=RegExp("</"+p[2],"g")),n=$):p[3]!==void 0&&(n=$):n===$?p[0]===">"?(n=i??E,l=-1):p[1]===void 0?l=-2:(l=n.lastIndex-p[2].length,h=p[1],n=p[3]===void 0?$:p[3]==='"'?de:he):n===de||n===he?n=$:n===ce||n===le?n=E:(n=$,i=void 0);const v=n===$&&s[c+1].startsWith("/>")?" ":"";r+=n===E?a+Pe:l>=0?(o.push(h),a.slice(0,l)+ge+a.slice(l)+f+v):a+f+(l===-2?c:v)}return[fe(s,r+(s[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),o]};class z{constructor({strings:e,_$litType$:t},o){let i;this.parts=[];let r=0,n=0;const c=e.length-1,a=this.parts,[h,p]=Me(e,t);if(this.el=z.createElement(h,o),w.currentNode=this.el.content,t===2||t===3){const l=this.el.content.firstChild;l.replaceWith(...l.childNodes)}for(;(i=w.nextNode())!==null&&a.length<c;){if(i.nodeType===1){if(i.hasAttributes())for(const l of i.getAttributeNames())if(l.endsWith(ge)){const g=p[n++],v=i.getAttribute(l).split(f),T=/([.?@])?(.*)/.exec(g);a.push({type:1,index:r,name:T[2],strings:v,ctor:T[1]==="."?Te:T[1]==="?"?He:T[1]==="@"?Ue:R}),i.removeAttribute(l)}else l.startsWith(f)&&(a.push({type:6,index:r}),i.removeAttribute(l));if(ve.test(i.tagName)){const l=i.textContent.split(f),g=l.length-1;if(g>0){i.textContent=j?j.emptyScript:"";for(let v=0;v<g;v++)i.append(l[v],P()),w.nextNode(),a.push({type:2,index:++r});i.append(l[g],P())}}}else if(i.nodeType===8)if(i.data===ue)a.push({type:2,index:r});else{let l=-1;for(;(l=i.data.indexOf(f,l+1))!==-1;)a.push({type:7,index:r}),l+=f.length-1}r++}}static createElement(e,t){const o=x.createElement("template");return o.innerHTML=e,o}}function S(s,e,t=s,o){if(e===k)return e;let i=o!==void 0?t._$Co?.[o]:t._$Cl;const r=O(e)?void 0:e._$litDirective$;return i?.constructor!==r&&(i?._$AO?.(!1),r===void 0?i=void 0:(i=new r(s),i._$AT(s,t,o)),o!==void 0?(t._$Co??=[])[o]=i:t._$Cl=i),i!==void 0&&(e=S(s,i._$AS(s,e.values),i,o)),e}class Ie{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:o}=this._$AD,i=(e?.creationScope??x).importNode(t,!0);w.currentNode=i;let r=w.nextNode(),n=0,c=0,a=o[0];for(;a!==void 0;){if(n===a.index){let h;a.type===2?h=new I(r,r.nextSibling,this,e):a.type===1?h=new a.ctor(r,a.name,a.strings,this,e):a.type===6&&(h=new je(r,this,e)),this._$AV.push(h),a=o[++c]}n!==a?.index&&(r=w.nextNode(),n++)}return w.currentNode=x,i}p(e){let t=0;for(const o of this._$AV)o!==void 0&&(o.strings!==void 0?(o._$AI(e,o,t),t+=o.strings.length-2):o._$AI(e[t])),t++}}class I{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,o,i){this.type=2,this._$AH=d,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=o,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=S(this,e,t),O(e)?e===d||e==null||e===""?(this._$AH!==d&&this._$AR(),this._$AH=d):e!==this._$AH&&e!==k&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Oe(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==d&&O(this._$AH)?this._$AA.nextSibling.data=e:this.T(x.createTextNode(e)),this._$AH=e}$(e){const{values:t,_$litType$:o}=e,i=typeof o=="number"?this._$AC(e):(o.el===void 0&&(o.el=z.createElement(fe(o.h,o.h[0]),this.options)),o);if(this._$AH?._$AD===i)this._$AH.p(t);else{const r=new Ie(i,this),n=r.u(this.options);r.p(t),this.T(n),this._$AH=r}}_$AC(e){let t=pe.get(e.strings);return t===void 0&&pe.set(e.strings,t=new z(e)),t}k(e){Q(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let o,i=0;for(const r of e)i===t.length?t.push(o=new I(this.O(P()),this.O(P()),this,this.options)):o=t[i],o._$AI(r),i++;i<t.length&&(this._$AR(o&&o._$AB.nextSibling,i),t.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){const o=ne(e).nextSibling;ne(e).remove(),e=o}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}}class R{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,o,i,r){this.type=1,this._$AH=d,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=r,o.length>2||o[0]!==""||o[1]!==""?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=d}_$AI(e,t=this,o,i){const r=this.strings;let n=!1;if(r===void 0)e=S(this,e,t,0),n=!O(e)||e!==this._$AH&&e!==k,n&&(this._$AH=e);else{const c=e;let a,h;for(e=r[0],a=0;a<r.length-1;a++)h=S(this,c[o+a],t,a),h===k&&(h=this._$AH[a]),n||=!O(h)||h!==this._$AH[a],h===d?e=d:e!==d&&(e+=(h??"")+r[a+1]),this._$AH[a]=h}n&&!i&&this.j(e)}j(e){e===d?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class Te extends R{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===d?void 0:e}}class He extends R{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==d)}}class Ue extends R{constructor(e,t,o,i,r){super(e,t,o,i,r),this.type=5}_$AI(e,t=this){if((e=S(this,e,t,0)??d)===k)return;const o=this._$AH,i=e===d&&o!==d||e.capture!==o.capture||e.once!==o.once||e.passive!==o.passive,r=e!==d&&(o===d||i);i&&this.element.removeEventListener(this.name,this,o),r&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class je{constructor(e,t,o){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(e){S(this,e)}}const De=Z.litHtmlPolyfillSupport;De?.(z,I),(Z.litHtmlVersions??=[]).push("3.3.2");const Re=(s,e,t)=>{const o=t?.renderBefore??e;let i=o._$litPart$;if(i===void 0){const r=t?.renderBefore??null;o._$litPart$=i=new I(e.insertBefore(P(),r),r,void 0,t??{})}return i._$AI(s),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ee=globalThis;class m extends A{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Re(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return k}}m._$litElement$=!0,m.finalized=!0,ee.litElementHydrateSupport?.({LitElement:m});const Ne=ee.litElementPolyfillSupport;Ne?.({LitElement:m});(ee.litElementVersions??=[]).push("4.2.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const b=s=>(e,t)=>{t!==void 0?t.addInitializer(()=>{customElements.define(s,e)}):customElements.define(s,e)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Le={attribute:!0,type:String,converter:U,reflect:!1,hasChanged:K},Be=(s=Le,e,t)=>{const{kind:o,metadata:i}=t;let r=globalThis.litPropertyMetadata.get(i);if(r===void 0&&globalThis.litPropertyMetadata.set(i,r=new Map),o==="setter"&&((s=Object.create(s)).wrapped=!0),r.set(t.name,s),o==="accessor"){const{name:n}=t;return{set(c){const a=e.get.call(this);e.set.call(this,c),this.requestUpdate(n,a,s,!0,c)},init(c){return c!==void 0&&this.C(n,void 0,s,c),c}}}if(o==="setter"){const{name:n}=t;return function(c){const a=this[n];e.call(this,c),this.requestUpdate(n,a,s,!0,c)}}throw Error("Unsupported decorator location: "+o)};function We(s){return(e,t)=>typeof t=="object"?Be(s,e,t):((o,i,r)=>{const n=i.hasOwnProperty(r);return i.constructor.createProperty(r,o),n?Object.getOwnPropertyDescriptor(i,r):void 0})(s,e,t)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ye(s){return We({...s,state:!0,attribute:!1})}const _=u`
  :host {
    --color-light-gray: #dcdcdd;
    --color-medium-gray: #c5c3c6;
    --color-dark-gray: #46494c;
    --color-slate: #4c5c68;
    --color-teal: #1985a1;

    --font-heading: 'Libre Baskerville', serif;
    --font-body: 'Inter', sans-serif;

    --spacing-xs: 0.5rem;
    --spacing-sm: 1rem;
    --spacing-md: 1.5rem;
    --spacing-lg: 2rem;
    --spacing-xl: 3rem;
    --spacing-2xl: 4rem;

    --max-width: 1200px;
    --container-padding: 1.5rem;

    display: block;
  }

  .container {
    max-width: var(--max-width);
    margin: 0 auto;
    padding: 0 var(--container-padding);
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: var(--font-heading);
    font-weight: 600;
    color: var(--color-dark-gray);
    line-height: 1.2;
  }

  h1 {
    font-size: clamp(2.5rem, 5vw, 4rem);
    font-weight: 700;
  }

  h2 {
    font-size: clamp(1.75rem, 3vw, 2.5rem);
  }

  h3 {
    font-size: clamp(1.25rem, 2vw, 1.5rem);
  }

  p {
    font-family: var(--font-body);
    color: var(--color-slate);
    line-height: 1.7;
  }

  a {
    color: var(--color-teal);
    text-decoration: none;
    transition: color 0.2s ease;
  }

  a:hover {
    color: var(--color-dark-gray);
  }

  .section {
    padding: var(--spacing-2xl) 0;
  }

  .section-title {
    margin-bottom: var(--spacing-lg);
    position: relative;
    display: inline-block;
  }

  .section-title::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 60px;
    height: 4px;
    background-color: var(--color-teal);
  }


  @media (max-width: 768px) {
    :host {
      --container-padding: 1rem;
    }

    .section {
      padding: var(--spacing-xl) 0;
    }
  }


`;var qe=Object.defineProperty,Fe=Object.getOwnPropertyDescriptor,te=(s,e,t,o)=>{for(var i=o>1?void 0:o?Fe(e,t):e,r=s.length-1,n;r>=0;r--)(n=s[r])&&(i=(o?n(e,t,i):n(i))||i);return o&&i&&qe(e,t,i),i};let M=class extends m{constructor(){super(...arguments),this.activeSection="",this.isMenuOpen=!1,this.observer=null}firstUpdated(){const s={root:null,rootMargin:"-50% 0px -50% 0px",threshold:0};this.observer=new IntersectionObserver(t=>{t.forEach(o=>{o.isIntersecting&&(this.activeSection=o.target.id)})},s),this.shadowRoot?.querySelectorAll('a[href^="#"]')?.forEach(t=>{const o=t.getAttribute("href")?.substring(1),r=this.getRootNode().getElementById(o||"");r&&this.observer?.observe(r)})}disconnectedCallback(){super.disconnectedCallback(),this.observer?.disconnect()}toggleMenu(){this.isMenuOpen=!this.isMenuOpen,this.isMenuOpen?document.body.style.overflow="hidden":document.body.style.overflow=""}scrollToSection(s){s.preventDefault(),this.isMenuOpen&&this.toggleMenu();const t=s.target.getAttribute("href")?.substring(1);if(!t)return;const i=this.getRootNode().getElementById(t);if(!i)return;const r=60,n=i.getBoundingClientRect().top,a=window.scrollY+n-r;window.scrollTo({top:a,behavior:"smooth"}),history.pushState(null,"",`#${t}`)}render(){return y`
      <div class="container nav-container">
        <a href="#" class="logo" @click="${s=>{s.preventDefault(),window.scrollTo({top:0,behavior:"smooth"})}}">G</a>
        
        <button class="nav-toggle ${this.isMenuOpen?"open":""}" @click="${this.toggleMenu}" aria-label="Toggle menu">
          <div class="hamburger">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>

        <div class="nav-content ${this.isMenuOpen?"open":""}">
          <a href="#about" class="nav-link ${this.activeSection==="about"?"active":""}" @click="${this.scrollToSection}">About</a>
          <a href="#what-i-do" class="nav-link ${this.activeSection==="what-i-do"?"active":""}" @click="${this.scrollToSection}">What I Do</a>
          <a href="#recognition" class="nav-link ${this.activeSection==="recognition"?"active":""}" @click="${this.scrollToSection}">Recognition</a>
          <a href="#community" class="nav-link ${this.activeSection==="community"?"active":""}" @click="${this.scrollToSection}">Community</a>
          <a href="#hobbies" class="nav-link ${this.activeSection==="hobbies"?"active":""}" @click="${this.scrollToSection}">Hobbies</a>
          <a href="#contact" class="nav-link ${this.activeSection==="contact"?"active":""}" @click="${this.scrollToSection}">Contact</a>
        </div>
      </div>
    `}};M.styles=[_,u`
      :host {
        display: block;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 100;
        padding: var(--spacing-sm) 0;
        background: rgba(220, 220, 221, 0.9);
        backdrop-filter: blur(10px);
        transition: background 0.3s ease;
      }

      .nav-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      .logo {
        font-family: var(--font-heading);
        font-weight: 700;
        font-size: 1.2rem;
        color: var(--color-dark-gray);
        text-decoration: none;
        display: none; /* Hidden by default, maybe show on mobile? */
      }
      
      @media (max-width: 600px) {
        .logo {
            display: block;
        }
      }

      .nav-content {
        display: flex;
        justify-content: flex-end; /* Align right on desktop if we had a logo, or just keep left */
        gap: var(--spacing-lg);
      }

      .nav-link {
        position: relative;
        font-family: var(--font-body);
        font-size: 0.85rem;
        font-weight: 500;
        color: var(--color-dark-gray);
        text-transform: uppercase;
        letter-spacing: 1px;
        text-decoration: none;
        padding-top: 0.5rem;
        transition: color 0.2s ease;
      }

      .nav-link::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 2px;
        background-color: var(--color-teal);
        transform: scaleX(0);
        transform-origin: left;
        transition: transform 0.3s ease;
      }

      .nav-link:hover {
        color: var(--color-teal);
      }

      .nav-link:hover::before,
      .nav-link.active::before {
        transform: scaleX(1);
      }
      
      .nav-link.active {
        color: var(--color-teal);
      }

      /* Mobile Menu Toggle */
      .nav-toggle {
        display: none;
        background: none;
        border: none;
        cursor: pointer;
        padding: 0;
        z-index: 101;
      }

      .hamburger {
        width: 24px;
        height: 20px;
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }

      .hamburger span {
        display: block;
        width: 100%;
        height: 2px;
        background-color: var(--color-dark-gray);
        transition: all 0.3s ease;
      }

      /* Mobile Styles */
      @media (max-width: 600px) {
        .nav-toggle {
          display: block;
        }

        .nav-content {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100vh;
          background: rgba(220, 220, 221, 0.98);
          backdrop-filter: blur(15px);
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: var(--spacing-xl);
          transform: translateX(100%);
          transition: transform 0.3s cubic-bezier(0.4, 0.0, 0.2, 1);
          padding: 0;
        }

        .nav-content.open {
          transform: translateX(0);
        }
        
        /* Hamburger Animation */
        .nav-toggle.open .hamburger span:nth-child(1) {
          transform: translateY(9px) rotate(45deg);
        }
        
        .nav-toggle.open .hamburger span:nth-child(2) {
          opacity: 0;
        }
        
        .nav-toggle.open .hamburger span:nth-child(3) {
          transform: translateY(-9px) rotate(-45deg);
        }

        .nav-link {
          font-size: 1.5rem;
          padding: 0;
        }
      }
    `];te([ye()],M.prototype,"activeSection",2);te([ye()],M.prototype,"isMenuOpen",2);M=te([b("nav-bar")],M);const N=s=>{class e extends s{firstUpdated(o){super.firstUpdated(o),this._initScrollObserver()}_initScrollObserver(){const o={root:null,rootMargin:"0px",threshold:.1};this._observer=new IntersectionObserver(n=>{n.forEach(c=>{c.isIntersecting&&(c.target.classList.add("visible"),this._observer?.unobserve(c.target))})},o),this.shadowRoot?.querySelectorAll(".animate-on-scroll")?.forEach(n=>{this._observer?.observe(n)}),this.shadowRoot?.querySelectorAll("section")?.forEach(n=>{this._observer?.observe(n),n.classList.add("animate-on-scroll")})}disconnectedCallback(){super.disconnectedCallback(),this._observer?.disconnect()}}return e};var Ve=Object.getOwnPropertyDescriptor,Ye=(s,e,t,o)=>{for(var i=o>1?void 0:o?Ve(e,t):e,r=s.length-1,n;r>=0;r--)(n=s[r])&&(i=n(i)||i);return i};let B=class extends N(m){render(){return y`
      <div class="container">
        <div class="hero-grid">
          <div class="hero-text">
            <h1 class="name">
              <span class="nickname">Granze</span>
              <span class="full-name">Maurizio<br />Mangione</span>
            </h1>
            <div class="title scroll-text">
              <div class="scroll-wrapper">
                <span>Community Professional & Career Coach</span>
                <span>Former Google Developers Expert</span>
                <span>Former Microsoft MVP</span>
                <span aria-hidden="true">Community Professional & Career Coach</span>
              </div>
            </div>
          </div>

          <div class="hero-portrait">
            <picture>
              <source srcset="/images/granze-portrait-mobile.webp" media="(max-width: 600px)" type="image/webp" width="400" height="331">
              <source srcset="/images/granze-portrait.webp" type="image/webp" width="814" height="674">
              <img src="/images/granze-portrait.png" alt="Maurizio Mangione" width="814" height="674" fetchpriority="high" style="aspect-ratio: 814/674;" />
            </picture>
          </div>
        </div>
      </div>
    `}};B.styles=[_,u`
      :host {
        display: block;
        overflow: hidden;
      }

      .hero-grid {
        display: grid;
        grid-template-columns: 1fr max-content;
        min-height: calc(100vh - 60px);
      }

      /* Left side - text content */
      .hero-text {
        position: absolute;
        display: flex;
        flex-direction: column;
        justify-content: center;
      }

      .name {
        font-size: clamp(3.5rem, 5vw, 5.5rem);
        line-height: 1.05;
        margin-bottom: 0;
      }

      .name span {
        display: block;
      }

      .nickname {
        color: var(--color-teal);
      }

      .full-name {
        font-size: 80%;
      }

      .title {
        font-size: clamp(1rem, 2vw, 1.25rem);
        color: var(--color-slate);
        font-weight: 400;
        max-width: 400px;
      }

      .scroll-text {
        height: 1.5em;
        overflow: hidden;
        position: relative;
        margin-top: 10px;
      }
      
      .scroll-wrapper {
        display: block;
        animation: scroll-vertical 9s cubic-bezier(0.2, 0, 0.2, 1) infinite;
      }

      .scroll-wrapper span {
        display: block;
        height: 1.5em;
        line-height: 1.5em;
        white-space: nowrap;
      }

      @keyframes scroll-vertical {
        0%, 25% { transform: translateY(0); }
        33.33%, 58.33% { transform: translateY(-1.5em); }
        66.66%, 91.66% { transform: translateY(-3em); }
        100% { transform: translateY(-4.5em); }
      }

      /* Right side - portrait */
      .hero-portrait {
        display: flex;
        align-items: flex-end;
        justify-content: flex-end;
      }

      .hero-portrait img {
        display: block;
        height: auto;
        max-height: calc(100vh - 60px);
        object-fit: contain;
        object-position: right bottom;
      }

      @media (max-width: 900px) {
        .hero-grid {
          grid-template-columns: 1fr;
          min-height: auto;
        }

        .hero-text {
          position: absolute;
          left: var(--container-padding);
          right: var(--container-padding); /* Ensure it doesn't overflow right */
          top: 80px; /* Increased top margin */
          z-index: 10; /* Ensure text is above image */
        }

        .title {
          max-width: 100%;
          text-shadow: 2px 2px 0px rgba(255, 255, 255, 0.8);
        }

        .name {
          text-shadow: 2px 2px 0px rgba(255, 255, 255, 0.8);
        }

        .scroll-text {
          font-weight: bold;
          text-shadow: 2px 2px 0px rgba(255, 255, 255, 0.8);
        }


        .hero-portrait {
          order: 2;
          justify-content: center;
        }

        .hero-portrait img {
          max-height: 50vh;
          margin-left: 30%; 
          object-position: right bottom;
        }
      }

      @media (max-width: 600px) {
        .hero-portrait img {
          max-height: 40vh;
        }
      }
    `];B=Ye([b("hero-section")],B);var Ge=Object.getOwnPropertyDescriptor,Je=(s,e,t,o)=>{for(var i=o>1?void 0:o?Ge(e,t):e,r=s.length-1,n;r>=0;r--)(n=s[r])&&(i=n(i)||i);return i};let W=class extends m{render(){return y`
      <section class="section" id="what-i-do">
        <div class="container">
          <h2 class="section-title">What I Do Now</h2>

          <div class="section-intro">
            <p class="intro-text">
              As Head of Career Success at <a href="https://boolean.careers" target="_blank">Boolean</a>, I focus on multiple
              dimensions of professional development. My approach combines deep
              technical knowledge with a genuine passion for community building.
            </p>
          </div>

          <div class="activities-grid">
            <div class="activity-item">
              <h3 class="activity-title">Strategic Partnerships</h3>
              <p class="activity-desc">
                I develop and manage relationships with leading tech companies
                to create opportunities for our students.
              </p>
            </div>

            <div class="activity-item">
              <h3 class="activity-title">Career Services Design</h3>
              <p class="activity-desc">
                I oversee and design comprehensive learning and career service
                paths tailored to individual needs.
              </p>
            </div>

            <div class="activity-item">
              <h3 class="activity-title">Career Coaching</h3>
              <p class="activity-desc">
                I provide expert guidance to help students navigate their career
                journeys with confidence.
              </p>
            </div>

            <div class="activity-item">
              <h3 class="activity-title">Content Creation</h3>
              <p class="activity-desc">
                I lead engaging content initiatives, including video podcasts
                and YouTube videos that inspire and educate.
              </p>
            </div>

            <div class="activity-item">
              <h3 class="activity-title">Industry Engagement</h3>
              <p class="activity-desc">
                I actively participate in tech events and conferences, staying
                connected with the broader community.
              </p>
            </div>

            <div class="activity-item">
              <h3 class="activity-title">Public Speaking</h3>
              <p class="activity-desc">
                With more than 100 events under my belt, I'm a seasoned public speaker who loves sharing my knowledge and experience with others.
              </p>
            </div>
          </div>
        </div>
      </section>
    `}};W.styles=[_,u`
      :host {
        display: block;
        background: white;
        position: relative;
        overflow: hidden;
      }

      .section-intro {
        max-width: 700px;
        margin-bottom: var(--spacing-xl);
      }

      .intro-text {
        font-size: 1.125rem;
        color: var(--color-slate);
      }

      .activities-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        gap: var(--spacing-lg);
      }

      .activity-item {
        position: relative;
        padding-left: var(--spacing-lg);
      }

      .activity-item::before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        width: 4px;
        height: 100%;
        background: var(--color-teal);
      }

      .activity-title {
        font-family: var(--font-heading);
        font-size: 1.125rem;
        font-weight: 600;
        color: var(--color-dark-gray);
        margin-bottom: var(--spacing-xs);
      }

      .activity-desc {
        font-size: 0.9375rem;
        color: var(--color-slate);
        line-height: 1.7;
      }

      @media (max-width: 768px) {
        .activities-grid {
          grid-template-columns: 1fr;
        }
      }
    `];W=Je([b("what-i-do-section")],W);var Xe=Object.getOwnPropertyDescriptor,Ke=(s,e,t,o)=>{for(var i=o>1?void 0:o?Xe(e,t):e,r=s.length-1,n;r>=0;r--)(n=s[r])&&(i=n(i)||i);return i};let q=class extends N(m){render(){return y`
      <section class="section" id="community">
        <div class="container">
          <h2 class="section-title">Community Leadership</h2>

          <p class="intro-text">
            I'm deeply committed to building and nurturing tech communities. I
            believe in the power of bringing people together, whether through
            in-person meetups, online communities, or international conferences.
          </p>

          <div class="community-grid">
            
            <!-- Item 1 -->
            <div class="community-item">
              <div class="community-header">
                <div class="community-info">
                  <h3>Milano JS</h3>
                </div>
                <span class="community-years">Founder • 2013 - Present</span>
              </div>
              <p class="community-desc">
                One of Italy's most influential JavaScript communities,
                bringing developers together for knowledge sharing and
                networking.
              </p>
              <a href="https://milanojs.com/" target="_blank" rel="noopener" class="website-link">
                milanojs.com
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              </a>
            </div>

            <!-- Item 2 -->
            <div class="community-item">
              <div class="community-header">
                <div class="community-info">
                  <h3>Italia JS</h3>
                </div>
                <span class="community-years">Founder • 2016 - Present</span>
              </div>
              <p class="community-desc">
                Italian JavaScript online community, bringing together developers
                from all over Italy on Discord.
              </p>
               <a href="https://italia-js.org/" target="_blank" rel="noopener" class="website-link">
                italia-js.org
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              </a>
            </div>

            <!-- Item 3 -->
            <div class="community-item">
              <div class="community-header">
                <div class="community-info">
                  <h3>JS Girls</h3>
                </div>
                <span class="community-years">Founder</span>
              </div>
              <p class="community-desc">
                An international initiative aimed at involving more women in
                programming and tech. Events organized in Milan, Rome and London.
              </p>
            </div>

            <!-- Item 4 (Former Roles) -->
            <div class="community-item">
               <div class="community-header">
                <div class="community-info">
                  <h3>Former Roles</h3>
                </div>
              </div>
              <div style="display: flex; flex-direction: column; gap: 8px; margin-top: 1rem;">
                <div style="font-size: 0.9375rem; color: var(--color-slate);">
                  • Co-organizer of Codebar Amsterdam
                </div>
                <div style="font-size: 0.9375rem; color: var(--color-slate);">
                  • Program Committee Member at Codemotion and JS Day
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    `}};q.styles=[_,u`
      :host {
        display: block;
        background: white;
        position: relative;
        overflow: hidden;
      }

      .intro-text {
        font-size: 1.125rem;
        color: var(--color-slate);
        margin-bottom: var(--spacing-xl);
        max-width: 800px;
      }

      .community-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: var(--spacing-md);
      }

      .community-item {
        display: flex;
        flex-direction: column;
        padding: var(--spacing-lg);
        border: 1px solid var(--color-medium-gray);
        transition: transform 0.2s ease, box-shadow 0.2s ease;
        background: white;
      }

      .community-item:hover {
        transform: translateY(-2px);
        box-shadow: 4px 4px 0px var(--color-light-gray);
      }

      .community-header {
        display: flex;
        align-items: baseline;
        justify-content: space-between;
        margin-bottom: var(--spacing-sm);
        flex-wrap: wrap;
        gap: var(--spacing-xs);
      }

      .community-info {
        display: flex;
        flex-direction: column;
        gap: 4px;
      }

      .community-info h3 {
        font-family: var(--font-heading);
        font-size: 1.5rem;
        font-weight: 700;
        color: var(--color-dark-gray);
        margin: 0;
        line-height: 1.1;
      }

      .website-link {
        font-size: 0.75rem;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.05em;
        color: var(--color-teal);
        text-decoration: none;
        display: inline-flex;
        align-items: center;
        gap: 4px;
        align-self: flex-end; /* Align to right */
        margin-top: auto;     /* Push to bottom */
        padding-top: var(--spacing-sm);
      }

      .website-link:hover {
        text-decoration: underline;
        color: var(--color-dark-gray);
      }

      .community-years {
        font-family: var(--font-body);
        font-size: 0.75rem;
        text-transform: uppercase;
        letter-spacing: 0.05em;
        color: var(--color-slate);
        font-weight: 600;
        white-space: nowrap;
        opacity: 0.8;
      }

      .community-desc {
        font-size: 0.9375rem;
        color: var(--color-slate);
        line-height: 1.5;
        margin-bottom: var(--spacing-sm); /* Add space before potential link */
      }

      @media (max-width: 768px) {
        .community-grid {
          grid-template-columns: 1fr;
        }
      }
    `];q=Ke([b("community-section")],q);var Ze=Object.getOwnPropertyDescriptor,Qe=(s,e,t,o)=>{for(var i=o>1?void 0:o?Ze(e,t):e,r=s.length-1,n;r>=0;r--)(n=s[r])&&(i=n(i)||i);return i};let F=class extends m{render(){return y`
      <section class="section">
        <div class="container">
          <h2 class="section-title">Recognition & Achievements</h2>

          <div class="recognition-grid">
            <div class="recognition-item">
              <h3 class="recognition-title">Google Developers Expert</h3>
              <p class="recognition-year">2015 - 2022</p>
              <p class="recognition-desc">
                Recognized as an expert for web technologies, contributing to
                the global developer community.
              </p>
            </div>

            <div class="recognition-item">
              <h3 class="recognition-title">Microsoft TAG Team</h3>
              <p class="recognition-year">2017 - 2018</p>
              <p class="recognition-desc">
                Selected among 150 open source and community experts worldwide.
              </p>
            </div>

            <div class="recognition-item">
              <h3 class="recognition-title">Microsoft MVP</h3>
              <p class="recognition-year">2018 - 2022</p>
              <p class="recognition-desc">
                Recognized for outstanding contributions to technical
                communities.
              </p>
            </div>

          </div>
        </div>
      </section>
    `}};F.styles=[_,u`
      :host {
        display: block;
        background: var(--color-slate);
        color: white;
        position: relative;
        overflow: hidden;
      }

      .section-title {
        color: white;
      }

      .section-title::after {
        background-color: var(--color-teal);
      }

      .recognition-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: var(--spacing-lg);
      }

      .recognition-item {
        position: relative;
        padding: var(--spacing-md);
        background: rgba(255, 255, 255, 0.05);
        border-left: 4px solid var(--color-teal);
      }

      .recognition-title {
        font-family: var(--font-heading);
        font-size: 1.125rem;
        font-weight: 600;
        color: white;
        margin-bottom: var(--spacing-xs);
      }

      .recognition-year {
        font-size: 0.8125rem;
        color: var(--color-light-gray);
        font-weight: 500;
        margin-bottom: var(--spacing-xs);
      }

      .recognition-desc {
        font-size: 0.9375rem;
        color: var(--color-medium-gray);
        line-height: 1.6;
      }`];F=Qe([b("recognition-section")],F);var et=Object.getOwnPropertyDescriptor,tt=(s,e,t,o)=>{for(var i=o>1?void 0:o?et(e,t):e,r=s.length-1,n;r>=0;r--)(n=s[r])&&(i=n(i)||i);return i};let V=class extends N(m){render(){return y`
      <section class="section" id="hobbies">
        <div class="container">
          <h2 class="section-title">Hobbies & Interests</h2>

          <div class="hobbies-grid">
            
            <div class="hobby-item">
              <span class="hobby-number">01</span>
              <h3>Rock Climbing</h3>
              <p>
                I started rock climbing many years ago and It has been a life-changer in terms of habits, friends and fitness. So much so I became an Italian Alpine Club (CAI) instructor, which allowed me to share my passion with others. During my years in Amsterdam I also worked as a route setter and coach for a local climbing gym.
              </p>
            </div>

            <div class="hobby-item">
              <span class="hobby-number">02</span>
              <h3>Literature & Writing</h3>
              <p>
                I'm passionate about literature, especially russian literature but I also enjoy reading contemporary fiction. I'm also a writer, I wrote some short stories, published in some literary magazines and I recently finished my first novel.
              </p>
            </div>

            <div class="hobby-item">
              <span class="hobby-number">03</span>
              <h3>Music Production</h3>
              <p>
                I enjoy playing guitar, programming drums and composing. I have my own home studio where I can record and produce music. Attending live music events is a big part of my life.
              </p>
            </div>

          </div>
        </div>
      </section>
    `}};V.styles=[_,u`
      :host {
        display: block;
        background: var(--color-light-gray); /* Keeping light gray backdrop */
        position: relative;
        overflow: hidden;
        padding-bottom: var(--spacing-2xl);
      }

      .hobbies-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        border-top: 1px solid var(--color-medium-gray);
        border-bottom: 1px solid var(--color-medium-gray);
        background: white;
      }

      .hobby-item {
        display: flex;
        flex-direction: column;
        padding: var(--spacing-xl) var(--spacing-lg);
        border-right: 1px solid var(--color-medium-gray);
        transition: background-color 0.2s ease;
      }

      .hobby-item:last-child {
        border-right: none;
      }

      .hobby-item:hover {
        background-color: rgba(0, 0, 0, 0.02);
      }

      .hobby-number {
        font-family: var(--font-body);
        font-size: 0.75rem;
        font-weight: 600;
        color: var(--color-teal);
        opacity: 0.8;
        margin-bottom: var(--spacing-md);
        display: block;
      }

      .hobby-item h3 {
        font-family: var(--font-heading);
        font-size: 1.5rem;
        font-weight: 700;
        color: var(--color-dark-gray);
        margin-bottom: var(--spacing-md);
        line-height: 1.2;
        min-height: 3.6rem; /* Align descriptions */
      }

      .hobby-item p {
        font-family: var(--font-body);
        font-size: 0.9375rem;
        color: var(--color-slate);
        line-height: 1.6;
        margin: 0;
      }

      @media (max-width: 900px) {
        .hobbies-grid {
          grid-template-columns: 1fr;
          border-bottom: none;
        }

        .hobby-item {
          border-right: none;
          border-bottom: 1px solid var(--color-medium-gray);
          padding: var(--spacing-lg);
        }

        .hobby-item:last-child {
          border-bottom: 1px solid var(--color-medium-gray); /* Close the grid on mobile */
        }
        
        .hobby-item h3 {
            min-height: auto;
        }
      }
    `];V=tt([b("hobbies-section")],V);var it=Object.getOwnPropertyDescriptor,ot=(s,e,t,o)=>{for(var i=o>1?void 0:o?it(e,t):e,r=s.length-1,n;r>=0;r--)(n=s[r])&&(i=n(i)||i);return i};let Y=class extends N(m){render(){return y`
      <section class="section" id="contact">
        <div class="container">
          <div class="contact-wrapper">
            <div class="contact-content">
              <h2 class="section-title">Let's Connect</h2>
              <div class="social-links">
                <a
                  href="https://linkedin.com/in/granze"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="social-link"
                >
                  <span class="social-icon">
                    <svg viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                  </span>
                  LinkedIn
                </a>
                <a
                  href="https://twitter.com/granze"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="social-link"
                >
                  <span class="social-icon">
                    <svg viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                  </span>
                  X / Twitter
                </a>
                <a
                  href="https://github.com/granze"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="social-link"
                >
                  <span class="social-icon">
                    <svg viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                  </span>
                  GitHub
                </a>
                <a
                  href="https://discord.com/invite/CrHrweEaUg"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="social-link"
                >
                   <span class="social-icon">
                    <svg viewBox="0 0 24 24"><path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.7725-.6083 1.1588a18.2915 18.2915 0 00-5.4882 0 12.642 12.642 0 00-.6173-1.1588.0775.0775 0 00-.0793-.0371 19.7363 19.7363 0 00-4.8859 1.5152.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561 20.03 20.03 0 005.9937 3.0337.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057 13.111 13.111 0 01-1.872-1.0225.077.077 0 01.006-.1104 12.2045 12.2045 0 00.7415-.4701.0746.0746 0 01.0785-.0053c4.2961 1.9614 8.9419 1.9614 13.1396 0a.0722.0722 0 01.0792.0053 11.536 11.536 0 00.7423.4701.0772.0772 0 01.0062.1104 13.045 13.045 0 01-1.8693 1.0225.0766.0766 0 00-.0407.1064c.3604.6983.7719 1.3621 1.225 1.9935a.0768.0768 0 00.0845.0276 20.0573 20.0573 0 005.9915-3.0336.077.077 0 00.0313-.0554c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0956 2.1568 2.419 0 1.3332-.946 2.4188-2.1568 2.4188zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0956 2.1568 2.419 0 1.3332-.946 2.4188-2.1568 2.4188z"/></svg>
                  </span>
                  Discord
                </a>

                <a
                  href="https://instagram.com/granze"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="social-link"
                >
                  <span class="social-icon">
                    <svg viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                  </span>
                  Instagram
                </a>
              </div>
            </div>
          </div>

          <div class="footer-note">
            <p class="footer-text">
            © ${new Date().getFullYear()} Maurizio (Granze) Mangione
            </p>
          </div>
        </div>
      </section>
    `}};Y.styles=[_,u`
      :host {
        display: block;
        background: var(--color-dark-gray);
        color: white;
        position: relative;
        overflow: hidden;
      }

      .contact-wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: var(--spacing-lg);
        text-align: center;
      }

      .section-title {
        color: white;
        text-align: center;
      }

      .section-title::after {
        background-color: var(--color-teal);
        left: 50%;
        transform: translateX(-50%);
      }

      .social-links {
        display: flex;
        flex-wrap: wrap; /* Safe wrapping for very small screens, but row on most */
        justify-content: center;
        gap: var(--spacing-md);
      }

      .social-link {
        font-family: var(--font-heading);
        font-size: 0.9375rem;
        font-weight: 500;
        color: white;
        display: flex;
        align-items: center;
        gap: var(--spacing-xs);
        padding: var(--spacing-sm) var(--spacing-md);
        background: transparent;
        border: 2px solid var(--color-slate);
        transition: all 0.2s ease;
        text-decoration: none;
      }

      .social-link:hover {
        border-color: var(--color-teal);
        background: var(--color-teal);
        color: white;
      }

      .social-icon {
        width: 20px;
        height: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        fill: currentColor;
      }
      
      .social-icon svg {
        width: 100%;
        height: 100%;
      }

      .footer-note {
        margin-top: var(--spacing-xl);
        padding-top: var(--spacing-lg);
        text-align: center;
        border-top: 1px solid var(--color-slate);
        color: var(--color-light-gray);
        width: 100%;
        max-width: 600px;
        margin-left: auto;
        margin-right: auto;
      }

      .footer-text {
        font-size: 0.875rem;
        color: var(--color-light-gray);
      }

      @media (min-width: 768px) {
         .social-links {
           flex-wrap: nowrap;
         }
      }
    `];Y=ot([b("contact-section")],Y);var st=Object.getOwnPropertyDescriptor,rt=(s,e,t,o)=>{for(var i=o>1?void 0:o?st(e,t):e,r=s.length-1,n;r>=0;r--)(n=s[r])&&(i=n(i)||i);return i};let G=class extends m{render(){return y`
      <nav-bar></nav-bar>
      <main>
        <hero-section id="about"></hero-section>
        <what-i-do-section id="what-i-do"></what-i-do-section>
        <recognition-section id="recognition"></recognition-section>
        <community-section id="community"></community-section>
        <hobbies-section id="hobbies"></hobbies-section>
        <contact-section id="contact"></contact-section>
      </main>
    `}};G.styles=u`
    :host {
      display: block;
      background: #dcdcdd;
    }

    main {
      display: flex;
      flex-direction: column;
      padding-top: 60px;
    }
  `;G=rt([b("granze-app")],G);
