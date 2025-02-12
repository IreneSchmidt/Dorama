export interface IAvaliacao {
  id: string;        
  data: string;      
  nota: number;      
  comentario: string;
}

export class Avaliacao implements IAvaliacao {
  public constructor (public id: string, public data: string, public nota:number, public comentario: string) {
      this.id = id;
      this.data = data;
      this.nota = nota;
      this.comentario = comentario;
  }
}