import React, { useState, useEffect } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  CardMedia,
  Grid,
  Button,
  Snackbar,
} from "@mui/material";
import MuiAlert from "@mui/material/Alert";

import { useDispatch, useSelector } from "react-redux";
import { getAdmin, getStudent } from "../../../redux/_api/api";
import DialogForm from "./components/Dialog";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
// export default function
const SelfInfo = ({ getRole }) => {
  let dispatch = useDispatch();

  //Snackbar
  const [snackbar, setSnackbar] = useState({
    opening: false,
    vertical: "top",
    horizontal: "right",
  });
  const { vertical, horizontal, opening } = snackbar;

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleClose1 = (event, reason) => {
    if (reason !== "clickaway") {
      setSnackbar({ vertical: "top", horizontal: "center", opening: false });
    }
  };

  //Info
  const { infos } = useSelector((state) => state.info);
  const { admin } = useSelector((state) => state.admin);

  const studentInfo = infos.length> 0 ? infos.find((x) => x.maSV = '20187210') : {};

  useEffect(() => {
    dispatch(getStudent());
    dispatch(getAdmin('HP7212'))
  }, []);

  return (
    <Card sx={{ minWidth: 275 }}>
      <Grid container spacing={2}>
        <Grid studentInfo xs={12} md={12} lg={4}>
          <CardMedia
            component="img"
           
            image="/static/avatars/avatar_24.jpg"
            alt="green iguana"
          ></CardMedia>
        </Grid>
        <Grid studentInfo xs={12} md={12} lg={8}>
          <CardContent sx={{textAlign:"center"}}>
            <Typography variant="h4" component="div" sx={{color: "rgb(117 188 190)"}}>
              THÔNG TIN CÁ NHÂN
            </Typography>
          </CardContent>

          <CardContent>
           
              <Typography
                variant="h6"
                color="text.secondary"
                align="justify"
                key= {studentInfo.maSV}
              >
                Họ và tên:{" "}
                <b>{getRole === "0" ? studentInfo.name : admin.hoten}</b>
                <br />
                {getRole === "0" ? (
                  <>
                    Giới tính : <b>{studentInfo.gender}</b>
                    <br />
                    Mã Sinh Viên: <b>{studentInfo.maSV}</b>
                    <br />
                    Năm vào trường: <b>{studentInfo.namvaotruong}</b>
                    <br />
                    Lớp: <b>{studentInfo.className}</b>
                    <br />
                    Tình trạng học tập : <b>{studentInfo.isLearning}</b>
                    <br />
                    Bậc đào tạo : <b>SIE</b>
                    <br />
                    Chương trình : <b>{studentInfo.nganh}</b>
                    <br />
                    Khoa/Viện quản lý :
                    <b>Viện Công nghệ thông tin và truyền thông</b>
                    <br />
                    Email: <b>{studentInfo.email}</b>
                    <br />
                    Khóa học: <b>{studentInfo.khoahoc}</b>
                    <br />
                  </>
                ) : (
                  <>
                  Mã công tác : <b>{admin.macongtac}</b>
                  <br/>
                  Nơi công tác: <b>{admin.noicongtac}</b>
                  <br/>
                  Khoa: <b>{admin.khoa}</b>
                  <br/>
                  Giới tính: <b>{admin.gioitinh}</b>
                  <br/>
                  Số điện thoại: <b>{admin.sodienthoai}</b>
                  <br/>
                  Email: <b>{admin.email}</b>
                  </>
                )}
              </Typography>
          
            <br />
            <Button
              sx={{
                backgroundColor: "#75bcbe",
                color: "white",
                "&:hover": {
                  backgroundColor: "black",
                },
              }}
              variant="success"
              onClick={() => handleClickOpen()}
            >
              Cập nhật
            </Button>
            <DialogForm
              open={open}
              handleClose={handleClose}
              info={getRole === '0' ?studentInfo : admin}
              setSnackbar={setSnackbar}
            />
            <Snackbar
              severity="error"
              anchorOrigin={{ vertical, horizontal }}
              open={opening}
              autoHideDuration={3000}
            >
              <Alert
                onClose={handleClose1}
                severity="success"
                sx={{ width: "100%" }}
              >
                Updated Success!
              </Alert>
            </Snackbar>
          </CardContent>
        </Grid>
      </Grid>
    </Card>
  );
};

export default SelfInfo;
