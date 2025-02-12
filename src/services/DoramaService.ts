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
    return await this.doramaRepository.fetchAllDorama();
  }



  async buscarDoramaPorNome(nomeDorama: string) {
    if (!nomeDorama.trim()) {
      throw new Error('O nome do dorama não pode ser vazio.');
    }
    return await this.doramaRepository.buscarIdPorNome(nomeDorama);
  }

  async cadastrarDorama(doramaData: IDorama) {
    if (!doramaData.Titulo.trim()) {
      throw new Error('O título do dorama não pode ser vazio.');
    }

    const generosCadastrados = await this.generoRepository.fetchAllGenero();
    const generosIds: string[] = [];

    for (const nomeGenero of doramaData.Generos) {
      const generoExistente = generosCadastrados.find(
        (g: IGenero) => g.Nome.toLowerCase() === nomeGenero.toLowerCase()
      );

      if (generoExistente) {
        generosIds.push(generoExistente.Id);
      } else {
        const novoGenero = await this.generoRepository.createGenero({ Id: '', Nome: nomeGenero });
        generosIds.push(novoGenero.Id);
      }
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
  }

  async editarDorama(id: string, doramaData: IDorama) {
    if (!id.trim() || !doramaData.Titulo.trim()) {
      throw new Error('O ID ou o título do dorama são inválidos.');
    }

    const doramaExistente = await this.doramaRepository.buscarIdPorNome(id);
    if (!doramaExistente) {
      throw new Error('Dorama não encontrado.');
    }

    doramaExistente.Titulo = doramaData.Titulo;
    doramaExistente.Descricao = doramaData.Descricao;
    doramaExistente.DataLancamento = doramaData.DataLancamento;
    doramaExistente.QtdEpisodios = doramaData.QtdEpisodios;
    doramaExistente.Generos = doramaData.Generos;

    return await this.doramaRepository.updateDorama(id, doramaExistente);
  }

  async deletarDorama(id: string) {
    if (!id.trim()) {
      throw new Error('O ID do dorama é inválido.');
    }
    return await this.doramaRepository.deleteDorama(id);
  }
}
