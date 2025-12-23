import { useTranslation } from "react-i18next";
import { Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo-footer.gif";

const Footer = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  const quickLinks = [
    { labelKey: "nav.aboutUs", href: "/about-us" },
    { labelKey: "nav.services", href: "/services" },
    { labelKey: "nav.accreditation", href: "/accreditation" },
    { labelKey: "nav.gallery", href: "/gallery" },
    { labelKey: "nav.career", href: "/career" },
    { labelKey: "nav.contactUs", href: "/contact" }
  ];

  const services = [
    { labelKey: "footer.services.water", href: "/services" },
    { labelKey: "footer.services.food", href: "/services" },
    { labelKey: "footer.services.soil", href: "/services" },
    { labelKey: "footer.services.cosmetics", href: "/services" },
    { labelKey: "footer.services.environmental", href: "/services" },
    { labelKey: "footer.services.material", href: "/services" }
  ];

  return (
    <footer className="bg-gradient-to-b from-primary-deep to-primary text-white">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className={`flex items-center ${isRTL ? 'space-x-reverse space-x-2' : 'space-x-2'}`}>
              <img src={logo} alt="Middle East Environmental Laboratories Co. Logo" className="h-32 w-32 rounded-full object-contain" loading="lazy" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-6">{t("footer.quickLinks")}</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link to={link.href} className="text-white/80 hover:text-white transition-smooth text-sm">
                    {t(link.labelKey)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-6">{t("footer.ourServices")}</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <Link to={service.href} className="text-white/80 hover:text-white transition-smooth text-sm">
                    {t(service.labelKey)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-6">{t("footer.contactInfo")}</h3>
            <div className="space-y-4">
              <div className={`flex items-start ${isRTL ? 'space-x-reverse space-x-3' : 'space-x-3'}`}>
                <MapPin className="w-5 h-5 text-white/80 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-white/90 text-sm">{t("contactPage.location.address1")}</p>
                  <p className="text-white/90 text-sm">{t("contactPage.location.address2")}</p>
                </div>
              </div>
              
              <div className={`flex items-center ${isRTL ? 'space-x-reverse space-x-3' : 'space-x-3'}`}>
                <Phone className="w-5 h-5 text-white/80 flex-shrink-0" />
                <div>
                  <p className="text-white/90 text-sm" dir="ltr">+965 22251577</p>
                </div>
              </div>
              
              <div className={`flex items-center ${isRTL ? 'space-x-reverse space-x-3' : 'space-x-3'}`}>
                <Mail className="w-5 h-5 text-white/80 flex-shrink-0" />
                <div>
                  <p className="text-white/90 text-sm">info@mideastlabs.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/20">
          <div className={`flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 ${isRTL ? 'md:flex-row-reverse' : ''}`}>
            <div className="text-white/80 text-sm">
              {t("footer.copyright")}
            </div>
            
            <div className={`flex ${isRTL ? 'space-x-reverse space-x-6' : 'space-x-6'} text-sm`}>
              <Link to="/privacy-policy" className="text-white/80 hover:text-white transition-smooth">
                {t("footer.privacyPolicy")}
              </Link>
              <Link to="/terms-of-service" className="text-white/80 hover:text-white transition-smooth">
                {t("footer.termsOfService")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
