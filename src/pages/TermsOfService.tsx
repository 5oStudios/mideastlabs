import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ScrollArea } from "@/components/ui/scroll-area";

const TermsOfService = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary to-primary-deep text-white py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms of Service</h1>
            <p className="text-lg text-white/90">Last updated: January 2024</p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <ScrollArea className="h-auto">
              <div className="prose prose-lg max-w-none">
                <h2 className="text-2xl font-bold text-foreground mb-4">1. Acceptance of Terms</h2>
                <p className="text-muted-foreground mb-6">
                  By accessing and using the services of Middle East Environmental Laboratories Co., you accept and agree 
                  to be bound by the terms and provisions of this agreement. If you do not agree to these terms, 
                  please do not use our services.
                </p>

                <h2 className="text-2xl font-bold text-foreground mb-4">2. Services Description</h2>
                <p className="text-muted-foreground mb-6">
                  Middle East Environmental Laboratories Co. provides comprehensive analytical testing services including 
                  but not limited to water testing, food testing, soil analysis, environmental monitoring, and chemical testing. 
                  All services are subject to availability and our current capabilities.
                </p>

                <h2 className="text-2xl font-bold text-foreground mb-4">3. Sample Submission and Handling</h2>
                <p className="text-muted-foreground mb-4">Clients agree to:</p>
                <ul className="list-disc pl-6 text-muted-foreground mb-6 space-y-2">
                  <li>Submit samples in accordance with our specified requirements and guidelines</li>
                  <li>Provide accurate information about the samples and testing requirements</li>
                  <li>Ensure samples are properly labeled and contained</li>
                  <li>Accept that sample storage is limited and disposal may occur after testing completion</li>
                  <li>Acknowledge that certain samples may be hazardous and require special handling</li>
                </ul>

                <h2 className="text-2xl font-bold text-foreground mb-4">4. Testing and Results</h2>
                <p className="text-muted-foreground mb-6">
                  We commit to performing tests using accredited methods and providing accurate results. However, 
                  test results are based on the samples provided and may not represent the entire batch or population. 
                  Results are confidential and will only be shared with authorized parties. Turnaround times are estimates 
                  and may vary based on testing complexity and workload.
                </p>

                <h2 className="text-2xl font-bold text-foreground mb-4">5. Payment Terms</h2>
                <p className="text-muted-foreground mb-4">Clients agree to:</p>
                <ul className="list-disc pl-6 text-muted-foreground mb-6 space-y-2">
                  <li>Pay for services as per our published rates or agreed quotations</li>
                  <li>Make payment within the specified terms (typically 30 days from invoice date)</li>
                  <li>Cover additional costs for rush services, special handling, or retesting</li>
                  <li>Accept that failure to pay may result in suspension of services</li>
                </ul>

                <h2 className="text-2xl font-bold text-foreground mb-4">6. Liability and Warranty</h2>
                <p className="text-muted-foreground mb-6">
                  While we maintain high standards of accuracy and quality, our liability is limited to the cost of 
                  the testing services provided. We are not responsible for decisions made based on test results or 
                  for consequential damages. Test results are provided "as is" without warranty of any kind, except 
                  as required by applicable accreditation standards.
                </p>

                <h2 className="text-2xl font-bold text-foreground mb-4">7. Confidentiality</h2>
                <p className="text-muted-foreground mb-6">
                  We treat all client information and test results as confidential and will not disclose them to 
                  third parties except as required by law or with client authorization. Clients acknowledge that 
                  we may retain records for quality assurance and regulatory compliance purposes.
                </p>

                <h2 className="text-2xl font-bold text-foreground mb-4">8. Intellectual Property</h2>
                <p className="text-muted-foreground mb-6">
                  All testing methodologies, procedures, reports, and materials provided by Middle East Environmental 
                  Laboratories Co. remain our intellectual property. Clients may not reproduce, distribute, or use 
                  these materials beyond the scope of the specific testing engagement.
                </p>

                <h2 className="text-2xl font-bold text-foreground mb-4">9. Cancellation and Refunds</h2>
                <p className="text-muted-foreground mb-6">
                  Cancellations must be made in writing before testing begins. Once testing has commenced, full payment 
                  is due. Refunds are provided at our discretion and typically only when we are unable to complete 
                  the requested service.
                </p>

                <h2 className="text-2xl font-bold text-foreground mb-4">10. Compliance and Standards</h2>
                <p className="text-muted-foreground mb-6">
                  Our laboratory operates in compliance with ISO/IEC 17025:2017 and other relevant standards. 
                  We maintain accreditation from recognized bodies and follow established testing protocols and 
                  quality management systems.
                </p>

                <h2 className="text-2xl font-bold text-foreground mb-4">11. Dispute Resolution</h2>
                <p className="text-muted-foreground mb-6">
                  Any disputes arising from our services will be resolved first through direct communication. 
                  If resolution cannot be reached, disputes will be subject to the jurisdiction of the courts 
                  of Kuwait and governed by Kuwaiti law.
                </p>

                <h2 className="text-2xl font-bold text-foreground mb-4">12. Modifications to Terms</h2>
                <p className="text-muted-foreground mb-6">
                  We reserve the right to modify these terms at any time. Continued use of our services after 
                  changes constitutes acceptance of the modified terms. We will notify clients of material changes 
                  through our website or direct communication.
                </p>

                <h2 className="text-2xl font-bold text-foreground mb-4">13. Contact Information</h2>
                <p className="text-muted-foreground mb-2">
                  For questions about these Terms of Service, please contact us:
                </p>
                <ul className="list-none text-muted-foreground space-y-2">
                  <li>Email: info@mideastlabs.com</li>
                  <li>Phone: +96522251588</li>
                  <li>Address: Building 195, 1st Floor, West of Abu Fatira Al Herafia, P.O. Box 114, AL-Qusour, 47402, Kuwait</li>
                </ul>
              </div>
            </ScrollArea>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default TermsOfService;
