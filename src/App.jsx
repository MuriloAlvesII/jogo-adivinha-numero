import './styles/index.css'
import IniciaJogo from './componentes/iniciajogo';
import Rodape from './componentes/Rodape';

function App() { 

  return (
      <div className='pagina'>
      <header>
        <h1>Jogo da Adivinhação</h1>
      </header>

      <main>
          <IniciaJogo />
      </main>

      <footer>
          <Rodape />
      </footer>
    </div>
  );
}



export default App;
