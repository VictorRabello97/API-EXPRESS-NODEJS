import express, { application, response } from "express";
import personagens from "../models/Personagens.js"
import upload from "../middlaware/upload.js";
import { checkToken } from "../middlaware/upload.js";


const rotasPersonagens = express.Router()


// FILTRANDO PERSONAGENS DE ACORDO COM O USUARIO LOGADO
rotasPersonagens.get('/:idusuario', checkToken, async(req, res) => {
    const id = req.params.idusuario

    const personagem = await personagens.find({idusuario: id})

    if (!personagem){
        return res.status(404).json({msg: "Nenhum Pokemon cadastrado"})
    }
    res.status(200).json(personagem)
})


// ADICIONANDO PERSONAGEM
rotasPersonagens.post('/adicionar/:id', checkToken, upload.single('foto'), async (req, res) => {
    const id = req.params.id
    let personagem = new personagens({
        idusuario: id,
        nome: req.body.nome,
<<<<<<< HEAD
        tipo: req.body.tipo,
=======
        funcao: req.body.funcao,
>>>>>>> 1eb7d37ecc6e4b37b2f93a807f1b6592ac804362
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
    res.send("Pokemon Cadastrado com sucesso")
})


export default rotasPersonagens;



