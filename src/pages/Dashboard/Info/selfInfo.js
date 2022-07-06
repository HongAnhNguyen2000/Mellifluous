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
import { getStudent } from "../../../redux/_api/api";
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
  const { info } = useSelector((state) => state.info);
  
  
  useEffect(() => {
    dispatch(getStudent());
  }, []);

  return (
    <Card sx={{ minWidth: 275 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={12} lg={4}>
          <CardMedia
            component="img"
            height="140"
            image="/static/avatars/avatar_24.jpg"
            alt="green iguana"
          ></CardMedia>
        </Grid>
        <Grid item xs={12} md={12} lg={8}>
          <CardContent>
            <Typography variant="h5" component="div">
              THÔNG TIN CÁ NHÂN
            </Typography>
          </CardContent>

          <CardContent>
            {info.length >0 && info.map((item) =>  (
              <Typography
                variant="body1"
                color="text.secondary"
                align="justify"
              >
                Họ và tên:{" "}
                <b>{getRole === "0" ? item.name : "Amy Nguyen"}</b>
                <br />
                {getRole === "0" ? (
                  <>
                    Giới tính : <b>{item.gender}</b>
                    <br />
                    Mã Sinh Viên: <b>{item.maSV}</b>
                    <br />
                    Năm vào trường: <b>{item.namvaotruong}</b>
                    <br />
                    Lớp: <b>{item.className}</b>
                    <br />
                    Tình trạng học tập : <b>{item.isLearning}</b>
                    <br />
                    Bậc đào tạo : <b>SIE</b>
                    <br />
                    Chương trình : <b>{item.nganh}</b>
                    <br />
                    Khoa/Viện quản lý :
                    <b>Viện Công nghệ thông tin và truyền thông</b>
                    <br />
                    Email: <b>{item.email}</b>
                    <br />
                    Khóa học: <b>{item.khoahoc}</b>
                    <br />
                  </>
                ) : (
                  <>
                    Chức vụ :{" "}
                    <b>
                      Phó giám đốc Trung tâm, Trung tâm Hỗ trợ, nghiên cứu, phát
                      triển và chuyển giao công nghệ Bí thư, Liên chi đoàn
                      Trường Công nghệ Thông tin và Truyền thông Giảng viên, Bộ
                      môn Kỹ thuật Máy tính{" "}
                    </b>
                  </>
                )}
              </Typography>
            ))}
            <br />
            <Button
              sx={{
                backgroundColor: "#9e1010",
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
              info={info}
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