const express = require('express');
const { json } = require('express/lib/response');

const app = express();

var router = require('./router')

app.set('view engine', 'ejs');

app.use(express.urlencoded({extended: false}))
app.use(express(json))

app.use('/', router);

app.listen(5000,()=>{
    console.log('servidor rodando na porta de 5000')
})