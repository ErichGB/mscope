import React from 'react';
import { Link, useLocation } from 'react-router';

interface NavItemProps {
  to: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
}

export default function NavItem({ to, children, icon }: NavItemProps) {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      className={`relative flex items-center transition-colors h-[53px] font-sans text-[14px] leading-[18px] font-normal tracking-normal
        ${isActive ? 'text-[#18181B]' : 'text-[#8F8F91] hover:text-[#18181B]'}
      `}
    >
      {icon && <span className="w-5 h-5">{icon}</span>}
      <span className="relative flex items-center h-full">
        {children}
        {isActive && (
          <span className="absolute left-0 right-0 bottom-0 h-[2px] bg-[#E91C11]" />
        )}
      </span>
    </Link>
  );
} 