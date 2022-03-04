# imagem do node 
FROM alpine:3.14

#versao do node para instalacao
ENV NODE_VERSION 17.4.0

#diretorio da nossa aplicacao no docker
WORKDIR /app

#adicionar todos os modulos do nosso projeto
ENV PATH /app/node_modules/.bin:$PATH

# instalando todos os pacotes novos da nossa aplicacao
COPY package.json ./
COPY package-lock.json ./
RUN npm install --silent
RUN npm install react-scripts@3.4.1 -g --silent

# adicionar nosso contexto da aplicacao
COPY . ./

# inicializar o nosso projeto
CMD ["npm", "start"]