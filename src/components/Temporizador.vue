<template>
    <div class="column">
      <div class="is-flex is-align-items-center is-justify-content-space-between" id="test">
      <Cronometro :tempoEmSegundos ="tempoEmSegundos"/>
      <BotaoTemporizador
      :descricao = "descricao"
      @atualizaTempoEmSegundos = "updateTemp"
      @clicouBotaoFinalizar = "buttonClick"/>
      </div>
    </div>
</template>

<script>
import { defineComponent } from 'vue';
import Cronometro from './Cronometro.vue';
import BotaoTemporizador from './BotaoTemporizador.vue';

export default defineComponent({
    name: 'Temporizador',
    emits: ['finalizouTemporizador', 'atualizaDescricao'],
    components: {
      Cronometro: Cronometro,
      BotaoTemporizador: BotaoTemporizador
    },
    props: {
      descricao: {
        type: String,
        default: ''
      }
    },
    data() {
      return {
        tempoEmSegundos: 0,
        finalizou: false,
      }
    },
    methods: {
      updateTemp(newtemp) {
        this.tempoEmSegundos = newtemp
      },
      buttonClick(button) {
      try {
        this.finalizou = button
        if (this.finalizou) {
          this.$emit('finalizouTemporizador', this.tempoEmSegundos)
          this.$emit('atualizaDescricao', true)
        }
        this.tempoEmSegundos = 0
      } catch {
        alert("Erro interno não esperado")
      }
    }
    }
    
})
</script>

<style scoped>
#test {
    width: 280px;
}
</style>