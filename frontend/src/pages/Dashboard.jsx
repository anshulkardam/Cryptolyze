import { useUser } from "@clerk/clerk-react"
import LabTabs from "../components/Tabs";
import { SiteHeader } from "../components/SiteHeader";
import { useEffect, useState } from "react";
import axios from 'axios'
import { SearchBar } from "../components/SearchBar";
import PaginationComp from "../components/PaginationComp";
import CircularWithValueLabel from "../components/Loader";
export const Dashboard = () => {
    const { user } = useUser();
    const [coindata, setCoindata] = useState([])
    const [coinpagedata, setCoinpagedata] = useState([])
    const [search, setSearch] = useState("")
    const [page, setPage] = useState(1);
    const [loading,setLoading] = useState(true)

    const handlePageChange = (event, value) => {
    setPage(value);
    var Index = (value -1) * 10
    setCoinpagedata(coindata.slice(Index, Index + 12))
  };

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
            setCoinpagedata(res.data.slice(0, 12))
            setLoading(false)
         }).catch(error => {
            console.error("There was an error fetching the data:", error);
            setLoading(false); })
    },[])
    if(loading){
        return <div className="bg-black min-h-screen">
            <CircularWithValueLabel />
        </div>
    }
    return <div className="bg-black min-h-screen">
        <SiteHeader/>
        <SearchBar search={search} onSearchChange={onSearchChange}/>
        <LabTabs coindata={search? filteredCoins : coinpagedata} />
        {!search && (
        <PaginationComp page={page} handlePageChange={handlePageChange} />
        )}
        </div>
}