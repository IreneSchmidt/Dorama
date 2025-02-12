import { defineStore } from "pinia";
import DoramaController from "../../controller/DoramaController";
import type { IDorama } from "../../model/Dorama";

// Função para gerar dados falsos de doramas
const generateFakeDoramas = (): IDorama[] => {
  return [
    {
      Id: crypto.randomUUID(),
      Titulo: "Amor no Final do Verão",
      Descricao: "Uma história de amor inesperada entre dois jovens em uma cidade pequena durante o último verão antes da faculdade.",
      DataLancamento: "2023-06-15",
      QtdEpisodios: 16,
      Generos: ["Romance"]
    },
    {
      Id: crypto.randomUUID(),
      Titulo: "Mistério nas Montanhas",
      Descricao: "Um detetive e sua parceira enfrentam mistérios e perigos enquanto investigam uma série de desaparecimentos em uma montanha isolada.",
      DataLancamento: "2022-11-01",
      QtdEpisodios: 12,
      Generos: ["Mistério"]
    },
    {
      Id: crypto.randomUUID(),
      Titulo: "Cores do Inverno",
      Descricao: "Durante o inverno, um grupo de artistas se une para criar uma obra-prima enquanto enfrentam seus próprios demônios internos.",
      DataLancamento: "2024-01-20",
      QtdEpisodios: 10,
      Generos: ["Drama"]
    },
    {
      Id: crypto.randomUUID(),
      Titulo: "Segredos do Passado",
      Descricao: "Após a morte de um membro da família, segredos de uma antiga casa começam a vir à tona, mudando o destino de todos os envolvidos.",
      DataLancamento: "2023-09-05",
      QtdEpisodios: 20,
      Generos: ["Suspense"]
    },
    {
      Id: crypto.randomUUID(),
      Titulo: "No Limite da Realidade",
      Descricao: "Um grupo de jovens desenvolve uma tecnologia que permite explorar universos paralelos, mas logo descobrem que suas ações têm consequências inesperadas.",
      DataLancamento: "2024-03-11",
      QtdEpisodios: 8,
      Generos: ["Ficção Científica", "Aventura"]
    },
  ];
};

export const DoramaStore = defineStore("dorama", {
  state: () => ({
    doramas: [] as IDorama[],
  }),

  actions: {
    async fetchDoramas() {
      // Substituindo o fetch com dados falsos
      this.doramas = generateFakeDoramas();
    },

    async addDorama(novoDorama: IDorama) {
      const doramaController = new DoramaController();
      await doramaController.create(novoDorama);
      this.doramas.push(novoDorama);
    },

    async updateDorama(Id: string, item: IDorama) {
      const doramaController = new DoramaController();
      await doramaController.update(Id, item);
      const index = this.doramas.findIndex((d) => d.Id === Id);
      if (index !== -1) {
        this.doramas[index] = item;
      }
    },

    async deleteDorama(Id: string) {
      const doramaController = new DoramaController();
      await doramaController.delete(Id);
      this.doramas = this.doramas.filter((d) => d.Id !== Id);
    },
  },
});
