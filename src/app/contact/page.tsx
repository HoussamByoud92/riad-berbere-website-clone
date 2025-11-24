import Header from '@/components/sections/header';
import Footer from '@/components/sections/footer';
import ContactForm from '@/components/contact-form';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60 z-10" />
          <img
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9954d743-8735-4b3b-868c-4bb1cfd3cbf8-palaisriadberbere-com/assets/images/9956bb_cdd31c8975c34219ab5897156b24f808mv2-1-2.avif"
            alt="Palais Riad Berbère Interior"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="relative z-20 text-center text-white px-6">
            <h6 className="font-secondary uppercase text-xs tracking-[2px] mb-4 text-white/90">
              NOUS CONTACTER
            </h6>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-light mb-4">
              Contact
            </h1>
            <p className="text-lg md:text-xl font-light max-w-2xl mx-auto">
              Nous sommes à votre écoute pour toute demande d'information
            </p>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-[1200px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Address */}
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-display text-xl mb-3 text-foreground">Adresse</h3>
                <p className="text-sm text-muted leading-relaxed">
                  Palais Riad Berbère<br />
                  2.5 Km Oasis Hassan II<br />
                  Avenue Al Adarissa<br />
                  40000 Marrakech
                </p>
              </div>

              {/* Phone */}
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <Phone className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-display text-xl mb-3 text-foreground">Téléphone</h3>
                <a href="tel:+212661822441" className="text-sm text-muted hover:text-primary transition-colors">
                  +212 661 822 441
                </a>
              </div>

              {/* Email */}
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <Mail className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-display text-xl mb-3 text-foreground">Email</h3>
                <a href="mailto:Contact@palaisriadberbere.com" className="text-sm text-muted hover:text-primary transition-colors break-all">
                  Contact@palaisriadberbere.com
                </a>
              </div>

              {/* Hours */}
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <Clock className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-display text-xl mb-3 text-foreground">Horaires</h3>
                <p className="text-sm text-muted leading-relaxed">
                  7 jours sur 7<br />
                  24h/24
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-20 px-6 bg-background">
          <div className="max-w-[1200px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Left: Form Introduction */}
              <div>
                <h6 className="font-secondary uppercase text-xs tracking-[2px] text-accent mb-4">
                  ENVOYEZ-NOUS UN MESSAGE
                </h6>
                <h2 className="font-display text-4xl md:text-5xl mb-6 text-foreground">
                  Contactez-nous
                </h2>
                <p className="text-body-lg text-muted mb-8 leading-relaxed">
                  Que ce soit pour une réservation, une demande d'information ou toute autre question, 
                  notre équipe se fera un plaisir de vous répondre dans les plus brefs délais.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-display text-lg mb-1">Notre emplacement</h4>
                      <p className="text-sm text-muted">
                        Situé au cœur de Marrakech, à proximité des principaux sites touristiques
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-display text-lg mb-1">Appelez-nous</h4>
                      <p className="text-sm text-muted">
                        Disponible 24h/24 pour répondre à toutes vos questions
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-display text-lg mb-1">Écrivez-nous</h4>
                      <p className="text-sm text-muted">
                        Nous vous répondrons dans les 24 heures
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: Contact Form */}
              <ContactForm />
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="h-[500px] w-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3397.4956856989486!2d-8.0089!3d31.6295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzHCsDM3JzQ2LjIiTiA4wrAwMCczMi4wIlc!5e0!3m2!1sen!2s!4v1234567890"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Palais Riad Berbère Location"
          />
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6 bg-white text-center">
          <div className="max-w-[800px] mx-auto">
            <h6 className="font-secondary uppercase text-xs tracking-[2px] text-accent mb-4">
              RÉSERVEZ VOTRE SÉJOUR
            </h6>
            <h2 className="font-display text-4xl md:text-5xl mb-6 text-foreground">
              Prêt à vivre une expérience inoubliable ?
            </h2>
            <p className="text-body-lg text-muted mb-8 leading-relaxed">
              Réservez dès maintenant votre séjour au Palais Riad Berbère et laissez-vous enchanter 
              par l'authenticité marocaine.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/"
                className="inline-block bg-primary text-primary-foreground px-8 py-4 font-medium uppercase tracking-wider hover:bg-accent transition-colors duration-300"
              >
                Réserver maintenant
              </a>
              <a
                href="/chambre-et-suites"
                className="inline-block bg-white text-primary border-2 border-primary px-8 py-4 font-medium uppercase tracking-wider hover:bg-primary hover:text-white transition-colors duration-300"
              >
                Découvrir nos chambres
              </a>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}