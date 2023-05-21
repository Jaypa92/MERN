// import logo from './logo.svg';
import './App.css';

function App() {
  const todoList = ["*Learn React","* Mt. Everest", "*Run a marathon","* Feed the dogs"];
  return (
    <div className="App">
      <h1>Hello Dojo!</h1>
      <h2>Things I need to do:</h2>
      {
      todoList.map(item=><p>{item}</p>)
      }
      
    </div>
  );
}

export default App;
