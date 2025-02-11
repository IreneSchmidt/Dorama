import api from '../../services/api';
import type { IGenero } from '../Genero';
import { Genero } from '../Genero';

export default class GeneroRepository {
  apiDorama;

  constructor() {
    this.apiDorama = api;
  }

  async fetchAllGenero() {
    try {
      // Faz a request para buscar todos os gêneros
      const response = await this.apiDorama.get('genero');

      // Retorna os gêneros convertidos para objetos
      return response.data.value.map(
        (genero: IGenero) => new Genero(genero.Id, genero.Nome)
      );
    } catch (error) {
      console.error('Erro ao buscar gêneros', error);
      throw error;
    }
  }

  async createGenero(form: IGenero) {
    try {
      // Faz o POST enviando os dados do novo gênero
      const response = await this.apiDorama.post('genero', form);
      return response.data;
    } catch (error) {
      console.error('Erro ao criar gênero', error);
      throw error;
    }
  }
}