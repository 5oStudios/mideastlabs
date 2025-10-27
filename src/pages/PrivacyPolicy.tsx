import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ScrollArea } from "@/components/ui/scroll-area";

const PrivacyPolicy = () => {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-lg text-white/90">Last updated: January 2024</p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <ScrollArea className="h-auto">
              <div className="prose prose-lg max-w-none">
                <h2 className="text-2xl font-bold text-foreground mb-4">1. Information We Collect</h2>
                <p className="text-muted-foreground mb-6">
                  We collect information that you provide directly to us, including when you request our testing services, 
                  submit samples, contact us, or sign up for our newsletter. This may include your name, email address, 
                  phone number, company name, and other relevant details.
                </p>

                <h2 className="text-2xl font-bold text-foreground mb-4">2. How We Use Your Information</h2>
                <p className="text-muted-foreground mb-4">We use the information we collect to:</p>
                <ul className="list-disc pl-6 text-muted-foreground mb-6 space-y-2">
                  <li>Provide, maintain, and improve our testing services</li>
                  <li>Process and complete transactions</li>
                  <li>Send you technical notices, updates, and support messages</li>
                  <li>Respond to your comments, questions, and requests</li>
                  <li>Communicate with you about products, services, and events</li>
                  <li>Monitor and analyze trends, usage, and activities</li>
                </ul>

                <h2 className="text-2xl font-bold text-foreground mb-4">3. Information Sharing and Disclosure</h2>
                <p className="text-muted-foreground mb-6">
                  We do not share, sell, rent, or trade your personal information with third parties for their promotional purposes. 
                  We may share your information only in the following circumstances: with your consent, to comply with laws, 
                  to protect rights and safety, or in connection with a business transfer.
                </p>

                <h2 className="text-2xl font-bold text-foreground mb-4">4. Data Security</h2>
                <p className="text-muted-foreground mb-6">
                  We take reasonable measures to help protect your personal information from loss, theft, misuse, 
                  unauthorized access, disclosure, alteration, and destruction. However, no internet or electronic 
                  storage system is completely secure.
                </p>

                <h2 className="text-2xl font-bold text-foreground mb-4">5. Data Retention</h2>
                <p className="text-muted-foreground mb-6">
                  We retain your personal information for as long as necessary to fulfill the purposes outlined in this 
                  privacy policy, unless a longer retention period is required or permitted by law.
                </p>

                <h2 className="text-2xl font-bold text-foreground mb-4">6. Your Rights</h2>
                <p className="text-muted-foreground mb-4">You have the right to:</p>
                <ul className="list-disc pl-6 text-muted-foreground mb-6 space-y-2">
                  <li>Access and receive a copy of your personal information</li>
                  <li>Request correction of your personal information</li>
                  <li>Request deletion of your personal information</li>
                  <li>Object to processing of your personal information</li>
                  <li>Request restriction of processing your personal information</li>
                  <li>Withdraw consent at any time</li>
                </ul>

                <h2 className="text-2xl font-bold text-foreground mb-4">7. Cookies and Tracking Technologies</h2>
                <p className="text-muted-foreground mb-6">
                  We use cookies and similar tracking technologies to track activity on our website and hold certain information. 
                  You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
                </p>

                <h2 className="text-2xl font-bold text-foreground mb-4">8. Changes to This Privacy Policy</h2>
                <p className="text-muted-foreground mb-6">
                  We may update our Privacy Policy from time to time. We will notify you of any changes by posting the 
                  new Privacy Policy on this page and updating the "Last updated" date.
                </p>

                <h2 className="text-2xl font-bold text-foreground mb-4">9. Contact Us</h2>
                <p className="text-muted-foreground mb-2">
                  If you have any questions about this Privacy Policy, please contact us:
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

export default PrivacyPolicy;
