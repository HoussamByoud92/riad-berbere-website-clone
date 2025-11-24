import Header from '@/components/sections/header';
import Footer from '@/components/sections/footer';
import Image from 'next/image';
import { ReservationCalendar } from '@/components/ReservationCalendar';

const circuitsActivities = [
  {
    id: 'circuit-desert',
    name: 'Circuit Désert 3 Jours',
    duration: '3 jours / 2 nuits',
    priceMAD: 2500,
    description: 'Marrakech - Ouarzazate - Merzouga',
    availableTimes: ['08:00']
  },
  {
    id: 'circuit-imperial',
    name: 'Villes Impériales 5 Jours',
    duration: '5 jours / 4 nuits',
    priceMAD: 4200,
    description: 'Fès, Meknès, Rabat et Marrakech',
    availableTimes: ['08:00']
  },
  {
    id: 'circuit-south',
    name: 'Grand Sud Marocain 7 Jours',
    duration: '7 jours / 6 nuits',
    priceMAD: 5800,
    description: 'De Casablanca à Merzouga',
    availableTimes: ['08:00']
  },
  {
    id: 'circuit-north',
    name: 'Nord du Maroc 4 Jours',
    duration: '4 jours / 3 nuits',
    priceMAD: 3500,
    description: 'Tanger, Chefchaouen et Tétouan',
    availableTimes: ['08:00']
  }
];

export default function CircuitsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="relative h-[400px] md:h-[500px] w-full overflow-hidden">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/9954d743-8735-4b3b-868c-4bb1cfd3cbf8/generated_images/morocco-desert-circuit-adventure-with-cam-ab4aab51-20251124020921.jpg"
            alt="Circuits au Maroc"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <div className="text-center text-white px-4">
              <h1 className="text-4xl md:text-6xl font-display font-light mb-4">Circuits au Maroc</h1>
              <p className="text-lg md:text-xl font-body max-w-2xl mx-auto">
                Parcourez le Maroc de bout en bout avec nos circuits organisés
              </p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 md:py-24 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h6 className="text-xs font-bold uppercase tracking-[2px] text-muted mb-4">
                VOYAGES ORGANISÉS
              </h6>
              <h2 className="text-3xl md:text-4xl font-display text-foreground mb-6">
                Circuits complets à travers le Maroc
              </h2>
              <p className="text-body-lg text-muted leading-relaxed">
                Explorez le Maroc en profondeur avec nos circuits organisés. Du désert du Sahara aux villes impériales, 
                des montagnes de l'Atlas aux côtes atlantiques, nos itinéraires soigneusement conçus vous offrent 
                une immersion complète dans la culture et les paysages marocains.
              </p>
            </div>

            <div className="prose prose-lg mx-auto mb-16">
              <h3 className="font-display text-2xl mb-4">Nos circuits populaires</h3>
              
              <ul className="space-y-4 text-muted">
                <li>Circuit Désert 3 jours : Marrakech - Ouarzazate - Merzouga</li>
                <li>Villes Impériales 5 jours : Fès, Meknès, Rabat et Marrakech</li>
                <li>Grand Sud Marocain 7 jours : De Casablanca à Merzouga</li>
                <li>Nord du Maroc 4 jours : Tanger, Chefchaouen et Tétouan</li>
                <li>Circuit Atlas et Vallées 6 jours : Montagnes et oasis</li>
                <li>Tour Complet du Maroc 10 jours : L'essentiel du royaume</li>
              </ul>
              
              <div className="mt-8 p-6 bg-secondary/30 rounded-lg">
                <h4 className="font-display text-xl mb-3">Ce qui est inclus</h4>
                <ul className="space-y-2 text-sm">
                  <li>✓ Transport en véhicule climatisé</li>
                  <li>✓ Hébergement en hôtels et riads</li>
                  <li>✓ Petits déjeuners et dîners</li>
                  <li>✓ Guide francophone expérimenté</li>
                  <li>✓ Visites et entrées aux sites</li>
                </ul>
              </div>
            </div>

            {/* Reservation Calendar */}
            <div className="mt-16">
              <ReservationCalendar activities={circuitsActivities} />
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}