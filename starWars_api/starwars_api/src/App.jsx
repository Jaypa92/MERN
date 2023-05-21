import './App.css';
import { useState } from 'react';
import {Routes,Route} from 'react-router-dom'
import Head from './components/head';
import Form from './components/form';
import Error from './components/error';

function App() {
  const [search,setsearch] = useState({
    category:'planets',
    id:"",
  });

  return (
    <div className="App">
      <Form search={search} setsearch={setsearch}></Form>
      <Routes>
        <Route path='/:category/:id' element={<Head search={search} setsearch={setsearch}/>}/>
        <Route path='/error' element={<Error/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
