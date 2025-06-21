import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer = () => {
  const { t, language } = useLanguage();

  return (
    <footer className="bg-portfolio-dark border-t border-white/10 py-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 items-center text-white text-center md:text-left gap-4">
          
          {/* Esquerda - Nome */}
          <div className="text-white/60 flex justify-center md:justify-start items-center">
            <span>
              {language === 'pt'
                ? 'Disponível para projetos.'
                : 'Available for projects.'}
            </span>
          </div>
    
          {/* Centro - Texto de direitos autorais */}
          <div className="text-white/60 text-center">
            <span>{t('footerText')}</span>
          </div>
    
          {/* Direita - Frase final */}
          <div className="text-white/60 text-center md:text-right">
            <span>
              {language === 'pt'
                ? 'Feito com café, código e boas vibrações.'
                : 'Built with coffee, code, and good vibes.'}
            </span>
          </div>
    
        </div>
      </div>
  </footer>
  );
};

export default Footer;
