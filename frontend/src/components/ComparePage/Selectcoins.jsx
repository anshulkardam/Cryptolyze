import { useEffect, useState } from "react"
import { getCoinData } from "../../functions/getCoinData"
import { MenuItem, Select } from "@mui/material"

export const Selectcoins = ({ crypto1, crypto2, handlecoinChange}) => {

    const [fetchcoins, setFetchedcoins] = useState([])
   
    useEffect(() => {
        fetchdata();
    }, [])
    async function fetchdata() {
        const mycoins = await getCoinData();
        setFetchedcoins(mycoins)
    }
   
    return <div className="flex">
        <div className="flex items-center mr-10">
            <div className="text-white font-montserrat text-lg font-semibold mr-5">Select Crypto 1 :</div>
            <Select
                labelId="demo-simple-select-label"
                value={crypto1}
                onChange={(e) => handlecoinChange(e, false)}
                sx={{
                    height: "2.5rem",
                    color: "white",
                    "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: "white",
                    },
                    "& .MuiSvgIcon-root": {
                        color: "white",
                    },
                    "&:hover": {
                        "&& fieldset": {
                            borderColor: "#3a80e9",
                        },
                    },
                }}
            >
                {fetchcoins.map((items) => (
                    <MenuItem key={items.id} value={items.id}>{items.name}</MenuItem>
                ))
                }
            </Select>
        </div>
        <div className="flex items-center">
            <p className="text-white font-montserrat text-lg font-semibold mr-5">Select Crypto 2 :</p>
            <Select
                labelId="demo-simple-select-label"
                value={crypto2}
                onChange={(e) => handlecoinChange(e, true)}
                sx={{
                    height: "2.5rem",
                    color: "white",
                    "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: "white",
                    },
                    "& .MuiSvgIcon-root": {
                        color: "white",
                    },
                    "&:hover": {
                        "&& fieldset": {
                            borderColor: "#3a80e9",
                        },
                    },
                }}
            >
                {fetchcoins.map((items) => (
                    <MenuItem key={items.id} value={items.id}>{items.name}</MenuItem>
                ))
                }
            </Select>
        </div>
    </div>
}