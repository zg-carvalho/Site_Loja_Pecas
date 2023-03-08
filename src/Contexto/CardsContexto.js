import React, {useState, createContext, useCallback} from 'react'
import axios from 'axios';

const CardsContexto = createContext();

const CardsContextoProvider = ({children}) =>{

    var [Produtos, setProdutos] = useState([]) // var que salva as informações do resultado da bancodadosApi
    var [produtosfiltrado, setProdutosfiltrado] = useState([])

    const API = 'http://localhost:3001/produtos'


    const _ = require("lodash")

    function BuscarProdutos() {
        var bancodadosApi = API
        axios.get(bancodadosApi).then(resultado => {

            setProdutos(resultado.data)

            setProdutosfiltrado(resultado.data)

            console.log(produtosfiltrado)

        })
    }

    const PesquisaProdutos = useCallback((textoimpute) => {

        const filtro = _.filter(Produtos, produto => {
            return _.lowerCase(produto.nome).includes(_.lowerCase(textoimpute))
        })

        setProdutosfiltrado(filtro)

    })


    return(
        <CardsContexto.Provider value={{produtosfiltrado, BuscarProdutos, PesquisaProdutos }}>
            {children}
        </CardsContexto.Provider>
    )

}

export{CardsContextoProvider};
export default CardsContexto;
