import { useRef } from "react";
export default function Form({ setTodos }) {
    const inputRef = useRef()
    const handleSubmit = (e) => {
        e.preventDefault();
        const value = inputRef.current.value.trim();
        console.log(value)
        if(value)
            setTodos((prevTodos) => [...prevTodos, { title: value, id: self.crypto.randomUUID(), is_completed: false },
        ]);
        // e.target.reset();
        inputRef.current.value='';
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
