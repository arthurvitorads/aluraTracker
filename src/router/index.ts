import ProjetosTarefa from "@/views/projetosTarefa.vue";
import TarefaHome from "@/views/tarefaHome.vue";
import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

const rotas: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'home',
        component: TarefaHome
    },
    {
        path: '/projetos',
        name: 'projetos',
        component: ProjetosTarefa
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes: rotas
})

export default router