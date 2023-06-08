import { Routes, Route } from 'react-router-dom';
// import { useState } from 'react'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="books" element={<Books />} />
    </Routes>
  )
}

export default App
