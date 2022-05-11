
import * as React from "react";
import {
  styled,
  Toolbar,
  Typography,
  IconButton,
  Badge,
  Avatar,
  Popover,
  Button
} from "@mui/material";


import MuiAppBar from "@mui/material/AppBar";

import MenuIcon from "@mui/icons-material/Menu";
import LogoutIcon from "@mui/icons-material/Logout";

import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  backgroundColor: "black",
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    backgroundColor: "black",
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));



function BasicPopover() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div>
      <Badge badgeContent={1} color="error">
        <NotificationsActiveIcon color="white" onClick={handleClick} />
      </Badge>

      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <Typography sx={{ p: 2 }}>
          Thông báo
        </Typography>
      </Popover>
    </div>
  );
}

function DashboardContent() {


  //   const onLogOut = () => {
  //     history.push("/");
  //     localStorage.removeItem('accountInfo')
  //   }

  return (
    <AppBar>
   
        <Toolbar >
          <IconButton
            edge="start"
            aria-label="open drawer"
       
            sx={{
              color:'white',  
             
            }}
          >
            <MenuIcon />
          </IconButton>
        
           
          <Typography className="logoName" noWrap sx={{ flexGrow: 1}}>
          
            Mellifluous
          </Typography>
          <BasicPopover />
          <IconButton
            sx={{
              padding: 0,
              marginLeft: "1.5%",
              width: 44,
              height: 44,

            }}
          >
            <Avatar src="/static/avatars/avatar_24.jpg" alt="photoURL" />
          </IconButton>
          <Button>
            <LogoutIcon />
          </Button>
        </Toolbar>
      
    </AppBar>
  );
}

export default function Dashboard() {
  return <DashboardContent />;
}
