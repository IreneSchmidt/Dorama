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
        public Id: string, 
        public Titulo: string,
        public Descricao: string,
        public DataLancamento: string,
        public QtdEpisodios: number, 
        public Generos: string[],
    ) {

        this.Id = Id;
        this.Titulo = Titulo;
        this.Descricao = Descricao;
        this.DataLancamento = DataLancamento;
        this.QtdEpisodios = QtdEpisodios;
        this.Generos = Generos;
    }
}