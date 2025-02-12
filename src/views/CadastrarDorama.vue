<template>
  <div class="wrapper">
    <CadastrarDorama />
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
  background: url('../../../../public/doramas.jpg') no-repeat center center;
  background-size: cover;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}
</style>
