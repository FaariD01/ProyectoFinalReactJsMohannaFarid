import  "./EjemplosContador.css"
import { useState } from "react";
import Contador from "./Contador"
//Componente contenedor
const ContadorContainer = () => {
    //hook de estado: estado o variable de estado
    const [ contador, setContador ] = useState(1);

    
    const aumentarContador = () => {
      setContador( contador + 1 );
      
    }

    return (
    <Contador aumentarContador={aumentarContador}  contador= {contador}/>
  )
}

export default ContadorContainer
