import { MessageSquare } from "lucide-react";
import contactLabImage from "@/assets/contact-lab-illustration.jpg";

const Contact = () => {
  return (
    <section id="contact" className="relative py-20 overflow-hidden">
      {/* Full Width Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <img src={contactLabImage} alt="Laboratory Equipment Illustration" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/50"></div>
      </div>

      {/* Content Overlay */}
      <div className="relative container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <div className="inline-flex items-center space-x-2 bg-accent/10 px-4 py-2 rounded-full mb-6 backdrop-blur-sm">
            <MessageSquare className="w-4 h-4 text-accent" />
            <span className="text-accent text-lg font-semibold">Get In Touch</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Contact Us Today
          </h2>
          
          <p className="text-lg text-muted-foreground">
            Reach out to our team of experts for comprehensive laboratory testing services
          </p>
        </div>

        {/* Google Form Embed */}
        <div className="max-w-2xl mx-auto animate-fade-in">
          <div className="rounded-2xl overflow-hidden backdrop-blur-md bg-background/95 border border-border/50 shadow-strong">
            <iframe 
              src="https://docs.google.com/forms/d/e/1FAIpQLSc-HdGfOxeE4xU9120s-5Xl-EvZojE7DlGY8UToiv0CiOuQAQ/viewform?embedded=true" 
              width="100%" 
              height="959" 
              frameBorder="0" 
              marginHeight={0} 
              marginWidth={0}
              className="w-full"
              title="Contact Form"
            >
              Loading…
            </iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
