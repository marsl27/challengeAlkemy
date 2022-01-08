import React, {useState} from 'react';
import "./Home.css"
import SearchBlockForm from '../SearchBlock/SearchBlockForm';
import Spinner from "../Spinner/Spinner";
import Cards from '../Cards/Cards';

export default function Home({ setData, setLoading, error, setError, loading }) {
   
    let isTeam = true //Es para mostrar las powerstats en la card si es el equipo
    const [removeHero, setRemoveHero] = useState(false)

    let equipo = localStorage.getItem("team")
    let arrayEquipo= equipo===null ? [] : JSON.parse(equipo)

    let totalPowerstats = {
        intelligence: 0,
        combat: 0,
        durability: 0,
        power: 0,
        speed: 0,
        strength: 0,
    }

    let heightAndWeight ={
        height: 0,
        weight: 0
    }


    for (let i = 0; i < arrayEquipo.length; i++) {
        totalPowerstats.intelligence += parseInt(arrayEquipo[i].powerstats.intelligence);
        totalPowerstats.combat += parseInt(arrayEquipo[i].powerstats.combat);
        totalPowerstats.durability += parseInt(arrayEquipo[i].powerstats.durability);
        totalPowerstats.power += parseInt(arrayEquipo[i].powerstats.power);
        totalPowerstats.speed += parseInt(arrayEquipo[i].powerstats.speed);
        totalPowerstats.strength += parseInt(arrayEquipo[i].powerstats.strength);
    }
    function average(){
        let cont = 0;
        for (let i = 0; i < arrayEquipo.length; i++) {
            cont++
            heightAndWeight.height += parseInt(arrayEquipo[i].appearance.height[1].split(" ")[0]);
            heightAndWeight.weight += parseInt(arrayEquipo[i].appearance.weight[1].split(" ")[0]); 
        }
        heightAndWeight.height = `${parseFloat(heightAndWeight.height/cont).toFixed(2)} cm`
        heightAndWeight.weight = `${parseFloat(heightAndWeight.weight/cont).toFixed(2)} kg`
    }
    
    average()
    
    let totalPowerstatsKeys = Object.keys(totalPowerstats).sort((a, b) => totalPowerstats[b] - totalPowerstats[a])
    let heightAndWeightKeys = Object.keys(heightAndWeight)

    return (
        <>
            <SearchBlockForm setData={setData} setLoading={setLoading} setError={setError} />

            {loading ? (
                <Spinner />
            ) : (
                <div >
                    <Cards removeHero ={removeHero} setRemoveHero = {setRemoveHero} data={arrayEquipo} loading={loading} setLoading={setLoading} error={error} setError={setError} isTeam={isTeam} />
                    <div className="containerInfo">
                        <div className={`${arrayEquipo.length === 0 ? "hide" : "card"}`} id="containerCardInfo">
                            <div className="card-header title">
                                Powerstats´ total score
                            </div>
                            <div className="card-body">
                                <blockquote className="blockquote mb-0 containerTotalPowerstats">
                                    {totalPowerstatsKeys.map((power) => {
                                        if (Object.hasOwnProperty.call(totalPowerstats, power)) {
                                            return (
                                                <p>{`${power}: ${totalPowerstats[power]} `}</p>
                                            )
                                        }
                                    })}
                                </blockquote>
                            </div>
                        </div>
                        <div className={`${arrayEquipo.length === 0 ? "hide" : "card average"}`} id="containerCardInfo">
                            <div className="card-header title">
                                Average
                            </div>
                            <div className="card-body">
                                <blockquote className="blockquote mb-0 containerAverage">
                                    {heightAndWeightKeys.map((property) => {
                                        if (Object.hasOwnProperty.call(heightAndWeight, property)) {
                                            return (
                                                <p>{`${property}: ${heightAndWeight[property]} `}</p>
                                            )
                                        }
                                    })}
                                </blockquote>
                            </div>
                        </div>
                    </div>
                    
                </div>

            )
            }
        </>
    );
}