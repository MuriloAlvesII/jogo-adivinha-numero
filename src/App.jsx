import './styles/index.css'
import IniciaJogo from './componentes/iniciajogo';

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
        <p>Direitos reservados</p>
      </footer>
    </div>
  );
}



export default App;
