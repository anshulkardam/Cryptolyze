import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

export const GridView = ({ coin }) => {

    return <div>
        <div className=" w-[400px] h-[300px] bg-grid rounded-2xl">
            <div className='flex justify-between'>
                <div className="flex mt-9 ml-8 ">
                    <div className="w-11 h-11 pt-1">
                        <img src={coin.image} />
                    </div>
                    <div className="flex flex-col pl-4">
                        <div className="text-xl font-semibold font-montserrat">{coin.symbol.toUpperCase()}</div>
                        <div className="text-xs text-slate-300 font-poppins">{coin.name}</div>
                    </div>
                </div>
                <div>
                    {coin.price_change_percentage_24h>0 ? <div className=" flex mt-10 mr-6 font-semibold ">
                        <div className='flex flex-col text-green-500 justify-center mr-1'>
                            <ArrowDropUpIcon fontSize="large" />
                        </div>
                        <div className='text-green-500 font-montserrat text-2xl'>
                            {coin.price_change_percentage_24h.toFixed(3)} %
                        </div>
                    </div> : <div className=" flex mt-10 mr-6 font-semibold ">
                        <div className='flex flex-col text-red-500 justify-center mr-1'>
                            <ArrowDropDownIcon fontSize="large" />
                        </div>
                        <div className='text-red-500 font-montserrat text-2xl'>
                            {coin.price_change_percentage_24h.toFixed(3)} %
                        </div>
                    </div> }
                    
                </div>
            </div>
            <div>
                <div className='ml-9 mt-12 text-2xl font-montserrat font-bold text-green-500'>
                    ${coin.current_price}
                </div>
                <div className=' ml-9 mt-6 text-sm font-montserrat font-semibold text-neutral-300'>
                    <div className=''>
                        Market Cap: ${coin.market_cap}
                    </div>
                    <div className=' mt-2 text-sm '>
                        Market Cap in 24h :  
                        {coin.market_cap_change_percentage_24h>0? <span className='text-green-500 ml-1'>
                            {coin.market_cap_change_percentage_24h}
                            <ArrowDropUpIcon fontSize="small" />
                            </span>: <span className='text-red-500 ml-1'>
                            {coin.market_cap_change_percentage_24h}
                            <ArrowDropDownIcon fontSize="small" />
                            </span>}
                        
                    </div>
                    <div className=' mt-2 text-sm '>
                        Volume: ${coin.total_volume}
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
}