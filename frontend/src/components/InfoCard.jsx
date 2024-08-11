import { motion } from "framer-motion"
import { CoinScene } from "./Model"
import { Link } from "react-router-dom"
import Widget from "./Widget"
import WidgetChart from "./WidgetChart"

export const InfoCard = () => {
    return <div className="text-white flex h-screen">
        <div className=" font-montserrat  pl-12 pt-28 w-1/2">
            <div className="font-bold">
                <div className="group">
                    <div className="text-8.5xl transition-all duration-300 text-black [-webkit-text-stroke:2px_white]">
                        Track Crypto
                    </div>
                </div>
                <div className="text-8xl mt-2">
                    Analyze Market
                </div>
                <motion.h1
                    initial={{ opacity: 0, x: 80 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.9 }}
                    className="text-yellow-500 text-8xl mt-2">Real Time.</motion.h1>
            </div>
            <div className="text-zinc-500 font-poppins font-medium text-md pt-1">Measure and analyze market movements as they happen. Your compass for real-time crypto tracking.</div>
            <div className="mt-4 space-x-7 flex">
                <Link to={"/dashboard"}>
                    <button type="button" className="text-white hover:text-white border border-blue-700 hover:bg-blue-800 focus:outline-none font-semibold rounded-lg text-sm px-6 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:hover:text-white dark:hover:bg-blue-500">Dashboard</button>
                </Link>
                <button type="button" className="font-montserrat text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900  font-semibold rounded-lg text-sm px-6 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600  ">Share</button>
            </div>
            <div className="w-full">
                <Widget />
                <WidgetChart />
            </div>
        </div>
        <div className="w-1/2 flex items-center justify-center mb-36">
            <div className="w-full h-[1000px]">
                <CoinScene />
            </div>
        </div>
    </div>
}