import React from 'react'

const TodoItem = ({ todo, toggleTodo, deleteTodo }) => {
  return (
    <li className="group flex items-center gap-3 rounded-xl border border-slate-700 bg-slate-800/60 px-4 py-3 transition hover:border-indigo-500/50 hover:bg-slate-800">

      <input
        type="checkbox"
        checked={todo.status}
        onChange={() => toggleTodo(todo.id)}
        className="size-5 shrink-0 cursor-pointer accent-indigo-500"
      />


      <span className={`flex-1 min-w-0 wrap-break-word ${todo.status ? "line-through text-slate-500" : "text-slate-200"}`}>
        {todo.task}
      </span>

      <button
        type="button"
        aria-label="Delete todo"
        className="shrink-0 rounded-lg p-2 text-slate-500 transition hover:bg-red-500/10 hover:text-red-400 active:scale-90"
        onClick={() => deleteTodo(todo.id)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="size-5"
        >
          <path d="M3 6h18" />
          <path d="M8 6V4h8v2" />
          <path d="M19 6l-1 14H6L5 6" />
        </svg>
      </button>
    </li>
  )
}

export default TodoItem