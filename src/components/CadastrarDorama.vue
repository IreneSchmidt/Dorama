<template>
  <div class="container">
    <h2>Cadastro de Dorama</h2>
    <form @submit.prevent="cadastrarDorama">
      <div class="form-layout">
        <div class="form-group">
          <label for="titulo">Título:</label>
          <input type="text" v-model="dorama.Titulo" required />
        </div>

        <div class="form-group">
          <label for="dataLancamento">Data de Lançamento:</label>
          <input type="date" v-model="dorama.DataLancamento" required />
        </div>
      </div>

      <div class="form-group">
        <label for="descricao">Descrição:</label>
        <textarea v-model="dorama.Descricao" required></textarea>
      </div>

      <div class="form-layout">
        <div class="form-group">
          <label for="qtdEpisodios">Quantidade de Episódios:</label>
          <input type="number" v-model="dorama.QtdEpisodios" min="1" required />
        </div>

        <div class="form-group">
          <GeneroSelect v-model="dorama.Generos" />
        </div>
      </div>

      <button type="submit">Cadastrar Dorama</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { DoramaStore } from "../controller/store/DoramaStore";
import GeneroSelect from "../components/GeneroSelect.vue";
import { useRouter } from "vue-router";

const router = useRouter();
const doramaStore = DoramaStore();

const dorama = ref({
  Id: crypto.randomUUID(),
  Titulo: "",
  Descricao: "",
  DataLancamento: "",
  QtdEpisodios: 1,
  Generos: []
});

const cadastrarDorama = async () => {
  if (!dorama.value.Titulo.trim() || !dorama.value.Descricao.trim()) {
    alert("Preencha todos os campos corretamente.");
    return;
  }

  await doramaStore.addDorama(dorama.value);
  alert("Dorama cadastrado com sucesso!");

  router.push({ name: "/home" });

  dorama.value = {
    Id: crypto.randomUUID(),
    Titulo: "",
    Descricao: "",
    DataLancamento: "",
    QtdEpisodios: 1,
    Generos: []
  };
};
</script>

<style scoped>
.container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 50px;
  background-color: #f0f4f8;
  border-radius: 15px;
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.15);
  transform: scale(1.1);
}

h2 {
  color: #1e3a5f;
  text-align: center;
  margin-bottom: 25px;
  font-size: 28px;
}

form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.form-layout {
  display: flex;
  justify-content: space-between;
  gap: 30px;
}

.form-group {
  flex: 1;
  display: flex;
  flex-direction: column;
}

label {
  font-weight: bold;
  color: #1e3a5f;
  margin-bottom: 8px;
  font-size: 18px;
}

input,
textarea {
  padding: 15px;
  border: 2px solid #1e3a5f;
  border-radius: 8px;
  font-size: 18px;
}

button {
  margin-top: 25px;
  background-color: #1e3a5f;
  color: white;
  border: none;
  padding: 18px;
  cursor: pointer;
  border-radius: 8px;
  font-size: 20px;
  font-weight: bold;
  transition: background 0.3s;
}

button:hover {
  background-color: #14273d;
}
</style>
