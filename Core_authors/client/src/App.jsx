import './App.css';
import Form from './components/Form';
import Edit from './components/Edit';
import ViewAll from './components/ViewAll';
import {
  Routes,
  Route
} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <h1>Favorite Authors</h1>
      <Routes>
        <Route path='/' element={<ViewAll/>} />
        <Route path='/new' element={<Form/>} />
        <Route path='/:id' element={<Edit/>} />
      </Routes>
    </div>
  );
}

export default App;
