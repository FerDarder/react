import React, { useEffect, useState } from "react";
import CustomFetch from "../Utils/CustomFetch";
import {producto} from "../Utils/productos";
import ItemDetail from "./ItemDetail";


const ItemDetailContainer = () =>{

    const [prod, setProd] = useState({});

    useEffect (() =>{
        CustomFetch(1000, producto)
            .then(resultado => setProd(resultado))
            .catch(error => console.log(error))
    }, [])

    return(
        <>
            <ItemDetail prod={prod} />
        </>
    )
}

export default ItemDetailContainer;