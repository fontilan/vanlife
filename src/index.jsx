import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './pages/about'
import Footer from './components/footer'
import Home from './pages/home'
import Navbar from './components/navbar'
import Vans from './pages/vans'
import './index.css'

import './server'

function App() {
  return (
    <main className="flex h-screen flex-col bg-orange-50">
      <BrowserRouter>
        {<Navbar />}
        <div className="flex flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/vans" element={<Vans />} />
          </Routes>
        </div>
        {<Footer />}
      </BrowserRouter>
    </main>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
