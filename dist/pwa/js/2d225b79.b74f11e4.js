(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["2d225b79"],{e61c:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-page",{attrs:{padding:""}},[a("div",{staticClass:"row"},[a("form",{staticClass:"q-gutter-md",on:{submit:function(t){return t.preventDefault(),t.stopPropagation(),e.searchUser(t)},reset:function(t){return t.preventDefault(),t.stopPropagation(),e.onReset(t)}}},[a("div",{staticClass:"col-12"},[a("div",{staticClass:"row",attrs:{padding:""}},[a("div",{staticClass:"text-h4 col-12 text-primary"},[e._v("\n          Ola,"),a("br"),e._v("\n          Prontos para encontrar a sua maquina?\n        ")]),a("div",{staticClass:"text-h6 q-mt-xl col-12 text-primary"},[e._v("\n          Por favor preecher os seus dados pessoais\n        ")]),a("q-input",{ref:"name",staticClass:"col-12",attrs:{label:"Nome Completo","lazy-rules":"",rules:[function(e){return e&&e.length>0||"Campo obrigatorio"}]},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}}),a("q-input",{ref:"email",staticClass:"col-12",attrs:{type:"email",label:"exemplo@gmail.com","lazy-rules":"",rules:[function(e){return e&&e.length>0||"Campo obrigatorio"}]},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}}),a("q-input",{ref:"number",staticClass:"col-12",attrs:{maxlength:"9",label:"Contacto","lazy-rules":"",rules:[function(e){return 9==e.length||"O contacto de tre 9 digitos"}]},model:{value:e.number,callback:function(t){e.number=t},expression:"number"}}),a("q-input",{ref:"money",staticClass:"col-12",attrs:{label:"Montante Disponivel","lazy-rules":"",rules:[function(e){return e&&e.length>0||"Campo obrigatorio"}]},model:{value:e.money,callback:function(t){e.money=t},expression:"money"}}),a("div",{staticClass:"text-h6 q-mt-md col-12 text-grey"},[e._v("\n          modalidade de pagamento\n        ")]),a("div",{staticClass:"q-gutter-sm"},[a("q-checkbox",{attrs:{label:"Pagemento directo",color:"primary"},nativeOn:{click:function(t){return e.check1form()}},model:{value:e.check1,callback:function(t){e.check1=t},expression:"check1"}}),a("q-checkbox",{attrs:{label:"Leasing",color:"primary"},nativeOn:{click:function(t){return e.check2form()}},model:{value:e.check2,callback:function(t){e.check2=t},expression:"check2"}})],1)],1),a("div",{staticClass:"row q-mt-md"},[a("q-btn-group",{staticClass:"col-12",attrs:{push:""}},[a("q-btn",{staticClass:"col-6",attrs:{type:"submit",push:"",color:"primary",label:"Save"}}),a("q-btn",{staticClass:"col-6",attrs:{push:"",color:"red",type:"reset",label:"Limpar"}})],1)],1)])])])])},n=[],i=(a("7f7f"),a("bc3a")),o=a.n(i),r={data:function(){return{text:"",check1:!1,check2:!1,modalidade:"",name:"",email:"",number:"",money:0}},methods:{check1form:function(){this.check2=!1},check2form:function(){this.check1=!1},searchUser:function(){if(this.$refs.name.validate(),this.$refs.email.validate(),this.$refs.number.validate(),this.$refs.money.validate(),this.$refs.name.hasError||this.$refs.email.hasError||this.$refs.money.hasError||this.$refs.number.hasError)this.formHasError=!0;else if(!0!==this.check1&&!0!==check2)this.$q.notify({color:"negative",message:"Selecione a forma de pagamento"});else{var e="http://cdnstdbk.hit.ng/endpoints/salvar_cliente.php";1==this.check1?this.modalidade="Pagamento directo":this.modalidade="Leasing",o.a.get(e,{params:{nome:this.nome,email:this.email,contacto:this.number,motante:this.money,modalidade:this.modalidade}}).then(function(e){console.log(e.data)}).catch(function(e){console.log(e)}).then(function(){})}},onSubmit:function(){this.$refs.name.validate(),this.$refs.email.validate(),this.$refs.number.validate(),this.$refs.money.validate()},resetValidation:function(){this.$refs.name.resetValidation(),this.$refs.email.resetValidation(),this.$refs.number.resetValidation(),this.$refs.money.resetValidation()},onReset:function(){this.name="",this.email="",this.number="",this.money=0,this.resetValidation()}},mounted:function(){}},l=r,c=a("2877"),m=Object(c["a"])(l,s,n,!1,null,null,null);t["default"]=m.exports}}]);