import Item from "./Item"
import axios from "axios"

export default function TodoList({ todos, setTodos, handleEdit, setDeleteTask }) {

  async function handleDelete(id){
    const response = await axios({method:"delete", url:`http://localhost:8000/todo/delete/?id=${id}`})
    if(response.status === 200){
      setDeleteTask(id);
    }
  }




// function handleDelete(id){
//   setDeleteTask(id)
//   const updatedData = todos.filter((item)=>item.id !==id)
//   setTodos(updatedData)

// }

// console.log(todos)

  return (
    <ol className="todoList text-center mt-3 overflow-y-scroll h-[81vh]">
      {todos?.length > 0 ? (todos.map((item, index) => <Item key={index} item={item} handleEdit={handleEdit} handleDelete = {handleDelete}  />)) : (
        <p>Seems lonely in here, what are you up to?</p>
      )}
    </ol>
  )
}
