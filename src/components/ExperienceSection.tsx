import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Calendar, MapPin, Building, Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '../lib/utils';

const ExperienceSection = () => {
  const { t, language } = useLanguage();

  const experiences = [
    {
      company: language === 'pt' ? 'Segundo Serviço de Registro de Imóveis de Belém' : 'Second Real Estate Registry Service of Belém',
      position: language === 'pt' ? 'Auxiliar de Cartório' : 'Registry Assistant',
      period: language === 'pt' ? 'Abril 2024 - Março 2025 (1 ano)' : 'April 2024 - March 2025 (1 year)',
      location: 'Belém, Pará, Brasil',
      color: 'from-blue-500 to-cyan-400',
      iconBg: 'bg-blue-500/20',
      description: [
        language === 'pt' 
          ? 'Emissão de certidões, garantindo precisão e conformidade com as normas legais'
          : 'Issuance of certificates, ensuring accuracy and compliance with legal standards',
        language === 'pt'
          ? 'Atendimento ao cliente, oferecendo suporte eficiente e resolutivo'
          : 'Customer service, providing efficient and effective support',
        language === 'pt'
          ? 'Organização e controle de documentos, mantendo a conformidade e eficiência nos processos administrativos'
          : 'Document organization and control, maintaining compliance and efficiency in administrative processes'
      ]
    },
    {
      company: 'kolares TI',
      position: language === 'pt' ? 'Desenvolvedor de Software Ágil - Estagiário' : 'Agile Software Developer - Intern',
      period: language === 'pt' ? 'Maio 2023 - Março 2024 (11 meses)' : 'May 2023 - March 2024 (11 months)',
      location: 'Belém, Pará, Brasil',
      color: 'from-violet-500 to-purple-400',
      iconBg: 'bg-violet-500/20',
      description: [
        language === 'pt'
          ? 'Desenvolvimento de sistemas web utilizando PHP e o framework Laravel'
          : 'Web system development using PHP and Laravel framework',
        language === 'pt'
          ? 'Implementação de funcionalidades e correções de bugs, garantindo a qualidade e a eficiência do código'
          : 'Feature implementation and bug fixes, ensuring code quality and efficiency',
        language === 'pt'
          ? 'Colaboração em equipe ágil, participando ativamente de sprints e reuniões de desenvolvimento'
          : 'Agile team collaboration, actively participating in sprints and development meetings'
      ]
    },
    {
      company: language === 'pt' ? 'Polícia Civil do Estado do Pará' : 'Civil Police of Pará State',
      position: language === 'pt' ? 'Estagiário' : 'Intern',
      period: language === 'pt' ? 'Agosto 2022 - Abril 2023 (9 meses)' : 'August 2022 - April 2023 (9 months)',
      location: 'Belém, Pará, Brasil',
      color: 'from-emerald-500 to-green-400',
      iconBg: 'bg-emerald-500/20',
      description: [
        language === 'pt'
          ? 'Realização de operações de inteligência de fontes abertas (OSINT)'
          : 'Conducting open source intelligence (OSINT) operations',
        language === 'pt'
          ? 'Apoio administrativo no gerenciamento de documentos e dados utilizando Microsoft Word e Excel'
          : 'Administrative support in document and data management using Microsoft Word and Excel',
        language === 'pt'
          ? 'Colaboração na elaboração de relatórios e na comunicação de dados importantes'
          : 'Collaboration in report preparation and communication of important data'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
            {t('experienceTitle')}
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-portfolio-blue to-portfolio-gray mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {language === 'pt' 
              ? 'Minha jornada profissional e acadêmica no desenvolvimento de software e tecnologia'
              : 'My professional and academic journey in software development and technology'
            }
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="space-y-12 md:space-y-16">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.2 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <div className="flex flex-col md:flex-row gap-5 relative">
                  {/* Círculo com ícone */}
                  <div className="hidden md:flex">
                    <div 
                      className={cn(
                        "w-16 h-16 rounded-full flex items-center justify-center shadow-lg z-10",
                        exp.iconBg,
                        "backdrop-blur-lg"
                      )}
                    >
                      <Briefcase 
                        className={cn(
                          "w-7 h-7 text-white group-hover:scale-110 transition-transform duration-300",
                        )} 
                      />
                    </div>
                    {index !== experiences.length - 1 && (
                      <div className="absolute left-8 top-16 bottom-0 w-[2px] bg-gradient-to-b from-gray-300 to-transparent dark:from-gray-700 h-[calc(100%+2rem)]" />
                    )}
                  </div>
                  
                  {/* Card principal */}
                  <div className="w-full md:w-[calc(100%-4rem)]">
                    <div 
                      className={cn(
                        "rounded-2xl p-6 md:p-8 relative overflow-hidden",
                        "bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg",
                        "border border-gray-200 dark:border-gray-700",
                        "shadow-lg hover:shadow-xl transition-all duration-300",
                        "group-hover:-translate-y-1"
                      )}
                    >
                      {/* Gradiente decorativo */}
                      <div className={cn(
                        "absolute -top-24 -right-24 w-48 h-48 rounded-full blur-3xl opacity-20 group-hover:opacity-30 transition-opacity",
                        `bg-gradient-to-br ${exp.color}`
                      )} />
                      
                      <div className="relative">
                        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                          <div>
                            {/* Título */}
                            <div className="flex items-center gap-2 md:hidden mb-3">
                              <div className={cn(
                                "w-10 h-10 rounded-full flex items-center justify-center",
                                exp.iconBg
                              )}>
                                <Briefcase className="w-5 h-5 text-white" />
                              </div>
                            </div>
                            
                            <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-1 group-hover:text-portfolio-blue transition-colors duration-300">
                              {exp.position}
                            </h3>
                            <div className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 font-medium mb-3">
                              <Building size={18} className="flex-shrink-0 text-portfolio-blue" />
                              <span className="text-sm md:text-base">{exp.company}</span>
                            </div>
                          </div>
                          
                          <div className="flex flex-col space-y-2 text-sm md:text-right">
                            <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
                              <Calendar size={16} className="flex-shrink-0" />
                              <span>{exp.period}</span>
                            </div>
                            <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
                              <MapPin size={16} className="flex-shrink-0" />
                              <span>{exp.location}</span>
                            </div>
                          </div>
                        </div>
                        
                        {/* Linha divisória */}
                        <div className="my-4 border-t border-gray-200 dark:border-gray-700" />
                        
                        {/* Lista de realizações */}
                        <ul className="space-y-3 mt-3">
                          {exp.description.map((item, itemIndex) => (
                            <motion.li 
                              key={itemIndex} 
                              className="flex items-start space-x-3"
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.4, delay: 0.3 + (itemIndex * 0.1) }}
                              viewport={{ once: true }}
                            >
                              <div className={cn(
                                "w-2 h-2 rounded-full mt-2 flex-shrink-0",
                                `bg-gradient-to-r ${exp.color}`
                              )} />
                              <span className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                {item}
                              </span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
