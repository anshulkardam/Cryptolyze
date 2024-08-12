import axios from "axios";

export const getData = async (id) => {

    try {
        const response = await axios.get(`https://api.coingecko.com/api/v3/coins/${id}`, {
            headers : {
                'Accept' : 'application/json', 
                'x-cg-demo-api-key': 'CG-8qqdG1Txd8KiZq9uPSpMdcgo'
            }
            })
        return response.data;
    } catch (error) {
        console.error("There was an error fetching the data:", error);
    }
}