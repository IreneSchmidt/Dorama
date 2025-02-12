import axios from 'axios';
import Avaliacao from '../model/generic/Avaliacao'; // Importando o modelo correto para a Avaliação

const API_URL = 'https://api.exemplo.com'; // Substitua com a URL da sua API

// Função para enviar avaliação para a API
export const enviarAvaliacaoParaApi = async (avaliacao: Avaliacao) => {
  try {
    const response = await axios.post(`${API_URL}/avaliacoes`, avaliacao, {
      headers: { 'Content-Type': 'application/json' }
    });

    // Retornar a resposta da API
    return response.data;
  } catch (error) {
    console.error('Erro ao enviar avaliação:', error);
    throw error; // Relança o erro para ser tratado no ponto onde for chamado
  }
};

// Função para buscar um dorama específico pela ID
export const buscarDoramaPorId = async (id: string) => {
  try {
    const response = await axios.get(`${API_URL}/doramas/${id}`);

    // Retornar o dorama encontrado
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar dorama:', error);
    throw error; // Relança o erro para ser tratado no ponto onde for chamado
  }
};

// Função para buscar avaliações de um dorama específico pela ID
export const getAvaliacoes = async (doramaId: string) => {
  try {
    const response = await axios.get(`${API_URL}/doramas/${doramaId}/avaliacoes`);
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar avaliações:', error);
    throw error;
  }
};
