import { useState } from 'react'
import Board from './components/Board'
import Header from './components/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header title="Gestion de proyectos" />
      <Board />
    </div>
  )
}

export default App
