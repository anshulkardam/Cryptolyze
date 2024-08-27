import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getCoinData } from '../functions/getCoinData';
import { SavedlistView } from './SavedlistView';

export const Savedlist = () => {
  const [watchlist, setWatchlist] = useState([]);
  const [coinDetails, setCoinDetails] = useState([]);

  useEffect(() => {
    const storedWatchlist = JSON.parse(localStorage.getItem('watchlist')) || [];
    setWatchlist(storedWatchlist);
  }, []);

  useEffect(() => {
    if (watchlist.length > 0) {
      getdata();
    }
  }, [watchlist]);

  async function getdata() {
    const coins = await getCoinData();
    const filteredCoins = coins.filter((coin) => watchlist.includes(coin.id));
    setCoinDetails(filteredCoins);
  }

   

  return (
    <div className="watchlist-container w-full">

      <h2 className="text-white flex justify-center font-montserrat text-3xl w-full font-bold mb-4">
        My Watchlist
      </h2>
      {watchlist.length > 0 ? (
        <div className="w-full mt-4">
          {coinDetails.map((coin) => (
            <Link to={`/coin/${coin.id}`}  >
              <div key={coin.id}>
                <SavedlistView coin={coin} key={coin.id} />
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <p className="text-white">Your watchlist is empty.</p>
      )}

    </div>
  );
};
