"use client"

import { useEffect, useRef, useState, createContext, useContext } from "react"
import { motion, useScroll, useTransform, useInView } from "framer-motion"
import { Github, ExternalLink, Code, Database, Server, Users, Settings, Shield, Lock, Globe } from "lucide-react"
import { Calendar, MapPin, Building, User, Code2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { Linkedin, Twitter, Instagram, Youtube } from "lucide-react"
import { toast } from "sonner"
import confetti from "canvas-confetti"

// Context para idioma
const LanguageContext = createContext<{
  language: "pt" | "en"
  toggleLanguage: () => void
}>({
  language: "pt",
  toggleLanguage: () => {},
})

// Hook para usar o contexto de idioma
const useLanguage = () => useContext(LanguageContext)

// Traduções
const translations = {
  pt: {
    developer: "Desenvolvedor",
    fullStack: "Backend",
    heroDescription: "Criando experiências digitais elegantes e funcionais com tecnologias modernas",
    viewProjects: "Ver Projetos",
    contact: "Contato",
    about: "Sobre Mim",
    aboutDescription:
      "Sou estudante de Ciência da Computação com foco em Desenvolvimento Web e iniciando estudos em Quality Assurance. Já atuei com PHP e Laravel em desenvolvimento de sistemas, além de ter experiência com investigação digital (OSINT), suporte administrativo e atendimento ao cliente. Atualmente, também venho explorando o uso de Inteligência Artificial para aumentar minha produtividade, especialmente em áreas como geração de código, documentação automatizada e análise de dados.",
    yearsExperience: "Anos de Experiência",
    technologies: "Tecnologias",
    experience: "Experiência Profissional",
    experienceDescription: "Minha jornada profissional e acadêmica no desenvolvimento de software e tecnologia",
    projects: "Projetos",
    projectsDescription: "Uma seleção dos meus trabalhos mais recentes e significativos",
    technologiesProject: "Tecnologias:",
    mainFeatures: "Principais Features:",
    published: "Publicado",
    completed: "Concluído",
    workTogether: "Vamos trabalhar juntos?",
    workTogetherDescription: "Estou sempre aberto a novos desafios e oportunidades interessantes.",
    getInTouch: "Entre em Contato",
  },
  en: {
    developer: "Developer",
    fullStack: "Backend",
    heroDescription: "Creating elegant and functional digital experiences with modern technologies",
    viewProjects: "View Projects",
    contact: "Contact",
    about: "About Me",
    aboutDescription:
      "I'm a Computer Science student focused on Web Development and starting studies in Quality Assurance. I have worked with PHP and Laravel in system development, in addition to having experience with digital investigation (OSINT), administrative support and customer service. Currently, I'm also exploring the use of Artificial Intelligence to increase my productivity, especially in areas such as code generation, automated documentation and data analysis.",
    yearsExperience: "Years of Experience",
    technologies: "Technologies",
    experience: "Professional Experience",
    experienceDescription: "My professional and academic journey in software and technology development",
    projects: "Projects",
    projectsDescription: "A selection of my most recent and significant work",
    technologiesProject: "Technologies:",
    mainFeatures: "Main Features:",
    published: "Published",
    completed: "Completed",
    workTogether: "Let's work together?",
    workTogetherDescription: "I'm always open to new challenges and interesting opportunities.",
    getInTouch: "Get In Touch",
  },
}

// Componente de fundo animado elaborado
const AnimatedBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { scrollY } = useScroll()
  const [particles, setParticles] = useState<
    Array<{
      x: number
      y: number
      vx: number
      vy: number
      size: number
      opacity: number
      connections: number[]
    }>
  >([])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationId: number
    let time = 0

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight * 1.5
    }

    const generateParticles = () => {
      const newParticles = []
      const particleCount = Math.min(80, Math.floor(window.innerWidth / 15))

      for (let i = 0; i < particleCount; i++) {
        newParticles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          size: Math.random() * 2 + 0.5,
          opacity: Math.random() * 0.6 + 0.2,
          connections: [],
        })
      }
      setParticles(newParticles)
    }

    const drawWaves = () => {
      ctx.save()
      ctx.globalAlpha = 0.03

      for (let i = 0; i < 3; i++) {
        ctx.beginPath()
        ctx.strokeStyle = "#000000"
        ctx.lineWidth = 2

        const amplitude = 50 + i * 20
        const frequency = 0.01 + i * 0.005
        const phase = time * 0.001 + (i * Math.PI) / 3

        for (let x = 0; x <= canvas.width; x += 5) {
          const y =
            canvas.height / 2 +
            Math.sin(x * frequency + phase) * amplitude +
            Math.sin(x * frequency * 2 + phase * 1.5) * amplitude * 0.5

          if (x === 0) {
            ctx.moveTo(x, y)
          } else {
            ctx.lineTo(x, y)
          }
        }
        ctx.stroke()
      }
      ctx.restore()
    }

    const drawParticles = () => {
      particles.forEach((particle, index) => {
        particle.x += particle.vx
        particle.y += particle.vy

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1

        particle.x = Math.max(0, Math.min(canvas.width, particle.x))
        particle.y = Math.max(0, Math.min(canvas.height, particle.y))

        ctx.save()
        ctx.globalAlpha = particle.opacity
        ctx.fillStyle = "#000000"
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fill()

        ctx.globalAlpha = particle.opacity * 0.3
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size * 3, 0, Math.PI * 2)
        ctx.fill()
        ctx.restore()

        particles.slice(index + 1).forEach((otherParticle) => {
          const dx = particle.x - otherParticle.x
          const dy = particle.y - otherParticle.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 120) {
            ctx.save()
            ctx.globalAlpha = (1 - distance / 120) * 0.1
            ctx.strokeStyle = "#000000"
            ctx.lineWidth = 0.5
            ctx.beginPath()
            ctx.moveTo(particle.x, particle.y)
            ctx.lineTo(otherParticle.x, otherParticle.y)
            ctx.stroke()
            ctx.restore()
          }
        })
      })
    }

    const drawGeometricShapes = () => {
      ctx.save()
      ctx.globalAlpha = 0.02

      for (let i = 0; i < 5; i++) {
        const x = (canvas.width / 6) * (i + 1) + Math.sin(time * 0.001 + i) * 50
        const y = canvas.height / 2 + Math.cos(time * 0.0015 + i) * 100
        const size = 30 + Math.sin(time * 0.002 + i) * 10
        const rotation = time * 0.001 + i

        ctx.save()
        ctx.translate(x, y)
        ctx.rotate(rotation)
        ctx.strokeStyle = "#000000"
        ctx.lineWidth = 1

        ctx.beginPath()
        for (let j = 0; j < 6; j++) {
          const angle = (j * Math.PI) / 3
          const px = Math.cos(angle) * size
          const py = Math.sin(angle) * size
          if (j === 0) {
            ctx.moveTo(px, py)
          } else {
            ctx.lineTo(px, py)
          }
        }
        ctx.closePath()
        ctx.stroke()
        ctx.restore()
      }
      ctx.restore()
    }

    const animate = () => {
      time++
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const gradient = ctx.createRadialGradient(
        canvas.width / 2,
        canvas.height / 2,
        0,
        canvas.width / 2,
        canvas.height / 2,
        canvas.width / 2,
      )
      gradient.addColorStop(0, "rgba(255, 255, 255, 1)")
      gradient.addColorStop(1, "rgba(250, 250, 250, 1)")
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      drawWaves()
      drawGeometricShapes()
      drawParticles()

      animationId = requestAnimationFrame(animate)
    }

    resizeCanvas()
    generateParticles()
    animate()

    const handleResize = () => {
      resizeCanvas()
      generateParticles()
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
      cancelAnimationFrame(animationId)
    }
  }, [])

  const y = useTransform(scrollY, [0, 1000], [0, -300])
  const opacity = useTransform(scrollY, [0, 500], [1, 0.3])

  return <motion.canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" style={{ y, opacity }} />
}

