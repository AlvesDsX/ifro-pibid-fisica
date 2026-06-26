import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const UrbanGuerrillaLaunchPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const metrics = [
    { value: '1.2M', label: 'Direct impressions' },
    { value: '487%', label: 'Social amplification' },
    { value: '2.9x', label: 'ROI' },
    { value: '289%', label: 'Retail sales spike' }
  ];

  return (
    <>
      <Helmet>
        <title>Urban Guerrilla Launch - Case Study | Capuk</title>
        <meta name="description" content="An innovative guerrilla marketing campaign that transformed urban spaces into brand experiences and generated massive organic buzz." />
      </Helmet>

      <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground flex flex-col">
        <Header />

        <main className="flex-1 pt-32 pb-24 md:pt-48">
          <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Back Navigation */}
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-16"
            >
              <Button 
                variant="ghost" 
                asChild
                className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors group px-0 hover:bg-transparent"
              >
                <Link to="/portfolio">
                  <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                  Back to Portfolio
                </Link>
              </Button>
            </motion.div>

            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="max-w-5xl mb-24"
            >
              <div className="text-sm font-bold uppercase tracking-widest text-primary mb-6">
                Guerrilla Marketing
              </div>
              <h1 className="text-5xl md:text-7xl lg:text-[6rem] font-bold tracking-tight leading-[0.95] mb-16 text-balance">
                Urban Guerrilla Launch
              </h1>

              {/* Metrics */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 border-y border-border py-12">
                {metrics.map((metric, idx) => (
                  <div key={idx} className="flex flex-col">
                    <span className="text-4xl md:text-5xl font-bold tracking-tight mb-2 text-primary" style={{ fontVariantNumeric: 'tabular-nums' }}>
                      {metric.value}
                    </span>
                    <span className="text-sm font-bold uppercase tracking-widest text-muted-foreground">
                      {metric.label}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Hero Image */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-32"
            >
              <div className="editorial-frame">
                <img 
                  src="https://images.unsplash.com/photo-1649766508871-9dabf2127f5b" 
                  alt="Urban guerrilla marketing street art" 
                  className="w-full h-[50vh] md:h-[70vh] object-cover"
                />
              </div>
            </motion.div>

            {/* Content Sections */}
            <div className="max-w-5xl mx-auto space-y-32">
              
              {/* Client Overview */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16"
              >
                <div className="md:col-span-4">
                  <h2 className="text-sm font-bold uppercase tracking-widest text-muted-foreground sticky top-32">
                    Client Overview
                  </h2>
                </div>
                <div className="md:col-span-8">
                  <p className="text-xl md:text-2xl leading-relaxed text-foreground max-w-[65ch]">
                    An emerging energy drink brand needed to make an explosive entrance into a competitive market dominated by established players. With a limited budget compared to major competitors, they required an unconventional approach that would generate massive buzz and position them as a disruptor brand.
                  </p>
                </div>
              </motion.section>

              {/* Challenge */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16"
              >
                <div className="md:col-span-4">
                  <h2 className="text-sm font-bold uppercase tracking-widest text-muted-foreground sticky top-32">
                    The Challenge
                  </h2>
                </div>
                <div className="md:col-span-8">
                  <p className="text-lg md:text-xl leading-relaxed text-muted-foreground max-w-[65ch]">
                    Traditional advertising channels would have required budgets of millions to make any impact against entrenched competitors. The brand needed to create memorable, shareable moments that would organically generate word-of-mouth and media coverage. They also needed to connect with their core demographic—urban millennials and Gen Z consumers—in authentic environments where they naturally congregate.
                  </p>
                </div>
              </motion.section>

              {/* Strategy */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16"
              >
                <div className="md:col-span-4">
                  <h2 className="text-sm font-bold uppercase tracking-widest text-muted-foreground sticky top-32">
                    Strategy & Execution
                  </h2>
                </div>
                <div className="md:col-span-8">
                  <p className="text-lg md:text-xl leading-relaxed text-muted-foreground max-w-[65ch]">
                    Capuk designed a series of guerrilla marketing activations in 8 major cities over 6 weeks. We transformed public spaces into branded experiences: pop-up skate parks in downtown plazas, surprise free concerts at transit hubs, and interactive art installations in trendy neighborhoods. Each activation featured product sampling, live performances, and Instagram-worthy photo opportunities. We coordinated with local influencers to attend and share content, but kept official branding subtle to maintain authenticity. Street teams distributed thousands of samples at each location while gathering contact information for follow-up.
                  </p>
                </div>
              </motion.section>

              {/* Results */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 pb-24 border-b border-border"
              >
                <div className="md:col-span-4">
                  <h2 className="text-sm font-bold uppercase tracking-widest text-muted-foreground sticky top-32">
                    The Results
                  </h2>
                </div>
                <div className="md:col-span-8">
                  <p className="text-xl md:text-2xl leading-relaxed text-foreground max-w-[65ch]">
                    The guerrilla campaign generated 1.2 million direct impressions across all activations. Media coverage from local TV stations and newspapers provided an additional 3.8M earned media impressions at zero cost. Social media amplification exceeded expectations, with user-generated content reaching 487% more people than our direct activation footprint. Retail partners in activation cities reported a 289% spike in product sales in the two weeks following each event. The brand successfully established itself as an exciting challenger brand without spending on traditional paid media, achieving a 2.9x return on investment.
                  </p>
                </div>
              </motion.section>

            </div>
            
            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mt-32 text-center max-w-3xl mx-auto"
            >
              <h3 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">Ready to achieve similar results?</h3>
              <p className="text-xl text-muted-foreground mb-10">
                Let's discuss how we can apply proven traditional marketing strategies to your business.
              </p>
              <Button 
                asChild
                size="lg"
                className="px-10 py-8 bg-primary text-primary-foreground font-bold uppercase tracking-widest text-sm hover:bg-primary/90 transition-all active:scale-[0.98] shadow-editorial"
              >
                <Link to="/#booking">Schedule Consultation</Link>
              </Button>
            </motion.div>

          </article>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default UrbanGuerrillaLaunchPage;