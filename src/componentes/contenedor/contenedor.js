import React from "react";
import Articulos from "./articulos";
import {datosArticulos} from "./info_articulos"

export default function Contenedor(){
    return(
        <div class="w3-row-padding">
            {
                datosArticulos.map((art) => {
                    return <Articulos key={art.id} Articulos={art}/>
                })
            }
        </div>
    );
}