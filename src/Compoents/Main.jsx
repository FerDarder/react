import React from "react";


export default function Main( {arreglo} ){
    return(
        <>
            <h2>Productos</h2>
            <ul>
                {arreglo.map((item) => <li>{item}</li>)}
            </ul>
        </>
    );
}