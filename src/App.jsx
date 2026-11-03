import { useEffect, useState } from 'react'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'

const App = () => {

  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem("todos")
    return saved ? JSON.parse(saved) : []
  })

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])


  function toggleTodo(id) {
    setTodos(prev => prev.map(todo => {
      if (todo.id === id) {
        return { ...todo, status: !todo.status }
      }

      return todo
    }))
  }

  function deleteTodo(id) {
    setTodos(prev => prev.filter(todo => todo.id !== id))
  }



  return (
    <div className="min-h-screen bg-linear-to-br from-slate-950 via-slate-900 to-indigo-950 flex items-start justify-center px-4 py-10 sm:py-16">
      <div className="w-full max-w-md rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-2xl shadow-black/40 sm:p-8">

        <header className="mb-6 text-center">
          <h1 className="text-3xl font-bold text-slate-100">
            My Todos
          </h1>
          <p className="mt-1 text-sm text-slate-400">
            আজকের কাজগুলো গুছিয়ে রাখো
          </p>
        </header>

        <section className="mb-6">
          <TodoForm setTodos={setTodos} />
        </section>

        <section>
          <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
        </section>

      </div>
    </div>
  )
}

export default App