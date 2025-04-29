
import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import FeaturedSlider from "@/components/FeaturedSlider";
import RestaurantGrid from "@/components/RestaurantGrid";
import BusinessInfo from "@/components/BusinessInfo";
import RecentActivities from "@/components/RecentActivities";
import Footer from "@/components/Footer";
import { 
  featuredRestaurants, 
  trendingRestaurants, 
  coolRestaurants, 
  recentActivities
} from "@/data/restaurantData";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-6 py-8">
        <FeaturedSlider restaurants={featuredRestaurants} />
        
        <RestaurantGrid 
          title="The latest trends" 
          restaurants={trendingRestaurants} 
        />
        
        <RestaurantGrid 
          title="Discover more cool restaurants" 
          restaurants={coolRestaurants} 
        />
      </div>
      
      <BusinessInfo />
      <RecentActivities activities={recentActivities} />
      <Footer />
    </div>
  );
};

export default Index;
