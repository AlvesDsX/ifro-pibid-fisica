import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { FlaskConical, Rocket, Zap, Magnet, Sun, Waves, Calculator, Microscope } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import { Button } from '@/components/ui/button';
import { Link, useLocation } from 'react-router-dom';

const ServicesPage = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const timer = setTimeout(() => {
        const element = document.getElementById(location.state.scrollTo);
        if (element) {
          const yOffset = -100;
          const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
          const headline = element.querySelector('h2');
          if (headline) {
            headline.style.transition = 'color 0.5s ease-in-out';
            headline.classList.add('text-primary');
            setTimeout(() => {
              headline.classList.remove('text-primary');
              headline.style.transition = '';
            }, 2000);
          }
        }
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [location.state]);

  const atividades = [
    {
      id: 'eletroscopio-service',
      icon: Zap,
      title: 'Eletroscópio Caseiro',
      description: 'Construção de eletroscópios com materiais simples para demonstrar eletrização por atrito, indução e contato. Os alunos compreendem a eletrostática de forma visual e prática.',
      image: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af?w=800',
      destaque: [
        'Conceitos de carga elétrica',
        'Eletrização por diferentes métodos',
        'Indução eletrostática',
        'Materiais condutores e isolantes'
      ]
    },
    {
      id: 'foguetes-service',
      icon: Rocket,
      title: 'Foguetes de Propulsão de Água',
      description: 'Um dos experimentos mais populares do PIBID: foguetes artesanais lançados com bomba de ar e água. Une física, matemática e muito entusiasmo nos alunos.',
      image: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=800',
      destaque: [
        'Leis de Newton aplicadas',
        'Princípio da reação',
        'Pressão e propulsão',
        'Cálculo de trajetória'
      ]
    },
    {
      id: 'termologia-service',
      icon: FlaskConical,
      title: 'Experimentos de Termologia',
      description: 'Experimentos sobre calor, temperatura, condução térmica e dilatação. Os alunos manipulam termômetros, calorímetros e materiais do cotidiano para entender os fenômenos térmicos.',
      image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800',
      destaque: [
        'Condução, convecção e irradiação',
        'Dilatação de sólidos e líquidos',
        'Calorimetria básica',
        'Isolamento térmico'
      ]
    },
    {
      id: 'refracão-service',
      icon: Sun,
      title: 'Refração da Luz',
      description: 'Atividades práticas com prismas, copos de água e lasers de baixa potência para demonstrar a refração, reflexão total e o espectro visível da luz.',
      image: 'https://images.unsplash.com/photo-1564769662533-4f00a87b4056?w=800',
      destaque: [
        'Lei de Snell-Descartes',
        'Índice de refração',
        'Reflexão total interna',
        'Dispersão da luz branca'
      ]
    },
    {
      id: 'circuitos-service',
      icon: Magnet,
      title: 'Circuitos Elétricos',
      description: 'Montagem de circuitos em série e paralelo com LEDs, resistores e pilhas. Os alunos aprendem a ler esquemas elétricos e a medir tensão e corrente com multímetros.',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800',
      destaque: [
        'Circuitos em série e paralelo',
        'Lei de Ohm na prática',
        'Uso do multímetro',
        'Potência elétrica'
      ]
    },
    {
      id: 'sistema-solar-service',
      icon: Waves,
      title: 'Maquete do Sistema Solar',
      description: 'Construção de maquetes em escala aproximada do Sistema Solar, integrando física, astronomia e artes. Projeto interdisciplinar que desperta o interesse pela ciência espacial.',
      image: 'https://images.unsplash.com/photo-1614728263952-84ea256f9d6d?w=800',
      destaque: [
        'Escalas e proporções',
        'Gravitação universal',
        'Movimentos planetários',
        'Integração interdisciplinar'
      ]
    },
    {
      id: 'eletiva-service',
      icon: Calculator,
      title: 'Aulas Eletivas de Física',
      description: 'Disciplinas eletivas ministradas pelos pibidianos em parceria com os supervisores, aprofundando temas de física experimental com turmas que demonstram interesse.',
      image: 'https://images.unsplash.com/photo-1509228627152-72ae9ae6848d?w=800',
      destaque: [
        'Física experimental avançada',
        'Projetos de iniciação científica',
        'Olimpíadas de física',
        'Feiras de ciências'
      ]
    },
    {
      id: 'relatorios-service',
      icon: Microscope,
      title: 'Publicações e Eventos Científicos',
      description: 'Os pibidianos registram suas experiências em relatórios, artigos e apresentam os trabalhos em eventos como o ENLIC, fortalecendo a cultura científica no IFRO.',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800',
      destaque: [
        'Relatórios de atividades',
        'Artigos para eventos científicos',
        'ENLIC — Encontro de Licenciaturas',
        'Portfólio docente'
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Atividades — PIBID Física IFRO Campus Calama</title>
        <meta name="description" content="Conheça as atividades desenvolvidas pelo PIBID Física IFRO: foguetes de água, eletroscópios, termologia, circuitos elétricos, refração da luz e muito mais." />
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
              Física na<br />
              <span className="text-primary/80">Prática</span>
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mt-20 border-t border-border pt-12">
              <div className="md:col-span-8 md:col-start-5">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Experimentos, oficinas e projetos desenvolvidos pelos pibidianos nas escolas parceiras de Porto Velho — onde a física deixa de ser abstrata e passa a fazer sentido.
                </p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Grade de Atividades */}
        <section className="py-24 bg-muted/20 border-y border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              {atividades.map((atividade, index) => (
                <motion.div
                  key={atividade.title}
                  id={atividade.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: (index % 2) * 0.1 }}
                  className="bg-card p-8 md:p-12 border border-border flex flex-col h-full shadow-sm hover:shadow-editorial transition-all duration-300 scroll-mt-24"
                >
                  <div className="editorial-frame mb-10 overflow-hidden">
                    <img
                      src={atividade.image}
                      alt={atividade.title}
                      className="w-full h-48 object-cover hover:scale-105 transition-all duration-500"
                    />
                  </div>

                  <div className="flex items-center gap-4 mb-6">
                    <atividade.icon className="w-8 h-8 text-primary" strokeWidth={1.5} />
                    <h2 className="text-3xl font-bold tracking-tight">{atividade.title}</h2>
                  </div>

                  <p className="text-lg text-muted-foreground leading-relaxed mb-10">
                    {atividade.description}
                  </p>

                  <div className="border-t border-border pt-8 mt-auto">
                    <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-6">Conteúdos abordados</div>
                    <ul className="space-y-4">
                      {atividade.destaque.map((item) => (
                        <li key={item} className="flex items-start gap-4">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2.5 flex-shrink-0"></span>
                          <span className="text-foreground font-medium">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mt-32 text-center"
            >
              <h3 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">Quer levar o PIBID para sua escola?</h3>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
                Entre em contato com a equipe do PIBID Física IFRO Campus Calama e descubra como podemos trabalhar juntos.
              </p>
              <Button
                asChild
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200 active:scale-[0.98] px-12 py-8 text-lg shadow-editorial"
              >
                <a href="mailto:pibidfisicaifro@gmail.com">Fale conosco</a>
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Abordagem */}
        <section className="py-40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-24"
            >
              <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">Nossa abordagem</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Da teoria ao experimento — como o PIBID transforma conceitos em vivências.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-24 text-left">
              {[
                {
                  number: '01',
                  title: 'Planejamento colaborativo',
                  description: 'Pibidianos e supervisores planejam as atividades juntos, alinhando os experimentos ao currículo e às necessidades de cada turma.'
                },
                {
                  number: '02',
                  title: 'Experimentação em sala',
                  description: 'Os experimentos são realizados com materiais acessíveis, garantindo que possam ser replicados pelos próprios professores futuramente.'
                },
                {
                  number: '03',
                  title: 'Registro e publicação',
                  description: 'Os resultados são registrados em relatórios e apresentados em eventos científicos, contribuindo para a pesquisa em ensino de física.'
                }
              ].map((etapa, index) => (
                <motion.div
                  key={etapa.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="border-t-2 border-primary pt-8"
                >
                  <div className="text-sm font-bold tracking-widest text-muted-foreground mb-6">{etapa.number}</div>
                  <h3 className="text-2xl font-bold tracking-tight mb-4">{etapa.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{etapa.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default ServicesPage;