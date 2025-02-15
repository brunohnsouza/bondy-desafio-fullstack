# Frontend - Bondy Desafio Fullstack

## Descrição
Este é o projeto frontend para o desafio fullstack da Bondy, desenvolvido em HTML, CSS e JavaScript (vanilla).

## Pré-requisitos
- Node.js 18+
- Yarn (gerenciador de pacotes)

## Instalação
1. Acesse a pasta do frontend:
   ```bash
   cd packages/frontend
   ```
2. Instale as dependências com:
   ```bash
   yarn install
   ```

## Execução
Para abrir o projeto no navegador, utilize um servidor local. Por exemplo, com o `http-server`:
```bash
npx http-server .
```
O frontend estará acessível em `http://localhost:8080` (ou a porta exibida no terminal).

## Funcionalidade
- Página de Login com campos de e-mail e senha.
- Conecta com a mutation de login da API GraphQL.
- Exibe uma página de boas-vindas em caso de sucesso.

## Estrutura
```
packages/frontend/
    handler.js
    index.html
    welcome.html
    style.css
    package.json
```

## Contato
Desenvolvido para o desafio Bondy.

