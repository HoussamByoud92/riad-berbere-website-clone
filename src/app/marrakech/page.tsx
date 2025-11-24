import Header from '@/components/sections/header';
import Footer from '@/components/sections/footer';
import Image from 'next/image';
import { ReservationCalendar } from '@/components/ReservationCalendar';

const marrakechActivities = [
  {
    id: 'marrakech-medina',
    name: 'Visite guidée de la Médina',
    duration: '4 heures',
    priceMAD: 350,
    description: 'Découvrez les souks et monuments historiques',
    availableTimes: ['09:00', '10:00', '14:00', '15:00']
  },
  {
    id: 'marrakech-jardin',
    name: 'Jardins Majorelle & Musée YSL',
    duration: '3 heures',
    priceMAD: 450,
    description: 'Visite des célèbres jardins et du musée',
    availableTimes: ['09:00', '11:00', '14:00', '16:00']
  },
  {
    id: 'marrakech-atlas',
    name: 'Excursion Vallée de l\'Ourika',
    duration: '8 heures',
    priceMAD: 800,
    description: 'Découverte de l\'Atlas et villages berbères',
    availableTimes: ['08:00', '09:00']
  },
  {
    id: 'marrakech-agafay',
    name: 'Désert d\'Agafay avec Dîner',
    duration: '6 heures',
    priceMAD: 950,
    description: 'Coucher de soleil et dîner traditionnel',
    availableTimes: ['15:00', '16:00']
  }
];

export default function MarrakechPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="relative h-[400px] md:h-[500px] w-full overflow-hidden">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/9954d743-8735-4b3b-868c-4bb1cfd3cbf8/generated_images/spectacular-view-of-marrakech-morocco-vi-83509ed4-20251124020921.jpg"
            alt="Excursions à Marrakech"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <div className="text-center text-white px-4">
              <h1 className="text-4xl md:text-6xl font-display font-light mb-4">Excursions à Marrakech</h1>
              <p className="text-lg md:text-xl font-body max-w-2xl mx-auto">
                Découvrez la perle du sud, entre souks animés et monuments majestueux
              </p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 md:py-24 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h6 className="text-xs font-bold uppercase tracking-[2px] text-muted mb-4">
                LA VILLE ROUGE
              </h6>
              <h2 className="text-3xl md:text-4xl font-display text-foreground mb-6">
                Explorez les merveilles de Marrakech
              </h2>
              <p className="text-body-lg text-muted leading-relaxed">
                Marrakech, la ville rouge, est une destination incontournable au Maroc. Découvrez ses médinas historiques, 
                ses jardins luxuriants, ses palais somptueux et ses souks colorés. Nos excursions vous emmènent au cœur 
                de cette ville fascinante pour une expérience authentique et mémorable.
              </p>
            </div>

            <div className="prose prose-lg mx-auto mb-16">
              <h3 className="font-display text-2xl mb-4">Nos excursions populaires à Marrakech</h3>
              
              <ul className="space-y-4 text-muted">
                <li>Visite guidée de la médina et des souks traditionnels</li>
                <li>Découverte des jardins Majorelle et du musée Yves Saint Laurent</li>
                <li>Exploration des palais Bahia et El Badi</li>
                <li>Excursion dans la vallée de l'Ourika et les montagnes de l'Atlas</li>
                <li>Balade en calèche et visite de la place Jemaa el-Fna</li>
                <li>Expérience culinaire et cours de cuisine marocaine</li>
                <li>Excursion dans le désert d'Agafay avec dîner sous les étoiles</li>
              </ul>
            </div>

            {/* Reservation Calendar */}
            <div className="mt-16">
              <ReservationCalendar activities={marrakechActivities} />
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}