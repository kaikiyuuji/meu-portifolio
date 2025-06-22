import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { ExternalLink, Github, Code, Server, Users, Shield, Database, Lock, Settings } from 'lucide-react';

const ProjectsSection = () => {
  const { t, language } = useLanguage();

  const projects = [
    {
      title: 'API REST com PHP',
      description: language === 'pt'
        ? 'API RESTful desenvolvida em PHP com Slim Framework. Projeto de estudo focado em práticas de desenvolvimento de APIs, incluindo criação de endpoints, manipulação de requisições HTTP e estruturação de projetos.'
        : 'RESTful API developed in PHP with Slim Framework. Study project focused on API development practices, including endpoint creation, HTTP request handling and project structuring.',
      longDescription: language === 'pt'
        ? 'Uma API completa para gerenciamento de usuários com operações CRUD, autenticação com senhas criptografadas e respostas em formato JSON. Desenvolvida para praticar conceitos fundamentais de desenvolvimento backend.'
        : 'A complete API for user management with CRUD operations, authentication with encrypted passwords and JSON format responses. Developed to practice fundamental backend development concepts.',
      technologies: ['PHP', 'Slim Framework', 'Composer', 'REST API'],
      features: [
        {
          icon: Users,
          text: language === 'pt' ? 'Gerenciamento completo de usuários' : 'Complete user management'
        },
        {
          icon: Server,
          text: language === 'pt' ? 'Endpoints RESTful organizados' : 'Organized RESTful endpoints'
        },
        {
          icon: Shield,
          text: language === 'pt' ? 'Senhas criptografadas com segurança' : 'Securely encrypted passwords'
        },
        {
          icon: Code,
          text: language === 'pt' ? 'Respostas padronizadas em JSON' : 'Standardized JSON responses'
        }
      ],
      endpoints: [
        { method: 'POST', path: '/users', desc: language === 'pt' ? 'Criar usuário' : 'Create user' },
        { method: 'GET', path: '/users', desc: language === 'pt' ? 'Listar usuários' : 'List users' },
        { method: 'GET', path: '/users/{id}', desc: language === 'pt' ? 'Buscar por ID' : 'Find by ID' },
        { method: 'PUT', path: '/users/{id}', desc: language === 'pt' ? 'Atualizar usuário' : 'Update user' },
        { method: 'DELETE', path: '/users/{id}', desc: language === 'pt' ? 'Deletar usuário' : 'Delete user' }
      ],
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop',
      githubUrl: 'https://github.com/kaikiyuuji/api-rest-users',
      liveUrl: '#',
      status: language === 'pt' ? 'Concluído' : 'Completed',
      tags: ['PHP', 'REST API']
    },
    {
      title: 'Laravel API CRUD',
      description: language === 'pt'
        ? 'API RESTful construída com Laravel 12, fornecendo funcionalidades completas de gerenciamento de usuários (CRUD). Projeto desenvolvido para estudo e aprendizado da estrutura do Laravel.'
        : 'RESTful API built with Laravel 12, providing complete user management functionalities (CRUD). Project developed for studying and learning the Laravel framework structure.',
      longDescription: language === 'pt'
        ? 'Este projeto foi desenvolvido como parte dos meus estudos em desenvolvimento web com Laravel. O objetivo principal foi entender na prática como construir uma API RESTful completa, utilizando as boas práticas e ferramentas modernas do ecossistema Laravel.'
        : 'This project was developed as part of my studies in web development with Laravel. The main objective was to understand in practice how to build a complete RESTful API, using good practices and modern tools from the Laravel ecosystem.',
      technologies: ['PHP 8.4', 'Laravel 12', 'MySQL', 'Composer', 'Insomnia'],
      features: [
        {
          icon: Users,
          text: language === 'pt' ? 'Gerenciamento de usuários CRUD' : 'CRUD user management'
        },
        {
          icon: Server,
          text: language === 'pt' ? 'Endpoints RESTful padronizados' : 'Standardized RESTful endpoints'
        },
        {
          icon: Database,
          text: language === 'pt' ? 'Migrations e Eloquent ORM' : 'Migrations and Eloquent ORM'
        },
        {
          icon: Lock,
          text: language === 'pt' ? 'Autenticação com Sanctum' : 'Sanctum authentication'
        }
      ],
      endpoints: [
        { method: 'GET', path: '/api/users', desc: language === 'pt' ? 'Listar usuários' : 'List users' },
        { method: 'GET', path: '/api/users/{user}', desc: language === 'pt' ? 'Mostrar usuário' : 'Show user' },
        { method: 'POST', path: '/api/users', desc: language === 'pt' ? 'Criar usuário' : 'Create user' },
        { method: 'PUT', path: '/api/users/{user}', desc: language === 'pt' ? 'Atualizar usuário' : 'Update user' },
        { method: 'DELETE', path: '/api/users/{user}', desc: language === 'pt' ? 'Remover usuário' : 'Delete user' }
      ],
      image: 'https://images.unsplash.com/photo-1546900703-cf06143d1239?w=600&h=400&fit=crop',
      githubUrl: 'https://github.com/kaikiyuuji/crud-laravel-api',
      liveUrl: '#',
      status: language === 'pt' ? 'Concluído' : 'Completed',
      tags: ['Laravel', 'PHP', 'API']
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
            {t('projectsTitle')}
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-portfolio-blue to-portfolio-gray mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {language === 'pt'
              ? 'Projetos destacados desenvolvidos utilizando tecnologias modernas e boas práticas'
              : 'Featured projects developed using modern technologies and best practices'
            }
          </p>
        </div>

        {/* Projects Grid */}
        <div className="max-w-6xl mx-auto space-y-20">
          {projects.map((project, index) => (
            <div key={index} className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-scale-in">
              <div className="lg:flex">
                {/* Project Image */}
                <div className={`lg:w-1/2 relative overflow-hidden ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 lg:h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white/90 rounded-full hover:bg-white transition-colors duration-300 hover:scale-110 transform"
                    >
                      <Github size={20} className="text-gray-800" />
                    </a>
                  </div>
                  <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {project.status}
                    </span>
                  </div>
                </div>

                {/* Project Content */}
                <div className={`lg:w-1/2 p-8 lg:p-12 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="h-full flex flex-col">
                    <div className="mb-6">
                      <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-portfolio-blue transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                        {project.description}
                      </p>
                      <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                        {project.longDescription}
                      </p>
                    </div>
                    
                    {/* Technologies */}
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                        {language === 'pt' ? 'Tecnologias' : 'Technologies'}
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-portfolio-blue/10 text-portfolio-blue rounded-full text-sm font-medium hover:bg-portfolio-blue/20 transition-colors duration-200"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Features */}
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                        {language === 'pt' ? 'Funcionalidades' : 'Features'}
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {project.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-300">
                            <feature.icon size={16} className="text-portfolio-blue flex-shrink-0" />
                            <span>{feature.text}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Endpoints */}
                    <div className="mb-8">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                        {language === 'pt' ? 'Endpoints Principais' : 'Main Endpoints'}
                      </h4>
                      <div className="space-y-2">
                        {project.endpoints.slice(0, 3).map((endpoint, endpointIndex) => (
                          <div key={endpointIndex} className="flex items-center space-x-3 text-sm">
                            <span className={`px-2 py-1 rounded text-xs font-mono font-bold ${
                              endpoint.method === 'GET' ? 'bg-green-100 text-green-800' :
                              endpoint.method === 'POST' ? 'bg-blue-100 text-blue-800' :
                              endpoint.method === 'PUT' ? 'bg-yellow-100 text-yellow-800' :
                              'bg-red-100 text-red-800'
                            }`}>
                              {endpoint.method}
                            </span>
                            <code className="text-gray-600 dark:text-gray-300 font-mono">{endpoint.path}</code>
                            <span className="text-gray-500 dark:text-gray-400">- {endpoint.desc}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="mt-auto flex items-center space-x-4">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-2 bg-gradient-to-r from-portfolio-blue to-portfolio-gray text-white px-6 py-3 rounded-full font-medium hover:shadow-lg hover:shadow-portfolio-blue/25 transition-all duration-300 transform hover:scale-105"
                      >
                        <Github size={18} />
                        <span>{language === 'pt' ? 'Ver Código' : 'View Code'}</span>
                      </a>
                      <div className="flex items-center space-x-2 text-gray-500 dark:text-gray-400">
                        <Code size={16} />
                        <span className="text-sm">{project.tags.join(' • ')}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
