import { Link } from 'react-router';
import NavItem from './NavItem';
import SearchBar from '../SearchBar';
import Account from '../Account';
import MscopeLogo from '../../assets/mscope.svg';

export default function Navbar() {
  return (
    <nav className="bg-white border-b border-[#E6E6E6] sticky top-0 z-50 h-[52px] flex items-center">
      <div className="mx-auto px-4 sm:px-6 w-full">
        <div className="flex justify-between items-center h-full">
          <div className="flex items-center">

            <Link to="/" className="flex items-center">
              <img src={MscopeLogo} alt="mscope logo" />
            </Link>

            <div className="hidden md:flex items-center space-x-4 ml-[40px]">
              <NavItem to="/dashboard">Dashboard</NavItem>
              <NavItem to="/explorer">Explorer</NavItem>
              <NavItem to="/companies">Companies</NavItem>
              <NavItem to="/microsectors">Microsectors</NavItem>
              <NavItem to="/lists">Lists</NavItem>
              <div className="relative flex items-center">
                <NavItem to="/analysis">Analysis</NavItem>
                <span className="ml-1 w-[27px] h-[18px] px-[2px] bg-[#E91C11] text-white rounded flex items-center justify-center text-[10px] leading-[14px] font-bold tracking-[0.02em]" style={{fontFamily: 'Inter'}}>Beta</span>
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-6">
            <SearchBar />
            <Account />
          </div>
        </div>
      </div>
    </nav>
  );
}
