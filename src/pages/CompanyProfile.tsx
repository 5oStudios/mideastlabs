import { useState } from "react";
import { useTranslation } from "react-i18next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { Button } from "@/components/ui/button";
import { ArrowLeft, BookOpen, Loader2 } from "lucide-react";
import companyProfileCover from "@/assets/company-profile-cover.jpg";
import { useCompanySettings } from "@/hooks/useCompanySettings";
import { usePageHeroImage } from "@/hooks/usePageHeroImages";

const CompanyProfile = () => {
  const [showPdf, setShowPdf] = useState(false);
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';
  const { data: settings, isLoading } = useCompanySettings();
  const { data: heroData } = usePageHeroImage('company-profile');
  const heroImage = heroData?.image_url || companyProfileCover;

  // Fallback URL if no settings or no URL configured
  const pdfUrl = settings?.profile_pdf_url || "https://drive.google.com/file/d/1o7Qdknj1X-r4ft1gH2XpWf4hmXXMnU4b/preview";

  return (
    <>
      <Header />
      <main className="pt-24" dir={isRTL ? 'rtl' : 'ltr'}>
        <section className="bg-gradient-to-r from-blue-900 to-blue-700 py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {t("companyProfilePage.title")}
            </h1>
            <p className="text-blue-100 text-lg max-w-2xl mx-auto">
              {t("companyProfilePage.heroDescription")}
            </p>
          </div>
        </section>

        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            {isLoading ? (
              <div className="flex justify-center py-12">
                <Loader2 className="w-8 h-8 animate-spin text-primary" />
              </div>
            ) : !showPdf ? (
              <div className="relative max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl">
                <div className="aspect-[3/4] md:aspect-[4/5] lg:aspect-[3/4] relative">
                  <img src={heroImage} alt="Company Profile Cover" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/20" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
                    <div className="text-center text-white mb-8">
                      <BookOpen className="w-16 h-16 mx-auto mb-4 opacity-90" />
                      <h2 className="text-3xl md:text-4xl font-bold mb-2">
                        {t("companyProfilePage.companyName")}
                      </h2>
                      <p className="text-lg opacity-90">{t("companyProfilePage.title")}</p>
                    </div>
                    <Button onClick={() => setShowPdf(true)} size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                      <BookOpen className={`w-5 h-5 ${isRTL ? 'ml-2' : 'mr-2'}`} />
                      {t("companyProfilePage.browseProfile")}
                    </Button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="max-w-5xl mx-auto">
                <Button onClick={() => setShowPdf(false)} variant="outline" className="mb-6 hover:bg-blue-50">
                  <ArrowLeft className={`w-4 h-4 ${isRTL ? 'ml-2 rotate-180' : 'mr-2'}`} />
                  {t("companyProfilePage.backToCover")}
                </Button>
                <div className="rounded-xl overflow-hidden shadow-2xl bg-white">
                  <iframe src={pdfUrl} className="w-full h-[80vh] border-0" title="Company Profile PDF" allow="autoplay" />
                </div>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default CompanyProfile;
