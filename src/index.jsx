import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './pages/about'
import Home from './pages/home'
import Vans from './pages/vans'
import VanDetail from './pages/vanDetail'
import Footer from './components/footer'
import Header from './components/header'
import './server'
import './index.css'

function App() {
  return (
    <main className="flex min-h-screen flex-col bg-orange-50">
      <BrowserRouter>
        {<Header />}
          <Routes className="flex flex-grow">
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/vans" element={<Vans />} />
            <Route path="/vans/:id" element={<VanDetail />} />
          </Routes>
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
