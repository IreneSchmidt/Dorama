import { useAvaliacaoStore } from '../controller/store/avaliacaoStore';
import { AvaliacaoRepository } from '../model/repositories/avaliacaoRepository';

export const salvarAvaliacao = async (avaliacao) => {
  const store = useAvaliacaoStore();
  const repository = new AvaliacaoRepository();

  // Verifica se o modo MOCK está ativado
  if (import.meta.env.VITE_MOCK === "true") {
    store.adicionarAvaliacao(avaliacao); // Simula adicionar avaliação localmente
    return;
  }

  // Adiciona avaliação ao estado local da aplicação
  store.adicionarAvaliacao(avaliacao);

  // Salva a avaliação na API através do Repository
  try {
    await repository.adicionarAvaliacao(avaliacao);
  } catch (error) {
    console.error('Erro ao salvar avaliação:', error);
  }
};
