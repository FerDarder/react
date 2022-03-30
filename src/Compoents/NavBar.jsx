import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


export default function NavBar(){
    return(
        <>
            <div className="container-fluid row bg-dark " >
                <h1 className="bg-dark text-white">Prode oficial</h1>
                    <ul className="nav justify-content-center flex-row flex-md-row">
                        <li className="d-inline-block"><a className="navbar-brand text-white " href="#">
                            Inicio
                            </a>
                        </li>
                        <li className="d-inline-block"><a className="navbar-brand text-white " href="#">
                            Mis pronosticos
                            </a>
                        </li>
                        <li className="d-inline-block"><a className="navbar-brand text-white " href="#">
                            Torneo de amigos
                            </a>
                        </li>
                        <li className="d-inline-block"><a className="navbar-brand text-white " href="#">
                            Mi candidato
                            </a>
                        </li>
                        <li className="d-inline-block"><a className="navbar-brand text-white " href="#">
                            Grupos
                            </a>
                        </li>
                        <li className="d-inline-block"><a className="navbar-brand text-white " href="#">
                            Fixture
                            </a>
                        </li>
                    </ul>
                </div>
        </>
        );
}
