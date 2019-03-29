<template>
  <q-page padding>
    <!-- content -->
    
    <div class="row justify-center q-ma-xl">
      <div class="col-3">
        <q-img
            src="/statics/Imagens/semafuro.png"
          />
      </div>
    </div>
    <div class="row justify-center q-ma-xl">
      <div class="col-10">
        <q-separator class="separator-no-cars" color="primary" inset />
      </div>
    </div>
    <div class="row justify-center q-ma-md">
      <div class="col-8">
        <div class="text-body1 text-center">
          Parece que não temos uma máquina à sua altura.
        </div>
      </div>
    </div>
    <div class="row justify-center q-ma-xl">
      <div class="col-3">
        <div class="row">
          <q-btn @click.native="backPage()" class="col-12" color="primary" label="Voltar" />
        </div>
      </div>
    </div>
    

  </q-page>
</template>

<script>
export default {
  // name: 'PageName',
  methods: {
    backPage: function () {
      this.$router.go(-1)
    },
  }
}
</script>

<style lang="stylus">
.separator-no-cars
  height 5px !important
</style>

