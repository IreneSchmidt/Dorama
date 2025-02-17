import DoramaRepository from '../model/repositories/DoramaRepository';
import GeneroRepository from '../model/repositories/GeneroRepository';
import { type IDorama, Dorama } from '../model/Dorama';
import { type IGenero } from '../model/Genero';

export default class DoramaService {
  private doramaRepository: DoramaRepository;
  private generoRepository: GeneroRepository;

  constructor() {
    this.doramaRepository = new DoramaRepository();
    this.generoRepository = new GeneroRepository();
  }

  async listarDoramas() {
    try {
      return await this.doramaRepository.fetchAllDorama();
    } catch (error) {
      throw new Error(`Erro ao listar doramas: ${error.message}`);
    }
  }

  async buscarDoramaPorNome(nomeDorama: string) {
    if (!nomeDorama.trim()) {
      throw new Error('O nome do dorama não pode ser vazio.');
    }

    try {
      return await this.doramaRepository.buscarIdPorNome(nomeDorama);
    } catch (error) {
      throw new Error(`Erro ao buscar dorama: ${error.message}`);
    }
  }

  async cadastrarDorama(doramaData: IDorama) {
    if (!doramaData.Titulo.trim()) {
      throw new Error('O título do dorama não pode ser vazio.');
    }

    try {
      const generosCadastrados = await this.generoRepository.fetchAllGenero();
      const generosIds: string[] = [];

      for (const nomeGenero of doramaData.Generos) {
        let generoExistente = generosCadastrados.find(
            (g: IGenero) => g.Nome.toLowerCase() === nomeGenero.toLowerCase()
        );

        if (!generoExistente) {
          generoExistente = await this.generoRepository.createGenero({ Id: '', Nome: nomeGenero });
        }

        generosIds.push(generoExistente.Id);
      }

      const novoDorama = new Dorama(
          '',
          doramaData.Titulo,
          doramaData.Descricao,
          doramaData.DataLancamento,
          doramaData.QtdEpisodios,
          generosIds
      );

      return await this.doramaRepository.createDorama(novoDorama);
    } catch (error) {
      throw new Error(`Erro ao cadastrar dorama: ${error.message}`);
    }
  }

  async editarDorama(id: string, doramaData: IDorama) {
    if (!id.trim() || !doramaData.Titulo.trim()) {
      throw new Error('ID ou título do dorama são inválidos.');
    }

    try {
      const doramaExistente = await this.doramaRepository.fetchDoramaById(id);
      if (!doramaExistente) {
        throw new Error('Dorama não encontrado.');
      }

      doramaExistente.Titulo = doramaData.Titulo;
      doramaExistente.Descricao = doramaData.Descricao;
      doramaExistente.DataLancamento = doramaData.DataLancamento;
      doramaExistente.QtdEpisodios = doramaData.QtdEpisodios;
      doramaExistente.Generos = doramaData.Generos;

      return await this.doramaRepository.updateDorama(id, doramaExistente);
    } catch (error) {
      throw new Error(`Erro ao editar dorama: ${error.message}`);
    }
  }

  async deletarDorama(id: string) {
    if (!id.trim()) {
      throw new Error('ID do dorama é inválido.');
    }

    try {
      const doramaExistente = await this.doramaRepository.fetchDoramaById(id);
      if (!doramaExistente) {
        throw new Error('Dorama não encontrado.');
      }

      return await this.doramaRepository.deleteDorama(id);
    } catch (error) {
      throw new Error(`Erro ao deletar dorama: ${error.message}`);
    }
  }
}
