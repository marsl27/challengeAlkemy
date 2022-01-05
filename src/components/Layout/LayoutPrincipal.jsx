import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import { useState } from "react";

export default function LayoutPrincipal(props) {
    const [showBurger, setShowBurger] = useState(false)

    return (
        <div>
            <Header isLogged = {props.isLogged} showBurger={showBurger} setShowBurger={setShowBurger}/>
            <main >
                {props.children}
            </main>
            <Footer/>
        </div>
    )
}