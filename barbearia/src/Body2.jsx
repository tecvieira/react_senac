import React from "react";
import Cortes from './assets/img/cortes1.png'
import Beleza from './assets/img/beleza1.png'
import BarGrau from './assets/img/barNoGrau.png'

const servicos = [
    {
        id: 1,
        titulo: "O Brabo tem Nome: Corte no Grau",
        descricao: "Não é só um corte, é o seu cartão de visita. Do degradê navalhado à risca perfeita, aqui a gente domina as tendências que dominam as ruas do Rio. Quer sair com a autoestima lá no alto e o visual impecável? Vem dar aquele grau com quem entende de verdade.",
        imagem: Cortes,
        alt: "Cortes Modernos"
    },
    {
        id: 2,
        titulo: "Mais que Visual, sua Melhor Versão",
        descricao: "Na Corte no Grau RJ, acreditamos que a beleza é o resultado de um homem relaxado. Aqui, o cuidado é o complemento de um momento só seu. Cadeira confortável, massagem capilar de primeira e aquele clima de resenha que te faz esquecer da vida lá fora. Saia com o visual impecável e a mente renovada.",
        imagem: Beleza,
        alt: "Tratamento de Beleza"
    },
    {
        id: 3,
        titulo: "Onde o Estilo Encontra a Calmaria",
        descricao: "Esqueça a correria. Aqui o 'grau' vem acompanhado de uma cerveja gelada e um ambiente pensado para o seu descanso. Do tratamento facial ao corte moderno, cada detalhe é feito para você se sentir bem. Estar bonito é apenas o começo; sair relaxado é o nosso compromisso.",
        imagem: BarGrau,
        alt: "Bar no Grau"
    }
];

export function Body2() {
    return (
        <section className="bg-dark py-5">
            <div className="container">
                <div className="row g-4">
                    {servicos.map(servico => (
                        <div key={servico.id} className="col-lg-4 col-md-6">
                            <div className="card bg-secondary text-white h-100">
                                <img src={servico.imagem} className="card-img-top" alt={servico.alt} />
                                <div className="card-body">
                                    <h5 className="card-title">{servico.titulo}</h5>
                                    <p className="card-text">{servico.descricao}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}