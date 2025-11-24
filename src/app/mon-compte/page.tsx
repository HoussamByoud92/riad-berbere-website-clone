'use client';

import Header from '@/components/sections/header';
import Footer from '@/components/sections/footer';
import { User, Mail, Phone, MapPin, Calendar, Settings, LogOut, BookOpen } from 'lucide-react';
import Link from 'next/link';

export default function MonComptePage() {
  // This will be replaced with actual user data from authentication
  const user = {
    name: "Mohammed Alami",
    email: "mohammed.alami@example.com",
    phone: "+212 6 12 34 56 78",
    address: "Casablanca, Maroc",
    memberSince: "Janvier 2024",
    totalReservations: 5
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4">
          {/* Page Header */}
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-display font-light mb-2">Mon Compte</h1>
            <p className="text-muted">Gérez vos informations personnelles et vos réservations</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-lg p-6 sticky top-28">
                <div className="flex flex-col items-center mb-6">
                  <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <User className="w-12 h-12 text-primary" />
                  </div>
                  <h2 className="font-display text-2xl text-center mb-1">{user.name}</h2>
                  <p className="text-muted text-sm">Membre depuis {user.memberSince}</p>
                </div>

                <nav className="space-y-2">
                  <Link 
                    href="/mon-compte" 
                    className="flex items-center gap-3 px-4 py-3 rounded-lg bg-primary/10 text-primary font-medium transition-colors"
                  >
                    <User className="w-5 h-5" />
                    Informations personnelles
                  </Link>
                  <Link 
                    href="/mes-reservations" 
                    className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-secondary text-foreground transition-colors"
                  >
                    <BookOpen className="w-5 h-5" />
                    Mes réservations
                  </Link>
                  <Link 
                    href="/mon-compte/parametres" 
                    className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-secondary text-foreground transition-colors"
                  >
                    <Settings className="w-5 h-5" />
                    Paramètres
                  </Link>
                  <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-destructive/10 text-destructive transition-colors">
                    <LogOut className="w-5 h-5" />
                    Se déconnecter
                  </button>
                </nav>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 mb-6">
                <h3 className="font-display text-2xl mb-6">Informations personnelles</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4 p-4 border border-border rounded-lg">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <User className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <label className="text-sm text-muted mb-1 block">Nom complet</label>
                      <p className="font-medium">{user.name}</p>
                    </div>
                    <button className="text-primary text-sm font-semibold hover:underline">
                      Modifier
                    </button>
                  </div>

                  <div className="flex items-start gap-4 p-4 border border-border rounded-lg">
                    <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-accent" />
                    </div>
                    <div className="flex-1">
                      <label className="text-sm text-muted mb-1 block">Email</label>
                      <p className="font-medium">{user.email}</p>
                    </div>
                    <button className="text-primary text-sm font-semibold hover:underline">
                      Modifier
                    </button>
                  </div>

                  <div className="flex items-start gap-4 p-4 border border-border rounded-lg">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <label className="text-sm text-muted mb-1 block">Téléphone</label>
                      <p className="font-medium">{user.phone}</p>
                    </div>
                    <button className="text-primary text-sm font-semibold hover:underline">
                      Modifier
                    </button>
                  </div>

                  <div className="flex items-start gap-4 p-4 border border-border rounded-lg">
                    <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-accent" />
                    </div>
                    <div className="flex-1">
                      <label className="text-sm text-muted mb-1 block">Adresse</label>
                      <p className="font-medium">{user.address}</p>
                    </div>
                    <button className="text-primary text-sm font-semibold hover:underline">
                      Modifier
                    </button>
                  </div>
                </div>
              </div>

              {/* Stats Card */}
              <div className="bg-gradient-to-br from-primary to-accent rounded-lg shadow-lg p-6 md:p-8 text-white">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-display text-2xl">Votre activité</h3>
                  <Calendar className="w-8 h-8 opacity-80" />
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <p className="text-white/80 text-sm mb-1">Réservations totales</p>
                    <p className="text-4xl font-display font-bold">{user.totalReservations}</p>
                  </div>
                  <div>
                    <p className="text-white/80 text-sm mb-1">Points de fidélité</p>
                    <p className="text-4xl font-display font-bold">250</p>
                  </div>
                </div>
                <Link 
                  href="/mes-reservations"
                  className="mt-6 inline-block bg-white text-primary px-6 py-3 rounded-lg font-semibold hover:bg-white/90 transition-colors"
                >
                  Voir mes réservations
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
