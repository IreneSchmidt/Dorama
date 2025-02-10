<template>
  <div class="auth-container">
    <div class="auth-card">
      <div class="auth-header">
        <h2>Criar Nova Conta</h2>
        <p>Junte-se à nossa comunidade de fãs de doramas</p>
      </div>

      <form @submit.prevent="handleRegister" class="auth-form">
        <div class="form-group">
          <label>Nome Completo</label>
          <input 
            type="text" 
            v-model="userData.name"
            placeholder="Seu nome completo"
            class="input-field"
          >
        </div>

        <div class="form-group">
          <label>Email</label>
          <input 
            type="email" 
            v-model="userData.email"
            placeholder="exemplo@email.com"
            class="input-field"
          >
        </div>

        <div class="form-group">
          <label>Senha</label>
          <input 
            type="password" 
            v-model="userData.password"
            placeholder="••••••••"
            class="input-field"
          >
        </div>

        <button type="submit" class="auth-button">
          <span v-if="!isLoading">Criar Conta</span>
          <div v-else class="loader"></div>
        </button>

        <p class="auth-link">
          Já tem conta? <router-link to="/login">Faça login</router-link>
        </p>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const isLoading = ref(false)
const userData = ref({
  name: '',
  email: '',
  password: ''
})

const handleRegister = async () => {
  isLoading.value = true
  setTimeout(() => {
    localStorage.setItem('userData', JSON.stringify(userData.value))
    router.push('/login')
    isLoading.value = false
  }, 1500)
}
</script>

<style scoped>
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
  box-shadow: 0 10px 30px rgba(0,0,0,0.15);
}

.auth-header {
  text-align: center;
  margin-bottom: 2rem;
}

.auth-header h2 {
  color: #2c3e50;
  margin-bottom: 0.5rem;
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
  transition: border-color 0.3s ease;
}

.input-field:focus {
  border-color: #3498db;
  outline: none;
}

.auth-button {
  background: #3498db;
  color: white;
  padding: 1rem;
  border: none;
  border-radius: 10px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.3s ease;
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
  margin: 0 auto;
}

@keyframes rotation {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
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