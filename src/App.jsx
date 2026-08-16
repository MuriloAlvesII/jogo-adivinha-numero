import Escolha from './Escolha';
import './styles/index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

function App() { 
 <div className='pagina'>
      <header>
        <h1 className="titulo">Jogo da Adivinhação</h1>
      </header>
</div>

return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Home />}/>
    <Route path='/Escolha' element={<Escolha />}/>
   </Routes>
   </BrowserRouter>

    );
}


function Home() {
  return (
      <div className='pagina'>
      <header>
        <h1>Jogo da Adivinhação</h1>
      </header>

      <main>
        <Link to="/Escolha">
          <button>Jogar</button>
        </Link>
      </main>

      <footer>
        <p>Direitos reservados</p>
      </footer>
    </div>
  );
}



export default App;
