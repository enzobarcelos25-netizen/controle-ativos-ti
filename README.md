# Controle de Ativos TI

Aplicacao front-end em React para cadastro e listagem de ativos de TI.

O projeto simula uma tela simples de controle usada por suporte ou infraestrutura para registrar equipamentos, visualizar itens cadastrados e praticar componentizacao no React.

## Funcionalidades

- Formulario para cadastro de ativos.
- Lista de ativos cadastrados.
- Componente individual para exibicao de item.
- Dados mockados em `src/data/ativosMock.js`.
- Estrutura separada em componentes.

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

Acesse o endereco exibido pelo Vite no terminal, normalmente:

```txt
http://localhost:5173
```

## Aprendizados praticados

- Criacao de componentes React.
- Passagem de dados entre componentes.
- Organizacao de pastas.
- Uso de estado e renderizacao de listas.
- Separacao entre dados mockados e interface.

## Proximos passos

- Persistir os ativos em API ou banco de dados.
- Adicionar edicao e exclusao de ativos.
- Criar filtros por tipo, usuario ou status.
- Melhorar layout responsivo.
- Adicionar README com prints da tela.

## Status

Projeto de estudo aplicado a um problema real de TI corporativa.
