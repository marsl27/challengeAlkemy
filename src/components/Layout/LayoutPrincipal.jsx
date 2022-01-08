import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import { useState } from "react";
import "./LayoutPrincipal.css"

export default function LayoutPrincipal(props) {
    const [showBurger, setShowBurger] = useState(false)

    return (
        <div className={showBurger === true ? "opacity" : null}>
            <Header isLogged = {props.isLogged} showBurger={showBurger} setShowBurger={setShowBurger}/>
            <main >
                {props.children}
            </main>
            <Footer/>
        </div>
    )
}