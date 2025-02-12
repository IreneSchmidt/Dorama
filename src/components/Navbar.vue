<template>
  <nav class="navbar">
    <div class="container">
<<<<<<< HEAD
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
=======
      <!-- Nome do Site com Link para HomeView -->
      <router-link to="/" class="logo">
        DoramaHub
      </router-link>

      <!-- Barra de Pesquisa -->
      <input
          type="text"
          placeholder="Pesquisar doramas..."
          class="search-bar"
          v-model="searchQuery"
          @keyup.enter="performSearch"
      />

      <!-- Botão de Cadastro -->
>>>>>>> b72276b2270047b654e48f52f649befc30210a82
      <button class="btn">Cadastrar Dorama</button>
    </div>
  </nav>
</template>

<script lang="ts">
<<<<<<< HEAD
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
=======
import { defineComponent, ref } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'Navbar',
  setup() {
    const router = useRouter();
    const searchQuery = ref('');

    // Função para redirecionar para a página de pesquisa
    const performSearch = () => {
      if (searchQuery.value.trim()) {
        router.push({ path: '/search', query: { q: searchQuery.value } });
      }
    };

    return {
      searchQuery,
      performSearch
>>>>>>> b72276b2270047b654e48f52f649befc30210a82
    };
  }
});
</script>

<style scoped>
.navbar {
  background: #2c3e50;
<<<<<<< HEAD
  padding: 5px 20px;
=======
  padding: 10px 20px;
>>>>>>> b72276b2270047b654e48f52f649befc30210a82
}

.container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
<<<<<<< HEAD
}

.search-container {
  position: relative;
  flex-grow: 1;
  max-width: 600px;
}

.search-bar {
  padding: 6px;
  width: 100%;
=======
  max-width: 1200px;
  margin: 0 auto;
}

/* Estilo do Nome do Site (DoramaHub) */
.logo {
  font-family: 'Lobster', cursive; /* Fonte bonita e estilizada */
  font-size: 2.5rem; /* Tamanho maior */
  color: #ff6f91; /* Cor rosa atraente */
  text-decoration: none; /* Remove sublinhado do link */
  transition: color 0.3s ease; /* Transição suave de cor */
}

.logo:hover {
  color: #ff4757; /* Cor ao passar o mouse (rosa mais escuro) */
}

/* Barra de Pesquisa */
.search-bar {
  padding: 8px;
  width: 400px; /* Largura da barra de pesquisa */
>>>>>>> b72276b2270047b654e48f52f649befc30210a82
  max-width: 100%;
  border-radius: 5px;
  border: 1px solid #ccc;
}

<<<<<<< HEAD
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
=======
/* Botão de Cadastro */
.btn {
  padding: 8px 16px;
  background-color: #ff6f91; /* Cor rosa */
>>>>>>> b72276b2270047b654e48f52f649befc30210a82
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
<<<<<<< HEAD
}

.btn:hover {
  background-color: #2980b9;
}
</style>
=======
  font-size: 1rem;
  transition: background-color 0.3s ease; /* Transição suave */
}

.btn:hover {
  background-color: #ff4757; /* Cor ao passar o mouse (rosa mais escuro) */
}
</style>
>>>>>>> b72276b2270047b654e48f52f649befc30210a82
