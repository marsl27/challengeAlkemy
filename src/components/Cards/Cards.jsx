
import Card from "./Card";
import "./Cards.css"

export default function Cards({ data, loading,setLoading, setError, setTeam}) {
    console.log(data);
    //const [team, setTeam]=useState([])

    return (
        <div className="containerCards">
            {data.map((hero, index) => {
                return <Card id={hero.id} name={hero.name} image={hero.image.url} key={index} setLoading={setLoading} setError={setError} setTeam={setTeam} data={data} />
            })}
        </div>
    )
}