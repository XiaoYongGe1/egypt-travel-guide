import { itineraryData } from '@/data/itinerary';
import DayCard from '@/components/DayCard';
import TipBox from '@/components/TipBox';
import LeafletMap from '@/components/LeafletMap';
import Link from 'next/link';
import Image from 'next/image';

// 埃及主要城市坐标
const EGYPT_CITIES: Record<string, [number, number]> = {
  '开罗': [30.0444, 31.2357],
  '马特鲁': [31.3500, 27.2333],
  '卢克索': [25.6872, 32.6396],
  '赫尔格达': [27.2579, 33.8116],
};

export default function Home() {
  const totalDays = itineraryData.days.length;
  const cities: string[] = [];
  itineraryData.days.forEach(d => {
    const city = d.location.split('→')[0].trim();
    if (!cities.includes(city)) {
      cities.push(city);
    }
  });
  
  // 准备地图标记点
  const mapMarkers: Array<{position: [number, number]; title: string}> = [];
  cities.forEach(city => {
    const coords = EGYPT_CITIES[city];
    if (coords) {
      mapMarkers.push({
        position: coords,
        title: city
      });
    }
  });

  return (
    <div className="min-h-screen bg-magazine-bg">
      {/* Hero Section - 杂志封面风格 */}
      <section className="relative h-screen min-h-[600px] flex items-center">
        {/* 背景图 */}
        <div className="absolute inset-0">
          <Image
            src="/images/pyramids.jpg"
            alt="埃及金字塔"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* 内容 */}
        <div className="relative container mx-auto px-6 text-white">
          <div className="max-w-3xl">
            <p className="text-sm tracking-[0.3em] uppercase mb-4 text-white/80">
              Travel Guide 2026
            </p>
            <h1 className="text-6xl md:text-8xl font-serif font-light mb-6 leading-tight">
              埃及
              <span className="block text-4xl md:text-6xl mt-2">探索之旅</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 font-light">
              {itineraryData.subtitle}
            </p>
            
            {/* 统计信息 - 简约风格 */}
            <div className="flex gap-12 text-sm tracking-wider">
              <div>
                <span className="block text-3xl font-serif mb-1">{totalDays}</span>
                <span className="text-white/70">天行程</span>
              </div>
              <div>
                <span className="block text-3xl font-serif mb-1">{cities.length}</span>
                <span className="text-white/70">座城市</span>
              </div>
              <div>
                <span className="block text-3xl font-serif mb-1">
                  {itineraryData.days.filter(d => d.schedule.some(s => s.attraction)).length}
                </span>
                <span className="text-white/70">个景点</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* 滚动提示 */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 text-sm tracking-widest">
          <span className="block mb-2">SCROLL</span>
          <div className="w-px h-8 bg-white/40 mx-auto"></div>
        </div>
      </section>

      {/* 路线地图 - 真实地图 */}
      <section className="py-20 px-6 bg-magazine-card">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <p className="text-caption mb-3">Journey Route</p>
            <h2 className="text-4xl font-serif text-magazine-text">行程路线</h2>
          </div>
          
          <LeafletMap 
            center={[28.5, 31.0]}
            zoom={6}
            markers={mapMarkers}
            showRoute={true}
          />
          
          {/* 城市列表 - 手动定义正确的显示 */}
          <div className="flex justify-center gap-8 mt-8 flex-wrap">
            {[
              { name: '开罗', days: 'Day 1 & Day 3' },
              { name: '马特鲁', days: 'Day 2' },
              { name: '卢克索', days: 'Day 4-5' },
              { name: '赫尔格达', days: 'Day 6-8' },
            ].map((city, index) => (
              <div key={index} className="text-center">
                <span className="block text-2xl font-serif text-magazine-text">{city.name}</span>
                <span className="text-xs text-magazine-secondary tracking-wider uppercase">
                  {city.days}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 每日行程 - 杂志网格布局 */}
      <section id="overview" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <p className="text-caption mb-3">Itinerary</p>
            <h2 className="text-4xl font-serif text-magazine-text">每日行程</h2>
            <div className="section-divider max-w-xs mx-auto mt-6"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {itineraryData.days.map((day) => (
              <DayCard key={day.day} day={day} />
            ))}
          </div>
        </div>
      </section>

      {/* 历史探索 - 预览Section */}
      <section className="py-20 px-6 bg-magazine-sand">
        <div className="container mx-auto max-w-6xl">
          <div className="flex justify-between items-end mb-12">
            <div>
              <p className="text-caption mb-3">History</p>
              <h2 className="text-4xl font-serif text-magazine-text">历史探索</h2>
            </div>
            <Link 
              href="/history" 
              className="text-sm text-magazine-accent hover:underline flex items-center gap-1"
            >
              查看更多
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { 
                title: '古埃及文明起源', 
                period: '公元前3100年',
                desc: '从美尼斯统一上下埃及开始，古埃及文明延续了三千年，创造了辉煌的金字塔、神庙和文字系统。',
                icon: '🏛️'
              },
              { 
                title: '法老与神权统治', 
                period: '古王国-新王国',
                desc: '法老被视为神的化身，统治着这片神圣的土地。从胡夫到拉美西斯，伟大的法老们留下了永恒的遗产。',
                icon: '👑'
              },
              { 
                title: '托勒密王朝与终结', 
                period: '公元前305-30年',
                desc: '亚历山大大帝征服后，希腊文化与埃及传统融合。克利奥帕特拉七世是最后一位法老，标志着古埃及时代的终结。',
                icon: '📜'
              },
            ].map((item, index) => (
              <div key={index} className="magazine-card p-6 group hover:shadow-lg transition-shadow">
                <span className="text-4xl mb-4 block">{item.icon}</span>
                <p className="text-xs text-magazine-accent tracking-wider uppercase mb-2">{item.period}</p>
                <h3 className="text-xl font-serif text-magazine-text mb-3">{item.title}</h3>
                <p className="text-sm text-magazine-secondary leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 视频推荐 - 预览Section */}
      <section className="py-20 px-6 bg-magazine-card">
        <div className="container mx-auto max-w-6xl">
          <div className="flex justify-between items-end mb-12">
            <div>
              <p className="text-caption mb-3">Videos</p>
              <h2 className="text-4xl font-serif text-magazine-text">视频推荐</h2>
            </div>
            <Link 
              href="/video" 
              className="text-sm text-magazine-accent hover:underline flex items-center gap-1"
            >
              查看更多
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { 
                title: 'AAAAA大埃及博物馆全攻略', 
                category: '攻略',
                thumbnail: 'https://img.youtube.com/vi/eTlt-UmQqPQ/hqdefault.jpg',
                desc: '详细的大埃及博物馆参观攻略，包括必看展品、参观路线、门票信息等实用内容。'
              },
              { 
                title: '一口气看完古埃及历史', 
                category: '历史',
                thumbnail: 'https://img.youtube.com/vi/-wLf11wI6wk/hqdefault.jpg',
                desc: '由周侃侃plus制作的古埃及历史科普合集，系统性地讲解古埃及五千年文明史。'
              },
              { 
                title: '花儿与少年·埃及之旅', 
                category: '综艺',
                thumbnail: 'https://img.youtube.com/vi/DVStF5_FO7k/hqdefault.jpg',
                desc: '花儿与少年丝路季埃及篇，跟随明星团一起探索金字塔、尼罗河的神秘魅力。'
              },
            ].map((video, index) => (
              <Link 
                key={index} 
                href="/video"
                className="magazine-card overflow-hidden group hover:shadow-lg transition-shadow"
              >
                <div className="relative aspect-video bg-magazine-sand overflow-hidden">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition-colors">
                    <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <svg className="w-6 h-6 text-magazine-text ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                  </div>
                  {/* Category Badge */}
                  <span className={`absolute top-2 left-2 px-2 py-0.5 rounded text-xs font-medium ${
                    video.category === '攻略' ? 'bg-emerald-100 text-emerald-800' :
                    video.category === '历史' ? 'bg-amber-100 text-amber-800' :
                    'bg-purple-100 text-purple-800'
                  }`}>
                    {video.category}
                  </span>
                </div>
                <div className="p-4">
                  <h3 className="font-serif text-lg text-magazine-text mb-2 line-clamp-1 group-hover:text-magazine-accent transition-colors">
                    {video.title}
                  </h3>
                  <p className="text-sm text-magazine-secondary line-clamp-2">
                    {video.desc}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 注意事项 */}
      <section id="tips" className="py-20 px-6 bg-magazine-card">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-12">
            <p className="text-caption mb-3">Travel Tips</p>
            <h2 className="text-4xl font-serif text-magazine-text">出行须知</h2>
          </div>
          
          <div className="space-y-4">
            {itineraryData.generalTips.map((tip, index) => (
              <TipBox key={index} tip={tip} />
            ))}
          </div>
        </div>
      </section>

      {/* Footer - 简约风格 */}
      <footer className="py-12 px-6 border-t border-magazine-border">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-serif text-magazine-text">埃及探索之旅</h3>
              <p className="text-sm text-magazine-secondary mt-1">2026.04.28 - 05.05</p>
            </div>
            <div className="flex gap-6 text-sm text-magazine-secondary">
              <Link href="/" className="hover:text-magazine-text transition-colors">首页</Link>
              <Link href="/#overview" className="hover:text-magazine-text transition-colors">行程</Link>
              <Link href="/history" className="hover:text-magazine-text transition-colors">历史</Link>
              <Link href="/#tips" className="hover:text-magazine-text transition-colors">须知</Link>
            </div>
          </div>
          <div className="section-divider my-8"></div>
          <p className="text-center text-xs text-magazine-secondary">
            © 2026 Egypt Travel Guide. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
