import { defineStore } from "pinia";
import DoramaController from "../../controller/DoramaController";
import type { IDorama } from "../../model/Dorama";

export const DoramaStore = defineStore("dorama", {
  state: () => ({
    doramas: [] as IDorama[],
  }),

  actions: {
    async fetchDoramas() {
      const doramaController = new DoramaController();
      this.doramas = await doramaController.getAll();
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
