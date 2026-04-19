'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-egypt-blue text-white shadow-lg sticky top-0 z-50" style={{ zIndex: 10000 }}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-3xl">🏛️</span>
            <div>
              <h1 className="text-2xl font-bold font-serif">埃及探索之旅</h1>
              <p className="text-xs text-egypt-gold">8天7晚完整路书</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            <Link href="/" className="hover:text-egypt-gold transition-colors">
              首页
            </Link>
            <Link href="/history" className="hover:text-egypt-gold transition-colors">
              历史
            </Link>
            <Link href="/video" className="hover:text-egypt-gold transition-colors">
              视频
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded hover:bg-egypt-blue/50"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4 space-y-2">
            <Link
              href="/"
              className="block py-2 hover:text-egypt-gold transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              首页
            </Link>
            <Link
              href="/history"
              className="block py-2 hover:text-egypt-gold transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              历史
            </Link>
            <Link
              href="/video"
              className="block py-2 hover:text-egypt-gold transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              视频
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
