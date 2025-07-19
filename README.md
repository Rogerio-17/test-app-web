# 🛍️ Sistema de Gerenciamento de Produtos

Um sistema moderno e responsivo para gerenciamento de produtos, desenvolvido com React, TypeScript e uma interface elegante utilizando tons claros e minimalistas.

## 📋 Sobre o Projeto

Este é um sistema de listagem e gerenciamento de produtos que permite:

- **Visualizar produtos**: Lista todos os produtos cadastrados em um layout responsivo
- **Criar novos produtos**: Modal interativo para adicionar produtos com validação
- **Editar produtos**: Funcionalidade para modificar informações de produtos existentes
- **Excluir produtos**: Remoção de produtos
- **Campo especial**: Exibe a primeira letra ausente do alfabeto baseada nos nomes dos produtos

## 🚀 Como Executar o Projeto

### Pré-requisitos

- **Node.js** (versão 18 ou superior)
- **npm** ou **yarn**
- **API Backend** rodando na porta 3333

### Instalação

1. **Clone o repositório**:
```bash
git clone https://github.com/Rogerio-17/test-app-web.git
cd test-app-web
```

2. **Instale as dependências**:
```bash
npm install
```

3. **Inicie o servidor de desenvolvimento**:
```bash
npm run dev
```

4. **Acesse a aplicação**:
   - Abra seu navegador e vá para `http://localhost:5173`

### Scripts Disponíveis

```bash
# Iniciar ambiente de desenvolvimento
npm run dev

# Fazer build para produção
npm run build

# Executar linter
npm run lint

# Visualizar build de produção
npm run preview
```

## 🏗️ Estrutura do Projeto

```
src/
├── components/          # Componentes reutilizáveis
│   ├── ui/             # Componentes base (Button, Dialog, Form, etc.)
│   ├── ProductCard.tsx     # Card de exibição de produto
│   ├── ButtonCreateProduct.tsx  # Modal de criação de produto
│   └── ButtonEditProduct.tsx    # Modal de edição de produto
│
├── pages/              # Páginas da aplicação
│   └── ProductListing.tsx      # Página principal de listagem
│
├── http/               # Camada de comunicação com API
│   ├── types/          # Tipos TypeScript para requests/responses
│   ├── use-products.ts        # Hook para listar produtos
│   ├── use-create-product.ts  # Hook para criar produto
│   ├── use-edit-products.ts   # Hook para editar produto
│   ├── use-delete-product.ts  # Hook para deletar produto
│   └── use-get-product-by-id.ts # Hook para buscar produto por ID
│
├── types/              # Definições de tipos globais
│   └── product.ts      # Interface do modelo Product
│
├── lib/                # Configurações e bibliotecas
│   └── utils.ts        # Utilitários gerais (cn, etc.)
│
├── App.tsx             # Componente raiz da aplicação
├── main.tsx            # Ponto de entrada da aplicação
└── index.css           # Estilos globais
```

## 🛠️ Tecnologias Utilizadas

### Core
- **React 18** - Biblioteca para interface do usuário
- **TypeScript** - Superset do JavaScript com tipagem estática
- **Vite** - Build tool e dev server ultra-rápido

### Estilização
- **Tailwind CSS 4** - Framework CSS utilitário
- **Lucide React** - Ícones elegantes e consistentes
- **Radix UI** - Componentes acessíveis e sem estilo

### Gerenciamento de Estado e Dados
- **TanStack Query (React Query)** - Gerenciamento de estado do servidor
- **React Hook Form** - Gerenciamento de formulários performático
- **Zod** - Validação de schemas TypeScript

### Qualidade de Código
- **ESLint** - Linter para identificar problemas no código
- **TypeScript** - Tipagem estática para maior segurança

## 🎨 Design e Interface

O projeto segue uma filosofia de design clean e minimalista:

- **Paleta de cores**: Tons neutros com fundo branco predominante
- **Acentos coloridos**: Azul, verde e roxo para botões e elementos interativos
- **Tipografia**: Hierarquia clara com diferentes pesos de fonte
- **Espaçamento**: Generoso uso de whitespace para melhor legibilidade
- **Responsividade**: Layout adaptativo para desktop, tablet e mobile

## 🔗 Integração com API

A aplicação consome uma API REST que deve estar rodando em `http://localhost:3333` com os seguintes endpoints:

- `GET /products` - Lista todos os produtos
- `POST /products` - Cria um novo produto
- `PUT /products/:id` - Atualiza um produto existente
- `DELETE /products/:id` - Remove um produto
- `GET /products/:id` - Busca um produto específico

### Modelo de Dados

```typescript
interface Product {
  id: string
  name: string
  price: number
  sku: string
  description: string
  firstMissingLetter: string
  createdAt: Date
  updatedAt?: Date | null
}
```

## 📱 Funcionalidades Principais

### Listagem de Produtos
- Grid responsivo com cards elegantes
- Exibição de nome, descrição e primeira letra
- Layout adaptativo para diferentes tamanhos de tela

### Gerenciamento de Produtos
- **Criar**: Modal com formulário validado
- **Editar**: Modal pré-preenchido com dados atuais
- **Excluir**: Confirmação antes da remoção