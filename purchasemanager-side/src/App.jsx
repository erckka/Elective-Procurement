import React from 'react'
import Supplier from './pages/Supplier'
import './App.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Supplier />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
