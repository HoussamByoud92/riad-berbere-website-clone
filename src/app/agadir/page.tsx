import Header from '@/components/sections/header';
import Footer from '@/components/sections/footer';
import Image from 'next/image';
import { ReservationCalendar } from '@/components/ReservationCalendar';

const agadirActivities = [
  {
    id: 'agadir-beach',
    name: 'Journée à la Plage d\'Agadir',
    duration: '6 heures',
    priceMAD: 300,
    description: 'Détente et activités nautiques',
    availableTimes: ['09:00', '10:00', '11:00', '14:00']
  },
  {
    id: 'agadir-souk',
    name: 'Visite du Souk El Had',
    duration: '3 heures',
    priceMAD: 250,
    description: 'Découverte du plus grand marché d\'Agadir',
    availableTimes: ['09:00', '10:00', '15:00']
  },
  {
    id: 'agadir-paradise',
    name: 'Paradise Valley & Cascades',
    duration: '7 heures',
    priceMAD: 700,
    description: 'Oasis naturelle et baignade en montagne',
    availableTimes: ['08:00', '09:00']
  },
  {
    id: 'agadir-sunset',
    name: 'Balade en Chameau au Coucher du Soleil',
    duration: '2 heures',
    priceMAD: 400,
    description: 'Expérience authentique sur la plage',
    availableTimes: ['17:00', '17:30', '18:00']
  }
];

export default function AgadirPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="relative h-[400px] md:h-[500px] w-full overflow-hidden">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/9954d743-8735-4b3b-868c-4bb1cfd3cbf8/generated_images/stunning-agadir-beach-morocco-coastline-p-b2ef83c4-20251124020921.jpg"
            alt="Excursions à Agadir"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <div className="text-center text-white px-4">
              <h1 className="text-4xl md:text-6xl font-display font-light mb-4">Excursions à Agadir</h1>
              <p className="text-lg md:text-xl font-body max-w-2xl mx-auto">
                Profitez du soleil, de la plage et des aventures côtières
              </p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 md:py-24 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h6 className="text-xs font-bold uppercase tracking-[2px] text-muted mb-4">
                LA PERLE DU SUD
              </h6>
              <h2 className="text-3xl md:text-4xl font-display text-foreground mb-6">
                Découvrez les trésors d'Agadir
              </h2>
              <p className="text-body-lg text-muted leading-relaxed">
                Agadir, station balnéaire moderne du Maroc, offre un climat ensoleillé toute l'année, des plages dorées 
                et une multitude d'activités. De la détente au bord de l'océan aux excursions dans l'arrière-pays, 
                nos tours vous feront découvrir toutes les facettes de cette ville magnifique.
              </p>
            </div>

            <div className="prose prose-lg mx-auto mb-16">
              <h3 className="font-display text-2xl mb-4">Nos excursions populaires à Agadir</h3>
              
              <ul className="space-y-4 text-muted">
                <li>Journée détente sur les plages d'Agadir</li>
                <li>Visite du Souk El Had et découverte de l'artisanat local</li>
                <li>Excursion à Paradise Valley et baignade dans les cascades</li>
                <li>Balade en chameau au coucher du soleil</li>
                <li>Visite de la Kasbah et panorama sur la baie</li>
                <li>Découverte du parc national de Souss-Massa</li>
                <li>Excursion à Essaouira, la cité des vents</li>
              </ul>
            </div>

            {/* Reservation Calendar */}
            <div className="mt-16">
              <ReservationCalendar activities={agadirActivities} />
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}