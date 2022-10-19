const express = require('express');
const app = express();

// app.set('view engine', 'ejs');
// app.use(express.static('public'));
app.use(express.json())


//Rota que retorna na Home.
app.get('/', function (req, res) {
  res.send('Esta é a Home');
});



//INICIALIZANDO O APP!
app.listen(3000, (erro) => {

      if (erro) {
          console.log(erro, 'Erro');

      } else {
          console.log(' Funcionando aqui: http://localhost:3000');
     }
});








