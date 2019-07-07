<template>
  <q-layout view="hHh lPr fFf">
    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
          icon="menu"
        />
        <q-toolbar-title>
          SIBRI
          <span slot="subtitle">
            Sistema de Inscrição e Baixa de Restritivos e Impeditivos.
          </span>
        </q-toolbar-title>
      </q-toolbar>
      <q-tabs align="left">
        <q-route-tab to="/" label="Home" />
        <q-route-tab to="/pessoa" label="Cadastro de Pessoa" />
        <q-route-tab to="/about" label="Sobre" />
      </q-tabs>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      bordered
      content-class="bg-grey-2"
    >
      <q-list>
        <q-item-label header>Navigation</q-item-label>
        <q-item to="/" exact>
          <q-item-section avatar>
            <q-icon name="home" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Home</q-item-label>
          </q-item-section>
        </q-item>
        <q-item to="/pessoa" exact>
          <q-item-section avatar>
            <q-icon name="far fa-edit" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Cadastro de Pessoa</q-item-label>
          </q-item-section>
        </q-item>
        <q-item to="/about" exact>
          <q-item-section avatar>
            <q-icon name="info" />
          </q-item-section>
          <q-item-section>
            <q-item-label>About</q-item-label>
          </q-item-section>
        </q-item>       
      </q-list>
    </q-drawer>
    <q-page-container>
      <router-view />
    </q-page-container>
    <q-footer elevated class="bg-grey-8 text-white">
      <q-toolbar>
        <q-icon name="fab fa-vuejs" title="Vue Js"/>
        <q-icon name="fab fa-node-js" title="Node Js"/>
        <q-icon name="fab fa-js-square" title="Js"/>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script>
export default {
  name: 'LayoutDefault',
  data () {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop
    }
  }
}
</script>
