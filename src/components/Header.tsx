import { BsCart } from "react-icons/bs";
import NavLinks from "./shared/NavLinks";
import Link from "next/link";
import AuthButton from "./shared/AuthButton";
import { Suspense } from "react";

const date = new Date().toLocaleDateString("bn-BD", {
  dateStyle: "full",
});

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white shadow-sm">
      <div className="container mx-auto px-3 sm:px-4 lg:px-6">
        {/* Top Bar: মোবাইলেও লোগো ও AuthButton পাশাপাশি থাকবে */}
        <div className="flex items-center justify-between gap-3 py-2.5 sm:py-4">
          {/* Logo and Title */}
          <Link href={"/"} className="min-w-0 shrink">
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Logo Icon */}
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#008a45] text-lg text-white shadow-sm sm:h-12 sm:w-12 sm:rounded-2xl sm:text-2xl">
                <BsCart />
              </div>

              {/* Title & Date */}
              <div className="min-w-0">
                <h1 className="truncate text-base font-bold leading-tight text-gray-900 sm:text-xl md:text-2xl">
                  বাজার দর
                </h1>

                <span className="block truncate text-[10px] font-normal text-gray-500 sm:text-xs md:text-sm">
                  {date}
                </span>
              </div>
            </div>
          </Link>

          {/* Auth Buttons */}
          <div className="shrink-0">
            <AuthButton />
          </div>
        </div>

        {/* Navigation Bar */}
        <div className="border-t border-gray-100 py-2 sm:py-3">
          <div className="overflow-x-auto scrollbar-none">
            <div className="flex min-w-max justify-start sm:justify-center">
              <Suspense fallback={<div className="h-10" />}>
                <NavLinks />
              </Suspense>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
