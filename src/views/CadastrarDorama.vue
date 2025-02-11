<template>
  <div class="wrapper">
    <!-- Cabeçalho (Navbar) -->
    <nav class="navbar">
      <div class="navbar-brand">DoramaHub</div>
      <div class="navbar-links"></div>
    </nav>

    <!-- Conteúdo principal -->
    <main class="main-content">
      <h1 class="page-title">Cadastrar Dorama</h1>
      <CadastrarDorama />
    </main>

    <!-- Rodapé -->
    <footer class="site-footer">
      <p>© 2024 DoramaHub. Todos os direitos reservados.</p>
    </footer>
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

/* Cabeçalho fixo */
.navbar {
  width: 100%;
  background: #2c3e50;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
}

.navbar-brand {
  color: #fff;
  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: 1px;
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

/* Rodapé fixo */
.site-footer {
  width: 100%;
  background: #2c3e50;
  color: white;
  text-align: center;
  padding: 1.5rem;
  margin-top: auto;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
}
</style>