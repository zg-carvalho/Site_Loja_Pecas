import { useContext } from "react";
import { BsFillTrashFill, BsBagCheckFill, BsPatchPlus, BsPatchMinus, BsHeart, BsFillCartFill, BsFillTelephoneFill, BsEnvelope, BsFillGeoAltFill, BsPerson, BsCurrencyDollar } from "react-icons/bs";
import CarrinhoContexto from "../Contexto/CarrinhoContexto";
import CardsContexto from "../Contexto/CardsContexto";
import { Link } from 'react-router-dom';

function Cabecalho() {
    const { PesquisaProdutos, produtosfiltrado } = useContext(CardsContexto)
    const { Apagar, Somacarrinho, carrinho, contador, somaTotalProdutos, Subcarrinho, setExibirCarrinho, exibirCarrinho, } = useContext(CarrinhoContexto)
    return (
        <div>
            <div>
                <header className="jRjNxq">
                    <div className='cZqDku'>
                        <div className='hwPKwF'>
                            <ul className="krWmkH">
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

                            <ul className="iybvMk">
                                <li className="fwSYgp">
                                    <a className="buJuCk">
                                        <label >
                                            <BsCurrencyDollar className="Dinheiro">

                                            </BsCurrencyDollar>
                                        </label>
                                        R$
                                    </a>
                                </li>

                                <li className="fwSYgp">
                                    <a className="buJuCk">
                                        <label >
                                            <BsPerson className="Pessoa">

                                            </BsPerson>
                                        </label>
                                        Minha conta
                                    </a>
                                </li>
                            </ul>

                        </div>
                    </div>

                    <div class="eYRshS">
                        <div class="goenkp">
                            <div className="iEMZQn">
                                <div className='fOdCHF'>
                                    <div className='iQODkb'>
                                        <div className='ktkVlI'>
                                            <span className='comercio'>
                                                <a>A SAMPAIO AUTO PEÇAS</a>
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <div className="jRDuVF">
                                    <div className="dwvvyQ">
                                        <form className="iQruvZ">
                                            <input placeholder="Faça sua pesquisa aqui" className="iFtmlY" onChange={(e) => PesquisaProdutos(e.target.value)} />
                                            <button class="botao">Buscar</button>
                                        </form>
                                    </div>
                                </div>

                                <div class="fOdCHF">
                                    <div className='bSWsvS'>
                                        
                                        {exibirCarrinho && (//se exibirCarrinho for verdadeiro então exiba os produtos que há no carrinho
                                            <div className='hKYmlP'>
                                                <div className="fbpIWe">
                                                    <div className="ghqLcT">
                                                        <span className="jCmrNW">Total</span>
                                                        <span className="MmPfG"> R$ {somaTotalProdutos}</span>
                                                    </div>
                                                </div>
                                                <ul className="hGRNue">

                                                    {carrinho.length > 0 &&
                                                        carrinho.map((produto, posicao) => {
                                                            return (
                                                                <li className='duLHPC'>
                                                                    <div className='jpHSQX'>
                                                                        <img className='imagem_2' src={`${produto?.Fotos[0].url}`} />
                                                                    </div>

                                                                    <div className='DYWHz'>
                                                                        <span className='cJPBH'>{produto.nome}</span>
                                                                        <span className='kXJPfk'>{produto.preco}</span>
                                                                        <span className='ntgwi'> "UND"  </span>
                                                                        <span className='bVDRHV'>{produto.quantidade}</span>
                                                                    </div>

                                                                    <div className='KGwZR'>
                                                                        <BsPatchPlus onClick={() => Somacarrinho(posicao)} className="icone_mais">

                                                                        </BsPatchPlus>

                                                                        <BsPatchMinus onClick={() => Subcarrinho(posicao)} className="icone_menos">

                                                                        </BsPatchMinus>

                                                                    </div>
                                                                </li>
                                                            )
                                                        })}

                                                </ul>

                                               <div>
                                               <Link to={{
                                                 pathname:'/pagina2',
                                                 id: produtosfiltrado.id
                                               }}>
                                                    <a className="kcWaRy">
                                                        <BsBagCheckFill className="maleta">

                                                        </BsBagCheckFill>
                                                        Checkout
                                                    </a>
                                                </Link>
                                               </div>
                                               
                                                <a className="quXRo" onClick={() => Apagar()}>
                                                    <BsFillTrashFill className="lixeira">

                                                    </BsFillTrashFill>
                                                    Apagar tudo
                                                </a>
                                            </div>
                                        )}
                                    </div>

                                    <div class="kNfVNo">
                                        <div className='bPnwZg'>

                                            <a className="bXZKvG">
                                                <BsHeart className="Favorito">

                                                </BsHeart>
                                                <span class="iooqew">Seus Favoritos</span>
                                                <div class="jKUNFF">0</div>
                                            </a>

                                        </div>

                                        <div className='jJCgMl'>
                                            <a class="bXZKvG" onClick={() => setExibirCarrinho(!exibirCarrinho)}> {/*ao clicar no icone carrinho, exibirCarrinho fica diferente do valor atual, se é verdadeiro fica falso ou vice versa*/}

                                                <BsFillCartFill onClick={() => setExibirCarrinho(!exibirCarrinho)} className="Menu_carrinho">

                                                </BsFillCartFill>
                                                <span class="iooqew">Seu carrinho</span>
                                                <div class="jKUNFF">{contador}</div>
                                            </a>
                                        </div>
                                        <div className='Trsbsr'>
                                            <a className='bXZKvG'></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
            </div>
        </div>

    )

} export default Cabecalho;
