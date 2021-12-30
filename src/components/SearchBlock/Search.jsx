import React, { useEffect } from 'react';
import SearchBlockForm from './SearchBlockForm';
import Spinner from "../Spinner/Spinner";
import Cards from '../Cards/Cards';
import { useParams } from "react-router"
import heroApi from '../../api/HeroApi';

export default function Search({setData, setLoading, setError,data, loading, setTeam }) {
console.log("se renderizo");
let { value } = useParams()

useEffect(()=>{
    setLoading(true);
    heroApi.getHeroByName(value)
           .then(response=>{
           
               if(response.response ==="error"){
                   console.log(response);
                   setError(response.error)
                   setData([]);
                   
               }else{
                    setData(response.results);
                    setError("")
               }
               
               setLoading(false);
               
           })
           .catch(error=>{
               setError(error.message);
               setLoading(false);
           })
}, [value])

    return (
        <>
        <SearchBlockForm setData={setData} setLoading={setLoading} setError={setError} />
        
               
            {loading ? (
                <Spinner />
            ) : (
               
                  <Cards data={data} loading={loading} setTeam={setTeam} setLoading={setLoading} setError={setError}/>
               
            )}
        </>
    );
}