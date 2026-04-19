'use client';

import { useState } from 'react';
import { HotelInfo } from '@/types';

interface HotelCardProps {
  hotel: string;
  hotelNote?: string;
  hotelInfo?: HotelInfo;
}

export default function HotelCard({ hotel, hotelNote, hotelInfo }: HotelCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="magazine-card overflow-hidden">
      <div className="bg-magazine-sand/50 p-4">
        <div className="flex items-start justify-between">
          <div className="flex items-start space-x-3">
            <span className="text-2xl flex-shrink-0">🏨</span>
            <div>
              <h3 className="text-xl font-serif text-magazine-text">{hotel}</h3>
              {hotelNote && (
                <p className="text-sm text-magazine-secondary mt-1">{hotelNote}</p>
              )}
            </div>
          </div>
          {hotelInfo && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-sm text-magazine-accent hover:underline flex items-center gap-1 ml-4 flex-shrink-0"
            >
              {isExpanded ? '收起' : '展开'}
              <svg 
                className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          )}
        </div>
      </div>
      
      {hotelInfo && (
        <div className="px-4 pb-4 space-y-3">
          {/* 默认展示：描述 */}
          {hotelInfo.description && (
            <p className="text-sm text-magazine-secondary leading-relaxed">
              {hotelInfo.description}
            </p>
          )}
          
          {/* 默认展示：设施 Tags */}
          {hotelInfo.amenities && hotelInfo.amenities.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {hotelInfo.amenities.map((amenity, index) => (
                <span 
                  key={index} 
                  className="text-xs bg-magazine-sand text-magazine-text px-3 py-1.5 rounded-full border border-magazine-border/50"
                >
                  {amenity}
                </span>
              ))}
            </div>
          )}
          
          {/* 收起内容：Tips、周边等 */}
          <div className={`space-y-3 pt-1 ${isExpanded ? '' : 'hidden'}`}>
            {hotelInfo.tips && hotelInfo.tips.length > 0 && (
              <div>
                <p className="text-sm font-medium text-magazine-text mb-2">住宿Tips:</p>
                <ul className="space-y-1">
                  {hotelInfo.tips.map((tip, index) => (
                    <li key={index} className="text-sm text-magazine-secondary flex items-start space-x-2">
                      <span className="text-magazine-accent flex-shrink-0">•</span>
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
            {hotelInfo.nearbyAttractions && hotelInfo.nearbyAttractions.length > 0 && (
              <div>
                <p className="text-sm font-medium text-magazine-text mb-2">周边景点:</p>
                <ul className="space-y-1">
                  {hotelInfo.nearbyAttractions.map((attraction, index) => (
                    <li key={index} className="text-sm text-magazine-secondary flex items-start space-x-2">
                      <span className="text-magazine-accent flex-shrink-0">📍</span>
                      <span>{attraction}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
            {hotelInfo.nearbyRestaurants && hotelInfo.nearbyRestaurants.length > 0 && (
              <div>
                <p className="text-sm font-medium text-magazine-text mb-2">周边餐厅:</p>
                <ul className="space-y-1">
                  {hotelInfo.nearbyRestaurants.map((restaurant, index) => (
                    <li key={index} className="text-sm text-magazine-secondary flex items-start space-x-2">
                      <span className="text-magazine-accent flex-shrink-0">🍽️</span>
                      <span>{restaurant}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
            {hotelInfo.bookingNote && (
              <p className="text-sm text-magazine-accent bg-magazine-sand/30 p-2 rounded">
                <span className="font-medium">预订提示:</span> {hotelInfo.bookingNote}
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
