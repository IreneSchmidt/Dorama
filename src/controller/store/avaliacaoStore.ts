import { defineStore } from 'pinia';

const generateFakeAvaliacoes = (doramas: any[]) => {
  return doramas.map(dorama => {
    return {
      doramaId: dorama.Id,
      avaliacao: Math.floor(Math.random() * 10) + 1, // Gera uma nota de 1 a 5
      usuario: `Usuário${Math.floor(Math.random() * 100) + 1}`, // Nome de usuário aleatório
      comentario: `Comentário aleatório sobre o dorama ${dorama.Titulo}.`, // Comentário aleatório
    };
  });
};

export const useAvaliacaoStore = defineStore('avaliacao', {
  state: () => ({
    avaliacoes: []  // Lista de avaliações
  }),
  actions: {
    adicionarAvaliacao(avaliacao: any) {
      this.avaliacoes.push(avaliacao);  // Adiciona a avaliação à lista
    },
    // Método para adicionar avaliações falsas aos doramas
    gerarAvaliacoesFalsas(doramas: any[]) {
      const fakeAvaliacoes = generateFakeAvaliacoes(doramas);
      fakeAvaliacoes.forEach(avaliacao => {
        this.adicionarAvaliacao(avaliacao);
      });
    }
  }
});