// Fundo animado para seções
const SectionBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationId: number
    let time = 0

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = document.body.scrollHeight
    }

    const animate = () => {
      time++
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      ctx.save()
      ctx.globalAlpha = 0.015
      ctx.fillStyle = "#000000"

      const spacing = 60
      for (let x = 0; x < canvas.width; x += spacing) {
        for (let y = 0; y < canvas.height; y += spacing) {
          const wave = Math.sin((x + y + time) * 0.01) * 0.5 + 0.5
          const size = 1 + wave * 2

          ctx.beginPath()
          ctx.arc(x + spacing / 2, y + spacing / 2, size, 0, Math.PI * 2)
          ctx.fill()
        }
      }
      ctx.restore()

      ctx.save()
      ctx.globalAlpha = 0.02
      ctx.strokeStyle = "#000000"
      ctx.lineWidth = 1

      for (let i = 0; i < 3; i++) {
        ctx.beginPath()
        const yOffset = (canvas.height / 4) * (i + 1)

        for (let x = 0; x <= canvas.width; x += 10) {
          const y = yOffset + Math.sin((x + time * 2) * 0.01) * 30
          if (x === 0) {
            ctx.moveTo(x, y)
          } else {
            ctx.lineTo(x, y)
          }
        }
        ctx.stroke()
      }
      ctx.restore()

      animationId = requestAnimationFrame(animate)
    }

    resizeCanvas()
    animate()

    const handleResize = () => {
      resizeCanvas()
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" />
}

