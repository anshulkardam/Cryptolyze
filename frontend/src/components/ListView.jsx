import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Tooltip from '@mui/material/Tooltip';
export const ListView = ({ coin }) => {
    return <tbody>
        <tr className='w-full'>
            <td className="text-white px-12 pt-10" >
                <td className='flex justify-between'>
                    <div className="flex flex-1 ml-12 ">
                        <div className="w-11 h-11 pt-1">
                            <img src={coin.image} />
                        </div>
                        <div className="flex flex-col pl-4">
                            <div className="text-xl font-semibold font-montserrat">{coin.symbol.toUpperCase()}</div>
                            <div className="text-xs text-slate-300 font-poppins">{coin.name}</div>
                        </div>
                    </div>
                    <div className='flex-1'>
                        {coin.price_change_percentage_24h > 0 ?
                            <div className=" flex font-semibold ">
                                <div className='flex flex-col text-green-500 justify-center'>
                                    <ArrowDropUpIcon fontSize="large" />
                                </div>
                                <Tooltip title="Price Change %" placement="right-start">
                                <div className='text-green-500 font-montserrat text-xl mt-1'>
                                    {coin.price_change_percentage_24h.toFixed(3)} %
                                </div>
                                </Tooltip>
                            </div> : <div className=" flex  font-semibold ">
                                <div className='flex flex-col text-red-500 justify-center '>
                                    <ArrowDropDownIcon fontSize="large" />
                                </div>
                                <Tooltip title="Price Change %" placement="right-start">
                                <div className='text-red-500 font-montserrat text-xl mt-1'>
                                    {coin.price_change_percentage_24h.toFixed(3)} %
                                </div>
                                </Tooltip>
                            </div>}
                    </div>
                    <div className='flex-1'>
                    <Tooltip title="Current Price" placement="left-start">
                        <div className=' text-xl font-montserrat font-bold text-green-500'>
                            ${coin.current_price.toLocaleString()}
                        </div>
                        </Tooltip>
                    </div>
                    <Tooltip title="Market Cap" placement="left-start">
                        <div className=' flex-1 text-xl font-montserrat font-semibold '>

                            ${coin.market_cap.toLocaleString()}

                        </div>
                    </Tooltip>
                    <Tooltip title="Volume" placement="left-start">
                    <div className='flex-1 font-montserrat font-semibold  text-xl'>
                        ${coin.total_volume.toLocaleString()}
                    </div>
                    </Tooltip>
                </td>
            </td>
        </tr>
    </tbody>
}