"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2416],{36869:(t,e,s)=>{s.r(e),s.d(e,{default:()=>l});var a=s(20629),n=s(74865),i=s.n(n);const r={computed:(0,a.Se)(["currentUserPermissions","currentUser"]),metaInfo:{title:"Detail Sale"},data:function(){return{isLoading:!0,sale:{},details:[],variants:[],company:{},email:{to:"",subject:"",message:"",client_name:"",Sale_Ref:""}}},methods:{Sale_PDF:function(){var t=this;i().start(),i().set(.1);var e=this.$route.params.id;axios.get("sale_pdf/".concat(e),{responseType:"blob",headers:{"Content-Type":"application/json"}}).then((function(e){var s=window.URL.createObjectURL(new Blob([e.data])),a=document.createElement("a");a.href=s,a.setAttribute("download","Sale_"+t.sale.Ref+".pdf"),document.body.appendChild(a),a.click(),setTimeout((function(){return i().done()}),500)})).catch((function(){setTimeout((function(){return i().done()}),500)}))},makeToast:function(t,e,s){this.$root.$bvToast.toast(e,{title:s,variant:t,solid:!0})},formatNumber:function(t,e){var s=("string"==typeof t?t:t.toString()).split(".");if(e<=0)return s[0];var a=s[1]||"";if(a.length>e)return"".concat(s[0],".").concat(a.substr(0,e));for(;a.length<e;)a+="0";return"".concat(s[0],".").concat(a)},print:function(){this.$htmlToPaper("print_Invoice")},Sale_Email:function(){this.email.to=this.sale.client_email,this.email.Sale_Ref=this.sale.Ref,this.email.client_name=this.sale.client_name,this.Send_Email()},Send_Email:function(){var t=this;i().start(),i().set(.1);var e=this.$route.params.id;axios.post("sales_send_email",{id:e,to:this.email.to,client_name:this.email.client_name,Ref:this.email.Sale_Ref}).then((function(e){setTimeout((function(){return i().done()}),500),t.makeToast("success",t.$t("Send.TitleEmail"),t.$t("Success"))})).catch((function(e){setTimeout((function(){return i().done()}),500),t.makeToast("danger",t.$t("SMTPIncorrect"),t.$t("Failed"))}))},Sale_SMS:function(){var t=this;i().start(),i().set(.1);var e=this.$route.params.id;axios.post("sales_send_sms",{id:e}).then((function(e){setTimeout((function(){return i().done()}),500),t.makeToast("success",t.$t("Send_SMS"),t.$t("Success"))})).catch((function(e){setTimeout((function(){return i().done()}),500),t.makeToast("danger",t.$t("sms_config_invalid"),t.$t("Failed"))}))},Get_Details:function(){var t=this,e=this.$route.params.id;axios.get("sales/".concat(e)).then((function(e){t.sale=e.data.sale,t.details=e.data.details,t.company=e.data.company,t.isLoading=!1})).catch((function(e){setTimeout((function(){t.isLoading=!1}),500)}))},Delete_Sale:function(){var t=this,e=this.$route.params.id;this.$swal({title:this.$t("Delete.Title"),text:this.$t("Delete.Text"),type:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",cancelButtonText:this.$t("Delete.cancelButtonText"),confirmButtonText:this.$t("Delete.confirmButtonText")}).then((function(s){s.value&&axios.delete("sales/"+e).then((function(){t.$swal(t.$t("Delete.Deleted"),t.$t("Delete.SaleDeleted"),"success"),t.$router.push({name:"index_sales"})})).catch((function(){t.$swal(t.$t("Delete.Failed"),t.$t("Delete.Therewassomethingwronge"),"warning")}))}))}},created:function(){this.Get_Details()}};const l=(0,s(51900).Z)(r,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"main-content"},[s("breadcumb",{attrs:{page:t.$t("SaleDetail"),folder:t.$t("Sales")}}),t._v(" "),t.isLoading?s("div",{staticClass:"loading_page spinner spinner-primary mr-3"}):t._e(),t._v(" "),t.isLoading?t._e():s("b-card",[s("b-row",[s("b-col",{staticClass:"mb-5",attrs:{md:"12"}},[t.currentUserPermissions&&t.currentUserPermissions.includes("Sales_edit")&&"no"==t.sale.sale_has_return?s("router-link",{staticClass:"btn btn-success btn-icon ripple btn-sm",attrs:{title:"Edit",to:{name:"edit_sale",params:{id:t.$route.params.id}}}},[s("i",{staticClass:"i-Edit"}),t._v(" "),s("span",[t._v(t._s(t.$t("EditSale")))])]):t._e(),t._v(" "),s("button",{staticClass:"btn btn-info btn-icon ripple btn-sm",on:{click:function(e){return t.Sale_Email()}}},[s("i",{staticClass:"i-Envelope-2"}),t._v("\n          "+t._s(t.$t("Email"))+"\n        ")]),t._v(" "),s("button",{staticClass:"btn btn-secondary btn-icon ripple btn-sm",on:{click:function(e){return t.Sale_SMS()}}},[s("i",{staticClass:"i-Speach-Bubble"}),t._v("\n          SMS\n        ")]),t._v(" "),s("button",{staticClass:"btn btn-primary btn-icon ripple btn-sm",on:{click:function(e){return t.Sale_PDF()}}},[s("i",{staticClass:"i-File-TXT"}),t._v("\n          PDF\n        ")]),t._v(" "),s("button",{staticClass:"btn btn-warning btn-icon ripple btn-sm",on:{click:function(e){return t.print()}}},[s("i",{staticClass:"i-Billing"}),t._v("\n          "+t._s(t.$t("print"))+"\n        ")]),t._v(" "),t.currentUserPermissions&&t.currentUserPermissions.includes("Sales_delete")&&"no"==t.sale.sale_has_return?s("button",{staticClass:"btn btn-danger btn-icon ripple btn-sm",on:{click:function(e){return t.Delete_Sale()}}},[s("i",{staticClass:"i-Close-Window"}),t._v("\n          "+t._s(t.$t("Del"))+"\n        ")]):t._e()],1)],1),t._v(" "),s("div",{staticClass:"invoice",attrs:{id:"print_Invoice"}},[s("div",{staticClass:"invoice-print"},[s("b-row",{staticClass:"justify-content-md-center"},[s("h4",{staticClass:"font-weight-bold"},[t._v(t._s(t.$t("SaleDetail"))+" : "+t._s(t.sale.Ref))])]),t._v(" "),s("hr"),t._v(" "),s("b-row",{staticClass:"mt-5"},[s("b-col",{staticClass:"mb-4",attrs:{lg:"4",md:"4",sm:"12"}},[s("h5",{staticClass:"font-weight-bold"},[t._v(t._s(t.$t("Customer_Info")))]),t._v(" "),s("div",[t._v(t._s(t.sale.client_name))]),t._v(" "),s("div",[t._v(t._s(t.sale.client_email))]),t._v(" "),s("div",[t._v(t._s(t.sale.client_phone))]),t._v(" "),s("div",[t._v(t._s(t.sale.client_adr))])]),t._v(" "),s("b-col",{staticClass:"mb-4",attrs:{lg:"4",md:"4",sm:"12"}},[s("h5",{staticClass:"font-weight-bold"},[t._v(t._s(t.$t("Company_Info")))]),t._v(" "),s("div",[t._v(t._s(t.company.CompanyName))]),t._v(" "),s("div",[t._v(t._s(t.company.email))]),t._v(" "),s("div",[t._v(t._s(t.company.CompanyPhone))]),t._v(" "),s("div",[t._v(t._s(t.company.CompanyAdress))])]),t._v(" "),s("b-col",{staticClass:"mb-4",attrs:{lg:"4",md:"4",sm:"12"}},[s("h5",{staticClass:"font-weight-bold"},[t._v(t._s(t.$t("Invoice_Info")))]),t._v(" "),s("div",[t._v(t._s(t.$t("Reference"))+" : "+t._s(t.sale.Ref))]),t._v(" "),s("div",[t._v("\n              "+t._s(t.$t("PaymentStatus"))+" :\n              "),"paid"==t.sale.payment_status?s("span",{staticClass:"badge badge-outline-success"},[t._v(t._s(t.$t("Paid")))]):"partial"==t.sale.payment_status?s("span",{staticClass:"badge badge-outline-primary"},[t._v(t._s(t.$t("partial")))]):s("span",{staticClass:"badge badge-outline-warning"},[t._v(t._s(t.$t("Unpaid")))])]),t._v(" "),s("div",[t._v(t._s(t.$t("warehouse"))+" : "+t._s(t.sale.warehouse))]),t._v(" "),s("div",[t._v("\n              "+t._s(t.$t("Status"))+" :\n              "),"completed"==t.sale.statut?s("span",{staticClass:"badge badge-outline-success"},[t._v(t._s(t.$t("complete")))]):"pending"==t.sale.statut?s("span",{staticClass:"badge badge-outline-info"},[t._v(t._s(t.$t("Pending")))]):s("span",{staticClass:"badge badge-outline-warning"},[t._v(t._s(t.$t("Ordered")))])])])],1),t._v(" "),s("b-row",{staticClass:"mt-3"},[s("b-col",{attrs:{md:"12"}},[s("h5",{staticClass:"font-weight-bold"},[t._v(t._s(t.$t("Order_Summary")))]),t._v(" "),s("div",{staticClass:"table-responsive"},[s("table",{staticClass:"table table-hover table-md"},[s("thead",{staticClass:"bg-gray-300"},[s("tr",[s("th",{attrs:{scope:"col"}},[t._v(t._s(t.$t("ProductName")))]),t._v(" "),s("th",{attrs:{scope:"col"}},[t._v(t._s(t.$t("Net_Unit_Price")))]),t._v(" "),s("th",{attrs:{scope:"col"}},[t._v(t._s(t.$t("Quantity")))]),t._v(" "),s("th",{attrs:{scope:"col"}},[t._v(t._s(t.$t("UnitPrice")))]),t._v(" "),s("th",{attrs:{scope:"col"}},[t._v(t._s(t.$t("Discount")))]),t._v(" "),s("th",{attrs:{scope:"col"}},[t._v(t._s(t.$t("Tax")))]),t._v(" "),s("th",{attrs:{scope:"col"}},[t._v(t._s(t.$t("SubTotal")))])])]),t._v(" "),s("tbody",t._l(t.details,(function(e){return s("tr",[s("td",[s("span",[t._v(t._s(e.code)+" ("+t._s(e.name)+")")]),t._v(" "),s("p",{directives:[{name:"show",rawName:"v-show",value:e.is_imei&&null!==e.imei_number,expression:"detail.is_imei && detail.imei_number !==null "}]},[t._v(t._s(t.$t("IMEI_SN"))+" : "+t._s(e.imei_number))])]),t._v(" "),s("td",[t._v(t._s(t.currentUser.currency)+" "+t._s(t.formatNumber(e.Net_price,3)))]),t._v(" "),s("td",[t._v(t._s(t.formatNumber(e.quantity,2))+" "+t._s(e.unit_sale))]),t._v(" "),s("td",[t._v(t._s(t.currentUser.currency)+" "+t._s(t.formatNumber(e.price,2)))]),t._v(" "),s("td",[t._v(t._s(t.currentUser.currency)+" "+t._s(t.formatNumber(e.DiscountNet,2)))]),t._v(" "),s("td",[t._v(t._s(t.currentUser.currency)+" "+t._s(t.formatNumber(e.taxe,2)))]),t._v(" "),s("td",[t._v(t._s(t.currentUser.currency)+" "+t._s(e.total.toFixed(2)))])])})),0)])])]),t._v(" "),s("div",{staticClass:"offset-md-9 col-md-3 mt-4"},[s("table",{staticClass:"table table-striped table-sm"},[s("tbody",[s("tr",[s("td",[t._v(t._s(t.$t("OrderTax")))]),t._v(" "),s("td",[s("span",[t._v(t._s(t.currentUser.currency)+" "+t._s(t.sale.TaxNet.toFixed(2))+" ("+t._s(t.formatNumber(t.sale.tax_rate,2))+" %)")])])]),t._v(" "),s("tr",[s("td",[t._v(t._s(t.$t("Discount")))]),t._v(" "),s("td",[t._v(t._s(t.currentUser.currency)+" "+t._s(t.sale.discount.toFixed(2)))])]),t._v(" "),s("tr",[s("td",[t._v(t._s(t.$t("Shipping")))]),t._v(" "),s("td",[t._v(t._s(t.currentUser.currency)+" "+t._s(t.sale.shipping.toFixed(2)))])]),t._v(" "),s("tr",[s("td",[s("span",{staticClass:"font-weight-bold"},[t._v(t._s(t.$t("Total")))])]),t._v(" "),s("td",[s("span",{staticClass:"font-weight-bold"},[t._v(t._s(t.currentUser.currency)+" "+t._s(t.sale.GrandTotal))])])]),t._v(" "),s("tr",[s("td",[s("span",{staticClass:"font-weight-bold"},[t._v(t._s(t.$t("Paid")))])]),t._v(" "),s("td",[s("span",{staticClass:"font-weight-bold"},[t._v(t._s(t.currentUser.currency)+" "+t._s(t.sale.paid_amount))])])]),t._v(" "),s("tr",[s("td",[s("span",{staticClass:"font-weight-bold"},[t._v(t._s(t.$t("Due")))])]),t._v(" "),s("td",[s("span",{staticClass:"font-weight-bold"},[t._v(t._s(t.currentUser.currency)+" "+t._s(t.sale.due))])])])])])])],1),t._v(" "),s("hr",{directives:[{name:"show",rawName:"v-show",value:t.sale.note,expression:"sale.note"}]}),t._v(" "),s("b-row",{staticClass:"mt-4"},[s("b-col",{attrs:{md:"12"}},[s("p",[t._v(t._s(t.$t("sale_note"))+" : "+t._s(t.sale.note))])])],1)],1)])],1)],1)}),[],!1,null,null,null).exports}}]);