"use client"
import { signOut, useSession } from "@/lib/auth-client";
import Link from "next/link";
import UserProfileMenu from "./UserProfileMenu";


const AuthButton = () => {
    const {data: session,isPending} = useSession()
    
    return (
        <div>
            {
                session?.user
                ? 
                // user Profile Area
                <UserProfileMenu session={session}></UserProfileMenu>
                : 
                // Sign in and Sign Up area
                <div className="flex w-full items-center gap-2 sm:w-auto sm:gap-3">
            <Link href={"/sign-in"}>
              <button
              className="flex-1 rounded-xl px-3 py-2 text-sm font-semibold text-gray-800 transition-colors hover:text-[#008a45] sm:flex-none sm:px-4 sm:text-base"
            >
              সাইন ইন
            </button>
            </Link>

            <Link href={"/sign-up"}>
              <button
              className="flex-1 rounded-xl bg-[#008a45] px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-[#00753a] active:scale-95 sm:flex-none sm:px-6 sm:text-base"
            >
              সাইন আপ
            </button>
            </Link>
            
          </div>
            }
        </div>
    );
};

export default AuthButton;