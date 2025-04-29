
const Footer = () => {
  return (
    <footer className="bg-white pt-16 pb-8 mt-16 border-t">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="font-bold mb-4">About</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-500 hover:text-gray-800">About MyFeedback</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-800">Investor Relations</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">MyFeedback</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-500 hover:text-gray-800">Careers</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-800">FAQ</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-800">Events</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-800">MyFeedback Blog</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-800">Support</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-800">Developers</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">Languages</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-500 hover:text-gray-800">English</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">Countries</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-500 hover:text-gray-800">Singapore</a></li>
            </ul>
          </div>
        </div>
        
        <div className="text-center text-sm text-gray-500 pt-8 border-t">
          Copyright © September 2023 myFeedback, designed by craft
        </div>
      </div>
    </footer>
  );
};

export default Footer;
