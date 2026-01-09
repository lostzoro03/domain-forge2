import { useRef, useEffect, useState } from 'react';
const technologies = [
    { name: 'HTML5', icon: '🌐', level: 95, color: 'from-orange-500 to-red-500' },
    { name: 'CSS3', icon: '🎨', level: 92, color: 'from-blue-500 to-cyan-500' },
    { name: 'JavaScript', icon: '⚡', level: 90, color: 'from-yellow-400 to-amber-500' },
    { name: 'React', icon: '⚛️', level: 88, color: 'from-cyan-400 to-blue-500' },
    { name: 'Express', icon: '🚀', level: 85, color: 'from-green-500 to-emerald-500' },
    { name: 'Node.js', icon: '💚', level: 85, color: 'from-green-600 to-lime-500' },
    { name: 'TypeScript', icon: '🔷', level: 82, color: 'from-blue-600 to-indigo-500' },
    { name: 'Tailwind', icon: '🌊', level: 90, color: 'from-teal-500 to-cyan-400' },
];
const TechBadge = ({ tech, index }) => {
    const [isVisible, setIsVisible] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const ref = useRef(null);
    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setTimeout(() => setIsVisible(true), index * 100);
            }
        }, { threshold: 0.2 });
        if (ref.current)
            observer.observe(ref.current);
        return () => observer.disconnect();
    }, [index]);
    return (<div ref={ref} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} className={`
        relative group cursor-pointer
        transition-all duration-500
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
      `}>
      <div className={`
          relative p-6 rounded-xl
          bg-card border border-border
          transition-all duration-300
          ${isHovered ? 'border-primary/50 shadow-glow-md scale-105' : 'hover:border-muted-foreground/30'}
        `}>
        {/* Glow effect on hover */}
        <div className={`
            absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300
            bg-gradient-to-br ${tech.color}
            ${isHovered ? 'opacity-10' : ''}
          `}/>

        {/* Icon */}
        <div className="text-4xl mb-4 transition-transform duration-300 group-hover:scale-110">
          {tech.icon}
        </div>

        {/* Name */}
        <h3 className="font-display text-lg font-semibold text-foreground mb-3">
          {tech.name}
        </h3>

        {/* Skill bar */}
        <div className="relative h-1.5 bg-muted rounded-full overflow-hidden">
          <div className={`
              absolute inset-y-0 left-0 rounded-full bg-gradient-to-r ${tech.color}
              transition-all duration-1000 ease-out
            `} style={{ width: isVisible ? `${tech.level}%` : '0%' }}/>
        </div>

        {/* Level indicator */}
        <div className="mt-2 text-right">
          <span className="text-xs font-display text-muted-foreground">
            {isVisible ? tech.level : 0}%
          </span>
        </div>

        {/* Corner accent */}
        <div className="absolute top-2 right-2 w-3 h-3 border-t border-r border-primary/30 transition-all duration-300 group-hover:border-primary"/>
        <div className="absolute bottom-2 left-2 w-3 h-3 border-b border-l border-accent/30 transition-all duration-300 group-hover:border-accent"/>
      </div>
    </div>);
};
export const TechStackSection = () => {
    return (<section id="stack" className="relative py-32 px-6 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 geometric-bg opacity-50"/>
      
      <div className="relative max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block font-display text-xs tracking-[0.3em] text-primary uppercase mb-4">
            Arsenal
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Tech <span className="text-gradient">Stack</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Battle-tested technologies powering every project
          </p>
        </div>

        {/* Divider */}
        <div className="section-divider mb-16"/>

        {/* Tech grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {technologies.map((tech, index) => (<TechBadge key={tech.name} tech={tech} index={index}/>))}
        </div>
      </div>
    </section>);
};
