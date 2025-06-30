<template>
    <nav class="panel mt-5">
        <ul>
            <li>

                <router-link to="/" class="link">
                    <i class="fas fa-tasks" ></i>
                    tarefas
                </router-link>
            </li>
            <li>
                <router-link to="/projetos" class="link">
                    <i class="fas fa-project-diagram"></i>
                    projetos
                </router-link>

            </li>
        </ul>
    </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'navLateral'
})
</script>

<style scoped>

.panel li {
    margin: 8px 0;
}
.link {
    color: #fff;
}
.link:hover {
    color: #FAF0CA;
}
.link.router-link-active {
    color: #FAF0CA;
}

</style>