
<template>
  <div class="modal-overlay">
    <div class="modal-content">
      <h3>Avalie o Dorama</h3>
      <form @submit.prevent="submitAvaliar">
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

        <button type="submit">Salvar Avaliação</button>
      </form>
      <button @click="fecharModal">Fechar</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'ModalAvaliacao',
  props: {
    dorama: Object
  },
  setup(props, { emit }) {
    const comentario = ref('');
    const estrelas = ref(0);

    const fecharModal = () => {
      emit('fechar');
    };

    const submitAvaliar = () => {
      if (estrelas.value >= 1 && estrelas.value <= 10) {
        const avaliacao = {
          user: 'Usuário', // Aqui você pode personalizar com o nome do usuário
          score: estrelas.value,
          comment: comentario.value,
          data: new Date().toISOString()
        };
        emit('salvar-avaliacao', avaliacao);
        fecharModal();
      } else {
        alert('Nota inválida');
      }
    };

    return {
      comentario,
      estrelas,
      fecharModal,
      submitAvaliar
    };
  }
});
</script>

<style scoped>
.modal-overlay {
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
  border-radius: 10px;
  max-width: 500px;
  width: 100%;
}

.input-group {
  margin-bottom: 1rem;
}

.input-group label {
  display: block;
}

button {
  background-color: #3498db;
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  cursor: pointer;
  border-radius: 5px;
}

button:hover {
  background-color: #2980b9;
}
</style>
