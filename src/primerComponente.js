import React, {Component, SegundoComponente} from "react";

class PrimerComponent extends Component{
    render(){
        return(
            <h1>
                Hola desde la clase
            </h1>
        );
    }
}

//Componente de funcion
export function SegundoComponente(props){
    console.log(props);
    return(
        <h2>Hola {props.nombre} </h2>
    );
}

//componente de flecha
export let TercerComponente = () => <h3>Hola desde la flecha</h3>;

export default PrimerComponent;