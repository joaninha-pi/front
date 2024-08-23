import { useEffect, useState } from 'react';
import { Circles } from 'react-loader-spinner';
import "./Home.css";
import Carrossel from '../../components/carrossel/Carrossel';
export default function Home() {

    return (
        <div className="home-container">
            {/* Carrossel de Imagens */}
            <section className="carousel-section">
                <Carrossel />
            </section>

            {/* Seção de Destaques */}
            <section className="highlights-section">
                <div className="highlight">
                    <h2>Novidades</h2>
                    <br></br>
                    <p>Descubra os últimos lançamentos na Joana. Produtos exclusivos e estilos únicos para você.</p>
                </div>
                <div className="highlight">
                    <h2>Promoções Imperdíveis</h2>
                    <br></br>
                    <p>Descontos de até 50% em itens selecionados. Não perca essa oportunidade!</p>
                </div>
                <div className="highlight">
                    <h2>Entrega Rápida na região da Capital</h2>
                    <br></br>
                    <p>Receba seu pedido em casa com toda a comodidade. </p>
                    <p>Frete grátis nas compras acima de R$150.</p>
                </div>
            </section>

            {/* Imagem e texto central */}
            <section className="imagem-texto">
                <img src="https://cdn.discordapp.com/attachments/1262942566370775061/1275829119220711547/UniversalUpscaler_fc4f7347-069b-452e-9ed7-9388e5607214-removebg.png?ex=66c94a35&is=66c7f8b5&hm=2e72df36cbee4ed7bc1f99ec7902c50b9d2d44aea3b0e912de478a8d1f2cb4d0&" alt="Imagem da joaninha" />
                <span>O motivo do logo ser a Joaninha</span>
                <p>aaaaaaa</p>
            </section>

            {/* Seção de Depoimentos */}
            <section className="testimonials-section">
                <h1>Depoimento dos nossos clientes:</h1>
                <div className="testimonial">
                    <p>"Amei a qualidade dos produtos da Joana! Com certeza vou comprar mais vezes."</p>
                    <span>- Maria S.</span>
                </div>
                <div className="testimonial">
                    <p>"Entrega super rápida e atendimento excelente. Recomendo a tods!"</p>
                    <span>- João P.</span>
                </div>
            </section>
        </div>
    );
}
