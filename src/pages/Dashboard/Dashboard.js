import * as React from "react";
import {
  styled,
  createTheme,
  Toolbar,
  List,
  Typography,
  Divider,

  Avatar,

} from "@mui/material";

import MuiDrawer from "@mui/material/Drawer";
import MainListItems from "./listItems";

import { useHistory } from "react-router-dom";


const drawerWidth = 240;


const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    backgroundColor: "white",
    color: "black",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
 
  },
}));
const mdTheme = createTheme();

function DashboardContent() {
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
            px: [1],
          }}
        >
           {getRole === '0' ? 
           <>
            <Avatar src="/static/avatars/avatar_24.jpg" alt="photoURL" />
            <Typography>Welcome, Ngọc Minh </Typography>
          </>
            :
            <>
            <Avatar src="/static/avatars/avatar_22.jpg" alt="photoURL" />
            <Typography>Welcome, Amie Nguyễn </Typography>
            </>
            }
        </Toolbar>
        <Divider />
        <List>
          <MainListItems />
        </List>
      </Drawer>
    </>

  );
}

export default function Dashboard() {
  return <DashboardContent />;
}
