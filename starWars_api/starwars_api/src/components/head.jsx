import axios from 'axios'
import { useState, useEffect } from 'react'
import Display from './display';
import {useParams,useNavigate} from 'react-router-dom'

const Head = (props) => {
    const {search} = props;
    const navigate = useNavigate();
    const {category,id} = useParams();
    const [Items, setItems] = useState("");

    useEffect(() => {
        axios.get(`https://swapi.dev/api/${category}/${id}`).then(response => {
            console.log(response.data)
            setItems(response.data)
        }).catch(err => {
            console.log("This is an await/catch error!");
            navigate("/error")
        })
    },[Items])

    return(
        <div>
            <Display data = {Items} category={search.category}/>
        </div>
    )
}

export default Head;