import { useState } from 'react';
import './App.css';
import MyContext from './context/MyContext';
import Formwrapper from './components/formwrapper'
import Navbar from './components/navbar'


function App() {
  const {Name,setName} = useState("")
  return (
    <div className="App">
      <MyContext.Provider value={{Name,setName}}>
        <Formwrapper/>
        <Navbar/>
      </MyContext.Provider>
    </div>
  );
}

export default App;
