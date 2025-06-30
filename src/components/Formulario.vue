<template>
  <div class="box formulario">
    <div class="columns">
      <div class="column is-6" role="form" aria-label="Formulário para criação de uma nova tarefa">
        <input type="text" class="input" placeholder="Qual tarefa você deseja iniciar?" v-model="descricao" />
      </div>
      <div class="column is-3">
        <div class="select">
          <select v-model="idProjeto">
            <option value="">Selecione o projeto</option>
            <option :value="projeto.id" v-for="projeto in projetos" :key="projeto.id">
              {{ projeto.nome }}
            </option>
          </select>
        </div>
      </div>
      <div class="column">
        <Temporizador @aoTemporizadorFinalizado="finalizarTarefa" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Temporizador from './Temporizador.vue'
import { useStore } from "vuex";
import { key } from "@/store";
import ITarefa from "@/interfaces/ITarefa";

export default defineComponent({
  name: "Formulário",
  emits: ['aoSalvarTarefa'],
  components: {
    Temporizador
  },
  data() {
    return {
      descricao: '',
      idProjeto: ''
    }
  },
  methods: {
    finalizarTarefa(tempoDecorrido: number): void {
      const projetoSelecionado = this.store.state.projetos.find(
        proj => proj.id === this.idProjeto
      )

      if (!projetoSelecionado) {
        alert('Selecione um projeto antes de salvar a tarefa!')
        return
      }

      const tarefa: ITarefa = {
        descricao: this.descricao,
        duracaoEmSegundos: tempoDecorrido,
        projeto: projetoSelecionado,
        projetoId: this.idProjeto
      }

      this.$emit('aoSalvarTarefa', tarefa)

      this.descricao = ''
      this.idProjeto = ''
    }
  },
  computed: {
    projetos() {
      return this.store.state.projetos
    }
  },
  setup() {
    const store = useStore(key)
    return {
      store
    }
  }
});
</script>

<style>
.formulario {
  color: var(--texto-primario);
  background-color: var(--bg-primario);
}
</style>