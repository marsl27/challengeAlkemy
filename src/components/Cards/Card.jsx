import { useState } from "react";
import { Link } from "react-router-dom"
import heroApi from "../../api/HeroApi";
import BarraPowerstats from "../Hero/BarraPowerstats";
import Swal from "sweetalert2";

export default function Card({ id, image, name, powerstats, setData, setLoading, setError, data, setTeam, team, isTeam }) {

    
    function handleClickAdd() {
        console.log(id);
        
        heroApi.getHeroById(id)
            .then(response => {
                console.log(response);
                if (response.response === "error") {
                    setError(response.error)
                    setTeam([]);
                } else {
                    if (team.length < 6) {
                        let good = 0;
                        let bad = 0;
                        team.map((hero) => {
                            if(hero.biography.alignment === "good"){
                                good++
                            }else if(hero.biography.alignment === "bad"){
                                bad++
                            }
                        })
                        if(response.biography.alignment === "bad" && bad<3){
                            setTeam([...team, response]);
                        
                        } else if(response.biography.alignment === "good" && good<3){
                            setTeam([...team, response]);
                          
                        } else{
                            Swal.fire({
                                icon: 'error',
                                title: 'Oops...',
                                text: 'Only 3 members of each orientation',
                            })
                        }
                        
                    }else{
                        Swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text: 'You can only have 6 members in your team!',
                        })
                    }

                    console.log(team);
                    console.log(response);
                }

                setLoading(false);

            })
            .catch(error => {
                setError(error.message);
                setLoading(false);
            })

    }
   
    function handleClickRemove() {
        let datos = isTeam ? data : team
        let aux = datos;

        aux = aux.filter((hero) => {
            console.log(hero.id);
            return hero.id != id
        })

        setTeam(aux)

    }

    function changeButton() {

        if (isTeam || team.find((hero) => hero.id === id)) {

            return "Remove"
        } else if (isTeam) {

            return "Remove"
        }
        else {
            console.log("segundo");
            return "Add"
        }
    }



    let powerstatsKeys = powerstats !== null ? Object.keys(powerstats) : null;
    console.log(changeButton());
    console.log(team);
    return (
        <div className="card" style={{ width: "22rem" }}>
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
                    <button className="btn btn-primary" onClick={changeButton() === "Add" ? handleClickAdd : handleClickRemove}>{changeButton()}</button>
                    <Link to={`/hero/${id}`}><button className="btn btn-secondary" >More</button></Link>
                </div>
            </div>
        </div>
    )
}