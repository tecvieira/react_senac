import React from "react";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-dark text-white py-5 mt-5">
            <div className="container">
                <div className="row">
                    {/* Informações da Barbearia */}
                    <div className="col-lg-4 col-md-6 mb-4">
                        <h5 className="mb-3">Corte no Grau RJ</h5>
                        <p className="mb-3">
                            A melhor barbearia do Rio de Janeiro, especializada em cortes modernos
                            e atendimento personalizado. Sua confiança é o nosso maior grau.
                        </p>
                        <div className="d-flex">
                            <a href="#" className="text-white me-3" aria-label="Facebook">
                                <i className="fab fa-facebook-f fa-lg"></i>
                            </a>
                            <a href="#" className="text-white me-3" aria-label="Instagram">
                                <i className="fab fa-instagram fa-lg"></i>
                            </a>
                            <a href="#" className="text-white me-3" aria-label="WhatsApp">
                                <i className="fab fa-whatsapp fa-lg"></i>
                            </a>
                            <a href="#" className="text-white" aria-label="TikTok">
                                <i className="fab fa-tiktok fa-lg"></i>
                            </a>
                        </div>
                    </div>

                    {/* Links Rápidos */}
                    <div className="col-lg-2 col-md-6 mb-4">
                        <h5 className="mb-3">Links Rápidos</h5>
                        <ul className="list-unstyled">
                            <li className="mb-2">
                                <a href="#home" className="text-white text-decoration-none">Home</a>
                            </li>
                            <li className="mb-2">
                                <a href="#servicos" className="text-white text-decoration-none">Serviços</a>
                            </li>
                            <li className="mb-2">
                                <a href="#sobre" className="text-white text-decoration-none">Sobre</a>
                            </li>
                            <li className="mb-2">
                                <a href="#contatos" className="text-white text-decoration-none">Contato</a>
                            </li>
                        </ul>
                    </div>

                    {/* Horário de Funcionamento */}
                    <div className="col-lg-3 col-md-6 mb-4">
                        <h5 className="mb-3">Horário de Funcionamento</h5>
                        <ul className="list-unstyled">
                            <li className="mb-2">
                                <strong>Segunda - Sexta:</strong><br />
                                09:00 - 19:00
                            </li>
                            <li className="mb-2">
                                <strong>Sábado:</strong><br />
                                08:00 - 17:00
                            </li>
                            <li className="mb-2">
                                <strong>Domingo:</strong><br />
                                Fechado
                            </li>
                        </ul>
                    </div>

                    {/* Informações de Contato */}
                    <div className="col-lg-3 col-md-6 mb-4">
                        <h5 className="mb-3">Contato</h5>
                        <ul className="list-unstyled">
                            <li className="mb-2">
                                <i className="fas fa-map-marker-alt me-2"></i>
                                Rio de Janeiro, RJ<br />
                                <small className="text-muted">Copacabana</small>
                            </li>
                            <li className="mb-2">
                                <i className="fas fa-phone me-2"></i>
                                (21) 99999-9999
                            </li>
                            <li className="mb-2">
                                <i className="fas fa-envelope me-2"></i>
                                contato@cortenograu.rj
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Linha Divisória */}
                <hr className="my-4" />

                {/* Copyright e Informações Legais */}
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <p className="mb-0">
                            &copy; {currentYear} Corte no Grau RJ. Todos os direitos reservados.
                        </p>
                    </div>
                    <div className="col-md-6 text-md-end">
                        <small className="text-muted">
                            Desenvolvido com <i className="fas fa-heart text-danger"></i> para o Rio
                        </small>
                    </div>
                </div>
            </div>
        </footer>
    );
}
