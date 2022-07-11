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
import DialogOpen from "./Extra/index";
import { makeStyles } from "@mui/styles";

import axios from "axios";

import { useDispatch, useSelector } from "react-redux";
import { loadExtras, loadAsyncExtras} from "../../redux/_api/api";

const useStyles = makeStyles(() => ({
  StyledBackground: {
    position: "absolute",
    zIndex: -1,
    width: "90%",
    left: "6%",
    top: "3%",
    borderRadius: "5%",
  },
}));

const ContainerExtra = () => {
  let dispatch = useDispatch();
  const [data, setData] = React.useState();
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [state, setState] = React.useState(false);
  const [error, setError] = React.useState("")
  const handleClose = (event, reason) => {
    if (reason !== "clickaway") {
      setState(false);
    }
  };


  const GetShow = (id) => {
    console.log(id);
    axios
      .get(`http://localhost:5001/extra/${id}`)
      .then((resp) => {
        setData(resp.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const { extra } = useSelector((state) => state.extra);


 
  useEffect(() => {
     dispatch(loadExtras((data) => {
      console.log("data: ", data)
    }, (error) => {
      console.log("error === : ", error)

    })
    )
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
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={12} lg={12}>
                <h1>{error}</h1>
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="center"
                  spacing={3}
                >
                  <Box sx={{ position: "relative" }}>
                    <Stack
                      direction="column"
                      spacing={1}
                      justifyContent="center"
                      sx={{
                        position: "absolute",
                        width: "88%",
                        left: "6%",
                        top: "17%",
                      }}
                    >
                      {extra &&
                        extra.map((item) => (
                          <Button
                            variant="contained"
                            color={item.coloR}
                            key={item.id}
                            onClick={() => GetShow(item.id)}
                          >
                            <Stack
                              direction="row"
                              spacing={2}
                              justifyContent="center"
                              alignItems="center"
                            >
                              <FavoriteIcon />
                             <Stack direction="column">
                              <Typography variant="caption">
                                {item.name}
                              </Typography>
                              <Typography>
                                {item.deadline}
                              </Typography>
                              </Stack>
                            </Stack>
                          </Button>
                        ))}
                    </Stack>

                    <img
                      src="/static/extra/background.png"
                      className={classes.StyledBackground}
                    />
                    <img src="https://i.pinimg.com/564x/71/39/31/713931058d5a8caedd3af581c46d0dff.jpg" alt="" />
                  </Box>
                  {data && (
                    <Box
                      // border={color}
                      sx={{ minWidth: 275, boxShadow: `5px 5px 5px 5px  ` }}
                    >
                      <Card variant="contained">
                        <CardContent>
                          <Typography
                            sx={{ fontSize: 16 }}
                            color={data.color}
                            gutterBottom
                          >
                            Công tác sinh viên
                          </Typography>

                          <Typography variant="h5" component="div">
                            {data.name}
                          </Typography>
                          <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            {data.deadline}
                          </Typography>
                        </CardContent>

                        <CardContent sx={{ textAlign: "left" }}>
                          <Typography variant="body2">
                            Thời gian : {data.when}
                            <br />
                            Địa điểm : {data.where}
                            <br />
                            Thuộc tổ chức : {data.what}
                            <br />
                            Hạn nộp MC : {data.deadline}
                          </Typography>
                          <Typography variant="body2" color="red">
                            Tiêu chí ứng với hoạt động
                          </Typography>
                          <Typography variant="body2">
                            <b>Thông tin chi tiết:</b>
                            <br />
                            1. Đối tượng tham gia : {data.people}
                            <br />
                            2. Thời gian tham gia : {data.time}
                            <br />
                            3. Cách thức tham gia :
                            <br />- {data.how}
                            <br />
                            {data.morehow}
                            <br />
                            4. Cách thức phê duyệt
                            <br />- {data.accept}
                          </Typography>
                        </CardContent>

                        <Button
                          variant="contained"
                          
                          onClick={() => setOpen(true)}
                          sx={{
                            backgroundColor: data.color,
                            marginBottom: "10px",
                            marginLeft: "30%"
                          }}
                        >
                          Nộp minh chứng
                        </Button>
                        <DialogOpen
                          open={open}
                          setState={setState}
                          setOpen={setOpen}
                          status={data.status}
                        ></DialogOpen>
                        <Snackbar
                          open={state}
                          autoHideDuration={1000}
                          onClose={handleClose}
                        >
                          <Alert
                            severity="success"
                            sx={{ width: "100%" }}
                            onClose={handleClose}
                          >
                            Gửi ảnh lên thành công,BTC sẽ duyệt và trả kết quả
                            cho bạn
                          </Alert>
                        </Snackbar>
                      </Card>
                    </Box>
                  )}
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
