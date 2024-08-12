import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

export default function ChartToggleButton({toggle,handleToggleChange}) {
  
  return (
    <div className="flex justify-center pb-4">
    <ToggleButtonGroup
      color="primary"
      value={toggle}
      exclusive
      onChange={handleToggleChange}
      sx={{
          "&.Mui-selected": {
          color: "blue",
        },
        borderColor: 'blue',
        border:"unset",
        "& .MuiToggleButtonGroup-grouped": {
          color: "blue",
          border: "1px solid",
          borderColor: "unset"
        },
        "& .MuiToggleButton-standard": {
            color: "#blue",
        },
      }}
    >
      <ToggleButton value="prices">Price</ToggleButton>
      <ToggleButton value="market_caps">Market Cap</ToggleButton>
      <ToggleButton value="total_volumes">Total Volume</ToggleButton>
    </ToggleButtonGroup>
    </div>
  );
}
