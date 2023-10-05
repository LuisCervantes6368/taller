import './App.css';
import { button } from './components/button';
import { useState } from "react";

function App({ texto }) {
  const [estado, setEstado] = useState("Verdadero")
  return <>
    <div>
      {estado}
      <div>
        <button onClick={() => {
          if (estado == "Verdadero") {
            setEstado("Falso")
          } else {
            setEstado("Verdadero")
          }

        }}>
          cambiar estado
        </button>
      </div>
      <button texto={"texto"}></button>
      <button texto={"carrito"}></button>
      <button texto={"compras"}></button>
      <button texto={"ayuda"}></button>

    </div>
  </>;
}

export default App;
