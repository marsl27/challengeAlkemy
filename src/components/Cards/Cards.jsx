import Card from "./Card";
import "./Cards.css"

export default function Cards({removeHero, setRemoveHero, data, setLoading, setError, isTeam}) {
    let equipo = localStorage.getItem("team")
    let arrayEquipo = equipo === null ? [] : JSON.parse(equipo)
    
    return (
        <div className="containerCards">
           
            {(isTeam ? arrayEquipo : data).map((hero, index) => {
                return <Card removeHero={removeHero} setRemoveHero = {setRemoveHero} id={hero.id} name={hero.name} image={hero.image.url} powerstats={isTeam ? hero.powerstats : null} key={index} setLoading={setLoading} setError={setError} data={data} isTeam={isTeam}/>
            })}
        </div>
    )
}