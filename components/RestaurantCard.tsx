import { Restaurant } from '../types';

interface RestaurantCardProps {
  restaurant: Restaurant;
}

export default function RestaurantCard({ restaurant }: RestaurantCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden egypt-border">
      <div className="bg-gradient-to-r from-orange-100 to-egypt-sand p-4">
        <div className="flex items-center space-x-2">
          <span className="text-2xl">🍽️</span>
          <div>
            <h4 className="text-lg font-bold text-egypt-blue font-serif">{restaurant.name}</h4>
            {restaurant.cuisine && (
              <p className="text-sm text-egypt-brown">{restaurant.cuisine}</p>
            )}
          </div>
        </div>
      </div>

      <div className="p-4">
        <p className="text-sm text-egypt-brown">{restaurant.description}</p>
        
        {restaurant.priceRange && (
          <p className="text-sm mt-2">
            <span className="font-semibold text-egypt-gold">人均:</span> {restaurant.priceRange}
          </p>
        )}
        
        {restaurant.recommendation && (
          <p className="text-sm mt-2 text-green-700">
            <span className="font-semibold">推荐:</span> {restaurant.recommendation}
          </p>
        )}
      </div>
    </div>
  );
}