// Função para obter dados dos projetos baseado no idioma
const getProjects = (language: "pt" | "en") => [
  {
    title: "Navajafy",
    description:
      language === "pt"
        ? "Plataforma web completa para conectar usuários a barbearias, permitindo navegação por serviços e agendamento de horários de forma transparente."
        : "Complete web platform to connect users to barbershops, allowing service browsing and seamless appointment scheduling.",
    longDescription:
      language === "pt"
        ? "Navajafy é uma aplicação fullstack desenvolvida em Next.js que conecta clientes a barbearias. Inclui autenticação com Google, listagem de barbearias, visualização de serviços e sistema completo de agendamentos com gerenciamento de horários."
        : "Navajafy is a fullstack application built with Next.js that connects clients to barbershops. Includes Google authentication, barbershop listings, service viewing, and complete appointment system with schedule management.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "NextAuth.js",
      "Tailwind CSS",
      "Shadcn/UI",
      "React Hook Form",
      "Zod",
    ],
    features: [
      {
        icon: Users,
        text: language === "pt" ? "Autenticação segura com Google" : "Secure Google authentication",
      },
      {
        icon: Server,
        text: language === "pt" ? "Sistema completo de agendamentos" : "Complete appointment system",
      },
      {
        icon: Database,
        text: language === "pt" ? "Banco de dados PostgreSQL com Prisma" : "PostgreSQL database with Prisma",
      },
      {
        icon: Settings,
        text: language === "pt" ? "Interface moderna e responsiva" : "Modern and responsive interface",
      },
    ],
    githubUrl: "https://github.com/kaikiyuuji/Navajafy",
    liveUrl: "https://navajafy-barbearias.vercel.app/",
    status: language === "pt" ? "Publicado" : "Published",
    tags: ["Next.js", "TypeScript", "Fullstack"],
  },
  {
    title: "Taskvel",
    description:
      language === "pt"
        ? "Gerenciador de tarefas moderno, com backend em Laravel e frontend em React. Projeto de estudo focado em integração fullstack, organização de código e boas práticas."
        : "Modern task manager, with Laravel backend and React frontend. Study project focused on fullstack integration, code organization and best practices.",
    longDescription:
      language === "pt"
        ? "Taskvel é uma aplicação web para gerenciamento de tarefas, criada para praticar integração entre um backend robusto em Laravel e um frontend reativo em React. Inclui autenticação, CRUD de listas e tarefas, e interface responsiva."
        : "Taskvel is a web application for task management, created to practice integration between a robust Laravel backend and a reactive React frontend. Includes authentication, CRUD for lists and tasks, and a responsive interface.",
    technologies: [
      "Laravel 12",
      "PHP 8.2+",
      "React 19",
      "Vite",
      "TypeScript",
      "TailwindCSS",
      "shadcn/ui",
      "Radix UI",
      "MySQL",
    ],
    features: [
      {
        icon: Users,
        text:
          language === "pt"
            ? "Vínculo entre usuários, listas e tarefas"
            : "Relationship between users, lists and tasks",
      },
      {
        icon: Server,
        text: language === "pt" ? "API RESTful com autenticação" : "RESTful API with authentication",
      },
      {
        icon: Database,
        text: language === "pt" ? "Migrations, seeds e Eloquent ORM" : "Migrations, seeds and Eloquent ORM",
      },
      {
        icon: Settings,
        text: language === "pt" ? "Frontend moderno e responsivo" : "Modern and responsive frontend",
      },
    ],
    githubUrl: "https://github.com/kaikiyuuji/Taskvel",
    liveUrl: "#",
    status: language === "pt" ? "Concluído" : "Completed",
    tags: ["Laravel", "React", "Fullstack"],
  },
  {
    title: "API REST com PHP",
    description:
      language === "pt"
        ? "API RESTful desenvolvida em PHP com Slim Framework. Projeto de estudo focado em práticas de desenvolvimento de APIs, incluindo criação de endpoints, manipulação de requisições HTTP e estruturação de projetos."
        : "RESTful API developed in PHP with Slim Framework. Study project focused on API development practices, including endpoint creation, HTTP request handling and project structuring.",
    longDescription:
      language === "pt"
        ? "Uma API completa para gerenciamento de usuários com operações CRUD, autenticação com senhas criptografadas e respostas em formato JSON. Desenvolvida para praticar conceitos fundamentais de desenvolvimento backend."
        : "A complete API for user management with CRUD operations, authentication with encrypted passwords and JSON format responses. Developed to practice fundamental backend development concepts.",
    technologies: ["PHP", "Slim Framework", "Composer", "REST API"],
    features: [
      {
        icon: Users,
        text: language === "pt" ? "Gerenciamento completo de usuários" : "Complete user management",
      },
      {
        icon: Server,
        text: language === "pt" ? "Endpoints RESTful organizados" : "Organized RESTful endpoints",
      },
      {
        icon: Shield,
        text: language === "pt" ? "Senhas criptografadas com segurança" : "Securely encrypted passwords",
      },
      {
        icon: Code,
        text: language === "pt" ? "Respostas padronizadas em JSON" : "Standardized JSON responses",
      },
    ],
    githubUrl: "https://github.com/kaikiyuuji/api-rest-users",
    liveUrl: "#",
    status: language === "pt" ? "Concluído" : "Completed",
    tags: ["PHP", "REST API"],
  },
  {
    title: "Laravel API CRUD",
    description:
      language === "pt"
        ? "API RESTful construída com Laravel 12, fornecendo funcionalidades completas de gerenciamento de usuários (CRUD). Projeto desenvolvido para estudo e aprendizado da estrutura do Laravel."
        : "RESTful API built with Laravel 12, providing complete user management functionalities (CRUD). Project developed for studying and learning the Laravel framework structure.",
    longDescription:
      language === "pt"
        ? "Este projeto foi desenvolvido como parte dos meus estudos em desenvolvimento web com Laravel. O objetivo principal foi entender na prática como construir uma API RESTful completa, utilizando as boas práticas e ferramentas modernas do ecossistema Laravel."
        : "This project was developed as part of my studies in web development with Laravel. The main objective was to understand in practice how to build a complete RESTful API, using good practices and modern tools from the Laravel ecosystem.",
    technologies: ["PHP 8.4", "Laravel 12", "MySQL", "Composer", "Insomnia"],
    features: [
      {
        icon: Users,
        text: language === "pt" ? "Gerenciamento de usuários CRUD" : "CRUD user management",
      },
      {
        icon: Server,
        text: language === "pt" ? "Endpoints RESTful padronizados" : "Standardized RESTful endpoints",
      },
      {
        icon: Database,
        text: language === "pt" ? "Migrations e Eloquent ORM" : "Migrations and Eloquent ORM",
      },
      {
        icon: Lock,
        text: language === "pt" ? "Autenticação com Sanctum" : "Sanctum authentication",
      },
    ],
    githubUrl: "https://github.com/kaikiyuuji/crud-laravel-api",
    liveUrl: "#",
    status: language === "pt" ? "Concluído" : "Completed",
    tags: ["Laravel", "PHP", "API"],
  },
]

