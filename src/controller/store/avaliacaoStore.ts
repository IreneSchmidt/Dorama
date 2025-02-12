// store/avaliacaoStore.js (ou .ts)
import { defineStore } from 'pinia';

export const useAvaliacaoStore = defineStore('avaliacao', {
  state: () => ({
    avaliacoes: []  // Lista de avaliações
  }),
  actions: {
    adicionarAvaliacao(avaliacao) {
      this.avaliacoes.push(avaliacao);  // Adiciona a avaliação à lista
    }
  }
});
