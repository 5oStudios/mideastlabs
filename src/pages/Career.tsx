import ScrollAnimation from "@/components/ScrollAnimation";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Users, Briefcase, GraduationCap, TrendingUp, Upload } from "lucide-react";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Career = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    experience: "",
    message: ""
  });

  const jobOpenings = [
    {
      title: "Senior Analytical Chemist",
      department: "Chemical Analysis",
      type: "Full-time",
      experience: "5+ years",
      description: "Lead analytical testing procedures and method development for environmental samples",
      requirements: ["PhD/MSc in Chemistry", "5+ years lab experience", "Knowledge of HPLC, GC-MS", "Leadership skills"]
    },
    {
      title: "Microbiologist",
      department: "Microbiology",
      type: "Full-time", 
      experience: "3+ years",
      description: "Perform microbiological testing for food, water, and environmental samples",
      requirements: ["BSc/MSc in Microbiology", "3+ years experience", "Knowledge of culture techniques", "Sterile technique expertise"]
    },
    {
      title: "Laboratory Technician",
      department: "General Laboratory",
      type: "Full-time",
      experience: "1-3 years",
      description: "Support analytical operations and sample preparation activities",
      requirements: ["Diploma/BSc in Science", "1-3 years experience", "Basic lab skills", "Attention to detail"]
    },
    {
      title: "Quality Assurance Specialist",
      department: "Quality Control",
      type: "Full-time",
      experience: "4+ years",
      description: "Oversee quality management system and ensure compliance with standards",
      requirements: ["BSc in relevant field", "QA/QC experience", "ISO 17025 knowledge", "Audit experience"]
    }
  ];

  const benefits = [
    {
      title: "Professional Growth",
      description: "Continuous learning opportunities and career advancement",
      icon: TrendingUp
    },
    {
      title: "Modern Facilities",
      description: "Work with state-of-the-art equipment and technology",
      icon: Briefcase
    },
    {
      title: "Training Programs",
      description: "Regular training and skill development programs",
      icon: GraduationCap
    },
    {
      title: "Team Environment",
      description: "Collaborative and supportive work culture",
      icon: Users
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission logic here
  };

  return (
    <>
      <Header />
      <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-primary to-primary-glow text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <ScrollAnimation>
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="mb-6 bg-white/20 text-white hover:bg-white/30">
                Join Our Team
              </Badge>
              <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
                Career Opportunities
              </h1>
              <p className="text-xl text-white/90 leading-relaxed">
                Build your career with us and be part of a leading analytical laboratory 
                that's shaping the future of environmental and chemical testing.
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-20 bg-gradient-to-b from-background to-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-6">
                Why Choose Our Laboratory
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Join a dynamic team of professionals dedicated to excellence in analytical 
                testing and environmental protection.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <ScrollAnimation key={index} delay={0.1 * index}>
                  <Card className="p-6 text-center shadow-elegant hover:shadow-glow transition-all duration-500 group">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-glow rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-primary mb-2 group-hover:text-primary-glow transition-colors duration-300">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {benefit.description}
                    </p>
                  </Card>
                </ScrollAnimation>
              );
            })}
          </div>
        </div>
      </section>

      {/* Current Openings */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-6">
                Current Job Openings
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Explore exciting career opportunities in our growing laboratory team.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid gap-8 max-w-4xl mx-auto">
            {jobOpenings.map((job, index) => (
              <ScrollAnimation key={index} delay={0.1 * index}>
                <Card className="p-8 shadow-elegant hover:shadow-glow transition-all duration-500">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                    <div className="lg:flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-3">
                        <h3 className="text-xl font-semibold text-primary">{job.title}</h3>
                        <Badge variant="secondary">{job.type}</Badge>
                        <Badge variant="outline">{job.experience}</Badge>
                      </div>
                      <p className="text-muted-foreground mb-2">{job.department}</p>
                      <p className="text-muted-foreground leading-relaxed">{job.description}</p>
                    </div>
                    <Button className="mt-4 lg:mt-0 lg:ml-6">
                      Apply Now
                    </Button>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Requirements:</h4>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                      {job.requirements.map((req, reqIndex) => (
                        <li key={reqIndex} className="text-sm">{req}</li>
                      ))}
                    </ul>
                  </div>
                </Card>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20 bg-gradient-to-b from-secondary/30 to-background">
        <div className="container mx-auto px-4 lg:px-8">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-6">
                Apply for a Position
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Submit your application and join our team of analytical professionals.
              </p>
            </div>
          </ScrollAnimation>

          <ScrollAnimation delay={0.2}>
            <Card className="p-8 max-w-2xl mx-auto shadow-elegant">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input 
                      id="name"
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input 
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input 
                      id="phone"
                      placeholder="+971 XX XXX XXXX"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="position">Position Applied For</Label>
                    <Select onValueChange={(value) => setFormData({...formData, position: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a position" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="senior-chemist">Senior Analytical Chemist</SelectItem>
                        <SelectItem value="microbiologist">Microbiologist</SelectItem>
                        <SelectItem value="lab-technician">Laboratory Technician</SelectItem>
                        <SelectItem value="qa-specialist">Quality Assurance Specialist</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="experience">Years of Experience</Label>
                  <Select onValueChange={(value) => setFormData({...formData, experience: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select experience level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="0-1">0-1 years</SelectItem>
                      <SelectItem value="2-3">2-3 years</SelectItem>
                      <SelectItem value="4-5">4-5 years</SelectItem>
                      <SelectItem value="6-10">6-10 years</SelectItem>
                      <SelectItem value="10+">10+ years</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Cover Letter / Additional Information</Label>
                  <Textarea 
                    id="message"
                    placeholder="Tell us about your experience and why you want to join our team..."
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  />
                </div>

                <div className="space-y-2">
                  <Label>Resume/CV</Label>
                  <div className="border-2 border-dashed border-border rounded-lg p-6 text-center hover:border-primary transition-colors cursor-pointer">
                    <Upload className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                    <p className="text-muted-foreground text-sm">
                      Click to upload or drag and drop your resume (PDF, DOC, DOCX)
                    </p>
                  </div>
                </div>

                <Button type="submit" className="w-full">
                  Submit Application
                </Button>
              </form>
            </Card>
          </ScrollAnimation>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-glow text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <ScrollAnimation>
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                Start Your Career Journey
              </h2>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Join us in making a positive impact through analytical excellence and 
                environmental protection. We're always looking for talented individuals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-white/90 transition-colors duration-300"
                >
                  Contact HR
                </a>
                <a
                  href="/about-us"
                  className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-primary transition-colors duration-300"
                >
                  Learn More
                </a>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>
      </div>
      <Footer />
    </>
  );
};

export default Career;