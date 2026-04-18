import { DaySchedule } from '../types';
import AttractionCard from './AttractionCard';

interface TimelineProps {
  schedule: DaySchedule['schedule'];
}

export default function Timeline({ schedule }: TimelineProps) {
  return (
    <div className="relative">
      {/* 时间线 */}
      <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-egypt-gold"></div>

      <div className="space-y-6">
        {schedule.map((item, index) => (
          <div key={index} className="relative pl-12">
            {/* 时间点 */}
            <div className="absolute left-0 top-0 w-8 h-8 bg-egypt-gold rounded-full flex items-center justify-center text-white font-bold text-sm border-4 border-egypt-light">
              {index + 1}
            </div>

            {/* 内容 */}
            <div className="bg-white rounded-lg shadow-md p-4 egypt-border">
              <div className="flex items-start space-x-3 mb-3">
                <span className="text-egypt-gold font-bold whitespace-nowrap">{item.time}</span>
                <h4 className="font-semibold text-egypt-blue">{item.activity}</h4>
              </div>

              {item.attraction && <AttractionCard attraction={item.attraction} />}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
