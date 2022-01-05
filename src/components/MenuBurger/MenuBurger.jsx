import React from "react";
import { Link } from "react-router-dom";

import { MenuBurgerWrapper } from "./MenuBurgerWrapped.jsx";

export default function MenuBurger({ show, handleHide, isLogged, handleLogOut }) {

    return (
        <MenuBurgerWrapper show={show} className="containerMobile">
            <div className="mobileHeader">
                <div className="close" onClick={handleHide}>X</div>
                <div className="user">
                    <h3 >Hello,</h3>
                    <h3 >{sessionStorage.getItem("email")}</h3>
                </div>
                
            </div>
            <div className="mobileBody">
                <div className="userOption" >
                    <Link to="/challengeAlkemy">
                        <h5 onClick={handleHide}> My SuperTeam</h5>
                    </Link>
                    <h5 onClick={handleHide}><a href="/login" onClick={handleLogOut}>Log out</a> </h5>
                </div>
            </div>
            <div className="mobileFooter">
                <a href="https://www.linkedin.com/in/mariel-cecilia-romeo/" target="_blank" rel="noreferrer"> Mariel Cecilia Romeo </a>
            </div>
        </MenuBurgerWrapper>
    )
}

