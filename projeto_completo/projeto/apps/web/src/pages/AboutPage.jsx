import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Target, Users, Lightbulb, GraduationCap } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  const valores = [
    {
      icon: Target,
      title: 'Compromisso com a educação pública',
      description: 'Acreditamos que todo estudante merece um ensino de física de qualidade. O PIBID leva experimentação e inovação para escolas públicas de Porto Velho.'
    },
    {
      icon: Lightbulb,
      title: 'Aprendizagem pela prática',
      description: 'Experimentos reais, foguetes de água, eletroscópios e circuitos elétricos: a física sai do quadro-negro e entra na mão dos alunos.'
    },
    {
      icon: GraduationCap,
      title: 'Formação docente de excelência',
      description: 'Os pibidianos vivenciam a realidade escolar antes de se formarem, desenvolvendo habilidades práticas essenciais para a carreira docente.'
    },
    {
      icon: Users,
      title: 'Trabalho colaborativo',
      description: 'Coordenadores, supervisores e pibidianos atuam juntos, criando uma rede de suporte e troca de experiências entre a universidade e a escola.'
    }
  ];

  const equipe = [
    { name: 'Coordenador(a)', role: 'Coordenação Institucional', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400', rotation: '-rotate-2', mt: 'mt-0' },
    { name: 'Supervisor(a)', role: 'E.E. John Kennedy', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400', rotation: 'rotate-3', mt: 'mt-12' },
    { name: 'Supervisor(a)', role: 'E.E. 4 de Janeiro', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400', rotation: '-rotate-1', mt: 'mt-4' },
    { name: 'Pibidiano(a)', role: 'Bolsista de Iniciação', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400', rotation: 'rotate-2', mt: 'mt-16' },
    { name: 'Pibidiano(a)', role: 'Bolsista de Iniciação', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400', rotation: '-rotate-2', mt: 'mt-8 md:hidden lg:block' }
  ];

  const stats = [
    { value: '3', label: 'Edições realizadas' },
    { value: '2', label: 'Escolas parceiras' },
    { value: '10+', label: 'Anos de atuação' },
    { value: '100+', label: 'Bolsistas formados' }
  ];

  const escolasParceiras = [
    {
      name: 'E.E.E.F.M. John Kennedy',
      address: 'Bairro São João Bosco, Porto Velho - RO',
      pibidianos: '12 Bolsistas',
      status: 'Ativa (Edição 2022-2024)',
      image: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?w=800',
    },
    {
      name: 'E.E.E.F.M. 4 de Janeiro',
      address: 'Bairro Flodoaldo Pontes Pinto, Porto Velho - RO',
      pibidianos: '12 Bolsistas',
      status: 'Ativa (Edição 2022-2024)',
      image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800',
    }
  ];

  return (
    <>
      <Helmet>
        <title>O Programa — PIBID Física IFRO Campus Calama</title>
        <meta name="description" content="Conheça o PIBID Física do IFRO Campus Calama: nossa missão, equipe, valores e como transformamos o ensino de física nas escolas públicas de Porto Velho." />
      </Helmet>

      <div className="min-h-screen bg-background text-foreground">
        <Header />

        {/* Intro */}
        <section className="pt-28 pb-16 md:pt-56 md:pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-5xl"
          >
            <h1 className="text-6xl md:text-8xl lg:text-[7rem] font-bold tracking-tight leading-[0.9] mb-12">
              Física que<br />
              <span className="text-primary/80">transforma.</span>
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mt-20 border-t border-border pt-12">
              <div className="md:col-span-8 md:col-start-5">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  O Programa Institucional de Bolsa de Iniciação à Docência (PIBID) conecta licenciandos em Física do IFRO Campus Calama com alunos de escolas públicas de Porto Velho, transformando a formação docente e o ensino de ciências.
                </p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Foto */}
        <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="editorial-frame mx-auto max-w-5xl transform -rotate-1 hover:rotate-0 transition-transform duration-700"
          >
            <img
              src="https://images.unsplash.com/photo-1582719508461-905c673771fd?w=1200"
              alt="Pibidianos e alunos realizando experimentos de física em escola pública"
              className="w-full h-[400px] md:h-[600px] object-cover"
            />
          </motion.div>
        </section>

        {/* O que é o PIBID */}
        <section className="py-32 bg-muted/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-6 flex flex-col justify-center"
              >
                <div className="text-primary font-bold tracking-widest uppercase text-xs mb-4 flex items-center gap-4">
                  <span className="w-8 h-px bg-primary"></span>
                  NOSSA MISSÃO
                </div>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">
                  O que é o PIBID?
                </h2>
                <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    O PIBID é uma política pública do Ministério da Educação, financiada pela CAPES, que concede bolsas a estudantes de licenciatura para atuarem em escolas da rede pública.
                  </p>
                  <p>
                    No IFRO Campus Calama, o subprojeto de Física desenvolve atividades experimentais, oficinas temáticas e projetos científicos que aproximam a física do cotidiano dos alunos.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-6"
              >
                <div className="space-y-12">
                  <div className="border-l-2 border-primary pl-8">
                    <div className="text-sm font-medium tracking-[0.2em] text-primary/80 mb-3">01</div>
                    <h3 className="text-2xl font-bold tracking-tight mb-3">Para os pibidianos</h3>
                    <p className="text-muted-foreground leading-relaxed">Vivência real em sala de aula durante a graduação, com supervisão de professores experientes e apoio de coordenadores do IFRO.</p>
                  </div>
                  <div className="border-l-2 border-border pl-8">
                    <div className="text-sm font-medium tracking-[0.2em] text-primary/80 mb-3">02</div>
                    <h3 className="text-2xl font-bold tracking-tight mb-3">Para os alunos da escola</h3>
                    <p className="text-muted-foreground leading-relaxed">Experimentos práticos, aulas dinâmicas e contato com estudantes universitários que servem de referência e inspiração acadêmica.</p>
                  </div>
                  <div className="border-l-2 border-border pl-8">
                    <div className="text-sm font-medium tracking-[0.2em] text-primary/80 mb-3">03</div>
                    <h3 className="text-2xl font-bold tracking-tight mb-3">Para a educação pública</h3>
                    <p className="text-muted-foreground leading-relaxed">Fortalecimento do ensino de física nas escolas parceiras, com materiais e metodologias inovadoras desenvolvidas em parceria com o IFRO.</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Valores */}
        <section className="py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-20"
            >
              <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">Nossos valores</h2>
              <p className="text-xl text-muted-foreground max-w-2xl">
                Quatro princípios que guiam cada atividade e cada decisão do PIBID Física IFRO.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24">
              {valores.map((valor, index) => (
                <motion.div
                  key={valor.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="w-12 h-12 flex items-center justify-center mb-8 border border-border bg-background">
                    <valor.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold tracking-tight mb-4">{valor.title}</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">{valor.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Equipe */}
        <section className="py-32 bg-muted/20 border-y border-border overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-24"
            >
              <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">Nossa equipe</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Coordenadores, supervisores e pibidianos que constroem juntos uma educação científica mais acessível.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8 justify-center">
              {equipe.map((membro, index) => (
                <motion.div
                  key={`${membro.role}-${index}`}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`text-center ${membro.mt}`}
                >
                  <div className={`transform ${membro.rotation} hover:rotate-0 transition-transform duration-500 mb-8`}>
                    <div className="editorial-frame aspect-[3/4] bg-background">
                      <img
                        src={membro.image}
                        alt={membro.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <h3 className="font-bold text-lg mb-1">{membro.name}</h3>
                  <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">{membro.role}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Escolas Parceiras */}
        <section className="py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-20 text-center flex flex-col items-center"
            >
              <div className="text-primary font-bold tracking-widest uppercase text-xs mb-4 flex items-center gap-4">
                <span className="w-8 h-px bg-primary"></span>
                ONDE ATUAMOS
                <span className="w-8 h-px bg-primary"></span>
              </div>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">Escolas Parceiras</h2>
              <p className="text-xl text-muted-foreground max-w-2xl">
                Onde a teoria encontra a prática. Conheça as escolas da rede pública de Porto Velho que recebem os projetos do PIBID.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {escolasParceiras.map((escola, index) => (
                <motion.div
                  key={escola.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="group relative"
                >
                  <div className="editorial-frame p-6 lg:p-8 flex flex-col md:flex-row gap-8 items-center bg-background border border-border shadow-sm hover:shadow-md transition-shadow">
                    <div className="w-full md:w-40 h-40 shrink-0 overflow-hidden">
                      <img src={escola.image} alt={escola.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    </div>
                    <div>
                      <div className="text-xs font-bold uppercase tracking-widest text-primary mb-2">{escola.status}</div>
                      <h3 className="text-2xl font-bold tracking-tight mb-3">{escola.name}</h3>
                      <p className="text-muted-foreground mb-4">{escola.address}</p>
                      <div className="inline-block px-4 py-1.5 bg-muted/50 text-foreground text-sm font-medium">
                        {escola.pibidianos} em atuação
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex flex-col items-center text-center"
                >
                  <div className="text-5xl md:text-7xl font-serif font-bold tracking-tight mb-4 text-primary" style={{ fontVariantNumeric: 'tabular-nums' }}>
                    {stat.value}
                  </div>
                  <div className="text-sm font-bold uppercase tracking-widest text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-40 bg-primary text-primary-foreground text-center">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">Quer participar?</h2>
              <p className="text-xl text-primary-foreground/80 mb-12 leading-relaxed">
                Se você é estudante de Licenciatura em Física do IFRO ou professor da rede pública, entre em contato e saiba como fazer parte do PIBID.
              </p>
              <Button
                asChild
                size="lg"
                className="bg-background text-foreground hover:bg-background/90 transition-all duration-200 active:scale-[0.98] px-12 py-8 text-lg shadow-editorial"
              >
                <a href="mailto:pibidfisicaifro@gmail.com">Fale com a coordenação</a>
              </Button>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default AboutPage;