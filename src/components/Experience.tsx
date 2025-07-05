import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar, TrendingUp } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Associate Data Scientist",
      company: "Victoria Solutions",
      location: "London, UK",
      period: "Jan 2025 – June 2025",
      type: "Full-time",
      achievements: [
        "Streamlined 50k+ retail records via SQL & Python ETL, boosting data processing speed 40%",
        "Built customer-segmentation & demand-forecasting models (Scikit-learn, AutoML) that hit 82% F1 and cut stock-outs 12%",
        "Launched self-service Power BI & Tableau dashboards, saving analysts 30% weekly reporting time", 
        "Produced insight packs that lifted campaign ROI 15% and informed product roadmap"
      ],
      skills: ["Python", "SQL", "Scikit-learn", "AutoML", "Power BI", "Tableau"],
      color: "primary"
    },
    {
      title: "Data Analyst",
      company: "Publicis Media",
      location: "Gurugram, India", 
      period: "Feb 2021 – Sep 2022",
      type: "Full-time",
      achievements: [
        "Orchestrated multi-source ETL pipelines, reducing data lag 40%",
        "Designed 30+ Power BI dashboards that trimmed decision lead-time 25%",
        "Deployed campaign-KPI classification models (90%+ accuracy), improving targeting efficiency"
      ],
      skills: ["ETL", "Power BI", "Classification Models", "KPI Analysis"],
      color: "accent"
    },
    {
      title: "Media Analyst (Programmatic Hub)",
      company: "Publicis Media", 
      location: "Gurugram, India",
      period: "Sep 2020 – Feb 2021",
      type: "Full-time",
      achievements: [
        "Produced performance analytics for programmatic ads, enabling smarter bid optimisation",
        "Utilised Excel and Google Analytics to track, analyse, and optimise digital advertising performance"
      ],
      skills: ["Google Analytics", "Excel", "Performance Analytics", "Programmatic Advertising"],
      color: "muted"
    }
  ];

  const getCardStyles = (color: string) => {
    switch (color) {
      case "primary":
        return "bg-gradient-primary text-primary-foreground shadow-glow";
      case "accent":
        return "bg-gradient-accent text-accent-foreground shadow-glow";
      default:
        return "bg-card border-border/50 shadow-card hover:bg-card/80";
    }
  };

  const getBadgeStyles = (color: string) => {
    switch (color) {
      case "primary":
        return "bg-primary-foreground/20 text-primary-foreground border-primary-foreground/30";
      case "accent":
        return "bg-accent-foreground/20 text-accent-foreground border-accent-foreground/30";
      default:
        return "bg-primary/10 text-primary border-primary/30";
    }
  };

  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Professional Experience
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Driving data-driven decisions and measurable business impact
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className={`${getCardStyles(exp.color)} transition-all duration-300 hover:scale-[1.02]`}>
              <CardHeader className="pb-4">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <CardTitle className="text-2xl font-bold mb-2">{exp.title}</CardTitle>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm opacity-90">
                        <TrendingUp className="h-4 w-4" />
                        <span className="font-semibold">{exp.company}</span>
                      </div>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm">
                        <div className="flex items-center gap-1 opacity-80">
                          <MapPin className="h-4 w-4" />
                          <span>{exp.location}</span>
                        </div>
                        <div className="flex items-center gap-1 opacity-80">
                          <Calendar className="h-4 w-4" />
                          <span>{exp.period}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Badge className={`${getBadgeStyles(exp.color)} shrink-0`}>
                    {exp.type}
                  </Badge>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                {/* Key Achievements */}
                <div>
                  <h4 className="font-semibold mb-3 opacity-90">Key Achievements:</h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="flex items-start gap-2 text-sm opacity-90">
                        <div className="w-1.5 h-1.5 bg-current rounded-full mt-2 shrink-0"></div>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Skills Used */}
                <div>
                  <h4 className="font-semibold mb-3 opacity-90">Technologies & Skills:</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex} 
                        variant="outline" 
                        className={getBadgeStyles(exp.color)}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Experience Summary */}
        <div className="mt-16 text-center">
          <Card className="bg-card/50 backdrop-blur-sm border-border/50 shadow-card">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-primary">Experience Highlights</h3>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-accent mb-2">40%</div>
                  <div className="text-sm text-muted-foreground">Average Processing Speed Improvement</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">90%+</div>
                  <div className="text-sm text-muted-foreground">Model Accuracy Achievement</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent mb-2">30+</div>
                  <div className="text-sm text-muted-foreground">Dashboards Created</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Experience;