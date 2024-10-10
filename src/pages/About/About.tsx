import React, { useState, useEffect } from 'react';
import { RevolvingDot } from 'react-loader-spinner';
import { motion } from 'framer-motion';
import labout from "./labout.png";

const Sobre = () => {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-stone-50 pt-44">
      {loading ? (
        <div className="flex justify-center items-center min-h-screen">
          <RevolvingDot
            visible={true}
            height="200"
            width="200"
            ariaLabel="circles-loading"
            color="black"
          />
        </div>
      ) : (
        <section className="py-10">
          <div className="container mx-auto">
            <motion.div 
              className="mb-10 bg-red-300 bg-opacity-50 p-8 rounded-xl shadow-lg transition transform hover:scale-105"
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }}
            >
              <h2 className="text-4xl font-bold text-center text-black mb-4">Nossa História</h2>
              <div className="flex flex-col md:flex-row items-center">
              <img
              src={labout}
              alt="arado"
              className="w-full md:w-1/3 mb-4 md:mb-0 md:mr-6 object-cover max-w-xs md:max-w-full"
            />

                <p className="text-lg text-zinc-900 text-justify">
                  O e-commerce "Joana" surgiu da ideia de desenvolvedores que se conheceram em um bootcamp de Java Full Stack. 
                  Trazendo produtos alinhados com o ODS 12, buscamos o uso eficiente de recursos naturais e agregar valor às commodities.
                  <br/><br/>
                  Com o intuito de aumentar a produtividade e reduzir desperdícios, nossa plataforma oferece soluções inovadoras para o agronegócio sustentável.
                </p>
              </div>
            </motion.div>

            <motion.div 
              className="mb-10 bg-red-200 bg-opacity-50 p-8 rounded-xl shadow-lg transition transform hover:scale-105"
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }}
            >
              <h2 className="text-4xl font-bold text-center text-black mb-4">Quem Somos</h2>
              <p className="text-lg text-zinc-900 text-justify">
                Joana é um e-commerce business-to-consumer que oferece produtos diretamente aos consumidores. 
                Focamos na venda e reformulação industrial do agronegócio sustentável brasileiro, minimizando desperdícios na cadeia de produção.
                <br/><br/>
                Nossa missão é contribuir para um futuro mais sustentável, utilizando tecnologias de agricultura regenerativa que promovem a saúde do solo e reduzem o impacto ambiental.
              </p>
            </motion.div>

            <motion.div 
              className="mb-10 bg-red-300 bg-opacity-50 p-8 rounded-xl shadow-lg transition transform hover:scale-105"
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }}
            >
              <h2 className="text-4xl font-bold text-center text-black mb-4">Nossos Objetivos</h2>
              <p className="text-lg text-zinc-900 text-justify">
                Estamos aqui para:
                <ul className="list-disc list-inside ml-4">
                  <li>Monitorar de forma precisa as plantações, identificando precocemente a presença de pragas;</li>
                  <li>Reduzir custos em insumos como fertilizantes e água;</li>
                  <li>Aumentar a produtividade, corrigindo problemas rapidamente;</li>
                  <li>Reduzir impactos ambientais com uma agricultura sustentável;</li>
                  <li>Aumentar a segurança na realização dos processos;</li>
                  <li>Melhorar o controle de produção e qualidade com operações automatizadas.</li>
                </ul>
              </p>
            </motion.div>

            <motion.div 
              className="bg-red-200 bg-opacity-50 p-8 rounded-xl shadow-lg transition transform hover:scale-105"
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }}
            >
              <h2 className="text-4xl font-bold text-center text-black mb-4">Nossos Produtos</h2>
              <p className="text-lg text-zinc-900 text-justify mb-4">
                Oferecemos uma variedade de produtos orgânicos, como soja, feijão, ervilha, açúcar e sementes de girassol. 
                Nossos produtos são cultivados com técnicas que promovem a fixação biológica de nitrogênio, garantindo uma nutrição saudável para as plantas.
              </p>
              <p className="text-lg text-zinc-900 text-justify">
                Trabalhamos com práticas que minimizam a emissão de carbono e utilizamos alternativas naturais para o controle de pragas, como joaninhas.
              </p>
            </motion.div>
          </div>
        </section>
      )}
    </div>
  );
};

export default Sobre;