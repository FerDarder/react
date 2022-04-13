import React, { useEffect, useState } from "react";
import ItemCount from "../ItemCount";
import Main from "../Main";
import CustomFetch from '../Utils/CustomFetch'
import {productos} from '../Utils/productos'
import ItemList from "./ItemList";

export default function ItemListContainer(){

    const [items, setItems] = useState([]);

    useEffect(()=>{
        // const arreglo = new Promise ((resolve, reject) =>{
        //     setTimeout(()=>{
        //         resolve(productos);
        //         reject('Error');
        //     }, 3000)
        // })
        // arreglo
        // .then(resultado => setItems(resultado))
        // // .catch(error => console.log('Error'))
        CustomFetch(3000, productos)
        .then(resultado => setItems(resultado))
        .catch(error => console.log(error))
    },)

    return(
        <>
            <ItemList productos = {items}/>
        </>
    )
}