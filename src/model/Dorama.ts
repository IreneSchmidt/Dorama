import type { IEntity } from "../model/generic/IEntity"; 

export interface IDorama  {
    Id: string;
    Titulo: string;
    Descricao: string;
    DataLancamento: string;
    QtdEpisodios: number;
    Generos: string[];
}

export class Dorama implements IDorama {
    public constructor (
        public Id: string = '', // Valor default vazio
        public Titulo: string = '',
        public Descricao: string = '',
        public DataLancamento: string = '',
        public QtdEpisodios: number = 1, // Pode definir um valor padrão
        public Generos: string[] = [] // Lista vazia como padrão
    ) {
        // Nada a mais aqui, o TS já vai garantir os tipos.
    
        this.Id = Id;
        this.Titulo = Titulo;
        this.Descricao = Descricao;
        this.DataLancamento = DataLancamento;
        this.QtdEpisodios = QtdEpisodios;
        this.Generos = Generos;
    }
}