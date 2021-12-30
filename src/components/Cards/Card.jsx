import { Link } from "react-router-dom"
import heroApi from "../../api/HeroApi";

export default function Card({ id, image, name, setData, setLoading, setError, data, setTeam }) {
    
    function handleClick(){
        console.log(id);
        heroApi.getHeroById(id)
        .then(response=>{
            console.log(response);
            if(response.response ==="error"){
                setError(response.error)
                setTeam([]);
            }else{
                 setTeam([...data,response]);
                 setError("")
            }
            
            setLoading(false);
            
        })
        .catch(error=>{
            setError(error.message);
            setLoading(false);
        })
        console.log(data);
    }
    console.log(data);
    return (
        <div className="card" style={{ width: "19rem" }}>
            <div className="containerImage">
                <img className="card-img-top" src={image} alt={name} />
            </div>
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <div className="containerButtons">
                <button className="btn btn-primary" onClick={handleClick}>Add</button>
                <Link to={`/hero/${id}`}><button className="btn btn-secondary" >More</button></Link>
                </div>
            </div>
        </div>
    )
}