
import RestaurantCard from "./RestaurantCard";
import { Button } from "@/components/ui/button";

interface RestaurantGridProps {
  title: string;
  restaurants: Array<{
    id: number;
    name: string;
    image: string;
    description: string;
    rating: number;
    reviewCount: number;
  }>;
}

const RestaurantGrid = ({ title, restaurants }: RestaurantGridProps) => {
  return (
    <div className="mt-12">
      <h2 className="text-2xl font-bold mb-6">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {restaurants.map((restaurant) => (
          <RestaurantCard
            key={restaurant.id}
            name={restaurant.name}
            image={restaurant.image}
            description={restaurant.description}
            rating={restaurant.rating}
            reviewCount={restaurant.reviewCount}
          />
        ))}
      </div>
      {restaurants.length > 8 && (
        <div className="flex justify-center mt-8">
          <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
            Show more
          </Button>
        </div>
      )}
    </div>
  );
};

export default RestaurantGrid;
