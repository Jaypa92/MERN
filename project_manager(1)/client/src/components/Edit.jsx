import React from 'react'
import { useState,useEffect } from 'react'
import { useParams,Navigate, useNavigate,Link } from 'react-router-dom'
import axios from 'axios'

const Edit = (props)=>{
    const {id} = useParams();
    const navigate = useNavigate();
    const [title,setTitle] = useState("")
    const [price,setPrice] = useState(0)
    const [description,setDescription] = useState("")
    const [errors,setErrors] = useState(null)
    const [oldTitle,setOld] = useState("")

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(res=>{
                const {
                    title,
                    price,
                    description
                } = res.data

                setOld(title)
                setTitle(title)
                setPrice(price)
                setDescription(description)
            })
            .catch(err=>{
                console.log(err)
                navigate('/')
            })
    },[id])

    const handleSubmit = (e)=>{
        e.preventDefault();

        const editedProduct = {
            title,
            price,
            description
        }

        axios.put(`http://localhost:8000/api/products/${id}`,editedProduct)
            .then(res=>{
                console.log(res);
                navigate(`/`)
            })
            .catch(err=>{
                console.log(err.response.data.errors)
                setErrors(err.response.data.errors)
            })
    }

    return(
        <div>
            <h1>Edit Product</h1>
            <form onSubmit={handleSubmit} >
                <div className='input-box' >
                    <label>Title:</label>
                    <input onChange={(e)=>{setTitle(e.target.value)}} type="text" value={title} />
                </div>
                {errors?.title &&(
                    <p style={{color:'red'}} >{errors.title?.message}</p>
                )}
                <div className='input-box' >
                    <label>Price:</label>
                    <input onChange={(e)=>{setPrice(e.target.value)}} type='number' value={price} />
                </div>
                {errors?.price &&(
                    <p style={{color:'red'}} >{errors.price?.message}</p>
                )}
                <div className='input-box' >
                    <label>Description:</label>
                    <input onChange={(e)=>{setDescription(e.target.value)}} type="text" value={description} />
                </div>
                {errors?.description && (
                    <p style={{color:'red'}} >{errors.description?.message}</p>
                )}
                <input type="submit" value='Edit' />
            </form>
            <Link to={'/'} >Home</Link>
        </div>
    )
}

export default Edit;