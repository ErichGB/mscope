export default function Account() {
  return (
    <div className="flex items-center space-x-1 cursor-pointer select-none max-w-[174px]">
      <div className="flex-shrink-0 w-8 h-8 bg-[#E91C11] rounded-md flex items-center justify-center">
        <span className="text-white font-medium text-sm">GR</span>
      </div>
      <div className="flex flex-col items-start leading-tight min-w-0 flex-1">
        <span className="text-sm font-medium text-[#18181B] w-full truncate">Tresmares ES</span>
        <span className="text-[11px] text-[#8F8F91] w-full truncate">gonzalo.rubio@mscope.com</span>
      </div>
      <svg width="16" height="16" fill="none" viewBox="0 0 20 20" className="text-[#8F8F91] flex-shrink-0">
        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" fill="currentColor" />
      </svg>
    </div>
  );
} 