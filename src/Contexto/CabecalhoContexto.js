import React, {useState, createContext} from 'react'

const CabecalhoContexto = createContext();

const CabecalhoContextoProvider = ({children}) =>{

    var [quantidade, setQuantidade]=useState(0)
   
    
    function Contador(){ // Função Atualizar o Contardor de produtos que tem no Carrinho
        var valor = 1 
         var total = quantidade+valor
         setQuantidade(total)
    }

    var [infocabecalho,setInfocabecalho] = useState('')

    return(
         <CabecalhoContexto.Provider  value={{infocabecalho,quantidade,Contador, setInfocabecalho}}>

             {children}

         </CabecalhoContexto.Provider>

    )

}

export{CabecalhoContextoProvider};
export default CabecalhoContexto;

