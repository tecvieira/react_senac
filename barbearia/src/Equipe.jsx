import React from "react";

const equipe = [
    {
        id: 1,
        nome: "Robson",
        cargo: "Barbeiro Principal",
        descricao: "Com mais de 10 anos de experiência, Robson é o criador da Corte no Grau RJ. Sua paixão pelo corte de cabelo e barba é o que torna cada cliente especial."
    },
    {
        id: 2,
        nome: "Carlos",
        cargo: "Barbeiro",
        descricao: "Carlos é um dos barbeiros mais experientes da equipe. Ele se especializou em cortes clássicos e modernos, sempre buscando a perfeição."
    },
    {
        id: 3,
        nome: "Pedro",
        cargo: "Barbeiro",
        descricao: "Pedro traz uma abordagem criativa e inovadora para cada corte. Ele é conhecido por seus cortes únicos e detalhados. Também é especialista em tratamentos de barba e pele."
    }
];

export function Equipe() {
    return (
        <section className="bg-dark py-5 text-white">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 mx-auto text-center">
                        <h2 className="mb-4">Nossa Equipe</h2>
                        <p className="lead mb-4">Conheça os profissionais que fazem a diferença na Corte no Grau RJ.</p>

                        <div className="row g-4">
                            {equipe.map(member => (
                                <div key={member.id} className="col-md-4">
                                    <div className="card bg-secondary text-white h-100">
                                        <div className="card-body">
                                            <h5 className="card-title">{member.nome}</h5>
                                            <p className="card-text">{member.cargo}</p>
                                            <p>{member.descricao}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}