/*! For license information please see System_settings.ac0ace5bd0b6023b.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3452],{61369:(e,t,r)=>{r.r(t),r.d(t,{default:()=>m});var n=r(95353),a=r(5947),o=r.n(a);function i(e){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(e)}function s(){s=function(){return t};var e,t={},r=Object.prototype,n=r.hasOwnProperty,a=Object.defineProperty||function(e,t,r){e[t]=r.value},o="function"==typeof Symbol?Symbol:{},l=o.iterator||"@@iterator",c=o.asyncIterator||"@@asyncIterator",u=o.toStringTag||"@@toStringTag";function d(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{d({},"")}catch(e){d=function(e,t,r){return e[t]=r}}function f(e,t,r,n){var o=t&&t.prototype instanceof y?t:y,i=Object.create(o.prototype),s=new N(n||[]);return a(i,"_invoke",{value:P(e,r,s)}),i}function m(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}t.wrap=f;var p="suspendedStart",v="suspendedYield",g="executing",h="completed",b={};function y(){}function _(){}function w(){}var k={};d(k,l,(function(){return this}));var $=Object.getPrototypeOf,C=$&&$($(T([])));C&&C!==r&&n.call(C,l)&&(k=C);var S=w.prototype=y.prototype=Object.create(k);function x(e){["next","throw","return"].forEach((function(t){d(e,t,(function(e){return this._invoke(t,e)}))}))}function L(e,t){function r(a,o,s,l){var c=m(e[a],e,o);if("throw"!==c.type){var u=c.arg,d=u.value;return d&&"object"==i(d)&&n.call(d,"__await")?t.resolve(d.__await).then((function(e){r("next",e,s,l)}),(function(e){r("throw",e,s,l)})):t.resolve(d).then((function(e){u.value=e,s(u)}),(function(e){return r("throw",e,s,l)}))}l(c.arg)}var o;a(this,"_invoke",{value:function(e,n){function a(){return new t((function(t,a){r(e,n,t,a)}))}return o=o?o.then(a,a):a()}})}function P(t,r,n){var a=p;return function(o,i){if(a===g)throw Error("Generator is already running");if(a===h){if("throw"===o)throw i;return{value:e,done:!0}}for(n.method=o,n.arg=i;;){var s=n.delegate;if(s){var l=E(s,n);if(l){if(l===b)continue;return l}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(a===p)throw a=h,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);a=g;var c=m(t,r,n);if("normal"===c.type){if(a=n.done?h:v,c.arg===b)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(a=h,n.method="throw",n.arg=c.arg)}}}function E(t,r){var n=r.method,a=t.iterator[n];if(a===e)return r.delegate=null,"throw"===n&&t.iterator.return&&(r.method="return",r.arg=e,E(t,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),b;var o=m(a,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,b;var i=o.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,b):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,b)}function O(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function j(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function N(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(O,this),this.reset(!0)}function T(t){if(t||""===t){var r=t[l];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var a=-1,o=function r(){for(;++a<t.length;)if(n.call(t,a))return r.value=t[a],r.done=!1,r;return r.value=e,r.done=!0,r};return o.next=o}}throw new TypeError(i(t)+" is not iterable")}return _.prototype=w,a(S,"constructor",{value:w,configurable:!0}),a(w,"constructor",{value:_,configurable:!0}),_.displayName=d(w,u,"GeneratorFunction"),t.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===_||"GeneratorFunction"===(t.displayName||t.name))},t.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,w):(e.__proto__=w,d(e,u,"GeneratorFunction")),e.prototype=Object.create(S),e},t.awrap=function(e){return{__await:e}},x(L.prototype),d(L.prototype,c,(function(){return this})),t.AsyncIterator=L,t.async=function(e,r,n,a,o){void 0===o&&(o=Promise);var i=new L(f(e,r,n,a),o);return t.isGeneratorFunction(r)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},x(S),d(S,u,"Generator"),d(S,l,(function(){return this})),d(S,"toString",(function(){return"[object Generator]"})),t.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},t.values=T,N.prototype={constructor:N,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(j),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function a(n,a){return s.type="throw",s.arg=t,r.next=n,a&&(r.method="next",r.arg=e),!!a}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],s=i.completion;if("root"===i.tryLoc)return a("end");if(i.tryLoc<=this.prev){var l=n.call(i,"catchLoc"),c=n.call(i,"finallyLoc");if(l&&c){if(this.prev<i.catchLoc)return a(i.catchLoc,!0);if(this.prev<i.finallyLoc)return a(i.finallyLoc)}else if(l){if(this.prev<i.catchLoc)return a(i.catchLoc,!0)}else{if(!c)throw Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return a(i.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,b):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),b},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),j(r),b}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var a=n.arg;j(r)}return a}}throw Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:T(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),b}},t}function l(e,t,r,n,a,o,i){try{var s=e[o](i),l=s.value}catch(e){return void r(e)}s.done?t(l):Promise.resolve(l).then(n,a)}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){d(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t,r){return(t=function(e){var t=function(e,t){if("object"!=i(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=i(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==i(t)?t:t+""}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const f={metaInfo:{title:"System Settings"},data:function(){return{isLoading:!0,data:new FormData,settings:[],currencies:[],clients:[],warehouses:[],sms_gateway:[],zones_array:[],setting:{client_id:"",warehouse_id:"",currency_id:"",email:"",logo:"",CompanyName:"",CompanyPhone:"",CompanyAdress:"",footer:"",developed_by:"",default_language:"",sms_gateway:"",is_invoice_footer:"",invoice_footer:""}}},methods:u(u({},(0,n.i0)(["refreshUserPermissions"])),{},{SetLocal:function(e){this.$i18n.locale=e,this.$store.dispatch("language/setLanguage",e),Fire.$emit("ChangeLanguage")},Submit_Setting:function(){var e=this;this.$refs.form_setting.validate().then((function(t){t?e.Update_Settings():e.makeToast("danger",e.$t("Please_fill_the_form_correctly"),e.$t("Failed"))}))},makeToast:function(e,t,r){this.$root.$bvToast.toast(t,{title:r,variant:e,solid:!0})},getValidationState:function(e){var t=e.dirty,r=e.validated,n=e.valid;return t||r?void 0===n?null:n:null},onFileSelected:function(e){var t,r=this;return(t=s().mark((function t(){var n,a;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r.$refs.Logo.validate(e);case 2:n=t.sent,a=n.valid,r.setting.logo=a?e.target.files[0]:"";case 5:case"end":return t.stop()}}),t)})),function(){var e=this,r=arguments;return new Promise((function(n,a){var o=t.apply(e,r);function i(e){l(o,n,a,i,s,"next",e)}function s(e){l(o,n,a,i,s,"throw",e)}i(void 0)}))})()},Selected_Time_Zone:function(e){null===e&&(this.setting.timezone="")},Update_Settings:function(){var e=this;o().start(),o().set(.1);var t=this;t.data.append("client",t.setting.client_id),t.data.append("warehouse",t.setting.warehouse_id),t.data.append("currency",t.setting.currency_id),t.data.append("email",t.setting.email),t.data.append("logo",t.setting.logo),t.data.append("CompanyName",t.setting.CompanyName),t.data.append("CompanyPhone",t.setting.CompanyPhone),t.data.append("CompanyAdress",t.setting.CompanyAdress),t.data.append("footer",t.setting.footer),t.data.append("developed_by",t.setting.developed_by),t.data.append("default_language",t.setting.default_language),t.data.append("sms_gateway",t.setting.sms_gateway),t.data.append("is_invoice_footer",t.setting.is_invoice_footer),t.data.append("invoice_footer",t.setting.invoice_footer),t.data.append("timezone",t.setting.timezone),t.data.append("_method","put"),axios.post("settings/"+t.setting.id,t.data).then((function(r){Fire.$emit("Event_Setting"),e.makeToast("success",e.$t("Successfully_Updated"),e.$t("Success")),e.refreshUserPermissions(),o().done(),e.SetLocal(t.setting.default_language)})).catch((function(t){e.makeToast("danger",e.$t("InvalidData"),e.$t("Failed")),o().done()}))},Clear_Cache:function(){var e=this;o().start(),o().set(.1),axios.get("clear_cache").then((function(t){e.makeToast("success",e.$t("Cache_cleared_successfully"),e.$t("Success")),o().done()})).catch((function(t){o().done(),e.makeToast("danger",e.$t("Failed_to_clear_cache"),e.$t("Failed"))}))},Get_Settings:function(){var e=this;axios.get("get_Settings_data").then((function(t){e.setting=t.data.settings,e.currencies=t.data.currencies,e.clients=t.data.clients,e.warehouses=t.data.warehouses,e.sms_gateway=t.data.sms_gateway,e.zones_array=t.data.zones_array,e.isLoading=!1})).catch((function(t){setTimeout((function(){e.isLoading=!1}),500)}))}}),created:function(){var e=this;this.Get_Settings(),Fire.$on("Event_Setting",(function(){e.Get_Settings()}))}};const m=(0,r(14486).A)(f,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"main-content"},[t("breadcumb",{attrs:{page:e.$t("SystemSettings"),folder:e.$t("Settings")}}),e._v(" "),e.isLoading?t("div",{staticClass:"loading_page spinner spinner-primary mr-3"}):e._e(),e._v(" "),e.isLoading?e._e():t("validation-observer",{ref:"form_setting"},[t("b-form",{on:{submit:function(t){return t.preventDefault(),e.Submit_Setting.apply(null,arguments)}}},[t("b-row",[t("b-col",{attrs:{lg:"12",md:"12",sm:"12"}},[t("b-card",{attrs:{"no-body":"",header:e.$t("SystemSettings")}},[t("b-card-body",[t("b-row",[t("b-col",{attrs:{lg:"4",md:"4",sm:"12"}},[t("b-form-group",{attrs:{label:e.$t("DefaultCurrency")}},[t("v-select",{attrs:{reduce:function(e){return e.value},placeholder:e.$t("Choose_Currency"),options:e.currencies.map((function(e){return{label:e.name,value:e.id}}))},model:{value:e.setting.currency_id,callback:function(t){e.$set(e.setting,"currency_id",t)},expression:"setting.currency_id"}})],1)],1),e._v(" "),t("b-col",{attrs:{lg:"4",md:"4",sm:"12"}},[t("validation-provider",{attrs:{name:"Email",rules:{required:!0}},scopedSlots:e._u([{key:"default",fn:function(r){return[t("b-form-group",{attrs:{label:e.$t("DefaultEmail")+" *"}},[t("b-form-input",{attrs:{state:e.getValidationState(r),"aria-describedby":"Email-feedback",label:"Email",placeholder:e.$t("DefaultEmail")},model:{value:e.setting.email,callback:function(t){e.$set(e.setting,"email",t)},expression:"setting.email"}}),e._v(" "),t("b-form-invalid-feedback",{attrs:{id:"Email-feedback"}},[e._v(e._s(r.errors[0]))])],1)]}}],null,!1,4279491894)})],1),e._v(" "),t("b-col",{attrs:{lg:"4",md:"4",sm:"12"}},[t("validation-provider",{ref:"Logo",attrs:{name:"Logo",rules:"mimes:image/*|size:200"},scopedSlots:e._u([{key:"default",fn:function(r){r.validate;var n=r.valid,a=r.errors;return t("b-form-group",{attrs:{label:e.$t("ChangeLogo")}},[t("input",{class:{"is-invalid":!!a.length},attrs:{state:!a[0]&&(!!n||null),label:"Choose Logo",type:"file"},on:{change:e.onFileSelected}}),e._v(" "),t("b-form-invalid-feedback",{attrs:{id:"Logo-feedback"}},[e._v(e._s(a[0]))])],1)}}],null,!1,3189141354)})],1),e._v(" "),t("b-col",{attrs:{lg:"4",md:"4",sm:"12"}},[t("validation-provider",{attrs:{name:"Company Name",rules:{required:!0}},scopedSlots:e._u([{key:"default",fn:function(r){return[t("b-form-group",{attrs:{label:e.$t("CompanyName")+" *"}},[t("b-form-input",{attrs:{state:e.getValidationState(r),"aria-describedby":"Company-feedback",label:"Company Name",placeholder:e.$t("CompanyName")},model:{value:e.setting.CompanyName,callback:function(t){e.$set(e.setting,"CompanyName",t)},expression:"setting.CompanyName"}}),e._v(" "),t("b-form-invalid-feedback",{attrs:{id:"Company-feedback"}},[e._v(e._s(r.errors[0]))])],1)]}}],null,!1,1317089302)})],1),e._v(" "),t("b-col",{attrs:{lg:"4",md:"4",sm:"12"}},[t("validation-provider",{attrs:{name:"Company Phone",rules:{required:!0}},scopedSlots:e._u([{key:"default",fn:function(r){return[t("b-form-group",{attrs:{label:e.$t("CompanyPhone")+" *"}},[t("b-form-input",{attrs:{state:e.getValidationState(r),"aria-describedby":"Phone-feedback",label:"Company Phone",placeholder:e.$t("CompanyPhone")},model:{value:e.setting.CompanyPhone,callback:function(t){e.$set(e.setting,"CompanyPhone",t)},expression:"setting.CompanyPhone"}}),e._v(" "),t("b-form-invalid-feedback",{attrs:{id:"Phone-feedback"}},[e._v(e._s(r.errors[0]))])],1)]}}],null,!1,1395357846)})],1),e._v(" "),t("b-col",{attrs:{lg:"4",md:"4",sm:"12"}},[t("validation-provider",{attrs:{name:"developed by",rules:{required:!0}},scopedSlots:e._u([{key:"default",fn:function(r){return[t("b-form-group",{attrs:{label:e.$t("developed_by")+" *"}},[t("b-form-input",{staticClass:"form-control",attrs:{state:e.getValidationState(r),"aria-describedby":"developed_by-feedback"},model:{value:e.setting.developed_by,callback:function(t){e.$set(e.setting,"developed_by",t)},expression:"setting.developed_by"}}),e._v(" "),t("b-form-invalid-feedback",{attrs:{id:"developed_by-feedback"}},[e._v(e._s(r.errors[0]))])],1)]}}],null,!1,4204870398)})],1),e._v(" "),t("b-col",{attrs:{lg:"4",md:"4",sm:"12"}},[t("validation-provider",{attrs:{name:"footer",rules:{required:!0}},scopedSlots:e._u([{key:"default",fn:function(r){return[t("b-form-group",{attrs:{label:e.$t("footer")+" *"}},[t("b-form-input",{staticClass:"form-control",attrs:{state:e.getValidationState(r),"aria-describedby":"footer-feedback"},model:{value:e.setting.footer,callback:function(t){e.$set(e.setting,"footer",t)},expression:"setting.footer"}}),e._v(" "),t("b-form-invalid-feedback",{attrs:{id:"footer-feedback"}},[e._v(e._s(r.errors[0]))])],1)]}}],null,!1,3264557662)})],1),e._v(" "),t("b-col",{attrs:{lg:"4",md:"4",sm:"12"}},[t("validation-provider",{attrs:{name:"DefaultLanguage",rules:{required:!0}},scopedSlots:e._u([{key:"default",fn:function(r){var n=r.valid,a=r.errors;return t("b-form-group",{attrs:{label:e.$t("DefaultLanguage")+" *"}},[t("v-select",{class:{"is-invalid":!!a.length},attrs:{state:!a[0]&&(!!n||null),reduce:function(e){return e.value},placeholder:e.$t("DefaultLanguage"),options:[{label:"English",value:"en"},{label:"French",value:"fr"},{label:"Arabic",value:"ar"},{label:"Turkish",value:"tur"},{label:"Simplified Chinese",value:"sm_ch"},{label:"Thaï",value:"thai"},{label:"Hindi",value:"hn"},{label:"German",value:"de"},{label:"Spanish",value:"es"},{label:"Italien",value:"it"},{label:"Indonesian",value:"Ind"},{label:"Traditional Chinese",value:"tr_ch"},{label:"Russian",value:"ru"},{label:"Vietnamese",value:"vn"},{label:"Korean",value:"kr"},{label:"Bangla",value:"ba"},{label:"Portuguese",value:"br"}]},model:{value:e.setting.default_language,callback:function(t){e.$set(e.setting,"default_language",t)},expression:"setting.default_language"}}),e._v(" "),t("b-form-invalid-feedback",[e._v(e._s(a[0]))])],1)}}],null,!1,2203618148)})],1),e._v(" "),t("b-col",{attrs:{lg:"4",md:"4",sm:"12"}},[t("b-form-group",{attrs:{label:e.$t("DefaultCustomer")}},[t("v-select",{attrs:{reduce:function(e){return e.value},placeholder:e.$t("Choose_Customer"),options:e.clients.map((function(e){return{label:e.name,value:e.id}}))},model:{value:e.setting.client_id,callback:function(t){e.$set(e.setting,"client_id",t)},expression:"setting.client_id"}})],1)],1),e._v(" "),t("b-col",{attrs:{lg:"4",md:"4",sm:"12"}},[t("b-form-group",{attrs:{label:e.$t("DefaultWarehouse")}},[t("v-select",{attrs:{reduce:function(e){return e.value},placeholder:e.$t("Choose_Warehouse"),options:e.warehouses.map((function(e){return{label:e.name,value:e.id}}))},model:{value:e.setting.warehouse_id,callback:function(t){e.$set(e.setting,"warehouse_id",t)},expression:"setting.warehouse_id"}})],1)],1),e._v(" "),t("b-col",{attrs:{lg:"4",md:"4",sm:"12"}},[t("b-form-group",{attrs:{label:e.$t("Default_SMS_Gateway")}},[t("v-select",{attrs:{reduce:function(e){return e.value},placeholder:e.$t("Choose_SMS_Gateway"),options:e.sms_gateway.map((function(e){return{label:e.title,value:e.id}}))},model:{value:e.setting.sms_gateway,callback:function(t){e.$set(e.setting,"sms_gateway",t)},expression:"setting.sms_gateway"}})],1)],1),e._v(" "),t("b-col",{attrs:{lg:"4",md:"4",sm:"12"}},[t("b-form-group",{attrs:{label:e.$t("Time_Zone")}},[t("v-select",{attrs:{placeholder:e.$t("Time_Zone"),reduce:function(e){return e.value},options:e.zones_array.map((function(e){return{label:e.label,value:e.zone}}))},on:{input:e.Selected_Time_Zone},model:{value:e.setting.timezone,callback:function(t){e.$set(e.setting,"timezone",t)},expression:"setting.timezone"}})],1)],1),e._v(" "),t("b-col",{attrs:{lg:"12",md:"12",sm:"12"}},[t("validation-provider",{attrs:{name:"Adress",rules:{required:!0}},scopedSlots:e._u([{key:"default",fn:function(r){return[t("b-form-group",{attrs:{label:e.$t("Adress")+" *"}},[t("textarea",{directives:[{name:"model",rawName:"v-model",value:e.setting.CompanyAdress,expression:"setting.CompanyAdress"}],staticClass:"form-control",attrs:{state:e.getValidationState(r),"aria-describedby":"Adress-feedback",placeholder:e.$t("Afewwords")},domProps:{value:e.setting.CompanyAdress},on:{input:function(t){t.target.composing||e.$set(e.setting,"CompanyAdress",t.target.value)}}}),e._v(" "),t("b-form-invalid-feedback",{attrs:{id:"Adress-feedback"}},[e._v(e._s(r.errors[0]))])],1)]}}],null,!1,758978009)})],1),e._v(" "),t("b-col",{staticClass:"mt-4 mb-4",attrs:{md:"2",sm:"2"}},[t("label",{staticClass:"checkbox checkbox-primary mb-3"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.setting.is_invoice_footer,expression:"setting.is_invoice_footer"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.setting.is_invoice_footer)?e._i(e.setting.is_invoice_footer,null)>-1:e.setting.is_invoice_footer},on:{change:function(t){var r=e.setting.is_invoice_footer,n=t.target,a=!!n.checked;if(Array.isArray(r)){var o=e._i(r,null);n.checked?o<0&&e.$set(e.setting,"is_invoice_footer",r.concat([null])):o>-1&&e.$set(e.setting,"is_invoice_footer",r.slice(0,o).concat(r.slice(o+1)))}else e.$set(e.setting,"is_invoice_footer",a)}}}),t("h5",[e._v(e._s(e.$t("invoice_footer"))+" ")]),t("span",{staticClass:"checkmark"})])]),e._v(" "),e.setting.is_invoice_footer?t("b-col",{staticClass:"mt-4 mb-4",attrs:{md:"6",sm:"6"}},[t("validation-provider",{attrs:{name:"invoice_footer",rules:{required:!0}},scopedSlots:e._u([{key:"default",fn:function(r){return[t("b-form-group",{attrs:{label:e.$t("invoice_footer")+" *"}},[t("textarea",{directives:[{name:"model",rawName:"v-model",value:e.setting.invoice_footer,expression:"setting.invoice_footer"}],staticClass:"form-control",attrs:{state:e.getValidationState(r),"aria-describedby":"invoice_footer-feedback",placeholder:e.$t("invoice_footer")},domProps:{value:e.setting.invoice_footer},on:{input:function(t){t.target.composing||e.$set(e.setting,"invoice_footer",t.target.value)}}}),e._v(" "),t("b-form-invalid-feedback",{attrs:{id:"invoice_footer-feedback"}},[e._v(e._s(r.errors[0]))])],1)]}}],null,!1,4052989155)})],1):e._e(),e._v(" "),t("b-col",{attrs:{md:"12"}},[t("b-form-group",[t("b-button",{attrs:{variant:"primary",type:"submit"}},[e._v(e._s(e.$t("submit")))])],1)],1)],1)],1)],1)],1)],1)],1)],1),e._v(" "),e.isLoading?e._e():t("b-form",{on:{submit:function(t){return t.preventDefault(),e.Clear_Cache.apply(null,arguments)}}},[t("b-row",{staticClass:"mt-5"},[t("b-col",{attrs:{lg:"12",md:"12",sm:"12"}},[t("b-card",{attrs:{"no-body":"",header:e.$t("Clear_Cache")}},[t("b-card-body",[t("b-row",[t("b-col",{attrs:{md:"12"}},[t("b-form-group",[t("b-button",{attrs:{variant:"primary"},on:{click:function(t){return e.Clear_Cache()}}},[e._v(e._s(e.$t("Clear_Cache")))])],1)],1)],1)],1)],1)],1)],1)],1)],1)}),[],!1,null,null,null).exports}}]);