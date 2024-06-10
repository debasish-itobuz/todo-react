import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Form from './components/Form'
import TodoList from './components/TodoList'

function App() {

  // data is storing in todos array
  const [todos, setTodos] = useState([])
  const [editTask, setEditTask] = useState(null)
  const [deleteTask, setDeleteTask] = useState(null)

  const handleEdit = (id) => {
    const task = todos.find((item) => item.id === id)
    setEditTask(task)
  }
  return (
    <>
      <Header />
      <Form todos={todos} setTodos={setTodos} editTask={editTask} setEditTask={setEditTask} deleteTask = {deleteTask} />
      <TodoList todos={todos} setTodos={setTodos} handleEdit={handleEdit} setDeleteTask = {setDeleteTask} />
    </>
  )
}

export default App
