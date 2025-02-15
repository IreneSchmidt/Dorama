import type { IAvaliacao } from '../model/Avaliacao';
import AvaliacaoRepository from '../model/repositories/avaliacaoRepository';

export default class AvaliacaoController {
  avaliacaoRepository;
  constructor() {
    this.avaliacaoRepository = new AvaliacaoRepository();
  }

  async getAll() {
    return await this.avaliacaoRepository.fetchAllAvaliacao();
  }

  async create(form: IAvaliacao) {
    if (import.meta.env.VITE_MOCK === "true") return;
    return await this.avaliacaoRepository.createAvaliacao(form);
  }

  async update(Id: string, item: IAvaliacao) {
    if (import.meta.env.VITE_MOCK === "true") return;
    return await this.avaliacaoRepository.updateAvaliacao(Id, item);
  }

  async delete(Id: string) {
    if (import.meta.env.VITE_MOCK === "true") return;
    return await this.avaliacaoRepository.deleteAvaliacao(Id);
  }
}
