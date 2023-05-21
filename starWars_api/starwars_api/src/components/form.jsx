import React from 'react'
import {useNavigate} from 'react-router-dom'

const Form = (props)=>{
    const navigate = useNavigate();
    const {search,setsearch} = props;

    const handler = (e)=>{
        e.preventDefault();
        navigate(`/${search.category}/${search.id}`)
    }

    const onChangehandler = (e)=>{
        setsearch({...search,[e.target.name]:e.target.value})
    }

    return(
        <form onSubmit={handler}>
            <label>Search For:</label>
            <select onChange={onChangehandler} name='category' value={search.category}>
                <option name ="people" value="people">People</option>
                <option name="planets" value="planets">Planets</option>
            </select>
            <input type="number" onChange={onChangehandler} name="id" value={search.id}/>
            <button>Search</button>
        </form>
    )
}
export default Form;