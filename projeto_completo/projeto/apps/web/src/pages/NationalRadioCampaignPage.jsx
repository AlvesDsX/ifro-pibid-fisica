import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const NationalRadioCampaignPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const metrics = [
    { value: '15M+', label: 'Listeners reached' },
    { value: '42%', label: 'Brand awareness increase' },
    { value: '3.2x', label: 'ROI' },
    { value: '89%', label: 'Listener recall rate' }
  ];

  return (
    <>
      <Helmet>
        <title>National Radio Campaign - Case Study | Capuk</title>
        <meta name="description" content="A comprehensive national radio campaign that reached millions of listeners across prime time slots with compelling audio narratives and strategic placement." />
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
                Broadcast Media
              </div>
              <h1 className="text-5xl md:text-7xl lg:text-[6rem] font-bold tracking-tight leading-[0.95] mb-16 text-balance">
                National Radio Campaign
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
                  src="https://images.unsplash.com/photo-1593577873421-61ce84e3895a" 
                  alt="National radio campaign broadcast media" 
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
                    A regional insurance provider approached Capuk seeking to expand into new markets across the country. With limited brand recognition outside their home territory, they needed a compelling way to introduce their value proposition to millions of potential customers through trusted traditional media channels.
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
                    The insurance category is highly saturated with established national brands dominating radio advertising. Our client's regional positioning made it difficult to compete for prime time slots, and their messaging lacked the emotional resonance needed to cut through the noise. Additionally, they had never executed a national media buy and were uncertain about optimal station selection and daypart strategies.
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
                    We developed a phased radio campaign targeting morning drive time across 47 major markets. Our creative team crafted authentic testimonial-style spots featuring real policyholders discussing how the company helped them during critical life moments. We negotiated premium morning placements with news and talk stations that aligned with our target demographic of homeowners aged 35-64. Rather than blanket coverage, we focused on specific DMA regions with the highest growth potential and executed an intensive 12-week flight schedule to build frequency.
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
                    The campaign generated 15 million unique listeners during the flight period. Post-campaign brand tracking studies showed a 42% increase in unaided brand awareness in target markets. Crucially, the company's inbound inquiry volume increased by 156%, directly attributable to the radio campaign based on call tracking data. The authentic testimonial approach achieved an 89% ad recall rate, significantly outperforming industry benchmarks and delivering a 3.2x return on investment.
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

export default NationalRadioCampaignPage;