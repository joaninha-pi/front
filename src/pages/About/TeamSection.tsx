import React from "react";
import labout from "./labout.png";

const TeamSection = () => {
  return (
    <section className="py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-4">
          <div className="bg-red-300 bg-opacity-30 p-6 md:p-10 rounded shadow flex flex-col md:flex-row items-center">
            <img
              src={labout}
              alt="arado"
              className="w-full md:w-1/3 mb-4 md:mb-0 md:mr-6 object-cover max-w-xs md:max-w-full hover:scale-110 transition-transform duration-300 ease-in-out"
            />
            <div>
              <h2 className="text-2xl md:text-2xl font-title font-semibold mt-4 md:mt-8 mb-4 md:mb-6">
                Nossa história
              </h2>
              <p className="text-base md:text-lg text-justify font-body text-zinc-900">
              O e-commerce Joana, que tem suas inspirações iniciais no papel das joaninhas na agricultura, surgiu da ideia de desenvolvedores que se conheceram em um bootcamp de Java Full Stack. O projeto traz produtos alinhados ao ODS 12, promovendo o uso eficiente e a reutilização de recursos naturais, além de agregar valor às commodities.
              </p>
              <br />
              <h2 className="text-2xl md:text-2xl font-title font-semibold mt-4 mb-4 md:mb-8">
                Quem somos
              </h2>
              <p className="text-base md:text-lg text-justify font-body text-zinc-900">
              Joana é um e-commerce business-to-consumer que oferece produtos diretamente aos consumidores, com foco na venda e reformulação industrial do agronegócio sustentável brasileiro. Trabalhamos para minimizar desperdícios na cadeia de produção e fabricação dos nossos produtos, que utilizam tecnologias de agricultura regenerativa Com o intuito de aumentar a produtividade, podendo contribuir
              para processos mais assertivos como:
              </p>
              <br />
              <ul className="list-disc font-body pl-5">
                <li>
                  Monitoramento mais preciso das plantações, identificando
                  precocemente a presença de pragas;
                </li>
                <li>
                  Redução de custos em insumos, como fertilizantes e
                  água;
                </li>
                <li>
                  Aumento da produtividade, corrigindo problemas mais
                  rapidamente e agilizando os processos;
                </li>
                <li>
                  Redução dos impactos ambientais, com uma agricultura mais
                  sustentável que escoa menos produtos químicos em rios;
                </li>
                <li>
                  Aumento da segurança, proporcionando mais segurança na
                  realização dos processos e reduzindo as falhas;
                </li>
                <li>
                  Melhor controle de produção e qualidade, com operações
                  automatizadas;
                </li>
              </ul>
              <br />
              <p className="text-base md:text-lg font-body text-justify text-zinc-900">
              Somos fornecedores de produtos orgânicos, como soja, feijão, ervilha, açúcar, sementes de girassol, café e outros. Nossos produtos são ricos em fixação biológica de nitrogênio para a nutrição das plantas e incluem soluções agrícolas com baixa emissão de carbono, tratamento de dejetos animais como fertilizantes, adubos naturais e controle de pragas. Utilizamos alternativas com menor impacto, como joaninhas para o controle de pragas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
