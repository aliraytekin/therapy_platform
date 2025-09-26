// kute.js@2.2.4 downloaded from https://ga.jspm.io/npm:kute.js@2.2.4/dist/kute.esm.js

class CubicBezier{
/**
   * @constructor
   * @param {number} x1 - first point horizontal position
   * @param {number} y1 - first point vertical position
   * @param {number} x2 - second point horizontal position
   * @param {number} y2 - second point vertical position
   * @param {string=} functionName - an optional function name
   * @returns {(t: number) => number} a new CubicBezier easing function
   */
constructor(t,e,n,s,r){const o=t||0;const i=e||0;const a=n||1;const c=s||1;
/** @type {number} */this.cx=3*o;
/** @type {number} */this.bx=3*(a-o)-this.cx;
/** @type {number} */this.ax=1-this.cx-this.bx;
/** @type {number} */this.cy=3*i;
/** @type {number} */this.by=3*(c-i)-this.cy;
/** @type {number} */this.ay=1-this.cy-this.by;
/** @type {(t: number) => number} */const BezierEasing=t=>this.sampleCurveY(this.solveCurveX(t));Object.defineProperty(BezierEasing,"name",{writable:true});BezierEasing.name=r||`cubic-bezier(${[o,i,a,c]})`;return BezierEasing}
/**
   * @param {number} t - progress [0-1]
   * @return {number} - sampled X value
   */sampleCurveX(t){return((this.ax*t+this.bx)*t+this.cx)*t}
/**
   * @param {number} t - progress [0-1]
   * @return {number} - sampled Y value
   */sampleCurveY(t){return((this.ay*t+this.by)*t+this.cy)*t}
/**
   * @param {number} t - progress [0-1]
   * @return {number} - sampled curve derivative X value
   */sampleCurveDerivativeX(t){return(3*this.ax*t+2*this.bx)*t+this.cx}
/**
   * @param {number} x - progress [0-1]
   * @return {number} - solved curve X value
   */solveCurveX(t){const e=1e-6;if(t<=0)return 0;if(t>=1)return 1;let n=t;let s=0;let r=0;for(let o=0;o<8;o+=1){s=this.sampleCurveX(n)-t;if(Math.abs(s)<e)return n;r=this.sampleCurveDerivativeX(n);if(Math.abs(r)<e)break;n-=s/r}let o=0;let i=1;n=t;while(o<i){s=this.sampleCurveX(n);if(Math.abs(s-t)<e)return n;t>s?o=n:i=n;n=.5*(i-o)+o}return n}}var t="1.0.1";
/**
 * A global namespace for library version.
 * @type {string}
 */const e=t;
/** @typedef {import('../types/index')} */Object.assign(CubicBezier,{Version:e});const n={};const s=[];let r;r="undefined"!==typeof global?global:"undefined"!==typeof window?window.self:{};const o=r;const i={};const a={};let c;c="undefined"===typeof self&&"undefined"!==typeof process&&process.hrtime?()=>{const t=process.hrtime();return 1e3*t[0]+t[1]/1e6}:"undefined"!==typeof self&&void 0!==self.performance&&void 0!==self.performance.now?self.performance.now.bind(self.performance):"undefined"!==typeof Date&&Date.now?Date.now:()=>(new Date).getTime();const l=c;const u={};u.now=l;let h=0;
/**
 *
 * @param {number | Date} time
 */const Ticker=t=>{let e=0;while(e<s.length)s[e].update(t)?e+=1:s.splice(e,1);h=requestAnimationFrame(Ticker)};function stop(){setTimeout((()=>{if(!s.length&&h){cancelAnimationFrame(h);h=null;Object.keys(a).forEach((t=>{"function"===typeof a[t]?n[t]&&delete n[t]:Object.keys(a[t]).forEach((t=>{n[t]&&delete n[t]}))}));Object.keys(i).forEach((t=>{n[t]&&delete n[t]}))}}),64)}const p={Tick:h,Ticker:Ticker,Tweens:s,Time:u};Object.keys(p).forEach((t=>{n[t]||(n[t]="Time"===t?u.now:p[t])}));o._KUTE=n;const f={};const g={};const y={duration:700,delay:0,easing:"linear",repeat:0,repeatDelay:0,yoyo:false,resetStart:false,offset:0};const d={};const m={};const b={};const x={};const w={};const S={supportedProperties:f,defaultValues:g,defaultOptions:y,prepareProperty:d,prepareStart:m,crossCheck:b,onStart:a,onComplete:x,linkProperty:w};const C={};
/**
 * KUTE.add(Tween)
 *
 * @param {KUTE.Tween} tw a new tween to add
 */const add=t=>s.push(t)
/**
 * KUTE.remove(Tween)
 *
 * @param {KUTE.Tween} tw a new tween to add
 */;const remove=t=>{const e=s.indexOf(t);-1!==e&&s.splice(e,1)};const getAll=()=>s;const removeAll=()=>{s.length=0};function linkInterpolation(){Object.keys(w).forEach((t=>{const e=w[t];const s=f[t];Object.keys(e).forEach((t=>{"function"===typeof e[t]&&Object.keys(this.valuesEnd).some((t=>s&&s.includes(t)||"attr"===t&&Object.keys(this.valuesEnd[t]).some((t=>s&&s.includes(t)))))?n[t]||(n[t]=e[t]):Object.keys(this.valuesEnd).forEach((s=>{const r=this.valuesEnd[s];r instanceof Object&&Object.keys(r).forEach((s=>{"function"===typeof e[s]?n[s]||(n[s]=e[s]):Object.keys(e[t]).forEach((t=>{e[s]&&"function"===typeof e[s][t]&&(n[t]||(n[t]=e[s][t]))}))}))}))}))}))}const v={add:add,remove:remove,getAll:getAll,removeAll:removeAll,stop:stop,linkInterpolation:linkInterpolation};
/**
 * getInlineStyle
 * Returns the transform style for element from
 * cssText. Used by for the `.to()` static method.
 *
 * @param {Element} el target element
 * @returns {object}
 */function getInlineStyle(t){if(!t.style)return false;const e=t.style.cssText.replace(/\s/g,"").split(";");const n={};const s=["translate3d","translate","scale3d","skew"];e.forEach((t=>{if(/transform/i.test(t)){const e=t.split(":")[1].split(")");e.forEach((t=>{const e=t.split("(");const r=e[0];const o=e[1];/matrix/.test(r)||(n[r]=s.includes(r)?o.split(","):o)}))}}));return n}
/**
 * getStyleForProperty
 *
 * Returns the computed style property for element for .to() method.
 * Used by for the `.to()` static method.
 *
 * @param {Element} elem
 * @param {string} propertyName
 * @returns {string}
 */function getStyleForProperty(t,e){let n=g[e];const s=t.style;const r=getComputedStyle(t)||t.currentStyle;const o=s[e]&&!/auto|initial|none|unset/.test(s[e])?s[e]:r[e];"transform"!==e&&(e in r||e in s)&&(n=o);return n}
/**
 * prepareObject
 *
 * Returns all processed valuesStart / valuesEnd.
 *
 * @param {Element} obj the values start/end object
 * @param {string} fn toggles between the two
 */function prepareObject(t,e){const n="start"===e?this.valuesStart:this.valuesEnd;Object.keys(d).forEach((e=>{const s=d[e];const r=f[e];Object.keys(s).forEach((e=>{const o={};Object.keys(t).forEach((i=>{g[i]&&s[i]?n[i]=s[i].call(this,i,t[i]):!g[e]&&"transform"===e&&r.includes(i)?o[i]=t[i]:g[i]||"transform"!==i?!g[e]&&r&&r.includes(i)&&(n[i]=s[e].call(this,i,t[i])):n[i]=t[i]}));Object.keys(o).length&&(n[e]=s[e].call(this,e,o))}))}))}function getStartValues(){const t={};const e=getInlineStyle(this.element);Object.keys(this.valuesStart).forEach((e=>{Object.keys(m).forEach((n=>{const s=m[n];Object.keys(s).forEach((r=>{(r===e&&s[e]||f[n]&&f[n].includes(e))&&(t[e]=s[r].call(this,e,this.valuesStart[e]))}))}))}));Object.keys(e).forEach((n=>{n in this.valuesStart||(t[n]=e[n]||g[n])}));this.valuesStart={};prepareObject.call(this,t,"start")}var P={getInlineStyle:getInlineStyle,getStyleForProperty:getStyleForProperty,getStartValues:getStartValues,prepareObject:prepareObject};const T={};
/** @type {KUTE.TweenBase | KUTE.Tween | KUTE.TweenExtra} */T.tween=null;T.processEasing=null;const E={linear:new CubicBezier(0,0,1,1,"linear"),easingSinusoidalIn:new CubicBezier(.47,0,.745,.715,"easingSinusoidalIn"),easingSinusoidalOut:new CubicBezier(.39,.575,.565,1,"easingSinusoidalOut"),easingSinusoidalInOut:new CubicBezier(.445,.05,.55,.95,"easingSinusoidalInOut"),easingQuadraticIn:new CubicBezier(.55,.085,.68,.53,"easingQuadraticIn"),easingQuadraticOut:new CubicBezier(.25,.46,.45,.94,"easingQuadraticOut"),easingQuadraticInOut:new CubicBezier(.455,.03,.515,.955,"easingQuadraticInOut"),easingCubicIn:new CubicBezier(.55,.055,.675,.19,"easingCubicIn"),easingCubicOut:new CubicBezier(.215,.61,.355,1,"easingCubicOut"),easingCubicInOut:new CubicBezier(.645,.045,.355,1,"easingCubicInOut"),easingQuarticIn:new CubicBezier(.895,.03,.685,.22,"easingQuarticIn"),easingQuarticOut:new CubicBezier(.165,.84,.44,1,"easingQuarticOut"),easingQuarticInOut:new CubicBezier(.77,0,.175,1,"easingQuarticInOut"),easingQuinticIn:new CubicBezier(.755,.05,.855,.06,"easingQuinticIn"),easingQuinticOut:new CubicBezier(.23,1,.32,1,"easingQuinticOut"),easingQuinticInOut:new CubicBezier(.86,0,.07,1,"easingQuinticInOut"),easingExponentialIn:new CubicBezier(.95,.05,.795,.035,"easingExponentialIn"),easingExponentialOut:new CubicBezier(.19,1,.22,1,"easingExponentialOut"),easingExponentialInOut:new CubicBezier(1,0,0,1,"easingExponentialInOut"),easingCircularIn:new CubicBezier(.6,.04,.98,.335,"easingCircularIn"),easingCircularOut:new CubicBezier(.075,.82,.165,1,"easingCircularOut"),easingCircularInOut:new CubicBezier(.785,.135,.15,.86,"easingCircularInOut"),easingBackIn:new CubicBezier(.6,-.28,.735,.045,"easingBackIn"),easingBackOut:new CubicBezier(.175,.885,.32,1.275,"easingBackOut"),easingBackInOut:new CubicBezier(.68,-.55,.265,1.55,"easingBackInOut")};
/**
 * Returns a valid `easingFunction`.
 *
 * @param {KUTE.easingFunction | string} fn function name or constructor name
 * @returns {KUTE.easingFunction} a valid easingfunction
 */function processBezierEasing(t){if("function"===typeof t)return t;if("function"===typeof E[t])return E[t];if(/bezier/.test(t)){const e=t.replace(/bezier|\s|\(|\)/g,"").split(",");return new CubicBezier(1*e[0],1*e[1],1*e[2],1*e[3])}return E.linear}T.processEasing=processBezierEasing;
