"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[230],{44344:(t,e,o)=>{o.r(e),o.d(e,{default:()=>u});var r=o(95353),i=o(5947),n=o.n(i);function a(t){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a(t)}function s(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,r)}return o}function l(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?s(Object(o),!0).forEach((function(e){c(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):s(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}function c(t,e,o){return(e=function(t){var e=function(t,e){if("object"!=a(t)||!t)return t;var o=t[Symbol.toPrimitive];if(void 0!==o){var r=o.call(t,e||"default");if("object"!=a(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==a(e)?e:e+""}(e))in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}const m={metaInfo:{title:"SMS Settings"},data:function(){return{isLoading:!0,twilio:{TWILIO_SID:"",TWILIO_TOKEN:"",TWILIO_FROM:""},nexmo:{nexmo_key:"",nexmo_secret:"",nexmo_from:""}}},methods:l(l({},(0,r.i0)(["refreshUserPermissions"])),{},{Submit_Twilio_SMS:function(){var t=this;this.$refs.twilio_form_sms.validate().then((function(e){e?t.update_twilio_config():t.makeToast("danger",t.$t("Please_fill_the_form_correctly"),t.$t("Failed"))}))},Submit_Nexmo_SMS:function(){var t=this;this.$refs.nexmo_form_sms.validate().then((function(e){e?t.update_nexmo_config():t.makeToast("danger",t.$t("Please_fill_the_form_correctly"),t.$t("Failed"))}))},makeToast:function(t,e,o){this.$root.$bvToast.toast(e,{title:o,variant:t,solid:!0})},getValidationState:function(t){var e=t.dirty,o=t.validated,r=t.valid;return e||o?void 0===r?null:r:null},update_twilio_config:function(){var t=this;n().start(),n().set(.1),axios.post("update_twilio_config",{TWILIO_SID:this.twilio.TWILIO_SID,TWILIO_TOKEN:this.twilio.TWILIO_TOKEN,TWILIO_FROM:this.twilio.TWILIO_FROM}).then((function(e){Fire.$emit("Event_sms"),t.makeToast("success",t.$t("Successfully_Updated"),t.$t("Success")),n().done()})).catch((function(e){n().done(),t.makeToast("danger",t.$t("InvalidData"),t.$t("Failed"))}))},update_nexmo_config:function(){var t=this;n().start(),n().set(.1),axios.post("update_nexmo_config",{nexmo_key:this.nexmo.nexmo_key,nexmo_secret:this.nexmo.nexmo_secret,nexmo_from:this.nexmo.nexmo_from}).then((function(e){Fire.$emit("Event_sms"),t.makeToast("success",t.$t("Successfully_Updated"),t.$t("Success")),n().done()})).catch((function(e){n().done(),t.makeToast("danger",t.$t("InvalidData"),t.$t("Failed"))}))},get_sms_config:function(){var t=this;axios.get("get_sms_config").then((function(e){t.twilio=e.data.twilio,t.nexmo=e.data.nexmo,t.isLoading=!1})).catch((function(e){setTimeout((function(){t.isLoading=!1}),500)}))}}),created:function(){var t=this;this.get_sms_config(),Fire.$on("Event_sms",(function(){t.get_sms_config()}))}};const u=(0,o(14486).A)(m,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"main-content"},[e("breadcumb",{attrs:{page:t.$t("sms_settings"),folder:t.$t("Settings")}}),t._v(" "),t.isLoading?e("div",{staticClass:"loading_page spinner spinner-primary mr-3"}):t._e(),t._v(" "),t.isLoading?t._e():e("validation-observer",{ref:"twilio_form_sms"},[e("b-form",{on:{submit:function(e){return e.preventDefault(),t.Submit_Twilio_SMS.apply(null,arguments)}}},[e("b-row",{staticClass:"mt-5"},[e("b-col",{attrs:{lg:"12",md:"12",sm:"12"}},[e("b-card",{attrs:{"no-body":"",header:t.$t("TWILIO_SMS")}},[e("b-card-body",[e("b-row",[e("b-col",{attrs:{lg:"6",md:"6",sm:"12"}},[e("validation-provider",{attrs:{name:"TWILIO_SID",rules:{required:!0}},scopedSlots:t._u([{key:"default",fn:function(o){return[e("b-form-group",{attrs:{label:t.$t("TWILIO_SID")+" *"}},[e("b-form-input",{attrs:{state:t.getValidationState(o),"aria-describedby":"TWILIO_SID-feedback",label:"TWILIO_SID"},model:{value:t.twilio.TWILIO_SID,callback:function(e){t.$set(t.twilio,"TWILIO_SID",e)},expression:"twilio.TWILIO_SID"}}),t._v(" "),e("b-form-invalid-feedback",{attrs:{id:"TWILIO_SID-feedback"}},[t._v(t._s(o.errors[0]))])],1)]}}],null,!1,1353666853)})],1),t._v(" "),e("b-col",{attrs:{lg:"6",md:"6",sm:"12"}},[e("b-form-group",{attrs:{label:t.$t("TWILIO_TOKEN")+" *"}},[e("b-form-input",{attrs:{label:"TWILIO_TOKEN",placeholder:t.$t("LeaveBlank")},model:{value:t.twilio.TWILIO_TOKEN,callback:function(e){t.$set(t.twilio,"TWILIO_TOKEN",e)},expression:"twilio.TWILIO_TOKEN"}})],1)],1),t._v(" "),e("b-col",{attrs:{lg:"6",md:"6",sm:"12"}},[e("validation-provider",{attrs:{name:"TWILIO_FROM",rules:{required:!0}},scopedSlots:t._u([{key:"default",fn:function(o){return[e("b-form-group",{attrs:{label:t.$t("TWILIO_FROM")+" *"}},[e("b-form-input",{attrs:{state:t.getValidationState(o),"aria-describedby":"TWILIO_FROM-feedback",label:"TWILIO_FROM"},model:{value:t.twilio.TWILIO_FROM,callback:function(e){t.$set(t.twilio,"TWILIO_FROM",e)},expression:"twilio.TWILIO_FROM"}}),t._v(" "),e("b-form-invalid-feedback",{attrs:{id:"TWILIO_FROM-feedback"}},[t._v(t._s(o.errors[0]))])],1)]}}],null,!1,2673698221)})],1),t._v(" "),e("b-col",{attrs:{md:"12"}},[e("b-form-group",[e("b-button",{attrs:{variant:"primary",type:"submit"}},[t._v(t._s(t.$t("submit")))])],1)],1)],1)],1)],1)],1)],1)],1)],1),t._v(" "),t.isLoading?t._e():e("validation-observer",{ref:"nexmo_form_sms"},[e("b-form",{on:{submit:function(e){return e.preventDefault(),t.Submit_Nexmo_SMS.apply(null,arguments)}}},[e("b-row",{staticClass:"mt-5"},[e("b-col",{attrs:{lg:"12",md:"12",sm:"12"}},[e("b-card",{attrs:{"no-body":"",header:"Nexmo (now Vonage)"}},[e("b-card-body",[e("b-row",[e("b-col",{attrs:{lg:"6",md:"6",sm:"12"}},[e("validation-provider",{attrs:{name:"NEXMO_KEY",rules:{required:!0}},scopedSlots:t._u([{key:"default",fn:function(o){return[e("b-form-group",{attrs:{label:t.$t("NEXMO_KEY")+" *"}},[e("b-form-input",{attrs:{state:t.getValidationState(o),"aria-describedby":"NEXMO_KEY-feedback",label:"NEXMO_KEY"},model:{value:t.nexmo.nexmo_key,callback:function(e){t.$set(t.nexmo,"nexmo_key",e)},expression:"nexmo.nexmo_key"}}),t._v(" "),e("b-form-invalid-feedback",{attrs:{id:"NEXMO_KEY-feedback"}},[t._v(t._s(o.errors[0]))])],1)]}}],null,!1,2478131372)})],1),t._v(" "),e("b-col",{attrs:{lg:"6",md:"6",sm:"12"}},[e("validation-provider",{attrs:{name:"NEXMO_SECRET",rules:{required:!0}},scopedSlots:t._u([{key:"default",fn:function(o){return[e("b-form-group",{attrs:{label:t.$t("NEXMO_SECRET")+" *"}},[e("b-form-input",{attrs:{state:t.getValidationState(o),"aria-describedby":"NEXMO_SECRET-feedback",label:"NEXMO_SECRET"},model:{value:t.nexmo.nexmo_secret,callback:function(e){t.$set(t.nexmo,"nexmo_secret",e)},expression:"nexmo.nexmo_secret"}}),t._v(" "),e("b-form-invalid-feedback",{attrs:{id:"NEXMO_SECRET-feedback"}},[t._v(t._s(o.errors[0]))])],1)]}}],null,!1,7384845)})],1),t._v(" "),e("b-col",{attrs:{lg:"6",md:"6",sm:"12"}},[e("validation-provider",{attrs:{name:"SMS From",rules:{required:!0}},scopedSlots:t._u([{key:"default",fn:function(o){return[e("b-form-group",{attrs:{label:t.$t("SMS_From")+" *"}},[e("b-form-input",{attrs:{state:t.getValidationState(o),"aria-describedby":"NEXMO_FROM-feedback",label:"NEXMO_FROM"},model:{value:t.nexmo.nexmo_from,callback:function(e){t.$set(t.nexmo,"nexmo_from",e)},expression:"nexmo.nexmo_from"}}),t._v(" "),e("b-form-invalid-feedback",{attrs:{id:"NEXMO_FROM-feedback"}},[t._v(t._s(o.errors[0]))])],1)]}}],null,!1,1393596625)})],1),t._v(" "),e("b-col",{attrs:{md:"12"}},[e("b-form-group",[e("b-button",{attrs:{variant:"primary",type:"submit"}},[t._v(t._s(t.$t("submit")))])],1)],1)],1)],1)],1)],1)],1)],1)],1)],1)}),[],!1,null,null,null).exports}}]);