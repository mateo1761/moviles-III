import React from "react";
import Articulos from "./articulos";
import datosArticulos from "./info_articulos"

export default function Contenedor({datosArticulos}){
    return(
        <div class="w3-row-padding">
            <Articulos/>
            <Articulos/>
            <Articulos/>
        </div>
    );
}