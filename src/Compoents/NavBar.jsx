import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


export default function NavBar(){
    return(
        <>
            <div class="container-fluid row bg-dark " >
                <h1 class="bg-dark text-white">Prode oficial</h1>
                    <ul class="nav justify-content-center flex-row flex-md-row">
                        <li class="d-inline-block"><a class="navbar-brand text-white " href="#">
                            Inicio
                            </a>
                        </li>
                        <li class="d-inline-block"><a class="navbar-brand text-white " href="#">
                            Mis pronosticos
                            </a>
                        </li>
                        <li class="d-inline-block"><a class="navbar-brand text-white " href="#">
                            Torneo de amigos
                            </a>
                        </li>
                        <li class="d-inline-block"><a class="navbar-brand text-white " href="#">
                            Mi candidato
                            </a>
                        </li>
                        <li class="d-inline-block"><a class="navbar-brand text-white " href="#">
                            Grupos
                            </a>
                        </li>
                        <li class="d-inline-block"><a class="navbar-brand text-white " href="#">
                            Fixture
                            </a>
                        </li>
                    </ul>
                </div>
        </>
        );
}
