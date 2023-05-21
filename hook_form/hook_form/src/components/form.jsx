import React,{useState} from 'react'

const UserForm = (props) =>{
    const [FirstName,setFirstName] = useState("");
    const [LastName,setLastName] = useState("")
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [confirmPass,setconfirmPass] = useState("")

    const create = (e)=>{
        e.preventDefault();
        const newUser = {FirstName,LastName,email,password,confirmPass};
    };

    return(
    <div>
        <form onSubmit={create}>
            <div className='form-box'> 
                <label>First Name </label>
                <input type="text" onChange={(e)=>setFirstName(e.target.value)} />
            </div>
            <div className='form-box'>
                <label>Last Name </label>
                <input type="text" onChange={(e)=>setLastName(e.target.value)} />
            </div>
            <div className='form-box'>
                <label>Email </label>
                <input type="text" onChange={(e)=>setEmail(e.target.value)} />
            </div>
            <div className='form-box'>
                <label>Password </label>
                <input type="password" onChange={(e)=>setPassword(e.target.value)}/>
            </div>
            <div className='form-box'>
                <label>Confirm Password </label>
                <input type="password" onChange={(e)=>setconfirmPass(e.target.value)}/>
            </div>
            <input className='submit' type="submit" value={"Create"} />
        </form>
        <h4>Your Form Data</h4>
        <p>First Name: {FirstName}</p>
        <p>Last Name: {LastName}</p>
        <p>Email: {email}</p>
        <p>Password: {password}</p>
        <p>Confirm Password: {confirmPass}</p>
    </div>
    )
}

export default UserForm;