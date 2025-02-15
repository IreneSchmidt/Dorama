import type { IDorama } from '../model/Dorama';
import DoramaRepository from '../model/repositories/DoramaRepository';

export default class DoramaController {
  private doramaRepository: DoramaRepository;

  constructor() {
    this.doramaRepository = new DoramaRepository();
  }

  async getAll() {
    return await this.doramaRepository.fetchAllDorama();
  }

  async create(form: IDorama) {
    if (import.meta.env.VITE_MOCK === "true") return
    return await this.doramaRepository.createDorama(form);
  }

  async update(Id: string, item: IDorama) {
    if (import.meta.env.VITE_MOCK === "true") return
      return await this.doramaRepository.updateDorama(Id, item);
  }

  async delete(Id: string) {
    if (import.meta.env.VITE_MOCK === "true") return
      return await this.doramaRepository.deleteDorama(Id);
  }
}
