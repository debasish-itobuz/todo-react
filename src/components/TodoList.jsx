import Item from "./Item"

export default function TodoList({ todos }) {
  return (
    <ol className="todoList text-center mt-3">
      {todos?.length > 0 ? (todos.map((item, index) => <Item key={index} item={item} />)) : (
        <p>Seems lonely in here, what are you up to?</p>
      )}
    </ol>
  )
}
