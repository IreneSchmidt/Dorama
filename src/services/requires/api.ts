
import  Avaliacao  from "../model/generic/Avaliacao";  // Importando o modelo correto para a Avaliação

// Função para enviar avaliação para a API
export const enviarAvaliacaoParaApi = async (avaliacao: Avaliacao) => {
  try {
    const response = await fetch('/api/avaliacoes', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(avaliacao)
    });

    // Verificar se a resposta da API foi bem-sucedida
    if (!response.ok) {
      throw new Error(`Erro ${response.status}: ${response.statusText}`);
    }
    
    // Retornar a resposta em formato JSON
    return await response.json();
  } catch (error) {
    // Exibir o erro no console e relançá-lo
    console.error('Erro ao enviar avaliação:', error);
    throw error;  // Relança o erro para ser tratado no ponto onde for chamado
  }
};

// Função para buscar um dorama específico pela ID
export const buscarDoramaPorId = async (id: string) => {
  try {
    const response = await fetch(`/api/doramas/${id}`);

    // Verificar se a resposta da API foi bem-sucedida
    if (!response.ok) {
      throw new Error(`Erro ao buscar dorama: ${response.statusText}`);
    }

    // Retornar o dorama encontrado
    const dorama = await response.json();
    return dorama;
  } catch (error) {
    // Exibir o erro no console e relançá-lo
    console.error('Erro ao buscar dorama:', error);
    throw error;  // Relança o erro para ser tratado no ponto onde for chamado
  }
};
