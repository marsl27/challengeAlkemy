import React from 'react';
import "./Home.css"
import SearchBlockForm from '../SearchBlock/SearchBlockForm';
import Spinner from "../Spinner/Spinner";
import Cards from '../Cards/Cards';

export default function Home({ setData, setLoading, error, setError, team, loading, setTeam }) {
    console.log(team);
    let isTeam = true //Es para mostrar las powerstats en la card si es el equipo
    return (
        <>
            <SearchBlockForm setData={setData} setLoading={setLoading} setError={setError} />


            {loading ? (
                <Spinner />
            ) : (
                <> 
                    <Cards data={team} loading={loading} setTeam={setTeam} setLoading={setLoading} error={error} setError={setError} isTeam={isTeam}/>
                </>
            )}
        </>
    );
}