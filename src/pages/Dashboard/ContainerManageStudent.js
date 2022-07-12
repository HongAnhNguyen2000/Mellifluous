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
import { loadSubjects, deleteSub, getStudentById, getStudent } from "../../redux/_api/api";
import DashboardContent from "./Dashboard";

import DialogFormManageStudent from "../../components/DialogFormManageStudent";

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

const ContainerManageStudent = () => {
  let dispatch = useDispatch();

  const { infos } = useSelector((state) => state.info);
  const { info } = useSelector((state) => state.info);

  const [addMode, setAddMode] = useState(false);
  const [open, setOpen] = useState(false);

  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
 


  const handleUpdateStudent = (id) => {
    setOpen(true);
    dispatch(getStudentById(id));

  }

  const handleAddNewStudent = () => {
    setOpen(true);
   setAddMode(true);
  }

  useEffect(() => {
    dispatch(getStudent());
  }, []);

  return (
    <ThemeProvider >
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <DashboardContent selectedItem='5' />
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
              <Typography variant="h3" sx={{textAlign:"center", color: "#2a4d5d"}}>Quản lý sinh viên</Typography>
              <Button variant="contained"  sx={{ width: "200px" }} onClick={() => {handleAddNewStudent()}}>
                
                + THÊM SINH VIÊN
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
                      <StyledTableCell>Mã SV</StyledTableCell>
                      <StyledTableCell align="center">Tên SV</StyledTableCell>
                      <StyledTableCell align="center">
                        Giới tính
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        Khóa học
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        Lớp học
                      </StyledTableCell>

                      <StyledTableCell align="center">
                        Trạng thái
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        Email SV
                      </StyledTableCell>
                      <StyledTableCell />
                    </TableRow>
                  </TableHead>
                  {infos.length>0 &&
                    infos.map((item) => (
                      <TableBody sx={{ maxHeight: "300px" }} key={item.id}>
                        <TableRow>
                         
                          <TableCell component="th" scope="row" align="center">
                            {item.maSV}
                          </TableCell>
                          <TableCell align="center">{item.name}</TableCell>
                          <TableCell align="center">
                            {item.gender}
                          </TableCell>
                          
                          <TableCell align="center">
                            {item.khoahoc}
                          </TableCell>
                          <TableCell align="center">
                            {item.className}
                          </TableCell>

                          <TableCell align="center">
                            {item.isLearning}
                          </TableCell>
                          <TableCell align="center">
                            {item.email}
                          </TableCell>
                          <TableCell>
                            <Stack
                              direction="row"
                              spacing={2}
                              alignItems="center"
                              justifyContent="center"
                            >
                              <Button variant="outlined" color="success" onClick={() => {handleUpdateStudent(item.maSV)}}>
                                Sửa
                                
                              </Button>

                            </Stack>
                          </TableCell>
                         
                        </TableRow>
                      </TableBody>
                    ))}
                </Table>
                
              </TableContainer>
              <DialogFormManageStudent open={open} setOpen={setOpen} info={addMode ? {} : info} addMode={addMode} />
              {/* <DialogFormSubject open={open}  setOpen={setOpen} subject={addMode ? {} : subject} /> */}
            </Stack>
           
            
            
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default ContainerManageStudent;
