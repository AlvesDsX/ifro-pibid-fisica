import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

const NewsPage = () => {
  const news = [
    {
      title: 'PIBID Física marca presença no V ENLIC com 15 trabalhos aprovados',
      date: '12 de Novembro de 2023',
      category: 'Eventos',
      resume: 'Os bolsistas do PIBID apresentaram metodologias ativas e resultados de experimentos realizados durante o ano nas escolas parceiras de Porto Velho.',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800',
      slug: '/noticias/enlic-2023',
    },
    {
      title: 'Feira de Ciências da E.E. John Kennedy reúne mais de 300 alunos',
      date: '05 de Outubro de 2023',
      category: 'Escolas',
      resume: 'Com apoio dos pibidianos, alunos da escola pública construíram foguetes de água e circuitos elétricos em uma manhã de muita ciência e tecnologia.',
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800',
      slug: '/noticias/feira-de-ciencias-john-kennedy',
    },
    {
      title: 'Novo ciclo do PIBID 2024: Inscrições abertas para novos bolsistas',
      date: '20 de Agosto de 2023',
      category: 'Institucional',
      resume: 'O IFRO Campus Calama lança edital para seleção de novos estudantes de Licenciatura em Física interessados em participar do programa.',
      image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800',
      slug: '/noticias/novo-ciclo-2024',
    }
  ];

  return (
    <>
      <Helmet>
        <title>Notícias e Mural — PIBID Física IFRO</title>
        <meta name="description" content="Acompanhe as últimas novidades, eventos e publicações do programa PIBID Física do IFRO Campus Calama." />
      </Helmet>

      <div className="min-h-screen bg-background text-foreground">
        <Header />

        <section className="pt-40 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">Mural de<br/>Notícias.</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mb-20">
              Fique por dentro das últimas atualizações, eventos científicos e ações realizadas nas escolas parceiras.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {news.map((item, index) => (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="group flex flex-col h-full"
                >
                  <div className="editorial-frame mb-6 overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  
                  <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4">
                    <span className="text-primary">{item.category}</span>
                    <span className="w-1 h-1 rounded-full bg-border"></span>
                    <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" /> {item.date}</span>
                  </div>

                  <h2 className="text-2xl font-bold tracking-tight mb-4 group-hover:text-primary transition-colors">
                    <Link to={item.slug}>{item.title}</Link>
                  </h2>
                  
                  <p className="text-muted-foreground mb-6 flex-grow">
                    {item.resume}
                  </p>

                  <Link 
                    to={item.slug} 
                    className="inline-flex items-center gap-2 font-medium text-sm text-foreground hover:text-primary transition-colors group-hover:gap-4 mt-auto"
                  >
                    Ler artigo completo <ArrowRight className="w-4 h-4" />
                  </Link>
                </motion.article>
              ))}
            </div>
          </motion.div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default NewsPage;
