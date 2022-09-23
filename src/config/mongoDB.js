import mongoose from "mongoose";  
import {login} from "./loginSenha.js"
import {senha} from "./loginSenha.js"

mongoose.connect(`mongodb+srv://${login}:${senha}@cluster0.euqwpps.mongodb.net/champions-lol`)
let db = mongoose.connection;

export default db;