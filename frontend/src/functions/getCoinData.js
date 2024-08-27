import axios from "axios"

export const getCoinData = async () => {
    const apiKey = import.meta.env.VITE_CG_API_KEY;
    

    const response = await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd", {
        headers : {
            'Accept' : 'application/json', 
            'x-cg-demo-api-key': apiKey
        }
        })
    return response.data
    
}