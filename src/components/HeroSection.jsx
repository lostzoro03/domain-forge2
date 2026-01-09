import { useEffect, useRef } from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
export const HeroSection = () => {
    const containerRef = useRef(null);
    useEffect(() => {
        const handleMouseMove = (e) => {
            if (!containerRef.current)
                return;
            const { clientX, clientY } = e;
            const { width, height, left, top } = containerRef.current.getBoundingClientRect();
            const x = (clientX - left - width / 2) / 25;
            const y = (clientY - top - height / 2) / 25;
            containerRef.current.style.setProperty('--mouse-x', `${x}px`);
            containerRef.current.style.setProperty('--mouse-y', `${y}px`);
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);
    const scrollToStack = () => {
        document.getElementById('stack')?.scrollIntoView({ behavior: 'smooth' });
    };
    return (<section id="home" ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden geometric-bg noise">
      {/* Animated geometric shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 border border-primary/20 rotate-45 animate-pulse-glow" style={{
            transform: `translate(var(--mouse-x, 0), var(--mouse-y, 0)) rotate(45deg)`,
            transition: 'transform 0.3s ease-out'
        }}/>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 border border-accent/20 rotate-12" style={{
            transform: `translate(calc(var(--mouse-x, 0) * -1), calc(var(--mouse-y, 0) * -1)) rotate(12deg)`,
            transition: 'transform 0.3s ease-out'
        }}/>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-primary/10 animate-float"/>
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 grid-overlay opacity-30"/>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Status badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-8 animate-slide-up">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"/>
          <span className="text-sm font-body text-muted-foreground">Available for opportunities</span>
        </div>

        {/* Main heading */}
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6" style={{ animationDelay: '0.1s' }}>
          <span className="block text-foreground mb-2">AYOUB</span>
          <span className="text-gradient">HAMOU</span>
        </h1>

        {/* Subtitle */}
        <p className="font-body text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          Full-Stack Developer crafting{' '}
          <span className="text-primary font-medium">high-performance</span> web experiences
        </p>

        {/* Domain Expansion tagline */}
        <div className="font-display text-xs md:text-sm tracking-[0.3em] text-muted-foreground uppercase mb-12 animate-slide-up" style={{ animationDelay: '0.3s' }}>
          [ Domain Expansion: Digital Realm ]
        </div>

        {/* Social links */}
        <div className="flex items-center justify-center gap-4 mb-16 animate-slide-up" style={{ animationDelay: '0.4s' }}>
          {[
            { icon: Github, href: '#', label: 'GitHub' },
            { icon: Linkedin, href: '#', label: 'LinkedIn' },
            { icon: Mail, href: '#contact', label: 'Email' },
        ].map(({ icon: Icon, href, label }) => (<a key={label} href={href} className="group relative p-3 rounded-lg bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow-sm" aria-label={label}>
              <Icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors"/>
            </a>))}
        </div>

        {/* Scroll indicator */}
        <button onClick={scrollToStack} className="group flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors animate-slide-up" style={{ animationDelay: '0.5s' }}>
          <span className="text-xs font-display tracking-wider uppercase">Explore</span>
          <ArrowDown className="w-5 h-5 animate-bounce"/>
        </button>
      </div>

      {/* Corner accents */}
      <div className="absolute top-8 left-8 w-16 h-16 border-l-2 border-t-2 border-primary/30"/>
      <div className="absolute top-8 right-8 w-16 h-16 border-r-2 border-t-2 border-primary/30"/>
      <div className="absolute bottom-8 left-8 w-16 h-16 border-l-2 border-b-2 border-accent/30"/>
      <div className="absolute bottom-8 right-8 w-16 h-16 border-r-2 border-b-2 border-accent/30"/>
    </section>);
};
