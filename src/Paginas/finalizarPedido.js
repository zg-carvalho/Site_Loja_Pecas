
import React, { useContext, useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import axios from "axios"
import { Table } from 'reactstrap';
import { BsFillTelephoneFill, BsEnvelope, BsFillGeoAltFill } from "react-icons/bs";
import CarrinhoContexto from "../Contexto/CarrinhoContexto";
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";


function FinalizarPedido() {

    const { carrinho, somaTotalProdutos } = useContext(CarrinhoContexto)


    var [produto, setProduto] = useState([])

    var info = useLocation()
    

    const API = `http://localhost:3001/produtos/${info.id}/`

    useEffect(() => {
        var bancodadosApi = API
        axios.get(bancodadosApi).then(resultado => {

            setProduto(resultado.data)
        })
    }, [])



    function imprimir(produto) {
        pdfMake.vfs = pdfFonts.pdfMake.vfs;

        const reportTitle = [
            {
                text: "PRODUTOS VENDIDOS",
                fontSize: 15,
                bold: true,
                margin: [15, 20, 0, 45] //left, top, right, bottom
            }

        ]

        const dadosProdutos = carrinho.map((produt) => {

            return [
                { text: produt.nome, fontSize: 9, margin: [0, 2, 0, 2] },
                { text: produt.quantidade, fontSize: 9, margin: [0, 2, 0, 2] },
                { text: produt.preco + ",00", fontSize: 9, margin: [0, 2, 0, 2] },
                { text: (produt.preco * produt.quantidade), fontSize: 9, margin: [0, 2, 0, 2] },
              
            ]

        })

        const details = [
            {
                table: {
                    headerRows: 1,
                    widths: ["*", "*", "*", "*"],
                    body: [
                        [
                            { text: 'PRODUTO', style: 'tableHeader', fontSize: 10 },
                            { text: 'QUANTIDADE', style: 'tableHeader', fontSize: 10 },
                            { text: 'UNIDADE', style: 'tableHeader', fontSize: 10 },
                            { text: 'TOTAL', style: 'tableHeader', fontSize: 10 }

                        ],
                        ...dadosProdutos
                    ],


                },
                layout: 'lightHorizontalLines'
            },

        ]

        function Rodape(currentPage, pageCount) {
            return [
                {
                    text: currentPage + "/" + pageCount,
                    alignment: "right", // alinhamento do texto lado direito
                    fontSize: 9,
                    margin: [0, 10, 20, 0] //esquerdo, cima, direita, baixo
                }
            ]
        }

        const docDefinitios = {
            pageSize: "A4",
            pageMargins: [15, 50, 15, 40],

            header: [reportTitle],
            content: [details],
            footer: Rodape
        }

        pdfMake.createPdf(docDefinitios).download()
    }

    return (
        <div>
            <nav className="linha_pagina_final">
                <ul>
                    <li className="fwSYgp">
                        <a className="buJuCk">
                            <label>
                                <BsFillTelephoneFill className="Telefone">

                                </BsFillTelephoneFill>
                            </label>
                            +55(86) 9 8193 4337
                        </a>
                        <div> </div>
                    </li>

                    <li className="fwSYgp">
                        <a className="buJuCk">
                            <label>
                                <BsEnvelope className="Email">

                                </BsEnvelope>
                            </label>
                            email@email.com
                        </a>
                    </li>

                    <li className="fwSYgp">
                        <a className="buJuCk">
                            <label>
                                <BsFillGeoAltFill className="Cidade">

                                </BsFillGeoAltFill>
                            </label>
                            Matias Olímpio
                        </a>
                    </li>


                    <li className="fwSYgp">
                        <a className="buJuCk">

                            <button onClick={(e) => imprimir(produto)} className='btn botao_imprimir' type='button' id="button-addon2"><i className="fas fa-file-pdf"> Imprimir </i>

                            </button>

                        </a>
                    </li>

                    <li className="fwSYgp">
                        <a className="buJuCk">
                            <label>
                                <Link to='/'>
                                    <div className='botao_voltar_final' type="button">Voltar</div>
                                </Link>
                            </label>

                        </a>
                    </li>
                </ul>

            </nav>



            <Table className='Linha_Tabela_Final'>
                <tbody>

                    <tr>
                        <td className='coluna_produto_Final'>PRODUTO</td>
                        <td className='coluna_quantidade_Final'>QUANTIDADE</td>
                        <td className='coluna_valor_und_Final'>UNIDADE</td>
                        <td className='coluna_total_Final'>TOTAL</td>
                    </tr>


                    {carrinho.map((produto, posicao) => {
                        return (
                            <tr>
                                <td className="coluna_01_Final">
                                    <span>{produto.nome}</span>
                                </td>

                                <td className="coluna_02_Final">

                                    <span>{produto.quantidade}</span>

                                </td>

                                <td className="coluna_03_Final">

                                    <span >{produto.preco},00</span>

                                </td>

                                <td className='coluna_04_Final'>   {/*o preço do produto individual*/}
                                    {/*o preço do produto individual vezes a quantidade de produto =  valor total do produto individual*/}
                                    <span>{produto.preco * produto.quantidade},00</span>
                                </td>


                            </tr>
                        )
                    })}

                </tbody>
                <tfoot>
                    <tr>
                        <td>
                            <span className="total_pedido">TOTAL DO PEDIDO</span>
                            <span className="somatotapedido"> R$ {somaTotalProdutos},00</span>
                        </td>
                    </tr>
                </tfoot>
            </Table>

            <nav className="Total_Produtos_P2_Final">
                <ul>
                    <li className="bloco_total_Final">
                        <div className='bloco1'>
                            <span className="pedido_finalizado">PEDIDO FINALIZADO</span>
                        </div>
                    </li>
                </ul>

            </nav>
        </div>
    )

}

export default FinalizarPedido