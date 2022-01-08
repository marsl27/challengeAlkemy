import { useState } from "react";
import { Link } from "react-router-dom"
import heroApi from "../../api/HeroApi";
import BarraPowerstats from "../Hero/BarraPowerstats";
import Swal from "sweetalert2";

export default function Card({ removeHero, setRemoveHero, id, image, name, powerstats, setLoading, setError, data, isTeam }) {
    let equipo = localStorage.getItem("team")
    let arrayEquipo = equipo === null ? [] : JSON.parse(equipo)
    const [buttonName, setButtonName] = useState((arrayEquipo.find((hero) => hero.id === id)) ? "Remove" : "Add")

    function handleClickAdd() {
        
        equipo = localStorage.getItem("team")
        arrayEquipo = equipo === null ? [] : JSON.parse(equipo)
       
        heroApi.getHeroById(id)
            .then(response => {
                console.log(response);
                if (response.response === "error") {
                    setError(response.error)
                } else {
                    if (arrayEquipo.length < 6) {
                        let good = 0;
                        let bad = 0;
                        arrayEquipo.map((hero) => {
                            if (hero.biography.alignment === "good") {
                                good++
                            } else if (hero.biography.alignment === "bad") {
                                bad++
                            }
                        })
                        if (response.biography.alignment === "bad" && bad < 3) {
                            arrayEquipo.push(response)
                            localStorage.setItem("team", JSON.stringify(arrayEquipo))
                            setButtonName("Remove")
                            setRemoveHero(!removeHero)
                        } else if (response.biography.alignment === "good" && good < 3) {
                            
                            arrayEquipo.push(response)
                            localStorage.setItem("team", JSON.stringify(arrayEquipo))
                            setButtonName("Remove")
                            setRemoveHero(!removeHero)
                        } else {
                            Swal.fire({
                                icon: 'error',
                                title: 'Oops...',
                                text: 'Up to 3 members of each orientation',
                            })
                        }

                    } else {
                        Swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text: 'You can only have 6 members in your team!',
                        })
                    }
                }

                setLoading(false);
                localStorage.setItem("team", JSON.stringify(arrayEquipo))
                console.log(localStorage.getItem("team"));
            })
            .catch(error => {
                setError(error.message);
                setLoading(false);
            })

    }

    function handleClickRemove() {
        arrayEquipo =JSON.parse(localStorage.getItem("team"))
        
        arrayEquipo = arrayEquipo.filter((hero) => {
            return hero.id !== id
        })

        localStorage.setItem("team", JSON.stringify(arrayEquipo))
        if(!isTeam){
            setButtonName("Add")
        }
        setRemoveHero(!removeHero)
    }

    let powerstatsKeys = powerstats !== null ? Object.keys(powerstats) : null;
    
    return (
        <div className="card containerCard">
            <div className="containerImage">
                <img className="card-img-top" src={image} alt={name} />
            </div>
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                {powerstatsKeys !== null ? powerstatsKeys.map((power) => {
                    if (Object.hasOwnProperty.call(powerstats, power)) {
                        return (
                            <BarraPowerstats powerstatKey={power} powerstatValue={powerstats[power]} />
                        )
                    }
                }) : null}
                <div className="containerButtons">
                    <button className="btn btn-primary" onClick={buttonName==="Add" ? handleClickAdd : handleClickRemove}>{buttonName}</button>
                    <Link to={`/hero/${id}`}><button className="btn btn-secondary" >More</button></Link>
                </div>
            </div>
        </div>
    )
}