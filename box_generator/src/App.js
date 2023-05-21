
import NewBox from './components/box_form';
import './App.css';
import { useState } from 'react';

function App() {
  const [Boxcolor,setBoxcolor] = useState([]);

  const addcolor = (newColor) => {
    setBoxcolor([...Boxcolor,newColor]);
  }
  return (
    <div className="App">
      <NewBox addcolor = {addcolor} allbox={Boxcolor}/>
    </div>
  );
}

export default App;
