import jwt from "jsonwebtoken";
import { SECRET } from "../config/secret.js";
import bcrypt from "bcrypt"
import { User } from "../models/User.js";
import { checkToken } from "../middlaware/upload.js";
import express from "express";

const rotasUsuarios = express.Router()

// ROTA PRIVADA DO USUARIO COM LOGIN

rotasUsuarios.get('/usuario/:id', checkToken, async (req, res) => {
    const id = req.params.id

    //verificando se usuario existe

    const user = await User.findById(id, '-senha')

    if (!user) {
        return res.status(404).json({msg: 'usuario não encontrado'})
    }

    res.status(200).json(user)
})


//REGISTRO DE USUARIO

rotasUsuarios.post('/cadastro', async (req, res) => {
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

rotasUsuarios.post('/login', async (req, res) => {
    const {email, senha} = req.body

    if (!email){
        return res.status(422).json({msg: 'Por favor, digite o E-mail'})
        
    }

    if (!senha){
        return res.status(422).json({msg: 'A senha é obrigatória'})
        
    }
    
    //Verificando se o usuario está cadastrado

    const user = await User.findOne({email:email})
    
    if (!user) {
    return res.status(404).json({msg: 'Usuario não encontrado'})
        
        }
    
   // verificando senha

   const checkpassword = await bcrypt.compare(senha, user.senha)

   if (!checkpassword){
    return res.status(422).json({msg: 'Senha incorreta'})
   }
   try{

    const secret = SECRET
    const token = jwt.sign(
        {
            id: user._id,
        },
        secret,
        )
        res.status(200).json({msg: "Login com sucesso", token})
    


   } catch(err){
    console.log(err)
    res.status(500).json({msg: "Erro ao fazer o Login"})

   }

   
    
})

export default rotasUsuarios;


