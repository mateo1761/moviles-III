import React from "react";
import PrimerComponente, {SegundoComponente, TercerComponente} from "./PrimerComponente";

function App() {

  let nombre = "mateo";
  let profesion = "Developer";

  let datos = {

    nombre: "mateo",
    profesion: "Developer",

  }

  let edad = () => {
    alert("Su edad es: 25");
  }

  return (
    <>
      <h1>Hola moviles III</h1>
      <PrimerComponente datos = {datos}/>
      <SegundoComponente nombre="Mateo" profesion="practicante developer"/>
      <TercerComponente nombre={nombre} profesion={profesion} edad={edad}/>
    </>
  );
   
}

export default App;
