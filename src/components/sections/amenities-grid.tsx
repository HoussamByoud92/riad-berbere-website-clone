import React from 'react';
import {
  Car,
  Users,
  MapPin,
  Camera,
  Globe,
  Compass,
  Hotel,
  Headphones,
} from 'lucide-react';
import type { LucideProps } from 'lucide-react';

interface Amenity {
  icon: React.ComponentType<LucideProps>;
  label: string;
}

const amenities: Amenity[] = [
  { icon: Car, label: 'Transport climatisé' },
  { icon: Users, label: 'Guides francophones' },
  { icon: MapPin, label: 'Circuits personnalisés' },
  { icon: Camera, label: 'Visites guidées' },
  { icon: Globe, label: 'Excursions multi-destinations' },
  { icon: Compass, label: 'Aventures dans le désert' },
  { icon: Hotel, label: 'Hébergements de qualité' },
  { icon: Headphones, label: 'Support 24/7' },
];

const AmenitiesGrid = () => {
  return (
    <section className="bg-background py-20 lg:py-24">
      <div className="container">
        <div className="text-center mb-12">
          <h6 className="text-xs font-bold uppercase tracking-[2px] font-secondary text-[#FFB73F]">
            DÉCOUVREZ NOS SERVICES
          </h6>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {amenities.map((amenity, index) => {
            const IconComponent = amenity.icon;
            return (
              <div key={index} className="flex flex-col items-center text-center p-8">
                <IconComponent className="h-12 w-12 text-[#FFB73F]" strokeWidth={2} />
                <p className="mt-4 text-base font-body text-[#2C2C2C]">
                  {amenity.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AmenitiesGrid;