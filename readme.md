## DESAFIO JUMP SOLUÇÕES

Consumo da API, usando as tecnologias de desenvolvimento web como,  Typscript, Node js, Express e MongoDb.

Os testes da API são realizadas no POSTMAN, dessa forma são avaliadas as requisições efetuadas.

![alt text](https://github.com/fredcrodrigues/Desafio_Jump/blob/main/postman.png)


Para executar use:

```bash
npm start
```

Para realizar compra segue o exemplo abaixo a aser inserido no banco de dados:
```bash
{
    "produto":[ { 
        "nome":"Teclado",
        "valor_produto":"50",
        "quantidade": "3"
    }],
    "codigo_usuario": "efb083f22e47c9436b6b320df2dc8d48d1bc15390265c3d829ef548e8bbccc0b"
}
```

A propriedade total é gerada automaticamente, assim como a data da compra gerada pelo usuario. Para cadastrar um usuario o exemplo abaixo pode ser utilizado:
```bash
{
    "nome":"fredson",
    "email": "fredsonteste3@gmail.com",
    "telefone": "9899683417"
}
```

O codigo do usuario é gerado automaticamente. A API pode ser testada junto ao front-end.

