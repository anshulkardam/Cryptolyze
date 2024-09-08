import { motion } from "framer-motion";
import { CoinScene } from "./Model";
import { Link } from "react-router-dom";
import Widget from "./Widget";
import WidgetChart from "./WidgetChart";

export const InfoCard = () => {
  return (
    <div className="text-white flex flex-col md:flex-row min-h-screen bg-black">
      <div className="font-montserrat pl-6 md:pl-12 pt-12 md:pt-28 w-full md:w-1/2">
        <div className="font-bold">
          <div className="group">
            <div className="text-5xl md:text-8xl transition-all duration-300 text-black [-webkit-text-stroke:2px_white]">
              Track Crypto
            </div>
          </div>
          <div className="text-5xl md:text-8xl mt-2">Analyze Market</div>
          <motion.h1
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            className="text-yellow-500 text-4xl md:text-8xl mt-2"
          >
            Real Time.
          </motion.h1>
        </div>
        <div className="text-zinc-500 font-poppins font-medium text-sm md:text-md pt-4 md:pt-1">
          Your compass for real-time crypto tracking. Measure and analyze market movements as they happen.
        </div>
        <div className="mt-6 md:mt-4 space-x-0 md:space-x-7 flex flex-col md:flex-row items-start md:items-center">
          <Link to={"/dashboard"}>
            <button
              type="button"
              className="text-white hover:text-white border border-blue-700 hover:bg-blue-800 focus:outline-none font-semibold rounded-lg text-sm px-8 md:px-12 py-2 text-center inline-flex items-center me-0 md:me-2 mb-4 md:mb-2 dark:border-blue-500 dark:hover:text-white dark:hover:bg-blue-500"
            >
              Dashboard
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </button>
          </Link>
          <Link to={'https://www.linkedin.com/in/anshul-kardam-057841302/'}>
            <button
              type="button"
              className="font-montserrat text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 font-semibold rounded-lg text-sm px-6 py-2 text-center mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
            >
              Share
            </button>
          </Link>
        </div>
        <div className="w-full mt-6 md:mt-2">
          <Widget />
          <WidgetChart />
        </div>
      </div>
      <div className="w-full md:w-1/2 flex items-center justify-center mt-12 md:mt-0 mb-12 md:mb-36">
        <div className="w-full h-[500px] md:h-[1000px]">
          <CoinScene />
        </div>
      </div>
    </div>
  );
};
