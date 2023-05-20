import {useState} from 'react'
import axios from 'axios'

const Button = (props)=>{
    const [pokemon,setpokemon] = useState([]);
    const handler = ()=>{
        axios.get("https://pokeapi.co/api/v2/pokemon").then(response=>{
            setpokemon(response.data.results)
            console.log(response.data.results)
        })
    }
    return(
        <div>
            <button onClick={handler}>Fetch Pokemon</button>

            {pokemon.map((item,i)=>{
                return(
                <p key={i}>{item.name}</p>
                )
            })}
        </div>
    )
}
export default Button;