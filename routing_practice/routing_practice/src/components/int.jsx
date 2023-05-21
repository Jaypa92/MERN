import { useParams } from "react-router-dom";

const ThisNum= (props)=>{

    const {int} = useParams();

    return(
        <h1>The number is: {int}</h1>
    )
}
export default ThisNum;