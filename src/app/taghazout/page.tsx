import Header from '@/components/sections/header';
import Footer from '@/components/sections/footer';
import Image from 'next/image';
import { ReservationCalendar } from '@/components/ReservationCalendar';

const taghazoutActivities = [
  {
    id: 'taghazout-surf',
    name: 'Cours de Surf Débutant',
    duration: '2 heures',
    priceMAD: 350,
    description: 'Initiation au surf avec instructeur',
    availableTimes: ['09:00', '11:00', '14:00', '16:00']
  },
  {
    id: 'taghazout-advanced-surf',
    name: 'Session Surf Avancé',
    duration: '3 heures',
    priceMAD: 500,
    description: 'Perfectionnement et spots secrets',
    availableTimes: ['08:00', '10:00', '15:00']
  },
  {
    id: 'taghazout-yoga',
    name: 'Yoga & Surf Retreat',
    duration: '4 heures',
    priceMAD: 600,
    description: 'Session yoga matinale + cours de surf',
    availableTimes: ['07:00', '08:00']
  },
  {
    id: 'taghazout-village',
    name: 'Tour du Village & Plages',
    duration: '5 heures',
    priceMAD: 400,
    description: 'Découverte de Taghazout et baie d\'Anchor',
    availableTimes: ['09:00', '10:00', '14:00']
  }
];

export default function TaghazoutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="relative h-[400px] md:h-[500px] w-full overflow-hidden">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/9954d743-8735-4b3b-868c-4bb1cfd3cbf8/generated_images/taghazout-morocco-surf-village-stunning-c-d7e01e94-20251124020921.jpg"
            alt="Excursions à Taghazout"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <div className="text-center text-white px-4">
              <h1 className="text-4xl md:text-6xl font-display font-light mb-4">Excursions à Taghazout</h1>
              <p className="text-lg md:text-xl font-body max-w-2xl mx-auto">
                Le paradis des surfeurs et des amoureux de la nature
              </p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 md:py-24 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h6 className="text-xs font-bold uppercase tracking-[2px] text-muted mb-4">
                VILLAGE DE SURFEURS
              </h6>
              <h2 className="text-3xl md:text-4xl font-display text-foreground mb-6">
                Vivez l'esprit Taghazout
              </h2>
              <p className="text-body-lg text-muted leading-relaxed">
                Taghazout, petit village de pêcheurs devenu spot de surf mondialement reconnu, offre des vagues parfaites 
                toute l'année. Entre sessions de surf, yoga sur la plage et exploration des criques sauvages, 
                découvrez ce lieu authentique où se mêlent culture berbère et ambiance bohème.
              </p>
            </div>

            <div className="prose prose-lg mx-auto mb-16">
              <h3 className="font-display text-2xl mb-4">Nos excursions populaires à Taghazout</h3>
              
              <ul className="space-y-4 text-muted">
                <li>Cours de surf pour tous niveaux sur les meilleurs spots</li>
                <li>Yoga et méditation face à l'océan</li>
                <li>Exploration des plages : Anchor Point, Killer Point, Hash Point</li>
                <li>Visite du village de pêcheurs et découverte de l'artisanat local</li>
                <li>Randonnée côtière et points de vue panoramiques</li>
                <li>Excursion à Paradise Valley depuis Taghazout</li>
                <li>Cours de cuisine marocaine traditionnelle</li>
              </ul>
            </div>

            {/* Reservation Calendar */}
            <div className="mt-16">
              <ReservationCalendar activities={taghazoutActivities} />
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}