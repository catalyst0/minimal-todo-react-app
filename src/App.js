import React from 'react';
import {useState, useEffect} from 'react';
import './App.css';
import ToDoForm from './components/ToDoForm';
import ToDosList from './components/ToDosList';

function App() {

  const [ToDos, setToDos] = useState([]);

  useEffect( () =>
    console.log(ToDos)
  )

  const addToDo = (ToDoFromUI) => {
    const localToDos = [ToDoFromUI, ...ToDos];
    setToDos(localToDos);

    
  }

  return (
    <div className='todo-app'>
      <h1>What's the plan for today?</h1>
        <br/> 
          <ToDoForm submitHandler={addToDo}> </ToDoForm>
        <br/>
        <ToDosList ToDosParam={ToDos}> </ToDosList>
      
    </div>
  );
}

export default App;
