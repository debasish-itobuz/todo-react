import React from 'react'
import './App.css'
import Header from './components/Header'
import Form from './components/Form'
import TodoList from './components/TodoList'

function App() {

// data is storing in todos array
  const [todos, setTodos] = React.useState([])
  //   const [todos, setTodos] = React.useState(
  //     [
  //     {title:"Some task",  id: self.crypto.randomUUID(), is_completed:false},
  //     {title:"Some important task",  id: self.crypto.randomUUID(), is_completed:false},
  //     {title:"Some different task",  id: self.crypto.randomUUID(), is_completed:false},
  //   ]
  // )
  return (
    <>
      <Header />
      <Form setTodos={setTodos} />
      <TodoList todos={todos} />
    </>
  )
}

export default App
