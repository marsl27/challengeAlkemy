import { useEffect, useState } from "react"
import { useParams } from "react-router"
import heroApi from "../../api/HeroApi";
import "./Hero.css"
import BarraPowerstats from "./BarraPowerstats";
import Spinner from "../Spinner/Spinner"

export default function Hero() {
    let { id } = useParams()
   
    //const [error, setError] = useState("")

    const [hero, setHero] = useState({
        id: id,
        name: "",
        aliases: [],
        image: "",
        "eye-color": "",
        "hair-color": "",
        work: "",
        weight: "",
        height: "",
        powerstats: { intelligence: 0 },
    });
    const [error, setError] = useState();
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        
        heroApi.getHeroById(id)
            .then(response => {
                
                if (response.response === "error") {
                    console.log(response);
                    setError(response.error)
                    setHero({
                        id: id,
                        name: "",
                        aliases: [],
                        image: "",
                        "eye-color": "",
                        "hair-color": "",
                        work: "",
                        weight: "",
                        height: "",
                        powerstats: {}
                    });
                } else {
                    console.log(response);
                    setHero({
                        id: id,
                        name: response.name,
                        aliases: response.biography.aliases,
                        image: response.image.url,
                        "eye-color": response.appearance["eye-color"],
                        "hair-color": response.appearance["hair-color"],
                        work: response.work,
                        weight: response.appearance.weight[1],
                        height: response.appearance.height[1],
                        powerstats: response.powerstats
                    });
                    setError("")
                    setLoading(false)
                }
            })
            .catch(error => {
                setError(error);
            })
    }, [id])

    let powerstatsKeys = Object.keys(hero.powerstats)
    console.log(hero.powerstats);
    console.log(hero);
    return (
        <>
            {loading ? (
                <Spinner />
            ) : (
                <div id="containerHero">
                    <div className="containerImageInfo">
                        <div className="containerImageHero">
                            <img src={hero.image} alt={hero.name} />
                        </div>
                        <div id="containerInfo">
                            <h2>{hero.name}</h2>
                            {hero.aliases.map((h) => {
                                return <h3>{h}</h3>
                            })}
                            <p>Eye-color: {hero["eye-color"]}</p>
                            <p>hair-color: {hero["hair-color"]}</p>
                            <p>Height: {hero.height}</p>
                            <p>Weight: {hero.weight}</p>
                            <p>Work: {hero.work.occupation}</p>
                        </div>
                    </div>
                    <div className="containerPowerstats">
                        <h2>Powerstats</h2>
                        {powerstatsKeys.map((power) => {
                            if (Object.hasOwnProperty.call(hero.powerstats, power)) {
                                return (
                                    <BarraPowerstats powerstatKey={power} powerstatValue={hero.powerstats[power]} />
                                )
                            }
                        })}

                    </div>
                </div>
            )
            }</>
    )
}