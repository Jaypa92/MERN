

const Display = (props)=>{
    const {category,data} = props;
    return(
        <div>
            <h1>{data.name}</h1>
            {category === "planets"?
                <>
                <p>Climate: {data.climate}</p>
                <p>Terrain: {data.terrain}</p>
                <p>Surface Water: {data.surface_water}</p>
                <p>Population: {data.population}</p>
                </>
                :
                <>
                <p>Height: {data.height}</p>
                <p>Mass: {data.mass}</p>
                <p>Gender: {data.gender}</p>
                <p>Hair Color: {data.hair_color}</p>
                </>
            }
        </div>
    )
}
export default Display;