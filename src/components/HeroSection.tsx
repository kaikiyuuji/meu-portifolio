import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { ArrowDown } from 'lucide-react';
import Typewriter from 'typewriter-effect';
import { Squares } from './ui/squares-background';

const HeroSection = () => {
  const { t, language } = useLanguage();

  const scrollToAbout = () => {
    const element = document.getElementById('about');
    const header = document.querySelector('header');
    if (element && header) {
      const headerHeight = header.clientHeight;
      const elementTop = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementTop - headerHeight,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 md:pt-20">
      {/* Background Base */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-portfolio-dark to-purple-950/50 z-0"></div>
      
      {/* Animated Background Elements - Squares Component */}
      <div className="absolute inset-0 z-0">
        <Squares 
          direction="diagonal"
          speed={0.3}
          squareSize={50}
          borderColor="rgba(100, 116, 139, 0.1)" 
          hoverFillColor="rgba(79, 70, 229, 0.15)"
          className="opacity-50"
        />
      </div>
      
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-portfolio-dark/80 to-transparent z-0"></div>
      
      <div className="container mx-auto px-2 xs:px-4 sm:px-6 grid md:grid-cols-2 gap-4 sm:gap-8 md:gap-12 items-center relative z-10">
        {/* Left Content */}
        <div className="text-center md:text-left space-y-4 sm:space-y-6 animate-slide-in-left mt-4 sm:mt-8 md:mt-0">
          <div className="hidden md:block w-16 h-1 bg-gradient-to-r from-portfolio-blue to-portfolio-gray mb-4"></div>
          
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white leading-tight min-h-[4rem] sm:min-h-[5rem] md:min-h-[6rem]">
            <Typewriter
              key={language}
              onInit={(typewriter) => {
                typewriter
                  .typeString(language === 'pt' ? 'Olá! Eu sou Kaiki Yuuji' : "Hello! I'm Kaiki Yuuji")
                  .pauseFor(2000)
                  .deleteAll()
                  .pauseFor(500)
                  .typeString(language === 'pt' ? 'Olá! Eu sou Kaiki Yuuji' : "Hello! I'm Kaiki Yuuji")
                  .pauseFor(2000)
                  .deleteAll()
                  .pauseFor(500)
                  .start();
              }}
              options={{
                delay: 50,
                cursor: '|',
                wrapperClassName: 'text-white',
                cursorClassName: 'text-portfolio-white animate-blink',
                loop: true,
              }}
            />
          </h1>
          
          <h2 className="text-lg sm:text-xl md:text-2xl text-portfolio-blue font-medium">
            {t('heroSubtitle')}
          </h2>
          
          <p className="text-base sm:text-lg text-white/80 max-w-lg leading-relaxed mx-auto md:mx-0 text-center md:text-left">
            {t('heroDescription')}
          </p>
          
          <button
            onClick={scrollToAbout}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-portfolio-blue to-portfolio-gray text-white px-4 sm:px-6 md:px-8 py-3 md:py-4 rounded-full font-medium hover:shadow-lg hover:shadow-portfolio-blue/25 transition-all duration-300 transform hover:scale-105"
          >
            <span>{t('learnMore')}</span>
            <ArrowDown size={18} className="ml-1 sm:ml-2 hidden sm:block" />
          </button>
        </div>

        {/* Right Content - Avatar */}
        <div className="flex justify-center animate-slide-in-right mt-6 md:mt-0">
          <div className="relative">
            {/* Larger glow effect on desktop */}
            <div className="absolute inset-0 scale-110 bg-gradient-to-r from-portfolio-blue to-portfolio-gray rounded-full blur-2xl opacity-20 animate-pulse"></div>
            <div className="absolute inset-0 scale-110 bg-gradient-to-r from-purple-600/30 to-blue-600/30 rounded-full blur-3xl opacity-30 animate-pulse animation-delay-1000"></div>
            
            {/* Glass effect container */}
            <div className="relative bg-gradient-to-br from-white/10 to-white/5 p-3 xs:p-4 sm:p-6 md:p-8 rounded-full backdrop-blur-md border border-white/10 shadow-inner">
              <img
                src="/avatar/edead071-0e96-44bd-8e04-ab96dac11319.png"
                alt="Kaiki Yuuji Avatar"
                className="w-48 h-48 xs:w-56 xs:h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-[26rem] lg:h-[26rem] xl:w-[30rem] xl:h-[30rem] object-contain animate-float"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator - Escondido em mobile */}
      <div className="absolute left-0 right-0 bottom-4 sm:bottom-8 flex justify-center items-center w-full pointer-events-none hidden sm:flex">
        <button
          onClick={scrollToAbout}
          className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-white/30 flex items-center justify-center text-white/60 hover:text-white hover:border-white/60 transition-all duration-600 pointer-events-auto animate-bounce backdrop-blur-sm"
        >
          <ArrowDown size={16} className="sm:size-20" />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
