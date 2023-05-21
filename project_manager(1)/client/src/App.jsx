import './App.css';
import Form from './components/form';
import AllProducts from './components/AllProducts';
import ViewProduct from './components/ViewProduct';
import Edit from './components/Edit';
import Main from './components/Main';
import {
  Routes,
  Route,
  Link,
  Navigate
}
from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Navigate to={'/products'} />} />
        <Route path='/products' element = {<Main/>} />
        <Route path='/:id' element= {<ViewProduct/>} />
        <Route path='/:id/edit' element = {<Edit/>} />
      </Routes>
    </div>
  );
}

export default App;
