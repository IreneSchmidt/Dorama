<!-- src/App.vue -->
<template>
  <div class="container">
    <h1>Contador Vue</h1>
    <p class="counter">{{ count }}</p>
    <div class="buttons">
      <button @click="increment">+</button>
      <button @click="reset">Zerar</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0
    }
  },
  methods: {
    increment() {
      this.count++
    },
    reset() {
      this.count = 0
    }
  }
}
</script>

<style>
body {
  font-family: Arial, sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  margin: 0;
  background-color: #f0f0f0;
}

.container {
  text-align: center;
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
}

.counter {
  font-size: 3rem;
  margin: 1rem 0;
  color: #2c3e50;
}

button {
  font-size: 1.2rem;
  padding: 0.5rem 1rem;
  margin: 0 0.5rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background-color: #3498db;
  color: white;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #2980b9;
}

button:active {
  transform: scale(0.98);
}
</style>