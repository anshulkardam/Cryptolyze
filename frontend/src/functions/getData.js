import axios from "axios";

export const getData = async (id) => {
    const apiKey = import.meta.env.VITE_CG_API_KEY;
   

    try {
        const response = await axios.get(`https://api.coingecko.com/api/v3/coins/${id}`, {
            headers : {
                'Accept' : 'application/json', 
                'x-cg-demo-api-key': apiKey
            }
            })
        return response.data;
    } catch (error) {
        console.error("There was an error fetching the data:", error);
    }
}