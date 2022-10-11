import express from "express";
import db from "./src/config/mongoDB.js"
import rotasPersonagens from "./src/routes/rotasPersonagens.js";
import rotasUsuarios from "./src/routes/rotasUsuarios.js";

///CONECTANDO E VALIDANDO O SERVIDOR
const app = express();
const port = 3000

app.use(express.json());
app.use('/user', rotasUsuarios);
app.use('/personagens', rotasPersonagens);

app.listen(port, () => {
    console.log(`Servidor escutando na porta ${port}`)
}); 



///VERIFICANDO CONEXÃO COM O BANCO DE DADOS
db.on("error", console.log.bind(console, 'Erro de conexão com o mongoDB'))
db.once("open", () => {
    console.log("Conexão com o Banco de Dados Ok.")
})

export default app;


