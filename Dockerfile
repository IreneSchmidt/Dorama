# Etapa de build do frontend
FROM node:20 AS build

# Define o diretório de trabalho dentro do container
WORKDIR /app

# Copia os arquivos do frontend para dentro do container
COPY package.json package-lock.json ./

# Instala as dependências do projeto
RUN npm ci

# Copia o restante dos arquivos do frontend
COPY . .

# Realiza o build do projeto Vue
RUN npm run build

# Define a imagem final com um servidor web para servir os arquivos estáticos
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html

# Expor a porta 80 para acessar o frontend
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
