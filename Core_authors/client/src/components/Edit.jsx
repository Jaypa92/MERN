import React, { useState,useEffect } from 'react'
import axios from 'axios'
import { useNavigate,useParams } from 'react-router-dom'
import {Link} from 'react-router-dom'

const Edit = (props)=>{
    const {id} = useParams();
    const navigate = useNavigate();
    
    const [name,setName] = useState("")
    const [errors,setErrors] = useState(null)
    
    useEffect(()=>{
        axios.get(`http://localhost:8000/api/authors/${id}`)
            .then(res=>{
                const {name} = res.data
                setName(name)
            })
            .catch(err=>{
                console.log(err)
            })
    },[id])

    const handleSubmit = (e)=>{
        e.preventDefault();
        const author = {name};
        console.log(author)
        axios.put(`http://localhost:8000/api/authors/${id}`,author)
            .then(res=>{
                console.log(res.data)
                navigate('/')
            })
            .catch(err=>{
                console.log(err)
                setErrors(err.response.data.errors)
            })

    }

    const handleCancel = (e)=>{
        e.preventDefault();
        navigate('/')
    }

    return(
        <div className='form' >
            <h4>Edit this author</h4>
            <form onSubmit={handleSubmit}>
                <label>Name:</label>
                <input type="text" onChange={(e)=>{setName(e.target.value)}} value={name}/>
                {errors?.name &&(
                    <p style={{color:'red'}} >{errors.name?.message}</p>
                    )}
                <div className='buttons' >
                    <button typeof='submit' >Submit</button>
                    <button onClick={handleCancel} >Cancel</button>
                </div>
            </form>
            <Link to={'/'} >Home</Link>
        </div>
    )
}

export default Edit;