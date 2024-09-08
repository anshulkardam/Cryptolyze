
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AnchorTemporaryDrawer from "./LandingDrawer";
export const SiteHeader = () => {

    const notify = () => {
        toast.info('Coming Soon!');
    };
    const notifyprob = () => {
        toast.error('clerk disabled rn because of issues');
    };
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
                <div className="hidden lg:flex">
                    <div className="flex justify-center items-center">
                        <Link to={'/compare'} >
                            <div className="font-montserrat ml-20 mt-2  text-yellow-400 text-base font-semibold  ">Compare Coins</div>
                        </Link>
                    </div>
                    <div className="flex justify-center items-center">
                        <Link to={'/watchlist'} >
                            <div className="font-montserrat ml-20 mt-2  text-yellow-400 text-base font-semibold  ">Watchlist</div>
                        </Link>
                    </div>
                    <div className="flex justify-center items-center">

                        <div onClick={notify} className="font-montserrat ml-20 mt-2  text-yellow-400 text-base font-semibold  ">NFTs</div>
                        <ToastContainer />

                    </div>
                    <div className="flex justify-center items-center">

                        <div onClick={notify} className="font-montserrat ml-20 mt-2  text-yellow-400 text-base font-semibold  ">Trending</div>
                        <ToastContainer />

                    </div>



                </div>
            </div>
            <div className="pt-4 pr-2 flex items-center gap-2 lg:pr-12">
                <div onClick={notifyprob} className="hidden lg:flex lg:justify-center lg:items-center lg:font-semibold lg:text-white">
                    Welcome!
                </div>
                {/* Drawer for Smaller Screens */}
                <div className="md:hidden">
                    <AnchorTemporaryDrawer />
                </div>
            </div>

        </div>

    </div>
}