import React from 'react'
import './styles/index.css'
import { useNavigate } from 'react-router-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';


function Escolha() {
  return (

    <div>
  <div className='ConteudoEscolha'>
    <header>
      <h1>Escolha uma das dificuldades</h1>
    </header>
    </div>

  


  <div className='Escolhas'>
    <div>
      <h2>Escolha a dificuldade</h2>
      <Link to="/jogo/facil">
        <button>Fácil</button>
      </Link>
      <Link to="/jogo/medio">
        <button>Médio</button>
      </Link>
      <Link to="/jogo/dificil">
        <button>Difícil</button>
      </Link>
    </div>

  </div>

  {/* return (
    <button onClick={() => navigate('/App')}>
      Voltar
    </button>
  ); */}
    </div>
  )

function Conteudo(){
   return(
    <div className='pagina'>
      <header>
        <h1>Jogo da Adivinhação</h1>
      </header>
    </div>

   );
}

}

export default Escolha