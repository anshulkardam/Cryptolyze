import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export const Savedlist = () => {
  const [watchlist, setWatchlist] = useState([]);

  useEffect(() => {
    // Retrieve the watchlist from local storage
    const storedWatchlist = JSON.parse(localStorage.getItem('watchlist')) || [];
    setWatchlist(storedWatchlist);
  }, []);

  return (
    <div className="watchlist-container flex justify-center ">
        <div>
      <h2 className="text-white text-2xl font-bold mb-4">My Watchlist</h2>
      {watchlist.length > 0 ? (
        <ul>
          {watchlist.map((coinId) => (
            <li key={coinId} className="mb-2 text-center text-2xl font-montserrat font-semibold ">
              <Link to={`/coin/${coinId}`} className=" hover:underline text-yellow-500">
                {coinId}
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-white">Your watchlist is empty.</p>
      )}
      </div>
    </div>
  );
};
