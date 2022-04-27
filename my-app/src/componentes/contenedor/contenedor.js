import React from "react";
import Articulos from "./articulos";
import {datosArticulos} from "./info_articulos"

export default function Contenedor() {
    //console.log(datosArticulos)
    return(
        <div className="w3-row-padding">
            {
                datosArticulos.map((art)=>{
                    return <Articulos key={art.id} Articulos={art}/>
                })
            }
        </div>
    );
}