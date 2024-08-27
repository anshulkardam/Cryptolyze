import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { getTrendingData } from '../functions/getTrendingData';
import { useEffect, useState } from 'react';


export const GridView = ({ coin }) => {
    const [isInWatchlist, setIsInWatchlist] = useState(false);
    useEffect(() => {
        const currentWatchlist = JSON.parse(localStorage.getItem('watchlist')) || [];
        setIsInWatchlist(currentWatchlist.includes(coin.id));
    }, [coin.id]);

    const toggleWatchlist = () => {

        let currentWatchlist = JSON.parse(localStorage.getItem('watchlist')) || [];

        if (currentWatchlist.includes(coin.id)) {
            // Remove from watchlist
            currentWatchlist = currentWatchlist.filter(id => id !== coin.id);
            console.log(`Removed ${coin.id} from watchlist`);
        } else {
            // Add to watchlist
            currentWatchlist.push(coin.id);
            console.log(`Added ${coin.id} to watchlist`);
        }

        localStorage.setItem('watchlist', JSON.stringify(currentWatchlist));
        setIsInWatchlist(currentWatchlist.includes(coin.id)); // Update state based on the new watchlist
    };

    const handleToggleWatchlist = (event) => {
        event.stopPropagation(); // Prevents navigation to the link
        toggleWatchlist();
    };
    return <div className='cursor-pointer'>

        <div className={`text-white w-[400px] h-[300px] hover:h-[310px] hover:w-[410px] bg-grid rounded-2xl border-2 border-black ${coin.price_change_percentage_24h > 0 ? 'hover:border-green-500' : 'hover:border-red-500'}`}>
            <div className='flex justify-between'>
                <div className="flex mt-9 ml-8 ">
                    <div className="w-11 h-11 pt-1">
                        <Link to={`/coin/${coin.id}`} >
                            <img src={coin.image} />
                        </Link>
                    </div>
                    <div className="flex flex-col pl-4">
                        <Link to={`/coin/${coin.id}`} >
                            <div className="text-xl font-semibold font-montserrat">{coin.symbol.toUpperCase()}</div>
                            <div className="text-xs text-slate-300 font-poppins">{coin.name}</div>
                        </Link>
                    </div>
                    <button onClick={handleToggleWatchlist} className={`rounded-lg ml-4 p-2 font-semibold font-montserrat border-2 ${isInWatchlist ? 'bg-yellow-500' : ''}`} >
                        {isInWatchlist ? '-' : '+'}
                    </button>
                </div>
                <div>
                    <Link to={`/coin/${coin.id}`} >
                        {coin.price_change_percentage_24h > 0 ? <div className=" flex mt-10 mr-6 font-semibold ">
                            <motion.div
                                animate={{ y: [0, -10, 0] }} // Moves the icon from its original position to 10px up and back
                                transition={{ duration: 1, repeat: Infinity, repeatType: "loop" }} // Duration of 1 second and loop indefinitely
                                className='flex flex-col text-green-500 justify-center mr-1'
                            >
                                <ArrowDropUpIcon fontSize="large" />
                            </motion.div>
                            <div className='text-green-500 font-montserrat text-2xl'>
                                {coin.price_change_percentage_24h.toFixed(3)} %
                            </div>
                        </div> : <div className=" flex mt-10 mr-6 font-semibold ">
                            <motion.div
                                animate={{ y: [0, -10, 0] }} // Moves the icon from its original position to 10px up and back
                                transition={{ duration: 1, repeat: Infinity, repeatType: "loop" }} // Duration of 1 second and loop indefinitely
                                className='flex flex-col text-red-500 justify-center mr-1'
                            >
                                <ArrowDropDownIcon fontSize="large" />
                            </motion.div>
                            <div className='text-red-500 font-montserrat text-2xl'>
                                {coin.price_change_percentage_24h.toFixed(3)} %
                            </div>
                        </div>}
                    </Link>
                </div>
            </div>
            <div>
                <Link to={`/coin/${coin.id}`} >
                    <div className='ml-9 mt-12 text-2xl font-montserrat font-bold text-green-500'>
                        ${coin.current_price.toLocaleString()}
                    </div>
                    <div className=' ml-9 mt-6 text-sm font-montserrat font-semibold text-neutral-300'>
                        <div className=''>
                            Market Cap: <span className='text-white ml-1'>${coin.market_cap.toLocaleString()}</span>
                        </div>
                        <div className=' mt-2 text-sm'>
                            Market Cap in 24h :
                            {coin.market_cap_change_percentage_24h > 0 ? <span className='text-green-500 ml-1'>
                                {coin.market_cap_change_percentage_24h}
                                <ArrowDropUpIcon fontSize="small" />
                            </span> : <span className='text-red-500 ml-1'>
                                {coin.market_cap_change_percentage_24h}
                                <ArrowDropDownIcon fontSize="small" />
                            </span>}

                        </div>
                        <div className='mt-2 text-sm '>
                            Volume: <span className='text-white ml-1'>${coin.total_volume.toLocaleString()}</span>
                        </div>

                    </div>
                </Link>
            </div>
        </div>

    </div>
}