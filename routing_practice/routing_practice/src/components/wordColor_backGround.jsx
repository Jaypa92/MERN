import { useParams } from "react-router-dom";

const ColoredHead = (props)=>{

    const {word,color1,color2} = useParams();

    return(
        <div style={{height:"100px",backgroundColor:`${color2}`}}>
            <h1 style={{color:`${color1}`}} >{word}</h1>
        </div>
    )
}
export default ColoredHead;