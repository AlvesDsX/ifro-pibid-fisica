import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import { Link } from 'react-router-dom';

const PortfolioPage = () => {
  const edicoes = [
    {
      slug: '/portfolio',
      title: 'Edição 2022–2024',
      category: 'Escolas John Kennedy & 4 de Janeiro',
      year: '2022–2024',
      image: 'https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?w=1200',
      description: 'A edição mais recente marcou o retorno às atividades presenciais com grande energia. Foguetes de água, eletroscópios, circuitos elétricos e maquetes do Sistema Solar foram realizados com alunos das Escolas John Kennedy e 4 de Janeiro.',
      destaques: ['Lançamento de foguetes de propulsão de água', 'Eletroscópios e eletrização', 'Refração da luz e circuitos elétricos', 'Maquete do Sistema Solar', 'Aulas eletivas de física']
    },
    {
      slug: '/portfolio',
      title: 'Edição 2020–2022',
      category: 'Adaptação ao Ensino Remoto',
      year: '2020–2022',
      image: 'https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?w=1200',
      description: 'Durante a pandemia de COVID-19, o PIBID se reinventou. As atividades migraram para o ambiente digital com aulas via Google Meet, materiais interativos e a participação no II ENLIC — Encontro de Licenciaturas do IFRO.',
      destaques: ['Aulas remotas via Google Meet', 'Materiais didáticos digitais', 'Participação no II ENLIC', 'Vídeos experimentais gravados em casa', 'Adaptação curricular para o ensino híbrido']
    },
    {
      slug: '/portfolio',
      title: 'Edição 2014–2020',
      category: 'A Jornada que Começou Tudo',
      year: '2014–2020',
      image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=1200',
      description: 'A edição inaugural do PIBID Física no IFRO Campus Calama. Durante seis anos, o programa consolidou sua metodologia, formou dezenas de professores e construiu uma parceria sólida com as escolas públicas de Porto Velho.',
      destaques: ['Primeiros experimentos nas escolas', 'Formação da metodologia PIBID-Física', 'Publicações em eventos nacionais', 'Parcerias com escolas municipais e estaduais', 'Blog oficial do subprojeto']
    }
  ];

  return (
    <>
      <Helmet>
        <title>Edições — PIBID Física IFRO Campus Calama</title>
        <meta name="description" content="Conheça todas as edições do PIBID Física IFRO Campus Calama: 2014-2020, 2020-2022 e 2022-2024. Uma década de transformação no ensino de física em Porto Velho." />
      </Helmet>

      <div className="min-h-screen bg-background text-foreground">
        <Header />

        {/* Hero */}
        <section className="pt-40 pb-24 md:pt-56 md:pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-5xl"
          >
            <h1 className="text-6xl md:text-8xl lg:text-[7rem] font-bold tracking-tight leading-[0.9] mb-12">
              Uma década<br />
              de <span className="text-primary/80">física.</span>
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mt-20 border-t border-border pt-12">
              <div className="md:col-span-8 md:col-start-5">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Três edições, dois anos de pandemia, centenas de experimentos e muitos futuros professores formados. Esta é a história do PIBID Física IFRO Campus Calama.
                </p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Edições */}
        <section className="py-24 bg-muted/20 border-y border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-0">
              {edicoes.map((edicao, index) => (
                <motion.div
                  key={edicao.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: index * 0.1 }}
                  className="group border-t border-border py-16 md:py-24"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
                    {/* Texto */}
                    <div className="lg:col-span-5 order-2 lg:order-1">
                      <div className="text-sm font-bold tracking-widest uppercase text-primary mb-4">
                        {edicao.year}
                      </div>
                      <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 group-hover:text-primary transition-colors duration-300">
                        {edicao.title}
                      </h2>
                      <div className="text-sm font-medium uppercase tracking-widest text-muted-foreground mb-8">
                        {edicao.category}
                      </div>
                      <p className="text-lg text-muted-foreground leading-relaxed mb-10">
                        {edicao.description}
                      </p>
                      <div className="space-y-3 mb-10">
                        {edicao.destaques.map((item) => (
                          <div key={item} className="flex items-start gap-3">
                            <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                            <span className="text-sm font-medium text-foreground">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Imagem */}
                    <div className="lg:col-span-7 order-1 lg:order-2">
                      <div className="editorial-frame overflow-hidden transform group-hover:-translate-y-2 transition-transform duration-500">
                        <img
                          src={edicao.image}
                          alt={`${edicao.title} — PIBID Física IFRO`}
                          className="w-full h-[400px] md:h-[500px] object-cover group-hover:scale-105 transition-all duration-700"
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-40 bg-foreground text-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-20"
            >
              <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">Nossa timeline</h2>
              <p className="text-xl text-background/70 max-w-2xl">
                Marcos importantes da trajetória do PIBID Física IFRO ao longo dos anos.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
              {[
                { ano: '2014', evento: 'Início do PIBID Física no IFRO Campus Calama — primeiros pibidianos e primeiras escolas parceiras.' },
                { ano: '2020', evento: 'Pandemia de COVID-19 — o PIBID se adapta ao ensino remoto e participa do II ENLIC online.' },
                { ano: '2022', evento: 'Retorno presencial com nova edição — foguetes de água e experimentos marcam o reencontro com as escolas.' },
                { ano: '2024', evento: 'Mais de uma década de história — publicações, formações e um legado de ensino de física de qualidade.' }
              ].map((marco, index) => (
                <motion.div
                  key={marco.ano}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="border-t border-background/20 pt-8"
                >
                  <div className="text-4xl font-serif font-bold text-primary mb-6">{marco.ano}</div>
                  <p className="text-background/70 leading-relaxed">{marco.evento}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-40 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">Faça parte da história.</h2>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-12">
              O PIBID Física IFRO segue escrevendo novas páginas. Entre em contato e descubra como participar.
            </p>
            <a
              href="mailto:pibidfisicaifro@gmail.com"
              className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-12 py-5 text-lg font-semibold hover:bg-primary/90 transition-all duration-200 shadow-editorial"
            >
              pibidfisicaifro@gmail.com
              <ArrowUpRight className="w-5 h-5" />
            </a>
          </motion.div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default PortfolioPage;