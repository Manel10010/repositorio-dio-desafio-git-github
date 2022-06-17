# CRIANDO CHAVE SSH E TOKEN PESSOAL

CHAVE SSH | Chave pra conectar o Git ao GitHub
###### No Git Bash 

ssh-keygen -t ed25519 -C (e-mail)  | comando pra gerar a chave

- vai pedir uma senha, e gerar um arquivo na pasta /c/Users/nome.user/.ssh/
- ir na pasta usando o dir /c/Users/nome.user/.ssh/
- usar o comando cat id_ed25519.pub | vai retornar a chave pública
- agora com a chave em mãos é só aplicar no GitHub e pronto chave SSH criada

###### Na pasta atual das keys usar os comandos:
 - eval $(ssh-agent -s) | 
 - ssh-add id_25519 | 
 - aplicar senha

# Clonando um repositório GitHub
 - criar uma pasta pra receber o repositório
 - copiar o link SSH do repositório no GitHub
 - git clone (Link SSH) 
	 - yes

Pronto repositório clonado

# CRIANDO TOKEN
Pra criar o TOKEN basta ir no GitHub e gerar a chave, estimular um prazo até ela expirar
copiar a chave e salvar em algum arquivo.