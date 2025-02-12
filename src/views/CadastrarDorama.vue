<template>
  <div class="wrapper">
    <!-- Cabeçalho (Navbar) -->


    <!-- Conteúdo principal -->
    <main class="main-content">
      <h1 class="page-title">Cadastrar Dorama</h1>
      <CadastrarDorama />
    </main>

    
  </div>
</template>

<script>
import CadastrarDorama from "../components/CadastrarDorama.vue";

export default {
  components: {
    CadastrarDorama,
  },
};
</script>

<style scoped>
/* Garante que a tela toda seja ocupada corretamente */
.wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}



/* Conteúdo principal */
.main-content {
  flex: 1;
  max-width: 600px;
  margin: 80px auto 2rem; /* Ajuste para não ficar sob o cabeçalho */
  padding: 1rem;
  text-align: center;
}

.page-title {
  color: #2c3e50;
  font-size: 2.5rem;
  margin-bottom: 3rem;
}


</style>