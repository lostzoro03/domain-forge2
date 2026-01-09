import { useState } from 'react';
import { Send, Mail, MapPin, Zap } from 'lucide-react';
export const ContactSection = () => {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate submission
        setTimeout(() => {
            setIsSubmitting(false);
            setFormState({ name: '', email: '', message: '' });
        }, 1500);
    };
    return (<section id="contact" className="relative py-32 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 geometric-bg opacity-30"/>
      
      <div className="relative max-w-5xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block font-display text-xs tracking-[0.3em] text-primary uppercase mb-4">
            Connect
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Let's <span className="text-gradient">Talk</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Ready to bring your vision to life? Let's create something extraordinary.
          </p>
        </div>

        {/* Divider */}
        <div className="section-divider mb-16"/>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact info */}
          <div className="space-y-8">
            <div className="p-6 rounded-xl bg-card border border-border group hover:border-primary/30 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:shadow-glow-sm transition-shadow">
                  <Mail className="w-5 h-5"/>
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-1">Email</h3>
                  <a href="mailto:hello@ayoubhamou.dev" className="text-muted-foreground hover:text-primary transition-colors">
                    hello@ayoubhamou.dev
                  </a>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-card border border-border group hover:border-primary/30 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-accent/10 text-accent group-hover:shadow-glow-sm transition-shadow">
                  <MapPin className="w-5 h-5"/>
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-1">Location</h3>
                  <p className="text-muted-foreground">
                    Available Worldwide
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-card border border-border group hover:border-primary/30 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-green-500/10 text-green-500 group-hover:shadow-glow-sm transition-shadow">
                  <Zap className="w-5 h-5"/>
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-1">Response Time</h3>
                  <p className="text-muted-foreground">
                    Usually within 24 hours
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block font-display text-sm font-medium text-foreground mb-2">
                Name
              </label>
              <input type="text" id="name" value={formState.name} onChange={(e) => setFormState({ ...formState, name: e.target.value })} className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:shadow-glow-sm transition-all duration-300" placeholder="Your name" required/>
            </div>

            <div>
              <label htmlFor="email" className="block font-display text-sm font-medium text-foreground mb-2">
                Email
              </label>
              <input type="email" id="email" value={formState.email} onChange={(e) => setFormState({ ...formState, email: e.target.value })} className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:shadow-glow-sm transition-all duration-300" placeholder="your@email.com" required/>
            </div>

            <div>
              <label htmlFor="message" className="block font-display text-sm font-medium text-foreground mb-2">
                Message
              </label>
              <textarea id="message" value={formState.message} onChange={(e) => setFormState({ ...formState, message: e.target.value })} rows={5} className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:shadow-glow-sm transition-all duration-300 resize-none" placeholder="Tell me about your project..." required/>
            </div>

            <button type="submit" disabled={isSubmitting} className="group relative w-full py-4 rounded-lg font-display font-semibold text-primary-foreground bg-primary hover:shadow-glow-md transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden">
              <span className={`flex items-center justify-center gap-2 transition-transform duration-300 ${isSubmitting ? '-translate-y-10' : ''}`}>
                Send Message
                <Send className="w-4 h-4 transition-transform group-hover:translate-x-1"/>
              </span>
              <span className={`absolute inset-0 flex items-center justify-center transition-transform duration-300 ${isSubmitting ? 'translate-y-0' : 'translate-y-10'}`}>
                Sending...
              </span>
            </button>
          </form>
        </div>
      </div>
    </section>);
};
