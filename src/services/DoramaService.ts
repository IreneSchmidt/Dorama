import DoramaRepository from '../model/repositories/DoramaRepository';
import GeneroRepository from '../model/repositories/GeneroRepository';
import { type IDorama, Dorama } from '../model/Dorama';
import { type IGenero, Genero } from '../model/Genero';

export default class DoramaService {
  private doramaRepository: DoramaRepository;
  private generoRepository: GeneroRepository;

  constructor() {
    this.doramaRepository = new DoramaRepository();
    this.generoRepository = new GeneroRepository();
  }

  async cadastrarDorama(doramaData: IDorama) {
    try {
      if (!doramaData.Titulo.trim()) {
        throw new Error('O título do dorama não pode ser vazio.');
      }
  
      // Verifica quais gêneros já existem e quais precisam ser cadastrados
      const generosCadastrados = await this.generoRepository.fetchAllGenero();
      const generosIds: string[] = [];
  
      for (const nomeGenero of doramaData.Generos) {
        const generoExistente = generosCadastrados.find(
          (g: IGenero) => g.Nome.toLowerCase() === nomeGenero.toLowerCase()
        );
  
        if (generoExistente) {
          generosIds.push(generoExistente.Id);
        } else {
          // Cadastra o novo gênero e obtém o ID
          const novoGenero = await this.generoRepository.createGenero({
            Id: '',
            Nome: nomeGenero,
          });
          generosIds.push(novoGenero.Id);
        }
      }
  
      // Cria o novo dorama com os gêneros atualizados
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
      console.error('Erro ao cadastrar dorama:', error);
      throw error;
    }
  }
  
  async editarDorama(id: string, doramaData: IDorama) {
    try {
      if (!doramaData.Titulo.trim()) {
        throw new Error('O título do dorama não pode ser vazio.');
      }
  
      // Obtém o dorama existente
      const doramaExistente = await this.doramaRepository.fetchAllDorama();
      const dorama = doramaExistente.find((d: IDorama) => d.Id === id);
  
      if (!dorama) {
        throw new Error('Dorama não encontrado.');
      }
  
      // Atualiza os dados do dorama
      dorama.Titulo = doramaData.Titulo;
      dorama.Descricao = doramaData.Descricao;
      dorama.DataLancamento = doramaData.DataLancamento;
      dorama.QtdEpisodios = doramaData.QtdEpisodios;
      dorama.Generos = doramaData.Generos;
  
      return await this.doramaRepository.updateDorama(id, dorama);
    } catch (error) {
      console.error('Erro ao editar dorama:', error);
      throw error;
    }
  }
  
}