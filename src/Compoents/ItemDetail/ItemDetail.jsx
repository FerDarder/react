import React from "react";
import ItemCount from '../ItemCount';


const ItemDetail = ({prod}) =>{

    return(
        <>
            <div className="productoDetalle">
                <img src={prod.imagen} alt={prod.nombre} />
                <div>
                    <h2>{prod.nombre}</h2>
                    <h3>${prod.precio}</h3>
                    <h4>Stock: {prod.stock}</h4>
                </div>
            </div>
        </>
    )
}

export default ItemDetail;