# Flex Box

Foi projetado como um modelo de layout unidimensional e como um método que pode oferecer distribuição de espaço entre itens em uma interface e recursos de alinhamento.

## Flex Container

É a tag que envolve os itens, será nela que iremos aplicar a propriedade "display: flex". Transforma todos os seus itens filhos em flex itens.

**Propriedades relacionadas:**

- Display
- flex-direction  | Direcionamento dos itens
- flex-wrap         | Quebra de linha ou não
- flex-flow           | Direction + Wrap   
- justify-content | Alinhar de acordo com a direção
- align-items       | Alinha itens de acordo com o eixo
- align-content   | Alinha as linhas

## Flex Item

São elementos filhos diretos do Flex Content. E também podem se tornar Flex Container.

**Propriedades relacionadas:**

- flex-grow    | Definir fator de crescimento
- flex-basis    | Definir tamanho inicial
- flex-shrink  | Definir capacidade de redução
- flex              | Grow + basis + shrink
- order          | Ordem de distribuição/listagem
- align-self    | Alinhamento de um item especifico

# Fundamentos - Parte 1

## Display:flex

Torna a tag um elemento do tipo flex container, e assim automaticamente todos os seus filhos diretos desta tag, tornam-se em flex items.
![Display-flex](https://user-images.githubusercontent.com/107083404/182498820-66b7cec7-7850-4ff9-8202-7e03628b6bb5.png)


## Flex-direction (container)

É a propriedade que estabelece o eixo principal do container, definindo assim a direção que os flex items são colocados no flex container.

**Eixos:**

- row(padrão)     | à direção do texto, esquerda para direita
- row-reverse      | sentido oposto à direção do texto

- column              | ordenação de cima para baixo, em coluna unica
- column-revese | ordenação inversa, de baixa para cima

![Flex-direction](https://user-images.githubusercontent.com/107083404/182498870-33910b7c-4681-440f-9d97-7ef672793a3f.png)



## Flex-wrap (container)

É a propriedade que define se os itens devem ou não quebrar a linha.

Por padrão eles não quebram linhas, isso faz com que os flex itens sejam compactados além do limite do conteúdo.

- nowrap | é o padrão não permite a quebra de linha.
- wrap      | permite a quebra de linha assim que um dos flex itens não puder mais ser compactado.
- wrap-reverse | permite a quebra de linha assim que um dos flex itens não puder mais ser comptado, porém na direção contrária da linha.

![Flex-wrap](https://user-images.githubusercontent.com/107083404/182498903-46966f4f-763f-42e9-aec9-fe1535c22b02.png)



## Flex-flow

É um atalho para as propriedades flex-direction e flex-wrap.

Porém seu uso não é tão comum, visto que, quando mudamos o flex-direction para column, mantemos o padrão do flex-wrap que é nowrap.

![Flex-flow](https://user-images.githubusercontent.com/107083404/182498935-98ab0c2c-7233-42a7-8d1a-2d79490b46cb.png)
![Flex-flow-2](https://user-images.githubusercontent.com/107083404/182498946-04f3fca0-1fdf-4b06-bb7f-c58bc343f32c.png)
![Flex-flow-3](https://user-images.githubusercontent.com/107083404/182498952-76ca6de8-41e0-48d4-9614-a9bc250785ce.png)



## Justify Content (container)

Essa propriedade ela vai se encarregar do alinhamento dos itens dentro do container de acordo com a direção pretendida e tratar da distribuição de espaçamento entre eles.

**OBS:** caso seus itens estejam ocupando 100% de todo o container, ela não se aplica.

**Variações**:

- flex-start:      | início do container.
- flex-end        | final do container.
- center           | ao centro do container.
- space-between  | cria um espaçamento igual entre os elementos.
- space-around  | os espaçamentos do meio são duas vezes maiores que o inicial e o final.

![Justify-content-ROW](https://user-images.githubusercontent.com/107083404/182498972-faa0e93d-88e1-43b8-90fc-840cfc1e3db1.png)

![Justify-content-COLUMN-1](https://user-images.githubusercontent.com/107083404/182498980-797209cb-0a42-4d9b-95ed-adb442480dd0.png)

![Justify-content-COLUMN-2](https://user-images.githubusercontent.com/107083404/182498987-9d2f4d7b-6a73-40d7-bc98-5e94e0822fe4.png)

![Justify-content-COLUMN-3](https://user-images.githubusercontent.com/107083404/182498993-2a2b3169-66be-4a00-8c98-9a36e513e614.png)



## Align-items (container)

Trata do alinhamento dos flex itens de acordo com o eixo do container.

O alinhamento é diferente para quando os itens estão em colunas ou linhas.

Permite o alinhamento central no eixo vertical.

**OBS:** Não é necessário aplicar o conceito de altura.

**TIPOS DE ALINHAMENTO:**

- center     | alinhamento dos itens ao centro
- stretch    | padrão, e os flex itens cresçam igualmente
- flex-start | alinhamento dos itens no início
- flex-end  | alinhamento dos itens no final
- baseline  | alinhamento de acordo com a linha base da tipografia dos itens

![Align-items-ROW-center e strech](https://user-images.githubusercontent.com/107083404/182499014-cf2bc1d5-de78-4358-873c-1a56e1b1e153.png)

![Align-items-ROW- flex-start, end, baseline](https://user-images.githubusercontent.com/107083404/182499019-c69311ae-b49d-4e67-96c3-3aa5266ee675.png)

![Align-items-COLUMN-center e strech](https://user-images.githubusercontent.com/107083404/182499036-34bd3ec3-4e57-4aed-b44e-c716883d5682.png)

![Align-items-COLUMN- flex-start e end](https://user-images.githubusercontent.com/107083404/182499032-d82d666a-516b-45e1-8196-d162acf02626.png)

![Align-items-COLUMN- flex-baseline e exemplo de alinhamento central](https://user-images.githubusercontent.com/107083404/182499026-7e2a8bb0-20ae-4b64-874b-c0c6ec3fded9.png)


## Align-content (container)

É a propriedade responsável por tratar o alinhamento das linhas do container em relação ao eixo vertical do container.

**Precisamos que:**

- O container utilize quebra de linhas. (flex-wrap: wrap;)
- A altura do container seja maior que a soma das linhas dos itens.

**Tipos de alinhamento:**

- center                    | alinhamento dos itens ao centro
- stretch                   | é o padrão e os flex itens crescem igualmente
- flex-start                | alinhamento dos itens no início
- flex-end                 | alinhamento dos itens no final
- space-between     | cria um espaçamento igual entre os elementos
- space-around       | os espaçamentos do meio são duas vezes maiores que o inicial e o final

![Align-content-flex-start](https://user-images.githubusercontent.com/107083404/182499076-e13a8f81-7814-42c5-b487-e77483bf3d26.png)
![Align-content-flex-end](https://user-images.githubusercontent.com/107083404/182499081-8e98ca8c-5ea2-4963-9b4d-cd60b2dea450.png)
![Align-content-space-between](https://user-images.githubusercontent.com/107083404/182499085-741c6e4e-2aa3-4e71-b0c0-85df9678b774.png)
![Align-content-space-around](https://user-images.githubusercontent.com/107083404/182499086-3870f392-3ce6-4331-ba71-7ffe4afebffc.png)
![Align-content-Strech](https://user-images.githubusercontent.com/107083404/182499094-a245841f-c994-4249-a683-d4f17cf50126.png)
![Align-content-Center](https://user-images.githubusercontent.com/107083404/182499098-a9059106-c5e4-401c-b8e7-eeb007cd9bbf.png)



# Fundamentos - Parte 2

## Flex-grow (item)

Define a proporcionalidade de crescimento dos itens, respeitando o tamanho de seus conteúdos internos.

**OBS:** não irá funcionar caso tenhamos adicionado justify-content ao nosso flex container

![Flex-grow](https://user-images.githubusercontent.com/107083404/182499125-f3ef648a-2cdc-42a9-9ff3-3ba7fce3cb24.png)



## Flex-basis (item)

É a propriedade que estabelece o tamanho inicial do item antes das distribuições de espaço restante dentro dele, usando como base o conteúdo interno disposto.

**Valores possíveis**

- auto                 | caso o item não tenha tamanho, este será proporcional ao conteúdo do item.
- px, %, em, ...   | são valores exatos previamente definidos.
- 0 (zero)            | terá relação com a definição do flex-grow.

![flex-basis](https://user-images.githubusercontent.com/107083404/182499138-f38b45c1-1bb7-4498-95e9-07f7cc6465ad.png)



## Flex-shrink (item)

É a propriedade que estabele a capacidade de redução ou compressão do tamanho de um item.

![flex-shrink](https://user-images.githubusercontent.com/107083404/182499155-d1b5aa61-000f-4420-93f9-c1e8f68eb8d0.png)



## Flex (itens)

Esta propriedade é um atalho ou abreviação de escrever para as propriedades:

grow, shrink e basis.

## Order (itens)

Lida diretamente com a ordenação dos flex-itens.

## Align-self (itens)

É a propriedade que estabelece o alinhamento de modo individual sobre um determinado item.

**OBS:** O container desse item não pode ter um align-items definido

**Valores possíveis:**

- auto          |valor padrão, irá respeitar a definição de alinhamento de align-items do container.
- flex-start  | ao início do container
- flex-end   | ao final do container
- center      | relativo ao centro de acordo com o eixo

- stretch     | ocupa todo o espaço relatio
- baseline   | utiliza a linha base da tipografia
