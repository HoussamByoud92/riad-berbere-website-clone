'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'fr' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  fr: {
    // Navigation
    'nav.home': 'Accueil',
    'nav.excursions': 'Nos Excursions',
    'nav.about': 'Qui Sommes-Nous',
    'nav.services': 'Autres Services',
    'nav.contact': 'Contact',
    
    // Common
    'common.reserve': 'Réserver',
    'common.book_now': 'Réserver maintenant',
    'common.from': 'À partir de',
    'common.per_person': 'par personne',
    'common.duration': 'Durée',
    'common.group_size': 'Taille du groupe',
    'common.language': 'Langue',
    'common.difficulty': 'Difficulté',
    'common.select_date': 'Sélectionner une date',
    'common.price': 'Prix',
    'common.available': 'Disponible',
    'common.unavailable': 'Non disponible',
    
    // Home
    'home.hero.title': 'Diffa Tours',
    'home.hero.subtitle': 'Explorez la magie du Maroc avec des expériences inoubliables',
    'home.filter.destination': 'Destination',
    'home.filter.date': 'Date',
    'home.filter.type': "Type d'excursion",
    'home.filter.persons': 'Personnes',
    'home.filter.search': 'Rechercher',
    
    // Excursions
    'excursions.marrakech': 'Excursions à Marrakech',
    'excursions.agadir': 'Excursions à Agadir',
    'excursions.circuits': 'Circuits',
    'excursions.taghazout': 'Excursions à Taghazout',
    
    // Calendar
    'calendar.select_activity': 'Sélectionnez une activité',
    'calendar.select_date_time': 'Sélectionnez la date et l\'heure',
    'calendar.participants': 'Nombre de participants',
    'calendar.book_now': 'Réserver maintenant',
    'calendar.price_per_person': 'Prix par personne',
    
    // Days
    'days.sunday': 'Dim',
    'days.monday': 'Lun',
    'days.tuesday': 'Mar',
    'days.wednesday': 'Mer',
    'days.thursday': 'Jeu',
    'days.friday': 'Ven',
    'days.saturday': 'Sam',
    
    // Months
    'months.january': 'Janvier',
    'months.february': 'Février',
    'months.march': 'Mars',
    'months.april': 'Avril',
    'months.may': 'Mai',
    'months.june': 'Juin',
    'months.july': 'Juillet',
    'months.august': 'Août',
    'months.september': 'Septembre',
    'months.october': 'Octobre',
    'months.november': 'Novembre',
    'months.december': 'Décembre',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.excursions': 'Our Excursions',
    'nav.about': 'About Us',
    'nav.services': 'Other Services',
    'nav.contact': 'Contact',
    
    // Common
    'common.reserve': 'Book',
    'common.book_now': 'Book Now',
    'common.from': 'From',
    'common.per_person': 'per person',
    'common.duration': 'Duration',
    'common.group_size': 'Group size',
    'common.language': 'Language',
    'common.difficulty': 'Difficulty',
    'common.select_date': 'Select a date',
    'common.price': 'Price',
    'common.available': 'Available',
    'common.unavailable': 'Unavailable',
    
    // Home
    'home.hero.title': 'Diffa Tours',
    'home.hero.subtitle': 'Explore the magic of Morocco with unforgettable experiences',
    'home.filter.destination': 'Destination',
    'home.filter.date': 'Date',
    'home.filter.type': 'Excursion type',
    'home.filter.persons': 'Persons',
    'home.filter.search': 'Search',
    
    // Excursions
    'excursions.marrakech': 'Marrakech Excursions',
    'excursions.agadir': 'Agadir Excursions',
    'excursions.circuits': 'Circuits',
    'excursions.taghazout': 'Taghazout Excursions',
    
    // Calendar
    'calendar.select_activity': 'Select an activity',
    'calendar.select_date_time': 'Select date and time',
    'calendar.participants': 'Number of participants',
    'calendar.book_now': 'Book now',
    'calendar.price_per_person': 'Price per person',
    
    // Days
    'days.sunday': 'Sun',
    'days.monday': 'Mon',
    'days.tuesday': 'Tue',
    'days.wednesday': 'Wed',
    'days.thursday': 'Thu',
    'days.friday': 'Fri',
    'days.saturday': 'Sat',
    
    // Months
    'months.january': 'January',
    'months.february': 'February',
    'months.march': 'March',
    'months.april': 'April',
    'months.may': 'May',
    'months.june': 'June',
    'months.july': 'July',
    'months.august': 'August',
    'months.september': 'September',
    'months.october': 'October',
    'months.november': 'November',
    'months.december': 'December',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguage] = useState<Language>('fr');

  useEffect(() => {
    const saved = localStorage.getItem('language') as Language;
    if (saved && (saved === 'fr' || saved === 'en')) {
      setLanguage(saved);
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['fr']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};
