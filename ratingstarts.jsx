import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
// import StarIcon from '@mui/icons-material/Star';


export default function BasicRating() {
  const [value, setValue] = React.useState(4);

  return (
    <Box
      sx={{
        '& > legend': { mt: 2 },
      }}
    >
      <Rating name="read-only" value={value} readOnly 
        // emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
        />
    </Box>
  );
}
