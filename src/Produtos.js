import React, { useState, useEffect, useContext } from 'react'
import { BsCartDashFill } from "react-icons/bs";
import { Link } from 'react-router-dom';
import "./App.css"
//import axios from 'axios'
import ProdutosContexto from './Contexto/ContextoProdutos'
import CarrinhoContexto from './Contexto/CarrinhoContexto';


function Produtos() {

    const { produtosfiltrado, BuscarProdutos } = useContext(ProdutosContexto)
    const { Adicionar } = useContext(CarrinhoContexto)

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
                            <Link to={{
                                pathname: "/pagina1",
                                 id: produto.id
                            }} >

                                <div className='produto'>
                                    <img className="imagem" src={`${produto?.Fotos[0].url}`} />
                                    <h2 className='nome'>{produto.nome}</h2>
                                    <p className='descricao'>{produto.marca}</p>
                                    <p className='preco'>{produto.preco}</p>
                                    <div onClick={() => Adicionar({ ...produto, quantidade: 1 })} className='btn'>Add to cart</div>
                                </div>
                            </Link>
                        )
                    })
                )}

            </div>
        </div>

    )
}


export default Produtos
