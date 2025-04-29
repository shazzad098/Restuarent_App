
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import RestaurantCard from "./RestaurantCard";
import { Button } from "@/components/ui/button";

interface FeaturedSliderProps {
  restaurants: Array<{
    id: number;
    name: string;
    image: string;
    description: string;
    rating: number;
    reviewCount: number;
  }>;
}

const FeaturedSlider = ({ restaurants }: FeaturedSliderProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const maxIndex = Math.max(0, restaurants.length - 4);

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  return (
    <div className="relative bg-primary py-6 px-6 rounded-lg">
      <h2 className="text-2xl font-bold text-white mb-6">Find the best restaurant ratings below</h2>
      <div className="relative">
        <div className="flex gap-4 overflow-hidden">
          {restaurants.slice(currentIndex, currentIndex + 4).map((restaurant) => (
            <div key={restaurant.id} className="flex-shrink-0 w-1/4">
              <RestaurantCard 
                name={restaurant.name}
                image={restaurant.image}
                description={restaurant.description}
                rating={restaurant.rating}
                reviewCount={restaurant.reviewCount}
                featured={true}
              />
            </div>
          ))}
        </div>
        {currentIndex > 0 && (
          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 bg-white rounded-full shadow-md z-10"
            onClick={handlePrev}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
        )}
        {currentIndex < maxIndex && (
          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 bg-white rounded-full shadow-md z-10"
            onClick={handleNext}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        )}
      </div>
      <div className="flex justify-center mt-4 gap-1">
        {Array.from({ length: Math.min(maxIndex + 1, 5) }).map((_, idx) => (
          <div
            key={idx}
            className={`h-2 w-2 rounded-full ${
              idx === Math.min(currentIndex, 4) ? "bg-white" : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default FeaturedSlider;
