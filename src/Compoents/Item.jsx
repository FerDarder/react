import React from "react";
import Card from 'react-bootstrap/Card'
import ItemCount from "./ItemCount";


export default function Item({id, nombre, precio, imagen}){
    const onAdd =(cant)=>{
        if (cant>0) alert('agregaste ' + cant + ' productos al carro')
    }
    return(
        <>
            <Card key={id} style={{ width: '18rem' }}>
                <Card.Img variant="top" src={imagen} />
                <Card.Body>
                    <Card.Title>{nombre}</Card.Title>
                    <Card.Text>
                        ${precio}
                    </Card.Text>
                    <ItemCount onAdd = {onAdd} stock = {5} initial = {1} />
                </Card.Body>
            </Card>
        </>
    );
}
