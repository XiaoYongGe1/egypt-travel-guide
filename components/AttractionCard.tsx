'use client';

import { Attraction } from '../types';
import { useState } from 'react';

interface AttractionCardProps {
  attraction: Attraction;
}

export default function AttractionCard({ attraction }: AttractionCardProps) {
  const [showHistory, setShowHistory] = useState(false);

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden egypt-border">
      <div className="bg-gradient-to-r from-egypt-gold/20 to-egypt-sand p-4">
        <h4 className="text-xl font-bold text-egypt-blue font-serif">{attraction.name}</h4>
        {attraction.time && (
          <p className="text-sm text-egypt-brown mt-1">⏰ {attraction.time}</p>
        )}
      </div>

      <div className="p-4 space-y-3">
        {attraction.duration && (
          <p className="text-sm">
            <span className="font-semibold text-egypt-gold">游览时长:</span> {attraction.duration}
          </p>
        )}

        {attraction.ticketPrice && (
          <div className="bg-egypt-light p-3 rounded border-l-4 border-egypt-gold">
            <p className="text-sm">
              <span className="font-semibold text-egypt-gold">门票价格:</span> {attraction.ticketPrice}
            </p>
            {attraction.ticketTip && (
              <p className="text-xs text-egypt-brown mt-1">💡 {attraction.ticketTip}</p>
            )}
          </div>
        )}

        {/* 历史故事折叠面板 */}
        <div>
          <button
            onClick={() => setShowHistory(!showHistory)}
            className="w-full text-left flex justify-between items-center p-3 bg-egypt-blue/10 rounded hover:bg-egypt-blue/20 transition-colors"
          >
            <span className="font-semibold text-egypt-blue">📖 历史故事</span>
            <svg
              className={`w-5 h-5 transform transition-transform ${showHistory ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          
          {showHistory && (
            <div className="mt-2 p-3 bg-egypt-light rounded text-sm leading-relaxed whitespace-pre-line">
              {attraction.history}
            </div>
          )}
        </div>

        {attraction.visitTips && attraction.visitTips.length > 0 && (
          <div className="bg-green-50 p-3 rounded border-l-4 border-green-500">
            <p className="font-semibold text-sm text-green-800 mb-2">💡 游览建议:</p>
            <ul className="list-disc list-inside space-y-1 text-sm text-green-700">
              {attraction.visitTips.map((tip, index) => (
                <li key={index}>{tip}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
