/*
 * Copyright (c) AXA Shared Services Spain S.A.
 *
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

const fs = require('fs');

module.exports = async function trainnlp(manager, say) {
  if (fs.existsSync('./model.nlp')) {
    manager.load('./model.nlp');
    return;
  }

  manager.addDocument('en', 'restaurante', 'agent.restaurante');
  manager.addDocument('en', 'sair para comer', 'agent.restaurante');
  manager.addDocument('en', 'fome', 'agent.restaurante');
  manager.addDocument('en', 'almoçar', 'agent.restaurante');
  manager.addDocument('en', 'jantar', 'agent.restaurante');
  manager.addDocument('en', 'comida', 'agent.restaurante');

  manager.addDocument('en', 'hamburguer', 'agent.hamburgueria');
  manager.addDocument('en', 'lanche', 'agent.hamburgueria');
  manager.addDocument('en', 'X-Salada', 'agent.hamburgueria');
  manager.addDocument('en', 'hamburgueria', 'agent.hamburgueria');

  manager.addDocument('en', 'pizza', 'agent.pizzaria');
  manager.addDocument('en', 'massa', 'agent.pizzaria');
  manager.addDocument('en', 'pizzaria', 'agent.pizzaria');

  manager.addDocument('en', 'dormir', 'agent.hotel');
  manager.addDocument('en', 'sono', 'agent.hotel');
  manager.addDocument('en', 'descansar', 'agent.hotel');
  manager.addDocument('en', 'relaxar', 'agent.hotel');
  manager.addDocument('en', 'cansado', 'agent.hotel');
  manager.addDocument('en', 'hotel', 'agent.hotel');

  manager.addDocument('en', 'beber', 'agent.pub');
  manager.addDocument('en', 'cerveja', 'agent.pub');
  manager.addDocument('en', 'bebida', 'agent.pub');
  manager.addDocument('en', 'happy hour', 'agent.pub');
  manager.addDocument('en', 'bar', 'agent.pub');
  manager.addDocument('en', 'musica', 'agent.pub');
  manager.addDocument('en', 'drink', 'agent.pub');
  manager.addDocument('en', 'pub', 'agent.pub');
  manager.addDocument('en', 'encher a cara', 'agent.pub');

  manager.addDocument('en', 'fazer compras', 'agent.mercado');
  manager.addDocument('en', 'comprar', 'agent.mercado');
  manager.addDocument('en', 'compras', 'agent.mercado');
  manager.addDocument('en', 'mercado', 'agent.mercado');
  manager.addDocument('en', 'mercadinho', 'agent.mercado');
  manager.addDocument('en', 'supermercado', 'agent.mercado');

  manager.addDocument('en', 'estudar', 'agent.escola');

  manager.addDocument('en', 'peça', 'agent.teatro');
  manager.addDocument('en', 'cultura', 'agent.teatro');

  manager.addDocument('en', 'role', 'agent.mall');
  manager.addDocument('en', 'passear', 'agent.mall');
  manager.addDocument('en', 'shopping', 'agent.mall');

  manager.addDocument('en', 'filme', 'agent.cinema');
  manager.addDocument('en', 'assistir', 'agent.cinema');

  manager.addDocument('en', 'comer', 'agent.comida');

  manager.addDocument('en', 'qualquer coisa', 'agent.qualquer');
  manager.addDocument('en', 'qualquer um', 'agent.qualquer');
  manager.addDocument('en', 'tanto faz', 'agent.qualquer');

  manager.addDocument('en', 'Olá', 'agent.oi');
  manager.addDocument('en', 'Ola', 'agent.oi');
  manager.addDocument('en', 'Eai', 'agent.oi');
  manager.addDocument('en', 'E ai', 'agent.oi');
  manager.addDocument('en', 'Salve', 'agent.oi');
  manager.addDocument('en', 'Oi', 'agent.oi');

  manager.addDocument('en', 'Tudo bem?', 'agent.comovai');
  manager.addDocument('en', 'Como está?', 'agent.comovai');
  manager.addDocument('en', 'Como vai?', 'agent.comovai');
  manager.addDocument('en', 'Você está bem?', 'agent.comovai');

  manager.addDocument('en', 'Estou bem', 'agent.comovaiuser');
  manager.addDocument('en', 'Estou mal', 'agent.comovaiuser');
  manager.addDocument('en', 'Bem também', 'agent.comovaiuser');

  manager.addDocument('en', 'Tchau', 'agent.tchau');
  manager.addDocument('en', 'Falou', 'agent.tchau');
  manager.addDocument('en', 'Até mais', 'agent.tchau');

  manager.addDocument('en', 'Nao', 'agent.nao');
  manager.addDocument('en', 'Nem', 'agent.nao');

  manager.addDocument('en', 'Qual seu nome', 'agent.nome');
  manager.addDocument('en', 'Voce se chama', 'agent.nome');

  manager.addDocument('en', 'Ajudar no que', 'agent.ajuda');
  manager.addDocument('en', 'Ajudar com o que', 'agent.ajuda');
  manager.addDocument('en', 'O que voce faz', 'agent.ajuda');
  manager.addDocument('en', 'Ajuda', 'agent.ajuda');

  manager.addDocument('en', 'Maior time', 'agent.time');
  manager.addDocument('en', 'time', 'agent.time');
  manager.addDocument('en', 'torce', 'agent.time');
  manager.addDocument('en', 'futebol', 'agent.time');

  manager.addDocument('en', 'falar', 'agent.falar');
  manager.addDocument('en', 'sobre o que', 'agent.falar');

  manager.addDocument('en', 'O que quer', 'agent.querer');

  manager.addDocument('en', 'Onde voce mora', 'agent.morar');
  manager.addDocument('en', 'mora', 'agent.morar');
  manager.addDocument('en', 'vive', 'agent.morar');

  manager.addDocument('en', 'mudei de ideia', 'agent.mudarcategoria');
  manager.addDocument('en', 'quero outra coisa', 'agent.mudarcategoria');

  manager.addDocument('en', 'recomenda', 'agent.recomendacao');
  manager.addDocument('en', 'ideia', 'agent.recomendacao');

  manager.addDocument('en', 'triste', 'agent.triste');
  manager.addDocument('en', 'pra baixo', 'agent.triste');

  say('Training, please wait..');
  const hrstart = process.hrtime();
  await manager.train();
  const hrend = process.hrtime(hrstart);
  console.info('Trained (hr): %ds %dms', hrend[0], hrend[1] / 1000000);
  say('Trained!');

  manager.addAnswer('en', 'agent.triste', "Poxa, que tal passear pra algum lugar? Pode escolher que eu te ajudo a chegar lá");

  manager.addAnswer('en', 'agent.recomendacao', "Me diga o que está sentindo que eu te recomendo um lugar");
  
  manager.addAnswer('en', 'agent.mudarcategoria', "Pode pedir que eu mudo o pedido aqui");

  manager.addAnswer('en', 'agent.morar', "Minha casa é o computador");

  manager.addAnswer('en', 'agent.falar', "Olha, meu principal objetivo é te ajudar. Mas podemos conversar também");

  manager.addAnswer('en', 'agent.querer', "Quero te ajudar");

  manager.addAnswer('en', 'agent.nao', "Por que nao? Oras");

  manager.addAnswer('en', 'agent.time', "Aqui é Palmeiras cazzo");
  manager.addAnswer('en', 'agent.time', "Quem tem mais tem 10");

  manager.addAnswer('en', 'agent.ajuda', "Posso te recomendar locais próximos a você. Só precisa escolher o que quer");

  manager.addAnswer('en', 'agent.nome', "Nao tenho um nome ainda mas tô aqui pra te ajudar");

  manager.addAnswer('en', 'agent.restaurante', "Irei providenciar uma lista de restaurantes pra já");
  manager.addAnswer('en', 'agent.restaurante', 'Calma que irei pesquisar 3 restaurantes tops para você escolher');
  manager.addAnswer('en', 'agent.restaurante', 'Parece-me que quer um restaurante. Só um segundo que providenciarei');

  manager.addAnswer('en', 'agent.hamburgueria', "Hmm, vou procurar por hamburguerias próximas");
  manager.addAnswer('en', 'agent.hamburgueria', "Hamburguer? OK");
  manager.addAnswer('en', 'agent.hamburgueria', "Lanche é a melhor invençao da humanidade. Estou procurando hamburguerias para você");

  manager.addAnswer('en', 'agent.pizzaria', "Uma pizza cazzo. É pra já. 3 pizzarias aí perto:");

  manager.addAnswer('en', 'agent.comida', "O que quer comer?");

  manager.addAnswer('en', 'agent.pub', "Entao hoje tem :D. Vou providenciar alguns locais bacanas");
  manager.addAnswer('en', 'agent.pub', "Encontrei esses 3 pubs, escolha 1");
  manager.addAnswer('en', 'agent.pub', "Pra já, chefe. Beba com moderaçao");

  manager.addAnswer('en', 'agent.mercado', "Vou listar uns mercados pra você entao");
  
  manager.addAnswer('en', 'agent.hotel', "Ta na mao uma lista de hotéis por aí, bom descanso");
  
  manager.addAnswer('en', 'agent.escola', "Ai sim hein, estudos em primeiro lugar");

  manager.addAnswer('en', 'agent.teatro', "Tem umas peças legais nesses lugares aí");
  
  manager.addAnswer('en', 'agent.mall', "Tem esses shoppings por aí, que tal?");
  manager.addAnswer('en', 'agent.mall', "Me convida pô. rs brincadeira. Uma lista de 3 shoppings aí perto pra você escolher");
  
  manager.addAnswer('en', 'agent.cinema', "Me convida pô. rs brincadeira. Tem esses cinemas por aí. Escolhe um");
  
  manager.addAnswer('en', 'agent.oi', "Olá, eu sou um chatBot para te ajudar a encontrar um local que procura :)");
  manager.addAnswer('en', 'agent.oi', "Oi, pode me pedir um tipo de lugar que eu te ajudo a encontrar");

  manager.addAnswer('en', 'agent.comovai', "Estou muito bem e você?");
  manager.addAnswer('en', 'agent.comovai', "Estou bem graças a Alan Turing :p");

  manager.addAnswer('en', 'agent.comovaiuser', "Ah sim... Pode me requisitar o tipo de lugar que procura");
  
  manager.addAnswer('en', 'agent.tchau', "Tchau :p até depois");
  manager.addAnswer('en', 'agent.tchau', "Tchau");

  manager.addAnswer('en', 'agent.qualquer', "Categoria qualquer nao tem, escolhe uma outra aí");

  
  
  manager.save('./model.nlp');
};
