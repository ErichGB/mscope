import {Link} from "react-router";
import MscopeLogo from "@/assets/mscope.svg";
import SearchBar from "@/components/SearchBar";
import Account from "@/components/Account";
import Navbar from "@/components/navbar";

export default function Header() {
  return (
    <header className="bg-white border-b border-[#E6E6E6] sticky top-0 z-50 h-[52px] flex items-center">
      <div className="mx-auto px-4 sm:px-6 w-full">
        <div className="flex justify-between items-center h-full">
          <div className="flex items-center">

            <Link to="/" className="flex items-center">
              <img src={MscopeLogo} alt="mscope logo" />
            </Link>

            <Navbar/>
          </div>

          <div className="flex items-center space-x-6">
            <SearchBar />
            <Account />
          </div>
        </div>
      </div>
    </header>
  );
}
