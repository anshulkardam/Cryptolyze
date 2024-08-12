import { fixDate } from "./fixDate"

export const setChartData = (setChart, pricedata) => {
    if (!Array.isArray(pricedata)) {
        console.error("Expected array but got:", pricedata);
        return;
    }

    setChart({
        type: 'line',
        datasets: [{
            data: pricedata.map((item) => item[1]),
            fill: true,
            borderWidth: 2,
            borderColor: '#3a80e9',
            backgroundColor: 'rgba(58,128,233,0.1)',
            tension: 0.25,
            pointRadius: 0
        }
        ],
        labels: (pricedata.map((item) => fixDate(item[0])))
    })
}