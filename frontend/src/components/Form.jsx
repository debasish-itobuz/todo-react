import axios from "axios";
import { useRef } from "react";
export default function Form({ todos, setTodos, editTask, setEditTask, deleteTask, setNewTask }) {
    const inputRef = useRef()  // to acess the input value

    async function createData(input){
        const response = await axios({method:"post", url:"http://localhost:8000/todo/post", data:{title:input}})
        // console.log(response)
        if(response.status === 200)  setNewTask(input)
    }

    async function updateData(input, id){
        const response = await axios({method:"put", url:`http://localhost:8000/todo/update/?id=${id}`, data:{title:input}})
        console.log(response)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const value = inputRef.current.value.trim();
        console.log(value)

        //edit task
        // if (editTask) {
        //     const updatedData = [...todos] // as todos data is immutable
        //     const index = updatedData.findIndex((item) => item.id === editTask.id)
        //     // updatedData[index].title = value;
        //     value === '' ? '' : updatedData[index].title = value
        //     setTodos(updatedData)
        //     console.log(todos)
        //     setEditTask(null)
        // }

        if(editTask ){
            console.log(editTask)
            if(inputRef.current.value.trim()) updateData(inputRef.current.value.trim(), editTask._id);
            setEditTask(null)
        }

        //new task
        // else if (value)
        //     setTodos((prevTodos) => [...prevTodos, { title: value, id: self.crypto.randomUUID(), is_completed: false },]);
        // inputRef.current.value = '';

        else if (value){
            createData(inputRef.current.value.trim());   
        }
            
        inputRef.current.value = '';
    }

    //edit todo title
    if (editTask) {
        inputRef.current.value = editTask.title;
    }
    if(deleteTask && deleteTask === editTask?._id)
        inputRef.current.value = '';

    return (
        <form className="flex justify-between border w-96 mx-auto mt-2 rounded-sm" onSubmit={handleSubmit}>
            <input ref={inputRef} type="text" name="todo" id="todo" placeholder="Write your task .." className="border border-indigo-200 rounded-sm p-3 focus:outline-none w-80" />
            <button className="bg-green-600 p-1 px-4 rounded-sm text-3xl">+</button>
        </form>
    )
}
