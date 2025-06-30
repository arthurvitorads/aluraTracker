<template>
    <section class="projetos">
        <h1 class="title">Projetos</h1>
        <form @submit.prevent="salvar">
            <div class="field">
                <label for="nomeDoProjeto" class="label">
                    <input type="text" class="input" id="nomeDoProjeto" v-model="nomeDoProjeto">
                </label>
            </div>

            <div class="field">
                <button class="button" type="submit">
                    Salvar
                </button>
            </div>
            <TabelaProjetos :projetos="projetos" @selecionarProjeto="selecionarProjeto" />
        </form>
    </section>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import TabelaProjetos from '@/components/tabelaProjetos.vue';
import { useStore } from '@/store';
import IProjeto from '@/interfaces/IProjetos' // Corrigir nome do import
export default defineComponent({
    name: 'projetosTarefa',
    events: ['salvarProjeto'],
    data() {
        return {
            nomeDoProjeto: '',
        }
    },

    components: {
        TabelaProjetos: TabelaProjetos
    },

    methods: {
        salvar() {
            this.$emit('salvarProjeto', this.nomeDoProjeto)
            this.store.commit('ADICIONA_PROJETO', this.nomeDoProjeto)
            this.nomeDoProjeto = ''

        },
        selecionarProjeto(projeto: IProjeto) {
            this.store.commit('SELECIONAR_PROJETO', projeto)
            this.$router.push('/')
        }

    },
    setup() {
        const store = useStore()
        return {
            store,
            projetos: computed(() => store.state.projetos)
        }
    }

})


</script>


<style scoped>
.projetos {
    padding: 20px;
}
</style>