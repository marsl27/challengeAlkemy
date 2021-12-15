import { Link } from "react-router-dom"
import "./Header.css"

export default function Header(){
    return(
        <div className="header">Header <Link to="/login">Login</Link></div>
    )
}