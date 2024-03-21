import React from 'react'
import Layout from './global/Layout'
import Supplier from './pages/Supplier'
import './App.css'
import Dashboard from './pages/Dashboard'
import ProductReq from './pages/ProductReq'
import ProductStatus from './pages/ProductStatus'

import PurchaseOrder from './pages/PurchaseOrder'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Supplier" element={<Supplier />} />
          <Route path="/ProductReq" element={<ProductReq />} />
          <Route path="/ProductStatus" element={<ProductStatus />} />
          <Route path="/PurchaseOrder" element={<PurchaseOrder />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
