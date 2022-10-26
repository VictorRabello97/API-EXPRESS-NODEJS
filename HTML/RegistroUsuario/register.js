function fazPost(url, body){

    console.log("Body=", body)

    let request = new XMLHttpRequest()
    request.open("POST", url, true)
    request.setRequestHeader("content-type", "application/json")
    request.send(JSON.stringify(body))

    request.onload = function(){
        console.log(this.responseText)
        alert(this.responseText)
        window.location.replace('http://127.0.0.1:5500/HTML/LoginUsuario/login.html')
        

        
    }
    return request.responseText

}

function registerUser(){
    event.preventDefault()
    let url = "http://localhost:3000/user/cadastro"
    let nome = document.getElementById("nome").value
    let email = document.getElementById("email").value
    let senha = document.getElementById("senha").value
    let confirmesenha = document.getElementById("confirmeSenha").value

    console.log(nome)
    console.log(email)



          body = {
            "nome": nome,
            "email": email,
            "senha": senha,
            "confirmesenha": confirmesenha

          }



    fazPost(url, body)


}