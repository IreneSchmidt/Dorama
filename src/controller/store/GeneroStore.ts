import { defineStore } from "pinia";
import GeneroController from "../../controller/GeneroController";
import type { IGenero } from "../../model/Genero";

export const GeneroStore = defineStore("genero", {
  state: () => ({
    generos: [
      { Id: "1", Nome: "Ação" },
      { Id: "2", Nome: "Romance" },
      { Id: "3", Nome: "Comédia" },
      { Id: "4", Nome: "Drama" },
      { Id: "5", Nome: "Fantasia" },
      { Id: "6", Nome: "Suspense" },
      { Id: "7", Nome: "Terror" },
      { Id: "8", Nome: "Histórico" },
    ] as IGenero[],
  }),

  actions: {
    async fetchGeneros() {
      const generoController = new GeneroController();
      const apiGeneros = await generoController.getAll();

      // Evita duplicações ao mesclar os gêneros padrão com os vindos da API
      const idsExistentes = new Set(this.generos.map(g => g.Id));
      this.generos.push(...apiGeneros.filter(g => !idsExistentes.has(g.Id)));
    },

    async addGenero(novoGenero: IGenero) {
      const generoController = new GeneroController();
      await generoController.create(novoGenero);
      this.generos.push(novoGenero);
    },
  },
});
