import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams,useNavigate,Link } from 'react-router-dom'

const ViewProduct = (props)=>{
    const navigate = useNavigate();
    const {id} = useParams();

    const [product,setProduct] = useState({})

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(res=>{
                setProduct(res.data)
            })
            .catch(err=>{
                console.log(err)
                navigate('/products')
            })
    },[id])

    const {title,price,description} = product;

    const handelDelete = (id)=>{
        axios.delete(`http://localhost:8000/api/products/${id}`)
            .then(res =>{
                console.log('Success')
                navigate('/')
            })
            .catch(err=>{
                console.log(err)
            })
    }

    return(
            <div className='viewed-product'>
                <div className='view' >
                    <h1>{title}</h1>
                    <p><b>Price:</b> ${price}</p>
                    <p><b>Description:</b> {description}</p>
                    <Link to={'/'} >Home</Link>
                    <button><Link style={{textDecoration:'none',color:'black'}} to={`/${product._id}/edit`} >Edit</Link></button>
                    <button onClick={()=>{handelDelete(product._id)}}>Delete</button>
                </div>
            </div>
    )
}

export default ViewProduct;