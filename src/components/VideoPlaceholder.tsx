import { Play } from 'lucide-react';

interface VideoPlaceholderProps {
  title?: string;
  className?: string;
}

export default function VideoPlaceholder({ title = "Video Content", className = "" }: VideoPlaceholderProps) {
  return (
    <div className={`relative w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex flex-col items-center justify-center group cursor-pointer overflow-hidden ${className}`}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#C6A13B_1px,transparent_1px)] [background-size:16px_16px]" />
      
      {/* Play Button Circle */}
      <div className="relative z-10 w-20 h-20 rounded-full border-2 border-[#C6A13B] flex items-center justify-center group-hover:scale-110 transition-transform duration-300 bg-black/30 backdrop-blur-sm">
        <Play className="w-8 h-8 text-[#C6A13B] ml-1" fill="currentColor" />
      </div>
      
      {/* Text */}
      <div className="relative z-10 mt-6 text-center px-4">
        <p className="text-[#C6A13B] font-serif font-medium tracking-wider uppercase text-sm mb-2">Client Review</p>
        <h3 className="text-white font-bold text-lg">{title}</h3>
      </div>
      
      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-[#0A1F44]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
  );
}
