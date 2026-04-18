import { itineraryData } from '@/data/itinerary';
import DayCard from '@/components/DayCard';
import TipBox from '@/components/TipBox';
import Link from 'next/link';

export default function Home() {
  const totalDays = itineraryData.days.length;
  const cities = [...new Set(itineraryData.days.map(d => d.location.split('→')[0].trim()))];

  return (
    <div className="min-h-screen bg-egypt-light">
      {/* Hero Section */}
      <section className="egypt-gradient text-white py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold font-serif mb-4">
            {itineraryData.title}
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">{itineraryData.subtitle}</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full">
              <span className="text-2xl">📅</span> {totalDays}天行程
            </div>
            <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full">
              <span className="text-2xl">🏛️</span> {cities.length}座城市
            </div>
            <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full">
              <span className="text-2xl">🎯</span> {itineraryData.days.filter(d => d.schedule.some(s => s.attraction)).length}个景点
            </div>
          </div>
        </div>
      </section>

      {/* Cities Overview */}
      <section className="py-12 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-egypt-blue font-serif mb-8">
            🗺️ 行程路线
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-4 text-lg">
            {cities.map((city, index) => (
              <div key={index} className="flex items-center">
                <div className="bg-egypt-gold text-white px-6 py-3 rounded-lg font-semibold">
                  {city}
                </div>
                {index < cities.length - 1 && (
                  <span className="text-egypt-gold text-2xl mx-2">→</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Daily Itinerary */}
      <section id="overview" className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-egypt-blue font-serif mb-4">
            📋 每日行程
          </h2>
          <p className="text-center text-egypt-brown mb-12">点击卡片查看详细信息</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {itineraryData.days.map((day) => (
              <DayCard key={day.day} day={day} />
            ))}
          </div>
        </div>
      </section>

      {/* General Tips */}
      <section id="tips" className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center text-egypt-blue font-serif mb-4">
            ⚠️ 重要注意事项
          </h2>
          <p className="text-center text-egypt-brown mb-12">出发前必读</p>
          
          <div className="grid gap-4">
            {itineraryData.generalTips.map((tip, index) => (
              <TipBox key={index} tip={tip} />
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 px-4 bg-gradient-to-r from-egypt-blue to-egypt-gold text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold font-serif mb-8">快速导航</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {itineraryData.days.map((day) => (
              <Link
                key={day.day}
                href={`/day/${day.day}`}
                className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-lg hover:bg-white/30 transition-colors"
              >
                Day {day.day} - {day.location.split('→')[0].trim()}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-egypt-brown text-egypt-sand py-8 px-4 text-center">
        <p className="font-serif">🏛️ 埃及探索之旅 2026</p>
        <p className="text-sm mt-2 opacity-75">祝旅途愉快!</p>
      </footer>
    </div>
  );
}
