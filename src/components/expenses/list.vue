<template>
    <div>
        <div class="expense" v-for="(item, index) in list" :key="index" @click="toggle(item)">
            <p :class="{ done: item.done }">{{ item.date }} - R$ {{ item.amount }}</p>
            <p :class="{ done: item.done }">{{ item.description }}</p>
            <q-btn href="#" color="red" class="removeLink" @click.prevent="askRemove(item)">REMOVER</q-btn>
        </div>
    </div>
</template>

<script>
export default {
  computed: {
    list () {
      return this.$store.state.example.state.Expenses.list
    }
  },
  methods: {
    askRemove (expense) {
      this.$q.dialog({
        title: 'Confirm',
        message: 'Deseja realmente excluir?',
        ok: 'Sim',
        cancel: 'Não'})
        .then(() => {
          this.$q.notify({message: 'Item excluido com sucesso', type: 'positive'})
          this.remove(expense)
        }).catch(() => {
          this.$q.notify('Life goes on')
        })
    },
    remove (expense) {
      this.$store.commit('example/REMOVE_EXPENSE', expense)
    },
    toggle (expense) {
      expense.done = !expense.done
    }
  }
}
</script>

<style>
    .done {
      text-decoration: line-through;
      color: #ccc;
    }
    .expense {
        border-bottom: #999 1px solid;
        position: relative;
        cursor: pointer;
    }
    .removeLink {
      color: #c00000;
      position: absolute;
      right: 0;
      bottom: 10px;
      font-size: 0.8em;
    }
</style>
