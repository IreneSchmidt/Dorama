// DoramaRoutes.ts
export default class GeneroRoutes {
    private baseUrl: string;
  
    constructor(config: { baseUrl?: string }) {
      this.baseUrl = config.baseUrl || "api/genero"; // Define a base da URL
    }
  
  
  
    get create() {
      return `${this.baseUrl}/CriarGenero`; 
    }
  
    get post() {
      return `${this.baseUrl}/ListarGeneros`; 
    }
    
   
  


  }