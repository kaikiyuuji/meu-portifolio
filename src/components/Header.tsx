"use client";

import { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Menu, X, Globe } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

interface NavItem {
  name: string;
  section: string;
  translationKey: string;
}

const navItems: NavItem[] = [
  { name: 'Início', section: '#hero', translationKey: 'home' },
  { name: 'Sobre', section: '#about', translationKey: 'about' },
  { name: 'Experiência', section: '#experience', translationKey: 'experience' },
  { name: 'Projetos', section: '#projects', translationKey: 'projects' },
  { name: 'Contato', section: '#contact', translationKey: 'contact' },
];

export default function Header() {
  const { t, language, toggleLanguage } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const isMobile = useIsMobile();
  
  // Detecta scroll para mudar o estilo do header
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrolled(scrollPosition > 10);
      
      // Detecta seção ativa para destacar no menu
      const sections = navItems.map(item => item.section.substring(1));
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Função para navegar para seções com rolagem suave
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId.substring(1));
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const NavLink = ({ item }: { item: NavItem }) => {
    const isActive = activeSection === item.section.substring(1);
    
    return (
      <motion.li
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
        className="relative"
      >
        <button
          onClick={() => scrollToSection(item.section)}
          className={`px-4 py-2 text-sm font-medium relative transition-all duration-300
            ${isActive 
              ? 'text-primary dark:text-primary-foreground' 
              : 'text-muted-foreground hover:text-primary dark:hover:text-primary-foreground'}`
          }
        >
          {t(item.translationKey)}
          {isActive && (
            <motion.div
              layoutId="activeSection"
              className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full"
              transition={{ type: 'spring', stiffness: 380, damping: 30 }}
            />
          )}
        </button>
      </motion.li>
    );
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
                     <motion.div 
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ delay: 0.2 }}
             className={`text-xl font-bold transition-colors duration-300 ${
               scrolled ? 'text-gray-800 dark:text-white' : 'text-white'
             }`}
           >
             Kaiki Yuuji
           </motion.div>
          
          {/* Menu para Desktop */}
          {!isMobile && (
            <nav className="hidden md:block">
              <motion.ul 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, staggerChildren: 0.1 }}
                className="flex space-x-2"
              >
                {navItems.map((item) => (
                  <NavLink key={item.section} item={item} />
                ))}
              </motion.ul>
            </nav>
          )}
          
          <div className="flex items-center gap-4">
            {/* Botão de mudança de idioma */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              whileTap={{ scale: 0.9 }}
            >
              <Button
                onClick={toggleLanguage}
                variant="ghost"
                size="icon"
                className={`relative group ${
                  scrolled 
                    ? 'text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white' 
                    : 'text-white hover:bg-white/10 bg-black/10 backdrop-blur-sm'
                }`}
                aria-label="Trocar idioma"
              >
                <Globe className="h-4.5 w-4.5" />
                <span className={`absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full text-[10px] font-medium ${
                  scrolled 
                    ? 'bg-primary text-white' 
                    : 'bg-white text-gray-900'
                }`}>
                  {language.toUpperCase()}
                </span>
              </Button>
            </motion.div>
            
            {/* Menu mobile */}
            {isMobile && (
              <Sheet>
                <SheetTrigger asChild>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    aria-label="Menu"
                    className={`${
                      scrolled 
                        ? 'text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white' 
                        : 'text-white hover:bg-white/10 bg-black/10 backdrop-blur-sm'
                    }`}
                  >
                    <Menu className="h-4.5 w-4.5" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[250px] sm:w-[300px] bg-gradient-to-br from-gray-950/90 via-gray-900/95 to-gray-950/90 border-l border-gray-800/30 backdrop-blur-xl">
                  <div className="flex flex-col h-full">
                    <div className="flex items-center justify-center my-8">
                      <div className="h-12 w-12 rounded-full bg-gradient-to-r from-portfolio-blue to-portfolio-gray p-[2px] flex items-center justify-center">
                        <img 
                          src="/favicon.ico" 
                          alt="Logo" 
                          className="h-full w-full rounded-full object-cover"
                        />
                      </div>
                    </div>
                    
                    <nav className="flex flex-col gap-8">
                      <ul className="flex flex-col space-y-1">
                        {navItems.map((item, index) => (
                          <motion.li 
                            key={item.section}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ 
                              delay: index * 0.1,
                              type: "spring",
                              stiffness: 260,
                              damping: 20 
                            }}
                          >
                            <button
                              onClick={(e) => {
                                e.preventDefault();
                                scrollToSection(item.section);
                                document.body.click(); // Fecha o sheet
                              }}
                              className={`relative block w-full text-left px-4 py-3 rounded-lg transition-all duration-300
                                ${activeSection === item.section.substring(1)
                                  ? 'bg-white/10 text-white font-medium'
                                  : 'text-gray-300 hover:bg-white/5 hover:text-white'
                                }`
                              }
                            >
                              <span className="relative z-10">{t(item.translationKey)}</span>
                              {activeSection === item.section.substring(1) && (
                                <motion.div 
                                  layoutId="activeMobileSection"
                                  className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-portfolio-blue to-portfolio-gray rounded-r-full"
                                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                />
                              )}
                            </button>
                          </motion.li>
                        ))}
                      </ul>
                    </nav>
                    
                    <div className="mt-auto mb-8 pt-8 border-t border-gray-800/30">
                      <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        className="flex justify-center"
                      >
                        <Button
                          onClick={toggleLanguage}
                          variant="outline"
                          className="bg-white/10 border-gray-700 hover:bg-white/20 text-white w-full max-w-[200px]"
                        >
                          <Globe className="h-4 w-4 mr-2" />
                          {language === 'pt' ? 'English' : 'Português'}
                        </Button>
                      </motion.div>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            )}
          </div>
        </div>
      </div>
    </motion.header>
  );
}
