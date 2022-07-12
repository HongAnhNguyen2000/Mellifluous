<<<<<<< HEAD
import * as React from "react";
=======
import  React, {useState} from "react";
>>>>>>> master
import {
  styled,
  createTheme,
  Toolbar,
  List,
  Typography,
  Divider,
<<<<<<< HEAD
  IconButton,
  Badge,
  Avatar,
  Popover,
  Button,
} from "@mui/material";

import MuiDrawer from "@mui/material/Drawer";

import MuiAppBar from "@mui/material/AppBar";

import MenuIcon from "@mui/icons-material/Menu";
import LogoutIcon from "@mui/icons-material/Logout";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MainListItems from "./listItems";

import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
=======
  Stack,
  Avatar,
  Button

} from "@mui/material";

import MuiDrawer from "@mui/material/Drawer";
import LogoutIcon from "@mui/icons-material/Logout";
import MainListItems from "./listItems";

>>>>>>> master
import { useHistory } from "react-router-dom";


const drawerWidth = 240;


const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    backgroundColor: "#5cbebf",
    color: "white",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
 
  },
}));
const mdTheme = createTheme();

function DashboardContent({selectedItem}) {
  let history = useHistory();



  const getRole = localStorage.getItem('accountInfo');


  const onLogOut = () => {
    history.push("/");
    localStorage.removeItem('accountInfo')
  }

  return (
    <>
      <Drawer variant="permanent" >
        <Toolbar
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "white",
            color: "#2a4a4b",
            px: [1],
          }}
        >
           {getRole === '0' ? 
           <Stack direction="row" spacing={2} alignItems="center" justifyContent="center">
            <Avatar src="/static/avatars/avatar_24.jpg" alt="photoURL" />
            <Typography>20187210 </Typography>
            <Button variant="contained" onClick={onLogOut} sx={{color: "75bcbe"}}>
              <LogoutIcon/>
            </Button>
          </Stack>
            :
            <Stack direction="row" spacing={2}  alignItems="center" justifyContent="center">
            <Avatar src="/static/avatars/avatar_22.jpg" alt="photoURL" />
            <Typography> 12 </Typography>
            <Button variant="contained" onClick={onLogOut} sx={{color: "75bcbe"}}>
              <LogoutIcon/>
            </Button>
            </Stack>
            }
        </Toolbar>
        <Divider />
        <List>
          <MainListItems selectedItem={selectedItem}  />
        </List>
      </Drawer>
    </>

  );
}

export default function Dashboard({selectedItem}) {
  return <DashboardContent selectedItem={selectedItem} />;
}
