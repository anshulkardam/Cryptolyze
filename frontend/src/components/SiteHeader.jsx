import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton, useUser } from "@clerk/clerk-react";
import { Link } from "react-router-dom";

export const SiteHeader = () => {
    const userdata = useUser();
    const name = userdata.user.username;
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
                <div className="flex">
                    <div className="flex justify-center items-center">
                        <Link to={'/compare'} >
                            <div className="font-montserrat ml-20 mt-2  text-yellow-400 text-base font-semibold  ">Trending</div>
                        </Link>
                    </div>
                    <div className="flex justify-center items-center">
                        <Link to={'/compare'} >
                            <div className="font-montserrat ml-20 mt-2  text-yellow-400 text-base font-semibold  ">Compare Coins</div>
                        </Link>
                    </div>
                    <div className="flex justify-center items-center">
                        <Link to={'/compare'} >
                            <div className="font-montserrat ml-20 mt-2  text-yellow-400 text-base font-semibold  ">NFT</div>
                        </Link>
                    </div>
                    <div className="flex justify-center items-center">
                        <Link to={'/compare'} >
                            <div className="font-montserrat ml-20 mt-2  text-yellow-400 text-base font-semibold  ">Watchlist</div>
                        </Link>
                    </div>
                </div>
            </div>
            <div className=" pt-3 pr-12 flex items-center">
                <div className="flex justify-center items-center">
                    <div className="font-montserrat mt-2  text-yellow-400 text-base font-semibold mr-6 ">{name}</div>
                </div>
                <SignedIn>
                    <div className="pt-2 ">
                        <UserButton />
                    </div>
                </SignedIn>
            </div>
        </div>

    </div>
}