# ID X CLASS 

**ID**: é representado pelo símbolo # (hash) seguido de um nome para esse ID.

**Classe**: a classe é representada de forma parecida do ID, mas é precedida por um ponto em vez do hash.
E a diferença mais importante entre eles é a forma como devem ser usados: o **ID** só pode ser usado uma vez em uma página HTML enquanto a classe não tem restrições.

**STYLESHEET**:
Criamos nosso arquivo style.css e linkamos ele ao nosso index na nossa head:
link rel="stylesheet" href="style.css">

# Conceitos Básicos (CSS3)

**Box-model**

Quando estamos criando o layout de um site o navegador representa cada elemento HTML como uma caixa retangular, isso é o box-model. E com CSS nós alteramos a aparência dessa caixa (largura, altura, cor de fundo, etc.). Essa caixa é composta por 4 áreas: o conteúdo, o padding, a borda e a margem.

As margens (margin) são espaçamentos entre elementos; As bordas (border) ; O padding é um espaçamento entre as bordas e o conteúdo, a diferença para as margens é que declarações de imagem de fundo funcionam nele; O conteúdo (content) é o que o seu bloco representa, um texto, uma imagem, um vídeo;

![Entendendo como funciona o Box Model e o Box Sizing | Alura](data:image/png;base64,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)

## Padding e Margin

Podemos editar o padding de varias formas:

1. padding: 10px 5px              | top e bottom vão receber 10px como valor e left e right 5px

2. padding: 15px 10px 5px 0 | top = 15px, right = 10px, bottom = 5px e left = 0 **OBS**: Sempre nessa ordem e se o valor for 0 não precisa espeficiar a unidade

3. padding-top:         | Adicionando valores especificamente ao topo

​		padding-right:       | Adicionando valores especificamente a direita

​		padding-bottom:  | Adicionando valores especificamente ao fundo

​		padding-left:          | Adicionando valores especificamente a esquerda

# Background

Podemos editar o background de varias formas:

1. background-color: green;    			 | Define uma cor para o fundo **OBS**: A cor pode ser definida seja pelo nome em inglês quanto pelo seu código

   background-image: url("bg.png");   | Adiciona uma imagem

   background-postion: top; 				| Muda a posição centro, esquerda...

# Border

Formas de estilizar a borda:

1. border: 3px solid blue; | Altera a borda como um todo e tem como valores: largura, estilo e cor

   - Alterando de forma mais especifica da anterior:

   - border-width: 3px; | Largura

   - border-color: blue; | Cor

   - border-style: solid; | Estilo

2. border-top: 2px dotted green; | Altera o topo

   border-right: 4px dashed pink; | Altera o lado direito

3. border-top: 2px dotted green;       | Alterando o topo

   border-right: 4px dashed pink;      | Alterando o lado direito

   border-bottom: 1px solid purple;  | Alterando o fundo

   border-left: 4px dotted cyan;          | Alterando o lado esquerdo

   - Alterando de forma mais especifica da anterior:

   - border-top-width: 2px;    | Largura

   - border-top-color: green; | Cor

   - border-top-style: dotted; | Estilo

# Border-radius

Arredonda as bordas.

1. border-rarius: 10px;                         | Aplica para todas top, right, bottom e left.

2. border-radius: 50px;                        | **OBS**:Usando 50% como valor transforma em um circulo
3. border-radius: 10% 20%;                 | top e bottom vão receber 10%, right e left 20%
4. border-radius: 10% 20% 15% 22% | **top**: 10%; **right**: 20%; **bottom**:15%; e **left**: 22%;



