import React from 'react'


function ToDosList(props) {

    console.log(props.ToDosParam);

    return props.ToDosParam.map ((todo, index) => (
        <div key={todo.id} className='todo-row'>
        <p>{todo.text}</p>
      </div>
    )
    )



}

export default ToDosList
