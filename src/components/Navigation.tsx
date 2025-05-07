
import React from 'react';
import { useNavigate, useLocation } from "react-router-dom";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { 
  AlignJustify, 
  Home, 
  Info, 
  Phone,
  BookOpen,
  Search,
  User,
  LogIn
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const Navigation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isRestaurantPage = location.pathname.includes('/restaurant');

  return (
    <nav className="w-full bg-white py-3 px-6 border-b">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="sm">
                <AlignJustify className="h-4 w-4" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-64">
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
                <SheetDescription>
                  Explore our options
                </SheetDescription>
              </SheetHeader>
              <div className="mt-4 flex flex-col gap-2">
                <Button variant="ghost" className="w-full justify-start" onClick={() => navigate('/')}>
                  <Home className="h-4 w-4 mr-2" />
                  Home
                </Button>
                <Button variant="ghost" className="w-full justify-start" onClick={() => navigate('/restaurants')}>
                  <BookOpen className="h-4 w-4 mr-2" />
                  Restaurants
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  <Info className="h-4 w-4 mr-2" />
                  About
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  <Phone className="h-4 w-4 mr-2" />
                  Contact
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  <Search className="h-4 w-4 mr-2" />
                  Search
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        <div className="hidden md:block">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink 
                  href="/" 
                  className={navigationMenuTriggerStyle()}
                >
                  <Home className="h-4 w-4 mr-2" />
                  Home
                </NavigationMenuLink>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuLink 
                  href="/restaurants" 
                  className={navigationMenuTriggerStyle()}
                >
                  <BookOpen className="h-4 w-4 mr-2" />
                  Restaurants
                </NavigationMenuLink>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuTrigger>
                  <Info className="h-4 w-4 mr-2" />
                  About
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[400px] gap-3 p-4">
                    <div className="p-2">
                      <h3 className="font-medium mb-1">Our Company</h3>
                      <p className="text-sm text-gray-600">Learn about our mission and values</p>
                    </div>
                    <div className="p-2">
                      <h3 className="font-medium mb-1">Our Team</h3>
                      <p className="text-sm text-gray-600">Meet the people behind MyFeedback</p>
                    </div>
                    <div className="p-2">
                      <h3 className="font-medium mb-1">Careers</h3>
                      <p className="text-sm text-gray-600">Join our growing team</p>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink 
                  href="#" 
                  className={navigationMenuTriggerStyle()}
                >
                  <Phone className="h-4 w-4 mr-2" />
                  Contact
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" className="hidden sm:flex">
            <Search className="h-4 w-4 mr-2" />
            Search
          </Button>
          
          {isRestaurantPage ? (
            <Button variant="default" size="sm" className="bg-black text-white hover:bg-gray-800">
              <User className="h-4 w-4 mr-2" />
              Add Review
            </Button>
          ) : (
            <Button variant="default" size="sm" className="bg-black text-white hover:bg-gray-800">
              <LogIn className="h-4 w-4 mr-2" />
              Sign up
            </Button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
