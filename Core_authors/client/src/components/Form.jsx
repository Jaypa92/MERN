import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate,Link } from 'react-router-dom'

const Form = (props)=>{
    const navigate = useNavigate();
    const [name,setName] = useState("");
    const [errors,setErrors] = useState(null)

    const handleSubmit = (e)=>{
        e.preventDefault();
        const author = {name}
        axios.post(`http://localhost:8000/api/authors`,author)
            .then(res=>{
                console.log(res.data)
                navigate('/')
            })
            .catch(err=>{
                console.log(err.response.data.errors)
                setErrors(err.response.data.errors)
            })
    }

    const handleCancel = ()=>{
        navigate('/')
    }
    return(
        <div className='form'>
            <h4>Add an author:</h4>
            <form  onSubmit={handleSubmit}>
                <label>Name:</label>
                <input type="text" onChange={(e)=>{setName(e.target.value)}} />
                {errors?.name &&(
                    <p style={{color:'red'}} >{errors.name?.message}</p>
                    )}
                <div className='buttons' >
                    <button type='submit' >Submit</button>
                    <button onClick={handleCancel} >Cancel</button>
                </div>
            </form>
                    <Link to={'/'} >Home</Link>
        </div>
    )
}

export default Form;