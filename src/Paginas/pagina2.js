import React, { useContext } from 'react'
import { Table } from 'reactstrap';
import { BsFileMinus, BsFilePlus, BsTrash, BsFillTelephoneFill, BsEnvelope, BsFillGeoAltFill } from "react-icons/bs";
import CarrinhoContexto from "../Contexto/CarrinhoContexto";
import axios from 'axios';
import { Link } from 'react-router-dom'


const Pagina2 = () => {

    const { Somacarrinho, carrinho, somaTotalProdutos, Subcarrinho, ApagarProduto } = useContext(CarrinhoContexto)
  
    // variável que indica o caminho para onde enviaremos as novas informações de carrinho
    const API = `http://localhost:3001/pedido/`

 function Pedido(){ //funcão que faz o envio das novas informaçãos de carrinho para api
    
    console.log(carrinho) 
    
    axios.post(API, {//conversão do array carrinho para string
        itens: JSON.stringify(carrinho)
     
    })    
}
    

  

    return (
        <div>
            <nav className="linha_p2">
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
                </ul>

            </nav>



            <Table className='Linha_Tabela'>
                <tbody>

                    <tr>
                        <td className='coluna_produto'>PRODUTO</td>
                        <td></td>
                        <td className='coluna_quantidade'>QUANTIDADE</td>
                        <td className='coluna_valor_und'>VALOR UNITÁRIO</td>
                        <td className='coluna_total'>TOTAL</td>
                        <td className='coluna_remover'>REMOVER</td>
                    </tr>

                    {carrinho.map((produto, posicao) => {
                        return (
                            <tr>
                                <td className="coluna_01">
                                    <img className='coluna_imagem' src={`${produto?.Fotos[0].url}`} />
                                </td>

                                <td className="coluna_02">
                                    <td>
                                        <span className='cJPBH'>{produto.nome}</span>
                                    </td>
                                </td>

                                <td className="coluna_alterar_preco">
                                    <div className='blocoicones'>
                                        <BsFileMinus onClick={() => Subcarrinho(posicao)} className="icone_menos_col"></BsFileMinus>

                                        <span className='quant_col'>{produto.quantidade}</span>

                                        <BsFilePlus onClick={() => Somacarrinho(posicao)} className="icone_mais_col"> </BsFilePlus>
                                    </div>
                                </td>

                                <td className='coluna_03'>   {/*o preço do produto individual*/}
                                    <span className='bVDRHV'>{produto.preco},00</span>
                                </td>

                                <td className='coluna_04'>
                                    {/*o preço do produto individual vezes a quantidade de produto =  valor total do produto individual*/}
                                    <span className='bVDRHV'>{produto.preco * produto.quantidade},00</span>
                                </td>

                                <td className='coluna_05'>  {/*apagar e subtrair produto individual do array Total*/}
                                    <BsTrash onClick={() => { ApagarProduto(produto, posicao); Subcarrinho(posicao) }} variant="contained" type='submit' color="secondary">
                                        Apagar
                                    </BsTrash>
                                </td>

                            </tr>
                        )
                    })}

                </tbody>
            </Table>

            <nav className="Total_Produtos_P2">
                <ul>
                    <li className="bloco_total">
                        <a className="buJuCk">
                            <div className="ghqLcT">
                                <span className="jCmrNW">TOTAL DO PEDIDO</span>
                                <span className="MmPfG"> R$ {somaTotalProdutos},00</span>
                            </div>
                        </a>
                    </li>
                </ul>

            </nav>

            <Link to='/finalizaPedido'>
            <div className="Finalizar" onClick={Pedido}>
                <div className='voltar'>Finalizar Compra</div>
            </div>
            </Link>

        </div>
    );

}

export default Pagina2;

