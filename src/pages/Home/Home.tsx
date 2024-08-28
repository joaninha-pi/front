import { useEffect, useState } from 'react';
import { Circles } from 'react-loader-spinner';
import "./Home.css";
import Carrossel from '../../components/carrossel/Carrossel';
export default function Home() {

    return (
        <div className="home-container">

            <section className="carousel-section">
                <Carrossel />
            </section>

            {/* Seção de Destaques */}
            <section className="highlights-section">
                <div className="highlight">
                    <h2 className='font-title'>Novidades</h2>
                    <br></br>
                    <p>Descubra os últimos lançamentos na Joana. Produtos exclusivos e estilos únicos para você.</p>
                </div>
                <div className="highlight">
                    <h2 className='font-title'>Promoções Imperdíveis</h2>
                    <br></br>
                    <p>Descontos de até 50% em itens selecionados. Não perca essa oportunidade!</p>
                </div>
                <div className="highlight">
                    <h2 className='font-title'>Entrega Rápida na região da Capital</h2>
                    <br></br>
                    <p>Receba seu pedido em casa com toda a comodidade. </p>
                    <p>Frete grátis nas compras acima de R$150.</p>
                </div>
            </section>

            {/* Imagem e texto central */}
            <section className="pt-20 imagem-texto">
                <img className="size-5/6 hover:scale-110" src={"https://media.discordapp.net/attachments/1262942566370775061/1275829119220711547/UniversalUpscaler_fc4f7347-069b-452e-9ed7-9388e5607214-removebg.png?ex=66cfe1b5&is=66ce9035&hm=fc3413cd8f59e2dd149535e3b532a3b3c7fec769332831a84e19cabacd22312d&=&format=webp&quality=lossless&width=416&height=416"} />
                <div className="texto">
                    <h1 className='text-2xl font-title'>Mas por quê Joana?</h1>
                    <p className='text-justify font-body'>Nossa relação com as joaninhas vai além dos nossos produtos, e elas têm muitas histórias para nos contar. Em muitas culturas, elas carregam consigo a representação de felicidade, amor e harmonia.</p>
                    <p className='text-justify font-body'>As joaninhas são consideradas símbolos de boa sorte, e aqui na Joana sabemos o quanto elas são valiosas para o ecossistema. Com seu apetite voraz, elas controlam pragas e pulgões e também se alimentam de néctar. Suas plantas favoritas são aquelas que retêm água, como alface e couve, além de flores como tulipas e lírios.</p>
                    <p className='text-justify font-body'>Para nós, o formato das joaninhas é fofo e encantador, mas suas cores e formato têm a função de intimidar os predadores, passando a mensagem de que seu gosto é ruim e pode ser tóxico. No entanto, o formato que conhecemos não é o primeiro. A joaninha começa como uma larva e passa por um estágio de metamorfose, semelhante ao das borboletas, para adquirir o formato de besouro. Estando alinhado as nossas diretrizes de produção consciente e sustentável.</p>

                </div>
            </section>


            <section className="pt-20 testimonials-section">
                <h1 className="text-2xl font-title mb-8 text-center">Depoimento dos nossos clientes:</h1>
                <div className="space-y-6 flex flex-col items-center">
                    <div className="testimonial bg-white shadow-md rounded-lg p-6 flex items-center max-w-md w-full">
                        <img src='https://thispersonnotexist.org/downloadimage/Ac3RhdGljL3dvbWFuL3NlZWQxNjM0Ni5qcGVn' className="w-20 h-20 rounded-full mb-4" alt="Foto de Maria S." />
                        <div className="ml-4">
                            <p className="text-lg italic mb-4">"Amei a qualidade dos produtos da Joana! Com certeza vou comprar mais vezes."</p>
                            <span className="block text-right text-sm text-gray-500">- Maria S.</span>
                        </div>
                    </div>
                    <div className="testimonial bg-white shadow-md rounded-lg p-6 flex items-center max-w-md w-full">
                        <img src='https://thispersonnotexist.org/downloadimage/Ac3RhdGljL21hbi9zZWVkNTQ4OTguanBlZw==' className="w-20 h-20 rounded-full mb-4" alt="Foto de João P." />
                        <div className="ml-4">
                            <p className="text-lg italic mb-4">"Entrega super rápida e atendimento excelente. Recomendo a todes!"</p>
                            <span className="block text-right text-sm text-gray-500">- João P.</span>
                        </div>
                    </div>
                </div>
            </section>



        </div>
    );
}
