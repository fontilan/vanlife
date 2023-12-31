import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './pages/about'
import Home from './pages/home'
import Vans from './pages/vans'
import VanDetail from './pages/vanDetail'
import Footer from './components/footer'
import Navbar from './components/navbar'
import './server'
import './index.css'

function App() {
  return (
    <main className="flex min-h-screen flex-col bg-orange-50">
      <BrowserRouter>
        {<Navbar />}
        <div className="flex flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/vans" element={<Vans />} />
            <Route path="/vans/:id" element={<VanDetail />} />
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
