import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import CarWidget from './CarWidget';

export default function NavBar(){
    return(
        <>
            <div className="container-fluid row bg-dark " >
                <h1 className="bg-dark text-white">Gara-Shop</h1>
                    <ul className="nav justify-content-center flex-row flex-md-row">
                        <li className="d-inline-block">
                            <a className="navbar-brand text-white " href="#">
                                Inicio
                            </a>
                        </li>
                        <li className="d-inline-block">
                            <a className="navbar-brand text-white " href="#">
                                Tecnologías
                            </a>
                        </li>
                        <li className="d-inline-block">
                            <a className="navbar-brand text-white " href="#">
                                Muebles
                            </a>
                        </li>
                        <li className="d-inline-block">
                            <a className="navbar-brand text-white " href="#">
                                Ropa
                            </a>
                        </li>
                        <li className="d-inline-block">
                            <a className="navbar-brand text-white " href="#">
                                Comida
                            </a>
                        </li>
                        <li className="d-inline-block">
                            <a className="navbar-brand text-white " href="#">
                                Contacto
                            </a>
                        </li>
                        <li className="d-inline-block">
                            <a className="navbar-brand text-white " href="#">
                                <CarWidget/>
                            </a>
                        </li>
                    </ul>
                </div>
        </>
        );
}
