# 📡 Backend - Desafio Fullstack Bondy

## 🚀 Sobre o Projeto
API GraphQL desenvolvida com Node.js e MongoDB para realizar autenticação de usuários.

## 📂 Estrutura do Projeto
```
packages/
    backend/
        src/
            graphql/
            memoryDB/
            models/
            resolvers/
            typeDefs/
        package.json
        serverless.yml
```

## 🛠️ Tecnologias Utilizadas
- Node.js (v18)
- GraphQL com Apollo Server
- MongoDB (via Mongoose)
- bcrypt (criptografia de senhas)
- AWS Lambda (com Serverless Framework)
- Lerna (monorepo management)

## 📌 Como Executar o Backend
### 1. Instalar Dependências
```bash
yarn install
```
### 2. Rodar o Backend Localmente
```bash
yarn lerna run start --scope=backend
```
O servidor estará disponível em `http://localhost:3000`

## 📊 Testando a API GraphQL
Acesse o Playground em:
```bash
http://localhost:3000/local/desafio
```
### Exemplo de Mutation (Login):
```graphql
mutation {
  login(email: "desafio@bondy.com.br", password: "123456") {
    name
    email
    company
  }
}
```

### Exemplo de Retorno:
```json
{
  "data": {
    "login": {
      "name": "Usuário teste",
      "email": "desafio@bondy.com.br",
      "company": "Desafio Bondy"
    }
  }
}
```

---
✅ Backend pronto! Agora podemos avançar para o Frontend. 🚀

