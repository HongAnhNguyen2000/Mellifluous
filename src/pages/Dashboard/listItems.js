import * as React from 'react';
import ListItem from '@mui/material/ListItem';

import ListItemText from '@mui/material/ListItemText';

import DashboardIcon from '@mui/icons-material/Dashboard';

import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';

import { Avatar } from '@mui/material';

 import { useHistory } from 'react-router';

 import { makeStyles } from '@mui/styles';

 const useStyles = makeStyles({
   button : {
     borderBlockColor:'black',
    '&:hover': {
      backgroundColor:'black'
  },
    '&:active':{
      backgroundColor:'black'
    }
   }

 })
const MainListItems = () =>{
  let history = useHistory();

  const getRole = localStorage.getItem('accountInfo');

  const classes = useStyles()
  return(
  <div>
    
    <ListItem button className={classes.button} onClick={()=> history.push("/dashboard")}> 
    <Avatar sx={{ m: 1, bgcolor: 'white',color:'black' }}>
        <PeopleIcon />
    </Avatar>
      <ListItemText primary="Thông tin cá nhân" />
    </ListItem>
    
    <ListItem button className={classes.button} onClick={()=> history.push("/score")}>
    <Avatar sx={{ m: 1,  bgcolor: 'white',color:'black' }}>
        <BarChartIcon />
    </Avatar>
      <ListItemText primary="Kết quả học tập" />
    </ListItem>

    

    {getRole === '0' ? (
      <>
    <ListItem button className={classes.button} onClick={()=> history.push("/subject")}>
    <Avatar sx={{ m: 1, bgcolor: 'white',color:'black'  }}>
        <DashboardIcon />
    </Avatar>
      <ListItemText primary="Đăng kí tín chỉ" />
    </ListItem>
    
    <ListItem button className={classes.button} onClick={()=> history.push("/extra")}>
    <Avatar sx={{ m: 1,  bgcolor: 'white',color:'black' }}>
        <LayersIcon />
    </Avatar>
      <ListItemText primary="Điểm rèn luyện" />
    </ListItem>


    </>    
    ):
    (
      <>
      <ListItem button className={classes.button} onClick={()=> history.push("/manageSubject")}>
      <Avatar sx={{ m: 1,  bgcolor: 'white',color:'black' }}>
          <LayersIcon />
      </Avatar>
        <ListItemText primary="Quản lý môn học" />
      </ListItem>
    </>
    )}
  </div>
);

}
 export default MainListItems