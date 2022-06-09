import React from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Avatar,
  Stack,
  Typography,
} from "@mui/material";

import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from '@mui/icons-material/Search';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import AudiotrackIcon from "@mui/icons-material/Audiotrack";


const ListSideBar = [
  {
    title: "Home",
    icon: <HomeIcon fontSize="large" />
  },
  {
    title: "Search",
    icon: <SearchIcon />,
  },
  {
    title: "Library",
    icon: <LibraryMusicIcon />,
  }
];

const Sidebar = () => {
  const drawerWidth = 240;
  return (
    <Drawer
      sx={{
        width: drawerWidth,

        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
          color: "white",
          background: "black",
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <Stack
        direction="row"
        spacing={2}
        justifyContent="center"
        alignItems="center"
        mt={3}
      >
        <Avatar src="https://i.pinimg.com/564x/80/04/f5/8004f5a0d01462dbbeab0053878f0817.jpg" />
        <Typography sx={{ fontFamily: "fantasy", fontSize: "30px" }}>
   
          Mellifluous
        </Typography>
      </Stack>
      <List sx={{ paddingTop: "30px", fontSize: "20px" }}>
        {ListSideBar.map((item) => (
          <ListItem button key={item.title} >
            <ListItemIcon sx={{color: 'white'}}>{item.icon}</ListItemIcon>
            <ListItemText primary={item.title} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
