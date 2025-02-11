<template>
  <div class="home-container">
    <nav class="navbar">
      <div class="navbar-brand">DoramaHub</div>
      <div class="navbar-links">
        <router-link to="/login" class="nav-link">Entrar</router-link>
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
          <router-link :to="`/dorama/${dorama.id}`"> <!-- Adiciona o link aqui -->
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
          </router-link>
        </div>
      </div>
    </main>

    <footer class="site-footer">
      <p>© 2024 DoramaHub. Todos os direitos reservados.</p>
    </footer>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'HomePage',
  data() {
    return {
      hoverCard: null as string | null, // Definindo explicitamente o tipo como string | null
      doramas: [
        // Lista de doramas (exemplo)
        {
          id: '1',
          image: 'Pousando_no_Amor.jpg',
          rating: 10,
          title: 'Pousando No Amor',
          genre: 'Ação',
          description: 'Um acidente de parapente leva uma herdeira sul-coreana à Coreia do Norte. Ali, ela acaba conhecendo um oficial do exército, que vai ajudá-la a se esconder.'
        },
        {
          id: '2',
          image: 'Rainha_das_Lagrimas.jpg',
          rating: 9.5,
          title: 'Rainha das Lágrimas',
          genre: 'Romance',
          description: 'A rainha das lojas de departamento e seu marido do interior enfrentam uma crise conjugal. Até que o amor milagrosamente volta a florescer.'
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
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.navbar-brand {
  color: #fff;
  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: 1px;
}

.navbar-links {
  display: flex;
  gap: 2rem;
  align-items: center;
}

.nav-link {
  color: #ecf0f1;
  text-decoration: none;
  transition: color 0.3s ease;
}

.nav-button {
  background: #3498db;
  color: white;
  padding: 0.5rem 1.5rem;
  border-radius: 25px;
  text-decoration: none;
  transition: transform 0.2s ease;
}

.nav-button:hover {
  transform: translateY(-2px);
}

.main-content {
  max-width: 1200px;
  margin: 2rem auto;
  padding: 0 1rem;
}

.page-title {
  color: #2c3e50;
  text-align: center;
  margin-bottom: 3rem;
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
  transition: transform 0.3s ease;
  cursor: pointer;
}

.dorama-card:hover {
  transform: translateY(-5px);
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
  font-weight: 600;
  backdrop-filter: blur(5px);
}

.card-content {
  padding: 1.5rem;
}

.dorama-title {
  color: #2c3e50;
  margin-bottom: 0.5rem;
  font-size: 1.2rem;
}

.dorama-genre {
  color: #3498db;
  font-size: 0.9r
}

</style>
