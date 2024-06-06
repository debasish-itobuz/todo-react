import Item from "./Item"

export default function TodoList({ todos, setTodos, handleEdit }) {

function handleDelete(id){
  const updatedData = todos.filter((item)=>item.id !==id)
  setTodos(updatedData)
}

  return (
    <ol className="todoList text-center mt-3">
      {todos?.length > 0 ? (todos.map((item, index) => <Item key={index} item={item} handleEdit={handleEdit} handleDelete = {handleDelete}  />)) : (
        <p>Seems lonely in here, what are you up to?</p>
      )}
    </ol>
  )
}
