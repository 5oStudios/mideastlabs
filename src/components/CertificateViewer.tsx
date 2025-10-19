import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, ZoomIn, ZoomOut } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

interface CertificatePage {
  image: string;
  title: string;
}

interface CertificateViewerProps {
  pages: CertificatePage[];
  title: string;
}

const CertificateViewer = ({ pages, title }: CertificateViewerProps) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);

  const nextPage = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <>
      <Card className="overflow-hidden shadow-elegant">
        <div className="bg-gradient-to-r from-primary to-primary-glow p-4 text-white">
          <h3 className="font-semibold text-lg">{title}</h3>
          <p className="text-sm text-white/80">
            Page {currentPage + 1} of {pages.length}
          </p>
        </div>
        
        <div className="relative bg-secondary/20">
          <div className="aspect-[8.5/11] flex items-center justify-center p-4">
            <img
              src={pages[currentPage].image}
              alt={`${pages[currentPage].title} - Page ${currentPage + 1}`}
              className="max-w-full max-h-full object-contain shadow-lg cursor-pointer transition-transform hover:scale-[1.02]"
              onClick={() => setIsZoomed(true)}
            />
          </div>
          
          <Button
            variant="outline"
            size="icon"
            className="absolute top-4 right-4 bg-white/90 hover:bg-white"
            onClick={() => setIsZoomed(true)}
          >
            <ZoomIn className="w-4 h-4" />
          </Button>
        </div>

        <div className="flex items-center justify-between p-4 border-t">
          <Button
            variant="outline"
            onClick={prevPage}
            disabled={currentPage === 0}
            className="gap-2"
          >
            <ChevronLeft className="w-4 h-4" />
            Previous
          </Button>

          <div className="flex gap-2">
            {pages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  currentPage === index
                    ? "bg-primary w-8"
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
                aria-label={`Go to page ${index + 1}`}
              />
            ))}
          </div>

          <Button
            variant="outline"
            onClick={nextPage}
            disabled={currentPage === pages.length - 1}
            className="gap-2"
          >
            Next
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </Card>

      <Dialog open={isZoomed} onOpenChange={setIsZoomed}>
        <DialogContent className="max-w-[95vw] max-h-[95vh] p-2">
          <div className="relative w-full h-full flex items-center justify-center">
            <img
              src={pages[currentPage].image}
              alt={`${pages[currentPage].title} - Page ${currentPage + 1}`}
              className="max-w-full max-h-[90vh] object-contain"
            />
            <Button
              variant="outline"
              size="icon"
              className="absolute top-2 right-2"
              onClick={() => setIsZoomed(false)}
            >
              <ZoomOut className="w-4 h-4" />
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default CertificateViewer;
