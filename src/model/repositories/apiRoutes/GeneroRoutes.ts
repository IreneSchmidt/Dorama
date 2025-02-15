export default class GeneroRoutes {
    private baseUrl: string;
  
    constructor(config: { baseUrl?: string }) {
      this.baseUrl = config.baseUrl || "api/genero";
    }
  
    get create() {
      return `${this.baseUrl}/CriarGenero`; 
    }
  
    get post() {
      return `${this.baseUrl}/ListarGeneros`; 
    }
   
  }