import React from "react";
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-dark text-light text-center py-3 mt-auto">
            <div className="container">
                <small>
                    © {currentYear} Peixes Marinhos. Todos os direitos reservados.
                </small>
            </div>
        </footer>
    );
}