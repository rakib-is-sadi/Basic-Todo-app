# Basic Todo App

A clean, dark-themed todo app built with React and Tailwind CSS. Your todos stay saved in the browser, even after a refresh.

**🔗 Live demo:** [basic-todo-app-mu.vercel.app](https://basic-todo-app-mu.vercel.app/)

## Features

- Add new todos (empty input is blocked)
- Mark todos as complete or incomplete
- Delete todos
- Newest todos appear at the top
- Friendly empty state when there is nothing to do
- Data persists in `localStorage`, so todos survive a page refresh
- Add with the Enter key or the Add button
- Responsive layout that works on mobile and desktop

## Tech Stack

- [React](https://react.dev/) (hooks: `useState`, `useEffect`)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vite](https://vite.dev/)
- Deployed on [Vercel](https://vercel.com/)

## Project Structure

```
src/
├── App.jsx            # holds the todos state, localStorage logic and handlers
└── components/
    ├── TodoForm.jsx   # input + Add button
    ├── TodoList.jsx   # list of todos and the empty state
    └── TodoItem.jsx   # a single todo (checkbox, text, delete button)
```

The `todos` state lives in `App.jsx` and is passed down to the child components as props.

## Getting Started

```bash
# 1. Clone the repository
git clone https://github.com/rakib-is-sadi/<repo-name>.git

# 2. Go into the project folder
cd <repo-name>

# 3. Install dependencies
npm install

# 4. Start the dev server
npm run dev
```

Then open the local URL shown in your terminal.

## What I Learned

- **Lifting state up:** keeping one source of truth (`todos`) in `App` and sharing it through props.
- **`localStorage` is per origin.** Todos saved on `localhost:5173` do not appear on `localhost:5500`, because each protocol + host + port combination has its own storage.
- **Secure context matters.** `crypto.randomUUID()` only works over HTTPS or `localhost`. Opening the dev server from a phone over a plain HTTP IP address crashed the app. A good reminder to test beyond one device.
- **Lazy state initialisation:** reading `localStorage` inside `useState(() => ...)` so it runs only once.

## Possible Improvements

- Edit existing todos
- Filter: All / Active / Completed
- Remaining tasks counter
- Clear completed todos

## Author

**Sadi** — [GitHub](https://github.com/rakib-is-sadi)
