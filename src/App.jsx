import { Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import Books from './routes/Books';
// import { useState } from 'react'
import NotMatch from './routes/NotMatch';
import Layout from './components/Layout';

function App() {
  // const [count, setCount] = useState(0)

  return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="books" element={<Books />} />
          <Route path="*" element={<NotMatch />} />
        </Route>
     </Routes>
  )
}

export default App

