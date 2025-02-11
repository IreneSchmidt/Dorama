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
    if (!form.Titulo.trim()) {
      throw new Error('O título do dorama não pode ser vazio.');
    }
    return await this.doramaRepository.createDorama(form);
  }

  async update(Id: string, item: IDorama) {
    if (!Id.trim()) {
      throw new Error('O ID do dorama é inválido.');
    }
    return await this.doramaRepository.updateDorama(Id, item);
  }

  async delete(Id: string) {
    if (!Id.trim()) {
      throw new Error('O ID do dorama é inválido.');
    }
    return await this.doramaRepository.deleteDorama(Id);
  }

  async buscarIdPorNome(nomeDorama: string) {
    if (!nomeDorama.trim()) {
      throw new Error('O nome do dorama não pode ser vazio.');
    }
    return await this.doramaRepository.buscarIdPorNome(nomeDorama);
  }
}






