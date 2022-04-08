import { useState } from "react";
import Button from "react-bootstrap/Button"

export default function ItemCount({onAdd, stock, initial}){

    const [cant, setCant] = useState(initial);
    
    function agregar(){
        if(cant<stock)
            setCant(cant + 1);
    }
    function quitar(){
        if(cant>initial)
            setCant(cant - 1);
    }
    return(
        <>
                        <div className="d-flex justify-content-center">
                <Button variant="dark" onClick={()=> agregar()}>+</Button>
                {cant}
                <Button variant="dark" onClick={()=> quitar()}>-</Button>
                <br />
                <br />
                
            </div>
            <br />
            
            <div className="d-flex justify-content-center">
                <Button variant="dark" onClick={()=> onAdd(cant)}>Comprar</Button>
            </div>
        </>
    );
}