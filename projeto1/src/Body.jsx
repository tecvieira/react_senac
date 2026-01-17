import React from "react";
import vanderImage from "./assets/img/vander.png";

export default function Body() {
    return (
        <main>
            <img src={vanderImage} alt="Imagem de exemplo" />

            <section>
                <h2>Corpo da página</h2>
                <p>Neste ponto vamos iniciar o desenvolvimento do projeto.</p>
            </section>
            <article>
                <h3>Detalhes do Projeto</h3>
                <p>Este projeto é uma aplicação simples utilizando React.</p>
            </article>
        </main>

    )
}