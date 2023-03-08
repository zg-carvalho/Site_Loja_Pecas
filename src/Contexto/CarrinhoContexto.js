import React, {useState, createContext, useCallback} from 'react'

const CarrinhoContexto = createContext();

const CarrinhoContextoProvider = ({children}) =>{
    
    var [exibirCarrinho, setExibirCarrinho] = useState(false)
    var [carrinho, setCarrinho] = useState([]) // variável recebe os produtos que são selecionados para o carrinho
    var [contador, setContador] = useState(0)
    var [somaTotalProdutos, setSomaTotalProdutos] = useState(0)
  
   
                    //parametro é uma propriedade reservada da função map que está no componente Cabecalho.
    function Adicionar(parametro) { // Função Adicionar um Produto da lista de Array ao Carrinho
       
        var listaCarrinho = carrinho
         
        listaCarrinho.push(parametro)

        setCarrinho(listaCarrinho) // Função Atualizar Carrinho com a lista de produtodos adicionados já atualizada
        
        setContador(listaCarrinho.length) // função que atualiza a variável contador com o tamanho do array, ou seja a quantidade de produtos que há no carrinho
         
        var somaIconeMais = SomaTotal(listaCarrinho)

        setSomaTotalProdutos(somaIconeMais)

    } 

    // carrinho é meu parâmetro de onde pegarei as informações a serem percorridas 
    function SomaTotal(carrinho){
        
        var valortotal = 0 // variável responsável por guardar a somatória dos preços 

        for(var i=0; i<carrinho.length; i++){
            
            valortotal = valortotal + (carrinho[i].preco*carrinho[i].quantidade)

        }
        return valortotal
       
    }
  

    function Apagar(){
     
        setCarrinho([])
        setSomaTotalProdutos(0)
        setContador(0)
      
    }                   // produto é parametro que vem do mapeamento dos produtos da api no componente pagina2
    function ApagarProduto(produto, posicao){//posicao indica o produto do array que iremos excluir ao selecionarmos 

       var aux = [] //var auxiliar inicia com array vazio, mas recebe a nova lista dos produtos 

       for (var i=0; i<carrinho.length; i++){ // for que percorre todo o array carrinho, ou seja, todos os produtos que estão add no carrinho
        
        if(i !=posicao){ //se i for direfente da posicao, então será add ao array da var auxiliar (i corresponde a todas as posições contidas no array carrinho)

            aux.push(carrinho[i]) //array auxiliar recebe todas as posições referentes aos produtos, menos a posição que seja diferente
        }  
       }
 
        setCarrinho(aux) // var carrinho recebe somente os produtos que não forem diferente da posicao selecionada 
        
    }

    
    const Somacarrinho = useCallback(posicao=>{

      var carrinhoAtualizado = carrinho
      carrinhoAtualizado[posicao].quantidade++

      var somaIconeMais = SomaTotal(carrinhoAtualizado)

      setSomaTotalProdutos(somaIconeMais)

    },[carrinho])
  
    const Subcarrinho = useCallback(posicao=>{

        var carrinhoAtualizado = carrinho
        carrinhoAtualizado[posicao].quantidade--
  
        var subIconeMenos = SomaTotal(carrinhoAtualizado)
  
        setSomaTotalProdutos(subIconeMenos)
  
      },[carrinho])
    
    return(
         <CarrinhoContexto.Provider  value={{Adicionar, Somacarrinho, Apagar,Subcarrinho, ApagarProduto, setExibirCarrinho, exibirCarrinho, carrinho, contador, somaTotalProdutos}}>

             {children}

         </CarrinhoContexto.Provider>

    )

}

export{CarrinhoContextoProvider};
export default CarrinhoContexto;
