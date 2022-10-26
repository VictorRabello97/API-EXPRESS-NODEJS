
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

    function replacePokemon(userid, tokenUrl){

      window.location.replace(`http://127.0.0.1:5500/HTML/PokemonsCadastrados/listaPersonagens.html?userid=${userid}&token=${tokenUrl}`)
        }
    
        function verPokemons(){
        const queryString = window.location.search;
        console.log(queryString);
        const urlParams = new URLSearchParams(queryString);
        const userid = urlParams.get('userid');
        const tokenUrl = urlParams.get('token');
    
        replacePokemon(userid, tokenUrl)
        }