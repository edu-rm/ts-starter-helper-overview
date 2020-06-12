# Rocketseat: MasterClass-07 TypeScript, o início, de forma prática

![TS](https://i1.wp.com/storage.googleapis.com/blog-images-backup/1*D8Wwwce8wS3auLAiM3BQKA.jpeg)

[Link do vídeo](https://www.youtube.com/watch?v=0mYq5LrQN1s)

## Anotações

Esse repositório é composto pela aplicação criada no MasterClass 07 da rocketseat, além de anotações úteis sintetizadas e descomplicadas, que facilitam a revisão para a absorção integral do conhecimento.

## Índice

- [Rocketseat: MasterClass-07 TypeScript, o início, de forma prática](#rocketseat-masterclass-07-typescript-o-início-de-forma-prática)
  - [Anotações](#anotações)
  - [Índice](#índice)
  - [Introdução](#introdução)
  - [Back-end](#back-end)
    - [Instalação](#instalação)
    - [Configurações do TypeScript](#configurações-do-typescript)
    - [Compilação em tempo real](#compilação-em-tempo-real)
    - [TypeScript da forma prática](#typescript-da-forma-prática)
    - [Definindo tipos](#definindo-tipos)
  - [Front-end](#front-end)
    - [TypeScript e Axios](#typescript-e-axios)
    - [TypeScript e Componentização](#typescript-e-componentização)

## Introdução

TypeScript é uma linguagem somente quando capaz de ser executado por um compilador. Antes da criação do Deno ele era simplesmente transpilado pra JS.

Deno: um projeto startup que compila diretamente o typescript (entende o typescript).

Antes do Deno o TS era apenas um conjunto de funcionalidades que davam mais poder ao JavaScript.

Com o TS conseguimos adicionar tipagem dentro do JS.
Se ele nos ajuda ou não depende, do time, tempo, escala...

**Recomendação de uso:**

1. Projetos OpenSource
2. Projetos que precisam de escala. Mesmo usando uma boa abordagem de estrutura, chega ao ponto de não se conseguir mais encontrar coisas específicas dentro do código.
3. Se a equipe tem conhecimento sobre. Se não tiver a produtividade cai lá em baixo.

**Exemplos de tipagens:**

1. Qual o tipo do parâmetro que uma função recebe.
2. O objeto X, qual o formato do objeto, em outras palavras, qual suas propriedades.

**Por que usar TS?**

Produtividade dos programadores dentro do projeto.
Pelo fato do TS ser transpilado, ele não tem um resultado de nenhuma espécie em produção ou depois que a aplicação for compilada.

Então os ganhos de se usar TS vem no processo de desenvolvimento. Conseguimos integrar a IDE com o TS facilitando o processo de desenvolvimento, encontrando funções, parâmetros, retorno ...

## Back-end

### Instalação

**npm install typescript -D | yarn add -D typescript**

Por mais que tenhamos o TS de forma global, é interessante instalá-lo em cada projeto pra fixarmos a sua vesão.

**npm install express | yarn add express**

Conseguimos utilizar as últimas features mais recentes do JavaScript em geral nos arquivos ts, pois no final tudo é transpilado pra js, tornando-se entendível pelo browser e pelo node.
Exemplo: import é uma feature que o node ainda não implementou no Js tradicional( considerando a atual, node na versão 13), mas conseguimos usar com ts. Sem o TS precisaríamos usar um compilador como o Babel ou o Sucrase Node para poder usar essas features.

Um dos motivos da fama do TS era justamente porque ele permitia o uso de features que o JS demorava muito tempo pra implementar.

Quando utilizamos o TS, as bibliotecas precisam expor suas tipagens, são elas que permitem que o Autocomplemento da IDE (IntelliSense no caso do VSCode) traga uma lista de métodos e variáveis.

**Tipagens conceito:** São todas as funções e seus retornos, os parametros que recebem, etc.

**Alternativas de exposição de tipagens:**

1. Colocando-as juntas com própria biblioteca.
    - Bastando eu importar a biblioteca tudo já estaria disponível.

2. Ter um pacote para a funcionalidade e outro só com a tipagem (@types).
    - A maioria utilizam essa maneira.

**npm install @types/express -D | yarn add -D @types/express**

Instalando o @types do express, pois ele utiliza a segunda maneira.

**No VSCode, por que quando instalamos uma biblioteca e utilizamos o JavaScript tradicional, o IntelliSense me trás todas as funcionalidades sem usar o Typescript?**

Porque o VSCode quando percebe que uma biblioteca não tem a definição de tipos nela, ele por debaixo dos panos tenta instalar o @types da bliblioteca e expor a tipagem de forma automática.
Opinião do Diego: é por isso que o VSCode se tornou a IDE mais famosa no desenvolvimento com JavaScript

**node src/index.ts**

Não vai rodar, pois por padrão o node não entende ts.
Precisamos converter pra JS.

Quando instalamos a dependência "typescript" junto instalou-se o "tsc"

npx tsc src/index.ts | yarn tsc src/index.ts
    - Converte o index.ts para index.js, ou seja, todo o código Typescript vira JavaScript.

Ainda assim na execução um erro será exibido, pois o express realiza um "default export", e quando isso acontece precisamos ter uma flag chamada esModuleInterop na configuração do TS, pois ele por padrão não transforma o "export default".
Então para funcionar sem precisar mexer em configuração:

Invés de **import express from 'express'** precisariamos substituir por **import * as express from 'express'**, com isso o comando **npx tsc src/index.ts | yarn tsc src/index.ts** vai funcionar.

Basta executar **node src/index.js** que o servidor funcionará.

### Configurações do TypeScript

**npx tsc --init | yarn tsc --init**

Cria o arquivo de configuração do TS
- tsconfig.json

Nesse arquivo uma das configurações é **"esModuleInterop": true**, permitindo a possibilidade de uso do export default e do import na maneira "padrão" ( import express from 'express').

**npx tsc | yarn tsc**

Com esse comando ele já gera automaticamente o arquivo index.js e com nenhum tipo de erro quando executado.

**Configurações importantes no tsconfig.json**

**1. outDir** : Onde vai ficar o código tranpilado da aplicação, uma boa prática é separar da pasta src.

Sugestões:

```json
"outDir": "./dist",
"outDir": "./build",
```

### Compilação em tempo real

Existem muitas maneiras, no Node padrão usamos o Nodemon

Sucrase? É uma ótima alternativa, porém não entende uma das funcionalidades que vem crescendo bastante no TypeScript, os **Decorators**.

**Decorators**: Permite a alteração do funcionamento de uma classe, função ou variável utilizando uma sintaxe diferente.

Eles são bastante utilizados com ORMs feitos para o TS, como por exemplo o **TypeORM**.

**ts-node-dev**: usaremos para o real time reload.

**npm install ts-node-dev -D | yarn add ts-node-dev -D**

**packet.json:**

```json
"scripts": {
    "dev:server": "ts-node-dev --respawn --transpileOnly src/index.ts"
},
```

- transpileOnly: ela faz com que o ts-node-dev apenas transpile e não procure por erros no código TS,.
- respawn: reinicia a cada alteração.

**npm run dev:server | yarn dev:server**

### TypeScript da forma prática

**Toda váriavel criada com TS precisa ter um tipo específico?** Sim.

**Eu preciso informar o tipo toda vez?** Não.

- **Inferência de tipos**: capacidade do TS determinar de forma automática o tipo de variáveis e retorno de funções.

**Todas as vezes que utilizarmos funcionalidades de uma determinada biblioteca em um arquivo separado:**: será necessário importar os types dessa biblioteca, mais precisamente os tipos que correspondem com o que está sendo usando dela.

**Exemplo:**

UserController -> método index.

```ts
export default {
    async index(req,res){
        return res.json(users);
    }
};
```
Sabemos que o ```req``` e o ```res``` são duas variáveis que possuem um tipo específico dentro da biblioteca do express. Por isso precisamos importar e atribuir a tipagem a elas.

```ts
import { Request, Response} from 'express';

export default {
    async index(req : Request, res: Response){
        return res.json(users);
    }
};
```
Feito isso você terá acesso a todas as funções e variáveis do Request e Response no seu IntelliSense

### Definindo tipos

Supondo que precisamos enviar um email, função:

```ts
class EmailService {
    sendMail(to, message){
        console.log('Email enviado');
    }
}
```

**to**: será um objeto que tem "nome" e "email"
- **Para objetos**: utilizamos uma Interface. Ela serve para criar uma estrutura de subtipos.

```ts
interface IMailTo {
    name: string;
    email: string;
}

class EmailService {
    sendMail(to : IMailTo, message){
        console.log('Email enviado');
    }
}
```

**message**: um objeto que possui "subject", "body" e "attachment".
- **attachment**: será opcional, então é colocado um **?**, e além disso será um array, pois pode haver vários anexos:

```ts
interface IMailMessage {
    subject: string;
    body: string;
    attachement? : Array<string>; || attachement? : string[];
}

class EmailService {
    sendMail(to : IMailTo, message : IMailMessage){
        console.log('Email enviado');
    }
}
```

Quando o tipo de um atributo ou variável é um array, pode-se escrever de duas formas:

`attachement? : Array<string>; `

`attachement? : string[]; `

**Utilizando a classe EmailService em um controller qualquer:**

```ts
import { Request, Response} from 'express';
import EmailService from '../services/EmailService';

export default {
    async create(req: Request, res: Response){

        // Instanciando um objeto da classe EmailService
        const emailService = new EmailService();

        // Chamando o método sendMail criado na classe.
        emailService.sendMail(
            { name:'Eduardo', email: 'edu@edu.com' },
            { subject: 'Seja Bem Vindo!', body: 'Bem vindo ao sistema'}
        );
        return res.json({ msg: 'Usuário criado'});
    }
}
```

**DTO**

O código acima está correto e funcinal, mas vamos supor que essa seja uma função mais complexa e tenha passado anos que você a criou.

Será difícil saber visualmente do que se trata os parâmetros `{ name:'Eduardo', email: 'edu@edu.com' }` e `{ subject: 'Seja Bem Vindo!', body: 'Bem vindo ao sistema'}`, um é a mensagem e o outro é o remetente? Qual é o remetente ? Qual a mensagem?

Para isso podemos criar um DTO (Data Transfer Object), é um conceito bastante utilizado da metodologia DDD, serve basicamente para setar a forma visual de como os dados "trafegam" dentro da nossa aplicação, vamos ver na prática:

```ts
interface IMailTo {
    name: string;
    email: string;
}

interface IMailMessage {
    subject: string;
    body: string;
    attachement? : Array<string>;
    // attachement? : string[];
}

// Essa Interface  possui como conteúdo to e message
interface IMessageDTO {
    to: IMailTo;
    message: IMailMessage;
}

class EmailService {
    // Faz-se a desestruturação do objeto que será mandado e coloca como tipo a interface.

    // Forma de se ler: as propriedades to e message do objeto envidado tem que se adequar à interface IMessageDTO
    sendMail({ to , message }: IMessageDTO ){
        console.log(`Email enviado para ${to.name}: ${message.subject}`);
    }
}

export default EmailService;
```

Com isso a forma como os parâmetros serão passados muda:

```ts
export default {
 async create(req: Request, res: Response){
        const emailService = new EmailService();

        // Na função desestruturamos um objeto e pegamos o to e message.
        // Abaixo estamos passando um objeto com os parâmetros to e message, atendendo exatamente o que a função pede.

        emailService.sendMail({
            to: {
                name:'Eduardo',
                email: 'edu@edu.com'
            },
            message: {
                subject: 'Seja Bem Vindo!',
                body: 'Bem vindo ao sistema'
            }
        });
        return res.json({ msg: 'Usuário criado'});
    }
}
```

Agora perceba como o envio de parâmetros ficou mais visual, só de "bater o olho" ja é possível saber o que está sendo enviado de uma forma bastante precisa.

**Interface para classes**

Também é possível criar interfaces para uma classe inteira, especificando seus atributos e funções, veja abaixo.

```ts
interface IMailTo {
    name: string;
    email: string;
}

interface IMailMessage {
    subject: string;
    body: string;
    attachement? : Array<string>;
    // attachement? : string[];
}

// Criando uma interface para a classe.
interface IEmailService {
    // Especificando a existencia de uma função que recebe um request do tipo IMessageDTO e que retorna void
    sendMail(request : IMessageDTO) : void;
}

// Implementando a interface criada na classe.
class EmailService implements IEmailService {

    // Criando a função baseando-se na IEmailService

    // Equivalências:
    // {to, message} = request
    sendMail({ to , message }: IMessageDTO ){
        console.log(`Email enviado para ${to.name}: ${message.subject}`);
    }
}

```

## Front-end

**npx create-react-app frontend --template=typescript | yarn create react-app frontend --template=typescript**

Há dois tipos de extensões: ts e tsx
- ts : arquivos que não utilizam sinaxe XML.
- tsx : componente react, arquivos que utilizam sintaxe XML.

### TypeScript e Axios

Não é necessário baixar o @types do axios pois já vem junto com ele.

**services/api.ts**

```ts
import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3333',
});

export default api;
```

**App.tsx**

```tsx
import React, { useEffect, useState } from 'react';

import api from './services/api';

function App() {

  const [users, setUsers] = useState([]);

  useEffect(() =>{
    api.get('/users').then((response) => {
      setUsers(response.data);
    });
  },[]);


  return (
    <div>
      { users.map(user => <p>{user.name}</p>) } // erro
    </div>
  );
}

export default App;
```

Será apontado um erro no código acima: ```<p>{user.name}</p>```, pois:

Quando é feita uma requisição GET na rota /users o retorno dela será um **Array** de objetos que contém **nome** e **email**, veja abaixo:

```json
[
    {
        "name":"Eduardo",
        "email":"erm@erm.com"
    }
]
```

Quando a requisição na api é feita e ocorre o retorno dos dados, necessita-se dizer pro axios qual é o formato desse retorno. E para isso podemos criar uma interface.

```tsx
interface IUser {
  name: string;
  email: string;
}
```

A interface acima representa exatamente como/a forma que **UM** dado da requisição se apresentará.
Como usá-la:

```ts
api.get<IUser[]>('/users').then((response) => {
    setUsers(response.data); // erro
});
```

Passamos ela após a chamada do método get, e além disso colocamos **[]** pra indicar que a resposta será um array. Pois como foi dito: a interface criada representa **um** único dado que virá da resposta, mas sabemos que a resposta será um array com vários deles.

Ótimo, mas mesmo assim um erro será mostrado na `setUsers(response.data)`. Isso acontece pois o useState foi setado como um array normal, e sabemos que além de ser um array ele vai possuir objetos com **nome** e **email** (idêntico ao conteúdo da resposta da api, afinal é ele quem vai salva-la)

```tsx
//
import React, { useEffect, useState } from 'react';

import api from './services/api';

interface IUser {
  name: string;
  email: string;
}

function App() {

  // Leitura: os users serão um array de IUser, e um único IUser será composto por nome e email.
  const [users, setUsers] = useState<IUser[]>([]);

  useEffect(() =>{
    api.get<IUser[]>('/users').then((response) => {
      setUsers(response.data);
    });
  },[]);


  return (
    <div>
      { users.map(user => <p>{user.name}</p>) }
    </div>
  );
}

export default App;
```

### TypeScript e Componentização

Criando um componente que exibirá o nome e email :

**components/User.tsx**

```tsx
import React from 'react';

const User = ({ user }) => { //erro

  return (
    <div>
        <strong>Nome: </strong>{ user.name }<br />
        <strong>Email: </strong>{ user.email }<br /><br />
    </div>
  );
}

export default User;
```

Existem várias formas de se criar um componente, uma interessante é usando const da forma acima.

Um erro será exibido no `({user})`, pois ele não tem uma definição de tipos.

**Como fazer a definição de tipos do componente:**

O React já tem sua tipagem e disponibiliza `React.FC` que significa React Functional Component.

Setando o componente como um React.FC:

```ts
import React from 'react'; // O FC vem do React

const User: React.FC = ({ user }) => {

  return (
    <div>
        <strong>Nome: </strong>{ user.name }<br />
        <strong>Email: </strong>{ user.email }<br /><br />
    </div>
  );
}

export default User;
```

**Como fazer a definição de tipos das propriedades:**

O `React.FC` pode receber como parametro de tipagem as propriedades, ficando algo assim: `React.FC<Props>`

Isso significa que as propriedades serão: todas as que a gente definir + as que vem por padrão.

Definindo o tipo da propriedade user:

```ts
import React from 'react';

//Definindo a tipagem do objeto
interface IUser {
  name: string;
  email: string;
}

//Definindo a tipagem das propriedades
interface IProps {
  user: IUser;
  //poderia ser colocados mais propriedades personalizadas aqui.
}

// Passando o como parametro de tipagem o IProps
const User: React.FC<IProps> = ({ user }) => {

  return (
    <div>
        <strong>Nome: </strong>{ user.name }<br />
        <strong>Email: </strong>{ user.email }<br /><br />
    </div>
  );
}
```
