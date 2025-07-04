import React from 'react';
import { Search } from 'lucide-react';

export default function SearchBar() {
  return (
    <div className="hidden md:flex items-center bg-[#FCFCFD] border border-[#E6E6E6] rounded w-[300px] h-[34px] px-2 gap-2">
      <Search className="w-4 h-4 text-[#8F8F91]" />
      <input
        type="text"
        placeholder="Search"
        className="bg-transparent border-none outline-none text-[#18181B] placeholder-[#8F8F91] flex-1 h-full font-normal text-sm"
      />
    </div>
  );
} 