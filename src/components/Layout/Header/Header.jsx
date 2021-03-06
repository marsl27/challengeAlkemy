import React, { useState } from 'react';
import { Link } from "react-router-dom"
import "./Header.css"
import icon from "./iconoEscudo.png"
import MenuButton from "../../MenuBurger/MenuButton"
import MenuBurger from '../../MenuBurger/MenuBurger';

export default function Header({ isLogged, showBurger, setShowBurger }) {
    const [userMenu, setUserMenu] = useState(false);
    console.log(isLogged);

    function handleShowNav() {
        setUserMenu(true);
    }

    function handleCloseNav() {
        setUserMenu(false);
    }

    function handleLogOut(){
        sessionStorage.removeItem("token")
        sessionStorage.removeItem("email")
        sessionStorage.setItem("log", "false")
    }
//<button className={isLogged ? "hide" : "btn btn-outline-primary loginButton log"}> <Link to="/login">Login</Link></button>
      
function handleShow() {
    setShowBurger(true)
}

function handleHide() {
    setShowBurger(false)
}

    return (
    <header>
        <div className="header" onMouseLeave={handleCloseNav}>
            <Link to="/challengeAlkemy" className="containerLogo">
                <img src={icon} alt="logo"/>
                <h1>SuperTeam</h1>
            </Link>
             <div className="userGreat" onMouseMove={handleShowNav} >
                <div className={!isLogged ? "hide" : "containerUser"} >
                    <div className="user">
                        <h3 >Hello,</h3>
                        <h3 >{sessionStorage.getItem("email")}</h3>
                    </div>
                    <span className="arrow"></span>
                </div>
            </div>
            <div className={userMenu ? "headerOptions userOptions" : "hide"} /* className={Styles.closeNav} */ /* */>
                <Link to="/challengeAlkemy">
                    <h5> My SuperTeam</h5>
                </Link>
                
                <h5><a href="/login" onClick={handleLogOut}>Log out</a> </h5>
            </div>
            <MenuButton show={showBurger} handleShow={handleShow} />
        </div>
        <MenuBurger show={showBurger} handleHide={handleHide} isLogged={isLogged} handleLogOut={handleLogOut} />
    </header>
    )
}