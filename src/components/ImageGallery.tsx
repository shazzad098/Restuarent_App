
import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogOverlay,
  DialogClose,
} from "@/components/ui/dialog";

interface ImageGalleryProps {
  images: string[];
  isOpen: boolean;
  onClose: () => void;
}

const ImageGallery = ({ images, isOpen, onClose }: ImageGalleryProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : images.length - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex < images.length - 1 ? prevIndex + 1 : 0));
  };

  const handleThumbnailClick = (index: number) => {
    setCurrentIndex(index);
  };

  if (!isOpen) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogOverlay className="bg-black/80" />
      <DialogContent className="max-w-4xl p-0 bg-transparent border-none">
        <div className="relative flex flex-col items-center">
          <DialogClose className="absolute top-2 right-2 z-50 bg-black/50 rounded-full p-1 text-white hover:bg-black/70">
            <X className="h-6 w-6" />
          </DialogClose>
          
          {/* Main image */}
          <div className="relative w-full h-80 md:h-96 bg-black flex items-center justify-center">
            <img 
              src={images[currentIndex]} 
              alt={`Gallery image ${currentIndex + 1}`} 
              className="max-h-full max-w-full object-contain"
            />
            
            <button 
              className="absolute left-2 p-1 rounded-full bg-black/50 text-white hover:bg-black/70"
              onClick={handlePrevious}
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            
            <button 
              className="absolute right-2 p-1 rounded-full bg-black/50 text-white hover:bg-black/70"
              onClick={handleNext}
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
          
          {/* Thumbnails */}
          <div className="bg-white w-full p-2 overflow-x-auto">
            <div className="flex space-x-2">
              {images.map((image, index) => (
                <div 
                  key={index}
                  className={`cursor-pointer flex-shrink-0 w-16 h-16 ${index === currentIndex ? 'ring-2 ring-primary' : ''}`}
                  onClick={() => handleThumbnailClick(index)}
                >
                  <img 
                    src={image} 
                    alt={`Thumbnail ${index + 1}`} 
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ImageGallery;
