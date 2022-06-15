# Tabela comandos.
|Comando| Nomenclatura       | Função            |Linux |
| ----- | ----------------- | ------------------ | ---- |
|cd     | change directory  | muda o diretório   |ls    |
|cd ..  | change directory  | volta uma pasta    |      |
|dir    | directory         | diretório (pasta)  |      |
|cls    | clear screen      | limpa o terminal   |clear |
|mkdir  | make directory    | cria uma pasta     |      |
|del    | delete            | apaga um arquivo   |      |
|rmdir  | remove directory  | apaga um diretório |      |
|echo   | output            | output (print)     |      |
|echo > | output            | cria um arquivo    |      |
|mv     | move arq .pasta/  | move arquivos      |      |    

# Simulando os comandos no terminal:

## EX: 
 - dir - vai me dar as pastas do atual diretório.
 - cd /
 - cd Windows       | vai entrar em uma certa pasta.
 - cd ..            | volta pra pasta anterior.
 - cls              | limpa a tela.
 - mkdir workspace  | criei uma pasta chamada workspace no diretório C:\
 - dir workspace	
 - echo Hello       | retorna um output (tipo um print).
 - echo > Hello.txt | cria um arquivo com o output (.txt especifica o tipo do arquivo).
 - cd ..
 - del workspace    | ao pedir pra apagar ele vai pedir uma confirmação:
   - Tem certeza (S/N)? S
 - dir              | mostra que a pasta workspace ainda está la, pois, o comando del só se limita a arquivos.
 - cd workspace
 - dir              | vai mostrar que o arquivo Hello.txt não está mais la.
 # RECRIANDO O ARQUIVO
 - echo > Hello.txt
 - cd ..
 - rmdir workspace /S /Q    | Apaguei a pasta workspace por completo.