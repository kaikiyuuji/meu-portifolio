
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface LanguageContextType {
  language: 'pt' | 'en';
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const translations = {
  pt: {
    // Navigation
    home: 'Início',
    about: 'Sobre',
    experience: 'Experiência',
    projects: 'Projetos',
    contact: 'Contato',
    
    // Hero Section
    heroTitle: 'Olá! Eu sou Kaiki Yuuji',
    heroSubtitle: 'Desenvolvedor Backend',
    heroDescription: 'Estudante de Ciência da Computação apaixonado por tecnologia, com interesse nas áreas de Quality Assurance e Desenvolvimento Web.',
    learnMore: 'Saiba Mais',
    
    // About Section
    aboutTitle: 'Sobre Mim',
    aboutDescription: 'Sou estudante de Ciência da Computação com foco em Desenvolvimento Web e iniciando estudos em Quality Assurance. Já atuei com PHP e Laravel em desenvolvimento de sistemas, além de ter experiência com investigação digital (OSINT), suporte administrativo e atendimento ao cliente.',
    aboutDescription2: 'Atualmente, também venho explorando o uso de Inteligência Artificial para aumentar minha produtividade, especialmente em áreas como geração de código, documentação automatizada e análise de dados.',
    
    // Experience Section
    experienceTitle: 'Experiência Profissional',
    
    // Projects Section
    projectsTitle: 'Meus Projetos',
    browsePortfolio: 'Ver Portfólio',
    
    // Contact Section
    contactTitle: 'Entre em Contato',
    followMe: 'Me Siga',
    
    // Skills
    skills: 'Habilidades',
    technologies: 'Tecnologias',
    
    // Footer
    footerText: '© 2024 Kaiki Yuuji. Todos os direitos reservados.',
  },
  en: {
    // Navigation
    home: 'Home',
    about: 'About',
    experience: 'Experience',
    projects: 'Projects',
    contact: 'Contact',
    
    // Hero Section
    heroTitle: 'Hello! I\'m Kaiki Yuuji',
    heroSubtitle: 'Backend Developer',
    heroDescription: 'Computer Science student passionate about technology, with interests in Quality Assurance and Web Development areas.',
    learnMore: 'Learn More',
    
    // About Section
    aboutTitle: 'About Me',
    aboutDescription: 'I am a Computer Science student focused on Web Development and starting studies in Quality Assurance. I have worked with PHP and Laravel in system development, in addition to having experience with digital investigation (OSINT), administrative support and customer service.',
    aboutDescription2: 'Currently, I have also been exploring the use of Artificial Intelligence to increase my productivity, especially in areas such as code generation, automated documentation and data analysis.',
    
    // Experience Section
    experienceTitle: 'Professional Experience',
    
    // Projects Section
    projectsTitle: 'My Projects',
    browsePortfolio: 'Browse Portfolio',
    
    // Contact Section
    contactTitle: 'Get In Touch',
    followMe: 'Follow Me',
    
    // Skills
    skills: 'Skills',
    technologies: 'Technologies',
    
    // Footer
    footerText: '© 2024 Kaiki Yuuji. All rights reserved.',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<'pt' | 'en'>('pt');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'pt' ? 'en' : 'pt');
  };

  const t = (key: string) => {
    return translations[language][key as keyof typeof translations['pt']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
