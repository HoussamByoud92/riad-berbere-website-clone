"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X, Globe, DollarSign } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useCurrency } from '@/contexts/CurrencyContext';

const navLinks = [
  { href: "/", label: "nav.home" },
  { href: "/nos-excursions", label: "nav.excursions" },
  { href: "/qui-sommes-nous", label: "nav.about" },
  { href: "/autres-services", label: "nav.services" },
  { href: "/contact", label: "nav.contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const { currency, setCurrency } = useCurrency();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${isScrolled ? 'bg-[rgba(255,183,63,0.95)] backdrop-blur-sm shadow-md' : 'bg-black/30'}`}>
        <div className="mx-auto max-w-none px-5 lg:px-20">
          
          {/* Desktop Navigation */}
          <div className="hidden h-24 w-full items-center md:flex">
            <div className="flex-1">
              <Link href="/" className="inline-block">
                <div className="text-2xl font-display font-bold text-white">
                  Diffa Tours
                </div>
              </Link>
            </div>
            
            <div className="flex-none">
              <nav className="font-secondary">
                <ul className="flex items-center space-x-6">
                  {navLinks.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} className="text-sm font-semibold uppercase tracking-[1px] text-white transition-colors hover:text-accent">
                        {t(link.label)}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            <div className="flex flex-1 justify-end items-center gap-4">
              {/* Language Switcher */}
              <div className="flex items-center gap-2 bg-white/10 rounded px-3 py-2">
                <Globe className="w-4 h-4 text-white" />
                <button
                  onClick={() => setLanguage('fr')}
                  className={`text-xs font-semibold ${language === 'fr' ? 'text-white' : 'text-white/60'}`}
                >
                  FR
                </button>
                <span className="text-white/40">|</span>
                <button
                  onClick={() => setLanguage('en')}
                  className={`text-xs font-semibold ${language === 'en' ? 'text-white' : 'text-white/60'}`}
                >
                  EN
                </button>
              </div>

              {/* Currency Switcher */}
              <div className="flex items-center gap-2 bg-white/10 rounded px-3 py-2">
                <DollarSign className="w-4 h-4 text-white" />
                <button
                  onClick={() => setCurrency('MAD')}
                  className={`text-xs font-semibold ${currency === 'MAD' ? 'text-white' : 'text-white/60'}`}
                >
                  MAD
                </button>
                <span className="text-white/40">|</span>
                <button
                  onClick={() => setCurrency('USD')}
                  className={`text-xs font-semibold ${currency === 'USD' ? 'text-white' : 'text-white/60'}`}
                >
                  USD
                </button>
                <span className="text-white/40">|</span>
                <button
                  onClick={() => setCurrency('EUR')}
                  className={`text-xs font-semibold ${currency === 'EUR' ? 'text-white' : 'text-white/60'}`}
                >
                  EUR
                </button>
              </div>

              <a href="#reservation" className="inline-block rounded-[4px] border border-white px-6 py-3 text-sm font-semibold uppercase tracking-wider text-white transition-all duration-300 hover:bg-white hover:text-zinc-900 hover:scale-105 hover:shadow-lg">
                Réservez maintenant
              </a>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="flex h-20 w-full items-center justify-between md:hidden">
            <button onClick={() => setIsMenuOpen(true)} aria-label="Open menu" className="p-2">
              <Menu className="h-7 w-7 text-white" />
            </button>
            
            <Link href="/" className="absolute left-1/2 -translate-x-1/2">
              <div className="text-xl font-display font-bold text-white">
                Diffa Tours
              </div>
            </Link>

            <div className="w-7 p-2"></div>
          </div>
        </div>
      </header>
      
      {/* Mobile Menu Panel */}
      <div 
        className={`fixed inset-0 z-[100] md:hidden transition-opacity duration-300 ease-in-out ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        aria-modal="true"
      >
        <div className="absolute inset-0 bg-black/50" onClick={() => setIsMenuOpen(false)} />
        
        <div 
          className={`absolute right-0 top-0 h-full w-4/5 max-w-sm bg-card p-6 shadow-xl transition-transform duration-300 ease-in-out overflow-y-auto ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
          onClick={(e) => e.stopPropagation()}
        >
            <div className="flex justify-end">
                <button onClick={() => setIsMenuOpen(false)} aria-label="Close menu" className="p-2">
                    <X className="h-7 w-7 text-foreground" />
                </button>
            </div>
            
            {/* Language & Currency Switchers */}
            <div className="mt-4 space-y-3 border-b border-border pb-4">
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-muted" />
                <button
                  onClick={() => setLanguage('fr')}
                  className={`text-sm font-semibold ${language === 'fr' ? 'text-primary' : 'text-muted'}`}
                >
                  FR
                </button>
                <span className="text-muted">|</span>
                <button
                  onClick={() => setLanguage('en')}
                  className={`text-sm font-semibold ${language === 'en' ? 'text-primary' : 'text-muted'}`}
                >
                  EN
                </button>
              </div>
              
              <div className="flex items-center gap-2">
                <DollarSign className="w-4 h-4 text-muted" />
                <button
                  onClick={() => setCurrency('MAD')}
                  className={`text-sm font-semibold ${currency === 'MAD' ? 'text-primary' : 'text-muted'}`}
                >
                  MAD
                </button>
                <span className="text-muted">|</span>
                <button
                  onClick={() => setCurrency('USD')}
                  className={`text-sm font-semibold ${currency === 'USD' ? 'text-primary' : 'text-muted'}`}
                >
                  USD
                </button>
                <span className="text-muted">|</span>
                <button
                  onClick={() => setCurrency('EUR')}
                  className={`text-sm font-semibold ${currency === 'EUR' ? 'text-primary' : 'text-muted'}`}
                >
                  EUR
                </button>
              </div>
            </div>
            
            <nav className="mt-8 font-secondary">
                <ul className="flex flex-col items-center space-y-6">
                    {navLinks.map((link) => (
                        <li key={link.href}>
                            <Link href={link.href} onClick={() => setIsMenuOpen(false)} className="text-lg font-medium uppercase tracking-wider text-foreground transition-colors hover:text-primary">
                                {t(link.label)}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
            <div className="mt-10 pt-6 border-t border-border text-center">
                <a href="#reservation" className="inline-block w-full rounded-[4px] bg-primary px-6 py-3 text-sm font-semibold uppercase tracking-wider text-primary-foreground transition-all duration-300 hover:bg-primary/90 hover:scale-105 hover:shadow-lg">
                    Réservez maintenant
                </a>
            </div>
        </div>
      </div>
    </>
  );
}