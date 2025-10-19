import ScrollAnimation from "@/components/ScrollAnimation";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Shield, CheckCircle, FileCheck } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CertificateViewer from "@/components/CertificateViewer";
import iso9001Cert from "@/assets/certificates/iso-9001.jpg";
import iso14001Cert from "@/assets/certificates/iso-14001.jpg";
import iso45001Cert from "@/assets/certificates/iso-45001.jpg";
import tl765Page1 from "@/assets/certificates/tl-765-page-1.jpg";
import tl765Page2 from "@/assets/certificates/tl-765-page-2.jpg";
import tl765Page3 from "@/assets/certificates/tl-765-page-3.jpg";
import tl765Page4 from "@/assets/certificates/tl-765-page-4.jpg";
import tl765Page5 from "@/assets/certificates/tl-765-page-5.jpg";

const Accreditation = () => {
  const certifications = [
    {
      title: "ISO/IEC 17025:2017",
      description: "General requirements for the competence of testing and calibration laboratories",
      status: "Accredited",
      validUntil: "2025"
    },
    {
      title: "ISO 9001",
      description: "Quality management systems - Requirements",
      status: "Certified",
      validUntil: "2025"
    },
    {
      title: "Dubai Municipality Approval",
      description: "Authorized laboratory for environmental and food testing",
      status: "Approved",
      validUntil: "2024"
    },
    {
      title: "ESMA Accreditation",
      description: "Emirates Authority for Standardization and Metrology recognition",
      status: "Accredited",
      validUntil: "2025"
    }
  ];

  const accreditationBenefits = [
    {
      title: "Quality Assurance",
      description: "Ensures consistent, accurate, and reliable test results",
      icon: Shield
    },
    {
      title: "International Recognition",
      description: "Results accepted worldwide by regulatory bodies",
      icon: Award
    },
    {
      title: "Regulatory Compliance",
      description: "Meet all local and international testing standards",
      icon: CheckCircle
    },
    {
      title: "Continuous Improvement",
      description: "Regular audits ensure ongoing excellence",
      icon: FileCheck
    }
  ];

  return (
    <>
      <Header />
      <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 text-white overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/assets/scientist-1.jpg" 
            alt="Professional scientist working in laboratory"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-blue-600/40"></div>
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <ScrollAnimation>
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="mb-6 bg-white/20 text-white hover:bg-white/30">
                Quality Certification
              </Badge>
              <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
                Accreditation & Certifications
              </h1>
              <p className="text-xl text-white/90 leading-relaxed">
                Our laboratory maintains the highest standards through rigorous 
                accreditation processes and continuous quality improvement.
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Accreditation Overview */}
      <section className="py-20 bg-gradient-to-b from-background to-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-6">
                Quality You Can Trust
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Our accreditations and certifications demonstrate our commitment to delivering 
                accurate, reliable testing services that meet international standards.
              </p>
            </div>
          </ScrollAnimation>

          {/* Certification Cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {certifications.map((cert, index) => (
              <ScrollAnimation key={index} delay={0.1 * index}>
                <div className="p-8 shadow-elegant hover:shadow-glow transition-all duration-500 group bg-card rounded-lg border">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-glow rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <FileCheck className="w-6 h-6 text-white" />
                    </div>
                    <Badge 
                      variant={cert.status === 'Accredited' ? 'default' : 'secondary'}
                      className="text-xs"
                    >
                      {cert.status}
                    </Badge>
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-3 group-hover:text-primary-glow transition-colors duration-300">
                    {cert.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {cert.description}
                  </p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Valid Until:</span>
                    <span className="font-medium text-primary">{cert.validUntil}</span>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>

          {/* Certificates Section */}
          <div className="space-y-12">
            <ScrollAnimation>
              <div className="text-center mb-8">
                <h3 className="text-2xl font-display font-bold text-primary mb-4">
                  View Our Certificates
                </h3>
                <p className="text-muted-foreground">
                  Browse through our official accreditation certificates and scope documents
                </p>
              </div>
            </ScrollAnimation>

            {/* ISO 9001 Certificate */}
            <ScrollAnimation delay={0.1}>
              <CertificateViewer
                title="ISO 9001:2015 - Quality Management System"
                pages={[
                  { image: iso9001Cert, title: "ISO 9001:2015 Certificate" }
                ]}
              />
            </ScrollAnimation>

            {/* ISO 14001 Certificate */}
            <ScrollAnimation delay={0.2}>
              <CertificateViewer
                title="ISO 14001:2015 - Environmental Management System"
                pages={[
                  { image: iso14001Cert, title: "ISO 14001:2015 Certificate" }
                ]}
              />
            </ScrollAnimation>

            {/* ISO 45001 Certificate */}
            <ScrollAnimation delay={0.3}>
              <CertificateViewer
                title="ISO 45001:2018 - Occupational Health and Safety Management"
                pages={[
                  { image: iso45001Cert, title: "ISO 45001:2018 Certificate" }
                ]}
              />
            </ScrollAnimation>

            {/* TL-765 IAS Certificate with Scope */}
            <ScrollAnimation delay={0.4}>
              <CertificateViewer
                title="IAS Accreditation Certificate TL-765 - ISO/IEC 17025:2017 with Scope"
                pages={[
                  { image: tl765Page1, title: "IAS Certificate" },
                  { image: tl765Page2, title: "Scope - Chemical & Environmental" },
                  { image: tl765Page3, title: "Scope - Testing Methods" },
                  { image: tl765Page4, title: "Scope - Food Safety" },
                  { image: tl765Page5, title: "Scope - Additional Services" }
                ]}
              />
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Benefits of Accreditation */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-6">
                Benefits of Our Accreditation
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Our accredited status ensures that you receive the highest quality 
                testing services with results you can trust and rely upon.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {accreditationBenefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <ScrollAnimation key={index} delay={0.1 * index}>
                  <Card className="p-6 text-center shadow-elegant hover:shadow-glow transition-all duration-500 group">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-glow rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-primary mb-3 group-hover:text-primary-glow transition-colors duration-300">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      {benefit.description}
                    </p>
                  </Card>
                </ScrollAnimation>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quality Standards */}
      <section className="py-20 bg-gradient-to-b from-secondary/30 to-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <ScrollAnimation>
              <Card className="p-8 md:p-12 shadow-elegant">
                <div className="text-center mb-8">
                  <Award className="w-16 h-16 text-primary mx-auto mb-4" />
                  <h2 className="text-2xl md:text-3xl font-display font-bold text-primary mb-4">
                    Our Commitment to Quality
                  </h2>
                </div>
                
                <div className="space-y-6 text-muted-foreground">
                  <p className="text-lg leading-relaxed">
                    Middle East Environmental Laboratories Co. is committed to maintaining 
                    the highest standards of quality in all our testing services. Our 
                    accreditation to ISO/IEC 17025:2017 demonstrates our technical competence 
                    and quality management system effectiveness.
                  </p>
                  
                  <p className="leading-relaxed">
                    We undergo regular external audits and proficiency testing to ensure 
                    our continued compliance with international standards. Our quality 
                    management system covers all aspects of our operations, from sample 
                    handling to result reporting.
                  </p>
                  
                  <p className="leading-relaxed">
                    This commitment to quality ensures that our clients receive accurate, 
                    reliable results that are recognized and accepted by regulatory bodies 
                    and certification organizations worldwide.
                  </p>
                </div>
              </Card>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-glow text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <ScrollAnimation>
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                Trust Our Accredited Services
              </h2>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Choose our accredited laboratory for reliable, internationally recognized 
                testing results that meet the highest quality standards.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-white/90 transition-colors duration-300"
                >
                  Get Testing Quote
                </a>
                <a
                  href="/services"
                  className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-primary transition-colors duration-300"
                >
                  View Services
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

export default Accreditation;