const getExperience = (language: "pt" | "en") => [
  {
    title: language === "pt" ? "Auxiliar de Cartório" : "Registry Office Assistant",
    company:
      language === "pt"
        ? "Segundo Serviço de Registro de Imóveis de Belém"
        : "Second Real Estate Registry Service of Belém",
    period: language === "pt" ? "Abril 2024 - Março 2025 (1 ano)" : "April 2024 - March 2025 (1 year)",
    location: "Belém, Pará, Brasil",
    description:
      language === "pt"
        ? [
            "Emissão de certidões, garantindo precisão e conformidade com as normas legais",
            "Atendimento ao cliente, oferecendo suporte eficiente e resolutivo",
            "Organização e controle de documentos, mantendo a conformidade e eficiência nos processos administrativos",
          ]
        : [
            "Certificate issuance, ensuring accuracy and compliance with legal standards",
            "Customer service, providing efficient and resolute support",
            "Document organization and control, maintaining compliance and efficiency in administrative processes",
          ],
  },
  {
    title: language === "pt" ? "Desenvolvedor de Software Ágil - Estagiário" : "Agile Software Developer - Intern",
    company: "Kolares TI",
    period: language === "pt" ? "Maio 2023 - Março 2024 (11 meses)" : "May 2023 - March 2024 (11 months)",
    location: "Belém, Pará, Brasil",
    description:
      language === "pt"
        ? [
            "Desenvolvimento de sistemas web utilizando PHP e o framework Laravel",
            "Implementação de funcionalidades e correções de bugs, garantindo a qualidade e a eficiência do código",
            "Colaboração em equipe ágil, participando ativamente de sprints e reuniões de desenvolvimento",
          ]
        : [
            "Web system development using PHP and Laravel framework",
            "Feature implementation and bug fixes, ensuring code quality and efficiency",
            "Agile team collaboration, actively participating in sprints and development meetings",
          ],
  },
  {
    title: language === "pt" ? "Estagiário" : "Intern",
    company: language === "pt" ? "Polícia Civil do Estado do Pará" : "Civil Police of Pará State",
    period: language === "pt" ? "Agosto 2022 - Abril 2023 (9 meses)" : "August 2022 - April 2023 (9 months)",
    location: "Belém, Pará, Brasil",
    description:
      language === "pt"
        ? [
            "Realização de operações de inteligência de fontes abertas (OSINT)",
            "Apoio administrativo no gerenciamento de documentos e dados utilizando Microsoft Word e Excel",
            "Colaboração na elaboração de relatórios e na comunicação de dados importantes",
          ]
        : [
            "Open source intelligence operations (OSINT)",
            "Administrative support in document and data management using Microsoft Word and Excel",
            "Collaboration in report preparation and communication of important data",
          ],
  },
]

