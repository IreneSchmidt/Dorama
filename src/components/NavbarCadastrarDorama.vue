<template>
  <nav class="navbar">
    <div class="container">
      <router-link to="/" class="logo">
        <span class="btn-logo">DoramaHub</span>
      </router-link>

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

    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue';
import { useRouter } from 'vue-router';

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

    const router = useRouter();
    const performSearch = () => {
      if (searchQuery.value.trim()) {
        router.push({ path: '/search', query: { q: searchQuery.value } });
      }
    };

    return {
      searchQuery,
      filteredDoramas,
      performSearch
    };
  }
});
</script>

<style scoped>
.navbar {
  background: #2c3e50;
  padding: 10px 20px;
}

.container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}

/* Logo Estilo */
.btn-logo {
  font-family: 'Lobster', cursive;
  font-size: 2.5rem;
  color: #ff6f91; /* Cor rosa para o texto */
  text-decoration: none;
  transition: color 0.3s ease;
}

.btn-logo:hover {
  color: #ff4757;
}

/* Barra de Pesquisa */
.search-container {
  position: relative;
  flex-grow: 1;
  max-width: 800px;
}

.search-bar {
  padding: 8px;
  width: 500px;
  max-width: 100%;
  border-radius: 5px;
  border: 1px solid #ccc;
}

/* Resultados da Pesquisa */
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


</style>

