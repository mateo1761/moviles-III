import React from "react";
import Contacto from "./componentes/contacto/contacto";
import Contenedor from "./componentes/contenedor/contenedor";
import Cabecera from "./componentes/header/cabecera";
import Menu from "./componentes/menu/menu"
import Pie from "./componentes/pie/pie";


function App() {
  return (
    <>
    <Menu/>
    <div className="w3-main" style={{marginLeft:"300px"}}>
    <Cabecera/>
    <Contenedor/>
    <Contacto/>
    <Pie/>
    </div>
   
    </>
  );
}

export default App;
