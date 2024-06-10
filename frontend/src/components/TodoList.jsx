import Item from "./Item"

export default function TodoList({ todos, setTodos, handleEdit, setDeleteTask }) {

function handleDelete(id){
  setDeleteTask(id)
  const updatedData = todos.filter((item)=>item.id !==id)
  setTodos(updatedData)
}

console.log(todos)

  return (
    <ol className="todoList text-center mt-3 overflow-y-scroll h-[81vh]">
      {todos?.length > 0 ? (todos.map((item, index) => <Item key={index} item={item} handleEdit={handleEdit} handleDelete = {handleDelete}  />)) : (
        <p>Seems lonely in here, what are you up to?</p>
      )}
    </ol>
  )
}
