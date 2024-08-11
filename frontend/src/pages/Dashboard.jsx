import { useUser } from "@clerk/clerk-react"
import LabTabs from "../components/Tabs";
import { SiteHeader } from "../components/SiteHeader";
import { useEffect, useState } from "react";
import axios from 'axios'
import { SearchBar } from "../components/SearchBar";
export const Dashboard = () => {
    const { user } = useUser();
    const [coindata, setCoindata] = useState([])
    const [search, setSearch] = useState("")

    const onSearchChange = (e) => {
        console.log(e.target.value)
        setSearch(e.target.value)
    }
    var filteredCoins = coindata.filter((item) =>
                                         item.name.toLowerCase().includes(search.toLowerCase()) ||
                                         item.symbol.toLowerCase().includes(search.toLowerCase()));
    useEffect(()=> {
        axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd")
         .then(res=> {
            setCoindata(res.data)
         })
    },[])
    
    return <div className="bg-black min-h-screen">
        <SiteHeader/>
        <SearchBar search={search} onSearchChange={onSearchChange}/>
        <LabTabs coindata={filteredCoins} />
        
        </div>
}