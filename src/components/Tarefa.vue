<template>
  <div class="box has-text-height-bold">
    <div class="columns">
      <div class="column is-7">
        {{ tarefa.descricao }}
      </div>

      <div class="column is-3">
        <Cronometro :tempoEmSegundos="tarefa.duracaoEmSegundos" />
      </div>
    </div>
  </div>
</template>


<script lang="ts">
import { defineComponent, PropType} from 'vue'
import Cronometro from './Cronometro.vue'
import ITarefa from './interfaces/ITarefa'

export default defineComponent({
    name: 'Tarefa',
    components:{
        Cronometro: Cronometro
    },
    props:{
      tarefa: {
            type: Object as PropType<ITarefa>,
            required: true
      }
    }
})

</script>