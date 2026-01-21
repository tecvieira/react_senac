import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import FotoPalhaco from './assets/img/palhaco1.jpg'
import FotoDonzela from './assets/img/donzela2.png'
import FotoAnthia from './assets/img/anthias.png'
import FotoParu from './assets/img/paru.png'

export default function Body() { 

    return (
        <main>
            <section>
                <div class="card mb-3">
                    <img src={FotoPalhaco} class="card-img-top" alt="peixe palhaço"/>
                        <div class="card-body">
                            <h5 class="card-title">Peixe Palhaço</h5>
                            <h6 class="card-title">Amphirion Ocellaris</h6>
                        <p class="card-text">O "queridinho" dos aquários marinhos, conhecido mundialmente por sua coloração vibrante e comportamento único.

                            Dificuldade: Fácil (Ideal para iniciantes).

                            Comportamento: Pacífico, mas territorial com outros da mesma espécie.

                            Simbiose: Famoso por sua relação mutualística com anêmonas, onde encontra proteção em troca de limpeza e restos de comida.

                            Curiosidade: São hermafroditas sequenciais; em um grupo, o maior e mais dominante indivíduo torna-se a fêmea.</p>
                            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                </div>
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Donzela de Cauda Amarela</h5>
                        <h6 class="card-title">Chrysiptera parasema</h6>
                        <p class="card-text">Este pequeno e vibrante peixe é um dos mais populares entre os entusiastas de aquários marinhos, conhecido por sua impressionante coloração azul-elétrica que contrasta lindamente com sua cauda amarela brilhante.

                            Habitat Natural: Encontrado em recifes de coral do Indo-Pacífico, onde busca abrigo entre as rochas e corais.

                            Comportamento: É uma espécie ativa e resiliente, geralmente pacífica com peixes maiores, mas pode ser territorial com outros damselfish ou peixes de tamanho e formato semelhantes.

                            Dieta: Onívoro, alimentando-se de pequenos invertebrados e algas na natureza. Em aquário, aceita uma variedade de alimentos, incluindo flocos, pellets e alimentos congelados.

                            Manutenção em Aquário: Devido ao seu tamanho pequeno (atinge cerca de 7 cm) e robustez, é uma excelente escolha para aquaristas iniciantes. Requer um aquário com bastante esconderijos</p>
                        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                    <img src={FotoDonzela} class="card-img-bottom img-card" alt="..."/>
                </div>
            </section>
            {/* fim do primeiro bloco */}
            <section>
                <div class="card mb-3">
                    <img src={FotoAnthia} class="card-img-top" alt="peixe palhaço" />
                    <div class="card-body">
                        <h5 class="card-title">Anthias-Dourado</h5>
                        <h6 class="card-title">Pseudanthias/Anthias</h6>
                        <p class="card-text">Peixe marinho de recifes tropicais, conhecido por suas cores vibrantes em tons de laranja e amarelo, com detalhes arroxeados na região da cabeça. Vive associado a recifes de coral, onde nada entre as formações em busca de pequenos organismos. É uma espécie ativa, colorida e importante para o equilíbrio do ecossistema recifal.</p>
                        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Peixe-frade</h5>
                        <h6 class="card-title">Pomacanthus paru</h6>
                        <p class="card-text">O peixe-frade é uma espécie marinha típica de recifes tropicais do Atlântico Ocidental. Possui corpo escuro com faixas claras verticais e pode atingir grande porte. Vive próximo a recifes e costões rochosos, alimentando-se principalmente de esponjas e algas. É uma espécie importante para a manutenção do equilíbrio dos recifes de coral.</p>
                        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                    <img src={FotoParu} class="card-img-bottom img-card" alt="..." />
                </div>
            </section>
        </main>
    )
}