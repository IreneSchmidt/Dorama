import GeneroRepository from '../model/repositories/GeneroRepository';
import { type IGenero, Genero } from '../model/Genero';

export default class GeneroService {
  private generoRepository: GeneroRepository;

  constructor() {
    this.generoRepository = new GeneroRepository();
  }

  async cadastrarGenero(nome: string) {
    try {
      if (!nome.trim()) {
        throw new Error('O nome do gênero não pode ser vazio.');
      }

      const novoGenero = new Genero('', nome);
      return await this.generoRepository.createGenero(novoGenero);
    } catch (error) {
      console.error('Erro ao cadastrar gênero:', error);
      throw error;
    }
  }

  async obterTodosGeneros() {
    try {
      return await this.generoRepository.fetchAllGenero();
    } catch (error) {
      console.error('Erro ao buscar gêneros:', error);
      throw error;
    }
  }
}