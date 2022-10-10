import express, { application } from "express";
import personagens from "../models/Personagens.js"
import upload from "../middlaware/upload.js";
import bcrypt from "bcrypt";
import { User } from "../models/User.js";


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


//REGISTRO DE USUARIO

rotas.post('/registro', async (req, res) => {
    const {nome, email, senha, confirmesenha} = req.body

    //VALIDAÇÕES
    if (!nome){
        return res.status(422).json({msg: 'Campo obrigatório'})

    }
    if (!email){
        return res.status(422).json({msg: 'Campo obrigatório'})
        
    }

    if (!senha){
        return res.status(422).json({msg: 'Campo obrigatório'})
        
    }

    if(senha !== confirmesenha){
        res.status(422).json({msg: 'As senhas não conferem'})
    }

    const salt = await bcrypt.genSalt(12) //gensalt 12 digitos a mais add segurança
    const senhaHash = await bcrypt.hash(senha, salt)

    //CRIANDO USUARIO NO BANCO

    const usuario = new User({
        nome,
        email,
        senha: senhaHash,
    })

    try {
        await usuario.save()
        res.status(200).json({msg: "Usuario criado com sucesso"})

    } catch(error){
        console.log(error)
        res.status(500).json({msg: 'Erro'})
        
    }
})

//LOGIN DO USUARIO 

rotas.post('/login', async (req, res) => {
    const {email, senha} = req.body

    if (!email){
        return res.status(422).json({msg: 'Usuario não encontrado'})
        
    }

    if (!senha){
        return res.status(422).json({msg: 'Senha Incorreta'})
        
    }

})

// ADICIONANDO PERSONAGEM
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
    res.send("Personagem Cadastrado com sucesso")
})


export default rotas;



