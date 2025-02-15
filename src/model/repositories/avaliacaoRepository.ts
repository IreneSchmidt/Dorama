import api from '../../services/api';
import type { IAvaliacao } from '../Avaliacao';
import { Avaliacao } from '../Avaliacao';
import { AvaliacaoRoutes } from './apiRoutes/AvaliacaoRoutes.ts';

export default class AvaliacaoRepository {
  apiClient;
  constructor() {
    this.apiClient = api;
  }

  createBaseRoute() {
    return new AvaliacaoRoutes({}).entity;
  }

  createDeleteRoute(Id: string) {
    return new AvaliacaoRoutes({id: Id}).delete;
  }

  async fetchAllAvaliacao() {
    try {
      const baseRoute = this.createBaseRoute();

      const response = await this.apiClient.get(baseRoute);

      return response.data.value.map((avaliacao: IAvaliacao) => new Avaliacao(avaliacao.Id, avaliacao.data, avaliacao.nota, avaliacao.comentario));
    } catch (error) {
      console.error("Erro ao buscar avaliações", error);
      throw error;
    }
  }

  async createAvaliacao(form: IAvaliacao) {
    try {
      const baseRoute = this.createBaseRoute();

      const response = await this.apiClient.post(baseRoute, form);

      return response;
    } catch (error) {
      console.error("Erro ao criar avaliação", error);
      throw error;
    }
  }

  async updateAvaliacao(Id: string, form: IAvaliacao) {
    try {
      const baseRoute = this.createBaseRoute();

      form.Id = Id;

      const response = await this.apiClient.put(baseRoute, form);

      return response;
    } catch (error) {
      console.error("Erro ao atualizar avaliação", error);
      throw error;
    }
  }

  async deleteAvaliacao(Id: string) {
    try {
      const deleteRoute = this.createDeleteRoute(Id);

      const response = await this.apiClient.delete(deleteRoute);

      return response;
    } catch (error) {
      console.error("Erro ao deletar a avaliação", error);
      throw error;
    }
  }
}
