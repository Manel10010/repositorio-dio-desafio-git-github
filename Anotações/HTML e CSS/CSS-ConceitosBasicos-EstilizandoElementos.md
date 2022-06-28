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

![download](https://user-images.githubusercontent.com/107083404/176084325-a33107ef-905e-4d9c-8e1c-4b544c0748a9.png)


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



