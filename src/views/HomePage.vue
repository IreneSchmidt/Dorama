<template>
  <div class="home-container">
    <nav class="navbar">
      <div class="navbar-brand">DoramaHub</div>
      <div class="navbar-links">
        <router-link to="/login" class="nav-button">Entrar</router-link>
        <router-link to="/register" class="nav-button">Criar Conta</router-link>
      </div>
    </nav>

    <main class="main-content">
      <h1 class="page-title">Doramas em Destaque</h1>

      <div class="dorama-grid">
        <div
            v-for="dorama in doramas"
            :key="dorama.id"
            class="dorama-card"
            @mouseover="hoverCard = dorama.id"
            @mouseleave="hoverCard = null"
        >
          <div class="card-image" :style="{ backgroundImage: `url(${dorama.image})` }">
            <div class="rating-badge">
              ⭐ {{ dorama.rating }}
            </div>
          </div>

          <div class="card-content">
            <h3 class="dorama-title">{{ dorama.title }}</h3>
            <p class="dorama-genre">{{ dorama.genre }}</p>
            <p class="dorama-description">{{ dorama.description }}</p>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HomePage',
  data() {
    return {
      hoverCard: null as string | null,
      doramas: [
        {
          id: '1',
          image: 'Pousando_no_Amor.jpg',
          rating: 10,
          title: 'Pousando No Amor',
          genre: 'Ação',
          description: 'Um acidente de parapente leva uma herdeira sul-coreana à Coreia do Norte. Ali, ela acaba conhecendo um oficial do exército, que vai ajudá-la a se esconder.',
          episodes: 16,
          releaseDate: '2020-12-14'
        },
        {
          id: '2',
          image: 'Rainha_das_Lagrimas.jpg',
          rating: 9.5,
          title: 'Rainha das Lágrimas',
          genre: 'Romance',
          description: 'A rainha das lojas de departamento e seu marido do interior enfrentam uma crise conjugal. Até que o amor milagrosamente volta a florescer.',
          episodes: 20,
          releaseDate: '2021-03-01'
        },
        {
          id: '3',
          image: 'Round_6.jpeg',
          rating: 9.5,
          title: 'Round 6',
          genre: 'Suspense',
          description: 'Centenas de jogadores falidos aceitam um estranho convite para um jogo de sobrevivência. Um prêmio milionário aguarda, mas as apostas são altas e mortais.',
          episodes: 10,
          releaseDate: '2021-09-17'
        }
      ]
    };
  }
});
</script>

<style scoped>
.home-container {
  min-height: 100vh;
  background: #f8f9fa;
}

.navbar {
  background: #2c3e50;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.navbar-brand {
  font-size: 2.5rem;
  color: #ff6f91;
  cursor: pointer;
}

.navbar-links {
  display: flex;
  gap: 2rem;
}

.nav-button {
  background: #3498db;
  color: white;
  padding: 0.5rem 1.5rem;
  border-radius: 25px;
  text-decoration: none;
}

.main-content {
  max-width: 1200px;
  margin: 2rem auto;
  padding: 0 1rem;
}

.page-title {
  text-align: center;
  font-size: 2.5rem;
}

.dorama-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 1rem;
}

.dorama-card {
  background: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  cursor: pointer;
}

.card-image {
  height: 250px;
  background-size: cover;
  background-position: center;
  position: relative;
}

.rating-badge {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: rgba(255, 255, 255, 0.9);
  padding: 0.5rem 1rem;
  border-radius: 20px;
}

.card-content {
  padding: 1.5rem;
}

.dorama-title {
  font-size: 1.2rem;
}

.dorama-genre {
  color: #3498db;
  font-size: 0.9rem;
}

.dorama-description {
  color: #7f8c8d;
}
</style>
