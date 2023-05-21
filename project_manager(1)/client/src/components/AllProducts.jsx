import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

const AllProducts = (props)=>{

    const [products,setProducts] = useState([])

    useEffect(()=>{
        axios.get('http://localhost:8000/api/products/')
            .then(res=>{
                console.log(res);
                setProducts(res.data);
            })
            .catch(err=>{
                console.log(err)
            })
    },[])

    const handleDelete = (id)=>{
        axios.delete(`http://localhost:8000/api/products/${id}`)
            .then(res =>{
                const filteredList = products.filter(product =>{
                    return product._id != id
                })
                setProducts(filteredList)
            })
            .catch(err=>{
                console.log(err)
            })
    }

    return(
        <div>
            <h1>All Products:</h1>
            {products.sort((a,b)=>a.title>b.title?1:-1).map((product,i)=>{
            return(
            <div key={i} >
                <p><Link to={`/${product._id}`}>{product.title}</Link></p>
                <div className='buttons' >
                    <button><Link style={{textDecoration:'none',color:'black'}} to={`/${product._id}/edit`} >Edit</Link></button>
                    <button onClick={()=>{handleDelete(product._id)}} >Delete</button>
                </div>
            </div>
            )
    })}
        </div>
    )
}

export default AllProducts;