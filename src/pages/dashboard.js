import React from 'react';
import { Grid, Stack } from '@mui/material';
import Navbar from '../components/navbar'
import Sidebar from '../components/sidebar'

const Dashboard = () => {
  return (
    <Stack direction="column" spacing ={2}>
   <Navbar/>
    <Stack direction="row" >
      <Sidebar/>
      <div>Hello World</div>
    </Stack>
  
     
   
   </Stack>
  )
}

export default Dashboard