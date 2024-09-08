import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const LandingHeader = () => {
    function notify() {
        toast.error("Clerk disabled because of issues rn");
    }

    return (
        <div className="sticky z-50 top-0 bg-black cursor-pointer pb-4">
            <div className="flex justify-between items-center px-4 md:px-12">
                <div className="flex text-3xl md:text-4xl pt-4 font-montserrat font-bold">
                    <Link className="flex" to={'/'}>
                        <div className="text-white">Crypto</div>
                        <div className="text-yellow-500">
                            lyze
                            <span className="text-white">.</span>
                        </div>
                    </Link>
                </div>
                <div className="items-center pt-4 md:pt-4 md:flex md:items-center md:text-lg md:text-slate-600 md:font-poppins md:font-semibold md:pr-8  ">
                    <div
                        onClick={notify}
                        className="text-white hover:text-white border border-blue-700 hover:bg-blue-800 focus:outline-none font-semibold rounded-lg text-sm px-4 py-2 text-center me-2 dark:border-blue-500 dark:hover:text-white dark:hover:bg-blue-500"
                    >
                        Sign in
                    </div>
                    <ToastContainer />

                </div>
            </div>
        </div>
    );
};
