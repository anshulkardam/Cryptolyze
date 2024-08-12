import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto"; 
import React from "react";
import { ConvertNumbers } from "../functions/ConvertNumbers";

function Chart({ chartData, multiAxis, toggle }) {
  const options = {
    plugins: {
      legend: {
        display: multiAxis ? true : false,
      },
    },
    responsive: true,
    interaction: {
      mode: "index",
      intersect: false,
    },
    scales: {
        y: {
            ticks: {
                callback: function(value,index,ticks){
                    if(toggle == "prices"){
                         return "$" + value.toLocaleString();
                    } else {
                        return  "$" + ConvertNumbers(value);
                    }
                }
            }
        }
    },
  };

  return <Line data={chartData} options={options} />;
}

export default Chart;