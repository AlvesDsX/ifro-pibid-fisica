import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Mail, Phone, MapPin, CheckCircle2, AlertCircle } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import { Button } from '@/components/ui/button';

// Form validation schema
const contactSchema = z.object({
  name: z.string().min(3, { message: 'O nome deve ter pelo menos 3 caracteres.' }),
  email: z.string().email({ message: 'Insira um e-mail válido.' }),
  role: z.string().min(1, { message: 'Selecione o seu perfil.' }),
  message: z.string().min(10, { message: 'A mensagem deve ter pelo menos 10 caracteres.' }),
});

const ContactPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log('Form submitted:', data);
    setIsSubmitting(false);
    setIsSuccess(true);
    reset();
  };

  return (
    <>
      <Helmet>
        <title>Fale Conosco — PIBID Física IFRO</title>
        <meta name="description" content="Entre em contato com a equipe do PIBID Física do IFRO Campus Calama." />
      </Helmet>

      <div className="min-h-screen bg-background text-foreground">
        <Header />

        <section className="pt-40 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16"
          >
            {/* Info Section */}
            <div>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">Fale<br />Conosco.</h1>
              <p className="text-xl text-muted-foreground mb-12 max-w-lg">
                Tem dúvidas sobre o PIBID, quer ser um parceiro ou apenas enviar uma mensagem? Preencha o formulário e nossa equipe entrará em contato.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 flex items-center justify-center border border-border bg-muted/20 shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">E-mail</h3>
                    <p className="text-muted-foreground">pibidfisicaifro@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 flex items-center justify-center border border-border bg-muted/20 shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Localização</h3>
                    <p className="text-muted-foreground">IFRO Campus Calama<br />Av. Calama, 4985 - Flodoaldo Pontes Pinto<br />Porto Velho - RO</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form Section */}
            <div className="editorial-frame p-8 md:p-12">
              {isSuccess ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="h-full flex flex-col items-center justify-center text-center py-12"
                >
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="text-3xl font-bold mb-4">Mensagem Enviada!</h3>
                  <p className="text-muted-foreground mb-8">Recebemos o seu contato e responderemos o mais breve possível.</p>
                  <Button onClick={() => setIsSuccess(false)} variant="outline">
                    Enviar nova mensagem
                  </Button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Nome Completo</label>
                    <input
                      {...register('name')}
                      className={`w-full p-4 bg-background border ${errors.name ? 'border-destructive focus:ring-destructive' : 'border-border focus:ring-primary'} outline-none focus:ring-2 transition-all`}
                      placeholder="Seu nome"
                    />
                    {errors.name && (
                      <p className="flex items-center gap-1 text-destructive text-xs mt-2">
                        <AlertCircle className="w-3 h-3" /> {errors.name.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">E-mail</label>
                    <input
                      {...register('email')}
                      className={`w-full p-4 bg-background border ${errors.email ? 'border-destructive focus:ring-destructive' : 'border-border focus:ring-primary'} outline-none focus:ring-2 transition-all`}
                      placeholder="seu@email.com"
                    />
                    {errors.email && (
                      <p className="flex items-center gap-1 text-destructive text-xs mt-2">
                        <AlertCircle className="w-3 h-3" /> {errors.email.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Seu Perfil</label>
                    <select
                      {...register('role')}
                      className={`w-full p-4 bg-background border ${errors.role ? 'border-destructive focus:ring-destructive' : 'border-border focus:ring-primary'} outline-none focus:ring-2 transition-all appearance-none`}
                    >
                      <option value="">Selecione uma opção...</option>
                      <option value="aluno_ifro">Aluno(a) de Licenciatura IFRO</option>
                      <option value="escola_parceira">Escola Parceira (Professor/Diretor)</option>
                      <option value="outro">Outro</option>
                    </select>
                    {errors.role && (
                      <p className="flex items-center gap-1 text-destructive text-xs mt-2">
                        <AlertCircle className="w-3 h-3" /> {errors.role.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Mensagem</label>
                    <textarea
                      {...register('message')}
                      rows={5}
                      className={`w-full p-4 bg-background border ${errors.message ? 'border-destructive focus:ring-destructive' : 'border-border focus:ring-primary'} outline-none focus:ring-2 transition-all resize-none`}
                      placeholder="Como podemos te ajudar?"
                    />
                    {errors.message && (
                      <p className="flex items-center gap-1 text-destructive text-xs mt-2">
                        <AlertCircle className="w-3 h-3" /> {errors.message.message}
                      </p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200 active:scale-[0.98] py-6 text-lg"
                  >
                    {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
                  </Button>
                </form>
              )}
            </div>
          </motion.div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default ContactPage;
