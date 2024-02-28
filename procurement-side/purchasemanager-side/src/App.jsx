import React from 'react'
import Supplier from './pages/Supplier'
import './App.css'
import Dashboard from './pages/Dashboard'
import ProductReq from './pages/ProductReq'
import PurchaseOrder from './pages/PurchaseOrder'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/Dashboard" element={<Dashboard />} />

          <Route path="/Supplier" element={<Supplier />} />
          <Route path="/ProductReq" element={<ProductReq />} />
          <Route path="/PurchaseOrder" element={<PurchaseOrder />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
