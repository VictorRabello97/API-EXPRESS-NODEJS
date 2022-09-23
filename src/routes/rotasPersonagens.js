import express from "express";
import personagens from "../models/Personagens.js"
import upload from "../middlaware/upload.js";


const rotas = express.Router()

rotas.get('/', async(req, res) => {
    personagens.find((err, personagens) => {
        try{
            res.status(200).send(personagens)

        } catch{
            res.status(500).send("Impossivel mostrar os personagens")

        }
    })
})


rotas.post('/addpersonagem', upload.single('foto'), (req, res) => {
    console.log(req.file)
    let personagem = new personagens({
        nome: req.body.nome,
        funcao: req.body.funcao,
        foto: process.cwd() + "/public/fotos/" + req.file.filename
    })
    console.log(personagem)
     personagem.save(function(err){
        if (err){
            console.log(err)
        } else {
            console.log(personagem.toJSON())
        }
    })
    res.send("Champion Cadastrado com sucesso")
})

export default rotas;



