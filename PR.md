# Exame de Engenharia Web
## Gabriel Araújo a102023
### 16/5/2014

**Ex.1**
- O ficheiro cvs_to_json.py transform o ficheiro csv num ficheiro JSON, depois eu só removi as duas primeiras linhas e a última para transformar o JSON num array de objetos
- A base de dados foi criada com um container docker com os seguintes comandos:
```
. docker run -d -p 27017:27017 --name exameew mongo
. docker cp ./contratos.json exameew:/tmp
. docker exec -it exameew bash
. mongoimport -d contratos -c contratos /tmp/contratos.json --jsonArray
```
Após testar, a BD funcionava corretamente
- `apidados` criada com `express apidados`
- Os métodos POST e PUT não funcionam, após vários testes e mudanças não consegui arranjar o problema
- Todos os outros métodos foram testados no postman e funcionaram

**Ex2**
- Como o Ex1 foi feito, não foi necessário realizar com o json-server.
- Copiei grande parte do conteúdo do Ex1 para o Ex2, por isso ainda existem algumas coisas no código que agora são desnecessárias
- Não foi utlizado CSS por falta de tempo, mas os 3 pontos foram feitos e funcionam. As páginas apenas não estão 'bonitas'

**Ex3**
-Não foi realizado
