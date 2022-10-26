async function fazPost(url, body, userid, tokenUrl){
    console.log(`dsgfjdfhgjkdfhkgjhdfg ${tokenUrl}`)
    const formData = new FormData();
    formData.append("nome", body.nome)
    formData.append("tipo", body.tipo)
    formData.append("preco", body.preco)
    formData.append("foto", body.foto)

    await axios({
      method: 'post',
      url: `http://localhost:3000/personagens/adicionar/${userid}`,
      data: formData,
      
      headers:{
        "Content-Type": 'multipart/form-data',
         authorization: `Bearer ${tokenUrl}`,
        },
    

    }).then((response)=>{
      console.log(response)
      console.log(tokenUrl)
      console.log(userid)
      // alert(response.data)
      window.location.replace(`http://127.0.0.1:5500/HTML/UsuarioLogado/bemVindo.html?userid=${userid}&token=${tokenUrl}`)

    }).catch((error, response)=>{
      console.log('Erro ao cadastrar o personagem')
      console.log(error.response.data.msg)
      alert(error.response.data.msg)
  
    })
  
  }
  
  function cadastrar(){
      event.preventDefault()
      let url = "http://localhost:3000/user/adicionar"
      let nome = document.getElementById("nome").value
      let tipo = document.getElementById("tipo").value
      let preco = document.getElementById("preco").value
      let foto = document.getElementById("foto").files[0]
      

  
  
  
            body = {
              "nome": nome,
              "tipo": tipo,
              "preco": preco,
              "foto": foto,
  
            }
            

            const queryString = window.location.search;
            console.log(queryString);
            const urlParams = new URLSearchParams(queryString);
            const userid = urlParams.get('userid');
            const tokenUrl = urlParams.get('token');
            console.log(userid)
            console.log(tokenUrl)



  
  
      fazPost(url, body, userid, tokenUrl)
  
    
  
  }

  function replace(userid, tokenUrl){

    window.location.replace(`http://127.0.0.1:5500/HTML/PokemonsCadastrados/listaPersonagens.html?userid=${userid}&token=${tokenUrl}`)

      }
  
      function listaPersonagens(){
      const queryString = window.location.search;
      console.log(queryString);
      const urlParams = new URLSearchParams(queryString);
      const userid = urlParams.get('userid');
      const tokenUrl = urlParams.get('token');
  
      replace(userid, tokenUrl)
      }