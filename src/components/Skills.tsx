import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      title: "Technical Programming",
      level: "Advanced",
      skills: ["Python", "SQL (MySQL, PostgreSQL, MS SQL Server)", "R"],
      progress: 90
    },
    {
      title: "ML & AI",
      level: "Advanced", 
      skills: ["Scikit-learn", "TensorFlow", "Supervised & Unsupervised ML", "Regression", "Classification", "NLP", "Ensemble Models", "Generative AI", "Prompt Engineering", "LangChain", "RAG"],
      progress: 85
    },
    {
      title: "Analytics & Experimentation",
      level: "Advanced",
      skills: ["A/B Testing", "Hypothesis Testing", "Exploratory Data Analysis", "Statistical Analysis", "Predictive Analytics", "Excel (Pivot Tables, VLOOKUP, VBA, Power Query)"],
      progress: 88
    },
    {
      title: "Cloud, BI & ETL",
      level: "Intermediate",
      skills: ["ETL/ELT", "Microsoft Azure", "Microsoft Fabric", "Power BI", "Tableau", "Pandas", "NumPy"],
      progress: 75
    },
    {
      title: "Collaboration & Versioning", 
      level: "Intermediate",
      skills: ["GitHub", "Jira"],
      progress: 70
    }
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Advanced":
        return "bg-accent text-accent-foreground";
      case "Intermediate":
        return "bg-primary text-primary-foreground";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <section id="skills" className="py-20 px-4 bg-card/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive expertise across the data science and analytics stack
          </p>
        </div>

        <div className="grid gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="bg-card/50 backdrop-blur-sm border-border/50 shadow-card hover:shadow-glow transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl font-semibold">{category.title}</CardTitle>
                  <Badge className={getLevelColor(category.level)}>
                    {category.level}
                  </Badge>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Proficiency</span>
                    <span className="font-medium">{category.progress}%</span>
                  </div>
                  <Progress value={category.progress} className="h-2" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      variant="outline" 
                      className="border-primary/30 hover:bg-primary/10 transition-colors duration-200"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Certifications */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8">Certifications</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-gradient-primary text-primary-foreground shadow-card hover:shadow-glow transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="text-lg font-semibold mb-2">Microsoft Certified</div>
                <div className="text-sm opacity-90">Power BI Data Analyst Associate (2024)</div>
              </CardContent>
            </Card>
            
            <Card className="bg-card border-primary/20 shadow-card hover:bg-primary/5 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="text-lg font-semibold mb-2 text-primary">Azure Data Scientist</div>
                <div className="text-sm text-muted-foreground">Associate DP-100 (In Progress)</div>
                <div className="text-xs text-accent mt-1">ETA: July 2025</div>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-accent text-accent-foreground shadow-card hover:shadow-glow transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="text-lg font-semibold mb-2">Google Certified</div>
                <div className="text-sm opacity-90">Data Analytics Professional (2023)</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;