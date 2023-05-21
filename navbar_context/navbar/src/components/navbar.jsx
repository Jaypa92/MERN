import { useContext } from 'react';
import MyContext from '../context/MyContext';

const Navbar = (props)=>{
    const Name = useContext(MyContext)
    
    return(
        <div>
            <h1>Hello {Name}</h1>
        </div>
    )
}

export default Navbar;