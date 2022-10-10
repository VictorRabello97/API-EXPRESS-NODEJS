import mongoose from "mongoose";

export const User = mongoose.model('User', {
    nome: String,
    email: String,
    senha: String,
})


