import React,{useState} from 'react'

const UserForm = (props)=>{
    const [firstName,setfirstName] = useState("");
    const [lastName,setlastName] = useState("");
    const [email,setemail] = useState("");
    const [password,setpassword] = useState("");
    const [confirmPass,setconfirmPass] = useState("");
    const [fnameerrorMessage,setfnameerrorMessage] = useState("");
    const [lnameError,setlnameError] = useState("");
    const [emailError,setemailError] = useState("");
    const [passError,setpassError] = useState("");
    const [confirmPassErr,setconfirmPassErr] = useState("");

    const handlerSubmit = (event)=>{
        event.preventDefault();
        const {name,value} = event.target;
        if( name === "firstName"){
                setfirstName(value)
                if(value.length < 2){
                    setfnameerrorMessage("First Name Must be More Than 2 Characters!")
                }
                else{
                    setfnameerrorMessage("")
                }
        }
        if(name === "lastName"){
                setlastName(value)
                if(value.length < 2){
                    setlnameError("Last Name Must Be More Than 2 Characters!")
                }
                else{
                    setlnameError("")
                }
        }
        if(name === "email"){
            setemail(value)
            if(value.length < 5){
                setemailError("Email Must Be More Than 5 Characters!")
            }
            else{
                setemailError("")
            }
            }
        if (name === "password"){
            setpassword(value)
            if(value.length < 8){
                setpassError("Password Must Be More Than 8 Characters!")
            }
            else{
                setpassError("")
            }
        }
        if(name === "confirmPass"){
            setconfirmPass(value)
            if(value !== password){
            setconfirmPassErr("Passwords Must Match!")
            }
            else{
            setconfirmPassErr("")
            }
        }
    }
    return(
        <form>
            <div className="form-box">
                <label>First Name: </label>
                <input type="text" name='firstName' onChange={(e)=>handlerSubmit(e)} value={firstName}/>
            </div>
            {fnameerrorMessage? <p style={{color:"red"}}>{fnameerrorMessage}</p> : ""}
            <div className="form-box">
                <label>Last Name: </label>
                <input type="text" name='lastName' onChange={(e)=>handlerSubmit(e)}value={lastName}/>
            </div>
            {lnameError? <p style={{color:"red"}}>{lnameError}</p> : ""}
            <div className="form-box">
                <label>Email: </label>
                <input type="text" name='email' onChange={(e)=>handlerSubmit(e)}value={email}/>
            </div>
            {emailError?<p style={{color:"red"}}>{emailError}</p>: ""}
            <div className="form-box">
                <label>Password: </label>
                <input type="password" name='password' onChange={(e)=>handlerSubmit(e)} value={password}/>
            </div>
            {passError? <p style={{color:"red"}}>{passError}</p> : ""}
            <div className="form-box">
                <label>Confirm Password: </label>
                <input type="password" name='confirmPass' onChange={(e)=>handlerSubmit(e)}value={confirmPass} />
            </div>
            {confirmPassErr? <p style={{color:"red"}}>{confirmPassErr}</p> : ""}
        </form>
    )
    
}

export default UserForm