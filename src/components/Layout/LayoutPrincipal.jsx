import Header from "./Header/Header";
import Footer from "./Footer/Footer";

export default function LayoutPrincipal(props) {
    return (
        <div>
            <Header isLogged = {props.isLogged}/>
            <main >
                {props.children}
            </main>
            <Footer />
        </div>
    )
}