import { Github, Linkedin, Twitter } from 'lucide-react';
export const Footer = () => {
    return (<footer className="relative py-12 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo / Name */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center">
              <span className="font-display text-lg font-bold text-primary">A</span>
            </div>
            <div>
              <p className="font-display text-sm font-semibold text-foreground">Ayoub Hamou</p>
              <p className="text-xs text-muted-foreground">Full-Stack Developer</p>
            </div>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-3">
            {[
            { icon: Github, href: '#', label: 'GitHub' },
            { icon: Linkedin, href: '#', label: 'LinkedIn' },
            { icon: Twitter, href: '#', label: 'Twitter' },
        ].map(({ icon: Icon, href, label }) => (<a key={label} href={href} className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300" aria-label={label}>
                <Icon className="w-5 h-5"/>
              </a>))}
          </div>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>

        {/* Domain Expansion signature */}
        <div className="mt-8 text-center">
          <p className="font-display text-[10px] tracking-[0.4em] text-muted-foreground/50 uppercase">
            Domain Expansion: Digital Realm
          </p>
        </div>
      </div>
    </footer>);
};
