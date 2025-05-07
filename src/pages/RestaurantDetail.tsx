
import { useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { Star, MapPin, Phone, Clock, Globe, Image } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ImageGallery from '@/components/ImageGallery';
import { getAllRestaurants, Restaurant } from '@/utils/restaurantUtils';

const RestaurantDetail = () => {
  const [searchParams] = useSearchParams();
  const { id } = useParams();
  const restaurantId = id || searchParams.get('id');
  
  // In a real app, we'd fetch the restaurant by ID from an API
  const allRestaurants = getAllRestaurants();
  const restaurant = allRestaurants.find(r => r.id.toString() === restaurantId) || {
    id: 1,
    name: "Bella Italia",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
    description: "The restaurant which is attracting more than ever before! Their amazing hi-standard cuisine, excellent wines and cognacs from all over Europe. The staff is very dedicated.",
    rating: 4.5,
    reviewCount: 234,
    priceLevel: 2,
    location: { lat: 1.3521, lng: 103.8198 }
  };
  
  // Sample gallery images - in a real app, these would come from an API
  const galleryImages = [
    "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
    "https://images.unsplash.com/photo-1414235077428-338989a2e8c0",
    "https://images.unsplash.com/photo-1552566626-52f8b828add9",
    "https://images.unsplash.com/photo-1555396273-367ea4eb4db5",
    "https://images.unsplash.com/photo-1590846406792-0adc7f938f1d",
    "https://images.unsplash.com/photo-1592861956120-e524fc739696"
  ];
  
  const [galleryOpen, setGalleryOpen] = useState(false);
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex flex-wrap items-center gap-2 mb-2 text-sm text-gray-600">
          <a href="/" className="hover:text-primary">Home</a> 
          <span>/</span> 
          <a href="/restaurants" className="hover:text-primary">Restaurants</a>
          <span>/</span> 
          <span>{restaurant.name}</span>
        </div>
        
        <div className="bg-white rounded-lg overflow-hidden shadow-md">
          {/* Hero section */}
          <div className="relative h-80 bg-gray-300">
            <img 
              src={restaurant.image} 
              alt={restaurant.name} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 flex items-end">
              <div className="p-6 text-white">
                <h1 className="text-3xl font-bold mb-2">{restaurant.name}</h1>
                <div className="flex items-center gap-1 mb-2">
                  {Array(5).fill(0).map((_, i) => (
                    <Star 
                      key={i}
                      className={`h-4 w-4 ${i < Math.floor(restaurant.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                    />
                  ))}
                  <span className="ml-2 font-medium">
                    {restaurant.rating} ({restaurant.reviewCount} reviews)
                  </span>
                </div>
                <p className="text-sm text-gray-100">{restaurant.description}</p>
              </div>
            </div>
          </div>
          
          {/* Photo gallery section */}
          <div className="p-6 border-b">
            <h2 className="text-2xl font-bold mb-4">Discover our magnificent place in photos</h2>
            <p className="text-gray-600 mb-6">
              See how beautiful is everything, a perfect mix of inspiration inside mixed with the beauty of the food. A perfect place for everyone.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-4">
              {galleryImages.slice(0, 6).map((image, index) => (
                <div 
                  key={index} 
                  className={`relative cursor-pointer overflow-hidden rounded-lg ${
                    index === 0 ? 'col-span-2 row-span-2' : ''
                  }`}
                  onClick={() => setGalleryOpen(true)}
                >
                  <img 
                    src={image} 
                    alt={`Gallery ${index + 1}`} 
                    className="w-full h-full object-cover"
                    style={{ height: index === 0 ? '300px' : '150px' }}
                  />
                </div>
              ))}
            </div>
            
            <Button 
              variant="outline" 
              className="flex items-center gap-2"
              onClick={() => setGalleryOpen(true)}
            >
              <Image className="h-4 w-4" />
              View all photos
            </Button>
          </div>
          
          {/* More information section */}
          <div className="p-6">
            <h2 className="text-xl font-bold mb-4">More information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-gray-600 mt-1" />
                  <div>
                    <p className="font-medium">Address</p>
                    <p className="text-gray-600">123 Restaurant Street, Singapore</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-gray-600 mt-1" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-gray-600">+65 9123 4567</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-gray-600 mt-1" />
                  <div>
                    <p className="font-medium">Opening hours</p>
                    <p className="text-gray-600">Mon-Sun: 11:00 - 22:00</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Globe className="h-5 w-5 text-gray-600 mt-1" />
                  <div>
                    <p className="font-medium">Website</p>
                    <a href="#" className="text-blue-600 hover:underline">www.restaurant.com</a>
                  </div>
                </div>
              </div>
              
              <div>
                <div className="bg-gray-100 rounded-lg p-4 h-64">
                  {/* This would be replaced with an actual map */}
                  <div className="h-full w-full bg-gray-200 flex items-center justify-center">
                    <p className="text-gray-500">Map placeholder</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <ImageGallery 
        images={galleryImages} 
        isOpen={galleryOpen} 
        onClose={() => setGalleryOpen(false)} 
      />
      
      <Footer />
    </div>
  );
};

export default RestaurantDetail;
