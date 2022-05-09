(window.webpackJsonp=window.webpackJsonp||[]).push([[9,4,5,6],{437:function(t,e,n){"use strict";n.r(e);var o=n(36),c=(n(110),{name:"ConfirmationDialog",props:{dialog:{type:Boolean,default:!1},dialogText:{type:String,default:"Excluir contato"},dialogFunction:{type:Function,default:function(){}},dialogAcceptColor:{type:String,default:""},dialogAcceptText:{type:String,default:""}},data:function(){return{dialogShow:!1,loading:!1,buttonAcceptText:""}},watch:{dialog:function(t){t&&this.setDialogAcceptText()}},methods:{setDialogAcceptText:function(){this.buttonAcceptText=this.dialogAcceptText||"Sim"},handleAccept:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.loading=!0,e.next=3,t.dialogFunction();case 3:t.loading=!1,t.$emit("close-dialog"),t.$emit("reload-table");case 6:case"end":return e.stop()}}),e)})))()}}}),l=n(62),r=n(78),d=n.n(r),M=n(410),m=n(450),j=n(426),f=n(504),v=n(452),D=n(421),C=n(465),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-dialog",{attrs:{value:t.dialog,persistent:"","max-width":"27rem"}},[n("v-card",{attrs:{rounded:"lg"}},[n("v-card-title",[n("v-row",{staticClass:"flex-nowrap d-flex justify-space-between"},[n("span",{staticClass:"asus-popup-title body-1 my-3"},[t._v("\n            "+t._s(t.dialogText)+"\n          ")])])],1),t._v(" "),n("v-divider"),t._v(" "),n("v-card-text",[n("p",{staticClass:"body-1 mt-4"},[t._v("Deseja realmente excluir o contato?")])]),t._v(" "),n("v-divider"),t._v(" "),n("v-card-actions",{staticClass:"d-flex justify-space-around"},[n("v-spacer"),t._v(" "),n("v-btn",{attrs:{id:"dialog-decline-btn",text:"",width:"auto"},on:{click:function(e){return t.$emit("close-dialog")}}},[t._v("\n          Cancelar\n        ")]),t._v(" "),n("v-btn",{attrs:{id:"dialog-accept-btn",color:"primary",disabled:t.loading,width:"'auto"},on:{click:function(e){return t.handleAccept()}}},[t._v("\n          Excluir\n        ")])],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;d()(component,{VBtn:M.a,VCard:m.a,VCardActions:j.a,VCardText:j.b,VCardTitle:j.c,VDialog:f.a,VDivider:v.a,VRow:D.a,VSpacer:C.a})},438:function(t,e,n){"use strict";n.r(e);var o={name:"Tooltip",props:{left:{type:Boolean,default:!1},bottom:{type:Boolean,default:!1},right:{type:Boolean,default:!1},top:{type:Boolean,default:!1}}},c=n(62),l=n(78),r=n.n(l),d=n(466),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-tooltip",{attrs:{left:t.left,bottom:t.bottom,right:t.right,top:t.top},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[n("div",t._g({staticClass:"d-inline"},o),[t._t("button")],2)]}}],null,!0)},[t._v(" "),t._t("text")],2)}),[],!1,null,null,null);e.default=component.exports;r()(component,{VTooltip:d.a})},440:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMzciIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjM3IDIwMCI+DQogICAgPGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJub256ZXJvIj4NCiAgICAgICAgPHBhdGggZmlsbD0iIzkxOThBRiIgZD0iTTIyNC43NDEgMTgzLjY3M2gtODkuODk2Yy02Ljc0MiAwLTE2LjM0NSA3LjE0My0xNi4zNDUgMTYuMzI3VjEyLjI0NUMxMTguNSA1LjUxIDEyNC4wMTYgMCAxMzAuNzU5IDBoOTMuOTgyQzIzMS40ODQgMCAyMzcgNS41MSAyMzcgMTIuMjQ1djE1OS4xODRjMCA2LjczNC01LjUxNiAxMi4yNDQtMTIuMjU5IDEyLjI0NHoiLz4NCiAgICAgICAgPHBhdGggZmlsbD0iI0MwQzNEMiIgZD0iTTEyLjI1OSAxODMuNjczaDg5Ljg5NmM2Ljc0MiAwIDE2LjM0NSA3LjE0MyAxNi4zNDUgMTYuMzI3VjEyLjI0NUMxMTguNSA1LjUxIDExMi45ODQgMCAxMDYuMjQxIDBIMTIuMjZDNS41MTYgMCAwIDUuNTEgMCAxMi4yNDV2MTU5LjE4NGMwIDYuNzM0IDUuNTE2IDEyLjI0NCAxMi4yNTkgMTIuMjQ0eiIvPg0KICAgIDwvZz4NCjwvc3ZnPg0K"},441:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDE2IDE2Ij4NCiAgICA8ZyBmaWxsPSIjOTE5OEFGIiBmaWxsLXJ1bGU9Im5vbnplcm8iPg0KICAgICAgICA8cGF0aCBkPSJNLjE1IDE0LjgzOGwtLjE0My41OTZhLjI4My4yODMgMCAwIDAtLjAwNi4wNTdMMCAxNS41MDNhLjI4NC4yODQgMCAwIDAgLjAyNy4xMTVjLjAxNC4wMy4wMzIuMDYuMDU2LjA4NGEuMjg4LjI4OCAwIDAgMCAuMjY4LjA3NmwuNTk2LS4xNDItLjc5OC0uNzk4ek0xNS4wMzQuNzUyYTIuNTc1IDIuNTc1IDAgMCAwLTMuNjM3IDBMMS4wOTMgMTEuMDU1bC0uMDEyLjAxNi0uMDE2LjAyMmEuMjc4LjI3OCAwIDAgMC0uMDM2LjA2OGwtLjAwOC4wMjItLjAwNC4wMDgtLjcxMiAyLjk5NEwxLjYgMTUuNDgxbDIuOTk0LS43MTNjLjAwOC0uMDAyLjAxNS0uMDA2LjAyMi0uMDA5YS4yNjQuMjY0IDAgMCAwIC4wODYtLjA0NmwuMDItLjAxNi4wMDgtLjAwNUwxNS4wMzQgNC4zODhhMi41NzQgMi41NzQgMCAwIDAgMC0zLjYzNnpNNC45MDIgMTMuNzEybC4xMDEtLjkxIDYuMzk0LTYuMzkzYS4yODUuMjg1IDAgMSAwLS40MDQtLjQwNGwtNi4zOTQgNi4zOTQtMS4zNjQuMTUxLjE1Mi0xLjM2NEw5Ljc4IDQuNzkzYS4yODUuMjg1IDAgMSAwLS40MDQtLjQwNGwtNi4zOTQgNi4zOTMtLjkxLjEwMSA3LjkxLTcuOTA5IDIuODI4IDIuODI5LTcuOTA5IDcuOTA5em04LjMxMy04LjMxM0wxMC4zODcgMi41N2wuNDA0LS40MDQgMi44MjggMi44MjktLjQwNC40MDR6bS44MDgtLjgwOGwtMi44MjgtMi44MjkuNDA0LS40MDQgMi44MjkgMi44MjgtLjQwNS40MDV6Ii8+DQogICAgPC9nPg0KPC9zdmc+DQo="},442:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDE2IDE2Ij4NCiAgICA8ZyBmaWxsPSIjOTE5OEFGIiBmaWxsLXJ1bGU9Im5vbnplcm8iPg0KICAgICAgICA8cGF0aCBkPSJNMTMuODgxIDEuNjI3aC0zLjgwOGMtLjAzLS4zMzktLjEzNC0uOTEtLjQ5Mi0xLjI3N0ExLjE0NyAxLjE0NyAwIDAgMCA4LjczIDBINi4wMTdjLS4zNCAwLS42MjYuMTE4LS44NTMuMzUtLjM1Ny4zNjYtLjQ2MS45MzgtLjQ5MSAxLjI3N0gxLjQwN2EuMjcxLjI3MSAwIDEgMCAwIC41NDJIMTMuODhhLjI3MS4yNzEgMCAxIDAgMC0uNTQyem0tOC42NjMgMGMuMDMtLjI4NC4xMTgtLjY3Ny4zMzYtLjlhLjYxNC42MTQgMCAwIDEgLjQ2My0uMTg1aDIuNzEyYy4xOSAwIC4zNDEuMDYuNDYzLjE4NS4yMTguMjIzLjMwNi42MTYuMzM2LjloLTQuMzF6TTIuNDggMTQuNjVjLjAxLjQ2Ny4zIDEuMzUgMS4zMyAxLjM1aDcuNjY4YzEuMDMgMCAxLjMyLS44ODMgMS4zMy0xLjM0NWwuNDk3LTExLjk0M0gxLjk4M0wyLjQ4IDE0LjY1em0xLjkxLTMuMjZoNi41MDhhLjI3MS4yNzEgMCAxIDEgMCAuNTQySDQuMzlhLjI3MS4yNzEgMCAxIDEgMC0uNTQyem0wIDEuMzU2aDYuNTA4YS4yNzEuMjcxIDAgMSAxIDAgLjU0Mkg0LjM5YS4yNzEuMjcxIDAgMSAxIDAtLjU0MnptMCAxLjM1Nmg2LjUwOGEuMjcxLjI3MSAwIDEgMSAwIC41NDJINC4zOWEuMjcxLjI3MSAwIDEgMSAwLS41NDJ6Ii8+DQogICAgPC9nPg0KPC9zdmc+DQo="},446:function(t,e,n){"use strict";n.r(e);n(13),n(11),n(15),n(6),n(20),n(14),n(21);var o=n(2),c=(n(43),n(56),n(67));function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function r(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d={name:"ContactDialog",props:{item:{type:Object,required:!0,default:function(){}},dialog:{type:Boolean,required:!0,default:!1}},data:function(){return{contactDialog:!1,editedContact:{}}},computed:r(r({},Object(c.b)("contacts",["addContact","setList","updateContact"])),Object(c.c)("contacts",["list"])),watch:{dialog:function(t){this.contactDialog=this.dialog},contactDialog:function(t){t||this.closeDialog()},item:function(){this.editedContact={id:this.item.id,name:this.item.name,email:this.item.email,phone:this.item.phone,timestamp:this.item.timestamp}}},methods:{closeDialog:function(){this.$emit("close-dialog")},save:function(){var t=this;if(this.item.id){var e=this.list;this.list.map((function(n,o){n.id===t.item.id&&(e[o]=r(r({},t.editedContact),{},{timestamp:new Date}))})),this.$store.commit("contacts/setList",Object.assign([],e)),this.$nuxt.$emit("active-message","Contato editado com sucesso!","info",!0)}else{var n=r(r({},this.editedContact),{},{id:this.list.length>0?this.list[this.list.length-1].id+1:1});this.$store.commit("contacts/addContact",n),this.$nuxt.$emit("active-message","Contato salvo com sucesso!","success",!0)}this.$emit("table-loaded",!0),this.closeDialog()}}},M=n(62),m=n(78),j=n.n(m),f=n(410),v=n(450),D=n(426),C=n(420),x=n(504),I=n(452),h=n(421),y=n(411),component=Object(M.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-dialog",{attrs:{width:"432",persistent:""},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[n("v-card",{attrs:{rounded:"lg"}},[n("v-card-title",{staticClass:"d-flex justify-space-between align-center font-weight-medium"},[t._v("\n        "+t._s(t.editedContact.id?"Editar contato":"Criar novo contato")+"\n      ")]),t._v(" "),n("v-divider"),t._v(" "),n("v-card-text",{staticClass:"mt-3"},[n("v-col",[n("v-row",{staticClass:"flex-column"},[n("span",{staticClass:"font-weight-bold"},[t._v("Nome")]),t._v(" "),n("v-text-field",{attrs:{dense:"","hide-details":"",outlined:""},model:{value:t.editedContact.name,callback:function(e){t.$set(t.editedContact,"name",e)},expression:"editedContact.name"}})],1),t._v(" "),n("v-row",{staticClass:"flex-column mt-6"},[n("span",{staticClass:"font-weight-bold"},[t._v("E-mail")]),t._v(" "),n("v-text-field",{attrs:{dense:"","hide-details":"",outlined:""},model:{value:t.editedContact.email,callback:function(e){t.$set(t.editedContact,"email",e)},expression:"editedContact.email"}})],1),t._v(" "),n("v-col",{staticClass:"pa-0 ml-n3 mt-6",attrs:{cols:"7"}},[n("span",{staticClass:"font-weight-bold"},[t._v("Telefone")]),t._v(" "),n("v-text-field",{directives:[{name:"mask",rawName:"v-mask",value:["(##) ####-####","(##) #####-####"],expression:"['(##) ####-####', '(##) #####-####']"}],staticClass:"phone-input",attrs:{type:"tel",dense:"","hide-details":"",outlined:""},model:{value:t.editedContact.phone,callback:function(e){t.$set(t.editedContact,"phone",e)},expression:"editedContact.phone"}})],1)],1)],1),t._v(" "),n("v-divider"),t._v(" "),n("v-card-actions",{staticClass:"d-flex justify-end"},[n("v-btn",{attrs:{id:"payment-options-edit-btn-clean",rounded:"",text:"",color:"primary"},on:{click:function(e){return t.closeDialog()}}},[t._v("\n          Cancelar\n        ")]),t._v(" "),n("v-btn",{staticClass:"px-3",attrs:{id:"payment-options-edit-btn-save",disabled:!t.editedContact.name&&!t.editedContact.email&&!t.editedContact.phone,rounded:"",color:"primary"},on:{click:function(e){return t.save()}}},[t._v("\n          Salvar\n        ")])],1)],1)],1)],1)}),[],!1,null,"6cfd77c3",null);e.default=component.exports;j()(component,{VBtn:f.a,VCard:v.a,VCardActions:D.a,VCardText:D.b,VCardTitle:D.c,VCol:C.a,VDialog:x.a,VDivider:I.a,VRow:h.a,VTextField:y.a})},447:function(t,e,n){"use strict";n.r(e);var o={name:"EmptyPage",components:{AddButton:n(219).default}},c=n(62),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"flex justify-center"},[o("link",{attrs:{href:"https://cdn.jsdelivr.net/npm/tailwindcss@2.1.2/dist/tailwind.min.css",rel:"stylesheet"}}),t._v(" "),o("div",{staticClass:"mt-8 mx-auto sm:px-6 lg:px-8"},[o("div",{staticClass:"d-flex flex-column mt-8 justify-center"},[o("img",{staticClass:"mx-0",attrs:{src:n(440),width:"237"}}),t._v(" "),o("h2",{staticClass:"my-3 subtitle-1"},[t._v("\n        Nenhum contato foi criado ainda\n      ")]),t._v(" "),o("add-button",{staticClass:"mx-auto",attrs:{height:40}})],1)])])}),[],!1,null,null,null);e.default=component.exports},448:function(t,e,n){"use strict";n.r(e);n(13),n(11),n(15),n(6),n(20),n(14),n(21);var o=n(198),c=n(2),l=(n(24),n(163),n(280),n(56),n(67)),r=n(437);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var M={name:"ListTable",components:{Tooltip:n(438).default,ConfirmationDialog:r.default},props:{reloadTable:{type:Boolean,required:!0,default:!1}},data:function(){return{confirmationDialog:!1,dialogFunction:function(){},search:"",contacts:[],headers:[{text:"",value:"picture",sortable:!1,width:40},{text:"Contatos",value:"name"},{text:"E-mail",value:"email",sortable:!1},{text:"Telefone",value:"phone",sortable:!1,width:350},{text:"",value:"actions",align:"right",sortable:!1,width:120}],colors:["#fa8d68","#90d26c","#68a0fa","#fab668","#8368fa","#fa68b5","#5fe2c4","#f55a5a"]}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(c.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(l.c)("contacts",["list","searchTerm"])),watch:{list:function(t){this.contacts=t},reloadTable:function(t){t&&(this.contacts=this.list)},searchTerm:function(t){this.search=t}},created:function(){this.contacts=this.list},methods:{openDeleteDialog:function(t){var e=this;this.confirmationDialog=!0,this.dialogFunction=function(){var n=Object(o.a)(e.list);n.splice(n.map((function(t){return t.id})).indexOf(t.id),1),e.$store.commit("contacts/setList",n),e.$nuxt.$emit("active-message","Contato removido","warning",!0)}},randomColors:function(t){return this.colors[(t.id+1)%this.colors.length]},edit:function(t){this.$emit("open-dialog",t)},remove:function(t){var e=Object(o.a)(this.list);e.splice(e.map((function(t){return t.id})).indexOf(t.id),1),this.$store.commit("contacts/setList",e)}}},m=M,j=n(62),f=n(78),v=n.n(f),D=n(453),C=n(410),x=n(501),component=Object(j.a)(m,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("confirmation-dialog",{attrs:{dialog:t.confirmationDialog,"dialog-function":t.dialogFunction},on:{"close-dialog":function(e){t.confirmationDialog=!1}}}),t._v(" "),o("v-data-table",{staticClass:"elevation-0",attrs:{headers:t.headers,items:t.contacts,search:t.search,"hide-default-footer":"","item-class":"teste"},scopedSlots:t._u([{key:"item.picture",fn:function(e){var n=e.item;return[o("v-avatar",{staticClass:"font-weight-bold",attrs:{size:"30",color:t.randomColors(n)}},[o("span",{staticStyle:{color:"white"}},[t._v("\n          "+t._s(n.name?n.name.charAt(0).toUpperCase():"")+"\n        ")])])]}},{key:"item.name",fn:function(e){var n=e.item;return[t._v("\n      "+t._s(n.name)+"\n    ")]}},{key:"item.email",fn:function(e){var n=e.item;return[t._v("\n      "+t._s(n.email)+"\n    ")]}},{key:"item.phone",fn:function(t){var e=t.item;return[o("the-mask",{attrs:{mask:["(##) ####-####","(##) #####-####"],value:e.phone}})]}},{key:"item.actions",fn:function(e){var c=e.item;return[o("tooltip",{attrs:{bottom:""}},[o("v-btn",{attrs:{slot:"button",id:"btn-edit-"+c.id,icon:""},on:{click:function(e){return t.edit(c)}},slot:"button"},[o("img",{staticClass:"mx-1",attrs:{src:n(441),alt:"add",width:"16"}})]),t._v(" "),o("span",{attrs:{slot:"text"},slot:"text"},[t._v("\n          Editar\n        ")])],1),t._v(" "),o("tooltip",{attrs:{bottom:""}},[o("v-btn",{attrs:{slot:"button",id:"btn-remove-"+c.id,icon:""},on:{click:function(e){return t.openDeleteDialog(c)}},slot:"button"},[o("img",{staticClass:"mx-1",attrs:{src:n(442),alt:"add",width:"16"}})]),t._v(" "),o("span",{attrs:{slot:"text"},slot:"text"},[t._v("\n          Remover\n        ")])],1)]}}],null,!0)})],1)}),[],!1,null,null,null);e.default=component.exports;v()(component,{VAvatar:D.a,VBtn:C.a,VDataTable:x.a})},503:function(t,e,n){"use strict";n.r(e);n(13),n(11),n(15),n(6),n(20),n(14),n(21);var o=n(2),c=n(67),l=n(446),r=n(447);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var M={components:{ListTable:n(448).default},name:"IndexPage",comments:{ContactDialog:l.default,EmptyPage:r.default},data:function(){return{contacts:[],dialog:!1,contact:{},reloadTable:!1}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(c.c)("contacts",["list"])),created:function(){var t=this;this.$nuxt.$on("add-new",(function(){t.openDialog()}))},methods:{openDialog:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.contact=t,this.dialog=!0}}},m=M,j=n(62),f=n(78),v=n.n(f),D=n(425),component=Object(j.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("contact-dialog",{attrs:{dialog:t.dialog,item:t.contact},on:{"close-dialog":function(e){t.dialog=!1},"reload-table":function(e){t.reloadTable=!0}}}),t._v(" "),0===t.list.length?n("empty-page"):n("list-table",{attrs:{"reload-table":t.reloadTable},on:{"table-loaded":function(e){t.reloadTable=!1},"open-dialog":t.openDialog}})],1)}),[],!1,null,null,null);e.default=component.exports;v()(component,{ContactDialog:n(446).default,EmptyPage:n(447).default,ListTable:n(448).default}),v()(component,{VContainer:D.a})}}]);