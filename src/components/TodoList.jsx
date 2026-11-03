import React from 'react'
import TodoItem from './TodoItem'

const TodoList = ({ todos, toggleTodo, deleteTodo }) => {
  return (
    <div>
      {todos.length ?
        (<ul className="space-y-3">
          {todos.map(todo => <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />)}
        </ul>) :
        (<div className="flex flex-col items-center justify-center rounded-xl border-2 border-dashed border-slate-700 px-4 py-10 text-center">
          <span className="text-4xl">📝</span>
          <p className="mt-3 font-medium text-slate-300">
            কোনো কাজ নেই
          </p>
          <p className="mt-1 text-sm text-slate-500">
            উপরে নতুন একটা কাজ যোগ করো
          </p>
        </div>)
      }
    </div>
  )
}

export default TodoList