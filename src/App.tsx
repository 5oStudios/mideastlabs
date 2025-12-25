import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import AboutUs from "./pages/AboutUs";
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";
import Accreditation from "./pages/Accreditation";
import GalleryPage from "./pages/GalleryPage";
import Career from "./pages/Career";
import ContactPage from "./pages/ContactPage";
import CompanyProfile from "./pages/CompanyProfile";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";

// Admin imports
import { AdminAuthProvider } from "./contexts/AdminAuthContext";
import ProtectedRoute from "./components/admin/ProtectedRoute";
import AdminLayout from "./components/admin/AdminLayout";
import AdminLogin from "./pages/admin/AdminLogin";
import AdminDashboard from "./pages/admin/AdminDashboard";
import HeroBannersPage from "./pages/admin/HeroBannersPage";
import ServicesManagementPage from "./pages/admin/ServicesManagementPage";
import GalleryManagementPage from "./pages/admin/GalleryManagementPage";
import AccreditationsPage from "./pages/admin/AccreditationsPage";
import CompanyProfilePage from "./pages/admin/CompanyProfilePage";
import ContactSettingsPage from "./pages/admin/ContactSettingsPage";
import PagesHeroImagesPage from "./pages/admin/PagesHeroImagesPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Index />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:serviceSlug" element={<ServiceDetail />} />
          <Route path="/accreditation" element={<Accreditation />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/company-profile" element={<CompanyProfile />} />
          <Route path="/career" element={<Career />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          
          {/* Admin Routes */}
          <Route path="/admin/login" element={
            <AdminAuthProvider>
              <AdminLogin />
            </AdminAuthProvider>
          } />
          <Route path="/admin/*" element={
            <AdminAuthProvider>
              <ProtectedRoute>
                <AdminLayout>
                  <Routes>
                    <Route path="/" element={<AdminDashboard />} />
                    <Route path="/hero-banners" element={<HeroBannersPage />} />
                    <Route path="/pages-hero" element={<PagesHeroImagesPage />} />
                    <Route path="/services" element={<ServicesManagementPage />} />
                    <Route path="/gallery" element={<GalleryManagementPage />} />
                    <Route path="/accreditations" element={<AccreditationsPage />} />
                    <Route path="/company-profile" element={<CompanyProfilePage />} />
                    <Route path="/contact-settings" element={<ContactSettingsPage />} />
                  </Routes>
                </AdminLayout>
              </ProtectedRoute>
            </AdminAuthProvider>
          } />
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
