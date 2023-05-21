import React from 'react'
import './App.css';
import PersonCard from './components/PersonCard.jsx';

const people = [
  {"firstName": "Billy","lastName":"Busboy","age":20,"haircolor":"black" },
  {"firstName": "Donnie","lastName":"Duncan","age":25,"haircolor":"blonde" },
  {"firstName": "Tommy","lastName":"Thompson","age":21,"haircolor":"green" },
  {"firstName": "Bobbie","lastName":"Bowlinger","age":30,"haircolor":"brown" }
]

function App() {
  return (
    <div className="App">
      {people.map(person=>{
        return <PersonCard firstName = {person.firstName} lastName = {person.lastName} age = {person.age}
        haircolor = {person.haircolor}/>
      })}
    </div>
  );
}

export default App;
