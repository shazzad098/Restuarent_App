
import { featuredRestaurants, trendingRestaurants, coolRestaurants } from "@/data/restaurantData";

// Add price levels to restaurant data for sorting
export const enhanceRestaurantData = () => {
  // Generate random price levels (1-4) for each restaurant
  // In a real app, this would come from the database
  
  featuredRestaurants.forEach((restaurant, index) => {
    (restaurant as any).priceLevel = (index % 4) + 1;
  });
  
  trendingRestaurants.forEach((restaurant, index) => {
    (restaurant as any).priceLevel = ((index + 2) % 4) + 1;
  });
  
  coolRestaurants.forEach((restaurant, index) => {
    (restaurant as any).priceLevel = ((index + 1) % 4) + 1;
  });
};

// Call this function when the app initializes
enhanceRestaurantData();

export const getAllRestaurants = () => {
  return [...featuredRestaurants, ...trendingRestaurants, ...coolRestaurants];
};
