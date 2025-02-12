<template>
  <div class="stars" @mouseleave="resetHover">
    <span
      v-for="n in max"
      :key="n"
      :class="['star', { 'filled': n <= rating }]"
      @click="setRating(n)"
      @mouseover="setHover(n)"
      @mouseleave="resetHover"
    >
      ★
    </span>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  max: {
    type: Number,
    default: 5
  },
  modelValue: {
    type: Number,
    default: 0
  }
})

const rating = ref(props.modelValue)
const hoverIndex = ref(0) // Renomeando hoverStar para hoverIndex

// Função para definir a avaliação ao clicar na estrela
const setRating = (value) => {
  rating.value = value
  emit('update:modelValue', rating.value)
}

// Função para definir qual estrela está sendo destacada ao passar o mouse
const setHover = (value) => {
  hoverIndex.value = value
}

// Função para resetar o hover quando o mouse sair
const resetHover = () => {
  hoverIndex.value = 0
}
</script>

<style scoped>
.stars {
  display: inline-block;
}

.star {
  font-size: 2rem;
  color: #ccc;
  cursor: pointer;
  transition: color 0.3s ease;
}

.star.filled {
  color: #f39c12;
}

.star:hover {
  color: #f39c12;
}
</style>
