import React, { useState } from "react";

export function Contato() {
    const [formData, setFormData] = useState({
        nome: '',
        email: '',
        telefone: '',
        mensagem: '',
        solicitarHorario: false,
        dataPreferida: '',
        horarioPreferido: ''
    });

    const [enviado, setEnviado] = useState(false);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aqui você pode implementar o envio para um backend
        console.log('Dados do formulário:', formData);
        setEnviado(true);
        // Reset form
        setFormData({
            nome: '',
            email: '',
            telefone: '',
            mensagem: '',
            solicitarHorario: false,
            dataPreferida: '',
            horarioPreferido: ''
        });
        // Esconder mensagem após 5 segundos
        setTimeout(() => setEnviado(false), 5000);
    };

    return (
        <section className="bg-dark py-5 text-white" id="contatos">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 mx-auto">
                        <div className="text-center mb-5">
                            <h2>Entre em Contato</h2>
                            <p className="lead">Agende seu horário ou tire suas dúvidas</p>
                        </div>

                        {enviado && (
                            <div className="alert alert-success text-center mb-4">
                                <i className="fas fa-check-circle me-2"></i>
                                Mensagem enviada com sucesso! Entraremos em contato em breve.
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="bg-secondary p-4 rounded">
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="nome" className="form-label">Nome *</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="nome"
                                        name="nome"
                                        value={formData.nome}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="email" className="form-label">E-mail *</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="telefone" className="form-label">Telefone *</label>
                                <input
                                    type="tel"
                                    className="form-control"
                                    id="telefone"
                                    name="telefone"
                                    value={formData.telefone}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="mensagem" className="form-label">Mensagem</label>
                                <textarea
                                    className="form-control"
                                    id="mensagem"
                                    name="mensagem"
                                    rows="4"
                                    value={formData.mensagem}
                                    onChange={handleChange}
                                    placeholder="Digite sua mensagem ou dúvida..."
                                ></textarea>
                            </div>

                            <div className="mb-3">
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        id="solicitarHorario"
                                        name="solicitarHorario"
                                        checked={formData.solicitarHorario}
                                        onChange={handleChange}
                                    />
                                    <label className="form-check-label" htmlFor="solicitarHorario">
                                        Solicitar agendamento de horário
                                    </label>
                                </div>
                            </div>

                            {formData.solicitarHorario && (
                                <div className="row">
                                    <div className="col-md-6 mb-3">
                                        <label htmlFor="dataPreferida" className="form-label">Data Preferida</label>
                                        <input
                                            type="date"
                                            className="form-control"
                                            id="dataPreferida"
                                            name="dataPreferida"
                                            value={formData.dataPreferida}
                                            onChange={handleChange}
                                            min={new Date().toISOString().split('T')[0]}
                                        />
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <label htmlFor="horarioPreferido" className="form-label">Horário Preferido</label>
                                        <select
                                            className="form-select"
                                            id="horarioPreferido"
                                            name="horarioPreferido"
                                            value={formData.horarioPreferido}
                                            onChange={handleChange}
                                        >
                                            <option value="">Selecione um horário</option>
                                            <option value="09:00">09:00</option>
                                            <option value="10:00">10:00</option>
                                            <option value="11:00">11:00</option>
                                            <option value="14:00">14:00</option>
                                            <option value="15:00">15:00</option>
                                            <option value="16:00">16:00</option>
                                            <option value="17:00">17:00</option>
                                            <option value="18:00">18:00</option>
                                        </select>
                                    </div>
                                </div>
                            )}

                            <div className="text-center">
                                <button type="submit" className="btn btn-primary btn-lg">
                                    <i className="fas fa-paper-plane me-2"></i>
                                    Enviar Mensagem
                                </button>
                            </div>
                        </form>

                        
                    </div>
                </div>
            </div>
        </section>
    );
}
