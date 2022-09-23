import multer from "multer";


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

export default upload;