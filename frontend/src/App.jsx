import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [todos, setTodos] = useState([])
  const [newTodo, setNewTodo] = useState('')

  // Fetch data from backend API when component mounts
  useEffect(() => {
    fetch('/api/todos')
      .then(res => res.json())
      .then(data => setTodos(data))
      .catch(err => console.error("Error fetching data:", err))
  }, [])

  // Function to add new todo
  const addTodo = () => {
    fetch('/api/todos', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ task: newTodo })
    })
    .then(res => res.json())
    .then(data => {
      setTodos([...todos, data])
      setNewTodo('')
    })
  }

  return (
    <div className="App">
      <h1>Todo App</h1>
      <input value={newTodo} onChange={(e) => setNewTodo(e.target.value)} />
      <button onClick={addTodo}>Add Todo</button>
      <ul>
        {todos.map(todo => <li key={todo._id}>{todo.task}</li>)}
      </ul>
    </div>
  )
}

export default Apps