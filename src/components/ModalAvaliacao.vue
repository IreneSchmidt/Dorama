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
          <label for="estrelas">Nota</label>
          <div class="stars">
            <span v-for="n in 10" :key="n" @click="estrelas = n" :class="{ active: estrelas >= n }">★</span>
          </div>
        </div>

        <button type="submit">Salvar Avaliação</button>
      </form>
      <button class="close-btn" @click="fecharModal">Cancelar</button>
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
          user: 'Usuário',
          score: estrelas.value,
          comment: comentario.value,
          data: new Date().toISOString()
        };
        emit('salvar-avaliacao', avaliacao);
        fecharModal();
      } else {
        alert('Escolha uma nota válida.');
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
/* Fonte global */
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap');

* {
  font-family: 'Poppins', sans-serif;
  text-align: center;
}

/* Fundo escurecido */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Caixa do modal */
.modal-content {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  max-width: 500px;
  width: 100%;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
}

/* Campos do formulário */
.input-group {
  margin-bottom: 1rem;
  text-align: center;
}

.input-group label {
  display: block;
  font-weight: bold;
  margin-bottom: 0.3rem;
}

/* Input e Textarea */
.input-group textarea {
  width: 100%;
  padding: 0.6rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  text-align: left;
}

/* Botões */
button {
  background-color: #3498db;
  color: white;
  padding: 0.8rem 1.5rem;
  border: none;
  cursor: pointer;
  border-radius: 8px;
  font-size: 1rem;
  transition: all 0.3s;
  margin-top: 10px;
}

button:hover {
  background-color: #2980b9;
}

/* Botão de fechar */
.close-btn {
  background-color: #e74c3c;
}

.close-btn:hover {
  background-color: #c0392b;
}

/* Estilização das estrelas */
.stars {
  display: flex;
  justify-content: center;
  gap: 5px;
}

.stars span {
  font-size: 1.8rem;
  cursor: pointer;
  color: #ccc;
  transition: color 0.3s;
}

.stars span.active {
  color: #f1c40f;
}
</style>
