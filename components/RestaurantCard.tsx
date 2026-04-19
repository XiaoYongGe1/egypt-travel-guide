import { Restaurant } from '../types';

interface RestaurantCardProps {
  restaurant: Restaurant;
}

export default function RestaurantCard({ restaurant }: RestaurantCardProps) {
  return (
    <div className="magazine-card overflow-hidden">
      <div className="bg-magazine-sand/50 p-4">
        <div className="flex items-start space-x-3">
          <span className="text-2xl flex-shrink-0">🍽️</span>
          <div className="flex-1 min-w-0">
            <h4 className="text-lg font-serif text-magazine-text">{restaurant.name}</h4>
            <div className="flex flex-wrap items-center gap-2 mt-1">
              {restaurant.cuisine && (
                <span className="text-sm text-magazine-secondary">{restaurant.cuisine}</span>
              )}
              {restaurant.priceRange && (
                <span className="text-sm text-magazine-accent font-medium">
                  · {restaurant.priceRange}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="p-4 space-y-3">
        <p className="text-sm text-magazine-secondary leading-relaxed">{restaurant.description}</p>
        
        {restaurant.signatureDishes && restaurant.signatureDishes.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {restaurant.signatureDishes.map((dish, index) => (
              <span 
                key={index} 
                className="text-xs bg-magazine-sand text-magazine-text px-3 py-1.5 rounded-full border border-magazine-border/50"
              >
                {dish}
              </span>
            ))}
          </div>
        )}
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
          {restaurant.address && (
            <div className="flex items-start space-x-1">
              <span className="text-magazine-accent flex-shrink-0">📍</span>
              <span className="text-magazine-secondary">{restaurant.address}</span>
            </div>
          )}
          {restaurant.hours && (
            <div className="flex items-start space-x-1">
              <span className="text-magazine-accent flex-shrink-0">🕐</span>
              <span className="text-magazine-secondary">{restaurant.hours}</span>
            </div>
          )}
        </div>
        
        {restaurant.recommendation && (
          <p className="text-sm text-magazine-text bg-magazine-sand/30 p-2 rounded">
            <span className="font-medium">💡 推荐:</span> {restaurant.recommendation}
          </p>
        )}
        
        {restaurant.tips && (
          <p className="text-sm text-magazine-secondary">
            <span className="font-medium text-magazine-accent">Tips:</span> {restaurant.tips}
          </p>
        )}
        
        {restaurant.reservation && (
          <p className="text-sm text-magazine-secondary">
            <span className="font-medium text-magazine-accent">预订:</span> {restaurant.reservation}
          </p>
        )}
      </div>
    </div>
  );
}
