import { ThemeProvider } from "@mui/private-theming";
import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  tableCellClasses,
  TableContainer,
  TableHead,
  TableRow,
  CssBaseline,
  Toolbar,
  Container,
  Box,
  Button,
  IconButton,
  Icon,
  Typography,
  Stack,
} from "@mui/material";
import { useSnackbar } from "notistack";

import { styled } from "@mui/material/styles";
import { useDispatch, useSelector } from "react-redux";
import { loadSubjects, deleteSub, getSub } from "../../redux/_api/api";
import DashboardContent from "./Dashboard";
import DialogFormSubject from "../../components/DialogFormSubject";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#2a4d5d",
    color: theme.palette.common.white,
    fontSize:16,
    fontWeight: 700
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const ContainerManageSubject = () => {
  let dispatch = useDispatch();

  const { subjects } = useSelector((state) => state.subject);
  const {subject} = useSelector((state) => state.subject);

  const [addMode, setAddMode] = useState(false);
  const [open, setOpen] = useState(false);

  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
 
 console.log(subject)

  const deleteSubject = (id) => {
    dispatch(deleteSub(id));

    enqueueSnackbar("DELETE SUCCESS", {
      variant: "success",
      action: (key) => (
        <IconButton
          size="small"
          onClick={() => {
            closeSnackbar(key);
          }}
        >
          x
        </IconButton>
      )

    });
    
  };

  const handleUpdateSubject = (id) => {
    setOpen(true);
    if(id!= null) {dispatch(getSub(id))}
    setAddMode(false)
  }

  const handleAddNewSubject = () => {
    setOpen(true);
   setAddMode(true);
  }

  useEffect(() => {
    dispatch(loadSubjects());
  }, []);

  console.log(subjects)

  return (
    <ThemeProvider >
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <DashboardContent selectedItem='4' />
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            height: "100vh",
            overflow: "auto",
            positionn: "relative",
          }}
        >
        
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Stack direction="column" spacing={2}>
              <Typography variant="h3" sx={{textAlign:"center", color: "#2a4d5d"}}>Quản lý môn học</Typography>
              <Button variant="contained" color="primary" sx={{ width: "200px", backgroundColor: '#f4b367', color: "black" }} onClick={() => {handleAddNewSubject()}}>
                
                +ADD SUBJECT
              </Button>
              <TableContainer sx={{ paddingLeft: "0px" }}>, 
                <Table
                  stickyHeader
                  aria-label="sticky table"
                  border={1}
                  style={{
                    borderWidth: "2px",
                    borderColor: "#aaaaaa",
                    borderStyle: "solid",
                  }}
                >
                  <TableHead>
                    <TableRow>
                      <StyledTableCell>Mã môn</StyledTableCell>
                      <StyledTableCell align="center">Tên môn</StyledTableCell>
                      <StyledTableCell align="center">
                        Số tín chỉ
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        Thời gian học
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        Giảng viên
                      </StyledTableCell>
                      <StyledTableCell />
                    </TableRow>
                  </TableHead>
                  {subjects &&
                    subjects.map((subject) => (
                      <TableBody sx={{ maxHeight: "300px" }} key={subject.id}>
                        <TableRow>
                         
                          <TableCell component="th" scope="row" align="center">
                            {subject.mamon}
                          </TableCell>
                          <TableCell align="center">{subject.name}</TableCell>
                          <TableCell align="center">
                            {subject.sotinchi}
                          </TableCell>
                          <TableCell align="center">{subject.time}</TableCell>
                          <TableCell align="center">
                            {subject.teacher}
                          </TableCell>
                          <TableCell>
                            <Stack
                              direction="row"
                              spacing={2}
                              alignItems="center"
                              justifyContent="center"
                            >
                              <Button variant="outlined" color="success" onClick={() => {handleUpdateSubject(subject.id)}}>
                                Edit
                                
                              </Button>
                             
                              <Button
                                variant="contained"
                                color="error"
                                onClick={() => deleteSubject(subject.id)}
                              >
                                Delete
                              </Button>
                            </Stack>
                          </TableCell>
                         
                        </TableRow>
                      </TableBody>
                    ))}
                </Table>
                
              </TableContainer>
              <DialogFormSubject open={open}  setOpen={setOpen} subject={(!addMode && subject )  ? subject : {}} />
            </Stack>
           
            
            
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default ContainerManageSubject;
