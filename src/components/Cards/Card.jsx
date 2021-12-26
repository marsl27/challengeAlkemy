import { Link } from "react-router-dom"

export default function Card({ id, image, name }) {
    return (
        <div className="card" style={{ width: "19rem" }}>
            <div className="containerImage">
                <img className="card-img-top" src={image} alt={name} />
            </div>
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <div className="containerButtons">
                <button className="btn btn-primary" >Agregar</button>
                <Link to={`/hero/${id}`}><button className="btn btn-secondary" >Ver más</button></Link>
                </div>
            </div>
        </div>
    )
}