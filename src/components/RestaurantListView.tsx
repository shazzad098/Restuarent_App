
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Restaurant {
  id: number;
  name: string;
  image: string;
  description: string;
  rating: number;
  reviewCount: number;
  priceLevel?: number;
}

interface RestaurantListViewProps {
  restaurants: Restaurant[];
}

const RestaurantListView = ({ restaurants }: RestaurantListViewProps) => {
  return (
    <div className="space-y-6">
      {restaurants.map((restaurant) => (
        <div key={restaurant.id} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md">
          <div className="flex flex-col sm:flex-row">
            <div className="sm:w-1/3">
              <img 
                src={restaurant.image} 
                alt={restaurant.name} 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4 sm:w-2/3">
              <h3 className="font-bold text-lg">{restaurant.name}</h3>
              <p className="text-gray-600 text-sm mt-1 line-clamp-2">
                {restaurant.description}
              </p>
              <div className="flex items-center mt-3">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={`h-4 w-4 ${
                      star <= Math.round(restaurant.rating) 
                        ? 'text-yellow-400 fill-yellow-400' 
                        : 'text-gray-300'
                    }`}
                  />
                ))}
                <span className="ml-2 text-sm font-medium text-gray-600">
                  {restaurant.rating.toFixed(1)}
                </span>
                <span className="ml-1 text-sm text-gray-500">
                  ({restaurant.reviewCount} reviews)
                </span>
              </div>
              <div className="mt-3 flex items-center">
                <span className="text-sm text-gray-600">
                  {Array(restaurant.priceLevel || 1).fill('$').join('')}
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}
      
      {restaurants.length > 10 && (
        <div className="flex justify-center mt-8">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white">
            Show more
          </Button>
        </div>
      )}
    </div>
  );
};

export default RestaurantListView;
