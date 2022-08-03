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

## Flex-direction (container)

É a propriedade que estabelece o eixo principal do container, definindo assim a direção que os flex items são colocados no flex container.

**Eixos:**

- row(padrão)     | à direção do texto, esquerda para direita
- row-reverse      | sentido oposto à direção do texto

- column              | ordenação de cima para baixo, em coluna unica
- column-revese | ordenação inversa, de baixa para cima

## Flex-wrap (container)

É a propriedade que define se os itens devem ou não quebrar a linha.

Por padrão eles não quebram linhas, isso faz com que os flex itens sejam compactados além do limite do conteúdo.

- nowrap | é o padrão não permite a quebra de linha.
- wrap      | permite a quebra de linha assim que um dos flex itens não puder mais ser compactado.
- wrap-reverse | permite a quebra de linha assim que um dos flex itens não puder mais ser comptado, porém na direção contrária da linha.

## Flex-flow

É um atalho para as propriedades flex-direction e flex-wrap.

Porém seu uso não é tão comum, visto que, quando mudamos o flex-direction para column, mantemos o padrão do flex-wrap que é nowrap.

## Justify Content (container)

Essa propriedade ela vai se encarregar do alinhamento dos itens dentro do container de acordo com a direção pretendida e tratar da distribuição de espaçamento entre eles.

**OBS:** caso seus itens estejam ocupando 100% de todo o container, ela não se aplica.

**Variações**:

- flex-start:      | início do container.
- flex-end        | final do container.
- center           | ao centro do container.
- space-between  | cria um espaçamento igual entre os elementos.
- space-around  | os espaçamentos do meio são duas vezes maiores que o inicial e o final.

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

# Fundamentos - Parte 2

## Flex-grow (item)

Define a proporcionalidade de crescimento dos itens, respeitando o tamanho de seus conteúdos internos.

**OBS:** não irá funcionar caso tenhamos adicionado justify-content ao nosso flex container

## Flex-basis (item)

É a propriedade que estabelece o tamanho inicial do item antes das distribuições de espaço restante dentro dele, usando como base o conteúdo interno disposto.

**Valores possíveis**

- auto                 | caso o item não tenha tamanho, este será proporcional ao conteúdo do item.
- px, %, em, ...   | são valores exatos previamente definidos.
- 0 (zero)            | terá relação com a definição do flex-grow.

## Flex-shrink (item)

É a propriedade que estabele a capacidade de redução ou compressão do tamanho de um item.