import Card from "./Card";
import Spinner from "../Spinner/Spinner";

export default function Cards({data, loading}){
    
    return loading ? (
        <Spinner/>
      ) : (
        data.map((hero, index)=>{
            return <Card name={hero.name} image={hero.image.url} key={index}/>
        })
    )
}