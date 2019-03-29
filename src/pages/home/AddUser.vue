<template>
  <q-page padding>
    <!-- content -->
    <div class="row">
      <form @submit.prevent.stop="searchUser" @reset.prevent.stop="onReset" class="q-gutter-md">
      <div class="col-12">
        <div class="row" padding>
          <div class="text-h4 col-12 text-primary">
            Ola,<br>
            Prontos para encontrar a sua maquina?
          </div>
          <div class="text-h6 q-mt-xl col-12 text-primary">
            Por favor preecher os seus dados pessoais
          </div>
          <q-input ref="name" class="col-12" v-model="name" label="Nome Completo"
          lazy-rules
          :rules="[ val => val && val.length > 0 || 'Campo obrigatorio']"
          />
          <q-input ref="email" type="email" class="col-12" v-model="email" label="exemplo@gmail.com"
          lazy-rules
          :rules="[ val => val && val.length > 0 || 'Campo obrigatorio']"
          />
          <q-input
            ref="number"
            class="col-12" v-model="number" maxlength="9" label="Contacto"
            lazy-rules
            :rules="[ val => val.length == 9 || 'O contacto de tre 9 digitos' ]"
          />
          <q-input
          ref="money"
          class="col-12" v-model="money" label="Montante Disponivel"
          lazy-rules
          :rules="[ val => val && val.length > 0 || 'Campo obrigatorio']"
          />
          <div class="text-h6 q-mt-md col-12 text-grey">
            modalidade de pagamento
          </div>
          <div class="q-gutter-sm">
            <q-checkbox  @click.native="check1form()" v-model="check1" label="Pagemento directo" color="primary" />
            <q-checkbox  @click.native="check2form()" v-model="check2" label="Leasing" color="primary" />
          </div>
        </div>
        <div class="row q-mt-md" >
            <q-btn-group push class="col-12">
              <q-btn type="submit" class="col-6" push color="primary" label="Save" />
              <q-btn class="col-6" push color="red" type="reset" label="Limpar" />
            </q-btn-group>
        </div>
      </div>
    </form>
  </div>
  </q-page>
</template>

<script>
import axios from 'axios'
export default {
  // name: 'PageName',

  data () {
    return {
      text: '',
      check1: false,
      check2: false,
      modalidade: '',
      name: '',
      email: '',
      number: '',
      money: 0
    }
  },
  methods: {
    check1form: function () {
        this.check2 = false
    },
    check2form: function () {
        this.check1 = false
    },
    searchUser: function () {
      /*if(this.money == 0 || this.money < 100000){
        this.onSubmit()
        if (this.$refs.name.hasError || this.$refs.email.hasError || this.$refs.money.hasError || this.$refs.number.hasError) {
          this.formHasError = true
        }else{
          console.log('asdasda')
          const url = 'http://cdnstdbk.hit.ng/endpoints/salvar_cliente.php'
          const urlTest ='https://jsonplaceholder.typicode.com/users'
          if(check1 == true){
            const modalidade = 'Pagamento directo'
          }else{
            const modalidade = 'Leasing'
          }
          axios.get(url, {
            params: {
              nome: this.nome,
              email: this.email,
              contacto: this.number,
              motante: this.money,
              modalidade: modalidade
            }
          })
          .then(function (response) {
            // handle success
            console.log(response.data);
          })
          .catch(function (error) {
            // handle error
            console.log(error);
          })
          .then(function () {
            // always executed
          })
        }
      }*/
      this.$refs.name.validate()
      this.$refs.email.validate()
      this.$refs.number.validate()
      this.$refs.money.validate()

      if (this.$refs.name.hasError || this.$refs.email.hasError || this.$refs.money.hasError || this.$refs.number.hasError) {
        this.formHasError = true
      }
      else if (this.check1 !== true && check2 !== true) {
        this.$q.notify({
          color: 'negative',
          message: 'Selecione a forma de pagamento'
        })
      }
      else {
        const url = 'http://cdnstdbk.hit.ng/endpoints/salvar_cliente.php'
          const urlTest ='https://jsonplaceholder.typicode.com/users'
          if(this.check1 == true){
            this.modalidade = 'Pagamento directo'
          }else{
            this.modalidade = 'Leasing'
          }
          axios.get(url, {
            params: {
              nome: this.nome,
              email: this.email,
              contacto: this.number,
              motante: this.money,
              modalidade: this.modalidade
            }
          })
          .then(function (response) {
            // handle success
            console.log(response.data);
          })
          .catch(function (error) {
            // handle error
            console.log(error);
          })
          .then(function () {
            // always executed
          })
      }
    },
    onSubmit () {
      this.$refs.name.validate()
      this.$refs.email.validate()
      this.$refs.number.validate()
      this.$refs.money.validate()
    },
    resetValidation(){
      this.$refs.name.resetValidation()
      this.$refs.email.resetValidation()
      this.$refs.number.resetValidation()
      this.$refs.money.resetValidation()
    },
    onReset () {
      this.name = ''
      this.email = ''
      this.number = ''
      this.money = 0
      this.resetValidation()
    },
  
  },
  mounted() {
    
  },
}
</script>

<style lang="stylus">
</style>
