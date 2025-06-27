<template>
    <button class="button" @click="iniciar" :disabled="cronometroRodando">
        <span class="icon">
            <i class="fas fa-play"></i>
        </span>
        <span>play</span>
        </button>
        <button class="button" @click="finalizar" :disabled="!cronometroRodando">
          <span class="icon">
            <i class="fas fa-stop"></i>
          </span>
          <span>stop</span>
        </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
    name: 'BotaoTemporizador',
    emits: ['atualizaTempoEmSegundos', 'clicouBotaoFinalizar', 'atualizaDescricao'],
    data () {
        return {
            tempoEmSegundos: 0,
            cronometro: 0,
            cronometroRodando: false,
            finalizou: false,
            descricaoLimpa: false
        }
    },
    props: {
      descricao: {
        type: String,
        default: ''
      }
    },
    methods: {
        iniciar () {
            if(this.descricao.length != 0){
                this.cronometroRodando = true
                this.cronometro = setInterval(() => {
                this.tempoEmSegundos += 1     
                this.$emit('atualizaTempoEmSegundos', this.tempoEmSegundos)   
                }, 1000)
            }else{
                alert("Insira a tarefa para iniciar!")
            }
        },
        finalizar () {
                this.cronometroRodando = false
                this.finalizou = true
                this.descricaoLimpa = true
                this.$emit('clicouBotaoFinalizar', this.finalizou)
                this.$emit("atualizaDescricao", this.descricaoLimpa)
                clearInterval(this.cronometro)
            }
        }
})
</script>