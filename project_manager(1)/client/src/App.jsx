import './App.css';
import Form from './components/form';
import allProducts from './components/allProducts';
import {
  Routes,
  Route,
  Link
}
from 'react-router-dom'

function App() {
  return (
    <div className="App">
        {/* <Form/> */}
        <allProducts/>
    </div>
  );
}

export default App;
