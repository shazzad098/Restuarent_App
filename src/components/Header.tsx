
import { Search, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Command, CommandInput, CommandList, CommandItem } from "@/components/ui/command";

const Header = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  
  const recentSearches = [
    { id: 1, text: "Kakune restau, paris..." },
    { id: 2, text: "Kakunexy delux, rome..." },
    { id: 3, text: "Kakune, new york..." },
    { id: 4, text: "Kikune, Dakar plateau..." }
  ];

  return (
    <header className="w-full bg-white py-4 px-6 border-b">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex items-center gap-4">
          <a href="/" className="flex items-center">
            <div className="text-primary font-bold text-xl">
              <span className="bg-primary text-white px-2 py-1 rounded-md mr-1">my</span>
              <span>feedback</span>
            </div>
          </a>
        </div>

        <div className="hidden md:flex relative w-96">
          <Input 
            type="text" 
            placeholder="Restaurant, food, service..." 
            className="w-full h-10 pr-12 border-gray-300"
            onClick={() => setIsSearchOpen(true)}
            readOnly
          />
          <div className="absolute right-0 top-0 h-full flex items-center pr-3">
            <Button size="icon" variant="ghost" className="h-8 w-8 bg-primary text-white rounded-full p-1.5">
              <Search className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Button variant="outline" size="sm" className="hidden md:block">
            <span>EN</span>
          </Button>
          <Button variant="default" size="sm" className="bg-black text-white hover:bg-gray-800">
            MyFeedback for business
          </Button>
        </div>
      </div>

      <Dialog open={isSearchOpen} onOpenChange={setIsSearchOpen}>
        <DialogContent className="sm:max-w-[700px] p-0 gap-0 border-none bg-transparent shadow-none">
          <div className="bg-white w-full rounded-md overflow-hidden shadow-lg">
            <div className="flex items-center border-b border-gray-200">
              <div className="flex-1 flex gap-4">
                <div className="flex-1">
                  <Input 
                    type="text" 
                    placeholder="Restaurant, food..." 
                    className="border-none shadow-none outline-none focus-visible:ring-0"
                    autoFocus
                  />
                </div>
                <div className="flex-1">
                  <Input 
                    type="text" 
                    placeholder="Paris" 
                    className="border-none shadow-none outline-none focus-visible:ring-0"
                  />
                </div>
              </div>
              <Button 
                onClick={() => setIsSearchOpen(false)} 
                size="icon" 
                variant="ghost" 
                className="mr-2 text-blue-500"
              >
                <X className="h-5 w-5" />
              </Button>
            </div>
            
            <div className="py-2">
              {recentSearches.map((search) => (
                <div 
                  key={search.id}
                  className="flex items-center px-4 py-3 hover:bg-gray-50 cursor-pointer"
                >
                  <div className="mr-3 text-gray-400">
                    <Search className="h-5 w-5" />
                  </div>
                  <span>{search.text}</span>
                </div>
              ))}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </header>
  );
};

export default Header;
