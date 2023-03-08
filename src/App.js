import { useState } from 'react';
import './App.css';
import ContextoGlobal from './Contexto/ContextoGlobal'
import Rotas from './rotas'

function App() {

  return (

    <div>

      <div>
        <ContextoGlobal>
          <Rotas />
        </ContextoGlobal>
      </div>
    </div >

  );
}

export default App;

