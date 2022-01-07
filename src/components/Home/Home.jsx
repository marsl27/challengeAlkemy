import React from 'react';
import "./Home.css"
import SearchBlockForm from '../SearchBlock/SearchBlockForm';
import Spinner from "../Spinner/Spinner";
import Cards from '../Cards/Cards';

export default function Home({ setData, setLoading, error, setError, team, loading, setTeam }) {
    console.log(team);
    let isTeam = true //Es para mostrar las powerstats en la card si es el equipo

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


    for (let i = 0; i < team.length; i++) {
        totalPowerstats.intelligence += parseInt(team[i].powerstats.intelligence);
        totalPowerstats.combat += parseInt(team[i].powerstats.combat);
        totalPowerstats.durability += parseInt(team[i].powerstats.durability);
        totalPowerstats.power += parseInt(team[i].powerstats.power);
        totalPowerstats.speed += parseInt(team[i].powerstats.speed);
        totalPowerstats.strength += parseInt(team[i].powerstats.strength);
    }
    function average(){
        let cont = 0;
        for (let i = 0; i < team.length; i++) {
            cont++
            heightAndWeight.height += parseInt(team[i].appearance.height[1].split(" ")[0]);
            heightAndWeight.weight += parseInt(team[i].appearance.weight[1].split(" ")[0]); 
        }
        heightAndWeight.height = `${parseFloat(heightAndWeight.height/cont).toFixed(2)} cm`
        heightAndWeight.weight = `${parseFloat(heightAndWeight.weight/cont).toFixed(2)} kg`
    }
    
    average()
    console.log(heightAndWeight);

    let totalPowerstatsKeys = Object.keys(totalPowerstats).sort((a, b) => totalPowerstats[b] - totalPowerstats[a])
    let heightAndWeightKeys = Object.keys(heightAndWeight)

    return (
        <>
            <SearchBlockForm setData={setData} setLoading={setLoading} setError={setError} />

            {loading ? (
                <Spinner />
            ) : (
                <div >
                    <Cards data={team} loading={loading} setTeam={setTeam} setLoading={setLoading} error={error} setError={setError} isTeam={isTeam} />
                    <div className="containerInfo">
                        <div className={`${team.length === 0 ? "hide" : "card containerCard"}`}>
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
                        <div className={`${team.length === 0 ? "hide" : "card containerCard average"}`}>
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