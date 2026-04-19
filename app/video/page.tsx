'use client';

import Link from 'next/link';
import { useState } from 'react';

interface Video {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  duration?: string;
  category: '攻略' | '纪录片' | '综艺' | '历史';
  youtubeId: string;
}

const videos: Video[] = [
  {
    id: '1',
    title: 'AAAAA大埃及博物馆全攻略',
    description: '详细的大埃及博物馆参观攻略，包括必看展品、参观路线、门票信息等实用内容，是前往埃及旅行前必看的攻略视频。',
    thumbnail: 'https://img.youtube.com/vi/eTlt-UmQqPQ/hqdefault.jpg',
    category: '攻略',
    youtubeId: 'eTlt-UmQqPQ'
  },
  {
    id: '2',
    title: '【合集】一口气看完古埃及历史',
    description: '由周侃侃plus制作的古埃及历史科普合集，从史前时期到托勒密王朝，系统性地讲解古埃及五千年文明史。',
    thumbnail: 'https://img.youtube.com/vi/-wLf11wI6wk/hqdefault.jpg',
    category: '历史',
    youtubeId: '-wLf11wI6wk'
  },
  {
    id: '3',
    title: '【花儿与少年】EP5: 出发埃及：冒险开始',
    description: '花儿与少年丝路季第五集，明星团抵达埃及开启冒险之旅。金字塔、尼罗河、埃及美食，跟随镜头一起感受埃及的魅力。',
    thumbnail: 'https://img.youtube.com/vi/DVStF5_FO7k/hqdefault.jpg',
    category: '综艺',
    youtubeId: 'DVStF5_FO7k'
  },
  {
    id: '4',
    title: '【花儿与少年】EP6: 帝王谷探险',
    description: '花儿与少年丝路季第六集，深入探访帝王谷，感受千年文明的神秘与震撼。导游讲解太给力了！',
    thumbnail: 'https://img.youtube.com/vi/VkowzAC0UHs/hqdefault.jpg',
    category: '综艺',
    youtubeId: 'VkowzAC0UHs'
  },
  {
    id: '5',
    title: '【花儿与少年】EP7: 金字塔的秘密',
    description: '花儿与少年丝路季第七集，花少团共赏金字塔昼辉，探索金字塔的秘密，体验埃及传统风情。',
    thumbnail: 'https://img.youtube.com/vi/wbsYJOv51OI/hqdefault.jpg',
    category: '综艺',
    youtubeId: 'wbsYJOv51OI'
  },
  {
    id: '6',
    title: '【花儿与少年】EP8: 埃及站小考',
    description: '花儿与少年丝路季第八集，陈数解锁"埃及女法老"新身份，众人默契配合应对埃及站小考。',
    thumbnail: 'https://img.youtube.com/vi/tDTgt29Dabc/hqdefault.jpg',
    category: '综艺',
    youtubeId: 'tDTgt29Dabc'
  },
  {
    id: '7',
    title: 'Immortal Egypt: The Road to the Pyramids',
    description: 'BBC纪录片《不朽的埃及》第一集，Joann Fletcher教授带领观众探索埃及文明的起源，从金字塔之路开始。',
    thumbnail: 'https://img.youtube.com/vi/gZfff3XdnVA/hqdefault.jpg',
    category: '纪录片',
    youtubeId: 'gZfff3XdnVA'
  },
  {
    id: '8',
    title: 'Ancient Egypt: Life in the Valley of the Kings',
    description: 'BBC纪录片《古埃及：帝王谷的生活》，揭示古埃及人的日常生活，探索这个伟大文明的方方面面。',
    thumbnail: 'https://img.youtube.com/vi/pSClqMN1hXM/hqdefault.jpg',
    category: '纪录片',
    youtubeId: 'pSClqMN1hXM'
  },
  {
    id: '9',
    title: '大英博物馆古埃及馆：众神与法老',
    description: '带你探索大英博物馆最具人气的古埃及展馆，了解众神与法老的故事，看懂各种古埃及神话的形象。',
    thumbnail: 'https://img.youtube.com/vi/ZKH9oONaWTc/hqdefault.jpg',
    category: '历史',
    youtubeId: 'ZKH9oONaWTc'
  },
  {
    id: '10',
    title: '卢克索终极旅行指南 (2024)',
    description: '2024年最新卢克索旅行攻略，详细介绍东西岸景点，包括卡纳克神庙、卢克索神庙、帝王谷等必去景点。',
    thumbnail: 'https://img.youtube.com/vi/mHQqJc9x4qQ/hqdefault.jpg',
    category: '攻略',
    youtubeId: 'mHQqJc9x4qQ'
  },
  {
    id: '11',
    title: '探索卢克索和开罗 (2024旅行vlog)',
    description: '2024年埃及旅行vlog，探索卢克索和开罗的精华景点，包含实用的旅行建议和真实的旅行体验分享。',
    thumbnail: 'https://img.youtube.com/vi/xsMdPjPEvKE/hqdefault.jpg',
    category: '攻略',
    youtubeId: 'xsMdPjPEvKE'
  },
  {
    id: '12',
    title: '埃及神话全解析',
    description: '揭秘埃及神话，探寻古老文明的神秘故事，了解太阳神拉、冥王奥西里斯、女神伊西斯等众神的故事。',
    thumbnail: 'https://img.youtube.com/vi/Hckkqz_QFIc/hqdefault.jpg',
    category: '历史',
    youtubeId: 'Hckkqz_QFIc'
  }
];

