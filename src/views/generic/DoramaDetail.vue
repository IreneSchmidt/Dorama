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
            <div v-for="rating in dorama.ratings" :key="rating.id" class="rating-item">
              <p>{{ rating.user }}: {{ rating.comment }} (⭐ {{ rating.score }})</p>
            </div>
          </div>
          <div v-if="!dorama">
  <p>Dorama não encontrado.</p>
</div>


          <button @click="showRatingModal = true" class="rate-button">Avaliar</button>
        </div>
      </div>
      <div v-else>
        <p>Dorama não encontrado.</p>
      </div>

      <!-- Mensagem de Sucesso -->
      <div v-if="avaliacaoSalva" class="success-message">
        Avaliação salva com sucesso!
      </div>
    </main>

    <Footer />

    <!-- Modal de Avaliação -->
    <ModalAvaliacao 
      v-if="showRatingModal" 
      :dorama="dorama" 
      @fechar="fecharModal" 
      @salvar-avaliacao="handleSalvarAvaliacao"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue';
import { useRoute } from 'vue-router';
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
import ModalAvaliacao from '@/components/ModalAvaliacao.vue'; // Importando o ModalAvaliacao

// Definindo a interface Avaliacao
interface Avaliacao {
  id: string;       // ID da avaliação
  user: string;     // Nome do usuário
  score: number;    // Nota de 1 a 10
  comment: string;  // Comentário da avaliação
  data: string;     // Data da avaliação
}

export default defineComponent({
  name: 'DoramaDetail',
  components: {
    Navbar,
    Footer,
    ModalAvaliacao // Registrando o componente ModalAvaliacao
  },
  setup() {
    const route = useRoute();
    const doramaId = route.params.id;

    // Dados dos doramas simulados
    const doramas = ref([
      {
        id: '1',
        image:`/Pousando_no_Amor.jpg`,
        title: 'Pousando No Amor',
        genre: 'Ação',
        description: 'Yoon Se-ri, uma herdeira sul-coreana cai acidentalmente na Coreia do Norte após um acidente de parapente. Lá, ela é protegida por um oficial do exército, e apesar das diferenças, os dois acabam se apaixonando.',
        episodes: 16,
        releaseDate: '2020-12-14',
        ratings: [] as Avaliacao[] // Usando Avaliacao
      },
      {
        id: '2',
        image: `/Rainha_das_Lagrimas.jpg`,
        title: 'Rainha das Lágrimas',
        genre: 'Romance',
        description: 'Um casal em crise descobre que o amor ainda existe entre eles. Enquanto enfrentam desafios e traições, seu relacionamento é testado de maneiras inesperadas.',
        episodes: 20,
        releaseDate: '2021-03-01',
        ratings: [] as Avaliacao[] // Usando Avaliacao
      },
      {
        id: '3',
        image: `/Round_6.jpg`,
        title: 'Round 6',
        genre: 'Suspense',
        description: 'Centenas de pessoas endividadas participam de jogos infantis mortais em busca de um prêmio bilionário. Apenas um pode sobreviver e levar o dinheiro.',
        episodes: 10,
        releaseDate: '2021-09-17',
        ratings: [] as Avaliacao[] // Usando Avaliacao
      }
    ]);

    // Computando o dorama com base no ID da rota
    const dorama = computed(() => {
      const found = doramas.value.find(d => d.id === doramaId);
      if (!found) {
        alert('Dorama não encontrado!');
      }
      return found;
    });

    const showRatingModal = ref(false);
    const avaliacaoSalva = ref(false); // Controle da mensagem de sucesso

    // Função para fechar o modal
    const fecharModal = () => {
      showRatingModal.value = false;
    };

    // Função para lidar com a avaliação salva
    const handleSalvarAvaliacao = (avaliacao: Avaliacao) => {
      if (dorama.value) {
        const novaAvaliacao: Avaliacao = {
          ...avaliacao,
          id: (dorama.value.ratings.length + 1).toString(),
          data: new Date().toISOString(),
        };

        dorama.value.ratings.push(novaAvaliacao);
        avaliacaoSalva.value = true;

        setTimeout(() => {
          avaliacaoSalva.value = false;
        }, 2000);
      }
    };

    return {
      dorama,
      showRatingModal,
      fecharModal,
      handleSalvarAvaliacao,
      avaliacaoSalva
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

.success-message {
  background-color: #28a745;
  color: white;
  padding: 1rem;
  border-radius: 5px;
  margin-top: 1rem;
  text-align: center;
}
</style>
