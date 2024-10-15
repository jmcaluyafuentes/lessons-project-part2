import React, { useState } from 'react'

const ToDoList = () => {

    const [ inputValue, setInputValue ] = useState("");
    const [ todos, setTodos ] = useState([]);

    const handleAddToDo = () => {
        if (inputValue.trim() === "") return;
        setTodos([...todos, inputValue]);
        setInputValue("");
    }

    const handleDeleteTodo = (index) => {
        setTodos(todos.filter((_, i) => i !== index))
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleAddToDo();
        }
    }

  return (
    <div>
        <h1>To Do List:</h1>
        <input
            type="textbox"
            value={inputValue}
            placeholder="Add the to do item here..."
            onKeyDown={handleKeyDown}
            onChange={(e) => setInputValue(e.target.value)}
        >
        </input>
        <button onClick={handleAddToDo}>Add</button>
        <ul>
            {todos.map((todo, index) => (
                <li key={index}>
                    {todo}
                    <button onClick={() => handleDeleteTodo(index)}>Delete</button>
                </li>
            ))

            }
        </ul>
    </div>
  )
}

export default ToDoList