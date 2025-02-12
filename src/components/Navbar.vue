<template>
  <nav class="navbar">
    <div class="container">
      <h1 class="logo">DoramaHub</h1>
      <div class="search-container">
        <input 
          type="text" 
          v-model="searchQuery" 
          placeholder="Pesquisar doramas..." 
          class="search-bar"
        />
        <ul v-if="filteredDoramas.length > 0" class="search-results">
          <li v-for="dorama in filteredDoramas" :key="dorama.id">
            <router-link :to="`/dorama/${dorama.id}`">{{ dorama.title }}</router-link>
          </li>
        </ul>
      </div>
      <button class="btn">Cadastrar Dorama</button>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue';

export default defineComponent({
  name: 'NavBar',
  setup() {
    const searchQuery = ref('');
    const doramas = ref([
      { id: '1', title: 'Pousando No Amor' },
      { id: '2', title: 'Rainha das Lágrimas' },
      { id: '3', title: 'Round 6' }
    ]);

    const filteredDoramas = computed(() => {
      return searchQuery.value
        ? doramas.value.filter(dorama =>
            dorama.title.toLowerCase().includes(searchQuery.value.toLowerCase())
          )
        : [];
    });

    return {
      searchQuery,
      filteredDoramas
    };
  }
});
</script>

<style scoped>
.navbar {
  background: #2c3e50;
  padding: 5px 20px;
}

.container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}

.search-container {
  position: relative;
  flex-grow: 1;
  max-width: 600px;
}

.search-bar {
  padding: 6px;
  width: 100%;
  max-width: 100%;
  border-radius: 5px;
  border: 1px solid #ccc;
}

.search-results {
  position: absolute;
  background: white;
  list-style: none;
  margin: 0;
  padding: 0;
  width: 100%;
  border: 1px solid #ccc;
  border-top: none;
  max-height: 200px;
  overflow-y: auto;
}

.search-results li {
  padding: 8px;
  cursor: pointer;
}

.search-results li:hover {
  background: #f1f1f1;
}

.btn {
  padding: 6px 10px;
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.btn:hover {
  background-color: #2980b9;
}
</style>
