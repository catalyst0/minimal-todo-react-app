import React from 'react';
import {useRef, useState, useEffect} from 'react';



function ToDoForm(props) {

    const [input, setInput] = useState('');
    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    });

    const onChangeHandler = (e) => {
        setInput(e.target.value);
        console.log(e.target.value);
    }

    const onSubmitHandler = (e) => {
        // Prevent default behavior, which is Page-Refresh in standard HTML5
        e.preventDefault();
        
        console.log(e.target.value);
        setInput(e.target.value);
        props.submitHandler({
            id: Math.floor(Math.random() * 10000),
            text: input
          });
        setInput('');

    };
    
    return (
        <div>
            <form onSubmit={onSubmitHandler}>
                <input
                    type='input'
                    name='todo-text'
                    placeholder='Please enter a ToDo Item'
                    onChange={onChangeHandler}
                    value={input}
                    ref={inputRef}
                    className='todo-input'
                />
                <button onClick={onSubmitHandler} className='todo-button'> Add To-Do</button>
            </form>
        </div>
    )
}

export default ToDoForm;
