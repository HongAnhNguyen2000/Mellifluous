<<<<<<< HEAD
import React, { useState, useEffect } from "react";
import {
  TextField,
  Box,
=======
import React, { useEffect } from "react";
import {
  TextField,
  Stack,
>>>>>>> master
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
<<<<<<< HEAD


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
=======
import { updateSub, loadSubjects, addNewSub } from "../redux/_api/api";


const DialogFormSubject = ({ open, setOpen, subject }) => {
  let dispatch = useDispatch();

  const InfoSchema = Yup.object().shape({
    mamon: Yup.string().required("Nhap ma mon hoc"),
    name: Yup.string().required("Nhap ten mon hoc"),
    sotinchi: Yup.number().required("Nhap so tin chi"),
    time: Yup.string().required("Nhap thoi gian hoc"),
    teacher: Yup.string().required("Nhap ten giang vien"),
    
>>>>>>> master
  });

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      mamon: subject.mamon ? subject.mamon :'',
      name: subject.name  ? subject.name :'',
      sotinchi: subject.sotinchi  ? subject.sotinchi :'',
      time: subject.time  ? subject.time :'',
      teacher: subject.teacher  ? subject.teacher :'',
      faculity: 'Công nghệ thông tin và truyền thông',
      semester: '20211'
    },
    validationSchema: InfoSchema,
    onSubmit: (values) => {
      console.log(values)
      if(subject.id !== undefined) {
        console.log(values);
        dispatch(updateSub(values,subject.id))
        setOpen(false);
        dispatch(loadSubjects())
      }else {
        dispatch(addNewSub(values));
        setOpen(false);
        dispatch(loadSubjects());
      }

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
              margin="normal"
              label="Mã môn"
              name="mamon"
              value={values.mamon}
              onChange={handleChange}
              fullWidth
              variant="outlined"
              error={Boolean(touched.mamon && errors.mamon)}
              helperText={touched.mamon && errors.mamon}
              InputLabelProps={{ shrink: true }}
            />
            <TextField
              margin="normal"
              label="Tên môn"
              name="name"
              value = {values.name}
              onChange={handleChange}
              fullWidth
              variant="outlined"
              error={Boolean(touched.name && errors.name)}
              helperText={touched.name && errors.name}
              InputLabelProps={{ shrink: true }}
            />
            <TextField
              margin="normal"
              label="Số tín chỉ"
              type="number"
              name="sotinchi"
              value={values.sotinchi}
              onChange={handleChange}
              fullWidth
              variant="outlined"
              error={Boolean(touched.sotinchi && errors.sotinchi)}
              helperText={touched.sotinchi && errors.sotinchi}
              InputLabelProps={{ shrink: true }}
            />
            <TextField
               margin="normal"
              label="Thời gian học"
              type="string"
              value={values.time}
              name="time"
              onChange={handleChange}
              fullWidth
              variant="outlined"
              error={Boolean(touched.time && errors.time)}
              helperText={touched.time && errors.time}
              InputLabelProps={{ shrink: true }}
            />
            <TextField
              margin="normal"
              label="Giảng viên"
              type="string"
              name="teacher"
              value={values.teacher}
              onChange={handleChange}
              fullWidth
              variant="outlined"
              error={Boolean(touched.teacher && errors.teacher)}
              helperText={touched.teacher && errors.teacher}
              InputLabelProps={{ shrink: true }}
            />
           
          
          </DialogContent>
          <DialogActions>
            <Button variant="error" onClick={() => setOpen(false)}>
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
