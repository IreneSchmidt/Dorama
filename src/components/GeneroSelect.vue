<template>
  <div class="genero-container">
    <label for="genero">Gênero:</label>
    <select v-model="generoSelecionado" class="genero-select">
      <option value="" disabled>Selecione um gênero</option>
      <option v-for="genero in generoStore.generos" :key="genero.Id" :value="genero.Id">
        {{ genero.Nome }}
      </option>
      <option value="novo">+ Adicionar Novo</option>
    </select>

    <input 
      v-if="generoSelecionado === 'novo'" 
      v-model="novoGenero" 
      placeholder="Digite o novo gênero" 
      class="genero-input"
    />
    <button 
      v-if="generoSelecionado === 'novo'" 
      @click="cadastrarGenero" 
      class="genero-button"
    >
      Cadastrar
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { GeneroStore } from "../controller/store/GeneroStore";
import type { IGenero } from "../model/Genero";

const generoStore = GeneroStore();
const generoSelecionado = ref("");
const novoGenero = ref("");

const cadastrarGenero = async () => {
  if (!novoGenero.value.trim()) {
    alert("O nome do gênero não pode estar vazio.");
    return;
  }

  const novoGeneroObj: IGenero = { 
    Id: crypto.randomUUID(), 
    Nome: novoGenero.value.trim() 
  };

  await generoStore.addGenero(novoGeneroObj);
  novoGenero.value = "";
  generoSelecionado.value = "";
};


onMounted(() => {
  generoStore.fetchGeneros();
});
</script>

<style scoped>
.genero-container {
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 300px;
}

.genero-select, .genero-input, .genero-button {
  padding: 8px;
  font-size: 14px;
}

.genero-button {
  background-color: #1e3a5f;
  color: white;
  border: none;
  cursor: pointer;
}

.genero-button:hover {
  background-color: #14273d;
}
</style>
