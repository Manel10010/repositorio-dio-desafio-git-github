# Variáveis e Tipos

![CASOS - NOMECLATURA FORMA DE ESCRITA](https://user-images.githubusercontent.com/107083404/183542629-802c79bf-045e-440e-ae3f-7a1c61068338.png)

## Atribuindo valores

- **variáveis**

  -  var         | escopo global
  -  let          | escopo local (escopo de bloco

**Obs:**  Variáveis utilizam o camelCase e o let é sempre utilizado o var fica meio de lado por conta da segurança e aconteçe o hoisting.

![Var e let](https://user-images.githubusercontent.com/107083404/183542652-7f7bccfa-8f01-4629-9d4b-83f7238da23d.png)

- **constantes**
  - const       | escopo local (escopo de bloco)

**Obs:** Constantes utilizam o SNAKE-UPPER_CASE seu escopo é de bloco e o hoisting não aconteçe.

![CONST](https://user-images.githubusercontent.com/107083404/183542673-84f8ec97-0d47-4c2f-8670-f368d15f1a5a.png)

### RESUMO var, let e const

![RESUMO - var, let e const](https://user-images.githubusercontent.com/107083404/183542734-623a15f8-f472-47c0-89b9-2f4a1e7bc3cb.png)

## Tipos

**Estruturas de dados:** string, inteiro, lista...

**Obs:** As estruturas em JavaScript podem ser modificadas enquanto vc está codando.

![TIPOS ESTRUTURA DE DADOS](https://user-images.githubusercontent.com/107083404/183542766-0328a492-c5c2-4ef5-9d04-aab7fd2bf78e.png)

- Strings | possui propriedades que outros tipos não possuem. Ex: length
  - Comumente utilizada para textos
  - Valores declarados entre aspas ou crases.

**Obs:** É um tipo de dado iterável, tem índices. Ex: nome = 'João' | nome[0] = 'J'

![RESUMO - var, let e const](https://user-images.githubusercontent.com/107083404/183542806-8d468216-dac9-4f10-a7ef-90186d62117b.png)

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

![Objetos](https://user-images.githubusercontent.com/107083404/183543016-2a11952e-969b-44d0-ad8d-f67ae6061971.png)

- Empty, undefined e null | valor vazio
  - Empty        | quantidade 0
  - null             | vazio/nulo
  - undefined | indefinido

