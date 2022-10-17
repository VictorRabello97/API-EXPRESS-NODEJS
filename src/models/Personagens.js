import mongoose from "mongoose";

const personagemSchema = new mongoose.Schema(
    {
    id : {type: String}, 
    idusuario: {type: String},   
    nome: {type: String, required: true},
    tipo: {type: String, required: true},
    preco: {type: String, required: true},
    foto: {type: String, required: true},

    })

    const personagens = mongoose.model('Champions', personagemSchema)
    export default personagens;
