import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from "@clerk/clerk-react";
import { Link } from "react-router-dom";

export const SiteHeader = () => {
    return <div className=" sticky z-50 top-0 bg-black cursor-pointer pb-4">
        <div className="flex justify-between pl-12">
            <div className="flex text-4xl pt-4 font-montserrat font-bold">
                <Link className="flex" to={'/'}>
                <div className="text-white">
                    Crypto
                </div>
                <div className="text-yellow-500">
                    lyze
                    <span className="text-white text-x">.</span>
                </div>
                </Link>
            </div>
            <div className="hidden md:flex md:text-lg md:text-slate-600 md:font-poppins md:font-semibold md:pr-8 md:pt-1 ">
                <div className=" pt-2 pr-5">
                    <SignedIn>
                        <div className="pt-2 ">
                        <UserButton />
                        </div>
                    </SignedIn>
                </div>
                </div>
        </div>

    </div>
}