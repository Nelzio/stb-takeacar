<template>
  <q-layout view="hHh Lpr fFf"> <!-- Be sure to play with the Layout demo on docs -->

    <!-- (Optional) The Header -->
    <!--<q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          round
          dense
          icon="menu"
          @click="leftDrawer = !leftDrawer"
        />
        <q-toolbar-title>
          Header
        </q-toolbar-title>
      </q-toolbar>
    </q-header>-->

    <!-- (Optional) The Footer -->
    <q-footer>
      
    </q-footer>

    <!-- (Optional) A Drawer; you can add one more with side="right" or change this one's side -->
    <q-drawer
      v-model="leftDrawer"
      side="left"
      bordered
      content-class="bg-primary text-white"
    >
      <!-- QScrollArea is optional -->
      <q-scroll-area class="fit q-pa-sm">
        <!-- Content here -->
          <div class="row justify-end">
            <div class="col-5">
              <q-img
                src="/statics/Imagens/stbmz.png"
              />
            </div>
          </div>
          <div class="text-h6 text-right">
            Seguindo em frente mais rápido e no conforto.
          </div>
      </q-scroll-area>
      <footer class="footer-img">
        <div class="col-12">
          <q-img
            src="/statics/Imagens/Jeep.png"
          />
        </div>
      </footer>
      
    </q-drawer>
    <q-page-container>
      <!-- This is where pages get injected -->
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
export default {
  // name: 'LayoutName',

  data () {
    return {
      leftDrawer: true
    }
  }
}
</script>
<style lang="stylus">
.footer-img
  margin-top -15rem

</style>

