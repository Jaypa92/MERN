import React from 'react'
import './App.css';
import PersonCard from './components/PersonCard'
const people = [
  {"firstName":"Billy","lastName":"Busboy","age":20,"haircolor":"black"},
  {"firstName":"Donnie","lastName":"Drunkard","age":25,"haircolor":"blonde"},
  {"firstName":"Tommy","lastName":"Talksalot","age":21,"haircolor":"green"},
  {"firstName":"Bobbie","lastName":"Boringme","age":30,"haircolor":"brown"}
]
function App() {
  return (
    <div className="App">
      {people.map(person=>{
        return <PersonCard firstName = {person.firstName} lastName={person.lastName} age={person.age} 
        haircolor = {person.haircolor}/>
      })
    }
    </div>
  );
    
}

export default App;
