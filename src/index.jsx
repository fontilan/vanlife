import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './pages/about';
import Home from './pages/home';
import Navbar from './components/navbar';
import './index.css';

function App() {
  return (
    <main className="bg-orange-100 h-screen flex flex-col">
      <BrowserRouter>
        {<Navbar />}
        <div className="flex flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </BrowserRouter>
    </main>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
