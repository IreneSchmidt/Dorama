export interface IGenero  {
    Id: string;
    Nome: string;
}

export class Genero implements IGenero {
    public constructor (public Id: string, public Nome: string) {
        this.Id = Id;
        this.Nome = Nome;
    }
}

