
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Header = () => {
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
    </header>
  );
};

export default Header;
