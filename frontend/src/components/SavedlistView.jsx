import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Tooltip from '@mui/material/Tooltip';
import { motion } from 'framer-motion';

export const SavedlistView = ({ coin }) => {
    return (
        <div>           
                <div className="text-white px-12 pt-10">
                    
                    <div className='flex justify-between items-center w-full'>
                     
                        <div className='flex-1'>
                            <div className="flex items-center ml-6">
                                <div className="w-[45px] h-[45px]">
                                    <img src={coin.image} alt={coin.name} />
                                </div>
                                <div className="flex flex-col pl-4">
                                    <div className="text-2xl font-semibold font-montserrat">{coin.name}</div>
                                    <div className="text-md font-medium text-slate-300 font-poppins">{coin.symbol.toUpperCase()}</div>
                                </div>
                            </div>
                        </div>
                      
                        <div className='flex-1'>
                            {coin.price_change_percentage_24h > 0 ? (
                                <div className="flex items-center font-semibold text-green-500">
                                    <motion.div
                                        animate={{ y: [0, -10, 0] }}
                                        transition={{ duration: 1, repeat: Infinity }}
                                        className='mr-1'
                                    >
                                        <ArrowDropUpIcon fontSize="large" />
                                    </motion.div>
                                    <Tooltip title="Price Change %" placement="right-start">
                                        <div className='text-2xl font-montserrat'>
                                            {coin.price_change_percentage_24h.toFixed(3)} %
                                        </div>
                                    </Tooltip>
                                </div>
                            ) : (
                                <div className="flex items-center font-semibold text-red-500">
                                    <motion.div
                                        animate={{ y: [0, -10, 0] }}
                                        transition={{ duration: 1, repeat: Infinity }}
                                        className='mr-1'
                                    >
                                        <ArrowDropDownIcon fontSize="large" />
                                    </motion.div>
                                    <Tooltip title="Price Change %" placement="right-start">
                                        <div className='text-2xl font-montserrat'>
                                            {coin.price_change_percentage_24h.toFixed(3)} %
                                        </div>
                                    </Tooltip>
                                </div>
                            )}
                        </div>
                       
                        <div   className='flex-1'>
                            <Tooltip title="Current Price" placement="left-start">
                                <div className='text-2xl font-montserrat font-bold text-green-500'>
                                    ${coin.current_price.toLocaleString()}
                                </div>
                            </Tooltip>
                        </div>
                        <div   className='flex-1'>
                            <Tooltip title="Highest 24Hrs" placement="left-start">
                                <div className='text-2xl font-montserrat font-semibold text-yellow-500'>
                                    ${coin.high_24h.toLocaleString()}
                                </div>
                            </Tooltip>
                        </div>
                        <div   className='flex-1'>
                            <Tooltip title="Lowest 24Hrs" placement="left-start">
                                <div className='text-2xl font-montserrat font-semibold text-yellow-500'>
                                    ${coin.low_24h.toLocaleString()}
                                </div>
                            </Tooltip>
                        </div>
                      
                        <div  className='flex-1' >
                            <Tooltip title="Market Cap" placement="left-start">
                                <div className='text-2xl font-montserrat font-semibold'>
                                    ${coin.market_cap.toLocaleString()}
                                </div>
                            </Tooltip>
                        </div>
                    </div>
                </div>
          
        </div>
    );
}
