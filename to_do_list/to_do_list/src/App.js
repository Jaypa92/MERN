import React,{useState} from 'react'
import './App.css';

function App() {
  const [newTask,setnewTask] = useState("");
  const [tasks,settasks] = useState([]);

  const handler = (event) => {
    event.preventDefault();
    if(newTask.length === 0){
      return;
    }

    const taskItem = {
      text: newTask,
      complete: false
    }

    settasks([...tasks, taskItem]);
    setnewTask("");
  }
  const deleteTask = (delIndx) =>{
    const filteredTasks = tasks.filter((task,i) => {
      return i !== delIndx;
    })
    settasks(filteredTasks);
  }

  const handleCheckbox = (idx) =>{
    const updatedItems = tasks.map((taskItem,i) => {
      if(idx === i){
        taskItem.complete = !taskItem.complete
        // const updatedItem = {...taskItem,complete : !taskItem.complete}
        // return updatedItem
      }
      return taskItem
    })
    settasks(updatedItems)
  }
  return (
    <div className="App">
      <form onSubmit ={(event)=>handler(event)}>
        <input onChange = {(event)=> {setnewTask(event.target.value)}}type = "text" value={newTask}></input>
        <div>
          <button>Add</button>
        </div>
      </form>
  
      {tasks.map((task,i) => {
        const taskClasses = [];
        if (task.complete){
          taskClasses.push("line-through")
        }
        return <div>
          <input onChange={(event) =>{
            handleCheckbox(i)
          }} checked={task.complete} type='checkbox'></input>
          <span className={taskClasses.join(" ")} key={i}>{task.text}</span>
          <button onClick={(event) => {
            deleteTask(i);
          }} style={{marginLeft:"10px"}}>Delete</button>
        </div>
      })}
    </div>
  );
}

export default App;
