import React from 'react'
import { Route, BrowserRouter, Switch } from 'react-router-dom'

import Pagina1 from './Paginas/pagina1'
import Pagina2 from './Paginas/pagina2'
import FinalizarPedido from './Paginas/finalizarPedido'
import Home from './home'
import PDFPrinter from "pdfmake"

const Rotas = () => {

  return (

    <BrowserRouter>
     <Switch>
      <Route component={Home} path='/' exact />
      <Route component={Pagina1} path='/pagina1' />
      <Route component={Pagina2} path='/pagina2' />
      <Route component={FinalizarPedido} path='/finalizaPedido' />
      </Switch>
    </BrowserRouter>

  )
}
export default Rotas
