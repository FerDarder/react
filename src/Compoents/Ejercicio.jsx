import React from "react";
import { useEffect } from "react";

export default function Ejercicio(){
    useEffect(() =>{
        const pago = new Promise ((resolve, reject) => {
            setTimeout(()=>{
                //resolve ('50');
                reject(null);
            }, 3000)
        }) 

        console.log(pago);

        pago
        .then((res)=>{console.log('Gracias por pagar ' + res)})
        .catch((err)=>console.log(err));
        //.finally()

        console.log(pago);
    });
    return(
        <>


        </>
    );
}