/**
 * selector
 *
 * A selector utility for KUTE.js.
 *
 * @param {KUTE.selectorType} el target(s) or string selector
 * @param {boolean | number} multi when true returns an array/collection of elements
 * @returns {Element | Element[] | null}
 */function selector(t,e){try{let n;let s;if(e){s=t instanceof Array&&t.every((t=>t instanceof Element));n=t instanceof HTMLCollection||t instanceof NodeList||s?t:document.querySelectorAll(t)}else n=t instanceof Element||t===window?t:document.querySelector(t);return n}catch(e){throw TypeError(`KUTE.js - Element(s) not found: ${t}.`)}}function queueStart(){Object.keys(a).forEach((t=>{"function"===typeof a[t]?a[t].call(this,t):Object.keys(a[t]).forEach((e=>{a[t][e].call(this,e)}))}));linkInterpolation.call(this)}class TweenBase{
/**
   * @param {Element} targetElement the target element
   * @param {KUTE.tweenProps} startObject the start values
   * @param {KUTE.tweenProps} endObject the end values
   * @param {KUTE.tweenOptions} opsObject the end values
   * @returns {TweenBase} the resulting Tween object
   */
constructor(t,e,s,r){this.element=t;
/** @type {boolean} */this.playing=false;
/** @type {number?} */this._startTime=null;
/** @type {boolean} */this._startFired=false;this.valuesEnd=s;this.valuesStart=e;const o=r||{};this._resetStart=o.resetStart||0;
/** @type {KUTE.easingOption} */this._easing="function"===typeof o.easing?o.easing:T.processEasing(o.easing);
/** @type {number} */this._duration=o.duration||y.duration;
/** @type {number} */this._delay=o.delay||y.delay;Object.keys(o).forEach((t=>{const e=`_${t}`;e in this||(this[e]=o[t])}));const i=this._easing.name;a[i]||(a[i]=function easingFn(t){n[t]||t!==this._easing.name||(n[t]=this._easing)});return this}
/**
   * Starts tweening
   * @param {number?} time the tween start time
   * @returns {TweenBase} this instance
   */start(t){add(this);this.playing=true;this._startTime="undefined"!==typeof t?t:n.Time();this._startTime+=this._delay;if(!this._startFired){this._onStart&&this._onStart.call(this);queueStart.call(this);this._startFired=true}h||Ticker();return this}
/**
   * Stops tweening
   * @returns {TweenBase} this instance
   */stop(){if(this.playing){remove(this);this.playing=false;this._onStop&&this._onStop.call(this);this.close()}return this}close(){Object.keys(x).forEach((t=>{Object.keys(x[t]).forEach((e=>{x[t][e].call(this,e)}))}));this._startFired=false;stop.call(this)}
/**
   * Schedule another tween instance to start once this one completes.
   * @param {KUTE.chainOption} args the tween animation start time
   * @returns {TweenBase} this instance
   */chain(t){this._chain=[];this._chain=t.length?t:this._chain.concat(t);return this}stopChainedTweens(){this._chain&&this._chain.length&&this._chain.forEach((t=>t.stop()))}
/**
   * Update the tween on each tick.
   * @param {number} time the tick time
   * @returns {boolean} this instance
   */update(t){const e=void 0!==t?t:n.Time();let s;if(e<this._startTime&&this.playing)return true;s=(e-this._startTime)/this._duration;s=0===this._duration||s>1?1:s;const r=this._easing(s);Object.keys(this.valuesEnd).forEach((t=>{n[t](this.element,this.valuesStart[t],this.valuesEnd[t],r)}));this._onUpdate&&this._onUpdate.call(this);if(1===s){this._onComplete&&this._onComplete.call(this);this.playing=false;this.close();void 0!==this._chain&&this._chain.length&&this._chain.map((t=>t.start()));return false}return true}}T.tween=TweenBase;class Tween extends TweenBase{
/**
   * @param {KUTE.tweenParams} args (*target*, *startValues*, *endValues*, *options*)
   * @returns {Tween} the resulting Tween object
   */
constructor(...t){super(...t);this.valuesStart={};this.valuesEnd={};const[e,n,s]=t.slice(1);prepareObject.call(this,n,"end");this._resetStart?this.valuesStart=e:prepareObject.call(this,e,"start");this._resetStart||Object.keys(b).forEach((t=>{Object.keys(b[t]).forEach((e=>{b[t][e].call(this,e)}))}));
/** @type {boolean} */this.paused=false;
/** @type {number?} */this._pauseTime=null;
/** @type {number?} */this._repeat=s.repeat||y.repeat;
/** @type {number?} */this._repeatDelay=s.repeatDelay||y.repeatDelay;
/** @type {number?} */this._repeatOption=this._repeat;
/** @type {KUTE.tweenProps} */this.valuesRepeat={};
/** @type {boolean} */this._yoyo=s.yoyo||y.yoyo;
/** @type {boolean} */this._reversed=false;return this}
/**
   * Starts tweening, extended method
   * @param {number?} time the tween start time
   * @returns {Tween} this instance
   */start(t){if(this._resetStart){this.valuesStart=this._resetStart;getStartValues.call(this);Object.keys(b).forEach((t=>{Object.keys(b[t]).forEach((e=>{b[t][e].call(this,e)}))}))}this.paused=false;this._yoyo&&Object.keys(this.valuesEnd).forEach((t=>{this.valuesRepeat[t]=this.valuesStart[t]}));super.start(t);return this}
/**
   * Stops tweening, extended method
   * @returns {Tween} this instance
   */stop(){super.stop();if(!this.paused&&this.playing){this.paused=false;this.stopChainedTweens()}return this}close(){super.close();this._repeatOption>0&&(this._repeat=this._repeatOption);if(this._yoyo&&true===this._reversed){this.reverse();this._reversed=false}return this}
/**
   * Resume tweening
   * @returns {Tween} this instance
   */resume(){if(this.paused&&this.playing){this.paused=false;void 0!==this._onResume&&this._onResume.call(this);queueStart.call(this);this._startTime+=n.Time()-this._pauseTime;add(this);h||Ticker()}return this}
/**
   * Pause tweening
   * @returns {Tween} this instance
   */pause(){if(!this.paused&&this.playing){remove(this);this.paused=true;this._pauseTime=n.Time();void 0!==this._onPause&&this._onPause.call(this)}return this}reverse(){Object.keys(this.valuesEnd).forEach((t=>{const e=this.valuesRepeat[t];this.valuesRepeat[t]=this.valuesEnd[t];this.valuesEnd[t]=e;this.valuesStart[t]=this.valuesRepeat[t]}))}
/**
   * Update the tween on each tick.
   * @param {number} time the tick time
   * @returns {boolean} this instance
   */update(t){const e=void 0!==t?t:n.Time();let s;if(e<this._startTime&&this.playing)return true;s=(e-this._startTime)/this._duration;s=0===this._duration||s>1?1:s;const r=this._easing(s);Object.keys(this.valuesEnd).forEach((t=>{n[t](this.element,this.valuesStart[t],this.valuesEnd[t],r)}));this._onUpdate&&this._onUpdate.call(this);if(1===s){if(this._repeat>0){Number.isFinite(this._repeat)&&(this._repeat-=1);this._startTime=e;Number.isFinite(this._repeat)&&this._yoyo&&!this._reversed&&(this._startTime+=this._repeatDelay);if(this._yoyo){this._reversed=!this._reversed;this.reverse()}return true}this._onComplete&&this._onComplete.call(this);this.playing=false;this.close();void 0!==this._chain&&this._chain.length&&this._chain.forEach((t=>t.start()));return false}return true}}T.tween=Tween;class TweenCollection{
/**
   *
   * @param {Element[] | HTMLCollection | NodeList} els target elements
   * @param {KUTE.tweenProps} vS the start values
   * @param {KUTE.tweenProps} vE the end values
   * @param {KUTE.tweenOptions} Options tween options
   * @returns {TweenCollection} the Tween object collection
   */
constructor(t,e,n,s){const r=T.tween;
/** @type {KUTE.twCollection[]} */this.tweens=[];const o=s||{};
/** @type {number?} */o.delay=o.delay||y.delay;const i=[];Array.from(t).forEach(((t,s)=>{i[s]=o||{};i[s].delay=s>0?o.delay+(o.offset||y.offset):o.delay;if(!(t instanceof Element))throw Error(`KUTE - ${t} is not instanceof Element`);this.tweens.push(new r(t,e,n,i[s]))}));
/** @type {number?} */this.length=this.tweens.length;return this}
/**
   * Starts tweening, all targets
   * @param {number?} time the tween start time
   * @returns {TweenCollection} this instance
   */start(t){const e=void 0===t?n.Time():t;this.tweens.map((t=>t.start(e)));return this}
/**
   * Stops tweening, all targets and their chains
   * @returns {TweenCollection} this instance
   */stop(){this.tweens.map((t=>t.stop()));return this}
/**
   * Pause tweening, all targets
   * @returns {TweenCollection} this instance
   */pause(){this.tweens.map((t=>t.pause()));return this}
/**
   * Resume tweening, all targets
   * @returns {TweenCollection} this instance
   */resume(){this.tweens.map((t=>t.resume()));return this}
/**
   * Schedule another tween or collection to start after
   * this one is complete.
   * @param {number?} args the tween start time
   * @returns {TweenCollection} this instance
   */chain(t){const e=this.tweens[this.length-1];if(t instanceof TweenCollection)e.chain(t.tweens);else{if(!(t instanceof T.tween))throw new TypeError("KUTE.js - invalid chain value");e.chain(t)}return this}
/**
   * Check if any tween instance is playing
   * @param {number?} time the tween start time
   * @returns {TweenCollection} this instance
   */playing(){return this.tweens.some((t=>t.playing))}removeTweens(){this.tweens=[]}
/**
   * Returns the maximum animation duration
   * @returns {number} this instance
   */getMaxDuration(){const t=[];this.tweens.forEach((e=>{t.push(e._duration+e._delay+e._repeat*e._repeatDelay)}));return Math.max(t)}}const{tween:M}=T;
/**
 * The `KUTE.to()` static method returns a new Tween object
 * for a single `HTMLElement` at its current state.
 *
 * @param {Element} element target element
 * @param {KUTE.tweenProps} endObject
 * @param {KUTE.tweenOptions} optionsObj tween options
 * @returns {KUTE.Tween} the resulting Tween object
 */function to(t,e,n){const s=n||{};s.resetStart=e;return new M(selector(t),e,e,s)}const{tween:k}=T;
/**
 * The `KUTE.fromTo()` static method returns a new Tween object
 * for a single `HTMLElement` at a given state.
 *
 * @param {Element} element target element
 * @param {KUTE.tweenProps} startObject
 * @param {KUTE.tweenProps} endObject
 * @param {KUTE.tweenOptions} optionsObj tween options
 * @returns {KUTE.Tween} the resulting Tween object
 */function fromTo(t,e,n,s){const r=s||{};return new k(selector(t),e,n,r)}
/**
 * The `KUTE.allTo()` static method creates a new Tween object
 * for multiple `HTMLElement`s, `HTMLCollection` or `NodeListat`
 * at their current state.
 *
 * @param {Element[] | HTMLCollection | NodeList} elements target elements
 * @param {KUTE.tweenProps} endObject
 * @param {KUTE.tweenProps} optionsObj progress
 * @returns {TweenCollection} the Tween object collection
 */function allTo(t,e,n){const s=n||{};s.resetStart=e;return new TweenCollection(selector(t,true),e,e,s)}
