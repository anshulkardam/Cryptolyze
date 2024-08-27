import axios from "axios"
// prices,marketcap and volume data
export const getPrices = async (id,days,types) => {
    const apiKey = import.meta.env.VITE_CG_API_KEY;
    try {
   const response = await axios.get(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${days}&interval=daily&precision=2`, {
    headers : {
        'Accept' : 'application/json', 
        'x-cg-demo-api-key': apiKey
    }
    })
        return response.data[types];
    } catch (error) {
        console.error("Error getting the data:", error);
        return []; // Return an empty array or null if needed
    }
};