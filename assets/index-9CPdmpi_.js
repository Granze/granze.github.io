(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=globalThis,t=e.ShadowRoot&&(e.ShadyCSS===void 0||e.ShadyCSS.nativeShadow)&&`adoptedStyleSheets`in Document.prototype&&`replace`in CSSStyleSheet.prototype,n=Symbol(),r=new WeakMap,i=class{constructor(e,t,r){if(this._$cssResult$=!0,r!==n)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,n=this.t;if(t&&e===void 0){let t=n!==void 0&&n.length===1;t&&(e=r.get(n)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),t&&r.set(n,e))}return e}toString(){return this.cssText}},a=e=>new i(typeof e==`string`?e:e+``,void 0,n),o=(e,...t)=>new i(e.length===1?e[0]:t.reduce((t,n,r)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if(typeof e==`number`)return e;throw Error(`Value passed to 'css' function must be a 'css' function result: `+e+`. Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.`)})(n)+e[r+1],e[0]),e,n),s=(n,r)=>{if(t)n.adoptedStyleSheets=r.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let t of r){let r=document.createElement(`style`),i=e.litNonce;i!==void 0&&r.setAttribute(`nonce`,i),r.textContent=t.cssText,n.appendChild(r)}},c=t?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t=``;for(let n of e.cssRules)t+=n.cssText;return a(t)})(e):e,{is:l,defineProperty:u,getOwnPropertyDescriptor:d,getOwnPropertyNames:ee,getOwnPropertySymbols:te,getPrototypeOf:ne}=Object,f=globalThis,p=f.trustedTypes,re=p?p.emptyScript:``,ie=f.reactiveElementPolyfillSupport,m=(e,t)=>e,h={toAttribute(e,t){switch(t){case Boolean:e=e?re:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=e!==null;break;case Number:n=e===null?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch{n=null}}return n}},g=(e,t)=>!l(e,t),_={attribute:!0,type:String,converter:h,reflect:!1,useDefault:!1,hasChanged:g};Symbol.metadata??=Symbol(`metadata`),f.litPropertyMetadata??=new WeakMap;var v=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=_){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let n=Symbol(),r=this.getPropertyDescriptor(e,n,t);r!==void 0&&u(this.prototype,e,r)}}static getPropertyDescriptor(e,t,n){let{get:r,set:i}=d(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:r,set(t){let a=r?.call(this);i?.call(this,t),this.requestUpdate(e,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??_}static _$Ei(){if(this.hasOwnProperty(m(`elementProperties`)))return;let e=ne(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(m(`finalized`)))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(m(`properties`))){let e=this.properties,t=[...ee(e),...te(e)];for(let n of t)this.createProperty(n,e[n])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[e,n]of t)this.elementProperties.set(e,n)}this._$Eh=new Map;for(let[e,t]of this.elementProperties){let n=this._$Eu(e,t);n!==void 0&&this._$Eh.set(n,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let n=new Set(e.flat(1/0).reverse());for(let e of n)t.unshift(c(e))}else e!==void 0&&t.push(c(e));return t}static _$Eu(e,t){let n=t.attribute;return!1===n?void 0:typeof n==`string`?n:typeof e==`string`?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return s(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ET(e,t){let n=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,n);if(r!==void 0&&!0===n.reflect){let i=(n.converter?.toAttribute===void 0?h:n.converter).toAttribute(t,n.type);this._$Em=e,i==null?this.removeAttribute(r):this.setAttribute(r,i),this._$Em=null}}_$AK(e,t){let n=this.constructor,r=n._$Eh.get(e);if(r!==void 0&&this._$Em!==r){let e=n.getPropertyOptions(r),i=typeof e.converter==`function`?{fromAttribute:e.converter}:e.converter?.fromAttribute===void 0?h:e.converter;this._$Em=r;let a=i.fromAttribute(t,e.type);this[r]=a??this._$Ej?.get(r)??a,this._$Em=null}}requestUpdate(e,t,n,r=!1,i){if(e!==void 0){let a=this.constructor;if(!1===r&&(i=this[e]),n??=a.getPropertyOptions(e),!((n.hasChanged??g)(i,t)||n.useDefault&&n.reflect&&i===this._$Ej?.get(e)&&!this.hasAttribute(a._$Eu(e,n))))return;this.C(e,t,n)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:n,reflect:r,wrapped:i},a){n&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,a??t??this[e]),!0!==i||a!==void 0)||(this._$AL.has(e)||(this.hasUpdated||n||(t=void 0),this._$AL.set(e,t)),!0===r&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}let e=this.constructor.elementProperties;if(e.size>0)for(let[t,n]of e){let{wrapped:e}=n,r=this[t];!0!==e||this._$AL.has(t)||r===void 0||this.C(t,void 0,n,r)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}};v.elementStyles=[],v.shadowRootOptions={mode:`open`},v[m(`elementProperties`)]=new Map,v[m(`finalized`)]=new Map,ie?.({ReactiveElement:v}),(f.reactiveElementVersions??=[]).push(`2.1.2`);var y=globalThis,b=e=>e,x=y.trustedTypes,S=x?x.createPolicy(`lit-html`,{createHTML:e=>e}):void 0,C=`$lit$`,w=`lit$${Math.random().toFixed(9).slice(2)}$`,T=`?`+w,ae=`<${T}>`,E=document,D=()=>E.createComment(``),O=e=>e===null||typeof e!=`object`&&typeof e!=`function`,k=Array.isArray,oe=e=>k(e)||typeof e?.[Symbol.iterator]==`function`,A=`[ 	
\f\r]`,j=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,M=/-->/g,se=/>/g,N=RegExp(`>|${A}(?:([^\\s"'>=/]+)(${A}*=${A}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,`g`),ce=/'/g,P=/"/g,F=/^(?:script|style|textarea|title)$/i,I=(e=>(t,...n)=>({_$litType$:e,strings:t,values:n}))(1),L=Symbol.for(`lit-noChange`),R=Symbol.for(`lit-nothing`),z=new WeakMap,B=E.createTreeWalker(E,129);function V(e,t){if(!k(e)||!e.hasOwnProperty(`raw`))throw Error(`invalid template strings array`);return S===void 0?t:S.createHTML(t)}var le=(e,t)=>{let n=e.length-1,r=[],i,a=t===2?`<svg>`:t===3?`<math>`:``,o=j;for(let t=0;t<n;t++){let n=e[t],s,c,l=-1,u=0;for(;u<n.length&&(o.lastIndex=u,c=o.exec(n),c!==null);)u=o.lastIndex,o===j?c[1]===`!--`?o=M:c[1]===void 0?c[2]===void 0?c[3]!==void 0&&(o=N):(F.test(c[2])&&(i=RegExp(`</`+c[2],`g`)),o=N):o=se:o===N?c[0]===`>`?(o=i??j,l=-1):c[1]===void 0?l=-2:(l=o.lastIndex-c[2].length,s=c[1],o=c[3]===void 0?N:c[3]===`"`?P:ce):o===P||o===ce?o=N:o===M||o===se?o=j:(o=N,i=void 0);let d=o===N&&e[t+1].startsWith(`/>`)?` `:``;a+=o===j?n+ae:l>=0?(r.push(s),n.slice(0,l)+C+n.slice(l)+w+d):n+w+(l===-2?t:d)}return[V(e,a+(e[n]||`<?>`)+(t===2?`</svg>`:t===3?`</math>`:``)),r]},H=class e{constructor({strings:t,_$litType$:n},r){let i;this.parts=[];let a=0,o=0,s=t.length-1,c=this.parts,[l,u]=le(t,n);if(this.el=e.createElement(l,r),B.currentNode=this.el.content,n===2||n===3){let e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;(i=B.nextNode())!==null&&c.length<s;){if(i.nodeType===1){if(i.hasAttributes())for(let e of i.getAttributeNames())if(e.endsWith(C)){let t=u[o++],n=i.getAttribute(e).split(w),r=/([.?@])?(.*)/.exec(t);c.push({type:1,index:a,name:r[2],strings:n,ctor:r[1]===`.`?de:r[1]===`?`?fe:r[1]===`@`?pe:G}),i.removeAttribute(e)}else e.startsWith(w)&&(c.push({type:6,index:a}),i.removeAttribute(e));if(F.test(i.tagName)){let e=i.textContent.split(w),t=e.length-1;if(t>0){i.textContent=x?x.emptyScript:``;for(let n=0;n<t;n++)i.append(e[n],D()),B.nextNode(),c.push({type:2,index:++a});i.append(e[t],D())}}}else if(i.nodeType===8)if(i.data===T)c.push({type:2,index:a});else{let e=-1;for(;(e=i.data.indexOf(w,e+1))!==-1;)c.push({type:7,index:a}),e+=w.length-1}a++}}static createElement(e,t){let n=E.createElement(`template`);return n.innerHTML=e,n}};function U(e,t,n=e,r){if(t===L)return t;let i=r===void 0?n._$Cl:n._$Co?.[r],a=O(t)?void 0:t._$litDirective$;return i?.constructor!==a&&(i?._$AO?.(!1),a===void 0?i=void 0:(i=new a(e),i._$AT(e,n,r)),r===void 0?n._$Cl=i:(n._$Co??=[])[r]=i),i!==void 0&&(t=U(e,i._$AS(e,t.values),i,r)),t}var ue=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:n}=this._$AD,r=(e?.creationScope??E).importNode(t,!0);B.currentNode=r;let i=B.nextNode(),a=0,o=0,s=n[0];for(;s!==void 0;){if(a===s.index){let t;s.type===2?t=new W(i,i.nextSibling,this,e):s.type===1?t=new s.ctor(i,s.name,s.strings,this,e):s.type===6&&(t=new me(i,this,e)),this._$AV.push(t),s=n[++o]}a!==s?.index&&(i=B.nextNode(),a++)}return B.currentNode=E,r}p(e){let t=0;for(let n of this._$AV)n!==void 0&&(n.strings===void 0?n._$AI(e[t]):(n._$AI(e,n,t),t+=n.strings.length-2)),t++}},W=class e{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,n,r){this.type=2,this._$AH=R,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=U(this,e,t),O(e)?e===R||e==null||e===``?(this._$AH!==R&&this._$AR(),this._$AH=R):e!==this._$AH&&e!==L&&this._(e):e._$litType$===void 0?e.nodeType===void 0?oe(e)?this.k(e):this._(e):this.T(e):this.$(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==R&&O(this._$AH)?this._$AA.nextSibling.data=e:this.T(E.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:n}=e,r=typeof n==`number`?this._$AC(e):(n.el===void 0&&(n.el=H.createElement(V(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===r)this._$AH.p(t);else{let e=new ue(r,this),n=e.u(this.options);e.p(t),this.T(n),this._$AH=e}}_$AC(e){let t=z.get(e.strings);return t===void 0&&z.set(e.strings,t=new H(e)),t}k(t){k(this._$AH)||(this._$AH=[],this._$AR());let n=this._$AH,r,i=0;for(let a of t)i===n.length?n.push(r=new e(this.O(D()),this.O(D()),this,this.options)):r=n[i],r._$AI(a),i++;i<n.length&&(this._$AR(r&&r._$AB.nextSibling,i),n.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let t=b(e).nextSibling;b(e).remove(),e=t}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},G=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,r,i){this.type=1,this._$AH=R,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=i,n.length>2||n[0]!==``||n[1]!==``?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=R}_$AI(e,t=this,n,r){let i=this.strings,a=!1;if(i===void 0)e=U(this,e,t,0),a=!O(e)||e!==this._$AH&&e!==L,a&&(this._$AH=e);else{let r=e,o,s;for(e=i[0],o=0;o<i.length-1;o++)s=U(this,r[n+o],t,o),s===L&&(s=this._$AH[o]),a||=!O(s)||s!==this._$AH[o],s===R?e=R:e!==R&&(e+=(s??``)+i[o+1]),this._$AH[o]=s}a&&!r&&this.j(e)}j(e){e===R?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??``)}},de=class extends G{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===R?void 0:e}},fe=class extends G{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==R)}},pe=class extends G{constructor(e,t,n,r,i){super(e,t,n,r,i),this.type=5}_$AI(e,t=this){if((e=U(this,e,t,0)??R)===L)return;let n=this._$AH,r=e===R&&n!==R||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,i=e!==R&&(n===R||r);r&&this.element.removeEventListener(this.name,this,n),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH==`function`?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},me=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){U(this,e)}},he=y.litHtmlPolyfillSupport;he?.(H,W),(y.litHtmlVersions??=[]).push(`3.3.2`);var ge=(e,t,n)=>{let r=n?.renderBefore??t,i=r._$litPart$;if(i===void 0){let e=n?.renderBefore??null;r._$litPart$=i=new W(t.insertBefore(D(),e),e,void 0,n??{})}return i._$AI(e),i},K=globalThis,q=class extends v{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=ge(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return L}};q._$litElement$=!0,q.finalized=!0,K.litElementHydrateSupport?.({LitElement:q});var _e=K.litElementPolyfillSupport;_e?.({LitElement:q}),(K.litElementVersions??=[]).push(`4.2.2`);var J=e=>(t,n)=>{n===void 0?customElements.define(e,t):n.addInitializer(()=>{customElements.define(e,t)})},ve={attribute:!0,type:String,converter:h,reflect:!1,hasChanged:g},ye=(e=ve,t,n)=>{let{kind:r,metadata:i}=n,a=globalThis.litPropertyMetadata.get(i);if(a===void 0&&globalThis.litPropertyMetadata.set(i,a=new Map),r===`setter`&&((e=Object.create(e)).wrapped=!0),a.set(n.name,e),r===`accessor`){let{name:r}=n;return{set(n){let i=t.get.call(this);t.set.call(this,n),this.requestUpdate(r,i,e,!0,n)},init(t){return t!==void 0&&this.C(r,void 0,e,t),t}}}if(r===`setter`){let{name:r}=n;return function(n){let i=this[r];t.call(this,n),this.requestUpdate(r,i,e,!0,n)}}throw Error(`Unsupported decorator location: `+r)};function be(e){return(t,n)=>typeof n==`object`?ye(e,t,n):((e,t,n)=>{let r=t.hasOwnProperty(n);return t.constructor.createProperty(n,e),r?Object.getOwnPropertyDescriptor(t,n):void 0})(e,t,n)}function Y(e){return be({...e,state:!0,attribute:!1})}var X=o`
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


`;function Z(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a}var Q=class extends q{constructor(...e){super(...e),this.activeSection=``,this.isMenuOpen=!1,this.observer=null}static{this.styles=[X,o`
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
        display: none;
      }
      
      @media (max-width: 600px) {
        .logo {
            display: block;
        }
      }

      .nav-content {
        display: flex;
        justify-content: flex-end;
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
    `]}firstUpdated(){let e={root:null,rootMargin:`-50% 0px -50% 0px`,threshold:0};this.observer=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting&&(this.activeSection=e.target.id)})},e),(this.shadowRoot?.querySelectorAll(`a[href^="#"]`))?.forEach(e=>{let t=e.getAttribute(`href`)?.substring(1),n=this.getRootNode().getElementById(t||``);n&&this.observer?.observe(n)})}disconnectedCallback(){super.disconnectedCallback(),this.observer?.disconnect(),document.body.style.overflow=``}toggleMenu(){this.isMenuOpen=!this.isMenuOpen,this.isMenuOpen?document.body.style.overflow=`hidden`:document.body.style.overflow=``}scrollToSection(e){e.preventDefault(),this.isMenuOpen&&this.toggleMenu();let t=e.target.getAttribute(`href`)?.substring(1);if(!t)return;let n=this.getRootNode().getElementById(t);if(!n)return;let r=parseInt(getComputedStyle(document.documentElement).getPropertyValue(`--navbar-height`))||60,i=n.getBoundingClientRect().top,a=window.scrollY+i-r;window.scrollTo({top:a,behavior:`smooth`}),history.pushState(null,``,`#${t}`)}render(){return I`
      <div class="container nav-container">
        <a href="#" class="logo" @click="${e=>{e.preventDefault(),window.scrollTo({top:0,behavior:`smooth`})}}">G</a>
        
        <button class="nav-toggle ${this.isMenuOpen?`open`:``}" @click="${this.toggleMenu}" aria-label="Toggle menu" aria-expanded="${this.isMenuOpen}">
          <div class="hamburger">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>

        <div class="nav-content ${this.isMenuOpen?`open`:``}">
          <a href="#about" class="nav-link ${this.activeSection===`about`?`active`:``}" @click="${this.scrollToSection}">About</a>
          <a href="#what-i-do" class="nav-link ${this.activeSection===`what-i-do`?`active`:``}" @click="${this.scrollToSection}">What I Do</a>
          <a href="#recognition" class="nav-link ${this.activeSection===`recognition`?`active`:``}" @click="${this.scrollToSection}">Recognition</a>
          <a href="#community" class="nav-link ${this.activeSection===`community`?`active`:``}" @click="${this.scrollToSection}">Community</a>
          <a href="#hobbies" class="nav-link ${this.activeSection===`hobbies`?`active`:``}" @click="${this.scrollToSection}">Hobbies</a>
          <a href="#contact" class="nav-link ${this.activeSection===`contact`?`active`:``}" @click="${this.scrollToSection}">Contact</a>
        </div>
      </div>
    `}};Z([Y()],Q.prototype,`activeSection`,void 0),Z([Y()],Q.prototype,`isMenuOpen`,void 0),Q=Z([J(`nav-bar`)],Q);var $=class extends q{static{this.styles=[X,o`
      :host {
        display: block;
        overflow: hidden;
      }

      .hero-grid {
        display: grid;
        grid-template-columns: 1fr max-content;
        min-height: calc(100vh - var(--navbar-height, 60px));
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
        max-height: calc(100vh - var(--navbar-height, 60px));
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
    `]}render(){return I`
      <div class="container">
        <div class="hero-grid">
          <div class="hero-text">
            <h1 class="name">
              <span class="nickname">Granze</span>
              <span class="full-name">Maurizio<br />Mangione</span>
            </h1>
            <div class="title scroll-text">
              <div class="scroll-wrapper">
                <span>CEO & co-founder</span>
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
    `}};$=Z([J(`hero-section`)],$);var xe=class extends q{static{this.styles=[X,o`
      :host {
        display: block;
        background: white;
        position: relative;
        overflow: hidden;
      }

      /* Shared role block base */
      .role-block {
        margin-bottom: var(--spacing-xl);
      }

      .role-label {
        font-family: var(--font-body);
        font-size: 0.75rem;
        font-weight: 600;
        letter-spacing: 0.08em;
        text-transform: uppercase;
        color: var(--color-teal);
        margin-bottom: var(--spacing-xs);
      }

      .role-title {
        font-family: var(--font-heading);
        font-size: clamp(1.25rem, 2vw, 1.5rem);
        font-weight: 600;
        color: var(--color-dark-gray);
        margin-bottom: var(--spacing-sm);
        line-height: 1.3;
      }

      .role-title a {
        color: var(--color-teal);
        text-decoration: none;
        transition: color 0.2s ease;
      }

      .role-title a:hover {
        color: var(--color-dark-gray);
      }

      .role-desc {
        font-family: var(--font-body);
        font-size: 1rem;
        color: var(--color-slate);
        line-height: 1.7;
        max-width: 680px;
      }

    `]}render(){return I`
      <section class="section" id="what-i-do">
        <div class="container">
          <h2 class="section-title">What I Do Now</h2>

          <div class="role-block">
            <p class="role-label">Co-founder & CEO</p>
            <h3 class="role-title">
              <a href="https://www.faustplatform.com/" target="_blank" rel="noopener">Faust S.r.l.</a>
            </h3>
            <p class="role-desc">
              Faust is an AI-powered platform that integrates the entire editorial workflow, from manuscript evaluation and assisted editing to marketing material generation and contract management. We help publishing houses streamline their processes so they can focus on what truly matters: discovering and nurturing great stories.
            </p>
          </div>


        </div>
      </section>
    `}};xe=Z([J(`what-i-do-section`)],xe);var Se=class extends q{static{this.styles=[X,o`
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
        margin-bottom: var(--spacing-sm);
      }

      .former-roles {
        display: flex;
        flex-direction: column;
        gap: 8px;
        margin-top: 1rem;
      }

      .former-role {
        font-size: 0.9375rem;
        color: var(--color-slate);
      }

      @media (max-width: 768px) {
        .community-grid {
          grid-template-columns: 1fr;
        }
      }
    `]}render(){return I`
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
              <a href="https://milanojs.com/" target="_blank" rel="noopener noreferrer" class="website-link">
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
               <a href="https://italia-js.org/" target="_blank" rel="noopener noreferrer" class="website-link">
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
              <div class="former-roles">
                <div class="former-role">• Co-organizer of Codebar Amsterdam</div>
                <div class="former-role">• Program Committee Member at Codemotion and JS Day</div>
              </div>
            </div>

          </div>
        </div>
      </section>
    `}};Se=Z([J(`community-section`)],Se);var Ce=class extends q{static{this.styles=[X,o`
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
      }`]}render(){return I`
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
    `}};Ce=Z([J(`recognition-section`)],Ce);var we=class extends q{static{this.styles=[X,o`
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
    `]}render(){return I`
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
    `}};we=Z([J(`hobbies-section`)],we);var Te=class extends q{static{this.styles=[X,o`
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
    `]}render(){return I`
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
    `}};Te=Z([J(`contact-section`)],Te);var Ee=class extends q{static{this.styles=o`
    :host {
      display: block;
    }

    main {
      display: flex;
      flex-direction: column;
      padding-top: var(--navbar-height, 60px);
    }
  `}render(){return I`
      <nav-bar></nav-bar>
      <main>
        <hero-section id="about"></hero-section>
        <what-i-do-section id="what-i-do"></what-i-do-section>
        <recognition-section id="recognition"></recognition-section>
        <community-section id="community"></community-section>
        <hobbies-section id="hobbies"></hobbies-section>
        <contact-section id="contact"></contact-section>
      </main>
    `}};Ee=Z([J(`granze-app`)],Ee);