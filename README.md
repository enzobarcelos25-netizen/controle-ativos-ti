# Controle de Ativos TI

Front-end em React para cadastro e listagem de ativos de TI.

<p align="center">
  <img src="https://img.shields.io/badge/React-111?style=for-the-badge&logo=react" alt="React" />
  <img src="https://img.shields.io/badge/Vite-111?style=for-the-badge&logo=vite" alt="Vite" />
  <img src="https://img.shields.io/badge/JavaScript-111?style=for-the-badge&logo=javascript" alt="JavaScript" />
</p>

## Visao geral

Este projeto simula uma tela interna de suporte ou infraestrutura para registrar e visualizar ativos de TI.

O foco aqui e praticar React em um contexto proximo da rotina corporativa: formulario, lista, componentes separados e dados mockados.

## Funcionalidades

- Cadastro de ativos.
- Listagem de equipamentos.
- Componente individual para cada item.
- Dados mockados em `src/data/ativosMock.js`.
- Estrutura organizada por componentes.

## Stack

- React
- Vite
- JavaScript
- CSS

## Estrutura

```txt
controle-ativos-ti/
  src/
    componentes/
      Formulario/
      Item/
      ListaAtivos.jsx
    data/
      ativosMock.js
    App.jsx
    main.jsx
```

## Como rodar

```bash
npm install
npm run dev
```

Acesse o endereco exibido pelo Vite, normalmente:

```txt
http://localhost:5173
```

## Aprendizados praticados

- Componentizacao em React.
- Passagem de dados entre componentes.
- Renderizacao de listas.
- Separacao entre dados e interface.
- Organizacao inicial de projeto front-end.

## Proximos passos

- Persistir ativos em API ou banco.
- Adicionar edicao e exclusao.
- Criar filtros por tipo, usuario ou status.
- Melhorar responsividade.
- Adicionar prints da tela.

## Status

Projeto de estudo aplicado a um problema real de TI corporativa.
