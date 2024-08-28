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

            
            <section className="pt-20 imagem-texto">
                <img className="size-5/6 hover:scale-110" src={"https://media.discordapp.net/attachments/1262942566370775061/1275829119220711547/UniversalUpscaler_fc4f7347-069b-452e-9ed7-9388e5607214-removebg.png?ex=66cfe1b5&is=66ce9035&hm=fc3413cd8f59e2dd149535e3b532a3b3c7fec769332831a84e19cabacd22312d&=&format=webp&quality=lossless&width=416&height=416"} />
                <div className="texto">
                    <h1 className='text-2xl font-title'>Mas por quê Joana?</h1>
                    <p className='text-justify font-body'>Nossa relação com as joaninhas vai além dos nossos produtos, e elas têm muitas histórias para nos contar. Em muitas culturas, elas carregam consigo a representação de felicidade, amor e harmonia.</p>
                    <p className='text-justify font-body'>As joaninhas são consideradas símbolos de boa sorte, e aqui na Joana sabemos o quanto elas são valiosas para o ecossistema. Com seu apetite voraz, elas controlam pragas e pulgões e também se alimentam de néctar. Suas plantas favoritas são aquelas que retêm água, como alface e couve, além de flores como tulipas e lírios.</p>
                    <p className='text-justify font-body'>Para nós, o formato das joaninhas é fofo e encantador, mas suas cores e formato têm a função de intimidar os predadores, passando a mensagem de que seu gosto é ruim e pode ser tóxico. No entanto, o formato que conhecemos não é o primeiro. A joaninha começa como uma larva e passa por um estágio de metamorfose, semelhante ao das borboletas, para adquirir o formato de besouro. Estando alinhado as nossas diretrizes de produção consciente e sustentável.</p>

                </div>
            </section>


            <section className="pt-20 testimonials-section px-4">
                <h1 className="text-2xl font-title mb-8 text-center">Depoimento dos nossos clientes:</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="testimonial bg-white shadow-md rounded-lg p-6 flex flex-col items-center max-w-md w-full mx-auto hover:scale-105">
                        <img src={'https://thispersonnotexist.org/downloadimage/Ac3RhdGljL3dvbWFuL3NlZWQxNjM0Ni5qcGVn'} className="w-20 h-20 rounded-full mb-4" alt="Foto de Maria S." />
                        <div className="text-center">
                            <p className="text-lg italic mb-4">"Amei a qualidade dos produtos da Joana! Com certeza vou comprar mais vezes."</p>
                            <div className="flex justify-center mb-4">
                                <span className="text-yellow-500 text-lg">⭐</span>
                                <span className="text-yellow-500 text-lg">⭐</span>
                                <span className="text-yellow-500 text-lg">⭐</span>
                                <span className="text-yellow-500 text-lg">⭐</span>
                                <span className="text-yellow-500 text-lg">⭐</span>
                            </div>
                            <span className="block text-right text-sm text-gray-500">- Maria S.</span>
                        </div>
                    </div>
                    <div className="testimonial bg-white shadow-md rounded-lg p-6 flex flex-col items-center max-w-md w-full mx-auto hover:scale-105">
                        <img src={'https://thispersonnotexist.org/downloadimage/Ac3RhdGljL21hbi9zZWVkNTQ4OTguanBlZw=='} className="w-20 h-20 rounded-full mb-4" alt="Foto de João P." />
                        <div className="text-center">
                            <p className="text-lg italic mb-4">"Entrega super rápida e atendimento excelente. Recomendo a todes!"</p>
                            <div className="flex justify-center mb-4">
                                <span className="text-yellow-500 text-lg">⭐</span>
                                <span className="text-yellow-500 text-lg">⭐</span>
                                <span className="text-yellow-500 text-lg">⭐</span>
                                <span className="text-yellow-500 text-lg">⭐</span>
                                <span className="text-yellow-500 text-lg">⭐</span>
                            </div>
                            <span className="block text-right text-sm text-gray-500">- João P.</span>
                        </div>
                    </div>
                    <div className="testimonial bg-white shadow-md rounded-lg p-6 flex flex-col items-center max-w-md w-full mx-auto hover:scale-105">
                        <img src={'https://thispersonnotexist.org/downloadimage/Ac3RhdGljL3dvbWFuL3NlZWQyNjA5OS5qcGVn'} className="w-20 h-20 rounded-full mb-4" alt="Foto de Ana L." />
                        <div className="text-center">
                            <p className="text-lg italic mb-4">"Excelente serviço e produtos de alta qualidade. Voltarei com certeza!"</p>
                            <div className="flex justify-center mb-4">
                                <span className="text-yellow-500 text-lg">⭐</span>
                                <span className="text-yellow-500 text-lg">⭐</span>
                                <span className="text-yellow-500 text-lg">⭐</span>
                                <span className="text-yellow-500 text-lg">⭐</span>
                                <span className="text-yellow-500 text-lg">⭐</span>
                            </div>
                            <span className="block text-right text-sm text-gray-500">- Ana V.</span>
                        </div>
                    </div>
                    <div className="testimonial bg-white shadow-md rounded-lg p-6 flex flex-col items-center max-w-md w-full mx-auto hover:scale-105">
                        <img src={'https://thispersonnotexist.org/downloadimage/Ac3RhdGljL21hbi9zZWVkMzc4Ni5qcGVn'} className="w-20 h-20 rounded-full mb-4" alt="Foto de Carlos M." />
                        <div className="text-center">
                            <p className="text-lg italic mb-4">"Atendimento impecável e entrega rápida. Recomendo!"</p>
                            <div className="flex justify-center mb-4">
                                <span className="text-yellow-500 text-lg">⭐</span>
                                <span className="text-yellow-500 text-lg">⭐</span>
                                <span className="text-yellow-500 text-lg">⭐</span>
                                <span className="text-yellow-500 text-lg">⭐</span>
                                <span className="text-yellow-500 text-lg">⭐</span>
                            </div>
                            <span className="block text-right text-sm text-gray-500">- Carlos M.</span>
                        </div>
                    </div>
                    <div className="testimonial bg-white shadow-md rounded-lg p-6 flex flex-col items-center max-w-md w-full mx-auto hover:scale-105">
                        <img src={'https://thispersonnotexist.org/downloadimage/Ac3RhdGljL3dvbWFuL3NlZWQ0MDU2Ni5qcGVn'} className="w-20 h-20 rounded-full mb-4" alt="Foto de Daniela R." />
                        <div className="text-center">
                            <p className="text-lg italic mb-4">"Produtos maravilhosos! Comprarei novamente."</p>
                            <div className="flex justify-center mb-4">
                                <span className="text-yellow-500 text-lg">⭐</span>
                                <span className="text-yellow-500 text-lg">⭐</span>
                                <span className="text-yellow-500 text-lg">⭐</span>
                                <span className="text-yellow-500 text-lg">⭐</span>
                                <span className="text-yellow-500 text-lg">⭐</span>
                            </div>
                            <span className="block text-right text-sm text-gray-500">- Daniela R.</span>
                        </div>
                    </div>
                    <div className="testimonial bg-white shadow-md rounded-lg p-6 flex flex-col items-center max-w-md w-full mx-auto hover:scale-105">
                        <img src={'https://thispersonnotexist.org/downloadimage/Ac3RhdGljL21hbi9zZWVkMjc0OTkuanBlZw=='} className="w-20 h-20 rounded-full mb-4" alt="Foto de Eduardo F." />
                        <div className="text-center">
                            <p className="text-lg italic mb-4">"Recomendo a todos! Produtos de qualidade e excelente serviço."</p>
                            <div className="flex justify-center mb-4">
                                <span className="text-yellow-500 text-lg">⭐</span>
                                <span className="text-yellow-500 text-lg">⭐</span>
                                <span className="text-yellow-500 text-lg">⭐</span>
                                <span className="text-yellow-500 text-lg">⭐</span>
                                <span className="text-yellow-500 text-lg">⭐</span>
                            </div>
                            <span className="block text-right text-sm text-gray-500">- Eduardo F.</span>
                        </div>
                    </div>
                    <div className="testimonial bg-white shadow-md rounded-lg p-6 flex flex-col items-center max-w-md w-full mx-auto hover:scale-105">
                        <img src={'https://thispersonnotexist.org/downloadimage/Ac3RhdGljL3dvbWFuL3NlZWQ0OTIwOC5qcGVn'} className="w-20 h-20 rounded-full mb-4" alt="Foto de Fernanda G." />
                        <div className="text-center">
                            <p className="text-lg italic mb-4">"Melhor compra que já fiz! Produtos incríveis."</p>
                            <div className="flex justify-center mb-4">
                                <span className="text-yellow-500 text-lg">⭐</span>
                                <span className="text-yellow-500 text-lg">⭐</span>
                                <span className="text-yellow-500 text-lg">⭐</span>
                                <span className="text-yellow-500 text-lg">⭐</span>
                                <span className="text-yellow-500 text-lg">⭐</span>
                            </div>
                            <span className="block text-right text-sm text-gray-500">- Fernanda G.</span>
                        </div>
                    </div>
                    <div className="testimonial bg-white shadow-md rounded-lg p-6 flex flex-col items-center max-w-md w-full mx-auto hover:scale-105">
                        <img src={'https://thispersonnotexist.org/downloadimage/Ac3RhdGljL21hbi9zZWVkMTMwMzguanBlZw=='} className="w-20 h-20 rounded-full mb-4" alt="Foto de Gabriel H." />
                        <div className="text-center">
                            <p className="text-lg italic mb-4">"Qualidade inigualável! Com certeza voltarei a comprar."</p>
                            <div className="flex justify-center mb-4">
                                <span className="text-yellow-500 text-lg">⭐</span>
                                <span className="text-yellow-500 text-lg">⭐</span>
                                <span className="text-yellow-500 text-lg">⭐</span>
                                <span className="text-yellow-500 text-lg">⭐</span>
                                <span className="text-yellow-500 text-lg">⭐</span>
                            </div>
                            <span className="block text-right text-sm text-gray-500">- Gabriel H.</span>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}
