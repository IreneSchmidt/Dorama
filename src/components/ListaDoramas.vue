<!-- src/components/DoramaList.vue -->
<template>
  <div class="dorama-container">
    <h1>Lista de Doramas</h1>
    
    <div class="dorama-grid">
      <div 
        v-for="dorama in doramas" 
        :key="dorama.id" 
        class="dorama-card"
        @click="selectDorama(dorama)"
      >
        <div class="card-header">
          <h2>{{ dorama.title }}</h2>
          <span class="rating">{{ dorama.rating }}/5</span>
        </div>
        <div class="card-body">
          <p><strong>Gênero:</strong> {{ dorama.genre }}</p>
          <p><strong>Ano:</strong> {{ dorama.year }}</p>
        </div>
      </div>
    </div>

    <!-- Modal de Detalhes -->
    <div v-if="selectedDorama" class="dorama-details">
      <div class="details-content">
        <button class="close-btn" @click="selectedDorama = null">×</button>
        <h2>{{ selectedDorama.title }}</h2>
        <div class="details-info">
          <p><strong>Gênero:</strong> {{ selectedDorama.genre }}</p>
          <p><strong>Ano:</strong> {{ selectedDorama.year }}</p>
          <p><strong>Avaliação:</strong> {{ selectedDorama.rating }}/5</p>
          <p class="synopsis">{{ selectedDorama.synopsis }}</p>
        </div>
        
        <div class="comments-section">
          <h3>Comentários</h3>
          <div v-for="(comment, index) in selectedDorama.comments" :key="index" class="comment">
            <strong>{{ comment.author }}:</strong>
            <p>{{ comment.text }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedDorama: null,
      doramas: [
        {
          id: 1,
          title: 'Itaewon Class',
          genre: 'Drama',
          year: 2020,
          rating: 4.8,
          synopsis: 'A história de um jovem que abre um restaurante em Itaewon enquanto busca vingança...',
          comments: [
            { author: 'Júlia', text: 'Adorei o desenvolvimento dos personagens!' },
            { author: 'Carlos', text: 'Melhor dorama do ano!' }
          ]
        },
        {
          id: 2,
          title: 'Crash Landing on You',
          genre: 'Romance',
          year: 2019,
          rating: 4.9,
          synopsis: 'Uma herdeira coreana acidentalmente pousa na Coreia do Norte...',
          comments: [
            { author: 'Ana', text: 'História de amor incrível!' }
          ]
        }
        // Adicione mais doramas conforme necessário
      ]
    }
  },
  methods: {
    selectDorama(dorama) {
      this.selectedDorama = dorama
    }
  }
}
</script>

<style scoped>
.dorama-container {
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.dorama-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
}

.dorama-card {
  background: white;
  border-radius: 10px;
  padding: 1rem;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  cursor: pointer;
  transition: transform 0.2s;
}

.dorama-card:hover {
  transform: translateY(-5px);
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.rating {
  background: #4CAF50;
  color: white;
  padding: 0.3rem 0.6rem;
  border-radius: 5px;
}

.dorama-details {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.details-content {
  background: white;
  padding: 2rem;
  border-radius: 10px;
  max-width: 600px;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
}

.close-btn {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
}

.synopsis {
  margin: 1rem 0;
  color: #666;
}

.comments-section {
  margin-top: 2rem;
  border-top: 1px solid #eee;
  padding-top: 1rem;
}

.comment {
  margin: 1rem 0;
  padding: 1rem;
  background: #f8f9fa;
  border-radius: 5px;
}
</style>