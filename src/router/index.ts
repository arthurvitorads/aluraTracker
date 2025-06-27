import TarefaHome from "@/views/tarefaHome.vue";
import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

const rotas: RouteRecordRaw[] = [{
    path: '/',
    name: 'home',
    component: TarefaHome
}]

const router = createRouter({
    history: createWebHashHistory(),
    routes: rotas
})

export default router