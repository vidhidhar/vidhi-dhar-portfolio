import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Contact />
      
      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border/50 bg-card/20">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-gradient-primary rounded-md flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">VD</span>
              </div>
              <span className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} Vidhi Dhar. Built with passion for data science.
              </span>
            </div>
            <div className="text-sm text-muted-foreground">
              Ready to make data-driven impact together
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
