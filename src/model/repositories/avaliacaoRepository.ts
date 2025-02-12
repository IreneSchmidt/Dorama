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

  createDeleteRoute(id: string) {
    return new AvaliacaoRoutes({id: id}).delete;
  }

  async fetchAllAvaliacao() {
    try {
      const baseRoute = this.createBaseRoute();

      const response = await this.apiClient.get(baseRoute);

      return response.data.value.map((avaliacao: IAvaliacao) => new Avaliacao(avaliacao.id, avaliacao.data, avaliacao.nota, avaliacao.comentario));
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

  async updateAvaliacao(id: string, form: IAvaliacao) {
    try {
      const baseRoute = this.createBaseRoute();

      form.id = id;

      const response = await this.apiClient.put(baseRoute, form);

      return response;
    } catch (error) {
      console.error("Erro ao atualizar avaliação", error);
      throw error;
    }
  }

  async deleteAvaliacao(id: string) {
    try {
      const deleteRoute = this.createDeleteRoute(id);

      const response = await this.apiClient.delete(deleteRoute);

      return response;
    } catch (error) {
      console.error("Erro ao deletar a avaliação", error);
      throw error;
    }
  }
}
