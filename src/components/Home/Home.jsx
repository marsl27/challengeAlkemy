import React, { useState } from 'react';
import "./Home.css"
import SearchBlockForm from '../SearchBlock/SearchBlockForm';
import Spinner from "../Spinner/Spinner";
import Card from '../Cards/Card';

export default function Home() {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")

    console.log(data);
    console.log(error);
    return (
        <>
        <SearchBlockForm setData={setData} setLoading={setLoading} setError={setError} />
            {loading ? (
                <Spinner />
            ) : (
                <div>
                  <p>busqueda</p>
                </div>
            )}
        </>
    );
}