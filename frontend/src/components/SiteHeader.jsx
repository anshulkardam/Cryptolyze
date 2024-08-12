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
            <div className="flex">
                <Link to={'/compare'} >
                <div className="font-poppins mr-32 text-yellow-600 text-lg font-semibold pt-5 ">Compare</div>
                </Link>
                <div className=" pt-3 pr-12">
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