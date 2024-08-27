import axios from "axios"

export const getNFTdata = async () => {
    const apiKey = import.meta.env.VITE_CG_API_KEY;
    try {
   const response = await axios.get("https://api.coingecko.com/api/v3/nfts/list", {
    headers : {
        'Accept' : 'application/json', 
        'x-cg-demo-api-key': apiKey
    }
    })
        return response.data;
    } catch (error) {
        console.error("Error getting the data:", error);
        return []; // Return an empty array or null if needed
    }
};