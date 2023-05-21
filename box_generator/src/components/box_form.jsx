import React,{useState} from 'react'


const NewBox = (props)=>{
    const [Color,setColor] = useState("");
    const handler = (e) => {
        e.preventDefault();
        props.addcolor(Color);
    }
    return(
        <div>
            <form onSubmit={handler}>
                <label>Color </label>
                <input type="text" onChange={(e)=>setColor(e.target.value)} />
                <button type='submit'>Add</button>
            </form>
            {props.allbox.map((item,i) =>
            <div key={i} style={{backgroundColor:`${item}`,width:'100px',height:'100px'}}>{item}</div>
)}
        </div>
    )
}
export default NewBox;