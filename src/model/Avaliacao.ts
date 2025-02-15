export interface IAvaliacao {
  Id: string;        
  data: string;      
  nota: number;      
  comentario: string;
}

export class Avaliacao implements IAvaliacao {
  public constructor (public Id: string, public data: string, public nota:number, public comentario: string) {
      this.Id = Id;
      this.data = data;
      this.nota = nota;
      this.comentario = comentario;
  }
}