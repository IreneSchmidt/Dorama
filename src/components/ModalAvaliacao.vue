<template>
  <div class="modal">
    <div class="modal-content">
      <h2>Avaliar: {{ dorama.title }}</h2>

      <!-- Componente para estrelas interativas -->
      <div class="stars-container">
        <EstrelasAvaliacao 
          v-model="rating" 
          :max="10"  
        />
      </div>

      <textarea 
        v-model="comentario" 
        placeholder="Deixe seu comentário..." 
        rows="4" 
      ></textarea>

      <button @click="salvarAvaliacao">Salvar Avaliação</button>

      <!-- Fechar Modal com X -->
      <span class="close" @click="fecharModal">&times;</span>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import EstrelasAvaliacao from '@/components/EstrelasAvaliacao.vue'

const props = defineProps({
  dorama: Object
})

const rating = ref(props.dorama.rating || 0) // Definindo o valor inicial de avaliação
const comentario = ref('')

const emit = defineEmits()

const fecharModal = () => {
  emit('fechar')
}

const salvarAvaliacao = () => {
  // Aqui você pode salvar a avaliação no banco de dados ou fazer outra ação
  console.log('Avaliação:', rating.value)
  console.log('Comentário:', comentario.value)
}
</script>

<style scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background: white;
  padding: 2rem;
  border-radius: 8px;
  max-width: 500px;
  width: 100%;
  text-align: center;
  position: relative;
}

.stars-container {
  margin: 1rem 0;
}

textarea {
  width: 95%;
  padding: 1rem;
  margin: 1rem 0;
  border-radius: 8px;
  border: 1px solid #ccc;
  font-size: 1rem;
}

button {
  background-color: #3498db;
  color: white;
  padding: 0.5rem 1.5rem;
  border-radius: 25px;
  margin: 1rem 0.5rem;
  cursor: pointer;
}

button:hover {
  background-color: #2980b9;
}

/* Estilo para o X (botão de fechar) */
.close {
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 2rem;
  cursor: pointer;
  color: #333;
}

.close:hover {
  color: #e74c3c;
}
</style>
