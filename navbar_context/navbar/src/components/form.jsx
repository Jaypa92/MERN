import { useContext, useState } from "react"
import MyContext from './context/MyContext'

const Form = (props)=>{
    const [setName] = useContext(MyContext)
    const [name,setname] = useState("")
    const handler = (e)=>{
        e.prevenyDefault();
        setName(name);

    }
    return(
        <form onSubmit={{handler}}>
            <label>Name: </label>
            <input type="text" onChange={(e)=>setname(e.target.value)} />
            <button type="submit">Add</button>
        </form>
    )
}
export default Form;