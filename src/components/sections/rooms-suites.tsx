import Image from 'next/image';
import { Users, Clock, MapPin, Star, LucideIcon } from 'lucide-react';
import Link from 'next/link';

type Feature = {
  icon: LucideIcon;
  text: string;
};

type Tour = {
  title: string;
  image: string;
  features: Feature[];
  description: string;
};

const toursData: Tour[] = [
  {
    title: "Excursion à la Vallée de l'Ourika",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9954d743-8735-4b3b-868c-4bb1cfd3cbf8-palaisriadberbere-com/assets/images/2-1-1-8.avif",
    features: [
      { icon: MapPin, text: "Marrakech" },
      { icon: Clock, text: "Journée complète" },
      { icon: Users, text: "Groupe" },
    ],
    description: "Partez à la découverte de la magnifique vallée de l'Ourika, nichée au pied de l'Atlas. Admirez les cascades rafraîchissantes, visitez des villages berbères authentiques et profitez de paysages à couper le souffle. Une escapade nature inoubliable à moins d'une heure de Marrakech."
  },
  {
    title: "Safari Quad dans le Désert d'Agafay",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9954d743-8735-4b3b-868c-4bb1cfd3cbf8-palaisriadberbere-com/assets/images/Design-sans-titre-70-370x463-5.png",
    features: [
      { icon: MapPin, text: "Agadir" },
      { icon: Clock, text: "3 heures" },
      { icon: Star, text: "Populaire" },
    ],
    description: "Vivez l'aventure ultime avec notre safari en quad à travers les dunes dorées du désert d'Agafay. Sensations fortes garanties avec un guide expérimenté, tea à la menthe traditionnel et coucher de soleil spectaculaire sur les dunes. Parfait pour les amateurs d'adrénaline."
  },
  {
    title: "Circuit Complet 7 Jours - Villes Impériales",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9954d743-8735-4b3b-868c-4bb1cfd3cbf8-palaisriadberbere-com/assets/images/1-9.avif",
    features: [
      { icon: MapPin, text: "Multi-villes" },
      { icon: Clock, text: "7 jours" },
      { icon: Users, text: "Privé" },
    ],
    description: "Découvrez l'essence du Maroc avec notre circuit des villes impériales : Marrakech, Fès, Meknès et Rabat. Explorez les médinas millénaires, les palais somptueux et les souks animés. Hébergement en riads de charme, guide francophone et transport climatisé inclus pour une expérience tout confort."
  }
];

const RoomsSuites = () => {
  return (
    <section className="bg-background py-[110px]">
      <div className="container mx-auto max-w-[1200px] lg:px-[80px] px-5">
        <div className="relative mb-16">
          <div className="text-center">
            <h6 className="text-[12px] font-bold uppercase tracking-[2px] text-[#FFB73F]">
              DÉCOUVREZ NOS EXCURSIONS ET CIRCUITS EXCEPTIONNELS
            </h6>
            <h3 className="font-display text-[36px] text-[#2C2C2C] mt-4">
              Nos excursions populaires
            </h3>
          </div>
          <Link
            href="/nos-excursions"
            className="absolute top-[8px] right-0 hidden lg:inline-block bg-[#FFB73F] text-white px-[25px] py-[18px] text-[14px] font-medium rounded-[2px] hover:bg-primary transition-colors duration-300"
          >
            Voir Toutes Les Excursions
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {toursData.map((tour, index) => (
            <div key={index} className="bg-white rounded-lg shadow-[0_4px_20px_rgba(0,0,0,0.08)] overflow-hidden transition-transform duration-300 ease-in-out hover:-translate-y-2 group">
              <div className="relative h-[280px]">
                <Image
                  src={tour.image}
                  alt={tour.title}
                  layout="fill"
                  objectFit="cover"
                  className="w-full h-full"
                />
              </div>
              <div className="p-8 flex flex-col">
                <h5 className="font-display text-[18px] font-medium leading-[1.3] text-[#2C2C2C] mb-5 min-h-[48px]">
                  {tour.title}
                </h5>
                <ul className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-[#5c5c5c] mb-5 border-b border-border pb-5">
                  {tour.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                       <feature.icon size={18} className="text-[#FFB73F]" />
                      <span>{feature.text}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-sm text-[#5c5c5c] leading-[1.5] mb-5 h-[105px] overflow-hidden">
                  {tour.description}
                </p>
                <a href="/contact" className="text-sm font-semibold text-[#2C2C2C] hover:text-primary transition-colors mt-auto">
                  En savoir plus &gt;
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center items-center gap-2 mt-16">
            <span className="w-2.5 h-2.5 bg-[#FFB73F] rounded-full cursor-pointer"></span>
            <span className="w-2.5 h-2.5 bg-[#d9d9d9] rounded-full cursor-pointer hover:bg-[#FFB73F]/80 transition-colors"></span>
            <span className="w-2.5 h-2.5 bg-[#d9d9d9] rounded-full cursor-pointer hover:bg-[#FFB73F]/80 transition-colors"></span>
            <span className="w-2.5 h-2.5 bg-[#d9d9d9] rounded-full cursor-pointer hover:bg-[#FFB73F]/80 transition-colors"></span>
        </div>

      </div>
    </section>
  );
};

export default RoomsSuites;