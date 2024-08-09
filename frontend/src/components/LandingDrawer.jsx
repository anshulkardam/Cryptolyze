import Drawer from '@mui/material/Drawer';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { useState } from 'react';
import { IconButton } from '@mui/material';


export default function AnchorTemporaryDrawer() {
  const [state, setState] = useState(false);

  return (
    <div>
      <IconButton onClick={() => { setState(true) }}><MenuRoundedIcon className='text-blue-400' /></IconButton>
      <Drawer
        anchor={"right"}
        open={state}
        onClose={() => { setState(false) }}
      >
        <div className='bg-slate-950 h-screen text-lg font-poppins font-semibold pr-44 pt-8 pl-10'>
          <div className="text-white">
            Login
          </div>
          <div className="text-white pt-2">
            About Us
          </div>
        </div>
      </Drawer>
    </div>
  );
}
