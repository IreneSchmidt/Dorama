<template>
  <div class="container">
    <form @submit.prevent="cadastrarDorama">
      <label for="titulo">Título:</label>
      <input type="text" v-model="dorama.Titulo" required />

      <label for="descricao">Descrição:</label>
      <textarea v-model="dorama.Descricao" required></textarea>

      <label for="dataLancamento">Data de Lançamento:</label>
      <input type="date" v-model="dorama.DataLancamento" required />

      <label for="qtdEpisodios">Quantidade de Episódios:</label>
      <input type="number" v-model="dorama.QtdEpisodios" min="1" required />

      <GeneroSelect v-model="dorama.Generos" />

      <button type="submit">Cadastrar Dorama</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { DoramaStore } from "../controller/store/DoramaStore";
import GeneroSelect from "../components/GeneroSelect.vue";

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

  // Limpa os campos após o cadastro
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
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f0f4f8;
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
}

h2 {
  color: #1e3a5f;
  text-align: center;
}

form {
  display: flex;
  flex-direction: column;
}

label {
  margin-top: 10px;
  font-weight: bold;
  color: #1e3a5f;
}

input,
textarea {
  padding: 8px;
  border: 2px solid #1e3a5f;
  border-radius: 5px;
  font-size: 16px;
}

button {
  margin-top: 15px;
  background-color: #1e3a5f;
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
  border-radius: 5px;
  font-size: 18px;
}

button:hover {
  background-color: #14273d;
}
</style>
