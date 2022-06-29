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
import CheckboxList from "./CheckboxList";

const DialogForm = ({ open, handleClose, info, setSnackbar }) => {
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
      namePerson: info.namePerson,
      address: info.address,
      phone: info.phone,
      birthday: info.birthday,
    },
    validationSchema: InfoSchema,
    onSubmit: (values) => {
      console.log(values);
      dispatch(updateStudent(values));
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
              label="Địa chỉ"
              name="address"
              value={values.address}
              focused
              onChange={handleChange}
              fullWidth
              variant="standard"
              error={Boolean(touched.address && errors.address)}
              helperText={touched.address && errors.address}
            />
            <TextField
              margin="dense"
              type="number"
              label="Số điện thoại"
              name="phone"
              value={values.phone}
              focused
              onChange={handleChange}
              fullWidth
              variant="standard"
              error={Boolean(touched.phone && errors.phone)}
              helperText={touched.phone && errors.phone}
            />
            <TextField
              id="input-with-icon-textfield"
              label="Ngày sinh"
              name="birthday"
              value={values.birthday}
              onChange={handleChange}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start"></InputAdornment>
                ),
              }}
              type="date"
              fullWidth
              variant="standard"
            />
           <CheckboxList/>
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
