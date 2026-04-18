import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';

export const metadata: Metadata = {
  title: '埃及探索之旅 - 8天7晚完整路书',
  description: '2026年4月28日-5月5日埃及旅游完整攻略,包含开罗、马特鲁、卢克索、赫尔格达详细行程',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN">
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
