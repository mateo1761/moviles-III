import React, {Component} from "react";

class PrimerComponente extends Component{
    render(){
        console.log(this.props);
        let datos = this.props.datos;
        return(
            <h1>
                Hola {datos.nombre}
                //profesion: {this.props.datos.profesion}
                profesion: {datos.profesion}
            </h1>
        );
    }
}

//Componente de funcion
export function SegundoComponente({nombre , profesion, edad}){
    console.log(props);
    return(

        <>
        <h2>Hola {props.nombre} mi profesion {props.profesion}</h2>
        <h2>Hola {nombre} mi profesion {profesion}</h2>

        <button onClick={() => edad}>Ver mi edad</button>
        </>

    );
}

//componente de flecha
export let TercerComponente = (props) => {
    console.log(props);

    return(
        <h3>Hola {props.nombre} mi profesion {props.profesion}</h3>
    );
}

export default PrimerComponente;