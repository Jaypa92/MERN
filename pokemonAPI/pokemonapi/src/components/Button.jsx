import {useState} from 'react'

const Button= (props)=>{

const [pokemon,setpokemon] = useState([])

const handler = ()=>{
    fetch("https://pokeapi.co/api/v2/pokemon")
        .then(response =>{
            return response.json();
        }).then(response=>{
            console.log(response)
            setpokemon(response.results)
        }).catch(err=>{
            console.log(err)
        })
    }

    return(
        <div>
            <button onClick={handler}>Fetch Pokemon</button>
            {pokemon.map((item)=>{
                return(
                
                <p>{item.name}</p>
                )
            }
            )
        }
        </div>
    )
}

export default Button;