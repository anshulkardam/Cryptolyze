import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { useState } from 'react';
import { lightBlue, red } from '@mui/material/colors';
import { GridView } from './GridView';
import { ListView } from './ListView';

export default function LabTabs({coindata}) {
  const [value, setValue] = useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example" variant="fullWidth">
            <Tab label="Grid" value="1" sx={{ color: lightBlue[50], fontWeight: 'bold', '&.Mui-selected': { color: lightBlue  } }} />
            <Tab label="List" value="2" sx={{ color: lightBlue[50],  fontWeight: 'bold', '&.Mui-selected': { color: lightBlue } }} />
          </TabList>
        </Box>
        <TabPanel value="1">
        <div className='flex justify-center flex-wrap p-4 gap-12 '>
            {coindata.map((coin,i)=> {
                   return <GridView coin={coin} key={i} />
            })}
        </div>
        </TabPanel>
        
        <TabPanel value="2">
        <table className="w-full mt-4">
             {coindata.map((coin,i)=> {
                   return <ListView coin={coin} key={i} />
            })}
        </table>
        </TabPanel>
      </TabContext>
    </Box>
  );
}
