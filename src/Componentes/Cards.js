import { useContext, useEffect } from "react";
import CardsContexto from "../Contexto/CardsContexto";
import CarrinhoContexto from "../Contexto/CarrinhoContexto"

import { Link } from 'react-router-dom';

function Cards() {
    const { produtosfiltrado, BuscarProdutos  } = useContext(CardsContexto)
    const {Adicionar} = useContext(CarrinhoContexto)

    useEffect(() => {
        BuscarProdutos()
    }, [])

    return (
        <div className='Primeira'>
            < nav class="kMEoIT" >
                <div class="uFlOd">
                    <div class="gXvssD">
                        <ul class="HWgQa">
                            <li class="dVLGWG">
                                <a class="zFJsi">SUSPENSÃO
                                </a>
                            </li>
                            <li class="frItTo">
                                <a class="zFJsi">ELÉTRICA
                                </a>
                            </li>
                            <li class="frItTo">
                                <a class="zFJsi">FILTROS
                                </a>
                            </li>
                            <li class="frItTo">
                                <a class="zFJsi">CORREIAS
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav >

            <div className='container'>
                {produtosfiltrado && ( 
                    produtosfiltrado.map(produto => {

                        return (
                            
                                <div className='produto'>
                                  <Link to={{
                                    pathname:'/pagina1',
                                    id: produto.id
                                  }} >
                                    
                                    <img className="imagem" src={`${produto?.Fotos[0].url}`} /></Link>
                                    <h2 className='nome'>{produto.nome}</h2>
                                    <p className='marca'>{produto.marca}</p>
                                    <p className='preco'>R$: {produto.preco},00</p>
                                    <div onClick={() => Adicionar({ ...produto, quantidade: 1 })} className='btn'>Add to cart</div>
                                </div>
                            
                        )
                    })
                )}

            </div>
        </div>

    )

    }
    export default Cards;

 