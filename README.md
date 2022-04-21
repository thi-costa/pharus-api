## Pharus API

## Documentação de Desenvolvimento de Software

**Versão <1.0>**

## Introdução

Este projeto mostra a proposta do projeto para o backend, com o Framework NestJS, seguindo as boas práticas indicadas na documentação do Framework, e utilizando-se do banco de dados PostgreSQL. 

---

## Finalidade

Este documento detalha a visão geral do sistema, mostrando a estrutura utilizada no projeto e explicando melhor as decisões tomadas.

---

## Estrutura do Projeto

O Nest é um framework utilizado para construir aplicações de servidor Node.js eficientes e escaláveis. Ele trabalha, de modo geral, com 3 camadas:

1. Controller: essa camada recebe requisições para a aplicação e lida com as rotas;
2. Camada de serviço (Services): essa camada se preocupa com a lógica do negócio, onde ocorrem todas as operações de CRUD;
3. Camada de acesso a dados (Repositories): essa camada lida com a lógica de acesso a dados persistidos em algum banco.

<img src="https://user-images.githubusercontent.com/41833533/164569320-deba31cc-4222-4549-b5ad-cfe47c2a3f86.png"/>

A estrutura de projeto adotada foi utilizada de modo a dividir em módulos cada entidade da aplicação (companies, medals, etc), além de dividir o diretório referente a autenticação e às configurações do banco.

O diretório shared armazena arquivos que se repetem em diversos módulos e compartilham de características semelhantes. A estrutura do projeto pode ser vista a seguir.

<img src="https://user-images.githubusercontent.com/41833533/164569426-0ffd241c-64cd-4221-9744-eebe65cb2005.png"/>

---

## Desenvolvimento

1. TS Template NestJs model

Inicialização de projeto com template do NestJs.

Comando do Nest CLI:

```bash
$ nest new pharus-api
```

1. Configuração do ORM para comunicação com banco
2. Criação de entidades de projeto
    1. Schools
    2. Companies
    3. Students
    4. Projects
    5. Tasks
    6. Medals
3. Inclusão de variáveis de ambiente: utilizado para garantir que será executado no ambiente desejado (se em produção ou desenvolvimento)
4. Criação de objetos necessários como DTOs e enums
5. Criação e execução de migrações para inicializar banco de dados
6. Criação de serviço e rota para criação de escola
7. Migração para inserção de dados iniciais de escola no banco

---

## Guia para Execução de Projeto

Antes de executar projeto, crie suas variáveis de projeto em um arquivo .env na raiz do projeto.

.env

```bash
PORT=
JWT_SECRET=
EXPIRES_IN=
DB_HOST=
DB_PORT=
DB_USERNAME=
DB_PASSWORD=
DB_DATABASE=
TYPEORM_CONNECTION=
TYPEORM_PORT=
TYPEORM_ENTITIES=
TYPEORM_ENTITIES_DIR=
TYPEORM_MIGRATIONS=
TYPEORM_MIGRATIONS_DIR=
TYPEORM_SYNCHRONIZE=
TYPEORM_USERNAME=
TYPEORM_PASSWORD=
TYPEORM_DATABASE=
TYPEORM_HOST=
TYPEORM_PORT=
```

Aconselha-se seguir o seguinte passo-a-passo para execução do sistema em sua máquina local.

```bash
# Rodar migrations
$ npm typeorm migration:run

# Executar em modo de desenvolvimento
$ npm run start:dev

# Executar em modo de produção
$ npm run start:prod
```

---

## Referências

[1] Documentação do Framework NestJS. Disponível em: <[https://docs.nestjs.com/](https://docs.nestjs.com/)>

[2] Documentação do JavaScript. Disponível em: <[https://developer.mozilla.org/pt-BR/docs/Web/JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)>

[3] Documentação do PostgreSQL. Disponível em: <[https://www.postgresql.org/docs/](https://www.postgresql.org/docs/)>

[4] Documentação do TypeORM. Disponível em: <[https://typeorm.io/](https://typeorm.io/)>

[5] Guia para API REST. Disponível em: <[https://docs.github.com/pt/rest](https://docs.github.com/pt/rest)>