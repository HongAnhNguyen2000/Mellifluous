import React, { useState } from "react";
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
  ListItemText,
  MenuList,
  TextField
} from "@mui/material";
import { useDispatch } from "react-redux";
import { regisAdd, loadRegis } from "../../../redux/_api/api";
import { Formik, Form } from "formik";

//Data
const initialValues = {
  occupation: "",
  credits : '',
};

const options =[
  {id:1, label: "AB10-Toán cao cấp", value: "AB10", credits: 3},
  {id:2, label: "IT20-ProjectII", value: "IT20", credits: 4 },
  {id:3, label: "IT30-ProjectIII", value: "IT30", credits: 4 },
  {id:4, label: "GT10-Giải tích 1", value: "GT10", credits:5 },
  {id:5, label: "GT20-Giải tích 2", value: "GT20", credits: 5 },
  {id:6, label: "GT21-Giải tích 2", value: "GT21", credits: 5 },
  {id:7, label: "IT7-Hệ phân tán", value: "IT7", credits: 2 },
  {id:8, label: "IT8-Cấu trúc dữ liệu và giải thuật", value: "IT8", credits: 3 },
];

const InfoTeach = () => {
  const [option,setOption] = useState(options);
  let dispatch = useDispatch();

  const onSubmit = (values) => {
    const setValues = option.find(v=>v.value === values.occupation);
    const optional = option.filter(item => item !== setValues);
    values.credits = setValues.credits;
    setOption(optional);
    dispatch(regisAdd(values));
    dispatch(loadRegis());
    
  };

  return (
    <Grid container justifyContent="center" spacing={1}>
      <Grid item md={12}>
        <Card
          // justifyContent="center"
          // alignItems="center"
          // textAlign="center"
          sx={{ borderBlockColor: "red" }}
        >
          <CardHeader
            title="REGISTER FORM"
            sx={{ color: "white", bgcolor: "#9e1010" }}
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
                            {option.map((item) => (
                              
                              <MenuItem key={item.value} value={item.value}>
                                {item.label}
                                
                              </MenuItem>
                             
                              
                              
                            ))}
                          </Select>
                          
                        </FormControl>
                        <Button
                          disabled={!dirty || !isValid}
                          variant="contained"
                          color="error"
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
