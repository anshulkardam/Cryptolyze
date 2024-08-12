import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Tooltip from '@mui/material/Tooltip';
import { motion } from 'framer-motion';
export const CoinInfoHeader = ({ coin }) => {
   
    return <tbody className=''>
        <tr className='w-full'>
            <td className="text-white px-12 pt-10" >
                <div className='flex justify-between'>
                    <div className="flex flex-1 ml-6 ">
                        <div className="w-[75px] h-[75px]">
                            <img src={coin.image.large} />
                        </div>
                        <div className="flex flex-col pl-4 pt-1.5">
                            <div className="text-3xl font-semibold font-montserrat">{coin.name}</div>
                            <div className="text-md font-medium text-slate-300 font-poppins">{coin.symbol.toUpperCase()}</div>
                        </div>
                    </div>
                    <div className='flex-1'>
                        {coin.price_change_percentage_24h > 0 ?
                            <div className=" flex font-semibold mt-3">
                                <motion.div
                                    animate={{ y: [0, -10, 0] }} // Moves the icon from its original position to 10px up and back
                                    transition={{ duration: 1, repeat: Infinity, repeatType: "loop" }} // Duration of 1 second and loop indefinitely
                                    className='flex flex-col text-green-500 justify-center mr-1'
                                >
                                    <ArrowDropUpIcon fontSize="large" />
                                </motion.div>
                                <Tooltip title="Price Change %" placement="right-start">
                                    <div className='text-green-500 font-montserrat text-2xl mt-1'>
                                        {coin.market_data.price_change_percentage_24h.toFixed(3)} %
                                    </div>
                                </Tooltip>
                            </div> : <div className=" flex  font-semibold mt-3">
                                <motion.div
                                    animate={{ y: [0, -10, 0] }} // Moves the icon from its original position to 10px up and back
                                    transition={{ duration: 1, repeat: Infinity, repeatType: "loop" }} // Duration of 1 second and loop indefinitely
                                    className='flex flex-col text-red-500 justify-center mr-1'
                                >
                                    <ArrowDropDownIcon fontSize="large" />
                                </motion.div>
                                <Tooltip title="Price Change %" placement="right-start">
                                    <div className='text-red-500 font-montserrat text-2xl mt-1'>
                                        {coin.market_data.price_change_percentage_24h.toFixed(3)} %
                                    </div>
                                </Tooltip>
                            </div>}
                    </div>
                    <div className='flex-1 mt-4'>
                        <Tooltip title="Current Price" placement="left-start">
                            <div className=' text-2xl font-montserrat font-bold text-green-500'>
                                ${coin.market_data.current_price.usd.toLocaleString()}
                            </div>
                        </Tooltip>
                    </div>
                    <Tooltip title="Market Cap" placement="left-start">
                        <div className=' flex-1 text-2xl font-montserrat font-semibold mt-4'>

                            ${coin.market_data.market_cap.usd.toLocaleString()}

                        </div>
                    </Tooltip>
                    <Tooltip title="Volume" placement="left-start">
                        <div className='flex-1 font-montserrat font-semibold mt-4 text-2xl'>
                            ${coin.market_data.total_volume.usd.toLocaleString()}
                        </div>
                    </Tooltip>
                </div>
            </td>
        </tr>
    </tbody>
}