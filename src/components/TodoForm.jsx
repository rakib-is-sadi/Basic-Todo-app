import React, { useState } from 'react'

const TodoForm = ({ setTodos }) => {

  const [task, setTask] = useState("")

  function addTodo(e) {
    e.preventDefault()
    if (!task.trim()) return

    setTodos(prev => [{ task: task, id: Date.now(), status: false }, ...prev])
    setTask("")
  }


  return (
    <form className="flex items-center gap-2" onSubmit={addTodo}>
      <input
        type="text"
        placeholder="নতুন কাজ লেখো..."
        className="flex-1 min-w-0 rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-slate-100 placeholder:text-slate-500 outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/20"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button
        type="submit"
        className="shrink-0 rounded-xl bg-indigo-500 px-5 py-3 font-medium text-white shadow-lg shadow-indigo-500/20 transition hover:bg-indigo-400 active:scale-95"
      >
        Add
      </button>
    </form>
  )
}

export default TodoForm