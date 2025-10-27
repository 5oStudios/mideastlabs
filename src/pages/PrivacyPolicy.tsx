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
                <h2 className="text-2xl font-bold text-foreground mb-4">Welcome to Middle East Environmental Laboratories W.L.L</h2>
                <p className="text-muted-foreground mb-6">
                  These terms and conditions outline the rules and regulations for the use of Middle East Environmental 
                  Laboratories W.L.L Website, located at Kuwait.
                </p>

                <p className="text-muted-foreground mb-6">
                  By accessing this website we assume you accept these terms and conditions. Do not continue to use 
                  mideastlabs.com if you do not agree to take all of the terms and conditions stated on this page.
                </p>

                <p className="text-muted-foreground mb-6">
                  The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice 
                  and all Agreements: "Client", "You" and "Your" refers to you, the person log on this website and compliant 
                  to the Company's terms and conditions. "The Company", "Ourselves", "We", "Our" and "Us", refers to our Company. 
                  "Party", "Parties", or "Us", refers to both the Client and ourselves. All terms refer to the offer, acceptance 
                  and consideration of payment necessary to undertake the process of our assistance to the Client in the most 
                  appropriate manner for the express purpose of meeting the Client's needs in respect of provision of the 
                  Company's stated services, in accordance with and subject to, prevailing law of kuwait. Any use of the above 
                  terminology or other words in the singular, plural, capitalization and/or he/she or they, are taken as 
                  interchangeable and therefore as referring to same.
                </p>

                <h2 className="text-2xl font-bold text-foreground mb-4">Cookies</h2>
                <p className="text-muted-foreground mb-6">
                  We employ the use of cookies. By accessing mideastlabs.com, you agreed to use cookies in agreement with the 
                  Middle East Environmental Laboratories W.L.L Privacy Policy.
                </p>

                <p className="text-muted-foreground mb-6">
                  Most interactive websites use cookies to let us retrieve the user's details for each visit. Cookies are used 
                  by our website to enable the functionality of certain areas to make it easier for people visiting our website. 
                  Some of our affiliate/advertising partners may also use cookies.
                </p>
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
