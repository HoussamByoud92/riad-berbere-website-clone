import React from 'react';
import { Facebook, Instagram, ChevronUp } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    {
      name: 'Facebook',
      icon: Facebook,
      href: '#',
    },
    {
      name: 'Instagram',
      icon: Instagram,
      href: '#',
    },
  ];

  const legalLinks = ['PRIVACY', 'TERMS OF USE', 'POLICY'];

  return (
    <footer className="bg-[#1A1A1A] text-white font-body border-t border-solid border-[#333333] pt-10 px-6 pb-10 md:pt-[60px] md:px-8 md:pb-8">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-10 lg:gap-8 pb-8 text-center md:text-left">
          {/* Address */}
          <div>
            <h6 className="font-secondary uppercase text-xs tracking-[2px] text-[#8B8B8B] mb-4">
              ADRESSE
            </h6>
            <p className="text-sm text-white leading-[1.8]">
              Diffa Tours, Avenue Mohammed V, Quartier Gueliz, Marrakech, Maroc
            </p>
          </div>

          {/* Phone */}
          <div>
            <h6 className="font-secondary uppercase text-xs tracking-[2px] text-[#8B8B8B] mb-4">
              TÉLÉPHONE
            </h6>
            <a href="tel:+212524123456" className="text-sm text-white leading-[1.8] hover:text-primary transition-colors">
              +212 524 123 456
            </a>
          </div>

          {/* Email */}
          <div>
            <h6 className="font-secondary uppercase text-xs tracking-[2px] text-[#8B8B8B] mb-4">
              EMAIL
            </h6>
            <a href="mailto:contact@diffatours.com" className="text-sm text-white leading-[1.8] hover:text-primary transition-colors">
              contact@diffatours.com
            </a>
          </div>

          {/* Social */}
          <div>
            <h6 className="font-secondary uppercase text-xs tracking-[2px] text-[#8B8B8B] mb-4">
              RÉSEAUX SOCIAUX
            </h6>
            <div className="flex gap-4 justify-center md:justify-start">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.name}
                  className="text-white hover:text-primary transition-colors"
                >
                  <link.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-solid border-[#333333] pt-8">
          <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-6 md:gap-4">
            <p className="text-xs text-[#6B6B6B] text-center">
              © Copyright Diffa Tours. Tous droits réservés.
            </p>

            <div className="flex items-center flex-col sm:flex-row gap-4">
              <div className="flex items-center gap-2">
                {legalLinks.map((link, index) => (
                  <React.Fragment key={link}>
                    <a href="#" className="text-xs text-[#6B6B6B] uppercase hover:text-white transition-colors">
                      {link}
                    </a>
                    {index < legalLinks.length - 1 && (
                      <span className="text-[#6B6B6B]">|</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
              
              <a href="#" aria-label="Scroll to top" className="group">
                <div className="w-10 h-10 border border-[#6B6B6B] flex items-center justify-center hover:bg-white/10 transition-colors">
                  <ChevronUp className="w-5 h-5 text-[#6B6B6B] transition-colors" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;