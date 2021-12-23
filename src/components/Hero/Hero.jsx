import { useEffect, useState } from "react"
import { useParams } from "react-router"
import heroApi from "../../api/HeroApi";
import "./Hero.css"

export default function Hero() {
    let { id } = useParams()

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
        powerstats: {},
    });
    const [error, setError] = useState();

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
                }
            })
            .catch(error => {
                setError(error);
            })
    }, [id])


    console.log(hero.powerstats.intelligence);
    console.log(hero);
    return (
        <div id="containerHero">
            <div className="containerImageInfo">
                <div className="containerImage">
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
                <p>Intelligence</p>
                <div class="progress">
                    <div class="progress-bar bg-success" role="progressbar" style={{ width: `${hero.powerstats.intelligence}%` }} aria-valuenow={`${hero.powerstats.intelligence}`} aria-valuemin="0" aria-valuemax="100">{`${hero.powerstats.intelligence}%`}</div>
                </div>
            </div>
        </div>
    )
}