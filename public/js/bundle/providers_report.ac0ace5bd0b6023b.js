"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3532],{31108:(t,e,r)=>{r.r(e),r.d(e,{default:()=>u});var o=r(5947),n=r.n(o);function a(t){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a(t)}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,o)}return r}function s(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){l(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e,r){return(e=function(t){var e=function(t,e){if("object"!=a(t)||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var o=r.call(t,e||"default");if("object"!=a(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==a(e)?e:e+""}(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}const c={metaInfo:{title:"Report Providers"},data:function(){return{isLoading:!0,serverParams:{sort:{field:"id",type:"desc"},page:1,perPage:10},limit:"10",search:"",totalRows:"",providers:[],provider:{},rows:[{total_purchase:"Total",children:[]}]}},computed:s(s({},(0,r(95353).L8)(["currentUser"])),{},{columns:function(){return[{label:this.$t("SupplierName"),field:"name",tdClass:"text-left",thClass:"text-left"},{label:this.$t("Phone"),field:"phone",tdClass:"text-left",thClass:"text-left"},{label:this.$t("Purchases"),field:"total_purchase",tdClass:"text-left",thClass:"text-left",sortable:!1},{label:this.$t("TotalAmount"),field:"total_amount",type:"decimal",headerField:this.sumCount,tdClass:"text-left",thClass:"text-left",sortable:!1},{label:this.$t("Paid"),field:"total_paid",type:"decimal",headerField:this.sumCount2,tdClass:"text-left",thClass:"text-left",sortable:!1},{label:this.$t("Total_Purchase_Due"),field:"due",type:"decimal",headerField:this.sumCount3,tdClass:"text-left",thClass:"text-left",sortable:!1},{label:this.$t("Total_Purchase_Return_Due"),field:"return_Due",type:"decimal",headerField:this.sumCount4,tdClass:"text-left",thClass:"text-left",sortable:!1},{label:this.$t("Action"),field:"actions",html:!0,tdClass:"text-right",thClass:"text-right",sortable:!1}]}}),methods:{sumCount:function(t){for(var e=0,r=0;r<t.children.length;r++)e+=t.children[r].total_amount;return e},sumCount2:function(t){for(var e=0,r=0;r<t.children.length;r++)e+=t.children[r].total_paid;return e},sumCount3:function(t){for(var e=0,r=0;r<t.children.length;r++)e+=t.children[r].due;return e},sumCount4:function(t){for(var e=0,r=0;r<t.children.length;r++)e+=t.children[r].return_Due;return e},Download_PDF:function(t,e){n().start(),n().set(.1),axios.get("report/provider_pdf/"+e,{responseType:"blob",headers:{"Content-Type":"application/json"}}).then((function(e){var r=window.URL.createObjectURL(new Blob([e.data])),o=document.createElement("a");o.href=r,o.setAttribute("download","report-"+t.name+".pdf"),document.body.appendChild(o),o.click(),setTimeout((function(){return n().done()}),500)})).catch((function(){setTimeout((function(){return n().done()}),500)}))},updateParams:function(t){this.serverParams=Object.assign({},this.serverParams,t)},onPageChange:function(t){var e=t.currentPage;this.serverParams.page!==e&&(this.updateParams({page:e}),this.Get_Provider_Report(e))},onPerPageChange:function(t){var e=t.currentPerPage;this.limit!==e&&(this.limit=e,this.updateParams({page:1,perPage:e}),this.Get_Provider_Report(1))},onSortChange:function(t){this.updateParams({sort:{type:t[0].type,field:t[0].field}}),this.Get_Provider_Report(this.serverParams.page)},onSearch:function(t){this.search=t.searchTerm,this.Get_Provider_Report(this.serverParams.page)},formatNumber:function(t,e){var r=("string"==typeof t?t:t.toString()).split(".");if(e<=0)return r[0];var o=r[1]||"";if(o.length>e)return"".concat(r[0],".").concat(o.substr(0,e));for(;o.length<e;)o+="0";return"".concat(r[0],".").concat(o)},Get_Provider_Report:function(t){var e=this;n().start(),n().set(.1),axios.get("report/provider?page="+t+"&SortField="+this.serverParams.sort.field+"&SortType="+this.serverParams.sort.type+"&search="+this.search+"&limit="+this.limit).then((function(t){e.providers=t.data.report,e.totalRows=t.data.totalRows,e.rows[0].children=e.providers,n().done(),e.isLoading=!1})).catch((function(t){n().done(),setTimeout((function(){e.isLoading=!1}),500)}))}},created:function(){this.Get_Provider_Report(1)}};const u=(0,r(14486).A)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"main-content"},[e("breadcumb",{attrs:{page:t.$t("SuppliersReport"),folder:t.$t("Reports")}}),t._v(" "),t.isLoading?e("div",{staticClass:"loading_page spinner spinner-primary mr-3"}):t._e(),t._v(" "),t.isLoading?t._e():e("b-card",{staticClass:"wrapper"},[e("vue-good-table",{attrs:{mode:"remote",columns:t.columns,totalRows:t.totalRows,rows:t.rows,"group-options":{enabled:!0,headerPosition:"bottom"},"search-options":{placeholder:t.$t("Search_this_table"),enabled:!0},"pagination-options":{enabled:!0,mode:"records",nextLabel:"next",prevLabel:"prev"},styleClass:"tableOne table-hover vgt-table mt-4"},on:{"on-page-change":t.onPageChange,"on-per-page-change":t.onPerPageChange,"on-sort-change":t.onSortChange,"on-search":t.onSearch},scopedSlots:t._u([{key:"table-row",fn:function(r){return["actions"==r.column.field?e("span",[e("a",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"cursor-pointer",attrs:{title:"PDF"},on:{click:function(e){return t.Download_PDF(r.row,r.row.id)}}},[e("i",{staticClass:"i-File-Copy text-25 text-success"})]),t._v(" "),e("router-link",{attrs:{title:"Report",to:"/app/reports/detail_supplier/"+r.row.id}},[e("i",{staticClass:"i-Eye text-25 text-info"})])],1):t._e()]}}],null,!1,3416822558)})],1)],1)}),[],!1,null,null,null).exports}}]);