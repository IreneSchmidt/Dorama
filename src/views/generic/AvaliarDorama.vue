<template>
  <div class="avaliar-dorama">
    <h2>Avaliar {{ dorama.nome }}</h2>

    <form @submit.prevent="salvarAvaliacao">
      <div class="input-group">
        <label for="comentario">Comentário</label>
        <textarea v-model="comentario" id="comentario" placeholder="Escreva seu comentário..." required></textarea>
      </div>

      <div class="input-group">
        <label for="estrelas">Nota</label>
        <div class="stars">
          <span v-for="n in 10" :key="n" @click="estrelas = n" :class="{ active: estrelas >= n }">★</span>
        </div>
      </div>

      <button type="submit">Enviar Avaliação</button>
    </form>

    <div v-if="erro" class="error-message">
      <p>{{ erro }}</p>
    </div>

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

const doramaId = useRoute().params.id;
const estrelas = ref(0);
const comentario = ref('');
const erro = ref(null);
const mostrarModal = ref(false);

const salvarAvaliacao = async () => {
  if (estrelas.value < 1 || estrelas.value > 10) {
    erro.value = 'A nota deve ser entre 1 e 10.';
    return;
  }

  const avaliacao = {
    id: `id-${new Date().getTime()}`,
    data: new Date().toISOString(),
    estrelas: estrelas.value,
    comentario: comentario.value,
    doramaId: doramaId
  };

  try {
    console.log('Salvando avaliação:', avaliacao);
    estrelas.value = 0;
    comentario.value = '';
    erro.value = null;
    mostrarModal.value = true;
  } catch (error) {
    erro.value = 'Erro ao enviar avaliação, tente novamente.';
    console.error('Erro ao salvar avaliação:', error);
  }
};

const fecharModal = () => {
  mostrarModal.value = false;
};

const handleSalvarAvaliacao = (avaliacao) => {
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

.stars span {
  font-size: 1.5rem;
  cursor: pointer;
  color: #ccc;
}

.stars span.active {
  color: #f1c40f;
}
</style>
