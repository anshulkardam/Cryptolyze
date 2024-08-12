import axios from "axios"

export const getCoinData = async () => {
    const response = await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd", {
        headers : {
            'Accept' : 'application/json', 
            'x-cg-demo-api-key': 'CG-8qqdG1Txd8KiZq9uPSpMdcgo'
        }
        })
    return response.data
    
}