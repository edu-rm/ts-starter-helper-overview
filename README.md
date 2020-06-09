# Rocketseat: MasterClass-07 TypeScript, o início, de forma prática
[Vídeo](https://www.youtube.com/watch?v=0mYq5LrQN1s)
## Anotações

Esse repositório é composto pela aplicação criada no MasterClass 07 da rocketseat, além de anotações úteis sintetizadas e descomplicadas, que facilitam a revisão para a absorção integral do conhecimento.

### Introdução

TypeScript é uma linguagem somente quando capaz de ser executado por um compilador e não transpilado como era antes do Deno.

Deno: um projeto startup que compila diretamente o typescript (entende o typescript).

Antes do Deno o TS era apenas um conjunto de funcionalidades que davam mais poder ao JavaScript. 

Conseguimos adicionar tipagem dentro do JS.
Se ajudam ou não depende, do time, tempo, escala...

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


### Iniciando o Backend

**npm install typescript -D | yarn add -D typescript**

Por mais que tenhamos o TS de forma global, é interessante instalá-lo em cada projeto pra fixarmos a sua vesão.

**npm install express | yarn add express**

Conseguimos utilizar as últimas features mais recentes do JavaScript em geral nos arquivos ts, pois no final tudo é transpilado pra js, tornando-se entendível pelo browser e pelo node.
Exemplo: import é uma feature que o node ainda não implementou no Js tradicional( considerando a atual, node na versão 13), mas conseguimos usar com ts. Sem o TS precisaríamos usar um compilador como o Babel ou o Sucrase node para poder usar essas features.

Um dos motivos da fama do TS era justamente porque ele permitia o uso de features que o JS demorava muito tempo pra implementar.

Quando utilizamos o TS, as bibliotecas precisam expor suas tipagens, são elas que permitem que o Autocomplemento da IDE (IntelliSense no caso do VSCode) traga uma lista de métodos e variáveis.

**Tipagens:**
Todas as funções e seus retornos, os parametros que recebem...

**Alternativas de exposição de tipagens:**
1. Colocando-as juntas da própria biblioteca.
    - Bastando eu importar a biblioteca tudo já estaria disponível.

2. Ter um pacote para a funcionalidade e outro só com a tipagem (@types).
    - A maioria utilizam essa maneira.

**npm install @types/express -D | yarn add -D @types/express**

**No VSCode, por que quando instalamos uma biblioteca e utilizamos o JavaScript tradicional, o IntelliSense me trás todas as funcionalidades sem usar o Typescript?**
Porque o VSCode quando percebe que uma biblioteca não tem a definição de tipos nela, ele por debaixo dos panos tenta instalar o @types da bliblioteca e expor a tipagem de forma automática.
Opinião do Diego: é por isso que o VSCode se tornou a IDE mais famosa no desenvolvimento com JavaScript

**node src/index.ts**
Não vai rodar, pois por padrão o node não entende ts.
Precisamos converter pra JS.

Quando instalamos a dependência "typescript" junto instalou-se o "tsc"

npx tsc src/index.ts | yarn tsc src/index.ts
    - Converte o index.ts para index.js, ou seja, todo o código Typescript para JavaScript.

Ainda assim na execução um erro será exibido, pois o express realiza um "default export", e quando isso acontece precisamos ter uma flag chamada esModuleInterop na configuração do TS, pois ele por padrão não transforma o "export default".
Então para funcionar sem precisar mexer em configuração:

Invés de **import express from 'express'** precisariamos substituir por **import * as express from 'express'**, com isso o comando **npx tsc src/index.ts | yarn tsc src/index.ts** vai funcionar.

Basta executar **node src/index.js** que o servidor funcionará.


