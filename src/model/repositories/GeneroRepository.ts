import api from '../../services/api';
import type { IGenero } from '../Genero';
import { Genero } from '../Genero';
import GeneroRoutes from './apiRoutes/GeneroRoutes'; // Importe a classe GeneroRoutes

export default class GeneroRepository {
  apiDorama;
  generoRoutes;

  constructor() {
    this.apiDorama = api;
    this.generoRoutes = new GeneroRoutes({}); // Instancia a classe de rotas
  }

  async fetchAllGenero() {
    try {
      // Usa a rota de listagem de gêneros
      const listRoute = this.generoRoutes; // "api/genero"
      const response = await this.apiDorama.get(listRoute);

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
      // Usa a rota de criação de gênero
      const createRoute = this.generoRoutes.create; 
      const response = await this.apiDorama.post(createRoute, form);
      return response.data;
    } catch (error) {
      console.error('Erro ao criar gênero', error);
      throw error;
    }
  }


}