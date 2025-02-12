<template>
  <nav class="navbar">
    <div class="container">
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
      <button class="btn">Cadastrar Dorama</button>
    </div>
  </nav>
</template>

<script lang="ts">
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
  max-width: 100%;
  border-radius: 5px;
  border: 1px solid #ccc;
}

/* Botão de Cadastro */
.btn {
  padding: 8px 16px;
  background-color: #ff6f91; /* Cor rosa */
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s ease; /* Transição suave */
}

.btn:hover {
  background-color: #ff4757; /* Cor ao passar o mouse (rosa mais escuro) */
}
</style>