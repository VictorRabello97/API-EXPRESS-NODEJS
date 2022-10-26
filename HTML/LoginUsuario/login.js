async function fazPost(url, body){
  await axios({
    method: 'post',
    url: 'http://localhost:3000/user/login',
    data: {
      email: body.email,
      senha: body.senha
    }
  }).then((response)=>{
    console.log(response)
    console.log(response.data.msg)
    alert(response.data.msg)
    window.location.replace(`http://127.0.0.1:5500/HTML/AdicionandoPokemon/addPersonagem.html?userid=${response.data.id}&token=${response.data.token}`)

  }).catch((error, response)=>{
    console.log('Erro ao fazer o Login')
    console.log(error.response.data.msg)
    alert(error.response.data.msg)
    // document.getElementById('email').value = error.response.data.msg
    // document.getElementById('senha').addEventListener = ('focusout', error.response.data.msg)


  })

}

function login(){
    event.preventDefault()
    let url = "http://localhost:3000/user/login"
    let email = document.getElementById("email").value
    let senha = document.getElementById("senha").value



          body = {
            "email": email,
            "senha": senha,

          }


    fazPost(url, body)

  

}

function replace(){
  window.location.replace('http://127.0.0.1:5500/HTML/RegistroUsuario/register.html')
}