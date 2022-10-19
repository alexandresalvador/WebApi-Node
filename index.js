const express = require('express');
const app = express();

// app.set('view engine', 'ejs');
// app.use(express.static('public'));
app.use(express.json())

//const DB = require('./models/pessoa', 'database');

const DB = {
  pessoas: [
      {
          id: 1,
          nome: "Arthur",
          email: "arthur@123",
          genero: "Masculino",
          idade: "26",
          endereco: {
               rua: "Antonio Jorge Cecyn",
               número: 379,
               bairro: "Saguaçu",
               cidade: "Joinville",
               estado: "SC",
               cep: "30220749",
          },
      },
      {
          id: 2,
          nome: "Mário",
          email: "mario@123",
          genero: "Masculino",
          idade: "25",
          endereco: {
               rua: "pica-pau",
               número: 274,
               bairro: "Aventureiro",
               cidade: "Joinville",
               estado: "SC",
               cep: "10226549",
         },
      },
      {
          id: 3,
          nome: "Vírginia",
          email: "virginia@123",
          genero: "Feminino",
          idade: "20",
          endereco: {
               rua: "Flores",
               número: 100,
               bairro: "Bucarein",
               cidade: "Joinville",
               estado: "SC",
               cep: "32770741",
          },
      },
  ],
};

//Rota que retorna todas as pessoas cadastradas por meio do método GET.
app.get('/pessoas', function (req, res) {
  res.json('DB.pessoas');
});

//Rota que retorna uma pessoa por id por meio do método GET.
app.get("/pessoas/:pessoaId", (req, res) => {
    const idPessoa = req.params.pessoaId;

      if (isNaN(idPessoa)) {
          res.statusCode = 400;
          res.send("O id informado não é um número.");
       } 

        else {
        const id = parseInt(idPessoa);
        const pessoa = DB.pessoas.find((index) => index.id === id);
             if (pessoa !== undefined) {
                  res.statusCode =  200;
                  res.json(pessoa) ;
               } 
               
                  else {
                     res.sendStatus(404);
                  }
             }
 });

// criando uma nova pessoa com o método de requisição POST.
app.post("/pessoas", (req, res) => {
   const {
          nome,
          email,
          genero,
          idade,
          endereco = { 
              rua, 
              numero, 
              bairro, 
              cidade, 
              estado, 
              cep, 
            },
      } 
      = req.body;

      DB.pessoas.push({

          id: Math.floor(Math.random() * 10 + 1),
          nome,
          email,
          genero,
          idade,
          endereco,
      });

      res.send({ message: "Uma nova pessoa foi adicionada com sucesso!" });
});

//INICIALIZANDO O APP!
app.listen(3000, (erro) => {

      if (erro) {
          console.log(erro, 'Erro');

      } else {
          console.log(' Funcionando aqui: http://localhost:3000');
     }
});








