import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import axios from "axios"


function Pagina1() {

    var [produto, setProduto] = useState(null)

    var info = useLocation()

    const API = `http://localhost:3001/produtos/${info.id}/`

    useEffect(() => {
        var bancodadosApi = API
        axios.get(bancodadosApi).then(resultado => {

            setProduto(resultado.data)
        })
    }, [])

    return (
        <>
            <nav>
                <ul>



                </ul>
            </nav>

            <div className='container2'>
                <div>
                    {produto && (
                        <div className='produto2'>
                            <img className="imagem2" src={`${produto?.Fotos[0].url}`} />
                        </div>
                    )}
                </div>
                {produto && (
                    <div className='Info_Produto'>
                        <h2 className='nome2'>{produto.nome}</h2>
                        <p className='marca2'>{produto.marca}</p>
                        <p className='descricao2'>{produto.descricao}</p>
                       <p className='descricao2'>Custo = {produto.custo},00</p>
                        <p className='Info_preco'>R$: {produto.preco},00</p>

                        <Link to='/'>
                            <div className='voltar'>Voltar</div>
                        </Link>
                    </div>
                )}


            </div>


        </>
    )

}

export default Pagina1
