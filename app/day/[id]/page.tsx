import { itineraryData } from '@/data/itinerary';
import Timeline from '@/components/Timeline';
import RestaurantCard from '@/components/RestaurantCard';
import TipBox from '@/components/TipBox';
import Link from 'next/link';
import { notFound } from 'next/navigation';

interface DayDetailProps {
  params: {
    id: string;
  };
}

export function generateStaticParams() {
  return itineraryData.days.map((day) => ({
    id: day.day.toString(),
  }));
}

export default function DayDetail({ params }: DayDetailProps) {
  const dayNumber = parseInt(params.id);
  const dayData = itineraryData.days.find(d => d.day === dayNumber);

  if (!dayData) {
    notFound();
  }

  // 导航
  const prevDay = itineraryData.days.find(d => d.day === dayNumber - 1);
  const nextDay = itineraryData.days.find(d => d.day === dayNumber + 1);

  return (
    <div className="min-h-screen bg-magazine-bg">
      {/* Header */}
      <section className="bg-magazine-text text-white py-12 px-6">
        <div className="container mx-auto max-w-6xl">
          <Link href="/" className="inline-block mb-4 text-magazine-accent hover:underline">
            ← 返回首页
          </Link>
          <h1 className="text-4xl md:text-5xl font-serif mb-2">
            Day {dayData.day} - {dayData.date}
          </h1>
          <p className="text-xl opacity-90">{dayData.location}</p>
        </div>
      </section>

      <div className="container mx-auto px-6 py-12 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Hotel Info */}
            {dayData.hotel && (
              <div className="magazine-card overflow-hidden">
                <div className="bg-magazine-sand/50 p-4">
                  <div className="flex items-start space-x-3">
                    <span className="text-2xl flex-shrink-0">🏨</span>
                    <div>
                      <h3 className="text-xl font-serif text-magazine-text">{dayData.hotel}</h3>
                      {dayData.hotelNote && (
                        <p className="text-sm text-magazine-secondary mt-1">{dayData.hotelNote}</p>
                      )}
                    </div>
                  </div>
                </div>
                
                {dayData.hotelInfo && (
                  <div className="p-4 space-y-4">
                    {dayData.hotelInfo.description && (
                      <p className="text-sm text-magazine-secondary leading-relaxed">
                        {dayData.hotelInfo.description}
                      </p>
                    )}
                    
                    {dayData.hotelInfo.amenities && dayData.hotelInfo.amenities.length > 0 && (
                      <div>
                        <p className="text-sm font-medium text-magazine-text mb-2">设施服务:</p>
                        <div className="flex flex-wrap gap-1">
                          {dayData.hotelInfo.amenities.map((amenity, index) => (
                            <span 
                              key={index} 
                              className="text-xs bg-magazine-sand/70 text-magazine-text px-2 py-1 rounded"
                            >
                              {amenity}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    {dayData.hotelInfo.tips && dayData.hotelInfo.tips.length > 0 && (
                      <div>
                        <p className="text-sm font-medium text-magazine-text mb-2">住宿Tips:</p>
                        <ul className="space-y-1">
                          {dayData.hotelInfo.tips.map((tip, index) => (
                            <li key={index} className="text-sm text-magazine-secondary flex items-start space-x-2">
                              <span className="text-magazine-accent flex-shrink-0">•</span>
                              <span>{tip}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    {dayData.hotelInfo.nearbyAttractions && dayData.hotelInfo.nearbyAttractions.length > 0 && (
                      <div>
                        <p className="text-sm font-medium text-magazine-text mb-2">周边景点:</p>
                        <ul className="space-y-1">
                          {dayData.hotelInfo.nearbyAttractions.map((attraction, index) => (
                            <li key={index} className="text-sm text-magazine-secondary flex items-start space-x-2">
                              <span className="text-magazine-accent flex-shrink-0">📍</span>
                              <span>{attraction}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    {dayData.hotelInfo.nearbyRestaurants && dayData.hotelInfo.nearbyRestaurants.length > 0 && (
                      <div>
                        <p className="text-sm font-medium text-magazine-text mb-2">周边餐厅:</p>
                        <ul className="space-y-1">
                          {dayData.hotelInfo.nearbyRestaurants.map((restaurant, index) => (
                            <li key={index} className="text-sm text-magazine-secondary flex items-start space-x-2">
                              <span className="text-magazine-accent flex-shrink-0">🍽️</span>
                              <span>{restaurant}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    {dayData.hotelInfo.bookingNote && (
                      <p className="text-sm text-magazine-accent bg-magazine-sand/30 p-2 rounded">
                        <span className="font-medium">预订提示:</span> {dayData.hotelInfo.bookingNote}
                      </p>
                    )}
                  </div>
                )}
              </div>
            )}

            {/* Timeline */}
            <div>
              <h3 className="text-2xl font-serif text-magazine-text mb-6">行程安排</h3>
              <Timeline schedule={dayData.schedule} />
            </div>

            {/* Restaurants */}
            {dayData.restaurants.length > 0 && (
              <div>
                <h3 className="text-2xl font-serif text-magazine-text mb-6">推荐餐厅</h3>
                <div className="grid gap-4">
                  {dayData.restaurants.map((restaurant, index) => (
                    <RestaurantCard key={index} restaurant={restaurant} />
                  ))}
                </div>
              </div>
            )}

            {/* Alternatives */}
            {dayData.alternatives.length > 0 && (
              <div>
                <h3 className="text-2xl font-serif text-magazine-text mb-6">备选方案</h3>
                <div className="space-y-4">
                  {dayData.alternatives.map((alt, index) => (
                    <div key={index} className="bg-magazine-sand/50 rounded-lg p-4 border-l-4 border-magazine-accent">
                      <h4 className="font-bold text-magazine-text mb-2">{alt.title}</h4>
                      <p className="text-sm text-magazine-secondary mb-2">{alt.description}</p>
                      {alt.condition && (
                        <p className="text-xs text-magazine-accent font-medium">适用条件: {alt.condition}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Tips */}
            <div>
              <h3 className="text-xl font-serif text-magazine-text mb-4">注意事项</h3>
              <div className="space-y-3">
                {dayData.tips.map((tip, index) => (
                  <TipBox key={index} tip={tip} />
                ))}
              </div>
            </div>

            {/* Expenses */}
            <div className="magazine-card p-6">
              <h3 className="text-xl font-serif text-magazine-text mb-4">费用明细</h3>
              <div className="space-y-2">
                {dayData.expenses.map((expense, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b border-magazine-border last:border-b-0">
                    <div>
                      <p className="text-sm font-medium text-magazine-text">{expense.item}</p>
                      {expense.note && (
                        <p className="text-xs text-magazine-secondary">{expense.note}</p>
                      )}
                    </div>
                    <div className="text-right">
                      <p className="font-medium text-magazine-accent">
                        {expense.amount} {expense.currency}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* General Notes */}
            {dayData.generalNotes && dayData.generalNotes.length > 0 && (
              <div className="bg-magazine-sand/50 rounded-lg p-4 border-l-4 border-magazine-accent">
                <h3 className="font-bold text-magazine-text mb-2">备注</h3>
                <ul className="list-disc list-inside space-y-1 text-sm text-magazine-secondary">
                  {dayData.generalNotes.map((note, index) => (
                    <li key={index}>{note}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Navigation */}
        <div className="mt-12 flex justify-between">
          {prevDay ? (
            <Link
              href={`/day/${prevDay.day}`}
              className="bg-magazine-text text-white px-6 py-3 rounded hover:bg-magazine-secondary transition-colors"
            >
              ← Day {prevDay.day}
            </Link>
          ) : (
            <div />
          )}
          {nextDay ? (
            <Link
              href={`/day/${nextDay.day}`}
              className="bg-magazine-accent text-white px-6 py-3 rounded hover:bg-magazine-accent/80 transition-colors"
            >
              Day {nextDay.day} →
            </Link>
          ) : (
            <div />
          )}
        </div>
      </div>
    </div>
  );
}
