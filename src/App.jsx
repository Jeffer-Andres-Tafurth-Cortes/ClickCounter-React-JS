import './App.css';
import contadorLogo from './imagenes/Contador-icon.png';
import Boton from './componentes/boton';
import Contador from './componentes/contador';
import { useState } from 'react';

function App() {

  const [ numClics, setNumClics ] = useState(0); 

  const manejarClic = () => {
    setNumClics(numClics + 1);
  }

  const reiniciarContador = () => {
    setNumClics(0);
  }

  return (
    <div className='App'>
      <div className='contador-logo-contenedor'>
        <img className='contador-logo' src={contadorLogo} alt='Logo del contador'/>
      </div>
      <div className='contenedor-principal'>
        <Contador 
          numClics={ numClics }
        />
        <Boton
          texto='Clic'
          esBotonDeClic={ true }
          manejarClic={ manejarClic }
        />
        <Boton 
          texto='Reiniciar'
          esBotonDeClic={ false }
          manejarClic={ reiniciarContador }
        />
      </div>
    </div>
  );
}

export default App;
