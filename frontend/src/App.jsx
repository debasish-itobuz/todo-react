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
  const [newTask, setNewTask] = useState(null)

  useEffect(()=>{
    async function fetchData(){
      const response = await axios({method:"get", url:"http://localhost:8000/todo/get"});
      setTodos(response.data.data)
      // console.log(response)
    }fetchData()
  },[newTask, editTask])

  const handleEdit = (task) => {
    setEditTask(task)
  }
  return (
    <>
      <Header />
      <Form todos={todos} setTodos={setTodos} editTask={editTask} setEditTask={setEditTask} deleteTask = {deleteTask} setNewTask = {setNewTask} />
      <TodoList todos={todos} setTodos={setTodos} handleEdit={handleEdit} setDeleteTask = {setDeleteTask} />
    </>
  )
}

export default App
