import Link from 'next/link';
import { DaySchedule } from '../types';

interface DayCardProps {
  day: DaySchedule;
}

export default function DayCard({ day }: DayCardProps) {
  return (
    <Link href={`/day/${day.day}`}>
      <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden egypt-border cursor-pointer group">
        <div className="bg-gradient-to-r from-egypt-blue to-egypt-gold p-4 text-white">
          <div className="flex justify-between items-center">
            <h3 className="text-2xl font-bold font-serif">Day {day.day}</h3>
            <span className="text-sm opacity-90">{day.date}</span>
          </div>
          <p className="text-lg mt-1">{day.location}</p>
        </div>
        
        <div className="p-4">
          <div className="space-y-2">
            {day.schedule.slice(0, 3).map((item, index) => (
              <div key={index} className="flex items-start space-x-2 text-sm">
                <span className="text-egypt-gold font-semibold whitespace-nowrap">{item.time}</span>
                <span className="text-egypt-brown">{item.activity}</span>
              </div>
            ))}
            {day.schedule.length > 3 && (
              <p className="text-egypt-gold text-sm font-semibold group-hover:translate-x-2 transition-transform">
                + {day.schedule.length - 3} 更多行程 →
              </p>
            )}
          </div>

          {day.hotel && (
            <div className="mt-4 pt-4 border-t border-egypt-sand">
              <p className="text-sm text-egypt-brown">
                <span className="font-semibold">🏨 住宿:</span> {day.hotel}
              </p>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}
