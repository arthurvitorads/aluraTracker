<template>
  <div class="box">
    <div class="columns is-flex is-align-items-center">
      <div class="column is-8" role="form" aria-label="Formulário para criação de uma nova tarefa">
        <input type="text" class="input" v-model="descricao" placeholder="Insira a tarefa para inciar: "/>
      </div>
      <div class="columns">
        <Temporizador :descricao="descricao" 
        @finalizouTemporizador="finalizarTarefa"
        @atualizaDescricao="descricao = ''"/> 
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Temporizador from "./Temporizador.vue";

export default defineComponent({
  name: "Formulário",
  data(){
    return {
      descricao: ''
    }
  },
  components: {
    Temporizador: Temporizador
  },
  methods: {
    finalizarTarefa(tempoDecorrido: string):void{
      console.log(this.descricao)

    }
  }
});

</script>