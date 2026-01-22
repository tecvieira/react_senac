import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Header.jsx';
import Body from './Body.jsx';
import Footer from './Footer.jsx';
import Sobre from './Sobre.jsx';
function App() {
  const [count, setCount] = useState(0)

  return (

    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/sobre" element={<Sobre />} />
      </Routes>

      <Footer />
    </BrowserRouter>
    
    
  )
}

export default App