const getTechnologies = () => [
  { name: "PHP", icon: "🐘" },
  { name: "Laravel", icon: "🔴" },
  { name: "JavaScript", icon: "🟨" },
  { name: "TypeScript", icon: "🔷" },
  { name: "React", icon: "⚛️" },
  { name: "Node.js", icon: "🟢" },
  { name: "MySQL", icon: "🐬" },
  { name: "Git", icon: "📦" },
]

const getSocialLinks = () => [
  { icon: Linkedin, href: "https://www.linkedin.com/in/kaiki-yuuji", label: "LinkedIn" },
  { icon: Github, href: "https://github.com/kaikiyuuji", label: "GitHub" },
  { icon: Twitter, href: "https://x.com/euhirata", label: "Twitter" },
  { icon: Instagram, href: "https://www.instagram.com/eu.hirata/", label: "Instagram" },
  { icon: Youtube, href: "https://www.youtube.com/@lixovazio", label: "YouTube" },
]

const copyEmailToClipboard = async () => {
  const email = "kaikiramoshirata@gmail.com"
  try {
    await navigator.clipboard.writeText(email)

    // Trigger confetti
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    })

    // Show toast
    toast.success("Email copiado para a área de transferência!", {
      description: email,
      duration: 3000,
    })
  } catch (err) {
    toast.error("Erro ao copiar email")
  }
}

