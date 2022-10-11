import mongoose from "mongoose";

export const User = mongoose.model('User', {
    id: String,
    nome: String,
    email: String,
    senha: String,
})


