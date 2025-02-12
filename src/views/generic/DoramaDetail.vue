<template>
  <div class="dorama-detail-container">
    <Navbar />

    <main class="main-content">
      <div v-if="dorama" class="dorama-detail">
        <!-- Exibir a imagem do dorama -->
        <div class="dorama-image" :style="{ backgroundImage: `url(${dorama.image})` }"></div>
        <div class="dorama-info">
          <h1 class="dorama-title">{{ dorama.title }}</h1>
          <p class="dorama-genre">{{ dorama.genre }}</p>
          <p class="dorama-description">{{ dorama.description }}</p>
          <p class="dorama-episodes">Quantidade de Episódios: {{ dorama.episodes }}</p>
          <p class="dorama-release-date">Data de Lançamento: {{ dorama.releaseDate }}</p>

          <div class="ratings-section">
            <h2>Avaliações</h2>
            <div v-if="dorama.ratings && dorama.ratings.length > 0">
              <div v-for="rating in dorama.ratings" :key="rating.id" class="rating-item">
                <p>{{ rating.user }}: {{ rating.comment }} (⭐ {{ rating.score }})</p>
              </div>
            </div>
            <p v-else>Nenhuma avaliação ainda.</p>

            <button @click="showRatingModal = true" class="rate-button">Avaliar</button>
          </div>
        </div>
      </div>
      <div v-else>
        <p>Dorama não encontrado.</p>
      </div>
    </main>

    <Footer />

    <!-- Modal de Avaliação -->
    <div v-if="showRatingModal" class="modal">
      <div class="modal-content">
        <h2>Avaliar Dorama</h2>
        <form @submit.prevent="submitRating">
          <label for="score">Nota:</label>
          <input type="number" id="score" v-model="newRating.score" min="1" max="10" required>

          <label for="comment">Comentário:</label>
          <textarea id="comment" v-model="newRating.comment" required></textarea>

          <button type="submit">Enviar Avaliação</button>
          <button type="button" @click="showRatingModal = false">Cancelar</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue';
import { useRoute } from 'vue-router';
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';

export default defineComponent({
  name: 'DoramaDetail',
  components: {
    Navbar,
    Footer
  },
  setup() {
    const route = useRoute();
    const doramaId = route.params.id;

    // Simulação de dados dos doramas
    const doramas = ref([
      {
        id: '1',
        image: '/images/Pousando_no_Amor.jpg', // Caminho absoluto da imagem
        title: 'Pousando No Amor',
        genre: 'Ação',
        description: 'Um acidente de parapente leva uma herdeira sul-coreana à Coreia do Norte. Ali, ela acaba conhecendo um oficial do exército, que vai ajudá-la a se esconder.',
        episodes: 16,
        releaseDate: '2020-12-14',
        ratings: []
      },
      {
        id: '2',
        image: '/images/Rainha_das_Lagrimas.jpg', // Caminho absoluto da imagem
        title: 'Rainha das Lágrimas',
        genre: 'Romance',
        description: 'A rainha das lojas de departamento e seu marido do interior enfrentam uma crise conjugal. Até que o amor milagrosamente volta a florescer.',
        episodes: 20,
        releaseDate: '2021-03-01',
        ratings: []
      },
      {
        id: '3',
        image: '/images/Round_6.jpeg', // Caminho absoluto da imagem
        title: 'Round 6',
        genre: 'Suspense',
        description: 'Centenas de jogadores falidos aceitam um estranho convite para um jogo de sobrevivência. Um prêmio milionário aguarda, mas as apostas são altas e mortais.',
        episodes: 10,
        releaseDate: '2021-09-17',
        ratings: []
      }
    ]);

    // Encontrar o dorama com base no ID
    const dorama = computed(() => {
      return doramas.value.find(d => d.id === doramaId);
    });

    const showRatingModal = ref(false);
    const newRating = ref({
      score: 1,
      comment: '',
      user: 'Usuário Anônimo'
    });

    const submitRating = () => {
      if (dorama.value) {
        dorama.value.ratings.push({
          id: dorama.value.ratings.length + 1,
          ...newRating.value
        });
        showRatingModal.value = false;
        newRating.value = { score: 1, comment: '', user: 'Usuário Anônimo' };
      }
    };

    return {
      dorama,
      showRatingModal,
      newRating,
      submitRating
    };
  }
});
</script>

<style scoped>
.dorama-detail-container {
  min-height: 100vh;
  background: #f8f9fa;
}

.main-content {
  max-width: 1200px;
  margin: 2rem auto;
  padding: 0 1rem;
}

.dorama-detail {
  display: flex;
  gap: 2rem;
  background: white;
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
}

.dorama-image {
  width: 300px;
  height: 450px;
  background-size: cover;
  background-position: center;
  border-radius: 15px;
}

.dorama-info {
  flex: 1;
}

.dorama-title {
  color: #104881;
  margin-bottom: 0.5rem;
  font-size: 2rem;
}

.dorama-genre {
  color: #041622;
  font-size: 1.2rem;
  margin-bottom: 1rem;
}

.dorama-description {
  color: #090e18;
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.dorama-episodes, .dorama-release-date {
  color: #041622;
  font-size: 1rem;
  margin-bottom: 1rem;
}

.ratings-section {
  margin-top: 2rem;
}

.rate-button {
  background-color: #104881;
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
}

.rate-button:hover {
  background-color: #0d3a6b;
}

.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background: white;
  padding: 2rem;
  border-radius: 15px;
  width: 400px;
}

.modal-content form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.modal-content label {
  font-weight: 600;
}

.modal-content input, .modal-content textarea {
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.modal-content button {
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
}

.modal-content button[type="submit"] {
  background-color: #104881;
  color: white;
}

.modal-content button[type="submit"]:hover {
  background-color: #0d3a6b;
}

.modal-content button[type="button"] {
  background-color: #ccc;
  color: #041622;
}

.modal-content button[type="button"]:hover {
  background-color: #bbb;
}
</style>