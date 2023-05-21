import { Routes,Route } from 'react-router-dom';
import './App.css';
import Welcome from './components/home';
import Word from './components/word';
import ColoredHead from './components/wordColor_backGround';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/home' element = {<Welcome/>}></Route>
        <Route path='/:word' element = {<Word/>}></Route>
        <Route path='/:word/:color1/:color2' element = {<ColoredHead/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