/**
 * The `KUTE.allFromTo()` static method creates a new Tween object
 * for multiple `HTMLElement`s, `HTMLCollection` or `NodeListat`
 * at a given state.
 *
 * @param {Element[] | HTMLCollection | NodeList} elements target elements
 * @param {KUTE.tweenProps} startObject
 * @param {KUTE.tweenProps} endObject
 * @param {KUTE.tweenOptions} optionsObj tween options
 * @returns {TweenCollection} the Tween object collection
 */function allFromTo(t,e,n,s){const r=s||{};return new TweenCollection(selector(t,true),e,n,r)}class Animation{
/**
   * @constructor
   * @param {KUTE.fullComponent} Component
   */
constructor(t){try{if(t.component in f)throw Error(`KUTE - ${t.component} already registered`);if(t.property in g)throw Error(`KUTE - ${t.property} already registered`)}catch(t){throw Error(t)}const e=this;const n=t.component;const s={prepareProperty:d,prepareStart:m,onStart:a,onComplete:x,crossCheck:b};const r=t.category;const o=t.property;const c=t.properties&&t.properties.length||t.subProperties&&t.subProperties.length;f[n]=t.properties||t.subProperties||t.property;if("defaultValue"in t){g[o]=t.defaultValue;e.supports=`${o} property`}else if(t.defaultValues){Object.keys(t.defaultValues).forEach((e=>{g[e]=t.defaultValues[e]}));e.supports=`${c||o} ${o||r} properties`}t.defaultOptions&&Object.assign(y,t.defaultOptions);t.functions&&Object.keys(s).forEach((e=>{if(e in t.functions)if("function"===typeof t.functions[e]){s[e][n]||(s[e][n]={});s[e][n][r||o]||(s[e][n][r||o]=t.functions[e])}else Object.keys(t.functions[e]).forEach((r=>{s[e][n]||(s[e][n]={});s[e][n][r]||(s[e][n][r]=t.functions[e][r])}))}));if(t.Interpolate){Object.keys(t.Interpolate).forEach((e=>{const n=t.Interpolate[e];"function"!==typeof n||i[e]?Object.keys(n).forEach((t=>{"function"!==typeof n[t]||i[e]||(i[e]=n[t])})):i[e]=n}));w[n]=t.Interpolate}t.Util&&Object.keys(t.Util).forEach((e=>{C[e]||(C[e]=t.Util[e])}));return e}}
/**
 * trueDimension
 *
 * Returns the string value of a specific CSS property converted into a nice
 * { v = value, u = unit } object.
 *
 * @param {string} dimValue the property string value
 * @param {boolean | number} isAngle sets the utility to investigate angles
 * @returns {{v: number, u: string}} the true {value, unit} tuple
 */const trueDimension=(t,e)=>{const n=parseInt(t,10)||0;const s=["px","%","deg","rad","em","rem","vh","vw"];let r;for(let e=0;e<s.length;e+=1)if("string"===typeof t&&t.includes(s[e])){r=s[e];break}void 0===r&&(r=e?"deg":"px");return{v:n,u:r}};
/**
 * Numbers Interpolation Function.
 *
 * @param {number} a start value
 * @param {number} b end value
 * @param {number} v progress
 * @returns {number} the interpolated number
 */function numbers(t,e,n){const s=+t;const r=e-t;return s+r*n}
/**
 * Sets the update function for the property.
 * @param {string} tweenProp the property name
 */function boxModelOnStart(t){t in this.valuesEnd&&!n[t]&&(n[t]=(e,n,s,r)=>{e.style[t]=(r>.99||r<.01?(10*numbers(n,s,r)>>0)/10:numbers(n,s,r)>>0)+"px"})}
/**
 * Returns the current property computed style.
 * @param {string} tweenProp the property name
 * @returns {string} computed style for property
 */function getBoxModel(t){return getStyleForProperty(this.element,t)||g[t]}
/**
 * Returns the property tween object.
 * @param {string} tweenProp the property name
 * @param {string} value the property name
 * @returns {number} the property tween object
 */function prepareBoxModel(t,e){const n=trueDimension(e);const s="height"===t?"offsetHeight":"offsetWidth";return"%"===n.u?n.v*this.element[s]/100:n.v}const A=["top","left","width","height"];const O={top:0,left:0,width:0,height:0};const _={};A.forEach((t=>{_[t]=boxModelOnStart}));const L={prepareStart:getBoxModel,prepareProperty:prepareBoxModel,onStart:_};const I={component:"essentialBoxModel",category:"boxModel",properties:A,defaultValues:O,Interpolate:{numbers:numbers},functions:L,Util:{trueDimension:trueDimension}};
