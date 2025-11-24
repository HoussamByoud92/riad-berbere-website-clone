"use client";

import { useState } from "react";
import { ChevronDown, Calendar as CalendarIcon } from "lucide-react";
import { useRouter } from "next/navigation";

const ReservationBar = () => {
  const router = useRouter();
  const [destination, setDestination] = useState("Marrakech");
  const [excursionType, setExcursionType] = useState("Circuit");
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [departDate, setDepartDate] = useState("2025-11-23");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Build query params from form data
    const params = new URLSearchParams({
      destination,
      type: excursionType,
      adults: adults.toString(),
      children: children.toString(),
      date: departDate
    });
    router.push(`/reservation?${params.toString()}`);
  };

  return (
    <section id="reservation" className="relative z-10 -mt-[100px] w-full px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1200px] mx-auto bg-[rgba(112,207,241,0.9)] backdrop-blur-[8px] rounded-lg text-white font-body">
        <form
          className="grid grid-cols-1 lg:grid-cols-5 lg:items-center"
          onSubmit={handleSearch}
        >
          <div className="lg:col-span-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y divide-white/20 sm:divide-x sm:divide-y lg:divide-y-0">
            {/* Date de départ */}
            <div className="p-4">
              <label htmlFor="depart-date" className="block text-sm font-normal text-white/90 select-none">
                Date de départ
              </label>
              <input
                id="depart-date"
                type="date"
                value={departDate}
                onChange={(e) => setDepartDate(e.target.value)}
                className="mt-1 bg-transparent border-none text-white font-medium text-base w-full focus:outline-none focus:ring-0"
              />
            </div>

            {/* Destination */}
            <div className="p-4">
              <label htmlFor="destination" className="block text-sm font-normal text-white/90 select-none">
                Destination
              </label>
              <select
                id="destination"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                className="mt-1 bg-transparent border-none text-white font-medium text-base w-full focus:outline-none focus:ring-0 appearance-none cursor-pointer"
              >
                <option value="Marrakech" className="text-foreground bg-background">Marrakech</option>
                <option value="Agadir" className="text-foreground bg-background">Agadir</option>
                <option value="Taghazout" className="text-foreground bg-background">Taghazout</option>
                <option value="Circuits" className="text-foreground bg-background">Circuits</option>
              </select>
            </div>

            {/* Type d'excursion */}
            <div className="p-4">
              <label htmlFor="excursion-type" className="block text-sm font-normal text-white/90 select-none">
                Type d'excursion
              </label>
              <select
                id="excursion-type"
                value={excursionType}
                onChange={(e) => setExcursionType(e.target.value)}
                className="mt-1 bg-transparent border-none text-white font-medium text-base w-full focus:outline-none focus:ring-0 appearance-none cursor-pointer"
              >
                <option value="Circuit" className="text-foreground bg-background">Circuit</option>
                <option value="Visite guidée" className="text-foreground bg-background">Visite guidée</option>
                <option value="Aventure" className="text-foreground bg-background">Aventure</option>
                <option value="Culture" className="text-foreground bg-background">Culture</option>
              </select>
            </div>

            {/* Nombre de personnes */}
            <div className="p-4">
              <label className="block text-sm font-normal text-white/90 select-none">
                Personnes
              </label>
              <div className="mt-1 flex items-center gap-2">
                <select
                  value={adults}
                  onChange={(e) => setAdults(Number(e.target.value))}
                  className="bg-transparent border-none text-white font-medium text-base focus:outline-none focus:ring-0 appearance-none cursor-pointer"
                >
                  {[1,2,3,4,5,6,7,8].map(n => (
                    <option key={n} value={n} className="text-foreground bg-background">{n} Adulte{n > 1 ? 's' : ''}</option>
                  ))}
                </select>
                <select
                  value={children}
                  onChange={(e) => setChildren(Number(e.target.value))}
                  className="bg-transparent border-none text-white font-medium text-base focus:outline-none focus:ring-0 appearance-none cursor-pointer"
                >
                  {[0,1,2,3,4,5,6].map(n => (
                    <option key={n} value={n} className="text-foreground bg-background">{n} Enfant{n > 1 ? 's' : ''}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Button */}
          <div className="lg:col-span-1 p-4 flex items-center justify-center">
            <button
              type="submit"
              className="w-full text-center bg-[#FFB73F] text-white py-3 px-8 rounded-md font-semibold text-sm transition-all duration-300 hover:bg-[#e69d1a] hover:scale-105 hover:shadow-lg whitespace-nowrap"
            >
              Rechercher
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ReservationBar;