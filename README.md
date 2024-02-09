# Teste prático CartSys Software 

## Desafio prático Wizzard Creator

### Tecnologias
- Next.js
- Zustand
- Typescript
- Tailwind.css
- Cypress.js

### Descrição

O desafio consiste em criar uma interface para a criação dinâmica de wizards.

##### Tela Inicial:
- Exibição de todas as wizards criadas e gravadas.
- Menu com a opção de abrir o "Wizard Creator".

#### Wizard Creator:

O foco principal da aplicação, funciona como um criador de templates.
Seleção de Orientação:
- O usuário define se o wizard será apresentado de maneira horizontal ou vertical.

##### Seleção de Componentes:
- Lista de todos os componentes disponíveis, como formulários, cards, galeria de imagens, etc.

##### Criação do Wizard:
- Após selecionar a orientação, o usuário pode adicionar páginas ao wizard.
- Para cada página, o usuário pode escolher e adicionar componentes (menu de seleção, lista, dropdown, etc.).
- A visualização do design do wizard é atualizada conforme o usuário adiciona componentes.
Visualização do Wizard Criado:
- O wizard criado é mostrado de forma indicativa na tela, destacando a orientação escolhida e os componentes adicionados.

##### Exemplo de Criação pelo Usuário:
- O usuário decide criar um Wizard vertical.
- Adiciona uma página chamada "Cadastro de Usuário".
- Na página "Cadastro de Usuário", insere três inputs para nome, e-mail e senha.
- Cria outra página chamada "Preferências".
- Na página "Preferências", adiciona dois inputs para configurações e um dropdown para seleção de tema.

### Fluxo Geral:

##### Na Tela Inicial:
- Todos os wizards criados são exibidos como opções para o usuário.
- O usuário pode navegar entre as páginas do wizard em um menu vertical ou horizontal, conforme a orientação escolhida.
- Preenchimento dos inputs e interação com os componentes são possíveis.

##### Objetivo Final:
A aplicação visa proporcionar uma forma simples e dinâmica para que o usuário crie seus próprios wizards e telas.

##### Observações:
- A aplicação deve ser responsiva para oferecer uma experiência consistente em diferentes dispositivos.
- A integração de testes usando Cypress.js é encorajada para garantir a robustez da aplicação.
- Considerar a modularização do código para facilitar a manutenção e escalabilidade

## Utilizando a aplicação

Faça um clone deste repositório.

Certifique que você tenha o [NodeJS](https://nodejs.org/en) entalado em seu computador.

Abra o terminal na pasta do repositório e instale as dependencias com:

```bash
npm install
```
Apos a instalação rode a aplicação com:

```bash
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no seu navegador de preferencia para utilizar a aplicação.

### Observações

- Ainda é necessário que os testes sejam feitos.
- A responsividade ainda não está totalmente pronta.
- Dificuldades na utilização da biblioteca Zustand, fizem com que os wizzards se perdem apos a criação, assim deixei dois wizzards prontos para poder testar. Ele é guardado na store, mas não é mantido quando trocamos de página, assim necessita de coreções.
- Espero que vocês possam avaliar o que foi feito.

Obrigado.