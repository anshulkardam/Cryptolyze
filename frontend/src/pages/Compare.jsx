import { useEffect, useState } from "react"
import { Selectcoins } from "../components/ComparePage/Selectcoins"
import { SiteHeader } from "../components/SiteHeader"
import BasicSelect from "../components/SelectComp"
import CircularWithValueLabel from "../components/Loader"

export const Compare = () => {
    const [crypto1, setCrypto1] = useState('bitcoin')
    const [crypto2, setCrypto2] = useState('ethereum')
    const [days, setDays] = useState(30)
    const [crypto1data, Setcrypto1data] = useState({})
    const [crypto2data, Setcrypto2data] = useState({})
    const [loading, setLoading] = useState(true)
    const handledayChange = (event) => {
        setDays(event.target.value)
    }
    const handlecoinChange = async (event, iscoin2) => {
        if (iscoin2){
            setCrypto2(event.target.value)
            console.log("Crypto2 id", event.target.value)
        } else{
            setCrypto1(event.target.value)
            console.log("crypto1 id", event.target.value);
        }
    }
    if (!loading) {
        return <div className="bg-black min-h-screen">
            <CircularWithValueLabel />
        </div>
    }

    return <div className="bg-black min-h-screen">
        <SiteHeader />
        <div className=" ml-[50px] mt-2 flex justify-start">
            <Selectcoins crypto1={crypto1} handlecoinChange={handlecoinChange} crypto2={crypto2} />
            <div className="mt-5">
                <BasicSelect days={days} handledayChange={handledayChange} />
            </div>
        </div>
    </div>
}