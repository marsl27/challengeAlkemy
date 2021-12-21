import Card from "./Card";
import "./Cards.css"

export default function Cards({ data, loading }) {

    return (
        <div className="containerCards">
            {data.map((hero, index) => {
                return <Card name={hero.name} image={hero.image.url} key={index} />
            })}
        </div>
    )
}