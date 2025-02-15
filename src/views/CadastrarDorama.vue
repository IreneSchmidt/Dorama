<template>
  <div class="wrapper">
    <Navbar /> <!-- Navbar importada aqui -->

    <div class="content">
      <CadastrarDorama />
    </div>

  </div>
</template>

<script>
import CadastrarDorama from "../components/CadastrarDorama.vue";
import Navbar from '../components/NavbarCadastrarDorama.vue'; // Certifique-se de importar o Navbar

export default {
  components: {
    CadastrarDorama,
    Navbar,  // Registra o Navbar aqui
  },
};
</script>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: url('../../../../public/doramas.jpg') no-repeat center center;
  background-size: cover;
  align-items: center;
  justify-content: flex-start; /* Ajuste para que o conteúdo não fique no centro vertical */
  padding: 2rem;
}

.content {
  width: 100%;
  max-width: 800px; /* Tamanho reduzido do conteúdo */
  padding: 1rem;
  background: rgba(255, 255, 255, 0.8); /* Fundo leve para o formulário */
  margin-top: 4rem; /* Deixa o conteúdo abaixo do Navbar */
  border-radius: 8px;
}


</style>
