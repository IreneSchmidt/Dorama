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
import '@/styles/modalAvaliacao.css'; // Importação do CSS



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

