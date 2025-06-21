import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Mail, MapPin, Linkedin, Github, Twitter, Instagram, Youtube } from 'lucide-react';
import { MessageCircle } from 'lucide-react';

const ContactSection = () => {
  const { t, language } = useLanguage();

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'kaikiramoshirata@gmail.com',
      href: 'mailto:kaikiramoshirata@gmail.com'
    },
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      value: '+55 91 984953816',
      href: 'https://wa.me/5591984953816'
    },
    {
      icon: MapPin,
      label: language === 'pt' ? 'Localização' : 'Location',
      value: 'Belém, PA - Brasil',
      href: 'https://maps.app.goo.gl/En7GgiJNsXcWYsKPA'
    }
  ];

  const socialLinks = [
    { icon: Linkedin, href: 'https://www.linkedin.com/in/kaiki-yuuji', label: 'LinkedIn' },
    { icon: Github, href: 'https://github.com/kaikiyuuji', label: 'GitHub' },
    { icon: Twitter, href: 'https://x.com/euhirata', label: 'Twitter' },
    { icon: Instagram, href: 'https://www.instagram.com/eu.hirata/', label: 'Instagram' },
    { icon: Youtube, href: 'https://www.youtube.com/@lixovazio', label: 'YouTube' }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-portfolio-dark via-portfolio-dark to-purple-900/20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-portfolio-blue rounded-full mix-blend-multiply filter blur-xl animate-float"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-portfolio-gray rounded-full mix-blend-multiply filter blur-xl animate-float animation-delay-400"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-white mb-6">
            {t('contactTitle')}
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-portfolio-blue to-portfolio-gray mx-auto mb-8"></div>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            {language === 'pt'
              ? 'Vamos conversar sobre oportunidades de trabalho, projetos interessantes ou apenas trocar uma ideia sobre tecnologia!'
              : "Let's talk about job opportunities, interesting projects, or just exchange ideas about technology!"
            }
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Information */}
          <div className="space-y-8 animate-slide-in-left">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">
                {language === 'pt' ? 'Informações de Contato' : 'Contact Information'}
              </h3>
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className="flex items-center space-x-4 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300 group"
                  >
                    <div className="bg-gradient-to-r from-portfolio-blue to-portfolio-gray p-3 rounded-lg group-hover:scale-110 transition-transform duration-300">
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-white/60 text-sm">{item.label}</div>
                      <div className="text-white font-medium">{item.value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">
                {t('followMe')}
              </h3>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white/5 rounded-lg hover:bg-gradient-to-r hover:from-portfolio-blue hover:to-portfolio-gray transition-all duration-300 transform hover:scale-110 group"
                    title={social.label}
                  >
                    <social.icon className="w-6 h-6 text-white group-hover:text-white" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-slide-in-right">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-6">
                {language === 'pt' ? 'Envie uma Mensagem' : 'Send a Message'}
              </h3>
              
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder={language === 'pt' ? 'Seu Nome' : 'Your Name'}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:border-portfolio-blue transition-colors duration-300"
                    required
                    disabled
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder={language === 'pt' ? 'Seu Email' : 'Your Email'}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:border-portfolio-blue transition-colors duration-300"
                    required
                    disabled
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="subject"
                    placeholder={language === 'pt' ? 'Assunto' : 'Subject'}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:border-portfolio-blue transition-colors duration-300"
                    required
                    disabled
                  />
                </div>
                <div>
                  <textarea
                    rows={5}
                    name="message"
                    placeholder={language === 'pt' ? 'Sua Mensagem' : 'Your Message'}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:border-portfolio-blue transition-colors duration-300 resize-none"
                    required
                    disabled
                  ></textarea>
                </div>
                <button
                  type="button"
                  disabled
                  className="w-full bg-gradient-to-r from-portfolio-blue to-portfolio-gray text-white py-4 rounded-lg font-medium hover:shadow-lg hover:shadow-portfolio-blue/25 transition-all duration-300 flex justify-center items-center"
                >
                  {language === 'pt' ? 'Em breve' : 'Coming Soon'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
