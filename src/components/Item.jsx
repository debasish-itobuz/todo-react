export default function Item({ item, handleEdit, handleDelete}) {

  return (
    <li className=" flex justify-between mx-auto w-96 border border-gray-400 mt-2">
      <div>
        <p>{item.title}</p>
      </div>
      <div className="flex gap-3">
        <button onClick={() => handleEdit(item.id)}>Edit</button>
        <button onClick={() => handleDelete(item.id)}>Delete</button>
      </div>
    </li>
  )
}