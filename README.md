# Tema - Livros

A arquitetura é composta por três partes:

1. **Backend (API)** - Desenvolvido com NestJS.
2. **Frontend** - Desenvolvido com React.
3. **Deploy** - Arquivo Docker Compose para facilitar o deployment de todos os serviços.

## Sumário

- [Requisitos](#requisitos)
- [Como Executar via Docker Compose](#como-executar-via-docker-compose)
- [Endpoints CRUD](#endpoints-crud)
- [Exemplos de Resposta](#exemplos-de-resposta)
- [Instruções para Derrubar os Recursos](#instruções-para-derrubar-os-recursos)

## Requisitos

- Docker
- Docker Compose
- Node.js (para desenvolvimento local)
- Git

## Como Executar via Docker Compose

1. Clone o repositório:
    
    git clone https://github.com/Alkhia/PROVA_DevOps
    cd my-project
    

2. Navegue até a pasta `deploy`:
    
    cd deploy
    

3. Rode o Docker Compose para levantar os serviços:
    
    docker-compose up --build
    

    Este comando irá:
    - Construir as imagens Docker para o **backend** (NestJS) e **frontend** (React).
    - Levantar os containers e disponibilizar os serviços na sua máquina local.

4. Acesse o frontend no navegador em: [http://localhost:3000]

5. A API (backend) estará disponível na URL: [http://localhost:5000]

6. O banco de dados (PostgreSQL) estará disponível na URL: [http://localhost:4000]

## Endpoints CRUD

A API expõe os seguintes endpoints para realizar operações CRUD nos livros:

- **GET** `/books`: Lista todos os livros.
- **GET** `/books/:id`: Recupera um livro específico pelo ID.
- **POST** `/books`: Cria um novo livro.
- **PUT** `/books/:id`: Atualiza um livro existente.
- **DELETE** `/books/:id`: Deleta um livro específico.

## Exemplos de Resposta

### 1. **GET /books**

Resposta:

[
  {
    "id": 1,
    "isbn": "978-3-16-148410-0",
    "title": "Livro Exemplo 1",
    "author": "Autor Exemplo",
    "pages": 300
  },
  {
    "id": 2,
    "isbn": "978-3-16-148411-7",
    "title": "Livro Exemplo 2",
    "author": "Outro Autor",
    "pages": 250
  }
]
