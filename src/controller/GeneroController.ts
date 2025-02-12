import type { IGenero } from '../model/Genero';
import GeneroRepository from '../model/repositories/GeneroRepository';

export default class GeneroController {
  private generoRepository: GeneroRepository;
  
  constructor() {
    this.generoRepository = new GeneroRepository();
  }

  async getAll() {
    return await this.generoRepository.fetchAllGenero();
  }

  async create(form: IGenero) {
    if (!form.Nome.trim()) {
      throw new Error('O nome do gênero não pode ser vazio.');
    }
    
    return await this.generoRepository.createGenero(form);
  }
}