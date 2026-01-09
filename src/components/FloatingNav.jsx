import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Stack', href: '#stack' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
];
export const FloatingNav = () => {
    const [activeSection, setActiveSection] = useState('home');
    const [isScrolled, setIsScrolled] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
            // Update active section based on scroll position
            const sections = navItems.map(item => item.href.slice(1));
            for (const section of sections.reverse()) {
                const element = document.getElementById(section);
                if (element && element.getBoundingClientRect().top <= 100) {
                    setActiveSection(section);
                    break;
                }
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    const scrollToSection = (href) => {
        const element = document.getElementById(href.slice(1));
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (<nav className={cn("nav-floating transition-all duration-300", isScrolled ? "shadow-glow-sm" : "")}>
      <ul className="flex items-center gap-1">
        {navItems.map((item) => (<li key={item.label}>
            <button onClick={() => scrollToSection(item.href)} className={cn("relative px-4 py-2 rounded-full font-display text-sm font-medium tracking-wide", "transition-all duration-300", activeSection === item.href.slice(1)
                ? "text-primary-foreground bg-primary shadow-glow-sm"
                : "text-muted-foreground hover:text-foreground hover:bg-muted")}>
              {item.label}
            </button>
          </li>))}
      </ul>
    </nav>);
};
