import { Link } from "react-router-dom"
import "./Header.css"
import icon from "./iconoEscudo.png"

export default function Header() {
    return (
        <div className="header">
            
            <Link to="/"className="containerLogo">
                <img src={icon} />
                <h1>SuperTeam</h1>
            </Link>
            <button className="btn btn-outline-primary"> <Link to="/login">Login</Link></button>
        </div>
    )
}