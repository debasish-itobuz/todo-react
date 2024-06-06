import { useRef } from "react";
export default function Form({ todos, setTodos, editTask, setEditTask }) {
    const inputRef = useRef()  // to acess the input value
    const handleSubmit = (e) => {
        e.preventDefault();
        const value = inputRef.current.value.trim();
        console.log(value)

        //edit task
        if (editTask && value) {
            const updatedData = [...todos] // as todos data is immutable
            const index = updatedData.findIndex((item) => item.id === editTask.id)
            updatedData[index].title = value;
            setTodos(updatedData)
            setEditTask(null)
        }

        //new task
        else if (value)
            setTodos((prevTodos) => [...prevTodos, { title: value, id: self.crypto.randomUUID(), is_completed: false },
            ]);
        inputRef.current.value = '';
    }

    //edit todo title
    if (editTask) {
        inputRef.current.value = editTask.title;
    }
    return (
        <form className="flex justify-center items-center gap-3 mt-8" onSubmit={handleSubmit}>
            <label>
                <input ref={inputRef} type="text" name="todo" id="todo" placeholder="Write your task .." className="border border-indigo-200 rounded-sm p-2 focus:outline-none" />
            </label>
            <button className="bg-green-600 p-1 px-2 rounded-sm text-3xl">+</button>
        </form>
    )
}
