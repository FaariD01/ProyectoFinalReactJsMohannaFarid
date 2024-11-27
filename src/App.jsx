import Banner from "./components/Banner/Banner"
import './App.css'
import EjemplosContador from "./components/Banner/Ejemplos/ContadorContainer"

function App() {
  
  const saludando = () => {
    alert("Welcome to the Home");
  }


return (
  <>
    <Banner saludando={saludando} saludo={"BANNER 1"} urlImage={"https://img.freepik.com/vector-gratis/banner-contraccion-juego-futbol-degradado_23-2149819997.jpg?t=st=1732579637~exp=1732583237~hmac=0dde2a6f5ca847b7b0aefd66b1dd8fde8f952f2a8d82c0c57f23078eef81b35e&w=1380"} />
    <Banner saludando={saludando} saludo={"BANNER 2"} urlImage={"https://campestrecali.com/wp-content/uploads/2020/11/Banner-futbol.jpg"}/>
    <EjemplosContador />
  </>
  )
}

export default App

