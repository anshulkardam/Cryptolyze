import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import CircularWithValueLabel from "../components/Loader";
import axios from "axios";
import { CoinInfoHeader } from "../components/CoinInfoHeader";
import { SiteHeader } from "../components/SiteHeader";
import { CoinInfoDesc } from "../components/CoinInfoDesc";
import { getPrices } from "../functions/getPrices";
import { getData } from "../functions/getData";
import Chart from "../components/Charts";
import { fixDate } from "../functions/fixDate";
import BasicSelect from "../components/SelectComp";
import { setChartData } from "../functions/setChartData";
import ToggleButton from "../components/ChartToggle";
import ChartToggleButton from "../components/ChartToggle";
import { LandingFooter } from "../components/LandingFooter";

export const CoinInfo = () => {

    const { id } = useParams();
    const [coininfo, setCoininfo] = useState({})
    const [loading, setLoading] = useState(true)
    const [days, setDays] = useState(365)
    const [chart, setChart] = useState({})
    const [toggle, setToggle] = useState('prices');

    useEffect(() => {
        if (id) {
            getCoinData();
        }
    }, [id])

    async function getCoinData() {
        setLoading(true);
        try {
            const coindata = await getData(id);
            console.log("Fetched Coin Data:", coindata);
            if (coindata) {
                setCoininfo(coindata)
            } else {
                console.log("No data received");
            }
            const pricedata = await getPrices(id, days, toggle);
            if (pricedata.length > 0) {
                setChart({
                    type: 'line',
                    datasets: [
                        {
                            data: pricedata.map((price) => price[1]),
                            borderColor: "#224422",
                            borderWidth: 2,
                            fill: true,
                            tension: 0.25,
                            backgroundColor: "rgba(100, 220, 150, 0.1)",
                            pointRadius: 0,
                        }
                    ],
                    labels: (pricedata.map((price) => fixDate(price[0])))
                });
            }
        } catch (error) {
            console.error("Error in getCoinData:", error);
        } finally {
            setLoading(false);
        }
    }

    const handledayChange = async (event) => {
        setLoading(true);
        const newDays = event.target.value;
        setDays(newDays);
        try {
            const pricedata = await getPrices(id, newDays, toggle);
            if (pricedata.length > 0) {
                console.log("Price Data:", pricedata);

                setChartData(setChart, pricedata);
            } else {
                console.log("No price data available");
            }
        } catch (error) {
            console.error("Error fetching price data:", error);
        } finally {
            setLoading(false);
        }
    };


    const handleToggleChange = async (event, newToggle) => {
        setLoading(true);
        setToggle(newToggle);
        try {
            const pricedata = await getPrices(id, days, newToggle);
            if (pricedata.length > 0) {
                console.log("Price Data:", pricedata);

                setChartData(setChart, pricedata);
            } else {
                console.log("No price data available");
            }
        } catch (error) {
            console.error("Error fetching price data:", error);
        } finally {
            setLoading(false);
        }

    };
    if (loading) {
        return <div className="bg-black min-h-screen">
            <CircularWithValueLabel />
        </div>
    }

    // return <div>{coininfo.id}</div>
    return <div className="bg-black min-h-screen">
        <SiteHeader />
        <table className="w-full">
            <CoinInfoHeader coin={coininfo} />
        </table>
        <div>hi</div>
        <div className=" pl-[40px] pr-[40px] pt-6">
            <div className="w-full h-auto bg-grid rounded-xl border-2 border-black p-4">
                <BasicSelect days={days} handledayChange={handledayChange} />
                <ChartToggleButton toggle={toggle} handleToggleChange={handleToggleChange} />
               
                <div className="">
                    <Chart chartData={chart} toggle={toggle}/>
                </div>
            </div>
        </div>
        <CoinInfoDesc coin={coininfo} />
        <LandingFooter />
    </div>
}