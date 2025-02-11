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
    return new DoramaRoutes({}).entity;
  }

  createDeleteRoute(id: string) {
    return new DoramaRoutes({ id: id }).delete;
  }

  async fetchAllDorama() {
    try {
      // Criar rota de conexão
      const baseRoute = this.createBaseRoute();

      // Faz a request usando a API com axios
      const response = await this.apiDorama.get(baseRoute);

      // Retorna os dados transformados em objetos Dorama
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

      // Faz o POST enviando os dados do novo dorama
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