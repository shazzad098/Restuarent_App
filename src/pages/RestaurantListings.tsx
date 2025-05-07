
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import RestaurantListView from "@/components/RestaurantListView";
import RestaurantMap from "@/components/RestaurantMap";
import Footer from "@/components/Footer";
import { featuredRestaurants, trendingRestaurants, coolRestaurants } from "@/data/restaurantData";
import { Button } from "@/components/ui/button";
import { ArrowDownAZ, ArrowUpZA, ArrowDown, ArrowUp } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Restaurant, getAllRestaurants } from "@/utils/restaurantUtils";

// Get all restaurants using the utility function that already applies proper typing
const allRestaurants = getAllRestaurants();

const sortOptions = [
  { id: "a-z", label: "Name (A-Z)", icon: <ArrowDownAZ className="h-4 w-4 mr-2" /> },
  { id: "z-a", label: "Name (Z-A)", icon: <ArrowUpZA className="h-4 w-4 mr-2" /> },
  { id: "price-low", label: "Price (Low to High)", icon: <ArrowDown className="h-4 w-4 mr-2" /> },
  { id: "price-high", label: "Price (High to Low)", icon: <ArrowUp className="h-4 w-4 mr-2" /> },
];

const RestaurantListings = () => {
  const [searchParams] = useSearchParams();
  const location = searchParams.get("location") || "Singapore";
  const [sortBy, setSortBy] = useState<string>("a-z");
  const [sortedRestaurants, setSortedRestaurants] = useState<Restaurant[]>([...allRestaurants]);

  useEffect(() => {
    const sortRestaurants = () => {
      let sorted = [...allRestaurants];
      
      switch (sortBy) {
        case "a-z":
          sorted.sort((a, b) => a.name.localeCompare(b.name));
          break;
        case "z-a":
          sorted.sort((a, b) => b.name.localeCompare(a.name));
          break;
        case "price-low":
          sorted.sort((a, b) => (a.priceLevel || 1) - (b.priceLevel || 1));
          break;
        case "price-high":
          sorted.sort((a, b) => (b.priceLevel || 1) - (a.priceLevel || 1));
          break;
        default:
          break;
      }
      
      setSortedRestaurants(sorted);
    };

    sortRestaurants();
  }, [sortBy]);

  const handleSortChange = (sortType: string) => {
    setSortBy(sortType);
  };

  const selectedSortOption = sortOptions.find(option => option.id === sortBy);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex flex-wrap items-center gap-2 mb-2 text-sm text-gray-600">
          <a href="/" className="hover:text-primary">Home</a> 
          <span>/</span> 
          <span>All restaurants</span>
        </div>
        
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">best restaurants in {location.toLowerCase()}</h1>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="gap-2 border-gray-300">
                <span className="flex items-center gap-2">
                  {selectedSortOption?.icon}
                  Sort
                </span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              {sortOptions.map((option) => (
                <DropdownMenuItem 
                  key={option.id} 
                  className="flex items-center cursor-pointer"
                  onClick={() => handleSortChange(option.id)}
                >
                  {option.icon}
                  {option.label}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        
        <div className="grid md:grid-cols-5 gap-6">
          <div className="md:col-span-2">
            <RestaurantListView restaurants={sortedRestaurants} />
          </div>
          <div className="md:col-span-3 h-[calc(100vh-250px)] sticky top-20 hidden md:block">
            <RestaurantMap restaurants={sortedRestaurants} location={location} />
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default RestaurantListings;
