import IProjetos from '@/interfaces/IProjetos'
import { InjectionKey } from 'vue'
import { createStore, Store } from 'vuex'

interface Estado {
    projetos: IProjetos []
}

export const key: InjectionKey<Store<Estado>> = Symbol()

export const store = createStore<Estado>({
    state: {
        projetos: [
            {
                id: new Date().toISOString(),
                nome: 'Projeto1'
            },
            {
                id: new Date().toISOString(),
                nome: 'Projeto2'
            },
            {
                id: new Date().toISOString(),
                nome: 'Projeto3'
            }
        ]
    }
})