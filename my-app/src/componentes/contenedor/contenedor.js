import React, {useState, useEffect} from "react";
import Articulos from "./articulos";
import "./estilos-contenedor.css"

export default function Contenedor() {
    
    //console.log(datosArticulos)

    const[post, setNoticias] = useState([]);
    //funcion asincrona para obtener los datos
    const obtenerDatos= async ()=>{
        let url = 'https://newsapi.org/v2/top-headlines?country=co&apiKey=bab9a417ee04471aa0fc006a9d94750b'
        const respuesta =await fetch(url);
        const datos = await respuesta.json();
        console.log(datos.articles);
        return setNoticias(datos.articles);
    }

    //variables paginacion
    const [startPost, setStartPost] = useState();
    const [endPost, setEndPost] = useState();
    const [pageNumber, setPageNumber] = useState(1);
    const limite = 6;

    //variables para los botones
    const [prevBoton, setPrevBoton] = useState(true);
    const [nextBoton, setNextBoton] = useState(false);

    //funcion para adelantar paginas
    const Next = () =>{
        if(pageNumber === (Math.floor((obtenerDatos.length + limite-1)/limite))){
            setNextBoton(true);
        }
        else{
            setPageNumber(pageNumber + 1)
            setPrevBoton(false);
        }
    }

    const Prev = () =>{
        if(pageNumber === 1){
            setPrevBoton(true);
        }
        else{
            setNextBoton(false);
            setPageNumber(pageNumber - 1);
        }
    }

    //Realizar consultas
    useEffect(()=>{
        obtenerDatos();

        setStartPost((pageNumber - 1)* limite);
        setEndPost (pageNumber * limite);
        console.log(startPost);
        console.log(endPost);

    },[pageNumber, startPost, endPost])
    

    return(
        <>
            <div className="w3-row-padding">
                {
                    post.slice(startPost, endPost).map((art, index )=>{
                        return <Articulos 
                        key={index }
                        titulo={art.title}
                        fecha={art.publishedAT}
                        descripcion={art.description}
                        imagen={art.urlToImage}/>
                    })
                }
            </div>
            <div className="paginacion">
                    <button disabled={prevBoton} onClick={Prev} className="atras">Cargar Menos</button>
                    <span className="numero-paginas"> {pageNumber} </span>
                    <button disabled={nextBoton} onClick={Next} className="adelante">Cargar Más</button>
            </div>
        </>
    );
}