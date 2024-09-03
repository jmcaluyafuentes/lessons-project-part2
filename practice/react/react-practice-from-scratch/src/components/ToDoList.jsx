import React, { useState } from 'react'

const ToDoList = () => {
    const [ todos, setTodos ] = useState([])
    const [ inputValue, setInputValue ] = useState("")

    const handleAddToDo = (inputValue) => {
        if (inputValue.trim() === '') return;
        setTodos([...todos, inputValue])
        setInputValue('')
    }

    const handleDeleteToDo = (index) => {
        setTodos(todos.filter((_, i) => i != index))
    }

    return (
    <div>
        <input 
            type="text"
            name={inputValue}
            value={inputValue}
            
            placeholder="Add the to-do here"
            onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={() => handleAddToDo(inputValue)}>Add</button>
        <h2>To Do List:</h2>
        <ul>
            {todos.map((todo, index) => (
                <li key={index}>
                    {todo}
                    <button onClick={() => handleDeleteToDo(index)}>Delete</button>
                </li>
            ))}
        </ul>
    </div>
    )
}

export default ToDoList