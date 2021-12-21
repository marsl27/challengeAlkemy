
export default function Card({ image, name }) {
    return (
        <div className="card" style={{width: "19rem"}}>
            <img className="card-img-top" src={image} alt={name} />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <button className="btn btn-primary" >Agregar</button>
                <button className="btn btn-secondary" >Ver más</button>
            </div>
        </div>
    )
}