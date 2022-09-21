const express = require('express')

const app = express()

app.get('/teste', () =>{
    console.log('Estamos no caminho certo !!')
})

app.listen(3000)