import React from "react";
import PrimerComponent, {SegundoComponente, TercerComponente} from "./primerComponent";

function App() {
  return (
    <>
      <h1>Hola moviles III</h1>
      <PrimerComponent />
      <SegundoComponente nombre="Mateo"/>
      <TercerComponente/>
    </>
  );
   
}

export default App;
