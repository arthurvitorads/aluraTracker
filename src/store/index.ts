import IProjetos from '@/interfaces/IProjetos'
import { InjectionKey } from 'vue'
import { createStore, Store, useStore as vuexUseStore } from 'vuex'

interface Estado {
  projetos: IProjetos[]
  projetoSelecionado: IProjetos | null
}

export const key: InjectionKey<Store<Estado>> = Symbol()

export const store = createStore<Estado>({
  state: {
    projetos: [],
    projetoSelecionado: null
  },
  mutations: {
    'ADICIONA_PROJETO'(state, nomeDoProjeto: string) {
      const novoProjeto = {
        id: new Date().toISOString(),
        nome: nomeDoProjeto
      } as IProjetos
      state.projetos.push(novoProjeto)
    },
    'SELECIONAR_PROJETO'(state, projeto: IProjetos) {
      state.projetoSelecionado = projeto
    }
  }
})

export function useStore(): Store<Estado> {
  return vuexUseStore(key)
}
