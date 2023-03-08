import { useState } from 'react';
import './App.css';
import Cabecalho from './Componentes/Cabecalho';
import Cards from './Componentes/Cards';



function Home() {

  return (

    <div>
      
      <div>
       
          <Cabecalho />
          <Cards />
      
      </div>
    </div >

  );
}

export default Home;
