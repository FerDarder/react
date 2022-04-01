import React from "react";
import Main from "./Main";


export default function MainContainer(){

    let array = ["Celular", "Mesa", "Heladera", "Sillon", "Silla"];
    return(
        <>
            <Main arreglo={array} />
        </>
    );
}