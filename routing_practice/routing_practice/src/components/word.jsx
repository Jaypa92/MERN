import { useParams } from "react-router-dom";

const Word = (props)=>{

    const {word} = useParams();

    return(
        <div>
            {isNaN(word)?
            <h1>{word}</h1>:
            <h1>The number is: {word}</h1>}
        </div>
    )
}
export default Word;