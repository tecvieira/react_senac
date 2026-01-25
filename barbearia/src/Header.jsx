import React from "react";
import { Navbar, Container, Nav } from 'react-bootstrap';

export function Header() {
    return (
        <header>
            <Navbar bg="dark" variant="dark" expand="lg" className="py-3">
                <Container>
                    <Navbar.Brand href="#home" className="fw-bold fs-3 text-warning">
                        <i className="fas fa-cut me-2"></i>
                        Corte no Grau RJ
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#servicos">Serviços</Nav.Link>
                            <Nav.Link href="#sobre">Sobre</Nav.Link>
                            <Nav.Link href="#contatos">Contato</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
}