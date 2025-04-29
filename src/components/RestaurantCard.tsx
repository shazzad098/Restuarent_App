
import { Star } from "lucide-react";

interface RestaurantCardProps {
  name: string;
  image: string;
  description: string;
  rating: number;
  reviewCount: number;
  featured?: boolean;
}

const RestaurantCard = ({ 
  name, 
  image, 
  description, 
  rating, 
  reviewCount,
  featured = false 
}: RestaurantCardProps) => {
  return (
    <div className={`bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow ${featured ? 'w-full' : 'w-full'}`}>
      <div className="relative">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-48 object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="font-bold text-lg">{name}</h3>
        <p className="text-gray-600 text-sm mt-1 line-clamp-2">
          {description}
        </p>
        <div className="flex items-center mt-3">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star
              key={star}
              className={`h-4 w-4 ${
                star <= Math.round(rating) 
                  ? 'text-yellow-400 fill-yellow-400' 
                  : 'text-gray-300'
              }`}
            />
          ))}
          <span className="ml-2 text-sm font-medium text-gray-600">
            {rating.toFixed(1)}
          </span>
          <span className="ml-1 text-sm text-gray-500">
            ({reviewCount} reviews)
          </span>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
