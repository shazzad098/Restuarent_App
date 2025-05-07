import React from 'react';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { AlignJustify } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();
  const isRestaurantPage = location.pathname === '/restaurants';

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
              <div className="mt-4">
                {/* Add navigation links here */}
                <Button variant="ghost" className="w-full justify-start">Home</Button>
                <Button variant="ghost" className="w-full justify-start">About</Button>
                <Button variant="ghost" className="w-full justify-start">Services</Button>
                <Button variant="ghost" className="w-full justify-start">Contact</Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
        <div className="hidden md:flex items-center gap-6">
          <Button variant="ghost">
            <span>About</span>
          </Button>
          <Button variant="ghost">
            <span>Services</span>
          </Button>
          <Button variant="ghost">
            <span>Contact</span>
          </Button>
        </div>
        <div>
          {isRestaurantPage ? (
            <Button variant="default" size="sm" className="bg-black text-white hover:bg-gray-800">
              Add Restaurant
            </Button>
          ) : (
            <Button variant="default" size="sm" className="bg-black text-white hover:bg-gray-800">
              Sign up
            </Button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
