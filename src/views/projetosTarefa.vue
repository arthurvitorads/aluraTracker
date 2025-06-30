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
            <TabelaProjetos :projetos="projetos"/>
        </form>
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import IProjetos from '../interfaces/IProjetos'
import TabelaProjetos from '@/components/tabelaProjetos.vue';
export default defineComponent({
    name: 'projetosTarefa',

    data(){
        return {
            nomeDoProjeto: '',
            projetos: [] as IProjetos []
        }
    },

    components: {
        TabelaProjetos: TabelaProjetos
    },

    methods: {
        salvar(){
            const projetos : IProjetos = {
                nome: this.nomeDoProjeto,
                id: new Date().toISOString()
            }
            this.projetos.push(projetos)
            this.nomeDoProjeto = ''
            console.log(projetos)
        }
    }
})


</script>


<style scoped>
.projetos {
    padding: 20px;
}
</style>