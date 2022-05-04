import React from "react";
export default function Articulos({titulo, fecha, descripcion, imagen}) {
    console.log(titulo, fecha, descripcion, imagen);
    return(
        <div className="w3-third w3-container w3-margin-bottom">
            <img src={imagen} alt="Norway" style={{width:"300px" , height:"200px"}} className="w3-hover-opacity"/>
            <div className="w3-container w3-white">
                <h2 className="titulo-articulo">{titulo.slice(0,150)}</h2>
                <p className="titulo-articulo"><b>{ fecha }</b></p>
                <p className="titulo-articulo">{descripcion.slice(0,100)+"..."}</p>
            </div>
        </div>
    );
}