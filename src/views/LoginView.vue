import Footer from '../components/Footer.vue'; 


<template>
  <div class="home-container">
    <!-- Navbar -->
    <nav class="navbar">
      <div class="navbar-brand">DoramaHub</div>
      <div class="navbar-links">
        <router-link to="/login" class="nav-button">Entrar</router-link>
        <router-link to="/register" class="nav-button">Criar Conta</router-link>
      </div>
    </nav>

    <!-- Tela de Login -->
    <div class="auth-container">
      <div class="auth-card">
        <div class="auth-header">
          <h2>Bem-vindo de Volta</h2>
          <p>Acesse sua conta para continuar</p>
        </div>

        <form @submit.prevent="handleLogin" class="auth-form">
          <div class="form-group">
            <label>Email</label>
            <input 
              type="email" 
              v-model="credentials.email"
              placeholder="exemplo@email.com"
              class="input-field"
            />
          </div>

          <div class="form-group">
            <label>Senha</label>
            <input 
              type="password" 
              v-model="credentials.password"
              placeholder="••••••••"
              class="input-field"
            />
          </div>

          <button type="submit" class="auth-button">
            <span v-if="!isLoading">Entrar</span>
            <div v-else class="loader"></div>
          </button>

          <p class="auth-link">
            Novo aqui? <router-link to="/register">Crie uma conta</router-link>
          </p>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>

import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const isLoading = ref(false);
const credentials = ref({
  email: "",
  password: "",
});

const handleLogin = async () => {
  isLoading.value = true;
  setTimeout(() => {
    localStorage.setItem("isAuthenticated", "true");
    router.push("/");
    isLoading.value = false;
  }, 1500);
};
</script>

<style scoped>
/* Estilização da Navbar */
.navbar {
  background: #2c3e50;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.navbar-brand {
  font-family: 'Lobster', cursive;
  font-size: 2.5rem;
  color: #ff6f91; /* Cor rosa para o texto */
  text-decoration: none;
  transition: color 0.3s ease;
  cursor: pointer;
}

.navbar-links {
  display: flex;
  gap: 1.5rem;
}

.nav-link {
  color: #ecf0f1;
  text-decoration: none;
  transition: color 0.3s ease;
}

.nav-button {
  background: #3498db;
  color: white;
  padding: 0.5rem 1.5rem;
  border-radius: 20px;
  text-decoration: none;
}

.nav-button:hover {
  background: #2980b9;
}

/* Estilização da Tela de Login */
.auth-container {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #3498db 0%, #2c3e50 100%);
  padding: 2rem;
}

.auth-card {
  background: white;
  border-radius: 20px;
  width: 100%;
  max-width: 450px;
  padding: 2.5rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
}

.auth-header {
  text-align: center;
  margin-bottom: 2rem;
}

.auth-header h2 {
  color: #2c3e50;
  font-size: 1.8rem;
}

.auth-header p {
  color: #7f8c8d;
}

.auth-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.input-field {
  width: 100%;
  padding: 1rem;
  border: 2px solid #e0e0e0;
  border-radius: 10px;
  font-size: 1rem;
}

.input-field:focus {
  border-color: #3498db;
  outline: none;
}

.auth-button {
  background: #3498db;
  color: white;
  padding: 1rem;
  border-radius: 10px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
}

.auth-button:hover {
  background: #2980b9;
}

.loader {
  width: 24px;
  height: 24px;
  border: 3px solid #fff;
  border-bottom-color: transparent;
  border-radius: 50%;
  animation: rotation 1s linear infinite;
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.auth-link {
  text-align: center;
  color: #7f8c8d;
}

.auth-link a {
  color: #3498db;
  text-decoration: none;
  font-weight: 500;
}

.auth-link a:hover {
  text-decoration: underline;
}
</style>
