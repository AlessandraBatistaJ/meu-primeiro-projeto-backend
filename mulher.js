const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333

function mostraMulher(request,response){
    response.json({
        nome:'Alessandra Batista',
        imagem:'https://avatars.githubusercontent.com/u/144848065?s=400&u=d9290dc39e35c8db1f04696e7f46b6339e4c38d9&v=4',
        minibio:'Desenvolvedora e estudante de programação'
    })
}

function mostraPorta(){
    console.log("Servidor criado e rodando na porta ", porta)
}

app.use(router.get('/mulher',mostraMulher))
app.listen(porta,mostraPorta)