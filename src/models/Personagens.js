import mongoose from "mongoose";

const personagemSchema = new mongoose.Schema(
    {
    id : {type: String}, 
    idusuario: {type: String},   
    nome: {type: String, required: true},
    funcao: {type: String, required: true},
    foto: {type: String, required: true},

    })

    const personagens = mongoose.model('Champions', personagemSchema)
    export default personagens;
