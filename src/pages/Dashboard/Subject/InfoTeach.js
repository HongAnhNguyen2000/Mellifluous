<<<<<<< HEAD
import React, { useState } from "react";
=======
import React, { useEffect, useState } from "react";
>>>>>>> master
import {
  Grid,
  Card,
  CardContent,
  MenuItem,
  InputLabel,
  Select,
  Button,
  CardHeader,
  FormControl,
<<<<<<< HEAD
  ListItemText,
  MenuList,
  TextField
} from "@mui/material";
import { useDispatch } from "react-redux";
import { regisAdd, loadRegis } from "../../../redux/_api/api";
=======

} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { regisAdd, loadRegis, loadSubjects } from "../../../redux/_api/api";
>>>>>>> master
import { Formik, Form } from "formik";

//Data
const initialValues = {
  occupation: "",
  credits : '',
};



const InfoTeach = ({subjects}) => {

  let dispatch = useDispatch()
  

  // const [option,setOption] = useState(subjects);

  // console.log(option)
  const onSubmit = (values) => {
    console.log(values);
    const setValues = subjects.find(v=>v.mamon === values.occupation);
    // const optional = subjects.filter(item => item !== setValues);
    values.credits = setValues.sotinchi;
    // setOption(optional);
    dispatch(regisAdd('20187210', values.occupation ));
    dispatch(loadRegis());
    
  };

  return (
    <Grid container justifyContent="center" spacing={1}>
      <Grid item md={12}>
        <Card
          sx={{ borderBlockColor: "red" }}
        >
          <CardHeader
            title="REGISTER FORM"
            sx={{ color: "white", bgcolor: "#24686e" }}
          ></CardHeader>
          <Formik onSubmit={onSubmit} initialValues={initialValues}>
            {({ dirty, isValid, values, handleChange, handleBlur }) => {
              return (
                <Form>
                  <CardContent>
                    <Grid item container spacing={1} justifyContent="center">
                      <Grid item xs={12} sm={6} md={12}>
                        <FormControl fullWidth variant="outlined">
                          <InputLabel id="demo-simple-select-outlined-label">
                            Subject
                          </InputLabel>
                          <Select
                            labelId="demo-simple-select-outlined-label"
                            id="demo-simple-select-outlined"
                            label="Subject"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.occupation}
                            name="occupation"
                          >
                            <MenuItem>None</MenuItem>
                            {subjects.map((item) => (
                              
                              <MenuItem key={item.id} value={item.mamon}>
                                {item.name}
                                
                              </MenuItem>
                             
                              
                              
                            ))}
                          </Select>
                          
                        </FormControl>
                        <Button
                          disabled={!dirty || !isValid}
                          variant="contained"
                          color="success"
                          type="Submit"
                          sx={{ marginTop: 2 }}
                        >
                          REGISTER
                        </Button>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Form>
              );
            }}
          </Formik>
        </Card>
      </Grid>
    </Grid>
  );
};

export default InfoTeach;
