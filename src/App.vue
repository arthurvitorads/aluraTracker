<template>
  <main class="columns is-gapless is-multiline">
    <div class="column is-one-quarter">
      <BarraLateral />
    </div>
    <div class="column is-three-quarter">
      <Formulario @salvarTarefa="salvarTarefa"/>
      <div class="lista">
          <Tarefa class="card-informacao" 
          v-for="(tarefa, index) in tarefas" v-bind:key="index" :tarefa="tarefa"/>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BarraLateral from './components/BarraLateral.vue'
import Formulario from './components/Formulario.vue'
import Tarefa from './components/Tarefa.vue'
import ITarefa from './interfaces/ITarefa'

export default defineComponent({
  name: 'App',
  components: {
    BarraLateral,
    Formulario,
    Tarefa
  },

  data(){
    return{
      tarefas: [] as ITarefa []
    }
  },
  methods: {
    salvarTarefa(tarefas: ITarefa){
      this.tarefas.push(tarefas)
    }
  }
});
</script>

<style>
.lista {
  padding: 1em;
}

.card-informacao {
    background-color: #FAF0CA;
}
</style>
