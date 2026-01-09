import { FloatingNav } from '@/components/FloatingNav';
import { HeroSection } from '@/components/HeroSection';
import { TechStackSection } from '@/components/TechStackSection';
import { ProjectsSection } from '@/components/ProjectsSection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';
const Index = () => {
    return (<div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <FloatingNav />
      <HeroSection />
      <TechStackSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </div>);
};
export default Index;
