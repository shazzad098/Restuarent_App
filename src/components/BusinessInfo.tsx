
const BusinessInfo = () => {
  return (
    <div className="bg-primary py-12 mt-16 text-white">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row gap-8">
        <div className="flex-1">
          <h2 className="text-xl font-bold mb-2">MyFeedback for Business has resources to help you plan, start, grow, and advertise your small business</h2>
          <p className="text-gray-100 mb-4">The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.</p>
          <button className="bg-black text-white px-4 py-2 rounded-md font-medium">
            Explore MyFeedback business
          </button>
        </div>
        <div className="flex-1">
          <img 
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
            alt="Business" 
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default BusinessInfo;
