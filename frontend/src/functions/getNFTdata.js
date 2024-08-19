import axios from "axios"

export const getNFTdata = async () => {
    try {
   const response = await axios.get("https://api.coingecko.com/api/v3/nfts/list", {
    headers : {
        'Accept' : 'application/json', 
        'x-cg-demo-api-key': 'CG-8qqdG1Txd8KiZq9uPSpMdcgo'
    }
    })
        return response.data;
    } catch (error) {
        console.error("Error getting the data:", error);
        return []; // Return an empty array or null if needed
    }
};