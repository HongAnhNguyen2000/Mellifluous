import React, { useState, useEffect } from "react";
import {
  TextField,
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  InputAdornment,
} from "@mui/material";
import * as Yup from "yup";
import { useFormik, Form, FormikProvider } from "formik";

import { useDispatch } from "react-redux";


const DialogFormSubject = ({ open }) => {
  let dispatch = useDispatch();

  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const InfoSchema = Yup.object().shape({
    namePerson: Yup.string().required("Please enter your name"),
    address: Yup.string().required("Please enter your address"),
    phone: Yup.string()
      .matches(phoneRegExp, "Invalid phone number")
      .required("Please enter your phone"),
    birthday: Yup.date().required("Please enter your birthday"),
  });

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      namePerson: '',
      address: '',
      phone: '',
      birthday: '',
    },
    validationSchema: InfoSchema,
    onSubmit: (values) => {
      console.log(values);

    },
  });

  const { errors, touched, handleSubmit, handleChange, values } = formik;

  return (
    <FormikProvider value={formik}>
      <Dialog open={open} >
        <Form onSubmit={handleSubmit}>
          <DialogTitle>Thông tin môn học</DialogTitle>
          <DialogContent>

            <TextField
              margin="dense"
              label="Mã môn"
              name="mamon"
             
              onChange={handleChange}
              fullWidth
              variant="outlined"
              // error={Boolean(touched.namePerson && errors.namePerson)}
              // helperText={touched.namePerson && errors.namePerson}
            />
            <TextField
              margin="dense"
              label="Tên môn"
             
              name="tenmon"
             
              onChange={handleChange}
              fullWidth
              variant="outlined"
              // error={Boolean(touched.namePerson && errors.namePerson)}
              // helperText={touched.namePerson && errors.namePerson}
            />
            <TextField
              margin="dense"
              label="Số tín chỉ"
              type="number"
              
              name="sotinchi"
             
              onChange={handleChange}
              fullWidth
              variant="outlined"
              // error={Boolean(touched.namePerson && errors.namePerson)}
              // helperText={touched.namePerson && errors.namePerson}
            />
            <TextField
              // margin="dense"
              label="Thời gian học"
              type="string"
             
              name="thoigianhoc"
             
              onChange={handleChange}
              fullWidth
              variant="outlined"
              // error={Boolean(touched.namePerson && errors.namePerson)}
              // helperText={touched.namePerson && errors.namePerson}
            />
            <TextField
              margin="dense"
              label="Giảng viên"
              type="string"
             
              name="tengiangvien"
             
              onChange={handleChange}
              fullWidth
              variant="outlined"
              // error={Boolean(touched.namePerson && errors.namePerson)}
              // helperText={touched.namePerson && errors.namePerson}
            />
           
          
          </DialogContent>
          <DialogActions>
            <Button variant="error" >
              Cancel
            </Button>
            <Button variant="contained" type="submit">
              Submit
            </Button>
          </DialogActions>
        </Form>
      </Dialog>
    </FormikProvider>
  );
};

export default DialogFormSubject;
