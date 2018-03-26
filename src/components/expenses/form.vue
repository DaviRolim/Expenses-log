<template>
<div>
    <form @submit.prevent="adicionarDespesa">
        <q-input ref="amount" class="my-input" type="number" v-model="expenses.amount" placeholder="R$" />
        <q-input class="my-input" type="text" v-model="expenses.description" placeholder="Descricao" />
        <q-input class="my-input" type="text" v-model="expenses.date" placeholder="Data" />
        <q-btn color="primary" label="Salvar" class="my-button" />
    </form>
</div>
</template>

<script>
import {mapActions} from 'vuex'
import moment from 'moment'
import { uid } from 'quasar'

export default {
  data () {
    return {
      expenses: {
        id: '',
        amount: '',
        description: '',
        date: moment().format('DD/MM/YYYY'),
        done: false
      }
    }
  },
  methods: {
    submit () {
      // this.$store.commit('example/ADD_EXPENSE', this.expenses)
      console.log(this.$store.state)
    },
    ...mapActions('example', [
      'addDespesa'
    ]),
    adicionarDespesa () {
      const cloned = JSON.parse(JSON.stringify(this.expenses))
      cloned.id = uid()
      this.addDespesa(cloned)
      // same as
      // this.$store.dispatch('example/addDespesa', this.expenses)
      this.reset()
    },
    reset () {
      this.expenses.amount = ''
      this.expenses.description = ''
      this.expenses.date = moment().format('DD/MM/YYYY')
      this.$refs.amount.focus()
    }
  }
}
</script>

<style>
    .my-input{
        margin-bottom: 20px;
    }
    .my-button {
        width: 100%;
    }
</style>
