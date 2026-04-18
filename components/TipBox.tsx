import { Tip } from '../types';

interface TipBoxProps {
  tip: Tip;
}

export default function TipBox({ tip }: TipBoxProps) {
  return (
    <div
      className={`p-4 rounded-lg border-l-4 ${
        tip.important
          ? 'bg-red-50 border-red-500'
          : 'bg-yellow-50 border-yellow-500'
      }`}
    >
      <div className="flex items-start space-x-2">
        <span className="text-xl">{tip.important ? '⚠️' : '💡'}</span>
        <div className="flex-1">
          <h5 className="font-bold text-sm text-egypt-brown mb-1">{tip.category}</h5>
          <p className="text-sm text-egypt-brown">{tip.content}</p>
        </div>
      </div>
    </div>
  );
}
