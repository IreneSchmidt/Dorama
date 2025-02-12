<template>
  <div class="avaliar-dorama">
    <h2>Avaliar {{ dorama.nome }}</h2>

    <form @submit.prevent="salvarAvaliacao">
      <div class="input-group">
        <label for="comentario">Comentário</label>
        <textarea v-model="comentario" id="comentario" placeholder="Escreva seu comentário..." required></textarea>
      </div>

      <div class="input-group">
        <label for="estrelas">Nota (1 a 10)</label>
        <input
          v-model="estrelas"
          type="number"
          id="estrelas"
          min="1"
          max="10"
          required
        />
      </div>

      <button type="submit">Enviar Avaliação</button>
    </form>

    <div v-if="erro" class="error-message">
      <p>{{ erro }}</p>
    </div>

    <!-- Modal para exibir após o envio -->
    <ModalAvaliacao 
      v-if="mostrarModal" 
      :dorama="dorama" 
      @fechar="fecharModal" 
      @salvar-avaliacao="handleSalvarAvaliacao"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import ModalAvaliacao from '../../components/ModalAvaliacao.vue';  

const doramaId = useRoute().params.id; // Obtendo o ID do dorama da URL
const estrelas = ref(0);
const comentario = ref('');
const erro = ref(null);
const mostrarModal = ref(false); // Controle de exibição do modal

// Função para salvar avaliação
const salvarAvaliacao = async () => {
  if (estrelas.value < 1 || estrelas.value > 10) {
    erro.value = 'A nota deve ser entre 1 e 10.';
    return;
  }

  // Criar o objeto de avaliação
  const avaliacao = {
    id: `id-${new Date().getTime()}`,  // Gerar um ID único para a avaliação
    data: new Date().toISOString(),
    estrelas: estrelas.value,
    comentario: comentario.value,
    doramaId: doramaId  // Associar a avaliação com o dorama
  };

  try {
    // Enviar a avaliação para a API
    const resposta = await useAvaliacaoStore.adicionarAvaliacao(avaliacao);
    if (resposta) {
      // Após sucesso, limpar campos
      estrelas.value = 0;
      comentario.value = '';
      erro.value = null; // Limpar erros
      mostrarModal.value = true; // Exibir o modal
    }
  } catch (error) {
    erro.value = 'Erro ao enviar avaliação, tente novamente.';
    console.error('Erro ao salvar avaliação:', error);
  }
};

// Função para fechar o modal
const fecharModal = () => {
  mostrarModal.value = false;
};

// Função para lidar com a avaliação salva
const handleSalvarAvaliacao = (avaliacao) => {
  // Aqui você pode adicionar a avaliação à lista de avaliações do dorama
  console.log('Avaliação salva:', avaliacao);
};
</script>

<style scoped>
.avaliar-dorama {
  max-width: 600px;
  margin: 0 auto;
}

.input-group {
  margin-bottom: 1rem;
}

.input-group label {
  display: block;
  font-weight: bold;
}

.input-group input,
.input-group textarea {
  width: 100%;
  padding: 0.5rem;
  font-size: 1rem;
  margin-top: 0.5rem;
}

button {
  background-color: #3498db;
  color: white;
  padding: 0.8rem 2rem;
  border: none;
  cursor: pointer;
  border-radius: 5px;
}

button:hover {
  background-color: #2980b9;
}

.error-message {
  color: red;
  font-size: 1rem;
  margin-top: 1rem;
}
</style>