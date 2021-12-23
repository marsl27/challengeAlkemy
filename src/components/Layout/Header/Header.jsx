import React, { useState } from 'react';
import { Link } from "react-router-dom"
import "./Header.css"
import icon from "./iconoEscudo.png"

export default function Header({ isLogged }) {
    const [userMenu, setUserMenu] = useState(false);
    console.log(isLogged);

    function handleShowNav() {
        setUserMenu(true);
    }

    function handleCloseNav() {
        setUserMenu(false);
    }

    function handleLogOut(){
        localStorage.removeItem("token")
        localStorage.removeItem("email")
        localStorage.setItem("log", "false")
    }
//<button className={isLogged ? "hide" : "btn btn-outline-primary loginButton log"}> <Link to="/login">Login</Link></button>
           
    return (
        <div className="header" onMouseLeave={handleCloseNav}>
            <Link to="/challengeAlkemy" className="containerLogo">
                <img src={icon} alt="logo"/>
                <h1>SuperTeam</h1>
            </Link>
             <div onMouseMove={handleShowNav} >
                <div className={!isLogged ? "hide" : "containerUser"} >
                    <div className="user">
                        <h3 >Hola,</h3>
                        <h3 >{localStorage.getItem("email")}</h3>
                    </div>
                    <span className="arrow"></span>
                </div>
            </div>
            <div className={userMenu ? "headerOptions userOptions" : "hide"} /* className={Styles.closeNav} */ /* */>
                <Link to="/">
                    <h5> Mi equipo</h5>
                </Link>
                
                <h5><a href="/login" onClick={handleLogOut}>Cerrar sesión</a> </h5>
            </div>
        </div>
    )
}