
import { 
  Utensils, Home, Flag, Building2, Users, Map, Coffee,
  ShoppingCart, Scan, BatteryFull
} from "lucide-react";

const Navigation = () => {
  const navItems = [
    { icon: <Utensils className="h-5 w-5" />, label: "Restaurants", active: true },
    { icon: <Home className="h-5 w-5" />, label: "Hotels" },
    { icon: <Flag className="h-5 w-5" />, label: "Things to do" },
    { icon: <Building2 className="h-5 w-5" />, label: "Vacation rentals" },
    { icon: <Users className="h-5 w-5" />, label: "Shopping" },
    { icon: <Map className="h-5 w-5" />, label: "Travel & stay" },
    { icon: <Coffee className="h-5 w-5" />, label: "Cafes" },
    { icon: <ShoppingCart className="h-5 w-5" />, label: "Delivery" },
    { icon: <Scan className="h-5 w-5" />, label: "Services" },
    { icon: <BatteryFull className="h-5 w-5" />, label: "More" },
  ];

  return (
    <nav className="w-full bg-white py-2 border-b overflow-x-auto">
      <div className="flex space-x-4 px-6 max-w-7xl mx-auto">
        {navItems.map((item, index) => (
          <div 
            key={index} 
            className={`flex flex-col items-center px-2 py-1 text-sm cursor-pointer min-w-[80px] 
              ${item.active ? 'text-primary' : 'text-gray-500 hover:text-gray-800'}`}
          >
            {item.icon}
            <span className="text-xs mt-1">{item.label}</span>
            {item.active && <div className="h-0.5 w-full bg-primary mt-1.5"></div>}
          </div>
        ))}
      </div>
    </nav>
  );
};

export default Navigation;
