import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, BookOpen } from "lucide-react";
import companyProfileCover from "@/assets/company-profile-cover.jpg";

const CompanyProfile = () => {
  const [showPdf, setShowPdf] = useState(false);

  return (
    <>
      <Header />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-900 to-blue-700 py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Company Profile
            </h1>
            <p className="text-blue-100 text-lg max-w-2xl mx-auto">
              Discover our journey, capabilities, and commitment to environmental excellence
            </p>
          </div>
        </section>

        {/* Profile Section */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="relative">
              {/* Cover View */}
              <div 
                className={`relative max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 ease-out ${
                  showPdf 
                    ? 'opacity-0 scale-95 pointer-events-none absolute inset-0' 
                    : 'opacity-100 scale-100'
                }`}
              >
                <div className="aspect-[3/4] md:aspect-[4/5] lg:aspect-[3/4] relative">
                  <img
                    src={companyProfileCover}
                    alt="Company Profile Cover"
                    className="w-full h-full object-cover"
                  />
                  {/* Dark overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/20" />
                  
                  {/* Content overlay */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
                    <div className="text-center text-white mb-8">
                      <BookOpen className="w-16 h-16 mx-auto mb-4 opacity-90" />
                      <h2 className="text-3xl md:text-4xl font-bold mb-2">
                        Middle East Environmental Laboratories
                      </h2>
                      <p className="text-lg opacity-90">Company Profile</p>
                    </div>
                    
                    <Button
                      onClick={() => setShowPdf(true)}
                      size="lg"
                      className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                    >
                      <BookOpen className="w-5 h-5 mr-2" />
                      Browse the Profile
                    </Button>
                  </div>
                </div>
              </div>

              {/* PDF Viewer */}
              <div 
                className={`max-w-5xl mx-auto transition-all duration-500 ease-out ${
                  showPdf 
                    ? 'opacity-100 scale-100 translate-y-0' 
                    : 'opacity-0 scale-95 translate-y-4 pointer-events-none absolute inset-0'
                }`}
              >
                <Button
                  onClick={() => setShowPdf(false)}
                  variant="outline"
                  className="mb-6 hover:bg-accent"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Cover
                </Button>
                
                <div className="rounded-xl overflow-hidden shadow-2xl bg-card">
                  <iframe
                    src="https://drive.google.com/file/d/1o7Qdknj1X-r4ft1gH2XpWf4hmXXMnU4b/preview"
                    className="w-full h-[80vh] border-0"
                    title="Company Profile PDF"
                    allow="autoplay"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default CompanyProfile;
