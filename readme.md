### Debug desde Visual studio code

va a pedir configurar un archivo launch.json

{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "launch",
      "name": "Launch Program",
      "skipFiles": [
        "<node_internals>/**"
      ],
      "program": "${workspaceFolder}/02-fundamentos/07-promesas2.js"
    }
  ]
}

### uso de parametros ejercicio 03-bases-node

```
node app crear --base=5 
node app crear -b 5
node app listar
```

para pasar parametros y debuguear
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "launch",
      "name": "Launch Program",
      "skipFiles": [
        "<node_internals>/**"
      ],
      "program": "${workspaceFolder}/03-bases-node/app3.js",
      "args": ["crear", "--base=5"]
    }
  ]
}

### Extensiones VSCODE

JavaScript (ES6) code snippets
Bracket Pair Colorizer 2
Auto Import
Auto Close Tag
JS-CSS-HTML Formatter
Live Server
Node.js Modules Intellisense
pug (jade) formatter
TypeScript Importer
VS Code for Node.js - Development Pack
TSLint


### instalar docker y crear contenedor
https://mariadb.com/kb/en/installing-and-using-mariadb-via-docker/

docker pull mariadb
docker run --name mariadb1 -e MYSQL_ROOT_PASSWORD=secretpass -d mariadb --character-set-server=utf8mb4 --collation-server=utf8mb4_unicode_ci MYSQL_DATABASE=resto MYSQL_USER=restousr MYSQL_PASSWORD=secretpass -v -v $HOME/dockers/volumes/mysql:/var/lib/mysql

### ejecutar comandos en mariadb
docker exec -i mariadb1 sh -c 'exec mysql -uroot -p"secretpass"' < /some/path/on/your/host/all-databases.sql

### Libreria mysql
https://www.w3schools.com/nodejs/nodejs_mysql.asp
```
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "yourusername",
  password: "yourpassword"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

```