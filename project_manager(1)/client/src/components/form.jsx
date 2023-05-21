import React from "react";
import { useState } from "react";
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

const Form = (props) => {
    const navigate = useNavigate()
    const [title,settitle] = useState("")
    const [price,setprice] = useState(null)
    const [description,setdescription] = useState("")


    const [errors,setErrors] = useState(null)

    const handleSubmit = (e)=>{
        e.preventDefault();

        const newProduct = {
            title,
            price,
            description
        }
        axios.post('http://localhost:8000/api/products/',newProduct)
            .then(res=>{
                console.log(res.data)
                navigate('/')

            })
            .catch(err=>{
                console.log(err.response.data.errors)
                setErrors(err.response.data.errors)
            })
    }

    return (
        <div className="form">
            <h1>Product Manager</h1>
            <form onSubmit={handleSubmit}>
                <div className="input-box">
                    <label>Title:</label>
                    <input type="text" onChange={(e)=>{settitle(e.target.value)}} />
                </div>
                {
                errors?.title &&(
                    <p style={{color:"red"}}>{errors.title?.message}</p>
                )
                }
                <div className="input-box">
                    <label>Price:</label>
                    <input type="number" step={'0.01'} onChange={(e)=>{setprice(e.target.value)}}/>
                </div>
                {
                errors?.price &&(
                    <p style={{color:"red"}}>{errors.price?.message}</p>
                )}
                <div className="input-box">
                    <label>Description:</label>
                    <input type="text" onChange={(e)=>{setdescription(e.target.value)}}/>
                </div>
                {
                errors?.description &&(
                    <p style={{color:"red"}}>{errors.description?.message}</p>
                )
                }
                <input type="submit" value={'Create'} />
            </form>
        </div>
    )
}

export default Form;