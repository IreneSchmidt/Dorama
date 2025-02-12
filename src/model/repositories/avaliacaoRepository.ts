import { Avaliacao } from '../Avaliacao';
import { enviarAvaliacaoParaApi } from '../requires/api';

export class AvaliacaoRepository {
  private avaliacoes: Avaliacao[] = [];

  // Método assíncrono para adicionar uma avaliação
  async adicionarAvaliacao(avaliacao: Avaliacao): Promise<void> {
    avaliacao.data = new Date().toISOString();
    this.avaliacoes.push(avaliacao);  // Armazena a avaliação localmente

    // Tenta enviar a avaliação para a API
    try {
      await enviarAvaliacaoParaApi(avaliacao);
    } catch (error) {
      console.error('Erro ao enviar avaliação para API:', error);
    }
  }

  // Método para obter todas as avaliações
  obterAvaliacoes(): Avaliacao[] {
    return this.avaliacoes;
  }
}
