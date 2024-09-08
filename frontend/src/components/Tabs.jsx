import * as React from 'react';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { useState } from 'react';
import { lightBlue } from '@mui/material/colors';
import { GridView } from './GridView';
import { ListView } from './ListView';
import Box from '@mui/material/Box';

export default function LabTabs({ coindata }) {
  const [value, setValue] = useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList
            onChange={handleChange}
            aria-label="lab API tabs example"
            variant="fullWidth"
            scrollButtons="auto"
          >
            <Tab
              label="Grid"
              value="1"
              sx={{
                color: lightBlue[50],
                fontWeight: 'bold',
                '&.Mui-selected': { color: lightBlue[500] }
              }}
            />
            <Tab
              label="List"
              value="2"
              sx={{
                color: lightBlue[50],
                fontWeight: 'bold',
                '&.Mui-selected': { color: lightBlue[500] }
              }}
            />
          </TabList>
        </Box>
        <TabPanel value="1">
          <div className='flex justify-center flex-wrap p-3 gap-4  sm:gap-2'>
            {coindata.map((coin, i) => (
              <GridView coin={coin} key={i} />
            ))}
          </div>
        </TabPanel>

        <TabPanel value="2">
          <div className="overflow-x-auto">
            <table className="w-full mt-4">
              {coindata.map((coin, i) => (
                <ListView coin={coin} key={i} />
              ))}
            </table>
          </div>
        </TabPanel>
      </TabContext>
    </Box>
  );
}
