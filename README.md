# Tela de Login - React

## 📋 Descrição do Projeto

Este projeto eu criei no figma e programei do zero!

Este é um projeto de **Tela de Login e Cadastro** desenvolvido com **React 19** e **Vite**. É uma aplicação frontend simples que implementa duas telas principais:

- **Tela de Login**: Permite que o usuário insira email e senha para fazer login. Inclui um botão para criar uma nova conta.
- **Tela de Cadastro (Formulário)**: Permite o registro de novos usuários com nome completo, email e senha.

A navegação entre as telas é feita de forma dinâmica usando **useState** no componente principal `App.jsx`, sem recarregar a página. É um protótipo básico focado em UI/UX para autenticação.

**Funcionalidades atuais**:
- Troca entre telas de Login e Cadastro.
- Formulários responsivos com placeholders e labels em português.
- Estilização básica via CSS (arquivo `Login.css`).
- Fonte customizada Italiana via Google Fonts.


## 📁 Estrutura do Projeto

```
Tela de Login
├── src/
│   ├── App.css
│   ├── App.jsx          # Componente principal com lógica de troca de telas
│   ├── index.css        # Estilos globais
│   ├── main.jsx         # Ponto de entrada do React
│   └── Components/
│       ├── Login/
│       │   ├── Login.jsx     # Componente da tela de login
│       │   └── Login.css     # Estilos específicos do login
│       └── Cadastro/
│           └── Formulario.jsx # Componente do formulário de cadastro
├── index.html           # HTML base com meta tags e fonts
├── package.json         # Dependências e scripts
├── vite.config.js       # Configuração do Vite
├── eslint.config.js     # Configuração do ESLint
├── .gitignore
└── README.md            # Este arquivo
```

## 🛠️ Tecnologias Utilizadas

- **React 19** + **React DOM**
- **Vite** (build tool ultra-rápido)
- **ESLint** (linter para qualidade de código)
- **CSS Modules** (estilos locais)
- **Google Fonts** (fonte Italiana)

## 📖 Como Usar

1. **Tela de Login**:
   - Digite email e senha.
   - Clique em **Login** (funcionalidade placeholder).
   - Clique em **Criar Conta** para ir ao cadastro.

2. **Tela de Cadastro**:
   - Preencha nome, email e senha.
   - Clique em **Criar Conta** (placeholder) para voltar ao login.

## 🔍 Componentes Detalhados

### App.jsx
- Gerencia o estado `tela` ('login' ou 'Formulario').
- Renderiza condicionalmente `Login` ou `Formulario`, passando `mudarTela` como prop.

### Login.jsx
```
Formulário com:
- Input email
- Input senha
- Botão "Criar Conta" → muda para cadastro
- Botão "Login" → ação futura
```

### Formulario.jsx
```
Formulário com:
- Input nome completo
- Input email
- Input criar senha
- Botão "criar Conta" → volta para login
```
Projeto criado por mim no figma e programei
**Feito com ❤️ usando React e Vite!**

# projeto-react
