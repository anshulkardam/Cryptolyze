import React, { useEffect } from 'react';
const WidgetChart = () => {
    useEffect(() => {
      // Create a script element
      const script = document.createElement('script');
  
      // Set the script's source URL
      script.src = 'https://widgets.coingecko.com/gecko-coin-price-chart-widget.js';
      script.async = true;
  
      // Append the script to the document body
      document.body.appendChild(script);
  
      // Clean up the script when the component unmounts
      return () => {
        document.body.removeChild(script);
      };
    }, []);
  
    return (
      <div>
        <gecko-coin-price-chart-widget locale="en" dark-mode="true" transparent-background="true" initial-currency="usd"></gecko-coin-price-chart-widget>
      </div>
    );
  };

export default WidgetChart