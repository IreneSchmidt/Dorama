// DoramaRepository.ts
import api from '../../services/api';
import type { IDorama } from '../Dorama';
import { Dorama } from '../Dorama';
import DoramaRoutes from './apiRoutes/DoramaRoutes';

export default class DoramaRepository {
  apiDorama;

  constructor() {
    this.apiDorama = api;
  }

  createBaseRoute() {
    // Certifique-se de que a rota base está correta
    return new DoramaRoutes({}).entity; // Exemplo: "/doramas"
  }

  createDeleteRoute(id: string) {
    return new DoramaRoutes({ id: id }).delete; // Exemplo: "/doramas/{id}"
  }

  async fetchAllDorama() {
    try {
      const baseRoute = this.createBaseRoute();
      const response = await this.apiDorama.get(baseRoute);
      return response.data.value.map(
        (dorama: IDorama) =>
          new Dorama(
            dorama.Id,
            dorama.Titulo,
            dorama.Descricao,
            dorama.DataLancamento,
            dorama.QtdEpisodios,
            dorama.Generos
          )
      );
    } catch (error) {
      console.error('Erro ao buscar doramas', error);
      throw error;
    }
  }

  async createDorama(form: IDorama) {
    try {
      const baseRoute = this.createBaseRoute();
      const response = await this.apiDorama.post(baseRoute, form);
      return response;
    } catch (error) {
      console.error('Erro ao criar dorama', error);
      throw error;
    }
  }

  async updateDorama(Id: string, form: IDorama) {
    try {
      const baseRoute = this.createBaseRoute();
      
      form.Id = Id;
      
      // Faz o PUT atualizando o dorama
      const response = await this.apiDorama.put(baseRoute, form);
      
      return response;
    } catch (error) {
      console.error('Erro ao atualizar dorama', error);
      throw error;
    }
  }

  async deleteDorama(Id: string) {
    try {
      const deleteRoute = this.createDeleteRoute(Id);
      
      // Faz a requisição DELETE para excluir o dorama
      const response = await this.apiDorama.delete(deleteRoute);
      
      return response;
    } catch (error) {
      console.error('Erro ao deletar dorama', error);
      throw error;
    }
  }

  async buscarIdPorNome(nomeDorama: string) {
    try {
      const doramas = await this.fetchAllDorama();
      const doramaEncontrado = doramas.find(
        (d: { Titulo: string }) => d.Titulo.toLowerCase() === nomeDorama.toLowerCase()
      );
      return doramaEncontrado ? doramaEncontrado.Id : null;
    } catch (error) {
      console.error('Erro ao buscar ID do dorama', error);
      throw error;
    }
  }


}
