import { useState } from 'preact/hooks'
import preactLogo from './assets/preact.svg'
import './app.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Button, Container, Alert, Row, Col } from 'react-bootstrap';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './Header.jsx';
import { Body } from './Body.jsx';
import { Body2 } from './Body2.jsx';
import { Sobre } from './Sobre.jsx';
import { Contato } from './Contatos.jsx';
import { Equipe } from './Equipe.jsx';



export function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Header></Header>
      <Body id="home"></Body>
      <Sobre id="sobre"></Sobre>
      <Body2 id="servicos"></Body2>
      <Equipe></Equipe>
      <Contato></Contato>



      <Routes>

      </Routes>


    </BrowserRouter>
  )
}
