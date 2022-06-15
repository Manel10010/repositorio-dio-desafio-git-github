# COMANDOS GIT
| Comando                | Função                                                       |
| ---------------------- | ------------------------------------------------------------ |
| git init               | criando um repositório .git/                                 |
| git add *              | adicionando de untracked para tracked, ou de modified pra unmodified |
| git commit -m "Msg"    | comitando os arquivos e criando a sua snapshot, junto de uma mensagem (msg) |
| git status             | mostra os status do repositório untracked, unmodified, modified e staged |
| git clone (link)       | clona um repositório usando git clone link                   |
| git rm (arquivo)       | remove um arquivo do repositório                             |
| git remote add (link)  | adiciona um caminho por onde vamos enviar os push ou receber pulls |
| git push origin master | faz o envio dos arquivos pro repositório no GitHub           |
| git pull origin master | recebe arquivos do  repositório no GitHub                    |


# CONFIGURANDO GIT

- git config --global user.email "dkoaffhafhafa@gmail.com" | adicionando o e-mail do autor

  - O commit precisa da informação do autor, aqui nós estamos as aplicando

- git config --global user.name Manel                                       | adicionando o nome do autor

  **OBS**: Pra verificar essas informações utilizamos: 

  - git config --list  | Vai nos retornar todas as informações

# Adicionando um caminho para o commit no GITHUB

 - git config --list                                      | lista de configurações do git
 - git remote add origin (link GitHub)  | adicionando o link do repositório do GitHub
 - git remove origin                                | remove a origin
 - git remote -v                                        | verificando os links origin
 - git push origin master                        | enviando os repositórios para o GitHub, master sendo a branch

# CORRIGINDO ERROS DE MERGE

**Ex**: No caso de duas pessoas editarem o código na mesma linha vai ocorrer um erro de merge code.

 - git pull origin master | origin sendo o nome dado ao criar o git remote add
 - Quando ocorrer o pull o Git Bash vai identificar o erro e indicar em que arquivo ocorreu o erro
dado isso temos que corrigir a mão erro e então: 
 - git add * | git commit -m "resolve conflitos" | git push
**OBS**: pra evitar que o erro aconteça caso você saiba que já fizeram alterações use o git pull e depois faça suas alterações.

# Prática

###### Criando repositório 

**Obs**: Criar a pasta no c:/ workspace, entrar com o Git Bash e criar a pasta "livro-receitas" :

 - git init                         | vai inicializar o git dentro daquela pasta e criar uma pasta .git/

 - ls -a                             | vai mostrar as pastas ocultas, no caso a .git/

   ###### Configurando o autor, informação necessária pro commit.

 - git config --global user.email "(e-mail)"              | adicionando email

 - git config --global user.name "Manel10010"     | adicionando o nome do autor

 - git add * ou git add arquivo                                 | adicionando arquivos de untracked pra tracked

 - git commit -m 'commit inicial'                              | dando commit na mesma

 - git status                                                                  | mostra os status
