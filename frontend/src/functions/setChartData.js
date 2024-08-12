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
            borderColor: '#224422',
            backgroundColor: 'rgba(100, 220, 150, 0.1)',
            tension: 0.25,
            pointRadius: 0
        }
        ],
        labels: (pricedata.map((item) => fixDate(item[0])))
    })
}

// borderColor: '#4CAF50',
// backgroundColor: 'rgba(76,175,80,0.2)',