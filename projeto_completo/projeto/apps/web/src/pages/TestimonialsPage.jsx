import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

const TestimonialsPage = () => {
  const depoimentos = [
    {
      quote: 'O PIBID mudou completamente a minha visão sobre ser professor. Antes tinha medo de sala de aula — agora me sinto preparado e confiante para ensinar física.',
      name: 'Pibidiano — Edição 2022/2024',
      role: 'Licenciatura em Física · IFRO Campus Calama',
      size: 'large'
    },
    {
      quote: 'As aulas com os pibidianos são as melhores da semana. Eles ensinam de um jeito diferente, com experimentos que a gente pode tocar e ver acontecer.',
      name: 'Aluno da E.E. John Kennedy',
      role: '1º ano do Ensino Médio',
      size: 'normal'
    },
    {
      quote: 'Como supervisora, vejo o crescimento enorme dos bolsistas ao longo do ano. O PIBID prepara professores que a educação pública tanto precisa.',
      name: 'Professora Supervisora',
      role: 'E.E. 4 de Janeiro · Porto Velho',
      size: 'normal'
    },
    {
      quote: 'O foguete de água foi incrível! A gente aprendeu sobre física sem nem perceber que estava aprendendo. Quero fazer Física por causa disso.',
      name: 'Aluna da E.E. 4 de Janeiro',
      role: '2º ano do Ensino Médio',
      size: 'normal'
    },
    {
      quote: 'O PIBID é o programa mais impactante da minha formação. A teoria faz muito mais sentido depois que você aplica em sala de aula de verdade.',
      name: 'Pibidiana — Edição 2020/2022',
      role: 'Licenciatura em Física · IFRO Campus Calama',
      size: 'normal'
    },
    {
      quote: 'Ver um aluno que nunca tinha gostado de física se empolgar com um experimento é a recompensa que justifica todo o esforço do programa.',
      name: 'Coordenador do Subprojeto',
      role: 'PIBID Física · IFRO Campus Calama',
      size: 'large'
    },
    {
      quote: 'O eletroscópio que a gente montou ficou na sala de recursos da escola. Os professores ainda usam ele hoje para explicar eletrostática.',
      name: 'Pibidiano — Edição 2014/2020',
      role: 'Licenciatura em Física · IFRO Campus Calama',
      size: 'normal'
    },
    {
      quote: 'Nunca imaginei que construir uma maquete do Sistema Solar pudesse ensinar proporções e escalas de forma tão eficiente. A interdisciplinaridade do PIBID é única.',
      name: 'Professora de Matemática Parceira',
      role: 'E.E. John Kennedy · Porto Velho',
      size: 'normal'
    }
  ];

  const largeTestimonials = depoimentos.filter(t => t.size === 'large');
  const normalTestimonials = depoimentos.filter(t => t.size === 'normal');

  return (
    <>
      <Helmet>
        <title>Depoimentos — PIBID Física IFRO Campus Calama</title>
        <meta name="description" content="O que dizem pibidianos, alunos, professores e coordenadores sobre o impacto do PIBID Física IFRO Campus Calama no ensino de física em Porto Velho." />
      </Helmet>

      <div className="min-h-screen bg-background text-foreground">
        <Header />

        {/* Hero */}
        <section className="pt-28 pb-16 md:pt-56 md:pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-5xl"
          >
            <h1 className="text-6xl md:text-8xl lg:text-[7rem] font-bold tracking-tight leading-[0.9] mb-8">
              Quem viveu<br />
              <span className="text-primary/80">conta.</span>
            </h1>

            <div className="max-w-2xl">
              <p className="text-2xl md:text-3xl font-serif italic text-muted-foreground leading-relaxed">
                Pibidianos, alunos, professores supervisores e coordenadores compartilham suas experiências com o PIBID Física IFRO.
              </p>
            </div>
          </motion.div>
        </section>

        {/* Depoimentos em Destaque Refatorados */}
        <section className="py-32 border-b border-border bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 relative">
              {/* Linha divisória vertical para simetria no desktop */}
              <div className="hidden lg:block absolute top-0 bottom-0 left-1/2 w-px bg-border/50"></div>
              
              {largeTestimonials.map((dep, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="flex flex-col justify-center text-center px-4"
                >
                  <div className="mb-8">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="mx-auto text-primary/30">
                      <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path>
                      <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"></path>
                    </svg>
                  </div>
                  <blockquote className="text-3xl md:text-4xl font-serif italic tracking-tight leading-relaxed mb-10 text-foreground/90">
                    "{dep.quote}"
                  </blockquote>
                  <div className="mt-auto">
                    <div className="w-12 h-px bg-primary/20 mx-auto mb-4"></div>
                    <div className="font-bold uppercase tracking-widest text-sm mb-1">{dep.name}</div>
                    <div className="text-xs text-muted-foreground">{dep.role}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Grade de Depoimentos */}
        <section className="py-32 bg-muted/20 border-y border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-20"
            >
              <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">Mais vozes</h2>
              <p className="text-xl text-muted-foreground max-w-2xl">
                O impacto do PIBID vai além da sala de aula — transforma trajetórias de vida.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
              {normalTestimonials.map((dep, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: (index % 3) * 0.1 }}
                  className="flex flex-col h-full"
                >
                  <blockquote className="text-lg md:text-xl font-serif italic leading-relaxed mb-8 text-foreground/80 flex-grow">
                    "{dep.quote}"
                  </blockquote>
                  <div className="border-t border-border/60 pt-6 mt-auto">
                    <div className="font-bold text-xs uppercase tracking-widest mb-1 text-foreground">{dep.name}</div>
                    <div className="text-muted-foreground text-sm">{dep.role}</div>
                  </div>
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
            <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">Escreva sua história.</h2>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-12">
              O PIBID Física IFRO está formando a próxima geração de professores. Você pode ser um deles.
            </p>
            <a
              href="mailto:pibidfisicaifro@gmail.com"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-12 py-5 text-lg font-semibold hover:bg-primary/90 transition-all duration-200 shadow-editorial"
            >
              Entre em contato
            </a>
          </motion.div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default TestimonialsPage;