import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {Link,useNavigate} from 'react-router-dom'

const ViewAll = (props)=>{
    const navigate = useNavigate();
    const [name,setName] = useState([])

    useEffect(()=>{
        axios.get('http://localhost:8000/api/authors')
            .then(res=>{
                console.log(res)
                setName(res.data)
            })
            .catch(err=>{
                console.log(err)
            })
    },[])

    const handleEdit = (id)=>{
        navigate(`/${id}`)
    }

    const handleDelete = (id)=>{
        axios.delete(`http://localhost:8000/api/authors/${id}`)
            .then(res=>{
                const filteredList = name.filter(author=>{
                    return author._id !== id
                })
                setName(filteredList)
            })
            .catch(err=>{
                console.log(err)
            })
    }

    return(
        <div className='form' >
            <h4>We have quotes by:</h4>
            <Link to={'/new'} style={{textAlign:'center'}} >Add an author</Link>
            <div className='table' >
                <table>
                    <thead>
                        <tr>
                            <th>Author</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                    {name.sort((a,b)=>a.name>b.name?1:-1).map((author,i)=>{
                    return(
                        <tr key={i} >
                            <td>{author.name}</td>
                            <td className='link' >
                            <button onClick={()=> handleEdit(author._id)} >Edit</button>
                                <button onClick={()=> handleDelete(author._id)} >Delete</button>
                            </td>
                        </tr>

                            )
                        })}
                    </tbody>
                </table>
            </div> 
        </div>
    )
}

export default ViewAll;