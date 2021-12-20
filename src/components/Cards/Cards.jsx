import Card from "./Card";


export default function Cards({data, loading}){
    
    return (
        
        data.map((hero, index)=>{
            return <Card name={hero.name} image={hero.image.url} key={index}/>
        })
    )
}