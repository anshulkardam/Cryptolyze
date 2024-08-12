import { fixDate } from "./fixDate"

export const setChartCompareData = (setChartData, pricedata1, pricedata2) => {
       setChartData({
        type: 'line',
        labels: pricedata1.map((item) => fixDate(item[0])),
        datasets: [{
            label: "Crypto 1",
            data: pricedata1.map((item) => item[1]),
            fill: false,
            borderWidth: 2,
            borderColor: '#4CAF50',
            tension: 0.25,
            pointRadius: 0,
            yAxisID: "y1"
        },
        {
            label: "Crypto 2",
            data: pricedata2.map((item) => item[1]),
            fill: false,
            borderWidth: 2,
            borderColor: '#007BFF',
            tension: 0.25,
            pointRadius: 0,
            yAxisID: "y2"
        }
        ]
    })
}

// borderColor: '#4CAF50',
// backgroundColor: 'rgba(76,175,80,0.2)',