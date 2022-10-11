import multer from "multer";
import { SECRET } from "../../secret.js";
import jwt from "jsonwebtoken"


var storage = multer.diskStorage({
    filename: function(req, file, cb){
        let nome = Date.now()+ "-" + req.body.nome +".jpg"
        console.log('ARQUIVO', file, req.body)
        cb(null, nome)
    },
    destination: function (req, file, cb) {
        let local = "./public/fotos"
        cb(null, local)

    }
})

const upload = multer({storage})

export function checkToken (req, res, next){
    const autenticador = req.headers['authorization']
    const token = autenticador && autenticador.split(" ")[1]

    if (!token){
        return res.status(401).json({msg: 'Me parece que você não tem permissão para tentar esse processo, verifique o seu Login e tente novamente!'})
    }

    try {
        const secret = SECRET

        jwt.verify(token, secret)

        next()

    } catch(error) {
        res.status(400).json({msg: "Token inválido"})

    }

}

export default upload;