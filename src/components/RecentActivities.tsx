
import { Star } from "lucide-react";

interface Activity {
  id: number;
  user: {
    name: string;
    date: string;
  };
  rating: number;
  comment: string;
  images: string[];
}

interface RecentActivitiesProps {
  activities: Activity[];
}

const RecentActivities = ({ activities }: RecentActivitiesProps) => {
  return (
    <div className="max-w-7xl mx-auto px-6 mt-16">
      <h2 className="text-2xl font-bold mb-8">Recent activities</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {activities.map((activity) => (
          <div key={activity.id} className="border rounded-lg p-6">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center mr-3">
                <span className="text-gray-600">
                  {activity.user.name.charAt(0)}
                </span>
              </div>
              <div>
                <p className="font-medium">{activity.user.name}</p>
                <p className="text-sm text-gray-500">{activity.user.date}</p>
              </div>
            </div>
            
            <div className="flex mb-3">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className={`h-4 w-4 ${
                    star <= activity.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
            
            <p className="text-gray-600 text-sm mb-4">{activity.comment}</p>
            
            <div className="flex gap-2">
              {activity.images.map((image, index) => (
                <div key={index} className="w-20 h-20 overflow-hidden rounded">
                  <img src={image} alt="Review" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
            
            <button className="text-primary text-sm mt-4">Discover</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentActivities;
