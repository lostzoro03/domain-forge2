import { useRef, useEffect, useState } from 'react';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
const projects = [
    {
        id: 1,
        title: 'E-Commerce Platform',
        description: 'Full-stack shopping experience with React, Node.js, and Stripe integration. Features real-time inventory and admin dashboard.',
        tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
        year: '2024',
        type: 'Full Stack',
    },
    {
        id: 2,
        title: 'Real-Time Dashboard',
        description: 'Analytics dashboard with live data visualization, WebSocket connections, and responsive charts for monitoring KPIs.',
        tech: ['React', 'TypeScript', 'D3.js', 'Socket.io'],
        year: '2024',
        type: 'Frontend',
    },
    {
        id: 3,
        title: 'API Gateway Service',
        description: 'Microservices architecture with rate limiting, authentication, and request routing for scalable backend systems.',
        tech: ['Express', 'Redis', 'Docker', 'JWT'],
        year: '2023',
        type: 'Backend',
    },
    {
        id: 4,
        title: 'Portfolio Generator',
        description: 'CLI tool that generates customized developer portfolios from JSON configs with multiple theme support.',
        tech: ['Node.js', 'Handlebars', 'CSS', 'CLI'],
        year: '2023',
        type: 'Tool',
    },
];
const ProjectCard = ({ project, index }) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);
    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setTimeout(() => setIsVisible(true), index * 150);
            }
        }, { threshold: 0.2 });
        if (ref.current)
            observer.observe(ref.current);
        return () => observer.disconnect();
    }, [index]);
    return (<div ref={ref} className={`
        relative pl-12 pb-12 last:pb-0
        transition-all duration-700
        ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}
      `}>
      {/* Timeline connector */}
      {index < projects.length - 1 && <div className="timeline-line"/>}
      
      {/* Timeline dot */}
      <div className="timeline-dot flex items-center justify-center">
        <span className="w-2 h-2 rounded-full bg-primary animate-pulse"/>
      </div>

      {/* Card */}
      <div className="card-3d">
        <div className="card-3d-inner group relative p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-all duration-300">
          {/* Glow on hover */}
          <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-primary/5 to-accent/5"/>
          
          {/* Header */}
          <div className="relative flex items-start justify-between mb-4">
            <div>
              <span className="inline-block font-display text-xs tracking-wider text-primary mb-2">
                {project.type}
              </span>
              <h3 className="font-display text-xl font-bold text-foreground group-hover:text-gradient transition-all duration-300">
                {project.title}
              </h3>
            </div>
            <span className="font-display text-sm text-muted-foreground">
              {project.year}
            </span>
          </div>

          {/* Description */}
          <p className="relative text-muted-foreground text-sm leading-relaxed mb-6">
            {project.description}
          </p>

          {/* Tech tags */}
          <div className="relative flex flex-wrap gap-2 mb-6">
            {project.tech.map((tech) => (<span key={tech} className="px-3 py-1 text-xs font-medium rounded-full bg-muted text-muted-foreground border border-border">
                {tech}
              </span>))}
          </div>

          {/* Actions */}
          <div className="relative flex items-center gap-4">
            <a href="#" className="flex items-center gap-2 text-sm font-medium text-primary hover:text-accent transition-colors group/link">
              <span>View Project</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1"/>
            </a>
            <a href="#" className="p-2 rounded-lg hover:bg-muted transition-colors" aria-label="View on GitHub">
              <Github className="w-4 h-4 text-muted-foreground hover:text-foreground"/>
            </a>
            <a href="#" className="p-2 rounded-lg hover:bg-muted transition-colors" aria-label="Open live demo">
              <ExternalLink className="w-4 h-4 text-muted-foreground hover:text-foreground"/>
            </a>
          </div>

          {/* Corner accents */}
          <div className="absolute top-3 right-3 w-4 h-4 border-t border-r border-primary/20 group-hover:border-primary/50 transition-colors"/>
          <div className="absolute bottom-3 left-3 w-4 h-4 border-b border-l border-accent/20 group-hover:border-accent/50 transition-colors"/>
        </div>
      </div>
    </div>);
};
export const ProjectsSection = () => {
    return (<section id="projects" className="relative py-32 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-overlay opacity-20"/>
      
      <div className="relative max-w-4xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block font-display text-xs tracking-[0.3em] text-primary uppercase mb-4">
            Experience
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            A timeline of work that defines my craft
          </p>
        </div>

        {/* Divider */}
        <div className="section-divider mb-16"/>

        {/* Timeline */}
        <div className="relative">
          {projects.map((project, index) => (<ProjectCard key={project.id} project={project} index={index}/>))}
        </div>
      </div>
    </section>);
};
