import { useState, useEffect } from 'react'
import './App.css'
import Header from './components/Header'
import Form from './components/Form'
import TodoList from './components/TodoList'
import axios from'axios'

function App() {

  // data is storing in todos array
  const [todos, setTodos] = useState([])
  const [editTask, setEditTask] = useState(null)
  const [deleteTask, setDeleteTask] = useState(null)

  useEffect(()=>{
    async function fetchData(){
      const response = await axios({method:"get", url:"http://localhost:8000/todo/get"});
      setTodos(response.data.data)
      console.log(response)
    }fetchData()
  },[])

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
