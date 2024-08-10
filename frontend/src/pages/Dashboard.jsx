import { useUser } from "@clerk/clerk-react"
import LabTabs from "../components/Tabs";
import { SiteHeader } from "../components/SiteHeader";
import { useEffect, useState } from "react";
import axios from 'axios'
export const Dashboard = () => {
    const { user } = useUser();
    const [coindata, setCoindata] = useState([])
    useEffect(()=> {
        axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd")
         .then(res=> {
            setCoindata(res.data)
         })
    },[])
    
    return <div className="bg-black min-h-screen">
        <SiteHeader/>
        <LabTabs coindata={coindata} />
        
        </div>
}