// Componente principal
function PortfolioContent() {
  const { language, toggleLanguage } = useLanguage()
  const t = translations[language]
  const projects = getProjects(language)
  const [selectedProject, setSelectedProject] = useState<number | null>(null)
  const heroRef = useRef(null)
  const isHeroInView = useInView(heroRef)

  return (
    <div className="mb-0">
      <SectionBackground />

      {/* Language Toggle */}
      <div className="fixed top-4 right-4 z-50">
        <Button
          variant="outline"
          size="sm"
          onClick={toggleLanguage}
          className="border-black text-black hover:bg-black hover:text-white transition-all duration-300 bg-white/80 backdrop-blur-sm"
        >
          <Globe className="w-4 h-4 mr-1" />
          {language === "pt" ? "EN" : "PT"}
        </Button>
      </div>

      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">
        <AnimatedBackground />

        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="mb-8 md:mb-12"
          >
            {/* Avatar posicionado exatamente sobre a linha */}
            <div className="relative inline-block mb-6 md:mb-8">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                {/* Avatar primeiro */}
                <div className="mb-0.5">
                  <Image
                    src="/avatar.png"
                    alt="Avatar"
                    width={150}
                    height={150}
                    className="mx-auto md:w-[200px] md:h-[200px]"
                  />
                </div>
                {/* Linha colada embaixo da imagem */}
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "270px" }}
                  transition={{ duration: 1, delay: 0.8 }}
                  className="h-0.5 bg-black mx-auto md:w-[270px] -mt-1"
                />
              </motion.div>
            </div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-3xl md:text-6xl lg:text-7xl font-light mb-4 md:mb-6 tracking-tight"
            >
              {t.developer}
              <br />
              <span className="font-medium">{t.fullStack}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-base md:text-xl text-gray-600 mb-6 md:mb-8 max-w-2xl mx-auto leading-relaxed px-4"
            >
              {t.heroDescription}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center px-4"
            >
              <Button
                size="lg"
                className="bg-black text-white hover:bg-gray-800 transition-all duration-300 px-6 md:px-8 py-3 text-sm md:text-base"
                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              >
                {t.viewProjects}
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-black text-black hover:bg-black hover:text-white transition-all duration-300 px-6 md:px-8 py-3 text-sm md:text-base bg-transparent"
                onClick={() => document.querySelector("footer")?.scrollIntoView({ behavior: "smooth" })}
              >
                {t.contact}
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHeroInView ? 1 : 0 }}
          className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            className="w-5 h-8 md:w-6 md:h-10 border-2 border-black rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              className="w-1 h-2 md:h-3 bg-black rounded-full mt-1 md:mt-2"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="relative z-10 py-12 md:py-20 px-4 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-2xl md:text-5xl font-light mb-4 md:mb-6 tracking-tight">{t.about}</h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
          {/* About Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <Card className="border-2 border-gray-200 h-full">
              <CardContent className="p-6 md:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <User className="w-6 h-6" />
                  <h3 className="text-xl md:text-2xl font-medium">{t.about}</h3>
                </div>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">{t.aboutDescription}</p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <Card className="border-2 border-gray-200">
              <CardContent className="p-6 text-center">
                <div className="text-3xl md:text-4xl font-light mb-2">2+</div>
                <div className="text-sm md:text-base text-gray-600">{t.yearsExperience}</div>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-200">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Code2 className="w-5 h-5" />
                  <h4 className="font-medium">{t.technologies}</h4>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {getTechnologies().map((tech, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm">
                      <span className="text-lg filter grayscale">{tech.icon}</span>
                      <span>{tech.name}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="relative z-10 py-12 md:py-20 px-4 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-2xl md:text-5xl font-light mb-4 md:mb-6 tracking-tight">{t.experience}</h2>
          <p className="text-sm md:text-lg text-gray-600 max-w-2xl mx-auto">{t.experienceDescription}</p>
        </motion.div>

        <div className="space-y-6 md:space-y-8">
          {getExperience(language).map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="border-2 border-gray-200 hover:border-black transition-all duration-300">
                <CardContent className="p-6 md:p-8">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div className="mb-4 md:mb-0">
                      <h3 className="text-lg md:text-xl font-medium mb-2">{exp.title}</h3>
                      <div className="flex items-center gap-2 text-gray-600 mb-2">
                        <Building className="w-4 h-4" />
                        <span className="text-sm md:text-base">{exp.company}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm">{exp.location}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">{exp.period}</span>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {exp.description.map((desc, descIndex) => (
                      <li key={descIndex} className="text-sm md:text-base text-gray-600 flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-black rounded-full mt-2 flex-shrink-0"></span>
                        <span>{desc}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative z-10 py-12 md:py-20 px-4 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-2xl md:text-5xl font-light mb-4 md:mb-6 tracking-tight">{t.projects}</h2>
          <p className="text-sm md:text-lg text-gray-600 max-w-2xl mx-auto">{t.projectsDescription}</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card
                className="h-full border-2 border-gray-200 hover:border-black transition-all duration-300 cursor-pointer group"
                onClick={() => setSelectedProject(selectedProject === index ? null : index)}
              >
                <CardHeader className="p-4 md:p-6">
                  <div className="flex justify-between items-start mb-4">
                    <CardTitle className="text-lg md:text-xl font-medium group-hover:text-gray-600 transition-colors">
                      {project.title}
                    </CardTitle>
                    <Badge variant="outline" className="border-black text-black text-xs">
                      {project.status}
                    </Badge>
                  </div>
                  <CardDescription className="text-sm md:text-base text-gray-600 leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="p-4 md:p-6 pt-0">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary" className="bg-gray-100 text-black text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <motion.div
                    initial={false}
                    animate={{ height: selectedProject === index ? "auto" : 0 }}
                    className="overflow-hidden"
                  >
                    <div className="pb-6">
                      <p className="text-xs md:text-sm text-gray-600 mb-4 leading-relaxed">{project.longDescription}</p>

                      <div className="mb-4">
                        <h4 className="font-medium mb-2 text-sm md:text-base">{t.technologiesProject}</h4>
                        <div className="flex flex-wrap gap-1">
                          {project.technologies.map((tech, techIndex) => (
                            <Badge key={techIndex} variant="outline" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="mb-4">
                        <h4 className="font-medium mb-2 text-sm md:text-base">{t.mainFeatures}</h4>
                        <div className="grid grid-cols-1 gap-2">
                          {project.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center gap-2 text-xs md:text-sm">
                              <feature.icon className="w-3 h-3 md:w-4 md:h-4 flex-shrink-0" />
                              <span>{feature.text}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-black text-black hover:bg-black hover:text-white transition-all duration-300 bg-transparent text-xs md:text-sm"
                      onClick={(e) => {
                        e.stopPropagation()
                        window.open(project.githubUrl, "_blank")
                      }}
                    >
                      <Github className="w-3 h-3 md:w-4 md:h-4 mr-2" />
                      GitHub
                    </Button>
                    {project.liveUrl !== "#" && (
                      <Button
                        size="sm"
                        className="bg-black text-white hover:bg-gray-800 transition-all duration-300 text-xs md:text-sm"
                        onClick={(e) => {
                          e.stopPropagation()
                          window.open(project.liveUrl, "_blank")
                        }}
                      >
                        <ExternalLink className="w-3 h-3 md:w-4 md:h-4 mr-2" />
                        {language === "pt" ? "Ver Projeto" : "View Project"}
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-gray-200 py-8 md:py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl md:text-2xl font-light mb-4">{t.workTogether}</h3>
            <p className="text-sm md:text-base text-gray-600 mb-6 md:mb-8">{t.workTogetherDescription}</p>

            <div className="flex flex-col items-center gap-6">
              <Button
                size="lg"
                onClick={copyEmailToClipboard}
                className="bg-black text-white hover:bg-gray-800 transition-all duration-300 px-6 md:px-8 py-3 text-sm md:text-base"
              >
                {t.getInTouch}
              </Button>

              {/* Social Links */}
              <div className="flex flex-wrap justify-center gap-4">
                {getSocialLinks().map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-3 border-2 border-gray-200 rounded-full hover:border-black hover:bg-black hover:text-white transition-all duration-300 group"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>

              <p className="text-xs text-gray-500 mt-4">
                © 2025 Kaiki Hirata.{" "}
                {language === "pt" ? "Todos os direitos reservados." : "All rights reserved."}
              </p>
            </div>
          </motion.div>
        </div>
      </footer>
    </div>
  )
}

export default function Portfolio() {
  const [language, setLanguage] = useState<"pt" | "en">("pt")

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "pt" ? "en" : "pt"))
  }

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      <PortfolioContent />
    </LanguageContext.Provider>
  )
}
