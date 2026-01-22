import React from "react";
import Fuscared from './assets/img/fusca_red.png';

export default function Body() {
    
    return (
        <body>
            <div className="container text-center my-5">
                <div class="row align-items-center">
                    
                    <div className="col">
                        <h2>Meus Carros</h2>
                        <img src={Fuscared} className="img-fluid" alt="react imagem" />
                        
                    </div>
                    <div class="col">
                        <h2>Sua História começa aqui.</h2>
                        <div class="card">
                            <div className="card-body w-100">
                                O primeiro carro que tive foi um fusca 1969 vermelho, que foi comprado com ajuda da minha mãe. Tive esse carro por muitos anos, até que conseguisse juntar dinheiro para comprar o meu segundo carro, um chevete 1979 branco.
                            </div>
                        </div>
                        
                    </div>
                    
                </div>
            </div>
        </body>
    )

}