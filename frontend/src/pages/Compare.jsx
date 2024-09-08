import { useEffect, useState } from "react"
import { Selectcoins } from "../components/ComparePage/Selectcoins"
import { SiteHeader } from "../components/SiteHeader"
import BasicSelect from "../components/SelectComp"
import CircularWithValueLabel from "../components/Loader"
import { getData } from "../functions/getData"
import { getPrices } from "../functions/getPrices"
import { CoinInfoHeader } from "../components/CoinInfoHeader"
import { CoinInfoDesc } from "../components/CoinInfoDesc"
import Chart from "../components/Charts";
import { setChartCompareData } from "../functions/setChartCompare"
import ChartToggleButton from "../components/ChartToggle"

export const Compare = () => {
    const [crypto1, setCrypto1] = useState('bitcoin')
    const [crypto2, setCrypto2] = useState('solana')
    const [days, setDays] = useState(30)
    const [crypto1data, Setcrypto1data] = useState({})
    const [crypto2data, Setcrypto2data] = useState({})
    const [loading, setLoading] = useState(true)
    const [toggle, setToggle] = useState("prices")
    const [chartData, setChartData] = useState({})


    const handledayChange = async (event) => {
        setLoading(true);
        setDays(event.target.value)
        const pricedata1 = await getPrices(crypto1, event.target.value, toggle);
        const pricedata2 = await getPrices(crypto2, event.target.value, toggle);
        setChartCompareData(setChartData, pricedata1, pricedata2);
        setLoading(false);
    }

    const handleToggleChange = async (event, newToggle) => {
        setLoading(true);
        setToggle(newToggle);
        const pricedata1 = await getPrices(crypto1, days, newToggle);
        const pricedata2 = await getPrices(crypto2, days, newToggle);
        setChartCompareData(setChartData, pricedata1, pricedata2);
        setLoading(false);
    }
    useEffect(() => {
        DataGet();
    }, [])

    async function DataGet() {
        setLoading(true);
        const coindata1 = await getData(crypto1);
        const coindata2 = await getData(crypto2);
        if (coindata1) {
            Setcrypto1data(coindata1)
        }
        if (coindata2) {
            Setcrypto2data(coindata2)
        }
        if (coindata1 && coindata2) {
            const pricedata1 = await getPrices(crypto1, days, toggle);
            const pricedata2 = await getPrices(crypto2, days, toggle);
            setChartCompareData(setChartData, pricedata1, pricedata2);
            console.log("BOTH PRICES FETCHED", pricedata1, pricedata2)
            setLoading(false)

        }
    }
    const handlecoinChange = async (event, iscoin2) => {
        setLoading(true);
        if (iscoin2) {
            setCrypto2(event.target.value)
            try {
                const coindata = await getData(event.target.value);
                Setcrypto2data(coindata)
                const pricedata1 = await getPrices(crypto1, days, toggle);
                const pricedata2 = await getPrices(crypto2, days, toggle);
                if (pricedata1.length > 0 && pricedata2.length > 0) {
                    console.log("BOTH PRICES FETCHED", pricedata1, pricedata2)
                    setLoading(false)
                }
            } catch (error) {
                console.error("Error in getCoinData:", error);
            }
        } else {
            setCrypto1(event.target.value)
            try {
                const coindata = await getData(event.target.value);
                Setcrypto1data(coindata)
                setLoading(false)
            } catch (error) {
                console.error("Error in getCoinData:", error);
            }
        }


    }
    if (loading) {
        return <div className="bg-black min-h-screen">
            <CircularWithValueLabel />
        </div>
    }

    return <div className="bg-black min-h-screen">
        <SiteHeader />
        <div className=" md:ml-[50px] mt-2 md:flex justify-start">
            <Selectcoins crypto1={crypto1} handlecoinChange={handlecoinChange} crypto2={crypto2} />
            <div className="mt-5">
                <BasicSelect days={days} handledayChange={handledayChange} />
            </div>
        </div>
        <table className="w-full">
            <CoinInfoHeader coin={crypto1data} />
        </table>
        <table className="w-full">

            <CoinInfoHeader coin={crypto2data} />
        </table>
        <div className=" pl-[40px] pr-[40px] pt-6">
            <div className="w-full h-auto bg-grid rounded-xl border-2 border-black p-4">
                <ChartToggleButton toggle={toggle} handleToggleChange={handleToggleChange} />
                <Chart chartData={chartData} toggle={toggle} multiAxis={true} />
            </div>
        </div>
        <CoinInfoDesc coin={crypto1data} />
        <CoinInfoDesc coin={crypto2data} />
    </div>
}