import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Target, Lightbulb, TrendingUp } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Marketing Campaign A/B Optimiser",
      type: "Personal Project",
      year: "2024",
      description: "Built a Python pipeline to auto-design and analyse experiments with sequential-test stopping rules, addressing manual A/B testing delays.",
      problem: "Manual A/B reads delayed optimisation cycles",
      approach: "Python pipeline (SciPy, Statsmodels) with sequential-test stopping rules",
      impact: "Boosted checkout conversion 12% on paid-social sandbox (150k impressions)",
      technologies: ["Python", "SciPy", "Statsmodels", "Matplotlib", "GitHub Actions"],
      color: "primary",
      featured: true
    },
    {
      title: "PyGuide — Intelligent Python Lab Assistant",
      type: "M.Sc. Dissertation",
      year: "2023", 
      description: "Created a PyQt5 desktop assistant with OpenAI GPT-3.5 for contextual Q&A, code snippet generation, and documentation lookup to help novice coders.",
      problem: "Novice coders struggled to debug & grasp APIs in real-time",
      approach: "PyQt5 desktop assistant with GPT-3.5 integration for contextual assistance",
      impact: "95% user-satisfaction with 40 testers, saved average 18 min from lab tasks",
      technologies: ["Python", "PyQt5", "GPT-3.5", "LangChain", "Git"],
      color: "accent",
      featured: true
    },
    {
      title: "PubMed RAG Chatbot — Medical Query Engine",
      type: "Personal Project",
      year: "2024",
      description: "Built a domain-aware medical literature search system using vector databases and retrieval-augmented generation to navigate vast PubMed volumes.",
      problem: "Challenge of navigating vast volumes of medical literature on PubMed",
      approach: "Indexed abstracts with Pinecone; built LangChain retrieval pipeline with reranker",
      impact: "Answer relevance ↑ 32% vs keyword search, with < 1s latency",
      technologies: ["Python", "Streamlit", "Git", "LangChain", "Vector Database (FAISS)"],
      color: "muted",
      featured: false
    }
  ];

  const getCardStyles = (color: string, featured: boolean) => {
    if (featured) {
      switch (color) {
        case "primary":
          return "bg-gradient-primary text-primary-foreground shadow-glow";
        case "accent":
          return "bg-gradient-accent text-accent-foreground shadow-glow";
        default:
          return "bg-card shadow-card";
      }
    }
    return "bg-card border-border/50 shadow-card hover:bg-card/80";
  };

  const getBadgeStyles = (color: string, featured: boolean) => {
    if (featured) {
      switch (color) {
        case "primary":
          return "bg-primary-foreground/20 text-primary-foreground border-primary-foreground/30";
        case "accent":
          return "bg-accent-foreground/20 text-accent-foreground border-accent-foreground/30";
        default:
          return "bg-primary/10 text-primary border-primary/30";
      }
    }
    return "bg-primary/10 text-primary border-primary/30";
  };

  return (
    <section id="projects" className="py-20 px-4 bg-card/10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Key Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Innovative solutions that solve real-world challenges with measurable impact
          </p>
        </div>

        <div className="grid gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className={`${getCardStyles(project.color, project.featured)} transition-all duration-300 hover:scale-[1.02]`}
            >
              <CardHeader className="pb-4">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <CardTitle className="text-2xl font-bold">{project.title}</CardTitle>
                      {project.featured && (
                        <Badge className="bg-accent text-accent-foreground">Featured</Badge>
                      )}
                    </div>
                    <div className="flex items-center gap-4 text-sm opacity-80 mb-3">
                      <span className="font-medium">{project.type}</span>
                      <span>{project.year}</span>
                    </div>
                    <p className="text-sm opacity-90 leading-relaxed">{project.description}</p>
                  </div>
                  
                  <div className="flex gap-2 shrink-0">
                    <Button 
                      size="sm" 
                      variant="outline"
                      className={getBadgeStyles(project.color, project.featured)}
                    >
                      <Github className="h-4 w-4 mr-1" />
                      Code
                    </Button>
                    <Button 
                      size="sm" 
                      variant="outline"
                      className={getBadgeStyles(project.color, project.featured)}
                    >
                      <ExternalLink className="h-4 w-4 mr-1" />
                      Demo
                    </Button>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                {/* Problem-Approach-Impact */}
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 opacity-90">
                      <Target className="h-4 w-4" />
                      <span className="font-semibold text-sm">Problem</span>
                    </div>
                    <p className="text-sm opacity-80">{project.problem}</p>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 opacity-90">
                      <Lightbulb className="h-4 w-4" />
                      <span className="font-semibold text-sm">Approach</span>
                    </div>
                    <p className="text-sm opacity-80">{project.approach}</p>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 opacity-90">
                      <TrendingUp className="h-4 w-4" />
                      <span className="font-semibold text-sm">Impact</span>
                    </div>
                    <p className="text-sm opacity-80">{project.impact}</p>
                  </div>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="font-semibold mb-3 opacity-90 text-sm">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex} 
                        variant="outline" 
                        className={getBadgeStyles(project.color, project.featured)}
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Project Stats */}
        <div className="mt-16">
          <Card className="bg-card/50 backdrop-blur-sm border-border/50 shadow-card">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-center mb-8 text-primary">Project Impact Summary</h3>
              <div className="grid md:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">95%</div>
                  <div className="text-sm text-muted-foreground">User Satisfaction</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent mb-2">32%</div>
                  <div className="text-sm text-muted-foreground">Search Relevance Improvement</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">12%</div>
                  <div className="text-sm text-muted-foreground">Conversion Rate Boost</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent mb-2">18 min</div>
                  <div className="text-sm text-muted-foreground">Average Time Saved</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Projects;