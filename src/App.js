import logo from './logo.svg';
import './App.css';
import React from 'react';
import NavBar from './Compoents/NavBar';
import ItemListContainer from './Compoents/ItemList/ItemListContainer';
import Ejercicio from './Compoents/Ejercicio';
import ItemDetailContainer from './Compoents/ItemDetail/ItemDetailContainer';

export default function App(){

  return (
    <>
      <NavBar/>
      {/* <ItemListContainer/> */}
      <ItemDetailContainer/>
    </>
    );
}


