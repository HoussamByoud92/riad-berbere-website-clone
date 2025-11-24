import React from 'react';

const WelcomeIntro = () => {
  return (
    <section className="bg-white py-12 px-6 text-center md:py-20 md:px-8">
      <div className="mx-auto max-w-[900px]">
        <h6 className="font-secondary mb-4 text-xs font-bold uppercase tracking-[2px] text-[#FFB73F]">
          BIENVENUE CHEZ DIFFA TOURS
        </h6>
        <h2 className="font-display mb-6 text-[36px] font-normal leading-[1.4] text-[#2C2C2C] md:text-[42px]">
          Votre agence de voyage au cœur du Maroc authentique
        </h2>
        <p className="font-body text-base leading-[1.8] text-[#5C5C5C] md:text-lg">
          Découvrez le Maroc comme jamais auparavant avec{' '}
          <strong className="font-bold">Diffa Tours</strong>, votre partenaire privilégié pour des aventures inoubliables. Que vous rêviez d'explorer les ruelles animées de Marrakech, de vous détendre sur les plages dorées d'Agadir et Taghazout, ou de vivre l'expérience du désert sous un ciel étoilé, nous créons des circuits et excursions sur mesure qui révèlent la richesse culturelle, les paysages époustouflants et l'hospitalité légendaire du Royaume. Laissez-vous guider par notre passion et notre expertise locale.
        </p>
      </div>
    </section>
  );
};

export default WelcomeIntro;