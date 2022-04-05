import React from "react";
import ItemCount from "./ItemCount";
import Main from "./Main";


export default function ItemListContainer(){

    let array = ["Celular", "Mesa", "Heladera", "Sillon", "Silla"];

    function onAdd(cant){
        if (cant>0) 
            alert("Agregaste " + cant + " items al carrito");
    }

    return(
        <>
            <Main arreglo={array} />
            <ItemCount onAdd={onAdd} stock={5} initial={1} />
        </>
    );
}