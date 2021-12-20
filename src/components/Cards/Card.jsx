
export default function Card({ image, name }) {
    return (
        <div class="card" style="width: 18rem;">
            <img className="card-img-top" src={image} alt="Hero image" />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <button className="btn btn-primary" >Agregar</button>
            </div>
        </div>
    )
}