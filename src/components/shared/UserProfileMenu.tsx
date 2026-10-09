import { useState } from 'react';
import Link from 'next/link';
import { signOut } from '@/lib/auth-client';


type UserProfileMenuProps = {
  session: {
    user: {
      name?: string;
      email?: string;
      image?: string | null;
    };
  };
};

export default function UserProfileMenu({ session }: UserProfileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleSignOut = () =>{
    signOut()
  }

  // User-er namer prothom letter initial hisebe neowa
  const userInitial = session?.user?.name
    ? session.user.name.charAt(0).toLowerCase()
    : 'a';

  return (
    <div className="relative inline-block text-left">
      {/* Profile Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 p-1 focus:outline-none"
      >
        {/* Avatar / Initial Badge */}
        <div className="w-7 h-7 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-sm">
          {session?.user?.image ? (
            <span className="w-full h-full rounded-full object-cover">{session?.user?.image}</span>
          ) : (
            userInitial
          )}
        </div>

        {/* User Name & Dropdown Icon */}
        <span className="text-gray-700 font-medium text-sm">
          {session?.user?.name}
        </span>
        <span className="text-xs text-gray-500">▼</span>
      </button>

      {/* Dropdown Card */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-60 bg-white rounded-2xl shadow-lg border border-gray-100 p-4 z-50">
          {/* User Details */}
          <div className="mb-3">
            <h4 className="text-gray-600 font-medium text-sm">
              {session?.user?.name}
            </h4>
            <p className="text-xs text-gray-400 truncate">
              {session?.user?.email }
            </p>
          </div>

          {/* Menu Items */}
          <div className="space-y-3 pt-2 border-t border-gray-100">
            {/* Profile Link */}
            <Link
              href="/profile"
              className="flex items-center gap-2 text-sm text-gray-800 hover:text-emerald-600 transition"
              onClick={() => setIsOpen(false)}
            >
              <span className="text-purple-900 text-base">👤</span>
              <span className="font-medium">আমার প্রোফাইল</span>
            </Link>

            {/* Sign Out Button */}
            <button
              onClick={handleSignOut}
              className="flex items-center gap-2 text-sm text-red-500 hover:text-red-600 transition w-full text-left"
            >
              <span className="text-base">↵</span>
              <span className="font-medium">সাইন আউট</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}