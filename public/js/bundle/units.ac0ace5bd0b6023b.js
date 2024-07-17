"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9028],{37692:(t,e,a)=>{a.r(e),a.d(e,{default:()=>r});var i=a(5947),s=a.n(i);const n={metaInfo:{title:"Unit"},data:function(){return{isLoading:!0,SubmitProcessing:!1,serverParams:{columnFilters:{},sort:{field:"id",type:"desc"},page:1,perPage:10},totalRows:"",search:"",limit:"10",units:[],units_base:[],editmode:!1,show_operator:!1,unit:{id:"",name:"",ShortName:"",base_unit:"",base_unit_name:"",operator:"*",operator_value:1}}},computed:{columns:function(){return[{label:this.$t("Name"),field:"name",tdClass:"text-left",thClass:"text-left"},{label:this.$t("ShortName"),field:"ShortName",tdClass:"text-left",thClass:"text-left"},{label:this.$t("BaseUnit"),field:"base_unit_name",tdClass:"text-left",thClass:"text-left"},{label:this.$t("Operator"),field:"operator",tdClass:"text-left",thClass:"text-left"},{label:this.$t("OperationValue"),field:"operator_value",tdClass:"text-left",thClass:"text-left"},{label:this.$t("Action"),field:"actions",html:!0,tdClass:"text-right",thClass:"text-right",sortable:!1}]}},methods:{updateParams:function(t){this.serverParams=Object.assign({},this.serverParams,t)},onPageChange:function(t){var e=t.currentPage;this.serverParams.page!==e&&(this.updateParams({page:e}),this.Get_Units(e))},onPerPageChange:function(t){var e=t.currentPerPage;this.limit!==e&&(this.limit=e,this.updateParams({page:1,perPage:e}),this.Get_Units(1))},onSortChange:function(t){this.updateParams({sort:{type:t[0].type,field:t[0].field}}),this.Get_Units(this.serverParams.page)},onSearch:function(t){this.search=t.searchTerm,this.Get_Units(this.serverParams.page)},getValidationState:function(t){var e=t.dirty,a=t.validated,i=t.valid;return e||a?void 0===i?null:i:null},Submit_Unit:function(){var t=this;this.$refs.Create_Unit.validate().then((function(e){e?t.editmode?t.Update_Unit():t.Create_Unit():t.makeToast("danger",t.$t("Please_fill_the_form_correctly"),t.$t("Failed"))}))},makeToast:function(t,e,a){this.$root.$bvToast.toast(e,{title:a,variant:t,solid:!0})},New_Unit:function(){this.reset_Form(),this.show_operator=!1,this.editmode=!1,this.$bvModal.show("New_Unit")},Edit_Unit:function(t){this.Get_Units(this.serverParams.page),this.reset_Form(),this.unit=t,""==this.unit.base_unit?this.show_operator=!1:this.show_operator=!0,this.editmode=!0,this.$bvModal.show("New_Unit")},Selected_Base_Unit:function(t){this.show_operator=null!=t},Get_Units:function(t){var e=this;s().start(),s().set(.1),axios.get("units?page="+t+"&SortField="+this.serverParams.sort.field+"&SortType="+this.serverParams.sort.type+"&search="+this.search+"&limit="+this.limit).then((function(t){e.units=t.data.Units,e.totalRows=t.data.totalRows,e.units_base=t.data.Units_base,s().done(),e.isLoading=!1})).catch((function(t){s().done(),setTimeout((function(){e.isLoading=!1}),500)}))},setToStrings:function(){null===this.unit.base_unit&&(this.unit.base_unit="")},Create_Unit:function(){var t=this;this.SubmitProcessing=!0,this.setToStrings(),axios.post("units",{name:this.unit.name,ShortName:this.unit.ShortName,base_unit:this.unit.base_unit,operator:this.unit.operator,operator_value:this.unit.operator_value}).then((function(e){t.SubmitProcessing=!1,Fire.$emit("Event_Unit"),t.makeToast("success",t.$t("Create.TitleUnit"),t.$t("Success"))})).catch((function(e){t.SubmitProcessing=!1,t.makeToast("danger",t.$t("InvalidData"),t.$t("Failed"))}))},Update_Unit:function(){var t=this;this.SubmitProcessing=!0,this.setToStrings(),axios.put("units/"+this.unit.id,{name:this.unit.name,ShortName:this.unit.ShortName,base_unit:this.unit.base_unit,operator:this.unit.operator,operator_value:this.unit.operator_value}).then((function(e){t.SubmitProcessing=!1,Fire.$emit("Event_Unit"),t.makeToast("success",t.$t("Update.TitleUnit"),t.$t("Success"))})).catch((function(e){t.SubmitProcessing=!1,t.makeToast("danger",t.$t("InvalidData"),t.$t("Failed"))}))},reset_Form:function(){this.unit={id:"",name:"",ShortName:"",base_unit:"",base_unit_name:"",operator:"*",operator_value:1}},Remove_Unit:function(t){var e=this;this.$swal({title:this.$t("Delete.Title"),text:this.$t("Delete.Text"),type:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",cancelButtonText:this.$t("Delete.cancelButtonText"),confirmButtonText:this.$t("Delete.confirmButtonText")}).then((function(a){a.value&&axios.delete("units/"+t).then((function(t){t.data.success?e.$swal(e.$t("Delete.Deleted"),e.$t("Delete.UnitDeleted"),"success"):e.$swal(e.$t("Delete.Failed"),e.$t("Unit_already_linked_with_sub_unit"),"warning"),Fire.$emit("Delete_Unit")})).catch((function(){e.$swal(e.$t("Delete.Failed"),e.$t("Delete.Therewassomethingwronge"),"warning")}))}))}},created:function(){var t=this;this.Get_Units(1),Fire.$on("Event_Unit",(function(){setTimeout((function(){t.Get_Units(t.serverParams.page),t.$bvModal.hide("New_Unit")}),500)})),Fire.$on("Delete_Unit",(function(){setTimeout((function(){t.Get_Units(t.serverParams.page)}),500)}))}};const r=(0,a(14486).A)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"main-content"},[e("breadcumb",{attrs:{page:t.$t("Units"),folder:t.$t("Products")}}),t._v(" "),t.isLoading?e("div",{staticClass:"loading_page spinner spinner-primary mr-3"}):t._e(),t._v(" "),t.isLoading?t._e():e("b-card",{staticClass:"wrapper"},[e("vue-good-table",{attrs:{mode:"remote",columns:t.columns,totalRows:t.totalRows,rows:t.units,"search-options":{enabled:!0,placeholder:t.$t("Search_this_table")},"select-options":{enabled:!0,clearSelectionText:""},"pagination-options":{enabled:!0,mode:"records",nextLabel:"next",prevLabel:"prev"},styleClass:"table-hover tableOne vgt-table"},on:{"on-page-change":t.onPageChange,"on-per-page-change":t.onPerPageChange,"on-sort-change":t.onSortChange,"on-search":t.onSearch},scopedSlots:t._u([{key:"table-row",fn:function(a){return["actions"==a.column.field?e("span",[e("a",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],attrs:{title:"Edit"},on:{click:function(e){return t.Edit_Unit(a.row)}}},[e("i",{staticClass:"i-Edit text-25 text-success"})]),t._v(" "),e("a",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],attrs:{title:"Delete"},on:{click:function(e){return t.Remove_Unit(a.row.id)}}},[e("i",{staticClass:"i-Close-Window text-25 text-danger"})])]):"BaseUnit"==a.column.field?e("div",[""!=a.row.base_unit_name?e("span",[t._v(t._s(a.row.base_unit_name))]):e("span",[t._v("N/D")])]):t._e()]}}],null,!1,67566315)},[e("div",{staticClass:"mt-2 mb-3",attrs:{slot:"table-actions"},slot:"table-actions"},[e("b-button",{staticClass:"btn-rounded",attrs:{variant:"btn btn-primary btn-icon m-1"},on:{click:function(e){return t.New_Unit()}}},[e("i",{staticClass:"i-Add"}),t._v("\n          "+t._s(t.$t("Add"))+"\n        ")])],1)])],1),t._v(" "),e("validation-observer",{ref:"Create_Unit"},[e("b-modal",{attrs:{"hide-footer":"",size:"md",id:"New_Unit",title:t.editmode?t.$t("Edit"):t.$t("Add")}},[e("b-form",{on:{submit:function(e){return e.preventDefault(),t.Submit_Unit.apply(null,arguments)}}},[e("b-row",[e("b-col",{attrs:{md:"12"}},[e("validation-provider",{attrs:{name:"Code Currency",rules:{required:!0,max:15}},scopedSlots:t._u([{key:"default",fn:function(a){return[e("b-form-group",{attrs:{label:t.$t("Name")+" *"}},[e("b-form-input",{attrs:{placeholder:t.$t("Enter_Name_Unit"),state:t.getValidationState(a),"aria-describedby":"Name-feedback",label:"Name"},model:{value:t.unit.name,callback:function(e){t.$set(t.unit,"name",e)},expression:"unit.name"}}),t._v(" "),e("b-form-invalid-feedback",{attrs:{id:"Name-feedback"}},[t._v(t._s(a.errors[0]))])],1)]}}])})],1),t._v(" "),e("b-col",{attrs:{md:"12"}},[e("validation-provider",{attrs:{name:"ShortName",rules:{required:!0,max:15}},scopedSlots:t._u([{key:"default",fn:function(a){return[e("b-form-group",{attrs:{label:t.$t("ShortName")+" *"}},[e("b-form-input",{attrs:{placeholder:t.$t("Enter_ShortName_Unit"),state:t.getValidationState(a),"aria-describedby":"ShortName-feedback",label:"ShortName"},model:{value:t.unit.ShortName,callback:function(e){t.$set(t.unit,"ShortName",e)},expression:"unit.ShortName"}}),t._v(" "),e("b-form-invalid-feedback",{attrs:{id:"ShortName-feedback"}},[t._v(t._s(a.errors[0]))])],1)]}}])})],1),t._v(" "),e("b-col",{attrs:{md:"12"}},[e("b-form-group",{attrs:{label:t.$t("BaseUnit")}},[e("v-select",{attrs:{reduce:function(t){return t.value},placeholder:t.$t("Choose_Base_Unit"),options:t.units_base.map((function(t){return{label:t.name,value:t.id}}))},on:{input:t.Selected_Base_Unit},model:{value:t.unit.base_unit,callback:function(e){t.$set(t.unit,"base_unit",e)},expression:"unit.base_unit"}})],1)],1),t._v(" "),e("b-col",{directives:[{name:"show",rawName:"v-show",value:t.show_operator,expression:"show_operator"}],attrs:{md:"12"}},[e("b-form-group",{attrs:{label:t.$t("Operator")}},[e("v-select",{attrs:{reduce:function(t){return t.value},placeholder:t.$t("Choose_Operator"),options:[{label:"Multiply (*)",value:"*"},{label:"Divide (/)",value:"/"}]},model:{value:t.unit.operator,callback:function(e){t.$set(t.unit,"operator",e)},expression:"unit.operator"}})],1)],1),t._v(" "),e("b-col",{directives:[{name:"show",rawName:"v-show",value:t.show_operator,expression:"show_operator"}],attrs:{md:"12"}},[e("validation-provider",{attrs:{name:"Operation Value",rules:{required:!0,regex:/^\d*\.?\d*$/}},scopedSlots:t._u([{key:"default",fn:function(a){return[e("b-form-group",{attrs:{label:t.$t("OperationValue")+" *"}},[e("b-form-input",{attrs:{placeholder:t.$t("Enter_Operation_Value"),state:t.getValidationState(a),"aria-describedby":"Operation-feedback",label:"Operation"},model:{value:t.unit.operator_value,callback:function(e){t.$set(t.unit,"operator_value",e)},expression:"unit.operator_value"}}),t._v(" "),e("b-form-invalid-feedback",{attrs:{id:"Operation-feedback"}},[t._v(t._s(a.errors[0]))])],1)]}}])})],1),t._v(" "),e("b-col",{staticClass:"mt-3",attrs:{md:"12"}},[e("b-button",{attrs:{variant:"primary",type:"submit",disabled:t.SubmitProcessing}},[t._v(t._s(t.$t("submit")))]),t._v(" "),t.SubmitProcessing?t._m(0):t._e()],1)],1)],1)],1)],1)],1)}),[function(){var t=this._self._c;return t("div",{staticClass:"typo__p"},[t("div",{staticClass:"spinner sm spinner-primary mt-3"})])}],!1,null,null,null).exports}}]);