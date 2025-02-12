import type { IDorama } from '../model/Dorama';
import DoramaRepository from '../model/repositories/DoramaRepository';

export default class DoramaController {
  private doramaRepository: DoramaRepository;

  constructor() {
    this.doramaRepository = new DoramaRepository();
  }

  async getAll() {
    if (import.meta.env.VITE_MOCK === "true") return [];  // Simulando dados no modo mock
    return await this.doramaRepository.fetchAllDorama();
  }

  async create(form: IDorama) {
    if (import.meta.env.VITE_MOCK === "true") return; // Simulando criação no modo mock
    if (!form.Titulo.trim()) {
      throw new Error('O título do dorama não pode ser vazio.');
    }
    return await this.doramaRepository.createDorama(form);
  }

  async update(Id: string, item: IDorama) {
    if (import.meta.env.VITE_MOCK === "true") return; // Simulando atualização no modo mock
    if (!Id.trim()) {
      throw new Error('Dorama inválido.');
    }
    return await this.doramaRepository.updateDorama(Id, item);
  }

  async delete(Id: string) {
    if (import.meta.env.VITE_MOCK === "true") return; // Simulando deleção no modo mock
    if (!Id.trim()) {
      throw new Error('Dorama inválido.');
    }
    return await this.doramaRepository.deleteDorama(Id);
  }

  async buscarIdPorNome(nomeDorama: string) {
    if (import.meta.env.VITE_MOCK === "true") return { Id: "mock-id", Titulo: nomeDorama }; // Retorna dados mock
    if (!nomeDorama.trim()) {
      throw new Error('O nome do dorama não pode ser vazio.');
    }
    return await this.doramaRepository.buscarIdPorNome(nomeDorama);
  }
}
