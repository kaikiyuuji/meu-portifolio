import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const AboutSection = () => {
  const { t } = useLanguage();

  const technologies = [
    { name: 'PHP', color: 'bg-purple-500' },
    { name: 'Laravel', color: 'bg-red-500' },
    { name: 'JavaScript', color: 'bg-yellow-500' },
    { name: 'TypeScript', color: 'bg-blue-500' },
    { name: 'React', color: 'bg-cyan-500' },
    { name: 'Node.js', color: 'bg-green-500' },
    { name: 'MySQL', color: 'bg-orange-500' },
    { name: 'Git', color: 'bg-gray-600' },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-slide-in-left">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                {t('aboutTitle')}
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-portfolio-blue to-portfolio-gray mb-8"></div>
            </div>

            <div className="space-y-6">
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
                {t('aboutDescription')}
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
                {t('aboutDescription2')}
              </p>
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-8 animate-slide-in-right">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                {t('technologies')}
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {technologies.map((tech, index) => (
                  <div
                    key={tech.name}
                    className="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg hover:shadow-md transition-shadow duration-300"
                  >
                    <div className={`w-3 h-3 rounded-full ${tech.color}`}></div>
                    <span className="font-medium text-gray-900 dark:text-white">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-portfolio-blue to-blue-600 rounded-2xl p-6 text-white">
                <div className="text-3xl font-bold mb-2">2+</div>
                <div className="text-blue-100">Anos de Experiência</div>
              </div>
              <div className="bg-gradient-to-br from-portfolio-gray to-purple-600 rounded-2xl p-6 text-white">
                <div className="text-3xl font-bold mb-2">10+</div>
                <div className="text-purple-100">Projetos Realizados</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