const categoryColors: Record<Video['category'], string> = {
  '攻略': 'bg-emerald-100 text-emerald-800',
  '纪录片': 'bg-blue-100 text-blue-800',
  '综艺': 'bg-purple-100 text-purple-800',
  '历史': 'bg-amber-100 text-amber-800'
};

type CategoryFilter = '全部' | Video['category'];

export default function VideoPage() {
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>('全部');
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);
  
  const filteredVideos = selectedCategory === '全部' 
    ? videos 
    : videos.filter(video => video.category === selectedCategory);
    
  return (
    <div className="min-h-screen bg-magazine-bg">
      {/* Header */}
      <section className="bg-magazine-text text-white py-12 px-6">
        <div className="container mx-auto max-w-6xl">
          <Link href="/" className="inline-block mb-4 text-magazine-accent hover:underline">
            ← 返回首页
          </Link>
          <h1 className="text-4xl md:text-5xl font-serif mb-4">
            📺 埃及旅行视频
          </h1>
          <p className="text-xl opacity-90 max-w-3xl">
            精选埃及相关的高质量视频内容，包括旅行攻略、历史纪录片、综艺节目等，
            让你在出发前充分了解这个神秘国度
          </p>
        </div>
      </section>

      {/* Video Grid */}
      <div className="container mx-auto px-6 py-12 max-w-6xl">
        {/* Category Filter */}
        <div className="flex flex-wrap gap-3 mb-8">
          {(['全部', '攻略', '纪录片', '综艺', '历史'] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                cat === selectedCategory
                  ? 'bg-magazine-text text-white'
                  : 'bg-magazine-sand text-magazine-text hover:bg-magazine-text hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
        
        {/* Video Count */}
        <p className="text-sm text-magazine-secondary mb-6">
          共 {filteredVideos.length} 个视频
          {selectedCategory !== '全部' && ` · ${selectedCategory}`}
        </p>

        {/* Videos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredVideos.map((video) => (
            <div
              key={video.id}
              className="magazine-card overflow-hidden group hover:shadow-lg transition-shadow"
            >
              {/* Video Player or Thumbnail */}
              <div className="relative aspect-video bg-magazine-sand overflow-hidden">
                {playingVideo === video.id ? (
                  // Embedded YouTube Player
                  <iframe
                    src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1`}
                    title={video.title}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  // Thumbnail with Play Button
                  <>
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = '/images/pyramids.jpg';
                      }}
                    />
                    {/* Play Button Overlay */}
                    <button
                      onClick={() => setPlayingVideo(video.id)}
                      className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition-colors cursor-pointer"
                    >
                      <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <svg className="w-8 h-8 text-magazine-text ml-1" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      </div>
                    </button>
                  </>
                )}
                {/* Category Badge */}
                <span className={`absolute top-3 left-3 px-2 py-1 rounded text-xs font-medium ${categoryColors[video.category]}`}>
                  {video.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="font-serif text-lg text-magazine-text mb-2 line-clamp-2 group-hover:text-magazine-accent transition-colors">
                  {video.title}
                </h3>
                <p className="text-sm text-magazine-secondary line-clamp-3">
                  {video.description}
                </p>
                <a
                  href={`https://www.youtube.com/watch?v=${video.youtubeId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 flex items-center text-xs text-magazine-accent hover:underline"
                >
                  <span>在 YouTube 观看</span>
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* More Videos Section */}
        <div className="mt-16 magazine-card p-8">
          <h2 className="text-2xl font-serif text-magazine-text mb-6">更多推荐频道</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-lg">Y</span>
              </div>
              <div>
                <h3 className="font-medium text-magazine-text">YouTube 埃及旅行频道</h3>
                <p className="text-sm text-magazine-secondary mt-1">
                  搜索关键词：Egypt Travel Guide, Cairo Vlog, Luxor Temple, Hurghada Diving
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 rounded-full bg-pink-400 flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-lg">B</span>
              </div>
              <div>
                <h3 className="font-medium text-magazine-text">Bilibili 埃及相关</h3>
                <p className="text-sm text-magazine-secondary mt-1">
                  搜索关键词：埃及旅行、金字塔纪录片、卢克索、尼罗河游轮
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Tips */}
        <div className="mt-8 bg-magazine-sand/50 rounded-lg p-6 border-l-4 border-magazine-accent">
          <h3 className="font-serif text-lg text-magazine-text mb-3">💡 观看建议</h3>
          <ul className="space-y-2 text-sm text-magazine-secondary">
            <li className="flex items-start space-x-2">
              <span className="text-magazine-accent">•</span>
              <span>出行前建议先看攻略类视频，了解景点信息和注意事项</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-magazine-accent">•</span>
              <span>历史纪录片可以帮助你更好地理解古埃及文明，参观神庙时更有感触</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-magazine-accent">•</span>
              <span>综艺节目可以了解真实的旅行体验和其他游客的感受</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-magazine-accent">•</span>
              <span>部分视频可能需要科学上网才能观看</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
