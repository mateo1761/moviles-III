import React from "react";
import img3 from "./../../img/foto3.jpg";
export default function Articulos(){
    
    return(
        <div className="w3-third w3-container w3-margin-bottom">
      <img src={img3} alt="Norway" style={{width:"100%"}} className="w3-hover-opacity"/>
      <div className="w3-container w3-white">
        <p><b>Lorem Ipsum</b></p>
        <p>Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.</p>
      </div>
    </div>
    );
}