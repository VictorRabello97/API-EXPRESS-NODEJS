
async function fazPost(userid, tokenUrl){
    await axios({
      method: 'get',
      url: `http://localhost:3000/personagens/${userid}`,

      headers:{
        "Content-Type": 'multipart/form-data',
         authorization: `Bearer ${tokenUrl}`,
        },
    
    }).then((response)=>{
        const data = response.data
        console.log(data)

    response.data.forEach(element => {
        const nomePokemon = element.nome
        const tipoPokemon = element.tipo 
        const precoPokemon = element.preco 
        const imgPokemon = element.foto
  
        console.log(nomePokemon)
        console.log(tipoPokemon)
        console.log(precoPokemon)
        console.log(imgPokemon)
        
      const url = "../../public/fotos/"+imgPokemon
      const divPokemon = document.querySelector('#pokemon')
        
      createPokemon(nomePokemon, tipoPokemon, precoPokemon, url, divPokemon)
          })
 

     }).
     catch((error, response)=>{
      console.log(error)
      console.log(error.response.data.msg)
      
    })
  
  }

function getURL(){
const queryString = window.location.search;
  console.log(queryString);
  const urlParams = new URLSearchParams(queryString);
  const userid = urlParams.get('userid');
  const tokenUrl = urlParams.get('token');
  console.log(userid)
  console.log(tokenUrl)

  fazPost(userid, tokenUrl)

}

getURL()


function createPokemon(nomePokemon, tipoPokemon, precoPokemon, url, divPokemon){
  const divPai = document.createElement('div')
       const divFilho = document.createElement('div')
       const namePokemon = document.createElement('nome')
       const typePokemon = document.createElement('tipo')
       const pricePokemon = document.createElement('preço')
       const imagemPokemon = document.createElement('img')
       divFilho.id = 'poke'
       namePokemon.id = 'name'
       typePokemon.id = 'type'
       pricePokemon.id = 'price'

       namePokemon.textContent = nomePokemon
       typePokemon.textContent = tipoPokemon
       pricePokemon.textContent = precoPokemon
       imagemPokemon.src = url

       divFilho.appendChild(namePokemon)
       divFilho.appendChild(typePokemon)
       divFilho.appendChild(pricePokemon)
       divFilho.appendChild(imagemPokemon)
       divPai.appendChild(divFilho)
       divPokemon.appendChild(divPai)
}

function replace(userid, tokenUrl){

  window.location.replace(`http://127.0.0.1:5500/HTML/AdicionandoPokemon/addPersonagem.html?userid=${userid}&token=${tokenUrl}`)
    }

function addPersonagem(){
    const queryString = window.location.search;
    console.log(queryString);
    const urlParams = new URLSearchParams(queryString);
    const userid = urlParams.get('userid');
    const tokenUrl = urlParams.get('token');

    replace(userid, tokenUrl)
    }
       
       