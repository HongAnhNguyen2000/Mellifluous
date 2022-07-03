import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import SendIcon from '@mui/icons-material/Send';
import { pink } from '@mui/material/colors';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);


export default function HealthInfo() {
  const [value, setValue] = React.useState('female');
  

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const handleSend =()=>{

  }

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Word of the Day
        </Typography>
        <Typography variant="h5" component="div">
          Thông tin sức khoẻ
        </Typography>
        <FormControl component="fieldset">
      <FormLabel component="legend">Tiêm vắc xin</FormLabel>
      <RadioGroup
        aria-label="gender"
        name="controlled-radio-buttons-group"
        value={value}
        onChange={handleChange}
        
      >
        <FormControlLabel value="0" control={<Radio  sx={{
          color: pink[800],
          '&.Mui-checked': {
            color: pink[600],
          },
        }}/>} label="Chưa tiêm" />
        <FormControlLabel value="1" control={<Radio sx={{
          color: pink[800],
          '&.Mui-checked': {
            color: pink[600],
          },
        }} />} label="Tiêm 1 mũi" />
        <FormControlLabel value="2" control={<Radio sx={{
          color: pink[800],
          '&.Mui-checked': {
            color: pink[600],
          },
        }}/>} label="Tiêm 2 mũi" />
      </RadioGroup>
      <Button variant="contained" color="error" endIcon={<SendIcon />}>
        Send
      </Button>
    </FormControl>
      </CardContent>
    </Card>
  );
}
