import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight, FlaskConical, Rocket, Users, BookOpen } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const atividades = [
    {
      title: 'Experimentos de Física',
      description: 'Eletroscópios, termologia, refração da luz e circuitos elétricos construídos pelos pibidianos nas escolas parceiras.',
      icon: FlaskConical,
      link: '/services'
    },
    {
      title: 'Lançamento de Foguetes',
      description: 'Atividade prática de propulsão com foguetes de água que une física, matemática e entusiasmo científico nos alunos.',
      icon: Rocket,
      link: '/services'
    },
    {
      title: 'Formação de Professores',
      description: 'Desenvolvimento profissional de licenciandos em Física, preparando-os para a sala de aula com supervisão de professores experientes.',
      icon: BookOpen,
      link: '/about'
    }
  ];

  const numeros = [
    { metric: '3', label: 'Edições do programa' },
    { metric: '2', label: 'Escolas parceiras' },
    { metric: '10+', label: 'Anos de atuação' },
    { metric: '100+', label: 'Bolsistas formados' },
  ];

  const etapas = [
    {
      number: '01',
      title: 'Planejamento',
      description: 'Os pibidianos, junto aos supervisores, planejam as atividades considerando o currículo escolar e as necessidades dos alunos.'
    },
    {
      number: '02',
      title: 'Desenvolvimento',
      description: 'Criação de experimentos, materiais didáticos e atividades práticas que tornam a física acessível e divertida.'
    },
    {
      number: '03',
      title: 'Aplicação em Sala',
      description: 'Execução das atividades nas escolas parceiras, com acompanhamento dos professores supervisores.'
    },
    {
      number: '04',
      title: 'Reflexão e Registro',
      description: 'Análise dos resultados, relatórios de aprendizagem e publicação dos trabalhos em eventos científicos.'
    }
  ];

  const edicoes = [
    {
      title: 'Edição 2022–2024',
      category: 'Escolas John Kennedy & 4 de Janeiro',
      image: 'https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?w=800',
      slug: '/portfolio'
    },
    {
      title: 'Edição 2020–2022',
      category: 'Adaptação ao Ensino Remoto',
      image: 'https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?w=800',
      slug: '/portfolio'
    },
    {
      title: 'Edição 2014–2020',
      category: 'A Jornada que Começou Tudo',
      image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800',
      slug: '/portfolio'
    }
  ];

  const parceiros = [
    'CAPES', 'IFRO', 'Campus Calama', 'E.E. John Kennedy', 'E.E. 4 de Janeiro',
    'Licenciatura em Física', 'ASCOM/IFRO', 'Educação Básica'
  ];

  const news = [
    {
      title: 'PIBID Física marca presença no V ENLIC com 15 trabalhos aprovados',
      date: '12 de Nov, 2023',
      category: 'Eventos',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800',
      slug: '/noticias/enlic-2023',
    },
    {
      title: 'Feira de Ciências da E.E. John Kennedy reúne mais de 300 alunos',
      date: '05 de Out, 2023',
      category: 'Escolas',
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800',
      slug: '/noticias/feira-de-ciencias-john-kennedy',
    }
  ];

  return (
    <>
      <Helmet>
        <title>PIBID Física IFRO — Iniciação à Docência em Física no Campus Calama</title>
        <meta name="description" content="O PIBID Física do IFRO Campus Calama conecta futuros professores com alunos da educação básica, promovendo experimentos e atividades inovadoras de ensino de física." />
      </Helmet>

      <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
        <Header />

        {/* Hero Section */}
        <section className="relative pt-40 pb-24 md:pt-56 md:pb-32 overflow-hidden bg-grid-pattern">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background pointer-events-none z-0"></div>
          <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="max-w-6xl"
            >
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-none mb-12 text-balance">
                Aperfeiçoando a<br />
                formação docente<br />
                <span className="text-primary">na educação básica.</span>
              </h1>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-20 border-t border-border pt-12">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  O PIBID Física do IFRO forma professores comprometidos com a educação pública, levando experimentos, foguetes e descobertas científicas para escolas de Porto Velho.
                </p>
                <div className="flex flex-col items-start md:items-end justify-center">
                  <Button
                    asChild
                    size="lg"
                    className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200 active:scale-[0.98] text-lg px-10 py-8 shadow-editorial"
                  >
                    <Link to="/about">Conheça o Programa</Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>



        {/* Números */}
        <section className="py-24 bg-muted/30 border-y border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8">
              {numeros.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex flex-col"
                >
                  <div className="text-5xl md:text-6xl font-serif text-foreground font-bold tracking-tight mb-4" style={{ fontVariantNumeric: 'tabular-nums' }}>
                    {item.metric}
                  </div>
                  <div className="text-sm font-medium text-muted-foreground uppercase tracking-widest">{item.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Atividades */}
        <section className="py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-4"
            >
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 sticky top-32">
                O que fazemos
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Atividades práticas e experimentais desenvolvidas pelos pibidianos nas escolas públicas de Porto Velho, conectando teoria e prática no ensino de física.
              </p>
            </motion.div>

            <div className="lg:col-span-8 flex flex-col gap-12">
              {atividades.map((atividade, index) => {
                const Icon = atividade.icon;
                return (
                  <motion.div
                    key={atividade.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group flex flex-col md:flex-row gap-8 items-start border-t border-border pt-12"
                  >
                    <div className="text-primary/60 animate-float">
                      <Icon className="w-8 h-8" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-3xl font-bold tracking-tight mb-4 group-hover:text-primary transition-colors duration-300">
                        {atividade.title}
                      </h3>
                      <p className="text-lg text-muted-foreground leading-relaxed mb-6 max-w-xl">
                        {atividade.description}
                      </p>
                      <Link
                        to={atividade.link}
                        className="inline-flex items-center gap-2 font-medium uppercase tracking-widest text-sm hover:gap-4 transition-all duration-300 text-primary"
                      >
                        Saiba mais <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Edições em Destaque */}
        <section className="py-32 bg-muted/20 overflow-hidden border-t border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8"
            >
              <div>
                <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">Nossas edições</h2>
                <p className="text-xl text-muted-foreground max-w-xl">
                  Uma década de atuação transformando o ensino de física nas escolas públicas de Porto Velho.
                </p>
              </div>
              <Button
                asChild
                variant="outline"
                className="border-foreground text-foreground hover:bg-foreground hover:text-background transition-all duration-300 px-8 py-6 text-base"
              >
                <Link to="/portfolio">
                  Ver todas as edições
                  <ArrowUpRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {edicoes.map((edicao, index) => (
                <motion.div
                  key={edicao.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: index * 0.2 }}
                >
                  <Link to={edicao.slug} className="block group">
                    <div className="transition-all duration-500 transform group-hover:rotate-0 group-hover:-translate-y-4">
                      <div className="editorial-frame">
                        <img
                          src={edicao.image}
                          alt={`${edicao.title} — PIBID Física IFRO`}
                          className="w-full h-[400px] object-cover group-hover:scale-105 transition-all duration-500"
                        />
                      </div>
                    </div>
                    <div className="mt-8 text-center md:text-left">
                      <div className="text-sm font-bold tracking-widest uppercase text-muted-foreground mb-3">
                        {edicao.category}
                      </div>
                      <h3 className="text-2xl font-bold tracking-tight">
                        {edicao.title}
                      </h3>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Depoimento */}
        <section className="py-40 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-primary mb-12">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mx-auto opacity-30"><path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path><path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"></path></svg>
            </div>
            <blockquote className="text-2xl md:text-4xl font-serif italic leading-relaxed mb-12 text-foreground/80">
              "O PIBID mudou a minha relação com a física. Ver os alunos se empolgando com os experimentos é a maior recompensa que um futuro professor pode ter."
            </blockquote>
            <div>
              <div className="font-bold uppercase tracking-widest mb-1">Pibidiano — Edição 2022/2024</div>
              <div className="text-muted-foreground text-sm">Licenciatura em Física · IFRO Campus Calama</div>
            </div>
          </motion.div>
        </section>

        {/* Como funciona */}
        <section className="py-32 bg-foreground text-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-20"
            >
              <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">Como funciona</h2>
              <p className="text-xl text-background/70 max-w-2xl">
                Da universidade à sala de aula — um processo de aprendizagem contínua para pibidianos e alunos.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
              {etapas.map((item, index) => (
                <motion.div
                  key={item.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="border-t border-background/20 pt-8"
                >
                  <div className="text-sm font-bold tracking-widest text-background/50 mb-6">{item.number}</div>
                  <h3 className="text-2xl font-bold tracking-tight mb-4">{item.title}</h3>
                  <p className="text-background/70 leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Últimas Notícias */}
        <section className="py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8"
            >
              <div>
                <div className="text-primary font-bold tracking-widest uppercase text-xs mb-4 flex items-center gap-4">
                  <span className="w-8 h-px bg-primary"></span>
                  BLOG & EVENTOS
                </div>
                <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">Mural de Notícias</h2>
                <p className="text-xl text-muted-foreground max-w-xl">
                  Acompanhe as últimas publicações, eventos e novidades do programa PIBID Física.
                </p>
              </div>
              <Button
                asChild
                variant="outline"
                className="border-foreground text-foreground hover:bg-foreground hover:text-background transition-all duration-300 px-8 py-6 text-base"
              >
                <Link to="/noticias">
                  Ver todas as notícias
                  <ArrowUpRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {news.map((item, index) => (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="group flex flex-col md:flex-row gap-8 border border-border p-6 hover:shadow-md transition-all bg-background"
                >
                  <div className="w-full md:w-48 h-48 shrink-0 overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-col justify-center">
                    <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-muted-foreground mb-3">
                      <span className="text-primary">{item.category}</span>
                      <span>{item.date}</span>
                    </div>
                    <h3 className="text-2xl font-bold tracking-tight mb-4 group-hover:text-primary transition-colors">
                      <Link to={item.slug}>{item.title}</Link>
                    </h3>
                    <Link 
                      to={item.slug} 
                      className="inline-flex items-center gap-2 font-medium text-sm text-foreground hover:text-primary transition-colors group-hover:gap-4 mt-auto"
                    >
                      Ler artigo <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </motion.article>
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
            <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">Quer saber mais?</h2>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-12">
              Entre em contato com a equipe do PIBID Física IFRO Campus Calama e descubra como o programa transforma a formação docente e o ensino de física.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200 active:scale-[0.98] px-12 py-8 text-lg shadow-editorial inline-flex"
            >
              <a href="mailto:pibidfisicaifro@gmail.com">Fale com a equipe</a>
            </Button>
          </motion.div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default HomePage;