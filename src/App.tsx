import { useState } from 'react'
import Card from "./components/Card"

function App() {
  const [count, setCount] = useState(0)
fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => response.json())
  .then((json) => console.log(json));
  return (
    <main className="flex w-screen h-screen justify-center">
      <div className="max-w-7xl">
        <h1 className="text-7xl">Unsplash Gallery</h1>
        <div className="flex">
          <label className="input input-bordered flex items-center gap-2">
            <input type="text" className="grow" placeholder="Search" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
          </label>
          <button className="btn">Button</button>
        </div>
        <div className="flex flex-wrap gap-8">
          <Card
            url="https://images.unsplash.com/photo-1462275646964-a0e3386b89fa?q=80&w=3028&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            title="Hola"
            location="Terrassa"
          ></Card>
          <Card></Card>
          <Card></Card>
        </div>
      </div>
    </main>
  );
}

export default App
