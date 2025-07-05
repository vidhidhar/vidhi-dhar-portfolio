import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-32 h-32 bg-primary/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-accent/10 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-10 w-24 h-24 bg-primary/10 rounded-full blur-lg animate-pulse delay-500"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <div className="mb-8 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Vidhi Dhar
          </h1>
          <h2 className="text-2xl md:text-3xl text-muted-foreground mb-6">
            Data Scientist | Machine Learning & Analytics
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Transforming data into actionable insights with 2+ years of experience in ML, 
            analytics, and AI solutions that drive business growth.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in delay-300">
          <Button 
            size="lg" 
            className="bg-gradient-primary hover:shadow-glow transition-all duration-300"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <Mail className="mr-2 h-5 w-5" />
            Get In Touch
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="border-primary/50 hover:bg-primary/10"
            onClick={() => window.open('mailto:vidhidhar.vd@gmail.com?subject=CV Request', '_blank')}
          >
            <Download className="mr-2 h-5 w-5" />
            Download CV
          </Button>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6 animate-fade-in delay-500">
          <a 
            href="https://linkedin.com/in/vidhidhar" 
            className="p-3 rounded-full bg-card/50 backdrop-blur-sm border border-border hover:bg-primary/10 hover:border-primary/50 transition-all duration-300 hover:scale-110"
            aria-label="LinkedIn Profile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin className="h-6 w-6" />
          </a>
          <a 
            href="https://github.com/vidhidhar" 
            className="p-3 rounded-full bg-card/50 backdrop-blur-sm border border-border hover:bg-primary/10 hover:border-primary/50 transition-all duration-300 hover:scale-110"
            aria-label="GitHub Profile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="h-6 w-6" />
          </a>
          <a 
            href="mailto:vidhidhar.vd@gmail.com" 
            className="p-3 rounded-full bg-card/50 backdrop-blur-sm border border-border hover:bg-primary/10 hover:border-primary/50 transition-all duration-300 hover:scale-110"
            aria-label="Email Contact"
          >
            <Mail className="h-6 w-6" />
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;