import React from "react";

const sobreInfo = {
    titulo: "Sobre a Corte no Grau RJ",
    historia: "Fundada em 2020, a Corte no Grau RJ nasceu da paixão por transformar o visual masculino em uma experiência única. Localizada no coração do Rio de Janeiro, nossa barbearia combina tradição e modernidade para oferecer cortes que refletem a essência carioca.",
    missao: "Nossa missão é proporcionar não apenas cortes impecáveis, mas momentos de relaxamento e bem-estar. Acreditamos que um bom corte vai além da aparência - é sobre confiança, estilo e atitude.",
    valores: [
        "Excelência em cada corte",
        "Atendimento personalizado",
        "Ambiente acolhedor",
        "Produtos de qualidade",
        "Compromisso com a satisfação do cliente"
    ],
    equipe: "Nossa equipe é formada por profissionais experientes e apaixonados pelo que fazem. Cada barbeiro traz sua expertise única, garantindo que você receba o melhor atendimento possível."
};

export function Sobre() {
    return (
        <section className="bg-dark py-5 text-white">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 mx-auto text-center">
                        <h2 className="mb-4">{sobreInfo.titulo}</h2>
                        <p className="lead mb-4">{sobreInfo.historia}</p>
                        <p className="mb-4">{sobreInfo.missao}</p>

                        <div className="row">
                            <div className="col-md-6">
                                <h4 className="mb-3">Nossos Valores</h4>
                                <ul className="list-unstyled">
                                    {sobreInfo.valores.map((valor, index) => (
                                        <li key={index} className="mb-2">
                                            <i className="fas fa-check text-success me-2"></i>
                                            {valor}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="col-md-6">
                                <h4 className="mb-3">Nossa Equipe</h4>
                                <p>{sobreInfo.equipe}</p>
                                <div className="mt-4">
                                    <button className="btn btn-outline-light">Conheça Nossa Equipe</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}