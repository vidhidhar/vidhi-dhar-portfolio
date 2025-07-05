import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, MapPin, Calendar, Award } from "lucide-react";

const Education = () => {
  const educationData = [
    {
      degree: "M.Sc. Data Science",
      institution: "University of Birmingham",
      location: "Birmingham, UK",
      period: "Sep 2022 – Sep 2023",
      gpa: "8.5/10",
      distinction: "Top 10%",
      description: "Advanced coursework in machine learning, statistical analysis, and big data technologies with focus on practical applications.",
      highlights: [
        "Specialized in Machine Learning and AI applications",
        "Completed dissertation on Intelligent Python Lab Assistant",
        "Extensive training in statistical modeling and data visualization"
      ],
      color: "primary",
      featured: true
    },
    {
      degree: "B.Tech. Information Technology",
      institution: "Amity University",
      location: "Noida, India", 
      period: "Jul 2016 – Jul 2020",
      gpa: "7.9/10",
      distinction: "Strong Academic Performance",
      description: "Comprehensive foundation in computer science, programming, and information systems with emphasis on software development.",
      highlights: [
        "Strong foundation in programming and algorithms",
        "Coursework in database systems and software engineering",
        "Active participation in technical projects and competitions"
      ],
      color: "accent",
      featured: false
    }
  ];

  const getCardStyles = (color: string, featured: boolean) => {
    if (featured) {
      return "bg-gradient-primary text-primary-foreground shadow-glow";
    }
    return "bg-gradient-accent text-accent-foreground shadow-card";
  };

  const getBadgeStyles = (color: string, featured: boolean) => {
    if (featured) {
      return "bg-primary-foreground/20 text-primary-foreground border-primary-foreground/30";
    }
    return "bg-accent-foreground/20 text-accent-foreground border-accent-foreground/30";
  };

  return (
    <section id="education" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Education
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Strong academic foundation in data science and technology
          </p>
        </div>

        <div className="grid gap-8">
          {educationData.map((edu, index) => (
            <Card 
              key={index} 
              className={`${getCardStyles(edu.color, edu.featured)} transition-all duration-300 hover:scale-[1.02]`}
            >
              <CardHeader className="pb-4">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <GraduationCap className="h-6 w-6" />
                      <CardTitle className="text-2xl font-bold">{edu.degree}</CardTitle>
                    </div>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2 text-lg font-semibold opacity-90">
                        <span>{edu.institution}</span>
                      </div>
                      
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm">
                        <div className="flex items-center gap-1 opacity-80">
                          <MapPin className="h-4 w-4" />
                          <span>{edu.location}</span>
                        </div>
                        <div className="flex items-center gap-1 opacity-80">
                          <Calendar className="h-4 w-4" />
                          <span>{edu.period}</span>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-sm opacity-90 leading-relaxed mb-4">{edu.description}</p>
                  </div>
                  
                  <div className="flex flex-col gap-2 shrink-0">
                    <Badge className={`${getBadgeStyles(edu.color, edu.featured)} text-center`}>
                      GPA: {edu.gpa}
                    </Badge>
                    <Badge className={getBadgeStyles(edu.color, edu.featured)}>
                      <Award className="h-3 w-3 mr-1" />
                      {edu.distinction}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <div>
                  <h4 className="font-semibold mb-3 opacity-90">Key Highlights:</h4>
                  <ul className="space-y-2">
                    {edu.highlights.map((highlight, highlightIndex) => (
                      <li key={highlightIndex} className="flex items-start gap-2 text-sm opacity-90">
                        <div className="w-1.5 h-1.5 bg-current rounded-full mt-2 shrink-0"></div>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Education Summary */}
        <div className="mt-16">
          <Card className="bg-card/50 backdrop-blur-sm border-border/50 shadow-card">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-center mb-8 text-primary">Academic Achievement</h3>
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">8.5</div>
                  <div className="text-sm text-muted-foreground">Master's GPA (out of 10)</div>
                  <div className="text-xs text-accent mt-1">Top 10% of Class</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent mb-2">2</div>
                  <div className="text-sm text-muted-foreground">Degrees Completed</div>
                  <div className="text-xs text-primary mt-1">International & Domestic</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">4+</div>
                  <div className="text-sm text-muted-foreground">Years of Study</div>
                  <div className="text-xs text-accent mt-1">Specialized in Data Science</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Education;