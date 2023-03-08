import React, { } from 'react'
import { CabecalhoContextoProvider } from './CabecalhoContexto'
import { CardsContextoProvider } from './CardsContexto';
import { CarrinhoContextoProvider } from './CarrinhoContexto';

const ContextoGlobal = ({ children }) => {

    return (
       <CarrinhoContextoProvider>
        <CabecalhoContextoProvider>
            <CardsContextoProvider>
                {children}
            </CardsContextoProvider>
        </CabecalhoContextoProvider>
        </CarrinhoContextoProvider>


    )
}

export default ContextoGlobal;
