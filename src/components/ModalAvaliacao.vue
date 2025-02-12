<template>
  <div class="modal">
    <div class="modal-content">
      <!-- Mensagem de Alerta Customizada de Erro -->
      <p v-if="alertaVisivel" class="alert-message">Nenhuma avaliação foi realizada.</p>

      <!-- Mensagem de Sucesso -->
      <p v-if="avaliacaoSalva" class="success-message">Avaliação salva com sucesso!</p>

      <h2>{{ dorama.nome }}</h2>

      <!-- Seleção de Nota com Estrelas -->
      <div class="nota-container">
        <label for="nota"><strong>Nota:</strong></label>
        <div class="stars">
          <span 
            v-for="n in 10" 
            :key="n" 
            class="star" 
            :class="{ filled: n <= rating }"
            @click="setRating(n)"
          >
            &#9733;
          </span>
        </div>
      </div>

      <!-- Campo de Comentário -->
      <textarea 
        v-model="comentario" 
        placeholder="Deixe seu comentário..." 
        rows="4" 
      ></textarea>

      <!-- Botões de Ação -->
      <div class="botoes-container">
        <button @click="salvarAvaliacao">Enviar Avaliação</button>
        <button @click="fecharModal" class="cancelar">Cancelar</button>
      </div>

      <!-- Fechar Modal com X -->
      <span class="close" @click="fecharModal">&times;</span>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  dorama: Object,
  avaliacaoExistente: Object,
  usuarioAtual: String, // Adicione esta propriedade
})

const rating = ref(props.avaliacaoExistente?.estrelas || 0)
const comentario = ref(props.avaliacaoExistente?.comentario || '')
const avaliacaoSalva = ref(false)
const alertaVisivel = ref(false)

const emit = defineEmits(['fechar', 'salvar-avaliacao'])

const fecharModal = () => {
  emit('fechar')
}

const salvarAvaliacao = () => {
  if (rating.value === 0 && comentario.value.trim() === "") {
    alertaVisivel.value = true
    setTimeout(() => { alertaVisivel.value = false }, 3000)
    return
  }

  const avaliacao = {
    id: props.avaliacaoExistente?.id || `id-${new Date().getTime()}`, 
    data: new Date().toISOString(),
    estrelas: rating.value,
    comentario: comentario.value,
    doramaId: props.dorama.id, 
    nome: props.usuarioAtual || 'Anônimo', // Usa o nome correto do usuário
  }

  avaliacaoSalva.value = true

  setTimeout(() => {
    fecharModal()
  }, 1000)

}

const setRating = (n) => {
  rating.value = n
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
  z-index: 1000;
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

.nota-container {
  margin: 1rem 0;
}

.stars {
  display: flex;
  justify-content: center;
  gap: 5px;
  font-size: 2rem;
  color: #f1c40f;
  cursor: pointer;
}

.star {
  transition: color 0.2s ease;
}

.star.filled {
  color: #f39c12;
}

textarea {
  width: 95%;
  padding: 1rem;
  margin: 1rem 0;
  border-radius: 8px;
  border: 1px solid #ccc;
  font-size: 1rem;
}

.botoes-container {
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
}

button {
  background-color: #3498db;
  color: white;
  padding: 0.5rem 1.5rem;
  border-radius: 25px;
  cursor: pointer;
}

button.cancelar {
  background-color: #e74c3c;
}

button:hover {
  opacity: 0.9;
}

.close {
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 2rem;
  cursor: pointer;
  color: #333;
  z-index: 1001;
}

.close:hover {
  color: #e74c3c;
}

/* Estilos para o alerta de sucesso */
.success-message {
  background-color: #28a745;
  color: white;
  padding: 1rem;
  border-radius: 5px;
  margin-top: 1rem;
  text-align: center;
}

/* Estilos para o alerta de erro (mensagem de erro) */
.alert-message {
  position: absolute;
  top: 5%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #e74c3c;
  background-color: rgba(231, 76, 60, 0.1);
  border: 1px solid #e74c3c;
  padding: 0.25rem;
  border-radius: 8px;
  font-weight: bold;
  text-align: center;
  z-index: 1001;
  width: 80%;
  max-width: 300px;
}
</style>