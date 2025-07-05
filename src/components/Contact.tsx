import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Github, 
  Download, 
  Send,
  MessageCircle,
  Clock
} from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "vidhidhar.vd@gmail.com", 
      href: "mailto:vidhidhar.vd@gmail.com",
      color: "primary"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9654947654",
      href: "tel:+919654947654", 
      color: "accent"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Delhi, India",
      href: "#",
      color: "muted"
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      username: "linkedin.com/in/vidhidhar",
      href: "https://linkedin.com/in/vidhidhar",
      color: "primary"
    },
    {
      icon: Github,
      label: "GitHub", 
      username: "github.com/vidhidhar",
      href: "https://github.com/vidhidhar",
      color: "accent"
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-card/10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to discuss opportunities, collaborations, or just have a chat about data science
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="bg-gradient-primary text-primary-foreground shadow-glow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <MessageCircle className="h-6 w-6" />
                  Get In Touch
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="opacity-90 leading-relaxed">
                  I'm always interested in discussing new opportunities, collaborating on exciting projects, 
                  or simply connecting with fellow data enthusiasts. Feel free to reach out!
                </p>
                
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <a 
                      key={index}
                      href={info.href}
                      className="flex items-center gap-4 p-3 rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-all duration-300 group"
                    >
                      <div className="p-2 rounded-full bg-primary-foreground/20">
                        <info.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="text-sm opacity-80">{info.label}</div>
                        <div className="font-medium group-hover:underline">{info.value}</div>
                      </div>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="bg-card/50 backdrop-blur-sm border-border/50 shadow-card">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4 text-primary">Find Me Online</h3>
                <div className="space-y-3">
                  {socialLinks.map((social, index) => (
                    <a 
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-3 rounded-lg bg-card hover:bg-primary/5 border border-border/50 hover:border-primary/30 transition-all duration-300 group"
                    >
                      <div className="p-2 rounded-full bg-primary/10 group-hover:bg-primary/20">
                        <social.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <div className="font-medium text-foreground">{social.label}</div>
                        <div className="text-sm text-muted-foreground group-hover:text-primary transition-colors">
                          {social.username}
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Availability Status */}
            <Card className="bg-gradient-accent text-accent-foreground shadow-card">
              <CardContent className="p-6 text-center">
                <div className="flex items-center justify-center gap-2 mb-3">
                  <div className="w-3 h-3 bg-accent-foreground rounded-full animate-pulse"></div>
                  <span className="font-semibold">Currently Available</span>
                </div>
                <p className="text-sm opacity-90 mb-4">
                  Open to new opportunities and exciting data science challenges
                </p>
                <Button 
                  className="bg-accent-foreground text-accent hover:bg-accent-foreground/90"
                  size="sm"
                >
                  <Download className="h-4 w-4 mr-2" />
                  Download CV
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="bg-card/50 backdrop-blur-sm border-border/50 shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl text-primary">
                  <Send className="h-6 w-6" />
                  Send a Message
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">First Name</label>
                    <Input placeholder="John" className="bg-background/50" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Last Name</label>
                    <Input placeholder="Doe" className="bg-background/50" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">Email</label>
                  <Input type="email" placeholder="john.doe@example.com" className="bg-background/50" />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">Subject</label>
                  <Input placeholder="Project collaboration opportunity" className="bg-background/50" />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">Message</label>
                  <Textarea 
                    placeholder="I'd love to discuss a potential collaboration..." 
                    className="bg-background/50 min-h-[120px]"
                  />
                </div>

                <Button className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300">
                  <Send className="h-4 w-4 mr-2" />
                  Send Message
                </Button>

                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  <span>I typically respond within 24 hours</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Quick Contact */}
        <div className="mt-16 text-center">
          <Card className="bg-card/30 backdrop-blur-sm border-border/30 shadow-card inline-block">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-4 text-primary">Prefer a quick chat?</h3>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-gradient-primary hover:shadow-glow transition-all duration-300"
                  asChild
                >
                  <a href="mailto:vidhidhar.vd@gmail.com">
                    <Mail className="h-5 w-5 mr-2" />
                    Email Me
                  </a>
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-primary/50 hover:bg-primary/10"
                  asChild
                >
                  <a href="https://linkedin.com/in/vidhidhar" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-5 w-5 mr-2" />
                    LinkedIn
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;