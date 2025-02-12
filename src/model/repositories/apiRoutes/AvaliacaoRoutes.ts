import api from '@/services/api';
import type { IAvaliacao } from '../Avaliacao';
import { Avaliacao } from '../Avaliacao';
import AvaliacaoRoutes from './apiRoutes/AvaliacaoRoutes';
import type { BaseConfig } from "./BaseConfig";

class AvaliacaoRoutes {
    protected config: BaseConfig;
    protected name: string;
    constructor(config: BaseConfig) {
        this.config = config;
        this.name = 'avaliacao';
    };

    get entity(): string {
        return `${this.name}`;
    };

    get delete(): string {
        return `${this.name}/${this.config.id}`;
    };
};

export default AvaliacaoRoutes;

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
      // Criar rota de conexão
      const baseRoute = this.createBaseRoute();

      // Faz a request usando a api com o axios
      const response = await this.apiClient.get(baseRoute);

      // Retorna a função com a criação de objetos
      return response.data.value.map((avaliacao: IAvaliacao) => new Avaliacao(avaliacao.Id, avaliacao.Nome, avaliacao.Nota, avaliacao.Comentario));
    } catch (error) {
      console.error("Erro ao buscar avaliações", error);
      throw error;
    }
  }

  async createAvaliacao(form: IAvaliacao) {
    try {
      // Criar rota de conexão
      const baseRoute = this.createBaseRoute();

      // Faz o post usando a api com o axios e enviando os dados
      const response = await this.apiClient.post(baseRoute, form);

      // Retorna a resposta do backend
      return response;
    } catch (error) {
      console.error("Erro ao criar avaliação", error);
      throw error;
    }
  }

  async updateAvaliacao(Id: string, form: IAvaliacao) {
    try {
      // Criar rota de conexão
      const baseRoute = this.createBaseRoute();

      // Garante que o Id está salvo dentro do form
      form.Id = Id;

      // Faz o put usando a api com o axios e enviando os dados
      const response = await this.apiClient.put(baseRoute, form);

      // Retorna a resposta do backend
      return response;
    } catch (error) {
      console.error("Erro ao atualizar avaliação", error);
      throw error;
    }
  }

  async deleteAvaliacao(Id: string) {
    try {
      // Criar rota de conexão
      const deleteRoute = this.createDeleteRoute(Id);

      // Faz o delete usando a api com o axios e enviando os dados
      const response = await this.apiClient.delete(deleteRoute);

      // Retorna a resposta do backend
      return response;
    } catch (error) {
      console.error("Erro ao deletar a avaliação", error);
      throw error;
    }
  }
}