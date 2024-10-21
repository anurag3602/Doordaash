/* Use of this pixel is subject to the Amazon ad specs and policies at http://www.amazon.com/b/?&node=7253015011. Version number: 5, Changeset: Adding in phone number support for setUserData */
this.amzn=this.amzn||{},this.amzn.js=function(){"use strict";const e=1e3,t=864e5;var n={NAME_MAX_LENGTH:256,EVENT_PARAMETER_MAX_VALUE_LENGTH:1e3,EVENT_NAME_EXCEEDED_MAX_LENGTH_WARNING:"Length of event's name is longer than 256 characters.",EVENT_PARAMETER_NAME_EXCEEDED_MAX_LENGTH_WARNING:"Length of event's parameter name exceeds 256 characters.",EVENT_PARAMETER_VALUE_EXCEEDED_MAX_LENGTH_WARNING:"Length of event's parameter value exceeds 1000 characters.",EVENT_PARAMETER_KEY_EXCEEDED_MAX_LENGTH_WARNING:"Length of event's parameter key exceeds 256 characters.",AMZN_TOKEN_COOKIE_NAME:"aatToken",AMZN_TOKEN_URL_QUERY_PARAM_NAME:"amznToken",NO_CONSENT_COOKIE_NAME:"AMZN-NoCookieConsent",MT_LP_QUERY_PARAM:"aref",MTS_EVENT_ATTRIBUTE:"arefs",MEASUREMENT_TOKEN_COOKIE_NAME:"amznAref",MS_IN_SEC:e,MS_IN_HOUR:36e5,MS_IN_DAY:t,MEASUREMENT_TOKEN_TTL_IN_MS:2592e6,NUM_MAX_MEASUREMENT_TOKENS:147,MEASUREMENT_TOKEN_TIMESTAMP_PAIR_DELIMITER:"|",MEASUREMENT_TIMESTAMP_SEPARATOR:".",MT_TS_PAIR_TS_INDEX:1,NEWEST_MEASUREMENT_TOKEN_INDEX:0,ARBITRARY_PAST_UNIX_TIMESTAMP:1};const r=n,o=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/i;var s={isEmpty:function(e){return null==e||""===e||0===Object.keys(e).length||0===e.length},isValidAdTag:function(e){return e&&o.test(e)},measurementTokenTimestampPairsNestedArrToMeasurementTokenCookie:function(e){return e.map((e=>e.join(r.MEASUREMENT_TIMESTAMP_SEPARATOR))).join(r.MEASUREMENT_TOKEN_TIMESTAMP_PAIR_DELIMITER)},measurementTokenCookieToMeasurementTokenTimestampPairsNestedArr:function(e){return e?e.split(r.MEASUREMENT_TOKEN_TIMESTAMP_PAIR_DELIMITER).map((e=>{const[t,n]=e.split(r.MEASUREMENT_TIMESTAMP_SEPARATOR);return[t,Number(n)]})):[]}};const a=n;function i(){}i.prototype.isCookiePresent=function(e){return document.cookie.split(";").some((t=>t.trim().startsWith(`${e}=`)))},i.prototype.getCookieValue=function(e){return document.cookie.split(";").find((t=>t.trim().startsWith(`${e}=`)))?.split("=")[1]},i.prototype.writeCookie=function(e,t,n){const r=new Date(n).toUTCString();document.cookie=`${e}=${t}; expires=${r}; SameSite=Strict; secure=true;`},i.prototype.deleteCookie=function(e){this.writeCookie(e,"0",a.ARBITRARY_PAST_UNIX_TIMESTAMP)};var c=i;const E=n,u=c,{isEmpty:d,isValidAdTag:T}=s,_=["gdpr","gdpr_pd","gdpr_consent"];function p(e,t,n){e.searchParams.set(t,n);const r=Array.from(e.searchParams.entries());e.search="",r.forEach((n=>{n[0]!==t&&e.searchParams.set(n[0],n[1])})),e.search+=`&${t}=${n}`}var h={createQueryParams:function(e,{tagId:t,eventName:n,eventAttributes:r,consent:o,uuid:s}){const a="string"==typeof e?new URL(e):e;if(d(t))throw Error("Tag ID is a required parameter.");if(!T(t))throw Error("Invalid ad tag provided.");if(a.searchParams.set("pid",t),d(n))throw Error("Event name is a required parameter.");if(a.searchParams.set("event",n),Array.isArray(r)&&p(a,"items",encodeURI(JSON.stringify(r))),r&&Object.entries(r).forEach((([e,t])=>{_.includes(e)||(t||""===t)&&("object"==typeof t?a.searchParams.set(e,JSON.stringify(t)):a.searchParams.set(e,t))})),o&&_.forEach((e=>{o[e]&&a.searchParams.set(e,o[e])})),u.prototype.isCookiePresent.call({},E.AMZN_TOKEN_COOKIE_NAME)){const e=u.prototype.getCookieValue.call({},E.AMZN_TOKEN_COOKIE_NAME);e&&p(a,E.AMZN_TOKEN_URL_QUERY_PARAM_NAME,e)}{const e=u.prototype.getCookieValue.call({},E.MEASUREMENT_TOKEN_COOKIE_NAME);e&&p(a,E.MTS_EVENT_ATTRIBUTE,e)}return s&&a.searchParams.set("uuid",s),a}};const{createQueryParams:l}=h,A={"Google Chrome":106,Chromium:106};function f(){const{userAgentData:e}=navigator;return null!=e&&e.brands.some((({brand:e,version:t})=>A[e]<=t))}function m(){return document?.featurePolicy?.allowsFeature?.("attribution-reporting")}var N={performTriggerRegistration:async function(e){const{stage:t}=e;if(!f())return Promise.resolve(!1);if(!m())return Promise.resolve(!1);const n=function(e){let t;switch(e.toLowerCase()){case"beta":case"test":t="https://beta-ara.paa-reporting-advertising.amazon/aat";break;case"gamma":t="https://gamma-ara.paa-reporting-advertising.amazon/aat";break;default:t="https://ara.paa-reporting-advertising.amazon/aat"}return new URL(t)}(t);return async function(e){const t={credentials:"same-origin",keepalive:!0,attributionReporting:{eventSourceEligible:!1,triggerEligible:!0}};let n;try{n=await(window?.fetch(e,t))}catch(e){}return n}(l(n,e).href)},generateUUID:function(){return f()&&m()&&"undefined"!=typeof crypto&&"function"==typeof crypto.randomUUID?crypto.randomUUID():""}};const g=n,{isEmpty:M,isValidAdTag:y}=s,{createQueryParams:k}=h,{generateUUID:R}=N;function v(e){this.endpoints=e,this.region="NA",this.stage="PROD",this.tagIdsByLabels={},this.TCFv2={}}function I(e,t,n){const r=document.createElement("iframe");r.style.display="none",r.setAttribute("src",e),r.setAttribute("id",`tag_fire_${t}_${n}_${(new Date).getTime()}`),document.body.appendChild(r)}v.prototype.addTag=function({tagId:e,tagLabel:t}){if(M(e))return void console.warn("Tag id is required for addTag command");if(!y(e))return void console.warn(`Invalid tag id provided: ${e}`);const n=M(t)?e:t;this.tagIdsByLabels[n]=e},v.prototype.getTagIds=function(e){const{tagIdsByLabels:t}=this;return e.map((function(e){return t[e]||e}))},v.prototype.trackEvent=async function(e,t,n){return this.trackEventWithTags(e,t,n,Object.keys(this.tagIdsByLabels))},v.prototype.trackRequest=async function(e,t,n,r){const o=this.TCFv2[e],s=R();try{await async function({eventIngestionEndpoint:e,consent:t,eventAttributes:n,eventName:r,tagId:o,uuid:s}){const a=["gdpr","gdpr_pd","gdpr_consent"],i=[];if(r.length>g.NAME_MAX_LENGTH&&i.push(`${g.EVENT_NAME_EXCEEDED_MAX_LENGTH_WARNING}, ${r}`),Array.isArray(n)?n.forEach((function(e){Object.keys(e)[0].length>g.NAME_MAX_LENGTH&&i.push(`${g.EVENT_PARAMETER_NAME_EXCEEDED_MAX_LENGTH_WARNING}, ${Object.keys(e)[0]}`),e[Object.keys(e)[0]].length>g.EVENT_PARAMETER_MAX_VALUE_LENGTH&&i.push(`${g.EVENT_PARAMETER_VALUE_EXCEEDED_MAX_LENGTH_WARNING}, ${e[Object.keys(e)[0]]}`)})):n&&Object.keys(n).filter((function(e){return!a.includes(e)})).forEach((function(e){let t;e.length>g.NAME_MAX_LENGTH&&i.push(`${g.EVENT_PARAMETER_NAME_EXCEEDED_MAX_LENGTH_WARNING}, ${e}`),t=n[e],t||""===t?(t.length>g.EVENT_PARAMETER_MAX_VALUE_LENGTH?i.push(`${g.EVENT_PARAMETER_VALUE_EXCEEDED_MAX_LENGTH_WARNING}, ${t}`):Object.keys(t)&&Object.keys(t)[0]&&Object.keys(t).forEach((function(e){e.length>g.NAME_MAX_LENGTH&&i.push(`${g.EVENT_PARAMETER_KEY_EXCEEDED_MAX_LENGTH_WARNING}, ${e}`),t[e].length>g.EVENT_PARAMETER_MAX_VALUE_LENGTH&&i.push(`${g.EVENT_PARAMETER_VALUE_EXCEEDED_MAX_LENGTH_WARNING}, ${t[e]}`)})),"object"==typeof t&&(t=encodeURI(JSON.stringify(t)))):console.warn(`Key ${e} has no value`)})),i.length>0){const e=`Event has ${i.length} validation errors.`;return console.warn(e),console.warn(i),Promise.reject(e)}const c=k(new URL(e),{tagId:o,eventName:r,eventAttributes:n,consent:t,uuid:s}).href;if(!window.fetch||void 0===window.fetch)return I(c,o,r);try{const e=await fetch(c,{method:"get",credentials:"include",mode:"no-cors",keepalive:"true"});return Promise.resolve(e)}catch(e){return console.warn("Event request via fetch failed, reverting to iframe"),I(c,o,r)}}({eventIngestionEndpoint:t,consent:o,eventAttributes:r,eventName:n,tagId:e,uuid:s})}catch(e){return console.warn("Event request failed.",e),Promise.reject(e)}try{const{performTriggerRegistration:t}=N;await t({stage:this.stage,consent:this.TCFv2[e],tagId:e,eventName:n,eventAttributes:r,uuid:s})}catch(e){console.warn("ARA trigger registration failed",e)}return Promise.resolve()},v.prototype.trackEventWithTags=async function(e,t,n,r){const o=this.getPixelEndpoint(this.region),s=t||{},a="No eventName name specified.",i="No valid endpoint.";if(!e)return console.warn(a),Promise.reject(a);if(!o)return console.warn(i),Promise.reject(i);n&&(s.ts=n);const c=this.getTagIds(r).map((t=>this.trackRequest(t,o,e,s)));return Promise.all(c)},v.prototype.trackPixel=function(e,t,n){const r=this;let o;const s={};let a=t||"";a=a.split("?"),o=a.length>1?a[1]:a[0],o=o.split("&"),o.forEach((function(e){const t=e.split("=");let n,o;t.length<=1||("ex-fargs"===t[0]?(n=r.parsePixelArgs(t[1],"&"),s.fargs_id=n.id,s.fargs_type=n.type):"ex-hargs"===t[0]&&(o=r.parsePixelArgs(t[1],";"),s.hargs_c=o.c,s.hargs_p=o.p))})),this.validatePixelData(s),Object.keys(s).forEach((function(e){s[e]||delete s[e]})),this.trackEvent(e,s,n)},v.prototype.addTCFv2=function(e){this.addTCFv2WithTags(e,Object.keys(this.tagIdsByLabels))},v.prototype.addTCFv2WithTags=function(e,t){const{TCFv2:n}=this;this.getTagIds(t).forEach((function(t){n[t]=e}))},v.prototype.getPixelEndpoint=function(e){const t=this.endpoints[e.toUpperCase()];return""===t||null==t?(console.warn("Endpoint does not exist, please check your region configuration!"),null):t},v.prototype.parsePixelArgs=function(e,t){let n=decodeURIComponent(e);const r={};return n=n.replace(/\?/g,""),n.split(t).forEach((function(e){const t=e.split("=");if(t.length>1){const[e,n]=t;r[e]=n}})),r},v.prototype.validatePixelData=function(e){const t=e.hargs_c&&e.hargs_p,n=e.fargs_id&&e.fargs_type;t||n||console.warn("Invalid arguments for a trackPixel event, please check your implementation!")},v.prototype.setRegion=function(e){this.region=e},v.prototype.setStage=function(e){this.stage=e};var P=v;const O=n,{measurementTokenTimestampPairsNestedArrToMeasurementTokenCookie:C,measurementTokenCookieToMeasurementTokenTimestampPairsNestedArr:w}=s,S="AIPToken",U="cookieExpiry",L={method:"POST",mode:"cors",cache:"no-cache",credentials:"omit",headers:{"Content-Type":"application/json"},redirect:"follow",referrerPolicy:"no-referrer-when-downgrade"};function D(e){this.cookieHandler=e,this.alreadySavedMeasurementToken=!1}D.prototype.saveMeasurementTokenInURLToCookieIfPresent=function(e){try{if("NA"!==e.toUpperCase()||this.alreadySavedMeasurementToken)return;const t=new URLSearchParams(window.location.search).get(O.MT_LP_QUERY_PARAM);if(!t)return;let n=this.cookieHandler.getCookieValue(O.MEASUREMENT_TOKEN_COOKIE_NAME);n?.split(O.MEASUREMENT_TOKEN_TIMESTAMP_PAIR_DELIMITER).length>=O.NUM_MAX_MEASUREMENT_TOKENS&&(n=C(w(n).slice(0,-1)));const r=Math.round(performance.timeOrigin),o=C([[t,r]].concat(w(n))),s=r+O.MEASUREMENT_TOKEN_TTL_IN_MS;this.cookieHandler.writeCookie(O.MEASUREMENT_TOKEN_COOKIE_NAME,o,s),this.alreadySavedMeasurementToken=!0}catch(e){}},D.prototype.removeAnyExpiredMeasurementTokens=function(){try{const e=this.cookieHandler.getCookieValue(O.MEASUREMENT_TOKEN_COOKIE_NAME);if(!e)return;const t=(new Date).getTime()-O.MEASUREMENT_TOKEN_TTL_IN_MS,n=w(e).filter((([,e])=>e>t));if(0===n.length)return void this.cookieHandler.deleteCookie(O.MEASUREMENT_TOKEN_COOKIE_NAME);const r=C(n),o=n[O.NEWEST_MEASUREMENT_TOKEN_INDEX][O.MT_TS_PAIR_TS_INDEX]+O.MEASUREMENT_TOKEN_TTL_IN_MS;this.cookieHandler.writeCookie(O.MEASUREMENT_TOKEN_COOKIE_NAME,r,o)}catch(e){}},D.prototype.formatRequestBody=function(e){const t={};if(null!==e.gdpr&&(t.gdpr=e.gdpr.enabled?1:0,null!==e.gdpr.consent&&(t.gdprConsent=e.gdpr.consent)),null===e.hashedRecords)throw Error("hashedRecords array is null");if(0===e.hashedRecords.length)throw Error("hashedRecords array is empty");return t.hashedRecords=e.hashedRecords,null!==e.ttl&&(t.ttl=e.ttl),t},D.prototype.requestAmznToken=async function(e){const t={...L,body:JSON.stringify(e)},n=await fetch("https://tk.amazon-adsystem.com/envelope",t);if(n.ok){return await n.json()}const r=await n.text();throw Error(r)},D.prototype.renewAmznToken=async function(e){if(!this.cookieHandler.isCookiePresent(O.AMZN_TOKEN_COOKIE_NAME)&&!this.cookieHandler.isCookiePresent(O.NO_CONSENT_COOKIE_NAME))try{const t=this.formatRequestBody(e),n=await this.requestAmznToken(t);return""===n[S]?this.cookieHandler.writeCookie(O.NO_CONSENT_COOKIE_NAME,n[S],n[U]):this.cookieHandler.writeCookie(O.AMZN_TOKEN_COOKIE_NAME,n[S],n[U]),n}catch(e){console.error(e)}return"no-op"},D.prototype.deleteAmznToken=async function(){this.cookieHandler.isCookiePresent(O.AMZN_TOKEN_COOKIE_NAME)&&this.cookieHandler.deleteCookie(O.AMZN_TOKEN_COOKIE_NAME),this.cookieHandler.isCookiePresent(O.NO_CONSENT_COOKIE_NAME)&&this.cookieHandler.deleteCookie(O.NO_CONSENT_COOKIE_NAME)},D.prototype.updateAmznToken=async function(e){return await this.deleteAmznToken(),this.renewAmznToken(e)};var b=D;function K(e){this.tokensHandler=e}async function H(e){const t=(new TextEncoder).encode(e),n=await crypto.subtle.digest("SHA-256",t);return Array.from(new Uint8Array(n)).map((e=>e.toString(16).padStart(2,"0"))).join("")}function X(e){return null!=e&&"string"==typeof e&&e.length>0}K.prototype.setUserData=async function(e){const t={gdpr:{enabled:!1,consent:""},hashedRecords:[],ttl:9600},n=e[1];n.gdpr&&(t.gdpr=n.gdpr),n.ttl&&(t.ttl=n.ttl);const r=/[A-Fa-f0-9]{64}/;if(X(n.email)){const e={type:"email",record:""};n.email=n.email.trim().toLowerCase(),r.test(n.email)?e.record=n.email:e.record=await H(n.email),t.hashedRecords.push(e)}if(X(n.phonenumber)){const e={type:"phonenumber",record:""};r.test(n.phonenumber)?e.record=n.phonenumber:e.record=await H(function(e){let t=e.replace(/[^\d+]+/g,"");return t=t.replace(/^00/,"+"),t.match(/^1/)&&(t=`+${t}`),t.match(/^\+/)||(t=`+1${t}`),t=t.replace(/^\+/,""),t}(n.phonenumber)),t.hashedRecords.push(e)}return t.hashedRecords.length>0?this.tokensHandler.updateAmznToken(t):Promise.resolve()};var V,G,x=K;function $(){if(G)return V;G=1;const e="amzn-ad-tag-",t=["AddToShoppingCart","Application","Checkout","Contact","Lead","Off-AmazonPurchases","Search","Signup","Subscribe"];function n(n){this.AD_TAG_HTML_PREFIX=e,this.AD_TAG_EVENT_NAMES=t,this.eventTracker=n}return n.prototype.init=function(){const{eventTracker:t}=this;this.AD_TAG_EVENT_NAMES.forEach((function(n){const r=e+n;document.getElementById(r)&&document.getElementById(r).addEventListener("click",(function(){t.trackEvent(n,{},(new Date).getTime())}))}))},n.prototype.addEventName=function(e){-1===t.indexOf(e)&&t.push(e)},n.prototype.overrideEventPrefix=function(e){this.AD_TAG_HTML_PREFIX=e},n.prototype.overrideEventName=function(e,n){const r=t.indexOf(e);-1!==r&&(t[r]=n)},V=n}function z(e,t,n,r){this.eventTracker=e,this.setUserDataHandler=t,this.tokensHandler=n,this.aatEventsQueue=[],this.isSetUserDataInProcess=!1,this.eventListener=r}$(),z.prototype.processCommandQueue=async function(e){const t=this,n=[];return(e||[]).forEach((function(e){n.push(t.processCommand(e[0],e[1]))})),Promise.all(n)},z.prototype.processCommand=async function(e,t=(new Date).getTime()){const n=Array.prototype.slice.call(e),r=e[0],o=`Unsupported tag command "${r}"`,s={trackevent:(e,t)=>this.trackEvent(e,t),trackpixel:(e,t)=>this.trackPixel(e,t),pixel:(e,t)=>this.withTag(e,t),withtag:(e,t)=>this.withTag(e,t),addpixel:e=>this.addTag(e),addtag:e=>this.addTag(e),addtcfv2:e=>this.addTCFv2(e),setregion:e=>this.setRegion(e),setstage:e=>this.setStage(e),setuserdata:e=>this.setUserData(e)},a=r.toLowerCase();return s[a]?s[a](n,t):(console.warn(o),Promise.reject(o))},z.prototype.setUserData=async function(e){this.isSetUserDataInProcess=!0;try{await this.setUserDataHandler.setUserData(e),this.isSetUserDataInProcess=!1,this.processAatEventsQueue()}catch(e){return console.warn(e),Promise.reject(e)}return Promise.resolve()},z.prototype.processAatEventsQueue=function(){if(this.aatEventsQueue.length)for(;this.aatEventsQueue.length;){const{argumentArray:e,timestamp:t,tagLabel:n}=this.aatEventsQueue.pop();this.trackEvent(e,t,n).catch((e=>{console.warn(e)}))}},z.prototype.trackEvent=async function(e,t,n){if(this.isSetUserDataInProcess)return this.aatEventsQueue.unshift({argumentArray:e,timestamp:t,tagLabel:n}),Promise.resolve();this.tokensHandler.removeAnyExpiredMeasurementTokens();const r=e[1],o=e[2];return void 0!==n?this.eventTracker.trackEventWithTags(r,o,t,[n]):this.eventTracker.trackEvent(r,o,t)},z.prototype.trackPixel=function(e,t){this.eventTracker.trackPixel("__pixel__",e[1],t)},z.prototype.withTag=async function(e,t){const n=e[1],r=e[2]||"",o=`Unsupported command "${r}" used after "withTag" command`;switch(r.toUpperCase()){case"TRACKEVENT":return this.trackEvent(e.slice(2),t,n);case"ADDTCFV2":this.addTCFv2(e.slice(2),n);break;default:return console.warn(o),Promise.reject(o)}return Promise.resolve()},z.prototype.addTag=function(e){const t=e[2],n=e[1];this.eventTracker.addTag({tagId:n,tagLabel:t})},z.prototype.addTCFv2=function(e,t){const n=e[1];void 0!==t?this.eventTracker.addTCFv2WithTags(n,[t]):this.eventTracker.addTCFv2(n)},z.prototype.setRegion=function(e){const t=e[1].toUpperCase();this.eventTracker.setRegion(t),this.tokensHandler.saveMeasurementTokenInURLToCookieIfPresent(t)},z.prototype.setStage=function(e){const t=e[1].toUpperCase();this.eventTracker.setStage(t)},z.prototype.listen=function(){this.eventListener.init()};const j={NA:"https://s.amazon-adsystem.com/iu3",EU:"https://aax-eu.amazon-adsystem.com/s/iu3",FE:"https://aax-fe.amazon-adsystem.com/s/iu3"},W=P,F=c,Q=b,q=x,B=z;return async function(){const e=new W(j),t=new F,n=new Q(t),r=new q(n);let o=new B(e,r,n);{const t=new($())(e);o=new B(e,r,n,t)}n.removeAnyExpiredMeasurementTokens(),window.amzn&&window.amzn.q&&o.processCommandQueue(window.amzn.q).catch((e=>{console.error("Error processing event queue",e)})),window.amzn=async function(...e){return o.processCommand(e).catch((e=>{console.error("Error processing command",e)}))},window.renewToken=async function(e){return n.renewAmznToken(e)},window.updateToken=async function(e){return n.updateAmznToken(e)},window.deleteToken=async function(){return n.deleteAmznToken()}}(),{}}();
