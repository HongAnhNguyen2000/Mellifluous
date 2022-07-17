import React, { useEffect } from "react";
import { styled } from "@mui/material/styles";
import {
  Grid,
  Stack,
  Card,
  CardContent,
  IconButton,
  Alert,
  Typography,
  CssBaseline,
  Box,
  Container,
  Snackbar,
  Toolbar,
  Button,
} from "@mui/material";

import FavoriteIcon from "@mui/icons-material/Favorite";

import { ThemeProvider } from "@mui/private-theming";
import DashboardContent from "./Dashboard";
import { IconRanking } from "./Extra/index";
import { makeStyles } from "@mui/styles";

import axios from "axios";

import { useDispatch, useSelector } from "react-redux";
import { loadExtras, loadEachExtra} from "../../redux/_api/api";


const ContainerExtra = () => {
  let dispatch = useDispatch();


  const [open, setOpen] = React.useState(false);
  const [state, setState] = React.useState(false);


  const { extras } = useSelector((state) => state.extra);
  const {extra} = useSelector((state) => state.extra)

  console.log(extra)
 
  useEffect(() => {
     dispatch(loadExtras((data) => {
      console.log("data: ", data)
    }, (error) => {
      console.log("error === : ", error)

    })
    )

    dispatch(loadEachExtra('20187210'));
  }, []);


  return (
    <ThemeProvider>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <DashboardContent selectedItem = '3'/>
        <Box
          component="main"
          sx={{
            backgroundcolor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: "100vh",
            overflow: "auto",
            positionn: "relative",
          }}
        >
         
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Typography variant="h3" sx={{textAlign:"center",color: '#c89231', mb: 6}}> Xếp hạng GPA kì 20211</Typography>
            <Grid container spacing={3}>
              <Grid item xs={6} md={6} lg={6}>
               
                    <Stack
                      direction="column"
                      spacing={1}
                      justifyContent="center"
                     
                    >
                      {extras &&
                        extras.map((item, index) => (
                          <Button
                            variant="contained"
                            sx={{color: '#ffbc42',
                            backgroundColor : "#373a45"}}
                            
                            key={item.id}
                            
                          >
                          <Grid container>
                              <Grid item xs={2}>
                              <Typography >
                                {index+1}
                              </Typography>
                              </Grid>
                              <Grid item xs={2}>
                              <Typography >
                                {item.masoSV}
                              </Typography>
                              </Grid>
                              <Grid item xs={5} sx={{justifyContent: "flex-start", textAlign: "left"}}>
                              <Typography>
                                {item.name}
                              </Typography>
                              </Grid>
                              <Grid item xs={3}>
                              <Typography >
                                {item.GPA}
                              </Typography>
                              </Grid>
                              
                              </Grid>
                          </Button>
                        ))}
                    </Stack>

              </Grid>
              <Grid item xs={6} md={6} lg={6}>
                <Stack direction="column" spacing={3} justifyContent="center" alignItems="center">
                
                <Card variant="outlined">
                <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                   Your ranking
                </Typography>
                <Typography variant="h5" component="div" sx={{textAlign:"center"}}>
                  2
                </Typography>

                </CardContent>
                </Card>

                <IconRanking/>
                </Stack>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default ContainerExtra;
