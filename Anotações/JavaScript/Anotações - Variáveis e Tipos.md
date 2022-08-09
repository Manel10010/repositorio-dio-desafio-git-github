# Variáveis e Tipos

## Atribuindo valores

- **variáveis**

  -  var         | escopo global
  -  let          | escopo local (escopo de bloco)

  





**Obs:**  Variáveis utilizam o camelCase e o let é sempre utilizado o var fica meio de lado por conta da segurança e aconteçe o hoisting.



- **constantes**
  - const       | escopo local (escopo de bloco)







**Obs: **Constantes utilizam o SNAKE-UPPER_CASE seu escopo é de bloco e o hoisting não aconteçe.

### RESUMO var, let e const







## Tipos

**Estruturas de dados:** string, inteiro, lista...

**Obs: **As estruturas em JavaScript podem ser modificadas enquanto vc está codando.



img

- Strings | possui propriedades que outros tipos não possuem. Ex: length
  - Comumente utilizada para textos
  - Valores declarados entre aspas ou crases.

**Obs:** É um tipo de dado iterável, tem índices. Ex: nome = 'João' | nome[0] = 'J'

img



- Numeros  | Podem ser inteiros ou decimais

  - Aplicar operações

  - Utilizar Math.  e utilizar funções/metodos prontos do JS. 

    EX: Math.floor e Math.ceil

**Obs:** Podemos transformar numbers em strings utilizando o .toString()

- Booleanos | Utilizado para verdadeiro ou falso
  - true
  - false

**Obs:**  Utilizados em validações.  ! antes do valor inverte ele.

- Arrays  | Listas iteráveis de elementos.
  - index   | sempre começa no 0.
  - push    | array.push(3) coloca ao fim o elemento 3 na lista.
  - length  | array.lenght() indica o tamanho da lista
  - pop      | array.pop() remove o último elemento da lista
  - shift     | array,shift() remove o primeiro elemento
  - unshift | array.unshift() adiciona no ínicio
  - includes | array.includes(x) verifica se um número está na lista e retorna um bool
  - etc ...

**Obs:** Para percorrer uma lista e ver seus elementos utilizamos:

for(let i = 0; i < array.length; i++) {

​	console.log(array[1])

}

- Objetos  | estrutura do tipo chave e valor (dicionario)
  - key    | chave
  - value | valor da chave
  - Object.values | Object.values(obj) retorna os valores
  - Object.keys     | Object.keys(obj) retorna as chaves

**Obs:** Dando valor: let obj = {} | obj.name = 'julia' **ou** obj['name'] = 'julia'

img

​	

- Empty, undefined e null | valor vazio
  - Empty        | quantidade 0
  - null             | vazio/nulo
  - undefined | indefinido

