import { motion } from "framer-motion"
import { CoinScene } from "./Model"

export const InfoCard = () => {
    return <div className="text-white flex h-screen">
        <div className=" font-montserrat  pl-12 pt-28 w-1/2">
            <div className="text-8xl font-bold">
                <div>
                    <motion.h1 
                        className="text-white transition-all duration-300 group-hover:text-black group-hover:[-webkit-text-stroke:2px_white]"
                        initial={{ opacity:0, x:50}}
                        animate={{ opacity:1, x:0}}
                        transition={{duration: 0.2}}
                    > Track Crypto</motion.h1>
                    
                </div>
                <div className="text-blue-400">Real Time.</div>
            </div>
            <div className="text-zinc-500 font-poppins font-medium text-md pt-1">Measure and analyze market movements as they happen. Your compass for real-time crypto tracking.</div>
            <div className="mt-4 space-x-7 flex">
            <button type="button" className="text-white hover:text-white border border-blue-700 hover:bg-blue-800 focus:outline-none font-semibold rounded-lg text-sm px-6 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:hover:text-white dark:hover:bg-blue-500">Dashboard</button>
            <button type="button" className="font-montserrat text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900  font-semibold rounded-lg text-sm px-6 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600  ">Share</button>
            </div>
        </div>
        <div className="w-1/2 flex items-center justify-center mb-36">
                <div className="w-full h-[1000px]"> 
                    <CoinScene />
                </div>
            </div>
    </div>
}