/**
 * hexToRGB
 *
 * Converts a #HEX color format into RGB
 * and returns a color object {r,g,b}.
 *
 * @param {string} hex the degree angle
 * @returns {KUTE.colorObject | null} the radian angle
 */const hexToRGB=t=>{const e=/^#?([a-f\d])([a-f\d])([a-f\d])$/i;const n=t.replace(e,((t,e,n,s)=>e+e+n+n+s+s));const s=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(n);return s?{r:parseInt(s[1],16),g:parseInt(s[2],16),b:parseInt(s[3],16)}:null};
/**
 * trueColor
 *
 * Transform any color to rgba()/rgb() and return a nice RGB(a) object.
 *
 * @param {string} colorString the color input
 * @returns {KUTE.colorObject} the {r,g,b,a} color object
 */const trueColor=t=>{let e;if(/rgb|rgba/.test(t)){const n=t.replace(/\s|\)/,"").split("(")[1].split(",");const s=n[3]?n[3]:null;e=s?{r:parseInt(n[0],10),g:parseInt(n[1],10),b:parseInt(n[2],10),a:parseFloat(s)}:{r:parseInt(n[0],10),g:parseInt(n[1],10),b:parseInt(n[2],10)}}if(/^#/.test(t)){const n=hexToRGB(t);e={r:n.r,g:n.g,b:n.b}}/transparent|none|initial|inherit/.test(t)&&(e={r:0,g:0,b:0,a:0});if(!/^#|^rgb/.test(t)){const n=document.getElementsByTagName("head")[0];n.style.color=t;let s=getComputedStyle(n,null).color;s=/rgb/.test(s)?s.replace(/[^\d,]/g,"").split(","):[0,0,0];n.style.color="";e={r:parseInt(s[0],10),g:parseInt(s[1],10),b:parseInt(s[2],10)}}return e};
/**
 * Color Interpolation Function.
 *
 * @param {KUTE.colorObject} a start color
 * @param {KUTE.colorObject} b end color
 * @param {number} v progress
 * @returns {string} the resulting color
 */function colors(t,e,n){const s={};const r=")";const o=",";const i="rgb(";const a="rgba(";Object.keys(e).forEach((r=>{"a"!==r?s[r]=numbers(t[r],e[r],n)>>0||0:t[r]&&e[r]&&(s[r]=(100*numbers(t[r],e[r],n)>>0)/100)}));return s.a?a+s.r+o+s.g+o+s.b+o+s.a+r:i+s.r+o+s.g+o+s.b+r}
/**
 * Sets the property update function.
 * @param {string} tweenProp the property name
 */function onStartColors(t){this.valuesEnd[t]&&!n[t]&&(n[t]=(e,n,s,r)=>{e.style[t]=colors(n,s,r)})}const j=["color","backgroundColor","outlineColor","borderColor","borderTopColor","borderRightColor","borderBottomColor","borderLeftColor"];const $={};j.forEach((t=>{$[t]="#000"}));const B={};j.forEach((t=>{B[t]=onStartColors}));
/**
 * Returns the current property computed style.
 * @param {string} prop the property name
 * @returns {string} property computed style
 */function getColor(t){return getStyleForProperty(this.element,t)||g[t]}
/**
 * Returns the property tween object.
 * @param {string} _ the property name
 * @param {string} value the property value
 * @returns {KUTE.colorObject} the property tween object
 */function prepareColor(t,e){return trueColor(e)}const z={prepareStart:getColor,prepareProperty:prepareColor,onStart:B};const F={component:"colorProperties",category:"colors",properties:j,defaultValues:$,Interpolate:{numbers:numbers,colors:colors},functions:z,Util:{trueColor:trueColor}};const V={};const N={
/**
   * onStartAttr.attr
   *
   * Sets the sub-property update function.
   * @param {string} tweenProp the property name
   */
attr(t){!n[t]&&this.valuesEnd[t]&&(n[t]=(t,e,s,r)=>{Object.keys(s).forEach((o=>{n.attributes[o](t,o,e[o],s[o],r)}))})},
/**
   * onStartAttr.attributes
   *
   * Sets the update function for the property.
   * @param {string} tweenProp the property name
   */
attributes(t){!n[t]&&this.valuesEnd.attr&&(n[t]=V)}};const q="htmlAttributes";const D=["fill","stroke","stop-color"];
/**
 * Returns non-camelcase property name.
 * @param {string} a the camelcase property name
 * @returns {string} the non-camelcase property name
 */function replaceUppercase(t){return t.replace(/[A-Z]/g,"-$&").toLowerCase()}
/**
 * Returns the current attribute value.
 * @param {string} _ the property name
 * @param {string} value the property value
 * @returns {{[x:string]: string}} attribute value
 */function getAttr(t,e){const n={};Object.keys(e).forEach((t=>{const e=replaceUppercase(t).replace(/_+[a-z]+/,"");const s=this.element.getAttribute(e);n[e]=D.includes(e)?s||"rgba(0,0,0,0)":s||(/opacity/i.test(t)?1:0)}));return n}
/**
 * Returns the property tween object.
 * @param {string} tweenProp the property name
 * @param {string} attrObj the property value
 * @returns {number} the property tween object
 */function prepareAttr(t,e){const n={};Object.keys(e).forEach((s=>{const r=replaceUppercase(s);const o=/(%|[a-z]+)$/;const i=this.element.getAttribute(r.replace(/_+[a-z]+/,""));if(D.includes(r)){a[q][r]=e=>{this.valuesEnd[t]&&this.valuesEnd[t][e]&&!(e in V)&&(V[e]=(t,e,n,s,r)=>{t.setAttribute(e,colors(n,s,r))})};n[r]=trueColor(e[s])||g.htmlAttributes[s]}else if(null!==i&&o.test(i)){const o=trueDimension(i).u||trueDimension(e[s]).u;const c=/%/.test(o)?"_percent":`_${o}`;a[q][r+c]=e=>{this.valuesEnd[t]&&this.valuesEnd[t][e]&&!(e in V)&&(V[e]=(t,e,n,s,r)=>{const o=e.replace(c,"");t.setAttribute(o,(1e3*numbers(n.v,s.v,r)>>0)/1e3+s.u)})};n[r+c]=trueDimension(e[s])}else if(!o.test(e[s])||null===i||i&&!o.test(i)){a[q][r]=e=>{this.valuesEnd[t]&&this.valuesEnd[t][e]&&!(e in V)&&(V[e]=(t,e,n,s,r)=>{t.setAttribute(e,(1e3*numbers(n,s,r)>>0)/1e3)})};n[r]=parseFloat(e[s])}}));return n}const H={prepareStart:getAttr,prepareProperty:prepareAttr,onStart:N};const Q={component:q,property:"attr",subProperties:["fill","stroke","stop-color","fill-opacity","stroke-opacity"],defaultValue:{fill:"rgb(0,0,0)",stroke:"rgb(0,0,0)","stop-color":"rgb(0,0,0)",opacity:1,"stroke-opacity":1,"fill-opacity":1},Interpolate:{numbers:numbers,colors:colors},functions:H,Util:{replaceUppercase:replaceUppercase,trueColor:trueColor,trueDimension:trueDimension}};
/**
 * Sets the property update function.
 * @param {string} tweenProp the property name
 */function onStartOpacity(t){t in this.valuesEnd&&!n[t]&&(n[t]=(e,n,s,r)=>{e.style[t]=(1e3*numbers(n,s,r)>>0)/1e3})}
/**
 * Returns the current property computed style.
 * @param {string} tweenProp the property name
 * @returns {string} computed style for property
 */function getOpacity(t){return getStyleForProperty(this.element,t)}
/**
 * Returns the property tween object.
 * @param {string} _ the property name
 * @param {string} value the property value
 * @returns {number} the property tween object
 */function prepareOpacity(t,e){return parseFloat(e)}const U={prepareStart:getOpacity,prepareProperty:prepareOpacity,onStart:onStartOpacity};const R={component:"opacityProperty",property:"opacity",defaultValue:1,Interpolate:{numbers:numbers},functions:U};const X=String("abcdefghijklmnopqrstuvwxyz").split("");const Z=String("abcdefghijklmnopqrstuvwxyz").toUpperCase().split("");const G=String("~!@#$%^&*()_+{}[];'<>,./?=-").split("");const Y=String("0123456789").split("");const K=X.concat(Z,Y);const W=K.concat(G);const J={alpha:X,upper:Z,symbols:G,numeric:Y,alphanumeric:K,all:W};const tt={
/**
   * onStartWrite.text
   *
   * Sets the property update function.
   * @param {string} tweenProp the property name
   */
text(t){if(!n[t]&&this.valuesEnd[t]){const e=this._textChars;let s=J[y.textChars];e in J?s=J[e]:e&&e.length&&(s=e);n[t]=(t,e,n,r)=>{let o="";let i="";const a=""===n?" ":n;const c=e.substring(0);const l=n.substring(0);const u=s[Math.random()*s.length>>0];if(" "===e){i=l.substring(Math.min(r*l.length,l.length)>>0,0);t.innerHTML=r<1?i+u:a}else if(" "===n){o=c.substring(0,Math.min((1-r)*c.length,c.length)>>0);t.innerHTML=r<1?o+u:a}else{o=c.substring(c.length,Math.min(r*c.length,c.length)>>0);i=l.substring(0,Math.min(r*l.length,l.length)>>0);t.innerHTML=r<1?i+u+o:a}}}},
/**
   * onStartWrite.number
   *
   * Sets the property update function.
   * @param {string} tweenProp the property name
   */
number(t){t in this.valuesEnd&&!n[t]&&(n[t]=(t,e,n,s)=>{t.innerHTML=numbers(e,n,s)>>0})}};function wrapContentsSpan(t,e){let n;let s;if("string"===typeof t){s=document.createElement("SPAN");s.innerHTML=t;s.className=e;return s}if(!t.children.length||t.children.length&&t.children[0].className!==e){const s=t.innerHTML;n=document.createElement("SPAN");n.className=e;n.innerHTML=s;t.appendChild(n);t.innerHTML=n.outerHTML}else t.children.length&&t.children[0].className===e&&([n]=t.children);return n}function getTextPartsArray(t,e){let n=[];const s=t.children.length;if(s){const r=[];let o=t.innerHTML;let i;for(let n,a,c,l=0;l<s;l+=1){n=t.children[l];a=n.outerHTML;i=o.split(a);if(""!==i[0]){c=wrapContentsSpan(i[0],e);r.push(c);o=o.replace(i[0],"")}else if(""!==i[1]){c=wrapContentsSpan(i[1].split("<")[0],e);r.push(c);o=o.replace(i[0].split("<")[0],"")}n.classList.contains(e)||n.classList.add(e);r.push(n);o=o.replace(a,"")}if(""!==o){const t=wrapContentsSpan(o,e);r.push(t)}n=n.concat(r)}else n=n.concat([wrapContentsSpan(t,e)]);return n}function setSegments(t,e){const n=getTextPartsArray(t,"text-part");const s=getTextPartsArray(wrapContentsSpan(e),"text-part");t.innerHTML="";t.innerHTML+=n.map((t=>{t.className+=" oldText";return t.outerHTML})).join("");t.innerHTML+=s.map((t=>{t.className+=" newText";return t.outerHTML.replace(t.innerHTML,"")})).join("");return[n,s]}function createTextTweens(t,e,n){if(t.playing)return false;const s=n||{};s.duration=1e3;"auto"===n.duration?s.duration="auto":Number.isFinite(1*n.duration)&&(s.duration=1*n.duration);const r=T.tween;const o=setSegments(t,e);const i=o[0];const a=o[1];const c=[].slice.call(t.getElementsByClassName("oldText")).reverse();const l=[].slice.call(t.getElementsByClassName("newText"));let u=[];let h=0;u=u.concat(c.map(((t,e)=>{s.duration="auto"===s.duration?75*i[e].innerHTML.length:s.duration;s.delay=h;s.onComplete=null;h+=s.duration;return new r(t,{text:t.innerHTML},{text:""},s)})));u=u.concat(l.map(((n,o)=>{function onComplete(){t.innerHTML=e;t.playing=false}s.duration="auto"===s.duration?75*a[o].innerHTML.length:s.duration;s.delay=h;s.onComplete=o===a.length-1?onComplete:null;h+=s.duration;return new r(n,{text:""},{text:a[o].innerHTML},s)})));u.start=function startTweens(){if(!t.playing){u.forEach((t=>t.start()));t.playing=true}};return u}
/**
 * Returns the current element `innerHTML`.
 * @returns {string} computed style for property
 */function getWrite(){return this.element.innerHTML}
/**
 * Returns the property tween object.
 * @param {string} tweenProp the property name
 * @param {string} value the property value
 * @returns {number | string} the property tween object
 */function prepareText(t,e){return"number"===t?parseFloat(e):""===e?" ":e}const et={prepareStart:getWrite,prepareProperty:prepareText,onStart:tt};const nt={component:"textWriteProperties",category:"textWrite",properties:["text","number"],defaultValues:{text:" ",number:"0"},defaultOptions:{textChars:"alpha"},Interpolate:{numbers:numbers},functions:et,Util:{charSet:J,createTextTweens:createTextTweens}};
/**
 * Perspective Interpolation Function.
 *
 * @param {number} a start value
 * @param {number} b end value
 * @param {string} u unit
 * @param {number} v progress
 * @returns {string} the perspective function in string format
 */function perspective(t,e,n,s){return`perspective(${(1e3*(t+(e-t)*s)>>0)/1e3}${n})`}
/**
 * Translate 3D Interpolation Function.
 *
 * @param {number[]} a start [x,y,z] position
 * @param {number[]} b end [x,y,z] position
 * @param {string} u unit, usually `px` degrees
 * @param {number} v progress
 * @returns {string} the interpolated 3D translation string
 */function translate3d(t,e,n,s){const r=[];for(let o=0;o<3;o+=1)r[o]=(t[o]||e[o]?(1e3*(t[o]+(e[o]-t[o])*s)>>0)/1e3:0)+n;return`translate3d(${r.join(",")})`}
/**
 * 3D Rotation Interpolation Function.
 *
 * @param {number} a start [x,y,z] angles
 * @param {number} b end [x,y,z] angles
 * @param {string} u unit, usually `deg` degrees
 * @param {number} v progress
 * @returns {string} the interpolated 3D rotation string
 */function rotate3d(t,e,n,s){let r="";r+=t[0]||e[0]?`rotateX(${(1e3*(t[0]+(e[0]-t[0])*s)>>0)/1e3}${n})`:"";r+=t[1]||e[1]?`rotateY(${(1e3*(t[1]+(e[1]-t[1])*s)>>0)/1e3}${n})`:"";r+=t[2]||e[2]?`rotateZ(${(1e3*(t[2]+(e[2]-t[2])*s)>>0)/1e3}${n})`:"";return r}
/**
 * Translate 2D Interpolation Function.
 *
 * @param {number[]} a start [x,y] position
 * @param {number[]} b end [x,y] position
 * @param {string} u unit, usually `px` degrees
 * @param {number} v progress
 * @returns {string} the interpolated 2D translation string
 */function translate(t,e,n,s){const r=[];r[0]=(t[0]===e[0]?e[0]:(1e3*(t[0]+(e[0]-t[0])*s)>>0)/1e3)+n;r[1]=t[1]||e[1]?(t[1]===e[1]?e[1]:(1e3*(t[1]+(e[1]-t[1])*s)>>0)/1e3)+n:"0";return`translate(${r.join(",")})`}
/**
 * 2D Rotation Interpolation Function.
 *
 * @param {number} a start angle
 * @param {number} b end angle
 * @param {string} u unit, usually `deg` degrees
 * @param {number} v progress
 * @returns {string} the interpolated rotation
 */function rotate(t,e,n,s){return`rotate(${(1e3*(t+(e-t)*s)>>0)/1e3}${n})`}
/**
 * Scale Interpolation Function.
 *
 * @param {number} a start scale
 * @param {number} b end scale
 * @param {number} v progress
 * @returns {string} the interpolated scale
 */function scale(t,e,n){return`scale(${(1e3*(t+(e-t)*n)>>0)/1e3})`}
/**
 * Skew Interpolation Function.
 *
 * @param {number} a start {x,y} angles
 * @param {number} b end {x,y} angles
 * @param {string} u unit, usually `deg` degrees
 * @param {number} v progress
 * @returns {string} the interpolated string value of skew(s)
 */function skew(t,e,n,s){const r=[];r[0]=(t[0]===e[0]?e[0]:(1e3*(t[0]+(e[0]-t[0])*s)>>0)/1e3)+n;r[1]=t[1]||e[1]?(t[1]===e[1]?e[1]:(1e3*(t[1]+(e[1]-t[1])*s)>>0)/1e3)+n:"0";return`skew(${r.join(",")})`}
/**
 * Sets the property update function.
 * * same to svgTransform, htmlAttributes
 * @param {string} tweenProp the property name
 */function onStartTransform(t){!n[t]&&this.valuesEnd[t]&&(n[t]=(e,n,s,r)=>{e.style[t]=(n.perspective||s.perspective?perspective(n.perspective,s.perspective,"px",r):"")+(n.translate3d?translate3d(n.translate3d,s.translate3d,"px",r):"")+(n.rotate3d?rotate3d(n.rotate3d,s.rotate3d,"deg",r):"")+(n.skew?skew(n.skew,s.skew,"deg",r):"")+(n.scale||s.scale?scale(n.scale,s.scale,r):"")})}
/**
 * Returns the current property inline style.
 * @param {string} tweenProp the property name
 * @returns {string} inline style for property
 */function getTransform(t){const e=getInlineStyle(this.element);return e[t]?e[t]:g[t]}
/**
 * Returns the property tween object.
 * @param {string} _ the property name
 * @param {Object<string, string | number | (string | number)[]>} obj the property value
 * @returns {KUTE.transformFObject} the property tween object
 */function prepareTransform(t,e){const n=["X","Y","Z"];const s={};const r=[];const o=[];const i=[];const a=["translate3d","translate","rotate3d","skew"];Object.keys(e).forEach((t=>{const c="object"===typeof e[t]&&e[t].length?e[t].map((t=>parseInt(t,10))):parseInt(e[t],10);if(a.includes(t)){const e="translate"===t||"rotate"===t?`${t}3d`:t;s[e]="skew"===t?c.length?[c[0]||0,c[1]||0]:[c||0,0]:"translate"===t?c.length?[c[0]||0,c[1]||0,c[2]||0]:[c||0,0,0]:[c[0]||0,c[1]||0,c[2]||0]}else if(/[XYZ]/.test(t)){const a=t.replace(/[XYZ]/,"");const c="skew"===a?a:`${a}3d`;const l="skew"===a?2:3;let u=[];"translate"===a?u=r:"rotate"===a?u=o:"skew"===a&&(u=i);for(let t=0;t<l;t+=1){const s=n[t];u[t]=`${a}${s}`in e?parseInt(e[`${a}${s}`],10):0}s[c]=u}else"rotate"===t?s.rotate3d=[0,0,c]:s[t]="scale"===t?parseFloat(e[t]):c}));return s}
/**
 * Prepare tween object in advance for `to()` method.
 * @param {string} tweenProp the property name
 */function crossCheckTransform(t){this.valuesEnd[t]&&this.valuesEnd[t]&&this.valuesEnd[t].perspective&&!this.valuesStart[t].perspective&&(this.valuesStart[t].perspective=this.valuesEnd[t].perspective)}const st={prepareStart:getTransform,prepareProperty:prepareTransform,onStart:onStartTransform,crossCheck:crossCheckTransform};const rt=["perspective","translate3d","translateX","translateY","translateZ","translate","rotate3d","rotateX","rotateY","rotateZ","rotate","skewX","skewY","skew","scale"];const ot={perspective:400,translate3d:[0,0,0],translateX:0,translateY:0,translateZ:0,translate:[0,0],rotate3d:[0,0,0],rotateX:0,rotateY:0,rotateZ:0,rotate:0,skewX:0,skewY:0,skew:[0,0],scale:1};const it={component:"transformFunctions",property:"transform",subProperties:rt,defaultValues:ot,functions:st,Interpolate:{perspective:perspective,translate3d:translate3d,rotate3d:rotate3d,translate:translate,rotate:rotate,scale:scale,skew:skew}};
/**
 * Sets the property update function.
 * @param {string} tweenProp the property name
 */function onStartDraw(t){t in this.valuesEnd&&!n[t]&&(n[t]=(t,e,n,s)=>{const r=(100*e.l>>0)/100;const o=(100*numbers(e.s,n.s,s)>>0)/100;const i=(100*numbers(e.e,n.e,s)>>0)/100;const a=0-o;const c=i+a;t.style.strokeDashoffset=`${a}px`;t.style.strokeDasharray=`${(100*(c<1?0:c)>>0)/100}px, ${r}px`})}
/**
 * Convert a `<path>` length percent value to absolute.
 * @param {string} v raw value
 * @param {number} l length value
 * @returns {number} the absolute value
 */function percent(t,e){return parseFloat(t)/100*e}
/**
 * Returns the `<rect>` length.
 * It doesn't compute `rx` and / or `ry` of the element.
 * @see http://stackoverflow.com/a/30376660
 * @param {SVGRectElement} el target element
 * @returns {number} the `<rect>` length
 */function getRectLength(t){const e=t.getAttribute("width");const n=t.getAttribute("height");return 2*e+2*n}
/**
 * Returns the `<polyline>` / `<polygon>` length.
 * @param {SVGPolylineElement | SVGPolygonElement} el target element
 * @returns {number} the element length
 */function getPolyLength(t){const e=t.getAttribute("points").split(" ");let n=0;if(e.length>1){const coord=t=>{const e=t.split(",");return 2!==e.length||Number.isNaN(1*e[0])||Number.isNaN(1*e[1])?0:[parseFloat(e[0]),parseFloat(e[1])]};const dist=(t,e)=>void 0!==t&&void 0!==e?Math.sqrt((e[0]-t[0])**2+(e[1]-t[1])**2):0;if(e.length>2)for(let t=0;t<e.length-1;t+=1)n+=dist(coord(e[t]),coord(e[t+1]));n+="polygon"===t.tagName?dist(coord(e[0]),coord(e[e.length-1])):0}return n}
/**
 * Returns the `<line>` length.
 * @param {SVGLineElement} el target element
 * @returns {number} the element length
 */function getLineLength(t){const e=t.getAttribute("x1");const n=t.getAttribute("x2");const s=t.getAttribute("y1");const r=t.getAttribute("y2");return Math.sqrt((n-e)**2+(r-s)**2)}
/**
 * Returns the `<circle>` length.
 * @param {SVGCircleElement} el target element
 * @returns {number} the element length
 */function getCircleLength(t){const e=t.getAttribute("r");return 2*Math.PI*e}
/**
 * Returns the `<ellipse>` length.
 * @param {SVGEllipseElement} el target element
 * @returns {number} the element length
 */function getEllipseLength(t){const e=t.getAttribute("rx");const n=t.getAttribute("ry");const s=2*e;const r=2*n;return Math.sqrt(.5*(s*s+r*r))*(2*Math.PI)/2}
/**
 * Returns the shape length.
 * @param {SVGPathCommander.shapeTypes} el target element
 * @returns {number} the element length
 */function getTotalLength$1(t){return"rect"===t.tagName?getRectLength(t):"circle"===t.tagName?getCircleLength(t):"ellipse"===t.tagName?getEllipseLength(t):["polygon","polyline"].includes(t.tagName)?getPolyLength(t):"line"===t.tagName?getLineLength(t):0}
/**
 * Returns the property tween object.
 * @param {SVGPathCommander.shapeTypes} element the target element
 * @param {string | KUTE.drawObject} value the property value
 * @returns {KUTE.drawObject} the property tween object
 */function getDraw(t,e){const n=/path|glyph/.test(t.tagName)?t.getTotalLength():getTotalLength$1(t);let s;let r;let o;let i;if(e instanceof Object&&Object.keys(e).every((t=>["s","e","l"].includes(t))))return e;if("string"===typeof e){const t=e.split(/,|\s/);s=/%/.test(t[0])?percent(t[0].trim(),n):parseFloat(t[0]);r=/%/.test(t[1])?percent(t[1].trim(),n):parseFloat(t[1])}else if("undefined"===typeof e){i=parseFloat(getStyleForProperty(t,"stroke-dashoffset"));o=getStyleForProperty(t,"stroke-dasharray").split(",");s=0-i;r=parseFloat(o[0])+s||n}return{s:s,e:r,l:n}}
/**
 * Reset CSS properties associated with the `draw` property.
 * @param {SVGPathCommander.shapeTypes} element target
 */function resetDraw(t){t.style.strokeDashoffset="";t.style.strokeDasharray=""}
/**
 * Returns the property tween object.
 * @returns {KUTE.drawObject} the property tween object
 */function getDrawValue(){return getDraw(this.element)}
/**
 * Returns the property tween object.
 * @param {string} _ the property name
 * @param {string | KUTE.drawObject} value the property value
 * @returns {KUTE.drawObject} the property tween object
 */function prepareDraw(t,e){return getDraw(this.element,e)}const at={prepareStart:getDrawValue,prepareProperty:prepareDraw,onStart:onStartDraw};const ct={component:"svgDraw",property:"draw",defaultValue:"0% 0%",Interpolate:{numbers:numbers},functions:at,Util:{getRectLength:getRectLength,getPolyLength:getPolyLength,getLineLength:getLineLength,getCircleLength:getCircleLength,getEllipseLength:getEllipseLength,getTotalLength:getTotalLength$1,resetDraw:resetDraw,getDraw:getDraw,percent:percent}};
/**
 * Splits an extended A (arc-to) segment into two cubic-bezier segments.
 *
 * @param {SVGPath.pathArray} path the `pathArray` this segment belongs to
 * @param {string[]} allPathCommands all previous path commands
 * @param {number} i the segment index
 */function fixArc(t,e,n){if(t[n].length>7){t[n].shift();const s=t[n];let r=n;while(s.length){e[n]="A";t.splice(r+=1,0,["C",...s.splice(0,6)])}t.splice(n,1)}}
/**
 * Segment params length
 * @type {Record<string, number>}
 */const lt={a:7,c:6,h:1,l:2,m:2,r:4,q:4,s:4,t:2,v:1,z:0};
/**
 * Iterates an array to check if it's an actual `pathArray`.
 *
 * @param {string | SVGPath.pathArray} path the `pathArray` to be checked
 * @returns {boolean} iteration result
 */function isPathArray(t){return Array.isArray(t)&&t.every((t=>{const e=t[0].toLowerCase();return lt[e]===t.length-1&&"achlmqstvz".includes(e)}))}
/**
 * Iterates an array to check if it's a `pathArray`
 * with all absolute values.
 *
 * @param {string | SVGPath.pathArray} path the `pathArray` to be checked
 * @returns {boolean} iteration result
 */function isAbsoluteArray(t){return isPathArray(t)&&t.every((([t])=>t===t.toUpperCase()))}
/**
 * Iterates an array to check if it's a `pathArray`
 * with all segments are in non-shorthand notation
 * with absolute values.
 *
 * @param {string | SVGPath.pathArray} path the `pathArray` to be checked
 * @returns {boolean} iteration result
 */function isNormalizedArray(t){return isAbsoluteArray(t)&&t.every((([t])=>"ACLMQZ".includes(t)))}
/**
 * Iterates an array to check if it's a `pathArray`
 * with all C (cubic bezier) segments.
 *
 * @param {string | SVGPath.pathArray} path the `Array` to be checked
 * @returns {boolean} iteration result
 */function isCurveArray(t){return isNormalizedArray(t)&&t.every((([t])=>"MC".includes(t)))}
/**
 * Returns a clone of an existing `pathArray`.
 *
 * @param {SVGPath.pathArray | SVGPath.pathSegment} path the source `pathArray`
 * @returns {any} the cloned `pathArray`
 */function clonePath(t){return t.map((t=>Array.isArray(t)?[...t]:t))}
/**
 * Breaks the parsing of a pathString once a segment is finalized.
 *
 * @param {SVGPath.PathParser} path the `PathParser` instance
 */function finalizeSegment(t){let e=t.pathValue[t.segmentStart];let n=e.toLowerCase();const{data:s}=t;while(s.length>=lt[n]){if("m"===n&&s.length>2){t.segments.push([e,...s.splice(0,2)]);n="l";e="m"===e?"l":"L"}else t.segments.push([e,...s.splice(0,lt[n])]);if(!lt[n])break}}const ut="SVGPathCommander error";
/**
 * Validates an A (arc-to) specific path command value.
 * Usually a `large-arc-flag` or `sweep-flag`.
 *
 * @param {SVGPath.PathParser} path the `PathParser` instance
 */function scanFlag(t){const{index:e,pathValue:n}=t;const s=n.charCodeAt(e);if(48!==s)if(49!==s)t.err=`${ut}: invalid Arc flag "${n[e]}", expecting 0 or 1 at index ${e}`;else{t.param=1;t.index+=1}else{t.param=0;t.index+=1}}
/**
 * Checks if a character is a digit.
 *
 * @param {number} code the character to check
 * @returns {boolean} check result
 */function isDigit(t){return t>=48&&t<=57}const ht="Invalid path value";
/**
 * Validates every character of the path string,
 * every path command, negative numbers or floating point numbers.
 *
 * @param {SVGPath.PathParser} path the `PathParser` instance
 */function scanParam(t){const{max:e,pathValue:n,index:s}=t;let r=s;let o=false;let i=false;let a=false;let c=false;let l;if(r>=e)t.err=`${ut}: ${ht} at index ${r}, "pathValue" is missing param`;else{l=n.charCodeAt(r);if(43===l||45===l){r+=1;l=n.charCodeAt(r)}if(isDigit(l)||46===l){if(46!==l){o=48===l;r+=1;l=n.charCodeAt(r);if(o&&r<e&&l&&isDigit(l)){t.err=`${ut}: ${ht} at index ${s}, "${n[s]}" illegal number`;return}while(r<e&&isDigit(n.charCodeAt(r))){r+=1;i=true}l=n.charCodeAt(r)}if(46===l){c=true;r+=1;while(isDigit(n.charCodeAt(r))){r+=1;a=true}l=n.charCodeAt(r)}if(101===l||69===l){if(c&&!i&&!a){t.err=`${ut}: ${ht} at index ${r}, "${n[r]}" invalid float exponent`;return}r+=1;l=n.charCodeAt(r);43!==l&&45!==l||(r+=1);if(!(r<e&&isDigit(n.charCodeAt(r)))){t.err=`${ut}: ${ht} at index ${r}, "${n[r]}" invalid integer exponent`;return}while(r<e&&isDigit(n.charCodeAt(r)))r+=1}t.index=r;t.param=+t.pathValue.slice(s,r)}else t.err=`${ut}: ${ht} at index ${r}, "${n[r]}" is not a number`}}
/**
 * Checks if the character is a space.
 *
 * @param {number} ch the character to check
 * @returns {boolean} check result
 */function isSpace(t){const e=[5760,6158,8192,8193,8194,8195,8196,8197,8198,8199,8200,8201,8202,8239,8287,12288,65279];return 10===t||13===t||8232===t||8233===t||32===t||9===t||11===t||12===t||160===t||t>=5760&&e.includes(t)}
/**
 * Points the parser to the next character in the
 * path string every time it encounters any kind of
 * space character.
 *
 * @param {SVGPath.PathParser} path the `PathParser` instance
 */function skipSpaces(t){const{pathValue:e,max:n}=t;while(t.index<n&&isSpace(e.charCodeAt(t.index)))t.index+=1}
/**
 * Checks if the character is a path command.
 *
 * @param {any} code the character to check
 * @returns {boolean} check result
 */function isPathCommand(t){switch(32|t){case 109:case 122:case 108:case 104:case 118:case 99:case 115:case 113:case 116:case 97:return true;default:return false}}
/**
 * Checks if the character is or belongs to a number.
 * [0-9]|+|-|.
 *
 * @param {number} code the character to check
 * @returns {boolean} check result
 */function isDigitStart(t){return t>=48&&t<=57||43===t||45===t||46===t}
/**
 * Checks if the character is an A (arc-to) path command.
 *
 * @param {number} code the character to check
 * @returns {boolean} check result
 */function isArcCommand(t){return 97===(32|t)}
/**
 * Scans every character in the path string to determine
 * where a segment starts and where it ends.
 *
 * @param {SVGPath.PathParser} path the `PathParser` instance
 */function scanSegment(t){const{max:e,pathValue:n,index:s}=t;const r=n.charCodeAt(s);const o=lt[n[s].toLowerCase()];t.segmentStart=s;if(isPathCommand(r)){t.index+=1;skipSpaces(t);t.data=[];if(o){for(;;){for(let s=o;s>0;s-=1){!isArcCommand(r)||3!==s&&4!==s?scanParam(t):scanFlag(t);if(t.err.length)return;t.data.push(t.param);skipSpaces(t);if(t.index<e&&44===n.charCodeAt(t.index)){t.index+=1;skipSpaces(t)}}if(t.index>=t.max)break;if(!isDigitStart(n.charCodeAt(t.index)))break}finalizeSegment(t)}else finalizeSegment(t)}else t.err=`${ut}: ${ht} "${n[s]}" is not a path command`}
/**
 * The `PathParser` is used by the `parsePathString` static method
 * to generate a `pathArray`.
 *
 * @param {string} pathString
 */function PathParser(t){
/** @type {SVGPath.pathArray} */
this.segments=[];
/** @type {string} */this.pathValue=t;
/** @type {number} */this.max=t.length;
/** @type {number} */this.index=0;
/** @type {number} */this.param=0;
/** @type {number} */this.segmentStart=0;
/** @type {any} */this.data=[];
/** @type {string} */this.err=""}
/**
 * Parses a path string value and returns an array
 * of segments we like to call `pathArray`.
 *
 * @param {SVGPath.pathArray | string} pathInput the string to be parsed
 * @returns {SVGPath.pathArray | string} the resulted `pathArray` or error string
 */function parsePathString(t){if(isPathArray(t))return clonePath(t);const e=new PathParser(t);skipSpaces(e);while(e.index<e.max&&!e.err.length)scanSegment(e);return e.err?e.err:e.segments}
/**
 * Parses a path string value or object and returns an array
 * of segments, all converted to absolute values.
 *
 * @param {string | SVGPath.pathArray} pathInput the path string | object
 * @returns {SVGPath.absoluteArray} the resulted `pathArray` with absolute values
 */function pathToAbsolute(t){if(isAbsoluteArray(t))return clonePath(t);const e=parsePathString(t);let n=0;let s=0;let r=0;let o=0;return e.map((t=>{const e=t.slice(1).map(Number);const[i]=t;
/** @type {SVGPath.absoluteCommand} */const a=i.toUpperCase();if("M"===i){[n,s]=e;r=n;o=s;return["M",n,s]}
/** @type {SVGPath.absoluteSegment} */let c=[];if(i!==a)switch(a){case"A":c=[a,e[0],e[1],e[2],e[3],e[4],e[5]+n,e[6]+s];break;case"V":c=[a,e[0]+s];break;case"H":c=[a,e[0]+n];break;default:{const t=e.map(((t,e)=>t+(e%2?s:n)));c=[a,...t]}}else c=[a,...e];const l=c.length;switch(a){case"Z":n=r;s=o;break;case"H":[,n]=c;break;case"V":[,s]=c;break;default:n=c[l-2];s=c[l-1];if("M"===a){r=n;o=s}}return c}))}
/**
 * Normalizes a single segment of a `pathArray` object.
 *
 * @param {SVGPath.pathSegment} segment the segment object
 * @param {any} params the coordinates of the previous segment
 * @returns {SVGPath.normalSegment} the normalized segment
 */function normalizeSegment(t,e){const[n]=t;const{x1:s,y1:r,x2:o,y2:i}=e;const a=t.slice(1).map(Number);let c=t;if(!"TQ".includes(n)){e.qx=null;e.qy=null}if("H"===n)c=["L",t[1],r];else if("V"===n)c=["L",s,t[1]];else if("S"===n){const t=2*s-o;const n=2*r-i;e.x1=t;e.y1=n;c=["C",t,n,...a]}else if("T"===n){const t=2*s-e.qx;const n=2*r-e.qy;e.qx=t;e.qy=n;c=["Q",t,n,...a]}else if("Q"===n){const[t,n]=a;e.qx=t;e.qy=n}return c}
/**
 * @type {SVGPath.parserParams}
 */const pt={x1:0,y1:0,x2:0,y2:0,x:0,y:0,qx:null,qy:null};
/**
 * Normalizes a `path` object for further processing:
 * * convert segments to absolute values
 * * convert shorthand path commands to their non-shorthand notation
 *
 * @param {string | SVGPath.pathArray} pathInput the string to be parsed or 'pathArray'
 * @returns {SVGPath.normalArray} the normalized `pathArray`
 */function normalizePath(t){if(isNormalizedArray(t))return clonePath(t);
/** @type {SVGPath.normalArray} */const e=pathToAbsolute(t);const n={...pt};const s=e.length;for(let t=0;t<s;t+=1){e[t];e[t]=normalizeSegment(e[t],n);const s=e[t];const r=s.length;n.x1=+s[r-2];n.y1=+s[r-1];n.x2=+s[r-4]||n.x1;n.y2=+s[r-3]||n.y1}return e}
/**
 * Returns an {x,y} vector rotated by a given
 * angle in radian.
 *
 * @param {number} x the initial vector x
 * @param {number} y the initial vector y
 * @param {number} rad the radian vector angle
 * @returns {{x: number, y: number}} the rotated vector
 */function rotateVector(t,e,n){const s=t*Math.cos(n)-e*Math.sin(n);const r=t*Math.sin(n)+e*Math.cos(n);return{x:s,y:r}}
/**
 * Converts A (arc-to) segments to C (cubic-bezier-to).
 *
 * For more information of where this math came from visit:
 * http://www.w3.org/TR/SVG11/implnote.html#ArcImplementationNotes
 *
 * @param {number} X1 the starting x position
 * @param {number} Y1 the starting y position
 * @param {number} RX x-radius of the arc
 * @param {number} RY y-radius of the arc
 * @param {number} angle x-axis-rotation of the arc
 * @param {number} LAF large-arc-flag of the arc
 * @param {number} SF sweep-flag of the arc
 * @param {number} X2 the ending x position
 * @param {number} Y2 the ending y position
 * @param {number[]=} recursive the parameters needed to split arc into 2 segments
 * @return {number[]} the resulting cubic-bezier segment(s)
 */function arcToCubic(t,e,n,s,r,o,i,a,c,l){let u=t;let h=e;let p=n;let f=s;let g=a;let y=c;const d=120*Math.PI/180;const m=Math.PI/180*(+r||0);
/** @type {number[]} */let b=[];let x;let w;let S;let C;let v;if(l)[w,S,C,v]=l;else{x=rotateVector(u,h,-m);u=x.x;h=x.y;x=rotateVector(g,y,-m);g=x.x;y=x.y;const t=(u-g)/2;const e=(h-y)/2;let n=t*t/(p*p)+e*e/(f*f);if(n>1){n=Math.sqrt(n);p*=n;f*=n}const s=p*p;const r=f*f;const a=(o===i?-1:1)*Math.sqrt(Math.abs((s*r-s*e*e-r*t*t)/(s*e*e+r*t*t)));C=a*p*e/f+(u+g)/2;v=a*-f*t/p+(h+y)/2;w=Math.asin(((h-v)/f*10**9>>0)/10**9);S=Math.asin(((y-v)/f*10**9>>0)/10**9);w=u<C?Math.PI-w:w;S=g<C?Math.PI-S:S;w<0&&(w=2*Math.PI+w);S<0&&(S=2*Math.PI+S);i&&w>S&&(w-=2*Math.PI);!i&&S>w&&(S-=2*Math.PI)}let P=S-w;if(Math.abs(P)>d){const t=S;const e=g;const n=y;S=w+d*(i&&S>w?1:-1);g=C+p*Math.cos(S);y=v+f*Math.sin(S);b=arcToCubic(g,y,p,f,r,0,i,e,n,[S,t,C,v])}P=S-w;const T=Math.cos(w);const E=Math.sin(w);const M=Math.cos(S);const k=Math.sin(S);const A=Math.tan(P/4);const O=4/3*p*A;const _=4/3*f*A;const L=[u,h];const I=[u+O*E,h-_*T];const j=[g+O*k,y-_*M];const $=[g,y];I[0]=2*L[0]-I[0];I[1]=2*L[1]-I[1];if(l)return[...I,...j,...$,...b];b=[...I,...j,...$,...b];const B=[];for(let t=0,e=b.length;t<e;t+=1)B[t]=t%2?rotateVector(b[t-1],b[t],m).y:rotateVector(b[t],b[t+1],m).x;return B}
/**
 * Converts a Q (quadratic-bezier) segment to C (cubic-bezier).
 *
 * @param {number} x1 curve start x
 * @param {number} y1 curve start y
 * @param {number} qx control point x
 * @param {number} qy control point y
 * @param {number} x2 curve end x
 * @param {number} y2 curve end y
 * @returns {number[]} the cubic-bezier segment
 */function quadToCubic(t,e,n,s,r,o){const i=1/3;const a=2/3;return[i*t+a*n,i*e+a*s,i*r+a*n,i*o+a*s,r,o]}
/**
 * Returns the coordinates of a specified distance
 * ratio between two points.
 *
 * @param {[number, number]} a the first point coordinates
 * @param {[number, number]} b the second point coordinates
 * @param {number} t the ratio
 * @returns {[number, number]} the midpoint coordinates
 */function midPoint(t,e,n){const[s,r]=t;const[o,i]=e;return[s+(o-s)*n,r+(i-r)*n]}
/**
 * Returns the square root of the distance
 * between two given points.
 *
 * @param {[number, number]} a the first point coordinates
 * @param {[number, number]} b the second point coordinates
 * @returns {number} the distance value
 */function distanceSquareRoot(t,e){return Math.sqrt((t[0]-e[0])*(t[0]-e[0])+(t[1]-e[1])*(t[1]-e[1]))}
/**
 * Returns a {x,y} point at a given length, the total length and
 * the minimum and maximum {x,y} coordinates of a line (L,V,H,Z) segment.
 *
 * @param {number} x1 the starting point X
 * @param {number} y1 the starting point Y
 * @param {number} x2 the ending point X
 * @param {number} y2 the ending point Y
 * @param {number=} distance the distance to point
 * @returns {SVGPath.lengthFactory} the segment length, point, min & max
 */function segmentLineFactory(t,e,n,s,r){const o=distanceSquareRoot([t,e],[n,s]);let i={x:0,y:0};if("number"===typeof r)if(r<=0)i={x:t,y:e};else if(r>=o)i={x:n,y:s};else{const[a,c]=midPoint([t,e],[n,s],r/o);i={x:a,y:c}}return{length:o,point:i,min:{x:Math.min(t,n),y:Math.min(e,s)},max:{x:Math.max(t,n),y:Math.max(e,s)}}}
/**
 * Converts an L (line-to) segment to C (cubic-bezier).
 *
 * @param {number} x1 line start x
 * @param {number} y1 line start y
 * @param {number} x2 line end x
 * @param {number} y2 line end y
 * @returns {number[]} the cubic-bezier segment
 */function lineToCubic(t,e,n,s){const r=.5;
/** @type {[number, number]} */const o=[t,e];
/** @type {[number, number]} */const i=[n,s];const a=midPoint(o,i,r);const c=midPoint(i,a,r);const l=midPoint(a,c,r);const u=midPoint(c,l,r);const h=midPoint(l,u,r);const p=[...o,...a,...l,...h,r];const f=segmentLineFactory(...p).point;const g=[...h,...u,...c,...i,0];const y=segmentLineFactory(...g).point;return[f.x,f.y,y.x,y.y,n,s]}
/**
 * Converts any segment to C (cubic-bezier).
 *
 * @param {SVGPath.pathSegment} segment the source segment
 * @param {SVGPath.parserParams} params the source segment parameters
 * @returns {SVGPath.cubicSegment | SVGPath.MSegment} the cubic-bezier segment
 */function segmentToCubic(t,e){const[n]=t;const s=t.slice(1).map(Number);const[r,o]=s;let i;const{x1:a,y1:c,x:l,y:u}=e;if(!"TQ".includes(n)){e.qx=null;e.qy=null}switch(n){case"M":e.x=r;e.y=o;return t;case"A":i=[a,c,...s];return["C",...arcToCubic(...i)];case"Q":e.qx=r;e.qy=o;i=[a,c,...s];return["C",...quadToCubic(...i)];case"L":return["C",...lineToCubic(a,c,r,o)];case"Z":return["C",...lineToCubic(a,c,l,u)]}return t}
/**
 * Parses a path string value or 'pathArray' and returns a new one
 * in which all segments are converted to cubic-bezier.
 *
 * In addition, un-necessary `Z` segment is removed if previous segment
 * extends to the `M` segment.
 *
 * @param {string | SVGPath.pathArray} pathInput the string to be parsed or 'pathArray'
 * @returns {SVGPath.curveArray} the resulted `pathArray` converted to cubic-bezier
 */function pathToCurve(t){if(isCurveArray(t))return clonePath(t);const e=normalizePath(t);const n={...pt};const s=[];let r="";let o=e.length;for(let t=0;t<o;t+=1){[r]=e[t];s[t]=r;e[t]=segmentToCubic(e[t],n);fixArc(e,s,t);o=e.length;const i=e[t];const a=i.length;n.x1=+i[a-2];n.y1=+i[a-1];n.x2=+i[a-4]||n.x1;n.y2=+i[a-3]||n.y1}return e}
/**
 * SVGPathCommander default options
 * @type {SVGPath.options}
 */const ft={origin:[0,0,0],round:4};
/**
 * Rounds the values of a `pathArray` instance to
 * a specified amount of decimals and returns it.
 *
 * @param {SVGPath.pathArray} path the source `pathArray`
 * @param {number | 'off'} roundOption the amount of decimals to round numbers to
 * @returns {SVGPath.pathArray} the resulted `pathArray` with rounded values
 */function roundPath(t,e){let{round:n}=ft;if("off"===e||"off"===n)return clonePath(t);n=e>=0?e:n;const s="number"===typeof n&&n>=1?10**n:1;return t.map((t=>{const e=t.slice(1).map(Number).map((t=>n?Math.round(t*s)/s:Math.round(t)));return[t[0],...e]}))}
/**
 * Returns a valid `d` attribute string value created
 * by rounding values and concatenating the `pathArray` segments.
 *
 * @param {SVGPath.pathArray} path the `pathArray` object
 * @param {number | 'off'} round amount of decimals to round values to
 * @returns {string} the concatenated path string
 */function pathToString(t,e){return roundPath(t,e).map((t=>t[0]+t.slice(1).join(" "))).join("")}
/**
 * Split a path into an `Array` of sub-path strings.
 *
 * In the process, values are converted to absolute
 * for visual consistency.
 *
 * @param {SVGPath.pathArray} pathInput the source `pathArray`
 * @return {SVGPath.pathArray[]} an array with all sub-path strings
 */function splitPath(t){
/** @type {SVGPath.pathArray[]} */
const e=[];
/** @type {SVGPath.pathArray} */let n;let s=-1;t.forEach((t=>{if("M"===t[0]){n=[t];s+=1}else n=[...n,t];e[s]=n}));return e}
/**
 *
 * @param {{x: number, y: number}} v0
 * @param {{x: number, y: number}} v1
 * @returns {{x: number, y: number}}
 */function angleBetween(t,e){const{x:n,y:s}=t;const{x:r,y:o}=e;const i=n*r+s*o;const a=Math.sqrt((n**2+s**2)*(r**2+o**2));const c=n*o-s*r<0?-1:1;const l=c*Math.acos(i/a);return l}
/**
 * Returns a {x,y} point at a given length, the total length and
 * the minimum and maximum {x,y} coordinates of a C (cubic-bezier) segment.
 * @see https://github.com/MadLittleMods/svg-curve-lib/blob/master/src/js/svg-curve-lib.js
 *
 * @param {number} x1 the starting x position
 * @param {number} y1 the starting y position
 * @param {number} RX x-radius of the arc
 * @param {number} RY y-radius of the arc
 * @param {number} angle x-axis-rotation of the arc
 * @param {number} LAF large-arc-flag of the arc
 * @param {number} SF sweep-flag of the arc
 * @param {number} x the ending x position
 * @param {number} y the ending y position
 * @param {number} t the point distance
 * @returns {{x: number, y: number}} the requested point
 */function getPointAtArcSegmentLength(t,e,n,s,r,o,i,a,c,l){const{abs:u,sin:h,cos:p,sqrt:f,PI:g}=Math;let y=u(n);let d=u(s);const m=(r%360+360)%360;const b=m*(g/180);if(t===a&&e===c)return{x:t,y:e};if(0===y||0===d)return segmentLineFactory(t,e,a,c,l).point;const x=(t-a)/2;const w=(e-c)/2;const S={x:p(b)*x+h(b)*w,y:-h(b)*x+p(b)*w};const C=S.x**2/y**2+S.y**2/d**2;if(C>1){y*=f(C);d*=f(C)}const v=y**2*d**2-y**2*S.y**2-d**2*S.x**2;const P=y**2*S.y**2+d**2*S.x**2;let T=v/P;T=T<0?0:T;const E=(o!==i?1:-1)*f(T);const M={x:E*(y*S.y/d),y:E*(-d*S.x/y)};const k={x:p(b)*M.x-h(b)*M.y+(t+a)/2,y:h(b)*M.x+p(b)*M.y+(e+c)/2};const A={x:(S.x-M.x)/y,y:(S.y-M.y)/d};const O=angleBetween({x:1,y:0},A);const _={x:(-S.x-M.x)/y,y:(-S.y-M.y)/d};let L=angleBetween(A,_);!i&&L>0?L-=2*g:i&&L<0&&(L+=2*g);L%=2*g;const I=O+L*l;const j=y*p(I);const $=d*h(I);const B={x:p(b)*j-h(b)*$+k.x,y:h(b)*j+p(b)*$+k.y};return B}
/**
 * Returns a {x,y} point at a given length, the total length and
 * the shape minimum and maximum {x,y} coordinates of an A (arc-to) segment.
 *
 * @param {number} X1 the starting x position
 * @param {number} Y1 the starting y position
 * @param {number} RX x-radius of the arc
 * @param {number} RY y-radius of the arc
 * @param {number} angle x-axis-rotation of the arc
 * @param {number} LAF large-arc-flag of the arc
 * @param {number} SF sweep-flag of the arc
 * @param {number} X2 the ending x position
 * @param {number} Y2 the ending y position
 * @param {number} distance the point distance
 * @returns {SVGPath.lengthFactory} the segment length, point, min & max
 */function segmentArcFactory(t,e,n,s,r,o,i,a,c,l){const u="number"===typeof l;let h=t;let p=e;let f=0;let g=[h,p,f];let y=[h,p];let d=0;let m={x:0,y:0};let b=[{x:h,y:p}];u&&l<=0&&(m={x:h,y:p});const x=300;for(let w=0;w<=x;w+=1){d=w/x;({x:h,y:p}=getPointAtArcSegmentLength(t,e,n,s,r,o,i,a,c,d));b=[...b,{x:h,y:p}];f+=distanceSquareRoot(y,[h,p]);y=[h,p];if(u&&f>l&&l>g[2]){const t=(f-l)/(f-g[2]);m={x:y[0]*(1-t)+g[0]*t,y:y[1]*(1-t)+g[1]*t}}g=[h,p,f]}u&&l>=f&&(m={x:a,y:c});return{length:f,point:m,min:{x:Math.min(...b.map((t=>t.x))),y:Math.min(...b.map((t=>t.y)))},max:{x:Math.max(...b.map((t=>t.x))),y:Math.max(...b.map((t=>t.y)))}}}
/**
 * Returns a {x,y} point at a given length, the total length and
 * the minimum and maximum {x,y} coordinates of a C (cubic-bezier) segment.
 *
 * @param {number} x1 the starting point X
 * @param {number} y1 the starting point Y
 * @param {number} c1x the first control point X
 * @param {number} c1y the first control point Y
 * @param {number} c2x the second control point X
 * @param {number} c2y the second control point Y
 * @param {number} x2 the ending point X
 * @param {number} y2 the ending point Y
 * @param {number} t a [0-1] ratio
 * @returns {{x: number, y: number}} the cubic-bezier segment length
 */function getPointAtCubicSegmentLength(t,e,n,s,r,o,i,a,c){const l=1-c;return{x:l**3*t+3*l**2*c*n+3*l*c**2*r+c**3*i,y:l**3*e+3*l**2*c*s+3*l*c**2*o+c**3*a}}
/**
 * Returns the length of a C (cubic-bezier) segment
 * or an {x,y} point at a given length.
 *
 * @param {number} x1 the starting point X
 * @param {number} y1 the starting point Y
 * @param {number} c1x the first control point X
 * @param {number} c1y the first control point Y
 * @param {number} c2x the second control point X
 * @param {number} c2y the second control point Y
 * @param {number} x2 the ending point X
 * @param {number} y2 the ending point Y
 * @param {number=} distance the point distance
 * @returns {SVGPath.lengthFactory} the segment length, point, min & max
 */function segmentCubicFactory(t,e,n,s,r,o,i,a,c){const l="number"===typeof c;let u=t;let h=e;let p=0;let f=[u,h,p];let g=[u,h];let y=0;let d={x:0,y:0};let m=[{x:u,y:h}];l&&c<=0&&(d={x:u,y:h});const b=300;for(let x=0;x<=b;x+=1){y=x/b;({x:u,y:h}=getPointAtCubicSegmentLength(t,e,n,s,r,o,i,a,y));m=[...m,{x:u,y:h}];p+=distanceSquareRoot(g,[u,h]);g=[u,h];if(l&&p>c&&c>f[2]){const t=(p-c)/(p-f[2]);d={x:g[0]*(1-t)+f[0]*t,y:g[1]*(1-t)+f[1]*t}}f=[u,h,p]}l&&c>=p&&(d={x:i,y:a});return{length:p,point:d,min:{x:Math.min(...m.map((t=>t.x))),y:Math.min(...m.map((t=>t.y)))},max:{x:Math.max(...m.map((t=>t.x))),y:Math.max(...m.map((t=>t.y)))}}}
/**
 * Returns the {x,y} coordinates of a point at a
 * given length of a quadratic-bezier segment.
 *
 * @see https://github.com/substack/point-at-length
 *
 * @param {number} x1 the starting point X
 * @param {number} y1 the starting point Y
 * @param {number} cx the control point X
 * @param {number} cy the control point Y
 * @param {number} x2 the ending point X
 * @param {number} y2 the ending point Y
 * @param {number} t a [0-1] ratio
 * @returns {{x: number, y: number}} the requested {x,y} coordinates
 */function getPointAtQuadSegmentLength(t,e,n,s,r,o,i){const a=1-i;return{x:a**2*t+2*a*i*n+i**2*r,y:a**2*e+2*a*i*s+i**2*o}}
/**
 * Returns a {x,y} point at a given length, the total length and
 * the minimum and maximum {x,y} coordinates of a Q (quadratic-bezier) segment.
 *
 * @param {number} x1 the starting point X
 * @param {number} y1 the starting point Y
 * @param {number} qx the control point X
 * @param {number} qy the control point Y
 * @param {number} x2 the ending point X
 * @param {number} y2 the ending point Y
 * @param {number=} distance the distance to point
 * @returns {SVGPath.lengthFactory} the segment length, point, min & max
 */function segmentQuadFactory(t,e,n,s,r,o,i){const a="number"===typeof i;let c=t;let l=e;let u=0;let h=[c,l,u];let p=[c,l];let f=0;let g={x:0,y:0};let y=[{x:c,y:l}];a&&i<=0&&(g={x:c,y:l});const d=300;for(let m=0;m<=d;m+=1){f=m/d;({x:c,y:l}=getPointAtQuadSegmentLength(t,e,n,s,r,o,f));y=[...y,{x:c,y:l}];u+=distanceSquareRoot(p,[c,l]);p=[c,l];if(a&&u>i&&i>h[2]){const t=(u-i)/(u-h[2]);g={x:p[0]*(1-t)+h[0]*t,y:p[1]*(1-t)+h[1]*t}}h=[c,l,u]}a&&i>=u&&(g={x:r,y:o});return{length:u,point:g,min:{x:Math.min(...y.map((t=>t.x))),y:Math.min(...y.map((t=>t.y)))},max:{x:Math.max(...y.map((t=>t.x))),y:Math.max(...y.map((t=>t.y)))}}}
/**
 * Returns a {x,y} point at a given length
 * of a shape, the shape total length and
 * the shape minimum and maximum {x,y} coordinates.
 *
 * @param {string | SVGPath.pathArray} pathInput the `pathArray` to look into
 * @param {number=} distance the length of the shape to look at
 * @returns {SVGPath.lengthFactory} the path length, point, min & max
 */function pathLengthFactory(t,e){const n=normalizePath(t);const s="number"===typeof e;let r;let o=[];let i;let a=0;let c=0;let l=0;let u=0;let h;let p=[];let f=[];let g=0;let y={x:0,y:0};let d=y;let m=y;let b=y;let x=0;for(let t=0,w=n.length;t<w;t+=1){h=n[t];[i]=h;r="M"===i;o=r?o:[a,c,...h.slice(1)];if(r){[,l,u]=h;y={x:l,y:u};d=y;g=0;s&&e<.001&&(b=y)}else if("L"===i)({length:g,min:y,max:d,point:m}=segmentLineFactory(...o,(e||0)-x));else if("A"===i)({length:g,min:y,max:d,point:m}=segmentArcFactory(...o,(e||0)-x));else if("C"===i)({length:g,min:y,max:d,point:m}=segmentCubicFactory(...o,(e||0)-x));else if("Q"===i)({length:g,min:y,max:d,point:m}=segmentQuadFactory(...o,(e||0)-x));else if("Z"===i){o=[a,c,l,u];({length:g,min:y,max:d,point:m}=segmentLineFactory(...o,(e||0)-x))}s&&x<e&&x+g>=e&&(b=m);f=[...f,d];p=[...p,y];x+=g;[a,c]="Z"!==i?h.slice(-2):[l,u]}s&&e>=x&&(b={x:a,y:c});return{length:x,point:b,min:{x:Math.min(...p.map((t=>t.x))),y:Math.min(...p.map((t=>t.y)))},max:{x:Math.max(...f.map((t=>t.x))),y:Math.max(...f.map((t=>t.y)))}}}
/**
 * Returns the shape total length, or the equivalent to `shape.getTotalLength()`.
 *
 * The `normalizePath` version is lighter, faster, more efficient and more accurate
 * with paths that are not `curveArray`.
 *
 * @param {string | SVGPath.pathArray} pathInput the target `pathArray`
 * @returns {number} the shape total length
 */function getTotalLength(t){return pathLengthFactory(t).length}
/**
 * Returns [x,y] coordinates of a point at a given length of a shape.
 *
 * @param {string | SVGPath.pathArray} pathInput the `pathArray` to look into
 * @param {number} distance the length of the shape to look at
 * @returns {{x: number, y: number}} the requested {x, y} point coordinates
 */function getPointAtLength(t,e){return pathLengthFactory(t,e).point}
/**
 * d3-polygon-area
 * https://github.com/d3/d3-polygon
 *
 * Returns the area of a polygon.
 *
 * @param {number[][]} polygon an array of coordinates
 * @returns {number} the polygon area
 */function polygonArea(t){const e=t.length;let n=-1;let s;let r=t[e-1];let o=0;while(++n<e){s=r;r=t[n];o+=s[1]*r[0]-s[0]*r[1]}return o/2}
/**
 * d3-polygon-length
 * https://github.com/d3/d3-polygon
 *
 * Returns the perimeter of a polygon.
 *
 * @param {[number,number][]} polygon an array of coordinates
 * @returns {number} the polygon length
 */function polygonLength(t){return t.reduce(((e,n,s)=>s?e+distanceSquareRoot(t[s-1],n):0),0)}
/**
 * A global namespace for epsilon.
 *
 * @type {number}
 */const gt=1e-9;
/**
 * Coordinates Interpolation Function.
 *
 * @param {number[][]} a start coordinates
 * @param {number[][]} b end coordinates
 * @param {string} l amount of coordinates
 * @param {number} v progress
 * @returns {number[][]} the interpolated coordinates
 */function coords(t,e,n,s){const r=[];for(let o=0;o<n;o+=1){r[o]=[];for(let n=0;n<2;n+=1)r[o].push((1e3*(t[o][n]+(e[o][n]-t[o][n])*s)>>0)/1e3)}return r}
/**
 * Sets the property update function.
 * @param {string} tweenProp the property name
 */function onStartSVGMorph(t){!n[t]&&this.valuesEnd[t]&&(n[t]=(t,e,n,s)=>{const r=e.polygon;const o=n.polygon;const i=o.length;t.setAttribute("d",1===s?n.original:`M${coords(r,o,i,s).join("L")}Z`)})}
/**
 * Returns an existing polygon or false if it's not a polygon.
 * @param {SVGPath.pathArray} pathArray target `pathArray`
 * @returns {KUTE.exactPolygon | false} the resulted polygon
 */function exactPolygon(t){const e=[];const n=t.length;let s=[];let r="";if(!t.length||"M"!==t[0][0])return false;for(let o=0;o<n;o+=1){s=t[o];[r]=s;if("M"===r&&o||"Z"===r)break;if(!"ML".includes(r))return false;e.push([s[1],s[2]])}return!!n&&{polygon:e}}
/**
 * Returns a new polygon polygon.
 * @param {SVGPath.pathArray} parsed target `pathArray`
 * @param {number} maxLength the maximum segment length
 * @returns {KUTE.exactPolygon} the resulted polygon
 */function approximatePolygon(t,e){const n=splitPath(t)[0];const s=normalizePath(n);const r=getTotalLength(s);const o=[];let i=3;let a;e&&!Number.isNaN(e)&&+e>0&&(i=Math.max(i,Math.ceil(r/e)));for(let t=0;t<i;t+=1){a=getPointAtLength(s,r*t/i);o.push([a.x,a.y])}polygonArea(o)>0&&o.reverse();return{polygon:o,skipBisect:true}}
/**
 * Parses a path string and returns a polygon array.
 * @param {string} str path string
 * @param {number} maxLength maximum amount of points
 * @returns {KUTE.exactPolygon} the polygon array we need
 */function pathStringToPolygon(t,e){const n=normalizePath(t);return exactPolygon(n)||approximatePolygon(n,e)}
/**
 * Rotates a polygon to better match its pair.
 * @param {KUTE.polygonMorph} polygon the target polygon
 * @param {KUTE.polygonMorph} vs the reference polygon
 */function rotatePolygon(t,e){const n=t.length;let s=Infinity;let r;let o=0;let i;let a;let c;for(let i=0;i<n;i+=1){o=0;for(let s=0;s<e.length;s+=1){c=e[s];a=distanceSquareRoot(t[(i+s)%n],c);o+=a*a}if(o<s){s=o;r=i}}if(r){i=t.splice(0,r);t.splice(t.length,0,...i)}}
/**
 * Sample additional points for a polygon to better match its pair.
 * @param {KUTE.polygonObject} polygon the target polygon
 * @param {number} numPoints the amount of points needed
 */function addPoints(t,e){const n=t.length+e;const s=polygonLength(t)/e;let r=0;let o=0;let i=s/2;let a;let c;let l;while(t.length<n){a=t[r];c=t[(r+1)%t.length];l=distanceSquareRoot(a,c);if(i<=o+l){t.splice(r+1,0,l?midPoint(a,c,(i-o)/l):a.slice(0));i+=s}else{o+=l;r+=1}}}
/**
 * Split segments of a polygon until it reaches a certain
 * amount of points.
 * @param {number[][]} polygon the target polygon
 * @param {number} maxSegmentLength the maximum amount of points
 */function bisect(t,e=Infinity){let n=[];let s=[];for(let r=0;r<t.length;r+=1){n=t[r];s=r===t.length-1?t[0]:t[r+1];while(distanceSquareRoot(n,s)>e){s=midPoint(n,s,.5);t.splice(r+1,0,s)}}}
/**
 * Checks the validity of a polygon.
 * @param {KUTE.polygonMorph} polygon the target polygon
 * @returns {boolean} the result of the check
 */function validPolygon(t){return Array.isArray(t)&&t.every((t=>Array.isArray(t)&&2===t.length&&!Number.isNaN(t[0])&&!Number.isNaN(t[1])))}
/**
 * Returns a new polygon and its length from string or another `Array`.
 * @param {KUTE.polygonMorph | string} input the target polygon
 * @param {number} maxSegmentLength the maximum amount of points
 * @returns {KUTE.polygonMorph} normalized polygon
 */function getPolygon(t,e){let n;let s;if("string"===typeof t){const r=pathStringToPolygon(t,e);({polygon:s,skipBisect:n}=r)}else if(!Array.isArray(t))throw Error(`${ht}: ${t}`);
/** @type {KUTE.polygonMorph} */const r=[...s];if(!validPolygon(r))throw Error(`${ht}: ${r}`);r.length>1&&distanceSquareRoot(r[0],r[r.length-1])<gt&&r.pop();!n&&e&&!Number.isNaN(e)&&+e>0&&bisect(r,e);return r}
/**
 * Returns two new polygons ready to tween.
 * @param {string} path1 the first path string
 * @param {string} path2 the second path string
 * @param {number} precision the morphPrecision option value
 * @returns {KUTE.polygonMorph[]} the two polygons
 */function getInterpolationPoints(t,e,n){const s=n||y.morphPrecision;const r=getPolygon(t,s);const o=getPolygon(e,s);const i=r.length-o.length;addPoints(r,i<0?-1*i:0);addPoints(o,i>0?i:0);rotatePolygon(r,o);return[roundPath(r),roundPath(o)]}
/**
 * Returns the current `d` attribute value.
 * @returns {string} the `d` attribute value
 */function getSVGMorph(){return this.element.getAttribute("d")}
/**
 * Returns the property tween object.
 * @param {string} _ the property name
 * @param {string | KUTE.polygonObject} value the property value
 * @returns {KUTE.polygonObject} the property tween object
 */function prepareSVGMorph(t,e){const n={};const s=new RegExp("\\n","ig");let r=null;e instanceof SVGPathElement?r=e:/^\.|^#/.test(e)&&(r=selector(e));if("object"===typeof e&&e.polygon)return e;r&&["path","glyph"].includes(r.tagName)?n.original=r.getAttribute("d").replace(s,""):r||"string"!==typeof e||(n.original=e.replace(s,""));return n}
/**
 * Enables the `to()` method by preparing the tween object in advance.
 * @param {string} prop the `path` property name
 */function crossCheckSVGMorph(t){if(this.valuesEnd[t]){const e=this.valuesStart[t].polygon;const n=this.valuesEnd[t].polygon;if(!e||!n||e.length!==n.length){const e=this.valuesStart[t].original;const n=this.valuesEnd[t].original;const s=this._morphPrecision?parseInt(this._morphPrecision,10):y.morphPrecision;const[r,o]=getInterpolationPoints(e,n,s);this.valuesStart[t].polygon=r;this.valuesEnd[t].polygon=o}}}const yt={prepareStart:getSVGMorph,prepareProperty:prepareSVGMorph,onStart:onStartSVGMorph,crossCheck:crossCheckSVGMorph};const dt={component:"svgMorph",property:"path",defaultValue:[],Interpolate:coords,defaultOptions:{morphPrecision:10},functions:yt,Util:{addPoints:addPoints,bisect:bisect,getPolygon:getPolygon,validPolygon:validPolygon,getInterpolationPoints:getInterpolationPoints,pathStringToPolygon:pathStringToPolygon,distanceSquareRoot:distanceSquareRoot,midPoint:midPoint,approximatePolygon:approximatePolygon,rotatePolygon:rotatePolygon,pathToString:pathToString,pathToCurve:pathToCurve,getTotalLength:getTotalLength,getPointAtLength:getPointAtLength,polygonArea:polygonArea,roundPath:roundPath}};const mt={EssentialBoxModel:I,ColorsProperties:F,HTMLAttributes:Q,OpacityProperty:R,TextWriteProp:nt,TransformFunctions:it,SVGDraw:ct,SVGMorph:dt};Object.keys(mt).forEach((t=>{const e=mt[t];mt[t]=new Animation(e)}));var bt="2.2.4";
/**
 * A global namespace for library version.
 * @type {string}
 */const xt=bt;const wt={Animation:Animation,Components:mt,Tween:Tween,fromTo:fromTo,to:to,TweenCollection:TweenCollection,allFromTo:allFromTo,allTo:allTo,Objects:S,Util:C,Easing:E,CubicBezier:CubicBezier,Render:p,Interpolate:i,Process:P,Internals:v,Selector:selector,Version:xt};export{wt as default};

