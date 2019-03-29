<template>
  <q-page padding>
    <!-- content -->
    <div class="row">
    <div class="col-12">
      <div class="row" padding>
        <div class="text-h4 col-12 text-primary">
          Ola,<br>
          Prontos para encontrar a sua maquina?
        </div>
        <div class="text-h6 q-mt-xl col-12 text-primary">
          Por favor preecher os seus dados pessoais
        </div>
        <q-input class="col-12" v-model="name" label="Nome Completo" />
        <q-input class="col-12" v-model="email" label="exemplo@gmail.com" />
        <q-input class="col-12" v-model="number" label="Contacto" />
        <q-input class="col-12" v-model="money" label="Montante Disponivel" />
        <div class="text-h6 q-mt-md col-12 text-grey">
          modalidade de pagamento
        </div>
         <div class="q-gutter-sm">
          <q-checkbox v-model="check1" label="Pagemento directo" color="primary" />
          <q-checkbox v-model="check2" label="Leasing" color="primary" />
        </div>
      </div>
      <div class="row q-mt-md" >
           <q-btn-group push class="col-12">
            <q-btn class="col-6" push color="primary" label="Pesquisar" icon="search" />
            <q-btn class="col-6" push color="red" label="Limpar" />
          </q-btn-group>
      </div>
    </div>
  </div>
  </q-page>
</template>

<script>
export default {
  // name: 'PageName',

  data () {
    return {
      text: '',
      check1: '',
      check2: '',
      name: '',
      email: '',
      number: '',
      money: ''
    }
  }
}
</script>

<style lang="stylus">
</style>
