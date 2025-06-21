import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { ArrowDown } from 'lucide-react';
import Typewriter from 'typewriter-effect';

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
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Base */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-portfolio-dark to-purple-950/50 z-0"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20 z-0">
        {/* Larger blurred circles */}
        <div className="absolute top-1/4 left-1/5 w-72 h-72 md:w-96 md:h-96 bg-portfolio-blue rounded-full mix-blend-screen filter blur-xl opacity-60 animate-float"></div>
        <div className="absolute bottom-1/4 right-1/5 w-72 h-72 md:w-96 md:h-96 bg-portfolio-gray rounded-full mix-blend-screen filter blur-xl opacity-60 animate-float animation-delay-1000"></div>
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-purple-600 rounded-full mix-blend-screen filter blur-xl opacity-50 animate-float animation-delay-2000"></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMDIwMjAiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0aDR2MWgtNHY0aC0xdi00aC00di0xaDR2LTRoMXY0em0wLTloNHYxaC00djRoLTF2LTRoLTR2LTFoNHYtNGgxdjR6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>
        
        {/* Floating particles effect */}
        <div className="absolute top-0 left-0 w-full h-full">
          {[...Array(8)].map((_, index) => (
            <div 
              key={index}
              className="absolute rounded-full bg-white opacity-30"
              style={{
                width: Math.random() * 5 + 2 + 'px',
                height: Math.random() * 5 + 2 + 'px',
                top: Math.random() * 100 + '%',
                left: Math.random() * 100 + '%',
                animation: `float ${Math.random() * 10 + 10}s infinite ease-in-out`,
                animationDelay: `${Math.random() * 5}s`
              }}
            />
          ))}
        </div>
      </div>
      
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-portfolio-dark/80 to-transparent z-0"></div>
      
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Content */}
        <div className="text-center md:text-left space-y-6 animate-slide-in-left">
          <div className="container mx-auto px-6 flex flex-col items-center md:grid md:grid-cols-2 gap-12 items-center relative z-10">
            <div className="hidden md:block w-16 h-1 bg-gradient-to-r from-portfolio-blue to-portfolio-gray mb-4"></div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight min-h-[3.5rem] md:min-h-[4.5rem]">
            <Typewriter
              key={language} // Adiciona uma key baseada na linguagem para forçar remontagem quando mudar
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
          
          <h2 className="text-xl md:text-2xl text-portfolio-blue font-medium">
            {t('heroSubtitle')}
          </h2>
          
          <p className="text-lg text-white/80 max-w-lg leading-relaxed mx-auto md:mx-0 text-center md:text-left">
            {t('heroDescription')}
          </p>
          
          <button
            onClick={scrollToAbout}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-portfolio-blue to-portfolio-gray text-white px-8 py-4 rounded-full font-medium hover:shadow-lg hover:shadow-portfolio-blue/25 transition-all duration-300 transform hover:scale-105"
          >
            <span>{t('learnMore')}</span>
            <ArrowDown size={20} />
          </button>
        </div>

        {/* Right Content - Avatar */}
        <div className="flex justify-center animate-slide-in-right">
          <div className="relative">
            {/* Larger glow effect on desktop */}
            <div className="absolute inset-0 scale-110 bg-gradient-to-r from-portfolio-blue to-portfolio-gray rounded-full blur-2xl opacity-20 animate-pulse"></div>
            <div className="absolute inset-0 scale-110 bg-gradient-to-r from-purple-600/30 to-blue-600/30 rounded-full blur-3xl opacity-30 animate-pulse animation-delay-1000"></div>
            
            {/* Glass effect container */}
            <div className="relative bg-gradient-to-br from-white/10 to-white/5 p-6 md:p-8 rounded-full backdrop-blur-md border border-white/10 shadow-inner">
              <img
                src="/avatar/edead071-0e96-44bd-8e04-ab96dac11319.png"
                alt="Kaiki Yuuji Avatar"
                className="w-64 h-64 md:w-80 md:h-80 lg:w-[26rem] lg:h-[26rem] xl:w-[30rem] xl:h-[30rem] object-contain animate-float"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute left-0 right-0 bottom-8 flex justify-center items-center w-full pointer-events-none">
        <button
          onClick={scrollToAbout}
          className="w-12 h-12 rounded-full border-2 border-white/30 flex items-center justify-center text-white/60 hover:text-white hover:border-white/60 transition-all duration-600 pointer-events-auto animate-bounce backdrop-blur-sm"
        >
          <ArrowDown size={20} />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
