import api from '../../services/api'; // Importe a configuração da API
import type { IDorama } from '../Dorama';
import { Dorama } from '../Dorama';
import DoramaRoutes from './apiRoutes/DoramaRoutes'; // Supondo que as rotas da API sejam configuradas aqui

export default class DoramaRepository {
  apiDorama;

  constructor() {
    this.apiDorama = api; // Instância do cliente API (axios ou similar)
  }

  // Criação da rota base para o recurso 'Dorama'
  createBaseRoute() {
    return '/api/Dorama'; // Rota base
  }

  // Criação da rota para deletar um dorama (substitui o {id} pela id real)
  createDeleteRoute(id: string) {
    return `/api/Dorama/DeletarDorama/${id}`; // Rota DELETE com ID
  }

  // Método para buscar todos os doramas
  async fetchAllDorama() {
    try {
      const baseRoute = this.createBaseRoute();
      const response = await this.apiDorama.get(baseRoute);

      // Mapeia os dados recebidos para instâncias de Dorama
      return response.data.map(
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

  // Método para cadastrar um novo dorama
  async createDorama(form: IDorama) {
    try {
      const baseRoute = this.createBaseRoute();
      const response = await this.apiDorama.post(baseRoute, form);
      return response.data; // Retorna o dorama criado
    } catch (error) {
      console.error('Erro ao criar dorama', error);
      throw error;
    }
  }

  // Método para editar um dorama existente
  async updateDorama(Id: string, form: IDorama) {
    try {
      const baseRoute = this.createBaseRoute();
      form.Id = Id; // Atribui o Id ao formulário

      const response = await this.apiDorama.put(baseRoute, form); // PUT para editar
      return response.data; // Retorna o dorama atualizado
    } catch (error) {
      console.error('Erro ao atualizar dorama', error);
      throw error;
    }
  }

  // Método para excluir um dorama
  async deleteDorama(Id: string) {
    try {
      const deleteRoute = this.createDeleteRoute(Id);
      const response = await this.apiDorama.delete(deleteRoute); // DELETE para excluir
      return response.data; // Retorna a resposta da exclusão
    } catch (error) {
      console.error('Erro ao deletar dorama', error);
      throw error;
    }
  }

  // Método para buscar o ID de um dorama pelo nome
  async buscarIdPorNome(nomeDorama: string) {
    try {
      const doramas = await this.fetchAllDorama();
      const doramaEncontrado = doramas.find(
          (dorama) => dorama.Titulo.toLowerCase() === nomeDorama.toLowerCase()
      );
      return doramaEncontrado ? doramaEncontrado.Id : null; // Retorna o ID do dorama, ou null se não encontrado
    } catch (error) {
      console.error('Erro ao buscar ID do dorama', error);
      throw error;
    }
  }
}
