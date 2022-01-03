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


    for (let i = 0; i < team.length; i++) {
        totalPowerstats.intelligence += parseInt(team[i].powerstats.intelligence);
        totalPowerstats.combat += parseInt(team[i].powerstats.combat);
        totalPowerstats.durability += parseInt(team[i].powerstats.durability);
        totalPowerstats.power += parseInt(team[i].powerstats.power);
        totalPowerstats.speed += parseInt(team[i].powerstats.speed);
        totalPowerstats.strength += parseInt(team[i].powerstats.strength);

    }
    

    let totalPowerstatsKeys = Object.keys(totalPowerstats).sort((a,b) => totalPowerstats[b]-totalPowerstats[a])

    return (
        <>
            <SearchBlockForm setData={setData} setLoading={setLoading} setError={setError} />

            {loading ? (
                <Spinner />
            ) : (
                <div >
                    <div class={`${team.length === 0 ? "hide" : "card containerCard"}`}>
                        <div class="card-header title">
                        Total Powerstats
                        </div>
                        <div class="card-body">
                            <blockquote class="blockquote mb-0 containerTotalPowerstats">
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
                    <Cards data={team} loading={loading} setTeam={setTeam} setLoading={setLoading} error={error} setError={setError} isTeam={isTeam} />
                </div>

            )
            }
        </>
    );
}