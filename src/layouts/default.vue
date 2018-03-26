<template>
  <q-layout view="lHh Lpr lFf">
    <q-layout-header>
      <q-toolbar
        color="primary"
        :glossy="$q.theme === 'mat'"
        :inverted="$q.theme === 'ios'"
      >
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
        >
          <q-icon name="menu" />
        </q-btn>

        <q-toolbar-title>
          Despesas em Dinheiro Vivo
          <div slot="subtitle">Running on Quasar v{{ $q.version }}</div>
        </q-toolbar-title>
      </q-toolbar>
    </q-layout-header>
    <div style="padding: 60px">
      <cc-form></cc-form>
      <hr v-if="list.length > 0">
      <cc-list></cc-list>
    </div>

  </q-layout>
</template>

<script>
import CcForm from '../components/expenses/form.vue'
import CcList from '../components/expenses/list.vue'
export default {
  components: { CcForm, CcList },
  computed: {
    list () {
      return this.$store.state.example.state.Expenses.list
    }
  }
}
</script>

<style scoped>

</style>
