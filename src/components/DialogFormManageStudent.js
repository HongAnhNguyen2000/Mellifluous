import React, { useEffect, useState } from "react";
import {
  FormLabel,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField
} from "@mui/material";
import * as Yup from "yup";
import { useFormik, Form, FormikProvider } from "formik";

import { useDispatch, useSelector } from "react-redux";
import { updateStudent, addStudent } from "../redux/_api/api";

const DialogFormManageStudent = ({ open, setOpen, info, addMode }) => {
  let dispatch = useDispatch();

  const [value, setValue] = useState("Học");
  

  const InfoSchema = Yup.object().shape({
    maSV: Yup.string().required(),
    name: Yup.string().required(),
    gender: Yup.string().required(),
    khoahoc: Yup.number().required(),
    className: Yup.string().required(),
    email: Yup.string().email().required(),
    namvaotruong: Yup.string().required()
  });

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      maSV: "",
      name: "",
      gender: "",
      khoahoc: '',
      className: "",
      email: "",
      namvaotruong: "",
      nganh: "Công nghệ thông tin"
    },

    validationSchema: InfoSchema,
    onSubmit: (values) => {
      console.log(values)
      dispatch(
       
        addMode ? addStudent(values) : updateStudent({ ...info, isLearning: value }, info.id)
      );
      setOpen(false);
    },
  });

  const { errors, touched, handleSubmit, handleChange, values } = formik;

  return (
    <FormikProvider value={formik}>
      <Dialog open={open}>
        <Form onSubmit={handleSubmit}>
          <DialogTitle>Cập nhật trạng thái môn học</DialogTitle>

          {addMode ? (
            <DialogContent>
              <TextField
                margin="normal"
                label="Mã SV"
                name="maSV"
                value={values.maSV}
                onChange={handleChange}
                fullWidth
                variant="outlined"
                error={Boolean(touched.maSV && errors.maSV)}
                helperText={touched.maSV && errors.maSV}
                InputLabelProps={{ shrink: true }}
              />
              <TextField
                margin="normal"
                label="Tên SV"
                name="name"
                value={values.name}
                onChange={handleChange}
                fullWidth
                variant="outlined"
                error={Boolean(touched.name && errors.name)}
                helperText={touched.name && errors.name}
                InputLabelProps={{ shrink: true }}
              />
              <FormControl>
                <FormLabel id="demo-radio-buttons-group-label">
                  Giới tính
                </FormLabel>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  value={values.gender}
                  name="gender"
                  onChange={handleChange}
                >
                  <FormControlLabel value="Nữ" name="gender" control={<Radio />} label="Nữ" />
                  <FormControlLabel
                    value="Nam"
                    name="gender"
                    control={<Radio />}
                    label="Nam"
                  />
                </RadioGroup>
              </FormControl>
              <TextField
                margin="normal"
                label="Khóa học"
                name="khoahoc"
                
                value={values.khoahoc}
                onChange={handleChange}
                fullWidth
                variant="outlined"
                error={Boolean(touched.khoahoc && errors.khoahoc)}
                helperText={touched.khoahoc && errors.khoahoc}
                InputLabelProps={{ shrink: true }}
              />

              <TextField
                margin="normal"
                label="Lớp học"
                name="className"
                value={values.className}
                onChange={handleChange}
                fullWidth
                variant="outlined"
                error={Boolean(touched.className && errors.className)}
                helperText={touched.className && errors.className}
                InputLabelProps={{ shrink: true }}
              />

              <TextField
                margin="normal"
                label="Năm vào trường"
                name="namvaotruong"
                
                min="2010"
                max="2022"
                value={values.namvaotruong}
                onChange={handleChange}
                fullWidth
                variant="outlined"
                error={Boolean(touched.namvaotruong && errors.namvaotruong)}
                helperText={touched.namvaotruong && errors.namvaotruong}
                InputLabelProps={{ shrink: true }}
              />
              <TextField
                margin="normal"
                label="Email"
                name="email"
                type="email"
                value={values.email}
                onChange={handleChange}
                fullWidth
                variant="outlined"
                error={Boolean(touched.email && errors.email)}
                helperText={touched.email && errors.email}
                InputLabelProps={{ shrink: true }}
              />
            </DialogContent>
          ) : (
            <DialogContent>
              <FormControl>
                <FormLabel id="demo-radio-buttons-group-label">
                  Trạng thái
                </FormLabel>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  value={values.isLearning}
                  name="radio-buttons-group"
                  onChange={(e) => setValue(e.target.value)}
                >
                  <FormControlLabel
                    value="Học"
                    control={<Radio />}
                    label="Học"
                  />
                  <FormControlLabel
                    value="Nghỉ học"
                    control={<Radio />}
                    label="Nghỉ học"
                  />
                  <FormControlLabel
                    value="Bảo lưu"
                    control={<Radio />}
                    label="Bảo lưu"
                  />
                </RadioGroup>
              </FormControl>
            </DialogContent>
          )}

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

export default DialogFormManageStudent;


