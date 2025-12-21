import { useState, useRef } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

// Import all certificate images
import cert1 from "@/assets/certificates/cert-1.png";
import cert2 from "@/assets/certificates/cert-2.png";
import cert3 from "@/assets/certificates/cert-3.png";
import cert4 from "@/assets/certificates/cert-4.png";
import cert5 from "@/assets/certificates/cert-5.png";
import cert6 from "@/assets/certificates/cert-6.png";
import cert7 from "@/assets/certificates/cert-7.png";
import cert8 from "@/assets/certificates/cert-8.png";
import cert9 from "@/assets/certificates/cert-9.png";

const certificates = [
  { image: cert1, title: "EPA Soil Testing" },
  { image: cert2, title: "EPA Chemical Testing" },
  { image: cert3, title: "EPA Biological Testing" },
  { image: cert4, title: "EPA Air Testing" },
  { image: cert5, title: "EPA Water Testing" },
  { image: cert6, title: "ISO 9001 TIS" },
  { image: cert7, title: "ISO 14001 TIS" },
  { image: cert8, title: "ISO 45001 TIS" },
  { image: cert9, title: "IAS Accreditation" },
];

const CertificateScroller = () => {
  const [selectedCert, setSelectedCert] = useState<{ image: string; title: string } | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const scrollerRef = useRef<HTMLDivElement>(null);

  // Duplicate certificates for seamless loop
  const duplicatedCerts = [...certificates, ...certificates];

  const scrollLeft = () => {
    if (scrollerRef.current) {
      scrollerRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollerRef.current) {
      scrollerRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="relative overflow-hidden py-8">
        {/* Left fade gradient */}
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        
        {/* Right fade gradient */}
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        {/* Left Arrow */}
        <button
          onClick={scrollLeft}
          className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-20 p-2 md:p-3 rounded-full bg-primary/90 hover:bg-primary text-primary-foreground shadow-lg transition-all duration-300 hover:scale-110"
          aria-label="Scroll left"
        >
          <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
        </button>

        {/* Right Arrow */}
        <button
          onClick={scrollRight}
          className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-20 p-2 md:p-3 rounded-full bg-primary/90 hover:bg-primary text-primary-foreground shadow-lg transition-all duration-300 hover:scale-110"
          aria-label="Scroll right"
        >
          <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
        </button>

        {/* Scrolling container */}
        <div
          ref={scrollerRef}
          className="flex w-max gap-6 md:gap-8 overflow-x-auto scrollbar-hide"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          style={{
            animation: `scroll 40s linear infinite`,
            animationPlayState: isPaused ? "paused" : "running",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {duplicatedCerts.map((cert, index) => (
            <div
              key={index}
              onClick={() => setSelectedCert(cert)}
              className="flex-shrink-0 cursor-pointer group"
            >
              <div className="relative bg-white rounded-xl shadow-elegant overflow-hidden transition-all duration-300 group-hover:shadow-glow group-hover:scale-[1.02]">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="h-[280px] md:h-[350px] w-auto object-contain p-2"
                />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-300" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Full-size preview modal */}
      <Dialog open={!!selectedCert} onOpenChange={() => setSelectedCert(null)}>
        <DialogContent className="max-w-[95vw] max-h-[95vh] p-2 bg-white/95 backdrop-blur-sm">
          <button
            onClick={() => setSelectedCert(null)}
            className="absolute top-4 right-4 z-10 p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
          >
            <X className="w-5 h-5 text-primary" />
          </button>
          {selectedCert && (
            <div className="w-full h-full flex items-center justify-center p-4">
              <img
                src={selectedCert.image}
                alt={selectedCert.title}
                className="max-w-full max-h-[85vh] object-contain"
              />
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* CSS for scroll animation */}
      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </>
  );
};

export default CertificateScroller;
