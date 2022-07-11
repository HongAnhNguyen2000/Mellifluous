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

import { updateStudent } from "../../../../redux/_api/api";
import { useDispatch } from "react-redux";

const DialogForm = ({ open, handleClose, info, setSnackbar }) => {
  let dispatch = useDispatch();

  const InfoSchema = Yup.object().shape({
    namePerson: Yup.string().required("Please enter your name"),
    email: Yup.string().email().required("Please enter your address"),

    gender: Yup.string().required("Please enter your birthday"),
  });

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      namePerson: info && info.name,

      gender: info && info.gender,
      email: info && info.email,
    },
    validationSchema: InfoSchema,
    onSubmit: (values) => {
      
      dispatch(updateStudent({
        ...info,
        email : values.email,
        name: values.namePerson,
        gender: values.gender
      }, info.id));
      handleClose();
      setSnackbar({ opening: true, vertical: "top", horizontal: "right" });
    },
  });

  const { errors, touched, handleSubmit, handleChange, values } = formik;

  return (
    <FormikProvider value={formik}>
      <Dialog open={open} onClose={handleClose}>
        <Form onSubmit={handleSubmit}>
          <DialogTitle>Thông tin cá nhân</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Lưu ý: Cập nhật thông tin cá nhân thực sự khi cần thiết
            </DialogContentText>

            <TextField
              margin="dense"
              label="Ho va ten"
              focused
              name="namePerson"
              value={values.namePerson}
              onChange={handleChange}
              fullWidth
              variant="standard"
              error={Boolean(touched.namePerson && errors.namePerson)}
              helperText={touched.namePerson && errors.namePerson}
            />
            <TextField
              margin="dense"
              label="Giới tính"
              name="gender"
              value={values.gender}
              focused
              onChange={handleChange}
              fullWidth
              variant="standard"
              error={Boolean(touched.gender && errors.gender)}
              helperText={touched.gender && errors.gender}
            />
            <TextField
              margin="dense"
              type="email"
              label="Email"
              name="email"
              value={values.email}
              focused
              onChange={handleChange}
              fullWidth
              variant="standard"
              error={Boolean(touched.email && errors.email)}
              helperText={touched.email && errors.email}
            />

          </DialogContent>
          <DialogActions>
            <Button variant="error" onClick={handleClose}>
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

export default DialogForm;
