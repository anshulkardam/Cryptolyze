import React, { useEffect } from 'react';

const Widget = () => {
  useEffect(() => {
    // Create a script element
    const script = document.createElement('script');

    // Set the script's source URL
    script.src = 'https://widgets.coingecko.com/gecko-coin-price-marquee-widget.js';
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
      <gecko-coin-price-marquee-widget 
        locale="en" 
        dark-mode="true" 
        coin-ids="" 
        initial-currency="usd"
      ></gecko-coin-price-marquee-widget>
    </div>
  );
};

export default Widget
