export interface BaseConfig {

    id?: string;                 // Identificador do dorama (opcional para criação, obrigatório para edição/exclusão)
        titulo?: string;             // Título do dorama (opcional caso seja usado para filtragem)
        descricao?: string;          // Descrição do dorama
        qtdEpisodios?: number;       // Quantidade de episódios
        dataLancamento?: string;     // Data de lançamento (formato ISO "YYYY-MM-DD")
        generoId?: string;           // ID do gênero selecionado (caso precise vincular um gênero)

    
    };