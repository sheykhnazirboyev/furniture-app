import React from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import GeneraLayout from './components/generaLayout'

function App() {
  return (
    <BrowserRouter>
      <React.Suspense fallback={<div>Loading....</div>}>
        <Routes>
          <Route path='/' element={<GeneraLayout />}>
            <Route index element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/checkout' element={<Checkout />} />
            <Route path='/products/:productId' element={<SingleProduct />} />
          </Route>
          <Route path='/login' element={<Login />} />
        </Routes>
      </React.Suspense>
    </BrowserRouter>
  )
}

export default App
