'use client';

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

// 动态导入 Leaflet 组件，避免 SSR 问题
const MapContainer = dynamic(() => import('react-leaflet').then(mod => mod.MapContainer), { ssr: false });
const TileLayer = dynamic(() => import('react-leaflet').then(mod => mod.TileLayer), { ssr: false });
const Marker = dynamic(() => import('react-leaflet').then(mod => mod.Marker), { ssr: false });
const Polyline = dynamic(() => import('react-leaflet').then(mod => mod.Polyline), { ssr: false });

import 'leaflet/dist/leaflet.css';

// Leaflet 只在客户端加载
let L: any = null;
if (typeof window !== 'undefined') {
  L = require('leaflet');
}

interface MapMarker {
  position: [number, number];
  title: string;
  days?: string;
}

interface LeafletMapProps {
  center?: [number, number];
  zoom?: number;
  markers?: MapMarker[];
  showRoute?: boolean;
}

// 埃及主要城市坐标和天数信息
const EGYPT_CITIES: Record<string, { coords: [number, number]; days: string }> = {
  '开罗': { coords: [30.0444, 31.2357], days: 'Day 1 & Day 3' },
  '马特鲁': { coords: [31.3500, 27.2333], days: 'Day 2' },
  '卢克索': { coords: [25.6872, 32.6396], days: 'Day 4-5' },
  '赫尔格达': { coords: [27.2579, 33.8116], days: 'Day 6-8' },
};

// 行程路线顺序
const ROUTE_ORDER = ['开罗', '马特鲁', '开罗', '卢克索', '赫尔格达'];

export default function LeafletMap({ 
  center = [28.5, 31.0], 
  zoom = 5,
  markers = [],
  showRoute = true
}: LeafletMapProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-full h-[400px] bg-magazine-sand rounded-lg flex items-center justify-center">
        <p className="text-magazine-secondary">地图加载中...</p>
      </div>
    );
  }

  // 构建路线坐标
  const routePositions: [number, number][] = showRoute 
    ? ROUTE_ORDER.map(city => EGYPT_CITIES[city]?.coords).filter((coords): coords is [number, number] => !!coords)
    : [];

  return (
    <div className="w-full h-[400px] rounded-lg overflow-hidden border border-magazine-border">
      <MapContainer
        center={center}
        zoom={zoom}
        scrollWheelZoom={false}
        style={{ width: '100%', height: '100%' }}
      >
        {/* 高德地图瓦片 - 使用英文标注版本避免中文乱码 */}
        <TileLayer
          attribution='&copy; <a href="https://www.amap.com">高德地图</a>'
          url="https://webrd0{s}.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x={x}&y={y}&z={z}"
          subdomains={['1', '2', '3', '4']}
        />
        
        {/* 路线 */}
        {showRoute && routePositions.length > 1 && (
          <Polyline
            positions={routePositions}
            color="#C9A962"
            weight={3}
            opacity={0.8}
            dashArray="10, 10"
          />
        )}
        
        {/* 标记点 - 使用自定义 DivIcon 显示地点名称和天数 */}
        {L && Object.entries(EGYPT_CITIES).map(([cityName, data]) => {
          const customIcon = L.divIcon({
            className: 'custom-marker',
            html: `
              <div style="
                background: #1A1A1A;
                color: white;
                padding: 6px 10px;
                border-radius: 4px;
                font-size: 12px;
                font-weight: 500;
                white-space: nowrap;
                box-shadow: 0 2px 4px rgba(0,0,0,0.2);
                text-align: center;
                line-height: 1.3;
              ">
                <div>${cityName}</div>
                <div style="font-size: 10px; color: #C9A962;">${data.days}</div>
              </div>
            `,
            iconSize: [80, 40],
            iconAnchor: [40, 20],
          });
          
          return (
            <Marker 
              key={cityName} 
              position={data.coords}
              icon={customIcon}
            />
          );
        })}
      </MapContainer>
    </div>
  );
}
