
import { BsCart } from "react-icons/bs";
import NavLinks from "./shared/NavLinks";
import Link from "next/link";
import AuthButton from "./shared/AuthButton";


const date = new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full",
  });

const Header = () => {

 
  
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white shadow-sm">
        <div className="container mx-auto px-3 sm:px-4 lg:px-6">
        {/* Top Bar */}
        <div className="flex flex-col gap-4 py-3 sm:py-4 lg:flex-row lg:items-center lg:justify-between">
          
          {/* Logo and Title */}
          <Link href={"/"}>

          <div className="flex min-w-0 items-center gap-3">
            {/* Logo */}
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#008a45] text-xl text-white shadow-sm sm:h-12 sm:w-12 sm:rounded-2xl sm:text-2xl">
              <BsCart />
            </div>

            {/* Title & Date */}
            <div className="min-w-0">
              <h1 className="text-lg font-bold leading-tight text-gray-900 sm:text-xl md:text-2xl">
                বাজার দর
              </h1>

              <span className="block truncate text-[11px] font-normal text-gray-500 sm:text-xs md:text-sm">
                {date}
              </span>
            </div>
          </div>
          </Link>


          {/* Auth Buttons */}
          <AuthButton></AuthButton>
        </div>

        {/* Navigation */}
        <div className="border-t border-gray-100 py-3">
          <div className="overflow-x-auto scrollbar-none">
            <div className="flex min-w-max justify-start sm:justify-center">
              <NavLinks />
            </div>
          </div>
        </div>
      </div>
      
    </header>
  );
};

export default Header;

