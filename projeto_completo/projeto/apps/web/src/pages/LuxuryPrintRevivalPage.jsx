import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const LuxuryPrintRevivalPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const metrics = [
    { value: '2.8M', label: 'Impressions' },
    { value: '67%', label: 'Purchase intent lift' },
    { value: '4.1x', label: 'ROI' },
    { value: '312%', label: 'In-store traffic increase' }
  ];

  return (
    <>
      <Helmet>
        <title>Luxury Print Revival - Case Study | Capuk</title>
        <meta name="description" content="A sophisticated print advertising campaign that revitalized luxury brand presence in premium publications and drove significant showroom traffic." />
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
                Print Advertising
              </div>
              <h1 className="text-5xl md:text-7xl lg:text-[6rem] font-bold tracking-tight leading-[0.95] mb-16 text-balance">
                Luxury Print Revival
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
                  src="https://images.unsplash.com/photo-1506542505061-1e802b240b04" 
                  alt="Luxury print advertising design" 
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
                    A high-end furniture retailer with brick-and-mortar showrooms across major metropolitan areas was experiencing declining foot traffic as competitors shifted marketing budgets entirely online. They believed their affluent target audience still valued premium print publications and wanted to reclaim that channel strategically.
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
                    The brand had largely abandoned print advertising five years prior, following industry trends toward digital-only strategies. However, their ideal customer—affluent homeowners aged 45-65 making five-figure furniture purchases—still regularly consumed luxury lifestyle magazines and weekend newspaper supplements. The challenge was identifying which publications still delivered quality readership and developing creative that would drive showroom visits rather than just passive brand exposure.
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
                    We executed a selective premium print campaign across carefully vetted publications including Architectural Digest, regional city magazines, and Sunday newspaper home sections in their top 10 markets. Rather than small display ads, we secured full-page and double-truck placements showcasing their craftsmanship through stunning photography. Each ad featured a unique QR code directing readers to schedule private showroom consultations, allowing us to track offline-to-online behavior. We coordinated the print campaign with exclusive in-store events mentioned in the ads to create urgency.
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
                    The six-month print campaign reached 2.8 million readers across target publications. Showroom traffic increased by 312% compared to the previous year, with store managers reporting customers frequently arriving with torn-out magazine ads. The QR code tracking system showed 67% of print ad viewers expressed purchase intent by scheduling consultations. Most importantly, the campaign generated $8.7M in attributed furniture sales, delivering a 4.1x return on ad spend.
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

export default LuxuryPrintRevivalPage;