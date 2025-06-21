# Meu Portfólio

Este é meu portfólio pessoal, construído com tecnologias modernas de frontend para demonstrar minhas habilidades como Desenvolvedor Backend especializado em PHP, Laravel e Quality Assurance.

## 🚀 Tecnologias Utilizadas

### Core
- **React 18**: Framework JavaScript para construção de interfaces
- **TypeScript**: Adiciona tipagem estática ao JavaScript
- **Vite**: Build tool para desenvolvimento rápido e eficiente

### Estilização
- **Tailwind CSS**: Framework CSS utility-first para estilização eficiente
- **Shadcn UI**: Componentes de UI reutilizáveis e acessíveis
- **Radix UI**: Biblioteca de primitivos de UI sem estilos
- **Framer Motion**: Biblioteca para animações fluidas

### Roteamento e Estado
- **React Router**: Biblioteca para gerenciamento de rotas
- **TanStack React Query**: Biblioteca para gerenciamento de estado e requisições

### Validação e Formulários
- **Zod**: Biblioteca para validação de esquemas
- **React Hook Form**: Biblioteca para gerenciamento de formulários

### Componentes e Utilitários
- **TypeWriter Effect**: Para efeitos de digitação
- **Lucide React**: Ícones simples e consistentes
- **date-fns**: Utilitário para manipulação de datas
- **Embla Carousel**: Carrossel de alto desempenho
- **Recharts**: Biblioteca para criação de gráficos

### Desenvolvimento
- **ESLint**: Ferramenta para lint de código
- **PostCSS**: Ferramenta para processamento de CSS
- **Autoprefixer**: Plugin para adicionar prefixos de vendor automaticamente

## 📂 Estrutura do Projeto

O projeto está organizado em pastas específicas para facilitar a manutenção:

- `/components`: Componentes React reutilizáveis
  - `/ui`: Componentes da biblioteca Shadcn UI
- `/contexts`: Contextos React para gerenciamento de estado
- `/hooks`: Custom hooks
- `/lib`: Utilitários e funções auxiliares
- `/pages`: Componentes de página

## 🌐 Recursos

- Design responsivo com abordagem mobile-first
- Tema claro/escuro
- Animações suaves
- Internacionalização (português)
- Formulário de contato

## 🧑‍💻 Executando o Projeto

```bash
# Instalar dependências
npm install

# Executar em modo de desenvolvimento
npm run dev

# Construir para produção
npm run build

# Visualizar build de produção
npm run preview
```

## 🚀 Deploy na Vercel

Este projeto está configurado para ser facilmente implantado na [Vercel](https://vercel.com), uma plataforma de hospedagem para aplicações front-end.

### Configuração

O arquivo `vercel.json` na raiz do projeto contém todas as configurações necessárias para o deploy:

```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ],
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "vite"
}
```

### Métodos de Deploy

#### Via CLI da Vercel

1. Instale a CLI da Vercel globalmente:
   ```bash
   npm install -g vercel
   ```

2. Faça login na sua conta Vercel:
   ```bash
   vercel login
   ```

3. Deploy do projeto:
   ```bash
   vercel
   ```

#### Via Interface Web

1. Faça login ou crie uma conta em [vercel.com](https://vercel.com)
2. Clique em "Import Project" e selecione seu repositório Git
3. Configure as opções de build (a Vercel detectará automaticamente as configurações para Vite)
4. Clique em "Deploy"

### Configuração de Domínio Personalizado

Após o deploy, você pode configurar um domínio personalizado através do painel da Vercel:

1. Acesse o projeto na dashboard da Vercel
2. Navegue até a seção "Domains"
3. Adicione seu domínio e siga as instruções para configurar os registros DNS

## 📝 Licença

Todos os direitos reservados. 
