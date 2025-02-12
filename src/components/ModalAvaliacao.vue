<template>
  <div class="modal">
    <div class="modal-content">
      <h2>{{ dorama.nome }}</h2>

      <!-- Exibir a nota selecionada -->
      <p><strong>Nota:</strong> {{ rating }}</p>

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

      <!-- Mensagem de sucesso -->
      <p v-if="avaliacaoSalva" class="success-message">Avaliação salva com sucesso!</p>

      <!-- Fechar Modal com X -->
      <span class="close" @click="fecharModal">&times;</span>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import EstrelasAvaliacao from '@/components/EstrelasAvaliacao.vue'



const props = defineProps({
  dorama: Object,
  avaliacaoExistente: Object, // Recebe a avaliação existente
})

const rating = ref(props.avaliacaoExistente?.estrelas || 0) // Preenche com a nota existente, se houver
const comentario = ref(props.avaliacaoExistente?.comentario || '') // Preenche com o comentário existente, se houver
const avaliacaoSalva = ref(false) // Controle de mensagem de sucesso

const emit = defineEmits(['fechar', 'salvar-avaliacao'])

const fecharModal = () => {
  emit('fechar')
}

const salvarAvaliacao = () => {
  // Cria o objeto de avaliação
  const avaliacao = {
    id: props.avaliacaoExistente?.id || `id-${new Date().getTime()}`, // Mantém o ID existente ou gera um novo
    data: new Date().toISOString(),
    estrelas: rating.value,
    comentario: comentario.value,
    doramaId: props.dorama.id, // ID do dorama
    nome: 'Usuário Atual', // Substitua pelo nome do usuário logado
  }

  // Emite a avaliação para o componente pai
  emit('salvar-avaliacao', avaliacao)

  // Exibe a mensagem de sucesso
  avaliacaoSalva.value = true

  // Fecha o modal após 2 segundos
  setTimeout(() => {
    fecharModal()
  }, 2000)
}
</script>

<style>
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

.success-message {
  color: green;
  margin-top: 1rem;
}
</style>
