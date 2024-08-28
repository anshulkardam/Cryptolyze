import { Link, useNavigate } from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import AnchorTemporaryDrawer from "./LandingDrawer"
 
export const LandingHeader = () => {
     
     function notify(){
        toast.error("clerk disabled because of issues rn")
     }
    

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
                     
                        <div onClick={notify} className="text-white hover:text-white border border-blue-700 hover:bg-blue-800 focus:outline-none font-semibold rounded-lg text-sm px-6 py-2.5 text-center me-2 dark:border-blue-500 dark:hover:text-white dark:hover:bg-blue-500">
                      Sign in
                        </div>
                   <ToastContainer/>

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