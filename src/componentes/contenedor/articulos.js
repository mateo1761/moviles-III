import React from "react";
import img3 from "./../../img/foto3.jpg";
export default function Articulos({Articulos}){
    console.log(Articulos);
    return(
        <div className="w3-third w3-container w3-margin-bottom">
      <img src={Articulos.img} alt="Norway" style={{width:"100%"}} className="w3-hover-opacity"/>
      <div className="w3-container w3-white">
        <p><b>{Articulos.titulo}</b></p>
        <p>{Articulos.parrafo}</p>
      </div>
    </div>
    );
}