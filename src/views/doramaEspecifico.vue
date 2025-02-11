<template>
    <div class="dorama-detail">
      <div class="header">
        <h1>{{ dorama?.nome }}</h1>
        <button @click="openAvaliarForm">Avaliar Dorama</button>
      </div>
  
      <!-- Exibindo a imagem do dorama -->
      <div class="imagem-dorama">
        <img :src="dorama?.imagem" :alt="dorama?.nome" />
      </div>
  
      <p><strong>Descrição:</strong> {{ dorama?.descricao }}</p>
      <p><strong>Quantidade de Episódios:</strong> {{ dorama?.qtdEpisodios }}</p>
      <p><strong>Data de Lançamento:</strong> {{ dorama?.dataLancamento }}</p>
  
      <div class="avaliacoes">
        <h2>Avaliações</h2>
        <div v-if="avaliacoes.length === 0">Nenhuma avaliação ainda.</div>
        <div v-for="avaliacao in avaliacoes" :key="avaliacao.id" class="avaliacao">
          <p><strong>{{ avaliacao.nome }}</strong> - {{ formatDate(avaliacao.data) }}</p>
          <div class="estrelas-container">
            <div class="estrelas">
              <span v-for="star in 5" :key="star" :class="star <= avaliacao.estrelas ? 'filled' : ''">★</span>
            </div>
            <span class="nota">{{ avaliacao.estrelas }}.0</span>
          </div>
          <p>{{ avaliacao.comentario }}</p>
        </div>
      </div>
  
      <!-- Modal de Avaliação -->
      <ModalAvaliacao 
        v-if="showAvaliarForm"
        :dorama="dorama"
        :avaliacaoExistente="avaliacaoExistente"
        @fechar="closeAvaliarForm"
        @salvar-avaliacao="salvarAvaliacao"
      />
    </div>
  </template>
  
  <script>
  import { mockDorama } from '@/services/mockDoramaService'; // Importando o mockDorama
  import ModalAvaliacao from '@/components/ModalAvaliacao.vue'; // Importando o componente ModalAvaliacao
  import '@/styles/doramaEspecifico.css'; // Importação do CSS
  
  export default {
    name: 'DoramaDetail',
    components: {
      ModalAvaliacao,
    },
    data() {
      return {
        dorama: null,
        avaliacoes: [],
        showAvaliarForm: false,
        avaliacaoExistente: null, // Armazena a avaliação existente do usuário
      };
    },
    mounted() {
      // Usando o mockDorama para preencher os dados
      this.dorama = mockDorama;
      this.avaliacoes = mockDorama.avaliacoes || [];
  
      // Verifica se o usuário já fez uma avaliação
      this.avaliacaoExistente = this.avaliacoes.find(avaliacao => avaliacao.nome === 'Usuário Atual'); // Substitua 'Usuário Atual' pelo nome do usuário logado
    },
    methods: {
      openAvaliarForm() {
        this.showAvaliarForm = true;
      },
      closeAvaliarForm() {
        this.showAvaliarForm = false;
      },
      salvarAvaliacao(avaliacao) {
        // Verifica se é uma edição ou uma nova avaliação
        const index = this.avaliacoes.findIndex(av => av.id === avaliacao.id);
        if (index !== -1) {
          // Edita a avaliação existente
          this.avaliacoes.splice(index, 1, avaliacao);
        } else {
          // Adiciona uma nova avaliação
          this.avaliacoes.push(avaliacao);
        }
        this.closeAvaliarForm();
      },
      formatDate(date) {
        const options = {
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
        };
        return new Date(date).toLocaleDateString('pt-BR', options);
      },
    },
  };
  </script>