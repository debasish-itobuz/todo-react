import Item from "./Item"
import axios from "axios"

export default function TodoList({ todos, handleEdit, setDeleteTask }) {

  async function handleDelete(id){
    const response = await axios({method:"delete", url:`http://localhost:8000/todo/delete/?id=${id}`})
    if(response.status === 200){
      setDeleteTask(id);
    }
  }

  return (
    <ol className="todoList text-center mt-3 overflow-y-scroll h-[81vh]">
      {todos?.length > 0 ? (todos.map((item) => <Item key={item._id} item={item} handleEdit={handleEdit} handleDelete = {handleDelete}  />)) : (
        <p>Seems lonely in here, what are you up to?</p>
      )}
    </ol>
  )
}
