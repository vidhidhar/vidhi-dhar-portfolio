import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const About = () => {
  const highlights = [
    "2+ years of data science experience",
    "15% marketing ROI improvement",
    "30% reporting time reduction",
    "82% F1 score achievement"
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Passionate about turning complex data into clear, actionable insights
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div className="prose prose-lg dark:prose-invert">
              <p className="text-lg leading-relaxed text-foreground/90">
                As a dedicated Data Scientist with expertise in machine learning and analytics, 
                I specialize in developing deployable solutions that drive real business impact. 
                My experience spans from streamlining complex data pipelines to building 
                sophisticated ML models that solve real-world challenges.
              </p>
              
              <p className="text-lg leading-relaxed text-foreground/90">
                I'm passionate about leveraging cutting-edge technologies including Generative AI, 
                advanced analytics, and cloud platforms to create scalable solutions. My work 
                consistently focuses on bridging the gap between complex data science concepts 
                and practical business applications.
              </p>
            </div>

            {/* Key Highlights */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span className="text-sm font-medium">{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 gap-4">
            <Card className="bg-gradient-primary text-primary-foreground shadow-card hover:shadow-glow transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold mb-2">2+</div>
                <div className="text-sm opacity-90">Years Experience</div>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-accent text-accent-foreground shadow-card hover:shadow-glow transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold mb-2">15%</div>
                <div className="text-sm opacity-90">ROI Improvement</div>
              </CardContent>
            </Card>
            
            <Card className="bg-card border-primary/20 shadow-card hover:bg-primary/5 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold mb-2 text-primary">50K+</div>
                <div className="text-sm text-muted-foreground">Records Processed</div>
              </CardContent>
            </Card>
            
            <Card className="bg-card border-accent/20 shadow-card hover:bg-accent/5 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold mb-2 text-accent">82%</div>
                <div className="text-sm text-muted-foreground">Model Accuracy</div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Location & Availability */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-4 bg-card/50 backdrop-blur-sm rounded-full px-6 py-3 border border-border/50">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
              <span className="text-sm font-medium">Based in Delhi, India</span>
            </div>
            <div className="w-px h-4 bg-border"></div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              <span className="text-sm font-medium">Available for opportunities</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;