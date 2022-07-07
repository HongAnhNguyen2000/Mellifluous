import React, {useEffect, useState} from 'react';


import DashboardIcon from '@mui/icons-material/Dashboard';

import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';

import { Avatar, List, ListItemText, experimentalStyled as styled, ListItemButton } from '@mui/material';

 import { useHistory } from 'react-router';

 const StyledList = styled(List)(({theme}) => ({
  '&& .Mui-selected, && .Mui-selected:hover': {
    backgroundColor: '#375455',

  },
  // hover states
  '& .MuiListItemButton-root:hover': {
    backgroundColor: '#375455',
    '&, & .MuiListItemIcon-root': {
      color: 'yellow',
    },
  },

 }))
const MainListItems = ({selectedItem, setSelectedItem}) =>{

  const handleListItemClick = (index) => {
    setSelectedItem(index);
  }


  let history = useHistory();

  const getRole = localStorage.getItem('accountInfo');

  return(
  <StyledList>
    
    <ListItemButton onClick={()=> history.push("/dashboard")} selected={selectedItem === 0}> 
    <Avatar sx={{ m: 1, bgcolor: 'white',color:'black' }}>
        <PeopleIcon />
    </Avatar>
      <ListItemText primary="Thông tin cá nhân" />
    </ListItemButton>
    
    <ListItemButton onClick={()=> history.push("/score")} selected={selectedItem === 1}>
    <Avatar sx={{ m: 1,  bgcolor: 'white',color:'black' }}>
        <BarChartIcon />
    </Avatar>
      <ListItemText primary="Kết quả học tập" />
    </ListItemButton>

    

    {getRole === '0' ? (
      <>
    <ListItemButton onClick={()=> history.push("/subject")} selected={selectedItem === 2}>
    <Avatar sx={{ m: 1, bgcolor: 'white',color:'black'  }}>
        <DashboardIcon />
    </Avatar>
      <ListItemText primary="Đăng kí tín chỉ" />
    </ListItemButton>
    
    <ListItemButton  onClick={()=> history.push("/extra")} selected={selectedItem === 3}>
    <Avatar sx={{ m: 1,  bgcolor: 'white',color:'black' }}>
        <LayersIcon />
    </Avatar>
      <ListItemText primary="Điểm rèn luyện" />
    </ListItemButton>


    </>    
    ):
    (
      <>
      <ListItemButton  onClick={()=> history.push("/manageSubject")} selected= {selectedItem === 4}>
      <Avatar sx={{ m: 1,  bgcolor: 'white',color:'black' }}>
          <LayersIcon />
      </Avatar>
        <ListItemText primary="Quản lý môn học" />
      </ListItemButton>
    </>
    )}
  </StyledList>
);

}
 export default MainListItems