<template>
    <table class="table is-fullwidth">
        <thead>
            <tr>
                <th>ID</th>
                <th>Nome</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="projeto in projetos" :key="projeto.id">
                <td>{{ projeto.id }}</td>
                <td>{{ projeto.nome }}</td>
            </tr>
        </tbody>
    </table>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'tabelaProjetos',
    props: {
        projetos: {
            type: Array,
            required: true
        }
    }
})
</script>