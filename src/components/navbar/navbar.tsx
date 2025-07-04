import NavItem from './NavItem';

export default function Navbar() {
  return (
    <nav className="hidden md:flex items-center space-x-4 ml-[40px]">
      <NavItem to="/dashboard">Dashboard</NavItem>
      <NavItem to="/explorer">Explorer</NavItem>
      <NavItem to="/companies">Companies</NavItem>
      <NavItem to="/microsectors">Microsectors</NavItem>
      <NavItem to="/lists">Lists</NavItem>
      <div className="relative flex items-center">
        <NavItem to="/analysis">Analysis</NavItem>
        <span className="ml-1 w-[27px] h-[18px] px-[2px] bg-[#E91C11] text-white rounded flex items-center justify-center text-[10px] leading-[14px] font-bold tracking-[0.02em]" style={{fontFamily: 'Inter'}}>Beta</span>
      </div>
    </nav>
  );
}
