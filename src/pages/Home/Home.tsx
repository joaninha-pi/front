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
                <img src="https://media.discordapp.net/attachments/1262942566370775061/1275829119220711547/UniversalUpscaler_fc4f7347-069b-452e-9ed7-9388e5607214-removebg.png?ex=66cde775&is=66cc95f5&hm=97aba6e960dbd4f3a20a276bc51d1fc55b3ed1e32fa42e2f1d5c3b5ed974e38e&=&format=webp&quality=lossless&width=416&height=416" />
                <div className="texto">
                    <h1>Mas por quê Joana?</h1>
                    <p>Nossa relação com as joaninhas vão para além dos nossos produtos e elas tem muitas histórias para nos contar. Em muitas culturas elas carregam consigo a representação de felicidade, amor e harmonia.</p>
                    <p>Joaninhas são consideradas como símbolo de boa sorte e aqui na Joana sabemos o quanto ela é valiosa para o ecossistema. Com o seu apetite voraz ela faz o controle de pragas e pulgões e também se alimentam de néctar.
                        Suas plantas favoritas são as que retêm água como alfaces, couve e flores como tulipas e lírios.</p>
                    <p>Para nós o formato das joaninhas são fofos e encantadores mas seu formato e cores têm a função de intimidar os predadores passando uma mensagem que seu gosto é ruim e pode ser tóxica.
                        Contudo o formato como a conhecemos não é o primeiro, ela é uma larva que passa por um estágio de metamorfose como as borboletas para assim ter esse formato de besouro.</p>
                    <p>Estando alinhado as nossas diretrizes de produção consciente e sustentável.</p>
                </div>
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
