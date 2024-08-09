import { Button } from "./Button"
import AnchorTemporaryDrawer from "./LandingDrawer"

export const LandingHeader = () => {
    return <div className=" sticky z-50 top-0 bg-black cursor-pointer">
        <div className="flex justify-between pl-12">
            <div className="flex text-4xl pt-4 font-montserrat font-bold">
                <div className="text-white">
                    Crypto
                </div>
                <div className="text-yellow-500">
                    lyze
                    <span className="text-white text-x">.</span>
                </div>
            </div>
            <div className="hidden md:flex md:text-lg md:text-slate-600 md:font-poppins md:font-semibold md:pr-8 md:pt-1 ">
                <div className="hover:text-white pt-2.5 pr-5">
                    <Button text="Sign Up"/>
                </div>
                <div className="hover:text-white pt-4">
                    About Us 
                </div>
              
            </div>
            <div className="md:hidden">
            <AnchorTemporaryDrawer />
            </div>
        </div>

    </div>
}