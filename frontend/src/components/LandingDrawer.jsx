import Drawer from '@mui/material/Drawer';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { useState } from 'react';
import { IconButton } from '@mui/material';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';

export default function AnchorTemporaryDrawer() {
  const [state, setState] = useState(false);
  const notify = () => {
    toast.info('Coming Soon!');
  };
  const notifyprob = () => {
    toast.error('clerk disabled rn because of issues');
  };

  return (
    <div>
      <IconButton onClick={() => { setState(true) }}><MenuRoundedIcon className='text-blue-400' /></IconButton>
      <Drawer
        anchor={"right"}
        open={state}
        onClose={() => { setState(false) }}
        sx={{
          '& .MuiDrawer-paper': {
            width: '75vw', // Set the width to 70% of the viewport for mobile
            maxWidth: '400px', // Optional: Limit the max width for larger screens
          }
        }}
      >
        <div className='bg-neutral-900 h-screen text-md font-poppins font-semibold pr-44 pt-8 pl-10'>
          <div onClick={notifyprob} className="text-blue-400 mb-5 font-montserrat">
            Welcome, User!
          </div>
          <ToastContainer />
          <ul className="list-disc text-yellow-400 space-y-2">
            <li  className="hover:text-white">
              <Link to={'/compare'} className="hover:text-white whitespace-nowrap">
                Compare Coins
              </Link>
            </li>
            <li  className="hover:text-white">
              <Link to={'/watchlist'}>
                Watchlist
              </Link>
            </li>
            <li onClick={notify} className="hover:text-white">
              NFTs
            </li>
            <li onClick={notify} className="hover:text-white">
              Trending
            </li>
          </ul>
          <ToastContainer />
        </div>
      </Drawer>
    </div>
  );
}
