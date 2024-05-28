import { useState } from 'react'
import Card from "./components/Card"

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className="flex w-screen h-screen justify-center">
      <div className="max-w-7xl">
        <h1 className="text-7xl">Unsplash Gallery</h1>
        <div className="flex flex-wrap gap-8">
          <Card></Card>
          <Card></Card>
          <Card></Card>
        </div>
      </div>
    </main>
  );
}

export default App
