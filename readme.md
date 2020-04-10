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
