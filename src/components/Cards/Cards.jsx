import { useState } from "react";
import heroApi from "../../api/HeroApi";
import Card from "./Card";
import "./Cards.css"

export default function Cards({ data, loading,setLoading, setError, setTeam, team, isTeam}) {

    console.log(data);
    //const [team, setTeam]=useState([])
    console.log(team);
    return (
        <div className="containerCards">
           
            {data.map((hero, index) => {
                return <Card id={hero.id} name={hero.name} image={hero.image.url} powerstats={isTeam ? hero.powerstats : null} key={index} setLoading={setLoading} setError={setError} setTeam={setTeam} data={data} team={team} isTeam={isTeam}/>
            })}
        </div>
    )
}